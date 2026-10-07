// Passkeys (phase 2): sign in with Face ID, Touch ID, a security key or a phone.
//
//   POST   /api/community/auth/passkey/register/options  (signed in)  → PasskeyCreationOptions
//   POST   /api/community/auth/passkey/register  PasskeyRegisterRequest → 201 { passkey: PasskeyInfo }
//   POST   /api/community/auth/passkey/login/options                → PasskeyRequestOptions
//   POST   /api/community/auth/passkey/login     PasskeyLoginRequest → { member: SelfMember } + session cookie
//   GET    /api/community/me/passkeys                               → { passkeys: PasskeyInfo[] }
//   DELETE /api/community/me/passkeys/:id                           → { ok: true }
//
// Every options call creates a single-use challenge (32 random bytes) in `auth_tokens`, stored as
// its SHA-256 with the page origin and RP id it was issued for and a five-minute expiry; the
// matching register or login call uses it up first, so a challenge can never be replayed, even
// by a response that then fails verification. Login uses discoverable credentials: the browser
// offers the member's passkeys for this site without being told an account, and the response's
// user handle (a random per-member value, never the member id) must belong to the credential's
// member. Verification itself is webauthn.ts.
//
// Error codes: 'invalid' with fields.credential = <WebAuthnError code> ('wrong_origin',
// 'bad_signature', 'attestation_not_none', 'unsupported_algorithm' …), 'expired' (no live
// challenge), 'unknown_credential', 'too_many' (10 passkeys), plus the usual 401/429.

import type { PasskeyCreationOptions, PasskeyInfo, PasskeyRequestOptions } from '../../../lib/community/contract.ts';
import { ipHash, rateAllow, randomToken, sha256, sql, transaction } from '../db.ts';
import { ApiError, badRequest, isAllowedOrigin, json, notFound, readJson, tooMany } from '../http.ts';
import { currentMember, requireMember, startSession } from '../session.ts';
import { selfMember } from './members.ts';
import { iso } from './util.ts';
import { WebAuthnError, fromB64url, parseClientData, rpIdFor, toB64url, verifyAssertion, verifyRegistration } from './webauthn.ts';

const CHALLENGE_MINUTES = 5;
const MAX_PASSKEYS = 10;
const TIMEOUT_MS = 300_000;
const transportsAllowed = ['usb', 'nfc', 'ble', 'internal', 'hybrid', 'smart-card'];

/** The page origin this ceremony is for: the request's Origin, which handle() has already checked. */
function pageOrigin(req: Request): string {
  const origin = req.headers.get('origin') ?? '';
  if (!isAllowedOrigin(origin)) throw new ApiError(403, 'forbidden', 'This request did not come from outbrick.site.');
  return new URL(origin).origin;
}

async function issueChallenge(purpose: 'passkey_register' | 'passkey_login', origin: string, data: Record<string, unknown>): Promise<{ challenge: string; rpId: string }> {
  const challenge = randomToken(32);
  const rpId = rpIdFor(origin);
  await sql`INSERT INTO auth_tokens (token_hash, purpose, data, expires_at)
            VALUES (${sha256(challenge)}, ${purpose}, ${JSON.stringify({ ...data, origin, rpId })}::jsonb, now() + make_interval(mins => ${CHALLENGE_MINUTES}))`;
  return { challenge, rpId };
}

/** Use up the challenge named in the client data, or fail. Returns what it was issued with. */
async function consumeChallenge(purpose: 'passkey_register' | 'passkey_login', clientDataJSON: Uint8Array): Promise<{ origin: string; rpId: string; memberId?: number }> {
  const client = parseClientData(clientDataJSON);
  if (!/^[A-Za-z0-9_-]{20,100}$/.test(client.challenge)) throw badRequest('expired', 'That passkey request has expired. Please try again.');
  const [row] = await sql`UPDATE auth_tokens SET used_at = now()
                           WHERE token_hash = ${sha256(client.challenge)} AND purpose = ${purpose} AND used_at IS NULL AND expires_at > now()
                           RETURNING data`;
  if (!row) throw badRequest('expired', 'That passkey request has expired. Please try again.');
  const data = (typeof row.data === 'string' ? JSON.parse(row.data) : row.data) as Record<string, unknown>;
  return { origin: String(data.origin), rpId: String(data.rpId), memberId: data.memberId == null ? undefined : Number(data.memberId) };
}

const asInvalid = (error: unknown): never => {
  if (error instanceof WebAuthnError) throw badRequest('invalid', error.message, { credential: error.code });
  throw error;
};

const obj = (v: unknown): Record<string, unknown> => (v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : {});

function passkeyView(r: Record<string, unknown>): PasskeyInfo {
  const transports = typeof r.transports === 'string' ? (JSON.parse(r.transports) as unknown) : r.transports;
  return {
    id: Number(r.id),
    nickname: typeof r.nickname === 'string' ? r.nickname : '',
    createdAt: iso(r.created_at),
    lastUsedAt: r.last_used_at == null ? null : iso(r.last_used_at),
    transports: Array.isArray(transports) ? transports.map(String) : [],
    backedUp: Boolean(r.backed_up),
  };
}

// Registration ------------------------------------------------------------------------------------

export async function registerOptions(req: Request): Promise<Response> {
  const viewer = await requireMember(req);
  const origin = pageOrigin(req);
  if (!(await rateAllow(`passkey:register:${viewer.id}`, 20, 3600))) throw tooMany();
  // The user handle: random, per member, created the first time it is needed.
  await sql`UPDATE members SET webauthn_handle = ${randomToken(32)} WHERE id = ${viewer.id} AND webauthn_handle IS NULL`;
  const [m] = await sql`SELECT webauthn_handle FROM members WHERE id = ${viewer.id}`;
  const existing = await sql`SELECT credential_id, transports FROM passkeys WHERE member_id = ${viewer.id} ORDER BY id`;
  const { challenge, rpId } = await issueChallenge('passkey_register', origin, { memberId: viewer.id });
  const options: PasskeyCreationOptions = {
    challenge,
    rp: { id: rpId, name: 'OutBrick Community' },
    user: { id: String(m.webauthn_handle), name: viewer.display_name, displayName: viewer.display_name },
    pubKeyCredParams: [
      { type: 'public-key', alg: -7 },
      { type: 'public-key', alg: -257 },
    ],
    timeout: TIMEOUT_MS,
    attestation: 'none',
    authenticatorSelection: { residentKey: 'required', requireResidentKey: true, userVerification: 'preferred' },
    excludeCredentials: existing.map((r) => {
      const t = typeof r.transports === 'string' ? (JSON.parse(r.transports) as unknown) : r.transports;
      return { type: 'public-key' as const, id: String(r.credential_id), ...(Array.isArray(t) && t.length ? { transports: t.map(String) } : {}) };
    }),
  };
  return json(options);
}

export async function register(req: Request): Promise<Response> {
  const viewer = await requireMember(req);
  const origin = pageOrigin(req);
  const body = await readJson(req, 64 * 1024);
  const response = obj(body.response);
  let clientDataJSON: Uint8Array;
  let attestationObject: Uint8Array;
  let rawId: Uint8Array;
  try {
    clientDataJSON = fromB64url(response.clientDataJSON, 'clientDataJSON');
    attestationObject = fromB64url(response.attestationObject, 'attestationObject');
    rawId = fromB64url(body.rawId ?? body.id, 'rawId');
  } catch (error) {
    return asInvalid(error);
  }
  let issued;
  try {
    issued = await consumeChallenge('passkey_register', clientDataJSON);
  } catch (error) {
    return asInvalid(error);
  }
  if (issued.memberId !== viewer.id || issued.origin !== origin) throw badRequest('expired', 'That passkey request has expired. Please try again.');
  let verified;
  try {
    verified = verifyRegistration({ clientDataJSON, attestationObject, rawId, origin: issued.origin, rpId: issued.rpId });
  } catch (error) {
    return asInvalid(error);
  }
  const transports = Array.isArray(response.transports) ? [...new Set(response.transports.map(String).filter((t) => transportsAllowed.includes(t)))] : [];
  const nickname = (typeof body.nickname === 'string' ? body.nickname : '').replace(/[\p{Cc}\p{Cf}]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 60) || 'Passkey';
  const row = await transaction(async (q) => {
    const [count] = await q(`SELECT count(*)::int AS n FROM passkeys WHERE member_id = $1`, [viewer.id]);
    if (Number(count?.n ?? 0) >= MAX_PASSKEYS) throw badRequest('too_many', `You can keep up to ${MAX_PASSKEYS} passkeys. Remove one first.`);
    const [taken] = await q(`SELECT 1 FROM passkeys WHERE credential_id = $1`, [verified.credentialId]);
    if (taken) throw badRequest('invalid', 'That passkey is already registered.', { credential: 'already_registered' });
    const [inserted] = await q(
      `INSERT INTO passkeys (member_id, credential_id, public_key, algorithm, sign_count, transports, nickname, aaguid, backed_up)
       VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8, $9)
       RETURNING id::int AS id, nickname, created_at, last_used_at, transports, backed_up`,
      [viewer.id, verified.credentialId, verified.publicKey, verified.algorithm, verified.signCount, JSON.stringify(transports), nickname, verified.aaguid, verified.backedUp],
    );
    return inserted;
  });
  return json({ passkey: passkeyView(row) }, { status: 201 });
}

// Sign-in -----------------------------------------------------------------------------------------

export async function loginOptions(req: Request): Promise<Response> {
  const origin = pageOrigin(req);
  if (!(await rateAllow(`passkey:options:ip:${ipHash(req)}`, 60, 600))) throw tooMany();
  const { challenge, rpId } = await issueChallenge('passkey_login', origin, {});
  const options: PasskeyRequestOptions = { challenge, rpId, timeout: TIMEOUT_MS, userVerification: 'preferred', allowCredentials: [] };
  return json(options);
}

export async function login(req: Request): Promise<Response> {
  const origin = pageOrigin(req);
  if (!(await rateAllow(`passkey:login:ip:${ipHash(req)}`, 30, 600))) throw tooMany('Too many sign-in attempts from here. Please wait a little and try again.');
  const body = await readJson(req, 64 * 1024);
  const response = obj(body.response);
  let clientDataJSON: Uint8Array;
  let authenticatorData: Uint8Array;
  let signature: Uint8Array;
  let credentialId: string;
  let userHandle: string | null;
  try {
    clientDataJSON = fromB64url(response.clientDataJSON, 'clientDataJSON');
    authenticatorData = fromB64url(response.authenticatorData, 'authenticatorData');
    signature = fromB64url(response.signature, 'signature');
    credentialId = toB64url(fromB64url(body.rawId ?? body.id, 'rawId'));
    userHandle = response.userHandle == null || response.userHandle === '' ? null : toB64url(fromB64url(response.userHandle, 'userHandle'));
  } catch (error) {
    return asInvalid(error);
  }
  let issued;
  try {
    issued = await consumeChallenge('passkey_login', clientDataJSON);
  } catch (error) {
    return asInvalid(error);
  }
  if (issued.origin !== origin) throw badRequest('expired', 'That passkey request has expired. Please try again.');
  const [cred] = await sql`
    SELECT p.id::int AS id, p.member_id::int AS member_id, p.public_key, p.sign_count, m.webauthn_handle
      FROM passkeys p JOIN members m ON m.id = p.member_id
     WHERE p.credential_id = ${credentialId} AND m.deleted_at IS NULL`;
  if (!cred) throw badRequest('unknown_credential', 'That passkey isn’t registered here. It may have been removed; sign in another way and add it again.');
  // The user handle the authenticator returned must be the one this credential was made for.
  if (userHandle !== null && userHandle !== String(cred.webauthn_handle)) throw badRequest('invalid', 'That passkey belongs to a different account.', { credential: 'wrong_user' });
  let result;
  try {
    result = verifyAssertion({ clientDataJSON, authenticatorData, signature, origin: issued.origin, rpId: issued.rpId, publicKey: String(cred.public_key), storedSignCount: Number(cred.sign_count) });
  } catch (error) {
    return asInvalid(error);
  }
  await sql`UPDATE passkeys SET sign_count = ${result.signCount}, backed_up = ${result.backedUp}, last_used_at = now() WHERE id = ${cred.id}`;
  const cookie = await startSession(req, Number(cred.member_id));
  const session = cookie.split(';')[0];
  const viewer = await currentMember(new Request(req.url, { headers: { cookie: session } }));
  return json({ member: viewer ? await selfMember(viewer) : null }, { headers: { 'Set-Cookie': cookie } });
}

// The member's own list ---------------------------------------------------------------------------

export async function listPasskeys(req: Request): Promise<Response> {
  const viewer = await currentMember(req);
  if (!viewer) throw new ApiError(401, 'signin_required', 'Sign in to do that.');
  const rows = await sql`SELECT id::int AS id, nickname, created_at, last_used_at, transports, backed_up FROM passkeys WHERE member_id = ${viewer.id} ORDER BY created_at, id`;
  return json({ passkeys: rows.map(passkeyView) });
}

export async function deletePasskey(req: Request, idText: string): Promise<Response> {
  const viewer = await currentMember(req);
  if (!viewer) throw new ApiError(401, 'signin_required', 'Sign in to do that.');
  const id = /^\d{1,15}$/.test(idText) ? Number(idText) : NaN;
  if (!Number.isSafeInteger(id)) throw notFound();
  const rows = await sql`DELETE FROM passkeys WHERE id = ${id} AND member_id = ${viewer.id} RETURNING id`;
  if (!rows.length) throw notFound('That passkey does not exist.');
  return json({ ok: true });
}
