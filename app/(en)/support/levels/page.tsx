import type { Metadata } from 'next';
import { LevelsPage, levelsMetadata } from '../../../support-centre';

/** /support/levels in English. See app/support-centre.tsx. */
export const metadata: Metadata = levelsMetadata('en');

export default function SupportLevelsPage() {
  return <LevelsPage locale="en" />;
}
