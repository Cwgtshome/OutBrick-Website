/**
 * The OutBrick Community API contract: every shape that crosses /api/community/*.
 *
 * The client (app/components/community/*) and the functions (netlify/functions/community-*.mts)
 * both import these types, so a change here is a change to both sides. All dates are ISO 8601
 * strings in UTC. Every error is `{ error: ApiErrorBody }` with an HTTP status ≥ 400.
 *
 * Routes (all under /api/community, JSON unless noted; writes need a same-origin request):
 *
 * Accounts and sessions — netlify/functions/community-auth.mts
 *   GET    /session                         → SessionResponse
 *   POST   /auth/email          EmailSignInRequest → { sent: true }
 *   GET    /auth/email/verify?token=            → a one-button page (link scanners only GET)
 *   POST   /auth/email/verify?token=            → 303 to returnTo (sets the session cookie)
 *   GET|POST /auth/email/confirm?token=         → page / 303 to /community/settings?email=confirmed
 *   GET    /auth/:provider/start?returnTo=&locale=   → 302 to Apple / Google / Facebook
 *   GET|POST /auth/:provider/callback                 → 302 back (Apple posts its form here)
 *   POST   /auth/signout                    → { ok: true }
 *   PATCH  /me                  UpdateMeRequest → { member: SelfMember }
 *   GET    /me/export                       → a JSON download of everything we hold
 *   DELETE /me                  { confirm: 'DELETE' } → { ok: true }
 *   GET    /notifications?page=             → NotificationsResponse
 *   POST   /notifications/read  { ids?: number[]; all?: boolean } → { ok: true }
 *   GET|POST /email/unsubscribe?token=      → HTML page (GET) / { ok: true } (POST, RFC 8058)
 *
 * The forum — netlify/functions/community-api.mts
 *   GET    /categories                      → { categories: Category[] }
 *   GET    /threads?category=&language=&sort=&status=&page=&author=  → ThreadListResponse
 *   POST   /threads             NewThreadRequest → { thread: ThreadSummary }
 *   GET    /threads/:id?page=               → ThreadDetail
 *   PATCH  /threads/:id         UpdateThreadRequest → { thread: ThreadSummary }
 *   POST   /threads/:id/posts   NewPostRequest → { post: Post; page: number }
 *   POST   /threads/:id/solve   { postId: number | null } → { thread: ThreadSummary }
 *   POST   /threads/:id/vote    { on: boolean } → { voteCount: number; voted: boolean }
 *   POST   /threads/:id/follow  { level: FollowLevel } → { level: FollowLevel }
 *   POST   /categories/:slug/follow { level: FollowLevel } → { level: FollowLevel }
 *   POST   /threads/:id/read    { number: number } → { ok: true }
 *   PATCH  /posts/:id           { body: string } → { post: Post }
 *   DELETE /posts/:id                       → { ok: true }
 *   POST   /posts/:id/report    ReportRequest → { ok: true }
 *   POST   /preview             { body: string } → { html: string }
 *   GET    /search?q=&category=&language=&page=  → SearchResponse
 *   GET    /faq?locale=                     → { entries: FaqEntry[] }
 *   GET    /members/:id                     → MemberProfile
 *   Moderation (moderator+): GET /mod/reports, POST /mod/reports/:id/resolve { action, note },
 *     GET /mod/queue, POST /posts/:id/approve, POST /posts/:id/hide { reason },
 *     POST /mod/members/:id/ban { days, reason }, POST /mod/members/:id/role { role } (admin),
 *     POST /faq, PATCH /faq/:id, DELETE /faq/:id (team+)
 *
 * Scheduled — netlify/functions/community-releases.mts (hourly: posts each new App Store
 * version to Announcements), community-notify.mts (every 5 minutes: emails pending notifications).
 */

export type CommunityLocale = 'en' | 'fr' | 'de' | 'es' | 'ja';
export const communityLocales: readonly CommunityLocale[] = ['en', 'fr', 'de', 'es', 'ja'];

export type MemberRole = 'member' | 'trusted' | 'moderator' | 'team' | 'admin';
export type Provider = 'apple' | 'google' | 'facebook' | 'email';
export type CategoryKind = 'announcements' | 'support' | 'bugs' | 'ideas' | 'accessibility' | 'showcase' | 'general';
export type BugStatus = 'new' | 'confirmed' | 'fixed' | 'released' | 'not_a_bug' | 'duplicate';
export type IdeaStatus = 'open' | 'considering' | 'planned' | 'shipped' | 'declined';
export type ThreadStatus = BugStatus | IdeaStatus;
export type FollowLevel = 'watch' | 'mute' | 'none';
export type ThreadSort = 'latest' | 'new' | 'top' | 'unanswered';
export type NotificationKind = 'reply' | 'mention' | 'watched' | 'status' | 'solved' | 'release' | 'moderation' | 'welcome';
export type ReportReason = 'spam' | 'abuse' | 'off_topic' | 'personal_info' | 'other';
export type AssistiveTech = 'voiceover' | 'voice_control' | 'switch_control' | 'zoom' | 'larger_text' | 'colour_filters' | 'none';

export const bugStatuses: readonly BugStatus[] = ['new', 'confirmed', 'fixed', 'released', 'not_a_bug', 'duplicate'];
export const ideaStatuses: readonly IdeaStatus[] = ['open', 'considering', 'planned', 'shipped', 'declined'];
export const pageSize = { threads: 30, posts: 25, search: 20, notifications: 30 } as const;

export type ApiErrorBody = {
  /** Stable machine code: signin_required, forbidden, not_found, invalid, rate_limited, too_large, locked, banned … */
  code: string;
  /** Plain English; the client shows its own translated text for known codes. */
  message: string;
  /** Per-field problems for forms: { title: 'too_short' }. */
  fields?: Record<string, string>;
};

export type PublicMember = {
  id: number;
  displayName: string;
  role: MemberRole;
};

export type SelfMember = PublicMember & {
  email: string;
  emailVerified: boolean;
  locale: CommunityLocale;
  bio: string;
  /** Per-kind switches; see NotificationKind. Missing keys mean the default (on, except 'watched' digests). */
  emailPrefs: Record<string, boolean>;
  banned: boolean;
  joinedAt: string;
  /** True until the member has chosen a display name on first sign-in. */
  needsName?: boolean;
  providers?: Provider[];
};

export type SessionResponse = {
  member: SelfMember | null;
  /** Which sign-in buttons to show: only those whose credentials are configured. */
  providers: Provider[];
  unreadNotifications: number;
};

export type EmailSignInRequest = { email: string; locale: CommunityLocale; returnTo?: string; website?: string /* honeypot */ };

export type UpdateMeRequest = {
  displayName?: string;
  bio?: string;
  locale?: CommunityLocale;
  emailPrefs?: Record<string, boolean>;
  /** A new address: a "Confirm your email" goes to it, and it replaces the old one only once confirmed. */
  email?: string;
};

/** PATCH /me answers with the member; `emailConfirmationSent` is present when `email` was sent. */
export type UpdateMeResponse = { member: SelfMember; emailConfirmationSent?: boolean };

export type Category = {
  id: number;
  slug: string;
  kind: CategoryKind;
  teamOnlyThreads: boolean;
  threadCount: number;
  postCount: number;
  lastPostAt: string | null;
  /** The viewer's follow level, when signed in. */
  following?: FollowLevel;
};

export type ThreadSummary = {
  id: number;
  slug: string;
  title: string;
  category: { slug: string; kind: CategoryKind };
  language: CommunityLocale;
  status: ThreadStatus | null;
  statusNote: string | null;
  pinned: boolean;
  locked: boolean;
  hidden: boolean;
  solved: boolean;
  voteCount: number;
  /** Whether the viewer has upvoted (ideas). */
  voted?: boolean;
  replyCount: number;
  viewCount: number;
  author: PublicMember;
  lastPoster: PublicMember | null;
  lastPostAt: string;
  createdAt: string;
  /** For the viewer: posts after the last one they read; absent when signed out. */
  unread?: number;
  releaseVersion?: string | null;
};

export type ThreadListResponse = {
  threads: ThreadSummary[];
  page: number;
  pages: number;
  total: number;
};

export type BugDetails = {
  device: string;
  osVersion: string;
  appVersion: string;
  assistive: AssistiveTech[];
  steps: string;
  expected: string;
  actual: string;
};

export type NewThreadRequest = {
  categorySlug: string;
  title: string;
  body: string;
  language: CommunityLocale;
  bug?: BugDetails;
  /** Honeypot: must be empty. */
  website?: string;
};

export type UpdateThreadRequest = {
  title?: string;
  categorySlug?: string;
  status?: ThreadStatus | null;
  statusNote?: string | null;
  pinned?: boolean;
  locked?: boolean;
  hidden?: boolean;
};

export type Post = {
  id: number;
  number: number;
  author: PublicMember;
  /** Server-rendered, allow-listed HTML. */
  html: string;
  /** The Markdown source, only for the author and moderators (for editing). */
  markdown?: string;
  replyTo: number | null;
  createdAt: string;
  editedAt: string | null;
  hidden: boolean;
  hiddenReason?: string | null;
  pending: boolean;
  isSolution: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

export type ThreadDetail = {
  thread: ThreadSummary;
  bug: BugDetails | null;
  posts: Post[];
  page: number;
  pages: number;
  /** The number of the solution post, if solved. */
  solvedPostNumber: number | null;
  /** The first post number the viewer has not read, when signed in. */
  firstUnread: number | null;
  following: FollowLevel;
  canReply: boolean;
  /** Why not, when canReply is false: 'signin', 'locked', 'banned', 'unverified'. */
  replyBlocked?: string;
  canModerate: boolean;
  canSetStatus: boolean;
  canSolve: boolean;
};

export type NewPostRequest = { body: string; replyTo?: number | null; website?: string };

export type ReportRequest = { reason: ReportReason; note?: string };

export type SearchHit = {
  type: 'thread' | 'post' | 'faq';
  threadId: number | null;
  slug: string | null;
  title: string;
  /** HTML with <mark> around matches; everything else escaped. */
  excerptHtml: string;
  postNumber: number | null;
  category: { slug: string; kind: CategoryKind } | null;
  language: CommunityLocale;
  solved: boolean;
  createdAt: string;
};

export type SearchResponse = { query: string; hits: SearchHit[]; page: number; pages: number; total: number };

export type FaqEntry = {
  id: number;
  locale: CommunityLocale;
  topic: string;
  question: string;
  answerHtml: string;
  threadId: number | null;
  threadSlug: string | null;
};

export type CommunityNotification = {
  id: number;
  kind: NotificationKind;
  createdAt: string;
  read: boolean;
  actor: PublicMember | null;
  thread: { id: number; slug: string; title: string } | null;
  postNumber: number | null;
  /** Kind-specific extras, e.g. { status: 'fixed', statusNote: 'Fixed in 5.1' } or { version: '5.1' }. */
  data: Record<string, unknown>;
};

export type NotificationsResponse = { notifications: CommunityNotification[]; unread: number; page: number; pages: number };

export type MemberProfile = {
  member: PublicMember & { bio: string; joinedAt: string; postCount: number; solvedCount: number };
  recentThreads: ThreadSummary[];
};

/** Paths of the community pages, per language. English has no prefix. */
export function communityPath(locale: CommunityLocale, path = ''): string {
  const base = locale === 'en' ? '/community' : `/${locale}/community`;
  return path ? `${base}${path.startsWith('/') ? '' : '/'}${path}` : base;
}

/** The canonical path of a thread: /community/t/42/no-graphics-mode */
export function threadPath(locale: CommunityLocale, thread: { id: number; slug: string }, postNumber?: number | null): string {
  return communityPath(locale, `/t/${thread.id}/${thread.slug}`) + (postNumber && postNumber > 1 ? `#post-${postNumber}` : '');
}

// Moderation (added with the forum backend, 7 October 2026) -----------------------------------

/** GET /mod/reports: open reports, oldest first, one entry per report. */
export type ModReport = {
  id: number;
  reason: ReportReason;
  note: string;
  createdAt: string;
  reporter: PublicMember;
  post: Post;
  thread: { id: number; slug: string; title: string };
  /** How many open reports the same post has, this one included. */
  openReports: number;
};
export type ModReportsResponse = { reports: ModReport[] };

/** POST /mod/reports/:id/resolve. 'hide' hides the post with `note` as the reason; either way every open report on that post is resolved. */
export type ResolveReportRequest = { action: 'dismiss' | 'hide'; note?: string };

/** GET /mod/queue: posts waiting for review, oldest first. */
export type ModQueueItem = {
  post: Post;
  thread: { id: number; slug: string; title: string; category: { slug: string; kind: CategoryKind } };
};
export type ModQueueResponse = { posts: ModQueueItem[] };

/** POST /posts/:id/hide → { post: Post }. `hidden: false` shows the post again (reason not needed). */
export type HidePostRequest = { reason?: string; hidden?: boolean };

/** POST /posts/:id/approve → { post: Post }. */

/** POST /mod/members/:id/ban → ModMemberResponse. `days: 0` lifts a ban. */
export type BanRequest = { days: number; reason: string };
/** POST /mod/members/:id/role (admin) → ModMemberResponse. */
export type RoleRequest = { role: MemberRole };
export type ModMemberResponse = { member: PublicMember & { bannedUntil: string | null; banReason: string | null } };

/** POST /faq and PATCH /faq/:id (team+) → { entry: FaqEntry }. With `threadId` and no question/answer, a solved thread is promoted: its title and the solution's text. */
export type FaqWriteRequest = {
  locale?: CommunityLocale;
  topic?: string;
  question?: string;
  /** Markdown, rendered like a post. */
  answer?: string;
  threadId?: number | null;
  position?: number;
};

/**
 * The `language` filter of GET /threads and GET /search, as the pages send it: one code ("ja"),
 * or a comma-separated list for "my language and English" ("fr,en"); absent means every language.
 * (Added by the community pages.)
 */
export type LanguageFilter = string;
