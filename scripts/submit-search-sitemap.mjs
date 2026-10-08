// Host-independent sitemap registration. Never reads a local build or submits draft URLs.
import { createSign } from 'node:crypto';
import { appendFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const sitemap = 'https://www.outbrick.site/sitemap.xml';
const site = 'https://www.outbrick.site/';
const property = 'sc-domain:outbrick.site';

export async function submitSitemap(engine, env = process.env, request = fetch) {
  if (!['google', 'bing'].includes(engine)) throw new Error('Choose google or bing.');
  const secretName = engine === 'google' ? 'GSC_SERVICE_ACCOUNT_JSON' : 'BING_WEBMASTER_API_KEY';
  if (!env[secretName]) throw new Error(`Missing GitHub Actions secret: ${secretName}.`);
  // Never log request URLs, response bodies or caught provider errors: they may contain secrets.
  async function call(label, url, init = {}) {
    let response;
    try {
      response = await request(url, { ...init, redirect: 'error', signal: AbortSignal.timeout(30_000) });
    } catch {
      throw new Error(`${label}: network request failed or timed out.`);
    }
    if (!response.ok) throw new Error(`${label}: HTTP ${response.status}.`);
    return response;
  }
  async function json(label, url, init) {
    const response = await call(label, url, init);
    try { return await response.json(); } catch { throw new Error(`${label}: invalid JSON response.`); }
  }
  const live = await call('Live sitemap', sitemap);
  const xml = await live.text();
  if (!/<(?:sitemapindex|urlset)\b[^>]*xmlns=["']http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9["']/.test(xml) || !/<loc>https:\/\/www\.outbrick\.site\//.test(xml)) {
    throw new Error('Live sitemap is not an OutBrick sitemap or sitemap index.');
  }

  if (engine === 'google') {
    let assertion;
    try {
      const key = JSON.parse(env.GSC_SERVICE_ACCOUNT_JSON);
      if (key.type !== 'service_account' || key.client_email !== 'outbrick-search-console@sincere-beacon-510911-a8.iam.gserviceaccount.com') throw new Error();
      const b64 = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
      const now = Math.floor(Date.now() / 1000);
      const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
      assertion = `${unsigned}.${createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url')}`;
    } catch { throw new Error('GSC_SERVICE_ACCOUNT_JSON is not a valid key for the OutBrick Search Console service account.'); }
    const token = await json('Google authentication', 'https://oauth2.googleapis.com/token', {
      method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    });
    if (!token.access_token) throw new Error('Google authentication returned no access token.');
    const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/sitemaps/${encodeURIComponent(sitemap)}`;
    const headers = { authorization: `Bearer ${token.access_token}` };
    await call('Google submission', url, { method: 'PUT', headers });
    const receipt = await json('Google readback', url, { headers });
    if (receipt.path !== sitemap) throw new Error('Google readback did not confirm the submitted sitemap.');
  } else {
    const url = (method) => `https://ssl.bing.com/webmaster/api.svc/json/${method}?apikey=${encodeURIComponent(env.BING_WEBMASTER_API_KEY)}`;
    const result = await json('Bing submission', url('SubmitFeed'), {
      method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ siteUrl: site, feedUrl: sitemap }),
    });
    if (result.ErrorCode || result.d?.ErrorCode) throw new Error('Bing rejected the submission.');
    const receipt = await json('Bing readback', `${url('GetFeeds')}&siteUrl=${encodeURIComponent(site)}`);
    if (!Array.isArray(receipt.d) || !receipt.d.some((feed) => feed.Url === sitemap)) throw new Error('Bing readback did not confirm the submitted sitemap.');
  }
  return `${engine}: submitted ${sitemap} and confirmed registration. Crawling and indexing remain the search engine's decision.`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = await submitSitemap(process.argv[2]);
    console.log(result);
    if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, `${result}\n`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
