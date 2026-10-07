// Test helpers for the sign-in code: a fetch stub that plays Google, Apple, Facebook and Resend,
// keys generated per run (never committed), and request builders. No network is ever touched.

import { generateKeyPairSync, sign, type KeyObject } from 'node:crypto';
import type { PGlite } from '@electric-sql/pglite';
import { resetJwksCache } from '../jwt.ts';

export const SITE_ORIGIN = 'https://www.outbrick.site';
export const TEST_RESEND_KEY = 're_test_not_a_real_key';

export type Call = { url: string; method: string; headers: Record<string, string>; body: string };
type Handler = (call: Call) => Response | Promise<Response> | undefined;

const realFetch = globalThis.fetch;

/** Replace fetch: Resend answers 200 by default; `handler` answers everything else. */
export function stubFetch(handler: Handler = () => undefined, opts: { resendStatus?: number } = {}) {
  const calls: Call[] = [];
  globalThis.fetch = (async (input: string | URL | Request, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    const headers: Record<string, string> = {};
    new Headers(init?.headers ?? {}).forEach((v, k) => (headers[k] = v));
    const call: Call = { url, method: init?.method ?? 'GET', headers, body: typeof init?.body === 'string' ? init.body : '' };
    calls.push(call);
    const answer = await handler(call);
    if (answer) return answer;
    if (url.startsWith('https://api.resend.com/emails')) {
      const status = opts.resendStatus ?? 200;
      return new Response(JSON.stringify(status < 300 ? { id: `email_${calls.length}` } : { message: 'stubbed failure' }), { status, headers: { 'content-type': 'application/json' } });
    }
    throw new Error(`unexpected fetch in test: ${call.method} ${url}`);
  }) as typeof fetch;
  return {
    calls,
    emails: () =>
      calls
        .filter((c) => c.url.startsWith('https://api.resend.com/emails'))
        .map((c) => ({ ...(JSON.parse(c.body) as { from: string; to: string[]; reply_to: string; subject: string; html: string; text: string; headers?: Record<string, string> }), idempotencyKey: c.headers['idempotency-key'] })),
    restore: () => {
      globalThis.fetch = realFetch;
      resetJwksCache();
    },
  };
}

export const jsonResponse = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json' } });

// ---------------------------------------------------------------------------------------
// Keys

export function rsaKey(kid: string) {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const jwk = { ...(publicKey.export({ format: 'jwk' }) as Record<string, unknown>), kid, alg: 'RS256', use: 'sig' };
  return { privateKey, publicKey, jwk, kid };
}

export function ecKeyPem() {
  const { privateKey, publicKey } = generateKeyPairSync('ec', { namedCurve: 'P-256' });
  return { pem: privateKey.export({ type: 'pkcs8', format: 'pem' }).toString(), publicKey };
}

const b64 = (v: unknown) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');

export function signRs256(payload: Record<string, unknown>, key: KeyObject, kid: string, alg = 'RS256'): string {
  const input = `${b64({ alg, kid, typ: 'JWT' })}.${b64(payload)}`;
  return `${input}.${sign('RSA-SHA256', Buffer.from(input), key).toString('base64url')}`;
}

// ---------------------------------------------------------------------------------------
// Requests and responses

/** A request from somewhere other than our pages (Apple's form_post, a mail client). */
export function foreignRequest(method: string, pathAndQuery: string, opts: { body?: string; origin?: string | null; cookie?: string; contentType?: string } = {}): Request {
  const headers: Record<string, string> = {};
  if (opts.origin) headers.origin = opts.origin;
  if (opts.cookie) headers.cookie = opts.cookie;
  if (opts.body !== undefined) headers['content-type'] = opts.contentType ?? 'application/x-www-form-urlencoded';
  return new Request(`${SITE_ORIGIN}${pathAndQuery}`, { method, headers, body: opts.body });
}

/** Set-Cookie values of a response as a Cookie header (name=value pairs, empty ones dropped). */
export function cookiesOf(res: Response): string {
  return res.headers
    .getSetCookie()
    .map((c) => c.split(';')[0])
    .filter((pair) => !pair.endsWith('='))
    .join('; ');
}

export function sessionCookieOf(res: Response): string | null {
  const c = res.headers.getSetCookie().find((v) => v.startsWith('__Host-ob_session=') && !v.startsWith('__Host-ob_session=;'));
  return c ? c.split(';')[0] : null;
}

export function withEnv(vars: Record<string, string | undefined>): () => void {
  const saved: Record<string, string | undefined> = {};
  for (const [k, v] of Object.entries(vars)) {
    saved[k] = process.env[k];
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
  }
  return () => {
    for (const [k, v] of Object.entries(saved)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  };
}

export const allProviderEnv = {
  RESEND_API_KEY: TEST_RESEND_KEY,
  GOOGLE_CLIENT_ID: 'google-client.apps.example',
  GOOGLE_CLIENT_SECRET: 'test-google-secret',
  FACEBOOK_APP_ID: '1234567890',
  FACEBOOK_APP_SECRET: 'test-facebook-secret',
  APPLE_CLIENT_ID: 'site.outbrick.community.test',
  APPLE_TEAM_ID: 'TEAMID1234',
  APPLE_KEY_ID: 'KEYID12345',
};

export async function one<T = Record<string, unknown>>(pg: PGlite, text: string, params: unknown[] = []): Promise<T> {
  const { rows } = await pg.query<T>(text, params);
  return rows[0];
}

export async function all<T = Record<string, unknown>>(pg: PGlite, text: string, params: unknown[] = []): Promise<T[]> {
  return (await pg.query<T>(text, params)).rows;
}

/** The token in a link inside an email's text part. */
export function linkToken(text: string, path: string): string {
  const m = new RegExp(`${path.replace(/[/.]/g, '\\$&')}\\?token=([A-Za-z0-9_.-]+)`).exec(text);
  if (!m) throw new Error(`no ${path} link in email`);
  return m[1];
}
