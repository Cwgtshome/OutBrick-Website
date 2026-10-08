# Email images

- `social-*.png`, `app-store-*.png`: drawn by `scripts/build-email-images.mjs` from the website's
  own social glyphs (app/village-shell.tsx) and Apple's official badges (public/assets/badge).
- `feedback-bloo-{think,idle,cheer}.png`: the approved toy-brick Bloo from the game repository,
  `BrickoutCore/Sources/BrickoutCore/Resources/PreparedMascots/bloo-*.png` (512 px), trimmed and
  scaled to 192 px. Only approved brick-friend art goes in emails: the older blob-style renders
  under the game repo's `build/` (e.g. `build/mascots-check/*-sad.png`) are pre-redesign and
  must not be used. There is deliberately no sad expression: "not yet" is Bloo thinking.
