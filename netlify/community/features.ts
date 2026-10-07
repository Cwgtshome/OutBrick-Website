// Phase 2 (community-p2): which optional features this deploy has switched on, for
// SessionResponse.features. Each one that needs a credential is off until its env vars exist.
//
//   passkeys      always (WebAuthn needs no credentials; set COMMUNITY_PASSKEYS=off to hide it)
//   uploads       always on Netlify (Blobs needs no setup; set COMMUNITY_UPLOADS=off to hide it)
//   replyByEmail  COMMUNITY_REPLY_DOMAIN + RESEND_WEBHOOK_SECRET + RESEND_API_KEY
//   translate     ANTHROPIC_API_KEY (ANTHROPIC_BASE_URL optional; Netlify's AI Gateway sets both)
//   digest        RESEND_API_KEY

import type { CommunityFeatures } from '../../lib/community/contract.ts';

type Env = Record<string, string | undefined>;
const set = (v: string | undefined) => Boolean(v?.trim());
const notOff = (v: string | undefined) => (v ?? '').trim().toLowerCase() !== 'off';

export const replyByEmailConfigured = (e: Env = process.env) => set(e.COMMUNITY_REPLY_DOMAIN) && set(e.RESEND_WEBHOOK_SECRET) && set(e.RESEND_API_KEY);

export function communityFeatures(e: Env = process.env): CommunityFeatures {
  return {
    passkeys: notOff(e.COMMUNITY_PASSKEYS),
    uploads: notOff(e.COMMUNITY_UPLOADS),
    replyByEmail: replyByEmailConfigured(e),
    translate: set(e.ANTHROPIC_API_KEY),
    digest: set(e.RESEND_API_KEY),
  };
}
