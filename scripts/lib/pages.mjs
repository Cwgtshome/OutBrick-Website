// Shared helpers for the post-build scripts: find the prerendered pages in dist/client,
// work out the public URL of each one, and read what netlify.toml does to them.
//
// Everything here reads the *built* output, not a hand-kept list of routes, so a page added
// to app/ shows up in the sitemap, the feed and the audit the next time the site is built.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const siteUrl = 'https://www.outbrick.site';
export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const distDir = path.join(repoRoot, 'dist/client');

/** Every .html file under dist/client, as paths relative to it ("blog/foo.html"). */
export function listHtmlFiles(dir = distDir) {
  const out = [];
  const walk = (rel) => {
    for (const entry of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
      const child = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (entry.name === '_next' || entry.name === 'assets') continue;
        walk(child);
      } else if (entry.name.endsWith('.html')) {
        out.push(child);
      }
    }
  };
  walk('');
  return out.sort((a, b) => a.localeCompare(b));
}

/** "index.html" -> "/", "blog.html" -> "/blog", "blog/foo.html" -> "/blog/foo". */
export function fileToRoute(file) {
  const noExt = file.replace(/\.html$/, '');
  if (noExt === 'index') return '/';
  return `/${noExt.replace(/\/index$/, '')}`;
}

export function routeToUrl(route) {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
}

/**
 * The [[redirects]] blocks of netlify.toml, parsed just far enough to know which paths
 * leave with a 301/302 (aliases that must not be listed) and which are 200 rewrites.
 */
export function readNetlifyRedirects() {
  const toml = fs.readFileSync(path.join(repoRoot, 'netlify.toml'), 'utf8');
  const blocks = toml.split(/^\s*\[\[redirects\]\]\s*$/m).slice(1);
  return blocks.map((block) => {
    const body = block.split(/^\s*\[/m)[0];
    const field = (name) => body.match(new RegExp(`^\\s*${name}\\s*=\\s*("?)([^"\\n#]*)\\1`, 'm'))?.[2]?.trim();
    return { from: field('from'), to: field('to'), status: Number(field('status') ?? 301), force: field('force') === 'true' };
  }).filter((r) => r.from && r.to);
}

/** Paths that 301/302 elsewhere, normalised without ".html" and trailing slash. */
export function redirectedRoutes() {
  const set = new Set();
  for (const r of readNetlifyRedirects()) {
    if (r.status >= 300 && r.status < 400 && !r.from.includes('*') && !r.from.includes(':')) {
      set.add(r.from.replace(/\.html$/, '').replace(/(.)\/$/, '$1'));
    }
  }
  return set;
}

// --- tiny HTML readers (the build output is React's own markup, so regexes are enough) ---

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1];

export function decodeEntities(s = '') {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, '&');
}

export function headOf(html) {
  const end = html.indexOf('</head>');
  return end === -1 ? html : html.slice(0, end);
}

/** All <meta> tags as [{name|property, content}]. */
export function metaTags(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => ({
    key: attr(tag, 'name') ?? attr(tag, 'property') ?? attr(tag, 'itemProp'),
    content: decodeEntities(attr(tag, 'content')),
  }));
}

export function metaContent(html, key) {
  return metaTags(headOf(html)).filter((m) => m.key === key).map((m) => m.content);
}

export function linkHrefs(html, rel) {
  return [...headOf(html).matchAll(/<link\b[^>]*>/gi)]
    .map(([tag]) => tag)
    .filter((tag) => attr(tag, 'rel')?.split(/\s+/).includes(rel))
    .map((tag) => decodeEntities(attr(tag, 'href')));
}

export function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
}

/** Flatten parsed JSON-LD (arrays and @graph) into a list of typed nodes. */
export function jsonLdNodes(html) {
  const nodes = [];
  const push = (v) => {
    if (Array.isArray(v)) v.forEach(push);
    else if (v && typeof v === 'object') {
      if (v['@graph']) push(v['@graph']);
      if (v['@type']) nodes.push(v);
    }
  };
  for (const block of jsonLdBlocks(html)) {
    try { push(JSON.parse(block)); } catch { /* the audit reports parse failures */ }
  }
  return nodes;
}

export function isNoindex(html) {
  return metaContent(html, 'robots').some((c) => /noindex/i.test(c));
}

export function xmlEscape(s = '') {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

/**
 * The pages a search engine should be told about: prerendered, indexable, not an alias that
 * netlify.toml redirects away, and not a verification or error file.
 */
export function indexablePages() {
  const aliases = redirectedRoutes();
  const pages = [];
  for (const file of listHtmlFiles()) {
    const route = fileToRoute(file);
    if (route === '/404' || /^\/google[0-9a-f]+$/.test(route)) continue;
    if (aliases.has(route)) continue;
    const html = fs.readFileSync(path.join(distDir, file), 'utf8');
    if (isNoindex(html)) continue;
    pages.push({ file, route, url: routeToUrl(route), html });
  }
  return pages;
}
