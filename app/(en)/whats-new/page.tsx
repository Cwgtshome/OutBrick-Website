import type { Metadata } from 'next';
import { WhatsNewPage, whatsNewMetadata } from '../../components/whats-new';

/** OutBrick's release notes in English. The page itself lives in app/components/whats-new.tsx. */
export const metadata: Metadata = whatsNewMetadata('en');

export default function WhatsNew() {
  return <WhatsNewPage locale="en" />;
}
