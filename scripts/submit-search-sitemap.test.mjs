import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generateKeyPairSync } from 'node:crypto';
import { submitSitemap, sitemap } from './submit-search-sitemap.mjs';

const xml = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.outbrick.site/</loc></url></urlset>';
const index = xml.replaceAll('urlset', 'sitemapindex');
const { privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
const env = {
  BING_WEBMASTER_API_KEY: 'test-secret',
  GSC_SERVICE_ACCOUNT_JSON: JSON.stringify({ type: 'service_account', client_email: 'outbrick-search-console@sincere-beacon-510911-a8.iam.gserviceaccount.com', private_key: privateKey.export({ type: 'pkcs8', format: 'pem' }) }),
};
function mock(responses, calls = []) {
  return async (url, init) => {
    calls.push({ url: String(url), init });
    const next = responses.shift();
    assert.notEqual(next, undefined, 'unexpected request');
    return new Response(typeof next === 'string' ? next : JSON.stringify(next));
  };
}

test('missing secrets fail before any request', async () => {
  for (const engine of ['google', 'bing']) await assert.rejects(submitSitemap(engine, {}, () => assert.fail('request')), /Missing GitHub Actions secret/);
});
test('HTML or an unavailable live sitemap never reaches a search engine', async () => {
  await assert.rejects(submitSitemap('bing', env, mock(['<html>Not found</html>'])), /not an OutBrick sitemap/);
  await assert.rejects(submitSitemap('google', env, async () => new Response('', { status: 503 })), /Live sitemap: HTTP 503/);
});
test('Google submits the live sitemap index and verifies its registration', async () => {
  const calls = [];
  assert.match(await submitSitemap('google', env, mock([index, { access_token: 'token' }, '', { path: sitemap }], calls)), /confirmed registration/);
  assert.equal(calls[0].url, sitemap);
  assert.equal(calls[2].init.method, 'PUT');
  assert.match(calls[2].url, /sc-domain%3Aoutbrick.site/);
  assert.equal(calls[3].url, calls[2].url);
  for (const call of calls) assert.equal(call.init.redirect, 'error');
});
test('Bing submits only the live sitemap, without daily URL batches', async () => {
  const calls = [];
  await submitSitemap('bing', env, mock([xml, { d: null }, { d: [{ Url: sitemap }] }], calls));
  assert.equal(calls.length, 3);
  assert.deepEqual(JSON.parse(calls[1].init.body), { siteUrl: 'https://www.outbrick.site/', feedUrl: sitemap });
  assert.match(calls[2].url, /GetFeeds/);
});
test('successful HTTP without provider readback is a failure', async () => {
  await assert.rejects(submitSitemap('bing', env, mock([xml, { d: null }, { d: [] }])), /readback did not confirm/);
  await assert.rejects(submitSitemap('google', env, mock([xml, { access_token: 'token' }, '', {}])), /readback did not confirm/);
});
test('provider and transport errors cannot echo secrets into public logs', async () => {
  let count = 0;
  const request = async () => ++count === 1 ? new Response(xml) : new Response('test-secret', { status: 403 });
  await assert.rejects(submitSitemap('bing', env, request), { message: 'Bing submission: HTTP 403.' });
  await assert.rejects(submitSitemap('bing', env, async () => { throw new Error('test-secret'); }), { message: 'Live sitemap: network request failed or timed out.' });
  await assert.rejects(submitSitemap('google', { ...env, GSC_SERVICE_ACCOUNT_JSON: 'test-secret' }, mock([xml])), /not a valid key/);
});
