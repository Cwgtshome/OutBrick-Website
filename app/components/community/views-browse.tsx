'use client';

/** Reading the community: the home page, a category, search, the FAQ, the guidelines and a member's profile. */

import { useId, useState, type SubmitEvent } from 'react';
import type { Category, FollowLevel, ThreadSummary, CommunityLocale } from '../../../lib/community/contract';
import { communityLocales, threadPath, ideaStatuses, bugStatuses } from '../../../lib/community/contract';
import { categoryColours, categoryWords, type CategorySlug } from '../../../lib/i18n/community';
import { localeNames } from '../../../lib/i18n/locales';
import { pageOfPost } from '../../../lib/community/static-html';
import { dayDate } from '../../../lib/community/format';
import { api } from './api';
import { ErrorNotice, Fill, MARK, Member, Pagination, Pending, StatusBadge, Time, View, errorText, useApp, useLoad, type Route } from './core';

/** "fr,en" for "my language and English"; nothing for all languages; one code for one. */
export function languageParam(locale: CommunityLocale, choice: string): string | undefined {
  if (choice === 'all') return undefined;
  if (choice === 'mine' || !choice) return locale === 'en' ? 'en' : `${locale},en`;
  return (communityLocales as readonly string[]).includes(choice) ? choice : undefined;
}

// ---------------------------------------------------------------------------------------
// Shared lists

export function ThreadList({ threads, headingLevel = 3 }: { threads: ThreadSummary[]; headingLevel?: 2 | 3 }) {
  const { copy, locale, n } = useApp();
  const H = headingLevel === 2 ? 'h2' : 'h3';
  return (
    <ul className="cm-threads">
      {threads.map((t) => {
        const cat = categoryWords(locale, t.category.slug);
        return (
          <li key={t.id} className="cm-thread" style={{ '--cat': categoryColours[t.category.slug as CategorySlug] ?? '#3b8bf0' } as React.CSSProperties}>
            <H className="cm-thread-title">
              <a href={threadPath(locale, t)} lang={t.language}>
                {t.title}
              </a>
            </H>
            <p className="cm-badges">
              <span className="cm-badge cm-cat-badge">{cat.name}</span>
              {t.pinned ? <span className="cm-badge">{copy.list.pinned}</span> : null}
              {t.solved ? <span className="cm-badge cm-badge-solution">{copy.list.solved}</span> : null}
              {t.locked ? <span className="cm-badge">{copy.list.locked}</span> : null}
              {t.hidden ? <span className="cm-badge">{copy.list.hidden}</span> : null}
              <StatusBadge status={t.status} note={t.statusNote} />
              {t.language !== locale ? (
                <span className="cm-badge" lang={t.language}>
                  {localeNames[t.language]}
                </span>
              ) : null}
            </p>
            <p className="cm-meta">
              <ByLine kind="started" member={t.author} iso={t.createdAt} />
              {t.lastPoster && t.replyCount > 0 ? (
                <>
                  {' · '}
                  <ByLine kind="last" member={t.lastPoster} iso={t.lastPostAt} />
                </>
              ) : null}
            </p>
            <p className="cm-stats">
              <span>{copy.stats.replies(t.replyCount, n(t.replyCount))}</span>
              {t.category.kind === 'ideas' ? <span>{copy.stats.votes(t.voteCount, n(t.voteCount))}</span> : null}
              <span>{copy.stats.views(t.viewCount, n(t.viewCount))}</span>
              {t.unread ? (
                <a href={threadPath(locale, t) + (t.replyCount + 1 - t.unread > 0 ? `?page=${pageOfPost(t.replyCount + 2 - t.unread)}#post-${t.replyCount + 2 - t.unread}` : '')} className="cm-unread">
                  {copy.list.unread(t.unread, n(t.unread))}
                </a>
              ) : null}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

function ByLine({ kind, member, iso }: { kind: 'started' | 'last'; member: ThreadSummary['author'] | null; iso: string }) {
  const { copy } = useApp();
  // The sentence is built from translated parts so the name stays a link.
  const sentence = kind === 'started' ? copy.list.startedBy(MARK, MARK) : copy.list.lastReply(MARK, MARK);
  return (
    <span>
      <Fill template={sentence} parts={[<Member key="m" member={member} />, <Time key="t" iso={iso} relative />]} />
    </span>
  );
}

function CategoryList({ categories, compact = false }: { categories: Category[]; compact?: boolean }) {
  const { copy, locale, path, n } = useApp();
  return (
    <ul className={compact ? 'cm-aside-list' : 'cm-cats'}>
      {categories.map((c) => {
        const words = categoryWords(locale, c.slug);
        return (
          <li key={c.slug} className={compact ? undefined : 'cm-cat'} style={{ '--cat': categoryColours[c.slug as CategorySlug] ?? '#3b8bf0' } as React.CSSProperties}>
            {compact ? (
              <a href={path(`/c/${c.slug}`)}>{words.name}</a>
            ) : (
              <>
                <h3>
                  <a href={path(`/c/${c.slug}`)}>{words.name}</a>
                </h3>
                <p>{words.description}</p>
                <p className="cm-stats">
                  <span>{copy.stats.threads(c.threadCount, n(c.threadCount))}</span>
                  <span>{copy.stats.posts(c.postCount, n(c.postCount))}</span>
                  <span>{c.lastPostAt ? <Fill template={copy.lastActivity(MARK)} parts={[<Time key="t" iso={c.lastPostAt} relative />]} /> : copy.noActivity}</span>
                </p>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function CategoryAside() {
  const { copy } = useApp();
  const cats = useLoad('categories', () => api.categories());
  const id = useId();
  if (!cats.data) return null;
  return (
    <aside className="cm-aside" aria-labelledby={id}>
      <h2 id={id}>{copy.categoryAside}</h2>
      <CategoryList categories={cats.data.categories} compact />
    </aside>
  );
}

export function SearchBox({ initial = '', category = '' }: { initial?: string; category?: string }) {
  const { copy, navigate, path } = useApp();
  const [q, setQ] = useState(initial);
  const id = useId();
  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (category) params.set('category', category);
    navigate(path('/search') + (params.size ? `?${params}` : ''));
  };
  return (
    <search className="cm-search">
      <form action={path('/search')} method="get" onSubmit={submit}>
        <label htmlFor={id}>{copy.home.searchLabel}</label>
        <div className="cm-search-row">
          <input id={id} type="search" name="q" value={q} onChange={(e) => setQ(e.target.value)} enterKeyHint="search" autoComplete="off" />
          <button type="submit" className="btn">
            {copy.home.searchButton}
          </button>
        </div>
      </form>
    </search>
  );
}

/** Watch / Mute toggles for a category or thread. */
export function FollowButtons({ level, onChange, watchLabel, muteLabel }: { level: FollowLevel; onChange: (level: FollowLevel) => Promise<FollowLevel>; watchLabel: string; muteLabel: string }) {
  const { copy, announce } = useApp();
  const [busy, setBusy] = useState(false);
  const [current, setCurrent] = useState(level);
  const set = async (target: FollowLevel) => {
    const next = current === target ? 'none' : target;
    setBusy(true);
    try {
      const result = await onChange(next);
      setCurrent(result);
      announce(result === 'watch' ? copy.follow.nowWatching : result === 'mute' ? copy.follow.nowMuted : copy.follow.nowNone);
    } catch (error) {
      announce(errorText(copy, error as never));
    } finally {
      setBusy(false);
    }
  };
  return (
    <fieldset className="cm-follow">
      <legend className="cm-follow-label">{copy.follow.legend}</legend>
      <button type="button" className="cm-act" aria-pressed={current === 'watch'} aria-label={watchLabel} disabled={busy} onClick={() => void set('watch')}>
        {current === 'watch' ? copy.follow.watching : copy.follow.watch}
      </button>
      <button type="button" className="cm-act" aria-pressed={current === 'mute'} aria-label={muteLabel} disabled={busy} onClick={() => void set('mute')}>
        {current === 'mute' ? copy.follow.muted : copy.follow.mute}
      </button>
    </fieldset>
  );
}

// ---------------------------------------------------------------------------------------
// Home

export function HomeView() {
  const { copy, locale, path } = useApp();
  const cats = useLoad('categories', () => api.categories());
  const latest = useLoad(`latest:${locale}`, () => api.threads({ sort: 'latest', language: languageParam(locale, 'mine') }));
  const ready = !!cats.data && !latest.loading;
  if (!cats.data) return <Pending load={cats} title={copy.home.title} />;
  return (
    <View title={copy.home.title} docTitle={copy.meta.homeTitle} lede={copy.home.lede} crumbs={[{ label: copy.nav.label }]} ready={ready}>
      <ul className="cm-points">
        {copy.home.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="cm-toolbar">
        <SearchBox />
        <a className="btn" href={path('/new')}>
          {copy.home.startThread}
        </a>
      </div>
      <section className="cm-section" aria-labelledby="cm-cats-h">
        <h2 id="cm-cats-h">{copy.home.categoriesHeading}</h2>
        <CategoryList categories={cats.data.categories} />
      </section>
      <section className="cm-section" aria-labelledby="cm-latest-h">
        <h2 id="cm-latest-h">{copy.home.latestHeading}</h2>
        {latest.error ? <ErrorNotice error={latest.error} retry={latest.reload} /> : latest.data ? latest.data.threads.length ? <ThreadList threads={latest.data.threads} /> : <p>{copy.category.empty}</p> : null}
      </section>
      <p className="cm-links">
        <a href={path('/faq')}>{copy.faq.title}</a> <a href={path('/guidelines')}>{copy.home.readGuidelines}</a>
      </p>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Category

export function CategoryView({ route }: { route: Extract<Route, { name: 'category' }> }) {
  const { copy, locale, path, navigate, session, n } = useApp();
  const cats = useLoad('categories', () => api.categories());
  const key = `threads:${route.slug}:${route.sort}:${route.language}:${route.status}:${route.page}`;
  const threads = useLoad(key, () => api.threads({ category: route.slug, sort: route.sort, language: languageParam(locale, route.language), status: route.status || undefined, page: route.page }));
  const [language, setLanguage] = useState(route.language);
  const [status, setStatus] = useState(route.status);
  const formId = useId();
  const category = cats.data?.categories.find((c) => c.slug === route.slug);
  const words = categoryWords(locale, route.slug);
  const crumbs = [{ href: path(), label: copy.nav.label }, { label: words.name }];
  if (!cats.data) return <Pending load={cats} title={words.name} crumbs={crumbs} />;
  if (!category) return <NotFoundView />;
  const statuses = category.kind === 'bugs' ? bugStatuses : category.kind === 'ideas' ? ideaStatuses : null;
  const member = session?.member;
  const canStart = !category.teamOnlyThreads || (member && ['team', 'admin'].includes(member.role));
  const href = (params: Partial<{ sort: string; language: string; status: string; page: number }>) => {
    const next = { sort: route.sort, language: route.language, status: route.status, page: 1, ...params };
    const q = new URLSearchParams();
    if (next.sort !== 'latest') q.set('sort', next.sort);
    if (next.language !== 'mine') q.set('language', next.language);
    if (next.status) q.set('status', next.status);
    if (next.page > 1) q.set('page', String(next.page));
    return path(`/c/${route.slug}`) + (q.size ? `?${q}` : '');
  };
  const apply = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(href({ language, status }), { focus: false });
  };
  const data = threads.data;
  const filtered = route.language !== 'all' || !!route.status;
  return (
    <View
      title={words.name}
      lede={words.description}
      crumbs={crumbs}
      ready={!threads.loading}
      aside={<CategoryAside />}
      headExtra={
        <div className="cm-head-actions">
          {canStart ? (
            <a className="btn" href={path(`/new?category=${encodeURIComponent(category.slug)}`)}>
              {copy.home.startThread}
            </a>
          ) : (
            <p className="cm-note-dark">{copy.category.teamOnly}</p>
          )}
          {member ? (
            <FollowButtons
              level={category.following ?? 'none'}
              onChange={async (level) => (await api.followCategory(category.slug, level)).level}
              watchLabel={copy.follow.watchCategory(words.name)}
              muteLabel={copy.follow.muteCategory(words.name)}
            />
          ) : null}
        </div>
      }
    >
      <nav className="cm-sorts" aria-label={copy.category.sortLabel}>
        <ul>
          {(['latest', 'new', 'top', 'unanswered'] as const).map((sort) => (
            <li key={sort}>
              <a href={href({ sort })} aria-current={route.sort === sort ? 'true' : undefined}>
                {copy.category.sorts[sort]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <form className="cm-filters" onSubmit={apply} aria-labelledby={`${formId}-h`}>
        <h2 className="sr-only" id={`${formId}-h`}>
          {copy.category.filters}
        </h2>
        <div className="cm-field">
          <label htmlFor={`${formId}-lang`}>{copy.category.language}</label>
          <select id={`${formId}-lang`} value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="mine">{locale === 'en' ? localeNames.en : copy.category.langMine(localeNames[locale])}</option>
            <option value="all">{copy.category.langAll}</option>
            {communityLocales.map((l) => (
              <option key={l} value={l} lang={l}>
                {localeNames[l]}
              </option>
            ))}
          </select>
        </div>
        {statuses ? (
          <div className="cm-field">
            <label htmlFor={`${formId}-status`}>{copy.category.status}</label>
            <select id={`${formId}-status`} value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">{copy.category.statusAll}</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {copy.status[s]}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <button type="submit" className="cm-act">
          {copy.category.apply}
        </button>
      </form>
      {threads.error ? (
        <ErrorNotice error={threads.error} retry={threads.reload} />
      ) : data ? (
        data.threads.length ? (
          <>
            <output className="cm-count-line" aria-live="polite">
              {copy.category.showing(n((data.page - 1) * 30 + 1), n((data.page - 1) * 30 + data.threads.length), n(data.total))}
            </output>
            <ThreadList threads={data.threads} headingLevel={2} />
            <Pagination page={data.page} pages={data.pages} href={(page) => href({ page })} label={copy.category.pages} />
          </>
        ) : (
          <p className="cm-empty">{filtered ? copy.category.emptyFiltered : copy.category.empty}</p>
        )
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Search

export function SearchView({ route }: { route: Extract<Route, { name: 'search' }> }) {
  const { copy, locale, path, navigate, n } = useApp();
  const [q, setQ] = useState(route.q);
  const [category, setCategory] = useState(route.category);
  const cats = useLoad('categories', () => api.categories());
  const results = useLoad(route.q ? `search:${route.q}:${route.category}:${route.page}` : null, () => api.search({ q: route.q, category: route.category || undefined, page: route.page }));
  const id = useId();
  const submit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (category) params.set('category', category);
    navigate(path('/search') + (params.size ? `?${params}` : ''), { focus: false });
  };
  const hitHref = (hit: NonNullable<typeof results.data>['hits'][number]) => {
    if (hit.type === 'faq') return path('/faq');
    if (!hit.threadId || !hit.slug) return path();
    const base = threadPath(locale, { id: hit.threadId, slug: hit.slug });
    return hit.postNumber && hit.postNumber > 1 ? `${base}${pageOfPost(hit.postNumber) > 1 ? `?page=${pageOfPost(hit.postNumber)}` : ''}#post-${hit.postNumber}` : base;
  };
  const pageHref = (page: number) => {
    const params = new URLSearchParams({ q: route.q });
    if (route.category) params.set('category', route.category);
    if (page > 1) params.set('page', String(page));
    return `${path('/search')}?${params}`;
  };
  const data = results.data;
  return (
    <View title={copy.search.title} lede={copy.search.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.search.title }]} ready={!results.loading}>
      <search className="cm-search cm-search-page">
        <form action={path('/search')} method="get" onSubmit={submit}>
          <div className="cm-field">
            <label htmlFor={`${id}-q`}>{copy.search.label}</label>
            <input id={`${id}-q`} type="search" name="q" value={q} onChange={(e) => setQ(e.target.value)} enterKeyHint="search" autoComplete="off" />
          </div>
          <div className="cm-field">
            <label htmlFor={`${id}-c`}>{copy.search.category}</label>
            <select id={`${id}-c`} name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">{copy.search.allCategories}</option>
              {(cats.data?.categories ?? []).map((c) => (
                <option key={c.slug} value={c.slug}>
                  {categoryWords(locale, c.slug).name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn">
            {copy.search.button}
          </button>
        </form>
      </search>
      <output className="cm-count-line" aria-live="polite">
        {!route.q ? copy.search.prompt : data ? (data.total ? copy.search.results(data.total, n(data.total)) : copy.search.none(route.q)) : ''}
      </output>
      {results.error ? <ErrorNotice error={results.error} retry={results.reload} /> : null}
      {data && data.hits.length ? (
        <>
          <ol className="cm-hits" start={(data.page - 1) * 20 + 1}>
            {data.hits.map((hit, i) => (
              <li key={`${hit.type}-${hit.threadId}-${hit.postNumber}-${i}`} className="cm-hit">
                <h2 className="cm-thread-title">
                  <a href={hitHref(hit)} lang={hit.language}>
                    {hit.type === 'post' ? copy.search.inThread(hit.title) : hit.title}
                  </a>
                </h2>
                <p className="cm-badges">
                  <span className="cm-badge">{copy.search.kinds[hit.type]}</span>
                  {hit.category ? <span className="cm-badge cm-cat-badge">{categoryWords(locale, hit.category.slug).name}</span> : null}
                  {hit.solved ? <span className="cm-badge cm-badge-solution">{copy.list.solved}</span> : null}
                  <Time iso={hit.createdAt} relative />
                </p>
                <p className="cm-excerpt" lang={hit.language} dangerouslySetInnerHTML={{ __html: hit.excerptHtml }} />
              </li>
            ))}
          </ol>
          <Pagination page={data.page} pages={data.pages} href={pageHref} label={copy.search.title} />
        </>
      ) : null}
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// FAQ and guidelines

export function FaqView() {
  const { copy, locale, path, supportFaqs } = useApp();
  const faq = useLoad(`faq:${locale}`, () => api.faq(locale));
  const entries = faq.data?.entries ?? [];
  const topics = [...new Set(entries.map((e) => e.topic))];
  const support = locale === 'en' ? '/support' : `/${locale}/support`;
  return (
    <View title={copy.faq.title} lede={copy.faq.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.faq.title }]} ready={!faq.loading}>
      <section className="cm-section cm-faq" aria-labelledby="cm-faq-community">
        <h2 id="cm-faq-community">{copy.faq.community}</h2>
        {faq.error ? <ErrorNotice error={faq.error} retry={faq.reload} /> : !entries.length && !faq.loading ? <p>{copy.faq.none}</p> : null}
        {topics.map((topic) => (
          <div key={topic} className="cm-faq-topic">
            <h3>{topic}</h3>
            {entries
              .filter((e) => e.topic === topic)
              .map((e) => (
                <div key={e.id} className="cm-faq-item" id={`faq-${e.id}`} lang={e.locale}>
                  <h4>{e.question}</h4>
                  <div className="cm-post-body" dangerouslySetInnerHTML={{ __html: e.answerHtml }} />
                  {e.threadId && e.threadSlug ? (
                    <p>
                      <a href={threadPath(locale, { id: e.threadId, slug: e.threadSlug })}>{copy.faq.fromThread}</a>
                    </p>
                  ) : null}
                </div>
              ))}
          </div>
        ))}
      </section>
      <section className="cm-section cm-faq" aria-labelledby="cm-faq-support">
        <h2 id="cm-faq-support">{copy.faq.support}</h2>
        {supportFaqs.map((f) => (
          <div key={f.question} className="cm-faq-item">
            <h3>{f.question}</h3>
            <p>{f.answer}</p>
          </div>
        ))}
        <p>
          <a href={support}>{copy.faq.supportLink}</a>
        </p>
      </section>
    </View>
  );
}

export function GuidelinesView() {
  const { copy, locale, path } = useApp();
  const g = copy.guidelines;
  return (
    <View title={g.title} lede={g.lede} crumbs={[{ href: path(), label: copy.nav.label }, { label: g.title }]} ready headExtra={<p className="stamp">{g.updated}</p>}>
      {g.sections.map((s, i) => (
        <section key={s.heading} className="cm-section cm-guide" aria-labelledby={`cm-guide-${i}`}>
          <h2 id={`cm-guide-${i}`}>{s.heading}</h2>
          {s.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {s.points ? (
            <ul className="cm-points">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
      <p className="cm-links">
        <a href={locale === 'en' ? '/privacy' : `/${locale}/privacy`}>{g.privacy}</a> <a href={locale === 'en' ? '/contact' : `/${locale}/contact`}>{g.contact}</a>
      </p>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// A member, and the page that is not there

export function MemberView({ route }: { route: Extract<Route, { name: 'member' }> }) {
  const { copy, locale, path, n } = useApp();
  const profile = useLoad(`member:${route.id}`, () => api.member(route.id));
  if (!profile.data) return <Pending load={profile} crumbs={[{ href: path(), label: copy.nav.label }]} />;
  const { member, recentThreads } = profile.data;
  return (
    <View
      title={copy.profile.title(member.displayName)}
      crumbs={[{ href: path(), label: copy.nav.label }, { label: member.displayName }]}
      ready
      headExtra={
        <p className="cm-meta-dark">
          <RoleText role={member.role} /> {copy.profile.joined(dayDate(locale, member.joinedAt))} · {copy.profile.posts(member.postCount, n(member.postCount))} · {copy.profile.solved(member.solvedCount, n(member.solvedCount))}
        </p>
      }
    >
      <section className="cm-section">
        <p className="cm-bio">{member.bio || copy.profile.noBio}</p>
      </section>
      <section className="cm-section" aria-labelledby="cm-recent-h">
        <h2 id="cm-recent-h">{copy.profile.recent}</h2>
        {recentThreads.length ? <ThreadList threads={recentThreads} /> : <p>{copy.profile.none}</p>}
      </section>
    </View>
  );
}

function RoleText({ role }: { role: string }) {
  const { copy } = useApp();
  const text = role === 'team' || role === 'admin' ? copy.roles.team : role === 'moderator' ? copy.roles.moderator : role === 'trusted' ? copy.roles.trusted : null;
  return text ? <span className="cm-role">{text}</span> : null;
}

export function NotFoundView() {
  const { copy, path } = useApp();
  return (
    <View title={copy.notFoundTitle} lede={copy.notFoundLede} crumbs={[{ href: path(), label: copy.nav.label }, { label: copy.notFoundTitle }]} ready>
      <p>
        <a className="btn" href={path()}>
          {copy.backHome}
        </a>
      </p>
    </View>
  );
}
