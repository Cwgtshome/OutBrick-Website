import assert from 'node:assert/strict';
import { test } from 'node:test';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { handleConfirm, handleUnsubscribe } from '../emails/newsletter.ts';
import { confirmUrl, unsubscribeUrl } from '../emails/links.ts';
import { newsletterSegments } from '../emails/resend.ts';

const env = { RESEND_API_KEY: 'test-key-never-a-live-credential', RESEND_SEGMENT_ID: 'test-segment' };
const address = 'test@example.com';
const site = 'https://www.outbrick.site';

test('Brazilian Portuguese can use its optional Resend language segment', () => {
  assert.deepEqual(newsletterSegments({ RESEND_SEGMENT_ID: 'main', RESEND_SEGMENT_ID_PT_BR: 'brazil' }, 'pt-BR'), ['main', 'brazil']);
});

test('scanners cannot subscribe; deliberate POST subscribes and sends welcome in all languages', async () => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return Response.json({ id: 'test-id' });
  };
  try {
    for (const locale of ['en', 'fr', 'de', 'es', 'ja', 'pt-BR']) {
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


test('rate limits recover with unchanged idempotency; retries are bounded and other failures stay failures', async () => {
  const { resend, subscribeContact } = await import('../emails/resend.ts');
  const originalFetch = globalThis.fetch;
  const originalTimeout = globalThis.setTimeout;
  const waits = [];
  const calls = [];
  globalThis.setTimeout = (callback, delay) => { waits.push(delay); callback(); return 0; };
  try {
    globalThis.fetch = async (url, options) => {
      calls.push({ url, options });
      return calls.length === 1
        ? Response.json({ message: 'Rate limited' }, { status: 429, headers: { 'Retry-After': '2' } })
        : Response.json({ id: 'delivered-once' });
    };
    const result = await resend(env.RESEND_API_KEY, '/emails', { body: { to: address }, idempotencyKey: 'same-submission' });
    assert.equal(result.ok, true);
    assert.equal(calls.length, 2);
    assert.equal(calls[0].options.body, calls[1].options.body);
    assert.equal(calls[1].options.headers['Idempotency-Key'], 'same-submission');
    assert.ok(waits[0] >= 2000);
    assert.ok(waits[0] < 2250);

    calls.length = 0; waits.length = 0;
    globalThis.fetch = async () => { calls.push(1); return Response.json({ message: 'Limited' }, { status: 429 }); };
    assert.equal((await resend(env.RESEND_API_KEY, '/emails', { idempotencyKey: 'bounded' })).status, 429);
    assert.equal(calls.length, 4);
    assert.equal(waits.length, 3);
    assert.ok(waits[1] >= 2000 && waits[2] >= 4000);

    calls.length = 0; waits.length = 0;
    globalThis.fetch = async () => { calls.push(1); return Response.json({ message: 'Limited' }, { status: 429, headers: { 'Retry-After': '60' } }); };
    assert.equal((await resend(env.RESEND_API_KEY, '/emails')).status, 429);
    assert.equal(calls.length, 1);
    assert.equal(waits.length, 0);

    for (const status of [400, 401, 403, 500]) {
      calls.length = 0;
      globalThis.fetch = async () => { calls.push(1); return Response.json({ message: 'Refused' }, { status }); };
      assert.equal((await subscribeContact(env.RESEND_API_KEY, address, ['segment'])).status, status);
      assert.equal(calls.length, 1, `must not PATCH contacts after ${status}`);
    }
  } finally {
    globalThis.fetch = originalFetch;
    globalThis.setTimeout = originalTimeout;
  }
});

test('all four forms send a localized visitor email and an escaped English team copy with correct routing', async () => {
  const { handleSubmission } = await import('../emails/submission.ts');
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (_url, options) => { calls.push(JSON.parse(options.body)); return Response.json({ id: 'test-id' }); };
  try {
    for (const form of ['contact', 'careers', 'affiliate', 'newsletter']) {
      for (const locale of ['en', 'fr', 'de', 'es', 'ja', 'pt-BR']) {
        calls.length = 0;
        const payload = { id: `${form}-${locale}`, form_name: form, created_at: '2026-10-07T12:00:00Z', data: { email: address, name: 'QA <script>alert(1)</script>', topic: 'support', role: 'Content Marketing Lead', message: '<script>alert(2)</script>', 'cover-note': '<b>literal cover note</b>', channels: ['YouTube', 'TikTok'], plan: '<b>literal plan</b>', locale, language: locale, consent: 'yes', ip: '203.0.113.42' } };
        const outcome = await handleSubmission(payload, env);
        assert.equal(outcome.status, 'sent');
        assert.equal(outcome.team, 'sent');
        assert.equal(calls.length, 2);
        assert.deepEqual(calls[0].to, [address]);
        assert.ok(calls[0].html.includes(`lang="${locale}"`));
        const team = calls[1];
        assert.deepEqual(team.to, [form === 'newsletter' ? 'news@outbrick.site' : 'support@outbrick.site']);
        assert.equal(team.reply_to, address);
        assert.ok(team.html.includes('lang="en"'));
        assert.ok(!team.html.includes('<script>'));
        assert.ok(team.html.includes('&lt;script&gt;'));
        assert.ok(!team.html.includes('203.0.113.42'));
        assert.ok(team.text.includes('QA <script>alert(1)</script>'));
        assert.ok(team.html.includes(`${form}-${locale}`));
      }
    }
    for (const extra of [{ spam: true }, { state: 'spam' }, { data: { email: address, 'bot-field': 'bot' } }]) {
      calls.length = 0;
      await handleSubmission({ id: 'skip', form_name: 'contact', data: { email: address }, ...extra }, env);
      assert.equal(calls.length, 0);
    }
    calls.length = 0;
    await handleSubmission({ id: 'consent', form_name: 'newsletter', data: { email: address, language: 'en' } }, env);
    assert.equal(calls.length, 1);
    assert.deepEqual(calls[0].to, ['news@outbrick.site']);
    assert.ok(calls[0].text.includes('no consent tick'));
  } finally { globalThis.fetch = originalFetch; }
});


test('Resend templates have separate plain bodies and only create after a genuine 404', () => {
  const mock = `globalThis.fetch = async (url, options) => { const p = new URL(url).pathname; console.log('MOCK_ENDPOINT:' + options.method + ':' + p); if (options.method === 'GET') return Response.json({message:'lookup failed'}, {status:403}); throw new Error('unexpected template write'); };`;
  const run = spawnSync(process.execPath, ['--experimental-strip-types', '--import', `data:text/javascript,${encodeURIComponent(mock)}`, 'scripts/build-resend-templates.mjs', '--push'], { cwd: new URL('..', import.meta.url), encoding: 'utf8', env: { ...process.env, CONTEXT: '', RESEND_API_KEY: env.RESEND_API_KEY } });
  assert.equal(run.status, 1);
  assert.equal((run.stdout.match(/MOCK_ENDPOINT:GET:/g) ?? []).length, 6);
  assert.ok(!run.stdout.includes('MOCK_ENDPOINT:POST:'));
  for (const locale of ['en', 'fr', 'de', 'es', 'ja', 'pt-BR']) {
    const template = JSON.parse(fs.readFileSync(new URL(`../outputs/resend-templates/${locale}.json`, import.meta.url), 'utf8'));
    assert.equal(template.variables.length, 33);
    assert.ok(!template.html.includes('RESEND_UNSUBSCRIBE_URL'));
    assert.ok(template.html.includes('{{{UNSUBSCRIBE_URL}}}'));
    assert.equal(template.variables.find(v => v.key === 'UNSUBSCRIBE_URL').fallbackValue, undefined);
    for (const key of ['HERO_BODY', 'STORY1_BODY', 'STORY2_BODY', 'STORY3_BODY']) {
      assert.ok(template.html.includes(`{{{${key}}}}`));
      assert.ok(!template.text.includes(`{{{${key}}}}`));
      assert.ok(template.text.includes(`{{{${key}_TEXT}}}`));
      const plain = template.variables.find(v => v.key === `${key}_TEXT`).fallbackValue;
      assert.ok(!/<[^>]+>/.test(plain));
      assert.ok(!plain.includes('**'));
    }
  }
});
