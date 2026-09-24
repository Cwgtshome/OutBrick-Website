// SEO audit of the built site. Run after `pnpm build`:
//
//   node scripts/audit-seo.mjs          # human-readable report on stdout
//   node scripts/audit-seo.mjs --json   # machine-readable
//
// Checks every prerendered page in dist/client. Pages that netlify.toml 301s away, and
// noindex pages, get only the checks that still matter for them (links, JSON-LD, images).
// Structured data is checked per type against Google's documentation by
// scripts/lib/structured-data-rules.mjs. After the pages, the site-wide files are checked:
// sitemap.xml (with its image entries), feed.xml, robots.txt, llms.txt, security.txt and the
// web app manifest. Exit code is 1 when any error-level finding exists; CI runs this after
// every build (.github/workflows/checks.yml). A "note" is printed but never fails the run.

import fs from 'node:fs';
import path from 'node:path';
import {
  decodeEntities,
  distDir,
  fileToRoute,
  headOf,
  isNoindex,
  jsonLdBlocks,
  linkHrefs,
  listHtmlFiles,
  metaContent,
  readNetlifyRedirects,
  redirectedRoutes,
  routeToUrl,
  siteUrl,
} from './lib/pages.mjs';
import { checkStructuredData } from './lib/structured-data-rules.mjs';

const json = process.argv.includes('--json');
const siteHost = new URL(siteUrl).host;
const aliases = redirectedRoutes();
const redirects = readNetlifyRedirects();

/** Does an internal path resolve to something Netlify would serve with 200/301? */
function resolves(pathname) {
  let p = decodeURIComponent(pathname);
  if (p.length > 1) p = p.replace(/\/$/, '');
  for (const r of redirects) {
    if (r.from === p) return true;
    if (r.from.endsWith('/*') && p.startsWith(r.from.slice(0, -1))) return true;
  }
  const rel = p.replace(/^\//, '');
  const candidates = rel === '' ? ['index.html'] : [rel, `${rel}.html`, `${rel}/index.html`];
  return candidates.some((c) => fs.existsSync(path.join(distDir, c)) && fs.statSync(path.join(distDir, c)).isFile());
}

const stripScripts = (html) => html.replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '');
const stripSvg = (html) => html.replace(/<svg\b[\s\S]*?<\/svg>/gi, '');
const textOf = (s) => decodeEntities(s.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}(?:="([^"]*)")?(?=[\\s/>])`, 'i'));
  return m ? decodeEntities(m[1] ?? '') : undefined;
};

/**
 * Length as a search result shows it. Google truncates titles and snippets by pixel width, and
 * a CJK character (kana, kanji, full-width punctuation) is about twice as wide as a Latin one —
 * so a Japanese title of 28 characters fills the line an English one of ~56 does. Counting CJK
 * as 2 keeps one set of 30–65 / 70–160 limits meaningful for every language on the site.
 */
const CJK = /[\u1100-\u11ff\u2e80-\u9fff\uac00-\ud7af\uf900-\ufaff\ufe30-\ufe4f\uff00-\uff60\uffe0-\uffe6]/u;
const displayLength = (s) => [...s].reduce((n, ch) => n + (CJK.test(ch) ? 2 : 1), 0);

const report = [];
const homeRoutes = new Set(['/', '/fr', '/de', '/es', '/ja']);
const seenTitles = new Map();
const seenDescriptions = new Map();

for (const file of listHtmlFiles()) {
  const route = fileToRoute(file);
  if (/^\/google[0-9a-f]+$/.test(route)) continue;
  const html = fs.readFileSync(path.join(distDir, file), 'utf8');
  const head = headOf(html);
  const url = routeToUrl(route);
  const kind = route === '/404' ? '404' : aliases.has(route) ? 'alias (301)' : isNoindex(html) ? 'noindex' : 'indexable';
  const full = kind === 'indexable';
  const issues = [];
  const err = (msg) => issues.push({ level: 'error', msg });
  const warn = (msg) => issues.push({ level: 'warn', msg });

  const body = stripSvg(stripScripts(html));

  if (full) {
    // <title>
    const titles = [...stripSvg(head).matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((m) => textOf(m[1]));
    if (titles.length !== 1) err(`${titles.length} <title> elements in <head> (want 1)`);
    const title = titles[0] ?? '';
    const titleLength = displayLength(title);
    if (title && (titleLength < 30 || titleLength > 65)) warn(`title length ${titleLength} (want 30–65, CJK counted as 2): "${title}"`);
    // The brand closes a title whenever it fits (" — OutBrick" is 11 characters); a long
    // article headline is left whole rather than truncated to make room.
    if (title && !/OutBrick/.test(title) && titleLength <= 54) warn(`title does not name the brand: "${title}"`);
    seenTitles.set(title, [...(seenTitles.get(title) ?? []), route]);

    // meta description
    const descs = metaContent(html, 'description');
    if (descs.length !== 1) err(`${descs.length} meta descriptions (want 1)`);
    else if (displayLength(descs[0]) < 70 || displayLength(descs[0]) > 160) warn(`meta description length ${displayLength(descs[0])} (want 70–160, CJK counted as 2)`);
    if (descs[0]) seenDescriptions.set(descs[0], [...(seenDescriptions.get(descs[0]) ?? []), route]);

    // canonical
    const canonicals = linkHrefs(html, 'canonical');
    if (canonicals.length !== 1) err(`${canonicals.length} canonical links (want 1)`);
    else {
      const c = canonicals[0];
      let cu;
      try { cu = new URL(c); } catch { err(`canonical is not absolute: ${c}`); }
      if (cu) {
        if (cu.host !== siteHost) err(`canonical host ${cu.host} (want ${siteHost})`);
        if (cu.pathname !== '/' && cu.pathname.endsWith('/')) err(`canonical has trailing slash: ${c}`);
        const want = route === '/' ? '/' : route;
        if (cu.pathname !== want) err(`canonical points elsewhere: ${c} (page is ${want})`);
      }
    }

    // Open Graph / Twitter
    for (const key of ['og:title', 'og:description', 'og:image']) {
      const v = metaContent(html, key);
      if (!v.length) err(`missing ${key}`);
      else if (key === 'og:image' && !v[0].startsWith('https://')) err(`og:image not absolute: ${v[0]}`);
    }
    const ogImage = metaContent(html, 'og:image')[0];
    if (ogImage?.startsWith(siteUrl) && !resolves(new URL(ogImage).pathname)) err(`og:image 404s: ${ogImage}`);
    const ogUrl = metaContent(html, 'og:url')[0];
    if (ogUrl && canonicals[0] && ogUrl.replace(/\/$/, '') !== canonicals[0].replace(/\/$/, '')) warn(`og:url ${ogUrl} differs from canonical ${canonicals[0]}`);
    if (!metaContent(html, 'twitter:card').length) err('missing twitter:card');

    // <h1>
    const h1s = [...body.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1s.length !== 1) err(`${h1s.length} <h1> elements (want 1)`);
  }

  // JSON-LD: parsed into one graph per page and checked per type (scripts/lib/structured-data-rules.mjs)
  const canonical = linkHrefs(html, 'canonical')[0];
  const { issues: sdIssues } = checkStructuredData({
    blocks: jsonLdBlocks(html),
    url,
    route,
    indexable: full,
    isHome: homeRoutes.has(route),
    bodyText: textOf(body),
    siteUrl,
    resolves,
    canonical: full ? canonical : undefined,
  });
  issues.push(...sdIssues);

  if (full) {
    // Head extras every indexable page should carry
    if (!metaContent(html, 'og:image:alt').length) warn('missing og:image:alt');
    if (!metaContent(html, 'theme-color').length) warn('missing theme-color');
    const manifest = linkHrefs(html, 'manifest');
    if (manifest.length !== 1) err(`${manifest.length} <link rel="manifest"> (want 1)`);
    else if (!resolves(new URL(manifest[0], url).pathname)) err(`manifest 404s: ${manifest[0]}`);
    const isArticle = metaContent(html, 'og:type')[0] === 'article' && jsonLdBlocks(html).some((b) => /"@type":\s*(\[[^\]]*)?"(Article|BlogPosting|NewsArticle)"/.test(b) && /"datePublished"/.test(b));
    if (isArticle && !metaContent(html, 'article:author').length) warn('article without article:author');
    if (isArticle && !metaContent(html, 'article:published_time').length) warn('article without article:published_time');
  }

  // Images
  const imgProblems = new Map();
  let highPriority = 0;
  for (const [tag] of body.matchAll(/<img\b[^>]*>/gi)) {
    const src = attr(tag, 'src') ?? '(no src)';
    const alt = attr(tag, 'alt');
    const priority = (attr(tag, 'fetchPriority') ?? attr(tag, 'fetchpriority'))?.toLowerCase();
    const loading = attr(tag, 'loading')?.toLowerCase();
    if (priority === 'high') {
      highPriority += 1;
      if (loading === 'lazy') err(`<img> is both fetchpriority="high" and loading="lazy": ${src}`);
    }
    if (alt) {
      if (/\.(png|jpe?g|webp|avif|gif|svg)\b/i.test(alt)) warn(`<img> alt looks like a file name: "${alt}" (${src})`);
      if (/^(image|picture|photo|graphic|img|icon|logo|screenshot)$/i.test(alt.trim())) warn(`<img> alt says nothing: "${alt}" (${src})`);
      if (alt.length > 250) warn(`<img> alt is ${alt.length} characters (keep it under 250): ${src}`);
    }
    const missing = [];
    if (attr(tag, 'alt') === undefined) missing.push('alt');
    if (attr(tag, 'width') === undefined) missing.push('width');
    if (attr(tag, 'height') === undefined) missing.push('height');
    if (missing.length) imgProblems.set(src, missing);
    if (src.startsWith('/') && !resolves(src.split(/[?#]/)[0])) err(`<img> 404s: ${src}`);
  }
  if (highPriority > 1) warn(`${highPriority} images with fetchpriority="high" (want at most 1, the LCP image)`);
  if (imgProblems.size) {
    const noAlt = [...imgProblems].filter(([, m]) => m.includes('alt'));
    if (noAlt.length) err(`${noAlt.length} <img> without alt: ${noAlt.map(([s]) => s).join(', ')}`);
    const noDims = [...imgProblems].filter(([, m]) => m.includes('width') || m.includes('height'));
    if (noDims.length) warn(`${noDims.length} <img> without width/height (CLS): ${noDims.map(([s]) => s).slice(0, 6).join(', ')}${noDims.length > 6 ? ', …' : ''}`);
  }

  // Internal links
  const broken = new Set();
  for (const [tag] of body.matchAll(/<a\b[^>]*>/gi)) {
    const href = attr(tag, 'href');
    if (!href || href.startsWith('#') || /^(mailto|tel|sms|javascript):/i.test(href)) continue;
    let u;
    try { u = new URL(href, url); } catch { broken.add(href); continue; }
    if (u.host !== siteHost && u.host !== siteHost.replace(/^www\./, '')) continue;
    if (!resolves(u.pathname)) broken.add(href);
    if (aliases.has(u.pathname.replace(/(.)\/$/, '$1'))) warn(`links to redirecting alias ${href}`);
  }
  for (const href of broken) err(`internal link 404s: ${href}`);

  report.push({ file: `dist/client/${file}`, route, kind, issues });
}

// Titles and descriptions must be unique across indexable pages.
for (const [label, seen] of /** @type {[string, Map<string, string[]>][]} */ ([['title', seenTitles], ['meta description', seenDescriptions]])) {
  for (const [text, routes] of seen) {
    if (routes.length < 2) continue;
    for (const route of routes) report.find((p) => p.route === route)?.issues.push({ level: 'warn', msg: `${label} shared with ${routes.filter((r) => r !== route).join(', ')}: "${text.slice(0, 80)}"` });
  }
}

// ---------------------------------------------------------------------------------------
// Site-wide files

/**
 * Just enough XML checking to catch a broken file: every tag closed in order, attributes
 * quoted, and no bare `&`. The files are machine-written, so a failure here means the writer
 * broke, not that a human typed something odd.
 */
function xmlProblems(xml) {
  const problems = [];
  if (!xml.startsWith('<?xml')) problems.push('no XML declaration');
  const body = xml.replace(/<\?xml[^>]*\?>/, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<!\[CDATA\[[\s\S]*?\]\]>/g, '');
  if (/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);)/i.test(body)) problems.push('unescaped &');
  const stack = [];
  for (const [tag, close, name, rest] of body.matchAll(/<(\/?)([A-Za-z_][\w:.-]*)([^>]*)>/g)) {
    if (/\s[\w:.-]+=(?!["'])/.test(rest)) problems.push(`unquoted attribute in ${tag.slice(0, 60)}`);
    if (close) {
      const open = stack.pop();
      if (open !== name) {
        problems.push(`</${name}> closes <${open}>`);
        break;
      }
    } else if (!rest.trim().endsWith('/')) stack.push(name);
  }
  if (stack.length) problems.push(`unclosed <${stack.at(-1)}>`);
  return problems;
}

function fileIssues(rel, check) {
  const issues = [];
  const file = path.join(distDir, rel);
  if (!fs.existsSync(file)) issues.push({ level: 'error', msg: 'missing from dist/client' });
  else check(fs.readFileSync(file, 'utf8'), (msg) => issues.push({ level: 'error', msg }));
  report.push({ file: `dist/client/${rel}`, route: `/${rel}`, kind: 'file', issues });
}

const indexableUrls = new Set(report.filter((p) => p.kind === 'indexable').map((p) => routeToUrl(p.route)));

fileIssues('sitemap.xml', (xml, err) => {
  xmlProblems(xml).forEach((p) => err(`not well-formed: ${p}`));
  if (!xml.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')) err('missing the sitemap namespace');
  if (xml.includes('<image:') && !xml.includes('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"')) err('image entries without the image namespace');
  const locs = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>/g)].map((m) => decodeEntities(m[1]));
  if (locs.length > 50000) err(`${locs.length} URLs (a sitemap holds at most 50,000)`);
  for (const loc of locs) if (!indexableUrls.has(loc)) err(`lists ${loc}, which is not an indexable page`);
  for (const u of indexableUrls) if (!locs.includes(u)) err(`does not list indexable page ${u}`);
  for (const [, loc] of xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) {
    const u = new URL(decodeEntities(loc));
    if (u.host !== siteHost || !resolves(u.pathname)) err(`image ${loc} does not exist`);
  }
  for (const [, d] of xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) if (!/^\d{4}-\d{2}-\d{2}/.test(d)) err(`lastmod "${d}" is not a W3C datetime`);
  for (const [block] of xml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
    if ((block.match(/<image:image>/g) ?? []).length > 1000) err('more than 1,000 images on one URL');
  }
});

fileIssues('feed.xml', (xml, err) => {
  xmlProblems(xml).forEach((p) => err(`not well-formed: ${p}`));
  if (!/<rss version="2.0"/.test(xml)) err('not RSS 2.0');
  for (const [, link] of xml.matchAll(/<link>([^<]+)<\/link>/g)) {
    const u = new URL(link);
    if (u.host === siteHost && !resolves(u.pathname)) err(`link ${link} 404s`);
  }
});

fileIssues('robots.txt', (txt, err) => {
  if (/^\s*Disallow:\s*\/\s*$/im.test(txt)) err('Disallow: / blocks the whole site');
  if (!txt.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) err('does not point at the sitemap');
});

fileIssues('llms.txt', (txt, err) => {
  if (!txt.startsWith('# ')) err('does not start with an H1 (llmstxt.org)');
  for (const [, href] of txt.matchAll(/\]\((https:\/\/[^)]+)\)/g)) {
    const u = new URL(href);
    if (u.host === siteHost && !resolves(u.pathname)) err(`links to ${href}, which 404s`);
  }
});

fileIssues('.well-known/security.txt', (txt, err) => {
  if (!/^Contact: \S+/m.test(txt)) err('no Contact field (RFC 9116)');
  const expires = txt.match(/^Expires: (\S+)/m)?.[1];
  if (!expires) err('no Expires field (RFC 9116)');
  else if (!(new Date(expires) > new Date())) err(`Expires ${expires} has passed`);
  else if (new Date(expires) - new Date() > 366 * 24 * 3600 * 1000) err(`Expires ${expires} is more than a year out`);
});

fileIssues('site.webmanifest', (text, err) => {
  let manifest;
  try {
    manifest = JSON.parse(text);
  } catch (e) {
    err(`does not parse: ${e.message}`);
    return;
  }
  for (const key of ['name', 'short_name', 'start_url', 'display', 'icons']) if (!manifest[key]) err(`no ${key}`);
  for (const size of ['192x192', '512x512']) {
    const icon = (manifest.icons ?? []).find((i) => i.sizes === size);
    if (!icon) err(`no ${size} icon`);
    else if (!resolves(icon.src)) err(`icon ${icon.src} 404s`);
  }
});

if (json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  let errors = 0;
  let warnings = 0;
  let notes = 0;
  for (const page of report) {
    errors += page.issues.filter((i) => i.level === 'error').length;
    warnings += page.issues.filter((i) => i.level === 'warn').length;
    notes += page.issues.filter((i) => i.level === 'note').length;
    if (!page.issues.length) continue;
    console.log(`\n${page.route}  [${page.kind}]`);
    for (const i of page.issues) console.log(`  ${i.level === 'error' ? 'ERROR' : i.level === 'warn' ? 'warn ' : 'note '}  ${i.msg}`);
  }
  const clean = report.filter((p) => !p.issues.some((i) => i.level !== 'note')).length;
  console.log(`\n${report.length} pages and files audited: ${clean} clean, ${errors} errors, ${warnings} warnings${notes ? `, ${notes} notes` : ''}.`);
}

if (report.some((p) => p.issues.some((i) => i.level === 'error'))) process.exitCode = 1;
