// Draws the social cards for the "Share result" pages (three per board): public/share/board-<n>-<stars>.png,
// 1200×630, one per board (lib/board-levels.ts) and star count. Each card shows the board's
// name, its stars, the moves line, a drawing of the board's starting layout and a friend.
//
// This is an authoring tool, not part of the build: the PNGs are committed, so the site needs no
// image pipeline and the build gains no dependencies. Re-run it after changing a board or the
// wording in app/play/result/results.ts, then look at the images before committing them.
//
//   node --experimental-strip-types scripts/generate-share-images.mjs [--only=2-3] [--from=4]
//
// --from=N draws only boards N and up, e.g. the cards for boards just appended to lib/board-levels.ts.
//
// Needs Playwright with Chromium. It is imported from the global install by default; set
// PLAYWRIGHT_MODULE to point somewhere else. Fonts are the site's own self-hosted files in
// public/fonts, loaded over file://, so nothing is fetched from the network.
//
// Chromium's PNGs of this much gradient and glow land near 300 KB; link previews want them
// smaller, so each one is re-encoded to a 256-colour palette with Pillow (python3 -m pip
// install pillow), which brings it to roughly 100 KB with no visible banding. Without Pillow the
// full-colour PNG is kept and a warning printed.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/share');
const { boardLevels } = await import('../lib/board-levels.ts');
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? '/opt/node22/lib/node_modules/playwright/index.mjs');

const only = process.argv.find((a) => a.startsWith('--only='))?.slice(7);
const from = Number(process.argv.find((a) => a.startsWith('--from='))?.slice(7) ?? 1);
const file = (rel) => pathToFileURL(path.join(root, rel)).href;

const PALETTE = {
  red: { c: '#e2352f', lt: '#ff7a6b', dk: '#8e1c18', ink: '#7a1512' },
  yellow: { c: '#ffc53d', lt: '#ffe79a', dk: '#b8780a', ink: '#93600a' },
  teal: { c: '#26b9b0', lt: '#7fe9df', dk: '#117069', ink: '#0c5a54' },
  violet: { c: '#7b5cf0', lt: '#b09cff', dk: '#4a35b0', ink: '#3a2893' },
  blue: { c: '#3b8bf0', lt: '#8cc0ff', dk: '#1d4fa6', ink: '#173f87' },
  green: { c: '#3fc544', lt: '#93f38a', dk: '#1f7f2a', ink: '#176321' },
};

// The same colour-blind glyphs the playable board stamps on studs and gates.
const GLYPH = {
  red: '<path d="M12 20.4 4.3 12.9a4.8 4.8 0 0 1 6.8-6.8l.9.9.9-.9a4.8 4.8 0 0 1 6.8 6.8z"/>',
  yellow: '<path d="M12 4.2 20.6 19H3.4z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>',
  teal: '<circle cx="12" cy="12" r="7.4"/>',
  violet: '<path d="M12 2.8 21.2 12 12 21.2 2.8 12z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>',
  blue: '<rect x="5" y="5" width="14" height="14" rx="2"/>',
  green: '<path d="m12 2.6 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>',
};
const glyph = (color) => `<svg viewBox="0 0 24 24" fill="currentColor">${GLYPH[color]}</svg>`;
const STAR = '<path d="m12 2.4 2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.1l-5.9 3.2 1.3-6.5-4.9-4.6 6.6-.8z"/>';

// A friend per board: the tour's three in each board's lead colour, then the daily boards take
// turns through the whole cast.
const FRIEND = ['zippy', 'bloo', 'vio'];
const CAST = ['peach', 'sprout', 'poppy', 'bricko', 'moss', 'flurry', 'zippy', 'bloo', 'vio'];
const friendFor = (board) => FRIEND[board - 1] ?? CAST[(board - 1 - FRIEND.length) % CAST.length];
// The tour's cards say "Board 2 of 3"; a daily board's just "Board 12".
const boardLabel = (board) => (board <= FRIEND.length ? `Board ${board} of ${FRIEND.length}` : `Board ${board}`);

function boardSvgish(level) {
  const cell = level.cols === 5 ? 62 : 52;
  const gap = 4;
  const w = level.cols * cell;
  const h = level.rows * cell;
  const vars = (color) => {
    const p = PALETTE[color];
    return `--c:${p.c};--lt:${p.lt};--dk:${p.dk};--ink:${p.ink}`;
  };
  const gates = level.gates
    .map((g) => {
      const horizontal = g.side === 'top' || g.side === 'bottom';
      const len = g.span * cell - 10;
      const offset = g.start * cell + 5;
      const pos = horizontal
        ? `left:${offset}px;width:${len}px;${g.side}:-19px;height:14px`
        : `top:${offset}px;height:${len}px;${g.side}:-19px;width:14px`;
      return `<i class="gate" style="${vars(g.color)};${pos}">${glyph(g.color)}</i>`;
    })
    .join('');
  const bricks = level.bricks
    .map((b) => {
      const studs = Array.from({ length: b.w * b.h }, () => `<span class="stud">${glyph(b.color)}</span>`).join('');
      return `<div class="brick" style="${vars(b.color)};left:${b.x * cell + gap / 2}px;top:${b.y * cell + gap / 2}px;width:${b.w * cell - gap}px;height:${b.h * cell - gap}px;grid-template-columns:repeat(${b.w},1fr);grid-template-rows:repeat(${b.h},1fr)">${studs}</div>`;
    })
    .join('');
  const dots = [];
  for (let y = 0; y < level.rows; y++)
    for (let x = 0; x < level.cols; x++)
      dots.push(`<i class="dot" style="left:${x * cell + cell / 2}px;top:${y * cell + cell / 2}px"></i>`);
  return `<div class="tray"><div class="field" style="width:${w}px;height:${h}px">${dots.join('')}${gates}${bricks}</div></div>`;
}

function page(level, board, stars) {
  const movesLine =
    stars === 1
      ? `Cleared <span>·</span> target ${level.target}`
      : `${level.target} moves <span>·</span> target ${level.target}`;
  const verdict = stars === 3 ? 'No undo. Not one.' : stars === 2 ? 'Right on target.' : `Now try it in ${level.target}.`;
  const starRow = [0, 1, 2].map((i) => `<svg class="star${i < stars ? ' on' : ''}" viewBox="0 0 24 24">${STAR}</svg>`).join('');
  const course = ['#e2352f', '#ffc53d', '#26b9b0', '#7b5cf0', '#3b8bf0', '#3fc544']
    .map((c) => `<span style="background:${c}"></span>`)
    .join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: Fredoka; src: url('${file('public/fonts/fredoka-latin-wght.woff2')}') format('woff2'); font-weight: 300 700; }
@font-face { font-family: Figtree; src: url('${file('public/fonts/figtree-latin-wght.woff2')}') format('woff2'); font-weight: 300 900; }
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; }
body {
  position: relative;
  background:
    radial-gradient(ellipse 620px 480px at 290px 310px, #2c2286 0%, transparent 70%),
    #1a1350;
  font-family: Figtree, sans-serif;
  color: #fff6e0;
}
/* studs pattern, faint */
body::before {
  content: ''; position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.045) 0 7px, transparent 8px);
  background-size: 44px 44px; background-position: 22px 22px;
}
.course { position: absolute; left: 0; right: 0; bottom: 0; height: 22px; display: flex; gap: 4px; padding: 0 0 0 0; }
.course span { flex: 1; border-radius: 6px 6px 0 0; box-shadow: inset 0 4px 0 rgba(255,255,255,0.28); }
.left { position: absolute; left: 70px; top: 58px; width: 440px; height: 490px; display: grid; place-items: center; }
.tray {
  padding: 30px; border-radius: 34px;
  background: #251d6b;
  box-shadow: inset 0 3px 0 #3a2f94, 0 12px 0 #120d3a, 0 30px 50px rgba(5,2,24,0.55);
  transform: rotate(-3deg);
}
.field { position: relative; border-radius: 14px; background: #1a1350; box-shadow: inset 0 4px 0 rgba(0,0,0,0.25); }
.dot { position: absolute; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; background: #241c63; }
.gate {
  position: absolute; border-radius: 6px; background: var(--c); box-shadow: 0 0 0 3px #251d6b, 0 0 18px var(--c);
  display: grid; place-items: center; color: var(--ink);
}
.gate svg { position: absolute; width: 26px; height: 26px; padding: 4px; border-radius: 50%; background: var(--c); color: var(--ink); box-shadow: 0 0 0 3px #251d6b; }
.brick {
  position: absolute; display: grid; place-items: center; padding: 6px;
  border-radius: 12px;
  background: linear-gradient(180deg, var(--lt) 0 12%, var(--c) 12%);
  box-shadow: 0 6px 0 var(--dk), inset 0 -3px 0 rgba(0,0,0,0.08);
}
.stud {
  width: 34px; height: 34px; border-radius: 50%;
  background: radial-gradient(circle at 36% 30%, var(--lt) 0 22%, var(--c) 70%);
  box-shadow: 0 3px 0 var(--dk);
  display: grid; place-items: center; color: var(--ink);
}
.stud svg { width: 17px; height: 17px; opacity: 0.85; }
.right { position: absolute; left: 580px; top: 70px; width: 560px; }
.brand { display: flex; align-items: center; gap: 14px; font-family: Fredoka; font-weight: 600; font-size: 25px; letter-spacing: 0.01em; }
.brand img { width: 46px; height: 46px; border-radius: 12px; box-shadow: 0 4px 0 #0d0930; }
.brand small { font-family: Figtree; font-weight: 800; font-size: 17px; letter-spacing: 0.14em; text-transform: uppercase; color: #ffc53d; margin-left: 6px; }
h1 { margin-top: 34px; font-family: Fredoka; font-weight: 600; font-size: 92px; line-height: 0.95; letter-spacing: -0.02em; color: #fff6e0; text-shadow: 0 5px 0 rgba(8,4,36,0.6); }
.stars { display: flex; gap: 14px; margin-top: 30px; }
.star { width: 96px; height: 96px; fill: #2f2696; stroke: #4a3fb8; stroke-width: 1.1; stroke-linejoin: round; filter: drop-shadow(0 6px 0 #120d3a); }
.star:nth-child(2) { transform: translateY(-12px); }
.star.on { fill: #ffc53d; stroke: #b8780a; filter: drop-shadow(0 6px 0 #b8780a) drop-shadow(0 0 22px rgba(255,197,61,0.35)); }
.line { margin-top: 26px; font-family: Fredoka; font-weight: 500; font-size: 40px; color: #fff6e0; font-variant-numeric: tabular-nums; }
.line span { color: #7d73c9; margin: 0 6px; }
.verdict { margin-top: 8px; font-size: 24px; font-weight: 700; color: #cbc4ff; }
.friend { position: absolute; right: 26px; bottom: 6px; width: 212px; height: 212px; filter: drop-shadow(0 14px 18px rgba(5,2,24,0.5)); }
.play { position: absolute; left: 580px; bottom: 60px; display: inline-flex; align-items: center; gap: 10px; padding: 12px 22px 12px 20px; border-radius: 16px; background: #fff6e0; color: #1a1350; font-family: Fredoka; font-weight: 600; font-size: 24px; box-shadow: 0 6px 0 #d8c58f; }
.play b { color: #e2352f; }
</style></head><body>
<div class="left">${boardSvgish(level)}</div>
<div class="right">
  <div class="brand"><img src="${file('public/assets/icon/logo-96.webp')}" alt="">OutBrick <small>${boardLabel(board)}</small></div>
  <h1>${level.name}</h1>
  <div class="stars">${starRow}</div>
  <p class="line">${movesLine}</p>
  <p class="verdict">${verdict}</p>
</div>
<div class="play">Your turn <b>→</b> outbrick.site/${board <= FRIEND.length ? 'play' : 'daily'}</div>
<img class="friend" src="${file(`public/assets/friends/${friendFor(board)}.webp`)}" alt="">
<div class="course">${course}</div>
</body></html>`;
}

const QUANTIZE = `
import sys
from PIL import Image
path = sys.argv[1]
img = Image.open(path).convert('RGB')
img.quantize(colors=256, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG).save(path, optimize=True)
`;

function quantize(png) {
  try {
    execFileSync('python3', ['-c', QUANTIZE, png], { stdio: ['ignore', 'ignore', 'pipe'] });
  } catch (err) {
    console.warn(`[share-images] kept full colour for ${path.basename(png)}: ${String(err.stderr || err.message).trim().split('\n').pop()}`);
  }
}

fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const tab = await ctx.newPage();
const tmp = path.join(outDir, '.card.html');
for (const [i, level] of boardLevels.entries()) {
  for (const stars of [1, 2, 3]) {
    const id = `${i + 1}-${stars}`;
    if ((only && only !== id) || i + 1 < from) continue;
    fs.writeFileSync(tmp, page(level, i + 1, stars));
    await tab.goto(pathToFileURL(tmp).href);
    await tab.evaluate(() => document.fonts.ready);
    const out = path.join(outDir, `board-${id}.png`);
    await tab.screenshot({ path: out, type: 'png' });
    quantize(out);
    console.log(`${path.relative(root, out)}  ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
  }
}
fs.rmSync(tmp);
await browser.close();
