import { localeAlternates } from '../../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { Bond, EditorialPage } from '../../../editorial-shell';

/**
 * Where the newsletter form lands when it is posted without script: Netlify
 * records the entry, then answers the POST with this page. The sign-up is
 * double opt-in: netlify/functions/submission-created sends the confirm email. It is not a page
 * anyone should arrive at from a search, so it is kept out of the index.
 */
export const metadata: Metadata = {
  title: { absolute: 'Check your inbox to confirm your OutBrick newsletter sign-up' },
  description: 'Your OutBrick newsletter sign-up was received. Confirm it with the button in the email we have just sent you.',
  alternates: localeAlternates('en', '/newsletter/thanks' ),
  robots: { index: false, follow: true },
};

export default function NewsletterThanksPage() {
  return (
    <EditorialPage page={'/newsletter/thanks'}>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <p className="ed-label">Newsletter</p>
          <h1 className="ed-display">Check your <em>inbox.</em></h1>
          <p className="ed-lede">
            Thank you. We’ve sent you an email with a button in it: press it within 7 days to confirm,
            and you’re on the list. Until then, nothing is added. The letters come about once a month at
            most, and every one has a one-click unsubscribe link.
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
