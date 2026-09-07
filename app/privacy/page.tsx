import type { Metadata } from 'next';
import { Apple, Check, LockKeyhole, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';
import { facePrivacy } from '../../lib/face-privacy';

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
      updated="7 September 2026"
    >
      <section className="legal-highlight legal-highlight-blue">
        <LockKeyhole size={25} />
        <div>
          <h2>No tracking or advertising in the game.</h2>
          <p>We do not operate accounts, analytics SDKs, advertising SDKs, or third-party tracking. The developer does not receive your gameplay or face data. The app stores gameplay data locally and can sync progress through your own iCloud account. Support emails are described separately below.</p>
        </div>
      </section>

      <h2>Information stored on your device</h2>
      <p>OutBrick stores gameplay state such as level progress, coins, boosters, settings, accessibility preferences, and local statistics in the app’s local storage. This information is used to provide the game and is not transmitted to OutBrick. It may be included in an iCloud device backup if you have enabled that Apple feature.</p>

      <h2 id="icloud">iCloud progress sync</h2>
      <p>When iCloud is available, OutBrick automatically synchronizes progress through your Apple Account’s iCloud key-value storage. This includes level progress, coins and spending totals, boosters, streaks, rewards, purchases and unlocks, player name and avatar, gameplay statistics, and the colour-blind preference. Sound, music, haptics, the Rush timer, notification settings, per-device retry counts, and detailed local play summaries are not included. The developer cannot access this private iCloud save. It is separate from an iCloud device backup. You can manage OutBrick’s iCloud access in your device’s Apple Account settings.</p>

      {facePrivacy.map((section) => (
        <section key={section.id} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}

      <h2>Information sent to Apple services</h2>
      <p>If you choose to use Game Center, Apple processes the information needed for leaderboards, achievements, activities, and challenges under Apple’s policies. OutBrick submits gameplay scores and achievements and can display your Game Center name, profile photo, and friends’ leaderboard names and scores. Some leaderboard information is also displayed in the app’s widgets. If you buy or restore an in-app purchase, Apple processes the transaction and receipt. OutBrick does not see or store your payment card details.</p>

      <h2>Information we receive through support</h2>
      <p>Our contact form prepares an email in your mail app; it does not itself send a message. If you send that email, we receive the information you choose to include, such as your name, email address, device model, iOS version, level number, and a description or screenshot of a problem. We use it to answer you and diagnose the issue. Please do not send passwords, payment details, government identifiers, or sensitive personal information.</p>

      <h2>Retention and deletion</h2>
      <p>We keep support correspondence only for as long as reasonably needed to respond, maintain records, or resolve a recurring issue, subject to legal obligations. Delete My Data in OutBrick Settings resets this device’s progress and local play summaries and requests removal of its iCloud save, including any recovery copy in build 18. iCloud changes require service availability and may take time to reach other devices; a device that still has an older save can sync it again. Apple controls any separate device backups, purchase records, and Game Center data. This action does not delete screenshots or videos you chose to save to Photos or share. No face-data files are created by the tracking feature. For requests about information in a support message, use our <a className="inline-link" href="/privacy-choices">privacy choices</a> page or email us.</p>

      <h2>Children</h2>
      <p>OutBrick is rated 4+ and the game does not send personal gameplay or face information to the developer. Please avoid including children’s personal information in support messages. The game has no public chat, advertising, or account registration.</p>

      <h2>Third parties and changes</h2>
      <p>Apple services, App Store purchases, Game Center, iCloud sync, and iCloud backups are operated under their own terms and privacy policies. We do not add a third-party analytics or advertising partner to the app without updating this policy and the relevant App Store privacy information. We may update this page when the app or its practices change; the effective date above will show the latest revision.</p>

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
