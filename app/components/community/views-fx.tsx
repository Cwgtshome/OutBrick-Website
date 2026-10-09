'use client';

/**
 * The feature board and the interactive parts of the forum: the roadmap, idea votes, similar
 * ideas, reactions, polls, live "new replies", bookmarks, translation, the leaderboard, profile
 * badges and stats, and passkeys. Every control is a real button or link named with its effect
 * and target; state is in aria-pressed or the text, never colour alone; changes are announced
 * once, politely.
 */

import { useEffect, useId, useRef, useState, type SubmitEvent } from 'react';
import type {
  BadgeKey,
  CommunityLocale,
  LeaderboardEntry,
  LeaderboardKind,
  LeaderboardPeriod,
  MemberProfile,
  PasskeyInfo,
  Poll,
  Post,
  PostReaction,
  ReactionKind,
  ThreadSummary,
} from '../../../lib/community/contract';
import { reactionInfo, reactionKinds, roadmapStatuses, threadPath } from '../../../lib/community/contract';
import { languageNamesIn, targetNamesIn } from '../../../lib/i18n/community-fx';
import { dayDate, fullDate } from '../../../lib/community/format';
import { pageOfPost } from '../../../lib/community/static-html';
import { api, ApiFailure, readerIsActive } from './api';
import { BadgeIcon } from './badges';
import { ErrorNotice, Member, PageLoading, Pending, StatusBadge, Time, View, errorText, useApp, useLoad, type Route } from './core';

const failureOf = (error: unknown) => (error instanceof ApiFailure ? error : new ApiFailure(0, { code: 'unknown', message: String(error) }));

/** A translated message for any failure, including the phase-2 codes. */
export function useErrorText() {
  const { copy, fx } = useApp();
  return (error: unknown) => {
    const f = failureOf(error);
    return fx.errors[f.code] ?? errorText(copy, f);
  };
}

// ---------------------------------------------------------------------------------------
// Idea votes

/**
 * The upvote button: the count is part of it, aria-pressed is the state. Its name starts with
 * what is on it ("Upvote 4 votes", so saying "Upvote" works in Voice Control); the idea it is
 * for is its description, `describedBy` (the idea's title link).
 */
export function VoteButton({ thread, compact = false, describedBy }: { thread: Pick<ThreadSummary, 'id' | 'title' | 'voteCount' | 'voted'>; compact?: boolean; describedBy?: string }) {
  const { copy, n, session, announce } = useApp();
  const [votes, setVotes] = useState({ count: thread.voteCount, voted: !!thread.voted });
  const [busy, setBusy] = useState(false);
  const say = useErrorText();
  if (!session?.member) return <p className={compact ? 'cm-vote-static cm-vote-small' : 'cm-vote-static'}>{copy.thread.votes(votes.count, n(votes.count))}</p>;
  const vote = async () => {
    setBusy(true);
    try {
      const result = await api.vote(thread.id, !votes.voted);
      setVotes({ count: result.voteCount, voted: result.voted });
      const text = copy.thread.votes(result.voteCount, n(result.voteCount));
      announce(result.voted ? copy.thread.voteSaved(text) : copy.thread.voteRemoved(text));
    } catch (error) {
      announce(say(error));
    } finally {
      setBusy(false);
    }
  };
  return (
    <button
      type="button"
      className={compact ? 'cm-vote cm-vote-small' : 'cm-vote'}
      aria-pressed={votes.voted}
      disabled={busy}
      onClick={() => void vote()}
      aria-describedby={describedBy}
    >
      <span className="cm-vote-arrow" aria-hidden="true">
        ▲
      </span>
      {votes.voted ? copy.thread.upvoted : copy.thread.upvote}{' '}
      <span className="cm-vote-count" aria-hidden="true">
        {n(votes.count)}
      </span>
      <span className="sr-only">{copy.thread.votes(votes.count, n(votes.count))}</span>
    </button>
  );
}

/** A short list of ideas, each with its vote button (roadmap columns, similar ideas). */
export function IdeaList({ threads, headingLevel = 3 }: { threads: ThreadSummary[]; headingLevel?: 3 | 4 }) {
  const { locale } = useApp();
  const H = headingLevel === 3 ? 'h3' : 'h4';
  return (
    <ol className="cm-ideas">
      {threads.map((t) => (
        <li key={t.id} className="cm-idea">
          <VoteButton thread={t} compact describedBy={`cm-idea-${t.id}`} />
          <div className="cm-idea-text">
            <H className="cm-idea-title">
              <a href={threadPath(locale, t)} lang={t.language} id={`cm-idea-${t.id}`}>
                {t.title}
              </a>
            </H>
            <p className="cm-badges">
              <StatusBadge status={t.status} note={t.statusNote} shippedVersion={t.shippedVersion} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

// ---------------------------------------------------------------------------------------
// The roadmap

function RoadmapColumns({ limit, headingLevel = 2 }: { limit?: number; headingLevel?: 2 | 3 }) {
  const { fx, locale, n, path } = useApp();
  const load = useLoad(`roadmap:${locale}`, () => api.roadmap(locale));
  const H = headingLevel === 2 ? 'h2' : 'h3';
  if (load.error) return <ErrorNotice error={load.error} retry={load.reload} />;
  if (!load.data) return null;
  return (
    <div className="cm-roadmap">
      {roadmapStatuses.map((status) => {
        const column = load.data?.columns.find((c) => c.status === status);
        const threads = column?.threads ?? [];
        const shown = limit ? threads.slice(0, limit) : threads;
        return (
          <section key={status} className={`cm-column cm-column-${status}`} aria-labelledby={`cm-col-${status}`}>
            <H id={`cm-col-${status}`}>
              {fx.board.columns[status]} <span className="cm-column-count">({n(column?.total ?? 0)})</span>
            </H>
            <p className="cm-hint">{fx.board.columnNotes[status]}</p>
            {shown.length ? <IdeaList threads={shown} headingLevel={headingLevel === 2 ? 3 : 4} /> : <p className="cm-empty">{fx.board.columnEmpty}</p>}
            {limit && (column?.total ?? 0) > shown.length ? (
              <p>
                <a href={`${path('/roadmap')}#cm-col-${status}`}>{fx.board.more(n((column?.total ?? 0) - shown.length))}</a>
              </p>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}

export function RoadmapView() {
  const { copy, fx, path, locale } = useApp();
  const load = useLoad(`roadmap:${locale}`, () => api.roadmap(locale));
  if (!load.data) return <Pending load={load} title={fx.board.roadmapTitle} />;
  return (
    <View
      title={fx.board.roadmapTitle}
      lede={fx.board.roadmapLede}
      crumbs={[{ href: path(), label: copy.nav.label }, { href: path('/c/ideas'), label: copy.categories.ideas.name }, { label: fx.board.roadmapTitle }]}
      ready
      headExtra={
        <div className="cm-head-actions">
          <a className="btn" href={path('/new?category=ideas')}>
            {fx.board.suggest}
          </a>
        </div>
      }
    >
      <RoadmapColumns />
    </View>
  );
}

/** The roadmap's top three per column, at the head of the Ideas category. */
export function RoadmapPreview() {
  const { fx, path } = useApp();
  return (
    <section className="cm-section cm-board" aria-labelledby="cm-board-h">
      <h2 id="cm-board-h">{fx.board.previewHeading}</h2>
      <RoadmapColumns limit={3} headingLevel={3} />
      <p>
        <a href={path('/roadmap')}>{fx.board.roadmapLink}</a>
      </p>
    </section>
  );
}

/** /community/ideas is the Ideas category under its friendlier name. */
export function IdeasRedirect() {
  const { navigate, path } = useApp();
  useEffect(() => navigate(path('/c/ideas'), { replace: true }), [navigate, path]);
  return null;
}

// ---------------------------------------------------------------------------------------
// Similar ideas, while a title is typed

export function SimilarIdeas({ title, category }: { title: string; category: string }) {
  const { fx, n, announce } = useApp();
  const [result, setResult] = useState<{ q: string; threads: ThreadSummary[] } | null>(null);
  const last = useRef(-1);
  const q = title.trim();
  useEffect(() => {
    if (q.length < 4) return;
    let live = true;
    const timer = window.setTimeout(() => {
      api.similar(q, category).then(
        (r) => {
          if (!live) return;
          setResult({ q, threads: r.threads });
          if (r.threads.length !== last.current && r.threads.length > 0) announce(fx.similar.found(r.threads.length, n(r.threads.length)));
          last.current = r.threads.length;
        },
        () => undefined,
      );
    }, 500);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
  }, [q, category, announce, fx, n]);
  const threads = q.length >= 4 && result ? result.threads : [];
  if (!threads.length) return null;
  return (
    <section className="cm-similar" aria-labelledby="cm-similar-h">
      <h2 id="cm-similar-h">{fx.similar.heading}</h2>
      <p className="cm-hint">{fx.similar.found(threads.length, n(threads.length))}</p>
      <IdeaList threads={threads} />
    </section>
  );
}

// ---------------------------------------------------------------------------------------
// Reactions

/** `interactive` is false for the viewer's own posts and locked threads: the counts are shown as text. */
export function Reactions({ post, interactive }: { post: Post; interactive: boolean }) {
  const { fx, n, session } = useApp();
  const [reactions, setReactions] = useState<PostReaction[]>(() => reactionKinds.map((kind) => post.reactions?.find((r) => r.kind === kind) ?? { kind, count: 0, mine: false }));
  const [busy, setBusy] = useState<ReactionKind | null>(null);
  const say = useErrorText();
  const { announce } = useApp();
  if (!session?.member || !interactive) {
    const given = reactions.filter((r) => r.count > 0);
    if (!given.length) return null;
    return (
      <p className="cm-reactions-static">
        {given.map((r) => (
          <span key={r.kind} className="cm-reaction-static">
            <span aria-hidden="true">{reactionInfo[r.kind].emoji}</span> {fx.reactions.names[r.kind]} {n(r.count)}
          </span>
        ))}
      </p>
    );
  }
  const toggle = async (kind: ReactionKind) => {
    const current = reactions.find((r) => r.kind === kind);
    const on = !current?.mine;
    setBusy(kind);
    // Shown at once; the server's answer replaces it.
    setReactions((list) => list.map((r) => (r.kind === kind ? { ...r, mine: on, count: Math.max(0, r.count + (on ? 1 : -1)) } : r)));
    try {
      const result = await api.react(post.id, kind, on);
      setReactions(reactionKinds.map((k) => result.reactions.find((r) => r.kind === k) ?? { kind: k, count: 0, mine: false }));
    } catch (error) {
      setReactions((list) => list.map((r) => (r.kind === kind ? { ...r, mine: !on, count: Math.max(0, r.count + (on ? -1 : 1)) } : r)));
      announce(say(error));
    } finally {
      setBusy(null);
    }
  };
  return (
    <fieldset className="cm-reactions">
      <legend className="sr-only">{fx.reactions.group(n(post.number))}</legend>
      {reactions.map((r) => (
        <button key={r.kind} type="button" className="cm-reaction" aria-pressed={r.mine} disabled={busy === r.kind} onClick={() => void toggle(r.kind)}>
          <span className="cm-reaction-emoji" aria-hidden="true">
            {reactionInfo[r.kind].emoji}
          </span>
          <span className="cm-reaction-name">{fx.reactions.names[r.kind]}</span>
          <span className="cm-reaction-count">{n(r.count)}</span>
        </button>
      ))}
    </fieldset>
  );
}

// ---------------------------------------------------------------------------------------
// Bookmarks and translation, on each post

/** Named by its visible word ("Bookmark", "Bookmarked"); `describedBy` says which post. */
export function BookmarkButton({ post, describedBy }: { post: Post; describedBy?: string }) {
  const { fx, announce } = useApp();
  const [on, setOn] = useState(!!post.bookmarked);
  const [busy, setBusy] = useState(false);
  const say = useErrorText();
  const toggle = async () => {
    setBusy(true);
    try {
      const result = await api.bookmark(post.id, !on);
      setOn(result.bookmarked);
      announce(result.bookmarked ? fx.bookmarks.saved : fx.bookmarks.removed);
    } catch (error) {
      announce(say(error));
    } finally {
      setBusy(false);
    }
  };
  return (
    <button type="button" className="cm-act" aria-pressed={on} disabled={busy} aria-describedby={describedBy} onClick={() => void toggle()}>
      {on ? fx.bookmarks.added : fx.bookmarks.add}
    </button>
  );
}

/** "Translate to <my language>", and the translation below the post, labelled as a machine one. */
export function Translation({ post, from }: { post: Post; from: CommunityLocale }) {
  const { fx, locale } = useApp();
  const [state, setState] = useState<{ html: string | null; busy: boolean; error: string; open: boolean }>({ html: null, busy: false, error: '', open: false });
  const say = useErrorText();
  const region = useRef<HTMLDivElement>(null);
  const run = async () => {
    if (state.html) {
      setState((s) => ({ ...s, open: !s.open }));
      return;
    }
    setState((s) => ({ ...s, busy: true, error: '' }));
    try {
      const result = await api.translate(post.id, locale);
      setState({ html: result.html, busy: false, error: '', open: true });
      window.setTimeout(() => region.current?.focus(), 0);
    } catch (error) {
      setState((s) => ({ ...s, busy: false, error: say(error) }));
    }
  };
  return (
    <>
      <button type="button" className="cm-act" aria-expanded={state.open} disabled={state.busy} onClick={() => void run()}>
        {state.busy ? fx.translate.working : state.open ? fx.translate.hide : fx.translate.button(targetNamesIn[locale])}
      </button>
      {state.error ? (
        <p className="cm-error" role="alert">
          {state.error}
        </p>
      ) : null}
      {state.open && state.html ? (
        <div className="cm-translation" ref={region} tabIndex={-1}>
          <p className="cm-translation-label">{fx.translate.label(languageNamesIn[locale][from])}</p>
          <div className="cm-post-body" lang={locale} dangerouslySetInnerHTML={{ __html: state.html }} />
        </div>
      ) : null}
    </>
  );
}

// ---------------------------------------------------------------------------------------
// Polls

export function PollView({ threadId, poll: initial }: { threadId: number; poll: Poll }) {
  const { copy, fx, n, session, path, here, announce, locale } = useApp();
  const [poll, setPoll] = useState(initial);
  const [choice, setChoice] = useState<number[]>(initial.myVotes);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const id = useId();
  const say = useErrorText();
  const voted = poll.myVotes.length > 0;
  const total = poll.options.reduce((sum, o) => sum + o.votes, 0);
  const percent = (votes: number) => new Intl.NumberFormat(locale === 'en' ? 'en-GB' : locale, { style: 'percent', maximumFractionDigits: 0 }).format(total ? votes / total : 0);
  const send = async (ids: number[]) => {
    setBusy(true);
    setError('');
    try {
      const result = await api.pollVote(threadId, ids);
      setPoll(result.poll);
      setChoice(result.poll.myVotes);
      announce(ids.length ? fx.poll.voted : fx.poll.withdrawn);
    } catch (failure) {
      setError(say(failure));
    } finally {
      setBusy(false);
    }
  };
  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!choice.length) {
      setError(fx.poll.chooseOne);
      return;
    }
    void send(choice);
  };
  const canVote = !!session?.member && !poll.closed;
  return (
    <section className="cm-section cm-poll" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>
        {fx.poll.legend}: {poll.question}
      </h2>
      <p className="cm-hint">
        {[poll.closed ? (poll.closesAt ? fx.poll.closedOn(fullDate(locale, poll.closesAt)) : fx.poll.closed) : poll.closesAt ? fx.poll.closesOn(fullDate(locale, poll.closesAt)) : '', fx.poll.voters(poll.totalVoters, n(poll.totalVoters))].filter(Boolean).join(' · ')}
      </p>
      {canVote ? (
        <form onSubmit={submit} noValidate>
          <fieldset className="cm-fieldset cm-checks">
            <legend>{poll.question}</legend>
            {poll.options.map((o) => (
              <div className="cm-check" key={o.id}>
                <input
                  id={`${id}-o${o.id}`}
                  type={poll.multiple ? 'checkbox' : 'radio'}
                  name={`${id}-poll`}
                  checked={choice.includes(o.id)}
                  onChange={(e) => setChoice(poll.multiple ? (e.target.checked ? [...choice, o.id] : choice.filter((c) => c !== o.id)) : [o.id])}
                />
                <label htmlFor={`${id}-o${o.id}`}>{o.label}</label>
              </div>
            ))}
          </fieldset>
          {error ? (
            <p className="cm-error" role="alert">
              {error}
            </p>
          ) : null}
          <div className="cm-row">
            <button type="submit" className="btn" disabled={busy}>
              {voted ? fx.poll.change : fx.poll.vote}
            </button>
            {voted ? (
              <button type="button" className="cm-act" disabled={busy} onClick={() => void send([])}>
                {fx.poll.withdraw}
              </button>
            ) : null}
          </div>
        </form>
      ) : !session?.member && !poll.closed ? (
        <p>
          <a href={path(`/signin?returnTo=${encodeURIComponent(here)}`)}>{fx.poll.signIn}</a>
        </p>
      ) : null}
      <h3>{fx.poll.results}</h3>
      <ul className="cm-poll-results">
        {poll.options.map((o) => (
          <li key={o.id}>
            <span className="cm-poll-text">
              {fx.poll.optionResult(o.label, copy.thread.votes(o.votes, n(o.votes)), percent(o.votes))}
              {poll.myVotes.includes(o.id) ? <span className="cm-badge">✓ {fx.poll.mine}</span> : null}
            </span>
            <span className="cm-poll-bar" aria-hidden="true">
              <span style={{ width: total ? `${Math.round((o.votes / total) * 100)}%` : '0%' }} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The poll part of the new-thread form. */
export type PollDraft = { question: string; options: string[]; multiple: boolean; closesOn: string };
export const emptyPoll = (): PollDraft => ({ question: '', options: ['', ''], multiple: false, closesOn: '' });

export function PollEditor({ draft, onChange, errors, ids }: { draft: PollDraft; onChange: (d: PollDraft) => void; errors: Record<string, string>; ids: Record<string, string> }) {
  const { fx, n, copy } = useApp();
  const field = (key: string) => errors[key];
  const optionsError = errors['poll.options'];
  return (
    <fieldset className="cm-fieldset cm-poll-editor">
      <legend>{fx.poll.legend}</legend>
      <div className="cm-field" data-invalid={field('poll.question') ? '' : undefined}>
        <label htmlFor={ids['poll.question']}>{fx.poll.question}</label>
        {field('poll.question') ? (
          <p className="cm-error" id={`${ids['poll.question']}-error`}>
            {field('poll.question')}
          </p>
        ) : null}
        <input
          id={ids['poll.question']}
          type="text"
          value={draft.question}
          maxLength={200}
          onChange={(e) => onChange({ ...draft, question: e.target.value })}
          aria-invalid={field('poll.question') ? true : undefined}
          aria-describedby={field('poll.question') ? `${ids['poll.question']}-error` : undefined}
        />
      </div>
      {optionsError ? (
        <p className="cm-error" id={`${ids['poll.options']}-error`}>
          {optionsError}
        </p>
      ) : null}
      <ol className="cm-poll-options">
        {draft.options.map((value, i) => {
          const key = `poll.options.${i}`;
          const fieldId = i === 0 ? ids['poll.options'] : `${ids['poll.options']}-${i}`;
          return (
            <li key={i} className="cm-field">
              <label htmlFor={fieldId}>{fx.poll.option(n(i + 1))}</label>
              {field(key) ? (
                <p className="cm-error" id={`${fieldId}-error`}>
                  {field(key)}
                </p>
              ) : null}
              <div className="cm-row">
                <input
                  id={fieldId}
                  type="text"
                  value={value}
                  maxLength={100}
                  onChange={(e) => onChange({ ...draft, options: draft.options.map((o, j) => (j === i ? e.target.value : o)) })}
                  aria-invalid={field(key) || (i === 0 && optionsError) ? true : undefined}
                  aria-describedby={field(key) ? `${fieldId}-error` : i === 0 && optionsError ? `${ids['poll.options']}-error` : undefined}
                />
                {draft.options.length > 2 ? (
                  <button type="button" className="cm-act" onClick={() => onChange({ ...draft, options: draft.options.filter((_, j) => j !== i) })}>
                    {fx.poll.removeOption(n(i + 1))}
                  </button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
      {draft.options.length < 8 ? (
        <p>
          <button type="button" className="cm-act" onClick={() => onChange({ ...draft, options: [...draft.options, ''] })}>
            {fx.poll.addOption}
          </button>
        </p>
      ) : null}
      <div className="cm-check">
        <input id={`${ids['poll.question']}-multi`} type="checkbox" checked={draft.multiple} onChange={(e) => onChange({ ...draft, multiple: e.target.checked })} />
        <label htmlFor={`${ids['poll.question']}-multi`}>{fx.poll.multiple}</label>
      </div>
      <div className="cm-field" data-invalid={field('poll.closesAt') ? '' : undefined}>
        <label htmlFor={ids['poll.closesAt']}>
          {fx.poll.closes} <span className="cm-optional">({copy.form.optional})</span>
        </label>
        <p className="cm-hint" id={`${ids['poll.closesAt']}-hint`}>
          {fx.poll.closesHint}
        </p>
        {field('poll.closesAt') ? (
          <p className="cm-error" id={`${ids['poll.closesAt']}-error`}>
            {field('poll.closesAt')}
          </p>
        ) : null}
        <input
          id={ids['poll.closesAt']}
          type="date"
          value={draft.closesOn}
          onChange={(e) => onChange({ ...draft, closesOn: e.target.value })}
          aria-invalid={field('poll.closesAt') ? true : undefined}
          aria-describedby={[`${ids['poll.closesAt']}-hint`, field('poll.closesAt') ? `${ids['poll.closesAt']}-error` : ''].filter(Boolean).join(' ')}
        />
      </div>
    </fieldset>
  );
}

// ---------------------------------------------------------------------------------------
// Live updates on a thread

/** Every 20 seconds while the tab is visible: are there posts after the last one shown? */
export function useThreadUpdates(threadId: number | null, lastNumber: number) {
  const [fresh, setFresh] = useState<{ after: number; count: number }>({ after: lastNumber, count: 0 });
  useEffect(() => {
    if (threadId === null) return;
    let timer = 0;
    let live = true;
    const tick = () => {
      if (!readerIsActive()) return;
      api.updates(threadId, lastNumber).then(
        (r) => {
          if (live) setFresh({ after: lastNumber, count: r.newPosts });
        },
        () => undefined,
      );
    };
    const start = () => {
      window.clearInterval(timer);
      timer = window.setInterval(tick, 20_000);
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible') {
        tick();
        start();
      } else window.clearInterval(timer);
    };
    start();
    document.addEventListener('visibilitychange', onVisible);
    return () => {
      live = false;
      window.clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, [threadId, lastNumber]);
  return fresh.after === lastNumber ? fresh.count : 0;
}

export function NewRepliesBar({ count, onShow }: { count: number; onShow: () => void }) {
  const { fx, n, announce } = useApp();
  const said = useRef(0);
  useEffect(() => {
    if (count > 0 && count !== said.current) announce(fx.live.announce(count, n(count)));
    said.current = count;
  }, [count, announce, fx, n]);
  if (!count) return null;
  return (
    <div className="cm-live">
      <p>{fx.live.newReplies(count, n(count))}</p>
      <button type="button" className="btn" onClick={onShow}>
        {fx.live.show}
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------------------
// Profiles: stats, badges, recent posts

export function ProfileExtras({ profile }: { profile: MemberProfile }) {
  const { fx, n, locale } = useApp();
  const s = profile.stats;
  const stats: [string, number][] = [
    [fx.profile.posts, s.posts],
    [fx.profile.threads, s.threads],
    [fx.profile.solved, s.solved],
    [fx.profile.reactionsReceived, s.reactionsReceived],
    [fx.profile.ideasShipped, s.ideasShipped],
    [fx.profile.bugsConfirmed, s.bugsConfirmed],
  ];
  const badgeName = (key: BadgeKey, level: number) =>
    key === 'helpful' && level > 1 ? fx.badges.level(fx.badges.names[key], n(level)) : key === 'anniversary' && level > 1 ? fx.badges.years(fx.badges.names[key], n(level)) : fx.badges.names[key];
  return (
    <>
      <section className="cm-section" aria-labelledby="cm-stats-h">
        <h2 id="cm-stats-h">{fx.profile.stats}</h2>
        <dl className="cm-stats-grid">
          {stats.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{n(value)}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="cm-section" aria-labelledby="cm-badges-h">
        <h2 id="cm-badges-h">{fx.badges.heading}</h2>
        {profile.badges.length ? (
          <ul className="cm-badge-list">
            {profile.badges.map((b) => (
              <li key={b.key} className={`cm-badge-item cm-badgechip-${b.key}`}>
                <span className="cm-badge-medal" aria-hidden="true">
                  <BadgeIcon badge={b.key} />
                </span>
                <div>
                  <h3>{badgeName(b.key, b.level)}</h3>
                  <p>{fx.badges.descriptions[b.key]}</p>
                  <p className="cm-hint">{b.granted ? `${fx.badges.granted}, ${dayDate(locale, b.awardedAt)}` : fx.badges.earned(dayDate(locale, b.awardedAt))}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>{fx.badges.none}</p>
        )}
      </section>
      <section className="cm-section" aria-labelledby="cm-recentposts-h">
        <h2 id="cm-recentposts-h">{fx.profile.recentPosts}</h2>
        {profile.recentPosts.length ? (
          <ul className="cm-notes">
            {profile.recentPosts.map((p) => (
              <li key={p.id} className="cm-note-item cm-recent-post">
                <a href={threadPath(locale, p.thread) + (pageOfPost(p.number) > 1 ? `?page=${pageOfPost(p.number)}` : '') + `#post-${p.number}`}>{p.thread.title}</a>
                <p className="cm-excerpt">{p.excerpt}</p>
                <span className="cm-meta">
                  <Time iso={p.createdAt} relative />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>{fx.profile.noPosts}</p>
        )}
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------------------
// The leaderboard

const periods: LeaderboardPeriod[] = ['week', 'month', 'all'];
const kinds: LeaderboardKind[] = ['helpers', 'ideas', 'bugs'];

function LeaderTable({ entries, caption, kind }: { entries: LeaderboardEntry[]; caption: string; kind: LeaderboardKind }) {
  const { fx, n } = useApp();
  if (!entries.length) return <p className="cm-empty">{fx.leaderboard.empty}</p>;
  return (
    <div className="cm-table-wrap">
      <table className="cm-table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{fx.leaderboard.rank}</th>
            <th scope="col">{fx.leaderboard.member}</th>
            <th scope="col">{fx.leaderboard.score}</th>
            <th scope="col">{fx.leaderboard.details}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e) => (
            <tr key={e.member.id}>
              <td>{n(e.rank)}</td>
              <th scope="row">
                <Member member={e.member} />
              </th>
              <td>{n(e.score)}</td>
              <td>{fx.leaderboard.detail[kind](Object.fromEntries(Object.entries(e.detail).map(([k, v]) => [k, n(v)])))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LeaderboardView({ route }: { route: Extract<Route, { name: 'leaderboard' }> }) {
  const { copy, fx, path } = useApp();
  const period = (periods as string[]).includes(route.period) ? (route.period as LeaderboardPeriod) : 'month';
  const kind = (kinds as string[]).includes(route.kind) ? (route.kind as LeaderboardKind) : 'helpers';
  const load = useLoad(`leaderboard:${period}:${kind}`, () => api.leaderboard(period, kind));
  const href = (p: LeaderboardPeriod, k: LeaderboardKind) => `${path('/leaderboard')}?period=${p}&kind=${k}`;
  return (
    <View title={fx.leaderboard.title} lede={fx.leaderboard.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: fx.leaderboard.title }]} ready={!load.loading}>
      <nav className="cm-sorts" aria-label={fx.leaderboard.period}>
        <ul>
          {periods.map((p) => (
            <li key={p}>
              <a href={href(p, kind)} aria-current={p === period ? 'true' : undefined}>
                {fx.leaderboard.periods[p]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="cm-sorts" aria-label={fx.leaderboard.kind}>
        <ul>
          {kinds.map((k) => (
            <li key={k}>
              <a href={href(period, k)} aria-current={k === kind ? 'true' : undefined}>
                {fx.leaderboard.kinds[k]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {load.error ? <ErrorNotice error={load.error} retry={load.reload} /> : null}
      {load.data ? (
        <>
          <section className="cm-section" aria-labelledby="cm-lb-members">
            <h2 id="cm-lb-members">{fx.leaderboard.caption(fx.leaderboard.kinds[kind], fx.leaderboard.periods[period])}</h2>
            <LeaderTable entries={load.data.entries} caption={fx.leaderboard.caption(fx.leaderboard.kinds[kind], fx.leaderboard.periods[period])} kind={kind} />
          </section>
          <section className="cm-section" aria-labelledby="cm-lb-team">
            <h2 id="cm-lb-team">{fx.leaderboard.team}</h2>
            <p className="cm-hint">{fx.leaderboard.teamNote}</p>
            <LeaderTable entries={load.data.team} caption={fx.leaderboard.team} kind={kind} />
          </section>
        </>
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Bookmarks

export function BookmarksView({ route }: { route: Extract<Route, { name: 'bookmarks' }> }) {
  const { copy, fx, path, session, here, locale, n, announce } = useApp();
  const signedIn = !!session?.member;
  const load = useLoad(signedIn ? `bookmarks:${route.page}` : null, () => api.bookmarks(route.page));
  const say = useErrorText();
  const crumbs = [{ href: path(), label: copy.nav.label }, { label: fx.bookmarks.title }];
  if (!session) return <PageLoading title={fx.bookmarks.title} crumbs={crumbs} />;
  if (!signedIn)
    return (
      <View title={fx.bookmarks.title} crumbs={crumbs} ready>
        <p>
          <a className="btn" href={path(`/signin?returnTo=${encodeURIComponent(here)}`)}>
            {copy.nav.signIn}
          </a>
        </p>
      </View>
    );
  if (!load.data) return <Pending load={load} title={fx.bookmarks.title} crumbs={crumbs} />;
  const remove = async (postId: number) => {
    try {
      await api.bookmark(postId, false);
      announce(fx.bookmarks.removed);
      load.reload();
    } catch (error) {
      announce(say(error));
    }
  };
  return (
    <View title={fx.bookmarks.title} lede={fx.bookmarks.lede} crumbs={crumbs} ready>
      {load.data.bookmarks.length ? (
        <ul className="cm-threads">
          {load.data.bookmarks.map((b) => (
            <li key={b.post.id} className="cm-thread">
              <h2 className="cm-thread-title">
                <a href={threadPath(locale, b.thread) + (pageOfPost(b.post.number) > 1 ? `?page=${pageOfPost(b.post.number)}` : '') + `#post-${b.post.number}`}>{b.thread.title}</a>
              </h2>
              <p className="cm-meta">
                <Member member={b.post.author} /> · <Time iso={b.post.createdAt} relative />
              </p>
              <p className="cm-excerpt">{b.post.excerpt}</p>
              <p className="cm-row">
                <span className="cm-meta">{fx.bookmarks.bookmarkedOn(dayDate(locale, b.bookmarkedAt))}</span>
                <button type="button" className="cm-act" onClick={() => void remove(b.post.id)} aria-label={fx.bookmarks.removeLabel(n(b.post.number))}>
                  {copy.thread.actions.delete}
                </button>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="cm-empty">{fx.bookmarks.none}</p>
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Passkeys: WebAuthn wants ArrayBuffers; the API speaks base64url.

const fromB64url = (value: string): ArrayBuffer => {
  const b64 = value.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((value.length + 3) % 4);
  const bytes = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  return bytes.buffer;
};
const toB64url = (buffer: ArrayBuffer | null | undefined): string => {
  if (!buffer) return '';
  let text = '';
  for (const byte of new Uint8Array(buffer)) text += String.fromCharCode(byte);
  return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const passkeysSupported = () => typeof window !== 'undefined' && 'PublicKeyCredential' in window && !!navigator.credentials;

export function PasskeySignIn({ returnTo }: { returnTo: string }) {
  const { fx, refreshSession, announce, navigate, copy } = useApp();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const say = useErrorText();
  const id = useId();
  const signIn = async () => {
    setError('');
    if (!passkeysSupported()) {
      setError(fx.passkey.unsupported);
      return;
    }
    setBusy(true);
    try {
      const options = await api.passkeyLoginOptions();
      const credential = (await navigator.credentials.get({
        publicKey: { challenge: fromB64url(options.challenge), rpId: options.rpId, timeout: options.timeout, userVerification: options.userVerification, allowCredentials: [] },
      })) as PublicKeyCredential | null;
      if (!credential) throw new DOMException('cancelled', 'NotAllowedError');
      const response = credential.response as AuthenticatorAssertionResponse;
      await api.passkeyLogin({
        id: credential.id,
        rawId: toB64url(credential.rawId),
        type: 'public-key',
        response: { clientDataJSON: toB64url(response.clientDataJSON), authenticatorData: toB64url(response.authenticatorData), signature: toB64url(response.signature), userHandle: response.userHandle ? toB64url(response.userHandle) : null },
      });
      await refreshSession();
      announce(copy.signedIn);
      navigate(returnTo, { replace: true });
    } catch (failure) {
      if (failure instanceof DOMException) setError(failure.name === 'NotAllowedError' || failure.name === 'AbortError' ? fx.passkey.cancelled : fx.passkey.unsupported);
      else {
        const f = failureOf(failure);
        setError(f.code === 'unknown_credential' || f.body.fields?.credential === 'unknown_credential' ? fx.passkey.unknown : say(f));
      }
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{fx.passkey.signIn}</h2>
      <p className="cm-hint">{fx.passkey.signInNote}</p>
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
      <p>
        <button type="button" className="cm-provider cm-provider-passkey" disabled={busy} onClick={() => void signIn()}>
          <span className="cm-provider-logo" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" focusable="false">
              <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 9c0-3.3 2.7-6 6-6 1.2 0 2.3.3 3.2.9M17.5 12a2.5 2.5 0 0 0-1 4.8V21l1.2 1 1.3-1-1-1 1-1-1-1v-.2a2.5 2.5 0 0 0-.5-4.8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="cm-provider-text">{fx.passkey.signIn}</span>
        </button>
      </p>
    </section>
  );
}

export function PasskeySettings() {
  const { fx, locale, announce } = useApp();
  const load = useLoad('passkeys', () => api.passkeys());
  const [added, setAdded] = useState<PasskeyInfo[]>([]);
  const [removed, setRemoved] = useState<number[]>([]);
  const list = load.data ? [...load.data.passkeys, ...added].filter((k) => !removed.includes(k.id)) : null;
  const [nickname, setNickname] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const say = useErrorText();
  const id = useId();
  const add = async () => {
    setError('');
    if (!passkeysSupported()) {
      setError(fx.passkey.unsupported);
      return;
    }
    setBusy(true);
    try {
      const o = await api.passkeyRegisterOptions();
      const credential = (await navigator.credentials.create({
        publicKey: {
          challenge: fromB64url(o.challenge),
          rp: o.rp,
          user: { id: fromB64url(o.user.id), name: o.user.name, displayName: o.user.displayName },
          pubKeyCredParams: o.pubKeyCredParams,
          timeout: o.timeout,
          attestation: o.attestation,
          authenticatorSelection: o.authenticatorSelection,
          excludeCredentials: o.excludeCredentials.map((c) => ({ type: c.type, id: fromB64url(c.id), transports: c.transports as AuthenticatorTransport[] | undefined })),
        },
      })) as PublicKeyCredential | null;
      if (!credential) throw new DOMException('cancelled', 'NotAllowedError');
      const response = credential.response as AuthenticatorAttestationResponse;
      const result = await api.passkeyRegister({
        id: credential.id,
        rawId: toB64url(credential.rawId),
        type: 'public-key',
        response: { clientDataJSON: toB64url(response.clientDataJSON), attestationObject: toB64url(response.attestationObject), transports: response.getTransports?.() },
        nickname: nickname.trim() || undefined,
      });
      setAdded((l) => [...l, result.passkey]);
      setNickname('');
      announce(fx.passkey.addedNow);
    } catch (failure) {
      if (failure instanceof DOMException) setError(failure.name === 'NotAllowedError' || failure.name === 'AbortError' || failure.name === 'InvalidStateError' ? fx.passkey.cancelled : fx.passkey.unsupported);
      else setError(say(failure));
    } finally {
      setBusy(false);
    }
  };
  const remove = async (key: PasskeyInfo) => {
    try {
      await api.deletePasskey(key.id);
      setRemoved((r) => [...r, key.id]);
      announce(fx.passkey.removedNow);
    } catch (failure) {
      setError(say(failure));
    }
  };
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{fx.passkey.heading}</h2>
      <p>{fx.passkey.lede}</p>
      {list && list.length ? (
        <ul className="cm-notes">
          {list.map((k) => (
            <li key={k.id} className="cm-note-item">
              <span>
                <b>{k.nickname}</b>, {fx.passkey.added(dayDate(locale, k.createdAt))}, {k.lastUsedAt ? fx.passkey.lastUsed(dayDate(locale, k.lastUsedAt)) : fx.passkey.neverUsed}
                {k.backedUp ? `, ${fx.passkey.synced}` : ''}
              </span>
              <button type="button" className="cm-act cm-danger" onClick={() => void remove(k)}>
                {fx.passkey.remove(k.nickname)}
              </button>
            </li>
          ))}
        </ul>
      ) : list ? (
        <p>{fx.passkey.none}</p>
      ) : null}
      {load.error ? <ErrorNotice error={load.error} retry={load.reload} /> : null}
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
      <div className="cm-field">
        <label htmlFor={`${id}-nick`}>
          {fx.passkey.nickname}
        </label>
        <p className="cm-hint" id={`${id}-nick-hint`}>
          {fx.passkey.nicknameHint}
        </p>
        <input id={`${id}-nick`} type="text" maxLength={40} autoComplete="off" value={nickname} onChange={(e) => setNickname(e.target.value)} aria-describedby={`${id}-nick-hint`} />
      </div>
      <p>
        <button type="button" className="btn" disabled={busy} onClick={() => void add()}>
          {fx.passkey.add}
        </button>
      </p>
    </section>
  );
}
