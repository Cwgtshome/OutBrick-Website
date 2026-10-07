// Sign in with Apple, Google and Facebook: the authorisation-code flow, done in our own
// function with fetch and node:crypto (no identity service, no SDK).
//
//   GET /api/community/auth/<provider>/start?returnTo=&locale=   → 302 to the provider
//   GET|POST /api/community/auth/<provider>/callback               → 302/303 back to returnTo
//
// Google uses PKCE as well as its client secret. State, nonce, the PKCE verifier, returnTo and the language live in `auth_tokens` (purpose
// 'oauth_state'), keyed by the SHA-256 of the `state` value and usable once for ten minutes.
// Apple answers with a cross-site form POST, which carries no SameSite=Lax cookie, so nothing the
// callback needs may live in a cookie. Google and Facebook come back with a top-level GET, so they
// also check a short-lived browser-binding cookie, which stops someone from finishing a sign-in
// they started in a victim's browser (login CSRF).
//
// Redirect URIs come from the request's own origin, so Deploy Previews work once registered:
//   https://www.outbrick.site/api/community/auth/<provider>/callback

import { createHash, createHmac } from 'node:crypto';
import type { CommunityLocale, Provider } from '../../../lib/community/contract.ts';
import { ipHash, rateAllow, randomToken, sha256, sql } from '../db.ts';
import { requestOrigin } from '../http.ts';
import { startSession } from '../session.ts';
import { claimTrue, signEs256, verifyIdToken } from './jwt.ts';
import { signInWithProfile, type ProviderProfile } from './members.ts';
import { sendConfirmEmail } from './email-link.ts';
import { asLocale, providerConfigured, redirectTo, safeReturnTo, signInErrorRedirect, type SignInError } from './util.ts';

export type OAuthProvider = Exclude<Provider, 'email'>;
export const oauthProviders: readonly OAuthProvider[] = ['apple', 'google', 'facebook'];

const STATE_MINUTES = 10;
const FB = 'v19.0';

export const endpoints = {
  google: { authorize: 'https://accounts.google.com/o/oauth2/v2/auth', token: 'https://oauth2.googleapis.com/token', jwks: 'https://www.googleapis.com/oauth2/v3/certs', issuers: ['https://accounts.google.com', 'accounts.google.com'] },
  apple: { authorize: 'https://appleid.apple.com/auth/authorize', token: 'https://appleid.apple.com/auth/token', jwks: 'https://appleid.apple.com/auth/keys', issuers: ['https://appleid.apple.com'] },
  facebook: { authorize: `https://www.facebook.com/${FB}/dialog/oauth`, token: `https://graph.facebook.com/${FB}/oauth/access_token`, me: `https://graph.facebook.com/${FB}/me` },
} as const;

const env = (name: string) => process.env[name]?.trim() ?? '';
const isHttps = (req: Request) => new URL(req.url).protocol === 'https:';
const bindingCookieName = (req: Request) => (isHttps(req) ? '__Host-ob_oauth' : 'ob_oauth');

function bindingCookie(req: Request, value: string, maxAge: number): string {
  return `${bindingCookieName(req)}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${isHttps(req) ? '; Secure' : ''}`;
}

function readCookie(req: Request, name: string): string | null {
  for (const part of (req.headers.get('cookie') ?? '').split(/;\s*/)) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i) === name) return part.slice(i + 1);
  }
  return null;
}

export function callbackUrl(req: Request, provider: OAuthProvider): string {
  return `${requestOrigin(req)}/api/community/auth/${provider}/callback`;
}

type StateData = { provider: OAuthProvider; verifier: string; nonce: string; returnTo: string; locale: CommunityLocale; binding: string | null };

const pkceChallenge = (verifier: string) => createHash('sha256').update(verifier).digest('base64url');

// ---------------------------------------------------------------------------------------
// Start

export async function startOAuth(req: Request, provider: OAuthProvider, url: URL): Promise<Response> {
  const origin = requestOrigin(req);
  const locale = asLocale(url.searchParams.get('locale'));
  if (!providerConfigured(provider)) return signInErrorRedirect(origin, locale, 'unavailable');
  if (!(await rateAllow(`oauth:ip:${ipHash(req)}`, 30, 3600))) return signInErrorRedirect(origin, locale, 'failed');
  const state = randomToken(32);
  const nonce = randomToken(24);
  const verifier = randomToken(48);
  const returnTo = safeReturnTo(url.searchParams.get('returnTo'), locale);
  // Apple's callback is a cross-site POST: a Lax cookie would never come back, so it isn't bound.
  const binding = provider === 'apple' ? null : randomToken(24);
  const data: StateData = { provider, verifier, nonce, returnTo, locale, binding: binding ? sha256(binding) : null };
  await sql`INSERT INTO auth_tokens (token_hash, purpose, data, expires_at)
            VALUES (${sha256(state)}, 'oauth_state', ${JSON.stringify(data)}::jsonb, now() + make_interval(mins => ${STATE_MINUTES}))`;
  const redirectUri = callbackUrl(req, provider);
  let target: URL;
  if (provider === 'google') {
    target = new URL(endpoints.google.authorize);
    target.search = new URLSearchParams({
      client_id: env('GOOGLE_CLIENT_ID'),
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'openid email profile',
      state,
      nonce,
      code_challenge: pkceChallenge(verifier),
      code_challenge_method: 'S256',
      prompt: 'select_account',
    }).toString();
  } else if (provider === 'apple') {
    target = new URL(endpoints.apple.authorize);
    target.search = new URLSearchParams({
      client_id: env('APPLE_CLIENT_ID'),
      redirect_uri: redirectUri,
      response_type: 'code',
      response_mode: 'form_post',
      scope: 'name email',
      state,
      nonce,
    }).toString();
  } else {
    target = new URL(endpoints.facebook.authorize);
    target.search = new URLSearchParams({
      client_id: env('FACEBOOK_APP_ID'),
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'email,public_profile',
      state,
    }).toString();
  }
  const headers = new Headers({ Location: target.toString(), 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' });
  if (binding) headers.append('Set-Cookie', bindingCookie(req, binding, STATE_MINUTES * 60));
  return new Response(null, { status: 302, headers });
}

// ---------------------------------------------------------------------------------------
// Callback

class FlowError extends Error {
  code: SignInError;
  constructor(code: SignInError, message: string) {
    super(message);
    this.code = code;
  }
}

/** Use the state once: a replayed or expired state finds nothing. */
async function consumeState(provider: OAuthProvider, state: string): Promise<StateData | null> {
  if (!state || state.length > 200) return null;
  const rows = await sql`UPDATE auth_tokens SET used_at = now()
                          WHERE token_hash = ${sha256(state)} AND purpose = 'oauth_state' AND used_at IS NULL AND expires_at > now()
                          RETURNING data`;
  const data = rows[0]?.data as StateData | string | undefined;
  const parsed = typeof data === 'string' ? (JSON.parse(data) as StateData) : data;
  return parsed && parsed.provider === provider ? parsed : null;
}

async function postForm(url: string, form: Record<string, string>): Promise<Record<string, unknown>> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: new URLSearchParams(form).toString(),
    signal: AbortSignal.timeout(9000),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) throw new FlowError('failed', `token endpoint ${response.status} ${String(data.error ?? '')}`);
  return data;
}

async function googleProfile(req: Request, code: string, st: StateData): Promise<ProviderProfile> {
  const tokens = await postForm(endpoints.google.token, {
    code,
    client_id: env('GOOGLE_CLIENT_ID'),
    client_secret: env('GOOGLE_CLIENT_SECRET'),
    redirect_uri: callbackUrl(req, 'google'),
    grant_type: 'authorization_code',
    code_verifier: st.verifier,
  });
  const claims = await verifyIdToken(String(tokens.id_token ?? ''), { jwksUrl: endpoints.google.jwks, issuers: [...endpoints.google.issuers], audience: env('GOOGLE_CLIENT_ID'), nonce: st.nonce });
  const verified = claimTrue(claims.email_verified) && typeof claims.email === 'string';
  return {
    provider: 'google',
    subject: String(claims.sub),
    email: verified ? String(claims.email) : null,
    emailVerified: verified,
    name: typeof claims.name === 'string' ? claims.name : typeof claims.given_name === 'string' ? claims.given_name : null,
    locale: st.locale,
  };
}

export function appleClientSecret(nowSeconds = Math.floor(Date.now() / 1000)): string {
  return signEs256(
    { kid: env('APPLE_KEY_ID') },
    { iss: env('APPLE_TEAM_ID'), iat: nowSeconds, exp: nowSeconds + 300, aud: 'https://appleid.apple.com', sub: env('APPLE_CLIENT_ID') },
    process.env.APPLE_PRIVATE_KEY ?? '',
  );
}

/** Apple sends the name once, on the first authorisation, as JSON in the `user` form field. */
export function appleName(user: string | null): string | null {
  if (!user) return null;
  try {
    const parsed = JSON.parse(user) as { name?: { firstName?: unknown; lastName?: unknown } };
    const first = typeof parsed.name?.firstName === 'string' ? parsed.name.firstName.trim() : '';
    const last = typeof parsed.name?.lastName === 'string' ? parsed.name.lastName.trim() : '';
    return [first, last].filter(Boolean).join(' ') || null;
  } catch {
    return null;
  }
}

async function appleProfile(req: Request, code: string, st: StateData, user: string | null): Promise<ProviderProfile> {
  const tokens = await postForm(endpoints.apple.token, {
    client_id: env('APPLE_CLIENT_ID'),
    client_secret: appleClientSecret(),
    code,
    grant_type: 'authorization_code',
    redirect_uri: callbackUrl(req, 'apple'),
  });
  const claims = await verifyIdToken(String(tokens.id_token ?? ''), { jwksUrl: endpoints.apple.jwks, issuers: [...endpoints.apple.issuers], audience: env('APPLE_CLIENT_ID'), nonce: st.nonce });
  // Apple only issues verified addresses (relay addresses included), but says so explicitly.
  const verified = typeof claims.email === 'string' && claimTrue(claims.email_verified ?? true);
  return { provider: 'apple', subject: String(claims.sub), email: verified ? String(claims.email) : null, emailVerified: verified, name: appleName(user), locale: st.locale };
}

async function facebookProfile(req: Request, code: string, st: StateData): Promise<ProviderProfile> {
  const tokenUrl = new URL(endpoints.facebook.token);
  tokenUrl.search = new URLSearchParams({
    client_id: env('FACEBOOK_APP_ID'),
    client_secret: env('FACEBOOK_APP_SECRET'),
    redirect_uri: callbackUrl(req, 'facebook'),
    code,
  }).toString();
  const tokenResponse = await fetch(tokenUrl, { signal: AbortSignal.timeout(9000), headers: { Accept: 'application/json' } });
  const tokens = (await tokenResponse.json().catch(() => ({}))) as Record<string, unknown>;
  if (!tokenResponse.ok || typeof tokens.access_token !== 'string') throw new FlowError('failed', `facebook token ${tokenResponse.status}`);
  const accessToken = tokens.access_token;
  const proof = createHmac('sha256', env('FACEBOOK_APP_SECRET')).update(accessToken).digest('hex');
  const meUrl = new URL(endpoints.facebook.me);
  meUrl.search = new URLSearchParams({ fields: 'id,name,email', access_token: accessToken, appsecret_proof: proof }).toString();
  const meResponse = await fetch(meUrl, { signal: AbortSignal.timeout(9000), headers: { Accept: 'application/json' } });
  const me = (await meResponse.json().catch(() => ({}))) as Record<string, unknown>;
  if (!meResponse.ok || typeof me.id !== 'string' || !/^\d{1,40}$/.test(me.id)) throw new FlowError('failed', `facebook me ${meResponse.status}`);
  // Facebook doesn't promise the address is verified: it is used, but only after the member confirms it.
  return { provider: 'facebook', subject: me.id, email: typeof me.email === 'string' ? me.email : null, emailVerified: false, name: typeof me.name === 'string' ? me.name : null, locale: st.locale };
}

/** Read the callback's parameters: query string (GET) or form body (Apple's form_post). */
async function callbackParams(req: Request, url: URL): Promise<URLSearchParams> {
  if (req.method !== 'POST') return url.searchParams;
  const text = (await req.text()).slice(0, 20_000);
  return new URLSearchParams(text);
}

export async function oauthCallback(req: Request, provider: OAuthProvider, url: URL): Promise<Response> {
  const origin = requestOrigin(req);
  // A POST answers with 303 so the browser follows with a GET; a GET with 302.
  const status = req.method === 'POST' ? 303 : 302;
  const clearBinding = bindingCookie(req, '', 0);
  const params = await callbackParams(req, url);
  const st = await consumeState(provider, params.get('state') ?? '');
  const locale = st?.locale ?? asLocale(url.searchParams.get('locale'));
  if (!st) return signInErrorRedirect(origin, locale, 'expired', status, [clearBinding]);
  if (!providerConfigured(provider)) return signInErrorRedirect(origin, locale, 'unavailable', status, [clearBinding]);
  if (params.get('error')) return signInErrorRedirect(origin, locale, 'denied', status, [clearBinding]);
  if (st.binding) {
    const cookie = readCookie(req, bindingCookieName(req));
    if (!cookie || sha256(cookie) !== st.binding) return signInErrorRedirect(origin, locale, 'expired', status, [clearBinding]);
  }
  const code = params.get('code') ?? '';
  if (!code || code.length > 2000) return signInErrorRedirect(origin, locale, 'invalid', status, [clearBinding]);
  try {
    const profile =
      provider === 'google' ? await googleProfile(req, code, st) : provider === 'apple' ? await appleProfile(req, code, st, params.get('user')) : await facebookProfile(req, code, st);
    const result = await signInWithProfile(profile);
    if (result.confirmEmail) await sendConfirmEmail(req, result.memberId, result.confirmEmail, 'provider', locale).catch((e: unknown) => console.error('[community-auth] confirm email failed:', e instanceof Error ? e.message : e));
    const cookie = await startSession(req, result.memberId);
    console.log(`[community-auth] ${provider} sign-in ok (member ${result.memberId}${result.created ? ', new' : ''})`);
    return redirectTo(origin, st.returnTo, status, 'from=signin', [cookie, clearBinding]);
  } catch (error) {
    console.error(`[community-auth] ${provider} callback failed:`, error instanceof Error ? error.message : String(error));
    return signInErrorRedirect(origin, locale, error instanceof FlowError ? error.code : 'failed', status, [clearBinding]);
  }
}
