// Seeds a regional variant's catalogs from one of the five hand-written translations, by walking
// each English copy object beside its translation: fr → fr-CA, es → es-419, pt-BR → pt-PT. The
// result is a draft for a translator to adapt to the region, never a finished translation.
// Keys already in the target files are kept.
//   node --experimental-strip-types --no-warnings --import ./scripts/i18n/register.mjs scripts/i18n/seed-from-legacy.mts fr fr-CA
import fs from 'node:fs';
import path from 'node:path';
import { isProse, machineKeys, registeredRecords, templateKey } from '../../lib/i18n/catalog.ts';
import { catalogAreas } from '../../lib/i18n/catalog-areas.ts';
import { catalogSources } from './sources.mts';

const [from, to] = process.argv.slice(2);
if (!from || !to) throw new Error('usage: seed-from-legacy.mts <fr|es|pt-BR|de|ja> <target>');
const root = path.resolve(import.meta.dirname, '../..');
const dir = path.join(root, 'lib/i18n/catalog');
const found = new Map<string, string>();
const norm = (t: string) => t.replace(/\s+/g, ' ').trim();

function align(en: unknown, other: unknown, key = '') {
  if (typeof en === 'string') {
    if (!machineKeys.has(key) && isProse(en) && typeof other === 'string' && other.trim()) { if (!found.has(norm(en))) found.set(norm(en), norm(other)); }
    return;
  }
  if (typeof en === 'function' && typeof other === 'function') {
    for (let arity = 0; arity <= 3; arity++) {
      const k = templateKey(en as (...a: never[]) => unknown, arity);
      const v = templateKey(other as (...a: never[]) => unknown, arity);
      if (k && v && !found.has(norm(k))) found.set(norm(k), v);
    }
    return;
  }
  if (Array.isArray(en) && Array.isArray(other)) { en.forEach((item, i) => align(item, other[i], key)); return; }
  if (en && other && typeof en === 'object' && typeof other === 'object') {
    for (const [k, v] of Object.entries(en as Record<string, unknown>)) align(v, (other as Record<string, unknown>)[k], k);
  }
}

await catalogSources();
for (const record of registeredRecords) {
  const written = record.written?.[from as 'fr'];
  if (!written) continue;
  if (record.name === 'byLocale') {
    // The Help Centre: articles by slug, sections by id, blocks in order.
    const enArticles = (record.english as { articles: { slug: string }[] }).articles;
    const otherArticles = new Map((written as { articles: { slug: string }[] }).articles.map((a) => [a.slug, a]));
    for (const article of enArticles) if (otherArticles.has(article.slug)) align(article, otherArticles.get(article.slug));
  } else align(record.english, written);
}
for (const mod of ['../../lib/i18n/public-pages.ts', '../../lib/i18n/legal-pages.ts']) {
  const exported = await import(mod);
  const dict = (exported.publicPages ?? exported.legalPages)[from] as Record<string, string>;
  for (const [en, t] of Object.entries(dict)) if (!found.has(norm(en)) && typeof t === 'string') found.set(norm(en), t);
}

fs.mkdirSync(path.join(dir, to), { recursive: true });
let total = 0, seeded = 0;
for (const area of catalogAreas) {
  const english = JSON.parse(fs.readFileSync(path.join(dir, 'en', `${area}.json`), 'utf8')) as Record<string, string>;
  const file = path.join(dir, to, `${area}.json`);
  const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) as Record<string, string> : {};
  const out: Record<string, string> = {};
  for (const key of Object.keys(english)) {
    total++;
    const value = existing[key] ?? found.get(key);
    if (value !== undefined) { out[key] = value; seeded++; }
  }
  fs.writeFileSync(file, `${JSON.stringify(out, null, 1)}\n`);
}
console.log(`${to} from ${from}: ${seeded} of ${total} strings seeded`);
