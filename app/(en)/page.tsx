import type { Metadata } from 'next';
import { HomePage, homeMetadata } from '../components/home-page';
import { HomeStructuredData } from '../page-structured-data';

/**
 * The English home page. The page itself lives in app/components/home-page.tsx.
 *
 * The title is set here in full: the shared copy's "OutBrick — a boulevard built out of brick"
 * would otherwise pick up the layout's " — OutBrick" suffix and name the brand twice. This one
 * leads with what the game is and keeps the brand at the end, like every other page.
 */
export const metadata: Metadata = {
  ...homeMetadata('en'),
  title: { absolute: 'Block sort puzzle: a boulevard built out of brick — OutBrick' },
};

export default function EnglishHomePage() {
  return (
    <>
      <HomePage locale="en" />
      <HomeStructuredData locale="en" />
    </>
  );
}
