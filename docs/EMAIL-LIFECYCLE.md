# Customer lifecycle email

Implemented 8 October 2026. This document says what each email is, when it is sent and how to run it. It is not proof that any email has been delivered in production. Verify each flow with a scoped test recipient after deploy before claiming it works.

## What every email carries

All of this is added by the shared shell in `emails/core.ts` and `emails/brand.ts`, so no template can leave it out:

- **Header:** the OutBrick wordmark, centred.
- **Header menu (newsletters, the welcome series and announcements only):** a row of links: Play guide, What's new, Daily board, Community, Support.
  - On phones in clients that keep form controls (Apple Mail, iOS Mail), it folds into a hamburger.
  - Clients that strip `<input>` (Gmail, Outlook, Yahoo) keep the plain row.
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
| Newsletter | **New version**, a Broadcast draft per language | the release bot sees a new version. Drafts only: a person reviews and sends them in Resend. | news@ |
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
  - It opens the database only when the next-due time in Blobs (`community-signals/outbox-due`) has passed.
  - Once a day at 08:00 UTC it sweeps for re-engagement and prunes rows older than 90 days.
  - Rows are rendered at send time, so a reader who unsubscribed or a case that reopened is dropped rather than emailed.
- **Support cases:** these live in `support_cases` and `support_case_events`.
  - The team email for each contact message links to `/community/admin?case=<id>`.
  - Answering there keeps the history and sends the designed reply. A plain mailbox reply still works but isn't tracked.
- **Applications:** these live in `applications`. Decisions are made at `/community/admin?applications=affiliate|careers`.
- **Newsletter state:** `newsletter_subscribers` mirrors confirmations. Resend remains the list of record.
  - Topics are saved here.
  - When `RESEND_TOPIC_RELEASES`, `RESEND_TOPIC_TIPS` and `RESEND_TOPIC_EVENTS` are set, topics are also synced to Resend Topics, and release drafts and `--topic` broadcasts only reach readers who kept that topic.
- **Signed links:** feedback, keep-me, preferences, sign-out-everywhere and export links use `emails/links.ts` `signedUrl` (HMAC derived from `RESEND_API_KEY`, bound to a purpose and an expiry).
  - Every GET is scanner-safe: it shows a page, and only the POST acts.
  - The one exception is "keep me on the list", which is harmless if a scanner triggers it.

## Settings (names only)

| Variable | Needed for |
| --- | --- |
| `RESEND_TOPIC_RELEASES`, `RESEND_TOPIC_TIPS`, `RESEND_TOPIC_EVENTS` | Optional. Topic preferences reach Resend, and broadcasts can target a topic. Create the three topics in Resend first. |
| `RESEND_EVENTS_WEBHOOK_SECRET` | Optional. A Resend webhook for `email.opened` and `email.clicked` → `/.netlify/functions/resend-events`. |
| `NEWSLETTER_ENGAGEMENT_TRACKING=on` | Optional. Switches on "still want these?" and the 14-day sunset. **Leave it off until the events webhook delivers.** Otherwise silence would look like disinterest and remove real readers. |

**Open and click tracking is off** on the Resend domain today (see the root README). Resend only sends `email.opened`/`email.clicked` events when tracking is on. Turning it on is an owner decision: it adds a tracking pixel and rewrites links, and the privacy policy would need to say so. Until then, re-engagement stays off and nobody is removed.

## Owner checks after the first deploy

1. Send a contact form to a scoped test address and reply from `/community/admin`. Confirm the reply arrives with the case reference, then answer "not yet" from the feedback email when it arrives three days later. (Or move `send_after` in `email_outbox` for a test row.)
2. Confirm a newsletter test address. Check that letters 2 and 3 are queued for days 3 and 10, and open the preferences link.
3. Sign in from a second browser with a test member and check the new sign-in email. Then use "sign out everywhere".
4. Read the first release Broadcast drafts in Resend before sending them.
