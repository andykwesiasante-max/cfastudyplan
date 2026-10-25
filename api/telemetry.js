const fs = require('fs');
const path = require('path');

const TMP_STORE_PATH = '/tmp/cfa_level2_active_users_telemetry.json';

function loadStore() {
  if (!global.__CFA_ACTIVE_USERS_STORE) {
    global.__CFA_ACTIVE_USERS_STORE = {};
  }
  try {
    if (fs.existsSync(TMP_STORE_PATH)) {
      const raw = fs.readFileSync(TMP_STORE_PATH, 'utf8');
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        global.__CFA_ACTIVE_USERS_STORE = Object.assign({}, parsed, global.__CFA_ACTIVE_USERS_STORE);
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

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const store = loadStore();

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const user = body.user || body;
      if (user && user.visitorId) {
        const existing = store[user.visitorId] || {};
        store[user.visitorId] = Object.assign({}, existing, user, {
          lessonsDone: Math.max(existing.lessonsDone || 0, user.lessonsDone || 0),
          questionsAttempted: Math.max(existing.questionsAttempted || 0, user.questionsAttempted || 0),
          activeMinutes: Math.max(existing.activeMinutes || 1, user.activeMinutes || 1),
          totalVisits: Math.max(existing.totalVisits || 1, user.totalVisits || 1),
          lastActive: user.lastActive || new Date().toISOString()
        });
        saveStore(store);
      }
      return res.status(200).json({ ok: true, count: Object.keys(store).length });
    } catch (e) {
      return res.status(400).json({ ok: false, error: String(e.message || e) });
    }
  }

  const users = Object.values(store).sort((a, b) =>
    String(b.lastActive || '').localeCompare(String(a.lastActive || ''))
  );
  return res.status(200).json({ ok: true, users });
};
