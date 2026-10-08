// Netlify runs a function named `deploy-succeeded` by itself after every successful deploy
// (an "event-triggered function" — nothing calls it, and it answers no public route).
//
// It does what `pnpm indexnow` does by hand: read the live sitemap and hand every URL to
// IndexNow, which shares it with Bing, Yandex, Seznam, Naver and Yep. Bing's index is also
// what ChatGPT search, Copilot and DuckDuckGo draw on, so this is the fastest way for a new
// or changed page to reach them.
//
// Google has no equivalent: it retired its sitemap "ping" endpoint in 2023 and its Indexing
// API is only for job postings and livestreams. Google finds changes through the sitemap
// submitted in Search Console, whose <lastmod> dates scripts/postbuild.mjs keeps honest.
//
// Only production deploys are submitted: a Deploy Preview lives on a netlify.app address
// that must not be announced to search engines.

import { createSign } from 'node:crypto';

const SITE = 'https://www.outbrick.site';
const KEY = '907d2eae112ce8af8b9eff3298561501'; // public/<KEY>.txt serves the same value
const HOST = new URL(SITE).host;

export const handler = async (event) => {
  let deploy = {};
  try {
    deploy = JSON.parse(event.body || '{}').payload ?? {};
  } catch {
    /* no payload: treat as unknown context and skip */
  }

  if (deploy.context !== 'production') {
    console.log(`[indexnow] skipped: deploy context is "${deploy.context ?? 'unknown'}"`);
    return { statusCode: 200, body: 'skipped' };
  }

  try {
    const res = await fetch(`${SITE}/sitemap.xml`, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`GET /sitemap.xml -> ${res.status}`);
    const xml = await res.text();
    const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(/&amp;/g, '&'))
      .filter((u) => new URL(u).host === HOST);
    // The RSS feed changes whenever a post does; include it so feed readers used by
    // search and AI tools pick it up too.
    urlList.push(`${SITE}/feed.xml`);

    const submit = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urlList.slice(0, 10000) }),
    });
    // 200 = accepted, 202 = accepted while the key is being validated.
    console.log(`[indexnow] ${urlList.length} URLs -> ${submit.status} ${submit.statusText}`);
    if (submit.status !== 200 && submit.status !== 202) console.error(await submit.text());
    await submitToBing(urlList);
  } catch (err) {
    // Never fail loudly: the deploy is already live, and a missed ping only delays a crawl.
    console.error('[indexnow] submission failed:', err);
  }
  await submitToSearchConsole();
  return { statusCode: 200, body: 'ok' };
};

// ---------------------------------------------------------------------------------------
// Google Search Console and Bing Webmaster Tools, when their keys are set (see the headers of
// scripts/search-console.mjs and scripts/bing-webmaster.mjs for the one-time setup). Both only
// re-submit the sitemap (Bing: plus today's URL quota); neither can fail the deploy.

async function submitToSearchConsole() {
  const json = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!json) return;
  try {
    const key = JSON.parse(json);
    const b64url = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');
    const now = Math.floor(Date.now() / 1000);
    const unsigned = `${b64url({ alg: 'RS256', typ: 'JWT' })}.${b64url({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
    const signature = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url');
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
    });
    const token = (await tokenRes.json()).access_token;
    if (!token) throw new Error(`token request -> ${tokenRes.status}`);
    const auth = { authorization: `Bearer ${token}` };
    const sites = await (await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites', { headers: auth })).json();
    const site =
      process.env.GSC_SITE ??
      (sites.siteEntry ?? []).find((s) => s.siteUrl === 'sc-domain:outbrick.site')?.siteUrl ??
      (sites.siteEntry ?? []).find((s) => s.siteUrl.includes('outbrick.site'))?.siteUrl;
    if (!site) throw new Error(`no outbrick.site property is shared with ${key.client_email}`);
    const sitemap = `${SITE}/sitemap.xml`;
    const res = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/sitemaps/${encodeURIComponent(sitemap)}`, { method: 'PUT', headers: auth });
    console.log(`[search-console] ${sitemap} -> ${res.status}`);
  } catch (err) {
    console.error('[search-console] submission failed:', err instanceof Error ? err.message : err);
  }
}

async function submitToBing(urlList) {
  const key = process.env.BING_WEBMASTER_API_KEY;
  if (!key) return;
  const call = async (method, name, params, body) => {
    const url = new URL(`https://ssl.bing.com/webmaster/api.svc/json/${name}`);
    url.searchParams.set('apikey', key);
    for (const [k, v] of Object.entries(params ?? {})) url.searchParams.set(k, v);
    const res = await fetch(url, body ? { method, headers: { 'content-type': 'application/json; charset=utf-8' }, body: JSON.stringify(body) } : { method });
    const text = await res.text();
    if (!res.ok) throw new Error(`${name}: ${res.status} ${text.slice(0, 200)}`);
    return text ? JSON.parse(text).d : null;
  };
  try {
    const siteUrl = `${SITE}/`;
    await call('POST', 'SubmitFeed', {}, { siteUrl, feedUrl: `${SITE}/sitemap.xml` });
    const quota = await call('GET', 'GetUrlSubmissionQuota', { siteUrl });
    const allowed = Math.min(urlList.length, quota?.DailyQuota ?? 0);
    if (allowed) await call('POST', 'SubmitUrlBatch', {}, { siteUrl, urlList: urlList.slice(0, allowed) });
    console.log(`[bing] sitemap submitted; ${allowed} of ${urlList.length} URLs (daily quota ${quota?.DailyQuota ?? 'unknown'})`);
  } catch (err) {
    console.error('[bing] submission failed:', err instanceof Error ? err.message : err);
  }
}
