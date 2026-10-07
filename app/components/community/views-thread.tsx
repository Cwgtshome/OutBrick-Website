'use client';

/**
 * One thread. The h1 is its title; every post is an `article` whose h2 is "Author, date", so
 * the VoiceOver rotor's heading list is the thread's table of contents. Every action is a real
 * button named with its effect and target. Pages of 25 posts, never infinite scroll.
 */

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import type { Post, ThreadDetail, ReportReason, ThreadStatus } from '../../../lib/community/contract';
import { threadPath, bugStatuses, ideaStatuses } from '../../../lib/community/contract';
import { categoryWords } from '../../../lib/i18n/community';
import { htmlToText } from '../../../lib/community/format';
import { memberName, pageOfPost } from '../../../lib/community/static-html';
import { api, ApiFailure } from './api';
import { Composer } from './composer';
import { ErrorSummary, Fill, MARK, Member, Pagination, Pending, StatusBadge, Time, View, errorText, fieldMessages, useApp, useLoad, Honeypot, type FieldErrors, type Route } from './core';
import { CategoryAside, FollowButtons } from './views-browse';

type Detail = ThreadDetail;

export function ThreadView({ route }: { route: Extract<Route, { name: 'thread' }> }) {
  const { copy, locale, path, session, here, announce } = useApp();
  const load = useLoad(`thread:${route.id}:${route.page}`, () => api.thread(route.id, route.page));
  const focusAfter = useRef<number | null>(null);
  const detail = load.data;

  // A thread's address carries its slug; an old or shortened link is put right in place.
  useEffect(() => {
    if (!detail) return;
    const canonical = threadPath(locale, detail.thread);
    const url = new URL(window.location.href);
    if (url.pathname !== canonical) window.history.replaceState(window.history.state, '', canonical + url.search + url.hash);
  }, [detail, locale]);

  // Tell the server how far the member has read.
  useEffect(() => {
    if (!detail || !session?.member || !detail.posts.length) return;
    const last = Math.max(...detail.posts.map((p) => p.number));
    api.markRead(detail.thread.id, last).catch(() => undefined);
  }, [detail, session]);

  // After a reply or an edit, focus the post it was about once the new page is drawn.
  useEffect(() => {
    if (!detail || focusAfter.current === null) return;
    const target = document.getElementById(`post-${focusAfter.current}`);
    focusAfter.current = null;
    if (target) {
      target.focus();
      target.scrollIntoView({ block: 'start' });
    }
  }, [detail]);

  const crumbsBase = [{ href: path(), label: copy.nav.label }];
  if (!detail) {
    if (load.error?.code === 'not_found')
      return (
        <View title={copy.thread.notFound} lede={copy.thread.notFoundNote} crumbs={[...crumbsBase, { label: copy.thread.notFound }]} ready>
          <p>
            <a className="btn" href={path()}>
              {copy.backHome}
            </a>
          </p>
        </View>
      );
    return <Pending load={load} crumbs={crumbsBase} />;
  }

  const { thread } = detail;
  const cat = categoryWords(locale, thread.category.slug);
  const pageHref = (page: number) => threadPath(locale, thread) + (page > 1 ? `?page=${page}` : '');
  const postHref = (n: number) => `${pageHref(pageOfPost(n))}#post-${n}`;
  const refresh = (focusPost?: number) => {
    if (focusPost !== undefined) focusAfter.current = focusPost;
    load.reload();
  };

  return (
    <View
      title={thread.title}
      titleLang={thread.language}
      crumbs={[...crumbsBase, { href: path(`/c/${thread.category.slug}`), label: cat.name }, { label: thread.title, lang: thread.language }]}
      ready={!load.loading}
      aside={<CategoryAside />}
      headExtra={<ThreadHead detail={detail} postHref={postHref} />}
    >
      {detail.canModerate || detail.canSetStatus ? <ModTools detail={detail} onDone={() => refresh()} /> : null}
      {detail.bug ? <BugDetails detail={detail} /> : null}
      <section className="cm-posts" aria-labelledby="cm-posts-h">
        <h2 className="sr-only" id="cm-posts-h">
          {copy.thread.postsHeading}
        </h2>
        {detail.posts.map((post) => (
          <PostArticle key={post.id} post={post} detail={detail} postHref={postHref} onChanged={refresh} />
        ))}
      </section>
      <Pagination page={detail.page} pages={detail.pages} href={pageHref} label={copy.thread.pages} />
      <ReplyArea
        detail={detail}
        signInHref={path(`/signin?returnTo=${encodeURIComponent(here)}`)}
        onPosted={(result) => {
          announce(copy.thread.replyPosted);
          if (result.page !== detail.page) {
            focusAfter.current = result.number;
            window.history.pushState(null, '', postHref(result.number));
            window.dispatchEvent(new PopStateEvent('popstate'));
          } else refresh(result.number);
        }}
      />
    </View>
  );
}

function ThreadHead({ detail, postHref }: { detail: Detail; postHref: (n: number) => string }) {
  const { copy, n, session, announce } = useApp();
  const { thread } = detail;
  const [votes, setVotes] = useState({ count: thread.voteCount, voted: !!thread.voted });
  const [busy, setBusy] = useState(false);
  const isIdea = thread.category.kind === 'ideas';
  const vote = async () => {
    setBusy(true);
    try {
      const result = await api.vote(thread.id, !votes.voted);
      setVotes({ count: result.voteCount, voted: result.voted });
      const text = copy.thread.votes(result.voteCount, n(result.voteCount));
      announce(result.voted ? copy.thread.voteSaved(text) : copy.thread.voteRemoved(text));
    } catch (error) {
      announce(errorText(copy, error as ApiFailure));
    } finally {
      setBusy(false);
    }
  };
  return (
    <>
      <p className="cm-badges">
        <StatusBadge status={thread.status} note={thread.statusNote} />
        {thread.solved ? <span className="cm-badge cm-badge-solution">{copy.list.solved}</span> : null}
        {thread.pinned ? <span className="cm-badge">{copy.list.pinned}</span> : null}
        {thread.locked ? <span className="cm-badge">{copy.list.locked}</span> : null}
        {thread.hidden ? <span className="cm-badge">{copy.list.hidden}</span> : null}
      </p>
      <p className="cm-meta-dark">
        <StartedBy detail={detail} /> · {copy.stats.replies(thread.replyCount, n(thread.replyCount))} · {copy.stats.views(thread.viewCount, n(thread.viewCount))}
      </p>
      <div className="cm-head-actions">
        {isIdea ? (
          session?.member ? (
            <button type="button" className="cm-vote" aria-pressed={votes.voted} disabled={busy} onClick={() => void vote()} aria-label={copy.thread.upvoteLabel(thread.title, copy.thread.votes, votes.count, n(votes.count))}>
              <span className="cm-vote-arrow" aria-hidden="true">
                ▲
              </span>
              {votes.voted ? copy.thread.upvoted : copy.thread.upvote}
              <span className="cm-vote-count">{copy.thread.votes(votes.count, n(votes.count))}</span>
            </button>
          ) : (
            <p className="cm-vote-static">{copy.thread.votes(votes.count, n(votes.count))}</p>
          )
        ) : null}
        {detail.solvedPostNumber ? (
          <a className="cm-jump" href={postHref(detail.solvedPostNumber)}>
            {copy.thread.jumpSolution}
          </a>
        ) : null}
        {detail.firstUnread ? (
          <a className="cm-jump" href={postHref(detail.firstUnread)}>
            {copy.thread.jumpUnread}
          </a>
        ) : null}
        {session?.member ? (
          <FollowButtons
            level={detail.following}
            onChange={async (level) => (await api.followThread(thread.id, level)).level}
            watchLabel={copy.follow.watchThread(thread.title)}
            muteLabel={copy.follow.muteThread(thread.title)}
          />
        ) : null}
      </div>
    </>
  );
}

function StartedBy({ detail }: { detail: Detail }) {
  const { copy } = useApp();
  return (
    <span>
      <Fill template={copy.thread.startedBy(MARK, MARK)} parts={[<Member key="m" member={detail.thread.author} />, <Time key="t" iso={detail.thread.createdAt} />]} />
    </span>
  );
}

function BugDetails({ detail }: { detail: Detail }) {
  const { copy } = useApp();
  const b = detail.bug!;
  const rows: [string, string, boolean][] = [
    [copy.thread.bug.device, b.device, false],
    [copy.thread.bug.osVersion, b.osVersion, false],
    [copy.thread.bug.appVersion, b.appVersion, false],
    [copy.thread.bug.assistive, b.assistive.map((a) => copy.newThread.at[a] ?? a).join(', ') || '—', true],
    [copy.thread.bug.steps, b.steps, false],
    [copy.thread.bug.expected, b.expected, false],
    [copy.thread.bug.actual, b.actual, false],
  ];
  return (
    <section className="cm-section cm-bug" aria-labelledby="cm-bug-h">
      <h2 id="cm-bug-h">{copy.thread.bugHeading}</h2>
      <dl>
        {rows.map(([term, value, ui]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd lang={ui ? undefined : detail.thread.language}>{value || '—'}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

// ---------------------------------------------------------------------------------------
// A post

type Mode = 'view' | 'edit' | 'delete' | 'report';

function PostArticle({ post, detail, postHref, onChanged }: { post: Post; detail: Detail; postHref: (n: number) => string; onChanged: (focusPost?: number) => void }) {
  const { copy, n, announce, session } = useApp();
  const [mode, setMode] = useState<Mode>('view');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const headingId = `post-${post.number}-h`;
  const name = memberName(copy, post.author);
  const num = n(post.number);
  const lang = detail.thread.language;
  const isFirst = post.number === 1;

  const act = async (work: () => Promise<unknown>, done: string, focusPost?: number) => {
    setBusy(true);
    setError('');
    try {
      await work();
      announce(done);
      setMode('view');
      onChanged(focusPost);
    } catch (failure) {
      setError(errorText(copy, failure as ApiFailure));
    } finally {
      setBusy(false);
    }
  };

  const quote = () => {
    const text = htmlToText(post.html)
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');
    window.dispatchEvent(new CustomEvent('cm-quote', { detail: { text: `> **${name}**:\n${text}\n\n`, replyTo: post.number } }));
  };
  const reply = () => window.dispatchEvent(new CustomEvent('cm-quote', { detail: { text: '', replyTo: post.number } }));

  return (
    <article className={`cm-post${post.isSolution ? ' is-solution' : ''}${post.hidden ? ' is-hidden' : ''}${post.pending ? ' is-pending' : ''}`} id={`post-${post.number}`} aria-labelledby={headingId} tabIndex={-1}>
      <h2 className="cm-post-h" id={headingId}>
        <Member member={post.author} />
        <span className="cm-sep" aria-hidden="true">
          ,{' '}
        </span>
        <span className="sr-only">, </span>
        <Time iso={post.createdAt} />
      </h2>
      <p className="cm-post-meta">
        <a href={postHref(post.number)} className="cm-permalink" aria-label={`${copy.thread.actions.share}: ${copy.thread.postNumber(num)}`}>
          {copy.thread.postNumber(num)}
        </a>
        {post.replyTo ? (
          <a href={postHref(post.replyTo)} className="cm-replyto">
            {copy.thread.replyTo(n(post.replyTo))}
          </a>
        ) : null}
        {post.editedAt ? (
          <span>
            <Fill template={copy.thread.edited(MARK)} parts={[<Time key="t" iso={post.editedAt} relative />]} />
          </span>
        ) : null}
      </p>
      {post.isSolution ? <p className="cm-badge cm-badge-solution cm-solution-mark">{copy.thread.solutionBy(name)}</p> : null}
      {post.pending ? <p className="cm-note">{copy.thread.pending}</p> : null}
      {post.hidden ? (
        <div className="cm-note">
          <p>{copy.thread.hiddenPost}</p>
          {post.hiddenReason ? <p>{copy.thread.hiddenReason(post.hiddenReason)}</p> : null}
        </div>
      ) : null}
      {mode === 'edit' ? (
        <EditPost post={post} lang={lang} onCancel={() => setMode('view')} onSaved={() => { announce(copy.thread.postSaved); setMode('view'); onChanged(post.number); }} />
      ) : post.html ? (
        <div className="cm-post-body" lang={lang} dangerouslySetInnerHTML={{ __html: post.html }} />
      ) : null}
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
      {mode === 'delete' ? (
        <div className="cm-confirm" role="group" aria-label={copy.thread.actions.deleteLabel(num)}>
          <p>{copy.thread.actions.confirmDelete}</p>
          <button type="button" className="cm-act cm-danger" disabled={busy} onClick={() => void act(() => api.deletePost(post.id), copy.thread.postDeleted)}>
            {copy.thread.actions.yesDelete}
          </button>
          <button type="button" className="cm-act" onClick={() => setMode('view')}>
            {copy.thread.actions.cancel}
          </button>
        </div>
      ) : null}
      {mode === 'report' ? <ReportForm post={post} name={name} onDone={() => { announce(copy.thread.reported); setMode('view'); }} onCancel={() => setMode('view')} /> : null}
      {mode === 'view' && !post.hidden ? (
        <ul className="cm-actions">
          {detail.canReply ? (
            <>
              <li>
                <button type="button" className="cm-act" onClick={reply} aria-label={copy.thread.actions.replyLabel(name)}>
                  {copy.thread.actions.reply}
                </button>
              </li>
              <li>
                <button type="button" className="cm-act" onClick={quote} aria-label={copy.thread.actions.quoteLabel(name)}>
                  {copy.thread.actions.quote}
                </button>
              </li>
            </>
          ) : null}
          {detail.canSolve && !isFirst ? (
            <li>
              <button
                type="button"
                className="cm-act"
                aria-pressed={post.isSolution}
                disabled={busy}
                aria-label={post.isSolution ? copy.thread.actions.unsolveLabel(num) : copy.thread.actions.solveLabel(num)}
                onClick={() => void act(() => api.solve(detail.thread.id, post.isSolution ? null : post.id), post.isSolution ? copy.thread.unsolvedNow : copy.thread.solvedNow, post.number)}
              >
                {post.isSolution ? copy.thread.actions.unsolve : copy.thread.actions.solve}
              </button>
            </li>
          ) : null}
          {post.canEdit ? (
            <li>
              <button type="button" className="cm-act" onClick={() => setMode('edit')} aria-label={copy.thread.actions.editLabel(num)}>
                {copy.thread.actions.edit}
              </button>
            </li>
          ) : null}
          {post.canDelete ? (
            <li>
              <button type="button" className="cm-act" onClick={() => setMode('delete')} aria-label={copy.thread.actions.deleteLabel(num)}>
                {copy.thread.actions.delete}
              </button>
            </li>
          ) : null}
          {session?.member && post.author?.id !== session.member.id ? (
            <li>
              <button type="button" className="cm-act" onClick={() => setMode('report')} aria-label={copy.thread.actions.reportLabel(num, name)}>
                {copy.thread.actions.report}
              </button>
            </li>
          ) : null}
        </ul>
      ) : null}
    </article>
  );
}

function EditPost({ post, lang, onCancel, onSaved }: { post: Post; lang: string; onCancel: () => void; onSaved: () => void }) {
  const { copy } = useApp();
  const [value, setValue] = useState(post.markdown ?? htmlToText(post.html));
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const id = useId();
  useEffect(() => ref.current?.focus(), []);
  const save = async (event: FormEvent) => {
    event.preventDefault();
    if (!value.trim()) {
      setError(copy.form.codes.required(copy.form.fields.body));
      ref.current?.focus();
      return;
    }
    setBusy(true);
    try {
      await api.editPost(post.id, value);
      onSaved();
    } catch (failure) {
      const f = failure as ApiFailure;
      setError(fieldMessages(copy, f.body?.fields).body ?? errorText(copy, f));
      ref.current?.focus();
    } finally {
      setBusy(false);
    }
  };
  return (
    <form className="cm-edit" onSubmit={(e) => void save(e)}>
      <Composer id={`${id}-edit`} label={copy.thread.actions.editLabel(String(post.number))} value={value} onChange={setValue} error={error} lang={lang} textareaRef={ref} />
      <div className="cm-row">
        <button type="submit" className="btn" disabled={busy}>
          {copy.thread.actions.save}
        </button>
        <button type="button" className="cm-act" onClick={onCancel}>
          {copy.thread.actions.cancel}
        </button>
      </div>
    </form>
  );
}

function ReportForm({ post, name, onDone, onCancel }: { post: Post; name: string; onDone: () => void; onCancel: () => void }) {
  const { copy, n } = useApp();
  const [reason, setReason] = useState<ReportReason>('spam');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const id = useId();
  const first = useRef<HTMLInputElement>(null);
  useEffect(() => first.current?.focus(), []);
  const send = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      await api.report(post.id, { reason, note: note.trim() || undefined });
      onDone();
    } catch (failure) {
      setError(errorText(copy, failure as ApiFailure));
    } finally {
      setBusy(false);
    }
  };
  const reasons = Object.keys(copy.thread.report.reasons) as ReportReason[];
  return (
    <form className="cm-report" onSubmit={(e) => void send(e)} aria-label={copy.thread.actions.reportLabel(n(post.number), name)}>
      <fieldset>
        <legend>{copy.thread.report.legend}</legend>
        {reasons.map((r, i) => (
          <div className="cm-check" key={r}>
            <input ref={i === 0 ? first : undefined} type="radio" id={`${id}-${r}`} name={`${id}-reason`} value={r} checked={reason === r} onChange={() => setReason(r)} />
            <label htmlFor={`${id}-${r}`}>{copy.thread.report.reasons[r]}</label>
          </div>
        ))}
      </fieldset>
      <div className="cm-field">
        <label htmlFor={`${id}-note`}>
          {copy.thread.report.note} <span className="cm-optional">({copy.form.optional})</span>
        </label>
        <textarea id={`${id}-note`} rows={3} value={note} onChange={(e) => setNote(e.target.value)} maxLength={1000} />
      </div>
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
      <div className="cm-row">
        <button type="submit" className="btn" disabled={busy}>
          {copy.thread.report.send}
        </button>
        <button type="button" className="cm-act" onClick={onCancel}>
          {copy.thread.actions.cancel}
        </button>
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------------------
// Replying

function ReplyArea({ detail, signInHref, onPosted }: { detail: Detail; signInHref: string; onPosted: (result: { number: number; page: number }) => void }) {
  const { copy, n, session, announce } = useApp();
  const [body, setBody] = useState('');
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [busy, setBusy] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const id = useId();
  const composerId = `${id}-reply`;

  useEffect(() => {
    const onQuote = (event: Event) => {
      const { text, replyTo: to } = (event as CustomEvent<{ text: string; replyTo: number }>).detail;
      setReplyTo(to);
      if (text) setBody((current) => (current.trim() ? `${current.trimEnd()}\n\n${text}` : text));
      window.setTimeout(() => {
        textarea.current?.focus();
        textarea.current?.scrollIntoView({ block: 'center' });
      }, 0);
    };
    window.addEventListener('cm-quote', onQuote);
    return () => window.removeEventListener('cm-quote', onQuote);
  }, []);

  if (!detail.canReply) {
    const reason = detail.replyBlocked ?? (session?.member ? 'other' : 'signin');
    return (
      <section className="cm-section cm-reply" aria-labelledby={`${id}-h`}>
        <h2 id={`${id}-h`}>{reason === 'signin' ? copy.thread.signInToReply : copy.thread.replyHeading}</h2>
        {reason === 'signin' ? (
          <>
            <p>{copy.thread.signInToReplyNote}</p>
            <p>
              <a className="btn" href={signInHref}>
                {copy.thread.signInToReply}
              </a>
            </p>
          </>
        ) : (
          <p>{copy.thread.blocked[reason as keyof typeof copy.thread.blocked] ?? copy.thread.blocked.other}</p>
        )}
      </section>
    );
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setGeneral('');
    if (!body.trim()) {
      setErrors({ body: copy.form.codes.required(copy.form.fields.body) });
      window.setTimeout(() => summary.current?.focus(), 0);
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const result = await api.reply(detail.thread.id, { body, replyTo, website: website || undefined });
      setBody('');
      setReplyTo(null);
      // A honeypot hit is answered with a stand-in (id 0): say it worked, go nowhere.
      if (result.post.id === 0) announce(copy.thread.replyPosted);
      else onPosted({ number: result.post.number, page: result.page });
    } catch (failure) {
      const f = failure as ApiFailure;
      const fields = fieldMessages(copy, f.body?.fields);
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      window.setTimeout(() => summary.current?.focus(), 0);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section className="cm-section cm-reply" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{copy.thread.replyHeading}</h2>
      <form onSubmit={(e) => void submit(e)} noValidate>
        <ErrorSummary errors={errors} ids={{ body: composerId }} summaryRef={summary} general={general} />
        {replyTo ? (
          <p className="cm-replying">
            {copy.composer.replyingTo(n(replyTo))}{' '}
            <button type="button" className="cm-act" onClick={() => setReplyTo(null)}>
              {copy.composer.clearReply}
            </button>
          </p>
        ) : null}
        <Composer id={composerId} label={copy.composer.replyLabel} value={body} onChange={setBody} error={errors.body} lang={detail.thread.language} textareaRef={textarea} />
        <Honeypot value={website} onChange={setWebsite} />
        <button type="submit" className="btn" disabled={busy} aria-disabled={busy || undefined}>
          {busy ? copy.composer.sending : copy.composer.submitReply}
        </button>
      </form>
    </section>
  );
}

// ---------------------------------------------------------------------------------------
// Moderators and the team

function ModTools({ detail, onDone }: { detail: Detail; onDone: () => void }) {
  const { copy, announce } = useApp();
  const { thread } = detail;
  const statuses: readonly string[] | null = thread.category.kind === 'bugs' ? bugStatuses : thread.category.kind === 'ideas' ? ideaStatuses : null;
  const [status, setStatus] = useState(thread.status ?? '');
  const [note, setNote] = useState(thread.statusNote ?? '');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const id = useId();
  const patch = async (body: Parameters<typeof api.updateThread>[1]) => {
    setBusy(true);
    setError('');
    try {
      await api.updateThread(thread.id, body);
      announce(copy.thread.modSaved);
      onDone();
    } catch (failure) {
      setError(errorText(copy, failure as ApiFailure));
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="cm-section cm-mod" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{copy.thread.moderation}</h2>
      {detail.canModerate ? (
        <div className="cm-row">
          <button type="button" className="cm-act" disabled={busy} aria-pressed={thread.pinned} onClick={() => void patch({ pinned: !thread.pinned })}>
            {thread.pinned ? copy.thread.modUnpin : copy.thread.modPin}
          </button>
          <button type="button" className="cm-act" disabled={busy} aria-pressed={thread.locked} onClick={() => void patch({ locked: !thread.locked })}>
            {thread.locked ? copy.thread.modUnlock : copy.thread.modLock}
          </button>
          <button type="button" className="cm-act" disabled={busy} aria-pressed={thread.hidden} onClick={() => void patch({ hidden: !thread.hidden })}>
            {thread.hidden ? copy.thread.modUnhide : copy.thread.modHide}
          </button>
        </div>
      ) : null}
      {detail.canSetStatus && statuses ? (
        <form
          className="cm-mod-status"
          onSubmit={(e) => {
            e.preventDefault();
            void patch({ status: (status || null) as ThreadStatus | null, statusNote: note.trim() || null });
          }}
        >
          <div className="cm-field">
            <label htmlFor={`${id}-status`}>{copy.thread.modStatus}</label>
            <select id={`${id}-status`} value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">{copy.thread.modNoStatus}</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {copy.status[s]}
                </option>
              ))}
            </select>
          </div>
          <div className="cm-field">
            <label htmlFor={`${id}-note`}>
              {copy.thread.modStatusNote} <span className="cm-optional">({copy.form.optional})</span>
            </label>
            <p className="cm-hint" id={`${id}-note-hint`}>
              {copy.thread.modStatusNoteHint}
            </p>
            <input id={`${id}-note`} type="text" value={note} maxLength={80} onChange={(e) => setNote(e.target.value)} aria-describedby={`${id}-note-hint`} />
          </div>
          <button type="submit" className="cm-act" disabled={busy}>
            {copy.thread.modSave}
          </button>
        </form>
      ) : null}
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  );
}
