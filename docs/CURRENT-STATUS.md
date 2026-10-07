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

The owner subsequently confirmed Apple sign-in working in Google Chrome. Claude Code also
reported production member #3 created at 14:21 UTC on 7 October, with role `member`.
This is user-confirmed Chrome success plus Claude's database readback; Codex did not observe
that browser session. Safari/iPhone acceptance and admin-role assignment remain separate.

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

## Player-help library (7 October 2026)

`lib/community/player-guides.ts` is the reviewed source for eight guides and one index in each
of the five languages. The additive `20261007170000_player-guides` migration publishes 45 team
threads using the existing OutBrick editorial identity. It creates no fake player accounts,
sends no seeded-post notifications and leaves existing player content intact. Every guide links
to the other guides in its own language. Community home links to the Help category, whose guide
index is pinned. VoiceOver and Settings guides are in Accessibility and are linked by the index.

The text covers the first board, specials/goals/stars, Journey, VoiceOver steps, comfortable
Settings, economy, bug reports and release/demo distinctions. Released iOS 5.0.1 and upcoming
5.1 stay separate. Claude reports the only available Slide & Match simulator artifact predates
today's fixes; screenshots are deferred until an integrated, source-matched build exists. Do
not use SM-Levels-17Pro, SwapFix or RescueIAP simulators: they belong to Claude's active work.

The owner's existing ChatGPT Dot has been assigned hourly New York checks for real-user forum
feedback, deduplicated notifications, version-grounded and labelled automated replies, and
escalation of uncertain issues. Schedule persistence and posting access require the Dot's
readback; sending it instructions alone is not proof that autonomous replies are enabled.

## Admin dashboard work checkpoint

`codex/site-admin-dashboard` adds verified role management and database editorial drafts/publishing in all five languages. Netlify `COMMUNITY_ADMIN_EMAILS` was saved and read back as `support@outbrick.site,mourad.hamdi@outbrick.site`, all scopes/all contexts. Local role/publishing/moderation/thread regression tests: 32 passed. Build and lint passed. Deployment and actual verified owner admin sign-in remain required before reporting live completion. See [admin operations](ADMIN-AND-EDITORIAL.md).

Owner clarification: `mourad.hamdi@outbrick.site` replaces the incorrect `mourad@outbrick.site`. Netlify also stores `COMMUNITY_TEAM_EMAILS=news@outbrick.site`, all scopes/all contexts. The news staff bootstrap requires a verified email-link sign-in and grants team drafting/reply permissions without moderation or administrator permissions. Support has registered through its real email link in Chrome as OutBrick Support. Deployment/fresh sign-in verification remains pending.

Publication checkpoint: player-guide source is merged into main as `0ea89b3375f5377a1bde4f69034933e20e7a18a3` after all 13 PR #14 CI jobs passed. GitHub PR merge/API metadata operations return server errors; a normal two-parent Git merge was recorded and the main ref read back. Netlify production checkout initially failed with `Host key verification failed`; Retry without cache succeeded. Production deployment `6ac66249af3d245b167f77ec` publishes `0ea89b3`, and Chrome readback shows all 45 seeded team guides (35 Help, 10 Accessibility). Admin PR #15 includes news staff separation, editorial pagination and preservation of the JSON-LD hydration element; its final deployment/live account role verification is not complete.

Live-preview follow-up: news@outbrick.site has completed its real email-link registration as OutBrick News in production. The PR #15 preview separately bootstrapped its verified email-link account to team staff. Dashboard inspection caught missing Netlify static function path declarations for `/api/community/admin` and `/api/community/content`; those routes are now explicitly assigned and covered by the nine-test administrative suite. The static browser-audit stand-in now answers the public editorial list too; this fixture is not production data or authentication evidence. Final corrected-head cloud checks, dashboard preview acceptance and production role readback remain pending.


## Dashboard release receipt — 7 October 2026

PR #15 merged through GitHub at `d0cc7d6a913ebb0a1a273af31f55c98d28444731` after all 13 exact-head cloud checks passed on `0b4ca22e94b5f87cc0b93ac845493ab99dd3bc04` (workflow run `37644091758`). All 233 community/backend/account/auth cases passed locally in two suites (127 and 106). Netlify production deploy `6ac66d5741587b000833a715` published that merge with migrations applied, confirmed in the dashboard.

The real news email-link account was verified as team staff on deploy preview `6ac664e99269d700092e69a2`: dashboard access, draft save and persistence after reload, no Publish/member-management/moderation controls, public draft URL returning 404, and dashboard/editor document width equal to the 390px phone viewport. A private test draft exists only in the branch database. Production now shows the new library navigation and Sign out. Fresh production news/support sign-in and live role readback remain pending access to Mail while the Mac is locked; do not report those as completed. The corrected admin and staff allowlists remain as documented above.

Brazilian Portuguese coordination: the user identified an ongoing cloud task. Coordination messages were accepted by task `01a116e4-85aa-773c-af38-c691e623f0ca` (Set up OutBrick), with the feature/merge SHAs and shared file boundaries. It was asked to use an isolated translation branch, integrate latest main after #15, preserve admin/auth/function paths and immutable migrations, and add translations for new community/admin copy. No translation PR was open at the checkpoint; the task history connection timed out, so its branch/file-ownership acknowledgement is not yet verified. Preserve both locale additions and these release receipts when integrating. The native Claude Code update also awaits Mac unlock.

## Brazilian Portuguese localization checkpoint — 7 October 2026

The isolated branch `codex/pt-br-localization` adds `pt-BR` across public routes, all 99 journal articles, community and backend copy, transactional/newsletter email, forms, legal pages, support FAQs, search, localized metadata and share assets. It adds nine translated editorial guide threads in a new additive migration; the existing 45 guide seeds and all merged admin authorization remain unchanged. It is rebased on the latest main checkpoint `a247aa6776e8b0a0e044c215ea693fa511c57ced`, preserving PR #15 authorization and editorial code plus the deployment receipts above. The localization PR and deploy preview are pending.

Local verification on the branch: production build rendered 1,668 routes and 168 email previews (28 templates × 6 languages); all 241 community/backend/auth/newsletter and place-name tests passed. A focused rerun after final edits passed the six-language admin and player-guide suites (10 tests). `pnpm lint`, TypeScript and `git diff --check` passed. The rendered-copy audit found no carryovers or missing counterparts across 1,390 page pairs; the SEO audit covered 1,674 pages with zero errors or warnings; the asset audit verified 147 neutral image variants across five translated locales. Browser checks passed for 150 documents, 750 language links, four locale switches with back navigation, 25 internal links, 12 noindex checks and 144 no-JavaScript pages. The form audit passed all 20 hydrated flows and 20 no-JavaScript destinations. Netlify TOML parses, and the PT-BR challenge rewrite precedes its unknown-page fallback. Manual review of Brazil-specific legal language is still appropriate before relying on it as legal advice. Keep the PR isolated; do not edit the merged admin authorization, function paths, or immutable migrations.
