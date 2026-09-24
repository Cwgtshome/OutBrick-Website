import type { Metadata } from 'next';
import { Bond, EditorialPage } from '../../../editorial-shell';

/**
 * Where the newsletter form lands when it is posted without script: Netlify
 * records the entry, then answers the POST with this page. It is not a page
 * anyone should arrive at from a search, so it is kept out of the index.
 */
export const metadata: Metadata = {
  title: { absolute: 'Thanks — you’re on the OutBrick newsletter list' },
  description: 'Your sign-up for the OutBrick newsletter was received.',
  alternates: { canonical: '/newsletter/thanks' },
  robots: { index: false, follow: true },
};

export default function NewsletterThanksPage() {
  return (
    <EditorialPage>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <p className="ed-label">Newsletter</p>
          <h1 className="ed-display">You’re on <em>the list.</em></h1>
          <p className="ed-lede">
            Thank you. The next letter comes when there’s a new village or a big update, about once a
            month at most. To come off the list, reply to any letter.
          </p>
          <div className="ed-actions">
            <a className="ed-btn" href="/whats-new">Read what’s new</a>
            <a className="ed-link" href="/blog">Browse the journal</a>
            <a className="ed-link" href="/">Back to OutBrick</a>
          </div>
        </div>
      </header>
      <Bond />
    </EditorialPage>
  );
}
