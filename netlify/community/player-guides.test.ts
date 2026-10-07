import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { freshDatabase } from './test/harness.ts';
import { renderMarkdown } from './markdown.ts';
import { locales } from '../../lib/i18n/locales.ts';
import { homeStaticHtml } from '../../lib/community/static-html.ts';
import { guideWords } from '../../lib/community/player-guides.ts';

test('all five languages: team guides resolve every internal thread link, survive replay, and notify nobody', async () => {
  const pg = await freshDatabase();
  try {
    const { rows } = await pg.query<{
      locale: string;
      key: string;
      id: number;
      slug: string;
      body_md: string;
      body_html: string;
      role: string;
    }>(
      `SELECT g.locale,g.key,t.id,t.slug,p.body_md,p.body_html,m.role FROM player_guides g JOIN threads t ON t.id=g.thread_id JOIN posts p ON p.thread_id=t.id AND p.number=1 JOIN members m ON m.id=p.author_id`,
    );
    assert.equal(rows.length, 45);
    const paths = new Set(
      rows.map(
        (g) =>
          `${g.locale === 'en' ? '' : '/' + g.locale}/community/t/${g.id}/${g.slug}`,
      ),
    );
    for (const locale of locales) {
      assert.equal(rows.filter((g) => g.locale === locale).length, 9);
      assert.match(
        homeStaticHtml(locale),
        new RegExp(guideWords[locale].label),
      );
    }
    for (const g of rows) {
      assert.equal(g.role, 'team');
      assert.ok(!g.body_md.includes('guide-placeholder'));
      assert.equal(renderMarkdown(g.body_md).html, g.body_html);
      for (const match of g.body_html.matchAll(/href="([^"]+)"/g))
        assert.ok(paths.has(match[1]), `missing guide: ${match[1]}`);
    }
    // Editorial seed must not overwrite an opening post that a team editor changes later.
    await pg.query(
      `UPDATE posts SET body_md='Reviewed edit',body_html='<p>Reviewed edit</p>' WHERE thread_id=$1 AND number=1`,
      [rows[0].id],
    );
    await pg.exec(
      fs.readFileSync(
        'netlify/database/migrations/20261007170000_player-guides/migration.sql',
        'utf8',
      ),
    );
    assert.equal(
      (
        await pg.query<{ n: number }>(
          'SELECT count(*)::int n FROM player_guides',
        )
      ).rows[0].n,
      45,
    );
    assert.equal(
      (
        await pg.query<{ body_md: string }>(
          'SELECT body_md FROM posts WHERE thread_id=$1 AND number=1',
          [rows[0].id],
        )
      ).rows[0].body_md,
      'Reviewed edit',
    );
    assert.equal(
      (
        await pg.query<{ n: number }>(
          'SELECT count(*)::int n FROM notifications',
        )
      ).rows[0].n,
      0,
    );
  } finally {
    await pg.close();
  }
});
