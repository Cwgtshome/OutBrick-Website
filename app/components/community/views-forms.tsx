'use client';

/**
 * Writing and the member's own pages: starting a thread (with the bug form), signing in,
 * choosing a display name, settings, notifications and the moderators' queue.
 *
 * Every form follows one error pattern: a summary at the top, headed "There is a problem", that
 * takes focus and links to each field; each field marked aria-invalid and described by its
 * own message. Success moves focus to what was made and says so in the polite live region.
 */

import { useEffect, useId, useRef, useState, type SubmitEvent, type ReactNode } from 'react';
import { dayDate } from '../../../lib/community/format';
import type { BadgeKey, AssistiveTech, CommunityLocale, ModQueueItem, ModReport, Provider, SelfMember } from '../../../lib/community/contract';
import { bugLevelRange, communityLocales, threadPath } from '../../../lib/community/contract';
import { categoryWords } from '../../../lib/i18n/community';
import { localeNames } from '../../../lib/i18n/locales';
import { api, ApiFailure, authStart, exportUrl } from './api';
import { Composer } from './composer';
import { PasskeySettings, PasskeySignIn, PollEditor, SimilarIdeas, emptyPoll, type PollDraft } from './views-fx';
import { ErrorNotice, ErrorSummary, Field, Honeypot, Member, Pagination, Pending, Time, View, errorText, fieldMessages, safeReturn, useApp, useLoad, type FieldErrors, type Route } from './core';

const failureOf = (error: unknown) => (error instanceof ApiFailure ? error : new ApiFailure(0, { code: 'unknown', message: String(error) }));

/** Focus the error summary on the next frame, once it has rendered. */
function useSummary() {
  const ref = useRef<HTMLDivElement>(null);
  return { ref, focus: () => window.setTimeout(() => ref.current?.focus(), 0) };
}

function SignInFirst({ title, crumbLabel, note }: { title: string; crumbLabel: string; note?: string }) {
  const { copy, path, here } = useApp();
  return (
    <View title={title} crumbs={[{ href: path(), label: copy.nav.label }, { label: crumbLabel }]} ready>
      <section className="cm-section">
        <p>{note ?? copy.thread.signInToReplyNote}</p>
        <p>
          <a className="btn" href={path(`/signin?returnTo=${encodeURIComponent(here)}`)}>
            {copy.nav.signIn}
          </a>
        </p>
      </section>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// A new thread

const assistiveOptions: AssistiveTech[] = ['voiceover', 'voice_control', 'switch_control', 'zoom', 'larger_text', 'colour_filters', 'none'];

/** The bug details the app put in the address (lib/community/contract.ts, bugDeepLinkParams). */
function readDeepLink(): { fromApp: boolean; device?: string; os?: string; app?: string; assistive?: AssistiveTech[]; level?: number; lang?: CommunityLocale } {
  const q = new URLSearchParams(window.location.search);
  const text = (key: string, max: number) => {
    const v = (q.get(key) ?? '').trim();
    return v ? v.slice(0, max) : undefined;
  };
  const assistive = (q.get('assistive') ?? '')
    .split(',')
    .map((a) => a.trim())
    .filter((a): a is AssistiveTech => (assistiveOptions as string[]).includes(a));
  const levelRaw = Number(q.get('level'));
  const level = Number.isInteger(levelRaw) && levelRaw >= bugLevelRange.min && levelRaw <= bugLevelRange.max ? levelRaw : undefined;
  const langRaw = q.get('lang') ?? '';
  const lang = (communityLocales as readonly string[]).includes(langRaw) ? (langRaw as CommunityLocale) : undefined;
  const found = { device: text('device', 80), os: text('os', 20), app: text('app', 20), assistive: assistive.length ? assistive : undefined, level, lang };
  return { fromApp: Object.entries(found).some(([k, v]) => k !== 'lang' && v !== undefined), ...found };
}

export function NewThreadView({ route }: { route: Extract<Route, { name: 'new' }> }) {
  const { copy, fx, locale, path, session, navigate, announce } = useApp();
  const cats = useLoad('categories', () => api.categories());
  const id = useId();
  // The app's "Report a bug" opens this page with the details filled in (bugDeepLinkParams).
  const [prefill] = useState(() => readDeepLink());
  const [category, setCategory] = useState(route.category);
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState<CommunityLocale>(prefill.lang ?? locale);
  const [body, setBody] = useState('');
  const [bug, setBug] = useState({ device: prefill.device ?? '', osVersion: prefill.os ?? '', appVersion: prefill.app ?? '', steps: '', expected: '', actual: '', level: prefill.level ? String(prefill.level) : '' });
  const [assistive, setAssistive] = useState<AssistiveTech[]>(prefill.assistive ?? []);
  const [poll, setPoll] = useState<PollDraft | null>(null);
  const [startedAt] = useState(() => Date.now());
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [busy, setBusy] = useState(false);
  const summary = useSummary();

  if (!session) return null;
  if (!session.member) return <SignInFirst title={copy.newThread.title} crumbLabel={copy.newThread.title} note={copy.newThread.signIn} />;
  if (!cats.data) return <Pending load={cats} title={copy.newThread.title} />;

  const member = session.member;
  const isTeam = ['team', 'admin'].includes(member.role);
  const available = cats.data.categories.filter((c) => !c.teamOnlyThreads || isTeam);
  const chosen = available.find((c) => c.slug === category);
  const isBug = chosen?.kind === 'bugs';
  const isIdea = chosen?.kind === 'ideas';
  const ids: Record<string, string> = {
    'bug.level': `${id}-level`,
    'poll.question': `${id}-poll-q`,
    'poll.options': `${id}-poll-o`,
    'poll.options.0': `${id}-poll-o`,
    'poll.options.1': `${id}-poll-o-1`,
    'poll.options.2': `${id}-poll-o-2`,
    'poll.options.3': `${id}-poll-o-3`,
    'poll.options.4': `${id}-poll-o-4`,
    'poll.options.5': `${id}-poll-o-5`,
    'poll.options.6': `${id}-poll-o-6`,
    'poll.options.7': `${id}-poll-o-7`,
    'poll.closesAt': `${id}-poll-c`,
    categorySlug: `${id}-cat`,
    title: `${id}-title`,
    language: `${id}-lang`,
    body: `${id}-body`,
    'bug.device': `${id}-device`,
    'bug.osVersion': `${id}-os`,
    'bug.appVersion': `${id}-app`,
    'bug.assistive': `${id}-at-voiceover`,
    'bug.steps': `${id}-steps`,
    'bug.expected': `${id}-expected`,
    'bug.actual': `${id}-actual`,
  };

  const validate = (): FieldErrors => {
    const out: FieldErrors = {};
    const f = copy.form.fields;
    const c = copy.form.codes;
    if (!chosen) out.categorySlug = c.choose(f.categorySlug);
    if (title.trim().length < 4) out.title = title.trim() ? c.too_short(f.title) : c.required(f.title);
    if (title.trim().length > 140) out.title = c.too_long(f.title);
    if (!body.trim()) out.body = c.required(f.body);
    if (isBug) {
      const need: [keyof typeof bug, string, number][] = [
        ['device', f.device, 2],
        ['osVersion', f.osVersion, 1],
        ['appVersion', f.appVersion, 1],
        ['steps', f.steps, 5],
        ['expected', f.expected, 2],
        ['actual', f.actual, 2],
      ];
      for (const [key, label, min] of need) {
        const v = bug[key].trim();
        if (!v) out[`bug.${key}`] = c.required(label);
        else if (v.length < min) out[`bug.${key}`] = c.too_short(label);
      }
    }
    if (isBug && bug.level.trim() && !(Number.isInteger(Number(bug.level)) && Number(bug.level) >= bugLevelRange.min && Number(bug.level) <= bugLevelRange.max)) out['bug.level'] = c.invalid(fx.deepLink.level);
    if (poll) {
      if (!poll.question.trim()) out['poll.question'] = c.required(fx.poll.question);
      const filled = poll.options.map((o) => o.trim());
      filled.forEach((o, i) => {
        if (!o) out[`poll.options.${i}`] = c.required(fx.poll.option(String(i + 1)));
        else if (filled.findIndex((x) => x.toLowerCase() === o.toLowerCase()) !== i) out[`poll.options.${i}`] = fx.poll.fieldCodes.duplicate;
      });
    }
    return out;
  };

  const pollRequest = () =>
    poll
      ? {
          question: poll.question.trim(),
          options: poll.options.map((o) => o.trim()),
          multiple: poll.multiple,
          // The end of the chosen day, where the member is.
          closesAt: poll.closesOn ? new Date(`${poll.closesOn}T23:59:00`).toISOString() : null,
        }
      : undefined;

  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGeneral('');
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      summary.focus();
      return;
    }
    setBusy(true);
    try {
      const result = await api.newThread({
        categorySlug: category,
        title: title.trim(),
        body,
        language,
        bug: isBug ? { device: bug.device, osVersion: bug.osVersion, appVersion: bug.appVersion, steps: bug.steps, expected: bug.expected, actual: bug.actual, assistive, ...(bug.level.trim() ? { level: Number(bug.level) } : {}) } : undefined,
        poll: pollRequest(),
        website: website || undefined,
        startedAt,
      });
      announce(copy.newThread.posted);
      if (result.thread.id !== 0) navigate(threadPath(locale, result.thread));
      else {
        setTitle('');
        setBody('');
      }
    } catch (error) {
      const f = failureOf(error);
      const fields = fieldMessages(copy, f.body.fields, fx);
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      summary.focus();
    } finally {
      setBusy(false);
    }
  };

  const bugField = (key: keyof typeof bug, label: string, hint?: string, area = false) => (
    <Field id={ids[`bug.${key}`]} label={label} hint={hint} error={errors[`bug.${key}`]}>
      {(props) =>
        area ? (
          <textarea {...props} rows={5} value={bug[key]} onChange={(e) => setBug({ ...bug, [key]: e.target.value })} lang={language} />
        ) : (
          <input {...props} type="text" value={bug[key]} onChange={(e) => setBug({ ...bug, [key]: e.target.value })} autoComplete="off" />
        )
      }
    </Field>
  );

  return (
    <View
      title={isIdea ? fx.board.suggest : copy.newThread.title}
      lede={isIdea ? fx.board.lede : copy.newThread.lede}
      crumbs={[{ href: path(), label: copy.nav.label }, { label: isIdea ? fx.board.suggest : copy.newThread.title }]}
      ready
    >
      <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
        <ErrorSummary errors={errors} ids={ids} summaryRef={summary.ref} general={general} />
        {prefill.fromApp ? (
          <div className="cm-notice cm-notice-ok">
            <p>{fx.deepLink.notice}</p>
          </div>
        ) : null}
        <p className="cm-hint">{copy.form.required}</p>
        <Field id={ids.categorySlug} label={copy.newThread.category} error={errors.categorySlug}>
          {(props) => (
            <select {...props} value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">{copy.newThread.chooseCategory}</option>
              {available.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {categoryWords(locale, c.slug).name}
                </option>
              ))}
            </select>
          )}
        </Field>
        {cats.data.categories.some((c) => c.teamOnlyThreads) && !isTeam ? <p className="cm-hint">{copy.newThread.teamOnly}</p> : null}
        <Field id={ids.title} label={isIdea ? fx.newIdea.titleLabel : copy.newThread.titleLabel} hint={isIdea ? fx.newIdea.titleHint : copy.newThread.titleHint} error={errors.title}>
          {(props) => <input {...props} type="text" value={title} maxLength={160} onChange={(e) => setTitle(e.target.value)} lang={language} autoComplete="off" />}
        </Field>
        {isIdea ? <SimilarIdeas title={title} category="ideas" /> : null}
        <Field id={ids.language} label={copy.newThread.language} hint={copy.newThread.languageHint} error={errors.language}>
          {(props) => (
            <select {...props} value={language} onChange={(e) => setLanguage(e.target.value as CommunityLocale)}>
              {communityLocales.map((l) => (
                <option key={l} value={l} lang={l}>
                  {localeNames[l]}
                </option>
              ))}
            </select>
          )}
        </Field>
        {isBug ? (
          <fieldset className="cm-fieldset">
            <legend>{copy.newThread.bugLegend}</legend>
            {bugField('device', copy.newThread.device, copy.newThread.deviceHint)}
            {bugField('osVersion', copy.newThread.osVersion, copy.newThread.osVersionHint)}
            {bugField('appVersion', copy.newThread.appVersion, copy.newThread.appVersionHint)}
            <Field id={ids['bug.level']} label={fx.deepLink.level} hint={fx.deepLink.levelHint} error={errors['bug.level']} optional>
              {(props) => <input {...props} type="text" inputMode="numeric" autoComplete="off" value={bug.level} onChange={(e) => setBug({ ...bug, level: e.target.value })} />}
            </Field>
            <fieldset className="cm-fieldset cm-checks" aria-describedby={`${id}-at-hint`} data-invalid={errors['bug.assistive'] ? '' : undefined}>
              <legend>{copy.newThread.assistive}</legend>
              <p className="cm-hint" id={`${id}-at-hint`}>
                {copy.newThread.assistiveHint}
              </p>
              {errors['bug.assistive'] ? <p className="cm-error">{errors['bug.assistive']}</p> : null}
              {assistiveOptions.map((a) => (
                <div className="cm-check" key={a}>
                  <input
                    type="checkbox"
                    id={`${id}-at-${a}`}
                    checked={assistive.includes(a)}
                    onChange={(e) => setAssistive(e.target.checked ? [...assistive.filter((x) => (a === 'none' ? false : x !== 'none')), a] : assistive.filter((x) => x !== a))}
                  />
                  <label htmlFor={`${id}-at-${a}`}>{copy.newThread.at[a]}</label>
                </div>
              ))}
            </fieldset>
            {bugField('steps', copy.newThread.steps, copy.newThread.stepsHint, true)}
            {bugField('expected', copy.newThread.expected, undefined, true)}
            {bugField('actual', copy.newThread.actual, undefined, true)}
          </fieldset>
        ) : null}
        <Composer id={ids.body} label={isBug ? copy.newThread.bodyBug : isIdea ? fx.newIdea.bodyLabel : copy.newThread.body} value={body} onChange={setBody} error={errors.body} lang={language} mentions />
        <p>
          <button type="button" className="cm-act" aria-expanded={!!poll} onClick={() => setPoll(poll ? null : emptyPoll())}>
            {poll ? fx.poll.remove : fx.poll.add}
          </button>
        </p>
        {poll ? <PollEditor draft={poll} onChange={setPoll} errors={errors} ids={ids} /> : null}
        <Honeypot value={website} onChange={setWebsite} />
        <button type="submit" className="btn" disabled={busy} aria-disabled={busy || undefined}>
          {busy ? copy.composer.sending : copy.newThread.submit}
        </button>
      </form>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Signing in

const providerOrder: Provider[] = ['apple', 'google', 'facebook'];

function ProviderButton({ provider, href, label }: { provider: Provider; href: string; label: string }) {
  return (
    <a className={`cm-provider cm-provider-${provider}`} href={href}>
      <span className="cm-provider-logo" aria-hidden="true">
        {provider === 'apple' ? (
          <svg viewBox="0 0 17 20" width="17" height="20" focusable="false">
            <path
              fill="currentColor"
              d="M14.06 10.62c-.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.69-3.15-1.71-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.84-.75-1.46.02-2.81.85-3.56 2.16-1.52 2.63-.39 6.53 1.09 8.67.72 1.04 1.58 2.22 2.71 2.18 1.09-.04 1.5-.7 2.82-.7 1.31 0 1.69.7 2.84.68 1.17-.02 1.92-1.06 2.63-2.11.83-1.21 1.17-2.38 1.19-2.44-.03-.01-2.28-.88-2.29-3.49ZM11.9 4.21c.6-.73 1.01-1.74.9-2.75-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.22Z"
            />
          </svg>
        ) : provider === 'google' ? (
          <svg viewBox="0 0 48 48" width="20" height="20" focusable="false">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="22" height="22" focusable="false">
            <path fill="currentColor" d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
          </svg>
        )}
      </span>
      <span className="cm-provider-text">{label}</span>
    </a>
  );
}

export function SignInView({ route }: { route: Extract<Route, { name: 'signin' }> }) {
  const { copy, fx, locale, path, session, refreshSession, announce, navigate, features } = useApp();
  const id = useId();
  const [startedAt] = useState(() => Date.now());
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const summary = useSummary();
  const sentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sent) sentRef.current?.focus();
  }, [sent]);
  if (!session) return null;
  const returnTo = route.returnTo;
  const errorKey = route.error as keyof typeof copy.signin.errors;
  const landing = copy.signin.errors[errorKey];
  const crumbs = [{ href: path(), label: copy.nav.label }, { label: copy.nav.signIn }];

  if (session.member) {
    return (
      <View title={copy.signin.title} crumbs={crumbs} ready>
        <section className="cm-section">
          <p>{copy.signin.already(session.member.displayName)}</p>
          <p className="cm-row">
            <a className="btn" href={returnTo}>
              {copy.backHome}
            </a>
            <button
              type="button"
              className="cm-act"
              onClick={() =>
                void api.signOut().then(async () => {
                  await refreshSession();
                  announce(copy.settings.signedOut);
                  navigate(path(), { replace: true });
                })
              }
            >
              {copy.nav.signOut}
            </button>
          </p>
        </section>
      </View>
    );
  }

  const providers = providerOrder.filter((p) => session.providers.includes(p));
  const emailOn = session.providers.includes('email');
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGeneral('');
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors({ email: value ? copy.form.codes.email('') : copy.form.codes.required(copy.form.fields.email) });
      summary.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      await api.emailSignIn({ email: value, locale, returnTo: safeReturn(locale, returnTo), website: website || undefined, startedAt });
      setSent(true);
    } catch (error) {
      const f = failureOf(error);
      const fields = fieldMessages(copy, f.body.fields, fx);
      if (fields.email && f.body.fields?.email === 'invalid') fields.email = copy.form.codes.email('');
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      summary.focus();
    } finally {
      setBusy(false);
    }
  };

  return (
    <View title={copy.signin.title} lede={copy.signin.lede} crumbs={crumbs} ready>
      {landing ? (
        <div className="cm-notice cm-notice-error" role="alert">
          <p>{landing}</p>
        </div>
      ) : null}
      {providers.length ? (
        <section className="cm-section" aria-labelledby={`${id}-p`}>
          <h2 id={`${id}-p`}>{copy.signin.providersHeading}</h2>
          <ul className="cm-providers">
            {providers.map((p) => (
              <li key={p}>
                <ProviderButton provider={p} href={authStart(p, safeReturn(locale, returnTo), locale)} label={copy.signin[p as 'apple' | 'google' | 'facebook']} />
                <p className="cm-hint">{copy.signin.shares[p as 'apple' | 'google' | 'facebook']}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {features.passkeys ? <PasskeySignIn returnTo={safeReturn(locale, returnTo)} /> : null}
      {emailOn ? (
        <section className="cm-section" aria-labelledby={`${id}-e`}>
          <h2 id={`${id}-e`}>{providers.length ? `${copy.signin.or}: ${copy.signin.emailHeading}` : copy.signin.emailHeading}</h2>
          {!providers.length ? <p>{copy.signin.noProviders}</p> : null}
          {sent ? (
            <div className="cm-notice cm-notice-ok" ref={sentRef} tabIndex={-1}>
              <h3>{copy.signin.sent}</h3>
              <p>{copy.signin.sentNote}</p>
            </div>
          ) : (
            <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
              <ErrorSummary errors={errors} ids={{ email: `${id}-email` }} summaryRef={summary.ref} general={general} />
              <p className="cm-hint">{copy.signin.shares.email}</p>
              <Field id={`${id}-email`} label={copy.signin.email} hint={copy.signin.emailHint} error={errors.email}>
                {(props) => <input {...props} type="email" name="email" autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none" value={email} onChange={(e) => setEmail(e.target.value)} />}
              </Field>
              <Honeypot value={website} onChange={setWebsite} />
              <button type="submit" className="btn" disabled={busy}>
                {copy.signin.emailButton}
              </button>
            </form>
          )}
        </section>
      ) : null}
      <p className="cm-hint">
        <a href={locale === 'en' ? '/privacy' : `/${locale}/privacy`}>{copy.guidelines.privacy}</a> · <a href={path('/guidelines')}>{copy.guidelines.title}</a>
      </p>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// The first display name

export function WelcomeView({ route }: { route: Extract<Route, { name: 'welcome' }> }) {
  const { copy, path, session, refreshSession, navigate, announce } = useApp();
  const [name, setName] = useState(session?.member?.displayName ?? '');
  // "Also send me OutBrick News": unticked unless the member ticks it (8 October 2026).
  const [newsletter, setNewsletter] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [busy, setBusy] = useState(false);
  const summary = useSummary();
  const id = useId();
  if (!session) return null;
  if (!session.member) return <SignInFirst title={copy.welcome.title} crumbLabel={copy.welcome.title} />;
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = name.trim();
    if (value.length < 3 || value.length > 30) {
      setErrors({ displayName: value ? (value.length < 3 ? copy.form.codes.too_short(copy.form.fields.displayName) : copy.form.codes.too_long(copy.form.fields.displayName)) : copy.form.codes.required(copy.form.fields.displayName) });
      summary.focus();
      return;
    }
    setBusy(true);
    try {
      const result = await api.updateMe(newsletter ? { displayName: value, newsletter: true } : { displayName: value });
      await refreshSession();
      announce(result.newsletterConfirmationSent ? `${copy.welcome.saved} ${copy.welcome.newsletterSent}` : copy.welcome.saved);
      navigate(route.returnTo, { replace: true });
    } catch (error) {
      const f = failureOf(error);
      const fields = fieldMessages(copy, f.body.fields);
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      summary.focus();
    } finally {
      setBusy(false);
    }
  };
  return (
    <View title={copy.welcome.title} lede={copy.welcome.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.welcome.title }]} ready>
      <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
        <ErrorSummary errors={errors} ids={{ displayName: `${id}-name` }} summaryRef={summary.ref} general={general} />
        <Field id={`${id}-name`} label={copy.welcome.name} hint={copy.welcome.nameHint} error={errors.displayName}>
          {(props) => <input {...props} type="text" autoComplete="off" maxLength={40} value={name} onChange={(e) => setName(e.target.value)} />}
        </Field>
        <div className="cm-check">
          <input type="checkbox" id={`${id}-news`} checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} aria-describedby={`${id}-news-d`} />
          <label htmlFor={`${id}-news`}>{copy.welcome.newsletter}</label>
          <p className="cm-hint" id={`${id}-news-d`}>
            {copy.welcome.newsletterHint}
          </p>
        </div>
        <button type="submit" className="btn" disabled={busy}>
          {copy.welcome.save}
        </button>
      </form>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Settings

const emailKinds = ['reply', 'mention', 'watched', 'status', 'solved', 'release', 'moderation', 'badge', 'merged'] as const;
/** Keys that default to off (contract: emailPrefsOffByDefault). */
const offByDefault = new Set(['digest']);

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="cm-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
}

export function SettingsView() {
  const { copy, path, session } = useApp();
  if (!session) return null;
  if (!session.member) return <SignInFirst title={copy.settings.title} crumbLabel={copy.settings.title} />;
  return <SettingsForms member={session.member} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.settings.title }]} />;
}

function SettingsForms({ member, crumbs }: { member: SelfMember; crumbs: { href?: string; label: string }[] }) {
  const { copy, refreshSession, announce, navigate, path, features } = useApp();
  const id = useId();
  const confirmed = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('email') === 'confirmed';
  return (
    <View title={copy.settings.title} lede={copy.settings.lede} crumbs={crumbs} ready>
      {confirmed ? (
        <div className="cm-notice cm-notice-ok">
          <p>{copy.settings.addressConfirmed}</p>
        </div>
      ) : null}
      {member.banned ? (
        <div className="cm-notice cm-notice-error">
          <p>{copy.settings.banned}</p>
        </div>
      ) : null}
      <ProfileForm member={member} id={`${id}-profile`} onSaved={refreshSession} />
      <AddressForm member={member} id={`${id}-address`} onSaved={refreshSession} />
      <EmailPrefsForm member={member} id={`${id}-emails`} onSaved={refreshSession} />
      <Section id={`${id}-accounts`} title={copy.settings.accounts}>
        <p>{copy.settings.accountsLede}</p>
        <ul className="cm-points">
          {(member.providers ?? []).map((p) => (
            <li key={p}>{copy.settings.providerNames[p]}</li>
          ))}
        </ul>
        <button
          type="button"
          className="cm-act"
          onClick={() =>
            void api.signOut().then(async () => {
              await refreshSession();
              announce(copy.settings.signedOut);
              navigate(path(), { replace: true });
            })
          }
        >
          {copy.settings.signOut}
        </button>
      </Section>
      <Section id={`${id}-data`} title={copy.settings.data}>
        <p>{copy.settings.dataLede}</p>
        <p>
          <a className="cm-act" href={exportUrl} download>
            {copy.settings.export}
          </a>
        </p>
      </Section>
      {features.passkeys ? <PasskeySettings /> : null}
      <DeleteAccount id={`${id}-delete`} />
    </View>
  );
}

function ProfileForm({ member, id, onSaved }: { member: SelfMember; id: string; onSaved: () => Promise<unknown> }) {
  const { copy, announce } = useApp();
  const [name, setName] = useState(member.displayName);
  const [bio, setBio] = useState(member.bio);
  const [lang, setLang] = useState<CommunityLocale>(member.locale);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [busy, setBusy] = useState(false);
  const summary = useSummary();
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found: FieldErrors = {};
    if (!member.banned && (name.trim().length < 3 || name.trim().length > 30)) found.displayName = name.trim().length < 3 ? copy.form.codes.too_short(copy.form.fields.displayName) : copy.form.codes.too_long(copy.form.fields.displayName);
    if (bio.length > 300) found.bio = copy.form.codes.too_long(copy.form.fields.bio);
    setErrors(found);
    setGeneral('');
    if (Object.keys(found).length) return summary.focus();
    setBusy(true);
    try {
      await api.updateMe(member.banned ? { locale: lang } : { displayName: name.trim(), bio, locale: lang });
      await onSaved();
      announce(copy.settings.profileSaved);
    } catch (error) {
      const f = failureOf(error);
      const fields = fieldMessages(copy, f.body.fields);
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      summary.focus();
    } finally {
      setBusy(false);
    }
  };
  return (
    <Section id={id} title={copy.settings.profile}>
      <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
        <ErrorSummary errors={errors} ids={{ displayName: `${id}-name`, bio: `${id}-bio`, locale: `${id}-lang` }} summaryRef={summary.ref} general={general} />
        <Field id={`${id}-name`} label={copy.settings.displayName} hint={copy.settings.displayNameHint} error={errors.displayName}>
          {(props) => <input {...props} type="text" autoComplete="off" value={name} disabled={member.banned} onChange={(e) => setName(e.target.value)} />}
        </Field>
        <Field id={`${id}-bio`} label={copy.settings.bio} hint={copy.settings.bioHint} error={errors.bio} optional>
          {(props) => <textarea {...props} rows={4} value={bio} disabled={member.banned} onChange={(e) => setBio(e.target.value)} />}
        </Field>
        <Field id={`${id}-lang`} label={copy.settings.language} hint={copy.settings.languageHint} error={errors.locale}>
          {(props) => (
            <select {...props} value={lang} onChange={(e) => setLang(e.target.value as CommunityLocale)}>
              {communityLocales.map((l) => (
                <option key={l} value={l} lang={l}>
                  {localeNames[l]}
                </option>
              ))}
            </select>
          )}
        </Field>
        <button type="submit" className="btn" disabled={busy}>
          {copy.settings.saveProfile}
        </button>
      </form>
    </Section>
  );
}

function AddressForm({ member, id, onSaved }: { member: SelfMember; id: string; onSaved: () => Promise<unknown> }) {
  const { copy, announce } = useApp();
  const [email, setEmail] = useState(member.email);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [general, setGeneral] = useState('');
  const [sentTo, setSentTo] = useState('');
  const [busy, setBusy] = useState(false);
  const summary = useSummary();
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();
    setGeneral('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors({ email: value ? copy.form.codes.email('') : copy.form.codes.required(copy.form.fields.email) });
      return summary.focus();
    }
    setErrors({});
    setBusy(true);
    try {
      const result = await api.updateMe({ email: value });
      await onSaved();
      if (result.emailConfirmationSent) {
        setSentTo(value);
        announce(copy.settings.addressSent(value));
      }
    } catch (error) {
      const f = failureOf(error);
      const fields = fieldMessages(copy, f.body.fields);
      if (f.body.fields?.email === 'invalid') fields.email = copy.form.codes.email('');
      setErrors(fields);
      setGeneral(Object.keys(fields).length ? '' : errorText(copy, f));
      summary.focus();
    } finally {
      setBusy(false);
    }
  };
  return (
    <Section id={id} title={copy.settings.address}>
      {!member.email ? (
        <div className="cm-notice cm-notice-error">
          <p>{copy.settings.addressNeeded}</p>
        </div>
      ) : null}
      <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
        <ErrorSummary errors={errors} ids={{ email: `${id}-email` }} summaryRef={summary.ref} general={general} />
        <Field id={`${id}-email`} label={copy.settings.address} hint={copy.settings.addressHint} error={errors.email}>
          {(props) => <input {...props} type="email" autoComplete="email" inputMode="email" spellCheck={false} autoCapitalize="none" value={email} onChange={(e) => setEmail(e.target.value)} />}
        </Field>
        {sentTo ? (
          <p className="cm-notice cm-notice-ok">{copy.settings.addressSent(sentTo)}</p>
        ) : null}
        <button type="submit" className="btn" disabled={busy}>
          {copy.settings.saveAddress}
        </button>
      </form>
    </Section>
  );
}

function EmailPrefsForm({ member, id, onSaved }: { member: SelfMember; id: string; onSaved: () => Promise<unknown> }) {
  const { copy, fx, announce, features } = useApp();
  const kinds: string[] = [...emailKinds, ...(features.digest ? ['digest'] : [])];
  const [prefs, setPrefs] = useState<Record<string, boolean>>(() => Object.fromEntries(kinds.map((k) => [k, offByDefault.has(k) ? member.emailPrefs[k] === true : member.emailPrefs[k] !== false])));
  const words = (k: string): [string, string] => (k === 'digest' || k === 'badge' || k === 'merged' ? fx.settings[k] : copy.settings.emailKinds[k as keyof typeof copy.settings.emailKinds]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      await api.updateMe({ emailPrefs: prefs });
      await onSaved();
      announce(copy.settings.emailsSaved);
    } catch (failure) {
      setError(errorText(copy, failureOf(failure)));
    } finally {
      setBusy(false);
    }
  };
  return (
    <Section id={id} title={copy.settings.emails}>
      <form className="cm-form" onSubmit={(e) => void submit(e)}>
        <p>{copy.settings.emailsLede(member.email || '—')}</p>
        <fieldset className="cm-fieldset cm-checks">
          <legend className="sr-only">{copy.settings.emails}</legend>
          {kinds.map((k) => (
            <div className="cm-check" key={k}>
              <input type="checkbox" id={`${id}-${k}`} checked={!!prefs[k]} onChange={(e) => setPrefs({ ...prefs, [k]: e.target.checked })} aria-describedby={`${id}-${k}-d`} />
              <label htmlFor={`${id}-${k}`}>{words(k)[0]}</label>
              <p className="cm-hint" id={`${id}-${k}-d`}>
                {words(k)[1]}
              </p>
            </div>
          ))}
        </fieldset>
        {error ? (
          <p className="cm-error" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" className="btn" disabled={busy}>
          {copy.settings.saveEmails}
        </button>
      </form>
    </Section>
  );
}

function DeleteAccount({ id }: { id: string }) {
  const { copy, refreshSession, announce, navigate, path } = useApp();
  const [typed, setTyped] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const submit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typed !== 'DELETE') {
      setError(copy.form.codes.mismatch(''));
      input.current?.focus();
      return;
    }
    setBusy(true);
    try {
      await api.deleteMe();
      await refreshSession();
      announce(copy.settings.deleted);
      navigate(path(), { replace: true });
    } catch (failure) {
      setError(errorText(copy, failureOf(failure)));
    } finally {
      setBusy(false);
    }
  };
  return (
    <Section id={id} title={copy.settings.deleteHeading}>
      <p>{copy.settings.deleteLede}</p>
      <form className="cm-form" onSubmit={(e) => void submit(e)} noValidate>
        <Field id={`${id}-confirm`} label={copy.settings.deleteConfirm} hint={copy.settings.deleteHint} error={error}>
          {(props) => <input {...props} ref={input} type="text" autoComplete="off" autoCapitalize="characters" spellCheck={false} value={typed} onChange={(e) => setTyped(e.target.value)} />}
        </Field>
        <button type="submit" className="btn cm-danger-btn" disabled={busy}>
          {copy.settings.deleteButton}
        </button>
      </form>
    </Section>
  );
}

// ---------------------------------------------------------------------------------------
// Notifications

export function NotificationsView({ route }: { route: Extract<Route, { name: 'notifications' }> }) {
  const { copy, fx, locale, path, session, refreshSession, announce } = useApp();
  const signedIn = !!session?.member;
  const load = useLoad(signedIn ? `notifications:${route.page}` : null, () => api.notifications(route.page));
  if (!session) return null;
  if (!signedIn) return <SignInFirst title={copy.notifications.title} crumbLabel={copy.notifications.title} />;
  if (!load.data) return <Pending load={load} title={copy.notifications.title} />;
  const data = load.data;
  const markAll = async () => {
    try {
      await api.readNotifications({ all: true });
      await refreshSession();
      announce(copy.notifications.marked);
      load.reload();
    } catch (failure) {
      announce(errorText(copy, failureOf(failure)));
    }
  };
  return (
    <View title={copy.notifications.title} lede={copy.notifications.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.notifications.title }]} ready>
      {data.unread > 0 ? (
        <p>
          <button type="button" className="cm-act" onClick={() => void markAll()}>
            {copy.notifications.markAll}
          </button>
        </p>
      ) : null}
      {data.notifications.length ? (
        <ul className="cm-notes">
          {data.notifications.map((note) => {
            const actor = note.actor?.displayName ?? copy.formerMember;
            const title = note.thread?.title ?? '';
            const text0 = (v: unknown) => (typeof v === 'string' ? v : '');
            const extra = note.kind === 'status' ? [copy.status[text0(note.data.status)] ?? '', text0(note.data.statusNote)].filter(Boolean).join(': ') : note.kind === 'release' ? text0(note.data.version) : '';
            const str = (v: unknown) => (typeof v === 'string' ? v : '');
            const badgeKey = str(note.data.badge) as BadgeKey;
            const text =
              note.kind === 'badge'
                ? fx.notifications.badge(fx.badges.names[badgeKey] ?? badgeKey)
                : note.kind === 'merged'
                  ? fx.notifications.merged(str(note.data.fromTitle), title)
                  : (copy.notifications.kinds[note.kind] ?? copy.notifications.kinds.reply)(actor, title, extra);
            const href = note.thread ? threadPath(locale, note.thread, note.postNumber) : note.kind === 'welcome' ? path('/guidelines') : null;
            return (
              <li key={note.id} className={note.read ? 'cm-note-item' : 'cm-note-item is-unread'}>
                {!note.read ? <span className="cm-badge">{copy.notifications.unreadTag}</span> : null}
                {href ? <a href={href}>{text}</a> : <span>{text}</span>}
                <span className="cm-meta">
                  <Time iso={note.createdAt} relative />
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="cm-empty">{copy.notifications.none}</p>
      )}
      <Pagination page={data.page} pages={data.pages} href={(p) => path('/notifications') + (p > 1 ? `?page=${p}` : '')} label={copy.notifications.title} />
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Moderation

export function ModView() {
  const { copy, path, session } = useApp();
  const isMod = !!session?.member && ['moderator', 'admin'].includes(session.member.role);
  const reports = useLoad(isMod ? 'mod:reports' : null, () => api.modReports());
  const queue = useLoad(isMod ? 'mod:queue' : null, () => api.modQueue());
  const id = useId();
  const crumbs = [{ href: path(), label: copy.nav.label }, { label: copy.mod.title }];
  if (!session) return null;
  if (!isMod)
    return (
      <View title={copy.mod.title} crumbs={crumbs} ready>
        <p>{copy.mod.forbidden}</p>
      </View>
    );
  return (
    <View title={copy.mod.title} lede={copy.mod.lede} crumbs={crumbs} ready={!reports.loading && !queue.loading}>
      <Section id={`${id}-r`} title={copy.mod.reports}>
        {reports.error ? <ErrorNotice error={reports.error} retry={reports.reload} /> : null}
        {reports.data && !reports.data.reports.length ? <p>{copy.mod.noReports}</p> : null}
        <ul className="cm-modlist">
          {(reports.data?.reports ?? []).map((r) => (
            <ReportItem key={r.id} report={r} onDone={reports.reload} />
          ))}
        </ul>
      </Section>
      <Section id={`${id}-q`} title={copy.mod.queue}>
        {queue.error ? <ErrorNotice error={queue.error} retry={queue.reload} /> : null}
        {queue.data && !queue.data.posts.length ? <p>{copy.mod.noQueue}</p> : null}
        <ul className="cm-modlist">
          {(queue.data?.posts ?? []).map((item) => (
            <QueueItem key={item.post.id} item={item} onDone={queue.reload} />
          ))}
        </ul>
      </Section>
    </View>
  );
}

function ModPost({ thread, post }: { thread: { id: number; slug: string; title: string }; post: ModReport['post'] }) {
  const { copy, locale } = useApp();
  return (
    <>
      <h3>
        <a href={threadPath(locale, thread, post.number)}>{copy.mod.inThread(thread.title)}</a>
      </h3>
      <p className="cm-meta">
        <Member member={post.author} /> · <Time iso={post.createdAt} relative />
      </p>
      <div className="cm-post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

function ReportItem({ report, onDone }: { report: ModReport; onDone: () => void }) {
  const { copy, announce } = useApp();
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const id = useId();
  const resolve = async (action: 'dismiss' | 'hide') => {
    setBusy(true);
    try {
      await api.resolveReport(report.id, { action, note: note.trim() || undefined });
      announce(copy.mod.done);
      onDone();
    } catch (failure) {
      announce(errorText(copy, failureOf(failure)));
    } finally {
      setBusy(false);
    }
  };
  return (
    <li className="cm-moditem">
      <ModPost thread={report.thread} post={report.post} />
      <p className="cm-badge">{copy.mod.reportedBy(report.reporter.displayName, copy.thread.report.reasons[report.reason])}</p>
      {report.note ? <p>{report.note}</p> : null}
      <div className="cm-field">
        <label htmlFor={`${id}-note`}>{copy.mod.reasonLabel}</label>
        <input id={`${id}-note`} type="text" value={note} onChange={(e) => setNote(e.target.value)} />
      </div>
      <div className="cm-row">
        <button type="button" className="cm-act" disabled={busy} onClick={() => void resolve('dismiss')}>
          {copy.mod.dismiss}
        </button>
        <button type="button" className="cm-act cm-danger" disabled={busy} onClick={() => void resolve('hide')}>
          {copy.mod.hide}
        </button>
      </div>
    </li>
  );
}

function QueueItem({ item, onDone }: { item: ModQueueItem; onDone: () => void }) {
  const { copy, announce } = useApp();
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const id = useId();
  const run = async (work: () => Promise<unknown>) => {
    setBusy(true);
    try {
      await work();
      announce(copy.mod.done);
      onDone();
    } catch (failure) {
      announce(errorText(copy, failureOf(failure)));
    } finally {
      setBusy(false);
    }
  };
  return (
    <li className="cm-moditem">
      <ModPost thread={item.thread} post={item.post} />
      <div className="cm-field">
        <label htmlFor={`${id}-reason`}>{copy.mod.reasonLabel}</label>
        <input id={`${id}-reason`} type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
      </div>
      <div className="cm-row">
        <button type="button" className="cm-act" disabled={busy} onClick={() => void run(() => api.approve(item.post.id))}>
          {copy.mod.approve}
        </button>
        <button type="button" className="cm-act cm-danger" disabled={busy} onClick={() => void run(() => api.hidePost(item.post.id, reason.trim()))}>
          {copy.mod.hide}
        </button>
      </div>
    </li>
  );
}

/**
 * On a member's profile, for moderators: suspend the member for a number of days with a reason
 * the member is shown, or lift a suspension. Admins can't be suspended, and nobody suspends
 * themself; the server enforces both and the role order as well.
 */
export function MemberModeration({ member }: { member: { id: number; role: string; displayName: string } }) {
  const { copy, locale, session, announce } = useApp();
  const [days, setDays] = useState('7');
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [bannedUntil, setBannedUntil] = useState<string | null>(null);
  const [error, setError] = useState('');
  const id = useId();
  const me = session?.member;
  if (!me || !['moderator', 'admin'].includes(me.role) || me.id === member.id || member.role === 'admin') return null;
  const submit = async (lift: boolean) => {
    setBusy(true);
    setError('');
    try {
      const res = await api.banMember(member.id, lift ? { days: 0, reason: '' } : { days: Number.parseInt(days, 10), reason: reason.trim() });
      setBannedUntil(res.member.bannedUntil);
      announce(lift ? copy.mod.unbanDone : copy.mod.banDone);
    } catch (failure) {
      const text = errorText(copy, failureOf(failure));
      setError(text);
      announce(text);
    } finally {
      setBusy(false);
    }
  };
  const onSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submit(false);
  };
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{copy.mod.banHeading}</h2>
      <p>{copy.mod.banLede}</p>
      {bannedUntil ? <p className="cm-badge">{copy.mod.bannedUntil(dayDate(locale, bannedUntil))}</p> : null}
      {error ? (
        <p className="cm-error" role="alert">
          {error}
        </p>
      ) : null}
      <form onSubmit={onSubmit} noValidate>
        <div className="cm-field">
          <label htmlFor={`${id}-days`}>{copy.mod.banDays}</label>
          <input id={`${id}-days`} type="number" inputMode="numeric" min={1} max={36500} value={days} onChange={(e) => setDays(e.target.value)} required />
        </div>
        <div className="cm-field">
          <label htmlFor={`${id}-reason`}>{copy.mod.banReason}</label>
          <input id={`${id}-reason`} type="text" minLength={2} maxLength={500} value={reason} onChange={(e) => setReason(e.target.value)} required />
        </div>
        <div className="cm-row">
          <button type="submit" className="cm-act cm-danger" disabled={busy}>
            {copy.mod.banSubmit}
          </button>
          <button type="button" className="cm-act" disabled={busy} onClick={() => void submit(true)}>
            {copy.mod.unban}
          </button>
        </div>
      </form>
    </section>
  );
}
