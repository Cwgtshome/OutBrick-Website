import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { LegalPage, Pills, SiteLink } from '../../legal-page';

export const metadata: Metadata = pageMetadata({
  path: '/terms',
  title: 'OutBrick terms of use: the fair-play ground rules',
  description:
    'The ground rules for playing OutBrick and using the OutBrick website: fair play, purchases, your content, and what we are responsible for.',
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="OutBrick terms"
      title="A few fair-play rules."
      summary="These terms describe the simple ground rules for using OutBrick and this website, including the OutBrick Community. OutBrick is a game, not a service that requires an account; a community account is optional."
      updated="7 October 2026"
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

      <section className="brick" id="community">
        <h2>The OutBrick Community</h2>
        <p>
          The forum, support forum, FAQ and search on this website make up the OutBrick Community.
          Anyone can read it. To post, vote, follow or report, you need a free community account, and
          you must be at least 16, or older if the age of digital consent where you live is higher.
        </p>
        <ul className="points">
          <li><b>Guidelines:</b> when you take part, the <SiteLink path="/community/guidelines">community guidelines</SiteLink> apply as part of these terms.</li>
          <li><b>Your posts:</b> what you post stays yours. By posting it, you give OutBrick a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, format and display it in the community, in its FAQ and search, and in the community&rsquo;s emails, for as long as it stays in the community, including after you delete your account, when it is shown as written by a Former member. Post only what you have the right to share.</li>
          <li><b>Moderation:</b> moderators may review, hide, edit, lock, move or remove posts and threads that break the guidelines or these terms, and may suspend or ban an account that does. When a post of yours is hidden, we tell you why and how to appeal.</li>
          <li><b>Advice from members:</b> answers and tips from other members are their own, not OutBrick&rsquo;s. We do not check them and give no warranty that they are accurate or that they will work for you.</li>
          <li><b>Reporting:</b> if a post breaks the guidelines or the law, use Report on the post, or tell us through the contact form. Moderators review reports and act on them.</li>
          <li><b>Your account:</b> you can delete it at any time in your community settings; the <a href="/privacy#community">privacy policy</a> sets out what happens to your data.</li>
        </ul>
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

      <Pills items={['No account needed to play', 'Apple services stay Apple-managed', 'Privacy-first by design']} />
    </LegalPage>
  );
}
