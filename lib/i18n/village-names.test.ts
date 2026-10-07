import { test } from 'node:test';
import assert from 'node:assert/strict';
import { villages } from '../villages.ts';
import { localizedVillageName } from './village-names.ts';

void test('all Journey places have Brazilian Portuguese names without changing other locales', () => {
  for (const village of villages) {
    const translated = localizedVillageName(village.name, 'pt-BR');
    assert.notEqual(translated, village.name, `${village.name} needs a Portuguese name`);
    assert.equal(localizedVillageName(village.name, 'en'), village.name);
  }
});
