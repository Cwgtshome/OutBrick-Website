# OutBrick App Clip: plan

An App Clip lets someone who does not have OutBrick play one board in a few seconds from a
link, a QR code, an NFC tag or a Messages bubble, without installing the full app. For
OutBrick the obvious uses are **challenge links** (`/c/<level>`) and **daily boards**: tapping
a friend's dare opens that exact board, then offers the full app on a clear.

It has to be built in Xcode in the game repo. The website side is small and is described here
so it can go live the day the Clip ships.

## 1. In the game repo (Xcode)

1. **Add the target.** File › New › Target › App Clip. Its bundle ID must be a child of the
   app's: `com.risehush.brickout.Clip`.
2. **Keep it under 15 MB uncompressed** (iOS 17+ allows up to 100 MB for digital-only
   invocations, but 15 MB keeps QR and NFC invocations working on every OS). Share the board
   engine, the level data for the Journey's first chapters and the brick art. Leave out the
   Journey map, the shop, ads, Game Center and the villages.
3. **Associated Domains** on the Clip target: `appclips:www.outbrick.site`. The full app keeps
   `applinks:www.outbrick.site`.
4. **Handle the invocation URL** in `onContinueUserActivity(NSUserActivityTypeBrowsingWeb)`.
   Parse it with the same `Challenge.init(url:)` the app uses (`/c?lv=…&par=…&beat=…` and
   `/c/<n>`), and open that board.
5. **On a clear**, show `SKOverlay(configuration: SKOverlay.AppClipConfiguration(position: .bottom))`
   so the full app is one tap away. Progress can move into the full app through the shared app
   group container.
6. **No tracking and no ads** in the Clip. Apple forbids advertising tracking in App Clips, and
   it matches the site's promise.

## 2. App Store Connect

- **Default App Clip Experience:** header image 1800 × 1200, subtitle ("Play the board you were
  dared to"), action **Play**.
- **Advanced App Clip Experiences:** register `https://www.outbrick.site/c` as a prefix URL, so
  every `/c/…` link (and later `/daily`) opens the Clip.
- **App Clip Codes:** generate them in App Store Connect for the press kit, stickers and
  packaging. They encode the same `/c` URLs.

## 3. On the website (ready to do the day the Clip ships)

1. **AASA.** Add the Clip to `public/.well-known/apple-app-site-association`:

   ```json
   "appclips": { "apps": ["N8QNP8L662.com.risehush.brickout.Clip"] }
   ```

   Keep the existing `applinks` block. Netlify already serves the file as JSON (`public/_headers`).
2. **Smart App Banner with Clip.** On `/c` (and `/daily`), add a second meta tag so Safari shows
   the Clip card:

   ```html
   <meta name="apple-itunes-app" content="app-id=6807997465, app-clip-bundle-id=com.risehush.brickout.Clip, app-clip-display=card">
   ```

   The current banner lives in `app/site-document.tsx`. `/c` needs its own version.
3. **Challenge page copy.** The primary button on `app/(en)/c/challenge-landing.tsx` changes from
   "Download on the App Store" to "Play it now, no install" on iOS 14+. The App Store badge
   becomes the secondary action.
4. **Verify.** Run Apple's App Clip diagnostics on a device (Settings › Developer › App Clips
   Testing › Diagnostics) against `https://www.outbrick.site/c/42`.

## 4. Why it is worth it

Every challenge sent from Messages already lands on the website today, where the visitor
reads about a board they cannot play without installing first. The Clip removes that step:
the dare is playable at the moment it is received, and the install comes after the player
has had a good time. That is the most convincing moment to offer the full app.
