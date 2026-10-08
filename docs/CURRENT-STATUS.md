# OutBrick website: current status

Updated 8 October 2026. This is a dated handoff, not a claim that account state remains unchanged.
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

## Customer lifecycle email (8 October 2026, implemented; not yet verified in production)

Twenty-one new emails and four signed web pages, in all six languages, with migration
`20261008090000_customer-lifecycle`. Support cases have references, staff replies, "fixed in X"
notices from the release bot and "did we solve it?". There are affiliate and careers decisions,
a 3-letter welcome series, release Broadcast drafts (never auto-sent), event issues, a
preferences page, and a re-engagement email that stays off until engagement tracking is on.
Account emails cover new-device sign-in, passkey added, account deleted and an emailed data
export. Admins can send policy-change notices. Every email carries the postal address
"OutBrick · P.O. Box 330279". Newsletters get a header menu that folds into a hamburger on
phones. See [EMAIL-LIFECYCLE.md](EMAIL-LIFECYCLE.md) for the flows, settings and the owner's
post-deploy checks. Local evidence: 244 community/auth/lifecycle tests and 6 newsletter script
tests pass on PGlite. All 294 sample emails show no horizontal overflow at 280–1440 px in a
browser. Not verified: real delivery, real mail clients, the release-draft call against Resend.

## Email footer and responsive check (8 October 2026, branch `claude/email-footer-responsive`)

Every email, and every page drawn with the email shell, now ends with the website footer's
social tiles (all five `socialProfiles` rows, handle `@outbrick`), a "Follow OutBrick: @outbrick"
line and `© <year> OutBrick. All rights reserved.`, centred, in all six languages. Apple's App
Store badge sits centred between the handle and the copyright. It is in the reader's badge language and
links to their storefront with campaign `web-email-footer`. The header logo is centred. They are added
by `shell()` (`emails/brand.ts`) and by the text/plain footer helpers, so no template can omit them.
The year is the year of rendering. The tiles are PNGs in `public/assets/email/`, drawn from the
site's own glyphs by `scripts/build-email-images.mjs` (macOS). Until a deploy publishes
them, emails show the tiles' alt text.

Responsive check: all 168 sample emails were rendered at widths of 280, 320, 360, 375, 414, 600,
768, 1024 and 1440 px in a browser, with no horizontal overflow. A German button label overflowed
at 280 px; that is fixed with a ≤360 px breakpoint and wrapping long words in the button. This is
a browser check only. It is not a Litmus or real-client test, and Outlook/Gmail app rendering
has not been checked on devices.

## Search, structured data and analytics (8 October 2026, branch `claude/email-footer-responsive`)

Not deployed. Local evidence from one build without `GA_MEASUREMENT_ID` and one with a test ID:

- `pnpm audit:seo`: 0 errors. The 8 warnings are long meta descriptions on the privacy and
  privacy-choices pages, which another agent is rewriting. The audit now also checks heading
  levels (no skips), `<html lang>`, and that every hreflang set names the page and an x-default.
- `pnpm check:links`: every internal link and anchor resolves. `--external` (live network) found
  two dead links: the ThinkFun Rush Hour article (now cited from the Internet Archive) and
  `snapchat.com/add/outbrick`, which answers 404. The Snapchat profile stays in the footer until
  the owner creates it or removes the row from `socialProfiles` in `lib/site.ts`.
- `node scripts/check-jsonld.mjs` (new): every JSON-LD block parses, with `@context` and a type.
  Contact pages used to carry a second ContactPage and BreadcrumbList; they now carry one.
- Legal and help pages show a visible breadcrumb trail matching their BreadcrumbList. Journal
  articles' contents list folds shut on phones. The English 404 no longer prints `index, follow`
  next to its `noindex`.
- `/about.html` and `/index.html` still answer 200 on Netlify. Their canonical tags point to the
  clean URL, so they were left alone.

Google Analytics 4 is off unless `GA_MEASUREMENT_ID` is set in Netlify at build time.
`scripts/prebuild.mjs` copies it into `lib/generated/analytics.json`, and `lib/analytics.ts` validates
it. Without it, no analytics code is rendered and `scripts/postbuild.mjs` removes Google's origins
from the published CSP. With it, the head sets Consent Mode v2 defaults (all denied) and
`app/components/consent-banner.tsx` asks in six languages. gtag.js is requested only after Accept.
The answer is stored in localStorage `ob-consent` (`{analytics, at, v: 1}`) and asked again after
12 months. Any `[data-ob-consent-open]` element, `window.obConsent.open()` or an
`ob-consent:open` event reopens the banner. Events: `page_view`, sent by the banner with the query
string reduced to utm tags, plus `click_app_store` (location = link campaign), `click_social`,
`newsletter_signup`, `contact_submit` and `form_submit` (form name only). There is no banner and
no page view on the 404 pages, the community admin screens or the email previews. Owner steps
before turning it on: in the GA4 web stream, turn off enhanced measurement's "Page changes based on
browser history events", or the community's in-page navigation is counted twice. Then set the
variable, deploy, and check the live CSP and the banner. The test-ID build confirmed the head
script, the banner chunk and the CSP. Nothing has run in a browser yet.

## Search Console follow-up (8 October 2026, branch `claude/email-footer-responsive`)

Not deployed. Evidence from Search Console on 8 October: 668 indexed, 354 "Discovered – currently
not indexed", 31 "Crawled – currently not indexed" (mostly journal tag pages, some translated
articles and minor translated pages). The sitemap then listed 1,272 URLs, 402 of them tag pages.

- **Thin tag pages are noindex.** `MIN_INDEXED_TAG = 3` in `lib/journal.ts`. Every article exists
  in all six languages, so counts are the same in each locale: of 67 tag pages per locale, 43 have
  3+ stories and stay indexable; 24 have 2 and are now `noindex, follow` (144 URLs across the six
  locales), out of every sitemap and out of "Related topics" / "Topics on this shelf". Article tag
  chips still link to them. Indexable tag pages get a localized H1 ("Stories about …"), an intro
  built from their own stories (count, shelves, and the dek of the story the tag leads) and a
  snippet naming their first titles (`lib/i18n/journal-tags.ts`, used for all six languages).
  Category pages (7 shelves, 7–22 stories each) were not thin and are unchanged.
- **Sitemap index.** `/sitemap.xml` is now a `<sitemapindex>` of twelve children:
  `sitemap-pages-<locale>.xml` (38 URLs each) and `sitemap-journal-<locale>.xml` (150 each: index,
  99 articles, 7 shelves, 43 tags), 1,128 URLs in all, with image entries and the hreflang
  alternates each page declares. `robots.txt` still names `/sitemap.xml`. IndexNow
  (`netlify/functions/deploy-succeeded.mjs`, `scripts/indexnow-submit.mjs`), Bing, the a11y and
  responsive sweeps follow the index (`scripts/lib/sitemap.mjs`); `pnpm gsc report` lists each
  child's Search Console status. `public/_headers` gives `/sitemap-*` the XML type.
- **Internal links.** Each locale home now has a "From the journal" band (newest three stories and
  a link to the journal). Measured on the build: every article in every locale is two clicks from
  its home (home → journal → article), every sitemap URL within three. Translated articles already
  link their siblings in a visible language switcher and in hreflang.
- **Translated legal/minor pages** (`/es/eula`, `/es/mascots` …): titles and descriptions were
  checked against English on the build; none is an English carryover, and the SEO audit finds no
  duplicate title or description.
- **Database copy.** Migration `20261008120000_faq-current-game`, generated by
  `scripts/build-player-guide-seed.mts` from `lib/i18n/current-game.ts` and
  `lib/community/player-guides.ts`, updates FAQ answers (lives incl. restart after a move;
  timer; stars; "eight placements, capped at 39 a day" with the per-placement caps) in all six
  languages and all 54 guide opening posts (checked against 5.1.1, slide-and-match steps instead
  of 5.0.1 swap steps). It changes a row only while it still holds seeded text, so team edits
  survive. `20261007160000` had listed the caps (not the total) in five languages only.

Owner checks after deploy: resubmit `/sitemap.xml` in Search Console and confirm the twelve
children are read; confirm the migration applied (FAQ at `/community` shows 39); watch the
"Crawled/Discovered – currently not indexed" counts over the following weeks. Unused strings in
`lib/i18n/legal-pages*.ts` and `lib/i18n/current-public.ts` still mention "six places"/"six
rewarded video placements"/"Thirty-one"; they are dictionary keys no page renders.

## Product content

The verified App Store checkpoint is iOS **5.1.1**, released 8 October 2026 (Apple lookup,
all six storefronts: version 5.1.1, `currentVersionReleaseDate` 2026-10-08T18:19:09Z). 5.1 "Slide &
Match" shipped the same day. Since branch `claude/email-footer-responsive` (8 October 2026) the
site describes Slide & Match in all six languages, in the store's own wording: slide a brick into
space or home through the gate of its colour, swap neighbours, three in a line clear, twelve kinds
of board village after village (not "in every village": the last has eight), 2,000 solver-proven
boards. `/whats-new` lists 5.1.1, 5.1, 5.0.1 and 4.2, with the 5.1 and 5.1.1 notes copied from the
iOS repository's approved store metadata. Lives, ads and move-continue facts were rechecked against
the live store description and are unchanged. The community guides' intro no longer names a
version. Migration `20261008120000_faq-current-game` (not yet applied in production) rewrites the
seeded guide opening posts and the stale FAQ answers to 5.1.1; see "Search Console follow-up".

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

The isolated branch `codex/pt-br-localization` adds `pt-BR` across public routes, all 99 journal articles, community and backend copy, transactional/newsletter email, forms, legal pages, support FAQs, search, localized metadata and share assets. It adds nine translated editorial guide threads in a new additive migration; the existing 45 guide seeds and all merged admin authorization remain unchanged. It is rebased on main checkpoint `a247aa6776e8b0a0e044c215ea693fa511c57ced`, preserving PR #15 authorization and editorial code plus the deployment receipts above. The branch is pushed to origin. Opening the draft PR is blocked because GitHub CLI reports the injected `GH_TOKEN` is invalid and there is no logged-in CLI account. GitHub's PR creation page for the pushed branch is https://github.com/Cwgtshome/OutBrick-Website/pull/new/codex/pt-br-localization; no deploy preview exists yet.

Local verification on the branch: production build rendered 1,668 routes and 168 email previews (28 templates × 6 languages); all 241 community/backend/auth/newsletter and place-name tests passed. A focused rerun after final edits passed the six-language admin and player-guide suites (10 tests). `pnpm lint`, TypeScript and `git diff --check` passed. The rendered-copy audit found no carryovers or missing counterparts across 1,390 page pairs; the SEO audit covered 1,674 pages with zero errors or warnings; the asset audit verified 147 neutral image variants across five translated locales. Browser checks passed for 150 documents, 750 language links, four locale switches with back navigation, 25 internal links, 12 noindex checks and 144 no-JavaScript pages. The form audit passed all 20 hydrated flows and 20 no-JavaScript destinations. Netlify TOML parses, and the PT-BR challenge rewrite precedes its unknown-page fallback. Manual review of Brazil-specific legal language is still appropriate before relying on it as legal advice. Keep the PR isolated; do not edit the merged admin authorization, function paths, or immutable migrations.
