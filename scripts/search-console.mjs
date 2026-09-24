// Google Search Console, from the command line, with a service account.
//
// Setup (once): create a service account in Google Cloud with the Search Console API enabled,
// download its JSON key, and store the whole JSON in the GSC_SERVICE_ACCOUNT_JSON environment
// variable. In Search Console → Settings → Users and permissions, add the service account's
// email as a Full user on the outbrick.site property (submitting a sitemap needs Full).
//
//   node scripts/search-console.mjs sites       which properties the key can see
//   node scripts/search-console.mjs submit      submit /sitemap.xml
//   node scripts/search-console.mjs report      sitemap status, 28-day queries and pages,
//                                               and index status of the key pages
//
// GSC_SITE overrides the property (e.g. `sc-domain:outbrick.site`); by default the script
// uses whichever outbrick.site property the key has access to.

import { createSign } from 'node:crypto';

const origin = 'https://www.outbrick.site';
const api = 'https://searchconsole.googleapis.com';
const keyJson = process.env.GSC_SERVICE_ACCOUNT_JSON;
if (!keyJson) {
  console.error('GSC_SERVICE_ACCOUNT_JSON is not set. See the header of this file.');
  process.exit(2);
}
const key = JSON.parse(keyJson);

const b64url = (value) => Buffer.from(typeof value === 'string' ? value : JSON.stringify(value)).toString('base64url');

async function accessToken() {
  const now = Math.floor(Date.now() / 1000);
  const claims = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${b64url({ alg: 'RS256', typ: 'JWT' })}.${b64url(claims)}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url');
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(`token: ${response.status} ${JSON.stringify(body)}`);
  return body.access_token;
}

const token = await accessToken();

async function call(method, path, body) {
  const headers = { authorization: `Bearer ${token}` };
  const init = body ? { method, headers: { ...headers, 'content-type': 'application/json' }, body: JSON.stringify(body) } : { method, headers };
  const response = await fetch(api + path, init);
  const text = await response.text();
  if (!response.ok) throw new Error(`${method} ${path}: ${response.status} ${text}`);
  return text ? JSON.parse(text) : {};
}

async function property() {
  if (process.env.GSC_SITE) return process.env.GSC_SITE;
  const { siteEntry = [] } = await call('GET', '/webmasters/v3/sites');
  const match = siteEntry.find((s) => s.siteUrl === 'sc-domain:outbrick.site') ?? siteEntry.find((s) => s.siteUrl.includes('outbrick.site'));
  if (!match) throw new Error(`No outbrick.site property is shared with ${key.client_email}. Add it as a Full user.`);
  return match.siteUrl;
}

const command = process.argv[2] ?? 'report';

if (command === 'sites') {
  const { siteEntry = [] } = await call('GET', '/webmasters/v3/sites');
  for (const s of siteEntry) console.log(`${s.permissionLevel.padEnd(22)} ${s.siteUrl}`);
  process.exit(0);
}

const site = await property();
const sitePath = `/webmasters/v3/sites/${encodeURIComponent(site)}`;
const sitemap = `${origin}/sitemap.xml`;

if (command === 'submit') {
  await call('PUT', `${sitePath}/sitemaps/${encodeURIComponent(sitemap)}`);
  console.log(`Submitted ${sitemap} to ${site}.`);
  process.exit(0);
}

if (command !== 'report') {
  console.error(`Unknown command "${command}". Use sites, submit or report.`);
  process.exit(2);
}

console.log(`Search Console report for ${site}\n`);

const { sitemap: sitemaps = [] } = await call('GET', `${sitePath}/sitemaps`);
console.log('Sitemaps');
for (const s of sitemaps) {
  const counts = (s.contents ?? []).map((c) => `${c.type}: ${c.submitted} submitted`).join(', ');
  console.log(`  ${s.path}  last read ${s.lastDownloaded ?? 'never'}  errors ${s.errors ?? 0}  warnings ${s.warnings ?? 0}  ${counts}`);
}
if (!sitemaps.length) console.log('  none — run `submit`');

const day = (offset) => new Date(Date.now() - offset * 86_400_000).toISOString().slice(0, 10);
for (const dimension of ['query', 'page']) {
  const { rows = [] } = await call('POST', `${sitePath}/searchAnalytics/query`, {
    startDate: day(30),
    endDate: day(2),
    dimensions: [dimension],
    rowLimit: 15,
  });
  console.log(`\nTop ${dimension === 'query' ? 'queries' : 'pages'}, last 28 days (clicks / impressions / CTR / position)`);
  for (const r of rows) {
    console.log(`  ${String(r.clicks).padStart(5)} ${String(r.impressions).padStart(7)} ${(r.ctr * 100).toFixed(1).padStart(5)}% ${r.position.toFixed(1).padStart(5)}  ${r.keys[0]}`);
  }
  if (!rows.length) console.log('  no data yet');
}

console.log('\nIndex status of key pages');
for (const path of ['/', '/play', '/blog', '/mascots', '/blog/how-to-solve-sliding-block-puzzles']) {
  const { inspectionResult } = await call('POST', '/v1/urlInspection/index:inspect', { inspectionUrl: origin + path, siteUrl: site });
  const status = inspectionResult?.indexStatusResult ?? {};
  console.log(`  ${(status.coverageState ?? 'unknown').padEnd(40)} ${path}  last crawl ${status.lastCrawlTime ?? 'never'}`);
}
