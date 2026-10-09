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
