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
