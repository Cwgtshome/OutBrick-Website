import type { Metadata } from 'next';
import { Apple, Check, Eraser, Gamepad2, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy choices',
  description: 'Manage local OutBrick data, Apple services, purchases, and privacy questions.',
};

export default function PrivacyChoicesPage() {
  return (
    <LegalPage
      eyebrow="User privacy choices"
      title="Your choices, clearly."
      summary="OutBrick does not operate an account, advertising, or analytics system. These are the controls available to manage the small amount of information that can exist on your device or in Apple services."
      updated="7 September 2026"
    >
      <section className="legal-highlight legal-highlight-blue">
        <Eraser size={25} />
        <div>
          <h2>Reset game data.</h2>
          <p>Open OutBrick › Settings › Delete My Data. This resets local progress, coins, boosters, preferences, and stats and requests removal of the iCloud save. Build 18 also removes any iCloud recovery copy. Sync requires iCloud availability; another device with an older save can upload it again. The action cannot be undone. Apple’s purchase records, Game Center data, device backups, and media you saved or shared are managed separately.</p>
        </div>
      </section>

      <h2>OutBrick data</h2>
      <p>The developer does not receive gameplay or face data, create game accounts, run analytics or advertising SDKs in the game, or sell data. The game stores progress and preferences locally so the board can work offline. When available, iCloud also syncs progress, profile choices, and the colour-blind preference to your own Apple Account. Manage the app’s iCloud access in device Settings. Apple controls separate device backups.</p>

      <h2>Camera and face data</h2>
      <p>The camera-free update (build 18) removes face tracking. In an older iOS build, turn off “Look at me (camera)” in OutBrick Settings or revoke Camera permission in device Settings to prevent camera access. Face values are processed temporarily on the device, not saved as a dataset or sent to us. Read the <a className="inline-link" href="/privacy#face-data">face-data policy</a> for the exact information, uses, storage, and retention practices in earlier builds.</p>

      <h2>Game Center</h2>
      <p>If you use Game Center, Apple manages the associated account, leaderboards, achievements, and challenges. You can sign out of Game Center or change its permissions in iOS Settings. Requests about Game Center account data should be directed to Apple.</p>

      <h2>Purchases and receipts</h2>
      <p>Apple processes App Store and in-app purchases. OutBrick does not receive your payment card information. Use Apple’s <a className="inline-link" href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">Report a Problem</a> service for a refund or billing request, and use Restore Purchases in the app when you need to restore an eligible purchase.</p>

      <h2>Questions or deletion requests</h2>
      <p>Because OutBrick has no account database, there is normally no server profile for us to retrieve or delete. If you think we have received personal information through a support message, use the <a className="inline-link" href="/contact">OutBrick contact form</a> and tell us what you want removed. Please do not send payment details, passwords, or government identifiers.</p>

      <div className="legal-fact-row">
        <span><Check size={16} /> No account</span>
        <span><Apple size={16} /> Apple-managed services</span>
        <span><ShieldCheck size={16} /> No tracking</span>
        <span><Gamepad2 size={16} /> Local reset in Settings</span>
      </div>
    </LegalPage>
  );
}
