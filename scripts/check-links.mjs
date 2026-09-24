// Every link on the built site, checked: menus, footers, in-article links, images, feeds.
//
//   node scripts/check-links.mjs              internal links and #anchors in dist/client
//   NODE_USE_ENV_PROXY=1 node scripts/check-links.mjs --external    also request each external URL once
//
// An internal link passes when it resolves the way Netlify serves the site (`/about` answers
// from about.html or about/index.html, files by their own path) or matches a rule in
// netlify.toml. A link with a #fragment also needs that id on the target page, so a table of
// contents or a "jump to" link can never point at nothing. Links a page builds in the browser
// are not seen here; the cross-browser smoke test clicks the menus.

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/client/', import.meta.url).pathname;
const external = process.argv.includes('--external');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

const files = await walk(root);
const fileSet = new Set(files.map((f) => `/${relative(root, f)}`));
const htmlFiles = files.filter((f) => f.endsWith('.html'));

// netlify.toml redirect and rewrite sources, as patterns
const toml = await readFile(new URL('../netlify.toml', import.meta.url), 'utf8');
const rules = [...toml.matchAll(/from\s*=\s*"([^"]+)"/g)].map(([, from]) =>
  new RegExp(`^${from.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\\\*$|\*$/, '.*').replace(/:[a-z]+/gi, '[^/]+')}/?$`),
);

function pageFor(pathname) {
  const clean = decodeURI(pathname).replace(/\/$/, '') || '/';
  if (clean === '/') return '/index.html';
  for (const candidate of [`${clean}.html`, `${clean}/index.html`, clean]) if (fileSet.has(candidate)) return candidate;
  return null;
}

const idsCache = new Map();
async function idsOf(page) {
  if (!idsCache.has(page)) {
    const html = await readFile(join(root, page), 'utf8');
    idsCache.set(page, new Set([...html.matchAll(/\s(?:id|name)="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsCache.get(page);
}

const failures = new Map();
const externals = new Map();
const fail = (url, from) => {
  if (!failures.has(url)) failures.set(url, new Set());
  failures.get(url).add(from);
};

let checked = 0;
for (const file of htmlFiles) {
  const page = `/${relative(root, file)}`;
  if (page === '/404.html' || page.startsWith('/google')) continue;
  const html = await readFile(file, 'utf8');
  // Only real markup: skip the RSC payload scripts, which repeat every href as data.
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const urls = new Set();
  for (const m of markup.matchAll(/\s(?:href|src)="([^"]+)"/g)) urls.add(m[1].replace(/&amp;/g, '&'));
  for (const m of markup.matchAll(/\ssrcset="([^"]+)"/g)) for (const part of m[1].split(',')) urls.add(part.trim().split(/\s+/)[0]);
  for (const raw of urls) {
    if (/^(mailto|tel|data|javascript|sms|outbrick):/i.test(raw)) continue;
    if (/^https?:\/\//i.test(raw)) {
      const u = new URL(raw);
      if (u.hostname === 'www.outbrick.site' || u.hostname === 'outbrick.site') {
        // an absolute link to ourselves: check it like an internal one
      } else {
        if (!externals.has(u.href)) externals.set(u.href, page);
        continue;
      }
    }
    const url = new URL(raw, `https://www.outbrick.site${page.replace(/(index)?\.html$/, '')}`);
    checked += 1;
    const target = url.pathname === page.replace(/\.html$/, '') ? page : pageFor(url.pathname);
    if (!target) {
      if (!rules.some((rule) => rule.test(url.pathname))) fail(url.pathname + url.hash, page);
      continue;
    }
    if (url.hash && url.hash.length > 1 && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!(await idsOf(target)).has(id)) fail(`${url.pathname}${url.hash} (no such anchor)`, page);
    }
  }
}

let externalFailures = 0;
if (external) {
  const entries = [...externals.entries()];
  const results = [];
  for (let i = 0; i < entries.length; i += 8) {
    results.push(
      ...(await Promise.all(
        entries.slice(i, i + 8).map(async ([href, from]) => {
          for (const method of ['HEAD', 'GET']) {
            const response = await fetch(href, { method, redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (OutBrick link check)' } }).catch(() => null);
            // Publishers often refuse robots (401/403/429); only a missing page is a broken link.
            if (response && (response.ok || [401, 403, 405, 429, 999].includes(response.status))) return null;
            if (method === 'GET') return `${href} → ${response ? response.status : 'no response'} (on ${from})`;
          }
          return null;
        }),
      )),
    );
  }
  for (const r of results.filter(Boolean)) {
    externalFailures += 1;
    console.log(`✗ external ${r}`);
  }
}

for (const [url, pages] of failures) console.log(`✗ ${url}  ← ${[...pages].slice(0, 4).join(', ')}${pages.size > 4 ? ` and ${pages.size - 4} more` : ''}`);
console.log(
  `${htmlFiles.length} pages, ${checked} internal links${external ? `, ${externals.size} external` : ''}: ` +
    (failures.size + externalFailures ? `${failures.size + externalFailures} broken` : 'all resolve'),
);
process.exit(failures.size + externalFailures ? 1 : 0);
