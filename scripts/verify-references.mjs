// Checks every journal reference against Crossref, the registry behind DOIs, so a citation can
// never name a paper that does not exist or misquote the one it links to.
//
//   NODE_USE_ENV_PROXY=1 node --experimental-strip-types scripts/verify-references.mjs [--all]
//
// For each reference whose URL is a DOI (https://doi.org/…), the script fetches the record and
// checks that the citation text carries the record's publication year, the first author's family
// name, and most of the title's words. Articles in lib/journal-batches/ must cite DOIs only (peer
// reviewed, APA 7); the original articles may also cite other sources, which are listed but not
// failed. Verified records are cached in lib/generated/references-verified.json, so CI (which
// has no network guarantee) re-checks the text against the cache without calling Crossref.

import { readFile, writeFile } from 'node:fs/promises';

const cachePath = new URL('../lib/generated/references-verified.json', import.meta.url);
const offline = process.argv.includes('--offline');
const { articles } = await import('../lib/blog.ts');
const { batchArticles } = await import('../lib/journal-batches/index.ts');
const batchSlugs = new Set(batchArticles.map((a) => a.slug));

let cache = {};
try {
  cache = JSON.parse(await readFile(cachePath, 'utf8'));
} catch {
  cache = {};
}

const normal = (text) =>
  String(text)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const STOP = new Set(['a', 'an', 'the', 'of', 'and', 'in', 'on', 'for', 'to', 'with', 'by', 'at', 'from', 'as', 'or', 'is', 'are', 'its', 'into', 'via']);

async function lookup(doi) {
  if (cache[doi]) return cache[doi];
  if (offline) return null;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
      headers: { 'user-agent': 'OutBrickJournalReferenceCheck/1.0 (https://www.outbrick.site/contact)' },
    }).catch(() => null);
    if (response?.status === 404) return { missing: true };
    if (response?.ok) {
      const { message } = await response.json();
      const record = {
        title: (message.title ?? [])[0] ?? '',
        // Online-first and print years often differ; APA 7 accepts the version the reader cites.
        years: [...new Set(['issued', 'published', 'published-print', 'published-online'].map((k) => message[k]?.['date-parts']?.[0]?.[0]).filter(Boolean))],
        family: message.author?.[0]?.family ?? message.author?.[0]?.name ?? '',
        container: (message['container-title'] ?? [])[0] ?? '',
        type: message.type ?? '',
      };
      cache[doi] = record;
      return record;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
  }
  return null;
}

const failures = [];
const notes = [];
const seen = new Map();
for (const article of articles) {
  const strict = batchSlugs.has(article.slug);
  const ids = new Set(article.references.map((r) => r.id));
  for (const section of article.sections) {
    for (const id of section.sourceIds ?? []) {
      if (!ids.has(id)) failures.push(`${article.slug}: section "${section.id}" cites "${id}", which is not in its references`);
    }
  }
  if (strict && article.references.length < 3) failures.push(`${article.slug}: needs at least 3 peer-reviewed references (has ${article.references.length})`);
  for (const ref of article.references) {
    const doi = ref.url.match(/^https:\/\/doi\.org\/(10\.\d{4,9}\/\S+)$/i)?.[1];
    if (!doi) {
      (strict ? failures : notes).push(`${article.slug}: "${ref.label}" is not a DOI link (${ref.url})`);
      continue;
    }
    if (strict && !/\(\d{4}[a-z]?\)\./.test(ref.citation)) failures.push(`${article.slug}: "${ref.label}" is not in APA 7 form (Author, A. A. (Year). Title. Journal, vol(issue), pages.)`);
    const key = doi.toLowerCase();
    if (!seen.has(key)) seen.set(key, lookup(key));
    const record = await seen.get(key);
    if (!record) {
      failures.push(`${article.slug}: could not reach Crossref for ${doi} (re-run with network)`);
      continue;
    }
    if (record.missing) {
      failures.push(`${article.slug}: ${doi} does not exist on Crossref`);
      continue;
    }
    const citation = normal(ref.citation);
    const problems = [];
    const years = record.years ?? (record.year ? [record.year] : []);
    if (years.length && !years.some((y) => ref.citation.includes(String(y)))) problems.push(`year should be ${years.join(' or ')}`);
    if (record.family && !citation.includes(normal(record.family))) problems.push(`first author should be ${record.family}`);
    const words = normal(record.title).split(' ').filter((w) => w.length > 2 && !STOP.has(w));
    const hit = words.filter((w) => citation.includes(w)).length;
    if (words.length && hit / words.length < 0.7) problems.push(`title should be "${record.title}"`);
    if (problems.length) failures.push(`${article.slug}: "${ref.label}" (${doi}) does not match Crossref: ${problems.join('; ')}`);
  }
}

await writeFile(cachePath, `${JSON.stringify(Object.fromEntries(Object.entries(cache).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);
for (const note of notes) console.log(`· ${note}`);
for (const failure of failures) console.log(`✗ ${failure}`);
console.log(`${seen.size} DOIs across ${articles.length} articles: ${failures.length ? `${failures.length} problems` : 'all match Crossref'}`);
process.exit(failures.length ? 1 : 0);
