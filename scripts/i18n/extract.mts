// Writes the English source of every string catalog: lib/i18n/catalog/en/<area>.json, a map from
// each English string (or `{0}` template) to itself, plus <area>.context.json saying where each
// string is used. Translators copy the English file to lib/i18n/catalog/<locale>/<area>.json and
// translate the values. Run after changing any English copy:
//   node --experimental-strip-types --no-warnings --import ./scripts/i18n/register.mjs scripts/i18n/extract.mts
// `--check` only reports whether the committed English files are current (CI).
import fs from 'node:fs';
import path from 'node:path';
import { mapCopy, registeredRecords, templateKeys } from '../../lib/i18n/catalog.ts';
import { catalogAreas, type CatalogArea } from '../../lib/i18n/catalog-areas.ts';
import { catalogSources } from './sources.mts';

const root = path.resolve(import.meta.dirname, '../..');
const outDir = path.join(root, 'lib/i18n/catalog/en');
const strings = new Map<string, { area: CatalogArea; contexts: Set<string> }>();
const rank = new Map(catalogAreas.map((a, i) => [a, i]));

function add(area: CatalogArea, text: string, context: string) {
  const key = text.replace(/\s+/g, ' ').trim();
  if (!key || !/\p{L}/u.test(key)) return;
  const seen = strings.get(key);
  if (!seen) strings.set(key, { area, contexts: new Set([context]) });
  else {
    seen.contexts.add(context);
    // A string shared by two areas lives in the one that loads in more places.
    if (rank.get(area)! < rank.get(seen.area)!) seen.area = area;
  }
}

function addCopy(area: CatalogArea, name: string, english: unknown) {
  mapCopy(english, (text) => (add(area, text, name), text), (fn) => {
    for (const key of templateKeys(fn as (...args: never[]) => unknown)) add(area, key, `${name}()`);
    return fn;
  });
}

const sources = await catalogSources();
for (const record of registeredRecords) {
  if (sources.skipRecords.has(record.name)) continue;
  const area = record.area as CatalogArea;
  if (!catalogAreas.includes(area)) continue;
  addCopy(area, record.name, record.english);
}
for (const { area, name, english } of sources.copies) addCopy(area, name, english);
for (const { area, name, phrases } of sources.phrases) for (const phrase of phrases) add(area, phrase, name);

const byArea = new Map<CatalogArea, [string, Set<string>][]>();
for (const [text, { area, contexts }] of strings) {
  if (!byArea.has(area)) byArea.set(area, []);
  byArea.get(area)!.push([text, contexts]);
}
const check = process.argv.includes('--check');
let stale = 0;
fs.mkdirSync(outDir, { recursive: true });
const summary: string[] = [];
for (const area of catalogAreas) {
  const entries = (byArea.get(area) ?? []).sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const source = `${JSON.stringify(Object.fromEntries(entries.map(([t]) => [t, t])), null, 1)}\n`;
  const context = `${JSON.stringify(Object.fromEntries(entries.map(([t, c]) => [t, [...c].slice(0, 4).join(' · ')])), null, 1)}\n`;
  const file = path.join(outDir, `${area}.json`);
  const ctxFile = path.join(outDir, `${area}.context.json`);
  if (check) {
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== source) { stale++; console.error(`stale: ${path.relative(root, file)}`); }
  } else {
    fs.writeFileSync(file, source);
    fs.writeFileSync(ctxFile, context);
  }
  summary.push(`${area}: ${entries.length} strings, ${entries.reduce((n, [t]) => n + t.length, 0)} characters`);
}
console.log(summary.join('\n'));
if (stale) process.exitCode = 1;
