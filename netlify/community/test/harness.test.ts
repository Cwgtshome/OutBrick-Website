import { test } from 'node:test';
import assert from 'node:assert/strict';
import { freshDatabase, signedInCookie, request } from './harness.ts';
import { currentMember } from '../session.ts';

void test('the harness applies migrations and sessions round-trip', async () => {
  const pg = await freshDatabase();
  const { id, cookie } = await signedInCookie(pg, { displayName: 'Ada', email: 'ada@example.com' });
  const viewer = await currentMember(request('GET', '/api/community/session', { cookie }));
  assert.equal(viewer?.id, id);
  assert.equal(viewer?.display_name, 'Ada');
  assert.equal(await currentMember(request('GET', '/', {})), null);
  await pg.close();
});
