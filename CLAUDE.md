# Claude context: OutBrick website

Follow [AGENTS.md](AGENTS.md). Start by reading [current status](docs/CURRENT-STATUS.md),
[architecture and operations](docs/ARCHITECTURE.md), and [the documentation index](docs/README.md).

This repository serves `www.outbrick.site` and its community through Cloudflare Workers. Native game changes
belong in the separate game repository; coordinate before editing shared checkouts or user drafts.

The shared status document records implementation, production evidence and unresolved acceptance
checks. Do not restart completed setup or claim a provider login, email delivery or native release
from configuration alone. Preserve existing design components and all six website languages:
English, French, German, Spanish, Japanese and Brazilian Portuguese.

Update the shared status after substantive work so Claude and Codex read the same context.
Keep credentials exclusively in approved secret storage; document variable names and behavior only.

## Administrative dashboard checkpoint

Read [admin and editorial operations](docs/ADMIN-AND-EDITORIAL.md) for the role matrix, exact verified owner allowlist, draft/publish workflow and deployment gates. Do not grant domain-wide admin access or promote an Apple relay account without explicit instruction. Existing static pages and journal stay Git-managed; new editorial content uses the database dashboard.

- Forum owner clarification (7 October 2026): verified admin bootstrap is limited to `support@outbrick.site` and `mourad.hamdi@outbrick.site`. `mourad@outbrick.site` is incorrect. `news@outbrick.site` is the news staff mailbox, bootstrapped through `COMMUNITY_TEAM_EMAILS` only after its own verified email-link sign-in. Team can write drafts and reply/start Announcements; admin publishes and manages roles. Team does not receive moderator access.
