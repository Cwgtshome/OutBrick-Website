import { localeAlternates } from '../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { GetAppQr } from '../../components/get-app-qr';
import { ChallengeLanding } from './challenge-landing';

export const metadata: Metadata = {
  title: 'Your OutBrick challenge',
  description: 'Someone dared you to an OutBrick board. Get the game and clear it.',
  // A challenge link is a private, one-off URL; there is nothing here for a crawler to index.
  robots: { index: false, follow: true },
  alternates: localeAlternates('en', '/c'),
};

export default function ChallengePage() {
  return <ChallengeLanding qr={<GetAppQr centred />} />;
}
