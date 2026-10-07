import { localeAlternates } from '../../../../lib/i18n/locales';
import type { Metadata } from 'next';
import { Bond, EditorialPage } from '../../../editorial-shell';
import { NewsletterSignup } from '../../../components/newsletter-signup';

/**
 * Where a newsletter link lands when it cannot be used: a confirm link older
 * than 7 days, a link that was cut short when it was copied, or a moment when
 * the newsletter service could not be reached. The sign-up form below sends a
 * fresh confirmation email. Not for search.
 */
export const metadata: Metadata = {
  title: { absolute: 'That OutBrick newsletter link has expired' },
  description: 'Newsletter links from OutBrick work for 7 days. Sign up again below and we will send a fresh confirmation email straight away.',
  alternates: localeAlternates('en', '/newsletter/link-expired'),
  robots: { index: false, follow: true },
};

export default function NewsletterLinkExpiredPage() {
  return (
    <EditorialPage page={'/newsletter/link-expired'}>
      <header className="ed-band-ink ed-hero">
        <div className="ed-wrap">
          <p className="ed-label">Newsletter</p>
          <h1 className="ed-display">That link has <em>run out.</em></h1>
          <p className="ed-lede">
            Confirmation links work for 7 days, and this one has expired or did not arrive in one piece.
            Sign up again below and we’ll send a fresh one straight away. If you were trying to
            unsubscribe, reply to any letter and we’ll take you off the list.
          </p>
        </div>
      </header>
      <Bond />

      <section className="ed-band-paper ed-band" aria-label="Newsletter sign-up">
        <div className="ed-wrap" style={{ maxWidth: 640 }}>
          <NewsletterSignup headingLevel={2} heading="Sign up" intro="Your email address and a language. That is all we ask for." />
        </div>
      </section>
    </EditorialPage>
  );
}
