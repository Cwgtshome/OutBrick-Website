import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { LegalPage, Pills } from '../../legal-page';
import { facePrivacy } from '../../../lib/face-privacy';

export const metadata: Metadata = pageMetadata({
  path: '/privacy',
  title: 'OutBrick privacy policy: data, ads and choices',
  description:
    'The OutBrick privacy policy: no accounts and no analytics, what the rewarded-ad SDK collects, and how to change your advertising choices.',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="OutBrick privacy policy"
      title="Your board stays yours."
      summary="OutBrick is designed to work entirely on your device. This policy explains what the app does and does not collect, how Apple services fit in, and how to make privacy choices."
      updated="24 September 2026"
      current="/privacy"
    >
      <div className="brick headline">
        <h2>No accounts, no analytics, and no ad you did not ask for.</h2>
        <p>
          We do not operate accounts, and there is no analytics SDK in OutBrick. The developer does not
          receive your gameplay or face data. The app stores gameplay data locally and can sync
          progress through your own iCloud account. There is one third party in the app:
          Google&rsquo;s advertising SDK, which runs only when you choose to watch a rewarded video in
          exchange for something you pressed a button to ask for — a life, undos, more moves, a booster
          for the board ahead, the clear card&rsquo;s coins paid again, or a second spin of the Brick
          Wheel. It is described in full below, and buying Remove Ads or holding the Brick Pass switches
          it off entirely.
        </p>
      </div>

      <section className="brick" id="ads">
        <h2>Rewarded video advertising</h2>
        <p>
          This section is new as of 15 September 2026. Before that date OutBrick contained no
          advertising SDK at all, and this policy said so.
        </p>
        <p>
          OutBrick shows rewarded video only. There are no banners, no interstitials, and nothing plays
          that you did not press a button to see. There are six places where a video is offered, and
          every one of them is something you asked for: one life, five more moves at the move limit,
          two undos, one booster armed for the board you are about to start, the clear card&rsquo;s
          coins paid again, and a second spin of the Brick Wheel. Each of the six carries its own daily
          cap — eight, six, eight, four, four and one — so thirty-one rewarded videos a day is the most
          the game will ever pay for. Declining costs you nothing — every reward, level, and price in
          the game is identical whether you watch or not.
        </p>
        <p>
          The ads are served by Google (AdMob). When an ad is requested, the Google Mobile Ads SDK may
          collect and process, on Google&rsquo;s own behalf as an independent controller, your
          device&rsquo;s advertising identifier, device and app information, coarse location derived
          from your IP address, information about your interaction with the advertisement, and
          performance and diagnostic data. Google&rsquo;s handling of that information is governed by
          the <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener noreferrer">Google Business Data Responsibility</a> and <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from sites or apps that use our services</a>. Some of that
          processing is used for advertising measurement and personalisation, which Apple and
          applicable law describe as tracking.
        </p>
        <p>
          Because of that, two consents apply. If you are in the European Economic Area, the United
          Kingdom or Switzerland, OutBrick shows Google&rsquo;s consent form before any ad is requested,
          and you can reopen it at any time from Advertising choices in OutBrick Settings. Separately,
          iOS asks for your permission before the app may use the advertising identifier for tracking;
          saying no leaves every part of the game unchanged and simply makes the ads less relevant. You
          can change that answer at any time in Settings &rsaquo; Privacy &amp; Security &rsaquo;
          Tracking.
        </p>
        <p>
          Buying Remove Ads, or holding the Brick Pass, stops OutBrick from requesting ads at all — and
          the rewards those videos would have paid are granted to you anyway, so paying never costs you
          a reward. We do not sell or share your personal information for money.
        </p>
      </section>

      <section className="brick">
        <h2>Information stored on your device</h2>
        <p>
          OutBrick stores gameplay state such as level progress, coins, boosters, settings,
          accessibility preferences, and local statistics in the app&rsquo;s local storage. This
          information is used to provide the game and is not transmitted to OutBrick. It may be included
          in an iCloud device backup if you have enabled that Apple feature.
        </p>
      </section>

      <section className="brick">
        <h2>iCloud progress sync</h2>
        <p>
          When iCloud is available, OutBrick automatically synchronizes progress through your Apple
          Account&rsquo;s iCloud key-value storage. This includes level progress, coins and spending
          totals, boosters, streaks, rewards, purchases and unlocks, player name and avatar, gameplay
          statistics, and the colour-blind preference. Sound, music, haptics, notification settings,
          per-device retry counts, and detailed local play summaries are not included. The developer
          cannot access this private iCloud save. It is separate from an iCloud device backup. You can
          manage OutBrick&rsquo;s iCloud access in your device&rsquo;s Apple Account settings.
        </p>
      </section>

      {facePrivacy.map((section) => (
        <section className="brick" key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}

      <section className="brick">
        <h2>Information sent to Apple services</h2>
        <p>
          If you choose to use Game Center, Apple processes the information needed for leaderboards,
          achievements, activities, and challenges under Apple&rsquo;s policies. OutBrick submits
          gameplay scores and achievements and can display your Game Center name, profile photo, and
          friends&rsquo; leaderboard names and scores. Some leaderboard information is also displayed in
          the app&rsquo;s widgets. If you buy or restore an in-app purchase, Apple processes the
          transaction and receipt. OutBrick does not see or store your payment card details.
        </p>
      </section>

      <section className="brick">
        <h2>Information we receive through support</h2>
        <p>
          You can reach us through the contact form on this website (described in the next section) or by
          emailing us directly. Either way, we receive the information you choose to include, such as your
          name, email address, device model, iOS version, app version, level number, and a description or
          screenshot of a problem. We use it to answer you and diagnose the issue. Please do not send
          passwords, payment details, government identifiers, or sensitive personal information.
        </p>
      </section>

      <section className="brick" id="forms">
        <h2>Forms on this website</h2>
        <p>
          This section is new as of 24 September 2026. Before that date the website&rsquo;s contact form
          only opened a draft in your own mail app and sent nothing itself; it now sends your message
          directly, and the site gained two more forms.
        </p>
        <p>
          The contact form, the <a href="/affiliates">affiliate programme</a> application and the job
          applications on our <a href="/careers">careers</a> pages send what you type to OutBrick. They
          are handled by Netlify, the company that hosts this website, through its Netlify Forms service:
          Netlify receives each submission on our behalf, stores it in our account, screens it for spam
          (using its spam-filtering provider, Akismet) and emails it to us. Netlify acts as our service
          provider under its own <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          No other third party receives it, and nothing is sent until you press the button.
        </p>
        <ul className="points">
          <li><b>Contact form:</b> the topic, your name, email address and message, and — only if you fill them in — your device, iOS version and app version.</li>
          <li><b>Affiliate application:</b> your name, email address, the links to your channels, an audience-size range, your country, how you would promote OutBrick, your preferred handle and the code proposed from it.</li>
          <li><b>Job application:</b> the role, your name, email address, a link to your portfolio or profile, where you live and your time zone, and your note.</li>
          <li><b>With every form:</b> your consent tick, and the technical details Netlify records with a submission, such as the time, your IP address and your browser&rsquo;s user agent, which it uses to keep out spam.</li>
        </ul>
        <p>
          We use these details only for the reason you sent them: to answer your message, to review and
          run your affiliate application, or to consider you for a role. We do not sell them, use them
          for advertising, or add you to a mailing list.
        </p>
        <p>
          <b>How long we keep them.</b> We delete form submissions, and the emails they arrive as, within
          12 months of our last exchange with you — unless there is an ongoing relationship that needs
          them: a support case still open, an approved affiliate (for as long as they take part, plus
          what tax and accounting law requires for payments), or someone we hire.
        </p>
        <p>
          <b>Deleting them sooner.</b> Ask us through the <a href="/contact?topic=privacy">contact form</a>{' '}
          with the topic set to Privacy, or by email, and we will delete your submissions from Netlify and
          from our inbox and confirm when it is done. You can also ask for a copy of what we hold, or for
          a correction.
        </p>
      </section>

      <section className="brick">
        <h2>Retention and deletion</h2>
        <p>
          We keep support correspondence only for as long as reasonably needed to respond, maintain
          records, or resolve a recurring issue, subject to legal obligations. Delete My Data in
          OutBrick Settings resets this device&rsquo;s progress and local play summaries and requests
          removal of its iCloud save, including any recovery copy in build 18. iCloud changes require
          service availability and may take time to reach other devices; a device that still has an
          older save can sync it again. Apple controls any separate device backups, purchase records,
          and Game Center data. This action does not delete screenshots or videos you chose to save to
          Photos or share. No face-data files are created by the tracking feature. For requests about
          information in a support message, use our <a href="/privacy-choices">privacy choices</a> page
          or email us.
        </p>
      </section>

      <section className="brick">
        <h2>Children</h2>
        <p>
          OutBrick is rated 4+ and the game does not send personal gameplay or face information to the
          developer. Please avoid including children&rsquo;s personal information in support messages.
          The game has no public chat and no account registration. It does contain rewarded video
          advertising, described above; advertising served to this app is configured as child-directed
          where Apple or applicable law requires it, which restricts it to non-personalised ads and
          prevents the use of an advertising identifier.
        </p>
      </section>

      <section className="brick">
        <h2>Third parties and changes</h2>
        <p>
          Apple services, App Store purchases, Game Center, iCloud sync, and iCloud backups are operated
          under their own terms and privacy policies. Google is the one advertising partner in the app,
          described above. On this website, Netlify hosts the pages and handles the forms, also described
          above. We do not add a third-party analytics or advertising partner without updating
          this policy and the relevant App Store privacy information first — which is what this revision
          is. We may update this page when the app or its practices change; the effective date above
          will show the latest revision.
        </p>
      </section>

      <section className="brick">
        <h2>Contact</h2>
        <p>
          Questions about this policy? Use the <a href="/contact">OutBrick contact form</a> or visit{' '}
          <a href="/privacy-choices">User privacy choices</a>.
        </p>
      </section>

      <Pills items={['Device-first progress', 'Apple-managed services', 'Ads only when you ask']} />
    </LegalPage>
  );
}
