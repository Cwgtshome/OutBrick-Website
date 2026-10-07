// Just enough JOSE for OpenID Connect, with node:crypto and fetch: verify an RS256 ID token
// against a provider's published keys (JWKS), and sign the ES256 client secret Apple asks for.

import { createPublicKey, createPrivateKey, sign, verify, type KeyObject } from 'node:crypto';

export class TokenError extends Error {}

const b64url = (buf: Buffer | string) => Buffer.from(buf).toString('base64url');

function parsePart(part: string): Record<string, unknown> {
  try {
    const value = JSON.parse(Buffer.from(part, 'base64url').toString('utf8')) as unknown;
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('not an object');
    return value as Record<string, unknown>;
  } catch {
    throw new TokenError('malformed token');
  }
}

export function decodeJwt(token: string): { header: Record<string, unknown>; payload: Record<string, unknown>; signingInput: string; signature: Buffer } {
  const parts = String(token ?? '').split('.');
  if (parts.length !== 3 || parts.some((p) => !/^[A-Za-z0-9_-]*$/.test(p))) throw new TokenError('malformed token');
  return { header: parsePart(parts[0]), payload: parsePart(parts[1]), signingInput: `${parts[0]}.${parts[1]}`, signature: Buffer.from(parts[2], 'base64url') };
}

// JWKS, cached per URL for an hour and refetched at once when an unknown key id appears
// (providers rotate keys without notice).
type Jwk = Record<string, unknown> & { kid?: string; kty?: string };
const cache = new Map<string, { at: number; keys: Jwk[] }>();

export function resetJwksCache(): void {
  cache.clear();
}

async function loadJwks(url: string, force: boolean): Promise<Jwk[]> {
  const hit = cache.get(url);
  if (hit && !force && Date.now() - hit.at < 3600_000) return hit.keys;
  const response = await fetch(url, { signal: AbortSignal.timeout(8000), headers: { Accept: 'application/json' } });
  if (!response.ok) throw new TokenError(`JWKS ${response.status}`);
  const data = (await response.json()) as { keys?: Jwk[] };
  const keys = Array.isArray(data.keys) ? data.keys : [];
  cache.set(url, { at: Date.now(), keys });
  return keys;
}

async function keyFor(url: string, kid: string): Promise<KeyObject> {
  let keys = await loadJwks(url, false);
  let jwk = keys.find((k) => k.kid === kid);
  if (!jwk) {
    keys = await loadJwks(url, true);
    jwk = keys.find((k) => k.kid === kid);
  }
  if (!jwk || jwk.kty !== 'RSA') throw new TokenError('unknown signing key');
  return createPublicKey({ key: jwk as unknown as import('node:crypto').JsonWebKey, format: 'jwk' });
}

export type VerifyOptions = {
  jwksUrl: string;
  issuers: string[];
  audience: string;
  nonce: string;
  nowSeconds?: number;
};

/** Verify signature (RS256 only), issuer, audience, expiry and nonce; return the claims. */
export async function verifyIdToken(token: string, opts: VerifyOptions): Promise<Record<string, unknown>> {
  const { header, payload, signingInput, signature } = decodeJwt(token);
  if (header.alg !== 'RS256') throw new TokenError('unexpected algorithm');
  if (typeof header.kid !== 'string' || !header.kid) throw new TokenError('no key id');
  const key = await keyFor(opts.jwksUrl, header.kid);
  if (!verify('RSA-SHA256', Buffer.from(signingInput), key, signature)) throw new TokenError('bad signature');
  const now = opts.nowSeconds ?? Math.floor(Date.now() / 1000);
  if (!opts.issuers.includes(String(payload.iss))) throw new TokenError('wrong issuer');
  const aud = payload.aud;
  if (!(aud === opts.audience || (Array.isArray(aud) && aud.includes(opts.audience)))) throw new TokenError('wrong audience');
  if (Array.isArray(aud) && aud.length > 1 && payload.azp !== opts.audience) throw new TokenError('wrong authorised party');
  if (typeof payload.exp !== 'number' || payload.exp + 60 < now) throw new TokenError('expired');
  if (typeof payload.iat === 'number' && payload.iat - 300 > now) throw new TokenError('issued in the future');
  if (typeof payload.sub !== 'string' || !payload.sub) throw new TokenError('no subject');
  if (payload.nonce !== opts.nonce) throw new TokenError('wrong nonce');
  return payload;
}

/** "true", true → true; anything else false (Apple sends strings, Google booleans). */
export const claimTrue = (v: unknown) => v === true || v === 'true';

/** An ES256 JWT, e.g. Apple's client secret. The PEM may arrive with literal "\n" sequences. */
export function signEs256(header: Record<string, unknown>, payload: Record<string, unknown>, pem: string): string {
  const key = createPrivateKey(pem.includes('\\n') ? pem.replace(/\\n/g, '\n') : pem);
  const input = `${b64url(JSON.stringify({ ...header, alg: 'ES256', typ: 'JWT' }))}.${b64url(JSON.stringify(payload))}`;
  const signature = sign('sha256', Buffer.from(input), { key, dsaEncoding: 'ieee-p1363' });
  return `${input}.${b64url(signature)}`;
}
