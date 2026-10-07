// Shared pieces of the sign-in code: which providers are switched on, safe return paths, the
// redirects and small HTML pages the flows answer with, and the community's signed links.
//
// Credentials come only from environment variables the owner sets in Netlify. Nothing here
// logs a credential, a token or an email address.

import { createHmac, hkdfSync, timingSafeEqual } from 'node:crypto';
import { communityLocales, communityPath, type CommunityLocale, type Provider } from '../../../lib/community/contract.ts';
import { communityPage, type PageInput } from '../../../emails/community.ts';

type Env = Record<string, string | undefined>;
const env = (): Env => process.env;

/** Which env vars switch each provider on. All of a provider's variables must be set. */
export const providerEnv: Record<Exclude<Provider, 'email'>, string[]> = {
  apple: ['APPLE_CLIENT_ID', 'APPLE_TEAM_ID', 'APPLE_KEY_ID', 'APPLE_PRIVATE_KEY'],
  google: ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'],
  facebook: ['FACEBOOK_APP_ID', 'FACEBOOK_APP_SECRET'],
};

export function providerConfigured(provider: Provider, e: Env = env()): boolean {
  if (provider === 'email') return Boolean(e.RESEND_API_KEY);
  return providerEnv[provider].every((name) => Boolean(e[name]?.trim()));
}

/** The sign-in buttons to show, in the order the page draws them. */
export function configuredProviders(e: Env = env()): Provider[] {
  return (['apple', 'google', 'facebook', 'email'] as const).filter((p) => providerConfigured(p, e));
}

export function asLocale(value: unknown, fallback: CommunityLocale = 'en'): CommunityLocale {
  return (communityLocales as readonly string[]).includes(String(value)) ? (value as CommunityLocale) : fallback;
}

/** The language a /fr/community/... path is in. */
export function localeOfPath(path: string): CommunityLocale {
  const m = /^\/(fr|de|es|ja)\//.exec(path);
  return m ? (m[1] as CommunityLocale) : 'en';
}

const COMMUNITY_PATH = /^\/(?:(?:fr|de|es|ja)\/)?community(?:[/?#]|$)/;

/**
 * A same-site path inside the community, or null. Absolute URLs, protocol-relative `//host`,
 * backslashes, encoded slashes and control characters are all refused, so a sign-in link can
 * never be turned into an open redirect.
 */
export function cleanReturnTo(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const v = value.trim();
  if (!v || v.length > 500 || !v.startsWith('/') || v.startsWith('//')) return null;
  if (/[\\\u0000-\u001f\u007f]|%2f|%5c|%00/i.test(v)) return null;
  let url: URL;
  try {
    url = new URL(v, 'https://returnto.invalid');
  } catch {
    return null;
  }
  if (url.origin !== 'https://returnto.invalid') return null;
  const path = `${url.pathname}${url.search}${url.hash}`;
  return COMMUNITY_PATH.test(path) ? path : null;
}

export function safeReturnTo(value: unknown, locale: CommunityLocale): string {
  return cleanReturnTo(value) ?? communityPath(locale);
}

/** The error values the sign-in page understands: /community/signin?error=<value>. */
export type SignInError = 'expired' | 'invalid' | 'denied' | 'failed' | 'unavailable' | 'email_taken';

/**
 * A redirect to a path on `origin`. Netlify copies a function's own query string onto a redirect
 * whose Location has none, which would carry a token onto the landing page, so a Location
 * without a query gets a harmless marker of its own.
 */
export function redirectTo(origin: string, path: string, status = 302, marker = 'from=signin', cookies: string[] = []): Response {
  const url = new URL(path, origin);
  if (!url.search) url.search = `?${marker}`;
  const headers = new Headers({ Location: url.toString(), 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' });
  for (const cookie of cookies) headers.append('Set-Cookie', cookie);
  return new Response(null, { status, headers });
}

export function signInErrorRedirect(origin: string, locale: CommunityLocale, error: SignInError, status = 302, cookies: string[] = []): Response {
  return redirectTo(origin, `${communityPath(locale, '/signin')}?error=${error}`, status, '', cookies);
}

const PAGE_CSP =
  "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'";

/** One of the small link pages (sign in, confirm, unsubscribe) as an HTML response. */
export function pageResponse(input: PageInput, status = 200, cookies: string[] = []): Response {
  const headers = new Headers({
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex, nofollow',
    // same-origin keeps the button's POST verifiable (browsers send Origin) without leaking
    // the token in the URL to any other site.
    'Referrer-Policy': 'same-origin',
    'Content-Security-Policy': PAGE_CSP,
  });
  for (const cookie of cookies) headers.append('Set-Cookie', cookie);
  return new Response(communityPage(input), { status, headers });
}

/** Postgres timestamps as ISO strings, whatever the driver hands back. */
export function iso(value: unknown): string {
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'string') {
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? value : d.toISOString();
  }
  return '';
}

// ---------------------------------------------------------------------------------------
// Signed community links (unsubscribe). Like emails/links.ts, the key is derived from
// RESEND_API_KEY with HKDF, with a salt of its own, so there is no extra secret to set.

const SALT = 'outbrick-community-v1';

function linkKey(apiKey: string): Buffer {
  return Buffer.from(hkdfSync('sha256', apiKey, SALT, 'community-links', 32));
}

export function signParts(apiKey: string, parts: string[]): string {
  return createHmac('sha256', linkKey(apiKey)).update(parts.join('\n')).digest('base64url');
}

export function sameMac(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Addresses that are placeholders, never real inboxes: deleted members, unconfirmed sign-ins. */
export const isPlaceholderEmail = (email: string) => /\.invalid$|@invalid$/i.test(email);
