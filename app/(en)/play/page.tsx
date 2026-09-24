import type { Metadata } from 'next';
import { PlayGuide, playMetadata } from '../../components/play-guide';
import { PlayStructuredData } from '../../page-structured-data';

/** The English play guide. The page itself lives in app/components/play-guide.tsx. */
export const metadata: Metadata = playMetadata('en');

export default function PlayPage() {
  return (
    <>
      <PlayGuide locale="en" />
      <PlayStructuredData locale="en" />
    </>
  );
}
