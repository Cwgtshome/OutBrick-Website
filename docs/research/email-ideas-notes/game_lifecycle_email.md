# Lifecycle email in top consumer apps and games: onboarding, retention, milestones, re-engagement, win-back

Research date: 9 October 2026. Most primary sources found are 2020–2025; older sources are flagged where used. "Measured" means a figure the company or a named study reported; "claim" means vendor marketing or secondhand reporting without methodology.

## 1. What lifecycle messages do Duolingo, King, Supercell, NYT Games, Headspace, Calm, Spotify, Strava, Nintendo and Apple Arcade/ustwo send?

### Takeaway
The best-documented programmes (Duolingo, Calm, Strava, Nintendo, Supercell) show a common shape: a front-loaded onboarding burst, then triggered emails tied to real personal activity (streaks, workouts, races, events), an annual personal recap, and an explicit "breakup" or stop message when reminders stop working. Public detail on King, NYT Games, Headspace, Spotify's email specifically, and ustwo/Apple Arcade is thin; most of what exists is in-app rather than email.

### Cited Findings
**Duolingo**
- Duolingo keeps a pool of pre-written practice reminders personalised by language studied and current streak; new templates are tested on a small group first and kept only if they perform ("Test everything"). Before the algorithm, reminders were picked at random from the pool (blog, 3 Sep 2020) — [Duolingo blog: Hi, it's Duo](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/)
- Some reminder templates are only eligible for certain learners, e.g. ones requiring an active streak wager or sendable only on Mondays; "Time for [language]" works well for Chinese learners but usually not for English learners — [Duolingo blog](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/)
- Novelty effect: new reminders are more persuasive and their impact fades with repetition; Duolingo demotes recently seen reminders and spaces repeats using the same forgetting curve it uses for vocabulary. Analysis used ~200 million reminders over 34 days — [Duolingo blog](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/)
- Reactivation sequence ends with a "breakup": after about a month of inactivity a columnist received a final nudge saying the reminders weren't working and would pause (2020 account; she called it "passive-aggressive") — [Debugger/Medium: Duolingo needs to chill](https://debugger.medium.com/duolingo-needs-to-chill-8f1832745ca0)
- A UX teardown describes a multi-step reactivation sequence whose eighth message backs off with "these reminders don't seem to be working", after which push stopped the next day, suggesting email and push are coordinated (secondhand; page not fetchable, summarised from search) — [UX Collective: Duolingo's 6-step reactivation experience](https://uxdesign.cc/duolingos-6-step-reactivation-experience-9ad65f04a569)
- Braze (2016) cites Duolingo's push "breakup" message as a model sunset example alongside Free People and Bonobos emails — [Braze: 7 essentials for a win-back campaign](https://www.braze.com/resources/articles/win-back-campaign-7-essentials.md)
- Year in Review history: December 2019 it was an **email newsletter**; from 2020 it moved in-app with share cards; in 2022 it lived on the profile page; available in all 25 UI languages — [Duolingo blog: Year in Review behind the scenes (8 Dec 2022)](https://blog.duolingo.com/year-in-review-behind-the-scenes)
- Counter-report: some users say promotional emails stopped for a while after unsubscribing and then resumed (anecdotal complaint) — [Sikayetvar complaint](https://www.sikayetvar.com/en/duolingo-us/duolingo-keeps-emailing-me-after-i-unsubscribed)

**Calm** (a 2020 personal teardown; cadence may be outdated)
- 10 emails in ~135 days. Days 0, 1, 2, 4, 10, then a 55-day gap, then days 65, 84, 93, 98, 135. Day 0 "your discount is inside" (40% off), day 1 offer follow-up, day 2 anxiety technique, day 4 seasonal, day 10 exercise + 40% off; later emails are themed content (work stress, World Sleep Day, sleep music) each with an upgrade CTA — [Growth Snippets: Every email Calm sent me](https://growthsnippets.substack.com/p/every-email-calm-sent-me-after-i)
- Reviewer found the tone warm ("like messages from a friend") but noted commercial intent throughout, a subject/preheader mismatch, and CTAs buried low — [Growth Snippets](https://growthsnippets.substack.com/p/every-email-calm-sent-me-after-i)

**Headspace**
- Only a qualitative teardown found: a September student email timed to term-start stress, 85% discount, copy rewritten around student-specific pain points (coursework, roommates); no metrics — [Userpilot blog](https://userpilot.com/blog/?p=288693)

**Strava**
- Iterable spotlight: race-based lifecycle campaign triggered by the race a runner said they were training for (training content and tips before the race), then a personalised post-race email with a pace chart and a share button linking to a custom downloadable asset — [Iterable: Customer Spotlight, Mikko Westberg (Strava)](https://iterable.com/blog/customer-spotlight-mikko-westberg-strava/)
- Gallery of Strava flows: completed-workout follow-ups, weekly performance recaps, milestone badges (vendor showcase) — [Reteno gallery: Strava emails](https://gallery.reteno.com/flows/emails-strava)
- Year in Sport is a personalised highlight reel (total distance, activity count, longest activity, route map); a lower-quality source says Strava emails all users a link to it each December — [GearJunkie/Running Channel coverage via search](https://therunningchannel.com/strava-year-in-sport-2024/) (email delivery not confirmed by a primary source)

**Nintendo**
- Switch Year in Review: emailed to players in some countries; US/Canada players log in to a web page. Contents: games played vs previous year, how many were new, top three games and hours, genres, docked vs handheld, busiest months, and recommendations from play history — [TechRadar](https://www.techradar.com/news/nintendo-switch-year-in-review-lets-you-see-how-much-time-you-spent-on-animal-crossing); [Inquirer Technology (2020)](https://technology.inquirer.net/106780/nintendo-switch-has-personalized-its-year-in-review-2020-for-users/amp)
- A 2025 edition launched in January 2026 covering Switch and Switch 2, with history back to the first game launched — [Techloy](https://www.techloy.com/nintendo-finally-rolls-out-its-switch-2025-year-in-review.md)

**Supercell** (Segment x Supercell webinar, 7 Dec 2023; secondhand summary)
- Email types: game update and event announcements; geo-restricted promo for a Clash comic book; Clash of Clans x Chess.com cross-promo; beta recruitment targeted by play style; Lunar New Year event. Game teams choose audience, subject lines and content with the email team; sent through SendGrid plus internal tooling; A/B tests on content and subject lines; winning Lunar New Year layout reused for later events — [Wudpecker webinar summary](https://www.wudpecker.io/blog/how-supercell-increases-user-loyalty-and-engagement-with-email-marketing-webinar-summary)
- The Chess.com collab email went to both active and dormant players and "reengaged players who had quit"; CTA deep-linked installed players into the game and sent others to the App Store. No numbers published — [Wudpecker](https://www.wudpecker.io/blog/how-supercell-increases-user-loyalty-and-engagement-with-email-marketing-webinar-summary)

**NYT Games**
- The Games newsletter (2023 analysis) carries a weekly Wordle recap linking to today's puzzle, a "Brain Tickler" with the answer at the bottom, a Spelling Bee puzzle link, and a sign-up for "Easy Mode" (a simplified weekly crossword newsletter) — [The Audiencers](https://theaudiencers.com/wordle-and-beyond-how-games-are-impacting-publisher-newsletters/)

**Spotify Wrapped** (engagement figures, all in-app; company-reported)
- 2024: ~62 hours to 200 million engaged users (engaged = viewed at least one story); 2024 total 245 million. 2025: 200 million in ~24 hours (+19% YoY) and 500 million shares in ~24 hours — [Music Business Worldwide](https://www.musicbusinessworldwide.com/spotify-wrapped-campaign-hit-200m-engaged-users-in-24-hours-a-19-yoy-increase); conflicting 225 million figure attributed to 2023 vs 2024 by different outlets — [Digital Music News](https://www.digitalmusicnews.com/?p=305750)

### Inferences
- Annual recaps have migrated from email to in-app/web (Duolingo 2019 email → 2020 in-app; Nintendo web-first in North America). Email's role in a recap is the announcement and deep link, not the recap itself; the share card is where the growth comes from.
- The strongest triggered emails are tied to a user-declared or user-generated event (Strava's race, Supercell's in-game events), not a calendar.
- Calm's pattern (front-loaded discount, then sparse themed content each carrying an upgrade CTA) is a subscription-app pattern; a free-to-play game with IAP has less reason to lead with a discount.

### Gaps
- No primary source found on King/Candy Crush email programmes (King's retention mechanics are in-game; no email case study surfaced).
- No public detail found on Apple Arcade/ustwo (Monument Valley), Alto's Odyssey or Stardew Valley lifecycle email; these games appear to communicate mainly via store pages, social and patch notes, but this could not be confirmed.
- Spotify Wrapped and Strava Year in Sport email copy, send timing and email-specific metrics were not found.
- Headspace onboarding sequence (count, cadence) not found.
- NYT Games: no source found on whether streaks or personal stats are sent by email.

## 2. What measured results are published?

### Takeaway
Hard, causal numbers are rare and mostly from Duolingo's own experiments and old conference talks; they are modest single-digit or sub-1% relative lifts at scale. Most "email lift" numbers in vendor material are uncontrolled claims. Recaps are reported to lift engagement and acquisition, but without published effect sizes outside Spotify's reach figures.

### Cited Findings
- **Duolingo bandit for reminders (KDD 2020, Yancey & Settles):** +0.5% total DAU and +2% new-user retention over a strong baseline; deployed to millions of daily reminders. Applies to push-dominated reminders — [Duolingo research PDF](https://research.Duolingo.com/papers/yancey.kdd20.pdf); [Papers with Code](https://paperswithcode.com/paper/a-sleeping-recovering-bandit-algorithm-for)
- The blog version reports no percentages but says the system was "especially effective at bringing back tens of thousands of new learners" — [Duolingo blog](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/)
- **Duolingo streak experiments:** learners who reach a 7-day streak are 2.4x more likely to use Duolingo the next day (observational, not causal); allowing up to two Streak Freezes raised daily active learners +0.38% (relative); separating daily goal from streak raised D14 retention +3.3% and the share of learners on a streak within 20 days +10.5% — [Duolingo blog: Improving the streak](https://blog.duolingo.com/improving-the-streak); [Duolingo blog: How the streak builds habit](https://blog.duolingo.com/how-duolingo-streak-builds-habit)
- Duolingo credits leaderboards, a refocus on notifications and streak optimisation (with other work) for 4.5x DAU growth over four years from 2018; a secondary summary says raising notification volume required strong justification and CEO approval — [Lenny's Newsletter: How Duolingo reignited user growth (Jorge Mazal)](https://lennysnewsletter.com/p/how-duolingo-reignited-user-growth) (notification-governance detail is secondhand)
- **Duolingo Year in Review:** lift in lessons completed and time spent after users view it; a significant new-user spike in 2021 attributed to shared cards; top-10%-XP learners made more than half of 2020 shares; adding XP percentile (2021) and a "learner style" (2022) raised share rates. No figures given — [Duolingo blog](https://blog.duolingo.com/year-in-review-behind-the-scenes)
- **Kabam (Casual Connect, July 2012 — old):** email vs a no-email holdout raised retention 5%→7% and ARPU 16%→36% over holdout (reported as a liveblog, windows not mapped); predictive-payer offers gave +33% over business-as-usual email — [Adrian Crook liveblog](https://adriancrook.com/email-marketing-tactics-to-drive-player-engagement-and-retention/)
- **Healthline (Hightouch case study):** one personalised digest replacing 30 newsletters gave +11.2% unique CTR and 29.8% reactivation among dormant subscribers (vendor-published, not games) — [Hightouch](https://hightouch.com/customers/fullspanhealth)
- **Kolibri Games (Braze):** a new offer to a 300,000-player test group generated 15% more revenue than control (offer test, not email reactivation) — [Braze orchestration roundup](https://www.braze.com/resources/articles/how-real-brands-are-using-braze-to-meet-their-orchestration-goals)
- Pushwoosh claims 15% of uninstalled players return via win-back emails (vendor claim, no methodology) — [Pushwoosh: Email for Gaming](https://www.pushwoosh.com/products/email-marketing-gaming/)
- **Benchmarks:** Omnisend 2025 puts the games-category open rate at 36.85% (vs 30.22% overall) and conversion at 0.19% — [Omnisend benchmarks](https://www.omnisend.com/blog/email-marketing-benchmarks/); Mailchimp's industry table was last updated December 2023 — [Mailchimp benchmarks](https://mailchimp.com/resources/email-marketing-benchmarks/)
- **Measurement caveat:** Apple Mail Privacy Protection (iOS 15, 2021) pre-fetches pixels so opens fire for unread mail; one publisher saw unique opens rise 15%→19% with no behaviour change; clicks were unaffected. Clicks can still be inflated by security-scanner bots — [Omeda](https://techdemo.omeda.com/the-impact-of-apples-mail-privacy-protection-what-we-know-so-far/); [University of Colorado eComm wiki](https://www.cu.edu/blog/ecomm-wiki/artificial-email-engagement-rates)

### Inferences
- The only rigorous effect sizes are small relative lifts on huge bases; a small game should expect email to matter at the margin and should measure with a holdout rather than trusting vendor percentages.
- For an iOS-heavy audience, open rate is nearly meaningless post-MPP; "click → app open" (deep link) and next-7-day return vs holdout are the honest metrics, and "not opened in 90 days" triggers are broken.
- Share-card design (percentile, identity label) moved Duolingo's recap more than delivery channel did.

### Gaps
- No GDC talk or King/Supercell primary data with email-specific lifts was found.
- No published causal result on recap emails' effect on retention (Duolingo reports direction only).
- Duolingo's email-specific (vs push) results are not separated in any public source found.

## 3. Re-engagement best practice: timing, content, number of emails, sunset, results

### Takeaway
Practitioner consensus (mostly vendor-sourced) is: trigger at the product's natural drop-off point rather than a fixed calendar (commonly 30–90 days for email), lead with what the person has waiting or has built rather than "we miss you", send a short sequence (two to five messages), then sunset explicitly. Expected reactivation is roughly 5–15% per vendor ranges, unverified.

### Cited Findings
- Braze (2016): no fixed window — identify the point of inactivity before uninstall/unsubscribe, which varies by product; send at the milestone where most customers drop off — [Braze](https://www.braze.com/resources/articles/win-back-campaign-7-essentials.md)
- Braze: avoid generic "we've missed you"; show what the person is missing (Tinder/Pinterest show matches/pins waiting); remind them of value received (e.g. how long they've been a customer); ask why they lapsed; keep design light with one CTA; dollar-off beat percentage-off in a cited study — [Braze](https://www.braze.com/resources/articles/win-back-campaign-7-essentials.md)
- Braze-cited practitioner (Doorman): one email + one follow-up; 65–70% opens, 35–40% CTR (pre-MPP); found email beat push because people check inboxes more than notification history — [Braze](https://www.braze.com/resources/articles/win-back-campaign-7-essentials.md)
- Braze: end with a breakup message; a smaller active list beats a large unresponsive one; limit to initial + one follow-up — [Braze](https://www.braze.com/resources/articles/win-back-campaign-7-essentials.md)
- Common thresholds: 90+ days without an open or 30+ days without a click defines "inactive" (Mailgun glossary); sunset windows commonly 3–6 months — [Mailgun](https://www.mailgun.com/?p=5196); [Mailpro: sunset policy](https://www.mailpro.com/blog/email-sunset-policy)
- Vendor claim: contacts dormant 30–60 days reactivate at 3–5x the rate of those gone 180+ days; 180+ days rarely return (uncited) — [SegMetrics playbook PDF](https://segmetrics.io/wp-content/uploads/Playbook-Email-Re-Engagement-Sequence.pdf)
- Vendor ranges: 5–15% of dormant contacts recovered, 10–20%+ for strong programmes — [Mailsoftly](https://mailsoftly.com/blog/re-engagement-email-campaign/)
- Experian (44 clients): an offer in the subject line boosted reactivation-campaign engagement in almost all campaigns — [Experian reactivation guide PDF](https://stg1.experian.com/assets/marketing-services/reports/email-reactivation-best-practices-guide.pdf.PDF)
- Kabam talk: don't send real-time triggered emails to heavily lapsed players; trigger emails from in-game events while players are active; segment active/lapsed, payer/non-payer, opener/non-opener; make unsubscribe easy — [Adrian Crook (2012)](https://adriancrook.com/email-marketing-tactics-to-drive-player-engagement-and-retention/)
- Supercell reactivated dormant players with a genuinely new-content collaboration (Chess.com), deep-linking to install if missing — [Wudpecker](https://www.wudpecker.io/blog/how-supercell-increases-user-loyalty-and-engagement-with-email-marketing-webinar-summary)
- Duolingo's sequence ends with a "these reminders don't seem to be working" stop message — [Debugger/Medium](https://debugger.medium.com/duolingo-needs-to-chill-8f1832745ca0)

### Inferences
- A reasonable game cadence from these sources: first nudge around day 7 of inactivity (only if a real reason exists, e.g. a reward waiting), a "new content" email around day 14–30, a last "what's new + your progress" at ~60–90 days, then stop and only resume for major content updates the player opted into.
- New content (Supercell) and "your stuff is waiting" (Braze's Tinder/Pinterest examples) are the two content types consistently cited as working; free rewards are common but sources do not show they beat new content.

### Gaps
- No independent (non-vendor) study of optimal day windows for games found.
- No games-specific data on how many win-back emails before diminishing returns.

## 4. Ethics and backlash: guilt-trip messaging, dark patterns, regulators, calm alternatives

### Takeaway
Duolingo's guilt-tinged owl is both a celebrated growth asset and the main cautionary example; criticism is largely press/user opinion rather than regulatory action. Regulators (FTC 2022, EU CPC 2025, Norwegian Consumer Council 2022) target pressure tactics, nagging, time-limited urgency and targeting of children — mostly around purchases, but the same categories apply to lifecycle messaging.

### Cited Findings
- Business Insider argues guilt-based friction can backfire over time, citing a 2010 study where guilt-based anti-drinking ads produced defensive reactions; quotes a user flooded with notifications after breaking a 52-day streak while sick who then stopped opening the app; Duolingo maintains its approach works — [Business Insider NL](https://businessinsider.nl/duolingo-is-mean-whiny-and-annoying-gen-z-loves-it/)
- A parent guide describes kids doing the easiest lesson just to keep the streak ("minimum viable effort") — [Screenwise](https://screenwiseapp.com/guides/managing-duolingo-streaks-when-gamification-becomes-stressful)
- Duolingo's own framing: Streak Freeze gives "slack", citing Penn/UCLA research that some slack is more motivating than rigid rules — [Duolingo blog](https://blog.duolingo.com/improving-the-streak)
- Backlash to Duolingo's "sick"-looking app icon, described as an engagement tactic — [Outlook India](https://outlookindia.com/international/us/duolingos-new-sick-app-icon-why-users-are-concerned-and-how-to-change-it-explained)
- **FTC staff report "Bringing Dark Patterns to Light" (Sept 2022):** "nagging" (repeated requests to take an action favourable to the business) under coerced action; "confirmshaming" under asymmetric choice; "grinding" in games. Commentators note it does not itself find legal violations — [Venable summary](https://www.venable.com/insights/blogs/2022/09/the-ftc-brings-more-light-to-dark-patterns-in-new); FTC's Epic Games settlement included $245 million redress for dark-pattern billing in Fortnite — [Open Class Actions glossary](https://openclassactions.com/glossary/dark-patterns.php) (verify against FTC release)
- **EU CPC Network:** seven non-binding principles on in-game virtual currency (21 Mar 2025) — real-money prices, no obscuring through multiple currencies, no forced bundles, withdrawal rights, fair terms; Star Stable case objected to direct appeals to children and time-limited pressure; coordinated action on 30 Sept 2025 named King, Supercell, Mojang, Riot, Activision Blizzard, Ubisoft and others — [Gleiss Lutz](https://www.gleisslutz.com/en/know-how/new-guidelines-game-currencies-digital-consumer-protection-and-expanding-taboo-dark-patterns); [ZwillGen](https://www.zwillgen.com/gaming/cpcn-announces-virtual-currency-consumer-protection-guidelines/); [mobilegamer.biz](https://mobilegamer.biz/video-games-europe-hits-back-at-eu-watchdog-targeting-king-supercell-mojang-and-more-over-iap-practices/)
- **Norwegian Consumer Council "Insert Coin" (31 May 2022):** games exploit cognitive biases through deceptive design and marketing, layered currencies obscure cost, loot boxes target minors; backed by 20+ consumer groups in 18 countries calling for a ban on deceptive design and extra protection for minors — [Forbrukerrådet](https://www.forbrukerradet.no/siste-nytt/loot-boxes-how-the-gaming-industry-manipulates-and-exploits-consumers/); [VGC](https://www.videogameschronicle.com/news/18-european-country-groups-have-joined-the-fight-against-loot-boxes)
- Duolingo's sunset message itself is read as both respectful (it stops) and passive-aggressive (the tone) — [Debugger/Medium](https://debugger.medium.com/duolingo-needs-to-chill-8f1832745ca0)

### Inferences
- The defensible pattern is: stop messaging when it stops working, say so plainly without guilt, never imply loss of something the player cannot recover, never use countdown urgency on purchase offers, and be especially careful with likely-child audiences in the EU.
- Email that celebrates (recaps, milestones) carries little regulatory risk; email that sells with timers or streak-loss threats is where regulators' categories (nagging, time pressure, confirmshaming) bite.

### Gaps
- No published lifecycle-email practices found for calm/wellbeing-positioned games (Monument Valley, Alto's Odyssey, Stardew Valley); cannot cite them as a model.
- No regulator action specifically about lifecycle email or streak reminders was found.
- Outcome of the Sept 2025 CPC coordinated action not found.

## 5. Personalisation depth: what personal data is used, and how it is obtained

### Takeaway
The data used is almost entirely first-party behavioural data the product already logs: streak length, language/course, activity counts, time spent, percentile ranks, top items, play mode, and declared goals. Identity labels and percentiles drive sharing; declared goals (Strava's race) drive the best triggered sequences.

### Cited Findings
- Duolingo reminders: language studied, current streak, eligibility flags (streak wager active, day of week), plus per-user history of which templates were recently seen — [Duolingo blog](https://blog.duolingo.com/hi-its-duo-the-ai-behind-the-meme/)
- Duolingo Year in Review: active days, time spent, words learned, lessons completed, XP percentile, behaviourally assigned "learner style" — [Duolingo blog](https://blog.duolingo.com/year-in-review-behind-the-scenes)
- Nintendo Year in Review: games played vs prior year, new games, top three by hours, genres, docked vs handheld, busiest months, recommendations; requires Nintendo Account login — [TechRadar](https://www.techradar.com/news/nintendo-switch-year-in-review-lets-you-see-how-much-time-you-spent-on-animal-crossing)
- Strava: user-declared target race drives the pre-race sequence; post-race email uses the actual pace data — [Iterable](https://iterable.com/blog/customer-spotlight-mikko-westberg-strava/)
- Supercell: targets by active/dormant status, geography (comic only where purchasable), play style for beta recruitment; deep link branches on whether the game is installed — [Wudpecker](https://www.wudpecker.io/blog/how-supercell-increases-user-loyalty-and-engagement-with-email-marketing-webinar-summary)
- Spotify Wrapped counts as "engaged" anyone who views one story — [Music Business Worldwide](https://www.musicbusinessworldwide.com/spotify-wrapped-campaign-hit-200m-engaged-users-in-24-hours-a-19-yoy-increase)
- Kabam: predictive payer models picked which conversion offer each player saw (+33% over BAU email) — [Adrian Crook (2012)](https://adriancrook.com/email-marketing-tactics-to-drive-player-engagement-and-retention/)
- Email collection: Kabam advises collecting at sign-up with clear expectations, real-time welcome trigger, opt-in and incentives for valid addresses — [Adrian Crook](https://adriancrook.com/email-marketing-tactics-to-drive-player-engagement-and-retention/)

### Inferences
- For a puzzle game, the equivalent data is levels cleared, stars, current village/chapter, friends unlocked, best streak, hardest board beaten, and percentile among players; all are already on-device or synced, so the hard part is getting a consented email address linked to that progress (account sign-in or explicit opt-in), not the data.
- Percentile and an identity label ("learner style") are the personal fields with evidence of raising share rates.

### Gaps
- No public detail on how Supercell ID or King accounts feed email personalisation.
- No published evidence that friend-based email content (e.g. "your friend passed you") improves retention for games; this appears in push/in-app far more than email.
