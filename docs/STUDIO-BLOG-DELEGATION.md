# Private OutBrick Studio blog delegation

Prepared implementation, 17 October 2026. No production migration, deployment, credential creation or owner consent has occurred as part of this change. No browser session cookie or provider credential is copied.

The existing website editorial service remains authoritative. New database articles are managed at `/community/content/blog/{slug}` (with locale prefixes where applicable). Static historical articles in `lib/blog.ts` and `lib/journal-batches/` remain Git-managed and cannot be edited through this bridge.

## Owner connection action

A verified current team/admin signs into the canonical website normally and opens `/community/admin`. The **OutBrick Studio blog connection** panel lists only that member's connections. Read is always included; draft editing and, for admins only, publishing are optional unchecked permissions. The owner must review and explicitly create the credential. The token is displayed once in volatile React state; it is neither saved in browser storage nor read back later. Paste it into the private Studio server credential settings. Closing/hiding the panel clears the displayed value. No API grants permissions merely by loading the page.

- `GET /api/community/admin/studio-tokens` — normal verified staff session; returns `{connections,audience}` metadata only.
- `POST /api/community/admin/studio-tokens` — same-origin verified staff session, JSON `{scopes:["blog:read", "blog:draft", "blog:publish"],reviewed:true}` (choose the subset). Returns `201 {token,connection}` once. Unknown/duplicate scopes are rejected; read is mandatory. Publish requires current admin authority, rechecked under the member row lock. Maximum five active connections and five mint attempts/hour/member.
- `DELETE /api/community/admin/studio-tokens/:id` — same-origin session for the creating member, returns `{revoked:true}`. Other members cannot revoke or list the credential.

The 256-bit token has an `obstudio_` prefix. Only its SHA-256 hash is stored in additive table `studio_blog_tokens`, along with member, exact audience, scopes, creation/expiry/revocation/last-use times. Credentials expire after 90 days. Creation/revocation are audited. No plaintext credential is logged or persisted by the website.

## Studio server contract

All requests target canonical `https://www.outbrick.site`. The token must stay on the private Studio server, not in browser local storage or browser requests to this API.

```
Authorization: Bearer <connection-token>
X-OutBrick-Audience: https://outbrick-upsell-architecture.mourad-hamdi.chatgpt.site
Content-Type: application/json
```

The bearer hash authenticates the request. The audience header alone is never authentication; it must equal the stored exact audience. Server requests omit `Origin`. If an Origin is present, only the exact Studio origin is accepted. The normal website mutation origin/session guard remains unchanged. No permissive CORS response is added.

| Method and path, under `/api/community/studio` | Scope | Request / response |
|---|---|---|
| `GET /blogs?page=1` | `blog:read` | `{content:[{id,locale,kind,slug,title,summary,body,state,revision,updatedAt,publishedAt}],page,pages,capabilities:{draft,publish},staticArticles}`; 50 records/page, ordered updated time/id descending. Capabilities reflect both token scopes and current role. |
| `POST /blogs` | `blog:draft` | `{locale,kind:"blog",slug,title,summary,body}` → `201 {content}` using existing sanitized editorial representation. |
| `PATCH /blogs/:id` | `blog:draft` | Same fields plus exact `revision` → `200 {content}`. Published content must be explicitly unpublished first. |
| `POST /blogs/:id/publish` | `blog:publish` and current admin | `{revision,published:boolean,reviewed:true}` → `{content}`. Studio must show the exact reviewed revision before the user clicks Publish/Unpublish. No background publishing. |

Locales: `en`, `fr`, `de`, `es`, `ja`, `pt-BR`. Existing constraints apply: lowercase slug 2–80 chars, title 4–140, summary at most 500, Markdown body 1–20,000. Incoming delegated bodies are streamed with hard byte limits (64 KiB drafts, 4 KiB publish/mint). Unknown paths/methods cannot delegate to user, thread, moderation or account APIs. Page-kind content is rejected, including inside the editorial row-locked transaction, so a concurrent resource-kind change cannot bypass the restriction.

Every request rechecks current member deletion/ban/verified email/team role and token expiry/revocation/scope. Publishing additionally rechecks admin authority. Rate limits are 60 reads/minute/connection and 20 writes/hour/connection. Revision/URL safeguards, transactions, Markdown escaping, editorial revisions and audit logs are the same services as the website UI. Delegated edit/publish audits include the connection ID and `source:studio`, never the credential or draft body.

Errors retain `{error:{code,message,fields?}}` with HTTP 400/401/403/404/405/409/413/429 as appropriate; unexpected bridge errors return a generic 500 without logging secrets or database details. All responses use `Cache-Control:no-store`.

## Rollout gates

Run PGlite delegation and existing editorial/admin regressions, build, lint and typecheck. Apply the additive migration through the normal website delivery pipeline, deploy, and verify production build-info before presenting the connection as live. Then obtain the owner's concrete credential grant in the normal website sign-in flow. The Studio can store that token in its existing encrypted owner-only vault and verify a read before enabling draft actions. A prepared UI or a copied token does not establish live permission, draft persistence, publication, indexing or real email delivery. Public publishing remains a distinct reviewed user action.
