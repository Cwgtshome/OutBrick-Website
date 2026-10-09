// Checks the Help Centre's content before a build:
//
//   node --experimental-strip-types scripts/check-help.mjs
//
// * every article in every language has the English article's slug, section ids and screenshot
//   ids, in the same order (a translation may lag, but never drift);
// * every screenshot an article shows exists in lib/help/shots.json with an English capture;
// * every [words](help:slug#section) link points at a real guide and section;
// * every inline token is balanced (** ** , {{ }}, ` `, [ ]( )) so nothing renders as raw markup.
// Exits non-zero with a list of problems.

import { readFileSync } from 'node:fs';
import { en } from '../lib/help/content/en.ts';
import { fr } from '../lib/help/content/fr.ts';
import { de } from '../lib/help/content/de.ts';
import { es } from '../lib/help/content/es.ts';
import { ja } from '../lib/help/content/ja.ts';
import { ptBR } from '../lib/help/content/pt-BR.ts';
import { helpOrder } from '../lib/help/model.ts';

const shots = JSON.parse(readFileSync(new URL('../lib/help/shots.json', import.meta.url), 'utf8'));
const problems = [];
const say = (where, what) => problems.push(`${where}: ${what}`);

const english = new Map(en.articles.map((a) => [a.slug, a]));
for (const slug of helpOrder) if (!english.has(slug)) say('en', `no English article for "${slug}"`);
for (const a of en.articles) if (!helpOrder.includes(a.slug)) say('en', `"${a.slug}" is not in helpOrder`);

// Anchors a link can target: section ids and encyclopedia entry ids (both rendered as element ids).
const sectionsOf = (a) => a.sections.flatMap((s) => [s.id, ...s.blocks.filter((b) => b.t === 'entry').map((b) => b.id)]);
const shotsOf = (a) =>
  a.sections.flatMap((s) => s.blocks.flatMap((b) => (b.t === 'shot' ? [b.id] : b.t === 'shots' ? b.items.map((i) => i.id) : [])));
const textsOf = (a) => {
  const out = [a.title, a.summary];
  for (const s of a.sections) {
    out.push(s.title);
    for (const b of s.blocks) {
      if (b.t === 'p' || b.t === 'h3') out.push(b.text);
      else if (b.t === 'steps' || b.t === 'list') out.push(...b.items);
      else if (b.t === 'shot') out.push(b.caption, b.alt);
      else if (b.t === 'shots') for (const i of b.items) out.push(i.caption, i.alt);
      else if (b.t === 'faq') for (const i of b.items) out.push(i.q, i.a);
      else if (b.t === 'path') for (const i of b.items) out.push(i.day, i.title, i.text);
      else if (b.t === 'friend') out.push(b.title, b.text);
      else if (b.t === 'board') out.push(b.board.caption, b.board.alt);
      else if (b.t === 'entry') out.push(b.title, b.what, b.how, b.tip, b.board?.caption, b.board?.alt, ...(b.facts ?? []).flatMap((f) => [f.label, f.text]));
      else if (b.t === 'callout') out.push(b.text, b.title ?? '');
      else if (b.t === 'table') out.push(b.caption ?? '', ...b.head, ...b.rows.flat());
      else if (b.t === 'defs') for (const i of b.items) out.push(i.term, i.text);
    }
  }
  return out;
};

for (const content of [en, fr, de, es, ja, ptBR]) {
  const l = content.locale;
  for (const a of content.articles) {
    const where = `${l}/${a.slug}`;
    const source = english.get(a.slug);
    if (!source) {
      say(where, 'no English article with this slug');
      continue;
    }
    if (a.category !== source.category) say(where, `category ${a.category} ≠ English ${source.category}`);
    if (a.cover !== source.cover) say(where, `cover ${a.cover} ≠ English ${source.cover}`);
    if (sectionsOf(a).join() !== sectionsOf(source).join()) say(where, `sections [${sectionsOf(a)}] ≠ English [${sectionsOf(source)}]`);
    if (shotsOf(a).join() !== shotsOf(source).join()) say(where, `screenshots [${shotsOf(a)}] ≠ English [${shotsOf(source)}]`);
    if (a.related.join() !== source.related.join()) say(where, 'related guides differ from English');
    for (const id of [...shotsOf(a), ...(a.cover ? [a.cover] : [])]) {
      if (!shots[id]) say(where, `screenshot "${id}" is not in lib/help/shots.json`);
      else if (!shots[id].locales.includes('en')) say(where, `screenshot "${id}" has no English capture`);
    }
    for (const text of textsOf(a)) {
      if (!text) continue;
      for (const m of text.matchAll(/\]\(help:([^)#]*)(?:#([^)]+))?\)/g)) {
        const target = m[1] ? english.get(m[1]) : null;
        if (m[1] && !target) say(where, `link to unknown guide "${m[1]}"`);
        else if (m[2] && !sectionsOf(target ?? a).includes(m[2])) say(where, `link to unknown section "${m[1] || a.slug}#${m[2]}"`);
      }
      for (const m of text.matchAll(/\]\(#([^)]+)\)/g)) if (!sectionsOf(a).includes(m[1])) say(where, `link to unknown section "#${m[1]}"`);
      const bare = text
        .replace(/`[^`]+`/g, '')
        .replace(/\*\*[^*]+\*\*/g, '')
        .replace(/\{\{[^}]+\}\}/g, '')
        .replace(/\[[^\]]+\]\([^)\s]+\)/g, '');
      if (/\*\*|\{\{|\}\}|`|\]\(/.test(bare)) say(where, `unbalanced markup in “${text.slice(0, 60)}…”`);
    }
  }
}

if (problems.length) {
  console.error(`[check-help] ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
const counts = [en, fr, de, es, ja, ptBR].map((c) => `${c.locale} ${c.articles.length}`).join(', ');
console.log(`[check-help] ok: ${helpOrder.length} guides; translated: ${counts}; ${Object.keys(shots).length} screenshots`);
