# Optional app analytics disclosure — prepared 17 October 2026

This is a prepared website disclosure update, not evidence of production publication or an App Store release. Supported iPhone/iPad builds are explicitly qualified; older builds lack the setting. Existing dated journal articles are preserved as historical material.

## Verified implementation and account evidence

The native worktree `/Users/mourad1/.codex/worktrees/cloud-level-preview/Brickout` adds FirebaseAnalyticsCore 13.0.1. `GameAnalytics.swift`, its BrickoutCore policy and native Info.plist are authoritative for consent, dispatch-epoch gating, pseudonymous event sanitization, SDK settings and hashed transaction deduplication. The website does not configure the native SDK.

- Default off; explicit install-local opt-in. No SDK configuration or pre-consent event queue. Native collection is limited to supported iPhone/iPad builds.
- Pseudonymous app-instance identifier with linked data under Apple's disclosure categories. Events are used for aggregate reports, but collection is not described as anonymous or aggregate-only.
- Sessions/screens, level starts/outcomes/time/difficulty/moves/goals, bounded resources/boosters, offers, purchase and ad funnels. New verified purchases may include actual amount/currency/product and locally hashed transaction identity; no raw transaction ID or receipt.
- No names/emails, iCloud/Game Center identity, raw boards/hidden-brick information, player free text or GPS in analytics instrumentation. IDFA/IDFV analytics collection and ad-personalization signals are disabled. Advertising SDK consent remains separate.
- Withdrawal stops new collection and resets the local analytics identifier/ledger; it does not promise remote deletion of prior data. Existing contact/rights procedures remain available.
- MetricKit performance/crash diagnostics are described separately; the optional gameplay switch does not disable Apple's existing diagnostics or AdMob consent.
- Google may derive coarse geography such as country from network information. No country-only or verified granular-geography setting is asserted. GA4 does not log/store IP addresses.

The owner independently verified Google Analytics property **552790863** (shared website and new iOS stream **16145778007**) on 17 October: user and event retention **14 months**, user-data reset on new activity **enabled**. The disclosure accurately distinguishes that resetting user-data timer from event retention and standard aggregate reports. No settings were changed by this task.

Primary references reviewed:

- [Google Analytics iOS collection controls](https://firebase.google.com/docs/analytics/ios/configure-data-collection): opt-in controls, FirebaseAnalyticsCore without IDFA collection, IDFV setting and personalization controls.
- [Firebase privacy and service roles](https://firebase.google.com/support/privacy).
- [GA4 regional data handling and IP information](https://support.google.com/analytics/answer/12017362).
- [Cloudflare privacy policy](https://www.cloudflare.com/privacypolicy/) and [Neon privacy policy](https://neon.com/privacy-policy) (currently redirects to Databricks).
- [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/): SDK responsibility and linked identifiers/data classifications.

## Current website processors

Unambiguous stale active Netlify hosting/Forms/Database/Blobs/AI Gateway claims are corrected in all six policy languages. Current source `cloudflare/worker.ts`, `cloudflare/forms.ts`, `cloudflare/adapters.ts`, `netlify/platform.ts` and the migration handoff establish Cloudflare Workers, owner-controlled Neon Postgres, R2 uploads, Resend email and request-triggered Workers AI translations. Form anti-spam uses validation, a honeypot and IP-hash rate limiting, not an active Netlify Forms/Akismet service. No unverified database geography or provider-log duration is invented. Rights, existing form/support/application retention commitments and email/advertising controls are retained.

Pre-existing follow-up: `web_form_submissions` currently lacks an explicit cleanup job, although the policy's form/email 12-month commitment predates this update. Support/application cleanup has separate 24-month rules. This disclosure update does not claim to implement automated form cleanup. Historical Netlify exports/backups must not be deleted as an incidental policy change.

## Source and verification

- `lib/i18n/app-analytics-privacy.ts`: identical disclosure fields in English, French, German, Spanish, Japanese and Brazilian Portuguese; legal-page translation keys derive from the shared English copy.
- `/privacy` and `/privacy-choices`: distinct `app-analytics`, `diagnostics` and website `analytics` sections, with current dates and metadata. Child-related text no longer contradicts pseudonymous analytics; no unsupported parental-consent or age-gate behavior is claimed.
- Six Help Centre account guides link to the app-analytics disclosure.
- `scripts/check-app-analytics-privacy.mjs`: verifies actual prerendered policy/control/help pages in all six languages, not just key parity. It checks full rendered consent/data/identifier/exclusions/withdrawal/provider/retention copy, separate diagnostics and website controls, new provider paragraphs, no English fallback and correct Help links.

Run after building:

```
node --experimental-strip-types scripts/check-app-analytics-privacy.mjs
node --experimental-strip-types scripts/check-help.mjs
```

Production deployment/readback, App Store privacy-form acceptance and real opt-in/withdrawal delivery remain separate gates. Do not describe prepared source or a local render as already live.
