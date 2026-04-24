// Copies the portions of the design-system bundle that need to be served as
// static HTML (preview cards, kiosk demo) into app/public/ds/ so the Next.js
// dev server and the production build can both serve them.
//
// The bundle remains the source of truth; this is a one-way copy.

import { cp, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, '..');
const dsProject = path.resolve(appRoot, '../kova-design-system/project');
const out = path.join(appRoot, 'public/ds');

const COPY = [
  ['colors_and_type.css', 'colors_and_type.css'],
  ['preview', 'preview'],
  ['assets', 'assets'],
  ['ui_kits/kiosk/demo.html', 'kiosk-demo.html'],
  ['ui_kits/kiosk/kiosk.css', 'kiosk.css'],
  ['ui_kits/marketing/site.css', 'site.css'],
];

async function ensureSrc(p) {
  try { await stat(p); return true; } catch { return false; }
}

await rm(out, { recursive: true, force: true });

for (const [src, dst] of COPY) {
  const from = path.join(dsProject, src);
  const to = path.join(out, dst);
  if (!(await ensureSrc(from))) {
    console.warn(`[sync-ds] skip missing ${src}`);
    continue;
  }
  await cp(from, to, { recursive: true });
  console.log(`[sync-ds] ${src} -> public/ds/${dst}`);
}
