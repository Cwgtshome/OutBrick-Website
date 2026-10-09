// Static-route acceptance checks. Database/sign-in acceptance is a separate gate.
import assert from 'node:assert/strict';
const base = process.argv[2];
if (!base) throw new Error('Supply the Worker preview URL.');
const checks = [];
async function check(path, status, { type, location, method = 'GET', contains } = {}) {
  const response = await fetch(new URL(path, base), { method, redirect: 'manual' });
  const body = await response.text();
  assert.equal(response.status, status, path);
  if (type) assert.ok(response.headers.get('content-type')?.startsWith(type), path + ' content type');
  if (location) assert.equal(new URL(response.headers.get('location'), base).pathname + new URL(response.headers.get('location'), base).search, location, path + ' redirect');
  if (contains) assert.ok(body.includes(contains), path + ' content');
  if (method === 'HEAD') assert.equal(body.length, 0, path + ' HEAD');
  checks.push({ path, method, status });
}
await check('/', 200, { type: 'text/html', contains: 'OutBrick' });
await check('/privacy', 200, { type: 'text/html' });
await check('/privacy', 200, { type: 'text/html', method: 'HEAD' });
await check('/app-ads.txt', 200, { type: 'text/plain', contains: 'google.com' });
await check('/.well-known/apple-app-site-association', 200, { type: 'application/json', contains: 'applinks' });
await check('/sitemap.xml', 200, { type: 'application/xml', contains: '<sitemapindex' });
await check('/robots.txt', 200, { type: 'text/plain', contains: 'Sitemap:' });
await check('/privacy-policy?source=old-link', 301, { location: '/privacy?source=old-link' });
await check('/c/42?test=1', 200, { type: 'text/html' });
for (const locale of ['fr', 'de', 'es', 'ja', 'pt-BR']) {
  await check(`/${locale}/privacy`, 200, { type: 'text/html' });
  await check(`/${locale}/c/42`, 200, { type: 'text/html' });
  await check(`/${locale}/missing-legal-document`, 404, { type: 'text/html' });
}
await check('/missing-legal-document', 404);
for (const locale of ['en', 'fr', 'de', 'es', 'ja', 'pt-BR']) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  await check(`${prefix}/community/no-such-page`, 404, { type: 'text/html' });
  await check(`${prefix}/community/c/no-such-category`, 404, { type: 'text/html' });
  await check(`${prefix}/community/feed.xml`, 404, { type: 'text/html', method: 'HEAD' });
  await check(`${prefix}/community/help`, 200, { type: 'text/html' });
}
await check('/.netlify/functions/community-notify', 404);
await check('/.netlify/functions/lifecycle-outbox', 404);
console.log(JSON.stringify({ status: 'static-route-checks-passed', checks, limitation: 'Does not prove database writes, sign-in, uploads, jobs or email delivery.' }, null, 2));
