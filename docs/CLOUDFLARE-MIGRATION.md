# Cloudflare migration and operations

**Apple sign-in correction (8 October 2026, New York):** production callback logs identified a Workers crypto incompatibility: passing a pre-created `PrivateKeyObject` to ES256 signing failed before Apple token exchange. The signer now passes normalized PEM directly, preserving escaped-newline handling and the 64-byte JOSE signature. A regression runs the shared signer in the installed Workers runtime, verifies both PEM representations and verifies a signed provider ID token. Node-only OAuth tests remain separate from real canonical sign-in acceptance.

## Current production contract — 9 October 2026 UTC (8 October in New York)

The canonical website is **https://www.outbrick.site**, deployed from
**Cwgtshome/OutBrick-Website** to the Cloudflare Worker **outbrick**. React/vinext builds
prerendered assets; the Worker runs APIs, community thread rendering, forms and scheduled jobs.
The database is owner-controlled **Neon Postgres**, uploads and job signals use **R2**, and
outbound email/contacts remain **Resend**. Resend and Neon are intentional services in the
Cloudflare architecture; they are not pending replacements with Cloudflare email or D1.
Native game CloudKit and saved progress are outside this migration.

PR [#17](https://github.com/Cwgtshome/OutBrick-Website/pull/17) merged as
`d929950314dad257ff8b0e7e00ebc5091fa1aa09`. GitHub production deployment
[37871974060](https://github.com/Cwgtshome/OutBrick-Website/actions/runs/37871974060)
succeeded; live `/build-info.json` matched that commit, built at 01:55:09 UTC.
Normal local DNS/HTTPS answered 200 after the cache cleared. Both apex and www have Worker
custom domains; apex redirects to www. All 13 non-web mail/verification DNS records were preserved.
Future main pushes deploy through `.github/workflows/deploy.yml` with
`DEPLOY_TO_CLOUDFLARE=true`; no Netlify build or payment is required.

### Data preservation and the accepted gap

The restored application snapshot was captured at **00:44:42.132 UTC**: **37 tables,
976 rows and 18 sequences**, independently restored and verified before **17 additive
migrations**. All **51 archived forms** (50 normal, one spam) were retained without replaying
emails. A fresh post-pause form export matched every ID and payload: zero added, missing or
changed records. A fresh post-pause Blobs export confirmed **community-uploads empty (0)**
and **three unchanged signal objects**, copied to production R2 and verified by hashes.

Netlify credit exhaustion paused the source at **01:08:27.471 UTC**. The owner explicitly
declined payment and accepted the latest possible verified snapshot. SQL writes in the roughly
**24 minutes between snapshot and pause remain unverified**. This is a possible reconciliation
gap, not proven loss and not a zero-loss guarantee. If source SQL becomes readable without
payment, export it privately and reconcile member/content/session/notification changes plus
`email_outbox`, `newsletter_subscribers`, `support_cases`, `support_case_events` and
`applications`. Preserve delivery state and idempotency; never resend historical emails blindly
or overwrite the now-live Neon database with an old backup.

Private backups and verification receipts remain outside Git at
`/Users/mourad1/Documents/OutBrick-migration-backup-2026-10-08` with restricted permissions.
Netlify's old database, submissions, Blobs and deployments remain retained for recovery;
the site is disabled for exhausted credits and automatic builds are stopped. Do not delete
source data, buy a plan, or reactivate old scheduled writers without an explicit new instruction.
A credit-cycle reset could change source availability; read provider state before recovery.

### Functionality and acceptance

| Capability | Cloudflare configuration and evidence | Remaining acceptance |
| --- | --- | --- |
| Website, journal, localized Help Centre, legal pages and challenge links | Published assets; 51 canonical static smoke checks passed; app-ads.txt and AASA answer correctly | Full browser/accessibility CI rerun remains separate from deployment success |
| Forum, accounts and editorial content | Restored Neon data; public session/categories/threads/FAQ/content APIs answer 200; original role boundaries retained | Fresh owner/staff authenticated dashboard acceptance |
| Contact, careers, affiliate and newsletter sign-up | Worker stores submissions in Postgres; shared Resend lifecycle handlers retained; four real preview flows and nine delivered test emails verified; live invalid/honeypot checks passed | One legitimate canonical submission and inbox check per flow; no subscriber broadcast as a test |
| Newsletter confirmation/preferences/unsubscribe | Existing signed routes and original Resend signing key retained; double opt-in and deliberate POST preserved | Fresh canonical confirmation/unsubscribe acceptance |
| Email-link registration/sign-in | Resend credentials and account/token handlers migrated | Successful canonical email-link session and security email acceptance |
| Sign in with Apple | Restored original key; `/api/community/auth/apple/start` redirects to Apple with canonical callback | Successful real callback/session on canonical website |
| Sign in with Google | Installed replacement secret for existing client; `/api/community/auth/google/start` redirects with canonical callback | Successful real callback/session on canonical website |
| Passkeys | Enabled; unchanged `outbrick.site` relying-party ID and restored credentials | Existing passkey sign-in and new registration on a real device |
| Forum image uploads | R2 binding active; source upload store explicitly empty; no known image left uncopied | Authenticated image upload/read/delete with alt text |
| Notifications, digest, releases and lifecycle outbox | Production `JOBS_ENABLED=true`, every-five-minute Cloudflare Cron Trigger; UTC job selection/idle gates/idempotency retained | Observe due production work and delivered mail; configuration alone is not delivery proof |
| Resend event webhook | Legacy `/.netlify/functions/resend-events` route retained; signing secret installed; unsigned request rejected | Verify an authentic signed event persists/updates engagement |
| Reply by email | Existing `replyByEmail=false` preserved | Optional new receiving-domain/MX/webhook setup, not a migration regression |
| Translation | Cloudflare Workers AI GPT-OSS enabled; shared atomic 5,000-neuron/day cap, cached results, no paid fallback; five real preview languages verified | Authenticated canonical translation; account's other AI workloads have their own usage |
| Google Analytics | Original GA4 `G-13BKCF9FV4`; consent respected; real page_view request observed | Analytics dashboard ingestion/realtime confirmation |
| Google Search Console, Bing, IndexNow | Existing verification DNS preserved; encrypted CI credentials; automatic GSC sitemap 204, Bing sitemap accepted, IndexNow 1,255 URLs 200 | Search-engine crawling/indexing is external; Bing daily URL quota can be zero after earlier submissions |

### Deployment, secrets and operating rules

`cloudflare/worker.ts`, `cloudflare/forms.ts`, runtime adapters and `wrangler.jsonc` are the
production entry points. Existing `netlify/` directories contain **shared TypeScript handlers,
SQL migrations and compatibility paths**; their names do not imply Netlify hosting. Keep legacy
newsletter/webhook paths working. Production secrets live in Cloudflare encrypted Worker
bindings; CI deployment/search credentials live in GitHub Actions encrypted secrets. Never
copy secret values into docs, Git, chat or screenshots.

Production and preview use separate Neon branches and R2 buckets; preview has jobs disabled
and noindex. Apply new additive SQL migrations through the guarded database procedure before
releasing code that needs them: the deployment workflow does not automatically migrate Neon.
Keep the translation limiter deployment and its shared Durable Object; the quota must not reset
per preview or Worker instance. Main deployment checks the exact live build, then submits
sitemaps. Template rendering does not prove Resend dashboard templates were republished:
`--push-on-production` requires an explicit production context and credentials.

Workers Paid is active; **the student fee waiver is not yet confirmed**. R2 and AI have usage
limits. The owner authorized free-quota translation only, with no prepaid AI top-up or paid fallback.
No Netlify subscription was purchased. Preserve historical receipts below as dated evidence;
this section supersedes earlier Netlify-hosted or pre-cutover instructions.

## Historical preparation receipts — superseded by the production contract above

# Cloudflare migration checkpoint — 8 October 2026

Production still runs on Netlify at `www.outbrick.site`. This branch is migration preparation;
Cloudflare now serves the DNS zone, with all 15 records preserved. Web traffic still targets Netlify; no source write freeze, production schedule change or source data deletion has happened.

## Verified preparation

- Followed Cloudflare's official [agent setup](https://developers.cloudflare.com/agent-setup/prompt.md).
  Installed its 16 Codex skills, registered the Cloudflare MCP server and completed OAuth.
  Cloudflare MCP is authenticated and available in this session.
- Wrangler authenticated to account `e33a32f168de9597cfccf1698cb153a8`.
- User authorized R2's displayed terms; subscription is active. Separate preview buckets:
  `outbrick-preview-uploads`, `outbrick-preview-signals`. Signals use strongly consistent R2.
- Created the user's Neon `OutBrick` project `summer-boat-89820889`, Free plan, PostgreSQL 18,
  AWS North Virginia. Production destination: `br-polished-fire-b7sc0cpu`;
  isolated preview: `br-lucky-wind-b7v2jg1j` (`cloudflare-preview`, no automatic deletion).
- A snapshot of all 37 public application tables (749 rows) and 18 sequence counters passed
  both local PostgreSQL and independent Neon restoration comparisons. The export also includes
  50 Netlify form submissions and three signal objects with byte hashes. No upload store was
  returned by Netlify's global store inventory at capture time; re-inventory at final cutover.
- Full private snapshot, provider configurations and receipts are outside Git in
  `/Users/mourad1/Documents/OutBrick-migration-backup-2026-10-08/export-03`.
  Netlify's internal schema is provider-owned and outside the application backup scope.
- Replaced the new Neon role password after it appeared in a tool result; independently
  authenticated using the replacement. Credentials must never be copied into handoffs.
- Built with repository-matched Node 22.13.0 / pnpm 10.12.1. Existing 246 backend tests,
  initial type checking and lint passed. Three migration tests check request isolation,
  durable form retention on unavailable email, repeated fields, consent and origin rejection.
  Static-route checks passed all six languages, challenge links, aliases, localized 404s,
  app-ads.txt, Apple association, robots and sitemap. Re-run relevant checks after integration.

## Runtime changes

`cloudflare/worker.ts` dispatches the existing shared community/auth and seven legacy email
routes, retains Netlify redirects, serves prerendered assets and intercepts form submissions.
`netlify/platform.ts` scopes database/storage adapters to each request. Preview jobs are disabled.
New submissions are durably stored before acknowledgement; email failures are retried using the
existing submission idempotency keys. Root AJAX POSTs and no-script thank-you POSTs are supported.
Existing Netlify handlers remain usable during migration.

Always pass `--config wrangler.jsonc`: vinext generates a different server configuration and
Wrangler's automatic configuration redirect otherwise selects that generated server.
Preview responses carry `X-Robots-Tag: noindex, nofollow`.

## Remaining gates — do not describe this as a completed migration

1. Completed: integrated Claude main commit `5a8d0d6`; 250 backend tests, type checking, lint, 1,687-page SEO audit, internal links and JSON-LD passed.
2. Completed for preview: applied additive migrations and archived 51 legacy form records, including one spam record, with payload comparisons and no emails sent.
3. Preview R2: all three signal objects copied and remote checksums matched. Still provision separate production buckets and perform final inventory and byte comparison.
4. Preview deployed at https://outbrick-preview.moh305.workers.dev; all 27 static checks passed. Public categories/threads/FAQ and session return 200; unauthenticated admin returns 401; an isolated test form persisted with delivery pending and no email configured. Still test real sign-in,
   all form types, uploads, moderation/editorial roles, newsletter signed links,
   WebAuthn/domain behavior, account export, Resend callbacks and job idempotency.
5. Preserve GA `G-13BKCF9FV4`, Search Console `sc-domain:outbrick.site`, Bing verification,
   IndexNow and all DNS/email records. Move deploy-time sitemap submissions to Cloudflare CI.
6. Workers Paid activated with user authorization; current plan and billing list confirm Paid. Student waiver remains unconfirmed pending invoice or redemption email. Export complete DNS and configure TLS/routing.
7. Establish an actual source write freeze, capture new activity, restore/compare the final
   snapshot, stop old schedules, then switch traffic and enable new schedules exactly once.
   A snapshot taken while visitors can write is not the final migration data.
8. Verify the real domain, authentication, emails, ads/association files and data after cutover.
   Keep Netlify and private backups available for assessed rollback; deleting them is not part
   of the migration authorization.

Claude acknowledged ownership: Codex owns infrastructure/data/cutover; Claude owns content and
performance work. Coordination messages were posted to its original email-footer conversation.
The official Cloudflare plugin was offered in Claude Desktop; its installation is not verified.

## Verified preview update — 8 October 2026, evening EDT

- Cloudflare zone active; Namecheap nameservers saved and independently read back. All 15
  original DNS records preserved, including iCloud/Resend mail and Google/Bing verification.
- Explicit community-uploads inventory contains zero objects; the source uploads table also
  contains zero rows. Empty required stores are now always included in export inventories.
  Production R2 buckets are provisioned; final inventory/copy is still pending.
- Actual email-link sign-in passed through Resend, single-use token redemption, cookies and
  member-session readback. Own upload/create/read/hash/delete, account export, member admin
  rejection, signed Resend callback acceptance and unsigned callback rejection passed.
- All four preview forms persisted and reached `sent` in the preview database on their first
  delivery attempt. Provider acceptance is distinct from inbox placement.
- Recovered Resend API key passed the existing production preferences-signature check:
  correct signature returned 200, wrong-key signature returned 410. No key rotation,
  subscriber change or email was required for that check.
- Original Apple key file matching the configured key ID recovered and restored privately.
  Google client secret remains missing; a masked placeholder is never a configured secret.
  Claude confirms Search Console/Bing API credentials were never configured previously.
- User requires free Cloudflare translation. Preview uses `@cf/openai/gpt-oss-20b`, without
  OpenAI credentials, Unified Billing credits, top-ups or a paid-provider fallback. The
  unused paid GPT gateway was removed. Preview/production bind the same SQLite Durable
  Object in `outbrick-translation-budget`; atomic reservations stop at 5,000 neurons/day
  UTC, half the published 10,000-neuron free allowance. Reservations conservatively use
  UTF-8 bytes, template overhead, maximum output tokens and a 2x margin; unknown failures
  are never refunded. Cached translations stay usable; oversized posts are refused before
  inference. This reserves headroom for other account use; it cannot control unrelated
  AI workloads added to the account in future.
- Five real translations (French/German/Spanish/Japanese/Brazilian Portuguese) passed, with
  a subsequent French cache hit. Durable SQL readback after these tests showed 989 reserved
  neurons on 9 October UTC. Quota SQL exhaustion and multibyte-size tests passed locally.
- Build, types, SEO (1,687 files, no errors/warnings), links (142,733 resolved) and JSON-LD
  passed. Focused phase-two handlers passed all 10 cases. Existing broad-test receipts above
  remain distinct from these latest checks.
- Production workflow replaced with gated Cloudflare deployment and exact live-build checking;
  IndexNow and optional Search Console/Bing sitemap submissions retained after live checks.
  GitHub deployment credentials, final production routes, final snapshot and schedules remain
  pending. Production Workers staging and preview hosts are explicitly noindex.

Do not cut over before restoring Google sign-in, obtaining a final frozen-source snapshot,
verifying its restoration and uploads, and stopping the old scheduled writers. Keep Netlify
and all private backups intact for an assessed rollback. Production translation remains off
until the same verified free-only path is enabled at cutover.
