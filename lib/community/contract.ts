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
export type NotificationKind =
  | 'reply'
  | 'mention'
  | 'watched'
  | 'status'
  | 'solved'
  | 'release'
  | 'moderation'
  | 'welcome'
  // Phase 2 (community-p2): your post was moved by a thread merge. data: { fromThreadId, fromTitle }
  | 'merged';
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
  /** Phase 2 (community-p2): which optional features are switched on for this deploy. */
  features: CommunityFeatures;
};

export type EmailSignInRequest = {
  email: string;
  locale: CommunityLocale;
  returnTo?: string;
  website?: string /* honeypot */;
  /** Phase 2 (community-p2): ms epoch when the form was shown (time-to-fill check). */
  startedAt?: number;
};

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
  /** Phase 2 (community-p2): the level the bug happened on, 1–100000 (the app's deep link fills it). */
  level?: number;
};

export type NewThreadRequest = {
  categorySlug: string;
  title: string;
  body: string;
  language: CommunityLocale;
  bug?: BugDetails;
  /** Honeypot: must be empty. */
  website?: string;
  /** Phase 2 (community-p2): ms epoch when the form was shown (time-to-fill check). */
  startedAt?: number;
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

export type NewPostRequest = {
  body: string;
  replyTo?: number | null;
  website?: string;
  /** Phase 2 (community-p2): ms epoch when the form was shown (time-to-fill check). */
  startedAt?: number;
};

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

// Phase 2 (community-p2) ------------------------------------------------------------------------
//
// Routes added in phase 2 (all under /api/community; writes need a same-origin request unless noted):
//
//   POST   /mod/threads/:id/merge   MergeThreadRequest → MergeThreadResponse      (moderator+)
//   GET    /threads/:id                    → ThreadRedirectResponse when :id was merged away
//   POST   /uploads                 raw image body or multipart field "file" → UploadResponse (201)
//   GET    /uploads/:id                    → the image bytes (immutable, nosniff, CSP default-src 'none')
//   DELETE /uploads/:id                    → { ok: true }   (the uploader, or a moderator)
//   POST   /posts/:id/translate     TranslateRequest → TranslateResponse          (signed in)
//   POST   /preview                 { body } → PreviewResponse (now with `problems`)
//   POST   /auth/passkey/register/options     → PasskeyCreationOptions          (signed in)
//   POST   /auth/passkey/register   PasskeyRegisterRequest → { passkey: PasskeyInfo } (201)
//   POST   /auth/passkey/login/options        → PasskeyRequestOptions
//   POST   /auth/passkey/login      PasskeyLoginRequest → { member: SelfMember } (sets the session cookie)
//   GET    /me/passkeys                       → { passkeys: PasskeyInfo[] }
//   DELETE /me/passkeys/:id                   → { ok: true }
//   POST   /email/inbound           Resend inbound webhook (Svix-signed, no Origin) → { ok: true, outcome }
//
// Scheduled: community-trust.mts (daily 04:00 UTC, member → trusted), community-digest.mts
// (Mondays from 08:00 UTC, the opt-in weekly digest; catch-up runs until 10:50 are no-ops once sent).

/** What the deploy has switched on. The UI hides what is off. */
export type CommunityFeatures = {
  /** WebAuthn sign-in; always on (needs no credentials). */
  passkeys: boolean;
  /** Image uploads in posts (Netlify Blobs). */
  uploads: boolean;
  /** Replying to a notification email posts the reply (COMMUNITY_REPLY_DOMAIN + RESEND_WEBHOOK_SECRET + RESEND_API_KEY). */
  replyByEmail: boolean;
  /** "Translate this post" (ANTHROPIC_API_KEY). */
  translate: boolean;
  /** The weekly digest switch in settings (RESEND_API_KEY). `emailPrefs.digest` defaults to false. */
  digest: boolean;
};

/** Email preference keys that default to OFF (every other key defaults to on). */
export const emailPrefsOffByDefault: readonly string[] = ['digest'];

export type MergeThreadRequest = { intoThreadId: number };
/** The target thread after the merge, and how many posts moved into it. */
export type MergeThreadResponse = { thread: ThreadSummary; moved: number };

/** GET /threads/:id of a merged thread (HTTP 200): go to this thread instead (replace the URL). */
export type ThreadRedirectResponse = { redirect: { id: number; slug: string } };

export type Upload = {
  /** 22 characters, [A-Za-z0-9_-]. */
  id: string;
  /** /api/community/uploads/<id> */
  url: string;
  /** What to insert in the composer: ![](upload:<id>) — the member must fill in the alt text. */
  markdown: string;
  contentType: 'image/jpeg' | 'image/png' | 'image/webp';
  width: number;
  height: number;
  bytes: number;
  createdAt: string;
};
export type UploadResponse = { upload: Upload };

/** POST /preview. `problems` lists body field codes the post would be refused for, e.g. 'image_needs_alt'. */
export type PreviewResponse = { html: string; problems?: string[] };

export type TranslateRequest = { to: CommunityLocale };
/** `html` is allow-listed like a post; `from` is the thread's language. */
export type TranslateResponse = { html: string; from: CommunityLocale; to: CommunityLocale; cached: boolean };

/** JSON forms of WebAuthn options: every binary value is base64url. Decode before navigator.credentials.*. */
export type PasskeyCreationOptions = {
  challenge: string;
  rp: { id: string; name: string };
  user: { id: string; name: string; displayName: string };
  pubKeyCredParams: { type: 'public-key'; alg: number }[];
  timeout: number;
  attestation: 'none';
  authenticatorSelection: { residentKey: 'required'; requireResidentKey: true; userVerification: 'preferred' };
  excludeCredentials: { type: 'public-key'; id: string; transports?: string[] }[];
};
export type PasskeyRequestOptions = {
  challenge: string;
  rpId: string;
  timeout: number;
  userVerification: 'preferred';
  allowCredentials: [];
};
/** A PublicKeyCredential from navigator.credentials.create(), binary fields base64url. */
export type PasskeyRegisterRequest = {
  id: string;
  rawId: string;
  type: 'public-key';
  response: { clientDataJSON: string; attestationObject: string; transports?: string[] };
  nickname?: string;
};
/** A PublicKeyCredential from navigator.credentials.get(), binary fields base64url. */
export type PasskeyLoginRequest = {
  id: string;
  rawId: string;
  type: 'public-key';
  response: { clientDataJSON: string; authenticatorData: string; signature: string; userHandle?: string | null };
};
export type PasskeyInfo = {
  id: number;
  nickname: string;
  createdAt: string;
  lastUsedAt: string | null;
  transports: string[];
  /** Synced passkey (iCloud Keychain, Google Password Manager …). */
  backedUp: boolean;
};

/**
 * The iOS app's "Report a bug" opens /community/new (or /fr/community/new …) with these query
 * parameters, which the form pre-fills; nothing is posted until the member presses Post:
 *
 *   ?category=bugs&device=<model>&os=<iOS version>&app=<version (build)>
 *    &assistive=voiceover,switch_control&level=<n>&lang=<locale>
 *
 * device → bug.device (2–80), os → bug.osVersion (1–20), app → bug.appVersion (1–20),
 * assistive → bug.assistive (AssistiveTech values, comma-separated; unknown ones dropped),
 * level → bug.level (integer 1–100000; anything else dropped), lang → the thread language.
 */
export const bugDeepLinkParams = ['category', 'device', 'os', 'app', 'assistive', 'level', 'lang'] as const;
export const bugLevelRange = { min: 1, max: 100000 } as const;
