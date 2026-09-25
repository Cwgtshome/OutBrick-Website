# Translating journal articles

You translate one batch of 10 journal articles (`lib/journal-batches/batch-N.ts`) into one
language, into `lib/blog-l10n/extra/<locale>-<N>.ts` (it already exists and exports an empty
`ExtraGuides` object named `<locale><N>`, e.g. `fr3`). Touch no other file.

## Read first
- The top of `lib/i18n/blog.ts`: the `ExtraGuideTranslation` shape and `localizeArticle`, which
  fails the build if anything is missing.
- The existing cornerstone translations in your language, `lib/blog-l10n/<locale>.ts`. They set the house style:
  - register (vous / Sie / tú, as the home page uses it; です/ます in Japanese);
  - typography (French narrow no-break spaces before : ; ? ! and inside « »; Japanese 「」);
  - game terms as in `lib/i18n/home.ts` (French: plateau, brique, porte, annulation, objectif de coups…).
  Match them exactly.

## Each article
Key: the English slug. Value: an object with the fields below.
- `title`: phrased the way people search in that language. At most 60 characters, with CJK counted double.
- `dek`: at most 155 characters. It is the meta description.
- `imageAlt`: a translated description of the cover.
- `tags`: 4–6 terms people search for in that language.
- `intro`: the translated intro.
- `keyTakeaways`: the same number as the English.
- `sections`: keyed by the English section `id`. Each section has:
  - `title`;
  - `paragraphs`, the same count as the English;
  - `bullets`, the same count, only if the English has them;
  - `note`, only if the English has one.
- `pullQuote`: must appear word for word in your translated body.
- `faqs`: the same number as the English, and in the same order.

Write a natural, idiomatic article that a native reader would take for original writing. Do not translate word for word.
- Keep every fact, number and hedge exactly. Research findings must stay as cautious as in the
  English. No medical claims.
- Keep every inline link `[label](/path)`. Translate the label and keep the path exactly as in
  the English (`/blog/…`, `/play`, `/#fair`, `/daily`…). The site maps each path to your
  language's page when one exists. External links (`https://…`) stay as they are.
- In-text citations: keep the author names and years (e.g. "Sio et Ormerod (2009)").
  References are not translated and are not part of your file.
- Product and character names stay the same: OutBrick, Brick Pass, Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio, Zippy.
  Use the App Store's official terms for Apple features in your language (VoiceOver, iCloud, widgets…).

## Check before you finish
`pnpm -s build` (localizeArticle throws on any count mismatch), `pnpm -s lint`,
`node scripts/audit-seo.mjs` (0 errors), `node scripts/check-links.mjs` (all resolve). Pages only
publish once all four languages carry a guide. To see yours rendered, temporarily add your
slugs to the other three languages? No: instead, trust the build's shape checks and read your
file once more against the English for accuracy and tone. Commit on your branch; do not push.
