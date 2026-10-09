// "This affects me too" on the known-issues page (app/components/support/me-too.tsx): anonymous
// counts that tell the team how widespread a known problem is, and tell a player they are not
// alone, without anyone filing a duplicate request.
//
//   GET  /api/community/known-issues/me-too        { counts: Record<issueId, number> }, cached a minute
//   POST /api/community/known-issues/:id/me-too    { count } — once a day per connection and issue
//
// One small object in the community-signals store (R2), so no database migration is needed. The
// IP hash is only a rate-limit key (rate_events, pruned after two days), never stored here.

import { platformStore } from '../platform.ts';
import { ipHash, rateAllow } from './db.ts';
import { badRequest, json, tooMany, type Route } from './http.ts';
import { en as issues } from '../../lib/support/issues/en.ts';

const STORE = 'community-signals';
const KEY = 'known-issues-me-too.json';
type Counts = Record<string, number>;

type Store = { get: (key: string, opts: { type: 'json' }) => Promise<unknown>; setJSON: (key: string, value: unknown) => Promise<unknown> };
let override: Store | null = null;
export function setMeTooStoreForTests(store: Store | null): void {
  override = store;
}
const store = (): Store => override ?? (platformStore(STORE) as unknown as Store);

async function read(): Promise<Counts> {
  const stored = (await store().get(KEY, { type: 'json' })) as Counts | null;
  return stored && typeof stored === 'object' ? stored : {};
}

export const getMeToo: Route['run'] = async () => json({ counts: await read() }, { headers: { 'Cache-Control': 'public, max-age=60' } });

export const postMeToo: Route['run'] = async (req, params) => {
  const id = params.id ?? '';
  const issue = issues.find((i) => i.id === id);
  if (!issue || issue.status === 'fixed') throw badRequest('invalid', 'Unknown or fixed issue.');
  if (!(await rateAllow(`me-too:${ipHash(req)}:${id}`, 1, 86400))) throw tooMany('Thank you, you are already counted.');
  const counts = await read();
  counts[id] = (counts[id] ?? 0) + 1;
  await store().setJSON(KEY, counts);
  return json({ count: counts[id] });
};

export const meTooRoutes = (base: string): Route[] => [
  { method: 'GET', pattern: `${base}/known-issues/me-too`, run: getMeToo },
  { method: 'POST', pattern: `${base}/known-issues/:id/me-too`, run: postMeToo },
];
