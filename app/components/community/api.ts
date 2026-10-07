/**
 * The community pages' only way to the server: a small typed client for /api/community/*
 * (lib/community/contract.ts). Same-origin cookies, JSON both ways, and every failure turned into
 * an `ApiFailure` carrying the contract's ApiErrorBody, so a view can show the translated text
 * for its code and mark the fields it names.
 *
 * GETs are cached in memory for half a minute, keyed by URL, so moving back and forth between
 * pages does not refetch; any write clears the cache, because a reply changes the counts on
 * every list that shows the thread.
 */

import type {
  ApiErrorBody,
  Category,
  CommunityLocale,
  FaqEntry,
  FollowLevel,
  MemberProfile,
  ModQueueResponse,
  ModReportsResponse,
  NewPostRequest,
  NewThreadRequest,
  NotificationsResponse,
  Post,
  ReportRequest,
  ResolveReportRequest,
  SearchResponse,
  SessionResponse,
  ThreadDetail,
  ThreadListResponse,
  ThreadSummary,
  UpdateMeRequest,
  UpdateMeResponse,
  HidePostRequest,
  BanRequest,
  ModMemberResponse,
  UpdateThreadRequest,
  EmailSignInRequest,
  RoadmapResponse,
  SimilarThreadsResponse,
  ThreadUpdatesResponse,
  ThreadRedirectResponse,
  PollVoteResponse,
  ReactionKind,
  ReactionResponse,
  BookmarkResponse,
  BookmarksResponse,
  PulseResponse,
  LeaderboardResponse,
  LeaderboardKind,
  LeaderboardPeriod,
  MemberSuggestResponse,
  UploadResponse,
  PreviewResponse,
  TranslateResponse,
  PasskeyCreationOptions,
  PasskeyRequestOptions,
  PasskeyRegisterRequest,
  PasskeyLoginRequest,
  PasskeyInfo,
} from '../../../lib/community/contract';

export const API = '/api/community';

/**
 * Background polling (the bell, live replies) only while someone is actually here: the tab is
 * visible and the reader has touched, typed, scrolled or moved the pointer in the last ten
 * minutes. A forum tab left open overnight must not keep the database awake (each poll is a
 * query, and Netlify Database bills for the time it is awake).
 */
export const POLL_IDLE_MS = 10 * 60_000;
let lastActivity = Date.now();
if (typeof window !== 'undefined') {
  for (const event of ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart', 'focus'] as const) {
    window.addEventListener(event, () => (lastActivity = Date.now()), { passive: true, capture: true });
  }
}
export function readerIsActive(now = Date.now()): boolean {
  return typeof document !== 'undefined' && document.visibilityState === 'visible' && now - lastActivity < POLL_IDLE_MS;
}

export class ApiFailure extends Error {
  status: number;
  body: ApiErrorBody;
  constructor(status: number, body: ApiErrorBody) {
    super(body.message);
    this.status = status;
    this.body = body;
  }
  get code() {
    return this.body.code;
  }
}

const cache = new Map<string, { at: number; value: Promise<unknown> }>();
const TTL = 30_000;

export function clearCache() {
  cache.clear();
}

async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
  let response: Response;
  try {
    response = await fetch(API + path, {
      method,
      credentials: 'same-origin',
      headers: body === undefined ? { Accept: 'application/json' } : { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new ApiFailure(0, { code: 'network', message: 'Network error' });
  }
  let data: unknown = null;
  const text = await response.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = null;
    }
  }
  if (!response.ok) {
    const error = (data as { error?: ApiErrorBody } | null)?.error;
    const fallback = response.status >= 500 || response.status === 404 && !error ? 'unavailable' : 'unknown';
    throw new ApiFailure(response.status, error && typeof error.code === 'string' ? error : { code: fallback, message: response.statusText });
  }
  if (data === null) throw new ApiFailure(response.status, { code: 'unavailable', message: 'Not JSON' });
  return data as T;
}

function get<T>(path: string, fresh = false): Promise<T> {
  const hit = cache.get(path);
  if (!fresh && hit && Date.now() - hit.at < TTL) return hit.value as Promise<T>;
  const value = request<T>('GET', path);
  cache.set(path, { at: Date.now(), value });
  value.catch(() => cache.delete(path));
  return value;
}

function write<T>(method: string, path: string, body?: unknown): Promise<T> {
  clearCache();
  return request<T>(method, path, body ?? {});
}

const query = (params: Record<string, string | number | null | undefined>) => {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== null && value !== '') search.set(key, String(value));
  const text = search.toString();
  return text ? `?${text}` : '';
};

export const api = {
  session: (fresh = false) => get<SessionResponse>('/session', fresh),
  emailSignIn: (body: EmailSignInRequest) => write<{ sent: true }>('POST', '/auth/email', body),
  signOut: () => write<{ ok: true }>('POST', '/auth/signout'),
  updateMe: (body: UpdateMeRequest) => write<UpdateMeResponse>('PATCH', '/me', body),
  deleteMe: () => write<{ ok: true }>('DELETE', '/me', { confirm: 'DELETE' }),
  notifications: (page: number) => get<NotificationsResponse>(`/notifications${query({ page: page > 1 ? page : null })}`, true),
  readNotifications: (body: { ids?: number[]; all?: boolean }) => write<{ ok: true }>('POST', '/notifications/read', body),

  categories: () => get<{ categories: Category[] }>('/categories'),
  threads: (params: { category?: string; language?: string; sort?: string; status?: string; page?: number; author?: number }) =>
    get<ThreadListResponse>(`/threads${query({ ...params, page: params.page && params.page > 1 ? params.page : null })}`),
  newThread: (body: NewThreadRequest) => write<{ thread: ThreadSummary }>('POST', '/threads', body),
  thread: (id: number, page: number, fresh = false) => get<ThreadDetail | ThreadRedirectResponse>(`/threads/${id}${query({ page: page > 1 ? page : null })}`, fresh),
  updateThread: (id: number, body: UpdateThreadRequest) => write<{ thread: ThreadSummary }>('PATCH', `/threads/${id}`, body),
  reply: (id: number, body: NewPostRequest) => write<{ post: Post; page: number }>('POST', `/threads/${id}/posts`, body),
  solve: (id: number, postId: number | null) => write<{ thread: ThreadSummary }>('POST', `/threads/${id}/solve`, { postId }),
  vote: (id: number, on: boolean) => write<{ voteCount: number; voted: boolean }>('POST', `/threads/${id}/vote`, { on }),
  followThread: (id: number, level: FollowLevel) => write<{ level: FollowLevel }>('POST', `/threads/${id}/follow`, { level }),
  followCategory: (slug: string, level: FollowLevel) => write<{ level: FollowLevel }>('POST', `/categories/${encodeURIComponent(slug)}/follow`, { level }),
  // Marking read changes nothing another page shows, so it does not clear the cache.
  markRead: (id: number, number: number) => request<{ ok: true }>('POST', `/threads/${id}/read`, { number }),
  editPost: (id: number, body: string) => write<{ post: Post }>('PATCH', `/posts/${id}`, { body }),
  deletePost: (id: number) => write<{ ok: true }>('DELETE', `/posts/${id}`),
  report: (id: number, body: ReportRequest) => request<{ ok: true }>('POST', `/posts/${id}/report`, body),
  preview: (body: string) => request<PreviewResponse>('POST', '/preview', { body }),
  search: (params: { q: string; category?: string; language?: string; page?: number }) =>
    get<SearchResponse>(`/search${query({ ...params, page: params.page && params.page > 1 ? params.page : null })}`),
  faq: (locale: CommunityLocale) => get<{ entries: FaqEntry[] }>(`/faq${query({ locale })}`),
  member: (id: number) => get<MemberProfile>(`/members/${id}`),

  roadmap: (locale: CommunityLocale) => get<RoadmapResponse>(`/roadmap${query({ locale })}`),
  similar: (title: string, category: string) => request<SimilarThreadsResponse>('GET', `/threads/similar${query({ title, category })}`),
  updates: (id: number, after: number) => request<ThreadUpdatesResponse>('GET', `/threads/${id}/updates${query({ after })}`),
  pollVote: (id: number, optionIds: number[]) => write<PollVoteResponse>('POST', `/threads/${id}/poll/vote`, { optionIds }),
  react: (postId: number, reaction: ReactionKind, on: boolean) => request<ReactionResponse>('POST', `/posts/${postId}/reactions`, { reaction, on }),
  bookmark: (postId: number, on: boolean) => write<BookmarkResponse>('POST', `/posts/${postId}/bookmark`, { on }),
  bookmarks: (page: number) => get<BookmarksResponse>(`/me/bookmarks${query({ page: page > 1 ? page : null })}`, true),
  pulse: () => request<PulseResponse>('GET', '/pulse'),
  leaderboard: (period: LeaderboardPeriod, kind: LeaderboardKind) => get<LeaderboardResponse>(`/leaderboard${query({ period, kind })}`),
  suggest: (q: string) => request<MemberSuggestResponse>('GET', `/members/suggest${query({ q })}`),
  translate: (postId: number, to: CommunityLocale) => request<TranslateResponse>('POST', `/posts/${postId}/translate`, { to }),
  passkeyRegisterOptions: () => request<PasskeyCreationOptions>('POST', '/auth/passkey/register/options', {}),
  passkeyRegister: (body: PasskeyRegisterRequest) => request<{ passkey: PasskeyInfo }>('POST', '/auth/passkey/register', body),
  passkeyLoginOptions: () => request<PasskeyRequestOptions>('POST', '/auth/passkey/login/options', {}),
  passkeyLogin: (body: PasskeyLoginRequest) => write<{ member: unknown }>('POST', '/auth/passkey/login', body),
  passkeys: () => request<{ passkeys: PasskeyInfo[] }>('GET', '/me/passkeys'),
  deletePasskey: (id: number) => request<{ ok: true }>('DELETE', `/me/passkeys/${id}`),

  modReports: () => get<ModReportsResponse>('/mod/reports', true),
  resolveReport: (id: number, body: ResolveReportRequest) => write<{ ok: true }>('POST', `/mod/reports/${id}/resolve`, body),
  modQueue: () => get<ModQueueResponse>('/mod/queue', true),
  approve: (postId: number) => write<{ post: Post }>('POST', `/posts/${postId}/approve`),
  banMember: (memberId: number, body: BanRequest) => write<ModMemberResponse>('POST', `/mod/members/${memberId}/ban`, body),
  hidePost: (postId: number, reason: string) => write<{ post: Post }>('POST', `/posts/${postId}/hide`, { reason } satisfies HidePostRequest),
};

export const authStart = (provider: string, returnTo: string, locale: CommunityLocale) =>
  `${API}/auth/${provider}/start${query({ returnTo, locale })}`;
export const exportUrl = `${API}/me/export`;

/** POST /uploads with the image bytes as the body. */
export async function uploadImage(blob: Blob): Promise<UploadResponse> {
  let response: Response;
  try {
    response = await fetch(`${API}/uploads`, { method: 'POST', credentials: 'same-origin', headers: { Accept: 'application/json', 'Content-Type': blob.type || 'application/octet-stream' }, body: blob });
  } catch {
    throw new ApiFailure(0, { code: 'network', message: 'Network error' });
  }
  const data = (await response.json().catch(() => null)) as (UploadResponse & { error?: ApiErrorBody }) | null;
  if (!response.ok || !data?.upload) throw new ApiFailure(response.status, data?.error ?? { code: response.status === 413 ? 'too_large' : 'unknown', message: response.statusText, fields: response.status === 413 ? { file: 'too_large' } : undefined });
  return data;
}
