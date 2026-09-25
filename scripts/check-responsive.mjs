// Every page at phone, tablet and desktop widths: fails on sideways scroll, on a visible element
// that sticks out past the right edge of the screen, or on a masthead item pushed off screen.
//
//   PLAYWRIGHT_MODULE=<…>/playwright/index.mjs node scripts/check-responsive.mjs http://127.0.0.1:4321 [--widths 320,768]
//
// Pages come from the built sitemap (every indexed page in every language) plus the few that
// are not indexed. The sweep scrolls each page to the bottom first, so lazy content and
// scroll-driven layout are measured in their settled state.

import { readFile } from 'node:fs/promises';

const base = process.argv[2] ?? 'http://127.0.0.1:4321';
const flag = process.argv.indexOf('--widths');
const widths = flag > 0 ? process.argv[flag + 1].split(',').map(Number) : [320, 375, 768, 1024, 1440];
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');

const sitemap = await readFile(new URL('../dist/client/sitemap.xml', import.meta.url), 'utf8');
const paths = [...new Set([...sitemap.matchAll(/<loc>https:\/\/www\.outbrick\.site([^<]*)<\/loc>/g)].map((m) => m[1] || '/'))];
paths.push('/c/42?par=18', '/contact/thanks', '/does-not-exist');

const browser = await chromium.launch();
const failures = [];
for (const width of widths) {
  const context = await browser.newContext({ viewport: { width, height: width < 800 ? 844 : 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  for (const path of paths) {
    await page.goto(base + path, { waitUntil: 'domcontentloaded' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += innerHeight) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 20));
      }
      scrollTo(0, 0);
    });
    const problem = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const overflow = document.documentElement.scrollWidth - vw;
      const stickers = [];
      for (const el of document.querySelectorAll('body *')) {
        const style = getComputedStyle(el);
        if (style.visibility === 'hidden' || style.display === 'none' || style.position === 'fixed') continue;
        const box = el.getBoundingClientRect();
        if (box.width === 0 || box.height === 0) continue;
        if (box.right > vw + 2 || box.left < -2) {
          // Anything inside a clipping or scrolling ancestor is not visible past the edge.
          let clipped = false;
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            const s = getComputedStyle(p);
            if (/(hidden|clip|auto|scroll)/.test(s.overflowX)) {
              const pb = p.getBoundingClientRect();
              if (pb.right <= vw + 2 && pb.left >= -2) { clipped = true; break; }
            }
          }
          if (!clipped && !el.closest('[aria-hidden="true"]')) {
            stickers.push(`${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}` : ''} (${Math.round(box.left)}→${Math.round(box.right)})`);
          }
        }
        if (stickers.length > 3) break;
      }
      return { overflow, stickers };
    });
    if (problem.overflow > 1 || problem.stickers.length) {
      failures.push(`${width}px ${path}: ${problem.overflow > 1 ? `${problem.overflow}px sideways scroll; ` : ''}${problem.stickers.join(', ')}`);
    }
  }
  await context.close();
  console.log(`✓ ${width}px: ${paths.length} pages checked`);
}
await browser.close();
for (const f of failures) console.log(`✗ ${f}`);
console.log(failures.length ? `${failures.length} responsive problems` : `responsive: ${paths.length} pages × ${widths.length} widths clean`);
process.exit(failures.length ? 1 : 0);
