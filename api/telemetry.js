const fs = require('fs');
const https = require('https');

const TMP_STORE_PATH = '/tmp/cfa_level2_active_users_telemetry.json';

// Server-side only configuration (can be overridden via Vercel Environment Variables)
const CLOUD_KV_BASE = (process.env.CLOUD_TELEMETRY_BUCKET_URL || 'https://kvdb.io/A6Xy9mPq2vR8kLw4nJt7bC/cfa_l2_active_users_v2').replace(/\/cfa_l2_active_users_v2\/?$/, '');
const CLOUD_KV_AGG_URL = CLOUD_KV_BASE + '/cfa_l2_active_users_v2';
const OWNER_NOTIFY_EMAIL = process.env.MASTER_OWNER_EMAIL || Buffer.from('YW5keWt3ZXNpYXNhbnRlQGdtYWlsLmNvbQ==', 'base64').toString('utf8');

function httpsRequestJson(urlStr, options = {}, bodyStr = null) {
  return new Promise((resolve) => {
    try {
      const u = new URL(urlStr);
      const defaultHeaders = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      };
      const reqOpts = {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: options.method || 'GET',
        headers: Object.assign(defaultHeaders, options.headers || {}),
        timeout: 4500
      };
      const req = https.request(reqOpts, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, status: res.statusCode, text: data }));
      });
      req.on('error', () => resolve({ ok: false, status: 0, text: '' }));
      req.on('timeout', () => { req.destroy(); resolve({ ok: false, status: 0, text: '' }); });
      if (bodyStr) req.write(bodyStr);
      req.end();
    } catch (e) {
      resolve({ ok: false, status: 0, text: '' });
    }
  });
}

function isCustomName(nameStr) {
  const c = String(nameStr || '').trim();
  if (!c || c === 'Candidate' || c === 'CFA Candidate' || c === 'Platform Admin') return false;
  if (c.startsWith('Guest Candidate #') || c.startsWith('Guest #') || c.startsWith('USR-')) return false;
  return true;
}

function hasRealEmail(emailStr) {
  const c = String(emailStr || '').trim().toLowerCase();
  if (!c || c === '—' || c === '-' || c === 'none') return false;
  if (c.startsWith('candidate_') || c.startsWith('instant-visitor-') || c.startsWith('guest_') || c.startsWith('usr-')) return false;
  if (c.endsWith('@cfastudyplan.vercel.app') || c.endsWith('@example.com')) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
}

function mergeRecords(existing, incoming) {
  const ex = existing || {};
  const inc = incoming || {};
  const vid = inc.visitorId || ex.visitorId || 'USR-0001';
  const shortCode = String(vid).split('-')[1] || '0001';
  const guestDefault = 'Guest Candidate #' + shortCode;

  const exEmail = hasRealEmail(ex.email) ? String(ex.email).trim().toLowerCase() : '';
  const incEmail = hasRealEmail(inc.email) ? String(inc.email).trim().toLowerCase() : '';
  const bestEmail = incEmail || exEmail || '';

  const exUser = isCustomName(ex.username) ? String(ex.username).trim() : (isCustomName(ex.name) ? String(ex.name).trim() : '');
  const incUser = isCustomName(inc.username) ? String(inc.username).trim() : (isCustomName(inc.name) ? String(inc.name).trim() : '');
  const bestUsername = incUser || exUser || '';

  const bestDisplayName = bestUsername || (bestEmail ? bestEmail.split('@')[0] : guestDefault);
  const bestAccessType = bestEmail ? 'email_registered' : (bestUsername ? 'username_only' : 'instant_anonymous');

  const exLast = String(ex.lastActive || '');
  const incLast = String(inc.lastActive || '');
  const newer = incLast >= exLast ? inc : ex;
  const older = incLast >= exLast ? ex : inc;

  return Object.assign({}, older, newer, {
    visitorId: vid,
    name: bestDisplayName,
    username: bestUsername,
    guestLabel: guestDefault,
    email: bestEmail || '—',
    accessType: bestAccessType,
    lessonsDone: Math.max(Number(ex.lessonsDone) || 0, Number(inc.lessonsDone) || 0),
    questionsAttempted: Math.max(Number(ex.questionsAttempted) || 0, Number(inc.questionsAttempted) || 0),
    studyHours: Math.max(Number(ex.studyHours) || 0, Number(inc.studyHours) || 0),
    activeMinutes: Math.max(Number(ex.activeMinutes) || 1, Number(inc.activeMinutes) || 1),
    totalVisits: Math.max(Number(ex.totalVisits) || 1, Number(inc.totalVisits) || 1),
    lastActive: (incLast >= exLast ? incLast : exLast) || new Date().toISOString(),
    serverUpdatedAt: new Date().toISOString()
  });
}

function loadStore() {
  if (!global.__CFA_ACTIVE_USERS_STORE) {
    global.__CFA_ACTIVE_USERS_STORE = {};
  }
  try {
    if (fs.existsSync(TMP_STORE_PATH)) {
      const raw = fs.readFileSync(TMP_STORE_PATH, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        Object.keys(parsed).forEach((k) => {
          global.__CFA_ACTIVE_USERS_STORE[k] = mergeRecords(global.__CFA_ACTIVE_USERS_STORE[k], parsed[k]);
        });
      }
    }
  } catch (e) {}
  return global.__CFA_ACTIVE_USERS_STORE;
}

function saveStore(store) {
  global.__CFA_ACTIVE_USERS_STORE = store;
  try {
    fs.writeFileSync(TMP_STORE_PATH, JSON.stringify(store), 'utf8');
  } catch (e) {}
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, max-age=0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = loadStore();

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const user = body.user || body;
      const notifyDaily = !!body.notifyDaily;

      if (user && user.visitorId) {
        const mergedEntry = mergeRecords(store[user.visitorId], user);
        store[user.visitorId] = mergedEntry;
        saveStore(store);

        // 1. Write atomic per-visitor key (`u_<visitorId>`) so concurrent visitors never overwrite each other
        try {
          await httpsRequestJson(
            CLOUD_KV_BASE + '/u_' + encodeURIComponent(user.visitorId),
            { method: 'POST', headers: { 'Content-Type': 'application/json' } },
            JSON.stringify(mergedEntry)
          );
        } catch (e) {}

        // 2. Safe read-merge-write to aggregate map (`cfa_l2_active_users_v2`) — never overwrites if GET fails
        try {
          const kvGet = await httpsRequestJson(CLOUD_KV_AGG_URL, { method: 'GET' });
          if (kvGet.ok || kvGet.status === 404) {
            let cloudMap = {};
            if (kvGet.ok && kvGet.text && kvGet.text.trim().startsWith('{')) {
              cloudMap = JSON.parse(kvGet.text);
            }
            Object.keys(store).forEach((vid) => {
              cloudMap[vid] = mergeRecords(cloudMap[vid], store[vid]);
            });
            cloudMap[user.visitorId] = mergeRecords(cloudMap[user.visitorId], mergedEntry);
            saveStore(cloudMap);
            await httpsRequestJson(
              CLOUD_KV_AGG_URL,
              { method: 'POST', headers: { 'Content-Type': 'application/json' } },
              JSON.stringify(cloudMap)
            );
          }
        } catch (e) {}

        // 3. Trigger daily owner notification server-side if requested
        if (notifyDaily && OWNER_NOTIFY_EMAIL) {
          try {
            const hasEmail = hasRealEmail(mergedEntry.email);
            const hasUsername = Boolean(mergedEntry.username);
            const modeLabel = hasEmail
              ? 'Email Linked'
              : (hasUsername ? `Username Provided (${mergedEntry.username}) • No Email` : 'Instant Open (No Email Provided)');
            const payload = JSON.stringify({
              _subject: `📊 ${hasEmail ? 'Active User' : (hasUsername ? '👤 Username Visitor' : '⚡ Instant-Open Visitor')}: ${mergedEntry.name} (${mergedEntry.visitorId})`,
              email: hasEmail ? mergedEntry.email : ('instant-visitor-' + String(mergedEntry.visitorId).toLowerCase() + '@cfastudyplan.vercel.app'),
              Access_Mode: modeLabel,
              Provided_Username: mergedEntry.username || 'Not provided (Guest Candidate)',
              Display_Name: mergedEntry.name,
              Candidate_Email: hasEmail ? mergedEntry.email : 'No Email (Instant Open User)',
              Unique_Visitor_ID: mergedEntry.visitorId,
              Device_and_Browser: `${mergedEntry.deviceInfo || ''} • ${mergedEntry.timezone || ''}`,
              Study_Schedule: `${mergedEntry.startDate || ''} to ${mergedEntry.endDate || ''} (${mergedEntry.weekdayHours || 2}h Wk / ${mergedEntry.weekendHours || 2}h Wknd)`,
              Live_Progress: `${mergedEntry.lessonsDone || 0} items done • ${mergedEntry.questionsAttempted || 0} Qs attempted • ${mergedEntry.studyHours || 0}h timer • ${mergedEntry.activeMinutes || 1}m active on site`,
              Latest_Activity: mergedEntry.lastAction || 'Active Session',
              Last_Active_Timestamp: mergedEntry.lastActive || new Date().toISOString(),
              _template: 'table'
            });
            await httpsRequestJson(
              'https://formsubmit.co/ajax/' + OWNER_NOTIFY_EMAIL,
              { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } },
              payload
            );
          } catch (e) {}
        }
      }
      return res.status(200).json({ ok: true, count: Object.keys(store).length });
    } catch (err) {
      return res.status(400).json({ ok: false, error: 'Invalid telemetry payload' });
    }
  }

  // GET: Fetch both bucket-wide atomic keys (`?values=true&format=json`) and aggregate map (`cfa_l2_active_users_v2`)
  try {
    const listGet = await httpsRequestJson(CLOUD_KV_BASE + '/?values=true&format=json', { method: 'GET' });
    if (listGet.ok && listGet.text) {
      const parsed = JSON.parse(listGet.text);
      const ingestVal = (val) => {
        if (!val) return;
        let obj = val;
        if (typeof val === 'string' && val.trim().startsWith('{')) {
          try { obj = JSON.parse(val); } catch (e) { return; }
        }
        if (obj && typeof obj === 'object') {
          if (obj.visitorId) {
            store[obj.visitorId] = mergeRecords(store[obj.visitorId], obj);
          } else {
            Object.values(obj).forEach((sub) => {
              if (sub && typeof sub === 'object' && sub.visitorId) {
                store[sub.visitorId] = mergeRecords(store[sub.visitorId], sub);
              }
            });
          }
        }
      };
      if (Array.isArray(parsed)) {
        parsed.forEach((item) => {
          if (Array.isArray(item) && item.length >= 2) ingestVal(item[1]);
          else if (item && typeof item === 'object') ingestVal(item.value !== undefined ? item.value : item);
        });
      } else if (typeof parsed === 'object') {
        Object.values(parsed).forEach(ingestVal);
      }
    }
  } catch (e) {}

  try {
    const kvGet = await httpsRequestJson(CLOUD_KV_AGG_URL, { method: 'GET' });
    if (kvGet.ok && kvGet.text && kvGet.text.trim().startsWith('{')) {
      const cloudMap = JSON.parse(kvGet.text);
      Object.values(cloudMap).forEach((u) => {
        if (u && u.visitorId) {
          store[u.visitorId] = mergeRecords(store[u.visitorId], u);
        }
      });
    }
  } catch (e) {}

  saveStore(store);
  const users = Object.values(store).sort((a, b) => String(b.lastActive || '').localeCompare(String(a.lastActive || '')));
  return res.status(200).json({ ok: true, count: users.length, users });
};
