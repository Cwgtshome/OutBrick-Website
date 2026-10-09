# Website architecture and operations

Production is Cloudflare Workers + Neon + R2 + Resend. [Migration operations](CLOUDFLARE-MIGRATION.md) owns current bindings, deployment, restored-data boundaries and remaining live acceptance. Paths under `netlify/` below are shared source modules, not the current host.

## Source map

| Area | Source |
| --- | --- |
| Pages and shared UI | `app/(en)/`, `app/[locale]/`, `app/components/` |
| Design system | `app/globals.css`, `app/styles/`, existing shared components |
| Product copy / release notes | `lib/i18n/current-game.ts`, `lib/releases.ts`, localized dictionaries |
| Community shell and client | `app/community-shell.tsx`, `app/components/community/` |
| API contract | `lib/community/contract.ts` |
| Community API / account API | `netlify/functions/community-api.mts`, `netlify/functions/community-auth.mts` |
| Handlers, permissions, queries | `netlify/community/` and `netlify/community/auth/` |
| Database / migrations | `netlify/community/db.ts`, `netlify/database/migrations/` |
| Thread HTML and SEO at the edge | `netlify/edge-functions/community-thread.ts` |
| Forms and newsletter functions | `netlify/functions/submission-created.mts`, `newsletter-confirm.mts`, `newsletter-unsubscribe.mts` |
| Email design, signing and campaigns | `emails/`, `scripts/send-newsletter.mjs`, root README |
| Lifecycle email (cases, applications, welcome series, notices, outbox) | `netlify/lifecycle/`, `emails/lifecycle*.ts`, [EMAIL-LIFECYCLE.md](EMAIL-LIFECYCLE.md) |
| Routes, build and machine-file headers | `netlify.toml`, `public/_headers`, `scripts/postbuild.mjs` |
| Automated site checks | `.github/workflows/checks.yml` |

## Deployment and data

Node 22.13.0 / pnpm 10.12.1 build React 19 + vinext source with `pnpm build`, publishing
`dist/client`. `cloudflare/worker.ts` runs the shared APIs, forms, thread rendering and jobs;
`dist/server` is not the website's deployed application server. Main deploys publish to the
canonical domain; verify publication from `/build-info.json`, not a commit push alone.

Cloudflare runtime adapters connect to owner-controlled Neon Postgres, with separate production and preview branches. The retained `@netlify/database` fallback belongs to legacy source operation. Add a new timestamped
`migration.sql` for a schema/data change; preserve applied migrations. `db.ts` parameterizes SQL
and wraps transactions. `netlify/community/test/harness.ts` applies all migrations to PGlite for
local tests. R2 stores uploads and scheduler wake signals through shared adapters. Keep production and preview writes
separate and preserve existing permissions, session checks and origin validation.

## Environment inventory (names only)

| Purpose | Variables and behavior |
| --- | --- |
| Resend | `RESEND_API_KEY` (secret, Full access needed for contacts/segments); rotating it invalidates signed newsletter links |
| Newsletter routing | `RESEND_SEGMENT_ID`, optional `RESEND_SEGMENT_ID_EN/FR/DE/ES/JA` |
| Newsletter footer / test team recipient | `NEWSLETTER_POSTAL_ADDRESS`, optional `TEAM_INBOX` |
| Apple OAuth | `APPLE_CLIENT_ID`, `APPLE_TEAM_ID`, `APPLE_KEY_ID`, `APPLE_PRIVATE_KEY` (secret PEM) |
| Google OAuth | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (secret) |
| Optional Facebook OAuth | `FACEBOOK_APP_ID`, `FACEBOOK_APP_SECRET` (secret) |
| Administrator bootstrap | `COMMUNITY_ADMIN_EMAILS`; do not publish the owner's address |
| Inbound replies | `COMMUNITY_REPLY_DOMAIN`, `RESEND_WEBHOOK_SECRET` (secret), plus Resend key; requires receiving DNS/webhook setup |
| Translation | `CLOUDFLARE_TRANSLATION_ENABLED=true`, Workers AI/service binding to shared 5,000-neuron/day limiter; no paid fallback; see migration operations |
| Optional feature overrides | `COMMUNITY_PASSKEYS=off`, `COMMUNITY_UPLOADS=off` |
| Website analytics (optional) | `GA_MEASUREMENT_ID` (G-XXXXXXXXXX, build time). Unset or malformed: no analytics code and no Google origin in the CSP. Set: GA4 behind a consent banner; see [current status](CURRENT-STATUS.md) |
| Lifecycle email (optional) | `RESEND_TOPIC_RELEASES/TIPS/EVENTS`, `RESEND_EVENTS_WEBHOOK_SECRET`, `NEWSLETTER_ENGAGEMENT_TRACKING=on` (only once the events webhook delivers); see [EMAIL-LIFECYCLE.md](EMAIL-LIFECYCLE.md) |

Provider visibility comes from `auth/util.ts`; feature flags come from `features.ts` and are
reported by `/api/community/session`. Store credentials in Cloudflare encrypted Worker secrets. Apple web callbacks
are `/api/community/auth/apple/callback`; Google uses `/api/community/auth/google/callback`.
Apple uses a cross-site POST callback. Preserve its state/nonce validation and PEM formatting.
Passkeys use the apex `outbrick.site` relying-party ID; do not casually change domains.

## Credit-aware scheduled work

Schedules in source use UTC: notifier every five minutes; release polling hourly; digest every
ten minutes Mondays 08:00–10:50; trust and badges daily at 08:00; the lifecycle outbox every ten
minutes (R2-signal-gated: it opens Postgres only when an email is due) with its daily sweep at 08:00. Idle gates can skip database
queries when no work is due. Retain bounded retries and safety sweeps. Quiet-month simulations
are estimates/tests, not a forecast for real visitors, crawlers or an active forum. Cloudflare, Neon and Resend have separate usage limits; consult live billing before plan decisions.
The student Workers fee waiver remains unconfirmed.

## Validation

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm lint
pnpm audit:seo
pnpm check:links
node --experimental-strip-types scripts/audit-localization.mjs
node scripts/audit-rendered-copy.mjs
node --experimental-strip-types --test scripts/test-newsletter.mjs
node --experimental-strip-types --test netlify/community/auth/test/oauth.test.ts
```

Run relevant handler tests with Node's test runner and the PGlite harness when backend code
changes. CI runs site build/lint, newsletter, solvability, localization/asset/link checks, then
accessibility, cross-browser and responsive jobs against the uploaded built artifact. See the
workflow for Playwright dependencies, shard settings and ports; do not disturb another agent's
local server or device session.

Documentation-only updates need referenced-path/link and factual review plus `git diff --check`.
Do not rerun runtime suites merely to label a prose change tested. For behavior changes,
separately exercise deployed API/data outcomes and real sign-in/email flows; unit tests and
configuration flags are not substitutes for provider or inbox acceptance.
