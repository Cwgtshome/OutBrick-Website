import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { freshDatabase } from './test/harness.ts';
import { renderMarkdown } from './markdown.ts';
import { locales } from '../../lib/i18n/locales.ts';
import { homeStaticHtml } from '../../lib/community/static-html.ts';
import { guideWords } from '../../lib/community/player-guides.ts';

void test('all six languages: team guides resolve every internal thread link, survive replay, and notify nobody', async () => {
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
    assert.equal(rows.length, locales.length * 9);
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
      locales.length * 9,
    );
    await pg.exec(
      fs.readFileSync(
        'netlify/database/migrations/20261007190100_brazilian_portuguese_player_guides/migration.sql',
        'utf8',
      ),
    );
    assert.equal(
      (await pg.query<{ n: number }>('SELECT count(*)::int n FROM player_guides')).rows[0].n,
      locales.length * 9,
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

void test('8 October 2026 correction: FAQ and guides state released 5.1.1 facts, and replay keeps team edits', async () => {
  const pg = await freshDatabase();
  const correction = 'netlify/database/migrations/20261008120000_faq-current-game/migration.sql';
  try {
    // Every language: 39 videos a day across eight placements, never the old 31 across six.
    const ads = await pg.query<{ locale: string; answer_md: string; answer_html: string }>(
      `SELECT locale, answer_md, answer_html FROM faq_entries WHERE position = 7 ORDER BY locale`,
    );
    assert.equal(ads.rows.length, locales.length);
    for (const row of ads.rows) {
      assert.match(row.answer_md, /39/, `${row.locale} ads answer names the daily total`);
      assert.doesNotMatch(row.answer_md, /31|thirty-one|trente et une|einunddreißig|treinta y uno/i, `${row.locale} ads answer`);
      assert.equal(renderMarkdown(row.answer_md).html, row.answer_html);
    }
    const lives = await pg.query<{ locale: string; answer_md: string }>(`SELECT locale, answer_md FROM faq_entries WHERE position = 1`);
    assert.equal(lives.rows.length, locales.length);
    const english = lives.rows.find((row) => row.locale === 'en')!;
    assert.match(english.answer_md, /restart after making a move/);

    // Guides: checked against 5.1.1; no opening post still claims 5.0.1 is the release.
    const posts = await pg.query<{ locale: string; key: string; body_md: string; body_html: string }>(
      `SELECT g.locale, g.key, p.body_md, p.body_html FROM player_guides g JOIN posts p ON p.thread_id = g.thread_id AND p.number = 1`,
    );
    assert.equal(posts.rows.length, locales.length * 9);
    for (const row of posts.rows) {
      assert.match(row.body_md, /5\.1\.1/, `${row.locale}/${row.key} names 5.1.1`);
      assert.doesNotMatch(row.body_md, /5\.0\.1/, `${row.locale}/${row.key} no longer names 5.0.1`);
      assert.ok(!row.body_md.includes('guide-placeholder'), `${row.locale}/${row.key} links resolved`);
      assert.equal(renderMarkdown(row.body_md).html, row.body_html);
    }

    // A team edit (FAQ answer or guide post) survives a replay of the correction.
    const edited = posts.rows.find((row) => row.locale === 'fr' && row.key === 'first-board')!;
    await pg.query(
      `UPDATE posts SET body_md='Relu par l’équipe',body_html='<p>Relu par l’équipe</p>' WHERE number=1 AND thread_id=(SELECT thread_id FROM player_guides WHERE locale='fr' AND key='first-board')`,
    );
    await pg.query(`UPDATE faq_entries SET answer_md='Team answer', answer_html='<p>Team answer</p>' WHERE locale='en' AND position=7`);
    await pg.exec(fs.readFileSync(correction, 'utf8'));
    const after = await pg.query<{ body_md: string }>(
      `SELECT body_md FROM posts WHERE number=1 AND thread_id=(SELECT thread_id FROM player_guides WHERE locale='fr' AND key='first-board')`,
    );
    assert.equal(after.rows[0].body_md, 'Relu par l’équipe');
    assert.notEqual(after.rows[0].body_md, edited.body_md);
    const faq = await pg.query<{ answer_md: string }>(`SELECT answer_md FROM faq_entries WHERE locale='en' AND position=7`);
    assert.equal(faq.rows[0].answer_md, 'Team answer');
    assert.equal((await pg.query<{ n: number }>('SELECT count(*)::int n FROM notifications')).rows[0].n, 0);
  } finally {
    await pg.close();
  }
});
