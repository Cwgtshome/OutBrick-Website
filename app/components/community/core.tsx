'use client';

/**
 * The shared furniture of the community app: the route model, the app context (language,
 * session, navigation, the polite announcer), data loading, and the small pieces every view
 * uses — the page head, dates, role badges, status badges, pagination, the error summary and
 * form fields.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type {
  CommunityLocale,
  MemberRole,
  PublicMember,
  SessionResponse,
  ApiErrorBody,
  CommunityFeatures,
} from '../../../lib/community/contract';
import { communityPath } from '../../../lib/community/contract';
import { communityCopy, type CommunityCopy } from '../../../lib/i18n/community';
import type { CommunityFxCopy } from '../../../lib/i18n/community-fx';
import { BadgeChip } from './badges';
import { fullDate, number, relativeDate } from '../../../lib/community/format';
import { roleBadge, memberName } from '../../../lib/community/static-html';
import { adminWords } from '../../../lib/i18n/admin';
import { api, ApiFailure } from './api';

// ---------------------------------------------------------------------------------------
// Routes

export type Route =
  | { name: 'home' }
  | {
      name: 'category';
      slug: string;
      sort: string;
      language: string;
      status: string;
      page: number;
    }
  | { name: 'thread'; id: number; slug: string; page: number }
  | { name: 'new'; category: string }
  | { name: 'search'; q: string; category: string; page: number }
  | { name: 'faq' }
  | { name: 'guidelines' }
  | { name: 'signin'; error: string; returnTo: string }
  | { name: 'welcome'; returnTo: string }
  | { name: 'settings' }
  | { name: 'notifications'; page: number }
  | { name: 'member'; id: number }
  | { name: 'mod' }
  | { name: 'admin' }
  | { name: 'library' }
  | { name: 'content'; kind: string; slug: string }
  | { name: 'roadmap' }
  | { name: 'ideas' }
  | { name: 'leaderboard'; period: string; kind: string }
  | { name: 'bookmarks'; page: number }
  | { name: 'notfound' };

const int = (value: string | null, fallback = 1) => {
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : fallback;
};

export function parseRoute(locale: CommunityLocale, url: URL): Route {
  const base = communityPath(locale);
  let rest = url.pathname.startsWith(base)
    ? url.pathname.slice(base.length)
    : url.pathname;
  rest = rest.replace(/\/+$/, '');
  const q = url.searchParams;
  const parts = rest
    .split('/')
    .filter(Boolean)
    .map((p) => decodeURIComponent(p));
  const [first, second, third] = parts;
  if (
    first === 'content' &&
    ['page', 'blog'].includes(second) &&
    third &&
    parts.length === 3
  )
    return { name: 'content', kind: second, slug: third };
  if (!first) return { name: 'home' };
  if (first === 'c' && second && parts.length === 2)
    return {
      name: 'category',
      slug: second,
      sort: q.get('sort') ?? '',
      language: q.get('language') ?? 'mine',
      status: q.get('status') ?? '',
      page: int(q.get('page')),
    };
  if (first === 't' && second && /^\d+$/.test(second) && parts.length <= 3)
    return {
      name: 'thread',
      id: Number(second),
      slug: third ?? '',
      page: int(q.get('page')),
    };
  if (first === 'u' && second && /^\d+$/.test(second) && parts.length === 2)
    return { name: 'member', id: Number(second) };
  if (parts.length === 1) {
    switch (first) {
      case 'new':
        return { name: 'new', category: q.get('category') ?? '' };
      case 'search':
        return {
          name: 'search',
          q: q.get('q') ?? '',
          category: q.get('category') ?? '',
          page: int(q.get('page')),
        };
      case 'faq':
        return { name: 'faq' };
      case 'guidelines':
        return { name: 'guidelines' };
      case 'signin':
        return {
          name: 'signin',
          error: q.get('error') ?? '',
          returnTo: safeReturn(locale, q.get('returnTo')),
        };
      case 'welcome':
        return {
          name: 'welcome',
          returnTo: safeReturn(locale, q.get('returnTo')),
        };
      case 'settings':
        return { name: 'settings' };
      case 'notifications':
        return { name: 'notifications', page: int(q.get('page')) };
      case 'mod':
        return { name: 'mod' };
      case 'admin':
        return { name: 'admin' };
      case 'library':
        return { name: 'library' };
      case 'roadmap':
        return { name: 'roadmap' };
      case 'ideas':
        return { name: 'ideas' };
      case 'leaderboard':
        return {
          name: 'leaderboard',
          period: q.get('period') ?? 'month',
          kind: q.get('kind') ?? 'helpers',
        };
      case 'bookmarks':
        return { name: 'bookmarks', page: int(q.get('page')) };
    }
  }
  return { name: 'notfound' };
}

/** A returnTo is only ever a community path on this site; anything else falls back to the home. */
export function safeReturn(
  locale: CommunityLocale,
  value: string | null,
): string {
  if (!value || !value.startsWith('/') || value.startsWith('//'))
    return communityPath(locale);
  const path = value.split(/[?#]/)[0];
  return /^\/(?:(?:fr|de|es|ja|pt-BR)\/)?community(?:\/|$)/.test(path)
    ? value
    : communityPath(locale);
}

/** Pages a search engine should not index (the client adds the robots meta on these). */
export const privateRoutes = new Set<Route['name']>([
  'signin',
  'welcome',
  'settings',
  'notifications',
  'mod',
  'admin',
  'new',
  'notfound',
  'search',
  'bookmarks',
  'ideas',
]);

// ---------------------------------------------------------------------------------------
// The app context

export type Navigate = (
  href: string,
  options?: { replace?: boolean; focus?: boolean },
) => void;

export type AppContext = {
  locale: CommunityLocale;
  copy: CommunityCopy;
  /** The feature board, interactive and phase 2 words (lib/i18n/community-fx.ts). */
  fx: CommunityFxCopy;
  /** What this deploy has switched on (SessionResponse.features); all off until the session arrives. */
  features: CommunityFeatures;
  route: Route;
  /** location.pathname + search of the current page. */
  here: string;
  navigate: Navigate;
  session: SessionResponse | null;
  sessionError: ApiFailure | null;
  refreshSession: () => Promise<SessionResponse | null>;
  /** Say something politely (role=status). */
  announce: (message: string) => void;
  /** Called by a view once its content is on screen: sets the title, takes over from the static HTML, moves focus. */
  pageReady: (title: string) => void;
  /** True while the prerendered/edge-rendered HTML is still showing (first load, before data). */
  staticShowing: boolean;
  supportFaqs: { question: string; answer: string }[];
  path: (p?: string) => string;
  n: (value: number) => string;
};

export const Ctx = createContext<AppContext | null>(null);

export function useApp(): AppContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useApp outside the community app');
  return ctx;
}

export function copyFor(locale: CommunityLocale) {
  return communityCopy[locale];
}

// ---------------------------------------------------------------------------------------
// Data

export type Load<T> = {
  data: T | null;
  error: ApiFailure | null;
  loading: boolean;
  reload: () => void;
  set: (value: T) => void;
};

/**
 * Run `fetcher` whenever `key` changes (or `reload` is called); keeps the last good data for the
 * same key while a reload runs. `loading` is derived, never set inside the effect.
 */
export function useLoad<T>(
  key: string | null,
  fetcher: () => Promise<T>,
): Load<T> {
  const [state, setState] = useState<{
    key: string | null;
    tick: number;
    data: T | null;
    error: ApiFailure | null;
  }>({ key: null, tick: 0, data: null, error: null });
  const [tick, setTick] = useState(0);
  const fetchRef = useRef(fetcher);
  useEffect(() => {
    fetchRef.current = fetcher;
  });
  useEffect(() => {
    if (key === null) return;
    let live = true;
    fetchRef.current().then(
      (data) => {
        if (live) setState({ key, tick, data, error: null });
      },
      (error: unknown) => {
        if (live)
          setState((s) => ({
            key,
            tick,
            data: s.key === key ? s.data : null,
            error:
              error instanceof ApiFailure
                ? error
                : new ApiFailure(0, {
                    code: 'unknown',
                    message: String(error),
                  }),
          }));
      },
    );
    return () => {
      live = false;
    };
  }, [key, tick]);
  const reload = useCallback(() => setTick((t) => t + 1), []);
  const set = useCallback(
    (value: T) => setState((s) => ({ ...s, data: value })),
    [],
  );
  const same = state.key === key;
  return {
    data: same ? state.data : null,
    error: same ? state.error : null,
    loading: key !== null && (!same || state.tick !== tick),
    reload,
    set,
  };
}

export function errorText(
  copy: CommunityCopy,
  error: ApiFailure | ApiErrorBody | null | undefined,
): string {
  if (!error) return '';
  const code = error instanceof ApiFailure ? error.code : error.code;
  return copy.errors[code] ?? copy.errors.unknown;
}

// ---------------------------------------------------------------------------------------
// Page frame

export type Crumb = { href?: string; label: string; lang?: string };

const courseColours = [
  '#e2352f',
  '#ffc53d',
  '#26b9b0',
  '#7b5cf0',
  '#3b8bf0',
  '#3fc544',
];

/**
 * One page of the app: the dark head band (breadcrumb, h1, lede), the community bar, and the
 * cream body. `ready` tells the app the page is complete, which sets the document title and
 * moves focus to the h1 after a navigation.
 */
export function View({
  title,
  titleLang,
  lede,
  crumbs,
  ready,
  docTitle,
  headExtra,
  aside,
  children,
}: {
  title: string;
  titleLang?: string;
  lede?: ReactNode;
  crumbs: Crumb[];
  ready: boolean;
  /** The <title>, when it should differ from the h1. */
  docTitle?: string;
  headExtra?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  const { copy, pageReady, locale } = useApp();
  useEffect(() => {
    if (ready) pageReady(docTitle ?? title);
  }, [ready, title, docTitle, pageReady]);
  return (
    <>
      <div className="cm-head">
        <div className="wrap">
          <nav className="cm-crumbs" aria-label={copy.breadcrumb}>
            <ol>
              <li>
                <a href={locale === 'en' ? '/' : `/${locale}`}>OutBrick</a>
              </li>
              {crumbs.map((crumb, i) => (
                <li key={i}>
                  {crumb.href ? (
                    <a href={crumb.href} lang={crumb.lang}>
                      {crumb.label}
                    </a>
                  ) : (
                    <span aria-current="page" lang={crumb.lang}>
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <div className="course" aria-hidden="true">
            {courseColours.map((c) => (
              <span key={c} style={{ background: c }} />
            ))}
          </div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="cm-title" tabIndex={-1} lang={titleLang}>
            {title}
          </h1>
          {lede ? <p className="lede">{lede}</p> : null}
          {headExtra}
        </div>
        <div className="road" aria-hidden="true" />
      </div>
      <CommunityBar />
      <div className="cm-body">
        <div className={`wrap ${aside ? 'cm-with-aside' : ''}`}>
          <div className="cm-main-col">{children}</div>
          {aside}
        </div>
      </div>
    </>
  );
}

/** The community's own navigation: home, search, FAQ, guidelines, and the member's corner. */
export function CommunityBar() {
  const { copy, fx, session, path, route, n, locale, refreshSession, announce, navigate } = useApp();
  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState<ApiFailure | null>(null);
  const signOut = async () => {
    setSigningOut(true); setSignOutError(null);
    try { await api.signOut(); await refreshSession(); announce(copy.settings.signedOut); navigate(path('/signin'), {replace:true}); }
    catch (error) {setSignOutError(error as ApiFailure);}
    finally {setSigningOut(false);}
  };
  const member = session?.member ?? null;
  const unread = session?.unreadNotifications ?? 0;
  const current = (name: Route['name']) =>
    route.name === name ? 'page' : undefined;
  const isMod = member && ['moderator', 'admin'].includes(member.role);
  return (
    <nav className="cm-bar" aria-label={copy.nav.label}>
      <div className="wrap">
        <ul>
          <li>
            <a href={path()} aria-current={current('home')}>
              {copy.nav.home}
            </a>
          </li>
          <li>
            <a href={path('/search')} aria-current={current('search')}>
              {copy.nav.search}
            </a>
          </li>
          <li>
            <a href={path('/faq')} aria-current={current('faq')}>
              {copy.nav.faq}
            </a>
          </li>
          <li>
            <a href={path('/guidelines')} aria-current={current('guidelines')}>
              {copy.nav.guidelines}
            </a>
          </li>
          <li>
            <a href={path('/library')} aria-current={current('library')}>
              {adminWords[locale].library}
            </a>
          </li>
          <li>
            <a href={path('/roadmap')} aria-current={current('roadmap')}>
              {fx.nav.roadmap}
            </a>
          </li>
          <li>
            <a
              href={path('/leaderboard')}
              aria-current={current('leaderboard')}
            >
              {fx.nav.leaderboard}
            </a>
          </li>
          {member ? (
            <>
              <li>
                <a
                  href={path('/bookmarks')}
                  aria-current={current('bookmarks')}
                >
                  {fx.nav.bookmarks}
                </a>
              </li>
              <li>
                <a
                  href={path('/notifications')}
                  aria-current={current('notifications')}
                >
                  {copy.nav.notifications}
                  {unread > 0 ? (
                    <span className="cm-count">
                      {copy.nav.unread(unread, n(unread))}
                    </span>
                  ) : null}
                </a>
              </li>
              <li>
                <a href={path('/settings')} aria-current={current('settings')}>
                  {copy.nav.settings}
                </a>
              </li>
              {isMod ? (
                <li>
                  <a href={path('/mod')} aria-current={current('mod')}>
                    {copy.nav.moderation}
                  </a>
                </li>
              ) : null}
              <li><button type="button" className="cm-nav-signout" disabled={signingOut} onClick={() => void signOut()}>{copy.nav.signOut}</button></li>
              {member.role === 'team' || member.role === 'admin' ? (
                <li>
                  <a href={path('/admin')} aria-current={current('admin')}>
                    {adminWords[locale].title}
                  </a>
                </li>
              ) : null}
            </>
          ) : session ? (
            <li>
              <a href={path('/signin')} aria-current={current('signin')}>
                {copy.nav.signIn}
              </a>
            </li>
          ) : null}
        </ul>
        {signOutError ? <ErrorNotice error={signOutError} /> : null}
        {member ? (
          <p className="cm-whoami">{copy.nav.signedInAs(member.displayName)}</p>
        ) : null}
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------------------
// Small pieces

/** A date: the full date in the text (and so in the heading list), or "3 hours ago" with the full date for screen readers. */
export function Time({
  iso,
  relative = false,
}: {
  iso: string;
  relative?: boolean;
}) {
  const { locale } = useApp();
  const full = fullDate(locale, iso);
  if (!relative) return <time dateTime={iso}>{full}</time>;
  return (
    <time dateTime={iso} title={full}>
      <span aria-hidden="true">{relativeDate(locale, iso)}</span>
      <span className="sr-only">{full}</span>
    </time>
  );
}

export function RoleBadge({ role }: { role: MemberRole }) {
  const { copy } = useApp();
  const badge = roleBadge(copy, role);
  return badge ? (
    <span className={`cm-role cm-role-${role === 'admin' ? 'team' : role}`}>
      {badge}
    </span>
  ) : null;
}

/** A member's name, linked to their profile, with the team or moderator badge as text. */
export function Member({
  member,
  link = true,
}: {
  member: PublicMember | null;
  link?: boolean;
}) {
  const { copy, fx, path } = useApp();
  const name = memberName(copy, member);
  return (
    <>
      {member && link ? (
        <a className="cm-author" href={path(`/u/${member.id}`)}>
          {name}
        </a>
      ) : (
        <span className="cm-author">{name}</span>
      )}
      {member ? <RoleBadge role={member.role} /> : null}
      {member?.topBadge ? (
        <BadgeChip
          badge={member.topBadge}
          name={fx.badges.names[member.topBadge]}
          title={fx.badges.descriptions[member.topBadge]}
        />
      ) : null}
    </>
  );
}

export function StatusBadge({
  status,
  note,
  shippedVersion,
}: {
  status: string | null;
  note: string | null;
  shippedVersion?: string | null;
}) {
  const { copy, fx } = useApp();
  if (!status) return null;
  const label =
    status === 'shipped' && shippedVersion
      ? fx.status.shippedIn(shippedVersion)
      : (copy.status[status] ?? status);
  return (
    <span className={`cm-badge cm-status cm-status-${status}`}>
      <span className="sr-only">{copy.statusLabel}: </span>
      {note && note.toLowerCase().startsWith(label.toLowerCase())
        ? note
        : note
          ? `${label}: ${note}`
          : label}
    </span>
  );
}

/** Numbered page links. Never infinite scroll. */
export function Pagination({
  page,
  pages,
  href,
  label,
}: {
  page: number;
  pages: number;
  href: (page: number) => string;
  label: string;
}) {
  const { copy, n } = useApp();
  if (pages <= 1) return null;
  const shown = new Set<number>(
    [1, pages, page - 1, page, page + 1].filter((p) => p >= 1 && p <= pages),
  );
  const list = [...shown].sort((a, b) => a - b);
  return (
    <nav className="cm-pages" aria-label={label}>
      <p className="sr-only">{copy.thread.pageOf(n(page), n(pages))}</p>
      <ul>
        {page > 1 ? (
          <li>
            <a href={href(page - 1)} rel="prev">
              {copy.thread.previous}
            </a>
          </li>
        ) : null}
        {list.map((p, i) => (
          <li key={p}>
            {i > 0 && p - list[i - 1] > 1 ? (
              <span className="cm-gap" aria-hidden="true">
                …
              </span>
            ) : null}
            <a
              href={href(p)}
              aria-current={p === page ? 'page' : undefined}
              aria-label={copy.thread.page(n(p))}
            >
              {n(p)}
            </a>
          </li>
        ))}
        {page < pages ? (
          <li>
            <a href={href(page + 1)} rel="next">
              {copy.thread.next}
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export function Loading() {
  const { copy } = useApp();
  return (
    <output className="cm-loading" aria-live="polite">
      {copy.loading}
    </output>
  );
}

export function ErrorNotice({
  error,
  retry,
}: {
  error: ApiFailure;
  retry?: () => void;
}) {
  const { copy } = useApp();
  return (
    <div className="cm-notice cm-notice-error" role="alert">
      <p>{errorText(copy, error)}</p>
      {retry ? (
        <button type="button" className="cm-act" onClick={retry}>
          {copy.retry}
        </button>
      ) : null}
    </div>
  );
}

/**
 * What a page shows while its data loads or when it failed: nothing while the static HTML is
 * still on screen (so the reader is not interrupted), otherwise a status line or the error.
 */
export function Pending({
  load,
  title,
  crumbs,
}: {
  load: { error: ApiFailure | null; reload: () => void };
  title?: string;
  crumbs?: Crumb[];
}) {
  const { staticShowing, copy } = useApp();
  if (staticShowing && !load.error) return null;
  if (staticShowing && load.error)
    return (
      <div className="cm-body">
        <div className="wrap">
          <ErrorNotice error={load.error} retry={load.reload} />
        </div>
      </div>
    );
  const heading = load.error
    ? load.error.code === 'not_found'
      ? copy.notFoundTitle
      : copy.form.problem
    : (title ?? copy.loading);
  return (
    <View title={heading} crumbs={crumbs ?? []} ready={!!load.error}>
      {load.error ? (
        <ErrorNotice error={load.error} retry={load.reload} />
      ) : (
        <Loading />
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Forms

export type FieldErrors = Record<string, string>;

/** The list of problems at the top of a form: linked to each field, and focused when it appears. */
export function ErrorSummary({
  errors,
  ids,
  summaryRef,
  general,
}: {
  errors: FieldErrors;
  ids: Record<string, string>;
  summaryRef: React.RefObject<HTMLDivElement | null>;
  general?: string;
}) {
  const { copy, n } = useApp();
  const id = useId();
  const keys = Object.keys(errors);
  if (!keys.length && !general)
    return <div ref={summaryRef} tabIndex={-1} hidden />;
  return (
    <div className="cm-summary" ref={summaryRef} tabIndex={-1}>
      <h2 id={`${id}-h`}>{copy.form.problem}</h2>
      {general ? <p>{general}</p> : null}
      {keys.length ? (
        <>
          <p>{copy.form.problemCount(keys.length, n(keys.length))}</p>
          <ul>
            {keys.map((key) => (
              <li key={key}>
                <a
                  href={`#${ids[key] ?? key}`}
                  onClick={(event) => {
                    const target = document.getElementById(ids[key] ?? key);
                    if (target) {
                      event.preventDefault();
                      target.focus();
                      target.scrollIntoView({ block: 'center' });
                    }
                  }}
                >
                  {errors[key]}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

/** Translate a server `fields` map ({ title: 'too_short' }) into messages. */
export function fieldMessages(
  copy: CommunityCopy,
  fields: Record<string, string> | undefined,
  fx?: CommunityFxCopy,
): FieldErrors {
  const out: FieldErrors = {};
  for (const [key, code] of Object.entries(fields ?? {})) {
    const special = fx
      ? ((fx.upload.problems as Record<string, string>)[code] ??
        (key.startsWith('poll.')
          ? (fx.poll.fieldCodes as Record<string, string>)[code]
          : undefined))
      : undefined;
    if (special) {
      out[key] = special;
      continue;
    }
    if (fx && key.startsWith('poll.')) {
      const m = key.match(/^poll\.options\.(\d+)$/);
      const label =
        key === 'poll.question'
          ? fx.poll.question
          : m
            ? fx.poll.option(String(Number(m[1]) + 1))
            : key === 'poll.closesAt'
              ? fx.poll.closes
              : fx.poll.legend;
      out[key] = (copy.form.codes[code] ?? copy.form.codes.invalid)(label);
      continue;
    }
    const label =
      copy.form.fields[key.replace(/^bug\./, '')] ??
      copy.form.fields[key] ??
      key;
    out[key] = (copy.form.codes[code] ?? copy.form.codes.invalid)(label);
  }
  return out;
}

type FieldProps = {
  id: string;
  label: string;
  hint?: ReactNode;
  error?: string;
  optional?: boolean;
  children: (props: {
    id: string;
    'aria-describedby'?: string;
    'aria-invalid'?: true;
  }) => ReactNode;
  className?: string;
};

/** A labelled field with its hint and error, wired with aria-describedby and aria-invalid. */
export function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
  className = '',
}: FieldProps) {
  const { copy } = useApp();
  const described =
    [hint ? `${id}-hint` : '', error ? `${id}-error` : '']
      .filter(Boolean)
      .join(' ') || undefined;
  return (
    <div
      className={`cm-field ${className}`}
      data-invalid={error ? '' : undefined}
    >
      <label htmlFor={id}>
        {label}
        {optional ? (
          <span className="cm-optional"> ({copy.form.optional})</span>
        ) : null}
      </label>
      {hint ? (
        <p className="cm-hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="cm-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
      {children({
        id,
        'aria-describedby': described,
        'aria-invalid': error ? true : undefined,
      })}
    </div>
  );
}

/** The spam trap: people never meet it, bots fill it in and the server drops the post. */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const { copy } = useApp();
  const id = useId();
  return (
    <div className="cm-hp" aria-hidden="true">
      <label htmlFor={id}>{copy.form.honeypot}</label>
      <input
        id={id}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/** The placeholder a sentence template is built with, so a name or date inside it can stay an element. */
export const MARK = '\u0000';

/** Render a translated sentence made with MARK placeholders, putting `parts` in their places in order. */
export function Fill({
  template,
  parts,
}: {
  template: string;
  parts: ReactNode[];
}) {
  const pieces = template.split(MARK);
  return (
    <>
      {pieces.map((piece, i) => (
        <span key={i}>
          {piece}
          {i < pieces.length - 1 ? parts[i] : null}
        </span>
      ))}
    </>
  );
}

export const formatNumber = (locale: CommunityLocale) => (value: number) =>
  number(locale, value);
