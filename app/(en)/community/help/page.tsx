import type { Metadata } from 'next';
import { HelpHub, helpHubMetadata } from '../../../help-centre';

/** The OutBrick Help Centre (English). See app/help-centre.tsx. */
export const metadata: Metadata = helpHubMetadata('en');

export default function HelpCentrePage() {
  return <HelpHub locale="en" />;
}
