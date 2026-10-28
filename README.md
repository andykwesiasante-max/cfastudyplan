# CFA Level II Study Planner — Production Build & Deployment Package

## 1. Production Directory Structure
- `index.html` — Minified production HTML shell (`~151 KB`, 0 inline CSS/JS, 0 comments).
- `assets/styles.min.css` — Minified production stylesheet (`~39.7 KB`).
- `assets/app.min.js` — Terser-compressed & identifier-mangled production JavaScript bundle (`~328.7 KB`, wrapped in a private IIFE closure, 0 comments, 0 `.map` source maps).
- `api/telemetry.js` — Vercel Serverless Function handling active-user telemetry sync and daily owner notifications server-side so cloud bucket URLs and owner email addresses are never exposed in client-side source code or browser network requests.
- `sw.js` & `manifest.json` — Offline-first Progressive Web App (PWA) Service Worker and Web App Manifest caching `/index.html`, `/assets/styles.min.css`, and `/assets/app.min.js`.
- `vercel.json` — Hardened Vercel configuration that blocks public access to `/src/*`, `/build.js`, and `*.map` (`404`) and sets security and immutable asset caching headers.
- `src/` (`src/index.html`, `src/styles.css`, `src/app.js`) & `build.js` — Clean, readable authoring source files and build script (`npm run build` / `node build.js`).

## 2. Rebuilding After Future Edits
1. Edit the readable authoring files in `src/index.html`, `src/styles.css`, or `src/app.js`.
2. Run the production build:
   ```bash
   npm run build
   ```
3. Commit and push to your private GitHub repository connected to Vercel.

## 3. Optional Vercel Environment Variables
In your Vercel Project Settings -> **Environment Variables**, you can optionally set:
- `CLOUD_TELEMETRY_BUCKET_URL` — Your private KV telemetry endpoint URL.
- `MASTER_OWNER_EMAIL` — Your notification email address for daily active-visitor summaries.
*(Both already include built-in server-side defaults inside `api/telemetry.js` so deployment works out of the box).*
