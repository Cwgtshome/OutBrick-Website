// The IP hash behind every rate limit (db.ts ipHash): keyed by the IP_HASH_SALT secret, so the
// public SITE_ID alone cannot reverse it.

import { afterEach, test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { ipHash } from './db.ts';

const SITE_ID = '8b73b763-21f4-405b-a284-a4605cc31d2f';
const from = (ip: string) => new Request('https://www.outbrick.site/', { headers: { 'cf-connecting-ip': ip } });
const saved = { salt: process.env.IP_HASH_SALT, site: process.env.SITE_ID };
afterEach(() => {
  for (const [k, v] of [['IP_HASH_SALT', saved.salt], ['SITE_ID', saved.site]] as const) {
    if (v === undefined) delete process.env[k];
    else process.env[k] = v;
  }
});

void test('with the secret, the hash cannot be rebuilt from the public SITE_ID', () => {
  process.env.SITE_ID = SITE_ID;
  process.env.IP_HASH_SALT = 'test-only-ip-hash-salt';
  const h = ipHash(from('203.0.113.7'));
  const publicOnly = createHash('sha256').update(`outbrick-community-ip:${SITE_ID}:203.0.113.7`).digest('hex').slice(0, 32);
  assert.match(h, /^[0-9a-f]{32}$/);
  assert.notEqual(h, publicOnly);
});

void test('the same address gives the same key, and another address or secret a different one', () => {
  process.env.IP_HASH_SALT = 'test-only-ip-hash-salt';
  const a = ipHash(from('203.0.113.7'));
  assert.equal(ipHash(from('203.0.113.7')), a);
  assert.notEqual(ipHash(from('203.0.113.8')), a);
  process.env.IP_HASH_SALT = 'another-test-only-salt';
  assert.notEqual(ipHash(from('203.0.113.7')), a);
});

void test('without the secret it still works, on the old SITE_ID salt', () => {
  delete process.env.IP_HASH_SALT;
  process.env.SITE_ID = SITE_ID;
  const expected = createHash('sha256').update(`outbrick-community-ip:${SITE_ID}:203.0.113.7`).digest('hex').slice(0, 32);
  assert.equal(ipHash(from('203.0.113.7')), expected);
});
