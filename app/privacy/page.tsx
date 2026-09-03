import type { Metadata } from 'next';
import { Apple, Check, LockKeyhole, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'The OutBrick privacy policy: no accounts, analytics SDKs, advertising, or third-party tracking.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="OutBrick privacy"
      title="Your board stays yours."
      summary="OutBrick is designed to work entirely on your device. This page explains what the app does and does not collect."
      updated="3 September 2026"
    >
      <section className="legal-highlight legal-highlight-blue">
        <LockKeyhole size={25} />
        <div>
          <h2>We collect nothing.</h2>
          <p>OutBrick has no accounts, analytics SDKs, advertising, or third-party tracking. Progress, coins, and settings stay on your device and may be included in your iCloud device backup.</p>
        </div>
      </section>

      <h2>Game Center</h2>
      <p>If you choose to sign in to Game Center, Apple handles leaderboards and achievements under Apple’s own privacy policy. OutBrick submits your level and clear counts to Game Center; it does not read your friends list or profile.</p>

      <h2>In-app purchases</h2>
      <p>Purchases are processed by Apple through the App Store. OutBrick does not see or store your payment details.</p>

      <h2>Children</h2>
      <p>OutBrick is rated 4+ and does not collect personal information from anyone, including children.</p>

      <div className="legal-fact-row">
        <span><Check size={16} /> Device-first progress</span>
        <span><Apple size={16} /> Apple-managed services</span>
        <span><ShieldCheck size={16} /> No tracking</span>
      </div>

      <h2>Contact</h2>
      <p>Questions about this policy? Email <a className="inline-link" href="mailto:mourad.hamdi@me.com">mourad.hamdi@me.com</a> or open an issue on <a className="inline-link" href="https://github.com/Cwgtshome/OutBrick/issues" target="_blank" rel="noreferrer">GitHub</a>.</p>
    </LegalPage>
  );
}
