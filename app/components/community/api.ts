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
  SelfMember,
  SessionResponse,
  ThreadDetail,
  ThreadListResponse,
  ThreadSummary,
  UpdateMeRequest,
  UpdateThreadRequest,
  EmailSignInRequest,
} from '../../../lib/community/contract';

export const API = '/api/community';

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
  updateMe: (body: UpdateMeRequest) => write<{ member: SelfMember }>('PATCH', '/me', body),
  deleteMe: () => write<{ ok: true }>('DELETE', '/me', { confirm: 'DELETE' }),
  notifications: (page: number) => get<NotificationsResponse>(`/notifications${query({ page: page > 1 ? page : null })}`, true),
  readNotifications: (body: { ids?: number[]; all?: boolean }) => write<{ ok: true }>('POST', '/notifications/read', body),

  categories: () => get<{ categories: Category[] }>('/categories'),
  threads: (params: { category?: string; language?: string; sort?: string; status?: string; page?: number; author?: number }) =>
    get<ThreadListResponse>(`/threads${query({ ...params, page: params.page && params.page > 1 ? params.page : null })}`),
  newThread: (body: NewThreadRequest) => write<{ thread: ThreadSummary }>('POST', '/threads', body),
  thread: (id: number, page: number, fresh = false) => get<ThreadDetail>(`/threads/${id}${query({ page: page > 1 ? page : null })}`, fresh),
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
  preview: (body: string) => request<{ html: string }>('POST', '/preview', { body }),
  search: (params: { q: string; category?: string; language?: string; page?: number }) =>
    get<SearchResponse>(`/search${query({ ...params, page: params.page && params.page > 1 ? params.page : null })}`),
  faq: (locale: CommunityLocale) => get<{ entries: FaqEntry[] }>(`/faq${query({ locale })}`),
  member: (id: number) => get<MemberProfile>(`/members/${id}`),

  modReports: () => get<ModReportsResponse>('/mod/reports', true),
  resolveReport: (id: number, body: ResolveReportRequest) => write<{ ok: true }>('POST', `/mod/reports/${id}/resolve`, body),
  modQueue: () => get<ModQueueResponse>('/mod/queue', true),
  approve: (postId: number) => write<{ ok: true }>('POST', `/posts/${postId}/approve`),
  hidePost: (postId: number, reason: string) => write<{ ok: true }>('POST', `/posts/${postId}/hide`, { reason }),
};

export const authStart = (provider: string, returnTo: string, locale: CommunityLocale) =>
  `${API}/auth/${provider}/start${query({ returnTo, locale })}`;
export const exportUrl = `${API}/me/export`;
