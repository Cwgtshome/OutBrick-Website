# OutBrick growth plan: downloads, UGC, free PR and citations

The goal is iOS downloads, and every tactic here ends in one of two links: the website
(https://www.outbrick.site) or the App Store listing
(https://apps.apple.com/us/app/outbrick/id6807997465). Links from the site already carry
App Analytics campaign tags (`ct=web-…`). Fill in `APP_STORE_PROVIDER_TOKEN` in
`app/store-badge.tsx` (App Store Connect → App Analytics → Campaigns → Generate Campaign Link)
and every placement, affiliate and campaign below becomes measurable in App Store Connect.

The one rule that runs through all of it: OutBrick's edge is honesty — no clock, no dark
patterns, a ledger that says exactly what lives and ads cost. Marketing that contradicts that
(fake urgency, fake reviews, paid installs) costs more than it earns.

---

## 1. What the website already does for growth

| Built | Why it matters |
|---|---|
| Playable board on `/` and `/play` | A visitor learns the rule in five seconds, before any install decision |
| Share a result → `/play/result/<board>-<stars>` with a custom card image | Every clear becomes a link with a preview in Messages, WhatsApp, X, Discord |
| Smart App Banner | One-tap Get/Open for every iPhone and iPad visitor |
| Campaign-tagged App Store links | Which page, which button, which creator sent the download |
| 27 journal guides, FR/DE/ES/JA home + play | Search traffic in five languages |
| Press kit, wordmark and friends downloads | Journalists and creators can publish without asking |
| Affiliate programme with `/r/<code>` links (in progress) | Creators get paid for results, not promises |

## 2. UGC: get players to make the ads

**Mechanics to add in the game (highest leverage, needs the iOS repo):**
1. *Share a clear*: after a 3-star clear, a share sheet with a 9:16 video/image card
   (board before → after, stars, level) and the link `outbrick.site/play/result/…`. The website
   side exists; the app should produce the same card.
2. *Challenge a friend*: the iMessage app already sends challenges; make every challenge also
   work as a web link (`/c/<level>` is live) so non-players land on the site, not a dead end.
3. *Weekly board*: one hard board a week, same for everyone, posted on socials; the
   leaderboard in Game Center shows who cleared it in the fewest moves.

**Content formats that work for puzzle games on TikTok, Reels, Shorts and Snapchat Spotlight:**
- "Only 1% clear this in 8 moves" — a packed board, pause, solve. Put the target on screen.
- "Wrong answers only" — a funny bad solve, then the real one.
- Satisfying loops — bricks sliding out through gates, 6–10 s, no talking, trending audio.
- Friend reactions — Bloo checking his watch, Zippy's triple hop: the nine friends are the
  mascots and the recurring cast.
- Village tours — the 167 brick-built villages as short, calm scroll-throughs ("cozy game"
  audiences).
- Dev-log / behind the build — how the solver proves 2,000 boards are solvable; founder videos
  from Mourad perform well because indie authenticity is the point.

**Cadence:** 1 short per day on TikTok, cross-posted to Reels, Shorts and Spotlight; one
YouTube long-form a month (dev-log, "every village ranked"). Pin a "try it in your browser"
comment linking `/play`.

**Hashtags:** `#OutBrick #BlockSortPuzzle #PuzzleGame #CozyGames #iPhoneGames #BrainTeaser`.

**Creator programme:** the affiliate page gives every creator a code and `/r/<code>` link;
30 % of OutBrick's net proceeds from attributed in-app purchases (Apple's App Analytics is the
source of truth). Seed 20–30 micro-creators (5k–100k followers) in puzzle, cozy-game and
"satisfying" niches with a personal message, the creator kit, and early access to new village
themes. Micro-creators convert far better than big accounts for a free puzzle game.

## 3. Free PR: earn links to the site and the App Store page

**Assets (done or in progress):** press kit, press room with a 4.2 release and a founder quote,
boilerplate, the "cite OutBrick" block, high-res captures once exported (`docs/CAPTURES.md`).

**Where to pitch (all free):**
- *Apple*: the App Store editorial team — submit through App Store Connect → "Promote your app
  / Featuring nominations" for each update (4.2, new villages, seasonal Brick Pass). Apple
  features calm, accessible, well-crafted games; the VoiceOver support and colour-blind glyphs
  on by default are the angle.
- *Mobile game sites*: TouchArcade, Pocket Gamer, Pocket Tactics, 148Apps, AppAdvice,
  iMore/9to5Mac tips lines, Gamezebo. Pitch one angle per outlet, with
  a TestFlight or promo code.
- *Accessibility press*: AppleVis (blind and low-vision gaming community), Can I Play That?,
  AbleGamers — "a colour-sort puzzle playable entirely with VoiceOver" is a genuinely rare
  story.
- *Cozy / calm gaming*: newsletters and subreddits (r/iosgaming, r/CozyGamers, r/puzzles —
  follow each subreddit's self-promotion rules; post as
  the developer, answer questions).
- *Founder stories*: Indie Hackers, dev.to / Medium dev-log ("How we proved 2,000 puzzles are
  solvable"), Hacker News "Show HN" for the solver write-up, Product Hunt launch for a major
  update.
- *Journalist request services*: Qwoted, Featured.com, Help a B2B Writer (the HARO successors) —
  answer queries about game design, mobile gaming habits and accessibility as Mourad Hamdi,
  Founder & CEO; each answer that's used is a cited link.
- *Podcasts*: indie game dev and accessibility podcasts accept guest pitches.

**Pitch template (keep it under 120 words):** one-line hook (e.g. "A block-sort puzzle with no
clock and no forced ads, playable with VoiceOver"), three facts (2,000 solver-verified boards,
167 brick villages, six Apple platforms), links (site, App Store, press kit), a promo code
offer, and Mourad's contact.

## 4. Get cited: search, AI assistants and reference sites

- **Journal content that answers real questions** (the 27 guides): keep publishing one
  search-led guide per week. Topics with demand: "games like X", "best offline iPhone games",
  "Apple Watch games", "brain teasers for adults", "accessible puzzle games", "how to solve …".
  Each guide links to `/play` and the App Store once, naturally.
- **Structured data** (in progress): Organization, founder Person, VideoGame/SoftwareApplication,
  BlogPosting, FAQPage, BreadcrumbList, JobPosting, NewsArticle — so Google and AI assistants
  understand what OutBrick is and who makes it.
- **`llms.txt`** (in progress): a factual summary of OutBrick for AI assistants and crawlers.
- **Wikidata**: create an item for OutBrick (instance of: video game; developer, platform,
  publication date, official website, App Store app ID). Wikidata feeds Google's Knowledge
  Graph and many AI assistants. Add a Wikipedia article only once there is independent press
  coverage to cite.
- **Directories and databases**: IGDB, MobyGames, RAWG, Giant Bomb wiki, AlternativeTo,
  Product Hunt, Crunchbase (company + founder), LinkedIn company page. Keep name, description
  and links identical everywhere (NAP consistency).
- **Search Console + Bing Webmaster**: verified; submit the sitemap, watch coverage and
  queries monthly (`pnpm gsc report`, `pnpm bing report`), and refresh pages that rank 8–20.
- **IndexNow** on every deploy (`pnpm indexnow`) so Bing, Yandex and others pick changes up in
  hours.

## 5. App Store conversion (the last step of every funnel)

- Re-shoot the App Store screenshots: the live set still shows the withdrawn Rush timer
  (`docs/CAPTURES.md`). Lead with the calm-but-hard hook and the no-clock promise.
- A 15–30 s App Preview video (the site's `GameplayVideo` slot takes the same file).
- Custom Product Pages (the game repo has `asc_custom_product_pages.py`): one per audience —
  accessibility, cozy/calm, brain-teaser — each linked from the matching journal guide and
  creator campaign.
- In-app review prompt after a 3-star clear (never after a loss). Ratings unlock the site's
  rating line automatically at 20+.
- Localise the App Store listing for FR/DE/ES/JA to match the new site languages.

## 6. Measure

| Metric | Where |
|---|---|
| Downloads and proceeds by campaign (`web-*`, `aff-*`) | App Store Connect → App Analytics → Sources → Campaigns |
| Search queries, clicks, indexed pages | `pnpm gsc report`, `pnpm bing report` |
| Share-result links used | Netlify analytics / logs for `/play/result/*` |
| Creator performance | App Analytics per `aff-<code>` |

Review monthly; double down on the two channels that bring the cheapest retained players.
