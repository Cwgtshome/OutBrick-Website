# OutBrick Email System

The design system for every email OutBrick sends: its foundations, components, the cast of host
friends, the rules for the interactive layer, how to check a change, and the roadmap. Delivery,
queues, Resend and analytics are in [EMAIL-LIFECYCLE.md](EMAIL-LIFECYCLE.md); this file is about
what a reader sees and touches.

Current as of 9 October 2026 (`main` 85d7177 and later). The owner reviewed the system and
approved it as it stands.

## The review page

[`docs/email-system/index.html`](email-system/index.html) is the **OutBrick Email System** page:
every template live, switchable by language, phone/desktop width, light/dark and Apple Mail versus
Gmail/Outlook, followed by the cast, foundations, components, customer journey, analytics, Resend
features, retention ideas and the ship checklist.

- Build it with every email rendered from source: `pnpm emails:system` → `outputs/email-system/`
  (git-ignored). Serve that folder (`python3 -m http.server --directory outputs/email-system`);
  the page fetches its emails, so `file://` does not work.
- A published copy for the owner lives at <https://claude.ai/artifact/QptuwL2woRhF7uPCZyenqq>
  (private to the owner). Republish it from the built folder after a design change.
- The page's statistics and "Shipped" checklist are dated; update them when you rebuild.

## Foundations

**Colour** is the website's own tokens (`app/styles/editorial.css`), in `emails/core.ts` `color`:
indigo chrome `#1a1350`, cream page `#fff3dd`, paper reading plate `#fffaf1`, text on paper
`#1d1747` (15.6:1), lilac on ink `#c9c2ff` (10.9:1), gold action `#ffc53d` with its foot
`#b8780a`, link `#3b2fb0`. Every text colour clears 4.5:1 on its surface in light and dark.

**The course** is the six-colour stripe (`course`, the same as the site header): under the header
and closing the paper above the footer, and in bullets and section breaks.

**Bricks in puzzles** use the game's palette from the game repo's `DESIGN.md` (`BRICK` in
`emails/friends.ts`), each with a foot and a label ink that reads on its face.

**Type**: Fredoka 600 for headings, buttons, names and speech; Figtree for body (17 px, 1.6) and
eyebrows (13 px, 800, tracked capitals). Web fonts load from `www.outbrick.site/fonts`; fallbacks
are Arial Rounded and the system stack, and Japanese uses Hiragino Maru Gothic.

**Frame**: one 600 px column, fluid on phones without media queries, a fixed ghost table for
Outlook. Indigo header and footer, the cream paper between them.

## Components

All in `emails/core.ts` and `emails/friends.ts`; templates compose them.

| Component | Function | Notes |
| --- | --- | --- |
| Shell | `shell({ ctx, title, preheader, body, footer, host, nav })` | Header with wordmark and menu, course stripes, paper, brand footer. `nav` is on by default. |
| Header menu | `navBlock` (brand.ts) | Five site links. Folded behind a ☰ at every width where checkboxes work; a row in Gmail/Outlook/Yahoo. |
| Host stage | `stage(ctx, host)` via `shell({ host })` | Friend on a studded plinth in their colour, with a speech bubble (a fixed mood line, never reader text). |
| Button | `button()` | The one action: gold brick, darker foot, two studs, moulded highlight; VML for Outlook. |
| Ghost button | `ghostButton()` | A quieter secondary action. |
| Plate | `panel()` | Cream plate with a row of studs in the accent colour. |
| Bullets | `bricks()` | Small studded bricks in the course colours. |
| Section break | `rule()` | Five small studded bricks. |
| Reveal | `reveal()` | Tap to show a tip; shown plainly where checkboxes are stripped. |
| Picks | `picks()` | One-tap answers (yes/no, ratings) as tiles, each a signed link to a confirmation page. |
| Puzzle | `puzzle(ctx, board, copy, host)` | A real board in table cells. Tap the brick that moves first. |
| Friend grid | `friendGrid()` (lifecycle.ts) | The nine friends cheering on name plates (welcome 3). |

## The cast

Each email a reader gets opens with one friend. Art: `public/assets/email/friends/<friend>-<pose>.png`,
192 px, about 6 KB, cut by `scripts/build-email-friends.py` from the game repo's approved
`PreparedMascots` renders (idle, cheer, think). Never use the pre-redesign blob renders.

| Friend | Role in the game | Hosts |
| --- | --- | --- |
| Bloo | The one with the watch | News, releases, the welcome letter, confirmations, web pages |
| Peach | The careful planner | Account security, data export, notices, welcome 2 tips |
| Sprout | The one with questions | Support: we got it, replies, solved threads, request links |
| Bricko | The one doing reps | Fixed in X, affiliates, careers |
| Zippy | The one who drifts off | Still want these?, preferences, badges |
| Vio | The critic with headphones | Did we solve it?, moderation, bounced replies |
| Moss | The farmhand | Community sign-in, welcome, digests |
| Flurry | The one in the scarf | Events and seasons |
| Poppy | The storyteller | Replies and mentions, welcome 3 |

**Moods** (`friendLine`) are written per language: welcome, key, tip, friends, release, news, event,
miss, prefs, got, reply, fixed, rate, yay, thanks, security, notice, bye, digest, badge, puzzle,
oops. Add a mood in all six languages at once, in each language's register (fr vous, de Sie, es tú,
pt-BR você, ja polite).

## The interactive layer: rules

These rules come from testing in WebKit and in Apple Mail and iOS Mail themselves (9 October 2026).

1. **Gate it.** Interactive CSS lives in its own `<style>` block inside
   `@media screen and (-webkit-min-device-pixel-ratio:0)`, so only clients that toggle reliably
   (Apple Mail, iOS Mail, Samsung Email) get it, and a client that rejects any of it drops only it.
2. **Hang visibility off the control.** Show a control's UI with `.ob-x-input ~ .thing`, never
   unconditionally: Gmail's apps can strip `<input>` but keep the CSS, and then a puzzle showed
   dead buttons and hid its answer.
3. **Never start invisible.** Mail pauses animations in a window behind others. An animation
   that begins at `opacity: 0`, or holds a backwards fill, leaves its element invisible. Start
   every keyframe from a visible frame and use no fill.
4. **Unique ids.** `shell()` gives every `id`, `for` and `name` that starts with `ob-` a
   per-message suffix, so two emails shown together never toggle each other. Style by class;
   never select by `#id` in CSS.
5. **Readers first.** The ☰ is `aria-hidden`; the links stay in reading order. Every image has an
   alt (the friend's name), every bubble is real text, and `prefers-reduced-motion` stops all
   motion.
6. **Team copies stay plain**: `nav: false`, no host.

## Puzzles

A puzzle is data: `{ size, bricks: [{colour,row,col}], gates: [{colour,side,index}], solution,
options }` plus copy `{ eyebrow, question, solved, hint, answerLabel, answer, cta }`. The first
brick in `solution` is the answer; each brick in `solution` leaves through its own gate in order.
Only author boards that are true under the game's rules (slide until stopped; a brick leaves
through the gate of its colour) and have exactly one first move.

Shipped: `firstPuzzle` (welcome 2, hosted by Peach) and `weeklyPuzzle` (the `newsletter-puzzle`
sample, hosted by Sprout). Any issue file can carry `"puzzle": { host, board, copy }`.

## Links and analytics conventions

- Every send carries a `form` tag. `sendEmail` and the broadcast paths turn it into
  `utm_campaign` on plain site links (`utm_source=outbrick-email`, `utm_medium=email`). Signed,
  sign-in and confirmation links, and `/.netlify/`, `/api/` and `/r/`, are never changed.
- The footer App Store badge's `ct` becomes `email-<form>`. App Analytics counts it only once
  `APP_STORE_PROVIDER_TOKEN` is set in `lib/app-store-url.ts`.
- Resend events land in `email_events` and the admin Email report (see EMAIL-LIFECYCLE.md).

## Checking a change

1. `pnpm emails:preview`: renders all 300 emails (50 templates × 6 languages) and fails on a
   missing alt, an unescaped sample, a missing plain-text part, or HTML over Gmail's 102 KB.
2. `pnpm emails:check-interactive` (Playwright outside the project; see the script header): 22
   checks in WebKit on an emulated iPhone and desktop. Menu in all reader emails, host cheer,
   puzzle right and wrong, shake, inputs-stripped fallback, paused animations, dark mode.
3. The backend suite (`node --experimental-strip-types --test` over the `*.test.ts` files; in zsh
   expand a file list with `${=FILES}`).
4. For anything a reader taps, one real-client check: open the email in Apple Mail and on an
   iPhone (iPhone Mirroring works). Use a local `.eml` or a single test email to the owner,
   never a subscriber send.

Verified in real clients, 9 October 2026: Apple Mail on macOS (menu at desktop width, host tap,
puzzle cleared) and iOS Mail on the owner's iPhone (menu, host tap, puzzle cleared). The final
version was confirmed in Apple Mail. A second test to the iPhone was sent, but not yet opened
because the phone was in use. Gmail and Outlook were checked by simulation only.

## Roadmap

In order of value. Each item names what it needs.

1. **Brick of the week**, fortnightly: a puzzle issue to the Tips topic. Needs one authored board
   and copy per issue (six languages), sent with `scripts/send-newsletter.mjs`.
2. **Link the game to email**: an opt-in in the app's Settings. It would unlock milestone emails
   (village finished, chapter cleared, 100 days), hosted by the friend of that village. Needs app
   work and a hashed player id.
3. **Gentle comeback**: one email after 14 days away, from the friend whose village the player
   was in, with a puzzle. One per absence, never streak guilt. Depends on 2.
4. **More games**: a puzzle in release and event emails; a "spot the move" variant; a tiny
   two-step board. Keep each one fallback-safe.
5. **Friend of the month**: Poppy tells one friend's story with a themed board.
6. **Seasonal ticket**: the winter festival issue with Flurry and a themed puzzle (the event
   layout is ready).
7. **Topics**: merge the overlapping "Tips and events" and "Events and seasons" into
   "Puzzles and tips" and "Events and seasons".
8. **Per-language release sends** in each language's morning (`scheduled_at`), which needs
   per-language segments (the free plan allows three) or a plan upgrade.
9. **Accessibility**: a VoiceOver pass on iOS Mail, and alt text reviewed per language.
10. **Outlook desktop**: a real render check of the VML button and the ghost table.

Owner items outside code: the App Store provider token, the Resend plan (free tier: 100
emails/day), and the DNS records for `reply.outbrick.site` (see EMAIL-LIFECYCLE.md).
