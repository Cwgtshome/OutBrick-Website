import type { Metadata } from 'next';
import { Apple, Check, LockKeyhole, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'The OutBrick privacy policy: no accounts, advertising SDKs, analytics, or third-party tracking.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="OutBrick privacy policy"
      title="Your board stays yours."
      summary="OutBrick is designed to work entirely on your device. This policy explains what the app does and does not collect, how Apple services fit in, and how to make privacy choices."
      updated="4 September 2026"
    >
      <section className="legal-highlight legal-highlight-blue">
        <LockKeyhole size={25} />
        <div>
          <h2>OutBrick collects no personal data.</h2>
          <p>We do not operate accounts, analytics SDKs, advertising SDKs, or third-party tracking. Progress, coins, preferences, and local stats stay on your device.</p>
        </div>
      </section>

      <h2>Information stored on your device</h2>
      <p>OutBrick stores gameplay state such as level progress, coins, boosters, settings, accessibility preferences, and local statistics in the app’s local storage. This information is used to provide the game and is not transmitted to OutBrick. It may be included in an iCloud device backup if you have enabled that Apple feature.</p>

      <h2>Information sent to Apple services</h2>
      <p>If you choose to use Game Center, Apple processes the information needed for leaderboards, achievements, and challenges under Apple’s policies. If you buy or restore an in-app purchase, Apple processes the transaction and receipt. OutBrick does not see or store your payment card details.</p>

      <h2>Information we receive through support</h2>
      <p>If you use our contact form, we receive the information you choose to include, such as your name, email address, device model, iOS version, level number, and a description or screenshot of a problem. We use it to answer you and diagnose the issue. Please do not send passwords, payment details, government identifiers, or sensitive personal information.</p>

      <h2>Retention and deletion</h2>
      <p>We keep support correspondence only for as long as reasonably needed to respond, maintain records, or resolve a recurring issue, subject to legal obligations. Delete local game data in OutBrick › Settings › Delete My Data. For requests about information in a support message, use our <a className="inline-link" href="/privacy-choices">privacy choices</a> page or email us.</p>

      <h2>Children</h2>
      <p>OutBrick is rated 4+ and does not knowingly collect personal information from children or anyone else. The game has no public chat, advertising, or account registration.</p>

      <h2>Third parties and changes</h2>
      <p>Apple services, App Store purchases, Game Center, and iCloud backups are operated under their own terms and privacy policies. We do not add a third-party analytics or advertising partner to the app without updating this policy and the relevant App Store privacy information. We may update this page when the app or its practices change; the effective date above will show the latest revision.</p>

      <div className="legal-fact-row">
        <span><Check size={16} /> Device-first progress</span>
        <span><Apple size={16} /> Apple-managed services</span>
        <span><ShieldCheck size={16} /> No tracking</span>
      </div>

      <h2>Contact</h2>
      <p>Questions about this policy? Use the <a className="inline-link" href="/contact">OutBrick contact form</a> or visit <a className="inline-link" href="/privacy-choices">User privacy choices</a>.</p>
    </LegalPage>
  );
}
