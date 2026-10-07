// Email sign-in and email confirmation: a one-time link by email, via Resend.
//
//   POST /api/community/auth/email          { email, locale, returnTo?, website? } → { sent: true }
//   GET  /api/community/auth/email/verify?token=   a one-button page ("Sign in")
//   POST /api/community/auth/email/verify?token=   uses the token, signs in, 303 → returnTo
//   GET  /api/community/auth/email/confirm?token=  a one-button page ("Confirm my email address")
//   POST /api/community/auth/email/confirm?token=  confirms the address, 303 → /community/settings
//
// Link scanners (Outlook Safe Links, corporate gateways) GET every link in a message before the
// reader does. So a GET never uses a token: it draws a page whose button POSTs. That works on any
// device, unlike a same-browser cookie, which would fail for someone who asks for the link on a
// Mac and opens it on an iPhone.
//
// Tokens are 32 random bytes; the database stores only their SHA-256, with the purpose, the
// address, an expiry and the time they were used.

import { communityPath, type CommunityLocale } from '../../../lib/community/contract.ts';
import { communityConfirmEmail, communitySignIn, communityUrl } from '../../../emails/community.ts';
import { communityCopy } from '../../../emails/community-i18n.ts';
import { normalizeEmail } from '../../../emails/links.ts';
import { SENDERS, sendEmail } from '../../../emails/resend.ts';
import { ipHash, rateAllow, randomToken, sha256, sql, transaction } from '../db.ts';
import { ApiError, badRequest, json, readJson, requestOrigin, tooMany } from '../http.ts';
import { isConfiguredAdmin, startSession } from '../session.ts';
import { signInWithProfile } from './members.ts';
import { asLocale, pageResponse, redirectTo, safeReturnTo, signInErrorRedirect } from './util.ts';

export const SIGNIN_MINUTES = 20;
export const CONFIRM_HOURS = 24;

const apiKey = () => process.env.RESEND_API_KEY ?? '';

function tokenFrom(url: URL): string {
  const token = url.searchParams.get('token') ?? '';
  return /^[A-Za-z0-9_-]{20,100}$/.test(token) ? token : '';
}

const parseData = (value: unknown): Record<string, unknown> => (typeof value === 'string' ? (JSON.parse(value) as Record<string, unknown>) : ((value as Record<string, unknown>) ?? {}));

// ---------------------------------------------------------------------------------------
// Ask for a link

export async function requestEmailSignIn(req: Request): Promise<Response> {
  const body = await readJson(req, 8 * 1024);
  const locale = asLocale(body.locale);
  // A bot that fills the hidden field is told it worked and nothing is sent.
  if (typeof body.website === 'string' && body.website.trim()) return json({ sent: true });
  if (!apiKey()) throw new ApiError(503, 'unavailable', 'Email sign-in is not available right now.');
  const email = normalizeEmail(body.email);
  if (!email) throw badRequest('invalid', 'That doesn’t look like an email address.', { email: 'invalid' });
  if (!(await rateAllow(`signin:ip:${ipHash(req)}`, 10, 3600))) throw tooMany('Too many sign-in links from here. Please wait a little and try again.');
  if (!(await rateAllow(`signin:email:${sha256(email).slice(0, 32)}`, 5, 3600))) throw tooMany('We’ve sent several links to that address already. Please check your inbox, or wait a little.');

  const [member] = await sql`SELECT locale FROM members WHERE lower(email) = ${email} AND deleted_at IS NULL`;
  const mailLocale = member ? asLocale(member.locale, locale) : locale;
  const returnTo = safeReturnTo(body.returnTo, locale);
  const token = randomToken(32);
  const hash = sha256(token);
  await sql`INSERT INTO auth_tokens (token_hash, purpose, email, data, expires_at)
            VALUES (${hash}, 'signin', ${email}, ${JSON.stringify({ returnTo, locale: mailLocale })}::jsonb, now() + make_interval(mins => ${SIGNIN_MINUTES}))`;
  const origin = requestOrigin(req);
  const link = `${origin}/api/community/auth/email/verify?token=${token}`;
  const email_ = communitySignIn({ locale: mailLocale, url: link, manageUrl: communityUrl(mailLocale, '/settings', origin) });
  const sent = await sendEmail(
    apiKey(),
    { ...SENDERS.community, to: email, subject: email_.subject, html: email_.html, text: email_.text, tags: [{ name: 'form', value: 'community-signin' }, { name: 'locale', value: mailLocale }] },
    `community-signin-${hash.slice(0, 32)}`,
  );
  if (!sent.ok) {
    console.error(`[community-auth] sign-in email failed: ${sent.error}`);
    throw new ApiError(502, 'send_failed', 'We couldn’t send the email just now. Please try again in a minute.');
  }
  return json({ sent: true });
}

// ---------------------------------------------------------------------------------------
// The link: a page on GET, the sign-in on POST

async function peek(token: string, purpose: 'signin' | 'email_change') {
  if (!token) return null;
  const [row] = await sql`SELECT email, data FROM auth_tokens
                           WHERE token_hash = ${sha256(token)} AND purpose = ${purpose} AND used_at IS NULL AND expires_at > now()`;
  return row ? { email: typeof row.email === 'string' ? row.email : '', data: parseData(row.data) } : null;
}

/** Locale for an error page: the token's own, when the token exists at all (even used). */
async function tokenLocale(token: string, url: URL): Promise<CommunityLocale> {
  if (token) {
    const [row] = await sql`SELECT data FROM auth_tokens WHERE token_hash = ${sha256(token)}`;
    if (row) return asLocale(parseData(row.data).locale);
  }
  return asLocale(url.searchParams.get('locale'));
}

export async function signInPage(req: Request, url: URL): Promise<Response> {
  const token = tokenFrom(url);
  const found = await peek(token, 'signin');
  if (!found) return signInErrorRedirect(requestOrigin(req), await tokenLocale(token, url), 'expired');
  const locale = asLocale(found.data.locale);
  const p = communityCopy[locale].pages.signin;
  return pageResponse({ locale, title: p.title, body: p.body, note: p.note, form: { action: `${url.pathname}?token=${token}`, button: p.button }, origin: requestOrigin(req) });
}

export async function signInWithLink(req: Request, url: URL): Promise<Response> {
  const origin = requestOrigin(req);
  const token = tokenFrom(url);
  const rows = token
    ? await sql`UPDATE auth_tokens SET used_at = now()
                 WHERE token_hash = ${sha256(token)} AND purpose = 'signin' AND used_at IS NULL AND expires_at > now()
                 RETURNING email, data`
    : [];
  if (!rows[0]) return signInErrorRedirect(origin, await tokenLocale(token, url), 'expired', 303);
  const email = normalizeEmail(rows[0].email);
  const data = parseData(rows[0].data);
  const locale = asLocale(data.locale);
  if (!email) return signInErrorRedirect(origin, locale, 'invalid', 303);
  const result = await signInWithProfile({ provider: 'email', subject: email, email, emailVerified: true, name: null, locale });
  const cookie = await startSession(req, result.memberId);
  return redirectTo(origin, safeReturnTo(data.returnTo, locale), 303, 'from=signin', [cookie]);
}

// ---------------------------------------------------------------------------------------
// Confirm an address: Facebook's (unverified) one, or a changed one

export async function sendConfirmEmail(req: Request, memberId: number, address: string, reason: 'provider' | 'change', locale: CommunityLocale): Promise<boolean> {
  const email = normalizeEmail(address);
  if (!email || !apiKey()) return false;
  const token = randomToken(32);
  const hash = sha256(token);
  await sql`INSERT INTO auth_tokens (token_hash, purpose, email, data, expires_at)
            VALUES (${hash}, 'email_change', ${email}, ${JSON.stringify({ memberId, reason, locale })}::jsonb, now() + make_interval(hours => ${CONFIRM_HOURS}))`;
  const origin = requestOrigin(req);
  const rendered = communityConfirmEmail({ locale, reason, url: `${origin}/api/community/auth/email/confirm?token=${token}`, manageUrl: communityUrl(locale, '/settings', origin) });
  const sent = await sendEmail(
    apiKey(),
    { ...SENDERS.community, to: email, subject: rendered.subject, html: rendered.html, text: rendered.text, tags: [{ name: 'form', value: 'community-confirm-email' }, { name: 'locale', value: locale }] },
    `community-confirm-${hash.slice(0, 32)}`,
  );
  if (!sent.ok) console.error(`[community-auth] confirm email failed: ${sent.error}`);
  return sent.ok;
}

export async function confirmEmailPage(req: Request, url: URL): Promise<Response> {
  const token = tokenFrom(url);
  const found = await peek(token, 'email_change');
  if (!found) return signInErrorRedirect(requestOrigin(req), await tokenLocale(token, url), 'expired');
  const locale = asLocale(found.data.locale);
  const p = communityCopy[locale].pages.confirmEmail;
  return pageResponse({ locale, title: p.title, body: p.body, form: { action: `${url.pathname}?token=${token}`, button: p.button }, origin: requestOrigin(req) });
}

/**
 * Use the confirmation. The address becomes the member's, verified. If another member already
 * holds it verified (someone who signed in with Facebook and already had an account), the new
 * sign-in method is moved onto that account — as long as the new account has posted nothing —
 * and the reader is signed in to it.
 */
export async function confirmEmailWithLink(req: Request, url: URL): Promise<Response> {
  const origin = requestOrigin(req);
  const token = tokenFrom(url);
  const rows = token
    ? await sql`UPDATE auth_tokens SET used_at = now()
                 WHERE token_hash = ${sha256(token)} AND purpose = 'email_change' AND used_at IS NULL AND expires_at > now()
                 RETURNING email, data`
    : [];
  if (!rows[0]) return signInErrorRedirect(origin, await tokenLocale(token, url), 'expired', 303);
  const data = parseData(rows[0].data);
  const locale = asLocale(data.locale);
  const email = normalizeEmail(rows[0].email);
  const memberId = Number(data.memberId);
  if (!email || !Number.isInteger(memberId)) return signInErrorRedirect(origin, locale, 'invalid', 303);

  const outcome = await transaction(async (q) => {
    const [member] = await q(`SELECT id::int AS id FROM members WHERE id = $1 AND deleted_at IS NULL`, [memberId]);
    if (!member) return { error: 'invalid' as const };
    const [holder] = await q(`SELECT id::int AS id, email_verified FROM members WHERE lower(email) = $1 AND deleted_at IS NULL AND id <> $2`, [email, memberId]);
    let target = memberId;
    if (holder?.email_verified) {
      const [content] = await q(
        `SELECT (SELECT count(*) FROM posts WHERE author_id = $1) + (SELECT count(*) FROM threads WHERE author_id = $1)
              + (SELECT count(*) FROM reports WHERE reporter_id = $1) + (SELECT count(*) FROM post_revisions WHERE edited_by = $1) AS n`,
        [memberId],
      );
      if (Number(content?.n ?? 0) > 0) return { error: 'email_taken' as const };
      target = Number(holder.id);
      await q(`UPDATE identities SET member_id = $1 WHERE member_id = $2`, [target, memberId]);
      await q(`DELETE FROM members WHERE id = $1`, [memberId]);
    } else {
      if (holder) await q(`UPDATE members SET email = $2 WHERE id = $1`, [holder.id, `released-${Number(holder.id)}@unverified.invalid`]);
      await q(`UPDATE members SET email = $2, email_verified = true WHERE id = $1`, [memberId, email]);
      await q(`UPDATE identities SET email = $2 WHERE member_id = $1 AND provider = 'email'`, [memberId, email]);
    }
    if (isConfiguredAdmin(email)) await q(`UPDATE members SET role = 'admin' WHERE id = $1`, [target]);
    return { target };
  });
  if ('error' in outcome) return signInErrorRedirect(origin, locale, outcome.error ?? 'invalid', 303);
  const cookie = await startSession(req, outcome.target);
  return redirectTo(origin, `${communityPath(locale, '/settings')}?email=confirmed`, 303, '', [cookie]);
}
