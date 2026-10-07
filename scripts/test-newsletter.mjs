import assert from 'node:assert/strict';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';
import { handleConfirm, handleUnsubscribe } from '../emails/newsletter.ts';
import { confirmUrl, unsubscribeUrl } from '../emails/links.ts';

const env = { RESEND_API_KEY: 'test-key-never-a-live-credential', RESEND_SEGMENT_ID: 'test-segment' };
const address = 'test@example.com';
const site = 'https://www.outbrick.site';

test('scanners cannot subscribe; deliberate POST subscribes and sends welcome in all languages', async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ id: 'test-id' });
  };
  try {
    for (const locale of ['en', 'fr', 'de', 'es', 'ja']) {
      calls.length = 0;
      const url = confirmUrl(site, env.RESEND_API_KEY, address, locale);
      const head = await handleConfirm(new Request(url, { method: 'HEAD' }), env);
      assert.equal(head.status, 204);
      const get = await handleConfirm(new Request(url), env);
      assert.equal(get.status, 200);
      const html = await get.text();
      assert.match(html, /<form method="post"/);
      assert.ok(html.includes(`lang="${locale}"`));
      assert.equal(get.headers.get('Referrer-Policy'), 'same-origin');
      assert.equal(calls.length, 0);
      const crossOrigin = await handleConfirm(new Request(url, { method: 'POST', headers: { Origin: 'https://example.org' } }), env);
      assert.equal(crossOrigin.status, 403);
      assert.equal(calls.length, 0);
      const post = await handleConfirm(new Request(url, { method: 'POST', headers: { Origin: site } }), env);
      assert.equal(post.status, 303);
      assert.ok(post.headers.get('Location').endsWith('/newsletter/confirmed?from=email'));
      assert.deepEqual(calls.map(call => new URL(call.url).pathname), ['/contacts', '/emails']);
      assert.equal(JSON.parse(calls[0].options.body).segments[0].id, env.RESEND_SEGMENT_ID);
      assert.equal(JSON.parse(calls[1].options.body).to[0], address);
      assert.ok(calls[1].options.headers['Idempotency-Key']);
    }
    calls.length = 0;
    const expired = confirmUrl(site, env.RESEND_API_KEY, address, 'en', Date.now() - 8 * 24 * 60 * 60 * 1000);
    assert.equal((await handleConfirm(new Request(expired, { method: 'POST' }), env)).status, 303);
    assert.equal(calls.length, 0);
    const invalid = confirmUrl(site, 'wrong-key', address, 'en');
    assert.equal((await handleConfirm(new Request(invalid, { method: 'POST' }), env)).status, 303);
    assert.equal(calls.length, 0);
    const unsub = unsubscribeUrl(site, env.RESEND_API_KEY, address, 'en');
    assert.equal((await handleUnsubscribe(new Request(unsub), env)).status, 200);
    assert.equal(calls.length, 0);
    const result = await handleUnsubscribe(new Request(unsub, { method: 'POST', body: 'List-Unsubscribe=One-Click' }), env);
    assert.equal(result.status, 200);
    assert.equal(calls[0].options.method, 'PATCH');
    assert.equal(JSON.parse(calls[0].options.body).unsubscribed, true);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('campaign sends only the reviewed draft and refuses blank addresses or missing draft IDs', () => {
  const mock = `globalThis.fetch = async (url) => { console.log('MOCK_ENDPOINT:' + new URL(url).pathname); return Response.json({id:'mock'}); };`;
  const run = (args, postalAddress) => spawnSync(process.execPath, [
    '--experimental-strip-types', '--import', `data:text/javascript,${encodeURIComponent(mock)}`,
    'scripts/send-newsletter.mjs', 'emails/issues/2026-10-sample.json', '--send', '--locale', 'en', ...args,
  ], { cwd: new URL('..', import.meta.url), encoding: 'utf8', env: { ...process.env, RESEND_API_KEY: env.RESEND_API_KEY, NEWSLETTER_POSTAL_ADDRESS: postalAddress } });
  const blank = run(['--broadcast-id', 'reviewed-id'], '   ');
  assert.equal(blank.status, 1);
  assert.match(blank.stderr, /postal/i);
  assert.ok(!blank.stdout.includes('MOCK_ENDPOINT'));
  const missing = run([], 'OutBrick PO 330279');
  assert.equal(missing.status, 1);
  assert.match(missing.stderr, /broadcast-id/);
  assert.ok(!missing.stdout.includes('MOCK_ENDPOINT'));
  const reviewed = run(['--broadcast-id', 'reviewed-id'], 'OutBrick PO 330279');
  assert.equal(reviewed.status, 0, reviewed.stderr);
  assert.match(reviewed.stdout, /MOCK_ENDPOINT:\/broadcasts\/reviewed-id\/send/);
  assert.ok(!reviewed.stdout.includes('MOCK_ENDPOINT:/broadcasts\n'));
});
