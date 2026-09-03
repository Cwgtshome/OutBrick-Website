import type { Metadata } from 'next';
import { Apple, Check, HeartHandshake, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'The OutBrick terms of use for the game, website, Game Center features, and App Store purchases.',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="OutBrick terms"
      title="A few fair-play rules."
      summary="These terms describe the simple ground rules for using OutBrick and this website. OutBrick is a game, not a service that requires an account."
      updated="3 September 2026"
    >
      <section className="legal-highlight legal-highlight-purple">
        <HeartHandshake size={25} />
        <div>
          <h2>Play kindly. Keep it yours.</h2>
          <p>Use OutBrick for personal, lawful play. Do not interfere with the app, Game Center, the website, or another player’s experience.</p>
        </div>
      </section>

      <h2>Using OutBrick</h2>
      <p>You may download and use OutBrick on devices you control, subject to Apple’s App Store terms. The game’s artwork, mascots, code, name, and other original materials belong to RiseHush or their respective rights holders.</p>

      <h2>Game Center and purchases</h2>
      <p>Game Center features are provided through Apple and are subject to Apple’s terms and policies. In-app purchases are processed by Apple; refunds, billing, and payment questions are handled through Apple’s App Store support.</p>

      <h2>Website content</h2>
      <p>This website is provided for information, support, and product updates. We aim to keep it accurate, but the game and site may change as OutBrick is improved. External links are provided for convenience and are governed by their own terms.</p>

      <h2>Availability and liability</h2>
      <p>OutBrick and this website are provided on an “as available” basis. To the extent allowed by law, RiseHush is not responsible for losses caused by events outside its reasonable control, including device failures, network outages, or third-party service changes.</p>

      <div className="legal-fact-row">
        <span><Check size={16} /> No account required</span>
        <span><Apple size={16} /> Apple services stay Apple-managed</span>
        <span><ShieldCheck size={16} /> Privacy-first by design</span>
      </div>

      <h2>Questions</h2>
      <p>For support or questions about these terms, contact <a className="inline-link" href="mailto:mourad.hamdi@me.com">mourad.hamdi@me.com</a>.</p>
    </LegalPage>
  );
}
