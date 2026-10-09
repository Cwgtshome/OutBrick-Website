'use client';

import { useEffect, useId, useRef, useState, type SubmitEvent } from 'react';
import { useHydrated, useSearchParam } from '../netlify-form';
import type { CaseStatus, SupportCopy } from '../../../lib/support/model';
import { supportCopies } from '../../../lib/support/copy/index';
import { AttachmentPicker } from './attachments';
import { contactTopics } from '../../../lib/business';
import { clientText } from '../../../lib/i18n/client-tree';
import type { Locale } from '../../../lib/i18n/locales';

type PlayerEvent =
  | { kind: 'created'; at: string; attachments: string[] }
  | { kind: 'reply'; at: string; body: string; staff: string }
  | { kind: 'status'; at: string; to: string }
  | { kind: 'fixed_in'; at: string; version: string; note: string }
  | { kind: 'fixed_notified'; at: string; version: string }
  | { kind: 'feedback'; at: string; solved: boolean | null; rating: number | null; comment: string }
  | { kind: 'reopened'; at: string; comment: string }
  | { kind: 'player_note'; at: string; body: string; attachments: string[] };

type PlayerCase = {
  ref: string;
  topic: string;
  message: string;
  device: string;
  appVersion: string;
  iosVersion: string;
  details: Record<string, string>;
  status: CaseStatus;
  fixedIn: string | null;
  createdAt: string;
  updatedAt: string;
  answered: boolean;
  feedback: { solved: string; notSolved: string; rate: [string, string, string] } | null;
  events: PlayerEvent[];
};

type Load = { state: 'none' } | { state: 'loading' } | { state: 'error'; reason: 'invalid' | 'expired' | 'failed' } | { state: 'ready'; data: PlayerCase };

const api = '/api/community/support/case';
const field = (form: FormData, name: string) => {
  const v = form.get(name);
  return typeof v === 'string' ? v : '';
};

/**
 * A player's own support request (/support/request?p=…&x=…&t=…), opened from the private link
 * in our emails: where it stands, every reply, and a box to add details. Without a link it
 * explains where to find one and offers to email it again. See netlify/lifecycle/player-cases.ts.
 */
export function CaseTracker({ locale, contactHref }: { locale: Locale; contactHref: string }) {
  const copy = supportCopies[locale].request;
  const hydrated = useHydrated();
  const p = useSearchParam('p') ?? '';
  const x = useSearchParam('x') ?? '';
  const t = useSearchParam('t') ?? '';
  const hasLink = Boolean(p && x && t);
  const [fetched, setFetched] = useState<Load>({ state: 'loading' });
  const id = useId();

  useEffect(() => {
    if (!hasLink) return;
    let live = true;
    const done = (next: Load) => {
      if (live) setFetched(next);
    };
    fetch(`${api}?${new URLSearchParams({ p, x, t }).toString()}`, { headers: { Accept: 'application/json' } })
      .then(async (response) => {
        const body = (await response.json().catch(() => ({}))) as { case?: PlayerCase; error?: { code?: string } };
        if (response.ok && body.case) done({ state: 'ready', data: body.case });
        else done({ state: 'error', reason: body.error?.code === 'expired' ? 'expired' : response.status === 404 ? 'invalid' : 'failed' });
      })
      .catch(() => done({ state: 'error', reason: 'failed' }));
    return () => {
      live = false;
    };
  }, [hasLink, p, x, t]);

  const load: Load = !hydrated ? { state: 'loading' } : hasLink ? fetched : { state: 'none' };
  const signed = hasLink ? { p, x, t } : null;
  const setLoad = setFetched;

  const date = (at: string, withTime = false) =>
    new Intl.DateTimeFormat(locale, withTime ? { dateStyle: 'long', timeStyle: 'short' } : { dateStyle: 'long' }).format(new Date(at));

  return (
    <div className="ss-request">
      {load.state === 'loading' ? <output className="ss-loading">{copy.loading}</output> : null}

      {load.state === 'error' ? (
        <div className="brick ss-request-error" role="alert">
          <p>{load.reason === 'expired' ? copy.expired : load.reason === 'invalid' ? copy.invalid : copy.failed}</p>
        </div>
      ) : null}

      {load.state === 'none' ? (
        <section className="brick ss-request-intro" aria-labelledby={`${id}-none`}>
          <h2 id={`${id}-none`}>{copy.noLinkTitle}</h2>
          <p>{copy.noLinkText}</p>
        </section>
      ) : null}

      {load.state === 'ready' && signed ? <CaseView data={load.data} copy={copy} locale={locale} date={date} signed={signed} onUpdate={(data) => setLoad({ state: 'ready', data })} /> : null}

      {load.state !== 'ready' && load.state !== 'loading' ? <LinkLookup copy={copy} locale={locale} contactHref={contactHref} /> : null}
    </div>
  );
}

const stageOrder = ['received', 'answered', 'fixing', 'solved'] as const;
function reachedStage(c: PlayerCase): number {
  if (c.status === 'resolved' || c.status === 'closed') return 3;
  if (c.status === 'fix_pending') return 2;
  if (c.status === 'replied') return 1;
  // Reopened after an answer: it has been answered before, and is with the team again.
  return c.events.some((e) => e.kind === 'reply') ? 1 : 0;
}

function CaseView({
  data,
  copy,
  locale,
  date,
  signed,
  onUpdate,
}: {
  data: PlayerCase;
  copy: SupportCopy['request'];
  locale: Locale;
  date: (at: string, withTime?: boolean) => string;
  signed: { p: string; x: string; t: string };
  onUpdate: (data: PlayerCase) => void;
}) {
  const id = useId();
  const reached = reachedStage(data);
  const topic = contactTopics.find((t) => t.value === data.topic);
  const detailRows: [string, string][] = [
    ...(Object.entries(data.details) as [keyof typeof copy.detail, string][]).filter(([k]) => k in copy.detail && k !== 'guide').map(([k, v]) => [copy.detail[k], v] as [string, string]),
    ...(data.device ? [[copy.detail.device, data.device] as [string, string]] : []),
    ...(data.iosVersion ? [[copy.detail.ios, data.iosVersion] as [string, string]] : []),
    ...(data.appVersion ? [[copy.detail.app, data.appVersion] as [string, string]] : []),
  ];
  const skipFixing = !data.fixedIn && reached !== 2;

  return (
    <>
      <section className={`brick ss-case-status s-${data.status}`} aria-labelledby={`${id}-status`}>
        <p className="ss-ref"><span>{copy.reference}</span> <b translate="no">{data.ref}</b></p>
        <h2 id={`${id}-status`}>{copy.statusTitle[data.status]}</h2>
        <p>{copy.statusText[data.status]}</p>
        {data.status === 'open' ? <p className="ss-promise">{supportCopies[locale].hub.promise}</p> : null}
        <ol className="ss-stages">
          {stageOrder.map((s, i) =>
            s === 'fixing' && skipFixing ? null : (
              <li key={s} className={i < reached ? 'done' : i === reached ? 'now' : ''} aria-current={i === reached ? 'step' : undefined}>
                <span className="dot" aria-hidden="true" />
                <span>{copy.stages[s]}</span>
              </li>
            ),
          )}
        </ol>
        <dl className="ss-facts">
          <div><dt>{copy.topic}</dt><dd>{topic ? clientText(topic.label, locale) : data.topic}</dd></div>
          <div><dt>{copy.opened}</dt><dd>{date(data.createdAt)}</dd></div>
          <div><dt>{copy.updated}</dt><dd>{date(data.updatedAt)}</dd></div>
        </dl>
      </section>

      {data.feedback && !data.answered ? (
        <section className="brick ss-case-feedback" aria-labelledby={`${id}-fb`}>
          <h2 id={`${id}-fb`}>{copy.feedbackTitle}</h2>
          <p>{copy.feedbackText}</p>
          <div className="act">
            <a className="btn" href={data.feedback.solved}>{copy.solvedYes}</a>
            <a className="btn ghost" href={data.feedback.notSolved}>{copy.solvedNo}</a>
          </div>
        </section>
      ) : null}

      <section className="brick ss-case-history" aria-labelledby={`${id}-history`}>
        <h2 id={`${id}-history`}>{copy.historyTitle}</h2>
        <ol className="ss-timeline">
          {data.events.map((e, i) => (
            <li key={i} className={`k-${e.kind}`}>
              <p className="when"><time dateTime={e.at}>{date(e.at, true)}</time></p>
              <EventView e={e} copy={copy} data={data} detailRows={detailRows} signed={signed} locale={locale} />
            </li>
          ))}
        </ol>
      </section>

      <AddDetails copy={copy} signed={signed} status={data.status} locale={locale} onUpdate={onUpdate} />
    </>
  );
}

function Shots({ ids, signed, locale }: { ids: string[]; signed: { p: string; x: string; t: string }; locale: Locale }) {
  const t = supportCopies[locale].attach;
  if (!ids.length) return null;
  const src = (a: string) => `${api}/attachment?${new URLSearchParams({ ...signed, a }).toString()}`;
  return (
    <ul className="ss-shots" aria-label={t.title}>
      {ids.map((a, i) => (
        <li key={a}>
          <a href={src(a)} target="_blank" rel="noopener">
            <img src={src(a)} alt={t.alt(i + 1)} loading="lazy" width={120} height={120} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function EventView({ e, copy, data, detailRows, signed, locale }: { e: PlayerEvent; copy: SupportCopy['request']; data: PlayerCase; detailRows: [string, string][]; signed: { p: string; x: string; t: string }; locale: Locale }) {
  switch (e.kind) {
    case 'created':
      return (
        <>
          <p className="what">{copy.event.created}</p>
          <blockquote className="ss-quote">{data.message}</blockquote>
          <Shots ids={e.attachments} signed={signed} locale={locale} />
          {detailRows.length ? (
            <dl className="ss-details" aria-label={copy.detailsTitle}>
              {detailRows.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          ) : null}
        </>
      );
    case 'reply':
      return (
        <>
          <p className="what">{copy.event.reply(e.staff)}</p>
          <blockquote className="ss-quote staff">{e.body}</blockquote>
        </>
      );
    case 'fixed_in':
      return (
        <>
          <p className="what">{copy.event.fixedIn(e.version)}</p>
          {e.note ? <blockquote className="ss-quote staff">{e.note}</blockquote> : null}
        </>
      );
    case 'fixed_notified':
      return <p className="what">{copy.event.fixedShipped(e.version)}</p>;
    case 'status':
      return <p className="what">{e.to === 'resolved' ? copy.event.resolved : e.to === 'closed' ? copy.event.closed : copy.event.reopened}</p>;
    case 'reopened':
      return <p className="what">{copy.event.reopened}</p>;
    case 'feedback':
      return (
        <>
          <p className="what">{e.rating !== null ? copy.event.rated(e.rating) : e.solved ? copy.event.solvedYes : copy.event.solvedNo}</p>
          {e.comment ? <blockquote className="ss-quote">{e.comment}</blockquote> : null}
        </>
      );
    case 'player_note':
      return (
        <>
          <p className="what">{copy.event.playerNote}</p>
          <blockquote className="ss-quote">{e.body}</blockquote>
          <Shots ids={e.attachments} signed={signed} locale={locale} />
        </>
      );
    default:
      return null;
  }
}

function AddDetails({ copy, signed, status, locale, onUpdate }: { copy: SupportCopy['request']; signed: { p: string; x: string; t: string }; status: CaseStatus; locale: Locale; onUpdate: (data: PlayerCase) => void }) {
  const id = useId();
  const [message, setMessage] = useState('');
  const [shots, setShots] = useState<string[]>([]);
  const [round, setRound] = useState(0);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed' | 'busy'>('idle');
  const doneRef = useRef<HTMLOutputElement>(null);
  const reopens = ['replied', 'resolved', 'closed'].includes(status);

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (message.trim().length < 2) return;
    setState('sending');
    try {
      const response = await fetch(`${api}/note`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...signed, message: message.trim(), attachments: shots }) });
      const body = (await response.json().catch(() => ({}))) as { case?: PlayerCase };
      if (response.status === 429) return setState('busy');
      if (!response.ok || !body.case) throw new Error(String(response.status));
      setMessage('');
      setShots([]);
      setRound((r) => r + 1);
      setState('sent');
      onUpdate(body.case);
      window.setTimeout(() => doneRef.current?.focus(), 0);
    } catch {
      setState('failed');
    }
  }

  return (
    <section className="brick ss-case-add" aria-labelledby={`${id}-add`}>
      <h2 id={`${id}-add`}>{copy.addTitle}</h2>
      <form onSubmit={submit} className="obf">
        <div className="obf-field">
          <label htmlFor={`${id}-msg`}>{copy.addLabel}</label>
          <textarea id={`${id}-msg`} rows={5} minLength={2} maxLength={5000} required value={message} onChange={(e) => setMessage(e.target.value)} aria-describedby={`${id}-hint`} />
          <p id={`${id}-hint`} className="obf-hint">{copy.addHint}{reopens ? ` ${copy.addReopens}` : ''}</p>
        </div>
        <AttachmentPicker key={round} locale={locale} onChange={setShots} />
        <button type="submit" className="btn" disabled={state === 'sending'}>{state === 'sending' ? copy.addSending : copy.addAction}</button>
        {state === 'sent' ? <output className="ss-thanks" tabIndex={-1} ref={doneRef}>{copy.added}</output> : null}
        {state === 'failed' ? <p className="ss-error" role="alert">{copy.failed}</p> : null}
        {state === 'busy' ? <p className="ss-error" role="alert">{copy.tooMany}</p> : null}
      </form>
    </section>
  );
}

function LinkLookup({ copy, locale, contactHref }: { copy: SupportCopy['request']; locale: Locale; contactHref: string }) {
  const id = useId();
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed' | 'busy' | 'invalid'>('idle');
  const doneRef = useRef<HTMLOutputElement>(null);

  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setState('sending');
    try {
      const response = await fetch(`${api}/link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ref: field(form, 'ref'), email: field(form, 'email'), locale }),
      });
      if (response.status === 429) return setState('busy');
      if (response.status === 400) return setState('invalid');
      if (!response.ok) throw new Error(String(response.status));
      setState('sent');
      window.setTimeout(() => doneRef.current?.focus(), 0);
    } catch {
      setState('failed');
    }
  }

  return (
    <section className="brick ss-lookup" aria-labelledby={`${id}-lookup`}>
      <h2 id={`${id}-lookup`}>{copy.lookupTitle}</h2>
      <p>{copy.lookupText}</p>
      {state === 'sent' ? (
        <output className="ss-thanks" tabIndex={-1} ref={doneRef}>{copy.lookupSent}</output>
      ) : (
        <form onSubmit={submit} className="obf">
          <div className="obf-row">
            <div className="obf-field">
              <label htmlFor={`${id}-ref`}>{copy.refLabel}</label>
              <input id={`${id}-ref`} name="ref" required autoCapitalize="characters" autoComplete="off" spellCheck={false} placeholder="OB-7K2QXM" pattern="\s*[Oo][Bb]-?[0-9A-Za-z]{6}\s*" maxLength={20} aria-describedby={`${id}-refhint`} translate="no" />
              <p id={`${id}-refhint`} className="obf-hint">{copy.refHint}</p>
            </div>
            <div className="obf-field">
              <label htmlFor={`${id}-email`}>{copy.emailLabel}</label>
              <input id={`${id}-email`} name="email" type="email" inputMode="email" autoComplete="email" required spellCheck={false} autoCapitalize="off" maxLength={200} />
            </div>
          </div>
          <button type="submit" className="btn" disabled={state === 'sending'}>{state === 'sending' ? copy.lookupSending : copy.lookupAction}</button>
          {state === 'failed' ? <p className="ss-error" role="alert">{copy.failed}</p> : null}
          {state === 'busy' ? <p className="ss-error" role="alert">{copy.tooMany}</p> : null}
          {state === 'invalid' ? <p className="ss-error" role="alert">{copy.refHint}</p> : null}
        </form>
      )}
      <p className="ss-new"><a href={contactHref}>{copy.newRequest}</a></p>
    </section>
  );
}
