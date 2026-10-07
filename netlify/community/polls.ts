// Polls on a thread's opening post.
//
//   NewThreadRequest.poll / UpdateThreadRequest.poll   create, replace or (null) remove a poll
//   POST /threads/:id/poll/vote { optionIds }          → { poll }
//   ThreadDetail.poll                                  the results, for everyone
//
// Results are public. Voting needs a signed-in, verified, not-banned member; one option unless
// the poll allows several; voting again replaces the member's earlier choice and [] withdraws
// it, so nobody can vote twice. A poll is closed after closesAt or while its thread is locked.
// Once anyone has voted, the poll can no longer be edited or removed (a moderator can still hide
// or lock the thread). Votes from deleted and banned members are not counted.

import type { NewPollRequest, Poll, PollVoteResponse } from '../../lib/community/contract.ts';
import { transaction, type Query } from './db.ts';
import { ApiError, badRequest, json, readJson } from './http.ts';
import { requireMember, type Viewer } from './session.ts';
import { idParam, iso, num, requireCanWrite, run, visibleThread } from './forum.ts';
import { rateLimitOrThrow } from './threads.ts';

type Handler = (req: Request, params: Record<string, string>, url: URL) => Promise<Response>;

const YEAR_MS = 366 * 86400_000;

/** Validate a poll from a request. Field errors are keyed `poll.question`, `poll.options`, `poll.options.2`, `poll.closesAt`. */
export function readPoll(raw: unknown, now = Date.now()): NewPollRequest {
  const fields: Record<string, string> = {};
  const body = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as Record<string, unknown>) : null;
  if (!body) throw badRequest('invalid', 'The poll needs a question and options.', { poll: 'invalid' });
  const question = typeof body.question === 'string' ? body.question.replace(/\s+/g, ' ').trim() : '';
  if (!question) fields['poll.question'] = 'too_short';
  else if (question.length > 200) fields['poll.question'] = 'too_long';
  const list = Array.isArray(body.options) ? body.options : [];
  const options: string[] = [];
  const seen = new Set<string>();
  list.forEach((o, i) => {
    const label = typeof o === 'string' ? o.replace(/\s+/g, ' ').trim() : '';
    if (!label) fields[`poll.options.${i}`] = 'too_short';
    else if (label.length > 100) fields[`poll.options.${i}`] = 'too_long';
    else if (seen.has(label.toLowerCase())) fields[`poll.options.${i}`] = 'duplicate';
    seen.add(label.toLowerCase());
    options.push(label);
  });
  if (list.length < 2) fields['poll.options'] = 'too_few';
  else if (list.length > 8) fields['poll.options'] = 'too_many';
  if (body.multiple !== undefined && typeof body.multiple !== 'boolean') fields['poll.multiple'] = 'invalid';
  let closesAt: string | null = null;
  if (body.closesAt != null && body.closesAt !== '') {
    const t = typeof body.closesAt === 'string' ? Date.parse(body.closesAt) : Number.NaN;
    if (!Number.isFinite(t) || t <= now || t > now + YEAR_MS) fields['poll.closesAt'] = 'invalid';
    else closesAt = new Date(t).toISOString();
  }
  if (Object.keys(fields).length) throw badRequest('invalid', 'The poll needs another look.', fields);
  return { question, options, multiple: body.multiple === true, closesAt };
}

export async function insertPoll(q: Query, threadId: number, poll: NewPollRequest): Promise<void> {
  await q(`INSERT INTO polls (thread_id, question, multiple, closes_at) VALUES ($1, $2, $3, $4)`, [threadId, poll.question, poll.multiple, poll.closesAt ?? null]);
  for (const [i, label] of poll.options.entries()) await q(`INSERT INTO poll_options (thread_id, position, label) VALUES ($1, $2, $3)`, [threadId, i, label]);
}

/** Replace (or, with null, remove) a thread's poll; refused once it has votes. Call inside a transaction. */
export async function replacePoll(q: Query, threadId: number, poll: NewPollRequest | null): Promise<void> {
  const [votes] = await q(`SELECT EXISTS (SELECT 1 FROM poll_votes WHERE thread_id = $1) AS yes`, [threadId]);
  if (votes?.yes) throw new ApiError(409, 'poll_has_votes', 'People have already voted, so the poll can no longer be changed.');
  await q(`DELETE FROM polls WHERE thread_id = $1`, [threadId]);
  if (poll) await insertPoll(q, threadId, poll);
}

/** The poll on a thread as `viewer` sees it, or null. `locked` closes it. */
export async function pollFor(threadId: number, viewer: Viewer | null, locked: boolean): Promise<Poll | null> {
  const [poll] = await run(`SELECT question, multiple, closes_at FROM polls WHERE thread_id = $1`, [threadId]);
  if (!poll) return null;
  const counted = `pv.member_id IN (SELECT id FROM members WHERE deleted_at IS NULL AND (banned_until IS NULL OR banned_until <= now()))`;
  const options = await run(
    `SELECT o.id::int AS id, o.label, (SELECT count(*)::int FROM poll_votes pv WHERE pv.option_id = o.id AND ${counted}) AS votes
       FROM poll_options o WHERE o.thread_id = $1 ORDER BY o.position`,
    [threadId],
  );
  const [voters] = await run(`SELECT count(DISTINCT pv.member_id)::int AS n FROM poll_votes pv WHERE pv.thread_id = $1 AND ${counted}`, [threadId]);
  const mine = viewer ? await run(`SELECT option_id::int AS id FROM poll_votes WHERE thread_id = $1 AND member_id = $2 ORDER BY option_id`, [threadId, viewer.id]) : [];
  const closesAt = poll.closes_at == null ? null : iso(poll.closes_at);
  return {
    question: String(poll.question),
    options: options.map((o) => ({ id: num(o.id), label: String(o.label), votes: num(o.votes) })),
    multiple: Boolean(poll.multiple),
    closesAt,
    closed: locked || (closesAt != null && Date.parse(closesAt) <= Date.now()),
    myVotes: mine.map((r) => num(r.id)),
    totalVoters: num(voters?.n),
  };
}

export const votePoll: Handler = async (req, params) => {
  const viewer = await requireMember(req);
  const id = idParam(params.id);
  const body = await readJson(req);
  const thread = await visibleThread(id, viewer);
  requireCanWrite(viewer);
  const raw = body.optionIds;
  if (!Array.isArray(raw) || raw.length > 8 || !raw.every((v) => Number.isSafeInteger(v) && (v as number) > 0)) {
    throw badRequest('invalid', 'Choose an option.', { optionIds: 'invalid' });
  }
  const optionIds = [...new Set(raw as number[])];
  if (optionIds.length !== raw.length) throw badRequest('invalid', 'Each option can be chosen once.', { optionIds: 'duplicate' });
  await rateLimitOrThrow([[`poll:hour:${viewer.id}`, 60, 3600]]);
  await transaction(async (q) => {
    const [poll] = await q(`SELECT multiple, closes_at FROM polls WHERE thread_id = $1 FOR UPDATE`, [id]);
    if (!poll) throw badRequest('invalid', 'This thread has no poll.');
    const closed = thread.locked || (poll.closes_at != null && new Date(iso(poll.closes_at)).getTime() <= Date.now());
    if (closed) throw new ApiError(409, 'poll_closed', 'This poll is closed.');
    if (!poll.multiple && optionIds.length > 1) throw badRequest('invalid', 'This poll takes one choice.', { optionIds: 'too_many' });
    if (optionIds.length) {
      const [ok] = await q(
        `SELECT count(*)::int AS n FROM poll_options WHERE thread_id = $1 AND id IN (SELECT jsonb_array_elements_text($2::jsonb)::bigint)`,
        [id, JSON.stringify(optionIds)],
      );
      if (num(ok?.n) !== optionIds.length) throw badRequest('invalid', 'That option is not in this poll.', { optionIds: 'invalid' });
    }
    await q(`DELETE FROM poll_votes WHERE thread_id = $1 AND member_id = $2`, [id, viewer.id]);
    for (const optionId of optionIds) await q(`INSERT INTO poll_votes (option_id, thread_id, member_id) VALUES ($1, $2, $3)`, [optionId, id, viewer.id]);
  });
  const res: PollVoteResponse = { poll: (await pollFor(id, viewer, thread.locked))! };
  return json(res);
};
