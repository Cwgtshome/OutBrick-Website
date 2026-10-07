'use client';

/**
 * The site's forms: contact, the affiliate application, and job applications.
 *
 * They are Netlify Forms. Netlify reads the deployed HTML, finds every <form data-netlify>, and
 * from then on accepts a same-origin POST carrying that form's `form-name`, storing the
 * submission and emailing the team. Nothing leaves for a third party, which is why the site's
 * CSP (`form-action 'self'`, `connect-src 'self'`) needs no change.
 *
 * Every form is prerendered with all of its fields, so Netlify's build-time detection sees them,
 * and works with no script at all: a plain POST to the form's `action`, a thank-you page. Once
 * React hydrates, the same form validates inline (each message tied to its field with
 * aria-describedby, focus moved to the first problem) and posts in the background to "/",
 * replacing itself with a success panel instead of leaving the page.
 */

import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode, type SubmitEvent } from 'react';

import { formWords } from '../../lib/i18n/forms';
import { useLocale } from './locale-context';
import type { Locale } from '../../lib/i18n/locales';

type Errors = Record<string, string>;
type Status = 'idle' | 'sending' | 'sent' | 'failed';

export type FormApi = {
  errors: Errors;
  status: Status;
};

const subscribeToNothing = () => () => {};

/** False in the prerendered HTML and during hydration, true once the page is interactive. */
export function useHydrated(): boolean {
  return useSyncExternalStore(subscribeToNothing, () => true, () => false);
}

/**
 * One query-string parameter, read on the client only (the prerendered page has no query), so
 * the first render matches the HTML and the value arrives in the render straight after.
 */
export function useSearchParam(name: string): string | null {
  return useSyncExternalStore(
    subscribeToNothing,
    () => new URLSearchParams(window.location.search).get(name),
    () => null,
  );
}

type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

// `unknown`, not `Element`: @cloudflare/workers-types declares its own global `Element`.
const isField = (el: unknown): el is FieldElement =>
  (el instanceof HTMLInputElement || el instanceof HTMLSelectElement || el instanceof HTMLTextAreaElement) &&
  !!el.name &&
  el.type !== 'hidden' &&
  !el.disabled &&
  !el.closest('[hidden]');

/** The message for one invalid field, from its own `data-*` wording where it has some. */
function messageFor(el: FieldElement, locale: Locale): string {
  const t = formWords[locale];
  const v = el.validity;
  if (v.valid) return '';
  const label = el.dataset.label ?? t.field;
  if (v.valueMissing) {
    if (el.dataset.missing) return el.dataset.missing;
    if (el instanceof HTMLInputElement && el.type === 'checkbox') return t.checkbox;
    if (el instanceof HTMLSelectElement) return t.choose(label);
    return t.enter(label);
  }
  if (v.typeMismatch && el.type === 'email') return t.email;
  if (v.typeMismatch && el.type === 'url') return t.url;
  if (v.tooShort && 'minLength' in el) return t.short(el.minLength);
  if (v.tooLong && 'maxLength' in el) return t.long(el.maxLength);
  if (v.patternMismatch && el.dataset.pattern) return el.dataset.pattern;
  return t.check(label);
}

export function validateForm(form: HTMLFormElement, locale: Locale): { errors: Errors; first?: FieldElement } {
  const errors: Errors = {};
  let first: FieldElement | undefined;
  for (const el of Array.from(form.elements)) {
    if (!isField(el)) continue;
    const message = messageFor(el, locale);
    if (message && !errors[el.name]) {
      errors[el.name] = message;
      first ??= el;
    }
  }
  return { errors, first };
}

function encode(form: HTMLFormElement): URLSearchParams {
  const params = new URLSearchParams();
  for (const [key, value] of new FormData(form)) {
    if (typeof value === 'string') params.append(key, value);
  }
  return params;
}

export function NetlifyForm({
  name,
  action,
  label,
  className = '',
  children,
  success,
}: {
  /** The Netlify form name; also the hidden `form-name` field. */
  name: string;
  /** Where a no-script POST lands: a thank-you page. */
  action: string;
  /** Accessible name of the form. */
  label: string;
  className?: string;
  children: (api: FormApi) => ReactNode;
  /** What replaces the form once the background POST succeeds. */
  success: (values: URLSearchParams) => ReactNode;
}) {
  const locale = useLocale();
  const t = formWords[locale];
  // Native validation is the no-script fallback; once hydrated, the form validates itself.
  const enhanced = useHydrated();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [summary, setSummary] = useState('');
  const [sent, setSent] = useState<URLSearchParams | null>(null);
  const attempted = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  // Once the visitor has tried to submit, re-check each field as it changes or loses focus, so a
  // message clears the moment it is fixed. Listened to on the form (events bubble to it).
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const recheck = (event: Event) => {
      const target = event.target;
      if (!attempted.current || !isField(target)) return;
      // Deferred until React has handled the same event: a re-render from here, before a
      // controlled field's onChange has run, would put back its old value and eat the keystroke.
      window.setTimeout(() => {
        const message = messageFor(target, locale);
        setErrors((current) => {
          if ((current[target.name] ?? '') === message) return current;
          const next = { ...current };
          if (message) next[target.name] = message;
          else delete next[target.name];
          return next;
        });
      }, 0);
    };
    for (const type of ['input', 'change', 'focusout']) form.addEventListener(type, recheck);
    return () => {
      for (const type of ['input', 'change', 'focusout']) form.removeEventListener(type, recheck);
    };
  }, [sent, locale]);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    attempted.current = true;
    const result = validateForm(form, locale);
    setErrors(result.errors);
    const count = Object.keys(result.errors).length;
    if (count) {
      setSummary(t.summary(count));
      result.first?.focus();
      return;
    }
    setSummary('');
    setStatus('sending');
    const values = encode(form);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: values.toString(),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus('sent');
      setSent(values);
    } catch {
      setStatus('failed');
    }
  }

  if (sent) {
    return (
      <div className="obf-success" ref={successRef} tabIndex={-1}>
        {success(sent)}
      </div>
    );
  }

  return (
    <form
      name={name}
      method="POST"
      action={action}
      data-netlify="true"
      netlify-honeypot="bot-field"
      aria-label={label}
      className={`obf ${className}`}
      noValidate={enhanced}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <input type="hidden" name="form-name" value={name} />
      {/* The page language, so the acknowledgement email (emails/submission.ts) is written in it. */}
      <input type="hidden" name="locale" value={locale} />
      {/* The honeypot: people never see it; a bot that fills it in is dropped by Netlify. */}
      <div hidden>
        <label>
          {t.empty} <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="obf-note">{t.required}</p>
      {children({ errors, status })}
      <p className="obf-alert" role="alert">
        {summary}
        {status === 'failed' ? (
          <>
            {t.failed}
          </>
        ) : null}
      </p>
    </form>
  );
}

// ---------------------------------------------------------------------------------------
// Fields

type Common = {
  name: string;
  label: string;
  /** How messages name the field: "your email address". Defaults to the label, lower-cased. */
  spoken?: string;
  hint?: ReactNode;
  optional?: boolean;
  error?: string;
  /** Wording for an empty required field, replacing "Enter …". */
  missing?: string;
  className?: string;
};

function useIds(name: string) {
  const base = `f${useId().replace(/[^A-Za-z0-9_-]/g, '')}-${name}`;
  return { id: base, hint: `${base}-hint`, error: `${base}-error` };
}

function describedBy(ids: ReturnType<typeof useIds>, hint: unknown, error: unknown) {
  const list = [hint ? ids.hint : '', error ? ids.error : ''].filter(Boolean).join(' ');
  return list || undefined;
}

function Label({ htmlFor, label, optional }: { htmlFor: string; label: string; optional?: boolean }) {
  const t = formWords[useLocale()];
  return (
    <label htmlFor={htmlFor}>
      {label}
      {optional ? <span className="obf-optional"> ({t.optional})</span> : null}
    </label>
  );
}

function Extras({ ids, hint, error }: { ids: ReturnType<typeof useIds>; hint?: ReactNode; error?: string }) {
  return (
    <>
      {hint ? <p className="obf-hint" id={ids.hint}>{hint}</p> : null}
      {error ? <p className="obf-error" id={ids.error}>{error}</p> : null}
    </>
  );
}

export function TextField({
  name,
  label,
  spoken,
  hint,
  optional,
  error,
  missing,
  className = '',
  type = 'text',
  autoComplete,
  inputMode,
  maxLength,
  minLength,
  pattern,
  patternMessage,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  spellCheck,
  autoCapitalize,
}: Common & {
  type?: 'text' | 'email' | 'url';
  autoComplete?: string;
  inputMode?: 'text' | 'email' | 'url';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  patternMessage?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  spellCheck?: boolean;
  autoCapitalize?: string;
}) {
  const ids = useIds(name);
  return (
    <div className={`obf-field ${className}`} data-invalid={error ? '' : undefined}>
      <Label htmlFor={ids.id} label={label} optional={optional} />
      <input
        id={ids.id}
        name={name}
        type={type}
        required={!optional}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        placeholder={placeholder}
        spellCheck={spellCheck}
        autoCapitalize={autoCapitalize}
        {...(value !== undefined ? { value } : { defaultValue })}
        onChange={onValueChange ? (event) => onValueChange(event.target.value) : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(ids, hint, error)}
        data-label={spoken ?? label.toLowerCase()}
        data-missing={missing}
        data-pattern={patternMessage}
      />
      <Extras ids={ids} hint={hint} error={error} />
    </div>
  );
}

export function TextArea({
  name,
  label,
  spoken,
  hint,
  optional,
  error,
  missing,
  className = '',
  rows = 6,
  maxLength,
  minLength,
}: Common & { rows?: number; maxLength?: number; minLength?: number }) {
  const ids = useIds(name);
  return (
    <div className={`obf-field ${className}`} data-invalid={error ? '' : undefined}>
      <Label htmlFor={ids.id} label={label} optional={optional} />
      <textarea
        id={ids.id}
        name={name}
        rows={rows}
        required={!optional}
        maxLength={maxLength}
        minLength={minLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(ids, hint, error)}
        data-label={spoken ?? label.toLowerCase()}
        data-missing={missing}
      />
      <Extras ids={ids} hint={hint} error={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  spoken,
  hint,
  optional,
  error,
  missing,
  className = '',
  options,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  autoComplete,
}: Common & {
  options: { value: string; label: string }[];
  /** A first, empty choice ("Choose one"); required selects then start unanswered. */
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  autoComplete?: string;
}) {
  const ids = useIds(name);
  return (
    <div className={`obf-field ${className}`} data-invalid={error ? '' : undefined}>
      <Label htmlFor={ids.id} label={label} optional={optional} />
      <select
        id={ids.id}
        name={name}
        required={!optional}
        autoComplete={autoComplete}
        {...(value !== undefined ? { value } : { defaultValue: defaultValue ?? '' })}
        onChange={onValueChange ? (event) => onValueChange(event.target.value) : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(ids, hint, error)}
        data-label={spoken ?? label.toLowerCase()}
        data-missing={missing}
      >
        {placeholder !== undefined ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <Extras ids={ids} hint={hint} error={error} />
    </div>
  );
}

/** The consent tick every form ends with, linking the privacy policy's section on forms. */
export function ConsentField({ error, children }: { error?: string; children: ReactNode }) {
  const ids = useIds('consent');
  const t = formWords[useLocale()];
  return (
    <div className="obf-field obf-check" data-invalid={error ? '' : undefined}>
      <input
        id={ids.id}
        name="consent"
        type="checkbox"
        value="yes"
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? ids.error : undefined}
        data-missing={t.consent}
      />
      <label htmlFor={ids.id}>{children}</label>
      {error ? <p className="obf-error" id={ids.error}>{error}</p> : null}
    </div>
  );
}

export function SubmitRow({ status, label, next }: { status: Status; label: string; next: ReactNode }) {
  const t = formWords[useLocale()];
  return (
    <div className="obf-submit">
      <button className="obf-btn" type="submit" disabled={status === 'sending'} aria-disabled={status === 'sending' || undefined}>
        {status === 'sending' ? t.sending : label}
      </button>
      <p className="obf-next">{next}</p>
    </div>
  );
}
