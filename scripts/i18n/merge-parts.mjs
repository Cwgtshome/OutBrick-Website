// Joins a catalog written in parts (lib/i18n/catalog/<locale>/<area>.part*.json) into
// lib/i18n/catalog/<locale>/<area>.json, in the English file's key order, then deletes the parts.
//   node scripts/i18n/merge-parts.mjs <locale> <area>
import fs from 'node:fs';
import path from 'node:path';

const [locale, area] = process.argv.slice(2);
if (!locale || !area) throw new Error('usage: merge-parts.mjs <locale> <area>');
const dir = path.resolve(import.meta.dirname, '../../lib/i18n/catalog');
const english = JSON.parse(fs.readFileSync(path.join(dir, 'en', `${area}.json`), 'utf8'));
const parts = fs.readdirSync(path.join(dir, locale)).filter((f) => f.startsWith(`${area}.part`) && f.endsWith('.json')).sort();
const target = path.join(dir, locale, `${area}.json`);
const merged = fs.existsSync(target) ? JSON.parse(fs.readFileSync(target, 'utf8')) : {};
for (const part of parts) Object.assign(merged, JSON.parse(fs.readFileSync(path.join(dir, locale, part), 'utf8')));
const ordered = {};
for (const key of Object.keys(english)) if (key in merged) ordered[key] = merged[key];
for (const key of Object.keys(merged)) if (!(key in ordered)) ordered[key] = merged[key];
fs.writeFileSync(target, `${JSON.stringify(ordered, null, 1)}\n`);
for (const part of parts) fs.unlinkSync(path.join(dir, locale, part));
const missing = Object.keys(english).filter((key) => !(key in ordered));
console.log(`${locale}/${area}: ${Object.keys(ordered).length} entries from ${parts.length} part(s); ${missing.length} still missing`);
