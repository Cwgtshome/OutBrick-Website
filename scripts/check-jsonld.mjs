// Parse every JSON-LD block on the built site and count what it describes. Run after a build:
//
//   node scripts/check-jsonld.mjs
//
// Fails when a block is not valid JSON, has no @context, or has a top-level node without @type.
// The per-type rules (required properties, Google's guidance) live in scripts/audit-seo.mjs; this
// is the quick census: which schema.org types the site publishes, on how many pages.

import fs from 'node:fs';
import path from 'node:path';
import { distDir, jsonLdBlocks, listHtmlFiles } from './lib/pages.mjs';

const nodes = new Map();
const pagesWith = new Map();
const problems = [];
let blocks = 0;
const files = listHtmlFiles();

for (const file of files) {
  const html = fs.readFileSync(path.join(distDir, file), 'utf8');
  const seen = new Set();
  for (const raw of jsonLdBlocks(html)) {
    blocks += 1;
    let data;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      problems.push(`${file}: invalid JSON (${error.message})`);
      continue;
    }
    for (const top of Array.isArray(data) ? data : [data]) {
      if (!top || typeof top !== 'object') { problems.push(`${file}: block is not an object`); continue; }
      if (top['@context'] !== 'https://schema.org' && top['@context'] !== 'http://schema.org') problems.push(`${file}: @context is ${JSON.stringify(top['@context'])}`);
      const list = top['@graph'] ? top['@graph'] : [top];
      for (const node of list) {
        if (!node?.['@type']) { problems.push(`${file}: node without @type${node?.['@id'] ? ` (${node['@id']})` : ''}`); continue; }
        for (const type of [].concat(node['@type'])) {
          nodes.set(type, (nodes.get(type) ?? 0) + 1);
          seen.add(type);
        }
      }
    }
  }
  for (const type of seen) pagesWith.set(type, (pagesWith.get(type) ?? 0) + 1);
}

const width = Math.max(...[...nodes.keys()].map((t) => t.length));
console.log(`${files.length} pages, ${blocks} JSON-LD blocks\n`);
console.log(`${'type'.padEnd(width)}  nodes  pages`);
for (const [type, count] of [...nodes].sort((a, b) => b[1] - a[1])) console.log(`${type.padEnd(width)}  ${String(count).padStart(5)}  ${String(pagesWith.get(type)).padStart(5)}`);
for (const problem of problems.slice(0, 50)) console.log(`✗ ${problem}`);
console.log(problems.length ? `\n${problems.length} problems` : '\nevery block parses, with @context and typed nodes');
process.exit(problems.length ? 1 : 0);
