# OutBrick website

The public site for **OutBrick: Block Sort Puzzle**, served at
[www.outbrick.site](https://www.outbrick.site).

## What is in here

`site/` is a finished static build — every page prerendered, nothing left to compile. Netlify
publishes it as-is (`netlify.toml` sets `publish = "site"` and no build command).

The **source** is not here. It is the Next/vinext app in the OutBrick app repository under
`website/`. To change the site:

1. `pnpm build` in that `website/` directory — it prerenders into `website/dist/client`,
2. copy `website/dist/client` over `site/` here,
3. commit and push; Netlify publishes on push to `main`.

## Two files that carry real obligations

* `site/app-ads.txt` — the IAB authorised-sellers record. AdMob crawls it at the root of the
  developer website named on the App Store listing, so **this domain and the App Store
  marketing URL have to stay the same host**. Change one and the other must follow, or the
  app quietly goes back to unverified and a share of bids are refused.
* `site/.well-known/apple-app-site-association` — universal links. It must be served as
  `application/json`; it has no extension for a host to infer that from, which is why
  `site/_headers` sets it explicitly.
