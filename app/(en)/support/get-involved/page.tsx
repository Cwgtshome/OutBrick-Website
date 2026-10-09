import type { Metadata } from 'next';
import { InvolvedPage, involvedMetadata } from '../../../support-centre';

/** /support/get-involved in English. See app/support-centre.tsx. */
export const metadata: Metadata = involvedMetadata('en');

export default function SupportInvolvedPage() {
  return <InvolvedPage locale="en" />;
}
