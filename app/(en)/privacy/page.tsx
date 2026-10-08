import { currentGameCopy } from '../../../lib/i18n/current-game';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { LegalPage, Pills } from '../../legal-page';
import { facePrivacy } from '../../../lib/face-privacy';

export const metadata: Metadata = pageMetadata({
  path: '/privacy',
  title: 'OutBrick privacy policy: data, ads and choices',
  description:
    'OutBrick privacy policy: no analytics in the app, website analytics only with consent, what ads, the community and our emails store, and your choices.',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="OutBrick privacy policy"
      title="Your board stays yours."
      summary="OutBrick is designed to work entirely on your device. This policy explains what the app does and does not collect, how Apple services fit in, what this website and the optional OutBrick Community store, what our emails record, and how to make privacy choices."
      updated="8 October 2026"
      current="/privacy"
    >
      <div className="brick headline">
        <h2>No accounts in the app, no analytics in the app, and no ad you did not ask for.</h2>
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
        <p>
          This website is separate from the app. It measures visits with Google Analytics only if you
          accept it in the cookie banner; until then nothing loads from Google. Our newsletter emails
          record opens and clicks. Both are explained below, with how to say no.
        </p>
      </div>

      <section className="brick" id="changes">
        <h2>What changed on 8 October 2026</h2>
        <p>
          This revision covers four changes to the website and our emails. Nothing changed in the app:
          it still has no analytics.
        </p>
        <ul className="points">
          <li><b>Website analytics:</b> Google Analytics can now measure visits to this website, but only if you accept it in the cookie banner. Nothing loads from Google until you do, and you can change your answer at any time.</li>
          <li><b>Newsletter open and click tracking:</b> OutBrick News emails now record whether they were opened and which links were clicked, so that we can stop writing to people who no longer read them.</li>
          <li><b>Support cases, applications and newsletter topics:</b> contact-form messages now become support cases that the team can reply to, applications keep the decision we made, and newsletter readers can choose topics. Each is kept in our database for a set period, listed below.</li>
          <li><b>Sign-in alerts:</b> the community now remembers which browser and operating system you sign in with, so that it can warn you about a sign-in from a new one.</li>
        </ul>
      </section>

      <section className="brick" id="ads">
        <h2>Rewarded video advertising</h2>
        <p>
          This section is new as of 15 September 2026. Before that date OutBrick contained no
          advertising SDK at all, and this policy said so.
        </p>
        <p>
          {currentGameCopy.en.ads}
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
          <li><b>Newsletter:</b> your email address, the language you chose for the emails, and a record that you ticked the consent box. Sign-up is double opt-in: your address joins the list only when you press the button in the confirmation email, which works for 7 days. What we keep while you are subscribed, and how to change your topics or unsubscribe, is set out in the next two sections. Signing up or not changes nothing in the app.</li>
          <li><b>Emails we send you:</b> after the contact form, an affiliate application or a job application, an acknowledgement email to the address you gave, with a copy of what you sent, and later the team&rsquo;s replies, the decision on an application, a note when a fix you reported ships, and one short &ldquo;Did we solve it?&rdquo; email; for the newsletter, the confirmation email and then the welcome letters. They are sent through Resend, our email delivery provider, which acts as our processor under its own <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>. Resend receives the address, the language and the content of each email and keeps a delivery log; for newsletter subscribers it also stores the address, the date you confirmed and whether you have unsubscribed. Our Resend account sends from the EU (Ireland), and it can record opens and clicks, as explained under Email open and click tracking below.</li>
          <li><b>With every form:</b> your consent tick, the language of the page you used, and the technical details Netlify records with a submission, such as the time, your IP address and your browser&rsquo;s user agent, which it uses to keep out spam.</li>
        </ul>
        <p>
          We use these details only for the reason you sent them: to answer your message, to review and
          run your affiliate application, to consider you for a role, or to send the newsletter you asked
          for. We do not sell them, use them for advertising, or add you to a mailing list you did not
          sign up for.
        </p>
        <p>
          <b>How long we keep them.</b> We delete the copies of form submissions that Netlify Forms
          stores, and the emails they arrive as, within 12 months of our last exchange with you — unless
          there is an ongoing relationship that needs them: a support case still open, an approved
          affiliate (for as long as they take part, plus what tax and accounting law requires for
          payments), or someone we hire. The records kept in our own database have their own periods,
          set out in the next section.
        </p>
        <p>
          <b>Deleting them sooner.</b> Ask us through the <a href="/contact?topic=privacy">contact form</a>{' '}
          with the topic set to Privacy, or by replying to any email from us, and we will delete your submissions from Netlify and
          from our inbox and confirm when it is done. You can also ask for a copy of what we hold, or for
          a correction.
        </p>
      </section>

      <section className="brick" id="website-data">
        <h2>What our website&rsquo;s database keeps</h2>
        <p>
          Since 8 October 2026 the contact form, the applications and the newsletter also keep a record
          in Netlify Database, the database that runs the OutBrick Community, so that a reply, a decision
          or a welcome letter can refer back to what you sent. Netlify runs it for us in the United States
          (US East). Each record has a fixed lifetime, and an automatic job deletes it when that time is up.
        </p>
        <ul className="points">
          <li><b>Support cases:</b> when you use the contact form, we keep your message, name, email address, language and topic, the device, app and iOS versions you gave us, a case reference, the team&rsquo;s replies, the case&rsquo;s status, the version a fix shipped in, and your answer to &ldquo;Did we solve it?&rdquo; with any comment you add. We keep a case for 24 months after it is closed or resolved, then delete it.</li>
          <li><b>Affiliate and job applications:</b> what you submitted and the decision we made. We keep an application for 24 months after the decision, then delete it.</li>
          <li><b>Newsletter subscription:</b> your address and language, the date you confirmed, the topics you chose (new versions, tips and guides, events and seasons), how far you are through the welcome letters, the date you last opened or clicked a newsletter, and whether we have asked you &ldquo;Still want these?&rdquo;. We keep this while you are subscribed and delete it 30 days after you unsubscribe or are removed.</li>
          <li><b>Scheduled emails:</b> emails due later — welcome letters, &ldquo;Did we solve it?&rdquo; requests and notices — wait in a queue with your address and language. Each is deleted no later than 90 days after it is sent or cancelled.</li>
        </ul>
        <p>
          The device record used for community sign-in alerts is described in the community section
          below.
        </p>
      </section>

      <section className="brick" id="email-tracking">
        <h2>Email open and click tracking</h2>
        <p>
          This section is new as of 8 October 2026. OutBrick News, our newsletter, records whether each
          email was opened and which of its links were clicked. Resend, which sends it from the EU
          (Ireland), adds a tiny invisible image that is fetched when the email is displayed, and routes
          each link through Resend before it takes you to the page.
        </p>
        <p>
          We use this for one thing: to notice readers who no longer read the letters. If 120 days pass
          without you opening or clicking any newsletter, we send one email asking &ldquo;Still want
          these?&rdquo;. If you do not answer within 14 days, we take you off the list. We do not use it
          to build a profile of you, and nobody but Resend receives it.
        </p>
        <p>
          Our legal basis is our legitimate interest in not emailing people who no longer read our
          letters. You can object at any time: unsubscribe with the link in every newsletter, or change
          your topics on the preferences page it links to.
        </p>
        <p>
          Opens are approximate. Some mail apps, such as Apple Mail with Mail Privacy Protection, load
          images in advance, so an email can count as opened when you never read it; if your mail app
          blocks images, an open is never recorded.
        </p>
        <p>
          Resend&rsquo;s tracking is switched on for our whole sending domain, so opens and clicks may
          also be recorded on our other emails, such as support replies and account notices. We use those
          records only to diagnose delivery problems; only newsletter opens and clicks count towards the
          check described above.
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
          <li><b>Devices you sign in from:</b> the browser and operating-system family you sign in with, such as &ldquo;Safari on macOS&rdquo; — never your IP address or a device identifier — so that we can email you when your account is used from a new one. This record is deleted with your account.</li>
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
          <b>Security emails.</b> We also email you when your account is signed in to from a new browser
          or operating system, when a passkey is added, when your account is deleted, and with the
          download link for your data when you ask for one. These cannot be switched off while you have
          an account, because they protect it.
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
        <h2>Community features</h2>
        <p>
          These OutBrick Community features are live, except reply by email, which is not switched on yet; until it is, none of its data is collected.
        </p>
        <ul className="points">
          <li><b>Images in posts:</b> images you attach to a post are stored with Netlify Blobs, Netlify&rsquo;s file storage. Each image needs a text description (alt text) for people who cannot see it, and the location and other metadata embedded in the file are removed when you upload it. An image is public, like the post it belongs to.</li>
          <li><b>Reply by email:</b> you will be able to answer a notification email to post your reply. Resend receives and processes the incoming email on our behalf, and we post its text as your reply, under your account.</li>
          <li><b>Passkeys:</b> if you sign in with a passkey, we store only its public key and a credential id. The private key never leaves your device or password manager, and no fingerprint or face data is ever sent to us.</li>
          <li><b>Translation on request:</b> if you ask for a post to be translated, the text of that post is sent to an AI translation provider through Netlify&rsquo;s AI Gateway, and the translation is shown to you. Nothing is sent unless someone asks for a translation, and your account details are never part of it.</li>
          <li><b>Weekly digest:</b> an optional weekly email summarising what happened in the community. It is off unless you switch it on, and it has the same one-click unsubscribe as every notification email.</li>
        </ul>
      </section>

      <section className="brick" id="analytics">
        <h2>Website analytics</h2>
        <p>
          This section is new as of 8 October 2026, and it is about this website only. The OutBrick app
          contains no analytics SDK, and nothing described here happens in the app.
        </p>
        <p>
          With your consent, this website uses Google Analytics 4, provided by Google Ireland Limited
          and Google LLC, which process the data on our behalf as our processor. Until you press Accept
          in the cookie banner, nothing is loaded from Google and no analytics cookie is set: Google&rsquo;s
          consent mode starts with every kind of storage denied. If you decline, or never answer, the
          site works exactly the same.
        </p>
        <ul className="points">
          <li><b>What is measured:</b> the pages you view, the page that brought you here, your type of device and browser, your approximate country and city, which Google works out itself, and clicks on App Store buttons, sending the newsletter or contact form, and links to our social channels.</li>
          <li><b>What is not:</b> Google Analytics 4 does not log or store IP addresses. Google signals and ad personalisation are switched off, so the data is not combined with your Google account or used for advertising.</li>
          <li><b>Why:</b> to understand which pages help people, and to improve the site.</li>
          <li><b>Legal basis:</b> where EU or UK law applies, your consent. Withdrawing it stops future measurement; it does not undo what was measured before.</li>
          <li><b>How long:</b> analytics data is kept for 14 months at most, then deleted.</li>
          <li><b>Where:</b> Google may process the data outside your country, including in the United States.</li>
        </ul>
        <p>
          You can change your answer at any time with this button, or from the Privacy choices page.
        </p>
        <div className="act">
          <button type="button" className="btn" data-ob-consent-open>Change my analytics choice</button>
        </div>
      </section>

      <section className="brick" id="cookies">
        <h2>Cookies and browser storage</h2>
        <p>
          Reading this website sets no cookies unless you accept analytics. The OutBrick Community uses
          two first-party cookies, both strictly necessary for signing in, and neither is used to follow
          you around the web. Everything the site keeps in your browser is listed here.
        </p>
        <ul className="points">
          <li><b>Session cookie:</b> set when you sign in to the community. It holds a random token that keeps you signed in, cannot be read by scripts on the page (it is HttpOnly), and lasts 30 days, renewed while you keep visiting. Signing out removes it.</li>
          <li><b>Sign-in cookie:</b> when you start signing in with Google or Facebook, a cookie that lasts at most 10 minutes ties the sign-in to the browser that started it, so nobody else can finish it. It is removed as soon as the sign-in completes.</li>
          <li><b>Your analytics choice (<code>ob-consent</code>):</b> your answer to the cookie banner, kept in your browser&rsquo;s local storage for 12 months so that the banner does not ask again on every page. It is stored whichever answer you give.</li>
          <li><b>Google Analytics cookies (<code>_ga</code>, <code>_ga_&lt;container-id&gt;</code>):</b> first-party cookies that let Google Analytics recognise a returning browser, kept for about 13 months. They are set only after you accept analytics. You can delete them at any time in your browser settings.</li>
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
        <p>
          On the website, each kind of record has its own period, set out in the sections above: form
          submissions, support cases and applications, the newsletter, scheduled emails, and website
          analytics.
        </p>
      </section>

      <section className="brick" id="rights">
        <h2>Your rights</h2>
        <p>
          You can ask us for a copy of the personal information we hold about you, ask us to correct or
          delete it, and object to or restrict how we use it. Where we rely on your consent, you can
          withdraw it at any time. Ask through the contact form with the topic set to Privacy. If you are
          in the European Economic Area, the United Kingdom or Switzerland, you can also complain to your
          local data protection authority.
        </p>
        <p>Some of this you can do yourself, without asking us:</p>
        <ul className="points">
          <li><b>Your community data:</b> download everything we hold about your account from your community settings, straight away or as a link we email you that works for 24 hours, and delete the account yourself.</li>
          <li><b>The newsletter:</b> every newsletter links to a preferences page where you can choose your topics, change the language or unsubscribe.</li>
          <li><b>Website analytics:</b> change your answer at any time on the Privacy choices page.</li>
          <li><b>Game data:</b> Delete My Data in OutBrick Settings, described under Retention and deletion.</li>
        </ul>
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
          OutBrick Community and its database; Resend sends our emails and records newsletter opens and
          clicks; and Google Analytics measures visits when you allow it, all described above. If you
          sign in to the community with Apple, Google or Facebook, that company handles the sign-in under
          its own terms and privacy policy. We do not add a third-party analytics or advertising partner
          without updating this policy first, and, for the app, its App Store privacy information too;
          this revision adds Google Analytics on the website, and the app is unchanged. We may update this
          page when the app, the website or our practices change; the effective date above shows the
          latest revision, and the latest changes are summarised at the top.
        </p>
      </section>

      <section className="brick">
        <h2>Contact</h2>
        <p>
          Questions about this policy? Use the <a href="/contact">OutBrick contact form</a> or visit{' '}
          <a href="/privacy-choices">User privacy choices</a>.
        </p>
        <p>
          OutBrick decides how the personal information described in this policy is used, which makes it
          the controller under data protection law. By post: OutBrick · P.O. Box 330279.
        </p>
      </section>

      <Pills items={['Device-first progress', 'Apple-managed services', 'Ads only when you ask', 'Website analytics only with consent']} />
    </LegalPage>
  );
}
