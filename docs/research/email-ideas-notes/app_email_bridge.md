# App-to-Email Bridge: how account-less iOS games capture email, link progress, and orchestrate email with push and in-app

Research date: 9 October 2026. Scope: an iOS-only game with Game Center and no account system (OutBrick). "Requirement" = text in Apple's App Review Guidelines or Apple developer documentation. "Recommendation" = vendor or design guidance. The App Review Guidelines text below was fetched live from developer.apple.com on 9 Oct 2026; the fetched page showed no "last updated" date. A third-party tracker logged a 9 June 2026 revision about alternative distribution and child safety, which did not affect the clauses quoted here ([ConductAtlas](https://conductatlas.com/change/2026-06-09-apple-apple-app-store-review-guidelines-2759/)). That date is unverified against Apple's own changelog.

## 1. How games capture email, and what Apple policy allows (incentives, 3.1, 3.2.2, 4.8, 5.1.1, 5.1.2, Sign in with Apple relay)

### Takeaway
No current App Review Guideline forbids asking for an email or rewarding a player for subscribing to a newsletter. The hard rules are these:
- **5.1.1(v):** the app must not *require* personal information to function.
- **5.1.2(i):** the app must not reward *enabling system functionality*, which covers push notifications, so a reward for allowing push is banned.
- **3.2.2(x):** the app must not force store actions such as ratings.
- **5.1.1(i)–(ii):** collection needs a privacy policy, consent and a way to withdraw.

A reward for a confirmed newsletter subscription is common in shipped iOS games (June's Journey). It sits in a grey zone, permitted by omission rather than by an explicit rule.

### Cited Findings

**Apple requirements, verbatim from the current guidelines**

- **5.1.1(v), Account Sign-In:** "If your app doesn't include significant account-based features, let people use it without a login… Apps may not require users to enter personal information to function, except when directly relevant to the core functionality of the app or required by law." — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.1(ii), Permission:** "Apps that collect user or usage data must secure user consent for the collection… Apps must also provide the customer with an easily accessible and understandable way to withdraw consent." Paid functionality must not depend on granting access to this data. — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.1(i), Privacy Policies:** the policy must identify what data is collected and all its uses, confirm that third parties such as an email service provider give equal protection, and explain retention, deletion and how to revoke consent. — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.1(iii), Data Minimization:** "Apps should only request access to data relevant to the core functionality of the app and should only collect and use data that is required to accomplish the relevant task." — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.1(iv), Access:** apps must not "manipulate, trick, or force people to consent to unnecessary data access". — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **5.1.2(i): rewarding push opt-in is banned.** "Your app may not require users to enable system functionalities (e.g. push notifications, location services, tracking) in order to access functionality, content, use the app, or receive monetary or other compensation, including but not limited to gift cards and codes." — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **3.2.2(x):** "Apps must not force users to rate the app, review the app, download other apps, or other store-related actions in order to access functionality, content, or use of the app. Apps may otherwise incentivize users to take specific actions within apps (e.g. completing a level, watching an ad)." — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **Section 3 intro:** Apple says it will act against developers who "inflate your chart rankings with paid, incentivized, filtered, or fake feedback". Rewarding reviews is therefore out. Rewarding an email subscription is not mentioned. — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **3.1.1:** the fetched text contains no incentive or email language. The rules there concern unlocking digital content through IAP. — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **4.8, Login Services:**
  - Current text applies only to apps that "use a third-party or social login service… to set up or authenticate the user's primary account". Such apps must also offer an equivalent login that:
    - limits data to name and email,
    - "allows users to keep their email address private", and
    - does not collect interactions for advertising without consent.
  - The current text does not name Sign in with Apple. It describes the required properties instead.
  - An app with no login at all, or only its own email form, is not subject to 4.8.
  - Source: [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)

**Sign in with Apple private relay: deliverability requirements (Apple documentation)**

- **Register every source.** Register every sending domain, subdomain or address under Certificates, Identifiers & Profiles › Services › "Sign in with Apple for Email Communication". The limits are 32 sources for an individual account and 100 for an organisation. Registering `example.com` does not cover unregistered subdomains. — [Apple Developer: Configure private email relay service](https://developer.apple.com/help/account/capabilities/configure-private-email-relay-service/)
- **Authentication:** "All outbound emails sent through the Private Email Relay service must be authenticated with the Sender Policy Framework (SPF) and/or DomainKeys Identified Mail (DKIM) protocol." Apple recommends both.
  - **SPF:** the envelope-sender domain must exactly match a registered domain.
  - **DKIM:** the signature must include the From: address, and the DKIM domain must exactly match the From: domain.
  - Source: [Apple Developer](https://developer.apple.com/help/account/capabilities/configure-private-email-relay-service/)
- **Unregistered senders bounce:** "If you don't register all the source domains or emails that you use, email sent to the private relay service will result in a bounce message." — [Apple Developer](https://developer.apple.com/help/account/capabilities/configure-private-email-relay-service/)

**How games actually capture email (examples)**

- **June's Journey (Wooga):**
  - Entry points: an occasional pop-up, a green "Subscribe for Rewards" button in Settings › Notifications, and an In-Game Offers card.
  - Flow: the player enters an email, then confirms through a double opt-in email ("Yes, I confirm!"). The player is not subscribed until they confirm.
  - Reward: a one-time in-game gift (coins and decorations). Re-subscribing, or using a second address, gives no second gift.
  - Unsubscribing uses the email footer link. The status shows in Settings.
  - Source: [Wooga help centre](https://wooga.theymes.com/hc/en/junes-journey/articles/how-to-sign-up-for-junes-journey-newsletter-521)
- **Taonga Farm:** the newsletter pop-up appears from level 8, and only for players who have an email on their game account. — [Taonga support](https://support.taongafarm.com/hc/en-us/articles/24628703238546-Taonga-email-newsletter)
- **Hive (Minecraft server):** the player subscribes with an in-game command. After confirming the email, they receive a code to redeem in game. — [Hive support](https://support.playhive.com/the-hive-newsletter/)
- **Slayaway Camp (2017):** monthly unlock codes went only to newsletter subscribers. The author argues the in-game sign-up link reminds non-subscribers every session. — [Game Developer / How To Market A Game](https://www.gamedeveloper.com/business/top-5-mailing-lists-of-2017)
- **Supercell ID:** registration includes an optional checkbox for news emails. Rewards are tied to linking the ID, not to the email checkbox. — [clash.ninja](https://www.clash.ninja/guides/what-is-supercell-id); [Sportskeeda (mo.co)](https://www.sportskeeda.com/mobile-games/how-get-30-mo-gold-mo-co-free). Both are third-party sources.
- **Pokémon GO:** the account setting "Email me events, offers, and updates" is opt-in and must be on 48 hours before a send. — per search synthesis of [Pokémon GO Hub](https://pokemongohub.net/post/news/niantic-lures-back-inactive-players-offering-promo-codes-super-incubators-raid-passes/). Niantic has emailed one-off promo codes (Super Incubators, Raid Pass) to lapsed players. — [Pokémon GO Hub](https://pokemongohub.net/post/news/niantic-lures-back-inactive-players-offering-promo-codes-super-incubators-raid-passes/)

### Inferences

- **Best-supported pattern.** Offer an optional, skippable email prompt at a positive moment and in Settings. Use double opt-in. Grant a one-time cosmetic reward, or a modest coin reward, only after the address is confirmed. Make clear that declining costs nothing in core play. This matches both a shipping precedent and the letter of 5.1.1(v) and 3.2.2(x).
- **Never bundle push and email.** A reward for allowing push notifications breaks 5.1.2(i). An email reward must not be offered together with, or conditional on, the push permission prompt.
- **Grey zone.** Rewarding an email subscription is not expressly allowed. Apple could treat a heavy-handed version (blocking progress, nagging) as a 5.1.1(iv) "manipulate/force" problem. Keep the reward small and the prompt rate-limited.
- **Sign in with Apple is an option, not an obligation.** It is not required, because the game has no third-party login. If OutBrick adds Sign in with Apple anywhere, including on the website, it must register the Resend sending domain (and any subdomain used in MAIL FROM) with Apple's relay, with SPF/DKIM alignment, or mail to @privaterelay.appleid.com will bounce. The OutBrick website already has verified Apple sign-in (repo commit "Record verified Apple and Google sign-in after Cloudflare fix"), so relay registration of the Resend domain should be checked.
- **Web and QR alternatives.** A web sign-up page opened in SFSafariViewController, a QR code on a marketing surface, or the community forum's sign-in all keep collection off the binary. They still need disclosure if the app is the one transmitting data.

### Gaps

- I found no Apple statement, rejection report or App Review precedent that explicitly addresses rewarding email newsletter sign-ups. June's Journey is evidence of practice, not of policy.
- The fetched relay documentation does not say whether users can stop forwarding per app. From general knowledge, users can manage "Hide My Email" forwarding in Apple ID settings, but this is not cited here.
- No hard data was found on QR-code or forum-driven email capture rates for games.

## 2. Linking app progress to an email profile without accounts

### Takeaway
The robust pattern is a server-verified Game Center identity. The client sends the `fetchItems` identity-verification signature plus `teamPlayerID`, the server verifies it, and the server binds that ID to an email confirmed through a magic link. The binding must be disclosed in the App Store privacy label as Email Address and User ID, "Linked to You", for "Developer's Advertising or Marketing" and App Functionality.

### Cited Findings

- **Apple's verification flow:**
  1. The client calls `GKLocalPlayer.fetchItems(forIdentityVerificationSignature:)`.
  2. The client sends `publicKeyURL`, `signature`, `salt` and `timestamp`, along with `teamPlayerID` and the bundle ID, to the server.
  3. The server checks that the timestamp is fresh, downloads the public key and verifies that Apple signed it.
  4. The server verifies an RSASSA-PKCS1-v1_5 signature over teamPlayerID + bundleID + big-endian UInt64 timestamp + salt.
  - Trust only the signed fields. Nicknames are player-provided.
  - Source: [Apple GameKit docs: fetchItems](https://developer.apple.com/documentation/gamekit/gklocalplayer/fetchitems(foridentityverificationsignature:)); procedure as summarised by [Metaplay docs](https://docs.metaplay.io/feature-cookbooks/social-logins/social-platform-apple-game-center.html)
- **Legacy and WWDC2020 IDs differ.** They use different signature methods (`generateIdentityVerificationSignature` vs `fetchItemsForIdentityVerificationSignature`). The legacy `playerID` is deprecated. — [Metaplay](https://docs.metaplay.io/feature-cookbooks/social-logins/social-platform-apple-game-center.html); [Google Identity Platform](https://docs.cloud.google.com/identity-platform/docs/reference/rest/v1/accounts/signInWithGameCenter)
- **Arcade games** use `gamePlayerID` rather than `teamPlayerID` for verification. — [Apple Developer Forums](https://developer.apple.com/forums/thread/717622)
- **teamPlayerID can be unavailable.** Developers have reported "Unavailable Player Identification" for `teamPlayerID` on some test accounts. — [Apple Developer Forums](https://developer.apple.com/forums/thread/683668)
- **Production example:** a commercial account-linking endpoint requires Signature, teamPlayerId, publicKeyURL, salt and timestamp, and rejects signatures older than one hour. — [Stash docs](https://docs.stash.gg/reference/linkapplegamecenter)
- **Privacy label: email.** "Email Address" includes "a hashed email address", so hashing does not remove the disclosure. — [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- **Privacy label: User ID.** "User ID" covers "screen name, handle, account ID, assigned user ID… or other user- or account-level ID". A Game Center ID sent to the developer's server is most plausibly this category. Apple's page does not name Game Center. — [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- **Data collected by Apple.** "You are not responsible for disclosing data collected by Apple." This covers Apple's own collection, not IDs the app transmits to its own backend. — [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- **Optional-disclosure exemption does not apply to marketing email.** The exemption requires the data not be used for "your Advertising or Marketing purposes". Apple defines that purpose as including "sending marketing communications directly to your users". Data collected on an ongoing basis after an initial permission must be disclosed. — [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)
- **Tracking.** Linking first-party data is not "Tracking" unless it is combined with third-party data for targeted ads or ad measurement, or shared with a data broker. A first-party email list therefore does not trigger ATT, provided no ad-network matching is done. — [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/)

### Inferences

**Candidate "Connect your game" flow (my design, not sourced)**

1. The player taps "Get updates by email" in the app.
2. The app obtains a Game Center identity signature and POSTs it, with the entered email, to the backend.
3. The server verifies the signature, stores (teamPlayerID → pending email) and sends a magic link through Resend.
4. Clicking the link confirms the opt-in, which is the double opt-in.
5. The app receives a confirmation (on next launch, or through a Universal Link back into the app) and grants the reward once per teamPlayerID.

**Design notes**

- Signed and expiring link tokens (for example, HMAC with a single-use nonce) prevent someone binding another player's progress.
- A Universal Link back into the app must be handled in `SceneDelegate`. Per the project's CLAUDE.md, `application(_:continue:)` does not run.
- **Without Game Center:** fall back to a random install UUID generated on device and stored in iCloud KVS or Keychain. It carries the same "User ID, Linked to You" disclosure once sent with the email.
- **Minimise what is uploaded.** To send milestone emails, upload only coarse progress (highest level, villages completed, first-play date), not raw telemetry. This keeps the label to "Gameplay Content" or "Product Interaction" if any is needed, and fits 5.1.1(iii).
- **Two existing project caveats:**
  - Project memory notes that Game Center player IDs are stable only for the local player. Bind on the local player's `teamPlayerID` only.
  - CloudKit public or shared databases could store the opt-in flag, but the email itself should live on the owner's server (Neon), where Resend can reach it.

### Gaps

- I found no Apple document stating which privacy-label category Game Center IDs fall into when transmitted. The User ID categorisation is an inference.
- I found no public write-up of a game using a magic-link "connect your game to email" flow without accounts. The pattern is synthesised from identity-linking docs.
- No source found on CloudKit specifically used for email linking.

## 3. Cross-channel orchestration (push vs email vs in-app, caps, quiet hours, Apple push rules)

### Takeaway
Use the channels as follows:
- **Push** for time-bound, short, personal nudges, and only for marketing after explicit in-app consent with an in-app opt-out (4.5.4).
- **In-app** for anything that can wait until the next session.
- **Email** for rich, non-urgent content: digests, milestones, launches.

Leading platforms cap frequency across all channels per user per calendar day in the user's time zone, and exclude in-app messages from the global cap. Vendor data claiming multi-channel uplift is real but correlational and self-interested.

### Cited Findings

**Apple requirements and guidance on push**

- **4.5.4, requirement:** "Push Notifications should not be used for promotions or direct marketing purposes unless customers have explicitly opted in to receive them via consent language displayed in your app's UI, and you provide a method in your app for a user to opt out from receiving such messages." Push must not be required for the app to function. — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **Interruption levels, HIG guidance:**
  - Apple defines Passive ("information people can view at their leisure", for example a restaurant recommendation), Active (the default), Time Sensitive ("directly impacts the user and requires their immediate attention") and Critical (health and safety; entitlement required).
  - Apple asks developers to represent urgency accurately.
  - Marketing therefore belongs at Passive or Active, never Time Sensitive.
  - Source: [Apple HIG: Managing notifications](https://developer-rno.apple.com/design/human-interface-guidelines/patterns/managing-notifications) (summarised in search), [WWDC21 session 10091](https://developer.apple.com/videos/play/wwdc2021/10091/)
- **Time Sensitive misuse is visible to users.** The first time a user receives a Time Sensitive notification, iOS prompts them to keep or turn off future ones from that app. — vendor guidance via [OneSignal docs](https://documentation.onesignal.com/v9.0/docs/ios-focus-modes-and-interruption-levels)

**Push opt-in benchmarks (Airship, 2025 data, 2026 report)**

- Median opt-in is iOS 48.85% and Android 53.3%. The iOS Retail floor is 18.1% and the Android Gambling & Gaming 10th percentile is 21.35%. Onboarding campaigns lifted opt-in by up to 40% above category average. — [Airship 2026 benchmarks](https://www.airship.com/mobile-app-push-notification-benchmarks-for-2026/)
- The iOS median direct open rate fell 13.71% year over year. Opted-in users purchased 10% more often in Entertainment, and an airline saw 2.9× higher Day-30 activation among opted-in users. This is correlational. — [Airship 2026 benchmarks](https://www.airship.com/mobile-app-push-notification-benchmarks-for-2026/)

**Frequency capping (Braze documentation)**

- Caps can be applied across all channels, per channel, or both. — [Braze](https://www.braze.com/resources/articles/whats-frequency-capping-anyway)
- Global caps count by calendar day in the user's time zone, not rolling 24-hour windows. They apply to push, email, SMS, webhook, WhatsApp and LINE, **not** to triggered in-app messages. Each campaign or Canvas step dispatch counts once. — [Braze docs: rate limiting and frequency capping](https://www.braze.com/docs/user_guide/messaging/messaging_fundamentals/frequency_capping)

**Which channel when**

- **Push** reaches users outside the app and depends on device opt-in. **In-app** shows only while the app is open. **Email** carries rich, long content. — [OneSignal channel setup](https://documentation.onesignal.com/docs/channel-setup); [Customer.io message channels](https://docs.customer.io/journeys/message-channels)
- **Sequencing:** a push brings the user back, then an in-app message guides them. Do not fire push and in-app for the same message at once. Users cannot opt out of in-app messages, so cap them. — [OneSignal blog](https://onesignal.com/blog/boost-retention-with-in-app-messaging/); [AppStorys](https://appstorys.com/blog-Push-Notifications-vs-In-App-Messages)
- **Escalation:** "Follow up with an email containing richer content and visuals if the initial push does not get a response." — [Pushwoosh](https://www.pushwoosh.com/products/player-reengagement/)

**Multi-channel uplift (Braze-reported, correlational)**

- Combining in-product messages (in-app) with out-of-product messages (email and push) is reported to raise likelihood to buy 3.1× versus a single channel. Each added channel is reported to give 4.3× more purchases per user. — [Braze cross-channel report](https://www.braze.com/resources/reports-and-guides/the-cross-channel-marketing-difference-report)
- Braze pages disagree on retention uplift. One cites a 73% lift in 90-day retention; another cites 58% retention and 73% purchases. — [Braze](https://www.braze.com/resources/reports-and-guides/cross-channel-messaging); contradicted by [Braze article](https://braze.com/resources/articles/how-enterprise-brands-can-leverage-cross-channel-engagement-to-thrive-in-a-challenging-marketplace)

**Duolingo's practice (secondhand)**

- Reminders reportedly run daily for about a week and stop when they stop working. They are reportedly timed relative to last activity (about 23.5 hours after). These details come from a podcast summary, not a primary source. — [Sub Club podcast listing](https://metacast.app/podcast/sub-club-by-revenuecat/DlWjuiPD/how-to-time-reactivation-campaigns-for-maximum-impact-jackson-shuttleworth-duolingo/gzwJVb1S)
- Duolingo's own blog credits "new emails and notifications" in its work to bring back resurrected users. A Japanese-course newsletter coincided with resurrected users rising from 5% to 8% of DAUs. — [Duolingo blog](https://blog.duolingo.com/back-from-the-brink-what-duolingo-learned-about-its-resurrected-users)

### Inferences

- **A single cross-channel budget suits OutBrick.** The project already caps its icon badge and rating asks, and its CloudKit broadcasts do not badge. A small, self-hosted orchestrator could mirror the Braze model:
  - one marketing touch per player per local calendar day across push and email;
  - a weekly ceiling;
  - quiet hours (for example 21:00–09:00 local);
  - suppression of email when the player opened the app in the last 24 to 48 hours, because in-app covers them.
- **Keep email out of the daily-streak or lives role.** That role belongs to push and local notifications. Email suits milestones, villages, new chapters, seasonal events and win-back after 14+ days of inactivity.
- **Retiring stale addresses.** "Stop when it stops working" (Duolingo) maps to auto-pausing marketing email after N unopened sends. This also protects sender reputation.
- **Marketing push needs its own consent.** A separate in-app consent toggle for promotional push, plus an in-app off switch, is a 4.5.4 requirement, not just good practice. The system permission alone does not constitute marketing consent.

### Gaps

- Braze's quiet-hours documentation was not retrieved, so no cited vendor default exists for quiet-hour windows.
- No games-specific iOS push opt-in median was found in Airship's text; the charts are images.
- No controlled study separating email's incremental effect from push in games was found.

## 4. Milestone and progress emails that need app data

### Takeaway
Milestone emails are triggered server-side from events the app reports (Duolingo streak and practice emails; Pokémon GO's Adventure Sync weekly summary; Strava's annual Year in Sport). A privacy-friendly version for an account-less game uploads only coarse milestone events tied to the verified Game Center ID of opted-in players, and sends nothing to anyone who has not confirmed.

### Cited Findings

- **Duolingo:** transactional emails are described as event-driven, going to users who skipped practice or hit streak milestones. This is a third-party analysis. — [Dreamlit](https://dreamlit.ai/blog/how-one-simple-email-type-can-10x-your-user-retention)
- **Duolingo's resurrection work** combines new emails and notifications with predicting when a user is likely to go inactive and stepping in beforehand. — [Duolingo blog](https://blog.duolingo.com/back-from-the-brink-what-duolingo-learned-about-its-resurrected-users)
- **Pokémon GO:** Adventure Sync "sends a weekly summary" of Incubator and Candy progress and activity stats, with weekly milestone rewards. This is a 2018 announcement and appears to be an in-app or notification summary rather than an email. — [Pokémon GO: Adventure Sync](https://pokemongo.com/news/adventure-sync)
- **Strava:** Year in Sport is generated automatically at year end and announced in the feed and by email. This is from third-party descriptions; no official Strava page was retrieved. — [tantek.com](https://tantek.com/2025/001/t3/strava-year-in-sport-how-to-get-info-save); [Reteno email gallery: Strava](https://gallery.reteno.com/flows/emails-strava)
- **Mechanism:** vendor platforms trigger emails from app events or webhooks, for example on a detected PR or milestone. — [tray.ai Strava connector](https://tray.ai/connectors/strava-integrations.md)
- **Unverified "your progress is saved" figure:** a CRM vendor frames this email as a test hypothesis: does it return more than 10% of lapsed users, against 4% for generic win-back? This is a hypothesis, not a result. — [Bruin](https://getbruin.com/use-cases/mobile-gaming/cloudsave-churn-recovery-progress-restore/)

### Inferences

**Candidate OutBrick triggers (design, not sourced)**

- village completed (one of 167),
- level 100, 500, 1,000 and 2,000,
- chapter finale,
- one-year anniversary of first play,
- a "Year in OutBrick" recap in December or January, modelled on Strava.

**Mechanism**

- The app POSTs a minimal event `{teamPlayerID, milestone, timestamp}` to the backend only if the player has a confirmed email.
- The server dedupes and applies the cross-channel cap.
- Resend sends the email in the player's locale.

**Batching and restraint**

- Batch milestones into at most one email per week, or the "trips not rewards" logic from the badge design will be violated.
- Never email about losses or purchases, mirroring the rating-sheet rules.

**Privacy-friendly variant**

- Compute the email content on device and send it inside the confirm request, so the server stores only the latest milestone, not a history.

### Gaps

- No primary source on Clash Royale milestone emails was found. Supercell appears to rely on in-game and Supercell ID channels.
- No measured results (open, click or return rates) for game milestone emails were found.

## 5. Launch and new-content email: pre-orders, pre-registration, and whether release emails drive updates or reactivation

### Takeaway
App Store pre-orders auto-download on release, so launch email mostly drives opening rather than installing. For an already-live iOS game, the relevant use is new-content and update announcements. I found **no independent, holdout-controlled data** showing that release emails raise update adoption or reactivation in games; the published figures are vendor claims.

### Cited Findings

- **Apple pre-orders:** customers are notified on release and the app downloads automatically, within 24 hours according to the summary. The pre-order window has expanded from 90 to up to 180 days. A fixed release date is required. — [BGR](https://www.bgr.com/tech/apple-app-store-pre-orders-now-available/); [TechCrunch 2017](https://techcrunch.com/2017/12/12/apple-app-store-ios-pre-order-apps/); [Apple Developer Forums](https://developer.apple.com/forums/thread/737933)
- **Google Play, Nexon case study:**
  - About 50% of pre-registrations historically converted to installs.
  - A pre-registration reward raised conversion by 20%.
  - Pre-registrants had almost 50% higher Day-60 retention.
  - Google Play only, not applicable to an iOS-only game, and a vendor case study.
  - Source: [Google Play Console case study](https://play.google.com/console/about/nexon-casestudy/)
- **Unsourced conversion figures:** a glossary claims 60–90% pre-order-to-install conversion on Apple and 50–80% on Play, with no data. Treat as unreliable. — [mwm.ai](https://mwm.ai/glossary/preregistration)
- **Vendor win-back claims, no published methodology:**
  - "15% of uninstalled players return via win-back emails".
  - A 45% open rate and 32% higher event participation for a tournament email series.
  - Source: [Pushwoosh](https://www.pushwoosh.com/products/email-marketing-gaming/)
- **Duolingo:** a Japanese-course newsletter coincided with resurrected users rising from 5% to 8% of DAUs. This is correlation, not a controlled test. — [Duolingo blog](https://blog.duolingo.com/back-from-the-brink-what-duolingo-learned-about-its-resurrected-users)
- **Android guidance** suggests notifying lapsed users of new content at each update, including by email, but gives no rates. — [Android developers (archived)](https://spot.pcc.edu/~mgoodman/developer.android.com/distribute/engage/app-updates.html)

### Inferences

- **Install versus opening.** iOS automatic updates install most new versions without user action, so a release email's realistic job is reopening the game, not driving an install. Its message should be about content ("Village 168 is open", "New chapter"), not "update now".
- **Measure with a holdout.** The only trustworthy number will come from OutBrick's own test. Hold out a random 10–20% of confirmed subscribers from each release email, then compare 7-day return rates using server-side session pings or App Store Connect retention.
- **New-product launches.** OutBrick is live, so App Store pre-orders matter only for a future separate product. For a new title, an existing email list plus a pre-order link is the standard play.

### Gaps

- No Apple-published pre-order conversion benchmarks were found.
- No independent or GDC-sourced holdout study of game update or content-announcement emails was found. The Battle Cats reactivation case (over a million lapsed players regained) is paywalled, and its channel mix is unknown. — [Campaign Asia](https://www.campaignasia.com/article/how-ponos-battle-cats-clawed-back-more-than-a-million-lost-players/y0o3cc2dimzw6u4oc8avslxhg5)
- I could not confirm current (2026) App Store pre-order mechanics from an Apple primary page in this pass; the 180-day figure comes via secondary coverage.
