// Runs after `vinext build` (see package.json "build"). Writes, into dist/client:
//
//   sitemap.xml — every indexable prerendered page, derived from the build output itself
//   feed.xml    — RSS 2.0 for the journal, from lib/blog.ts
//   llms.txt    — a plain-Markdown map of the site for AI assistants (llmstxt.org)
//   blog/category/<slug>/feed.xml — the same feed, one shelf at a time
//   journal-index.json — the compact search index /blog loads on first use of its search field
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
import { decodeEntities, distDir, indexablePages, metaContent, repoRoot, siteUrl, xmlEscape } from './lib/pages.mjs';

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

/** The same slug rule as lib/journal.ts `slugify`, for category and tag addresses. */
const slugify = (text) =>
  text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

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
  const collection = page.route.match(/^\/blog\/(category|tag)\/([^/]+)$/);
  if (articleSlug && articleBySlug.has(articleSlug)) {
    lastmod = isoDate(articleBySlug.get(articleSlug).updatedAt);
  } else if (collection) {
    // A shelf or tag page changes when one of its stories does.
    const [, kind, slug] = collection;
    const members = articles.filter((a) => (kind === 'category' ? slugify(a.category) === slug : a.tags.some((t) => slugify(t) === slug)));
    lastmod = members.map((a) => isoDate(a.updatedAt)).reduce((max, d) => (d > max ? d : max), '') || undefined;
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

function feedItem(a) {
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
}

function rss({ title, link, self, description, stories }) {
  const newest = stories.reduce((max, a) => (isoDate(a.updatedAt) > max ? isoDate(a.updatedAt) : max), '1970-01-01');
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">',
    '  <channel>',
    `    <title>${xmlEscape(title)}</title>`,
    `    <link>${link}</link>`,
    `    <atom:link href="${self}" rel="self" type="application/rss+xml"/>`,
    `    <description>${xmlEscape(description)}</description>`,
    '    <language>en</language>',
    `    <lastBuildDate>${rfc822(newest)}</lastBuildDate>`,
    '    <image>',
    `      <url>${siteUrl}/assets/icon/icon-192.png</url>`,
    `      <title>${xmlEscape(title)}</title>`,
    `      <link>${link}</link>`,
    '    </image>',
    ...stories.map(feedItem),
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');
}

const feed = rss({
  title: 'The OutBrick Journal',
  link: `${siteUrl}/blog`,
  self: `${siteUrl}/feed.xml`,
  description: 'Research-backed writing on puzzle design, calmer play, accessibility and the habits games build — from the makers of OutBrick.',
  stories: feedArticles,
});
fs.writeFileSync(path.join(distDir, 'feed.xml'), feed);
console.log(`[postbuild] feed.xml: ${feedArticles.length} items`);

// One feed per shelf, beside the shelf's own page.
const categories = [...new Set(articles.map((a) => a.category))];
for (const category of categories) {
  const slug = slugify(category);
  if (!builtRoutes.has(`/blog/category/${slug}`)) {
    console.warn(`[postbuild] WARNING: /blog/category/${slug} was not prerendered; skipping its feed`);
    continue;
  }
  const dir = path.join(distDir, 'blog/category', slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'feed.xml'),
    rss({
      title: `The OutBrick Journal: ${category}`,
      link: `${siteUrl}/blog/category/${slug}`,
      self: `${siteUrl}/blog/category/${slug}/feed.xml`,
      description: `Stories from the ${category} shelf of the OutBrick Journal.`,
      stories: feedArticles.filter((a) => a.category === category),
    }),
  );
}
console.log(`[postbuild] category feeds: ${categories.length}`);

// ---------------------------------------------------------------------------------------
// Search index for /blog (app/(en)/blog/journal-finder.tsx)
//
// Title, dek, shelf, tags and section headings go in as written, for display and
// highlighting. The body goes in only as its distinct words, normalised the way the client
// normalises a query, which keeps the file small while every word of every story stays
// findable.

// Must match STOP in journal-finder.tsx: a query drops these words, so the index can too.
const STOP = new Set('a an and are as at be but by can do does for from how i if in is it its my of on or so the to what when why with you your'.split(' '));
const normWords = (text) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/colour/g, 'color')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter((w) => w.length >= 3 && !STOP.has(w));
const unlink = (text) => text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');

const searchIndex = articles.map((a) => {
  const shown = new Set(normWords([a.title, a.dek, a.category, ...a.tags, ...a.sections.map((s) => s.title)].join(' ')));
  const body = [a.intro, ...a.keyTakeaways, ...a.sections.flatMap((s) => [...s.paragraphs, ...(s.bullets ?? []), s.note ?? '']), ...(a.faqs ?? []).flatMap((f) => [f.question, f.answer])]
    .map(unlink)
    .join(' ');
  // Matching is by word prefix, so a word that begins another one in the same story ("sort"
  // beside "sorting") adds nothing: in sorted order it sits directly before a word it prefixes.
  const sorted = [...new Set(normWords(body))].filter((w) => !shown.has(w)).sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));
  const words = sorted.filter((w, i) => !sorted[i + 1]?.startsWith(w));
  return {
    s: a.slug,
    t: a.title,
    d: a.dek,
    c: a.category,
    n: a.categoryColor,
    m: Number.parseInt(a.readingTime, 10) || 0,
    g: a.tags,
    h: a.sections.map((s) => s.title),
    k: words.join(' '),
  };
});
const indexJson = JSON.stringify(searchIndex);
fs.writeFileSync(path.join(distDir, 'journal-index.json'), indexJson);
console.log(`[postbuild] journal-index.json: ${searchIndex.length} stories, ${(indexJson.length / 1024).toFixed(1)} KB`);

// ---------------------------------------------------------------------------------------
// llms.txt — https://llmstxt.org
//
// A short Markdown index that AI assistants (ChatGPT, Claude, Perplexity, Gemini…) can read
// in one request instead of crawling every page. Built from the same indexable pages as the
// sitemap, using each page's own <title> and meta description, so it cannot drift from them.

const pageTitle = (html) => decodeEntities(html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] ?? '').replace(/\s*[—|-]\s*OutBrick\s*$/, '').trim();
const mdLine = (page) => {
  const title = pageTitle(page.html) || page.route;
  const desc = metaContent(page.html, 'description')[0];
  return `- [${title}](${page.url})${desc ? `: ${desc}` : ''}`;
};

const home = pages.find((p) => p.route === '/');
const blogPages = pages.filter((p) => p.route === '/blog' || p.route.startsWith('/blog/'));
const legalRoutes = /^\/(privacy|privacy-choices|terms|eula|license-agreement|refunds|age-rating|accessibility)$/;
const legalPages = pages.filter((p) => legalRoutes.test(p.route));
const mainPages = pages.filter((p) => p !== home && !blogPages.includes(p) && !legalPages.includes(p));

const llms = [
  '# OutBrick',
  '',
  `> ${metaContent(home?.html ?? '', 'description')[0] ?? 'OutBrick: Block Sort Puzzle — a relaxed sliding-brick colour-sort puzzle for iPhone and iPad.'}`,
  '',
  'OutBrick: Block Sort Puzzle is an iOS game by Mourad Hamdi. This site is its official home: game information, support, legal pages, and the OutBrick Journal — research-backed writing on puzzle design, calmer play and accessibility.',
  '',
  '## Main pages',
  '',
  ...(home ? [mdLine(home)] : []),
  ...mainPages.map(mdLine),
  '',
  '## The OutBrick Journal',
  '',
  ...blogPages.map(mdLine),
  '',
  '## Optional',
  '',
  ...legalPages.map(mdLine),
  `- [RSS feed](${siteUrl}/feed.xml): every journal article, newest first`,
  `- [Sitemap](${siteUrl}/sitemap.xml): every indexable URL`,
  '',
].join('\n');
fs.writeFileSync(path.join(distDir, 'llms.txt'), llms);
console.log(`[postbuild] llms.txt: ${pages.length} pages`);
