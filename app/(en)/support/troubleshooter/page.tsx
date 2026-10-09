import type { Metadata } from 'next';
import { TroubleshooterPage, troubleshooterMetadata } from '../../../support-centre';

/** /support/troubleshooter in English. See app/support-centre.tsx. */
export const metadata: Metadata = troubleshooterMetadata('en');

export default function SupportTroubleshooterPage() {
  return <TroubleshooterPage locale="en" />;
}
