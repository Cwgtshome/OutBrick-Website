import type { Metadata } from 'next';
import { LegalPage, Pills } from '../legal-page';

export const metadata: Metadata = {
  title: 'Privacy choices',
  description: 'Manage local OutBrick data, Apple services, purchases, and privacy questions.',
};

export default function PrivacyChoicesPage() {
  return (
    <LegalPage
      eyebrow="User privacy choices"
      title="Your choices, clearly."
      summary="OutBrick has no account system and no analytics. These are the controls available to you — over your advertising choices, over what is stored on your device, and over what Apple services hold."
      updated="15 September 2026"
      current="/privacy-choices"
    >
      <div className="brick headline">
        <h2>Reset game data.</h2>
        <p>
          Open OutBrick &rsaquo; Settings &rsaquo; Delete My Data. This resets local progress, coins,
          boosters, preferences, and stats and requests removal of the iCloud save. Build 18 also
          removes any iCloud recovery copy. Sync requires iCloud availability; another device with an
          older save can upload it again. The action cannot be undone. Apple&rsquo;s purchase records,
          Game Center data, device backups, and media you saved or shared are managed separately.
        </p>
      </div>

      <section className="brick">
        <h2>Advertising choices</h2>
        <p>
          OutBrick shows rewarded video only — an ad plays when, and only when, you press a button
          asking for a life, an undo, or more moves. There are three controls, and all three are yours:
        </p>
        <ul className="points">
          <li>
            <b>Never watch one.</b> Declining costs nothing. Every reward, level and price is identical
            whether you watch or not; waiting for a life to come back is always free.
          </li>
          <li>
            <b>Change your consent.</b> In the European Economic Area, the United Kingdom and
            Switzerland, Google&rsquo;s consent form appears before the first ad and can be reopened at
            any time from Advertising choices in OutBrick Settings. iOS separately asks whether the app
            may use the advertising identifier for tracking; you can change that answer in Settings
            &rsaquo; Privacy &amp; Security &rsaquo; Tracking, and saying no changes nothing about the
            game.
          </li>
          <li>
            <b>Turn them off for good.</b> Remove Ads, or the Brick Pass, stops OutBrick requesting ads
            at all — and still pays you the rewards those videos would have given, so the purchase never
            costs you anything you had.
          </li>
        </ul>
        <p>
          What Google collects when an ad is requested is set out in the{' '}
          <a href="/privacy#ads">privacy policy</a>.
        </p>
      </section>

      <section className="brick">
        <h2>OutBrick data</h2>
        <p>
          The developer does not receive gameplay or face data, create game accounts, run analytics in
          the game, or sell data. The game stores progress and preferences locally so the board can work
          offline. When available, iCloud also syncs progress, profile choices, and the colour-blind
          preference to your own Apple Account. Manage the app&rsquo;s iCloud access in device Settings.
          Apple controls separate device backups.
        </p>
      </section>

      <section className="brick">
        <h2>Camera and face data</h2>
        <p>
          The camera-free update (build 18) removes face tracking. In an older iOS build, turn off
          &ldquo;Look at me (camera)&rdquo; in OutBrick Settings or revoke Camera permission in device
          Settings to prevent camera access. Face values are processed temporarily on the device, not
          saved as a dataset or sent to us. Read the <a href="/privacy#face-data">face-data policy</a>{' '}
          for the exact information, uses, storage, and retention practices in earlier builds.
        </p>
      </section>

      <section className="brick">
        <h2>Game Center</h2>
        <p>
          If you use Game Center, Apple manages the associated account, leaderboards, achievements, and
          challenges. You can sign out of Game Center or change its permissions in iOS Settings.
          Requests about Game Center account data should be directed to Apple.
        </p>
      </section>

      <section className="brick">
        <h2>Purchases and receipts</h2>
        <p>
          Apple processes App Store and in-app purchases. OutBrick does not receive your payment card
          information. Use Apple&rsquo;s{' '}
          <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">Report a Problem</a>{' '}
          service for a refund or billing request, and use Restore Purchases in the app when you need to
          restore an eligible purchase.
        </p>
      </section>

      <section className="brick">
        <h2>Questions or deletion requests</h2>
        <p>
          Because OutBrick has no account database, there is normally no server profile for us to
          retrieve or delete. If you think we have received personal information through a support
          message, use the <a href="/contact">OutBrick contact form</a> and tell us what you want
          removed. Please do not send payment details, passwords, or government identifiers.
        </p>
      </section>

      <Pills items={['No account', 'Apple-managed services', 'Ads only when you ask', 'Local reset in Settings']} />
    </LegalPage>
  );
}
