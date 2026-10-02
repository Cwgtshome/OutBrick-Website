const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? 'playwright');
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const outDir = fileURLToPath(new URL('../outputs/', import.meta.url));
fs.mkdirSync(outDir, { recursive: true });
const base = process.argv[2] ?? 'http://127.0.0.1:4321';
// The journal grows with each publication. Require the exact current English
// slug set rather than a stale article count, catching omissions and duplicates.
const englishIndex = JSON.parse(fs.readFileSync(new URL('../dist/client/journal-index.json', import.meta.url), 'utf8'));
const expectedSlugs = englishIndex.map(article => article.s).sort();
assert.ok(expectedSlugs.length > 0, 'The English journal index must not be empty');
assert.equal(new Set(expectedSlugs).size, expectedSlugs.length, 'English article slugs must be unique');
const browser = await chromium.launch({ headless: true });
const configs = [
 { locale:'fr', query:'accessibilité', minutes:/\d+ min de lecture/, loading:'Chargement…', failed:'La recherche n’a pas pu se charger. Tous les articles figurent dans les rubriques ci-dessous.', empty:'Essayez moins de mots ou parcourez une rubrique' },
 { locale:'de', query:'Rückgängig', minutes:/\d+ Min\. Lesezeit/, loading:'Wird geladen…', failed:'Die Suche konnte nicht geladen werden. Alle Artikel stehen in den Rubriken unten.', empty:'Versuchen Sie weniger Wörter oder öffnen Sie eine Rubrik' },
 { locale:'es', query:'cerebro', minutes:/\d+ min de lectura/, loading:'Cargando…', failed:'No se ha podido cargar la búsqueda. Todos los artículos están en las categorías de abajo.', empty:'Prueba con menos palabras o explora una categoría' },
 { locale:'ja', query:'パズル', minutes:/\d+分で読めます/, loading:'読み込み中…', failed:'検索を読み込めませんでした。すべての記事は下のカテゴリーにあります。', empty:'検索語を減らすか、カテゴリーから探してください。' },
];
const evidence = { base, data:'real production search index; loading/error fetches intercepted locally', locales:[], errors:[] };
async function identity(p,c) {
 assert.equal(await p.locator('html').getAttribute('lang'), c.locale);
 assert.match(p.url(),new RegExp(`/${c.locale}/blog`));
 assert.ok((await p.title()).length>3);
 assert.ok((await p.locator('h1').innerText()).trim().length>3);
 assert.equal(await p.locator('vite-error-overlay, nextjs-portal').count(),0);
}
try {
 for (const c of configs) {
  const context = await browser.newContext({viewport:{width:1440,height:1000}});
  const page = await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>m.type()==='error'&&errors.push(m.text()));
  await page.goto(`${base}/${c.locale}/blog`,{waitUntil:'networkidle',timeout:120000});
  await identity(page,c);
  const input=page.locator('input[role=combobox]');
  const indexResponse=page.waitForResponse(r=>r.url().endsWith(`/${c.locale}/journal-index.json`));
  await input.fill(c.query);
  const response=await indexResponse;
  assert.equal(response.status(),200);
  const index=await response.json();
  assert.deepEqual(index.map(article => article.s).sort(), expectedSlugs, `${c.locale} index must contain every English article exactly once`);
  await page.locator('[role=option]').first().waitFor();
  const hits=await page.locator('[role=option]').count();assert.ok(hits>0);
  const firstTitle=await page.locator('.ed-search-title').first().innerText();
  const firstMeta=await page.locator('.ed-search-meta').first().innerText();
  assert.match(firstMeta,c.minutes);
  await page.screenshot({path:path.join(outDir, `journal-${c.locale}-results.png`),fullPage:false});
  await page.locator('[role=option]').first().click();
  await page.waitForURL(new RegExp(`/${c.locale}/blog/[^/?]+`));
  await page.waitForLoadState('networkidle');
  assert.equal(await page.locator('html').getAttribute('lang'),c.locale);
  const articleUrl=page.url();
  assert.ok((await page.locator('h1').innerText()).includes(firstTitle));
  await page.goto(`${base}/${c.locale}/blog`,{waitUntil:'networkidle'});
  const category=page.locator('.ed-controls nav a').nth(1);
  const categoryHref=await category.getAttribute('href');
  await category.click();
  const slug=new URL(page.url()).searchParams.get('category');assert.ok(slug);
  const visible=await page.locator('[data-shelf]').evaluateAll(es=>es.filter(e=>!e.hidden).map(e=>e.dataset.shelf));
  assert.deepEqual(visible,[slug]);assert.ok(categoryHref.startsWith(`/${c.locale}/blog/category/`));
  await page.locator('.ed-sort button').nth(1).click();
  assert.equal(new URL(page.url()).searchParams.get('sort'),'shortest');
  await page.waitForFunction(()=>document.querySelector('.ed-sort button:last-child')?.getAttribute('aria-pressed')==='true');
  const mins=await page.locator(`[data-shelf="${slug}"] ol`).evaluate(e=>[...e.children].map(r=>Number(r.dataset.min)));
  assert.deepEqual(mins,[...mins].sort((a,b)=>a-b));
  const q=page.locator('input[role=combobox]');
  await q.fill('zzzz_no_possible_journal_match_9348');
  await page.locator('.ed-search-none').waitFor();
  assert.equal(await page.locator('[role=option]').count(),0);
  assert.ok((await page.locator('.ed-search-none').innerText()).includes(c.empty));
  await page.waitForFunction(() => document.querySelector('.ed-search output')?.textContent.trim().length > 0);
  const emptyAnnouncement=await page.locator('.ed-search output').innerText();assert.ok(emptyAnnouncement.length>0);
  if(c.locale==='ja') {
   await page.setViewportSize({width:390,height:844});
   await q.fill(c.query);await page.locator('[role=option]').first().waitFor();
   await page.screenshot({path:path.join(outDir, 'journal-ja-mobile-results.png'),fullPage:false});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  }
  assert.deepEqual(errors,[]);
  evidence.locales.push({locale:c.locale,query:c.query,indexEntries:index.length,hits,firstTitle,firstMeta,articleUrl,filter:slug,sortMinutes:mins,emptyAnnouncement,consoleErrors:errors});
  await context.close();
  // A fresh document/context keeps module-local index caching out of state checks.
  for(const state of ['loading','error']) {
   const context=await browser.newContext({viewport:{width:1440,height:900}});
   let release;
   const held=new Promise(resolve=>release=resolve);
   await context.route(`**/${c.locale}/journal-index.json`,async route=>{
    if(state==='loading'){await held;await route.continue();}
    else await route.fulfill({status:503,contentType:'application/json',body:'{"error":"intentional local QA"}'});
   });
   const p=await context.newPage();
   await p.goto(`${base}/${c.locale}/blog`,{waitUntil:'networkidle'});
   await p.locator('input[role=combobox]').fill(c.query);
   if(state==='loading') {
    await p.getByText(c.loading,{exact:true}).waitFor();release();
    await p.locator('[role=option]').first().waitFor();
   } else await p.getByText(c.failed,{exact:true}).waitFor();
   evidence.locales.at(-1)[state]='passed';await context.close();
  }
  console.log(`PASS ${c.locale}: ${hits} Unicode-query hits,${index.length} index entries, click/filter/sort/empty/loading/error`);
 }
} catch (error) { evidence.errors.push(String(error.stack??error));console.error(error);process.exitCode=1; }
finally { fs.writeFileSync(path.join(outDir, 'journal-unicode-qa.json'),JSON.stringify(evidence,null,2));await browser.close(); }
