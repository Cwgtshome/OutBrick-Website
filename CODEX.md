# Codex context: OutBrick website

Read [AGENTS.md](AGENTS.md), then [current status](docs/CURRENT-STATUS.md) and
[architecture and operations](docs/ARCHITECTURE.md) before starting work.

This is the website/community repository `Cwgtshome/OutBrick-Website`, deployed by GitHub Actions to Cloudflare Workers.
The native OutBrick game and its active Claude Code work are maintained separately.

Use the shared guidance and dated status as the handoff record. Recheck live Git, deployment,
App Store version and provider state before relying on a prior receipt. Keep release copy
distinct from development copy, use the existing design system, and update all six languages
(English, French, German, Spanish, Japanese and Brazilian Portuguese).

Documentation map: [docs/README.md](docs/README.md). Backend behavior and test commands:
[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md). Email template/campaign workflow:
[README.md](README.md#emails-resend). No secret values belong in these documents.

## Email system

[The OutBrick Email System](docs/EMAIL-DESIGN-SYSTEM.md) (design system, cast, interactive rules,
roadmap) and its review page `docs/email-system/index.html` (`pnpm emails:system`) cover every email;
[EMAIL-LIFECYCLE.md](docs/EMAIL-LIFECYCLE.md) covers delivery, Resend and analytics. Checkpoint
9 October 2026: live and owner-approved; hamburger, host friends and puzzles verified in Apple Mail
and iOS Mail.

## Administrative dashboard checkpoint

Read [admin and editorial operations](docs/ADMIN-AND-EDITORIAL.md) for the role matrix, exact verified owner allowlist, draft/publish workflow and deployment gates. Do not grant domain-wide admin access or promote an Apple relay account without explicit instruction. Existing static pages and journal stay Git-managed; new editorial content uses the database dashboard.

- Forum owner clarification (7 October 2026): verified admin bootstrap is limited to `support@outbrick.site` and `mourad.hamdi@outbrick.site`. `mourad@outbrick.site` is incorrect. `news@outbrick.site` is the news staff mailbox, bootstrapped through `COMMUNITY_TEAM_EMAILS` only after its own verified email-link sign-in. Team can write drafts and reply/start Announcements; admin publishes and manages roles. Team does not receive moderator access.
