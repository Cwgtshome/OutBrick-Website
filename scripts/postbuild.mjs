// Runs after `vinext build` (see package.json "build"). Writes, into dist/client:
//
//   sitemap.xml — every indexable prerendered page, derived from the build output itself
//   feed.xml    — RSS 2.0 for the journal, from lib/blog.ts
//
// Why not app/sitemap.ts: with `output: 'export'`, vinext compiles metadata routes into the
// server bundle only; nothing prerenders them into dist/client, and Netlify publishes only
// dist/client. A hand-written public/sitemap.xml went stale the same way the committed build
// once did, so both are generated here from what the build actually produced.
//
// Needs `node --experimental-strip-types` (Node >= 22.6) to import lib/blog.ts directly.

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { distDir, indexablePages, metaContent, repoRoot, siteUrl, xmlEscape } from './lib/pages.mjs';

const { articles, authors } = await import('../lib/blog.ts');

// ---------------------------------------------------------------------------------------
// Dates

/** "September 4, 2026" -> "2026-09-04" (calendar date, no time-zone drift). */
function isoDate(human) {
  const d = new Date(human);
  if (Number.isNaN(d.getTime())) throw new Error(`lib/blog.ts: cannot parse date "${human}"`);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function rfc822(iso) {
  return new Date(`${iso}T12:00:00Z`).toUTCString();
}

let gitAvailable = true;
try {
  const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: repoRoot, encoding: 'utf8' }).trim();
  if (shallow === 'true') console.warn('[postbuild] shallow git clone: page lastmod dates may be the clone tip date.');
} catch {
  gitAvailable = false;
  console.warn('[postbuild] git unavailable: non-article pages get no <lastmod>.');
}

function gitDate(files) {
  if (!gitAvailable || !files.length) return undefined;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { cwd: repoRoot, encoding: 'utf8' }).trim();
    return out || undefined;
  } catch {
    return undefined;
  }
}

// ---------------------------------------------------------------------------------------
// Route -> source files (the page and everything it imports from app/, lib/, components/)

const appDir = path.join(repoRoot, 'app');

const isDir = (p) => fs.existsSync(p) && fs.statSync(p).isDirectory();

/** `dir` plus every route group `(name)` under it, recursively: groups add no URL segment. */
function withGroups(dir) {
  const out = [dir];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && /^\(.+\)$/.test(e.name)) out.push(...withGroups(path.join(dir, e.name)));
  }
  return out;
}

/** The page file that renders `route`: literal segments first, then a dynamic `[param]`, as the router does. */
function pageFileForRoute(route) {
  const segs = route.split('/').filter(Boolean);
  const walk = (dir, i) => {
    const dirs = withGroups(dir);
    if (i === segs.length) {
      for (const d of dirs) {
        for (const name of ['page.tsx', 'page.ts', 'page.jsx', 'page.js']) {
          if (fs.existsSync(path.join(d, name))) return path.join(d, name);
        }
      }
      return undefined;
    }
    for (const d of dirs) {
      const literal = path.join(d, segs[i]);
      if (isDir(literal)) {
        const found = walk(literal, i + 1);
        if (found) return found;
      }
    }
    for (const d of dirs) {
      const dynamic = fs.readdirSync(d, { withFileTypes: true }).find((e) => e.isDirectory() && /^\[.+\]$/.test(e.name));
      if (dynamic) {
        const found = walk(path.join(d, dynamic.name), i + 1);
        if (found) return found;
      }
    }
    return undefined;
  };
  return walk(appDir, 0);
}

function resolveImport(fromFile, spec) {
  const base = path.resolve(path.dirname(fromFile), spec);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.mjs`, path.join(base, 'index.ts'), path.join(base, 'index.tsx')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return undefined;
}

function sourceClosure(entry) {
  const seen = new Set();
  const stack = [entry];
  while (stack.length) {
    const file = stack.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    if (!/\.(tsx?|jsx?|mjs)$/.test(file)) continue;
    const text = fs.readFileSync(file, 'utf8');
    for (const [, spec] of text.matchAll(/(?:from|import)\s*\(?\s*['"](\.{1,2}\/[^'"]+)['"]/g)) {
      const resolved = resolveImport(file, spec);
      if (resolved && resolved.startsWith(repoRoot) && !resolved.includes('node_modules')) stack.push(resolved);
    }
  }
  return [...seen].map((f) => path.relative(repoRoot, f));
}

// ---------------------------------------------------------------------------------------
// Sitemap

const articleBySlug = new Map(articles.map((a) => [a.slug, a]));

/**
 * The page's own `<link rel="alternate" hreflang>` set, read from its built <head>. The home
 * page and the play guide are published in several languages (lib/i18n/locales.ts), and each
 * version names all of them; the sitemap repeats that set as `xhtml:link` so the languages are
 * declared in both places, as Google recommends.
 */
function hreflangLinks(html) {
  const head = html.slice(0, html.indexOf('</head>'));
  const links = [];
  for (const [tag] of head.matchAll(/<link\b[^>]*>/gi)) {
    if (!/\srel="alternate"/i.test(tag)) continue;
    const lang = tag.match(/\shreflang="([^"]+)"/i)?.[1];
    const href = tag.match(/\shref="([^"]+)"/i)?.[1];
    if (lang && href) links.push({ lang, href: href.replace(/&amp;/g, '&') });
  }
  return links;
}
const pages = indexablePages();
if (pages.length === 0) throw new Error('[postbuild] no indexable pages found in dist/client — refusing to write an empty sitemap');

const entries = pages.map((page) => {
  let lastmod;
  const articleSlug = page.route.match(/^\/blog\/([^/]+)$/)?.[1];
  if (articleSlug && articleBySlug.has(articleSlug)) {
    lastmod = isoDate(articleBySlug.get(articleSlug).updatedAt);
  } else {
    const pageFile = pageFileForRoute(page.route === '/' ? '' : page.route);
    lastmod = pageFile ? gitDate(sourceClosure(pageFile)) : undefined;
  }
  // Pages that declare their own modified time win over either guess.
  const declared = metaContent(page.html, 'article:modified_time')[0];
  if (!articleSlug && declared && /^\d{4}-\d{2}-\d{2}/.test(declared)) lastmod = declared.slice(0, 10);
  return { loc: page.url, lastmod, alternates: hreflangLinks(page.html) };
});

// Home first, then by path, so diffs between builds stay readable.
entries.sort((a, b) => (a.loc === `${siteUrl}/` ? -1 : b.loc === `${siteUrl}/` ? 1 : a.loc.localeCompare(b.loc)));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...entries.map((e) => {
    const alternates = e.alternates.map((a) => `\n    <xhtml:link rel="alternate" hreflang="${xmlEscape(a.lang)}" href="${xmlEscape(a.href)}"/>`).join('');
    return `  <url><loc>${xmlEscape(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}${alternates ? `${alternates}\n  ` : ''}</url>`;
  }),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`[postbuild] sitemap.xml: ${entries.length} URLs`);

// Every article in lib/blog.ts should have been prerendered; say so loudly if one was not.
const builtRoutes = new Set(pages.map((p) => p.route));
for (const a of articles) {
  if (!builtRoutes.has(`/blog/${a.slug}`)) console.warn(`[postbuild] WARNING: /blog/${a.slug} is in lib/blog.ts but not an indexable page in dist/client`);
}

// ---------------------------------------------------------------------------------------
// RSS 2.0 feed

const authorName = (id) => authors.find((a) => a.id === id)?.name ?? 'OutBrick';
const mimeFor = (file) => ({ '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.avif': 'image/avif' })[path.extname(file).toLowerCase()] ?? 'application/octet-stream';

const feedArticles = [...articles].sort((a, b) => isoDate(b.publishedAt).localeCompare(isoDate(a.publishedAt)) || a.title.localeCompare(b.title));
const newest = feedArticles.reduce((max, a) => (isoDate(a.updatedAt) > max ? isoDate(a.updatedAt) : max), '1970-01-01');

const items = feedArticles.map((a) => {
  const url = `${siteUrl}/blog/${a.slug}`;
  const imageUrl = `${siteUrl}${a.image}`;
  const imageFile = path.join(distDir, a.image);
  const length = fs.existsSync(imageFile) ? fs.statSync(imageFile).size : 0;
  if (!length) console.warn(`[postbuild] WARNING: feed image ${a.image} missing from dist/client`);
  return [
    '    <item>',
    `      <title>${xmlEscape(a.title)}</title>`,
    `      <link>${url}</link>`,
    `      <guid isPermaLink="true">${url}</guid>`,
    `      <description>${xmlEscape(a.dek)}</description>`,
    `      <pubDate>${rfc822(isoDate(a.publishedAt))}</pubDate>`,
    `      <dc:creator>${xmlEscape(authorName(a.authorId))}</dc:creator>`,
    `      <category>${xmlEscape(a.category)}</category>`,
    ...a.tags.filter((t) => t.toLowerCase() !== a.category.toLowerCase()).map((t) => `      <category>${xmlEscape(t)}</category>`),
    `      <enclosure url="${xmlEscape(imageUrl)}" length="${length}" type="${mimeFor(a.image)}"/>`,
    `      <media:content url="${xmlEscape(imageUrl)}" medium="image" type="${mimeFor(a.image)}">`,
    `        <media:description type="plain">${xmlEscape(a.imageAlt)}</media:description>`,
    '      </media:content>',
    '    </item>',
  ].join('\n');
});

const feed = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">',
  '  <channel>',
  '    <title>The OutBrick Journal</title>',
  `    <link>${siteUrl}/blog</link>`,
  `    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>`,
  '    <description>Research-backed writing on puzzle design, calmer play, accessibility and the habits games build — from the makers of OutBrick.</description>',
  '    <language>en</language>',
  `    <lastBuildDate>${rfc822(newest)}</lastBuildDate>`,
  '    <image>',
  `      <url>${siteUrl}/assets/icon/icon-192.png</url>`,
  '      <title>The OutBrick Journal</title>',
  `      <link>${siteUrl}/blog</link>`,
  '    </image>',
  ...items,
  '  </channel>',
  '</rss>',
  '',
].join('\n');
fs.writeFileSync(path.join(distDir, 'feed.xml'), feed);
console.log(`[postbuild] feed.xml: ${items.length} items`);
