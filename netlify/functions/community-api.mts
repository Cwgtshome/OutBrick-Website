// /api/community/* — the forum: categories, threads, posts, search, the FAQ, member profiles and
// moderation. Sign-in, the member's own account and notifications are community-auth.mts.
//
// This file is only the map from URL to handler. The handlers live in netlify/community/
// (threads.ts, posts.ts, search.ts, faq.ts, members.ts, moderation.ts) as plain functions the
// tests call directly; the request and response shapes are lib/community/contract.ts.
//
// `handle()` (netlify/community/http.ts) does the rest for every route: it refuses any write
// that does not come from our own pages (the Origin check), turns a thrown ApiError into
// `{ error: { code, message, fields } }` with its status, and answers anything unexpected as a
// plain 500 without detail. Who may do what is checked inside each handler, next to the rule.
//
// Responses are never cached (Cache-Control: no-store): a forum page that a CDN kept would
// show a reply that was hidden, or hide one that was just posted.

import type { Route } from '../community/http.ts';
import { handle } from '../community/http.ts';
import { createFaq, deleteFaq, getFaq, patchFaq } from '../community/faq.ts';
import { getMember } from '../community/members.ts';
import { approvePost, banMember, hidePost, listQueue, listReports, resolveReport, setRole } from '../community/moderation.ts';
import { deletePost, patchPost, postReply, preview, reportPost } from '../community/posts.ts';
import { getSearch } from '../community/search.ts';
// Phase 2 (community-p2)
import { mergeThread } from '../community/merge.ts';
import { translatePost } from '../community/translate.ts';
import { createUpload, deleteUpload, serveUpload } from '../community/uploads.ts';
import {
  followCategory,
  followThread,
  getThread,
  getThreads,
  listCategories,
  markRead,
  patchThread,
  postThread,
  solveThread,
  voteThread,
} from '../community/threads.ts';
// Feature board and interactive features (community-fx) ------------------------------------
import { grantBadge } from '../community/badges.ts';
import { getRoadmap, getSimilar } from '../community/ideas.ts';
import { getPulse, getUpdates } from '../community/live.ts';
import { getLeaderboard, suggestMembers } from '../community/people.ts';
import { votePoll } from '../community/polls.ts';
import { bookmark, react } from '../community/reactions.ts';
import { dashboard, watchAll, saveContent, publishContent, publicContent } from '../community/admin.ts';
import { caseRoutes } from '../lifecycle/cases.ts';
import { playerCaseRoutes } from '../lifecycle/player-cases.ts';
import { attachmentRoutes } from '../lifecycle/support-attachments.ts';
import { siteStatusRoutes } from '../community/site-status.ts';
import { levelRoutes } from '../community/levels.ts';
import { meTooRoutes } from '../community/me-too.ts';
import { helpFeedbackRoutes } from '../community/help-feedback.ts';
import { applicationRoutes } from '../lifecycle/applications.ts';
import { securityRoutes } from '../lifecycle/security.ts';
import { analyticsRoutes } from '../lifecycle/analytics.ts';

const base = '/api/community';

/** Routes with fixed words where the forum has `:id`; they are matched before the forum's routes. */
const fxRoutes: Route[] = [
  { method: 'GET', pattern: `${base}/roadmap`, run: getRoadmap },
  { method: 'GET', pattern: `${base}/threads/similar`, run: getSimilar },
  { method: 'GET', pattern: `${base}/threads/:id/updates`, run: getUpdates },
  { method: 'POST', pattern: `${base}/threads/:id/poll/vote`, run: votePoll },
  { method: 'POST', pattern: `${base}/posts/:id/reactions`, run: react },
  { method: 'POST', pattern: `${base}/posts/:id/bookmark`, run: bookmark },
  { method: 'GET', pattern: `${base}/pulse`, run: getPulse },
  { method: 'GET', pattern: `${base}/leaderboard`, run: getLeaderboard },
  { method: 'GET', pattern: `${base}/members/suggest`, run: suggestMembers },
  { method: 'POST', pattern: `${base}/mod/members/:id/badges`, run: grantBadge },
];
// (GET /me/bookmarks is served by community-auth.mts, which owns /me/*.)

const routes: Route[] = [
  ...fxRoutes,
  // Customer lifecycle (8 October 2026): support cases, applications, notices.
  ...caseRoutes(base),
  ...playerCaseRoutes(base),
  ...attachmentRoutes(base),
  ...siteStatusRoutes(base),
  ...levelRoutes(base),
  ...meTooRoutes(base),
  ...helpFeedbackRoutes(base),
  ...applicationRoutes(base),
  ...securityRoutes(base),
  // Email analytics (9 October 2026), admins only.
  ...analyticsRoutes(base),
  { method: 'GET', pattern: `${base}/admin`, run: dashboard },
  { method: 'POST', pattern: `${base}/admin/watch`, run: watchAll },
  { method: 'POST', pattern: `${base}/admin/content`, run: saveContent },
  { method: 'PATCH', pattern: `${base}/admin/content/:id`, run: saveContent },
  { method: 'POST', pattern: `${base}/admin/content/:id/publish`, run: publishContent },
  { method: 'GET', pattern: `${base}/content`, run: publicContent },
  { method: 'GET', pattern: `${base}/content/:locale/:kind/:slug`, run: publicContent },

  { method: 'GET', pattern: `${base}/categories`, run: listCategories },
  { method: 'POST', pattern: `${base}/categories/:slug/follow`, run: followCategory },

  { method: 'GET', pattern: `${base}/threads`, run: getThreads },
  { method: 'POST', pattern: `${base}/threads`, run: postThread },
  { method: 'GET', pattern: `${base}/threads/:id`, run: getThread },
  { method: 'PATCH', pattern: `${base}/threads/:id`, run: patchThread },
  { method: 'POST', pattern: `${base}/threads/:id/posts`, run: postReply },
  { method: 'POST', pattern: `${base}/threads/:id/solve`, run: solveThread },
  { method: 'POST', pattern: `${base}/threads/:id/vote`, run: voteThread },
  { method: 'POST', pattern: `${base}/threads/:id/follow`, run: followThread },
  { method: 'POST', pattern: `${base}/threads/:id/read`, run: markRead },

  { method: 'PATCH', pattern: `${base}/posts/:id`, run: patchPost },
  { method: 'DELETE', pattern: `${base}/posts/:id`, run: deletePost },
  { method: 'POST', pattern: `${base}/posts/:id/report`, run: reportPost },
  { method: 'POST', pattern: `${base}/posts/:id/approve`, run: approvePost },
  { method: 'POST', pattern: `${base}/posts/:id/hide`, run: hidePost },

  { method: 'POST', pattern: `${base}/preview`, run: preview },
  { method: 'GET', pattern: `${base}/search`, run: getSearch },

  { method: 'GET', pattern: `${base}/faq`, run: getFaq },
  { method: 'POST', pattern: `${base}/faq`, run: createFaq },
  { method: 'PATCH', pattern: `${base}/faq/:id`, run: patchFaq },
  { method: 'DELETE', pattern: `${base}/faq/:id`, run: deleteFaq },

  { method: 'GET', pattern: `${base}/members/:id`, run: getMember },

  { method: 'GET', pattern: `${base}/mod/reports`, run: listReports },
  { method: 'POST', pattern: `${base}/mod/reports/:id/resolve`, run: resolveReport },
  { method: 'GET', pattern: `${base}/mod/queue`, run: listQueue },
  { method: 'POST', pattern: `${base}/mod/members/:id/ban`, run: banMember },
  { method: 'POST', pattern: `${base}/mod/members/:id/role`, run: setRole },

  // Phase 2 (community-p2) ------------------------------------------------------------------
  { method: 'POST', pattern: `${base}/mod/threads/:id/merge`, run: mergeThread },
  { method: 'POST', pattern: `${base}/posts/:id/translate`, run: translatePost },
  { method: 'POST', pattern: `${base}/uploads`, run: createUpload },
  { method: 'GET', pattern: `${base}/uploads/:id`, run: serveUpload },
  { method: 'DELETE', pattern: `${base}/uploads/:id`, run: deleteUpload },
];

const communityApi = async (req: Request): Promise<Response> => handle(req, routes);

export default communityApi;

// Netlify reads this object statically at build time: every path must be a plain string literal.
export const config = {
  path: [
    '/api/community/admin',
    '/api/community/admin/*',
    '/api/community/content',
    '/api/community/content/*',
    '/api/community/categories',
    '/api/community/categories/*',
    '/api/community/threads',
    '/api/community/threads/*',
    '/api/community/posts/*',
    '/api/community/preview',
    '/api/community/search',
    '/api/community/faq',
    '/api/community/faq/*',
    '/api/community/members/*',
    '/api/community/mod/*',
    // Phase 2 (community-p2)
    '/api/community/uploads',
    '/api/community/uploads/*',
    // community-fx
    '/api/community/roadmap',
    '/api/community/pulse',
    '/api/community/leaderboard',
  ],
};
