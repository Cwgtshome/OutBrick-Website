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
  audit: { id: number; action: string; targetId: number; createdAt: string }[];
  watchingAll: boolean;
};
export function editorialPath(
  locale: CommunityLocale,
  item: Pick<EditorialContent, 'kind' | 'slug'>,
) {
  return `${locale === 'en' ? '' : '/' + locale}/community/content/${item.kind}/${item.slug}`;
}
