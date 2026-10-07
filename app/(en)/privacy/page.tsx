import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { LegalPage, Pills } from '../../legal-page';
import { facePrivacy } from '../../../lib/face-privacy';

export const metadata: Metadata = pageMetadata({
  path: '/privacy',
  title: 'OutBrick privacy policy: data, ads and choices',
  description:
    'The OutBrick privacy policy: no analytics, what the rewarded-ad SDK collects, what the optional OutBrick Community stores, and how to make your choices.',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="OutBrick privacy policy"
      title="Your board stays yours."
      summary="OutBrick is designed to work entirely on your device. This policy explains what the app does and does not collect, how Apple services fit in, what the optional OutBrick Community on this website stores, and how to make privacy choices."
      updated="7 October 2026"
      current="/privacy"
    >
      <div className="brick headline">
        <h2>No accounts in the app, no analytics, and no ad you did not ask for.</h2>
        <p>
          The app has no accounts, and there is no analytics SDK in OutBrick. The developer does not
          receive your gameplay or face data. The app stores gameplay data locally and can sync
          progress through your own iCloud account. There is one third party in the app:
          Google&rsquo;s advertising SDK, which runs only when you choose to watch a rewarded video in
          exchange for something you pressed a button to ask for — a life, undos, more moves, a booster
          for the board ahead, the clear card&rsquo;s coins paid again, or a second spin of the Brick
          Wheel. It is described in full below, and buying Remove Ads or holding the Brick Pass switches
          it off entirely.
        </p>
        <p>
          The one account we run is optional and lives on this website: the OutBrick Community, our
          forum. It is described in its own section below, and joining it or not changes nothing in the
          game.
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
          directly, and the site gained three more forms.
        </p>
        <p>
          The contact form, the <a href="/affiliates">affiliate programme</a> application, the job
          applications on our <a href="/careers">careers</a> pages and the{' '}
          <a href="/newsletter">newsletter</a> sign-up send what you type to OutBrick. They
          are handled by Netlify, the company that hosts this website, through its Netlify Forms service:
          Netlify receives each submission on our behalf, stores it in our account, screens it for spam
          (using its spam-filtering provider, Akismet) and emails it to us. Netlify acts as our service
          provider under its own <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">privacy policy</a>.
          The acknowledgement and newsletter emails described below are sent through Resend; no other
          third party receives it, and nothing is sent until you press the button.
        </p>
        <ul className="points">
          <li><b>Contact form:</b> the topic, your name, email address and message, and — only if you fill them in — your device, iOS version and app version.</li>
          <li><b>Affiliate application:</b> your name, email address, the links to your channels, an audience-size range, your country, how you would promote OutBrick, your preferred handle and the code proposed from it.</li>
          <li><b>Job application:</b> the role, your name, email address, a link to your portfolio or profile, where you live and your time zone, and your note.</li>
          <li><b>Newsletter:</b> your email address, the language you chose for the emails, and a record that you ticked the consent box. We use it only to send occasional emails about new villages and major OutBrick updates, about once a month at most. Sign-up is double opt-in: your address joins the list only when you press the button in the confirmation email, which works for 7 days. Every newsletter email has a one-click unsubscribe link that stops them at once; you can also unsubscribe by replying to any newsletter email or through the <a href="/contact?topic=privacy">contact form</a>, and we delete your address from the list. Signing up or not changes nothing in the app.</li>
          <li><b>Emails we send you:</b> after the contact form, an affiliate application or a job application, one acknowledgement email to the address you gave, with a copy of what you sent; for the newsletter, the confirmation email and then a welcome email. They are sent through Resend, our email delivery provider, which acts as our processor under its own <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>. Resend receives the address, the language and the content of each email and keeps a delivery log; for newsletter subscribers it also stores the address, the date you confirmed and whether you have unsubscribed. Open and click tracking are switched off, and our Resend account sends from the EU (Ireland).</li>
          <li><b>With every form:</b> your consent tick, the language of the page you used, and the technical details Netlify records with a submission, such as the time, your IP address and your browser&rsquo;s user agent, which it uses to keep out spam.</li>
        </ul>
        <p>
          We use these details only for the reason you sent them: to answer your message, to review and
          run your affiliate application, to consider you for a role, or to send the newsletter you asked
          for. We do not sell them, use them for advertising, or add you to a mailing list you did not
          sign up for.
        </p>
        <p>
          <b>How long we keep them.</b> We delete form submissions, and the emails they arrive as, within
          12 months of our last exchange with you — unless there is an ongoing relationship that needs
          them: a support case still open, an approved affiliate (for as long as they take part, plus
          what tax and accounting law requires for payments), or someone we hire.
        </p>
        <p>
          <b>Deleting them sooner.</b> Ask us through the <a href="/contact?topic=privacy">contact form</a>{' '}
          with the topic set to Privacy, or by replying to any email from us, and we will delete your submissions from Netlify and
          from our inbox and confirm when it is done. You can also ask for a copy of what we hold, or for
          a correction.
        </p>
      </section>

      <section className="brick" id="community">
        <h2>The OutBrick Community</h2>
        <p>
          This section is new as of 7 October 2026. The OutBrick Community is the forum, support forum,
          FAQ and search on this website. Anyone can read it without an account; you need one only to
          post, vote, follow threads or report a post. The community is separate from the app, and
          nothing you do in it is linked to your game progress.
        </p>
        <ul className="points">
          <li><b>Your account:</b> a display name, which is public; your email address, which is never shown to anyone else; the language you chose; an optional bio; your email preferences; and your role, such as member or moderator. You can sign in with a one-time link sent to your email address, or with Apple, Google or Facebook. If you use one of those, we store the user id that company gives us for you and the email address it shares with us; we never see your password. Apple&rsquo;s Hide My Email relay addresses work like any other address.</li>
          <li><b>What you do in the community:</b> your threads and posts, including earlier versions of a post you have edited, your votes, the threads and categories you follow, how far you have read each thread, your notifications, the reports you make, and any moderation action taken on your posts or your account.</li>
          <li><b>Bug reports:</b> a bug report can also include your device model, iOS version, app version and the assistive technologies you use. Each of these is optional, and only what you choose to fill in is stored.</li>
          <li><b>Signed-in sessions:</b> for each browser you sign in on, when the session started, when it expires and the browser&rsquo;s user agent, so the sign-in can be recognised. The token that keeps you signed in is stored only as a one-way hash.</li>
          <li><b>IP addresses:</b> the community&rsquo;s database does not store them. To slow down spam and abuse, the community briefly keeps a salted one-way hash of your IP address to count requests, and records older than two days are deleted.</li>
          <li><b>Public posts:</b> everything you post — threads, replies, your display name and your bio — is public. Anyone can read it without an account, and search engines index it. Please do not post your own or anyone else&rsquo;s personal information.</li>
        </ul>
        <p>
          <b>Who processes it.</b> Netlify, which hosts this website, runs the community&rsquo;s
          functions and its database, Netlify Database, a Postgres database run with Neon. Resend
          delivers the community&rsquo;s emails. Both act as our service providers, as described in the
          forms section above. If you choose to sign in with Apple, Google or Facebook, that company
          handles the sign-in under its own privacy policy and shares with us only the user id and
          email address described above. Nobody else receives community data, and we do not sell it
          or use it for advertising.
        </p>
        <p>
          <b>Netlify&rsquo;s request logs.</b> Like any web host, Netlify records technical details of
          the requests made to this website and its functions — such as the time, the address
          requested, your IP address and your browser&rsquo;s user agent — to deliver the site, keep it
          secure and investigate problems. These logs are kept by Netlify for a limited period under its
          own policy. We read them only to diagnose errors, and never to identify or profile visitors.
        </p>
        <p>
          <b>Emails.</b> We email you sign-in links when you ask for one, a confirmation when you add or
          change your email address, a welcome when you join, and notifications: replies to you,
          mentions of your name, new posts in threads and categories you follow, a status change on
          your bug report or idea, your answer being marked as the solution, new OutBrick releases, and
          moderation notices about your posts or your account. You can switch each kind of
          notification off in your community settings, and every notification email has a one-click
          unsubscribe link.
        </p>
        <p>
          <b>How long we keep it.</b> Your account and what you post stay for as long as you keep the
          account. A session ends when you sign out, or after 30 days without a visit. Sign-in links
          stop working after 20 minutes.
        </p>
        <p>
          <b>Your choices and rights.</b> In your community settings you can change your name, bio,
          language and email preferences, download everything we hold about your account as a JSON
          file, and delete your account yourself. You can also edit or delete your own posts at any
          time. Deleting your account blanks your name, email address and bio, removes your sign-in
          links, sessions, follows and notifications, and signs you out. Your posts stay, shown as
          written by a Former member, so the conversations they belong to still make sense. To have
          specific posts erased as well, ask us through the contact form with the topic set to Privacy,
          or reply to any community email, and we will remove them and confirm when it is done.
        </p>
        <p>
          <b>What stays after deletion.</b> Your votes, the reports you made and the edit history of
          your posts stay attached to the blanked Former member account. Removing them would change
          vote counts and leave gaps in threads, and moderators need the record of what was reported and
          changed to handle disputes and repeated abuse fairly. None of it is linked to your name or
          email address any more.
        </p>
        <p>
          <b>Who can join.</b> You must be at least 16 to create a community account, or older if the
          age of digital consent where you live is higher. The game itself is rated 4+ and needs no
          account.
        </p>
      </section>

      <section className="brick" id="community-next">
        <h2>Coming to the community</h2>
        <p>
          These features are planned for the OutBrick Community. They are described here now so that
          this policy is accurate on the day each one arrives; until a feature is live, none of the data
          below is collected.
        </p>
        <ul className="points">
          <li><b>Images in posts:</b> images you attach to a post are stored with Netlify Blobs, Netlify&rsquo;s file storage. Each image needs a text description (alt text) for people who cannot see it, and the location and other metadata embedded in the file are removed when you upload it. An image is public, like the post it belongs to.</li>
          <li><b>Reply by email:</b> you will be able to answer a notification email to post your reply. Resend receives and processes the incoming email on our behalf, and we post its text as your reply, under your account.</li>
          <li><b>Passkeys:</b> if you sign in with a passkey, we store only its public key and a credential id. The private key never leaves your device or password manager, and no fingerprint or face data is ever sent to us.</li>
          <li><b>Translation on request:</b> if you ask for a post to be translated, the text of that post is sent to an AI translation provider through Netlify&rsquo;s AI Gateway, and the translation is shown to you. Nothing is sent unless someone asks for a translation, and your account details are never part of it.</li>
          <li><b>Weekly digest:</b> an optional weekly email summarising what happened in the community. It is off unless you switch it on, and it has the same one-click unsubscribe as every notification email.</li>
        </ul>
      </section>

      <section className="brick" id="cookies">
        <h2>Cookies</h2>
        <p>
          This website uses no advertising or analytics cookies, and reading it sets none at all. The
          OutBrick Community uses two first-party cookies, both strictly necessary for signing in, and
          neither is used to follow you around the web.
        </p>
        <ul className="points">
          <li><b>Session cookie:</b> set when you sign in to the community. It holds a random token that keeps you signed in, cannot be read by scripts on the page (it is HttpOnly), and lasts 30 days, renewed while you keep visiting. Signing out removes it.</li>
          <li><b>Sign-in cookie:</b> when you start signing in with Google or Facebook, a cookie that lasts at most 10 minutes ties the sign-in to the browser that started it, so nobody else can finish it. It is removed as soon as the sign-in completes.</li>
        </ul>
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
          or the <a href="/contact?topic=privacy">contact form</a>.
        </p>
        <p>
          Your OutBrick Community account is kept and deleted as described in the community section
          above.
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
        <p>
          The OutBrick Community on this website is separate from the game and is not meant for
          children: you must be at least 16 to create an account, or older if the age of digital
          consent where you live is higher. If you believe a child has created an account, tell us
          through the contact form and we will delete it.
        </p>
      </section>

      <section className="brick">
        <h2>Third parties and changes</h2>
        <p>
          Apple services, App Store purchases, Game Center, iCloud sync, and iCloud backups are operated
          under their own terms and privacy policies. Google is the one advertising partner in the app,
          described above. On this website, Netlify hosts the pages, handles the forms and runs the
          OutBrick Community and its database, and Resend sends the emails that answer the forms and
          the community&rsquo;s emails, all described above. If you sign in to the community with
          Apple, Google or Facebook, that company handles the sign-in under its own terms and privacy
          policy. We do not add a third-party analytics or advertising partner without updating
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
