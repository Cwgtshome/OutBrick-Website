// Cross-browser smoke test: key pages in WebKit (Safari's engine, desktop and iPhone) and
// Firefox (desktop and phone width). Fails on a console or page error, sideways scroll, a
// heading or paragraph left invisible after scrolling (a reveal that never ran), or the
// playable board on /play not clearing with three stars from real pointer input.
//
//   PLAYWRIGHT_MODULE=<…>/playwright/index.mjs node scripts/smoke-browsers.mjs http://127.0.0.1:4321
// (CI installs Playwright outside the project with `npx playwright install --with-deps webkit firefox`.)

const base = process.argv[2] ?? 'http://127.0.0.1:4321';
const { webkit, firefox, devices } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');

const paths = ['/', '/play', '/blog', '/blog/how-to-solve-sliding-block-puzzles', '/mascots', '/support', '/play/result/2-3'];
const targets = [
  ['webkit desktop', webkit, { viewport: { width: 1440, height: 900 } }],
  ['webkit iPhone', webkit, { ...devices['iPhone 15'] }],
  ['firefox desktop', firefox, { viewport: { width: 1440, height: 900 } }],
  ['firefox phone', firefox, { viewport: { width: 390, height: 844 } }],
];

let failures = 0;
const fail = (label, message) => {
  failures += 1;
  console.log(`✗ ${label}: ${message}`);
};

for (const [label, type, options] of targets) {
  const browser = await type.launch();
  const context = await browser.newContext(options);
  for (const path of paths) {
    const page = await context.newPage();
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(base + path, { waitUntil: 'load' });
    for (let i = 0; i < 30; i += 1) {
      await page.evaluate(() => window.scrollBy(0, 500));
      await page.waitForTimeout(40);
    }
    // Let reveals finish rather than sampling at a fixed moment: a staggered fade that has only
    // just started on a slow machine is not text that never appears. Endless idle loops (the
    // friends' bob, clouds) never finish, so only finite animations and transitions are awaited.
    await page.evaluate(() =>
      Promise.race([
        Promise.all(
          document
            .getAnimations()
            .filter((a) => Number.isFinite(a.effect?.getComputedTiming().endTime ?? Infinity))
            .map((a) => a.finished.catch(() => undefined)),
        ),
        new Promise((resolve) => setTimeout(resolve, 4000)),
      ]),
    );
    await page.waitForTimeout(150);
    const state = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      invisible: [...document.querySelectorAll('h1, h2, h3, p')]
        .filter((el) => {
          const box = el.getBoundingClientRect();
          return box.height > 0 && box.top < innerHeight * 0.9 && box.bottom > 0 && Number(getComputedStyle(el).opacity) < 0.1;
        })
        .map((el) => {
          // Say whether the reveal ever ran, which separates "slow" from "never revealed".
          const host = el.closest('[data-reveal]');
          const reveal = host ? ` reveal=${host.classList.contains('in') ? 'in' : 'never'}` : '';
          return `<${el.tagName.toLowerCase()} class="${el.className}"> "${(el.textContent ?? '').trim().slice(0, 40)}"${reveal}`;
        }),
    }));
    if (errors.length) fail(`${label} ${path}`, errors.join(' | '));
    if (state.overflow > 1) fail(`${label} ${path}`, `${state.overflow}px of sideways scroll`);
    if (state.invisible.length) fail(`${label} ${path}`, `text still invisible after scrolling: ${state.invisible.join('; ')}`);
    await page.close();
  }
  await context.close();

  // Play board 1 with real pointer input (touch shares the same pointer-event path).
  const page = await browser.newPage({ viewport: { width: label.includes('desktop') ? 1440 : 390, height: 844 } });
  await page.goto(`${base}/play`, { waitUntil: 'load' });
  const board = page.getByRole('region', { name: /OutBrick board/ }).first();
  await board.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  for (const [brick, dx, dy] of [
    ['Yellow', -60, 0],
    ['Blue', 0, 60],
    ['Red', 60, 0],
  ]) {
    const box = await board.locator(`[aria-label*="${brick}"]`).first().boundingBox();
    const x = box.x + box.width / 2;
    const y = box.y + box.height / 2;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + dx / 2, y + dy / 2, { steps: 4 });
    await page.mouse.move(x + dx, y + dy, { steps: 4 });
    await page.mouse.up();
    await page.waitForTimeout(900);
  }
  await page.waitForTimeout(1200);
  const text = await board.innerText();
  if (!/3 stars of 3/.test(text)) fail(`${label} /play`, 'board 1 did not clear with three stars');
  await browser.close();
  console.log(`✓ ${label} checked`);
}

console.log(failures ? `${failures} cross-browser failures` : 'cross-browser smoke: all clean');
process.exit(failures ? 1 : 0);
