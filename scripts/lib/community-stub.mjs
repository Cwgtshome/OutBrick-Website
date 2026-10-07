// A read-only stand-in for /api/community/*, for scripts/serve-dist.mjs: the site audits in CI
// (axe, the responsive sweep, the cross-browser smoke test) load the community pages, which ask
// the API for the session, the categories, the latest threads and the FAQ. Without an answer the
// browser logs a 404 and the audits fail on the console error. This answers those four reads
// with a signed-out visitor and an empty forum, in the contract's shapes
// (lib/community/contract.ts); everything else is a JSON 404. For working on the pages with
// real data, use scripts/community-mock.mjs, which runs the actual functions.

const categories = ['announcements', 'help', 'bugs', 'ideas', 'accessibility', 'show-and-tell', 'general'].map((slug, i) => ({
  id: i + 1,
  slug,
  kind: { help: 'support', 'show-and-tell': 'showcase' }[slug] ?? slug,
  teamOnlyThreads: slug === 'announcements',
  threadCount: 0,
  postCount: 0,
  lastPostAt: null,
}));

const answers = {
  '/api/community/session': () => ({ member: null, providers: ['email'], unreadNotifications: 0, features: { passkeys: true, uploads: false, replyByEmail: false, translate: false, digest: false } }),
  '/api/community/roadmap': () => ({ columns: ['considering', 'planned', 'in_progress', 'shipped'].map((status) => ({ status, threads: [], total: 0 })) }),
  '/api/community/leaderboard': () => ({ period: 'month', kind: 'helpers', entries: [], team: [] }),
  '/api/community/categories': () => ({ categories }),
  '/api/community/threads': () => ({ threads: [], page: 1, pages: 1, total: 0 }),
  '/api/community/faq': () => ({ entries: [] }),
};

/** Answer `pathname` if it is a community API path; returns false for anything else. */
export function communityStub(pathname, res) {
  if (!pathname.startsWith('/api/community/')) return false;
  const answer = answers[pathname.replace(/\/$/, '')];
  res.writeHead(answer ? 200 : 404, { 'content-type': 'application/json', 'cache-control': 'no-store' });
  res.end(JSON.stringify(answer ? answer() : { error: { code: 'not_found', message: 'Not in the stand-in API.' } }));
  return true;
}
