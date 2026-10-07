# Community administration and editorial publishing

Implementation checkpoint: 7 October 2026. Verify deployment and sign-in before claiming live access.

## Roles

| Role | Forum | Editorial dashboard | Role management |
| --- | --- | --- | --- |
| Member | Own posts and preferences, report content | No | No |
| Trusted | Member permissions; skips new-member review | No | No |
| Moderator | Review reports/posts, approve, hide and manage forum statuses | No | No |
| Team | Replies and Announcements threads; create and edit editorial drafts | Drafts and aggregate activity | No |
| Admin | Team and moderator permissions | Publish and unpublish pages/articles | Verified members only; cannot change own role |

Every API checks the server-side session and verified email. Hiding navigation does not authorize
an action. Mutation requests retain the same-origin check. Role changes lock and recheck the
acting admin and target in a transaction; role changes, publishing and revisions are audited.
Member lists contain public names, role and verification status, not private email addresses.

## Owner bootstrap

Netlify project `outbrick` has `COMMUNITY_ADMIN_EMAILS` set to the exact addresses
`support@outbrick.site,mourad.hamdi@outbrick.site`, with all scopes and the same value for all deploy
contexts. A deployment is needed to activate changed environment values. Existing auth code
promotes an allowlisted address only after provider/email verification. This does not authorize
all addresses on the domain, provision a mailbox, or promote the owner's different Apple sign-in address.
Sign in normally using a verified allowlisted address. Never insert a verified production account
or bypass authentication for a demonstration. An allowlisted admin demoted manually will regain
admin on a later verified sign-in; remove the address from the environment to revoke bootstrap.

## Dashboard and content

`/community/admin` (and each language-prefixed equivalent) provides counts, moderation links,
member role management for admins, paginated editorial drafts, Markdown preview, publish/unpublish,
revision checks and an activity log. `/community/library` lists published content. Individual
pages/articles use `/community/content/{page|blog}/{slug}`. Public content is rendered at the edge
for readers without JavaScript, with canonical URLs and structured metadata. Drafts return 404
through public endpoints. An admin must unpublish a live entry before editing it. Previously
published URLs cannot be renamed. Concurrent edits fail with a revision conflict rather than
silently overwriting newer content. Unpublishing preserves revisions.

The existing website pages and journal remain Git-managed. The dashboard publishes new pages
and articles; it does not edit or replace the existing static route files or historical journal.
New articles also appear in the journal's client-side published-content feed. Dynamic editorial
URLs are not yet added to the static sitemap or RSS. Use internal links from the library.

The dashboard's Watch all categories preference is personal. It uses the existing deduplicated
forum notifications and email preferences. It does not subscribe all members or silently enable
owner emails. ChatGPT Dot's hourly monitoring is separate: the schedule was accepted and saved,
but public replies remain blocked until its own browser has an authorized signed-in account.

## Validation

`node --experimental-strip-types --test netlify/community/admin.test.ts netlify/community/moderation.test.ts netlify/community/threads.test.ts`
checks all roles, unverified/anonymous access, origin checks, private drafts, revision conflicts,
publication/unpublication, escaped Markdown, public rendering, audit logs and personal watches.
Run the build, lint and the existing CI audits. Production access additionally requires deployment
readback and an actual verified owner sign-in; local PGlite tests do not establish live access.

## News staff

`COMMUNITY_TEAM_EMAILS=news@outbrick.site` assigns the team role only after a verified email-link sign-in to that exact mailbox. It grants replies, Announcements threads and editorial drafts, without moderation, member-role management or publishing. It never overwrites an existing moderator/admin role. To revoke bootstrap, remove the address from the environment and change its stored role using an admin.

`support@outbrick.site` was registered and verified as OutBrick Support through its real Mail link in Chrome. New environment values require a deployment and fresh sign-in before live role verification.


Release: PR #15 merged at `d0cc7d6`; Netlify production deploy `6ac66d5741587b000833a715` published with migrations applied. All 13 cloud checks and all 233 local community/auth cases passed. News team draft/save/reload/private-404 and 390px layout are verified on the deployment preview. Fresh production news/support sign-in and role acceptance remain pending Mail access while the Mac is locked. See CURRENT-STATUS.md for the complete release and Brazil translation coordination receipts.

## Brazilian Portuguese locale work

The isolated `codex/pt-br-localization` branch adds Brazilian Portuguese forum navigation, feedback, auth and notification email, eleven FAQ entries and nine editorial guide threads in new additive migrations. The existing guide and admin migrations are unchanged, and PR #15 authorization remains intact. It is based on main checkpoint `a247aa6` and pushed to origin; no deployment preview exists yet. GitHub CLI could not create the draft PR because its configured token is invalid. See [CURRENT-STATUS.md](CURRENT-STATUS.md) for the branch link and full local checks. Do not amend the admin release receipt above when integrating this work.
