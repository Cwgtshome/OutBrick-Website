# Journal writing brief (for every new article)

OutBrick is a calm sliding-brick colour-sort puzzle for iPhone, iPad, Mac, Apple TV, Apple Vision
Pro and Apple Watch, by Mourad Hamdi (Founder & CEO). The journal (`/blog`) publishes articles
that are genuinely useful to players, parents, designers and curious readers, backed by peer-reviewed
research. Every article must be worth reading even for someone who never installs the game.

## Where articles go

- Write your articles into your batch file `lib/journal-batches/batch-N.ts` (the `BlogArticle`
  type and the copy conventions are at the top of `lib/blog.ts`; read two or three existing
  articles there first and match their voice, structure and depth).
- Do not edit `lib/blog.ts` or anyone else's batch file.
- Covers: `pnpm covers <slug> --category-color <colour>` writes `public/blog/<slug>.webp` from real
  game art. Look at a few; if one looks wrong, `--force` after changing nothing is a no-op because
  the slug seeds it, so just leave it unless it is broken.

## Every article

- **Length and shape:** about 1,200–1,800 words. `intro`, 3 `keyTakeaways`, 4–6 `sections` (each with a
  stable kebab-case `id`; the table of contents and section links are built from them), optional
  `bullets`/`note` in a section, one `pullQuote` lifted verbatim from the body, and 3–5 `faqs`.
  The FAQ answers are the text of the FAQPage rich result, so each must be a complete, standalone
  answer of 1–3 sentences.
- **SEO:** `title` is what people search for, written for humans, 45–65 characters, no clickbait.
  `dek` is the meta description: 120–160 characters, specific. `slug` is short kebab-case keywords.
  `imageAlt` describes the cover in plain words. 4–6 `tags`, lower case, reusing existing tags
  where they fit (see `lib/blog.ts`).
- **Metadata:** `publishedAt: 'September 24, 2026'`, `updatedAt: 'September 24, 2026'`, `readingTime` from
  the word count at 230 words a minute (`'7 min read'`). `authorId`: `'outbrick-editorial'` for
  research pieces, `'mourad-hamdi'` for design/opinion pieces written from the studio's view.
- **Categories and colours (use exactly):**
  - Player habits → `blue`
  - Game craft → `purple`
  - Success stories → `red`
  - Inclusive design → `teal`
  - Learning through play → `gold`
  - OutBrick practice → `green`
  - Social play → `pink`
- **British spelling.**

## Citations: peer-reviewed, APA 7, verified

- **At least 4 references per article**, all peer-reviewed (journal articles, or conference
  papers with DOIs such as ACM CHI / CHI PLAY / FDG / IEEE), each with a DOI.
  - `url` is exactly `https://doi.org/<doi>`.
  - `citation` is APA 7 without italics: `Surname, A. A., Surname, B. B., & Surname, C. (Year). Title in sentence case. Journal Name in Title Case, volume(issue), first–last.`
  - `label` is the in-text form: `Surname (Year)`, `Surname & Surname (Year)` or `Surname et al. (Year)`.
  - `id` is kebab-case and unique within the article.
- **Never cite from memory.** Find each paper and confirm its DOI and metadata on Crossref first,
  e.g. `curl -s "https://api.crossref.org/works?query.bibliographic=<words>&rows=5" | …` or
  `curl -s https://api.crossref.org/works/<doi>`. Only then write the citation.
  - Write what the paper actually found: its design, its sample and the size and limits of the
    effect. Read the abstract (Crossref often carries it; otherwise the publisher page).
  - Never overstate a result. If the evidence is mixed, say so. No medical or treatment claims.
- Every section that relies on research lists those reference ids in `sourceIds`, and every id
  there must exist in `references`.
- Run `NODE_USE_ENV_PROXY=1 pnpm verify:refs` and fix every ✗ it reports for your articles.
  It checks each DOI on Crossref against the first author, the year and the title.

## Linking

- **Internal:** each article has at least 4 in-body links written as `[text](/path)` in paragraphs,
  bullets or FAQ answers.
  - At least 2 go to other journal articles (existing ones in `lib/blog.ts` or others in your
    batch).
  - At least 1 goes to a site page where it genuinely helps: `/play` (play a board in the
    browser), `/daily` (daily board), `/support`, `/accessibility`, `/mascots`, `/whats-new`,
    `/#fair` (what lives, undos and ads cost), `/#journey`, `/about`, `/research`.
  - Link text describes the destination; no "click here".
  - `relatedSlugs`: 3 existing or same-batch slugs that are truly related.
- **External:** the references are the external links. You may also link, in the body, to at most one
  authoritative non-commercial page per article where it helps the reader (for example a WHO,
  NHS, W3C or Apple Human Interface Guidelines page), using a full `https://` URL. Only use a URL
  after `curl -sI` shows it resolves.

## Facts about OutBrick (never invent others)

- **Mechanic:** slide a brick and it glides until something stops it; every brick leaves through
  the gate of its own colour. Keys, locks, crates and gates appear on later boards.
- **Content:** 2,000 solver-verified boards, 100 chapters, a Journey of 167 brick-built villages, and nine brick friends
  (Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio, Zippy) with no voices, only text bubbles.
- **Rules of play:** a move limit and a target, never a clock. The first undo on every board is free. You have five lives
  (eight with the Brick Pass), and one refills every thirty minutes. Colour-blind glyphs are on by default.
  VoiceOver is supported. It plays offline, syncs progress with iCloud, and has widgets.
- **Ads:** only opt-in rewarded video (six placements). Never write "no ads" or "no lives".
- **On the website:** a daily board at `/daily` and playable boards at `/play`.
- When unsure, leave the claim out.

## Quality bar

- **Voice:** write like a thoughtful magazine (Wired, The Atlantic, Nautilus) for smart general readers. Use
  concrete examples, practical takeaways and honest limits. No filler, no listicle padding, no
  "In today's fast-paced world". Mention OutBrick only where it is a natural example (usually one section).
- **No duplicates:** check `lib/blog.ts` slugs and titles, and the other batches' topic lists, and never duplicate an
  existing article's angle.

## Before you finish

`pnpm -s build`, `pnpm -s lint`, `node scripts/audit-seo.mjs` (0 errors),
`NODE_USE_ENV_PROXY=1 pnpm verify:refs` (0 ✗), `node scripts/check-links.mjs` (all resolve).
Open two of your article pages in Playwright (Chromium at `/opt/node22/lib/node_modules/playwright/index.mjs`,
serve with `node scripts/serve-dist.mjs <port>`) at 1440 and 390 wide and look at a screenshot.
Commit on your branch. Do not push.
