# OutBrick website

The public site for **OutBrick: Block Sort Puzzle**, served at
[www.outbrick.site](https://www.outbrick.site).

Netlify builds it from this source on every push to `main` — `pnpm build` prerenders every
route into `dist/client`, which is what gets published. Nothing here is committed build
output, deliberately: an earlier version of this repository held a prerendered copy, and it
went a month stale without anybody noticing, still telling readers the game contained no
advertising SDK after the game had one.

## Two files that carry real obligations

* `public/app-ads.txt` — the IAB authorised-sellers record. AdMob does not find it from the
  app; it reads the developer website named on the App Store listing, takes that root domain,
  and fetches `/app-ads.txt` there. **This domain and the App Store marketing URL have to
  stay the same host.** Change one and the other must follow, or the app quietly goes back to
  unverified and a share of bids are refused.
* `public/.well-known/apple-app-site-association` — universal links. It only does anything
  for a build whose Associated Domains entitlement names this host, so it and the app ship
  together.

Both are served with explicit content types from `public/_headers`.

## Where the app lives

The game itself is a separate repository. This one is only the website.

## Forms and affiliate links

* The contact form (`contact`), the affiliate application (`affiliate`) and job applications
  (`careers`) are Netlify Forms, detected from the prerendered HTML. In the Netlify UI, form
  detection must be enabled (Forms → Enable form detection), and an email notification added
  for each form (Site configuration → Notifications → Form submission notifications) so
  submissions reach the inbox. The privacy policy's "Forms on this website" section describes
  exactly this; change one and the other must follow.
* `outbrick.site/r/<code>` 302-redirects to the App Store with `ct=aff-<code>` (netlify.toml).
  `node scripts/affiliate-link.mjs <code>` prints and checks a code's links.
