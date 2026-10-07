// The sign-in link's lifetime is stated in the sign-in email and on the sign-in page, in five
// languages. They must say what SIGNIN_MINUTES actually is.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SIGNIN_MINUTES } from '../email-link.ts';
import { communityCopy as pageCopy } from '../../../../lib/i18n/community.ts';
import { communityCopy as emailCopy } from '../../../../emails/community-i18n.ts';

const minuteWords = /(\d+)\s*(?:minutes?|Minuten|minutos|分)/g;

function numbersIn(value: unknown, out: number[] = []): number[] {
  if (typeof value === 'string') for (const m of value.matchAll(minuteWords)) out.push(Number(m[1]));
  else if (value && typeof value === 'object') for (const v of Object.values(value)) numbersIn(v, out);
  return out;
}

void test('every stated sign-in link lifetime equals SIGNIN_MINUTES, in all six languages', () => {
  for (const locale of ['en', 'fr', 'de', 'es', 'ja'] as const) {
    const page = numbersIn((pageCopy[locale] as unknown as Record<string, unknown>).signin);
    const email = numbersIn((emailCopy[locale] as unknown as Record<string, unknown>).signin);
    assert.ok(page.length >= 3, `${locale}: the sign-in page states the lifetime`);
    assert.ok(email.length >= 1, `${locale}: the sign-in email states the lifetime`);
    for (const n of [...page, ...email]) assert.equal(n, SIGNIN_MINUTES, `${locale}: says ${n} minutes`);
  }
});
