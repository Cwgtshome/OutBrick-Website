# OutBrick website agent guidance

This repository is `Cwgtshome/OutBrick-Website`, published at
<https://www.outbrick.site> through Netlify. The native game is a separate repository.
Instructions about the older static `Brickout/website/` folder do not describe this deployment.

## Read before working

Read [current status](docs/CURRENT-STATUS.md), [architecture and operations](docs/ARCHITECTURE.md),
and [the documentation index](docs/README.md). Read the relevant implementation before editing.
Source and fresh production receipts override dated notes; the user's instructions take precedence.
Check Git status, remote, branch and concurrent ownership. Preserve unrelated changes and drafts.

## Product and design

- Keep released App Store functionality separate from work in development. The dated checkpoint
  is iOS 5.0.1 released, with 5.1 Slide & Match still in development; verify again before changing
  release claims. Do not announce a release from a branch, simulator build or planned What's New.
- Update all five languages: English, French, German, Spanish and Japanese. English routes are
  unprefixed; the others use `/fr`, `/de`, `/es`, `/ja`. Preserve localized navigation and metadata.
- Follow the existing `.ob-site` design, typography, colors and components in `app/globals.css`
  and `app/styles/`. Reuse the established cards, sections, focus states and responsive layouts.
  A `.ledger` row has a marker column: include its `.mark` before the content so prose has room.
- Keep the classic browser sliding demo explicitly distinct from the released iOS game and
  upcoming Slide & Match. Do not transfer its unlimited undo rule to the native game.
- Preserve historical release notes and dated articles. Label older screenshots as archival
  instead of presenting them as proof of current gameplay.
- Character animations and text bubbles remain; character vocalizations and vocal praise are
  removed. VoiceOver announcements, music and gameplay sounds remain.
- Ground economy copy in current app source: no timer, lives charged on loss, restart after a
  move counts as a lost attempt, first undo per board free, five-undo tank with one restored every
  25 minutes, rewarded undo pays two, eight video placements with 39 total daily views,
  and the per-attempt 300 → 500 → 900 move-continue ladder. Recheck these rules when source changes.

## Backend and delivery

- Retain Netlify Functions + Netlify Database (Postgres) for the community, Netlify Blobs for
  uploads, and Resend for email. CloudKit remains appropriate for native game sync; do not migrate
  the forum to CloudKit without a new user instruction and an assessed migration plan.
- Public routes are prerendered by React/vinext into `dist/client`; APIs and thread edge rendering
  are separate Netlify functions. Do not describe this repository as a no-Node static folder.
- Keep SQL parameterized, transactions intact, migrations additive, and preview data separate
  from production. Use the PGlite test harness for local database tests.
- Preserve origin checks, hashed session/token storage, OAuth state/nonce validation, provider
  token verification, Markdown escaping, rate limits and email idempotency. Never bypass auth
  or moderation to make a test pass. Optional features must honor configuration gates.
- Preserve the scheduled-job idle gates in `netlify/community/idle.ts` and visible/active-only
  polling. Avoid queries on skipped scheduler ticks; unnecessary wakes use database credits.
- Secrets belong in Netlify environment variables, never Git, chat, logs, screenshots or PR bodies.
  Keep Apple PEM newlines intact; `signEs256` accepts actual newlines or literal `\n` sequences.
- Resend needs Full access for contact/segment management. Rotating `RESEND_API_KEY` invalidates
  existing signed newsletter links. Do not send subscriber broadcasts as part of a routine test.
- Keep `/app-ads.txt` and `/.well-known/apple-app-site-association` available with correct content
  types. Preserve localized 404s, challenge routes and community shell rewrites; do not add a
  catch-all that turns missing legal documents into a successful home-page response.

## Verification and handoff

Use Node 22.13.0 and pnpm 10.12.1, matching Netlify and CI. Install with the frozen lockfile.
For code/content changes, build before lint and run the relevant audits/tests listed in
[architecture](docs/ARCHITECTURE.md). Browser audits use the exact built artifact in CI.
For documentation-only changes, validate links, referenced paths, factual claims and whitespace;
do not manufacture app or live sign-in proof from a documentation check.

Report source tests, browser evidence, provider configuration, delivery and actual user sign-in
separately. An enabled sign-in button does not prove a successful login; an accepted email does
not prove inbox placement. A pushed commit is not proof of production publication: read
`/build-info.json` and inspect the resulting live behavior.

After a material change, update `docs/CURRENT-STATUS.md` with the commit/PR, dated evidence and
remaining checks. Keep `CODEX.md` and `CLAUDE.md` as entry points to this shared guidance rather
than duplicating a second version of the project state.

## Administrative dashboard checkpoint

Read [admin and editorial operations](docs/ADMIN-AND-EDITORIAL.md) for the role matrix, exact verified owner allowlist, draft/publish workflow and deployment gates. Do not grant domain-wide admin access or promote an Apple relay account without explicit instruction. Existing static pages and journal stay Git-managed; new editorial content uses the database dashboard.

- Forum owner clarification (7 October 2026): verified admin bootstrap is limited to `support@outbrick.site` and `mourad.hamdi@outbrick.site`. `mourad@outbrick.site` is incorrect. `news@outbrick.site` is the news staff mailbox, bootstrapped through `COMMUNITY_TEAM_EMAILS` only after its own verified email-link sign-in. Team can write drafts and reply/start Announcements; admin publishes and manages roles. Team does not receive moderator access.
