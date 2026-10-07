import { after, afterEach, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { createHmac, verify } from 'node:crypto';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, request } from '../../test/harness.ts';
import { communityAuth } from '../routes.ts';
import { decodeJwt } from '../jwt.ts';
import { appleName } from '../oauth.ts';
import { all, allProviderEnv, cookiesOf, ecKeyPem, foreignRequest, jsonResponse, linkToken, one, rsaKey, sessionCookieOf, signRs256, stubFetch, withEnv, type Call } from './kit.ts';

let pg: PGlite;
let restoreEnv: () => void;
let fetchStub: ReturnType<typeof stubFetch>;

const googleKey = rsaKey('google-kid-1');
const appleKey = rsaKey('apple-kid-1');
const strangerKey = rsaKey('google-kid-1'); // same kid, different key: a forged token
const appleEc = ecKeyPem();

/** What the fake token endpoint returns next; tests set it per case. */
let nextIdToken: (nonce: string) => string = () => '';
let facebookMe: Record<string, unknown> = {};

function providers(call: Call): Response | undefined {
  if (call.url === 'https://www.googleapis.com/oauth2/v3/certs') return jsonResponse({ keys: [googleKey.jwk] });
  if (call.url === 'https://appleid.apple.com/auth/keys') return jsonResponse({ keys: [appleKey.jwk] });
  if (call.url === 'https://oauth2.googleapis.com/token' || call.url === 'https://appleid.apple.com/auth/token') {
    const form = new URLSearchParams(call.body);
    if (form.get('code') === 'bad-code') return jsonResponse({ error: 'invalid_grant' }, 400);
    return jsonResponse({ access_token: 'x', id_token: nextIdToken(currentNonce) });
  }
  if (call.url.startsWith('https://graph.facebook.com/v19.0/oauth/access_token')) return jsonResponse({ access_token: 'fb-access-token', token_type: 'bearer' });
  if (call.url.startsWith('https://graph.facebook.com/v19.0/me')) return jsonResponse(facebookMe);
  return undefined;
}

let currentNonce = '';

before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(async () => {
  restoreEnv = withEnv({ ...allProviderEnv, APPLE_PRIVATE_KEY: appleEc.pem.replace(/\n/g, '\\n'), COMMUNITY_ADMIN_EMAILS: undefined });
  fetchStub = stubFetch(providers);
  await pg.exec(`DELETE FROM rate_events`);
});
afterEach(() => {
  fetchStub.restore();
  restoreEnv();
});

const now = () => Math.floor(Date.now() / 1000);

function googleToken(claims: Record<string, unknown>, key = googleKey) {
  return (nonce: string) =>
    signRs256({ iss: 'https://accounts.google.com', aud: allProviderEnv.GOOGLE_CLIENT_ID, sub: 'g-1', exp: now() + 600, iat: now(), nonce, email: 'gina@example.com', email_verified: true, name: 'Gina', ...claims }, key.privateKey, key.kid);
}

function appleToken(claims: Record<string, unknown>) {
  return (nonce: string) =>
    signRs256({ iss: 'https://appleid.apple.com', aud: allProviderEnv.APPLE_CLIENT_ID, sub: 'a-1', exp: now() + 600, iat: now(), nonce, email: 'x1y2z3@privaterelay.appleid.com', email_verified: 'true', is_private_email: 'true', ...claims }, appleKey.privateKey, appleKey.kid);
}

/** Start a flow and return the state, nonce and binding cookie the browser would hold. */
async function start(provider: string, query = '') {
  const res = await communityAuth(request('GET', `/api/community/auth/${provider}/start${query}`, { origin: null }));
  assert.equal(res.status, 302);
  const location = new URL(res.headers.get('location')!);
  currentNonce = location.searchParams.get('nonce') ?? '';
  return { location, state: location.searchParams.get('state')!, cookie: cookiesOf(res) };
}

async function googleCallback(state: string, cookie: string, code = 'good-code') {
  return communityAuth(request('GET', `/api/community/auth/google/callback?state=${encodeURIComponent(state)}&code=${code}`, { origin: null, cookie }));
}

describe('Google', () => {
  test('start: authorization code with PKCE, state, nonce and a browser binding', async () => {
    const { location, cookie } = await start('google', '?returnTo=%2Ffr%2Fcommunity%2Fbugs&locale=fr');
    assert.equal(location.origin + location.pathname, 'https://accounts.google.com/o/oauth2/v2/auth');
    assert.equal(location.searchParams.get('client_id'), allProviderEnv.GOOGLE_CLIENT_ID);
    assert.equal(location.searchParams.get('redirect_uri'), 'https://www.outbrick.site/api/community/auth/google/callback');
    assert.equal(location.searchParams.get('response_type'), 'code');
    assert.equal(location.searchParams.get('code_challenge_method'), 'S256');
    assert.match(location.searchParams.get('code_challenge')!, /^[A-Za-z0-9_-]{43}$/);
    assert.match(location.searchParams.get('scope')!, /openid/);
    assert.match(cookie, /^__Host-ob_oauth=/);
    const stored = await one<{ data: Record<string, unknown> }>(pg, `SELECT data FROM auth_tokens WHERE purpose = 'oauth_state' ORDER BY created_at DESC LIMIT 1`);
    assert.equal(stored.data.returnTo, '/fr/community/bugs');
    assert.equal(stored.data.locale, 'fr');
  });

  test('a good ID token signs in, verifies the email and sends the PKCE verifier', async () => {
    nextIdToken = googleToken({});
    const { state, cookie } = await start('google', '?returnTo=%2Fcommunity%2Fideas');
    const res = await googleCallback(state, cookie);
    assert.equal(res.status, 302);
    assert.equal(res.headers.get('location'), 'https://www.outbrick.site/community/ideas?from=signin');
    const session = sessionCookieOf(res);
    assert.ok(session);
    const tokenCall = fetchStub.calls.find((c) => c.url === 'https://oauth2.googleapis.com/token')!;
    const form = new URLSearchParams(tokenCall.body);
    assert.match(form.get('code_verifier')!, /^[A-Za-z0-9_-]{64}$/);
    assert.equal(form.get('redirect_uri'), 'https://www.outbrick.site/api/community/auth/google/callback');
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: session! }))).json<any>()).member;
    assert.equal(me.email, 'gina@example.com');
    assert.equal(me.emailVerified, true);
    assert.equal(me.displayName, 'Gina');
    assert.equal(me.needsName, true);
    assert.deepEqual(me.providers, ['google']);
    // The binding cookie is cleared.
    assert.ok(res.headers.getSetCookie().some((c) => c.startsWith('__Host-ob_oauth=;')));
  });

  test('a replayed state is refused', async () => {
    nextIdToken = googleToken({ sub: 'g-replay', email: 'replay@example.com' });
    const { state, cookie } = await start('google');
    assert.equal((await googleCallback(state, cookie)).status, 302);
    const again = await googleCallback(state, cookie);
    assert.equal(again.headers.get('location'), 'https://www.outbrick.site/community/signin?error=expired');
    assert.equal(sessionCookieOf(again), null);
  });

  test('a callback without the starting browser’s cookie is refused (login CSRF)', async () => {
    nextIdToken = googleToken({ sub: 'g-csrf' });
    const { state } = await start('google');
    const res = await googleCallback(state, '');
    assert.equal(res.headers.get('location'), 'https://www.outbrick.site/community/signin?error=expired');
    const other = await start('google');
    const mismatched = await googleCallback(state, other.cookie);
    assert.match(mismatched.headers.get('location')!, /error=expired/);
  });

  for (const [name, make] of [
    ['bad signature', () => googleToken({ sub: 'g-bad' }, strangerKey)],
    ['wrong audience', () => googleToken({ sub: 'g-aud', aud: 'someone-else.apps.example' })],
    ['wrong issuer', () => googleToken({ sub: 'g-iss', iss: 'https://evil.example' })],
    ['expired token', () => googleToken({ sub: 'g-exp', exp: now() - 3600 })],
    ['wrong nonce', () => (nonce: string) => googleToken({ sub: 'g-nonce' })(`${nonce}x`)],
    ['alg none', () => () => `${Buffer.from(JSON.stringify({ alg: 'none', kid: 'google-kid-1' })).toString('base64url')}.${Buffer.from(JSON.stringify({ sub: 'x' })).toString('base64url')}.`],
  ] as const) {
    test(`refused: ${name}`, async () => {
      nextIdToken = make();
      const { state, cookie } = await start('google');
      const res = await googleCallback(state, cookie);
      assert.equal(res.headers.get('location'), 'https://www.outbrick.site/community/signin?error=failed');
      assert.equal(sessionCookieOf(res), null);
    });
  }

  test('a failed code exchange and a denied consent', async () => {
    const a = await start('google');
    assert.match((await googleCallback(a.state, a.cookie, 'bad-code')).headers.get('location')!, /error=failed$/);
    const b = await start('google', '?locale=ja');
    const denied = await communityAuth(request('GET', `/api/community/auth/google/callback?state=${b.state}&error=access_denied`, { origin: null, cookie: b.cookie }));
    assert.equal(denied.headers.get('location'), 'https://www.outbrick.site/ja/community/signin?error=denied');
  });

  test('an unverified Google address is not used', async () => {
    nextIdToken = googleToken({ sub: 'g-unverified', email: 'maybe@example.com', email_verified: false, name: 'Maybe' });
    const { state, cookie } = await start('google');
    const res = await googleCallback(state, cookie);
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.email, '');
    assert.equal(me.emailVerified, false);
  });

  test('links to an existing member by verified email, and names stay unique', async () => {
    await pg.query(`INSERT INTO members (display_name, name_chosen, email, email_verified) VALUES ('Hana', true, 'hana@example.com', true)`);
    nextIdToken = googleToken({ sub: 'g-hana', email: 'Hana@Example.com', name: 'Someone Else' });
    let flow = await start('google');
    let res = await googleCallback(flow.state, flow.cookie);
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.displayName, 'Hana');
    assert.equal(me.needsName, false);
    const ids = await all(pg, `SELECT provider FROM identities WHERE member_id = $1`, [me.id]);
    assert.deepEqual(ids, [{ provider: 'google' }]);

    // Two new people called Hana.
    const names: string[] = [];
    for (const sub of ['g-hana-2', 'g-hana-3']) {
      nextIdToken = googleToken({ sub, email: `${sub}@example.com`, name: 'hana' });
      flow = await start('google');
      res = await googleCallback(flow.state, flow.cookie);
      names.push((await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member.displayName);
    }
    assert.deepEqual(names, ['hana 2', 'hana 3']);
  });

  test('configured admins are promoted', async () => {
    process.env.COMMUNITY_ADMIN_EMAILS = 'boss@example.com';
    nextIdToken = googleToken({ sub: 'g-boss', email: 'boss@example.com' });
    const { state, cookie } = await start('google');
    const res = await googleCallback(state, cookie);
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.role, 'admin');
  });

  test('a provider without credentials is switched off', async () => {
    delete process.env.GOOGLE_CLIENT_SECRET;
    const res = await communityAuth(request('GET', '/api/community/auth/google/start?locale=es', { origin: null }));
    assert.equal(res.headers.get('location'), 'https://www.outbrick.site/es/community/signin?error=unavailable');
    const session = await (await communityAuth(request('GET', '/api/community/session'))).json<any>();
    assert.deepEqual(session.providers, ['apple', 'facebook', 'email']);
    const unknown = await communityAuth(request('GET', '/api/community/auth/github/start', { origin: null }));
    assert.equal(unknown.status, 404);
  });
});

async function appleCallback(state: string, extra: Record<string, string> = {}) {
  const body = new URLSearchParams({ state, code: 'good-code', ...extra }).toString();
  // A cross-site form POST from Apple: a foreign Origin, and no cookies at all.
  return communityAuth(foreignRequest('POST', '/api/community/auth/apple/callback', { body, origin: 'https://appleid.apple.com' }));
}

describe('Sign in with Apple', () => {
  test('start: form_post with name and email scope, no cookie needed', async () => {
    const { location, cookie } = await start('apple');
    assert.equal(location.origin + location.pathname, 'https://appleid.apple.com/auth/authorize');
    assert.equal(location.searchParams.get('response_mode'), 'form_post');
    assert.equal(location.searchParams.get('scope'), 'name email');
    assert.equal(location.searchParams.get('client_id'), allProviderEnv.APPLE_CLIENT_ID);
    assert.equal(cookie, '');
  });

  test('form_post callback with the first-time `user` name signs in; relay address is fine', async () => {
    nextIdToken = appleToken({});
    const { state } = await start('apple', '?returnTo=%2Fde%2Fcommunity&locale=de');
    const res = await appleCallback(state, { user: JSON.stringify({ name: { firstName: 'Ada', lastName: 'Lovelace' }, email: 'x1y2z3@privaterelay.appleid.com' }) });
    assert.equal(res.status, 303);
    assert.equal(res.headers.get('location'), 'https://www.outbrick.site/de/community?from=signin');
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.displayName, 'Ada Lovelace');
    assert.equal(me.email, 'x1y2z3@privaterelay.appleid.com');
    assert.equal(me.emailVerified, true);
    assert.equal(me.locale, 'de');

    // The client secret is an ES256 JWT signed with the Apple key.
    const tokenCall = fetchStub.calls.find((c) => c.url === 'https://appleid.apple.com/auth/token')!;
    const secret = new URLSearchParams(tokenCall.body).get('client_secret')!;
    const { header, payload, signingInput, signature } = decodeJwt(secret);
    assert.deepEqual([header.alg, header.kid], ['ES256', allProviderEnv.APPLE_KEY_ID]);
    assert.deepEqual([payload.iss, payload.sub, payload.aud], [allProviderEnv.APPLE_TEAM_ID, allProviderEnv.APPLE_CLIENT_ID, 'https://appleid.apple.com']);
    assert.ok((payload.exp as number) > (payload.iat as number));
    assert.equal(signature.length, 64);
    assert.ok(verify('sha256', Buffer.from(signingInput), { key: appleEc.publicKey, dsaEncoding: 'ieee-p1363' }, signature));

    // Next time Apple sends no name; the same member signs in.
    const again = await start('apple');
    const res2 = await appleCallback(again.state);
    const me2 = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res2)! }))).json<any>()).member;
    assert.equal(me2.id, me.id);
  });

  test('Apple without a name or a usable address falls back to "Player"', async () => {
    nextIdToken = appleToken({ sub: 'a-2', email: 'q9w8e7@privaterelay.appleid.com' });
    const { state } = await start('apple');
    const res = await appleCallback(state);
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.displayName, 'Player');
  });

  test('replayed Apple state and a bad Apple signature are refused', async () => {
    nextIdToken = appleToken({ sub: 'a-3', email: 'a3@privaterelay.appleid.com' });
    const { state } = await start('apple', '?locale=fr');
    assert.equal((await appleCallback(state)).status, 303);
    const replay = await appleCallback(state);
    assert.equal(replay.headers.get('location'), 'https://www.outbrick.site/community/signin?error=expired');

    nextIdToken = (nonce) => signRs256({ iss: 'https://appleid.apple.com', aud: allProviderEnv.APPLE_CLIENT_ID, sub: 'a-4', exp: now() + 600, nonce }, googleKey.privateKey, appleKey.kid);
    const forged = await start('apple', '?locale=fr');
    const res = await appleCallback(forged.state);
    assert.equal(res.headers.get('location'), 'https://www.outbrick.site/fr/community/signin?error=failed');
  });

  test('a user who cancels at Apple', async () => {
    const { state } = await start('apple');
    const res = await appleCallback(state, { error: 'user_cancelled_authorize', code: '' });
    assert.match(res.headers.get('location')!, /error=denied$/);
  });

  test('appleName reads only the name', () => {
    assert.equal(appleName(JSON.stringify({ name: { firstName: ' Ada ', lastName: '' } })), 'Ada');
    assert.equal(appleName('not json'), null);
    assert.equal(appleName(null), null);
  });
});

describe('Facebook', () => {
  test('signs in unverified, sends "Confirm your email", and the link verifies it', async () => {
    facebookMe = { id: '10001', name: 'Frida Kahlo', email: 'frida@example.com' };
    const { location, state, cookie } = await start('facebook', '?locale=es');
    assert.equal(location.origin + location.pathname, 'https://www.facebook.com/v19.0/dialog/oauth');
    assert.match(location.searchParams.get('scope')!, /email/);
    const res = await communityAuth(request('GET', `/api/community/auth/facebook/callback?state=${state}&code=good-code`, { origin: null, cookie }));
    assert.equal(res.status, 302);
    const meCall = fetchStub.calls.find((c) => c.url.startsWith('https://graph.facebook.com/v19.0/me'))!;
    const meUrl = new URL(meCall.url);
    assert.equal(meUrl.searchParams.get('fields'), 'id,name,email');
    assert.equal(meUrl.searchParams.get('appsecret_proof'), createHmac('sha256', allProviderEnv.FACEBOOK_APP_SECRET).update('fb-access-token').digest('hex'));

    const cookieHeader = sessionCookieOf(res)!;
    let me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: cookieHeader }))).json<any>()).member;
    assert.equal(me.emailVerified, false);
    assert.equal(me.email, 'frida@example.com');
    assert.equal(me.displayName, 'Frida Kahlo');

    const [mail] = fetchStub.emails();
    assert.equal(mail.to[0], 'frida@example.com');
    assert.equal(mail.subject, 'Confirma tu dirección de correo para la Comunidad OutBrick');
    const token = linkToken(mail.text, '/api/community/auth/email/confirm');
    // The page does nothing on GET.
    const page = await communityAuth(request('GET', `/api/community/auth/email/confirm?token=${token}`, { origin: null }));
    assert.equal(page.status, 200);
    assert.equal((await one<{ email_verified: boolean }>(pg, `SELECT email_verified FROM members WHERE id = $1`, [me.id])).email_verified, false);
    const done = await communityAuth(request('POST', `/api/community/auth/email/confirm?token=${token}`));
    assert.equal(done.status, 303);
    assert.equal(done.headers.get('location'), 'https://www.outbrick.site/es/community/settings?email=confirmed');
    me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: cookieHeader }))).json<any>()).member;
    assert.equal(me.emailVerified, true);
  });

  test('an unverified Facebook address never links to an existing member; confirming merges', async () => {
    await pg.query(`INSERT INTO members (display_name, name_chosen, email, email_verified) VALUES ('Owner', true, 'owner@example.com', true)`);
    const owner = await one<{ id: number }>(pg, `SELECT id::int FROM members WHERE email = 'owner@example.com'`);
    facebookMe = { id: '10002', name: 'Owner?', email: 'owner@example.com' };
    const { state, cookie } = await start('facebook');
    const res = await communityAuth(request('GET', `/api/community/auth/facebook/callback?state=${state}&code=good-code`, { origin: null, cookie }));
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.notEqual(me.id, owner.id);
    assert.equal(me.email, '');
    assert.equal((await all(pg, `SELECT 1 FROM identities WHERE member_id = $1`, [owner.id])).length, 0);

    const token = linkToken(fetchStub.emails().at(-1)!.text, '/api/community/auth/email/confirm');
    const done = await communityAuth(request('POST', `/api/community/auth/email/confirm?token=${token}`));
    assert.equal(done.status, 303);
    const after = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(done)! }))).json<any>()).member;
    assert.equal(after.id, owner.id);
    assert.deepEqual(after.providers, ['facebook']);
    assert.equal((await all(pg, `SELECT 1 FROM members WHERE id = $1`, [me.id])).length, 0);
  });

  test('Facebook without an email still signs in, with a placeholder', async () => {
    facebookMe = { id: '10003', name: 'No Mail' };
    const { state, cookie } = await start('facebook');
    const res = await communityAuth(request('GET', `/api/community/auth/facebook/callback?state=${state}&code=good-code`, { origin: null, cookie }));
    const me = (await (await communityAuth(request('GET', '/api/community/session', { cookie: sessionCookieOf(res)! }))).json<any>()).member;
    assert.equal(me.email, '');
    assert.equal(me.emailVerified, false);
    const row = await one<{ email: string }>(pg, `SELECT email FROM members WHERE id = $1`, [me.id]);
    assert.match(row.email, /\.invalid$/);
  });

  test('a malformed Facebook profile is refused', async () => {
    facebookMe = { id: 'not-a-number', name: 'X' };
    const { state, cookie } = await start('facebook');
    const res = await communityAuth(request('GET', `/api/community/auth/facebook/callback?state=${state}&code=good-code`, { origin: null, cookie }));
    assert.match(res.headers.get('location')!, /error=failed$/);
  });
});
