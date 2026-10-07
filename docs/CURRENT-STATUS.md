# OutBrick website: current status

Updated 7 October 2026. This is a dated handoff, not a claim that account state remains unchanged.
Recheck live Git, `/build-info.json`, `/api/community/session` and relevant providers before acting.

## Production checkpoint

- Repository: <https://github.com/Cwgtshome/OutBrick-Website>, default branch `main`.
- Canonical website: <https://www.outbrick.site>; Netlify project `outbrick`.
- Latest verified implementation deployment: commit
  `793aff8147e6140689081dd1ab5719632e3de6ef`, built at `2026-10-07T14:12:56.946Z`.
  This is the implementation checkpoint before this documentation update.
- [PR #10](https://github.com/Cwgtshome/OutBrick-Website/pull/10): visitor acknowledgements,
  newsletter double opt-in, welcome and unsubscribe through Resend; merged into current main.
- [PR #11](https://github.com/Cwgtshome/OutBrick-Website/pull/11): designed team copies of form
  submissions and five Resend newsletter templates; merged into current main.
- [PR #12](https://github.com/Cwgtshome/OutBrick-Website/pull/12): community/forum, accounts,
  search, FAQ, feature board and related backend; merged into current main.
- [PR #13](https://github.com/Cwgtshome/OutBrick-Website/pull/13): current game content in all
  five languages; merged and production publication independently verified.

## Product content

The verified App Store checkpoint is iOS **5.0.1**, released 6 October 2026. Website home/play,
release notes, about, support, accessibility, press/creator copy, metadata and shared footer now
describe released match-three gameplay: swaps, cascades, specials, goals, score stars, VoiceOver
controls and supported Apple system integrations.

**5.1 Slide & Match is in development**, with final board audits and release checks still ongoing
at this checkpoint. The website labels slides, matching exits, neighbor swaps, twelve board types
per village and related Settings work as upcoming. A native test build or approved draft of App
Store copy is not an App Store release.

Classic browser sliding boards are labelled separately. Historical 4.2 release notes and their
anchors remain; older press screenshots are archival. Character voice assets remain retired.
The shared footer already links to Community in every language.

Copy sources: `lib/i18n/current-game.ts`, `app/components/current-game-features.tsx`,
`lib/releases.ts`, `lib/i18n/current-public.ts`, and the existing localized page dictionaries.
Migration `20261007160000_current-game-faq` updates moves, stars and ads answers in all five
languages: 15 answers total. All eight migrations applied in the tested preview and local harness.

## Architecture decision

Retain **Netlify hosting + Functions + managed Postgres + Blobs + Resend** for the website and
community. The owner agreed to retain Netlify after reviewing the CloudKit comparison.
Keep CloudKit for appropriate native game sync. CloudKit could support forum records and web
queries, but replacing Postgres would require backend/account/query changes and would not remove
the website host or email service. No CloudKit forum migration is planned.

The team was verified on credit-based **Free ($0, 300 credits/month)** on 7 October. This is a
shared allowance for deployments, compute, bandwidth and requests, not a separate free database
budget. Preserve the idle gates and monitor actual usage. Pricing and limits must be checked
again before financial decisions; see [Netlify pricing](https://www.netlify.com/pricing/).

## Configured does not mean end-to-end accepted

The anonymous production session endpoint was read after PR #13 publication and again while
preparing this handoff:

| Public configuration | Observed state |
| --- | --- |
| Providers | `apple`, `google`, `email` |
| Passkeys | enabled |
| Uploads | enabled |
| Reply by email | **disabled** |
| Translation | enabled |
| Weekly digest | enabled; member preference is opt-in |

These are configuration flags, not proof of a completed login, passkey registration, uploaded
image, translated post or delivered digest. Facebook code exists but its provider was not enabled.

### Apple sign-in repair

The original production callback failed before contacting Apple's token endpoint with
`error:1E08010C:DECODER routines::unsupported`. The existing matching EC P-256 private key was
validated locally, then stored again in Netlify with preserved literal `\n` PEM separators.
The existing `signEs256` implementation already converts those separators to real newlines.
No authentication source change was needed.

The existing secret setting and scopes were retained; its Production, Deploy Preview, Branch
deploy and Preview Server/Agent Runner values were corrected. A production redeploy applied it.
Controlled callbacks with deliberately invalid authorization codes then reached Apple's token
endpoint and returned `invalid_grant`, establishing that decoding/signing succeeded. Those
synthetic failures are not evidence of a real user's failed login.

The owner reported logging in with Apple, but a completed **OutBrick Community** session has
not yet been independently confirmed. The open clarification is whether this meant Community
or Apple Developer/CloudKit and which device was used. Do not silently mark that acceptance done.

### Email and optional-feature follow-up

- Resend templates and visitor/team email paths are implemented. Preserve double opt-in,
  scanner-safe confirmation/unsubscribe behavior, escaping, idempotency and notification backoff.
- The owner-supplied newsletter footer text is `OutBrick PO 330279`. Use the configured postal
  address field; do not invent a fuller address or claim it has been independently validated.
- Reply by email still needs receiving-domain DNS, a verified Resend webhook and configuration.
  Its current feature flag is false; source implementation alone does not enable delivery.
- Verify live form acknowledgements, team-copy delivery, confirmation/welcome/unsubscribe,
  community notification/digest delivery and inbox placement with scoped test recipients before
  claiming full acceptance. This receipt does not establish every email/form/device flow.
- Recheck Netlify notification rules before changing them: plain rules can duplicate Resend team
  copies. This documentation update does not establish whether the old two rules were removed.
- Junk/Not Junk and Netlify spam verification are inbox/submission-specific operations, not
  something a code commit guarantees. Keep any remaining manual acceptance separately recorded.

## Verification receipts for PR #13

| Evidence | Result |
| --- | --- |
| [Site checks run 37629894346](https://github.com/Cwgtshome/OutBrick-Website/actions/runs/37629894346) on head `f2e1cbad50529fc20c1ea472caf9d7807a86fd17` | all 13 jobs passed: checks, 4 accessibility, 4 responsive, 4 browser jobs |
| Local production build / lint | passed; 140 email-template checks in build |
| SEO | 1,396 documents; zero errors and warnings |
| Rendered copy / localization | 278 English documents, 1,112 localized comparisons; zero missing/carryover findings |
| Internal links | 1,391 pages, 111,469 links; all resolved |
| FAQ tests / migration harness | 6 tests passed; all 8 migrations applied and 15 updated answers checked |
| OAuth regression suite after Apple repair | 25 tests passed |
| Browser inspection | desktop and phone feature cards checked; marker-column error found and corrected before merge |
| Production readback | deployment SHA matched; all 15 localized FAQ answers matched the migration |
| Machine endpoints | `/app-ads.txt` and `/.well-known/apple-app-site-association` returned 200 |

These receipts do not establish physical-device VoiceOver/Voice Control acceptance or actual
provider sign-in success. The native game proof/release work remains in its own repository.

Claude Code was sent the PR #13 publication, verification, Apple repair limitation and architecture
decision after deployment. Future agents should read this shared record rather than rely on chat
history alone. Record newer implementation checkpoints and evidence here after subsequent work.
