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

const base = '/api/community';

const routes: Route[] = [
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
];

export default async (req: Request): Promise<Response> => handle(req, routes);

export const config = {
  path: [
    `${base}/categories`,
    `${base}/categories/*`,
    `${base}/threads`,
    `${base}/threads/*`,
    `${base}/posts/*`,
    `${base}/preview`,
    `${base}/search`,
    `${base}/faq`,
    `${base}/faq/*`,
    `${base}/members/*`,
    `${base}/mod/*`,
  ],
};
