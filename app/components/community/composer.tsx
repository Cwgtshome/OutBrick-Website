'use client';

/**
 * The composer: a plain, labelled textarea for Markdown (no rich-text editor fighting the screen
 * reader), Write and Preview tabs (a real tablist: arrow keys, Home and End move between them),
 * a short formatting-help disclosure, and a character count that stays quiet until the limit is
 * close, then says how much room is left once per step.
 */

import { useRef, useState, type KeyboardEvent, type RefObject } from 'react';
import { api, type ApiFailure } from './api';
import { errorText, useApp } from './core';

export const POST_MAX = 20000;

/** The thresholds the count is announced at, in characters left. */
const steps = [500, 100, 25, 0];

export function Composer({
  id,
  label,
  value,
  onChange,
  error,
  max = POST_MAX,
  lang,
  rows = 8,
  textareaRef,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  max?: number;
  lang?: string;
  rows?: number;
  textareaRef?: RefObject<HTMLTextAreaElement | null>;
  hint?: string;
}) {
  const { copy, n } = useApp();
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [preview, setPreview] = useState<{ html: string | null; error: string | null; loading: boolean }>({ html: null, error: null, loading: false });
  const [spoken, setSpoken] = useState('');
  const lastStep = useRef<number | null>(null);
  const writeTab = useRef<HTMLButtonElement>(null);
  const previewTab = useRef<HTMLButtonElement>(null);

  const left = max - value.length;
  const previewRun = useRef(0);

  /** Each keystroke: announce the room left only when it crosses the next step near the limit. */
  const change = (next: string) => {
    const remaining = max - next.length;
    const step = steps.filter((s) => remaining <= s).at(-1) ?? null;
    if (step !== lastStep.current) {
      if (step !== null && (lastStep.current === null || step < lastStep.current)) setSpoken(remaining < 0 ? copy.composer.over(-remaining, n(-remaining)) : copy.composer.left(remaining, n(remaining)));
      lastStep.current = step;
    }
    onChange(next);
  };

  /** Show a tab; the preview is rendered by the server (POST /preview), exactly as a post would be. */
  const show = (next: 'write' | 'preview', focus = false) => {
    setTab(next);
    if (focus) (next === 'write' ? writeTab : previewTab).current?.focus();
    if (next !== 'preview') return;
    const run = ++previewRun.current;
    if (!value.trim()) {
      setPreview({ html: null, error: null, loading: false });
      return;
    }
    setPreview({ html: null, error: null, loading: true });
    api.preview(value).then(
      (result) => {
        if (run === previewRun.current) setPreview({ html: result.html, error: null, loading: false });
      },
      (failure: unknown) => {
        if (run === previewRun.current) setPreview({ html: null, error: errorText(copy, failure as ApiFailure), loading: false });
      },
    );
  };
  const choose = (next: 'write' | 'preview') => show(next, true);
  const onKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'Home') choose('write');
      else if (event.key === 'End') choose('preview');
      else choose(tab === 'write' ? 'preview' : 'write');
    }
  };

  const described = [`${id}-hint`, error ? `${id}-error` : ''].filter(Boolean).join(' ');
  return (
    <div className="cm-composer" data-invalid={error ? '' : undefined}>
      <label className="cm-composer-label" htmlFor={id}>
        {label}
      </label>
      <p className="cm-hint" id={`${id}-hint`}>
        {hint ?? copy.composer.hint}
      </p>
      {error ? (
        <p className="cm-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
      <div className="cm-tabs" role="tablist" aria-label={copy.composer.tabsLabel}>
        <button
          ref={writeTab}
          type="button"
          role="tab"
          id={`${id}-tab-write`}
          aria-selected={tab === 'write'}
          aria-controls={`${id}-panel-write`}
          tabIndex={tab === 'write' ? 0 : -1}
          onClick={() => show('write')}
          onKeyDown={onKey}
        >
          {copy.composer.write}
        </button>
        <button
          ref={previewTab}
          type="button"
          role="tab"
          id={`${id}-tab-preview`}
          aria-selected={tab === 'preview'}
          aria-controls={`${id}-panel-preview`}
          tabIndex={tab === 'preview' ? 0 : -1}
          onClick={() => show('preview')}
          onKeyDown={onKey}
        >
          {copy.composer.preview}
        </button>
      </div>
      <div role="tabpanel" id={`${id}-panel-write`} aria-labelledby={`${id}-tab-write`} hidden={tab !== 'write'}>
        <textarea
          ref={textareaRef}
          id={id}
          name="body"
          rows={rows}
          value={value}
          lang={lang}
          spellCheck
          onChange={(event) => change(event.target.value)}
          aria-invalid={error || left < 0 ? true : undefined}
          aria-describedby={described}
        />
      </div>
      <div role="tabpanel" id={`${id}-panel-preview`} aria-labelledby={`${id}-tab-preview`} hidden={tab !== 'preview'} tabIndex={0} className="cm-preview">
        {preview.loading ? (
          <output aria-live="polite">{copy.composer.previewLoading}</output>
        ) : preview.error ? (
          <p className="cm-error">{preview.error}</p>
        ) : preview.html ? (
          <>
            <p className="sr-only">{copy.composer.previewHeading}</p>
            <div className="cm-post-body" lang={lang} dangerouslySetInnerHTML={{ __html: preview.html }} />
          </>
        ) : (
          <p>{copy.composer.previewEmpty}</p>
        )}
      </div>
      <p className={`cm-charcount ${left < 0 ? 'is-over' : ''}`} id={`${id}-count`}>
        {left < 0 ? copy.composer.over(-left, n(-left)) : copy.composer.count(n(value.length), n(max))}
      </p>
      <output className="sr-only" aria-live="polite">
        {spoken}
      </output>
      <details className="cm-help">
        <summary>{copy.composer.help}</summary>
        <dl>
          {copy.composer.helpItems.map(([syntax, meaning]) => (
            <div key={syntax}>
              <dt>
                <code>{syntax}</code>
              </dt>
              <dd>{meaning}</dd>
            </div>
          ))}
        </dl>
      </details>
    </div>
  );
}
