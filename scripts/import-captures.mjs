// Brings fresh captures from the game into the website at web sizes.
//
//   pnpm import:captures <folder>
//
// Put PNG screenshots in <folder> named after the site's slots below (for example
// `iphone-board.png`, `ipad-home.png`, `widgets.png`). Raw `simctl io screenshot` frames from
// the game repo's tools/make_store_shots.sh are ideal: the full screen, no store caption. Each
// file becomes a 1x and a 2x WebP in public/assets/screens/, plus the untouched PNG for the press
// kit. Files that match no slot are listed and skipped. Resizing runs through `npx sharp-cli`,
// so nothing is added to the site's dependencies (needs network the first time).
//
// The page markup already points at these file names, so replacing a capture needs no code
// change. `widgets.png` and `clear-card.png` are new slots: see docs/CAPTURES.md for where they
// go once they exist.

import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const slots = {
  // iPhone screens: shown at up to 360 CSS px wide.
  'iphone-board': 360,
  'iphone-board-shaped': 360,
  'iphone-home': 360,
  'iphone-collection': 360,
  'iphone-leaderboard': 360,
  'iphone-shop': 360,
  'clear-card': 360,
  // iPad screens: shown at up to 520 CSS px wide.
  'ipad-board': 520,
  'ipad-home': 520,
  'ipad-collection': 520,
  'ipad-pass': 520,
  // Wide captures.
  widgets: 700,
  'apple-watch': 200,
  'apple-tv': 700,
  mac: 700,
  'vision-pro': 700,
};

const dir = process.argv[2];
if (!dir || !existsSync(dir)) {
  console.error('Usage: pnpm import:captures <folder of PNG captures>');
  process.exit(2);
}

const out = new URL('../public/assets/screens/', import.meta.url).pathname;
const sharp = (input, output, width) =>
  execFileSync('npx', ['--yes', 'sharp-cli@5', '-i', input, '-o', output, '-f', 'webp', '-q', '80', 'resize', String(width), '--withoutEnlargement'], {
    stdio: 'inherit',
  });

let imported = 0;
for (const file of readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.png'))) {
  const name = basename(file, '.png').toLowerCase();
  const width = slots[name];
  if (!width) {
    console.log(`skip  ${file}  (no slot named "${name}")`);
    continue;
  }
  const input = join(dir, file);
  for (const scale of [1, 2]) sharp(input, join(out, `${name}-${width * scale}.webp`), width * scale);
  copyFileSync(input, join(out, `${name}.png`));
  console.log(`ok    ${file}  ->  ${name}-${width}.webp, ${name}-${width * 2}.webp, ${name}.png`);
  imported += 1;
}

console.log(`\n${imported} capture(s) imported into public/assets/screens/. Run \`pnpm build\` and check the pages.`);
console.log(`Slots: ${Object.keys(slots).join(', ')}`);
