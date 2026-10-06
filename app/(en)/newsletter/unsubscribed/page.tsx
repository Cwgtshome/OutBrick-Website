import { localeAlternates } from '../../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { Bond, EditorialPage } from '../../../editorial-shell';

/**
 * Where netlify/functions/newsletter-unsubscribe sends a reader once their
 * address is set to unsubscribed in Resend. Not for search.
 */
export const metadata: Metadata = {
  title: { absolute: 'You’re unsubscribed from OutBrick News' },
  description: 'This address will no longer receive the OutBrick newsletter. You can sign up again at any time from the newsletter page.',
  alternates: localeAlternates('en', '/newsletter/unsubscribed'),
  robots: { index: false, follow: true },
};

export default function NewsletterUnsubscribedPage() {
  return (
    <EditorialPage page={'/newsletter/unsubscribed'}>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <p className="ed-label">Newsletter</p>
          <h1 className="ed-display">You’re <em>unsubscribed.</em></h1>
          <p className="ed-lede">
            This address won’t receive OutBrick News any more. Thank you for reading. If that was a
            mistake, you can sign up again at any time.
          </p>
          <div className="ed-actions">
            <a className="ed-btn" href="/newsletter">Sign up again</a>
            <a className="ed-link" href="/">Back to OutBrick</a>
          </div>
        </div>
      </header>
      <Bond />
    </EditorialPage>
  );
}
