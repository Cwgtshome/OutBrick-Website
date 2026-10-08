// Reviewed editorial source -> additive, idempotent SQL migration. Never edit player replies.
//
//   node --experimental-strip-types scripts/build-player-guide-seed.mts
//
// History. The team guides were first seeded on 7 October 2026 by two migrations this script
// wrote then: 20261007170000_player-guides (five languages) and
// 20261007190100_brazilian_portuguese_player_guides. Applied migrations never change, and the
// guide source (lib/community/player-guides.ts, lib/i18n/current-game.ts) has moved on since,
// so those two files are now read here as a record of what was seeded, not regenerated.
//
// What it writes. CURRENT_MIGRATION below: an UPDATE of
//   - each guide's opening post, to the current source, in all six languages, and
//   - the support FAQ answers whose facts changed (lives, timer/moves, stars, daily video caps),
//     from the same lib/i18n/current-game.ts copy the support page shows,
// but only where the row still holds text a migration seeded. A post or answer the team has
// edited in the community is left alone. Running a migration twice changes nothing.
//
// To publish a later correction, set CURRENT_MIGRATION to a new, unique timestamp (Netlify
// rejects duplicates) and run this again; it refuses to overwrite a different existing file.

import fs from 'node:fs';
import { playerGuides, guideWords } from '../lib/community/player-guides.ts';
import { currentGameCopy } from '../lib/i18n/current-game.ts';
import { renderMarkdown } from '../netlify/community/markdown.ts';
import { locales, type Locale } from '../lib/i18n/locales.ts';

const CURRENT_MIGRATION = 'netlify/database/migrations/20261008120000_faq-current-game/migration.sql';
const MIGRATIONS = 'netlify/database/migrations';
const GUIDE_SEEDS = [`${MIGRATIONS}/20261007170000_player-guides/migration.sql`, `${MIGRATIONS}/20261007190100_brazilian_portuguese_player_guides/migration.sql`];
const FAQ_SEEDS = [`${MIGRATIONS}/20261007100100_faq-seed/migration.sql`, `${MIGRATIONS}/20261007160000_current-game-faq/migration.sql`, `${MIGRATIONS}/20261007190000_brazilian_portuguese/migration.sql`];

const literal = (text: string) => `'${text.replaceAll("'", "''")}'`;
const unquote = (sql: string) => sql.slice(1, -1).replaceAll("''", "'");
const STRING = String.raw`'(?:[^']|'')*'`;

/** One guide's opening post, with `(guide:key)` links as the placeholders SQL resolves. */
function guideBodies(locale: Locale): { key: string; md: string; html: string }[] {
  const guides = playerGuides(locale),
    w = guideWords[locale];
  const all = [
    ...guides,
    { key: 'index', body: `${w.checkpoint}\n\n${w.intro}\n\n` + guides.map((g) => `- [${g.title}](guide:${g.key})`).join('\n') },
  ];
  return all.map((g) => {
    const related =
      g.key === 'index'
        ? ''
        : `\n\n## ${w.related}\n\n[${w.hub}](guide:index)\n\n` + guides.filter((x) => x.key !== g.key).map((x) => `- [${x.title}](guide:${x.key})`).join('\n');
    // Safe path placeholders survive the normal allow-list renderer; SQL resolves real ids.
    const md = (g.body + related).replaceAll('(guide:', '(/community/guide-placeholder/');
    return { key: g.key, md, html: renderMarkdown(md).html };
  });
}

/** What the 7 October migrations seeded, per locale and key (placeholders still in place). */
function seededGuides(): Map<string, { md: string; html: string }> {
  const seeded = new Map<string, { md: string; html: string }>();
  for (const file of GUIDE_SEEDS) {
    const sql = fs.readFileSync(file, 'utf8');
    for (const [block] of sql.matchAll(/DO \$guide\$[\s\S]*?END \$guide\$;/g)) {
      const id = block.match(new RegExp(String.raw`WHERE locale = (${STRING}) AND key = (${STRING})`));
      const post = block.match(new RegExp(String.raw`VALUES \(tid, aid, 1, (${STRING}), (${STRING})\);`));
      if (!id || !post) throw new Error(`${file}: unreadable guide block`);
      seeded.set(`${unquote(id[1]!)}/${unquote(id[2]!)}`, { md: unquote(post[1]!), html: unquote(post[2]!) });
    }
  }
  return seeded;
}

/** Every answer_md a migration ever gave each (locale, position). */
function seededFaqAnswers(): Map<string, Set<string>> {
  const seen = new Map<string, Set<string>>();
  const add = (locale: string, position: number, answer: string) => {
    const key = `${locale}/${position}`;
    seen.set(key, (seen.get(key) ?? new Set()).add(answer));
  };
  for (const file of FAQ_SEEDS) {
    const sql = fs.readFileSync(file, 'utf8');
    for (const m of sql.matchAll(new RegExp(String.raw`\((${STRING}), (${STRING}), (${STRING}), (${STRING}), (${STRING}), (\d+)\)`, 'g')))
      add(unquote(m[1]!), Number(m[6]), unquote(m[4]!));
    for (const m of sql.matchAll(new RegExp(String.raw`UPDATE faq_entries SET answer_md = (${STRING}),[\s\S]*?WHERE locale = (${STRING}) AND position = (\d+);`, 'g')))
      add(unquote(m[2]!), Number(m[3]), unquote(m[1]!));
  }
  return seen;
}

/** The FAQ answers whose facts live in lib/i18n/current-game.ts, by seed position. */
function currentFaqAnswers(locale: Locale): { position: number; topic: string; md: string }[] {
  const c = currentGameCopy[locale];
  const stop = locale === 'ja' ? '。' : '. ';
  return [
    { position: 1, topic: 'lives', md: c.lives },
    { position: 3, topic: 'moves', md: c.moves },
    { position: 5, topic: 'stars', md: c.stars },
    // "Eight opt-in video placements, capped at 39 a day. Daily caps: lives 8, …"
    { position: 7, topic: 'ads', md: `${c.adsTitle}${stop}${c.ads}` },
  ];
}

function buildMigration(): string {
  let sql = `-- Generated by scripts/build-player-guide-seed.mts on 8 October 2026.
-- Brings the support FAQ and the team's player guides up to the released iOS 5.1.1 (Slide &
-- Match), checked against Apple's lookup and the App Store description the same day:
--   * FAQ: up to 39 rewarded videos a day across eight placements (the seed said 31 across six;
--     20261007160000 listed the caps but not the total, and never reached pt-BR); a life is
--     also lost by restarting after a move; pt-BR timer and stars answers match the site.
--   * Guides: "Checked … released iOS 5.1.1", and slide-and-match steps in place of the 5.0.1
--     match-three swap steps; the version guide's "in development" 5.1 note becomes "New in 5.1".
-- Each row changes only while it still holds text an earlier migration seeded, so a team edit
-- made in the community is never overwritten. No notifications; idempotent on replay.
`;

  sql += '\n-- Support FAQ ---------------------------------------------------------------------------\n';
  const seededFaq = seededFaqAnswers();
  for (const locale of locales) {
    for (const answer of currentFaqAnswers(locale)) {
      const previous = [...(seededFaq.get(`${locale}/${answer.position}`) ?? [])].filter((text) => text !== answer.md);
      if (!previous.length) continue;
      const html = renderMarkdown(answer.md).html;
      sql += `UPDATE faq_entries SET answer_md = ${literal(answer.md)}, answer_html = ${literal(html)}, updated_at = now()\n WHERE locale = ${literal(locale)} AND position = ${answer.position} AND topic = ${literal(answer.topic)} AND answer_md IN (${previous.map(literal).join(', ')});\n`;
    }
  }

  sql += '\n-- Player guides: opening posts -------------------------------------------------------------\n';
  const seeded = seededGuides();
  for (const locale of locales) {
    const prefix = locale === 'en' ? '/community/t/' : `/${locale}/community/t/`;
    for (const guide of guideBodies(locale)) {
      const old = seeded.get(`${locale}/${guide.key}`);
      if (!old) throw new Error(`no seeded guide ${locale}/${guide.key}`);
      if (old.md === guide.md && old.html === guide.html) continue;
      // Resolve the placeholders exactly as the seed did, compare with what the post holds now,
      // and replace it only when it is still the seeded text.
      sql += `
DO $guide$
DECLARE tid bigint; target record; old_md text := ${literal(old.md)}; new_md text := ${literal(guide.md)}; new_html text := ${literal(guide.html)};
BEGIN
 SELECT thread_id INTO tid FROM player_guides WHERE locale = ${literal(locale)} AND key = ${literal(guide.key)};
 IF tid IS NULL THEN RETURN; END IF;
 FOR target IN SELECT g.key, t.id, t.slug FROM player_guides g JOIN threads t ON t.id = g.thread_id WHERE g.locale = ${literal(locale)} LOOP
  old_md := replace(old_md, '/community/guide-placeholder/' || target.key, ${literal(prefix)} || target.id || '/' || target.slug);
  new_md := replace(new_md, '/community/guide-placeholder/' || target.key, ${literal(prefix)} || target.id || '/' || target.slug);
  new_html := replace(new_html, '/community/guide-placeholder/' || target.key, ${literal(prefix)} || target.id || '/' || target.slug);
 END LOOP;
 UPDATE posts SET body_md = new_md, body_html = new_html WHERE thread_id = tid AND number = 1 AND body_md = old_md;
END $guide$;
`;
    }
  }
  return sql;
}

function writeImmutableMigration(migration: string, sql: string): void {
  if (fs.existsSync(migration)) {
    if (fs.readFileSync(migration, 'utf8') !== sql) {
      throw new Error(`Migration ${migration} is immutable; set CURRENT_MIGRATION to a new timestamp for further changes.`);
    }
    console.log(`${migration} is up to date.`);
    return;
  }
  fs.mkdirSync(migration.slice(0, migration.lastIndexOf('/')), { recursive: true });
  fs.writeFileSync(migration, sql);
  console.log(`Wrote ${migration}.`);
}

writeImmutableMigration(CURRENT_MIGRATION, buildMigration());
