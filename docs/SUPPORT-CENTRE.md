# Support Centre

Added 9 October 2026. The Support Centre is the part of the site that helps a player *act* on a
problem, next to the Help Centre's guides (which explain) and the community (which discusses).
Every page exists in English, French, German, Spanish, Japanese and Brazilian Portuguese.

## What a player gets

| Where | What it does |
| --- | --- |
| `/support` and `/contact`: **Get help your way** | Three doors: fix it step by step, known issues (with the open count), track your request. |
| `/support/troubleshooter` | Pick a problem, then one step per card with **That fixed it** / **Still not working**, then a hand-off to a person with the problem already filled in (`/contact?topic=…&tried=<id>`). `?problem=<id>` opens a problem. Without scripts the whole guide shows as plain lists. |
| `/support/known-issues` | What is broken, who it affects, what to do meanwhile, and which update fixes it; recently fixed issues below. |
| `/support/request` | A player's own request, from the private link in our emails: status with a progress bar (Received, Answered, Fix on its way, Solved), every staff reply, "Did we solve it?", and a box to add details. Without a link: where to find one, and a form that emails the link again. Not indexed. |
| Every Help Centre guide, the troubleshooter and known issues | **Was this helpful?** Yes is one tap; No asks why (optional reason and comment) and offers a person straight away. |
| `/contact` | Topic-specific fields (level number; assistive technology; what was bought and when), prefill from the app and the troubleshooter (`device`, `os`, `app`, `level`, `assistive`, `tried`, `guide`, `source`), live suggestions of known issues, fixes and guides while typing (open in a new tab), an unsent draft kept on the device, "what happens next", and the case reference on the success screen. |

The contact acknowledgement, every staff reply and every "fixed in" email now carry a
**Track your request** link (signed, one year).

## How it works

- **Pages:** `app/support-centre.tsx` (server), `app/components/support/*` (client), styles in
  `app/styles/support.css` on top of `help.css`. Routes under `app/(en)/support/*` and
  `app/[locale]/support/*`.
- **Words:** `lib/support/copy/<locale>.ts` (typed by `SupportCopy` in `lib/support/model.ts`).
  Client components read them by locale from `lib/support/copy/index.ts`, because some entries
  are functions and cannot cross the server/client boundary as props. Contact-form phrases are in
  `lib/support/site-phrases.ts`, merged into the public phrase dictionary.
- **Troubleshooter steps** come from the Help Centre's *Troubleshooting common problems* guide in
  each language (`troubleshooter()` in `lib/support/content.ts`): each section is a problem; its
  list items are steps; its paragraphs are the intro; the guide's three quick checks come last.
  Change the guide and the troubleshooter follows. `problemIssue` links a problem to a known issue;
  `problemTopic` picks the contact topic for the hand-off.
- **Request tracking:** `netlify/lifecycle/player-cases.ts`. Signed links use purpose `case`
  (`emails/links.ts`); holding the link is the access. `GET /api/community/support/case`,
  `POST …/case/note` (adds a `note` event with `{"from":"player"}`, reopens an answered or closed
  case, cancels the pending "did we solve it?" email and emails the team),
  `POST …/case/link` (emails the link only to the address on the case; the answer is identical
  whether or not anything matched). Staff-only notes, actor ids and bookkeeping events are never
  returned. Contact-form details are kept on the case's `created` event (`data.details`).
  **No database migration was needed.**
- **Guide feedback:** `netlify/community/help-feedback.ts`. Anonymous monthly tallies per page in
  the `community-signals` store (R2), at `help-feedback/YYYY-MM.json`, with up to 40 recent
  comments per page; rate-limited per hashed IP (the hash is never stored with an answer). Two
  answers in the same instant can lose one increment: accepted at this volume. Staff read it on
  the admin dashboard (**Guide feedback**). A database table can replace this later if volume grows.
- **Dashboard:** case details from the form, "The player added details" events, and the guide
  feedback panel (this month and last, worst pages first, latest comments).

## Keeping known issues true

Edit `lib/support/issues/<locale>.ts` (same ids and order in all six). Move an entry to `fixed`
only when the version with the fix is on the App Store (Apple lookup), keep `checked` current, and
remove fixed entries after a few weeks. The entries on 9 October 2026: VoiceOver focus (fixed in
5.1.2, sent to Apple for review), missions on Slide & Match boards, pt-BR community links and the
untranslated "Advertising choices" label (all fixed on the game's main branch, shipping after
5.1.2), and the tip card in 5.1 (fixed in 5.1.1, live).

## Checks

`node --experimental-strip-types --test netlify/lifecycle/player-cases.test.ts` (8 tests: signed
access, privacy of staff notes, tampered/expired links, player notes and reopening, link resend,
email links, guide feedback tallies and staff-only reading), plus the existing lifecycle, admin,
forum and form suites, build, lint, typecheck, `audit:seo`, `check:links`, `check:jsonld`,
`check:help` and the localization audit.

## Recommended next steps

Ordered by value to players; the ones marked **owner** need a decision before building.

1. **In-app entry points (game repo).** Point Settings › Contact us at
   `/contact?source=app&device=…&os=…&app=…&level=…` (the form already reads them), and add a
   "Known issues" row that opens `/support/known-issues`. Players who write from the game then
   never type their device again.
2. **Screenshots on the contact form and request page.** Today players attach them by replying
   to the email. An upload needs an R2 path for unauthenticated uploads with size/type limits and
   abuse controls; reuse `netlify/community/uploads.ts`.
3. **Response-time promise (owner).** A stated target ("we reply within two working days") is
   the single strongest trust signal on a contact page, but it must be kept. The site makes no
   time promise today on purpose.
4. **Status banner (owner).** A one-line site-wide banner when something big is broken
   (sign-in, iCloud sync, purchases), driven by an editorial row so staff can turn it on without a
   deploy.
5. **Per-level help.** "Level 512 help" pages that link the community threads about a board are
   what puzzle players search for. Needs a decision on spoilers and on how threads are tagged with
   a level (the bug-report form already records `level`).
6. **Community programmes (owner).** A beta tester sign-up for TestFlight, an accessibility
   advisory group of VoiceOver and Switch Control players, and a monthly "from the team" post
   (what shipped, what we heard, what is next). These turn support into a relationship.
7. **Guide feedback loop.** Review the dashboard's worst-rated guides monthly and fix them; when a
   comment reveals a bug, open a case or a known issue.
8. **Privacy policy line.** Mention the anonymous "Was this helpful?" answers in the forms section
   (they hold no personal data, but saying so is the honest default).
