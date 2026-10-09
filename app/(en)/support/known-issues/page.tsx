import type { Metadata } from 'next';
import { KnownIssuesPage, knownIssuesMetadata } from '../../../support-centre';

/** /support/known-issues in English. See app/support-centre.tsx. */
export const metadata: Metadata = knownIssuesMetadata('en');

export default function SupportKnownIssuesPage() {
  return <KnownIssuesPage locale="en" />;
}
