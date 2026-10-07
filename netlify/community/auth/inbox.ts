// The member's notifications on the site, and the one-click email unsubscribe.
//
//   GET  /api/community/notifications?page=        → NotificationsResponse
//   POST /api/community/notifications/read  { ids?: number[]; all?: boolean } → { ok: true }
//   GET  /api/community/email/unsubscribe?token=   → a one-button page (scanners only ever GET)
//   POST /api/community/email/unsubscribe?token=   → RFC 8058 one-click: { ok: true }; the
//                                                     page's own button: an "all done" page
//
// Unsubscribe tokens are `<memberId>.<kind>.<mac>`, signed with a key derived from
// RESEND_API_KEY (salt "outbrick-community-v1"). They never expire, so an old email's link works.

import { pageSize, type CommunityNotification, type MemberRole, type NotificationKind, type NotificationsResponse } from '../../../lib/community/contract.ts';
import { communityUrl } from '../../../emails/community.ts';
import { communityCopy, communityKinds, type UnsubscribeKind } from '../../../emails/community-i18n.ts';
import { sql } from '../db.ts';
import { SITE, badRequest, int, json, readJson, requestOrigin, unauthorized } from '../http.ts';
import { currentMember } from '../session.ts';
import { asLocale, iso, pageResponse, sameMac, signParts } from './util.ts';

export async function listNotifications(req: Request, url: URL): Promise<Response> {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  const size = pageSize.notifications;
  const [counts] = await sql`SELECT count(*)::int AS total, count(*) FILTER (WHERE read_at IS NULL)::int AS unread
                               FROM notifications WHERE member_id = ${viewer.id} AND kind <> 'welcome'`;
  const total = Number(counts?.total ?? 0);
  const pages = Math.max(1, Math.ceil(total / size));
  const page = int(url.searchParams.get('page'), 1, 1, pages);
  const rows = await sql`
    SELECT n.id::int AS id, n.kind, n.created_at, n.read_at, n.data,
           a.id::int AS actor_id, a.display_name AS actor_name, a.role AS actor_role,
           t.id::int AS thread_id, t.slug AS thread_slug, t.title AS thread_title,
           p.number AS post_number
      FROM notifications n
      LEFT JOIN members a ON a.id = n.actor_id
      LEFT JOIN threads t ON t.id = n.thread_id
      LEFT JOIN posts p ON p.id = n.post_id
     WHERE n.member_id = ${viewer.id} AND n.kind <> 'welcome'
     ORDER BY n.created_at DESC, n.id DESC
     LIMIT ${size} OFFSET ${(page - 1) * size}`;
  const notifications: CommunityNotification[] = rows.map((r) => ({
    id: Number(r.id),
    kind: String(r.kind) as NotificationKind,
    createdAt: iso(r.created_at),
    read: r.read_at != null,
    actor: r.actor_id != null ? { id: Number(r.actor_id), displayName: String(r.actor_name), role: r.actor_role as MemberRole } : null,
    thread: r.thread_id != null ? { id: Number(r.thread_id), slug: String(r.thread_slug), title: String(r.thread_title) } : null,
    postNumber: r.post_number != null ? Number(r.post_number) : null,
    data: (typeof r.data === 'string' ? JSON.parse(r.data) : r.data) ?? {},
  }));
  const body: NotificationsResponse = { notifications, unread: Number(counts?.unread ?? 0), page, pages };
  return json(body);
}

export async function markRead(req: Request): Promise<Response> {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  const body = await readJson(req, 16 * 1024);
  if (body.all === true) {
    await sql`UPDATE notifications SET read_at = now() WHERE member_id = ${viewer.id} AND read_at IS NULL`;
    return json({ ok: true });
  }
  const ids = body.ids;
  if (!Array.isArray(ids) || ids.length === 0 || ids.length > 200 || !ids.every((id) => Number.isSafeInteger(id) && (id as number) > 0)) {
    throw badRequest('invalid', 'Send { ids: [...] } or { all: true }.', { ids: 'invalid' });
  }
  await sql`UPDATE notifications SET read_at = now()
             WHERE member_id = ${viewer.id} AND read_at IS NULL
               AND id IN (SELECT jsonb_array_elements_text(${JSON.stringify(ids)}::jsonb)::bigint)`;
  return json({ ok: true });
}

// ---------------------------------------------------------------------------------------
// Unsubscribe

const unsubscribeKinds: readonly UnsubscribeKind[] = [...communityKinds, 'all'];

export function unsubscribeToken(apiKey: string, memberId: number, kind: UnsubscribeKind): string {
  return `${memberId}.${kind}.${signParts(apiKey, ['unsubscribe', String(memberId), kind])}`;
}

export function unsubscribeUrl(apiKey: string, memberId: number, kind: UnsubscribeKind, origin = SITE): string {
  return `${origin}/api/community/email/unsubscribe?token=${unsubscribeToken(apiKey, memberId, kind)}`;
}

/** The headers that let a mail client show its own Unsubscribe button (RFC 2369 + RFC 8058). */
export function listUnsubscribeHeaders(url: string): Record<string, string> {
  return {
    'List-Unsubscribe': `<${url}>, <mailto:support@outbrick.site?subject=unsubscribe>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  };
}

export function readUnsubscribeToken(apiKey: string, token: string): { memberId: number; kind: UnsubscribeKind } | null {
  const m = /^(\d{1,15})\.([a-z]{2,20})\.([A-Za-z0-9_-]{20,100})$/.exec(token ?? '');
  if (!m || !apiKey) return null;
  const memberId = Number(m[1]);
  const kind = m[2] as UnsubscribeKind;
  if (!unsubscribeKinds.includes(kind)) return null;
  return sameMac(signParts(apiKey, ['unsubscribe', String(memberId), kind]), m[3]) ? { memberId, kind } : null;
}

function invalidPage(req: Request, locale = asLocale(new URL(req.url).searchParams.get('locale'))): Response {
  const p = communityCopy[locale].pages.invalid;
  const origin = requestOrigin(req);
  return pageResponse({ locale, title: p.title, body: p.body, link: { href: communityUrl(locale, '/signin', origin), label: p.cta }, origin }, 400);
}

async function memberLocale(memberId: number) {
  const [row] = await sql`SELECT locale, deleted_at FROM members WHERE id = ${memberId}`;
  return row && !row.deleted_at ? asLocale(row.locale) : null;
}

export async function unsubscribePage(req: Request, url: URL): Promise<Response> {
  const token = url.searchParams.get('token') ?? '';
  const parsed = readUnsubscribeToken(process.env.RESEND_API_KEY ?? '', token);
  const locale = parsed ? await memberLocale(parsed.memberId) : null;
  if (!parsed || !locale) return invalidPage(req);
  const p = communityCopy[locale].pages.unsubscribe;
  const origin = requestOrigin(req);
  return pageResponse({
    locale,
    title: p.title(parsed.kind),
    body: p.body(parsed.kind),
    form: { action: `${url.pathname}?token=${token}`, button: p.button },
    link: { href: communityUrl(locale, '', origin), label: p.keep },
    origin,
  });
}

/** POST: from a mail client's one-click button (no cookies, no Origin) or from the page. */
export async function unsubscribe(req: Request, url: URL): Promise<Response> {
  const body = (await req.text().catch(() => '')).slice(0, 2000);
  const oneClick = /List-Unsubscribe=One-Click/i.test(body);
  const parsed = readUnsubscribeToken(process.env.RESEND_API_KEY ?? '', url.searchParams.get('token') ?? '');
  const locale = parsed ? await memberLocale(parsed.memberId) : null;
  if (!parsed || !locale) {
    return oneClick ? json({ error: { code: 'invalid', message: 'This unsubscribe link is not valid.' } }, { status: 400 }) : invalidPage(req);
  }
  const off = Object.fromEntries((parsed.kind === 'all' ? communityKinds : [parsed.kind]).map((k) => [k, false]));
  await sql`UPDATE members SET email_prefs = email_prefs || ${JSON.stringify(off)}::jsonb WHERE id = ${parsed.memberId} AND deleted_at IS NULL`;
  console.log(`[community-auth] member ${parsed.memberId} unsubscribed from ${parsed.kind}${oneClick ? ' (one-click)' : ''}`);
  if (oneClick) return json({ ok: true });
  const p = communityCopy[locale].pages.unsubscribed;
  const origin = requestOrigin(req);
  return pageResponse({ locale, title: p.title, body: p.body(parsed.kind), link: { href: communityUrl(locale, '/settings', origin), label: p.settings }, origin });
}
