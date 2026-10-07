// Passkeys end to end against a software authenticator built here: P-256 and RSA keys made per
// run, authenticator data and the CBOR attestation object assembled byte by byte, assertions
// signed the way a platform authenticator signs them. No browser, no network.
/* oxlint-disable typescript/no-explicit-any */

import { after, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash, generateKeyPairSync, randomBytes, sign, type KeyObject } from 'node:crypto';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase, signedInCookie } from '../../test/harness.ts';
import { communityAuth } from '../routes.ts';
import { decodeCbor, rpIdFor, WebAuthnError } from '../webauthn.ts';
import { sessionCookieOf } from './kit.ts';

const SITE = 'https://www.outbrick.site';
const b64u = (b: Uint8Array | Buffer) => Buffer.from(b).toString('base64url');
const sha = (d: Uint8Array | string) => createHash('sha256').update(d).digest();

// A tiny CBOR encoder (the test's own, independent of the server's decoder) ----------------------

type Enc = number | string | Uint8Array | Enc[] | Map<Enc, Enc> | { [k: string]: Enc };
function head(major: number, n: number): number[] {
  if (n < 24) return [(major << 5) | n];
  if (n < 256) return [(major << 5) | 24, n];
  if (n < 65536) return [(major << 5) | 25, n >> 8, n & 0xff];
  return [(major << 5) | 26, (n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff];
}
function cbor(v: Enc): Buffer {
  if (typeof v === 'number') return Buffer.from(v >= 0 ? head(0, v) : head(1, -1 - v));
  if (typeof v === 'string') {
    const b = Buffer.from(v, 'utf8');
    return Buffer.concat([Buffer.from(head(3, b.length)), b]);
  }
  if (v instanceof Uint8Array) return Buffer.concat([Buffer.from(head(2, v.length)), Buffer.from(v)]);
  if (Array.isArray(v)) return Buffer.concat([Buffer.from(head(4, v.length)), ...v.map(cbor)]);
  const entries = v instanceof Map ? [...v.entries()] : Object.entries(v);
  return Buffer.concat([Buffer.from(head(5, entries.length)), ...entries.flatMap(([k, val]) => [cbor(k), cbor(val)])]);
}

// The software authenticator -----------------------------------------------------------------------

type Authenticator = { credId: Buffer; privateKey: KeyObject; cose: Buffer; counter: number; userHandle?: string };

function makeAuthenticator(kind: 'ec' | 'rsa' = 'ec'): Authenticator {
  const credId = randomBytes(32);
  if (kind === 'ec') {
    const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
    const jwk = publicKey.export({ format: 'jwk' }) as { x: string; y: string };
    const cose = cbor(new Map<Enc, Enc>([[1, 2], [3, -7], [-1, 1], [-2, Buffer.from(jwk.x, 'base64url')], [-3, Buffer.from(jwk.y, 'base64url')]]));
    return { credId, privateKey, cose, counter: 0 };
  }
  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const jwk = publicKey.export({ format: 'jwk' }) as { n: string; e: string };
  const cose = cbor(new Map<Enc, Enc>([[1, 3], [3, -257], [-1, Buffer.from(jwk.n, 'base64url')], [-2, Buffer.from(jwk.e, 'base64url')]]));
  return { credId, privateKey, cose, counter: 0 };
}

const u32 = (n: number) => Buffer.from([(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]);

function clientData(type: string, challenge: string, origin = SITE, extra: Record<string, unknown> = {}) {
  return Buffer.from(JSON.stringify({ type, challenge, origin, crossOrigin: false, ...extra }));
}

function attestation(a: Authenticator, options: any, o: { origin?: string; rpId?: string; fmt?: string; flags?: number; type?: string } = {}) {
  const flags = o.flags ?? 0x5d; // UP, UV, BE, BS, AT
  const authData = Buffer.concat([sha(o.rpId ?? options.rp.id), Buffer.from([flags]), u32(a.counter), Buffer.alloc(16), Buffer.from([0, a.credId.length]), a.credId, a.cose]);
  const attObj = cbor({ fmt: o.fmt ?? 'none', attStmt: o.fmt === 'packed' ? { alg: -7, sig: Buffer.alloc(8) } : {}, authData });
  a.userHandle = options.user.id;
  return {
    id: b64u(a.credId),
    rawId: b64u(a.credId),
    type: 'public-key',
    response: { clientDataJSON: b64u(clientData(o.type ?? 'webauthn.create', options.challenge, o.origin)), attestationObject: b64u(attObj), transports: ['internal', 'hybrid', 'bogus'] },
    nickname: 'My iPhone',
  };
}

function assertion(a: Authenticator, options: any, o: { origin?: string; rpId?: string; flags?: number; counter?: number; userHandle?: string | null; tamper?: boolean } = {}) {
  a.counter = o.counter ?? a.counter + 1;
  const authData = Buffer.concat([sha(o.rpId ?? options.rpId), Buffer.from([o.flags ?? 0x05]), u32(a.counter)]);
  const cdj = clientData('webauthn.get', options.challenge, o.origin);
  const signature = sign('sha256', Buffer.concat([authData, sha(cdj)]), a.privateKey);
  if (o.tamper) signature[signature.length - 3] ^= 0xff;
  return {
    id: b64u(a.credId),
    rawId: b64u(a.credId),
    type: 'public-key',
    response: { clientDataJSON: b64u(cdj), authenticatorData: b64u(authData), signature: b64u(signature), userHandle: o.userHandle === undefined ? a.userHandle : o.userHandle },
  };
}

// Requests -----------------------------------------------------------------------------------------

async function call(method: string, path: string, opts: { body?: unknown; cookie?: string; origin?: string } = {}): Promise<{ status: number; body: any; res: Response }> {
  const origin = opts.origin ?? SITE;
  const headers: Record<string, string> = { origin };
  if (opts.cookie) headers.cookie = opts.cookie;
  if (opts.body !== undefined) headers['content-type'] = 'application/json';
  const res = await communityAuth(new Request(`${origin}/api/community${path}`, { method, headers, body: opts.body === undefined ? undefined : JSON.stringify(opts.body) }));
  const text = await res.clone().text();
  return { status: res.status, body: text ? JSON.parse(text) : null, res };
}

let pg: PGlite;
let n = 0;
async function member(): Promise<{ id: number; cookie: string }> {
  n++;
  return signedInCookie(pg, { displayName: `Passkey ${n}`, email: `pk${n}@example.com` });
}

async function registered(kind: 'ec' | 'rsa' = 'ec') {
  const m = await member();
  const a = makeAuthenticator(kind);
  const options = (await call('POST', '/auth/passkey/register/options', { cookie: m.cookie })).body;
  const reg = await call('POST', '/auth/passkey/register', { cookie: m.cookie, body: attestation(a, options) });
  assert.equal(reg.status, 201, JSON.stringify(reg.body));
  return { m, a };
}

async function signIn(a: Authenticator, o: Parameters<typeof assertion>[2] = {}, origin = SITE) {
  const options = (await call('POST', '/auth/passkey/login/options', { origin })).body;
  return call('POST', '/auth/passkey/login', { origin, body: assertion(a, options, o) });
}

before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});
beforeEach(async () => {
  await pg.exec(`DELETE FROM rate_events`);
});

void describe('registration', () => {
  void test('options: signed in only, the right RP, a stable random user handle, no email anywhere', async () => {
    assert.equal((await call('POST', '/auth/passkey/register/options')).status, 401);
    const m = await member();
    const first = await call('POST', '/auth/passkey/register/options', { cookie: m.cookie });
    assert.equal(first.status, 200);
    const o = first.body;
    assert.deepEqual(o.rp, { id: 'outbrick.site', name: 'OutBrick Community' });
    assert.match(o.challenge, /^[A-Za-z0-9_-]{43}$/);
    assert.match(o.user.id, /^[A-Za-z0-9_-]{43}$/);
    assert.notEqual(o.user.id, String(m.id));
    assert.equal(o.user.name, `Passkey ${n}`);
    assert.equal(o.attestation, 'none');
    assert.deepEqual(o.pubKeyCredParams.map((p: any) => p.alg), [-7, -257]);
    assert.equal(o.authenticatorSelection.residentKey, 'required');
    assert.ok(!JSON.stringify(o).includes('@example.com'));
    const second = (await call('POST', '/auth/passkey/register/options', { cookie: m.cookie })).body;
    assert.equal(second.user.id, o.user.id, 'one handle per member');
    assert.notEqual(second.challenge, o.challenge);
  });

  void test('an ES256 passkey registers, is listed, and is excluded next time', async () => {
    const { m, a } = await registered();
    const list = (await call('GET', '/me/passkeys', { cookie: m.cookie })).body.passkeys;
    assert.equal(list.length, 1);
    assert.equal(list[0].nickname, 'My iPhone');
    assert.deepEqual(list[0].transports, ['internal', 'hybrid']);
    assert.equal(list[0].backedUp, true);
    assert.equal(list[0].lastUsedAt, null);
    const options = (await call('POST', '/auth/passkey/register/options', { cookie: m.cookie })).body;
    assert.deepEqual(options.excludeCredentials, [{ type: 'public-key', id: b64u(a.credId), transports: ['internal', 'hybrid'] }]);
    const again = await call('POST', '/auth/passkey/register', { cookie: m.cookie, body: attestation(a, options) });
    assert.equal(again.body.error.fields.credential, 'already_registered');
  });

  void test('refused: a used or foreign challenge, another origin, attestation other than none, the wrong RP, no presence', async () => {
    const m = await member();
    const other = await member();
    const a = makeAuthenticator();
    const opts = async () => (await call('POST', '/auth/passkey/register/options', { cookie: m.cookie })).body;
    const code = async (body: any, cookie = m.cookie) => {
      const r = await call('POST', '/auth/passkey/register', { cookie, body });
      return r.body.error?.fields?.credential ?? r.body.error?.code ?? r.status;
    };
    assert.equal(await code(attestation(a, await opts(), { origin: 'https://evil.example' })), 'wrong_origin');
    assert.equal(await code(attestation(a, await opts(), { fmt: 'packed' })), 'attestation_not_none');
    assert.equal(await code(attestation(a, await opts(), { rpId: 'evil.example' })), 'wrong_rp');
    assert.equal(await code(attestation(a, await opts(), { flags: 0x44 })), 'no_user_presence');
    assert.equal(await code(attestation(a, await opts(), { type: 'webauthn.get' })), 'wrong_type');
    // Someone else's challenge cannot register a key on this account.
    assert.equal(await code(attestation(a, await opts()), other.cookie), 'expired');
    // And each challenge works once, even after a failure.
    const o = await opts();
    assert.equal(await code(attestation(a, o, { fmt: 'packed' })), 'attestation_not_none');
    assert.equal(await code(attestation(a, o)), 'expired');
    // An expired challenge.
    const late = await opts();
    await pg.query(`UPDATE auth_tokens SET expires_at = now() - interval '1 second' WHERE purpose = 'passkey_register' AND used_at IS NULL`);
    assert.equal(await code(attestation(a, late)), 'expired');
    assert.equal((await call('GET', '/me/passkeys', { cookie: m.cookie })).body.passkeys.length, 0);
  });
});

void describe('sign-in', () => {
  void test('a discoverable ES256 passkey signs in and starts a session', async () => {
    const { m, a } = await registered();
    const res = await signIn(a);
    assert.equal(res.status, 200, JSON.stringify(res.body));
    assert.equal(res.body.member.id, m.id);
    const cookie = sessionCookieOf(res.res);
    assert.ok(cookie, 'a session cookie is set');
    const session = await call('GET', '/session', { cookie: cookie! });
    assert.equal(session.body.member.id, m.id);
    const row = (await pg.query<any>(`SELECT sign_count::int AS c, last_used_at FROM passkeys WHERE member_id = $1`, [m.id])).rows[0];
    assert.equal(row.c, 1);
    assert.ok(row.last_used_at);
  });

  void test('an RS256 passkey signs in too', async () => {
    const { m, a } = await registered('rsa');
    const res = await signIn(a);
    assert.equal(res.status, 200, JSON.stringify(res.body));
    assert.equal(res.body.member.id, m.id);
  });

  void test('a replayed response, a bad signature, another origin or RP, a counter going backwards and a wrong user handle are refused', async () => {
    const { a } = await registered();
    const options = (await call('POST', '/auth/passkey/login/options')).body;
    assert.deepEqual(Object.keys(options).sort(), ['allowCredentials', 'challenge', 'rpId', 'timeout', 'userVerification']);
    assert.equal(options.rpId, 'outbrick.site');
    const good = assertion(a, options);
    assert.equal((await call('POST', '/auth/passkey/login', { body: good })).status, 200);
    const replay = await call('POST', '/auth/passkey/login', { body: good });
    assert.equal(replay.body.error.code, 'expired');

    const code = async (r: Awaited<ReturnType<typeof signIn>>) => r.body.error?.fields?.credential ?? r.body.error?.code;
    assert.equal(await code(await signIn(a, { tamper: true })), 'bad_signature');
    assert.equal(await code(await signIn(a, { origin: 'https://outbrick.site.evil.example' })), 'wrong_origin');
    assert.equal(await code(await signIn(a, { rpId: 'evil.example' })), 'wrong_rp');
    assert.equal(await code(await signIn(a, { flags: 0x04 })), 'no_user_presence');
    assert.equal((await signIn(a, { counter: 10 })).status, 200);
    assert.equal(await code(await signIn(a, { counter: 9 })), 'sign_count');
    assert.equal(await code(await signIn(a, { userHandle: b64u(randomBytes(32)) })), 'wrong_user');
    assert.equal((await signIn(a, { userHandle: null })).status, 200, 'a missing user handle falls back to the credential');
  });

  void test('a removed passkey no longer signs in, and only its owner can remove it', async () => {
    const { m, a } = await registered();
    const id = (await call('GET', '/me/passkeys', { cookie: m.cookie })).body.passkeys[0].id;
    const stranger = await member();
    assert.equal((await call('DELETE', `/me/passkeys/${id}`, { cookie: stranger.cookie })).status, 404);
    assert.equal((await call('DELETE', `/me/passkeys/${id}`, { cookie: m.cookie })).status, 200);
    const res = await signIn(a);
    assert.equal(res.body.error.code, 'unknown_credential');
  });

  void test('a Deploy Preview is its own RP, and a passkey from production does not sign in there', async () => {
    const preview = 'https://deploy-preview-12--outbrick.netlify.app';
    assert.equal(rpIdFor(preview), 'deploy-preview-12--outbrick.netlify.app');
    assert.equal(rpIdFor('https://outbrick.site'), 'outbrick.site');
    const options = (await call('POST', '/auth/passkey/login/options', { origin: preview })).body;
    assert.equal(options.rpId, 'deploy-preview-12--outbrick.netlify.app');
    const { a } = await registered();
    // Signed for production's RP id, answered on the preview: refused.
    const res = await call('POST', '/auth/passkey/login', { origin: preview, body: assertion(a, { ...options, rpId: 'outbrick.site' }, { origin: preview }) });
    assert.equal(res.body.error.fields.credential, 'wrong_rp');
    // A request from an origin we do not serve never gets options at all.
    assert.equal((await call('POST', '/auth/passkey/login/options', { origin: 'https://evil.example' })).status, 403);
  });

  void test('deleting the account removes its passkeys', async () => {
    const { m, a } = await registered();
    assert.equal((await call('DELETE', '/me', { cookie: m.cookie, body: { confirm: 'DELETE' } })).status, 200);
    assert.equal((await pg.query(`SELECT 1 FROM passkeys WHERE member_id = $1`, [m.id])).rows.length, 0);
    assert.equal((await signIn(a)).body.error.code, 'unknown_credential');
  });
});

void test('the CBOR decoder refuses what WebAuthn never sends', () => {
  const err = (bytes: number[]) => {
    try {
      decodeCbor(Uint8Array.from(bytes));
      return 'accepted';
    } catch (error) {
      return error instanceof WebAuthnError ? error.code : 'other';
    }
  };
  assert.equal(err([0x5f]), 'bad_cbor', 'indefinite byte string');
  assert.equal(err([0xa2, 0x01, 0x02, 0x01, 0x03]), 'bad_cbor', 'duplicate map key');
  assert.equal(err([0x58, 0x10, 1, 2]), 'bad_cbor', 'truncated');
  assert.equal(err([0xc0, 0x00]), 'bad_cbor', 'tags');
  assert.deepEqual(decodeCbor(Uint8Array.from([0xa2, 0x01, 0x26, 0x63, 0x66, 0x6d, 0x74, 0xf5])).value, new Map<unknown, unknown>([[1, -7], ['fmt', true]]));
});
