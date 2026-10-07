# OutBrick Community: the plan

*7 October 2026. The forum, support forum, FAQ and search for outbrick.site, built into the site.*

## The recommendation in one paragraph

Build the community into the website itself, on **Netlify Database** (managed Postgres that Netlify
provisions on deploy, with migrations applied before each deploy goes live and an isolated copy of the
data for every Deploy Preview), **Netlify Functions** for the API, **Netlify Blobs** for screenshots,
and **Resend** for every email. Do not use CloudKit for it, and do not bolt on a hosted forum
(Discourse, Circle, Flarum). The players who found OutBrick through AppleVis are the reason: the
community has to be as good with VoiceOver as the game is, and the only way to promise that is to own
every element on the page.

## Why not CloudKit, and why not Discourse

| | Netlify Database (chosen) | CloudKit public database | Hosted Discourse |
|---|---|---|---|
| Sign in with Google, Facebook, email | Yes, any provider | **No**: Apple ID only (CloudKit JS) | Yes (plugins) |
| Full-text search, in five languages | Postgres full-text + trigram | **No**: prefix match on indexed fields only | Yes |
| Email on reply, digests, moderation | Functions + Resend, our design | **No** server-side triggers to send mail | Yes, its own design |
| Moderation, roles, reports, rate limits | Ours, in SQL | Hard: security roles are coarse, no server logic | Yes |
| Our design system, VoiceOver behaviour | Every element ours | Ours (front end) | **Theming only**; its markup and focus handling are Discourse's |
| Localised with the site (en/fr/de/es/ja) | Same dictionaries, same URLs | Ours | Its own UI strings |
| Search engines see threads | Yes (edge-rendered) | Poor (client-only) | Yes |
| Running cost | Netlify plan + Postgres usage (free tier to start) | Free | ~$100/month hosted, or a server to run |
| Lives on outbrick.site, one account with the site | Yes | Yes | Separate subdomain and account |

CloudKit is the right tool for what it does in the app (iCloud sync, the Village Race), and it can
still feed the community later — for example, the app could open a pre-filled bug report. As the
forum's database it fails on three hard requirements at once: non-Apple sign-in, search and email.

## What AppleVis teaches us

AppleVis threads about OutBrick are where blind and low-vision players already report bugs
(the status bar that silences VoiceOver, resuming a level), ask for features (a no-graphics mode,
adaptive hints) and praise what works. The things that make that venue work for them:

1. **Plain, predictable pages.** One heading per post, a list of comments, no infinite scroll, no
   pop-overs that steal focus. Users navigate by headings and landmarks with the VoiceOver rotor.
2. **Bug reports with context.** Device, iOS version, app version, whether VoiceOver was on, steps.
3. **Email as a first-class client.** Many follow threads from Mail; replying by email matters.
4. **The developer answers in the open.** A visible "OutBrick team" badge, and status on bugs.

## Information architecture

`/community` (and `/fr/community`, `/de/community`, `/es/community`, `/ja/community`):

| Category | Purpose | Special behaviour |
|---|---|---|
| **Announcements** | Every App Store release, posted automatically when Apple approves it | Team only can start threads; everyone can reply |
| **Help & support** | "How do I…" questions | A reply can be marked **Solved**; solved answers surface in search and the FAQ |
| **Bug reports** | Something is broken | A structured form (device, iOS, app version, VoiceOver/Switch Control on?, steps, expected/actual); a public **status**: New → Confirmed → Fixed in 5.x → Released |
| **Ideas & feedback** | Feature requests | **Upvotes** (one per member), status: Under consideration → Planned → Shipped |
| **Accessibility** | VoiceOver, Voice Control, Switch Control, Larger Text, colour-blind play | Pinned guides; the team watches it most closely |
| **Show & tell** | Clears, screenshots, Journey milestones | Images with required alt text |
| **General** | Everything else | |

Plus **FAQ** (`/community/faq`): the support page's answers and threads the team promotes, and **Search**
(`/community/search`) across threads, replies and the FAQ.

Threads carry a **language** (the author's page language by default). Lists default to "my language
plus English", with a one-tap "all languages" filter; the UI itself is fully translated.

## Accessibility contract (the part we will not trade away)

- Landmarks: `header`, `nav` (breadcrumb), `main`, `aside` (category list), `footer`; a skip link.
- One `h1` per page; every post is an `article` whose heading is "*Author*, *date*" so the rotor's
  heading list is a table of contents of the thread.
- Pagination, never infinite scroll; "Jump to first unread" is a link, not a gesture.
- Every action (reply, upvote, mark solved, follow) is a real `button` or `a`, labelled with its effect
  and target ("Upvote ‘No-graphics mode’, 14 votes").
- After posting, focus moves to the new post and a polite live region says what happened.
  Errors are listed at the top of the form, linked to their fields, and announced.
- The composer is a plain `textarea` with Markdown (headings, lists, links, bold, quotes, code); no
  rich-text editor that fights VoiceOver. A Preview tab renders what will be posted.
- Images require alt text before they can be posted; the field explains why.
- Respect `prefers-reduced-motion`, `prefers-contrast`, Dynamic Type (rem sizes), dark mode.
- Target sizes ≥ 44 pt, visible focus rings in the site's colours, contrast ≥ 4.5:1 (tokens already pass).
- Timestamps are `time` elements with a full spoken date ("7 October 2026 at 09:14").
- Tested with VoiceOver on iOS and macOS, Voice Control and keyboard only, plus `pnpm audit:a11y` (axe) in CI.

## Accounts and sign-in

- **Sign in with Apple**, **Google**, **Facebook** (OAuth 2.0 / OpenID Connect, done in our own
  functions — no third-party identity service), and **email link** (a one-time sign-in link via
  Resend) for anyone who wants none of those. Passkeys are the next step after launch.
- Each provider switches itself on when its credentials are in Netlify; the page only shows the
  buttons that work.
- One member can link several providers. A member picks a **display name**; email addresses are never
  shown. Apple's "Hide my email" relay addresses work.
- Sessions: an HttpOnly, Secure, SameSite=Lax cookie holding a random token; the database stores only
  its SHA-256. 30 days, sliding. Every state-changing request checks `Origin`.
- Privacy: export my data, delete my account (posts become "Former member"), both self-service.
  The privacy policy and a new **Community guidelines** page say what is stored and why.

## Emails (all in the site's email design, all five languages)

| Email | When |
|---|---|
| Sign-in link | Email sign-in |
| Welcome | First sign-in |
| Reply to your thread / your post | Immediately, or batched every 15 minutes |
| Mention (`@name`) | Immediately |
| Watched category / thread | New thread or reply in something followed |
| Your bug or idea changed status | e.g. "Fixed in 5.1" |
| Your answer was marked Solved | |
| New release (Announcements) | Members who follow Announcements (default on) |
| Weekly digest | Opt-in |
| Moderation notice | A post was hidden, with the reason and how to appeal |

Every notification has a one-click unsubscribe for that kind of email (RFC 8058), and a settings page
with each switch. Replies sent **by email** to a notification are posted as replies (phase 2, via
Resend inbound on `reply.outbrick.site`).

## Release posts, automatically

A scheduled function runs hourly. It asks Apple's public iTunes Lookup API (the same source
`lib/releases.ts` cites) for the current version in each storefront. When the version changes — that is,
when Apple has approved and released it — it creates the Announcements thread **"OutBrick 5.1 is out"**
with the App Store's own What's New text in each language, links the App Store and /whats-new,
and emails the members who follow Announcements. It never posts twice for one version.

## Moderation and safety

- Roles: member, trusted member (earned), moderator, team (the "OutBrick team" badge), admin.
- New members' first two posts go to a review queue only if they contain links; otherwise they post
  straight away. Rate limits per member and per IP hash.
- Report a post (with a reason); moderators hide, edit, lock, pin, move, merge and ban; every action
  is logged. A hidden post's author is told why.
- Honeypot fields and a time-to-fill check on every form; no CAPTCHA (they fail blind users).
- No IP addresses stored in the clear; a salted hash for rate limiting only.

## How it is built

- **Pages**: `/community/**` is one prerendered shell per language (the site's chrome and CSS), and a
  client app inside it that talks to `/api/community/*`. Netlify serves every `/community/...` path
  from the shell of its language.
- **Search engines**: an edge function fills the shell's `<title>`, description, canonical and
  `DiscussionForumPosting` JSON-LD from the database, and puts the thread's posts in the HTML, so
  threads are indexable and readable without JavaScript.
- **API**: Netlify Functions (TypeScript), JSON, `/api/community/*`; input validated at the edge of every
  handler; SQL through `@netlify/database` with parameters only.
- **Database**: Netlify Database (Postgres). Tables: members, identities (provider links), sessions,
  categories, threads, posts, post revisions, votes, follows, notifications, reports, moderation log,
  email tokens, releases posted. Full-text search: a `tsvector` per post in the `simple` configuration
  plus `pg_trgm` for Japanese and fuzzy matches.
- **Uploads**: Netlify Blobs, images only, re-encoded and size-capped, alt text required.
- **Markdown**: rendered on the server to a strict allow-list of elements; links get `rel="ugc nofollow"`.

## Phases

1. **Launch** (this work): categories above, threads, replies, edit/delete, Markdown, solved answers,
   bug form + status, idea upvotes, follows, notifications and emails, search, FAQ, the five sign-in
   methods, moderation essentials, release posts, five languages, the accessibility contract.
2. **Next**: reply by email, image uploads, passkeys, weekly digest, machine translation of a post on
   request, trust levels, the app's "Report a bug" opening a pre-filled community report.
3. **Later**: Game Center link (badge for verified players), RSS per category, a public roadmap view.

## What the owner has to do (the code waits for it, safely)

The code ships with every provider off until its credentials exist. Never paste a secret in chat; add
each one in Netlify → Project configuration → Environment variables, marked secret:

1. **Sign in with Apple**: in the Apple Developer account, create a Services ID (e.g.
   `site.outbrick.community`), enable Sign in with Apple, add the domain `www.outbrick.site` and the
   return URL `https://www.outbrick.site/api/community/auth/apple/callback`; create a Sign in with Apple
   key. Then set `APPLE_CLIENT_ID`, `APPLE_TEAM_ID`, `APPLE_KEY_ID`, `APPLE_PRIVATE_KEY`.
2. **Google**: in Google Cloud Console, an OAuth client of type "Web application" with the redirect URI
   `https://www.outbrick.site/api/community/auth/google/callback`. Set `GOOGLE_CLIENT_ID`,
   `GOOGLE_CLIENT_SECRET`.
3. **Facebook**: in Meta for Developers, an app with Facebook Login, redirect URI
   `https://www.outbrick.site/api/community/auth/facebook/callback`. Set `FACEBOOK_APP_ID`,
   `FACEBOOK_APP_SECRET`.
4. Netlify Database provisions itself on the first deploy; Netlify may ask you to accept its terms once.
5. Your own member account becomes **admin** by setting `COMMUNITY_ADMIN_EMAILS` to your address(es).

## Phase 2 on the server: what the owner has to do

Phase 2 (reply by email, image uploads, passkeys, the weekly digest, translation on request,
trust levels, thread merges and the app's pre-filled bug report) is in the code. What needs no
credentials is on; the rest stays off, and `GET /api/community/session` says which in
`features: { passkeys, uploads, replyByEmail, translate, digest }`, so the pages only show what
works. Never paste a secret in chat; set each in Netlify → Project configuration → Environment
variables, marked secret.

1. **Reply by email** (`features.replyByEmail`). In Resend → Domains, add the receiving domain
   `reply.outbrick.site` and turn on receiving; Resend shows an **MX record** for
   `reply.outbrick.site` (host `reply`, its inbound mail server, priority 10). Add it at the DNS
   host for outbrick.site; it does not touch the MX records of `outbrick.site` itself, so
   support@ keeps working. In Resend → Webhooks, add the endpoint
   `https://www.outbrick.site/api/community/email/inbound` for the event **email.received**, and
   copy its signing secret (it starts `whsec_`). Then set `RESEND_WEBHOOK_SECRET` to that secret and
   `COMMUNITY_REPLY_DOMAIN` to `reply.outbrick.site` (`RESEND_API_KEY` is already set). From the
   next notification email on, single notifications carry a `Reply-To: reply+…@reply.outbrick.site`
   and say that replying posts the answer. To switch it off again, delete `COMMUNITY_REPLY_DOMAIN`.
2. **Translation on request** (`features.translate`). On plans with Netlify's AI Gateway, Netlify
   injects `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL` into functions by itself and nothing needs
   doing; otherwise set `ANTHROPIC_API_KEY` to an Anthropic API key. The model is Claude Haiku 4.5
   (`claude-haiku-4-5-20251001`); each post is translated once per edit and language, then cached.
3. **Weekly digest** (`features.digest`). Nothing to set: it uses `RESEND_API_KEY`, is off for every
   member until they switch it on in settings, and is sent on Mondays from 08:00 UTC by the
   scheduled function `community-digest` (production deploys only).
4. **Image uploads** (`features.uploads`) and **passkeys** (`features.passkeys`) need nothing: Netlify
   Blobs (store `community-uploads`) provisions itself, and passkeys use the site's own domain
   (`outbrick.site` as the relying party, so one passkey works on www and the apex). Set
   `COMMUNITY_UPLOADS=off` or `COMMUNITY_PASSKEYS=off` to hide either. Netlify's synchronous
   functions accept request bodies up to about 6 MB, so photos larger than that are refused by the
   platform before the 8 MB check; the page should shrink a large photo before uploading it.
5. **Trust levels**: the scheduled function `community-trust` runs daily at 04:00 UTC and promotes
   members to trusted (7 days, 10 visible posts, 2 solved answers or 5 votes on their ideas, no
   upheld report in 30 days). It never demotes; setting someone back to member is permanent for
   the schedule.

The app's **Report a bug** opens `/community/new?category=bugs&device=…&os=…&app=…&assistive=…&level=…&lang=…`
(see `bugDeepLinkParams` in `lib/community/contract.ts`); the form pre-fills, nothing is posted
until the member presses Post.

## Keeping the database asleep (credit-based Free plan)

Netlify Database suspends its compute after five idle minutes and bills while it is awake
(10 credits per compute-unit hour; the free plan has 300 credits a month). The scheduled jobs run
more often than five minutes, so they must not query Postgres just to find nothing to do.
`netlify/community/idle.ts` gates each one with a small Netlify Blobs store:

| Job | Schedule | Opens the database only when |
|---|---|---|
| community-notify | every 5 min | a write committed since its last run (a fresh token, written after every successful write request, sign-up, release post and badge award), pending work falls due (still settling, a member's hourly cap frees, a failed send's backoff ends, an interrupted send's 15-minute lease expires, an unconfirmed welcome reaches its 7-day expiry), or the daily sweep (08:00 UTC, or after 26 hours) |
| community-releases | hourly | the App Store versions differ from the fingerprint stored after the last successful run (Apple's lookup itself costs nothing) |
| community-digest | Mondays 08:00–10:50 every 10 min | that week's digest is not finished |
| community-trust, community-badges | 08:00 UTC daily | always (one shared daily wake) |

Failed sends back off 5, 10, 20 … minutes (at most 6 hours) and give up after 8 attempts, so an
outage or a revoked key can't keep the database awake. If Blobs is unreachable, a gate fails open
(the job queries as before). A notification is never lost to the gate: the notifier records the
token it read *before* querying, so anything committed during a run signals a newer token, and a
writer that dies between its commit and its signal is caught by the daily sweep.

**Idle budget.** A quiet month wakes the database about once a day (the 08:00 window shared by the
sweep, trust, badges and the Monday digest), plus once per App Store release: roughly 31–35 wakes
of a few minutes each, about 3–5 compute hours, well under the plan's limits (before the gates the
notifier alone kept it awake around the clock, about 720 hours). `idle.test.ts` simulates 30 quiet
days and asserts at most 31 notifier runs, and asserts no query at all on skipped ticks.

**Visitors still wake it.** Every page view of the community reads the database, and the bell and
live replies poll every 20 seconds, but only while the tab is visible and the reader has been
active in the last 10 minutes, so a tab left open overnight doesn't keep it awake. Heavy crawler or
visitor traffic is the remaining cost; if it becomes one, cache the anonymous GETs at the CDN.
