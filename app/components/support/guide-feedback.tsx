'use client';

import { useId, useRef, useState, type SubmitEvent } from 'react';
import type { FeedbackReason, SupportCopy } from '../../../lib/support/model';
import { feedbackReasons } from '../../../lib/support/model';
import { track } from '../../../lib/track';

/**
 * "Was this guide helpful?" at the end of every Help Centre guide and Support Centre page.
 * A "yes" is one tap; a "no" asks what went wrong (optional) and offers a person straight away.
 * Answers go to POST /api/community/help/feedback (netlify/community/help-feedback.ts), anonymous.
 * Without scripts the question is not shown at all, rather than offering buttons that do nothing.
 */
export function GuideFeedback({
  slug,
  locale,
  copy,
  page = false,
  contactHref,
  askHref,
}: {
  slug: string;
  locale: string;
  copy: SupportCopy['feedback'];
  /** Ask about "this page" rather than "this guide". */
  page?: boolean;
  contactHref: string;
  askHref: string;
}) {
  const [stage, setStage] = useState<'ask' | 'why' | 'thanks-yes' | 'thanks-no'>('ask');
  const [reason, setReason] = useState<FeedbackReason | null>(null);
  const [comment, setComment] = useState('');
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const id = useId();
  const after = useRef<HTMLDivElement>(null);

  async function send(helpful: boolean, extra: { reason?: FeedbackReason | null; comment?: string } = {}) {
    setSending(true);
    setFailed(false);
    try {
      const response = await fetch('/api/community/help/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, locale, helpful, reason: extra.reason ?? undefined, comment: extra.comment || undefined }),
      });
      // 429 means this reader already answered for this page today: thank them all the same.
      if (!response.ok && response.status !== 429) throw new Error(String(response.status));
      track('help_feedback', { page: slug, helpful: helpful ? 'yes' : 'no' });
      return true;
    } catch {
      setFailed(true);
      return false;
    } finally {
      setSending(false);
    }
  }

  function settle(next: typeof stage) {
    setStage(next);
    // Move focus to the new content so screen-reader users hear the result.
    window.setTimeout(() => after.current?.focus(), 0);
  }

  async function yes() {
    if (await send(true)) settle('thanks-yes');
  }

  async function submitWhy(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (await send(false, { reason, comment: comment.trim() })) settle('thanks-no');
  }

  return (
    <section className="ss-feedback brick" aria-labelledby={`${id}-q`}>
      {stage === 'ask' ? (
        <div className="ss-feedback-ask">
          <h2 id={`${id}-q`}>{page ? copy.pageQuestion : copy.question}</h2>
          <div className="ss-feedback-buttons">
            <button type="button" className="btn" onClick={yes} disabled={sending} aria-describedby={failed ? `${id}-err` : undefined}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M2 21h4V9H2v12Zm20-11a2 2 0 0 0-2-2h-6.3l1-4.6v-.3c0-.4-.2-.8-.4-1.1L13.2 1 6.6 7.6c-.4.4-.6.9-.6 1.4v10a2 2 0 0 0 2 2h9c.8 0 1.5-.5 1.8-1.2l3-7.1c.1-.2.2-.5.2-.7v-2Z" fill="currentColor" /></svg>
              {copy.yes}
            </button>
            <button type="button" className="btn ghost" onClick={() => settle('why')} disabled={sending}>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M22 3h-4v12h4V3ZM2 14a2 2 0 0 0 2 2h6.3l-1 4.6v.3c0 .4.2.8.4 1.1l1.1 1 6.6-6.6c.4-.4.6-.9.6-1.4V5a2 2 0 0 0-2-2H7c-.8 0-1.5.5-1.8 1.2l-3 7.1c-.1.2-.2.5-.2.7v2Z" fill="currentColor" /></svg>
              {copy.no}
            </button>
          </div>
        </div>
      ) : null}

      {stage === 'why' ? (
        <form className="ss-feedback-why" onSubmit={submitWhy} aria-labelledby={`${id}-why`}>
          <h2 id={`${id}-why`} tabIndex={-1} ref={after}>{copy.whyTitle}</h2>
          <fieldset className="ss-chips">
            <legend className="sr-only">{copy.whyTitle}</legend>
            {feedbackReasons.map((r) => (
              <label key={r} className="ss-chip">
                <input type="radio" name={`${id}-reason`} value={r} checked={reason === r} onChange={() => setReason(r)} />
                <span>{copy.reasons[r]}</span>
              </label>
            ))}
          </fieldset>
          <label className="ss-label" htmlFor={`${id}-comment`}>{copy.commentLabel}</label>
          <textarea id={`${id}-comment`} rows={3} maxLength={1000} value={comment} onChange={(e) => setComment(e.target.value)} aria-describedby={`${id}-hint`} />
          <p id={`${id}-hint`} className="ss-hint">{copy.commentHint}</p>
          <button type="submit" className="btn" disabled={sending}>{sending ? copy.sending : copy.send}</button>
        </form>
      ) : null}

      {stage === 'thanks-yes' || stage === 'thanks-no' ? (
        <div className="ss-feedback-done" tabIndex={-1} ref={after}>
          <output className="ss-thanks">{stage === 'thanks-yes' ? copy.thanksYes : copy.thanksNo}</output>
          {stage === 'thanks-no' ? (
            <>
              <p>{copy.escalate}</p>
              <div className="act">
                <a className="btn" href={contactHref}>{copy.contactAction}</a>
                <a className="btn ghost" href={askHref}>{copy.askAction}</a>
              </div>
            </>
          ) : null}
        </div>
      ) : null}

      {failed ? <p id={`${id}-err`} className="ss-error" role="alert">{copy.failed}</p> : null}
    </section>
  );
}
