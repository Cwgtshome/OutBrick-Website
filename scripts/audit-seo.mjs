// SEO audit of the built site. Run after `pnpm build`:
//
//   node scripts/audit-seo.mjs          # human-readable report on stdout
//   node scripts/audit-seo.mjs --json   # machine-readable
//
// Checks every prerendered page in dist/client. Pages that netlify.toml 301s away, and
// noindex pages, get only the checks that still matter for them (links, JSON-LD, images).
// Exit code is 1 when any error-level finding exists, so it can gate CI if wanted.

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

    // meta description
    const descs = metaContent(html, 'description');
    if (descs.length !== 1) err(`${descs.length} meta descriptions (want 1)`);
    else if (displayLength(descs[0]) < 70 || displayLength(descs[0]) > 160) warn(`meta description length ${displayLength(descs[0])} (want 70–160, CJK counted as 2)`);

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

  // JSON-LD
  for (const [i, block] of jsonLdBlocks(html).entries()) {
    try {
      const data = JSON.parse(block);
      const nodes = Array.isArray(data) ? data : [data];
      for (const n of nodes) {
        if (!n['@context'] && !data['@context']) warn(`JSON-LD block ${i + 1} has no @context`);
        if (!n['@type'] && !n['@graph']) warn(`JSON-LD block ${i + 1} has no @type`);
      }
    } catch (e) {
      err(`JSON-LD block ${i + 1} does not parse: ${e.message}`);
    }
  }

  // Images
  const imgProblems = new Map();
  for (const [tag] of body.matchAll(/<img\b[^>]*>/gi)) {
    const src = attr(tag, 'src') ?? '(no src)';
    const missing = [];
    if (attr(tag, 'alt') === undefined) missing.push('alt');
    if (attr(tag, 'width') === undefined) missing.push('width');
    if (attr(tag, 'height') === undefined) missing.push('height');
    if (missing.length) imgProblems.set(src, missing);
    if (src.startsWith('/') && !resolves(src.split(/[?#]/)[0])) err(`<img> 404s: ${src}`);
  }
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

if (json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  let errors = 0;
  let warnings = 0;
  for (const page of report) {
    errors += page.issues.filter((i) => i.level === 'error').length;
    warnings += page.issues.filter((i) => i.level === 'warn').length;
    if (!page.issues.length) continue;
    console.log(`\n${page.route}  [${page.kind}]`);
    for (const i of page.issues) console.log(`  ${i.level === 'error' ? 'ERROR' : 'warn '}  ${i.msg}`);
  }
  const clean = report.filter((p) => !p.issues.length).length;
  console.log(`\n${report.length} pages audited: ${clean} clean, ${errors} errors, ${warnings} warnings.`);
}

if (report.some((p) => p.issues.some((i) => i.level === 'error'))) process.exitCode = 1;
