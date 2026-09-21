import type { Metadata } from 'next';
import { LegalPage, Pills } from '../legal-page';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The ground rules for using OutBrick and the OutBrick website.',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="OutBrick terms"
      title="A few fair-play rules."
      summary="These terms describe the simple ground rules for using OutBrick and this website. OutBrick is a game, not a service that requires an account."
      updated="3 September 2026"
      current="/terms"
    >
      <div className="brick headline">
        <h2>Play kindly. Keep it yours.</h2>
        <p>
          Use OutBrick for personal, lawful play. Do not interfere with the app, Game Center, the
          website, or another player&rsquo;s experience.
        </p>
      </div>

      <section className="brick">
        <h2>Using OutBrick</h2>
        <p>
          You may download and use OutBrick on devices you control, subject to Apple&rsquo;s App Store
          terms. The game&rsquo;s artwork, mascots, code, name, and other original materials belong to
          OutBrick or their respective rights holders.
        </p>
      </section>

      <section className="brick">
        <h2>Game Center and purchases</h2>
        <p>
          Game Center features are provided through Apple and are subject to Apple&rsquo;s terms and
          policies. In-app purchases are processed by Apple; refunds, billing, and payment questions are
          handled through Apple&rsquo;s App Store support.
        </p>
      </section>

      <section className="brick">
        <h2>Website content</h2>
        <p>
          This website is provided for information, support, and product updates. We aim to keep it
          accurate, but the game and site may change as OutBrick is improved. External links are
          provided for convenience and are governed by their own terms.
        </p>
      </section>

      <section className="brick">
        <h2>Availability and liability</h2>
        <p>
          OutBrick and this website are provided on an &ldquo;as available&rdquo; basis. To the extent
          allowed by law, OutBrick is not responsible for losses caused by events outside its reasonable
          control, including device failures, network outages, or third-party service changes.
        </p>
      </section>

      <section className="brick">
        <h2>Questions</h2>
        <p>
          For support or questions about these terms, use the <a href="/contact">OutBrick contact form</a>.
        </p>
      </section>

      <Pills items={['No account required', 'Apple services stay Apple-managed', 'Privacy-first by design']} />
    </LegalPage>
  );
}
