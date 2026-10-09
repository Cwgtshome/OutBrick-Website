# OutBrick Help Centre

The Help Centre lives at [/community/help](https://www.outbrick.site/community/help) and
`/<locale>/community/help`. It holds twenty team-written, illustrated guides to the **released**
iOS and iPadOS game, in English, French, German, Spanish, Japanese and Brazilian Portuguese. It
is the community's knowledge base: the forum is for questions the guides do not answer.

## Where things are

| What | Where |
| --- | --- |
| Data model, guide order, the version and date checked | `lib/help/model.ts` (`helpOrder`, `helpCheckpoint`) |
| English guides (the source) | `lib/help/content/en/*.ts` |
| Translations | `lib/help/content/<locale>.ts` (and `<locale>/*.ts` where split) |
| Help Centre interface words, six languages | `lib/help/ui.ts` |
| Support/Accessibility page sentences that point here | `lib/help/site-phrases.ts`, merged into `lib/i18n/public-pages.ts` |
| Rendering (hub, guide, inline markup, structured data) | `app/help-centre.tsx` |
| Guide search on the hub | `app/components/help-finder.tsx` |
| Styles | `app/styles/help.css`, scoped under `.ob-site .hc` and built from the site's brick primitives |
| Routes | `app/(en)/community/help/**`, `app/[locale]/community/help/**` |
| Screenshot catalogue | `lib/help/shots.json` (written by the importer) |
| Screenshots | `public/assets/help/<locale>/<id>-480.webp`, `-960.webp` |
| Consistency check | `pnpm check:help` (runs in CI) |

The pages are prerendered files, so Cloudflare serves them before the `/community/*` shell rewrite,
and the community client app deliberately leaves `/community/help` links alone
(`app/components/community/community-app.tsx`).

## Writing and changing a guide

1. Check the claim against the game's source for the **released** build, not a branch or a
   simulator build. The game repo's string catalog (`Brickout/Localizable.xcstrings`) has the
   exact on-screen wording in every language; guides quote it.
2. Edit the English article in `lib/help/content/en/`. Inline markup (see `lib/help/model.ts`):
   `**bold**` for on-screen labels, `[words](help:slug#section)` between guides,
   `[words](/path)` for site pages (the reader's language prefix is added), `{{Key}}` for keys
   and gestures, `` `code` `` for text to type.
3. Make the same change in every translation, keeping slugs, section ids, block order and
   screenshot ids identical. A guide missing from a translation falls back to English and is
   marked `noindex` in that language.
4. If the change follows a new release, update `helpCheckpoint` so every page's stamp is honest.
5. Run `pnpm check:help`, then `pnpm build`.

Economy, ads and accessibility claims follow the same rules as the rest of the site (AGENTS.md).
Do not describe unreleased work as available. Facts that the 5.1 research could not confirm in
source were left out rather than guessed.

## Screenshots

Every screenshot is a real capture of the released game, never a mock-up. Captures come from the
game repo's Debug build on an iPhone 17 Pro Max simulator, with the capture hooks documented in
its `docs/release/5.1-screenshot-plan.md` and `tools/store/v51/capture.sh`, in each language
(`-AppleLanguages`). Import a folder of PNGs named by screenshot id:

```bash
pnpm import:help-shots ~/Desktop/help-captures/en en
pnpm import:help-shots ~/Desktop/help-captures/fr fr
```

`--map 01-slide=board-slide …` renames store-capture files on the way in. English is required
for every id; other languages are optional, and a guide says "Screenshot shown in English" when
it falls back. Write alt text that describes what matters on the screen, including the visible
words, and keep captions short.

VoiceOver itself cannot be shown on a simulator, so the VoiceOver guides describe it in text.

## Checked on

Guides were written against OutBrick **5.1 (67)** and rechecked for **5.1.1 (68)**, released 8 October 2026 (a fix for a tip card that could block the board). Screenshots come from the 5.1 (67) build.
