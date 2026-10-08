// The session and the member's own account: who am I, sign out, settings, export, delete.
//
//   GET    /api/community/session     → SessionResponse
//   POST   /api/community/auth/signout → { ok: true }
//   PATCH  /api/community/me          UpdateMeRequest → { member, emailConfirmationSent? }
//   GET    /api/community/me/export   → a JSON attachment of everything held about the member
//   DELETE /api/community/me          { confirm: 'DELETE' } → { ok: true }

import type { NotificationKind, SessionResponse, UpdateMeRequest } from '../../../lib/community/contract.ts';
import { normalizeEmail } from '../../../emails/links.ts';
import { rateAllow, sql, transaction } from '../db.ts';
import { ApiError, badRequest, forbidden, json, readJson, unauthorized } from '../http.ts';
import { currentMember, endSession, sessionCookie, type Viewer } from '../session.ts';
import { sendConfirmEmail } from './email-link.ts';
import { displayNameProblem, selfMember, tidyName } from './members.ts';
import { asLocale, configuredProviders, isPlaceholderEmail } from './util.ts';
import { communityFeatures } from '../features.ts';
import { deleteUnattachedUploads } from '../uploads.ts';
import { onAccountDeleted } from '../../lifecycle/security.ts';

/** Email kinds a member can switch off. The welcome is sent once and has no switch. */
export const switchableKinds: readonly (NotificationKind | 'digest')[] = ['reply', 'mention', 'watched', 'status', 'solved', 'release', 'moderation', 'badge', 'merged', 'digest'];

export async function getSession(req: Request): Promise<Response> {
  const viewer = await currentMember(req);
  let unread = 0;
  if (viewer) {
    const [row] = await sql`SELECT count(*)::int AS n FROM notifications WHERE member_id = ${viewer.id} AND read_at IS NULL AND kind <> 'welcome'`;
    unread = Number(row?.n ?? 0);
  }
  const body: SessionResponse = { member: viewer ? await selfMember(viewer) : null, providers: configuredProviders(), unreadNotifications: unread, features: communityFeatures() };
  return json(body);
}

export async function signOut(req: Request): Promise<Response> {
  const cookie = await endSession(req);
  return json({ ok: true }, { headers: { 'Set-Cookie': cookie } });
}

async function signedIn(req: Request): Promise<Viewer> {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  return viewer;
}

export async function updateMe(req: Request): Promise<Response> {
  const viewer = await signedIn(req);
  const body = (await readJson(req, 16 * 1024)) as UpdateMeRequest & { email?: unknown };
  const fields: Record<string, string> = {};
  const changes: { displayName?: string; bio?: string; locale?: string; prefs?: Record<string, boolean> } = {};

  if (body.displayName !== undefined) {
    const name = tidyName(body.displayName);
    const problem = displayNameProblem(name);
    if (problem) fields.displayName = problem;
    else changes.displayName = name;
  }
  if (body.bio !== undefined) {
    const bio = (typeof body.bio === 'string' ? body.bio : '').replace(/\r\n?/g, '\n').replace(/(?![\t\n])\p{Cc}/gu, '').trim();
    if (bio.length > 500) fields.bio = 'too_long';
    else changes.bio = bio;
  }
  if (body.locale !== undefined) {
    const locale = asLocale(body.locale, 'en');
    if (locale !== body.locale) fields.locale = 'invalid';
    else changes.locale = locale;
  }
  if (body.emailPrefs !== undefined) {
    const prefs = body.emailPrefs;
    if (!prefs || typeof prefs !== 'object' || Array.isArray(prefs)) fields.emailPrefs = 'invalid';
    else {
      const clean: Record<string, boolean> = {};
      for (const [key, value] of Object.entries(prefs)) {
        if (!(switchableKinds as readonly string[]).includes(key) || typeof value !== 'boolean') {
          fields.emailPrefs = 'invalid';
          break;
        }
        clean[key] = value;
      }
      if (!fields.emailPrefs) changes.prefs = clean;
    }
  }
  let newEmail: string | null = null;
  if (body.email !== undefined && body.email !== '' && body.email !== null) {
    const email = normalizeEmail(body.email);
    if (!email || isPlaceholderEmail(email)) fields.email = 'invalid';
    else if (email !== viewer.email.toLowerCase() || !viewer.email_verified) newEmail = email;
  }
  // A suspended member may still change their language and their emails, nothing public.
  if (viewer.banned && (changes.displayName !== undefined || changes.bio !== undefined)) throw forbidden('Your account is suspended.');
  if (Object.keys(fields).length) throw badRequest('invalid', 'Please check the highlighted fields.', fields);

  if (changes.displayName !== undefined) {
    const [taken] = await sql`SELECT 1 FROM members WHERE lower(display_name) = lower(${changes.displayName}) AND deleted_at IS NULL AND id <> ${viewer.id}`;
    if (taken) throw badRequest('invalid', 'That name is taken.', { displayName: 'taken' });
  }
  if (newEmail) {
    const [holder] = await sql`SELECT 1 FROM members WHERE lower(email) = ${newEmail} AND email_verified AND deleted_at IS NULL AND id <> ${viewer.id}`;
    if (holder) throw badRequest('invalid', 'That address belongs to another account.', { email: 'taken' });
    if (!(await rateAllow(`email-change:member:${viewer.id}`, 5, 3600))) throw new ApiError(429, 'rate_limited', 'Slow down a little and try again later.');
  }

  try {
    await transaction(async (q) => {
      if (changes.displayName !== undefined) await q(`UPDATE members SET display_name = $2, name_chosen = true WHERE id = $1`, [viewer.id, changes.displayName]);
      if (changes.bio !== undefined) await q(`UPDATE members SET bio = $2 WHERE id = $1`, [viewer.id, changes.bio]);
      if (changes.locale !== undefined) await q(`UPDATE members SET locale = $2 WHERE id = $1`, [viewer.id, changes.locale]);
      if (changes.prefs) await q(`UPDATE members SET email_prefs = email_prefs || $2::jsonb WHERE id = $1`, [viewer.id, JSON.stringify(changes.prefs)]);
    });
  } catch (error) {
    // Two people choosing the same name in the same instant: the unique index decides.
    if (/members_display_name_key|duplicate key/i.test(error instanceof Error ? error.message : '')) throw badRequest('invalid', 'That name is taken.', { displayName: 'taken' });
    throw error;
  }

  let emailConfirmationSent: boolean | undefined;
  if (newEmail) emailConfirmationSent = await sendConfirmEmail(req, viewer.id, newEmail, 'change', asLocale(changes.locale ?? viewer.locale));
  const fresh = await currentMember(req);
  return json({ member: fresh ? await selfMember(fresh) : null, ...(emailConfirmationSent === undefined ? {} : { emailConfirmationSent }) });
}

export async function exportMe(req: Request): Promise<Response> {
  const viewer = await signedIn(req);
  const out = await buildExport(viewer.id);
  return new Response(JSON.stringify(out, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Disposition': `attachment; filename="outbrick-community-${viewer.id}.json"`,
      'Cache-Control': 'no-store',
    },
  });
}

/** Everything held about member `id`, for the download above and the emailed link (lifecycle/security.ts). */
export async function buildExport(id: number): Promise<Record<string, unknown>> {
  const [member] = await sql`SELECT id::int, display_name, name_chosen, email, email_verified, locale, role, bio, email_prefs, banned_until, ban_reason, created_at, last_seen_at FROM members WHERE id = ${id}`;
  const identities = await sql`SELECT provider, subject, email, created_at, last_used_at FROM identities WHERE member_id = ${id} ORDER BY created_at`;
  const sessions = await sql`SELECT created_at, expires_at, user_agent FROM sessions WHERE member_id = ${id} ORDER BY created_at`;
  const threads = await sql`SELECT t.id::int, t.title, t.slug, c.slug AS category, t.language, t.status, t.status_note, t.bug, t.created_at FROM threads t JOIN categories c ON c.id = t.category_id WHERE t.author_id = ${id} ORDER BY t.created_at`;
  const posts = await sql`SELECT id::int, thread_id::int, number, body_md, reply_to, hidden, hidden_reason, pending, created_at, edited_at, deleted_at FROM posts WHERE author_id = ${id} ORDER BY created_at`;
  const votes = await sql`SELECT thread_id::int, created_at FROM votes WHERE member_id = ${id} ORDER BY created_at`;
  const follows = await sql`SELECT target_type, target_id::int, level, created_at FROM follows WHERE member_id = ${id} ORDER BY created_at`;
  const notifications = await sql`SELECT id::int, kind, thread_id::int, post_id::int, data, created_at, read_at, emailed_at, email_skipped FROM notifications WHERE member_id = ${id} ORDER BY created_at`;
  const reports = await sql`SELECT post_id::int, reason, note, created_at, resolved_at, resolution FROM reports WHERE reporter_id = ${id} ORDER BY created_at`;
  // Phase 2 (community-p2): passkeys (never their keys) and uploads.
  const passkeys = await sql`SELECT nickname, transports, backed_up, created_at, last_used_at FROM passkeys WHERE member_id = ${id} ORDER BY created_at`;
  const uploads = await sql`SELECT id, content_type, width, height, bytes, attached_post_id::int, created_at, deleted_at FROM uploads WHERE member_id = ${id} ORDER BY created_at`;
  // community-fx
  const reactions = await sql`SELECT post_id::int, kind, created_at FROM reactions WHERE member_id = ${id} ORDER BY created_at`;
  const bookmarks = await sql`SELECT post_id::int, created_at FROM bookmarks WHERE member_id = ${id} ORDER BY created_at`;
  const pollVotes = await sql`SELECT pv.thread_id::int, o.label AS option, pv.created_at FROM poll_votes pv JOIN poll_options o ON o.id = pv.option_id WHERE pv.member_id = ${id} ORDER BY pv.created_at`;
  const badges = await sql`SELECT badge, level, (granted_by IS NOT NULL) AS granted, awarded_at, revoked_at FROM member_badges WHERE member_id = ${id} ORDER BY awarded_at`;
  const dated = (rows: Record<string, unknown>[]) =>
    rows.map((row) => Object.fromEntries(Object.entries(row).map(([k, v]) => [k, v instanceof Date ? v.toISOString() : typeof v === 'bigint' ? Number(v) : v])));
  const out = {
    exportedAt: new Date().toISOString(),
    about: 'Everything OutBrick Community holds about your account. Session tokens are stored only as one-way hashes and are not included.',
    member: dated([member])[0],
    identities: dated(identities),
    sessions: dated(sessions),
    threads: dated(threads),
    posts: dated(posts),
    votes: dated(votes),
    follows: dated(follows),
    notifications: dated(notifications),
    reports: dated(reports),
    passkeys: dated(passkeys),
    uploads: dated(uploads),
    reactions: dated(reactions),
    bookmarks: dated(bookmarks),
    pollVotes: dated(pollVotes),
    badges: dated(badges),
    // Lifecycle (8 October 2026): the browsers and devices this account has signed in from.
    devices: dated(await sql`SELECT label, first_seen, last_seen FROM member_devices WHERE member_id = ${id} ORDER BY first_seen`),
  };
  return out;
}

export async function deleteMe(req: Request): Promise<Response> {
  const viewer = await signedIn(req);
  const body = await readJson(req, 1024);
  if (body.confirm !== 'DELETE') throw badRequest('invalid', 'Type DELETE to confirm.', { confirm: 'required' });
  const id = viewer.id;
  // The confirmation goes to the address the account had, so read it before it is erased.
  const [before] = await sql`SELECT email, email_verified, locale FROM members WHERE id = ${id}`;
  await transaction(async (q) => {
    // Posts stay, so threads still read; they show "Former member <id>" as the author.
    await q(
      `UPDATE members SET display_name = $2, name_chosen = true, email = $3, email_verified = false, bio = '', email_prefs = '{}'::jsonb,
              deleted_at = now() WHERE id = $1`,
      [id, `Former member ${id}`, `deleted-${id}@invalid`],
    );
    await q(`DELETE FROM identities WHERE member_id = $1`, [id]);
    await q(`DELETE FROM sessions WHERE member_id = $1`, [id]);
    await q(`DELETE FROM notifications WHERE member_id = $1`, [id]);
    await q(`DELETE FROM follows WHERE member_id = $1`, [id]);
    await q(`DELETE FROM reads WHERE member_id = $1`, [id]);
    // Phase 2 (community-p2): passkeys can no longer sign in to the deleted account.
    await q(`DELETE FROM passkeys WHERE member_id = $1`, [id]);
    await q(`UPDATE members SET webauthn_handle = NULL WHERE id = $1`, [id]);
    // community-fx: reactions, poll votes, bookmarks and badges go with the account.
    await q(`DELETE FROM reactions WHERE member_id = $1`, [id]);
    await q(`DELETE FROM poll_votes WHERE member_id = $1`, [id]);
    await q(`DELETE FROM bookmarks WHERE member_id = $1`, [id]);
    await q(`DELETE FROM member_badges WHERE member_id = $1`, [id]);
    await q(`UPDATE members SET top_badge = NULL WHERE id = $1`, [id]);
    await q(`DELETE FROM auth_tokens WHERE lower(email) = lower($2) OR (purpose = 'email_change' AND data->>'memberId' = $1::text)`, [id, viewer.email]);
  });
  // Images no post shows go with the account; those in posts stay with the posts, as the text does.
  await deleteUnattachedUploads(id);
  await sql`DELETE FROM member_devices WHERE member_id = ${id}`;
  console.log(`[community-auth] member ${id} deleted their account`);
  if (before) await onAccountDeleted(id, String(before.email), Boolean(before.email_verified), String(before.locale));
  return json({ ok: true }, { headers: { 'Set-Cookie': sessionCookie(req, '', 0) } });
}
