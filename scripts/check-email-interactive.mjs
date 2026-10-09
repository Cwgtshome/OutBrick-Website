// Checks the interactive email layer in WebKit (Apple Mail's engine) on an emulated iPhone: the
// header menu opens and closes in every reader email, the host cheers, the puzzle plays, the
// Gmail/Outlook fallback (inputs stripped) shows the answer and no dead buttons, dark mode holds.
//
//   pnpm emails:preview && node scripts/serve-dist.mjs …  (or any static server over outputs/)
//   PLAYWRIGHT_MODULE=<…>/playwright/index.mjs node scripts/check-email-interactive.mjs http://127.0.0.1:8765/email-previews outputs/email-previews
//
// Like smoke-browsers.mjs, Playwright is installed outside the project (npx playwright install webkit).
const { webkit, devices } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const base = process.argv[2] ?? 'http://127.0.0.1:8765/email-previews';
const dir = process.argv[3] ?? 'outputs/email-previews';
const shots = fs.mkdtempSync(path.join(os.tmpdir(), 'email-shots-')) + '/';
fs.mkdirSync(shots, { recursive: true });
const results = [];
const ok = (name, pass, detail = '') => results.push({ name, pass, detail });

const browser = await webkit.launch();
const ctx = await browser.newContext({ ...devices['iPhone 15'], colorScheme: 'light' });
const page = await ctx.newPage();

const height = (sel) => page.$eval(sel, (e) => Math.round(e.getBoundingClientRect().height));
const shown = (sel) => page.$eval(sel, (e) => getComputedStyle(e).display !== 'none' && e.getBoundingClientRect().height > 0);

// 1. Menu, host and puzzle in welcome 2.
await page.goto(`${base}/newsletter-welcome-2.en.html`);
await page.waitForTimeout(1500);
ok('burger visible on phone', await shown('.ob-burger'));
ok('menu folded on open', (await height('.ob-nav')) < 5, `${await height('.ob-nav')}px`);
await page.screenshot({ path: `${shots}1-closed.png` });
await page.tap('.ob-burger');
await page.waitForTimeout(600);
const open = await height('.ob-nav');
ok('menu opens on tap', open > 200, `${open}px`);
const links = await page.$$eval('.ob-nav a', (as) => as.filter((a) => a.getBoundingClientRect().height > 30).map((a) => a.textContent.trim()));
ok('five full-width links', links.length === 5, links.join(' | '));
await page.screenshot({ path: `${shots}2-open.png` });
await page.tap('.ob-burger');
await page.waitForTimeout(600);
ok('menu closes on second tap', (await height('.ob-nav')) < 5);
await page.tap('.ob-host');
await page.waitForTimeout(300);
ok('host cheers on tap (pose swaps)', await shown('.ob-f-alt'));
ok('puzzle options shown', await shown('.ob-pz-play'));
ok('fallback answer hidden in Apple Mail', !(await shown('.ob-pz-still')));
await page.tap('label[for^="ob-pz-red"]');
await page.waitForTimeout(500);
ok('wrong brick shows hint', await shown('.ob-pz-nope'));
await page.tap('label[for^="ob-pz-blue"]');
await page.waitForTimeout(2200);
ok('right brick: success panel', await shown('.ob-pz-yes'));
const blueGone = await page.$eval('.ob-pz-blue', (e) => getComputedStyle(e).opacity);
ok('blue brick left through its gate', blueGone === '0', `opacity ${blueGone}`);
await page.$eval('.ob-pz-yes', (e) => e.scrollIntoView({ block: 'center' }));
await page.screenshot({ path: `${shots}3-solved.png` });

// 2. Gmail/Outlook fallback: inputs stripped.
const html = await (await fetch(`${base}/newsletter-welcome-2.en.html`)).text();
await page.setContent(html.replace(/<input[^>]*>/g, ''), { waitUntil: 'load' });
await page.waitForTimeout(500);
ok('fallback: no burger', !(await shown('.ob-burger')));
ok('fallback: links as a row', (await height('.ob-nav')) > 20);
ok('fallback: answer shown', await shown('.ob-pz-still'));
ok('fallback: no dead puzzle buttons', !(await shown('.ob-pz-play')));

// 3. Dark mode.
const dark = await browser.newContext({ ...devices['iPhone 15'], colorScheme: 'dark' });
const dp = await dark.newPage();
await dp.goto(`${base}/newsletter-welcome-2.en.html`);
await dp.waitForTimeout(800);
const paper = await dp.$eval('.ob-paper', (e) => getComputedStyle(e).backgroundColor);
ok('dark mode paper is indigo', paper === 'rgb(34, 26, 98)', paper);
await dp.screenshot({ path: `${shots}4-dark.png` });

// 4. Every template: the menu toggles where it exists, team copies have none.
const names = [...new Set(fs.readdirSync(dir).filter((f) => f.endsWith('.en.html')).map((f) => f.replace('.en.html', '')))];
let toggled = 0;
const failures = [];
for (const n of names) {
  await page.goto(`${base}/${n}.en.html`);
  const has = await page.$('.ob-burger');
  if (n.startsWith('team-')) { if (has) failures.push(`${n}: team copy has a menu`); continue; }
  if (!has) { failures.push(`${n}: no menu`); continue; }
  await page.tap('.ob-burger');
  await page.waitForTimeout(450);
  if ((await height('.ob-nav')) > 200) toggled++; else failures.push(`${n}: menu did not open`);
}
ok(`menu opens in every reader email (${toggled})`, failures.length === 0, failures.join('; '));

await browser.close();
console.log(`screenshots: ${shots}`);
for (const r of results) console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `  (${r.detail})` : ''}`);
process.exit(results.every((r) => r.pass) ? 0 : 1);
