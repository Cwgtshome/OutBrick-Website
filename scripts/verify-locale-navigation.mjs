import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractRenderedCopy, extractMetadataCopy, findCarryovers } from './lib/rendered-copy.mjs';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
const outDir = fileURLToPath(new URL('../outputs/', import.meta.url));
fs.mkdirSync(outDir, { recursive: true });
const base = process.argv[2] ?? 'http://127.0.0.1:4321';
const locales = ['en', 'fr', 'de', 'es', 'ja'];
const editorialLabels = {
  en: ['The game','Journal','Mascots','Press','About','Authors','Research','Support'],
  fr: ['Le jeu','Journal','Mascottes','Presse','À propos','Auteurs','Recherche','Assistance'],
  de: ['Das Spiel','Journal','Maskottchen','Presse','Über uns','Autoren','Forschung','Hilfe'],
  es: ['El juego','Revista','Mascotas','Prensa','Quiénes somos','Autores','Investigación','Soporte'],
  ja: ['ゲーム','記事','マスコット','プレス','OutBrickについて','著者','リサーチ','サポート'],
};
const breadcrumbLabels = { en: 'Breadcrumb', fr: 'Fil d’Ariane', de: 'Brotkrumennavigation', es: 'Ruta de navegación', ja: 'パンくずリスト' };
const editorialRoutes = ['/', '/blog', '/mascots', '/press', '/about', '/authors', '/research', '/support'];
const firstUndoRule = {
  fr:'Sur chaque plateau, la première annulation est gratuite et ne consomme pas votre réserve.',
  de:'Auf jedem Spielfeld ist das erste Rückgängigmachen kostenlos und wird nicht von deinem Vorrat abgezogen.',
  es:'En cada tablero, la primera acción de deshacer es gratuita y no consume tu reserva.',
  ja:'各盤面では最初の1回の「元に戻す」が無料で、ストックを消費しません。',
};
async function verifyChrome(page, locale) {
  if(locale !== 'en' && new URL(page.url()).pathname.match(/^\/(fr|de|es|ja)\/c(?:\/|$)/)) {
    const appCopy=await page.locator('.challenge .lede,.challenge .facts,.grid.g3 .card:nth-child(2) p').allTextContents();
    assert.ok(appCopy.join(' ').includes(firstUndoRule[locale]), `${locale}: first undo consumes no reserve`);
    assert.doesNotMatch(appCopy.join(' '), /sans limite|unbegrenzt|ilimitada|何度でも/);
  }
  for (const nav of await page.locator('header.site nav').all()) {
    const links = await nav.locator('a').evaluateAll(anchors => anchors.map(a => ({ href: new URL(a.href).pathname, label: a.textContent.trim() })));
    if (links.length === editorialRoutes.length && links.every((link, i) => link.href === localized(locale, editorialRoutes[i]))) {
      assert.deepEqual(links.map(link => link.label), editorialLabels[locale], `${locale}: shared editorial navigation labels`);
    }
  }
  for (const crumbs of await page.locator('nav.ed-crumbs').all()) {
    assert.equal(await crumbs.getAttribute('aria-label'), breadcrumbLabels[locale], `${locale}: breadcrumb accessible label`);
  }
}
const flagColours = { en: '#012169', fr: '#0055a4', de: '#dd0000', es: '#aa151b', ja: '#bc002d' };
function verifyFlags(links) {
  for (const link of links) assert.ok(link.flag.includes(flagColours[link.locale]), `Incorrect flag for ${link.locale}`);
}
const routes = ['/', '/blog', '/blog/designing-for-real-life-play', '/blog/category/inclusive-design', '/blog/tag/mobile-games', '/authors/mourad-hamdi', '/careers/content-marketing-lead', '/mascots', '/mascots/bloo', '/about', '/press', '/press/outbrick-4-2', '/press-kit', '/creators', '/whats-new', '/play/result/1-3', '/play/result/17-3', '/daily', '/c', '/c/42', '/privacy', '/contact/thanks', '/affiliates/thanks', '/careers/thanks', '/newsletter/thanks'];
const localized = (locale, route) => locale === 'en' ? route : `/${locale}${route === '/' ? '' : route}`;
const evidence = { base, matrix: [], clicks: [], internalNavigation: [], noScriptLanguages: [], notFound: [], editorialCurrent: [], errors: [] };
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
page.on('pageerror', error => evidence.errors.push(error.message));
page.on('console', message => { if (message.type() === 'error' && !message.text().includes('404 (Not Found)')) evidence.errors.push(message.text()); });
async function identity(locale, response, status = 200) {
  assert.equal(response.status(), status);
  assert.equal(await page.locator('html').getAttribute('lang'), locale);
  assert.ok((await page.locator('h1').first().innerText()).trim().length > 0);
}
async function languageLinks() {
  // Pointer synchronization must also preserve parameters changed after hydration.
  await page.locator('footer.site details.langs summary').click();
  const links = await page.locator('footer.site details.langs a[hreflang]').evaluateAll(anchors => anchors.map(anchor => ({ locale: anchor.hreflang, href: anchor.href, flag: anchor.querySelector('svg.flag')?.innerHTML ?? '' })));
  verifyFlags(links);
  return links;
}
try {
  // Every editorial current section must select the same masthead link in
  // server-rendered and hydrated desktop/mobile navigation. Press Kit shares Press.
  const currentSections = { about: '/about', authors: '/authors', research: '/research', blog: '/blog', mascots: '/mascots', press: '/press', 'press-kit': '/press' };
  for (const javaScriptEnabled of [false, true]) {
    const currentContext = await browser.newContext({ javaScriptEnabled });
    const currentPage = await currentContext.newPage();
    try {
      for (const locale of locales) for (const [section, destination] of Object.entries(currentSections)) {
        const response = await currentPage.goto(`${base}${localized(locale, `/${section}`)}`, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200);
        const navs = currentPage.locator('header.site nav');
        assert.equal(await navs.count(), 2, `${locale}/${section}: desktop and mobile navigation`);
        for (const nav of await navs.all()) {
          const active = nav.locator('a[aria-current="page"]');
          assert.equal(await active.count(), 1, `${locale}/${section}: exactly one current section`);
          assert.equal(await active.getAttribute('href'), localized(locale, destination), `${locale}/${section}: current destination`);
        }
        evidence.editorialCurrent.push({ locale, section, javaScriptEnabled, destination: localized(locale, destination), desktopAndMobile: true });
      }
    } finally { await currentContext.close(); }
  }
  for (const route of routes) {
    let englishCopy;
    for (const locale of locales) {
      const suffix = /^\/c(?:\/|$)/.test(route) ? (route === '/c' ? '?lv=42&par=8&beat=0#main' : '?par=8&beat=0#main') : '?navqa=1#main';
      const response = await page.goto(`${base}${localized(locale, route)}${suffix}`, { waitUntil: 'networkidle' });
      await identity(locale, response);
      await verifyChrome(page, locale);
      const html = await page.content();
      const renderedCopy = [...extractRenderedCopy(html, {localized:locale !== 'en'}), ...extractMetadataCopy(html)];
      if(locale === 'en') englishCopy = renderedCopy;
      else assert.deepEqual(findCarryovers(englishCopy, renderedCopy, locale), [], `${locale}${route}: hydrated English carryover`);
      const links = await languageLinks();
      assert.equal(links.length, 5);
      for (const target of locales) {
        const url = new URL(links.find(link => link.locale === target)?.href ?? '');
        assert.equal(url.pathname, localized(target, route));
        assert.equal(url.search, new URL(`${base}${suffix}`).search);
        assert.equal(url.hash, '#main');
      }
      evidence.matrix.push({ route, locale, targets: 5, queryHashPreserved: true });
    }
  }
  for (const [route, from, to] of [['/c', 'fr', 'de'], ['/c/42', 'de', 'ja'], ['/privacy', 'es', 'fr'], ['/blog/designing-for-real-life-play', 'ja', 'es']]) {
    const suffix = /^\/c(?:\/|$)/.test(route) ? (route === '/c' ? '?lv=42&par=8&beat=0#main' : '?par=8&beat=0#main') : '?navqa=1#main';
    const start = `${base}${localized(from, route)}${suffix}`;
    await page.goto(start, { waitUntil: 'networkidle' });
    await languageLinks();
    await page.locator(`footer.site details.langs a[hreflang="${to}"]`).click();
    await page.waitForLoadState('networkidle');
    assert.equal(page.url(), `${base}${localized(to, route)}${suffix}`);
    assert.equal(await page.locator('html').getAttribute('lang'), to);
    await page.goBack({ waitUntil: 'networkidle' });
    assert.equal(page.url(), start);
    assert.equal(await page.locator('html').getAttribute('lang'), from);
    evidence.clicks.push({ route, from, to, queryHashPreserved: true, back: 'passed' });
  }
  for (const locale of locales.slice(1)) {
    await page.goto(`${base}/${locale}/blog/designing-for-real-life-play`, { waitUntil: 'networkidle' });
    for (const kind of ['category', 'tag']) {
      const link = page.locator(`main a[href^="/${locale}/blog/${kind}/"]`).first();
      const href = await link.getAttribute('href');
      await link.click(); await page.waitForLoadState('networkidle');
      assert.equal(new URL(page.url()).pathname, href);
      assert.equal(await page.locator('html').getAttribute('lang'), locale);
      evidence.internalNavigation.push({ locale, kind, href });
      await page.goBack({ waitUntil: 'networkidle' });
    }
    for (const [kind, selector] of [['author', `main a[href^="/${locale}/authors/"]`], ['footer-help', `footer.site a[href="/${locale}/support"]`], ['header-journal', `header a[href="/${locale}/blog"]`]]) {
      await page.goto(`${base}/${locale}/blog/designing-for-real-life-play`, { waitUntil: 'networkidle' });
      const link = page.locator(selector).first();
      const href = await link.getAttribute('href');
      await link.click(); await page.waitForLoadState('networkidle');
      assert.equal(new URL(page.url()).pathname, href);
      assert.equal(await page.locator('html').getAttribute('lang'), locale);
      evidence.internalNavigation.push({ locale, kind, href });
    }
  }
  for (const locale of locales) {
    for (const route of ['/404', '/__locale_navigation_missing__']) {
      const response = await page.goto(`${base}${localized(locale, route)}`, { waitUntil: 'networkidle' });
      await identity(locale, response, route === '/404' ? 200 : 404);
      const robots = await page.locator('meta[name="robots"]').evaluateAll(tags => tags.map(tag => tag.content));
      assert.match(robots.join(', '), /noindex/);
      evidence.notFound.push({ locale, route, status: response.status(), robots, noindex: true });
    }
  }
  const noScript = await browser.newContext({ javaScriptEnabled: false });
  const plain = await noScript.newPage();
  for (const locale of locales) {
    for (const route of routes.filter(route => route !== '/c/42')) {
      const response = await plain.goto(`${base}${localized(locale, route)}`, { waitUntil: 'domcontentloaded' });
      assert.equal(response.status(), 200);
      await verifyChrome(plain, locale);
      const links = await plain.locator('footer.site details.langs a[hreflang]').evaluateAll(anchors => anchors.map(anchor => ({ locale: anchor.hreflang, href: anchor.href, flag: anchor.querySelector('svg.flag')?.innerHTML ?? '' })));
      verifyFlags(links);
      assert.equal(links.length, 5);
      for (const target of locales) assert.equal(new URL(links.find(link => link.locale === target)?.href ?? '').pathname, localized(target, route));
      evidence.noScriptLanguages.push({ locale, route, targets: 5 });
    }
  }
  await noScript.close();
  assert.deepEqual(evidence.errors, []);
  console.log(`PASS navigation: ${evidence.matrix.length} documents, ${evidence.matrix.length * 5} language destinations, ${evidence.clicks.length} real switches/back, ${evidence.internalNavigation.length} internal clicks, ${evidence.notFound.length} 404 checks, ${evidence.noScriptLanguages.length} no-script documents`);
} catch (error) {
  evidence.errors.push(String(error.stack ?? error)); console.error(error); process.exitCode = 1;
} finally {
  fs.writeFileSync(path.join(outDir, 'locale-navigation-qa.json'), JSON.stringify(evidence, null, 2));
  await browser.close();
}
