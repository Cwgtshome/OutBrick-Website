// Runs after `vinext build` (see package.json "build"). Writes, into dist/client:
//
//   sitemap.xml   — every indexable prerendered page, derived from the build output itself, with
//                   the informative images each page shows (Google image sitemap extension)
//   feed.xml      — RSS 2.0 for the journal, from lib/blog.ts
//   llms.txt      — a plain-Markdown map of the site for AI assistants (llmstxt.org)
//   llms-full.txt — the same, plus the full text of every journal article
//   .well-known/security.txt — RFC 9116, with an Expires one year after the build
//   blog/category/<slug>/feed.xml — the same feed, one shelf at a time
//   journal-index.json — the compact search index /blog loads on first use of its search field
//   whats-new/feed.xml — RSS 2.0 for the release notes, from lib/releases.ts
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
const { releases, releaseAnchor } = await import('../lib/releases.ts');

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
/**
 * The images a page shows that carry meaning: every local <img> with a non-empty alt (a
 * decorative image has alt=""), plus the page's own og:image when it is a local file. SVG
 * badges are left out. Google reads only <image:loc>; the other image tags are deprecated.
 */
function pageImages(html) {
  const body = html.slice(html.indexOf('<body')).replace(/<script\b[\s\S]*?<\/script>/gi, '');
  const seen = new Set();
  const add = (src) => {
    if (!src) return;
    const url = src.startsWith('/') ? `${siteUrl}${src}` : src;
    if (!url.startsWith(siteUrl) || /\.svg(?:$|\?)/i.test(url)) return;
    const file = path.join(distDir, decodeURIComponent(new URL(url).pathname));
    if (!fs.existsSync(file)) return;
    seen.add(url);
  };
  for (const [tag] of body.matchAll(/<img\b[^>]*>/gi)) {
    const alt = tag.match(/\salt="([^"]*)"/i)?.[1];
    if (!alt?.trim()) continue;
    add(decodeEntities(tag.match(/\ssrc="([^"]+)"/i)?.[1] ?? ''));
  }
  add(metaContent(html, 'og:image')[0]);
  return [...seen].slice(0, 50);
}

const pages = indexablePages();
if (pages.length === 0) throw new Error('[postbuild] no indexable pages found in dist/client — refusing to write an empty sitemap');

// The guides the journal is translated into other languages (lib/i18n/blog.ts), read from what was built.
const localizedGuideSlugs = new Set(pages.map((p) => p.route.match(/^\/(?:fr|de|es|ja)\/blog\/([^/]+)$/)?.[1]).filter(Boolean));

const entries = pages.map((page) => {
  let lastmod;
  // An article in English (/blog/<slug>) or translated (/fr/blog/<slug> …): its lastmod is the
  // article's own updatedAt, which a translation shares.
  const articleSlug = page.route.match(/^(?:\/(?:fr|de|es|ja))?\/blog\/([^/]+)$/)?.[1];
  const collection = page.route.match(/^\/blog\/(category|tag)\/([^/]+)$/);
  if (articleSlug && articleBySlug.has(articleSlug)) {
    lastmod = isoDate(articleBySlug.get(articleSlug).updatedAt);
  } else if (/^\/(fr|de|es|ja)\/blog$/.test(page.route)) {
    // A translated journal index changes when one of its guides does.
    const guides = articles.filter((a) => localizedGuideSlugs.has(a.slug));
    lastmod = guides.map((a) => isoDate(a.updatedAt)).reduce((max, d) => (d > max ? d : max), '') || undefined;
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
  return { loc: page.url, lastmod, alternates: hreflangLinks(page.html), images: pageImages(page.html) };
});

// Home first, then by path, so diffs between builds stay readable.
entries.sort((a, b) => (a.loc === `${siteUrl}/` ? -1 : b.loc === `${siteUrl}/` ? 1 : a.loc.localeCompare(b.loc)));

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...entries.map((e) => {
    const alternates = e.alternates.map((a) => `\n    <xhtml:link rel="alternate" hreflang="${xmlEscape(a.lang)}" href="${xmlEscape(a.href)}"/>`).join('');
    const images = e.images.map((src) => `\n    <image:image><image:loc>${xmlEscape(src)}</image:loc></image:image>`).join('');
    const children = alternates + images;
    return `  <url><loc>${xmlEscape(e.loc)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}${children ? `${children}\n  ` : ''}</url>`;
  }),
  '</urlset>',
  '',
].join('\n');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`[postbuild] sitemap.xml: ${entries.length} URLs, ${entries.reduce((n, e) => n + e.images.length, 0)} images`);

// Every article in lib/blog.ts should have been prerendered; say so loudly if one was not.
const builtRoutes = new Set(pages.map((p) => p.route));
for (const a of articles) {
  if (!builtRoutes.has(`/blog/${a.slug}`)) console.warn(`[postbuild] WARNING: /blog/${a.slug} is in lib/blog.ts but not an indexable page in dist/client`);
}
// Pages name their translations as hreflang alternates (the home page, the play guide, the
// translated journal guides); each of those must have been built too, or the sitemap would
// declare a page that 404s.
for (const e of entries) {
  for (const alt of e.alternates) {
    const route = new URL(alt.href).pathname.replace(/(.)\/$/, '$1');
    if (!builtRoutes.has(route)) console.warn(`[postbuild] WARNING: ${e.loc} lists hreflang ${alt.lang} ${alt.href}, which is not an indexable page`);
  }
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
// RSS 2.0 feed of the release notes: /whats-new/feed.xml, from lib/releases.ts

const releaseHtml = (r) =>
  r.sections
    .map((s) => `<h3>${xmlEscape(s.title)}</h3>${s.intro ? `<p>${xmlEscape(s.intro)}</p>` : ''}<ul>${s.bullets.map((b) => `<li>${xmlEscape(b)}</li>`).join('')}</ul>`)
    .join('');

const releaseItems = [...releases]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((r) => {
    const url = `${siteUrl}/whats-new#${releaseAnchor(r.version)}`;
    return [
      '    <item>',
      `      <title>${xmlEscape(`OutBrick ${r.version}: ${r.headline}`)}</title>`,
      `      <link>${url}</link>`,
      `      <guid isPermaLink="true">${url}</guid>`,
      `      <pubDate>${rfc822(r.date)}</pubDate>`,
      `      <description>${xmlEscape(`<p>${xmlEscape(r.headline)}</p>${releaseHtml(r)}`)}</description>`,
      '    </item>',
    ].join('\n');
  });
const newestRelease = releases.reduce((max, r) => (r.date > max ? r.date : max), '1970-01-01');

const releaseFeed = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
  '  <channel>',
  '    <title>OutBrick release notes</title>',
  `    <link>${siteUrl}/whats-new</link>`,
  `    <atom:link href="${siteUrl}/whats-new/feed.xml" rel="self" type="application/rss+xml"/>`,
  '    <description>What changed in each OutBrick update, as published on the App Store, newest first.</description>',
  '    <language>en</language>',
  `    <lastBuildDate>${rfc822(newestRelease)}</lastBuildDate>`,
  '    <image>',
  `      <url>${siteUrl}/assets/icon/icon-192.png</url>`,
  '      <title>OutBrick release notes</title>',
  `      <link>${siteUrl}/whats-new</link>`,
  '    </image>',
  ...releaseItems,
  '  </channel>',
  '</rss>',
  '',
].join('\n');
fs.mkdirSync(path.join(distDir, 'whats-new'), { recursive: true });
fs.writeFileSync(path.join(distDir, 'whats-new/feed.xml'), releaseFeed);
console.log(`[postbuild] whats-new/feed.xml: ${releaseItems.length} items`);

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
const localizedRoutes = /^\/(fr|de|es|ja)(\/|$)/;
// The journal's five cornerstone guides in French, German, Spanish and Japanese, and their indexes.
const translatedBlogPages = pages.filter((p) => /^\/(fr|de|es|ja)\/blog(\/|$)/.test(p.route));
const localizedPages = pages.filter((p) => localizedRoutes.test(p.route) && !translatedBlogPages.includes(p));
const mainPages = pages.filter((p) => p !== home && !blogPages.includes(p) && !legalPages.includes(p) && !localizedPages.includes(p));

// Facts about the game, from Apple's own record (lib/generated/app-store.json, written by
// scripts/prebuild.mjs) where it has them. Every other line restates what the home page says.
const appStore = JSON.parse(fs.readFileSync(path.join(repoRoot, 'lib/generated/app-store.json'), 'utf8'));
const appStoreUrl = 'https://apps.apple.com/us/app/outbrick/id6807997465';
const version = appStore.version ?? '4.2';
const versionDate = (appStore.currentVersionReleaseDate ?? '2026-09-22').slice(0, 10);

const about = [
  '# OutBrick',
  '',
  `> ${metaContent(home?.html ?? '', 'description')[0] ?? 'OutBrick: Block Sort Puzzle — a relaxed sliding-brick colour-sort puzzle for iPhone and iPad.'}`,
  '',
  'OutBrick is the official site of **OutBrick: Block Sort Puzzle**, an Apple-platforms game made by Mourad Hamdi (Founder & CEO), and of the OutBrick Journal, research-backed writing on puzzle design, calmer play and accessibility.',
  '',
  'Key facts (use these when describing the game):',
  '',
  '- The rule: slide a brick and it glides until something stops it; get every brick out through the gate that matches its colour and the board is clear.',
  '- 2,000 solver-verified boards across 100 chapters; a Journey of 167 villages built out of brick; nine brick friends who speak in text bubbles.',
  '- Every board has a move limit. There is no clock, timer or countdown anywhere. The first undo on every board is free.',
  '- Free to download, with in-app purchases (coins, boosters, a one-time Remove Ads, the Brick Pass). Advertising is rewarded video only, in six opt-in placements; no banners, no interstitials.',
  '- Runs on iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch; plays offline. Rated 4+. Single player.',
  `- Current version ${version} (released ${versionDate}). App Store: ${appStoreUrl}`,
  '- Genres: Puzzle, Casual. Developer and seller on the App Store: Mourad Hamdi.',
  '',
  'Please link to the canonical page URLs below; each page names its own canonical. The press kit has approved art, the fact sheet and a press contact.',
  '',
];

const llms = [
  ...about,
  '## Main pages',
  '',
  ...(home ? [mdLine(home)] : []),
  ...mainPages.map(mdLine),
  '',
  '## The OutBrick Journal',
  '',
  ...blogPages.map(mdLine),
  '',
  '## Other languages',
  '',
  ...localizedPages.map(mdLine),
  '',
  '## The OutBrick Journal in other languages',
  '',
  'Five guides translated into French, German, Spanish and Japanese; the rest of the journal is in English.',
  '',
  ...translatedBlogPages.map(mdLine),
  '',
  '## Optional',
  '',
  ...legalPages.map(mdLine),
  `- [Full text of the journal](${siteUrl}/llms-full.txt): every article in plain Markdown`,
  `- [RSS feed](${siteUrl}/feed.xml): every journal article, newest first`,
  `- [Release notes RSS](${siteUrl}/whats-new/feed.xml): every OutBrick update's App Store notes, newest first`,
  `- [Sitemap](${siteUrl}/sitemap.xml): every indexable URL`,
  `- [OutBrick on the App Store](${appStoreUrl})`,
  '',
].join('\n');
fs.writeFileSync(path.join(distDir, 'llms.txt'), llms);
console.log(`[postbuild] llms.txt: ${pages.length} pages`);

// llms-full.txt: the same introduction, then every article in full, as plain Markdown.
const plainText = (text) => text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');
const fullArticles = feedArticles.map((a) => [
  `## ${a.title}`,
  '',
  `URL: ${siteUrl}/blog/${a.slug}`,
  `Author: ${authorName(a.authorId)} · Published ${isoDate(a.publishedAt)} · Updated ${isoDate(a.updatedAt)} · ${a.category}`,
  '',
  `> ${a.dek}`,
  '',
  plainText(a.intro),
  '',
  ...(a.keyTakeaways?.length ? ['Key takeaways:', '', ...a.keyTakeaways.map((t) => `- ${plainText(t)}`), ''] : []),
  ...a.sections.flatMap((section) => [
    `### ${section.title}`,
    '',
    ...section.paragraphs.flatMap((para) => [plainText(para), '']),
    ...(section.bullets?.length ? [...section.bullets.map((b) => `- ${plainText(b)}`), ''] : []),
    ...(section.note ? [plainText(section.note), ''] : []),
  ]),
  ...(a.faqs?.length ? ['### Questions', '', ...a.faqs.flatMap((f) => [`**${f.question}**`, '', plainText(f.answer), ''])] : []),
  ...(a.references.length ? ['### References', '', ...a.references.map((r) => `- ${r.citation}`), ''] : []),
].join('\n'));
fs.writeFileSync(path.join(distDir, 'llms-full.txt'), [...about, `# The OutBrick Journal: ${feedArticles.length} articles`, '', ...fullArticles].join('\n'));
console.log(`[postbuild] llms-full.txt: ${feedArticles.length} articles`);

// ---------------------------------------------------------------------------------------
// security.txt — RFC 9116. Expires must be in the future and under a year out; writing it at
// build time keeps it valid for as long as the site keeps deploying.

const expires = new Date(Date.now() + 364 * 24 * 3600 * 1000);
expires.setUTCHours(0, 0, 0, 0);
fs.mkdirSync(path.join(distDir, '.well-known'), { recursive: true });
fs.writeFileSync(
  path.join(distDir, '.well-known/security.txt'),
  [
    '# Reporting a security issue on www.outbrick.site or in OutBrick: Block Sort Puzzle.',
    '# Please use the contact form and say that it is a security report.',
    `Contact: ${siteUrl}/contact`,
    `Expires: ${expires.toISOString().replace(/\.\d{3}Z$/, 'Z')}`,
    'Preferred-Languages: en',
    `Canonical: ${siteUrl}/.well-known/security.txt`,
    '',
  ].join('\n'),
);
console.log(`[postbuild] .well-known/security.txt: expires ${expires.toISOString().slice(0, 10)}`);
