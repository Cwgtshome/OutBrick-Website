import type { MemberRole, CommunityLocale } from './contract.ts';
export type EditorialContent = {
  id: number;
  locale: CommunityLocale;
  kind: 'page' | 'blog';
  slug: string;
  title: string;
  summary: string;
  body: string;
  html: string;
  state: 'draft' | 'published';
  revision: number;
  updatedAt: string;
  publishedAt: string | null;
};
export type AdminMember = {
  id: number;
  displayName: string;
  role: MemberRole;
  verified: boolean;
  joinedAt: string;
};
export type AdminSnapshot = {
  counts: {
    members: number;
    threads: number;
    reports: number;
    pending: number;
    drafts: number;
    published: number;
  };
  members: AdminMember[];
  memberPage: number;
  memberPages: number;
  content: EditorialContent[];
  contentPage: number;
  contentPages: number;
  audit: { id: number; action: string; targetId: number; createdAt: string }[];
  watchingAll: boolean;
};
export function editorialPath(
  locale: CommunityLocale,
  item: Pick<EditorialContent, 'kind' | 'slug'>,
) {
  return `${locale === 'en' ? '' : '/' + locale}/community/content/${item.kind}/${item.slug}`;
}

// ---------------------------------------------------------------------------------------
// Support cases, applications and policy notices (netlify/lifecycle/cases.ts, applications.ts,
// security.ts). Staff means the team or admin role; policy notices are admins only.

export type SupportCaseStatus = 'open' | 'replied' | 'fix_pending' | 'resolved' | 'closed';
export type SupportCaseFilter = SupportCaseStatus | 'active' | 'all';
export type SupportCase = {
  id: number;
  ref: string;
  email: string;
  name: string;
  locale: string;
  topic: string;
  /** The player's words, as typed: render as text, never as HTML. */
  message: string;
  device: string;
  appVersion: string;
  iosVersion: string;
  status: SupportCaseStatus;
  fixedIn: string | null;
  fixedNotifiedAt: string | null;
  feedback: { rating: number | null; solved: boolean | null; comment: string; at: string } | null;
  reopened: number;
  createdAt: string;
  updatedAt: string;
};
export type SupportCaseEvent = {
  id: number;
  /** created, reply, status, fixed_in, fixed_notified, feedback_requested, feedback, reopened */
  kind: string;
  body: string;
  data: { from?: string; to?: string; version?: string; rating?: number; solved?: boolean } & Record<string, unknown>;
  actor: string | null;
  at: string;
};
export type SupportCaseCounts = { open: number; replied: number; fixPending: number; rating: number | null; answered: number };
export type SupportCaseListResponse = { cases: SupportCase[]; counts: SupportCaseCounts; page: number };
export type SupportCaseDetailResponse = { case: SupportCase; events: SupportCaseEvent[] };
/** The server returns at most this many cases per page. */
export const SUPPORT_CASE_PAGE = 50;

export type ApplicationKind = 'affiliate' | 'careers';
export type ApplicationStatus = 'received' | 'in_review' | 'next_step' | 'approved' | 'declined';
export type ApplicationDecision = { affiliate: 'approved' | 'declined'; careers: 'in_review' | 'next_step' | 'declined' };
export type Application = {
  id: number;
  kind: ApplicationKind;
  email: string;
  name: string;
  locale: string;
  role: string;
  code: string;
  details: Record<string, string>;
  status: ApplicationStatus;
  decidedAt: string | null;
  createdAt: string;
};
export const applicationDecisions: { [K in ApplicationKind]: ApplicationDecision[K][] } = {
  affiliate: ['approved', 'declined'],
  careers: ['in_review', 'next_step', 'declined'],
};
export type ApplicationDecisionRequest = { decision: string; message?: string; code?: string };
/** outbrick.site/r/<code>, the link an approved affiliate shares. */
export const affiliateLink = (code: string) => `outbrick.site/r/${code.toLowerCase()}`;

export type PolicyNoticeRequest = {
  policy: 'privacy' | 'terms';
  /** YYYY-MM-DD */
  effective: string;
  changes: Partial<Record<CommunityLocale, string[]>> & { en: string[] };
  audiences: ('member' | 'news')[];
};
