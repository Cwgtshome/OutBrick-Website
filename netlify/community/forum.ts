// What every part of the forum shares: running SQL with numbered parameters, turning rows into
// the contract's camelCase shapes, who may see and do what, and rendering a post body.
//
// The pieces that answer routes live beside it: threads.ts, posts.ts, search.ts, faq.ts,
// moderation.ts and members.ts. netlify/functions/community-api.mts wires them to URLs.
//
// Two rules hold everywhere in these files:
//   - Values reach SQL only as parameters. Lists travel as one JSON parameter unpacked in SQL
//     (jsonb_array_elements_text), so the same query text works on every driver we run on:
//     node-postgres, Neon's HTTP driver and PGlite in the tests.
//   - No row is returned as it comes from the database. Every response is built field by field
//     from the contract types, which is how an email address can never leak by accident.

import type {
  BugDetails,
  CategoryKind,
  CommunityLocale,
  MemberRole,
  Post,
  PublicMember,
  ThreadStatus,
  ThreadSummary,
  AssistiveTech,
} from '../../lib/community/contract.ts';
import { bugStatuses, communityLocales, ideaStatuses } from '../../lib/community/contract.ts';
import { sql, type Query } from './db.ts';
import { ApiError, badRequest, forbidden, notFound } from './http.ts';
import { renderMarkdown, mentionCandidates, type MentionTarget } from './markdown.ts';
import { hasRole, type Viewer } from './session.ts';

export type Row = Record<string, unknown>;

// SQL ------------------------------------------------------------------------------------------

/**
 * Run `text` with $1, $2 … parameters through the shared `sql` tag. The tag is what the
 * Netlify driver exposes, so the text is cut at its placeholders and handed over as a
 * template; a placeholder used twice becomes two parameters with the same value.
 */
export async function run(text: string, params: unknown[] = []): Promise<Row[]> {
  const strings: string[] = [];
  const values: unknown[] = [];
  let last = 0;
  const re = /\$(\d+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    strings.push(text.slice(last, m.index));
    // The Netlify driver (waddler) refuses `undefined`; a missing value is SQL NULL.
    values.push(params[Number(m[1]) - 1] ?? null);
    last = m.index + m[0].length;
  }
  strings.push(text.slice(last));
  const template = Object.assign([...strings], { raw: [...strings] }) as unknown as TemplateStringsArray;
  return sql(template, ...values);
}

/** Collects parameters while a query is being assembled: `p.add(x)` returns "$n". */
export class Params {
  values: unknown[] = [];
  add(value: unknown): string {
    this.values.push(value);
    return `$${this.values.length}`;
  }
}

/** A list as one parameter: `IN (SELECT jsonb_array_elements_text($1::jsonb)::bigint)`. */
export const jsonList = (values: unknown[]) => JSON.stringify(values);

export const iso = (value: unknown): string => (value instanceof Date ? value.toISOString() : new Date(String(value)).toISOString());
export const isoOrNull = (value: unknown): string | null => (value == null ? null : iso(value));
export const num = (value: unknown): number => Number(value ?? 0);
/** A column as text: strings as they are, numbers and booleans printed, anything else ''. */
export const txt = (value: unknown): string =>
  typeof value === 'string' ? value : typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint' ? String(value) : '';

// Members ----------------------------------------------------------------------------------------

const FORMER = 'Former member';

/** A member as anyone may see them, from columns `<prefix>id`, `<prefix>name`, `<prefix>role`, `<prefix>deleted`. */
export function publicMember(row: Row, prefix: string): PublicMember {
  if (row[`${prefix}deleted`]) return { id: num(row[`${prefix}id`]), displayName: FORMER, role: 'member' };
  return { id: num(row[`${prefix}id`]), displayName: String(row[`${prefix}name`]), role: row[`${prefix}role`] as MemberRole };
}

export const isModerator = (viewer: Viewer | null) => hasRole(viewer, 'moderator');

/** Writing anything needs a verified address; requireMember has already refused bans. */
export function requireCanWrite(viewer: Viewer): void {
  if (!viewer.email_verified) throw new ApiError(403, 'unverified', 'Confirm your email address before posting.');
}

// Categories -------------------------------------------------------------------------------------

export type CategoryRow = { id: number; slug: string; kind: CategoryKind; team_only_threads: boolean };

export async function categoryBySlug(slug: string): Promise<CategoryRow> {
  const [row] = await run(`SELECT id::int, slug, kind, team_only_threads FROM categories WHERE slug = $1 AND NOT archived`, [slug]);
  if (!row) throw badRequest('invalid', 'That category does not exist.', { categorySlug: 'unknown' });
  return row as unknown as CategoryRow;
}

export const solvableKinds: readonly CategoryKind[] = ['support', 'accessibility', 'bugs'];

const noStatuses: readonly ThreadStatus[] = [];

export function statusesFor(kind: CategoryKind): readonly ThreadStatus[] {
  return kind === 'bugs' ? bugStatuses : kind === 'ideas' ? ideaStatuses : noStatuses;
}

export function defaultStatus(kind: CategoryKind): ThreadStatus | null {
  return kind === 'bugs' ? 'new' : kind === 'ideas' ? 'open' : null;
}

// Threads ----------------------------------------------------------------------------------------

/**
 * The columns behind a ThreadSummary. With a viewer, also whether they voted and how many
 * visible posts they have not read.
 */
export function threadColumns(p: Params, viewer: Viewer | null): string {
  const personal = viewer
    ? (() => {
        const v = p.add(viewer.id);
        return `EXISTS (SELECT 1 FROM votes v WHERE v.thread_id = t.id AND v.member_id = ${v}) AS voted,
          (SELECT count(*)::int FROM posts up WHERE up.thread_id = t.id AND NOT up.pending AND NOT up.hidden
              AND up.number > COALESCE((SELECT r.last_number FROM reads r WHERE r.member_id = ${v} AND r.thread_id = t.id), 0)) AS unread`;
      })()
    : `NULL::boolean AS voted, NULL::int AS unread`;
  return `t.id::int AS id, t.slug, t.title, t.language, t.status, t.status_note, t.pinned, t.locked, t.hidden, t.pending,
    t.solved_post_id::int AS solved_post_id, t.vote_count, t.reply_count, t.view_count, t.last_post_at, t.created_at,
    t.release_version, t.bug, t.category_id::int AS category_id, t.deleted_at,
    c.slug AS category_slug, c.kind AS category_kind,
    a.id::int AS a_id, a.display_name AS a_name, a.role AS a_role, (a.deleted_at IS NOT NULL) AS a_deleted,
    l.id::int AS l_id, l.display_name AS l_name, l.role AS l_role, (l.deleted_at IS NOT NULL) AS l_deleted,
    ${personal}`;
}

export const threadJoins = `FROM threads t
  JOIN categories c ON c.id = t.category_id
  JOIN members a ON a.id = t.author_id
  LEFT JOIN members l ON l.id = t.last_poster_id`;

/** SQL that is true when the viewer may see thread `t`. */
export function threadVisible(p: Params, viewer: Viewer | null): string {
  if (isModerator(viewer)) return `t.deleted_at IS NULL`;
  if (!viewer) return `t.deleted_at IS NULL AND NOT t.hidden AND NOT t.pending`;
  return `t.deleted_at IS NULL AND NOT t.hidden AND (NOT t.pending OR t.author_id = ${p.add(viewer.id)})`;
}

export function threadSummary(row: Row, viewer: Viewer | null): ThreadSummary {
  const summary: ThreadSummary = {
    id: num(row.id),
    slug: String(row.slug),
    title: String(row.title),
    category: { slug: String(row.category_slug), kind: row.category_kind as CategoryKind },
    language: row.language as CommunityLocale,
    status: (row.status as ThreadStatus | null) ?? null,
    statusNote: (row.status_note as string | null) ?? null,
    pinned: Boolean(row.pinned),
    locked: Boolean(row.locked),
    hidden: Boolean(row.hidden),
    solved: row.solved_post_id != null,
    voteCount: num(row.vote_count),
    replyCount: num(row.reply_count),
    viewCount: num(row.view_count),
    author: publicMember(row, 'a_'),
    lastPoster: row.l_id == null ? null : publicMember(row, 'l_'),
    lastPostAt: iso(row.last_post_at),
    createdAt: iso(row.created_at),
    releaseVersion: (row.release_version as string | null) ?? null,
  };
  if (viewer) {
    summary.voted = Boolean(row.voted);
    summary.unread = num(row.unread);
  }
  return summary;
}

export type ThreadRow = Row & {
  id: number;
  author_id: number;
  a_id: number;
  category_id: number;
  category_kind: CategoryKind;
  locked: boolean;
  hidden: boolean;
  pending: boolean;
  solved_post_id: number | null;
  created_at: unknown;
};

/** A thread the viewer may see, or a 404. */
export async function visibleThread(id: number, viewer: Viewer | null): Promise<ThreadRow> {
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound('That thread does not exist.');
  const p = new Params();
  const cols = threadColumns(p, viewer);
  const visible = threadVisible(p, viewer);
  const [row] = await run(`SELECT ${cols}, t.author_id::int AS author_id ${threadJoins} WHERE t.id = ${p.add(id)} AND ${visible}`, p.values);
  if (!row) throw notFound('That thread does not exist.');
  return row as ThreadRow;
}

export async function summaryById(id: number, viewer: Viewer | null): Promise<ThreadSummary> {
  return threadSummary(await visibleThread(id, viewer), viewer);
}

/** Recount a thread's replies and latest post from its visible posts. Call inside the transaction that changed them. */
export async function refreshThreadCounters(q: Query, threadId: number): Promise<void> {
  await q(
    `UPDATE threads SET
       reply_count = (SELECT count(*) FROM posts WHERE thread_id = $1 AND number > 1 AND NOT pending AND NOT hidden AND deleted_at IS NULL),
       last_post_at = COALESCE((SELECT created_at FROM posts WHERE thread_id = $1 AND NOT pending AND NOT hidden AND deleted_at IS NULL ORDER BY number DESC LIMIT 1), created_at),
       last_poster_id = COALESCE((SELECT author_id FROM posts WHERE thread_id = $1 AND NOT pending AND NOT hidden AND deleted_at IS NULL ORDER BY number DESC LIMIT 1), author_id),
       updated_at = now()
     WHERE id = $1`,
    [threadId],
  );
}

// Bug reports ------------------------------------------------------------------------------------

const assistiveValues: readonly AssistiveTech[] = ['voiceover', 'voice_control', 'switch_control', 'zoom', 'larger_text', 'colour_filters', 'none'];

/** Validate the bug form. Field errors are keyed `bug.device`, `bug.steps` … */
export function readBug(raw: unknown): BugDetails {
  const fields: Record<string, string> = {};
  const body = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
  const text = (key: keyof BugDetails, min: number, max: number): string => {
    const value = typeof body[key] === 'string' ? (body[key] as string).replace(/\r\n?/g, '\n').trim() : '';
    if (value.length < min) fields[`bug.${key}`] = 'too_short';
    else if (value.length > max) fields[`bug.${key}`] = 'too_long';
    return value;
  };
  const bug: BugDetails = {
    device: text('device', 2, 80),
    osVersion: text('osVersion', 1, 20),
    appVersion: text('appVersion', 1, 20),
    assistive: [],
    steps: text('steps', 5, 4000),
    expected: text('expected', 2, 2000),
    actual: text('actual', 2, 2000),
  };
  const list = Array.isArray(body.assistive) ? body.assistive : [];
  if (list.length > assistiveValues.length || list.some((v) => !assistiveValues.includes(v as AssistiveTech))) fields['bug.assistive'] = 'invalid';
  else bug.assistive = [...new Set(list as AssistiveTech[])];
  if (Object.keys(fields).length) throw badRequest('invalid', 'Some details of the bug report need another look.', fields);
  return bug;
}

/** Stored in snake_case, as the schema describes; read back into the contract's shape. */
export const bugToJson = (b: BugDetails) =>
  JSON.stringify({ device: b.device, os_version: b.osVersion, app_version: b.appVersion, assistive: b.assistive, steps: b.steps, expected: b.expected, actual: b.actual });

export function bugFromRow(value: unknown): BugDetails | null {
  if (!value) return null;
  const b = (typeof value === 'string' ? JSON.parse(value) : value) as Record<string, unknown>;
  return {
    device: txt(b.device),
    osVersion: txt(b.os_version),
    appVersion: txt(b.app_version),
    assistive: Array.isArray(b.assistive) ? (b.assistive as AssistiveTech[]) : [],
    steps: txt(b.steps),
    expected: txt(b.expected),
    actual: txt(b.actual),
  };
}

export function readLocale(value: unknown, fallback: CommunityLocale, field = 'language'): CommunityLocale {
  if (value == null || value === '') return fallback;
  if (!communityLocales.includes(value as CommunityLocale)) throw badRequest('invalid', 'That language is not one we support.', { [field]: 'invalid' });
  return value as CommunityLocale;
}

// Post bodies ------------------------------------------------------------------------------------

export const BODY_MAX = 20000;

/** Render a body, resolving @mentions against current members. */
export async function renderBody(md: string): Promise<{ html: string; mentionedIds: number[]; hasLink: boolean }> {
  const candidates = mentionCandidates(md);
  const mentions = new Map<string, MentionTarget>();
  if (candidates.length) {
    const rows = await run(
      `SELECT id::int AS id, display_name FROM members
        WHERE deleted_at IS NULL AND lower(display_name) IN (SELECT jsonb_array_elements_text($1::jsonb))`,
      [jsonList(candidates)],
    );
    for (const r of rows) mentions.set(String(r.display_name).toLowerCase(), { id: num(r.id), displayName: String(r.display_name) });
  }
  return renderMarkdown(md, { mentions });
}

/**
 * Whether a new post waits for review: a member below trusted whose post links somewhere, until
 * two of their posts with links have been let through.
 */
export async function needsReview(viewer: Viewer, hasLink: boolean): Promise<boolean> {
  if (!hasLink || hasRole(viewer, 'trusted')) return false;
  const [row] = await run(
    `SELECT count(*)::int AS n FROM posts WHERE author_id = $1 AND has_link AND NOT pending AND NOT hidden AND deleted_at IS NULL`,
    [viewer.id],
  );
  return num(row?.n) < 2;
}

// Posts ------------------------------------------------------------------------------------------

export const postColumns = `p.id::int AS id, p.thread_id::int AS thread_id, p.number, p.body_md, p.body_html, p.reply_to, p.hidden, p.hidden_reason,
  p.pending, p.has_link, p.created_at, p.edited_at, p.deleted_at,
  m.id::int AS m_id, m.display_name AS m_name, m.role AS m_role, (m.deleted_at IS NOT NULL) AS m_deleted`;

export type PostContext = {
  viewer: Viewer | null;
  locked: boolean;
  solvedPostId: number | null;
  /** Whether the thread has replies, which stops the opening post being deleted. */
  hasReplies: boolean;
};

export function postView(row: Row, ctx: PostContext): Post {
  const viewer = ctx.viewer;
  const mod = isModerator(viewer);
  const mine = Boolean(viewer && num(row.m_id) === viewer.id);
  const deleted = row.deleted_at != null;
  const number = num(row.number);
  const post: Post = {
    id: num(row.id),
    number,
    author: publicMember(row, 'm_'),
    html: String(row.body_html),
    replyTo: row.reply_to == null ? null : num(row.reply_to),
    createdAt: iso(row.created_at),
    editedAt: isoOrNull(row.edited_at),
    hidden: Boolean(row.hidden),
    pending: Boolean(row.pending),
    isSolution: ctx.solvedPostId != null && num(row.id) === ctx.solvedPostId,
    canEdit: !deleted && (mod || (mine && !viewer!.banned && !ctx.locked)),
    canDelete: !deleted && (mod || (mine && !viewer!.banned)) && !(number === 1 && ctx.hasReplies),
  };
  if (post.hidden && (mod || mine)) post.hiddenReason = (row.hidden_reason as string | null) ?? null;
  if (!deleted && (mod || mine)) post.markdown = String(row.body_md);
  return post;
}

/** SQL that is true when the viewer may see post `p`. */
export function postVisible(p: Params, viewer: Viewer | null): string {
  if (isModerator(viewer)) return 'TRUE';
  if (!viewer) return 'NOT p.hidden AND NOT p.pending';
  const v = p.add(viewer.id);
  return `((NOT p.hidden AND NOT p.pending) OR p.author_id = ${v})`;
}

/** Load a post with its thread for a write, or 404. */
export async function postForWrite(id: number, viewer: Viewer): Promise<{ post: Row; thread: ThreadRow }> {
  if (!Number.isSafeInteger(id) || id <= 0) throw notFound('That post does not exist.');
  const [post] = await run(`SELECT ${postColumns}, p.author_id::int AS author_id FROM posts p JOIN members m ON m.id = p.author_id WHERE p.id = $1`, [id]);
  if (!post) throw notFound('That post does not exist.');
  const thread = await visibleThread(num(post.thread_id), viewer);
  const p = new Params();
  const [visible] = await run(`SELECT 1 FROM posts p WHERE p.id = ${p.add(id)} AND ${postVisible(p, viewer)}`, p.values);
  if (!visible) throw notFound('That post does not exist.');
  return { post, thread };
}

export function assertMineOrMod(viewer: Viewer, authorId: number): void {
  if (viewer.id !== authorId && !isModerator(viewer)) throw forbidden();
}

/** Write a moderation log entry. `actorId` null is the system. */
export async function modLog(q: Query, actorId: number | null, action: string, targetType: string, targetId: number, reason = '', data: Record<string, unknown> = {}): Promise<void> {
  await q(`INSERT INTO mod_log (actor_id, action, target_type, target_id, reason, data) VALUES ($1, $2, $3, $4, $5, $6::jsonb)`, [
    actorId,
    action,
    targetType,
    targetId,
    reason.slice(0, 1000),
    JSON.stringify(data),
  ]);
}

/** The id from a route parameter, or a 404 (ids are positive integers). */
export function idParam(value: string | undefined): number {
  const n = /^\d{1,15}$/.test(value ?? '') ? Number(value) : NaN;
  if (!Number.isSafeInteger(n) || n <= 0) throw notFound();
  return n;
}
