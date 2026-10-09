# Customer lifecycle email

**Email system live, 9 October 2026 UTC:** `main` c1ebb4a deployed to Cloudflare at 13:58. Migrations `20261009163000_email-suppression-consent-releases` and `20261009180000_email-events` were applied to production Neon about two minutes later, with the guarded procedure's destination check and `cloudflare_schema_migrations` bookkeeping. No email was sent in between. The deploy workflow does not migrate, so apply migrations *before* merging code that needs them. The Resend webhook `49ec88be` now subscribes to every `email.*` event plus `contact.updated`. A replayed `email.opened` returned 200 and was stored in `email_events` with its form tag and a hashed address. `RELEASE_EMAIL_AUTOSEND=on` with a 24-hour window is set in `wrangler.production.jsonc`.

**Current host, 9 October 2026 UTC:** Cloudflare Worker `outbrick` invokes the retained lifecycle handlers against Neon, using R2 job signals and Resend. The five-minute Cron Trigger dispatches due UTC jobs; preview jobs are disabled. Secrets belong in Cloudflare, including `RESEND_EVENTS_WEBHOOK_SECRET`; legacy `/.netlify/functions/resend-events` is retained. Read [migration acceptance](CLOUDFLARE-MIGRATION.md) before claiming actual live delivery. The older Netlify activation receipt below is historical.

Implemented 8 October 2026. This document says what each email is, when it is sent and how to run it. It is not proof that any email has been delivered in production. Verify each flow with a scoped test recipient after deploy before claiming it works.

## What every email carries

All of this is added by the shared shell in `emails/core.ts` and `emails/brand.ts`, so no template can leave it out:

- **Header:** the OutBrick wordmark, centred.
- **Header menu (every email a reader gets; only the team's internal copies leave it off):** a row of links: Play guide, What's new, Daily board, Community, Support.
  - In Apple Mail, iOS Mail and Samsung Email it folds into a hamburger at every width (since 9 October 2026; before that only on phones). Its interactive CSS sits in its own `<style>` block behind a WebKit gate, so a client that keeps the checkbox but cannot flip it never shows a dead button.
  - Gmail, Outlook and Yahoo strip `<input>` and keep the plain row of links.
  - Checkbox ids (menu, host, tips, puzzle) get a per-message suffix, so two OutBrick emails shown together in a conversation never toggle each other.
  - The hamburger itself is `aria-hidden`: screen readers read the links in order whether the menu is folded or not.
- **Host friend (`emails/friends.ts`):** one of the nine friends opens each email, standing on a studded plinth in their own colour, with a speech bubble. The bubble is a fixed line per mood in each language, never a reader's words. Where the client supports it, the friend hops in, breathes, and cheers when tapped; `prefers-reduced-motion` turns that off. Casting: Bloo for news and releases, Peach for account security, welcome tips and notices, Sprout for support, Bricko for affiliates, careers and fixes, Vio for "did we solve it?" and moderation, Moss for the community, Poppy for replies and the friends letter, Zippy for preferences and re-engagement, Flurry for events. Art: `scripts/build-email-friends.py` cuts the approved PreparedMascots renders (idle, cheer, think) to 192 px PNGs of about 6 KB each.
- **Toy-brick details:** buttons carry two studs; panels are plates with a row of studs; list bullets and section breaks are studded bricks in the course colours; a course stripe closes the paper above the footer as well as under the header.
- **Puzzles:** `puzzle()` draws a real board (bricks, gates, studs) in table cells. Tap the brick that moves first: the right one slides out through its gate, the rest follow, and the host cheers; a wrong one shakes and a hint shows. Clients without checkboxes get the drawn board, the answer and a link to the daily board. Welcome 2 carries the first puzzle, and any issue file can carry one (`"puzzle": {host, board, copy}`, sample `newsletter-puzzle`).
- **Interactive check:** `scripts/check-email-interactive.mjs` runs the previews in WebKit (Apple Mail's engine) on an emulated iPhone: the menu opens and closes in every reader email, the host cheers, the puzzle plays, the inputs-stripped fallback shows the answer and no dead buttons, and dark mode holds. 17 checks passed on 9 October 2026. It is not a test in Apple Mail itself.
- **Campaign links:** `sendEmail` and the broadcast paths tag every plain www.outbrick.site link with `utm_source=outbrick-email&utm_medium=email&utm_campaign=<form tag>`. Signed, sign-in and confirmation links, `/.netlify/`, `/api/` and `/r/` are left exactly as written. The footer App Store badge's `ct` names the email too (App Analytics needs `APP_STORE_PROVIDER_TOKEN` in `lib/app-store-url.ts` before it counts them).
- **Brand footer:**
  - the website footer's five social tiles (`@outbrick`) and "Follow OutBrick: @outbrick";
  - Apple's App Store badge in the reader's language;
  - `© <year> OutBrick. All rights reserved.`;
  - the postal address, "OutBrick · P.O. Box 330279", in each language's form (Boîte postale, Postfach, Apartado de correos, 私書箱, Caixa Postal).
- **Year:** the year of rendering.
- **Address source:** the owner-supplied text "OutBrick PO 330279". Do not invent a fuller address. `NEWSLETTER_POSTAL_ADDRESS` is still accepted but no longer printed twice.
- **Interactive pieces:** tap-to-reveal tips and one-tap rating faces. Every one degrades to plain, readable content where checkboxes are stripped.
- **Width check:** all 294 sample emails (49 templates × 6 languages) are checked for horizontal overflow at 280, 320, 360, 375, 414, 600, 768, 1024 and 1440 px. That is a browser check, not a Litmus or device test.

## The emails

| Area | Email | Sent when | From |
| --- | --- | --- | --- |
| Support | Acknowledgement, now with a case reference `OB-XXXXXX` | contact form | support@ |
| Support | **Reply from the team** (`supportReply`): case chip, staff message, tap to show the original | staff answer in `/community/admin` | support@ |
| Support | **Fixed in X** (`supportFixed`) | the release bot sees version X (or later) on the App Store for a case marked "fixed in X" | support@ |
| Support | **Did we solve it?** (`supportFeedback`): Yes/No, five faces | 3 days after the last reply or resolution, once per case | support@ |
| Support | Team copy: reopened, or a comment left | a player answers "not yet" or comments | support@ → support@ |
| Affiliates | **Approved**: code as a ticket, link, first-week checklist | staff decision | support@ |
| Affiliates | **Declined**, with an optional reason | staff decision | support@ |
| Careers | **In review**, **Next step** (with a message), **Not this time** | staff decision | support@ |
| Newsletter | Welcome 1 of 3 (existing) | confirmation | news@ |
| Newsletter | **Welcome 2 of 3**: how a board works, tap for the tip | day 3 | news@ |
| Newsletter | **Welcome 3 of 3**: the nine friends, the daily board, the community | day 10 | news@ |
| Newsletter | **New version**, a Broadcast draft per language | the release bot sees a new version. Drafts only, unless `RELEASE_EMAIL_AUTOSEND=on` (below). | news@ |
| Newsletter | **Event** issue (ticket block) | `scripts/send-newsletter.mjs` with an issue that has `"event"`, `--topic events` | news@ |
| Newsletter | **Still want these?** Keep, fewer, leave | 120 days without engagement, **only with tracking on** (below) | news@ |
| Newsletter | Preferences link | a reader asks on the preferences page | news@ |
| Account | **New sign-in** from a new browser/OS, with one-tap "sign out everywhere" | sign-in; never for an account's first device | support@ (Community) |
| Account | **Passkey added** | passkey registration | support@ (Community) |
| Account | **Account deleted** | deletion, to the address the account had | support@ |
| Account | **Your data**: a 24-hour download link | "Email me a download link" on the account page | support@ (Community) |
| Notices | **Privacy policy / terms changing** | an admin sends it from `/community/admin` | Community or News |

Copy for all six languages is in `emails/lifecycle-i18n*.ts`. Previews are built on every Deploy Preview at `/email-previews/`.

## How it runs

- **Outbox:** `email_outbox` holds anything sent later. `netlify/functions/lifecycle-outbox.mts` runs every ten minutes.
  - It opens the database only when the next-due time in R2 (`community-signals/outbox-due`) has passed.
  - Once a day at 08:00 UTC it sweeps for re-engagement and prunes rows older than 90 days.
  - Rows are rendered at send time, so a reader who unsubscribed or was suppressed, or a case that reopened, is dropped rather than emailed.
  - A failure of any kind (a refused send, a preparer or an action that throws) is one attempt: the row backs off 15 min × 2ⁿ and is abandoned after 6. Only a preparer that returns nothing drops a row, so one bad row never stalls the rest.
  - An unreadable due signal fails open, and the 08:00 sweep drains whatever the signal says, so a lost signal delays mail by a day at most.
  - Each daily sweep step, and each Worker scheduled job, is isolated: one that throws is logged and the others still run.
- **Support cases:** these live in `support_cases` and `support_case_events`.
  - The team email for each contact message links to `/community/admin?case=<id>`.
  - Answering there keeps the history and sends the designed reply. A plain mailbox reply still works but isn't tracked.
- **Applications:** these live in `applications`. Decisions are made at `/community/admin?applications=affiliate|careers`.
- **Newsletter state:** `newsletter_subscribers` mirrors confirmations. Resend remains the list of record for Broadcasts.
  - **Confirming** writes the row first, then asks Resend. If Resend fails, the reader still lands on "confirmed", `resend_pending` stays true and the outbox retries the contact (`resend-sync`) and the welcome (`welcome-1`); the daily sweep requeues any sync the outbox gave up on. If the database write fails twice, the reader sees the confirm page again (503) and Resend is not called.
  - **Consent:** `consent_at`, `consent_source` (the form page's path, no query or host), `consent_text_version` (`NEWSLETTER_CONSENT_VERSION` in `lib/i18n/newsletter.ts`, posted by the form; change it whenever the sign-up wording changes) and `submission_id` (`web_form_submissions.id`, signed into the confirm link as `s`). No IP address is stored.
  - **Suppression:** `suppressed_at` and `suppression_reason` (`bounced`, `complained`, `suppressed`) come from the webhook below. Suppressed readers get no welcome, re-engagement, preferences link or policy notice. Confirming again from that address lifts it.
  - Topics are saved here.
  - When `RESEND_TOPIC_RELEASES`, `RESEND_TOPIC_TIPS` and `RESEND_TOPIC_EVENTS` are set, topics are also synced to Resend Topics, and release drafts and `--topic` broadcasts only reach readers who kept that topic.
- **Resend webhook** (`resend-events`, Svix-verified; each `svix-id` is recorded in `resend_webhook_events` for 30 days, so redeliveries are no-ops):
  - `email.opened`, `email.clicked` from news@: the reader is engaged.
  - `email.bounced` (permanent only), `email.complained`, `email.suppressed`, from any sender: the address is suppressed and **every** unsent outbox email to it is cancelled. A complaint also unsubscribes the Resend contact.
  - `contact.updated` with `unsubscribed: true`: the reader leaves the list here too. Events older than the reader's latest confirmation are ignored.
- **Release email:** the release bot records one `release_broadcasts` row per language (that storefront's notes, else English) in the same transaction that claims the version. Each row becomes a Resend Broadcast draft; a failure is retried by the outbox tick with backoff. The team email to news@ says when the drafts will be sent, or that they won't be.
  - Without `RELEASE_EMAIL_AUTOSEND=on`, nothing is ever sent: a person sends each draft in Resend.
  - With it, a draft still in `draft` status is sent `RELEASE_EMAIL_DELAY_HOURS` (default 24) after it was made. To stop one, **delete the draft in Resend** (the row is then cancelled) or set `cancelled_at` on its row. A draft a person already sent is recorded as sent.
- **Analytics:** see [Analytics](#analytics) below.
- **Public forms:** besides 10 per IP per hour, one address receives at most 3 visitor emails (acknowledgements, confirm requests) per 24 hours. Further submissions are stored and the team still gets its copy. A contact acknowledgement quotes only the first 600 characters of the message.
- **Signed links:** feedback, keep-me, preferences, sign-out-everywhere and export links use `emails/links.ts` `signedUrl` (HMAC derived from `RESEND_API_KEY`, bound to a purpose and an expiry).
  - Every GET is scanner-safe: it shows a page, and only the POST acts.
  - The one exception is "keep me on the list", which is harmless if a scanner triggers it.

## Analytics

Implemented 9 October 2026 (migration `20261009180000_email-events`, `netlify/lifecycle/analytics.ts`). Not yet proven against live Resend webhooks.

- **Email events:** every Resend `email.*` webhook event is a row in `email_events`, plus `contact.updated` unsubscribes. That covers sent, delivered, delayed, opened, clicked, bounced, complained, suppressed and failed. Each row keeps the send's `form` and `locale` tags, the Resend email id and, for a Broadcast, its id. A redelivered svix-id is stored once.
- **Site milestones:** our handlers write `signup` (form submitted), `confirmed`, `unsubscribed_site` (our unsubscribe link, one-click or the 14-day sunset) and `prefs_saved`, with the page path where there is one.
- **Privacy:**
  - No address is stored. `address_hash` is an HMAC keyed from `RESEND_API_KEY` (purpose `analytics`), so it can count unique readers and nothing else. Rotating the key starts new hashes.
  - A clicked link keeps its host, path and `utm_*` tags; signed-link parameters are dropped.
  - Rows are deleted after 400 days by the daily sweep.
- **Report:** `/community/admin` → **Email**, admins only (`GET /api/community/admin/email?days=7|30|90`). It shows, as server-side aggregates with no address or id:
  - the newsletter funnel (signed up → confirmed → welcome 2 and 3 delivered → still subscribed);
  - list size and net growth;
  - delivery, click, open, bounce and complaint rates and unsubscribe-link clicks per `form` tag;
  - a language split, the top clicked links by path and `utm_campaign`, and the latest release Broadcasts.
- **Reading the numbers:** opens are labelled approximate, because Apple Mail Privacy Protection and scanners open everything, so read clicks first. Steps are counted within the chosen period, not as a strict cohort.
- **On the website (GA4, only after the consent banner's Accept):**
  - `generate_lead` `{ method: 'newsletter', source: <page path> }` when the newsletter form succeeds;
  - `contact` `{ topic }` (the fixed topic value) when the contact form succeeds;
  - `sign_up` `{ method: apple|google|facebook|email }` when a new community member chooses their first display name.
  - Email links already carry `utm_*` tags, and the banner's `page_location` keeps `utm_*` while dropping every other query parameter, so GA4 attributes those visits with nothing extra.

## Settings (names only)

| Variable | Needed for |
| --- | --- |
| `RESEND_TOPIC_RELEASES`, `RESEND_TOPIC_TIPS`, `RESEND_TOPIC_EVENTS` | Optional. Topic preferences reach Resend, and broadcasts can target a topic. Create the three topics in Resend first. |
| `RESEND_EVENTS_WEBHOOK_SECRET` | The Resend webhook → `/.netlify/functions/resend-events`. Subscribe it to **every `email.*` event** and `contact.updated` (analytics records them all; bounces, complaints, suppressions and unsubscribes also act). |
| `RELEASE_EMAIL_AUTOSEND=on` | Optional. Sends release Broadcast drafts automatically after the review window. Off by default: drafts only. |
| `RELEASE_EMAIL_DELAY_HOURS` | Optional, 1 to 336, default 24. The review window between a release draft being made and it being sent. |
| `NEWSLETTER_ENGAGEMENT_TRACKING=on` | Optional. Switches on "still want these?" and the 14-day sunset. **Leave it off until the events webhook delivers.** Otherwise silence would look like disinterest and remove real readers. |

**Switched on 8 October 2026:** open and click tracking on the Resend domain, the `email.opened`/`email.clicked` webhook (`resend-events`, secret in Netlify), the three topics (New versions, Tips and events, Events and seasons; ids in `RESEND_TOPIC_*`) and `NEWSLETTER_ENGAGEMENT_TRACKING=on` in production. The privacy policy (#email-tracking) discloses it. Readers who confirmed before that day are imported once by the daily sweep with their 120-day clock starting then.

## Owner checks after the first deploy

1. Send a contact form to a scoped test address and reply from `/community/admin`. Confirm the reply arrives with the case reference, then answer "not yet" from the feedback email when it arrives three days later. (Or move `send_after` in `email_outbox` for a test row.)
2. Confirm a newsletter test address. Check that letters 2 and 3 are queued for days 3 and 10, and open the preferences link.
3. Sign in from a second browser with a test member and check the new sign-in email. Then use "sign out everywhere".
4. Read the first release Broadcast drafts in Resend before sending them, or before their auto-send time.
5. Apply migration `20261009163000_email-suppression-consent-releases` before deploying this code, and add the four new event types to the existing Resend webhook.
6. Send a test email to Resend's bounce and complaint test addresses with a queued row for each, and check that the rows are cancelled and `suppressed_at` is set.
