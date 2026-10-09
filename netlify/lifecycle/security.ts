// Account security and notice emails for OutBrick Community members:
//
//   - a sign-in from a browser/OS pair the member hasn't used before (onSessionStarted, called by
//     startSession) emails newSignIn with a one-tap "sign out of every device" link; the very
//     first device of an account is recorded silently;
//   - a new passkey (passkeys.ts register) emails passkeyAdded;
//   - deleting an account (account.ts deleteMe) emails accountDeleted to the address it had;
//   - "Email me my data" (POST /api/community/me/export/email) emails a 24-hour signed link to
//     the JSON export, served by netlify/functions/account-export.mts;
//   - policy notices (POST /api/community/admin/notices/policy, admins only) queue policyNotice
//     for every verified member and every newsletter reader.
//
// Security emails can't be switched off. They are sent straight away and, if Resend refuses,
// queued in the outbox (kind 'security') with everything needed to render them again. None of
// them may break the request that triggered it: failures are logged and swallowed.

import { createHash } from 'node:crypto';
import { sql, transaction } from '../community/db.ts';
import { badRequest, json, readJson, str, SITE, type Route } from '../community/http.ts';
import { requireMember, requireRole, sessionCookie } from '../community/session.ts';
import { communityUrl } from '../../emails/community.ts';
import { emailLocales, isEmailLocale, type EmailLocale } from '../../emails/i18n.ts';
import { signedUrl, unsubscribeUrl, verifySigned } from '../../emails/links.ts';
import { EXPORT_LINK_HOURS, accountDeleted, dataExport, newSignIn, passkeyAdded, policyNotice, signOutPage } from '../../emails/lifecycle.ts';
import { listUnsubscribeHeaders } from '../../emails/newsletter.ts';
import { SENDERS, sendEmail, type OutgoingEmail } from '../../emails/resend.ts';
import type { Rendered } from '../../emails/templates.ts';
import { enqueue, enqueueNow, signalOutbox, type Prepared, type Row as OutboxRow } from './outbox.ts';

type Env = Record<string, string | undefined>;
const localeOf = (v: unknown): EmailLocale => (isEmailLocale(v) ? v : 'en');
const manageUrl = (locale: EmailLocale) => communityUrl(locale, '/settings');

/** "Safari on macOS", "Chrome on Android" — only browser and OS families, nothing finer. */
export function deviceLabel(ua: string): string {
  const s = ua || '';
  const os = /iPhone|iPod/.test(s) ? 'iPhone' : /iPad/.test(s) ? 'iPad' : /Android/.test(s) ? 'Android' : /Mac OS X|Macintosh/.test(s) ? 'macOS' : /Windows/.test(s) ? 'Windows' : /CrOS/.test(s) ? 'ChromeOS' : /Linux/.test(s) ? 'Linux' : '';
  const browser = /Edg\//.test(s) ? 'Edge' : /OPR\/|Opera/.test(s) ? 'Opera' : /Firefox\/|FxiOS/.test(s) ? 'Firefox' : /Chrome\/|CriOS/.test(s) ? 'Chrome' : /Safari\//.test(s) ? 'Safari' : '';
  if (browser && os) return `${browser} on ${os}`;
  return browser || os || 'A browser';
}

const fingerprint = (label: string) => createHash('sha256').update(`outbrick-device:${label}`).digest('hex').slice(0, 32);

type Send = (apiKey: string, email: OutgoingEmail, key?: string) => ReturnType<typeof sendEmail>;
let sender: Send = sendEmail;
export function setSecuritySenderForTests(send: Send | null): void {
  sender = send ?? sendEmail;
}

type SecurityPayload =
  | { template: 'new-sign-in'; memberId: number; device: string; at: string }
  | { template: 'passkey-added'; nickname: string; at: string }
  | { template: 'account-deleted' }
  | { template: 'data-export'; memberId: number };

function render(apiKey: string, locale: EmailLocale, p: SecurityPayload): Rendered {
  switch (p.template) {
    case 'new-sign-in':
      return newSignIn({ locale, device: p.device, at: p.at, manageUrl: manageUrl(locale), signOutUrl: signedUrl(`${SITE}/.netlify/functions/account-signout?l=${locale}`, apiKey, 'signout', { m: p.memberId }, 7 * 86400) });
    case 'passkey-added':
      return passkeyAdded({ locale, nickname: p.nickname, at: p.at, manageUrl: manageUrl(locale) });
    case 'account-deleted':
      return accountDeleted({ locale });
    case 'data-export':
      return dataExport({ locale, manageUrl: manageUrl(locale), downloadUrl: signedUrl(`${SITE}/.netlify/functions/account-export?l=${locale}`, apiKey, 'export', { m: p.memberId }, EXPORT_LINK_HOURS * 3600) });
  }
}

async function sendSecurity(to: string, locale: EmailLocale, payload: SecurityPayload, key: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !to || to.endsWith('@invalid')) return;
  try {
    const r = render(apiKey, locale, payload);
    const result = await sender(apiKey, { ...SENDERS.community, to, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: `account-${payload.template}` }, { name: 'locale', value: locale }] }, key);
    if (result.ok) return;
    console.error(`[security] ${payload.template} failed, queued: ${result.error}`);
    await enqueueNow([{ kind: 'security', to, locale, payload, dedupeKey: key }]);
  } catch (error) {
    console.error(`[security] ${payload.template}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function prepareSecurity(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const p = row.payload as SecurityPayload;
  if (!row.to_email) return null;
  const locale = localeOf(row.locale);
  const r = render(apiKey, locale, p);
  return { email: { ...SENDERS.community, to: row.to_email, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: `account-${p.template}` }, { name: 'locale', value: locale }] } };
}

/** After every sign-in: record the device; alert on a new one (not on an account's first). */
export async function onSessionStarted(req: Request, memberId: number): Promise<void> {
  try {
    const label = deviceLabel(req.headers.get('user-agent') ?? '');
    const fp = fingerprint(label);
    const inserted = await sql`INSERT INTO member_devices (member_id, fingerprint, label) VALUES (${memberId}, ${fp}, ${label})
                               ON CONFLICT (member_id, fingerprint) DO UPDATE SET last_seen = now() RETURNING (xmax = 0) AS fresh`;
    if (!inserted[0]?.fresh) return;
    const [{ n }] = (await sql`SELECT count(*)::int AS n FROM member_devices WHERE member_id = ${memberId}`) as { n: number }[];
    if (Number(n) <= 1) return;
    const [m] = await sql`SELECT email, email_verified, locale, deleted_at FROM members WHERE id = ${memberId}`;
    if (!m || !m.email_verified || m.deleted_at) return;
    const at = new Date().toISOString();
    await sendSecurity(String(m.email), localeOf(m.locale), { template: 'new-sign-in', memberId, device: label, at }, `signin-${memberId}-${fp}`);
  } catch (error) {
    console.error(`[security] device check for member ${memberId}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export async function onPasskeyAdded(memberId: number, nickname: string): Promise<void> {
  try {
    const [m] = await sql`SELECT email, email_verified, locale FROM members WHERE id = ${memberId}`;
    if (!m || !m.email_verified) return;
    await sendSecurity(String(m.email), localeOf(m.locale), { template: 'passkey-added', nickname, at: new Date().toISOString() }, `passkey-${memberId}-${Date.now()}`);
  } catch (error) {
    console.error(`[security] passkey notice for member ${memberId}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/** Call with the address and language the account had, after the deletion committed. */
export async function onAccountDeleted(memberId: number, email: string, verified: boolean, locale: string): Promise<void> {
  if (!verified) return;
  await sendSecurity(email, localeOf(locale), { template: 'account-deleted' }, `deleted-${memberId}`);
}

/** POST /api/community/me/export/email — the signed download link, to the account's own address. */
export const emailExport: Route['run'] = async (req) => {
  const viewer = await requireMember(req);
  if (!viewer.email_verified) throw badRequest('unverified', 'Confirm your email address first.');
  await sendSecurity(viewer.email, localeOf(viewer.locale), { template: 'data-export', memberId: viewer.id }, `export-${viewer.id}-${Math.floor(Date.now() / 60000)}`);
  return json({ ok: true });
};

const pageHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
  'Referrer-Policy': 'same-origin',
  'Content-Security-Policy': "default-src 'none'; img-src 'self' https://www.outbrick.site; style-src 'unsafe-inline'; font-src 'self' https://www.outbrick.site; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
};

/** GET shows the button; POST ends every session of the member named in the signed link. */
export async function handleSignOutAll(req: Request, env: Env): Promise<Response> {
  const url = new URL(req.url);
  const l = url.searchParams.get('l');
  const locale = localeOf(l);
  const v = env.RESEND_API_KEY ? verifySigned(url.searchParams, env.RESEND_API_KEY, 'signout') : ({ ok: false } as const);
  if (!v.ok) return new Response('This link has expired.', { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  if (req.method === 'GET' || req.method === 'HEAD') return new Response(req.method === 'HEAD' ? null : signOutPage(locale, `${url.pathname}${url.search}`), { headers: pageHeaders });
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const origin = req.headers.get('Origin');
  if (origin && origin !== 'null' && origin !== url.origin) return new Response('Forbidden', { status: 403 });
  const memberId = Number(v.payload.m);
  await sql`DELETE FROM sessions WHERE member_id = ${memberId}`;
  console.log(`[security] member ${memberId} signed out everywhere from an email link`);
  return new Response(signOutPage(locale, '', true), { headers: { ...pageHeaders, 'Set-Cookie': sessionCookie(req, '', 0) } });
}

/** GET with a signed link: the member's JSON export (see account.ts buildExport). */
export async function handleExportDownload(req: Request, env: Env, buildExport: (memberId: number) => Promise<unknown>): Promise<Response> {
  const url = new URL(req.url);
  const v = env.RESEND_API_KEY ? verifySigned(url.searchParams, env.RESEND_API_KEY, 'export') : ({ ok: false } as const);
  if (!v.ok) return new Response('This link has expired. Ask for a new one from your account page.', { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' } });
  const memberId = Number(v.payload.m);
  const [m] = await sql`SELECT deleted_at FROM members WHERE id = ${memberId}`;
  if (!m || m.deleted_at) return new Response('This account no longer exists.', { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  const data = await buildExport(memberId);
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Disposition': `attachment; filename="outbrick-community-${memberId}.json"`, 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' },
  });
}

// ---------------------------------------------------------------------------------------
// Policy notices

type PolicyPayload = { policy: 'privacy' | 'terms'; effective: string; changes: Partial<Record<EmailLocale, string[]>>; audience: 'member' | 'news' };

/** POST /admin/notices/policy { policy, effective (YYYY-MM-DD), changes: { en: [...], fr: [...] … }, audiences: ['member','news'] } */
export const sendPolicyNotice: Route['run'] = async (req) => {
  await requireRole(req, 'admin');
  const body = await readJson(req, 64 * 1024);
  const policy = body.policy === 'terms' ? 'terms' : body.policy === 'privacy' ? 'privacy' : null;
  if (!policy) throw badRequest('invalid', 'Choose the privacy policy or the terms.', { policy: 'required' });
  const effective = str(body, 'effective', { min: 10, max: 10, label: 'Effective date' });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(effective) || Number.isNaN(Date.parse(effective))) throw badRequest('invalid', 'The date looks like 2026-11-08.', { effective: 'format' });
  const raw = (body.changes ?? {}) as Record<string, unknown>;
  const changes: Partial<Record<EmailLocale, string[]>> = {};
  for (const l of emailLocales) {
    const list = Array.isArray(raw[l]) ? (raw[l] as unknown[]).map((x) => String(x).trim().slice(0, 400)).filter(Boolean).slice(0, 10) : [];
    if (list.length) changes[l] = list;
  }
  if (!changes.en?.length) throw badRequest('invalid', 'Write at least one change in English; other languages fall back to it.', { changes: 'required' });
  const audiences = Array.isArray(body.audiences) ? body.audiences.map(String) : ['member', 'news'];
  const items: Parameters<typeof enqueue>[0] = [];
  if (audiences.includes('member')) {
    const members = await sql`SELECT email, locale FROM members WHERE email_verified AND deleted_at IS NULL`;
    for (const m of members) items.push({ kind: 'policy', to: String(m.email), locale: String(m.locale), payload: { policy, effective, changes, audience: 'member' } satisfies PolicyPayload, dedupeKey: `policy-${policy}-${effective}-m-${String(m.email).toLowerCase()}` });
  }
  if (audiences.includes('news')) {
    const readers = await sql`SELECT email, locale FROM newsletter_subscribers WHERE status = 'subscribed' AND suppressed_at IS NULL`;
    for (const r of readers) items.push({ kind: 'policy', to: String(r.email), locale: String(r.locale), payload: { policy, effective, changes, audience: 'news' } satisfies PolicyPayload, dedupeKey: `policy-${policy}-${effective}-n-${String(r.email).toLowerCase()}` });
  }
  // Someone who is both a member and a reader hears once, as a member.
  const seen = new Set<string>();
  const unique = items.filter((i) => (seen.has(i.to.toLowerCase()) ? false : (seen.add(i.to.toLowerCase()), true)));
  const at = await transaction((q) => enqueue(unique, q));
  if (at !== null) await signalOutbox(at);
  return json({ queued: unique.length });
};

export async function preparePolicy(row: OutboxRow, apiKey: string): Promise<Prepared> {
  const p = row.payload as PolicyPayload;
  const locale = localeOf(row.locale);
  const changes = p.changes[locale]?.length ? p.changes[locale]! : (p.changes.en ?? []);
  if (p.audience === 'member') {
    const [m] = await sql`SELECT 1 FROM members WHERE lower(email) = lower(${row.to_email}) AND email_verified AND deleted_at IS NULL`;
    if (!m) return null;
    const r = policyNotice({ locale, policy: p.policy, effective: p.effective, changes, audience: 'member', manageUrl: manageUrl(locale) });
    return { email: { ...SENDERS.community, to: row.to_email, subject: r.subject, html: r.html, text: r.text, tags: [{ name: 'form', value: 'notice-policy' }, { name: 'locale', value: locale }] } };
  }
  const [s] = await sql`SELECT 1 FROM newsletter_subscribers WHERE email = ${row.to_email} AND status = 'subscribed' AND suppressed_at IS NULL`;
  if (!s) return null;
  const unsub = unsubscribeUrl(SITE, apiKey, row.to_email, locale);
  const r = policyNotice({ locale, policy: p.policy, effective: p.effective, changes, audience: 'news', unsubscribeUrl: unsub });
  return { email: { ...SENDERS.news, to: row.to_email, subject: r.subject, html: r.html, text: r.text, headers: listUnsubscribeHeaders(unsub), tags: [{ name: 'form', value: 'notice-policy' }, { name: 'locale', value: locale }] } };
}

export const securityRoutes = (base: string): Route[] => [
  { method: 'POST', pattern: `${base}/admin/notices/policy`, run: sendPolicyNotice },
];
