import type { Metadata } from 'next';
import { HomePage, homeMetadata } from '../components/home-page';

/** The English home page. The page itself lives in app/components/home-page.tsx. */
export const metadata: Metadata = homeMetadata('en');

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
