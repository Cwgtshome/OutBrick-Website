// Signed newsletter links: confirm (expires after 7 days) and unsubscribe (never expires).
//
// There is no separate secret to set. The signing key is derived from RESEND_API_KEY with HKDF
// (SHA-256, salt "outbrick-newsletter-v1"), so the only credential anyone configures is the
// Resend key, and the key itself never appears in a link. Rotating the Resend key therefore
// invalidates every confirm and unsubscribe link already sent: confirm links are short-lived
// anyway, and an old unsubscribe link lands on a page that explains how to leave another way.

import { createHmac, hkdfSync, timingSafeEqual } from 'node:crypto';
import { isEmailLocale, type EmailLocale } from './i18n.ts';

const SALT = 'outbrick-newsletter-v1';
export const CONFIRM_TTL_SECONDS = 7 * 24 * 60 * 60;

export function linkKey(apiKey: string): Buffer {
  return Buffer.from(hkdfSync('sha256', apiKey, SALT, 'newsletter-links', 32));
}

/** Lower-cased, trimmed, and plausible; anything else is rejected before it reaches Resend. */
export function normalizeEmail(value: unknown): string | null {
  const email = (typeof value === 'string' ? value : '').trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return null;
  if (!/^[^\s@<>()",;:\\[\]]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(email)) return null;
  return email;
}

function mac(key: Buffer, parts: string[]): string {
  return createHmac('sha256', key).update(parts.join('\n')).digest('base64url');
}

function same(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

const b64 = (s: string) => Buffer.from(s, 'utf8').toString('base64url');
const unb64 = (s: string) => {
  try {
    return Buffer.from(s, 'base64url').toString('utf8');
  } catch {
    return '';
  }
};

export function confirmUrl(siteUrl: string, apiKey: string, email: string, locale: EmailLocale, nowMs = Date.now()): string {
  const x = String(Math.floor(nowMs / 1000) + CONFIRM_TTL_SECONDS);
  const t = mac(linkKey(apiKey), ['confirm', email, locale, x]);
  const q = new URLSearchParams({ e: b64(email), l: locale, x, t });
  return `${siteUrl}/.netlify/functions/newsletter-confirm?${q.toString()}`;
}

export function unsubscribeUrl(siteUrl: string, apiKey: string, email: string, locale: EmailLocale): string {
  const t = mac(linkKey(apiKey), ['unsubscribe', email]);
  const q = new URLSearchParams({ e: b64(email), l: locale, t });
  return `${siteUrl}/.netlify/functions/newsletter-unsubscribe?${q.toString()}`;
}

export type Verified = { ok: true; email: string; locale: EmailLocale } | { ok: false; reason: 'invalid' | 'expired'; locale: EmailLocale };

function readLocale(params: URLSearchParams): EmailLocale {
  const l = params.get('l');
  return isEmailLocale(l) ? l : 'en';
}

export function verifyConfirm(params: URLSearchParams, apiKey: string, nowMs = Date.now()): Verified {
  const locale = readLocale(params);
  const email = normalizeEmail(unb64(params.get('e') ?? ''));
  const x = params.get('x') ?? '';
  const t = params.get('t') ?? '';
  if (!email || !/^\d{9,11}$/.test(x) || !t) return { ok: false, reason: 'invalid', locale };
  if (!same(mac(linkKey(apiKey), ['confirm', email, locale, x]), t)) return { ok: false, reason: 'invalid', locale };
  if (Number(x) * 1000 < nowMs) return { ok: false, reason: 'expired', locale };
  return { ok: true, email, locale };
}

export function verifyUnsubscribe(params: URLSearchParams, apiKey: string): Verified {
  const locale = readLocale(params);
  const email = normalizeEmail(unb64(params.get('e') ?? ''));
  const t = params.get('t') ?? '';
  if (!email || !t) return { ok: false, reason: 'invalid', locale };
  if (!same(mac(linkKey(apiKey), ['unsubscribe', email]), t)) return { ok: false, reason: 'invalid', locale };
  return { ok: true, email, locale };
}

/** A short, stable, non-reversible tag for an address, for idempotency keys and logs. */
export function addressTag(apiKey: string, email: string): string {
  return mac(linkKey(apiKey), ['tag', email]).slice(0, 16);
}

// ---------------------------------------------------------------------------------------
// General signed links for the lifecycle emails (feedback, keep-me, preferences, sign out
// everywhere, data export). The payload is small JSON, base64url-encoded in the link; the
// signature binds it to a purpose and an expiry, so a link for one thing can never be replayed
// as another. Same key derivation as above: rotating RESEND_API_KEY invalidates them all.

export type SignedPurpose = 'feedback' | 'keep' | 'prefs' | 'signout' | 'export';

export function signedUrl(base: string, apiKey: string, purpose: SignedPurpose, payload: Record<string, string | number>, ttlSeconds: number, nowMs = Date.now()): string {
  const p = b64(JSON.stringify(payload));
  const x = String(Math.floor(nowMs / 1000) + ttlSeconds);
  const t = mac(linkKey(apiKey), [purpose, p, x]);
  const q = new URLSearchParams({ p, x, t });
  return `${base}${base.includes('?') ? '&' : '?'}${q.toString()}`;
}

export type SignedResult = { ok: true; payload: Record<string, unknown> } | { ok: false; reason: 'invalid' | 'expired' };

export function verifySigned(params: URLSearchParams, apiKey: string, purpose: SignedPurpose, nowMs = Date.now()): SignedResult {
  const p = params.get('p') ?? '';
  const x = params.get('x') ?? '';
  const t = params.get('t') ?? '';
  if (!p || p.length > 2000 || !/^\d{9,11}$/.test(x) || !t) return { ok: false, reason: 'invalid' };
  if (!same(mac(linkKey(apiKey), [purpose, p, x]), t)) return { ok: false, reason: 'invalid' };
  if (Number(x) * 1000 < nowMs) return { ok: false, reason: 'expired' };
  try {
    const payload = JSON.parse(unb64(p)) as unknown;
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return { ok: false, reason: 'invalid' };
    return { ok: true, payload: payload as Record<string, unknown> };
  } catch {
    return { ok: false, reason: 'invalid' };
  }
}
