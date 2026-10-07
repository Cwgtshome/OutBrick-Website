// The FAQ: the support page's answers (seeded by a migration) and threads the team promotes.
//
// A locale with no entries of its own is served the English ones, so the page is never empty.
// The OutBrick team (team and admin roles) writes it; answers are Markdown rendered exactly
// like posts.

import type { CommunityLocale, FaqEntry } from '../../lib/community/contract.ts';
import { communityLocales } from '../../lib/community/contract.ts';
import { transaction } from './db.ts';
import { badRequest, json, notFound, oneOf, readJson, str } from './http.ts';
import { requireRole } from './session.ts';
import { BODY_MAX, idParam, modLog, num, readLocale, renderBody, run, type Row } from './forum.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const columns = `f.id::int AS id, f.locale, f.topic, f.question, f.answer_md, f.answer_html, f.thread_id::int AS thread_id, t.slug AS thread_slug`;
const joins = `FROM faq_entries f LEFT JOIN threads t ON t.id = f.thread_id AND t.deleted_at IS NULL AND NOT t.hidden`;

function entry(r: Row): FaqEntry {
  return {
    id: num(r.id),
    locale: r.locale as CommunityLocale,
    topic: String(r.topic),
    question: String(r.question),
    answerHtml: String(r.answer_html),
    threadId: r.thread_slug == null ? null : num(r.thread_id),
    threadSlug: (r.thread_slug as string | null) ?? null,
  };
}

export async function faqFor(locale: CommunityLocale): Promise<FaqEntry[]> {
  let rows = await run(`SELECT ${columns} ${joins} WHERE f.locale = $1 ORDER BY f.position, f.id`, [locale]);
  if (!rows.length && locale !== 'en') rows = await run(`SELECT ${columns} ${joins} WHERE f.locale = 'en' ORDER BY f.position, f.id`);
  return rows.map(entry);
}

export const getFaq: Handler = async (_req, _params, url) => {
  const locale = oneOf(url.searchParams.get('locale'), communityLocales, 'en');
  return json({ entries: await faqFor(locale) });
};

async function entryById(id: number): Promise<FaqEntry> {
  const [row] = await run(`SELECT ${columns} ${joins} WHERE f.id = $1`, [id]);
  if (!row) throw notFound('That FAQ entry does not exist.');
  return entry(row);
}

/** A solved thread's title and solution, for promoting it into the FAQ. */
async function promotedThread(threadId: number): Promise<{ question: string; answer: string; language: CommunityLocale }> {
  const [row] = await run(
    `SELECT t.title, t.language, p.body_md FROM threads t JOIN posts p ON p.id = t.solved_post_id
      WHERE t.id = $1 AND t.deleted_at IS NULL AND NOT t.hidden AND NOT p.hidden AND p.deleted_at IS NULL`,
    [threadId],
  );
  if (!row) throw badRequest('invalid', 'Only a solved thread can be promoted to the FAQ.', { threadId: 'not_solved' });
  return { question: String(row.title), answer: String(row.body_md), language: row.language as CommunityLocale };
}

function readThreadId(value: unknown): number | null {
  if (value == null) return null;
  const n = Number(value);
  if (!Number.isSafeInteger(n) || n <= 0) throw badRequest('invalid', 'That is not a thread.', { threadId: 'invalid' });
  return n;
}

export const createFaq: Handler = async (req) => {
  const viewer = await requireRole(req, 'team');
  const body = await readJson(req, 128 * 1024);
  const threadId = readThreadId(body.threadId);
  const promoted = threadId != null ? await promotedThread(threadId) : null;
  const locale = readLocale(body.locale, promoted?.language ?? 'en', 'locale');
  const question = body.question == null && promoted ? promoted.question : str(body, 'question', { min: 4, max: 300, label: 'The question' });
  const answer = body.answer == null && promoted ? promoted.answer : str(body, 'answer', { min: 2, max: BODY_MAX, label: 'The answer' });
  const topic = str(body, 'topic', { max: 40, optional: true, label: 'The topic' }) || 'general';
  const position = typeof body.position === 'number' && Number.isInteger(body.position) ? body.position : null;
  const html = (await renderBody(answer)).html;
  const id = await transaction(async (q) => {
    const [row] = await q(
      `INSERT INTO faq_entries (locale, topic, question, answer_md, answer_html, thread_id, position)
       VALUES ($1, $2, $3, $4, $5, $6, COALESCE($7, (SELECT COALESCE(max(position), -1) + 1 FROM faq_entries WHERE locale = $1)))
       RETURNING id::int AS id`,
      [locale, topic, question, answer, html, threadId, position],
    );
    await modLog(q, viewer.id, threadId ? 'faq.promote' : 'faq.create', 'faq', num(row.id), '', { threadId });
    return num(row.id);
  });
  return json({ entry: await entryById(id) }, { status: 201 });
};

export const patchFaq: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = idParam(params.id);
  const body = await readJson(req, 128 * 1024);
  await entryById(id);
  const sets: string[] = [];
  const values: unknown[] = [];
  const set = (column: string, value: unknown) => {
    values.push(value);
    sets.push(`${column} = $${values.length}`);
  };
  if (body.locale !== undefined) set('locale', readLocale(body.locale, 'en', 'locale'));
  if (body.topic !== undefined) set('topic', str(body, 'topic', { max: 40, optional: true, label: 'The topic' }) || 'general');
  if (body.question !== undefined) set('question', str(body, 'question', { min: 4, max: 300, label: 'The question' }));
  if (body.answer !== undefined) {
    const answer = str(body, 'answer', { min: 2, max: BODY_MAX, label: 'The answer' });
    set('answer_md', answer);
    set('answer_html', (await renderBody(answer)).html);
  }
  if (body.threadId !== undefined) set('thread_id', readThreadId(body.threadId));
  if (body.position !== undefined) {
    if (typeof body.position !== 'number' || !Number.isInteger(body.position)) throw badRequest('invalid', 'Position must be a whole number.', { position: 'invalid' });
    set('position', body.position);
  }
  if (sets.length) {
    await transaction(async (q) => {
      values.push(id);
      await q(`UPDATE faq_entries SET ${sets.join(', ')}, updated_at = now() WHERE id = $${values.length}`, values);
      await modLog(q, viewer.id, 'faq.edit', 'faq', id);
    });
  }
  return json({ entry: await entryById(id) });
};

export const deleteFaq: Handler = async (req, params) => {
  const viewer = await requireRole(req, 'team');
  const id = idParam(params.id);
  await entryById(id);
  await transaction(async (q) => {
    await q(`DELETE FROM faq_entries WHERE id = $1`, [id]);
    await modLog(q, viewer.id, 'faq.delete', 'faq', id);
  });
  return json({ ok: true });
};
