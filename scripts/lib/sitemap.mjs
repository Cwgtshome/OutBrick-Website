// Read every page URL out of the sitemap, following a sitemap index to its children.
//
// /sitemap.xml is a <sitemapindex> of sitemap-{pages,journal}-<locale>.xml (scripts/postbuild.mjs).
// A reader that wants every URL — IndexNow, Bing, the browser audits — must open each child.
// `load(url)` returns the XML text of a sitemap URL: from dist/client for a local build, or by
// fetch for the live site. netlify/functions/deploy-succeeded.mjs repeats this logic, because a
// Netlify function is bundled on its own.

import fs from 'node:fs';
import path from 'node:path';
import { distDir, siteUrl } from './pages.mjs';

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");

/** The child sitemap URLs of an index, or [] for a plain urlset. */
export function childSitemaps(xml) {
  if (!/<sitemapindex\b/.test(xml)) return [];
  return [...xml.matchAll(/<sitemap>\s*<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim()));
}

/** The page URLs of a urlset (never <image:loc> or xhtml:link). */
export function pageLocs(xml) {
  return [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim()));
}

/** Every page URL reachable from the sitemap at `rootUrl`, children followed, duplicates dropped. */
export async function sitemapUrls(load, rootUrl = `${siteUrl}/sitemap.xml`) {
  const seen = new Set();
  const urls = new Set();
  const visit = async (url, depth) => {
    if (seen.has(url) || depth > 2) return;
    seen.add(url);
    const xml = await load(url);
    const kids = childSitemaps(xml);
    if (kids.length) for (const kid of kids) await visit(kid, depth + 1);
    else for (const loc of pageLocs(xml)) urls.add(loc);
  };
  await visit(rootUrl, 0);
  return [...urls];
}

/** Load a sitemap URL from the local build (dist/client). */
export function loadLocal(url) {
  const pathname = new URL(url).pathname;
  return fs.readFileSync(path.join(distDir, pathname), 'utf8');
}

/** Load a sitemap URL from the network. */
export async function loadLive(url) {
  const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}
