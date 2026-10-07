// OutBrick Community: accounts, sign-in and the member's own settings and notifications.
// See netlify/community/auth/ for each flow and lib/community/contract.ts for the shapes.
//
// Providers switch themselves on when their credentials are set in Netlify:
//   Apple     APPLE_CLIENT_ID (Services ID), APPLE_TEAM_ID, APPLE_KEY_ID, APPLE_PRIVATE_KEY
//   Google    GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
//   Facebook  FACEBOOK_APP_ID, FACEBOOK_APP_SECRET
//   Email     RESEND_API_KEY (also signs the community's unsubscribe links)
//   Admins    COMMUNITY_ADMIN_EMAILS (comma-separated)

import { communityAuth } from '../community/auth/routes.ts';

const handler = async (req: Request): Promise<Response> => communityAuth(req);
export default handler;

export const config = {
  path: [
    '/api/community/session',
    '/api/community/auth/*',
    '/api/community/me',
    '/api/community/me/*',
    '/api/community/notifications',
    '/api/community/notifications/*',
    '/api/community/email/*',
  ],
};
