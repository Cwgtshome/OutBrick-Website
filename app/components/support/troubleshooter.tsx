'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { supportCopies } from '../../../lib/support/copy/index';
import type { Locale } from '../../../lib/i18n/locales';
import { track } from '../../../lib/track';
import { useHydrated, useSearchParam } from '../netlify-form';

export type TroubleProblem = {
  id: string;
  title: string;
  intro: ReactNode[];
  steps: ReactNode[];
  topic: string;
  issue?: { title: string; href: string };
};

/**
 * The step-by-step troubleshooter (/support/troubleshooter). A player picks a problem and sees
 * one step at a time with "That fixed it" and "Still not working"; after the last step it hands
 * them to a person, with the problem they tried filled into the contact form (`?tried=`), so
 * nobody asks them to do it again.
 *
 * Without scripts (and before hydration) every problem and all of its steps are shown as plain
 * lists, so the page works as a guide on its own. `?problem=<id>` opens a problem.
 */
export function Troubleshooter({
  locale,
  problems,
  quickChecks,
  links,
}: {
  locale: Locale;
  problems: TroubleProblem[];
  quickChecks: ReactNode[];
  links: { contact: string; ask: string; bug: string; guide: string };
}) {
  const hydrated = useHydrated();
  const copy = supportCopies[locale].fix;
  const id = useId();
  const wanted = useSearchParam('problem');
  // undefined until the player chooses: until then, a problem named in the address is open.
  const [chosen, setProblem] = useState<TroubleProblem | null | undefined>(undefined);
  const problem = chosen === undefined ? (problems.find((p) => p.id === wanted) ?? null) : chosen;
  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState<'fixed' | 'still' | null>(null);
  const focusRef = useRef<HTMLHeadingElement>(null);
  const focusNext = useRef(false);

  useEffect(() => {
    if (focusNext.current) {
      focusNext.current = false;
      focusRef.current?.focus();
    }
  });

  const go = (fn: () => void) => {
    focusNext.current = true;
    fn();
  };

  function choose(p: TroubleProblem) {
    go(() => {
      setProblem(p);
      setStep(0);
      setOutcome(null);
    });
    const url = new URL(window.location.href);
    url.searchParams.set('problem', p.id);
    url.hash = '';
    window.history.replaceState(null, '', url);
    track('troubleshooter_start', { problem: p.id });
  }

  function reset() {
    go(() => {
      setProblem(null);
      setStep(0);
      setOutcome(null);
    });
    const url = new URL(window.location.href);
    url.searchParams.delete('problem');
    window.history.replaceState(null, '', url);
  }

  if (!hydrated) {
    // The whole guide, readable without scripts.
    return (
      <div className="ss-fix-static">
        {problems.map((p) => (
          <section key={p.id} id={p.id} className="brick ss-fix-static-problem" aria-labelledby={`${p.id}-h`}>
            <h2 id={`${p.id}-h`}>{p.title}</h2>
            {p.intro.map((t, i) => <p key={i}>{t}</p>)}
            {p.issue ? (
              <p className="ss-fix-issue"><a href={p.issue.href}>{copy.knownIssue}</a></p>
            ) : null}
            <ol className="hc-steps">
              {[...p.steps, ...quickChecks].map((s, i) => (
                <li key={i}><span className="n" aria-hidden="true">{i + 1}</span><span>{s}</span></li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    );
  }

  if (!problem) {
    return (
      <section className="ss-fix-choose" aria-labelledby={`${id}-choose`}>
        <h2 id={`${id}-choose`} tabIndex={-1} ref={focusRef}>{copy.chooseTitle}</h2>
        <p className="ss-hint">{copy.chooseHint}</p>
        <ul className="ss-fix-problems">
          {problems.map((p) => (
            <li key={p.id}>
              <button type="button" className="ss-fix-problem" onClick={() => choose(p)}>
                <span className="t">{p.title}</span>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  const steps = [...problem.steps.map((s) => ({ s, quick: false })), ...quickChecks.map((s) => ({ s, quick: true }))];
  const total = steps.length;
  const contactHref = `${links.contact}?topic=${encodeURIComponent(problem.topic)}&tried=${encodeURIComponent(problem.id)}`;

  return (
    <section className="ss-fix-run" aria-labelledby={`${id}-problem`}>
      <div className="ss-fix-top">
        <button type="button" className="ss-back" onClick={reset}>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {copy.another}
        </button>
      </div>
      <h2 id={`${id}-problem`} className="ss-fix-title">{problem.title}</h2>
      {problem.issue ? (
        <p className="ss-fix-issue">
          <a href={problem.issue.href}>{copy.knownIssue}</a>
        </p>
      ) : null}
      {problem.intro.length ? (
        <div className="ss-fix-intro">
          {problem.intro.map((t, i) => <p key={i}>{t}</p>)}
        </div>
      ) : null}

      {outcome === null ? (
        <div className="brick ss-fix-card">
          <div className="ss-progress" aria-hidden="true">
            {steps.map((_, i) => (
              <span key={i} className={i < step ? 'done' : i === step ? 'now' : ''} />
            ))}
          </div>
          <h3 tabIndex={-1} ref={focusRef} className="ss-step-of">
            {copy.stepOf(step + 1, total)}
            {steps[step].quick ? <span className="ss-quick"> · {copy.quickCheck}</span> : null}
          </h3>
          <p className="ss-step">{steps[step].s}</p>
          <div className="ss-fix-actions">
            <button
              type="button"
              className="btn"
              onClick={() => {
                go(() => setOutcome('fixed'));
                track('troubleshooter_fixed', { problem: problem.id, step: step + 1 });
              }}
            >
              {copy.worked}
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                if (step + 1 < total) go(() => setStep(step + 1));
                else {
                  go(() => setOutcome('still'));
                  track('troubleshooter_escalate', { problem: problem.id });
                }
              }}
            >
              {copy.next}
            </button>
            {step > 0 ? (
              <button type="button" className="ss-back" onClick={() => go(() => setStep(step - 1))}>
                {copy.back}
              </button>
            ) : null}
          </div>
        </div>
      ) : outcome === 'fixed' ? (
        <div className="brick ss-fix-card ss-fix-done">
          <h3 tabIndex={-1} ref={focusRef}>{copy.fixedTitle}</h3>
          <p>{copy.fixedText}</p>
          <button type="button" className="btn ghost" onClick={reset}>{copy.another}</button>
        </div>
      ) : (
        <div className="brick ss-fix-card ss-fix-still">
          <h3 tabIndex={-1} ref={focusRef}>{copy.stillTitle}</h3>
          <p>{copy.stillText}</p>
          <div className="act">
            <a className="btn" href={contactHref}>{copy.contactAction}</a>
            <a className="btn ghost" href={links.ask}>{copy.askAction}</a>
            <a className="btn ghost" href={links.bug}>{copy.bugAction}</a>
          </div>
        </div>
      )}

      <details className="ss-fix-all">
        <summary>{copy.allSteps}</summary>
        <ol className="hc-steps">
          {steps.map(({ s }, i) => (
            <li key={i}><span className="n" aria-hidden="true">{i + 1}</span><span>{s}</span></li>
          ))}
        </ol>
        <p><a href={`${links.guide}#${problem.id}`}>{copy.readGuide}</a></p>
      </details>
    </section>
  );
}
