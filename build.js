#!/usr/bin/env node
/**
 * Production Build Pipeline for CFA Level II Study Dashboard
 * - Minifies & mangles src/app.js -> assets/app.min.js (via Terser, no source maps)
 * - Minifies src/styles.css -> assets/styles.min.css
 * - Minifies src/index.html -> index.html (externalized assets, no inline JS/CSS)
 * - Also compiles single-file cfa_level2_study_dashboard.html for standalone offline/Canvas preview
 */
const fs = require('fs');
const path = require('path');

let Terser;
try {
  Terser = require('terser');
} catch (e) {
  Terser = require('/usr/share/nodejs/terser/dist/bundle.min.cjs');
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};:,>~+])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

function minifyHtml(html) {
  let out = html.replace(/<!--[\s\S]*?-->/g, '');
  out = out
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join('\n')
    .replace(/>\n+</g, '><')
    .replace(/\n+/g, ' ');
  return out.trim();
}

async function runBuild() {
  const rootDir = __dirname;
  const srcHtml = fs.readFileSync(path.join(rootDir, 'src/index.html'), 'utf8');
  const srcCss = fs.readFileSync(path.join(rootDir, 'src/styles.css'), 'utf8');
  const srcJs = fs.readFileSync(path.join(rootDir, 'src/app.js'), 'utf8');

  // 1. Minify CSS
  const minCss = minifyCss(srcCss);
  fs.mkdirSync(path.join(rootDir, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(rootDir, 'assets/styles.min.css'), minCss, 'utf8');

  // 2. Minify & Mangle JS with Terser (zero source maps, strip all comments)
  const terserResult = await Terser.minify(srcJs, {
    compress: {
      dead_code: true,
      drop_debugger: true,
      conditionals: true,
      evaluate: true,
      booleans: true,
      loops: true,
      unused: true,
      if_return: true,
      join_vars: true,
      passes: 2
    },
    mangle: {
      toplevel: false
    },
    format: {
      comments: false
    },
    sourceMap: false
  });

  if (!terserResult || !terserResult.code) {
    throw new Error('Terser minification failed');
  }
  const minJs = terserResult.code;
  fs.writeFileSync(path.join(rootDir, 'assets/app.min.js'), minJs, 'utf8');

  // Remove any accidental .map files in assets/ or root
  fs.readdirSync(path.join(rootDir, 'assets')).forEach((f) => {
    if (f.endsWith('.map')) fs.unlinkSync(path.join(rootDir, 'assets', f));
  });

  // 3. Minify HTML shell for multi-file production deployment (index.html)
  const minHtml = minifyHtml(srcHtml);
  fs.writeFileSync(path.join(rootDir, 'index.html'), minHtml, 'utf8');

  // 4. Also produce a minified single-file build (cfa_level2_study_dashboard.html) for standalone/Canvas preview
  // IMPORTANT: Use function replacement `() => ...` so `$&` in minified JS is never interpreted by String.prototype.replace!
  const singleFileHtml = minHtml
    .replace('<link rel="stylesheet" href="/assets/styles.min.css">', () => '<style>' + minCss + '</style>')
    .replace('<script src="/assets/app.min.js" defer></script>', () => '<script>' + minJs + '</script>');
  fs.writeFileSync(path.join(rootDir, 'cfa_level2_study_dashboard.html'), singleFileHtml, 'utf8');

  console.log('=== Production Build Complete ===');
  console.log('  index.html (Ctrl+U shell):', Buffer.byteLength(minHtml), 'bytes');
  console.log('  assets/styles.min.css    :', Buffer.byteLength(minCss), 'bytes');
  console.log('  assets/app.min.js        :', Buffer.byteLength(minJs), 'bytes');
  console.log('  Single-file Canvas build :', Buffer.byteLength(singleFileHtml), 'bytes');
}

runBuild().catch((err) => {
  console.error(err);
  process.exit(1);
});
