// Bing Webmaster Tools, from the command line, with an API key.
//
// Setup (once): in Bing Webmaster Tools add the site (Import from Google Search Console verifies
// it in one step), then Settings → API access → generate a key, and store it in the
// BING_WEBMASTER_API_KEY environment variable.
//
//   node scripts/bing-webmaster.mjs submit     submit /sitemap.xml and every URL in it
//   node scripts/bing-webmaster.mjs report     crawl stats, crawl issues, top queries and pages
//
// IndexNow (scripts/indexnow-submit.mjs) already notifies Bing on each deploy without a key;
// this adds the sitemap registration and the reports that only the Webmaster API gives.

import { readFile } from 'node:fs/promises';

const site = 'https://www.outbrick.site/';
const key = process.env.BING_WEBMASTER_API_KEY;
if (!key) {
  console.error('BING_WEBMASTER_API_KEY is not set. See the header of this file.');
  process.exit(2);
}

async function call(method, name, params = {}, body) {
  const url = new URL(`https://ssl.bing.com/webmaster/api.svc/json/${name}`);
  url.searchParams.set('apikey', key);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const init = body
    ? { method, headers: { 'content-type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) }
    : { method };
  const response = await fetch(url, init);
  const text = await response.text();
  if (!response.ok) throw new Error(`${name}: ${response.status} ${text}`);
  return text ? JSON.parse(text).d : null;
}

const command = process.argv[2] ?? 'report';

if (command === 'submit') {
  await call('POST', 'SubmitFeed', {}, { siteUrl: site, feedUrl: `${site}sitemap.xml` });
  console.log(`Submitted ${site}sitemap.xml`);

  // Prefer the freshly built sitemap; fall back to the live one.
  let xml;
  try {
    xml = await readFile(new URL('../dist/client/sitemap.xml', import.meta.url), 'utf8');
  } catch {
    xml = await (await fetch(`${site}sitemap.xml`)).text();
  }
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const quota = await call('GET', 'GetUrlSubmissionQuota', { siteUrl: site });
  const allowed = Math.min(urls.length, quota?.DailyQuota ?? urls.length);
  if (allowed) await call('POST', 'SubmitUrlBatch', {}, { siteUrl: site, urlList: urls.slice(0, allowed) });
  console.log(`Submitted ${allowed} of ${urls.length} URLs (daily quota ${quota?.DailyQuota ?? 'unknown'}).`);
  process.exit(0);
}

if (command !== 'report') {
  console.error(`Unknown command "${command}". Use submit or report.`);
  process.exit(2);
}

const date = (value) => {
  const ms = Number(/\d+/.exec(String(value))?.[0]);
  return Number.isFinite(ms) ? new Date(ms).toISOString().slice(0, 10) : String(value);
};

console.log(`Bing Webmaster report for ${site}\n`);

const crawl = (await call('GET', 'GetCrawlStats', { siteUrl: site })) ?? [];
console.log('Crawl stats (latest days)');
for (const c of crawl.slice(-7)) {
  console.log(`  ${date(c.Date)}  crawled ${c.CrawledPages}  in index ${c.InIndex}  errors ${c.CrawlErrors}  blocked ${c.BlockedByRobotsTxt}`);
}

const issues = (await call('GET', 'GetCrawlIssues', { siteUrl: site })) ?? [];
console.log(`\nCrawl issues: ${issues.length}`);
for (const i of issues.slice(0, 20)) console.log(`  ${i.Issues}  ${i.Url}`);

for (const [name, label] of [
  ['GetQueryStats', 'queries'],
  ['GetPageStats', 'pages'],
]) {
  const rows = ((await call('GET', name, { siteUrl: site })) ?? []).sort((a, b) => b.Impressions - a.Impressions);
  console.log(`\nTop ${label} (clicks / impressions / avg position)`);
  for (const r of rows.slice(0, 15)) {
    console.log(`  ${String(r.Clicks).padStart(5)} ${String(r.Impressions).padStart(7)} ${String(r.AvgImpressionPosition).padStart(5)}  ${r.Query}`);
  }
  if (!rows.length) console.log('  no data yet');
}
