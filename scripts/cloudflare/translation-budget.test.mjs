import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { RESERVE_TRANSLATION_SQL, TRANSLATION_DAILY_NEURONS, translationReservation } from '../../cloudflare/translation-policy.ts';

test('free allowance is durably reserved and exhaustion rejects further calls', () => {
  const db = new DatabaseSync(':memory:');
  db.exec('CREATE TABLE translation_budget (day TEXT PRIMARY KEY, neurons INTEGER NOT NULL CHECK(neurons >= 0 AND neurons <= 5000))');
  const reserve = db.prepare(RESERVE_TRANSLATION_SQL);
  const day = '2026-10-09';
  for (let i = 1; i <= 5; i++) assert.equal(reserve.get(day, 1000, TRANSLATION_DAILY_NEURONS).neurons, i * 1000);
  // A fresh prepared statement reads persisted SQL, rather than an in-memory counter.
  assert.equal(db.prepare(RESERVE_TRANSLATION_SQL).get(day, 1, TRANSLATION_DAILY_NEURONS), undefined);
  assert.equal(reserve.get('2026-10-10', 1000, TRANSLATION_DAILY_NEURONS).neurons, 1000);
  db.close();
});

test('multibyte inputs reserve their byte bound and oversized inputs fail before inference', () => {
  assert.ok(translationReservation('日本語', 'Translate').neurons >= translationReservation('abc', 'Translate').neurons);
  assert.throws(() => translationReservation('日'.repeat(6000), 'Translate'), /free request limit/);
  const maximum = translationReservation('x'.repeat(15000), 'Translate');
  assert.ok(maximum.neurons < TRANSLATION_DAILY_NEURONS);
  assert.equal(maximum.maxTokens, 6000);
});
