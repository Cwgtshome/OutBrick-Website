// Sessions: a random token in an HttpOnly cookie; the database keeps only its SHA-256.
//
// `currentMember(req)` is how every handler learns who is asking. It never throws: no cookie,
// an unknown or expired token, a banned or deleted member all come back as null (a ban comes
// back as the member with `banned: true`, so the page can say so, but write handlers refuse).

import type { MemberRole, SelfMember } from '../../lib/community/contract.ts';
import { forbidden, unauthorized } from './http.ts';
import { randomToken, sha256, sql } from './db.ts';

export const SESSION_COOKIE = '__Host-ob_session';
const DEV_COOKIE = 'ob_session'; // __Host- needs https; local `netlify dev` is http
const SESSION_DAYS = 30;

export type MemberRow = {
  id: number;
  display_name: string;
  email: string;
  email_verified: boolean;
  locale: string;
  role: MemberRole;
  bio: string;
  email_prefs: Record<string, boolean>;
  banned_until: string | null;
  ban_reason: string | null;
  created_at: string;
  deleted_at: string | null;
};

export type Viewer = MemberRow & { banned: boolean };

const isHttps = (req: Request) => new URL(req.url).protocol === 'https:';
const cookieName = (req: Request) => (isHttps(req) ? SESSION_COOKIE : DEV_COOKIE);

function readCookie(req: Request, name: string): string | null {
  const header = req.headers.get('cookie') ?? '';
  for (const part of header.split(/;\s*/)) {
    const i = part.indexOf('=');
    if (i > 0 && part.slice(0, i) === name) return decodeURIComponent(part.slice(i + 1));
  }
  return null;
}

/** Create a session for `memberId` and return the Set-Cookie header value. */
export async function startSession(req: Request, memberId: number): Promise<string> {
  const token = randomToken(32);
  const ua = (req.headers.get('user-agent') ?? '').slice(0, 300);
  await sql`INSERT INTO sessions (token_hash, member_id, expires_at, user_agent)
            VALUES (${sha256(token)}, ${memberId}, now() + make_interval(days => ${SESSION_DAYS}), ${ua})`;
  await sql`UPDATE members SET last_seen_at = now() WHERE id = ${memberId}`;
  return sessionCookie(req, token, SESSION_DAYS * 86400);
}

export function sessionCookie(req: Request, token: string, maxAge: number): string {
  const secure = isHttps(req) ? '; Secure' : '';
  return `${cookieName(req)}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export async function endSession(req: Request): Promise<string> {
  const token = readCookie(req, cookieName(req));
  if (token) await sql`DELETE FROM sessions WHERE token_hash = ${sha256(token)}`;
  return sessionCookie(req, '', 0);
}

export async function currentMember(req: Request): Promise<Viewer | null> {
  const token = readCookie(req, cookieName(req));
  if (!token || token.length > 100) return null;
  const rows = (await sql`
    SELECT m.id::int, m.display_name, m.email, m.email_verified, m.locale, m.role, m.bio, m.email_prefs,
           m.banned_until, m.ban_reason, m.created_at, m.deleted_at, s.expires_at
      FROM sessions s JOIN members m ON m.id = s.member_id
     WHERE s.token_hash = ${sha256(token)} AND s.expires_at > now() AND m.deleted_at IS NULL`) as (MemberRow & { expires_at: string })[];
  const row = rows[0];
  if (!row) return null;
  // Sliding expiry: extend once a day at most.
  if (new Date(row.expires_at).getTime() - Date.now() < (SESSION_DAYS - 1) * 86400_000) {
    await sql`UPDATE sessions SET expires_at = now() + make_interval(days => ${SESSION_DAYS}) WHERE token_hash = ${sha256(token)}`;
    await sql`UPDATE members SET last_seen_at = now() WHERE id = ${row.id}`;
  }
  const banned = Boolean(row.banned_until && new Date(row.banned_until).getTime() > Date.now());
  return { ...row, banned };
}

const rank: Record<MemberRole, number> = { member: 0, trusted: 1, moderator: 2, team: 3, admin: 4 };

export function hasRole(viewer: Pick<Viewer, 'role'> | null, role: MemberRole): boolean {
  return Boolean(viewer && rank[viewer.role] >= rank[role]);
}

/** A signed-in, not-banned member, or a 401/403. */
export async function requireMember(req: Request): Promise<Viewer> {
  const viewer = await currentMember(req);
  if (!viewer) throw unauthorized();
  if (viewer.banned) throw forbidden(`Your account is suspended${viewer.ban_reason ? `: ${viewer.ban_reason}` : ''}.`);
  return viewer;
}

export async function requireRole(req: Request, role: MemberRole): Promise<Viewer> {
  const viewer = await requireMember(req);
  if (!hasRole(viewer, role)) throw forbidden();
  return viewer;
}

/** Addresses in COMMUNITY_ADMIN_EMAILS become admins the moment they sign in. */
export function isConfiguredAdmin(email: string): boolean {
  return (process.env.COMMUNITY_ADMIN_EMAILS ?? '')
    .split(/[,\s]+/)
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
    .includes(email.trim().toLowerCase());
}

export function selfView(v: Viewer): SelfMember {
  return {
    id: v.id,
    displayName: v.display_name,
    role: v.role,
    email: v.email,
    emailVerified: v.email_verified,
    locale: v.locale as SelfMember['locale'],
    bio: v.bio,
    emailPrefs: v.email_prefs ?? {},
    banned: v.banned,
    joinedAt: v.created_at,
  };
}
