// Runs axe-core (WCAG 2.1 A/AA + best practice) over every page in dist/client/sitemap.xml,
// at desktop and phone widths, and fails on any violation. It also fails on a console error,
// an uncaught page error, or a page wider than the viewport (sideways scroll).
//
// Playwright and axe-core are not dependencies of the site. CI installs them in a separate
// folder and passes their paths (see .github/workflows/checks.yml):
//   PLAYWRIGHT_MODULE=<…>/playwright/index.mjs AXE_PATH=<…>/axe-core/axe.min.js
//   node scripts/serve-dist.mjs 4321 &   node scripts/audit-a11y.mjs http://127.0.0.1:4321

import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

const base = process.argv[2] ?? 'http://127.0.0.1:4321';
const require = createRequire(import.meta.url);
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const axePath = process.env.AXE_PATH ?? require.resolve('axe-core/axe.min.js');

const sitemap = await readFile(new URL('../dist/client/sitemap.xml', import.meta.url), 'utf8');
const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.outbrick\.site([^<]*)<\/loc>/g)].map((m) => m[1] || '/');
for (const prefix of ['', '/fr', '/de', '/es', '/ja']) {
  for (let board = 1; board <= 17; board += 1) for (let stars = 1; stars <= 3; stars += 1) paths.push(`${prefix}/play/result/${board}-${stars}`);
}
for (const prefix of ['', '/fr', '/de', '/es', '/ja']) paths.push(`${prefix}/c?lv=42`, `${prefix}/contact/thanks`, `${prefix}/affiliates/thanks`, `${prefix}/careers/thanks`, `${prefix}/newsletter/thanks`, `${prefix}/404`);
const shardIndex = Number(process.env.AUDIT_SHARD_INDEX ?? 0);
const shardCount = Number(process.env.AUDIT_SHARD_COUNT ?? 1);
if (!Number.isInteger(shardIndex) || !Number.isInteger(shardCount) || shardCount < 1 || shardIndex < 0 || shardIndex >= shardCount) throw new Error('Invalid audit shard');
const shardPaths = [...new Set(paths)].filter((_, index) => index % shardCount === shardIndex);

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
let failures = 0;

for (const [width, height] of [
  [1440, 900],
  [390, 844],
]) {
  const context = await browser.newContext({ viewport: { width, height } });
  for (const path of shardPaths) {
    const page = await context.newPage();
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(base + path, { waitUntil: 'networkidle' });
    // Scroll through so reveal-on-scroll elements reach their final, visible state.
    let settledBottom = 0;
    let lastHeight = 0;
    for (let step = 0; step < 240; step += 1) {
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(25);
      const position = await page.evaluate(() => ({ top: scrollY, height: document.documentElement.scrollHeight, viewport: innerHeight }));
      settledBottom = position.top + position.viewport >= position.height - 2 && position.height === lastHeight ? settledBottom + 1 : 0;
      lastHeight = position.height;
      if (settledBottom >= 2) break;
      if (step === 239) throw new Error(`Scroll did not reach the bottom: ${path}`);
    }
    await page.waitForTimeout(700);
    await page.addScriptTag({ path: axePath });
    const result = await page.evaluate(async () => {
      const { violations } = await window.axe.run(document, {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
      });
      const overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
      return { violations: violations.map((v) => `${v.impact} ${v.id} ×${v.nodes.length} (${v.nodes[0]?.target})`), overflow };
    });
    const problems = [...result.violations, ...errors.map((e) => `console: ${e}`)];
    if (result.overflow > 1) problems.push(`page is ${result.overflow}px wider than the viewport`);
    if (problems.length) {
      failures += 1;
      console.log(`✗ ${width}px ${path}\n    ${problems.join('\n    ')}`);
    }
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(`${shardPaths.length} pages (shard ${shardIndex + 1}/${shardCount}) × 2 widths: ${failures ? `${failures} failing` : 'all clean'}`);
process.exit(failures ? 1 : 0);
