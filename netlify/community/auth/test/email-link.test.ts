import { after, afterEach, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from '../../test/harness.ts';
import { communityAuth } from '../routes.ts';
import { cleanReturnTo, safeReturnTo } from '../util.ts';
import { all, linkToken, one, sessionCookieOf, stubFetch, withEnv, TEST_RESEND_KEY } from './kit.ts';

let pg: PGlite;
let fetchStub: ReturnType<typeof stubFetch>;
let restoreEnv: () => void;

before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(async () => {
  restoreEnv = withEnv({ RESEND_API_KEY: TEST_RESEND_KEY, COMMUNITY_ADMIN_EMAILS: undefined });
  fetchStub = stubFetch();
  await pg.exec(`DELETE FROM rate_events; DELETE FROM auth_tokens;`);
});
afterEach(() => {
  fetchStub.restore();
  restoreEnv();
});

let ipCounter = 0;
const freshIp = () => `203.0.113.${++ipCounter}`;

async function askForLink(email: string, extra: Record<string, unknown> = {}, ip = freshIp()) {
  return communityAuth(request('POST', '/api/community/auth/email', { body: { email, locale: 'en', ...extra }, headers: { 'x-nf-client-connection-ip': ip } }));
}

describe('email sign-in link', () => {
  test('happy path: request, scanner-safe page, POST signs in and lands on returnTo', async () => {
    const res = await askForLink('Ada@Example.com ', { returnTo: '/community/t/42/hello?page=2#post-3' });
    assert.equal(res.status, 200);
    assert.deepEqual(await res.json(), { sent: true });
    const [email] = fetchStub.emails();
    assert.equal(email.to[0], 'ada@example.com');
    assert.equal(email.from, 'OutBrick Community <support@outbrick.site>');
    assert.equal(email.reply_to, 'support@outbrick.site');
    assert.equal(email.subject, 'Your sign-in link for OutBrick Community');
    assert.match(email.idempotencyKey, /^community-signin-[0-9a-f]{32}$/);
    const token = linkToken(email.text, '/api/community/auth/email/verify');

    // Only the hash is stored.
    const stored = await one<{ token_hash: string; email: string }>(pg, `SELECT token_hash, email FROM auth_tokens WHERE purpose = 'signin'`);
    assert.notEqual(stored.token_hash, token);
    assert.equal(stored.token_hash.length, 64);

    // A scanner's GET draws the page and signs nobody in.
    const page = await communityAuth(request('GET', `/api/community/auth/email/verify?token=${token}`, { origin: null }));
    assert.equal(page.status, 200);
    assert.equal(sessionCookieOf(page), null);
    const html = await page.text();
    assert.match(html, /<form method="post" action="\/api\/community\/auth\/email\/verify\?token=/);
    assert.match(html, /<html lang="en"/);
    assert.match(page.headers.get('content-security-policy') ?? '', /form-action 'self'/);
    assert.equal((await one<{ used_at: unknown }>(pg, `SELECT used_at FROM auth_tokens WHERE purpose = 'signin'`)).used_at, null);

    const done = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(done.status, 303);
    assert.equal(done.headers.get('location'), 'https://www.outbrick.site/community/t/42/hello?page=2#post-3');
    const cookie = sessionCookieOf(done);
    assert.ok(cookie);

    const session = await (await communityAuth(request('GET', '/api/community/session', { cookie: cookie! }))).json();
    assert.equal(session.member.email, 'ada@example.com');
    assert.equal(session.member.emailVerified, true);
    assert.equal(session.member.displayName, 'Ada');
    assert.equal(session.member.needsName, true);
    assert.deepEqual(session.member.providers, ['email']);
    const welcome = await all(pg, `SELECT kind FROM notifications WHERE member_id = $1`, [session.member.id]);
    assert.deepEqual(welcome, [{ kind: 'welcome' }]);
  });

  test('the second sign-in reuses the member and adds no second welcome', async () => {
    for (let i = 0; i < 2; i++) {
      await askForLink('bob@example.com');
      const token = linkToken(fetchStub.emails().at(-1)!.text, '/api/community/auth/email/verify');
      const res = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
      assert.equal(res.status, 303);
      assert.equal(res.headers.get('location'), 'https://www.outbrick.site/community?from=signin');
    }
    const rows = await all(pg, `SELECT m.id FROM members m WHERE email = 'bob@example.com'`);
    assert.equal(rows.length, 1);
    const welcomes = await one<{ n: number }>(pg, `SELECT count(*)::int AS n FROM notifications n JOIN members m ON m.id = n.member_id WHERE m.email = 'bob@example.com' AND kind = 'welcome'`);
    assert.equal(welcomes.n, 1);
  });

  test('a used link is refused, in the reader’s language', async () => {
    await askForLink('carla@example.com', { locale: 'fr' });
    const token = linkToken(fetchStub.emails()[0].text, '/api/community/auth/email/verify');
    assert.equal(fetchStub.emails()[0].subject, 'Votre lien de connexion à la Communauté OutBrick');
    const first = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(first.status, 303);
    const again = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(again.status, 303);
    assert.equal(again.headers.get('location'), 'https://www.outbrick.site/fr/community/signin?error=expired');
    assert.equal(sessionCookieOf(again), null);
    const page = await communityAuth(request('GET', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(page.status, 302);
    assert.equal(page.headers.get('location'), 'https://www.outbrick.site/fr/community/signin?error=expired');
  });

  test('an expired link is refused on GET and POST', async () => {
    await askForLink('dan@example.com', { locale: 'de' });
    const token = linkToken(fetchStub.emails()[0].text, '/api/community/auth/email/verify');
    await pg.exec(`UPDATE auth_tokens SET expires_at = now() - interval '1 second'`);
    const page = await communityAuth(request('GET', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(page.headers.get('location'), 'https://www.outbrick.site/de/community/signin?error=expired');
    const post = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
    assert.equal(post.headers.get('location'), 'https://www.outbrick.site/de/community/signin?error=expired');
    assert.equal(sessionCookieOf(post), null);
  });

  test('a made-up or malformed token is refused', async () => {
    for (const token of ['nope', 'A'.repeat(43), '../../etc', '']) {
      const res = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${encodeURIComponent(token)}`));
      assert.equal(res.status, 303);
      assert.match(res.headers.get('location')!, /\/community\/signin\?error=expired$/);
    }
  });

  test('the token links expire after 20 minutes', async () => {
    await askForLink('erin@example.com');
    const row = await one<{ minutes: number }>(pg, `SELECT round(extract(epoch FROM expires_at - created_at) / 60)::int AS minutes FROM auth_tokens`);
    assert.equal(row.minutes, 20);
  });

  test('the sign-in POST must come from our own page', async () => {
    await askForLink('fay@example.com');
    const token = linkToken(fetchStub.emails()[0].text, '/api/community/auth/email/verify');
    const res = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`, { origin: 'https://evil.example' }));
    assert.equal(res.status, 403);
    const asked = await communityAuth(request('POST', '/api/community/auth/email', { body: { email: 'x@example.com', locale: 'en' }, origin: 'https://evil.example' }));
    assert.equal(asked.status, 403);
  });

  test('returnTo open-redirect attempts fall back to the community home', async () => {
    const attempts = [
      'https://evil.example/community',
      '//evil.example/community',
      '/\\evil.example',
      '/%2F%2Fevil.example/community',
      'javascript:alert(1)',
      '/privacy',
      '/communityx',
      '/fr/communit',
      '/community/../admin',
      '/community\n/x',
      ' https://evil.example',
      '/@evil.example/community',
    ];
    for (const returnTo of attempts) {
      fetchStub.calls.length = 0;
      await askForLink(`ret${attempts.indexOf(returnTo)}@example.com`, { returnTo, locale: 'es' });
      const token = linkToken(fetchStub.emails()[0].text, '/api/community/auth/email/verify');
      const res = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
      const location = new URL(res.headers.get('location')!);
      assert.equal(location.origin, 'https://www.outbrick.site', returnTo);
      assert.equal(location.pathname, '/es/community', returnTo);
    }
    assert.equal(cleanReturnTo('/ja/community/faq'), '/ja/community/faq');
    assert.equal(cleanReturnTo('/community'), '/community');
    assert.equal(cleanReturnTo('/community/../privacy'), null);
    assert.equal(safeReturnTo(undefined, 'fr'), '/fr/community');
  });

  test('honeypot: told it worked, nothing stored or sent', async () => {
    const res = await askForLink('bot@example.com', { website: 'http://spam.example' });
    assert.deepEqual(await res.json(), { sent: true });
    assert.equal(fetchStub.calls.length, 0);
    assert.equal((await all(pg, `SELECT 1 FROM auth_tokens`)).length, 0);
  });

  test('invalid addresses are a field error', async () => {
    const res = await askForLink('not-an-email');
    assert.equal(res.status, 400);
    const body = await res.json();
    assert.equal(body.error.fields.email, 'invalid');
  });

  test('rate limit per address: 5 an hour', async () => {
    for (let i = 0; i < 5; i++) assert.equal((await askForLink('greta@example.com')).status, 200);
    const sixth = await askForLink('greta@example.com');
    assert.equal(sixth.status, 429);
    assert.equal((await sixth.json()).error.code, 'rate_limited');
    assert.equal(fetchStub.emails().length, 5);
  });

  test('rate limit per IP: 10 an hour', async () => {
    const ip = '198.51.100.7';
    for (let i = 0; i < 10; i++) assert.equal((await askForLink(`ip${i}@example.com`, {}, ip)).status, 200);
    assert.equal((await askForLink('ip10@example.com', {}, ip)).status, 429);
    assert.equal((await askForLink('ip10@example.com', {}, '198.51.100.8')).status, 200);
  });

  test('without RESEND_API_KEY, email sign-in says it is unavailable', async () => {
    delete process.env.RESEND_API_KEY;
    const res = await askForLink('hal@example.com');
    assert.equal(res.status, 503);
    assert.equal((await res.json()).error.code, 'unavailable');
  });

  test('a Resend failure is reported, not swallowed', async () => {
    fetchStub.restore();
    fetchStub = stubFetch(undefined, { resendStatus: 500 });
    const res = await askForLink('ivy@example.com');
    assert.equal(res.status, 502);
    assert.equal((await res.json()).error.code, 'send_failed');
  });

  test('an existing member gets the link in their own language', async () => {
    await pg.query(`INSERT INTO members (display_name, email, email_verified, locale) VALUES ('Jürgen', 'juergen@example.com', true, 'de')`);
    await askForLink('juergen@example.com', { locale: 'en' });
    assert.equal(fetchStub.emails()[0].subject, 'Ihr Anmeldelink für die OutBrick-Community');
  });

  test('admin addresses become admins at sign-in', async () => {
    process.env.COMMUNITY_ADMIN_EMAILS = 'owner@example.com, other@example.com';
    await askForLink('Owner@example.com');
    const token = linkToken(fetchStub.emails()[0].text, '/api/community/auth/email/verify');
    const res = await communityAuth(request('POST', `/api/community/auth/email/verify?token=${token}`));
    const session = await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json();
    assert.equal(session.member.role, 'admin');
  });
});
