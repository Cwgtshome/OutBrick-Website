import { localeAlternates } from '../../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { Bond, EditorialPage } from '../../../editorial-shell';

/**
 * Where the confirm link in the "Confirm your subscription" email lands once
 * netlify/functions/newsletter-confirm has checked it and added the address to
 * OutBrick News. Reached only from that email, so it is kept out of the index.
 */
export const metadata: Metadata = {
  title: { absolute: 'You’re subscribed to OutBrick News' },
  description: 'Your OutBrick newsletter subscription is confirmed. A short letter arrives when a new village opens or a big update ships.',
  alternates: localeAlternates('en', '/newsletter/confirmed'),
  robots: { index: false, follow: true },
};

export default function NewsletterConfirmedPage() {
  return (
    <EditorialPage page={'/newsletter/confirmed'}>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <p className="ed-label">Newsletter</p>
          <h1 className="ed-display">Welcome to <em>OutBrick News.</em></h1>
          <p className="ed-lede">
            Your subscription is confirmed, and a welcome email is on its way. The next letter comes when
            there’s a new village or a big update, about once a month at most. Every letter has a one-click
            unsubscribe link.
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
