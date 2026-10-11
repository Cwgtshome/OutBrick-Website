// After the English catalogs change (scripts/i18n/extract.mts), a string can move from one area
// to another. This rewrites every language's area files so each holds exactly its area's English
// keys, taking each translation from whichever of that language's files already has it.
//   node --experimental-strip-types --no-warnings scripts/i18n/rebalance.mts
import fs from 'node:fs';
import path from 'node:path';
import { catalogAreas } from '../../lib/i18n/catalog-areas.ts';

const dir = path.resolve(import.meta.dirname, '../../lib/i18n/catalog');
const read = (file: string): Record<string, string> => (fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {});
const locales = fs.readdirSync(dir).filter((d) => d !== 'en' && fs.statSync(path.join(dir, d)).isDirectory());
for (const locale of locales) {
  const known: Record<string, string> = {};
  for (const file of fs.readdirSync(path.join(dir, locale))) {
    if (!file.endsWith('.json') || file.includes('.part')) continue;
    Object.assign(known, read(path.join(dir, locale, file)));
  }
  let moved = 0;
  for (const area of catalogAreas) {
    const english = read(path.join(dir, 'en', `${area}.json`));
    const file = path.join(dir, locale, `${area}.json`);
    const before = read(file);
    const out: Record<string, string> = {};
    for (const key of Object.keys(english)) if (typeof known[key] === 'string') out[key] = known[key];
    if (!Object.keys(out).length && !fs.existsSync(file)) continue;
    if (JSON.stringify(out) !== JSON.stringify(before)) { moved++; fs.writeFileSync(file, `${JSON.stringify(out, null, 1)}\n`); }
  }
  if (moved) console.log(`${locale}: ${moved} file(s) rewritten`);
}
