// Reads a build log made with `scripts/i18n/publish.mts --force <locale> --trace` and reports the
// English strings the catalog language's pages fell back on: those in no English catalog (new
// copy the extractor does not know) and, with --unused, the `pages` phrases no page asked for.
//   node scripts/i18n/trace.mjs build.log [--write lib/i18n/catalog/en-traced.json] [--unused]
import fs from 'node:fs';
import path from 'node:path';

const [logFile] = process.argv.slice(2);
const root = path.resolve(import.meta.dirname, '../..');
const dir = path.join(root, 'lib/i18n/catalog/en');
const known = new Map();
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.json') || file.endsWith('.context.json')) continue;
  for (const key of Object.keys(JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')))) known.set(key, file.replace('.json', ''));
}
const missed = new Set();
for (const line of fs.readFileSync(logFile, 'utf8').split('\n')) {
  const m = line.match(/\[i18n-miss\] (".*")\s*$/);
  if (m) { try { missed.add(JSON.parse(m[1])); } catch { /* a truncated line */ } }
}
const unknown = [...missed].filter((key) => !known.has(key)).sort((a, b) => a.localeCompare(b));
console.log(JSON.stringify({ missed: missed.size, unknown: unknown.length }));
const w = process.argv.indexOf('--write');
if (w > 0) fs.writeFileSync(path.resolve(process.argv[w + 1]), `${JSON.stringify(unknown, null, 1)}\n`);
if (process.argv.includes('--unused')) {
  const pages = Object.keys(JSON.parse(fs.readFileSync(path.join(dir, 'pages.json'), 'utf8')));
  const unused = pages.filter((key) => !missed.has(key));
  console.log(JSON.stringify({ pages: pages.length, unusedPages: unused.length, unusedChars: unused.join('').length }));
  const u = process.argv.indexOf('--unused-out');
  if (u > 0) fs.writeFileSync(path.resolve(process.argv[u + 1]), `${JSON.stringify(unused, null, 1)}\n`);
}
