'use client';

/**
 * The composer: a plain, labelled textarea for Markdown (no rich-text editor fighting the screen
 * reader), Write and Preview tabs (a real tablist: arrow keys, Home and End move between them),
 * a short formatting-help disclosure, and a character count that stays quiet until the limit is
 * close, then says how much room is left once per step.
 *
 * Two helpers sit on the textarea:
 *  - Typing @ and a few letters opens a listbox of members from GET /members/suggest that the
 *    textarea controls (aria-autocomplete=list, aria-controls, aria-activedescendant): up and down
 *    to choose, Enter or Tab to insert, Escape to close; the count is announced politely. A
 *    textarea cannot take role=combobox (ARIA in HTML allows it only textbox), so this is the
 *    textbox form of the combobox pattern; the attributes are only there while the list is open.
 *  - "Add an image" (when the deploy has uploads on) asks for the file and for its description
 *    together, shrinks large photos on the device with a canvas, uploads, and inserts
 *    ![description](upload:<id>) at the caret.
 */

import { useEffect, useId, useRef, useState, type KeyboardEvent, type RefObject } from 'react';
import type { PublicMember } from '../../../lib/community/contract';
import { api, uploadImage, type ApiFailure } from './api';
import { errorText, useApp } from './core';

export const POST_MAX = 20000;

/** The thresholds the count is announced at, in characters left. */
const steps = [500, 100, 25, 0];

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;
const MAX_SIDE = 4096;

class ShrinkError extends Error {
  code: string;
  constructor(code: string) {
    super(code);
    this.code = code;
  }
}

/** Make a photo fit under 5 MB and 4096 px a side, on the device, before it is sent. */
async function shrink(file: File): Promise<Blob> {
  if (/hei[cf]/i.test(file.type) || /\.hei[cf]$/i.test(file.name)) throw new ShrinkError('heic_unsupported');
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) throw new ShrinkError('unsupported_type');
  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new ShrinkError('bad_image');
  }
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height));
  if (scale === 1 && file.size <= MAX_UPLOAD_BYTES) return file;
  let width = Math.round(bitmap.width * scale);
  let height = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) throw new ShrinkError('bad_image');
  for (let attempt = 0; attempt < 7; attempt += 1) {
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.86));
    if (blob && blob.size <= MAX_UPLOAD_BYTES) return blob;
    width = Math.round(width * 0.8);
    height = Math.round(height * 0.8);
  }
  throw new ShrinkError('too_large');
}

/** The @mention being typed just before the caret, if any. */
function mentionAt(text: string, caret: number): { start: number; query: string } | null {
  const before = text.slice(0, caret);
  const match = /(^|[\s(])@([^\s@][^\n@]{0,29})$/.exec(before);
  if (!match) return null;
  const query = match[2];
  if (/\s{2}/.test(query) || query.split(' ').length > 3) return null;
  return { start: caret - query.length - 1, query };
}

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
  mentions = false,
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
  /** Offer @mention suggestions (signed-in composers). */
  mentions?: boolean;
}) {
  const { copy, fx, n, features, session } = useApp();
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [preview, setPreview] = useState<{ html: string | null; error: string | null; loading: boolean; problems: string[] }>({ html: null, error: null, loading: false, problems: [] });
  const [spoken, setSpoken] = useState('');
  const lastStep = useRef<number | null>(null);
  const writeTab = useRef<HTMLButtonElement>(null);
  const previewTab = useRef<HTMLButtonElement>(null);
  const ownRef = useRef<HTMLTextAreaElement>(null);
  const area = textareaRef ?? ownRef;
  const previewRun = useRef(0);
  const left = max - value.length;

  // ---- @mentions
  const [mention, setMention] = useState<{ start: number; query: string } | null>(null);
  const [options, setOptions] = useState<PublicMember[]>([]);
  const [active, setActive] = useState(0);
  const listId = `${id}-mentions`;
  const open = !!mention && options.length > 0;
  useEffect(() => {
    if (!mention) return;
    let live = true;
    const timer = window.setTimeout(() => {
      api.suggest(mention.query).then(
        (r) => {
          if (!live) return;
          setOptions(r.members.slice(0, 8));
          setActive(0);
          setSpoken(r.members.length ? fx.mentions.found(r.members.length, n(r.members.length)) : fx.mentions.none);
        },
        () => undefined,
      );
    }, 200);
    return () => {
      live = false;
      window.clearTimeout(timer);
    };
  }, [mention, fx, n]);

  const insertMention = (member: PublicMember) => {
    if (!mention) return;
    const text = `@${member.displayName} `;
    const caret = mention.start + 1 + mention.query.length;
    const next = value.slice(0, mention.start) + text + value.slice(caret);
    const at = mention.start + text.length;
    onChange(next);
    setMention(null);
    setOptions([]);
    window.setTimeout(() => {
      const el = area.current;
      if (el) {
        el.focus();
        el.setSelectionRange(at, at);
      }
    }, 0);
  };

  /** Each keystroke: announce the room left only when it crosses the next step near the limit. */
  const change = (next: string, caret: number) => {
    const remaining = max - next.length;
    const step = steps.filter((s) => remaining <= s).at(-1) ?? null;
    if (step !== lastStep.current) {
      if (step !== null && (lastStep.current === null || step < lastStep.current)) setSpoken(remaining < 0 ? copy.composer.over(-remaining, n(-remaining)) : copy.composer.left(remaining, n(remaining)));
      lastStep.current = step;
    }
    if (mentions && session?.member) {
      const found = mentionAt(next, caret);
      if (!found) {
        setMention(null);
        setOptions([]);
      } else if (!mention || found.query !== mention.query) setMention(found);
    }
    onChange(next);
  };

  const onAreaKey = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!open) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((a) => (a + (event.key === 'ArrowDown' ? 1 : options.length - 1)) % options.length);
    } else if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      insertMention(options[active]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setMention(null);
      setOptions([]);
    }
  };

  // ---- Write / Preview
  /** Show a tab; the preview is rendered by the server (POST /preview), exactly as a post would be. */
  const show = (next: 'write' | 'preview', focus = false) => {
    setTab(next);
    if (focus) (next === 'write' ? writeTab : previewTab).current?.focus();
    if (next !== 'preview') return;
    const run = ++previewRun.current;
    if (!value.trim()) {
      setPreview({ html: null, error: null, loading: false, problems: [] });
      return;
    }
    setPreview({ html: null, error: null, loading: true, problems: [] });
    api.preview(value).then(
      (result) => {
        if (run === previewRun.current) setPreview({ html: result.html, error: null, loading: false, problems: result.problems ?? [] });
      },
      (failure: unknown) => {
        if (run === previewRun.current) setPreview({ html: null, error: errorText(copy, failure as ApiFailure), loading: false, problems: [] });
      },
    );
  };
  const onTabKey = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'Home') show('write', true);
      else if (event.key === 'End') show('preview', true);
      else show(tab === 'write' ? 'preview' : 'write', true);
    }
  };

  const insertAtCaret = (text: string) => {
    const el = area.current;
    const at = el ? el.selectionStart : value.length;
    const before = value.slice(0, at);
    const pad = before && !before.endsWith('\n') ? '\n\n' : '';
    onChange(`${before}${pad}${text}\n\n${value.slice(at)}`);
    window.setTimeout(() => {
      el?.focus();
      const pos = at + pad.length + text.length + 2;
      el?.setSelectionRange(pos, pos);
    }, 0);
  };

  const described = [`${id}-hint`, error ? `${id}-error` : '', open ? `${id}-mention-help` : ''].filter(Boolean).join(' ');
  // A textarea may carry no role but textbox (ARIA in HTML), so the suggestions use the textbox
  // form of the pattern: aria-autocomplete, aria-controls and aria-activedescendant, all allowed on it.
  const comboProps = open ? { 'aria-controls': listId, 'aria-autocomplete': 'list' as const, 'aria-activedescendant': `${listId}-${active}` } : {};
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
        <button ref={writeTab} type="button" role="tab" id={`${id}-tab-write`} aria-selected={tab === 'write'} aria-controls={`${id}-panel-write`} tabIndex={tab === 'write' ? 0 : -1} onClick={() => show('write')} onKeyDown={onTabKey}>
          {copy.composer.write}
        </button>
        <button ref={previewTab} type="button" role="tab" id={`${id}-tab-preview`} aria-selected={tab === 'preview'} aria-controls={`${id}-panel-preview`} tabIndex={tab === 'preview' ? 0 : -1} onClick={() => show('preview')} onKeyDown={onTabKey}>
          {copy.composer.preview}
        </button>
      </div>
      <div role="tabpanel" id={`${id}-panel-write`} aria-labelledby={`${id}-tab-write`} hidden={tab !== 'write'} className="cm-write">
        <textarea
          ref={area}
          id={id}
          name="body"
          rows={rows}
          value={value}
          lang={lang}
          spellCheck
          onChange={(event) => change(event.target.value, event.target.selectionStart)}
          onKeyDown={onAreaKey}
          onBlur={() => window.setTimeout(() => setOptions([]), 150)}
          aria-invalid={error || left < 0 ? true : undefined}
          aria-describedby={described}
          {...comboProps}
        />
        {open ? (
          <>
            <p className="sr-only" id={`${id}-mention-help`}>
              {fx.mentions.instructions}
            </p>
            {/* The ARIA combobox pattern: a listbox the textarea controls; focus never leaves the textarea, keys are handled there (onAreaKey). */}
            {/* oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role, jsx-a11y/prefer-tag-over-role */}
            <ul className="cm-mentions" role="listbox" id={listId} aria-label={fx.mentions.listLabel}>
              {options.map((m, i) => (
                // oxlint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role, jsx-a11y/prefer-tag-over-role, jsx-a11y/click-events-have-key-events
                <li key={m.id} id={`${listId}-${i}`} role="option" aria-selected={i === active} className={i === active ? 'is-active' : undefined} onMouseDown={(e) => e.preventDefault()} onClick={() => insertMention(m)}>
                  {m.displayName}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
      <div role="tabpanel" id={`${id}-panel-preview`} aria-labelledby={`${id}-tab-preview`} hidden={tab !== 'preview'} tabIndex={0} className="cm-preview">
        {preview.loading ? (
          <output aria-live="polite">{copy.composer.previewLoading}</output>
        ) : preview.error ? (
          <p className="cm-error">{preview.error}</p>
        ) : preview.html ? (
          <>
            {preview.problems.length ? (
              <ul className="cm-error-list">
                {preview.problems.map((p) => (
                  <li key={p} className="cm-error">
                    {(fx.upload.problems as Record<string, string>)[p] ?? p}
                  </li>
                ))}
              </ul>
            ) : null}
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
      {features.uploads && session?.member ? <ImageUploader composerId={id} onInsert={insertAtCaret} /> : null}
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

/** "Add an image": the file and its description, asked for together. */
function ImageUploader({ composerId, onInsert }: { composerId: string; onInsert: (markdown: string) => void }) {
  const { fx, announce } = useApp();
  const [open, setOpen] = useState(false);
  const [alt, setAlt] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState<{ file?: string; alt?: string }>({});
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const altRef = useRef<HTMLTextAreaElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const id = useId();
  const fileId = `${composerId}-img`;
  const altId = `${composerId}-img-alt`;

  const insert = async () => {
    const file = fileRef.current?.files?.[0];
    const description = alt.replace(/[[\]\n\r]+/g, ' ').trim();
    const found: { file?: string; alt?: string } = {};
    if (!file) found.file = fx.upload.fileMissing;
    if (!description) found.alt = fx.upload.altMissing;
    setErrors(found);
    if (found.file) return fileRef.current?.focus();
    if (found.alt) return altRef.current?.focus();
    setBusy(true);
    try {
      setStatus(fx.upload.preparing);
      const blob = await shrink(file as File);
      setStatus(fx.upload.uploading);
      const { upload } = await uploadImage(blob);
      onInsert(`![${description}](upload:${upload.id})`);
      announce(fx.upload.inserted);
      setAlt('');
      if (fileRef.current) fileRef.current.value = '';
      setOpen(false);
      setStatus('');
    } catch (failure) {
      const code = failure instanceof ShrinkError ? failure.code : ((failure as ApiFailure).body?.fields?.file ?? (failure as ApiFailure).code);
      setErrors({ file: (fx.upload.errors as Record<string, string>)[code] ?? fx.upload.errors.bad_image });
      setStatus('');
      fileRef.current?.focus();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="cm-upload">
      <button
        ref={toggle}
        type="button"
        className="cm-act"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => {
          setOpen(!open);
          if (!open) window.setTimeout(() => fileRef.current?.focus(), 0);
        }}
      >
        {fx.upload.button}
      </button>
      <fieldset className="cm-fieldset cm-upload-panel" id={`${id}-panel`} hidden={!open}>
        <legend>{fx.upload.legend}</legend>
        <div className="cm-field" data-invalid={errors.file ? '' : undefined}>
          <label htmlFor={fileId}>{fx.upload.file}</label>
          <p className="cm-hint" id={`${fileId}-hint`}>
            {fx.upload.fileHint}
          </p>
          {errors.file ? (
            <p className="cm-error" id={`${fileId}-error`}>
              {errors.file}
            </p>
          ) : null}
          <input ref={fileRef} id={fileId} type="file" accept="image/jpeg,image/png,image/webp" aria-invalid={errors.file ? true : undefined} aria-describedby={[`${fileId}-hint`, errors.file ? `${fileId}-error` : ''].filter(Boolean).join(' ')} />
        </div>
        <div className="cm-field" data-invalid={errors.alt ? '' : undefined}>
          <label htmlFor={altId}>{fx.upload.alt}</label>
          <p className="cm-hint" id={`${altId}-hint`}>
            {fx.upload.altHint}
          </p>
          {errors.alt ? (
            <p className="cm-error" id={`${altId}-error`}>
              {errors.alt}
            </p>
          ) : null}
          <textarea ref={altRef} id={altId} rows={2} maxLength={300} value={alt} onChange={(e) => setAlt(e.target.value)} aria-invalid={errors.alt ? true : undefined} aria-describedby={[`${altId}-hint`, errors.alt ? `${altId}-error` : ''].filter(Boolean).join(' ')} />
        </div>
        <output className="cm-hint" aria-live="polite">
          {status}
        </output>
        <div className="cm-row">
          <button type="button" className="btn" disabled={busy} onClick={() => void insert()}>
            {fx.upload.insert}
          </button>
          <button
            type="button"
            className="cm-act"
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
          >
            {fx.upload.cancel}
          </button>
        </div>
      </fieldset>
    </div>
  );
}
