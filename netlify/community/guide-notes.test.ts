// Migration 20261008170000_player-guide-help-centre-notes: every seeded player-guide thread, in all
// six languages, opens with a note pointing to its Help Centre page; Markdown and HTML agree; a
// replay changes nothing; no other post is touched.

import { after, before, test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import type { PGlite } from '@electric-sql/pglite';
import { freshDatabase } from './test/harness.ts';
import { renderMarkdown } from './markdown.ts';
import { guideHelpSlugs, helpUrl, noteFor } from '../../scripts/build-guide-help-notes.mts';

const migration = fs.readFileSync(new URL('../database/migrations/20261008170000_player-guide-help-centre-notes/migration.sql', import.meta.url), 'utf8');
const locales = ['en', 'fr', 'de', 'es', 'ja', 'pt-BR'] as const;

let pg: PGlite;
before(async () => {
  pg = await freshDatabase();
});
after(async () => {
  await pg.close();
});

type Row = { locale: string; key: string; body_md: string; body_html: string };
const guidePosts = async () =>
  (
    await pg.query<Row>(
      `SELECT g.locale, g.key, p.body_md, p.body_html FROM player_guides g JOIN posts p ON p.thread_id = g.thread_id AND p.number = 1 ORDER BY g.locale, g.key`,
    )
  ).rows;

void test('each seeded guide opens with its Help Centre note, in its own language, Markdown and HTML in step', async () => {
  const rows = await guidePosts();
  assert.equal(rows.length, locales.length * Object.keys(guideHelpSlugs).length, 'nine guide threads in each of six languages');
  for (const row of rows) {
    const locale = row.locale as (typeof locales)[number];
    const note = noteFor(locale, row.key);
    assert.ok(row.body_md.startsWith(`${note.md}\n\n`), `${locale}/${row.key} markdown`);
    assert.ok(row.body_html.startsWith(`${note.html}\n`), `${locale}/${row.key} html`);
    assert.equal(renderMarkdown(row.body_md).html, row.body_html, `${locale}/${row.key}: stored HTML is the renderer's output for the stored Markdown`);
    const url = helpUrl(locale, row.key);
    assert.equal(row.body_md.split(`](${url})`).length - 1, 1, 'the note appears once');
    assert.ok(url.startsWith(locale === 'en' ? 'https://www.outbrick.site/community/help' : `https://www.outbrick.site/${locale}/community/help`));
  }
  assert.ok(helpUrl('fr', 'versions').endsWith('/fr/community/help/troubleshooting'));
  assert.ok(helpUrl('pt-BR', 'index').endsWith('/pt-BR/community/help'));
});

void test('running the migration again changes nothing, and posts that are not guide openings are untouched', async () => {
  const before = await guidePosts();
  const others = (await pg.query<{ n: number }>(`SELECT count(*)::int AS n FROM posts WHERE body_md LIKE '%/community/help%' AND (thread_id, number) NOT IN (SELECT thread_id, 1 FROM player_guides)`)).rows[0].n;
  await pg.exec(migration);
  assert.deepEqual(await guidePosts(), before);
  assert.equal(others, 0);
});
