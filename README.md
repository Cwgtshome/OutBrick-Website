# OutBrick website

The public site for **OutBrick: Block Sort Puzzle**, served at
[www.outbrick.site](https://www.outbrick.site).

Netlify builds it from this source on every push to `main` — `pnpm build` prerenders every
route into `dist/client`, which is what gets published. Nothing here is committed build
output, deliberately: an earlier version of this repository held a prerendered copy, and it
went a month stale without anybody noticing, still telling readers the game contained no
advertising SDK after the game had one.

## Two files that carry real obligations

* `public/app-ads.txt` — the IAB authorised-sellers record. AdMob does not find it from the
  app; it reads the developer website named on the App Store listing, takes that root domain,
  and fetches `/app-ads.txt` there. **This domain and the App Store marketing URL have to
  stay the same host.** Change one and the other must follow, or the app quietly goes back to
  unverified and a share of bids are refused.
* `public/.well-known/apple-app-site-association` — universal links. It only does anything
  for a build whose Associated Domains entitlement names this host, so it and the app ship
  together.

Both are served with explicit content types from `public/_headers`.

## Where the app lives

The game itself is a separate repository. This one is only the website.

## Forms and affiliate links

* The contact form (`contact`), the affiliate application (`affiliate`), job applications
  (`careers`) and the newsletter sign-up (`newsletter`) are Netlify Forms, detected from the
  prerendered HTML. In the Netlify UI, form
  detection must be enabled (Forms → Enable form detection), and an email notification added
  for each form (Site configuration → Notifications → Form submission notifications) so
  submissions reach the inbox. The privacy policy's "Forms on this website" section describes
  exactly this; change one and the other must follow.
* `outbrick.site/r/<code>` 302-redirects to the App Store with `ct=aff-<code>` (netlify.toml).
  `node scripts/affiliate-link.mjs <code>` prints and checks a code's links.

## Emails (Resend)

Every verified form submission also sends the visitor an email, through
[Resend](https://resend.com) (domain `outbrick.site`, region eu-west-1, open and click tracking off).

| Form | Email | From |
| --- | --- | --- |
| `contact` | acknowledgement with a copy of the topic and message; asks for device and iOS version on Bug report / Accessibility when they are missing | OutBrick Support &lt;support@outbrick.site&gt; |
| `careers` | acknowledgement naming the role | OutBrick Support |
| `affiliate` | acknowledgement with the proposed code | OutBrick Support |
| `newsletter` | **double opt-in**: "Confirm your subscription", with a signed link valid 7 days | OutBrick News &lt;news@outbrick.site&gt; |

Replies go to the sender's own address (`reply_to`). Each email is written in the page's language
(the forms carry a hidden `locale` field; the newsletter uses its `language` field), falling back
to English.

* `netlify/functions/submission-created.mts` — Netlify runs it for every verified submission. The
  rules are in `emails/submission.ts`: honeypot and spam flag send nothing, the submission id is
  logged (never the address or the message), each email carries a Resend `Idempotency-Key`, and
  the function always answers 200.
* `netlify/functions/newsletter-confirm.mts` — the confirm link. Checks the HMAC and the 7-day
  expiry, displays a confirmation page on GET, then on a deliberate POST adds the address to the **OutBrick News** segment, sends the welcome email, and
  redirects to `/newsletter/confirmed` (or `/newsletter/link-expired`, which has a fresh sign-up
  form), in the reader's language.
* `netlify/functions/newsletter-unsubscribe.mts` — the signed unsubscribe link. Mail clients'
  one-click button POSTs to it (`List-Unsubscribe` + `List-Unsubscribe-Post`, RFC 8058); the link
  in the footer opens a one-button confirmation page (link scanners fetch every GET, so a GET never
  unsubscribes anybody). Either way the contact is set to `unsubscribed: true`.
* `emails/` — the templates (TypeScript functions returning `{ subject, html, text }`), the copy in
  five languages (`emails/i18n.ts`), the Resend client (`emails/resend.ts`, plain `fetch`) and the
  link signing (`emails/links.ts`). Table-based, inline-styled, 600 px, dark-mode aware, with a
  VML button for desktop Outlook, a preheader and a plain-text part. Every visitor value is
  escaped.

**Environment (Netlify, set by the owner):**

* `RESEND_API_KEY` — required for every email; use Full access because newsletter confirmation
  and unsubscribe manage contacts and segments. Sending access alone cannot do that. The confirm and unsubscribe links are signed with
  a key derived from it (HKDF-SHA-256, salt `outbrick-newsletter-v1`), so there is no second
  secret; rotating the Resend key invalidates links already sent.
* `RESEND_SEGMENT_ID` — the "OutBrick News" segment confirmed subscribers are added to.
* `RESEND_SEGMENT_ID_EN`, `_FR`, `_DE`, `_ES`, `_JA` — optional per-language segments. Each
  confirmed subscriber is also added to their language's, so each language's issue can go to its
  own readers.
* `NEWSLETTER_POSTAL_ADDRESS` — the postal address line every campaign's footer must carry; only
  `scripts/send-newsletter.mjs` reads it, and a real send refuses to go out without it.

Without `RESEND_API_KEY` nothing breaks: submissions are stored by Netlify as before and the
function logs that it skipped the email.

**Previews.** `pnpm build` renders every template in every language and checks each one (lang,
subject, preheader, plain text, escaping, alt text, presentation tables, size under Gmail's clip
limit); a broken template fails the build. On Deploy Previews and branch deploys only, it also
publishes them at `/email-previews/` (noindex, never on production, never in the sitemap). Locally,
`pnpm emails:preview` writes them to `outputs/email-previews/`.

### The team's copy of every submission

After the visitor's email, `submission-created` sends the team its own copy, in the same
inboxes that handle everything else: contact, careers and affiliate from and to
`support@outbrick.site`, newsletter sign-ups from and to `news@outbrick.site` (`TEAM_INBOX` overrides
the recipient for testing). It is drawn in the same
design (`emails/team.ts`). It leads with the visitor's message or cover note, lists every field they
filled in (never their IP address), shows the page they were on, their language, the time and
whether their acknowledgement went out, and has a Reply button. Reply-To is the visitor, so
replying from Mail answers them. It is always English, and it is skipped for the honeypot and for
spam, like the visitor's email. Previews: `team-*.<lang>.html` under `/email-previews/`, where
the language is the visitor's. After deployment, verify delivery of these team copies before removing Netlify’s two plain
notification rules (Project configuration → Notifications), which otherwise duplicate them.
Resend rate-limit responses are retried up to three times with backoff and Retry-After, within
a 12-second budget per email. Exhausted failures remain logged against the stored submission.

### Sending a newsletter issue

An issue is a JSON file in `emails/issues/` (see `2026-10-sample.json`): per language a subject,
a preheader, a hero, two or three stories with images, an optional "What's new in OutBrick"
release block and a call to action. Body text takes `**bold**`, `*italic*` and `[links](https://…)`;
nothing else, and it is escaped first.

```sh
# Render every language to outputs/newsletter/<id>/ — sends nothing, needs no key
pnpm newsletter emails/issues/2026-10-sample.json --dry-run

# Send one test per language (or --locale fr) to yourself
RESEND_API_KEY=… pnpm newsletter emails/issues/2026-10-sample.json --test you@example.com

# Create draft broadcasts in Resend (one per language, to its segment), review them there…
RESEND_API_KEY=… RESEND_SEGMENT_ID_EN=… pnpm newsletter emails/issues/<issue>.json
# …then send (or --schedule "in 1 hour")
RESEND_API_KEY=… NEWSLETTER_POSTAL_ADDRESS="…" pnpm newsletter emails/issues/<issue>.json --send --locale en --broadcast-id <reviewed-draft-id>
```

Without per-language segments, `--locale <xx>` sends that one language to the whole
`RESEND_SEGMENT_ID` segment. Broadcasts use Resend's own `{{{RESEND_UNSUBSCRIBE_URL}}}`, which sets
the same `unsubscribed` flag as our link. Remember that `.env*` files are git-ignored; never commit
a key.

### The newsletter design as Resend templates

The same campaign layout also lives in Resend as five published templates, **OutBrick News (en)**
… **(ja)** (aliases `outbrick-news-<locale>`), for individual template-based test emails. Templates are not Broadcasts and are not a
subscriber campaign send path. To send to the subscriber segment, use the JSON issue workflow
above to create a Broadcast draft, review it in Resend, then send that reviewed draft by ID. `scripts/build-resend-templates.mjs` renders `newsletterCampaign()`
with Resend variables in place of the content and writes `outputs/resend-templates/<locale>.html`,
`.txt` and `.json`. `pnpm build` runs it with `--push-on-production`: on Netlify's production
deploy it creates or updates each template by alias and publishes it, so Resend always carries the
design that is live. Anywhere else it only writes the files, and a failed push never fails a deploy.

The 32 variables are `SUBJECT`, `PREHEADER`, `EYEBROW`, `HERO_TITLE`, `HERO_BODY`,
`HERO_IMAGE_URL`/`_ALT` (1200×630), `STORY1…3_TITLE`/`_BODY`/`_IMAGE_URL`/`_IMAGE_ALT` (square)
/`_LINK_LABEL`/`_LINK_URL`, `CTA_LABEL`, `CTA_URL` and `POSTAL_ADDRESS`, plus `HERO_BODY_TEXT` and `STORY1…3_BODY_TEXT` for the plain-text part. Each falls back to the
sample issue in that language (and `POSTAL_ADDRESS` to `NEWSLETTER_POSTAL_ADDRESS`), so a preview in
Resend shows a real letter: replace every fallback before sending. HTML body variables are inserted as HTML,
so a body may use `<strong>`, `<em>`, `<a href="…">` and `<br>`, and plain `&` `<` `>` must be
escaped. When editing a formatted body, also update its `_TEXT` variable with plain text
(no HTML tags) for recipients who read text-only emails. Unsubscribe is Resend's `{{{RESEND_UNSUBSCRIBE_URL}}}`. The layout has exactly three
stories; for two, or for the "What's new" block, use the JSON issue and `pnpm newsletter` above.
Change the design in `emails/`, never in the Resend editor: the next production deploy overwrites
the templates.
