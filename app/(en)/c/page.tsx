import type { Metadata } from 'next';
import { ChallengeLanding } from './challenge-landing';

export const metadata: Metadata = {
  title: 'Your OutBrick challenge',
  description: 'Someone dared you to an OutBrick board. Get the game and clear it.',
  // A challenge link is a private, one-off URL; there is nothing here for a crawler to index.
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://www.outbrick.site/c' },
};

export default function ChallengePage() {
  return <ChallengeLanding />;
}
