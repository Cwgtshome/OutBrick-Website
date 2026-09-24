// Writes the printable QR codes the press kit offers as downloads:
//
//   public/qr/outbrick-app-store.svg — the App Store listing (campaign web-qr-print)
//   public/qr/outbrick-website.svg   — https://www.outbrick.site
//
// Runs as part of `pnpm build` (see package.json) and the outputs are committed, so the files
// are also there for anyone browsing the repository. The output is deterministic: a rebuild
// with nothing changed leaves the files untouched.
//
//   node --experimental-strip-types scripts/generate-qr.mjs
//
// The drawing is lib/qr.ts's `brick` style (rounded modules, stud finders), indigo on cream.
// It was decode-tested at 140 and 300 px; print it at 2 cm or larger.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const { qrSvgDocument } = await import('../lib/qr.ts');
const { siteUrl } = await import('../lib/site.ts');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/qr');

// Same address as appStoreUrl('qr-print') in app/store-badge.tsx. A .mjs script cannot import
// TSX, so the app id and provider token are read out of that file's source instead of copied.
const badgeSource = fs.readFileSync(path.join(root, 'app/store-badge.tsx'), 'utf8');
const APP_STORE_ID = badgeSource.match(/APP_STORE_ID = '(\d+)'/)?.[1];
const APP_STORE_PROVIDER_TOKEN = badgeSource.match(/APP_STORE_PROVIDER_TOKEN = '([^']*)'/)?.[1] ?? '';
if (!APP_STORE_ID) throw new Error('[qr] could not read APP_STORE_ID from app/store-badge.tsx');
const APP_STORE_URL = `https://apps.apple.com/us/app/outbrick/id${APP_STORE_ID}`;
const params = new URLSearchParams({ mt: '8', ct: 'web-qr-print' });
if (APP_STORE_PROVIDER_TOKEN) params.set('pt', APP_STORE_PROVIDER_TOKEN);
const appStore = `${APP_STORE_URL}?${params.toString()}`;

const files = [
  { name: 'outbrick-app-store.svg', value: appStore, title: 'QR code: OutBrick on the App Store' },
  { name: 'outbrick-website.svg', value: siteUrl, title: 'QR code: www.outbrick.site' },
];

fs.mkdirSync(outDir, { recursive: true });
for (const file of files) {
  const svg = qrSvgDocument(file.value, { style: 'brick', size: 1024, title: file.title });
  const target = path.join(outDir, file.name);
  const changed = !fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== svg;
  if (changed) fs.writeFileSync(target, svg);
  console.log(`[qr] public/qr/${file.name} ${changed ? 'written' : 'unchanged'} -> ${file.value}`);
}
