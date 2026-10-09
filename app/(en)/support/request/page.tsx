import type { Metadata } from 'next';
import { RequestPage, requestMetadata } from '../../../support-centre';

/** /support/request in English. See app/support-centre.tsx. */
export const metadata: Metadata = requestMetadata('en');

export default function SupportRequestPage() {
  return <RequestPage locale="en" />;
}
