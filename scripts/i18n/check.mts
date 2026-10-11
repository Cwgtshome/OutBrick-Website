// Checks the string catalogs against their English source (lib/i18n/catalog/en/<area>.json).
//   node --experimental-strip-types --no-warnings scripts/i18n/check.mts [--locale it] [--area legal] [--strict]
// Errors: a missing or extra key, an empty value, a changed placeholder ({0}, {1} …), broken
// ICU plural syntax, a changed link target ([words](target)), unbalanced **bold**, a changed
// {{Key}}. Warnings: a short label more than twice the English length, or a long string left in
// English. Without --strict, a locale or area with no file yet is only counted, not an error.
import fs from 'node:fs';
import path from 'node:path';
import { catalogAreas } from '../../lib/i18n/catalog-areas.ts';
import { catalogLocales } from '../../lib/i18n/locales.ts';
import { formatTemplate } from '../../lib/i18n/catalog.ts';

const root = path.resolve(import.meta.dirname, '../..');
const dir = path.join(root, 'lib/i18n/catalog');
const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const locales = arg('--locale') ? [arg('--locale')!] : [...catalogLocales];
const areas = arg('--area') ? [arg('--area')!] : [...catalogAreas];
const strict = process.argv.includes('--strict');
const quiet = process.argv.includes('--quiet');

const placeholders = (s: string) => [...s.matchAll(/\{(\d+)[,}]/g)].map((m) => m[1]).sort().join(',');
const links = (s: string) => [...s.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]).sort().join(' ');
const keys = (s: string) => [...s.matchAll(/\{\{([^}]+)\}\}/g)].length;
const bold = (s: string) => (s.match(/\*\*/g) ?? []).length;
const code = (s: string) => (s.match(/`/g) ?? []).length;

let errors = 0, warnings = 0, missingFiles = 0, done = 0;
const report = (kind: 'error' | 'warning', where: string, message: string) => {
  if (kind === 'error') errors++; else warnings++;
  if (!quiet || kind === 'error') console.log(`${kind}: ${where}: ${message}`);
};
for (const locale of locales) {
  for (const area of areas) {
    const source = path.join(dir, 'en', `${area}.json`);
    if (!fs.existsSync(source)) continue;
    const english = JSON.parse(fs.readFileSync(source, 'utf8')) as Record<string, string>;
    if (!Object.keys(english).length) continue;
    const file = path.join(dir, locale, `${area}.json`);
    if (!fs.existsSync(file)) {
      missingFiles++;
      if (strict) report('error', `${locale}/${area}`, 'file missing');
      continue;
    }
    let t: Record<string, string>;
    try { t = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { report('error', `${locale}/${area}`, `invalid JSON: ${(e as Error).message}`); continue; }
    done++;
    for (const key of Object.keys(english)) {
      const where = `${locale}/${area}: ${JSON.stringify(key.slice(0, 70))}`;
      const value = t[key];
      if (typeof value !== 'string') { report('error', where, 'missing'); continue; }
      if (!value.trim()) { report('error', where, 'empty'); continue; }
      if (placeholders(key) !== placeholders(value)) report('error', where, `placeholders ${placeholders(key)} → ${placeholders(value)}`);
      if (links(key) !== links(value)) report('error', where, `link targets changed: ${links(key)} → ${links(value)}`);
      if (keys(key) !== keys(value)) report('error', where, '{{Key}} markup changed');
      if (bold(value) % 2) report('error', where, 'unbalanced **');
      if (code(key) !== code(value)) report('warning', where, 'backtick count changed');
      if (/\{\d+,\s*(plural|select)/.test(value)) {
        try { for (const n of [0, 1, 2, 3, 5, 11, 21, 101]) formatTemplate(value, [n, n, n, n], locale); }
        catch { report('error', where, 'bad plural syntax'); }
        if (/\{\d+,\s*plural/.test(value) && !/other\s*\{/.test(value)) report('error', where, 'plural without other {…}');
      }
      if (key.length <= 24 && value.length > Math.max(2.2 * key.length, key.length + 18)) report('warning', where, `long label (${value.length} vs ${key.length}): ${value}`);
      if (key.length > 40 && value === key) report('warning', where, 'left in English');
    }
    for (const key of Object.keys(t)) if (!(key in english)) report('warning', `${locale}/${area}: ${JSON.stringify(key.slice(0, 70))}`, 'not in this area\'s English source (moved or stale; scripts/i18n/rebalance.mts moves it)');
  }
}
console.log(JSON.stringify({ files: done, missingFiles, errors, warnings }));
if (errors) process.exitCode = 1;
