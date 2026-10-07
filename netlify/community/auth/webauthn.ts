// WebAuthn verification with node:crypto and nothing else (phase 2): base64url, a minimal CBOR
// decoder, authenticator data, client data, COSE keys and signatures. The routes that use it are
// passkeys.ts; this file holds no state and touches no database, so every rule is unit-testable.
//
// What is accepted, deliberately narrow:
//   - attestation "none" only (the options ask for none, and browsers send none when asked);
//   - ES256 (COSE -7, P-256) and RS256 (COSE -257) public keys;
//   - user presence required; user verification preferred, not required;
//   - the client data's origin must be exactly the origin that asked for the challenge, never
//     cross-origin, and the RP id hash must be SHA-256 of the RP id for that origin.
//
// Reference: https://www.w3.org/TR/webauthn-3/ §7.1 (registration) and §7.2 (authentication).

import { createHash, createPublicKey, verify as verifySignature, type KeyObject } from 'node:crypto';

export class WebAuthnError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

const fail = (code: string, message: string) => new WebAuthnError(code, message);

// base64url ---------------------------------------------------------------------------------------

export function fromB64url(value: unknown, what = 'value'): Uint8Array {
  if (typeof value !== 'string' || !/^[A-Za-z0-9_-]*={0,2}$/.test(value) || value.length > 100_000) throw fail('bad_encoding', `${what} is not base64url.`);
  return new Uint8Array(Buffer.from(value.replace(/=+$/, ''), 'base64url'));
}

export const toB64url = (bytes: Uint8Array) => Buffer.from(bytes).toString('base64url');

const sha256 = (data: Uint8Array | string) => new Uint8Array(createHash('sha256').update(data).digest());
const equalBytes = (a: Uint8Array, b: Uint8Array) => a.length === b.length && a.every((v, i) => v === b[i]);

// CBOR (RFC 8949), the subset WebAuthn uses --------------------------------------------------------

export type Cbor = number | bigint | string | boolean | null | undefined | Uint8Array | Cbor[] | Map<Cbor, Cbor>;

/** Decode one CBOR item at `offset`; returns the value and where it ended. No indefinite lengths. */
export function decodeCbor(buf: Uint8Array, offset = 0, depth = 0): { value: Cbor; end: number } {
  if (depth > 16) throw fail('bad_cbor', 'CBOR nests too deeply.');
  if (offset >= buf.length) throw fail('bad_cbor', 'CBOR ends early.');
  const initial = buf[offset];
  const major = initial >> 5;
  const info = initial & 0x1f;
  let at = offset + 1;
  const need = (n: number) => {
    if (at + n > buf.length) throw fail('bad_cbor', 'CBOR ends early.');
  };
  let arg: number;
  if (info < 24) arg = info;
  else if (info === 24) {
    need(1);
    arg = buf[at];
    at += 1;
  } else if (info === 25) {
    need(2);
    arg = (buf[at] << 8) | buf[at + 1];
    at += 2;
  } else if (info === 26) {
    need(4);
    arg = buf[at] * 2 ** 24 + ((buf[at + 1] << 16) | (buf[at + 2] << 8) | buf[at + 3]);
    at += 4;
  } else if (info === 27) {
    need(8);
    const big = Buffer.from(buf.subarray(at, at + 8)).readBigUInt64BE();
    if (big > BigInt(Number.MAX_SAFE_INTEGER)) throw fail('bad_cbor', 'CBOR number too large.');
    arg = Number(big);
    at += 8;
  } else throw fail('bad_cbor', 'Indefinite or reserved CBOR lengths are not accepted.');

  switch (major) {
    case 0:
      return { value: arg, end: at };
    case 1:
      return { value: -1 - arg, end: at };
    case 2:
      need(arg);
      return { value: buf.slice(at, at + arg), end: at + arg };
    case 3:
      need(arg);
      return { value: new TextDecoder('utf-8', { fatal: true }).decode(buf.subarray(at, at + arg)), end: at + arg };
    case 4: {
      if (arg > 1000) throw fail('bad_cbor', 'CBOR array too long.');
      const items: Cbor[] = [];
      for (let i = 0; i < arg; i++) {
        const item = decodeCbor(buf, at, depth + 1);
        items.push(item.value);
        at = item.end;
      }
      return { value: items, end: at };
    }
    case 5: {
      if (arg > 1000) throw fail('bad_cbor', 'CBOR map too long.');
      const map = new Map<Cbor, Cbor>();
      for (let i = 0; i < arg; i++) {
        const key = decodeCbor(buf, at, depth + 1);
        const val = decodeCbor(buf, key.end, depth + 1);
        if (map.has(key.value)) throw fail('bad_cbor', 'Duplicate CBOR map key.');
        map.set(key.value, val.value);
        at = val.end;
      }
      return { value: map, end: at };
    }
    case 7:
      if (info === 20) return { value: false, end: at };
      if (info === 21) return { value: true, end: at };
      if (info === 22) return { value: null, end: at };
      if (info === 23) return { value: undefined, end: at };
      throw fail('bad_cbor', 'CBOR floats are not expected here.');
    default:
      throw fail('bad_cbor', 'CBOR tags are not expected here.');
  }
}

// Authenticator data ------------------------------------------------------------------------------

export const FLAG_UP = 0x01;
export const FLAG_UV = 0x04;
export const FLAG_BE = 0x08;
export const FLAG_BS = 0x10;
export const FLAG_AT = 0x40;
export const FLAG_ED = 0x80;

export type AuthenticatorData = {
  rpIdHash: Uint8Array;
  flags: number;
  signCount: number;
  credential?: { aaguid: Uint8Array; id: Uint8Array; publicKey: Uint8Array };
};

export function parseAuthenticatorData(data: Uint8Array): AuthenticatorData {
  if (data.length < 37) throw fail('bad_authenticator_data', 'Authenticator data is too short.');
  const flags = data[32];
  const out: AuthenticatorData = {
    rpIdHash: data.slice(0, 32),
    flags,
    signCount: data[33] * 2 ** 24 + ((data[34] << 16) | (data[35] << 8) | data[36]),
  };
  let at = 37;
  if (flags & FLAG_AT) {
    if (data.length < at + 18) throw fail('bad_authenticator_data', 'Attested credential data is too short.');
    const aaguid = data.slice(at, at + 16);
    const len = (data[at + 16] << 8) | data[at + 17];
    at += 18;
    if (len < 16 || len > 1023 || data.length < at + len) throw fail('bad_authenticator_data', 'Credential id has a bad length.');
    const id = data.slice(at, at + len);
    at += len;
    const key = decodeCbor(data, at);
    out.credential = { aaguid, id, publicKey: data.slice(at, key.end) };
    at = key.end;
  }
  if (flags & FLAG_ED) at = decodeCbor(data, at).end;
  if (at !== data.length) throw fail('bad_authenticator_data', 'Authenticator data has trailing bytes.');
  return out;
}

// COSE keys ---------------------------------------------------------------------------------------

export const ES256 = -7;
export const RS256 = -257;

/** A COSE_Key (CBOR bytes) as a node KeyObject, with its algorithm. */
export function coseToKey(cose: Uint8Array): { key: KeyObject; alg: number } {
  const { value, end } = decodeCbor(cose);
  if (!(value instanceof Map) || end !== cose.length) throw fail('bad_key', 'The public key is not a COSE key.');
  const kty = value.get(1);
  const alg = value.get(3);
  const bytes = (label: number) => {
    const v = value.get(label);
    if (!(v instanceof Uint8Array)) throw fail('bad_key', 'The public key is missing a part.');
    return v;
  };
  if (kty === 2 && alg === ES256) {
    if (value.get(-1) !== 1) throw fail('bad_key', 'Only P-256 keys are accepted.');
    const x = bytes(-2);
    const y = bytes(-3);
    if (x.length !== 32 || y.length !== 32) throw fail('bad_key', 'The P-256 key has the wrong size.');
    return { key: createPublicKey({ key: { kty: 'EC', crv: 'P-256', x: toB64url(x), y: toB64url(y) }, format: 'jwk' }), alg: ES256 };
  }
  if (kty === 3 && alg === RS256) {
    const n = bytes(-1);
    const e = bytes(-2);
    if (n.length < 256) throw fail('bad_key', 'RSA keys must be at least 2048 bits.');
    return { key: createPublicKey({ key: { kty: 'RSA', n: toB64url(n), e: toB64url(e) }, format: 'jwk' }), alg: RS256 };
  }
  throw fail('unsupported_algorithm', 'Only ES256 and RS256 passkeys are accepted.');
}

// Client data -------------------------------------------------------------------------------------

export type ClientData = { type: string; challenge: string; origin: string; crossOrigin?: boolean };

export function parseClientData(bytes: Uint8Array): ClientData {
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)) as Record<string, unknown>;
  } catch {
    throw fail('bad_client_data', 'Client data is not JSON.');
  }
  if (!data || typeof data.type !== 'string' || typeof data.challenge !== 'string' || typeof data.origin !== 'string') throw fail('bad_client_data', 'Client data is incomplete.');
  return { type: data.type, challenge: data.challenge, origin: data.origin, crossOrigin: data.crossOrigin === true };
}

/** The checks both ceremonies make on the client data, given what the challenge row promised. */
export function checkClientData(client: ClientData, expected: { type: 'webauthn.create' | 'webauthn.get'; origin: string }): void {
  if (client.type !== expected.type) throw fail('wrong_type', 'This is not the expected kind of passkey response.');
  if (client.origin !== expected.origin) throw fail('wrong_origin', 'The passkey answered for a different site.');
  if (client.crossOrigin) throw fail('wrong_origin', 'The passkey answered from inside another site.');
}

// The RP id ---------------------------------------------------------------------------------------

/**
 * The relying party id for a page origin: outbrick.site for www.outbrick.site (and the apex, so
 * one passkey works on both), and the origin's own host elsewhere — a Netlify deploy host is its
 * own registrable domain, because netlify.app is a public suffix — and localhost in development.
 */
export function rpIdFor(origin: string): string {
  const host = new URL(origin).hostname;
  if (host === 'outbrick.site' || host.endsWith('.outbrick.site')) return 'outbrick.site';
  return host;
}

// The two ceremonies ------------------------------------------------------------------------------

export type VerifiedRegistration = {
  credentialId: string;
  publicKey: string;
  algorithm: number;
  signCount: number;
  aaguid: string;
  backedUp: boolean;
  userVerified: boolean;
};

/** §7.1, after the caller has matched clientData.challenge to a live challenge for `origin`. */
export function verifyRegistration(input: { clientDataJSON: Uint8Array; attestationObject: Uint8Array; rawId: Uint8Array; origin: string; rpId: string }): VerifiedRegistration {
  checkClientData(parseClientData(input.clientDataJSON), { type: 'webauthn.create', origin: input.origin });
  const { value, end } = decodeCbor(input.attestationObject);
  if (!(value instanceof Map) || end !== input.attestationObject.length) throw fail('bad_attestation', 'The attestation is not a CBOR map.');
  const fmt = value.get('fmt');
  const attStmt = value.get('attStmt');
  const authData = value.get('authData');
  if (fmt !== 'none') throw fail('attestation_not_none', 'Only attestation "none" is accepted.');
  if (!(attStmt instanceof Map) || attStmt.size !== 0) throw fail('bad_attestation', 'Attestation "none" has an empty statement.');
  if (!(authData instanceof Uint8Array)) throw fail('bad_attestation', 'The attestation has no authenticator data.');
  const auth = parseAuthenticatorData(authData);
  if (!equalBytes(auth.rpIdHash, sha256(input.rpId))) throw fail('wrong_rp', 'The passkey was made for a different site.');
  if (!(auth.flags & FLAG_UP)) throw fail('no_user_presence', 'The authenticator did not confirm a person was present.');
  if (!auth.credential) throw fail('bad_attestation', 'No credential was created.');
  if (!equalBytes(auth.credential.id, input.rawId)) throw fail('bad_attestation', 'The credential id does not match.');
  const { alg } = coseToKey(auth.credential.publicKey);
  return {
    credentialId: toB64url(auth.credential.id),
    publicKey: toB64url(auth.credential.publicKey),
    algorithm: alg,
    signCount: auth.signCount,
    aaguid: Buffer.from(auth.credential.aaguid).toString('hex'),
    backedUp: Boolean(auth.flags & FLAG_BS),
    userVerified: Boolean(auth.flags & FLAG_UV),
  };
}

/** §7.2, after the caller has matched the challenge and found the stored credential. */
export function verifyAssertion(input: {
  clientDataJSON: Uint8Array;
  authenticatorData: Uint8Array;
  signature: Uint8Array;
  origin: string;
  rpId: string;
  publicKey: string;
  storedSignCount: number;
}): { signCount: number; backedUp: boolean } {
  checkClientData(parseClientData(input.clientDataJSON), { type: 'webauthn.get', origin: input.origin });
  const auth = parseAuthenticatorData(input.authenticatorData);
  if (!equalBytes(auth.rpIdHash, sha256(input.rpId))) throw fail('wrong_rp', 'The passkey belongs to a different site.');
  if (!(auth.flags & FLAG_UP)) throw fail('no_user_presence', 'The authenticator did not confirm a person was present.');
  const { key, alg } = coseToKey(fromB64url(input.publicKey));
  const signed = Buffer.concat([input.authenticatorData, sha256(input.clientDataJSON)]);
  const ok = alg === ES256 ? verifySignature('sha256', signed, { key, dsaEncoding: 'der' }, input.signature) : verifySignature('sha256', signed, key, input.signature);
  if (!ok) throw fail('bad_signature', 'The passkey’s signature does not verify.');
  // A counter that does not move forward means a cloned authenticator; synced passkeys send 0.
  if ((auth.signCount !== 0 || input.storedSignCount !== 0) && auth.signCount <= input.storedSignCount) throw fail('sign_count', 'This passkey’s counter went backwards.');
  return { signCount: auth.signCount, backedUp: Boolean(auth.flags & FLAG_BS) };
}

export const challengeHash = (challenge: string) => Buffer.from(sha256(challenge)).toString('hex');
