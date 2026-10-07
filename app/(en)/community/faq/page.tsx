import type { Metadata } from 'next';
import { CommunityShell, communityMetadata } from '../../../community-shell';

/** OutBrick Community (English). Every /community/... address without a file of its own is served from /community; see app/community-shell.tsx. */
export const metadata: Metadata = communityMetadata('en', 'faq');

export default function CommunityPage() {
  return <CommunityShell locale="en" view="faq" />;
}
