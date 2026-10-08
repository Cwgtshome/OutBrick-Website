'use client';
import { useEffect, useId, useRef, useState, type ReactNode, type SubmitEvent } from 'react';
import type {
  AdminMember,
  Application,
  ApplicationKind,
  EditorialContent,
  PolicyNoticeRequest,
  SupportCaseEvent,
  SupportCaseFilter,
  SupportCaseStatus,
} from '../../../lib/community/admin-contract';
import { affiliateLink, applicationDecisions, editorialPath, SUPPORT_CASE_PAGE } from '../../../lib/community/admin-contract';
import type { CommunityLocale, MemberRole } from '../../../lib/community/contract';
import { adminWords } from '../../../lib/i18n/admin';
import { localeNames } from '../../../lib/i18n/locales';
import { renderMarkdown } from '../../../netlify/community/markdown';
import { api, ApiFailure } from './api';
import { View, Pending, ErrorNotice, Field, Loading, Time, useApp, useLoad } from './core';
function AdminError({ error }: { error: ApiFailure }) {
  const { locale } = useApp();
  return error.code === 'conflict' ? (
    <div className="cm-notice cm-notice-error" role="alert">
      <p>{adminWords[locale].newVersion}</p>
    </div>
  ) : (
    <ErrorNotice error={error} />
  );
}
const roles: MemberRole[] = ['member', 'trusted', 'moderator', 'team', 'admin'];

export function AdminView() {
  const { locale, session, copy, path } = useApp(),
    w = adminWords[locale];
  if (!session?.member || !['team', 'admin'].includes(session.member.role))
    return (
      <View
        title={w.title}
        docTitle={w.title}
        crumbs={[{ label: copy.nav.label, href: path() }, { label: w.title }]}
        ready
      >
        <p>{w.denied}</p>
        <a
          className="btn"
          href={path('/signin?returnTo=' + encodeURIComponent(path('/admin')))}
        >
          {copy.nav.signIn}
        </a>
      </View>
    );
  return <Dashboard />;
}
function Dashboard() {
  const { locale, session, copy, path, announce, here } = useApp(),
    w = adminWords[locale];
  const [link] = useState(() => deepLink(here));
  const [page, setPage] = useState(1),
    [contentPage, setContentPage] = useState(1),
    load = useLoad(`admin:${page}:${contentPage}`, () => api.dashboard(page, contentPage));
  const [editing, setEditing] = useState<EditorialContent | null>(null),
    [formOn, setFormOn] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState<ApiFailure | null>(null);
  if (!load.data) return <Pending load={load} title={w.title} />;
  const data = load.data,
    isAdmin = session?.member?.role === 'admin';
  const saved = (content: EditorialContent) => {
    setEditing(content);
    load.reload();
    announce(w.saved);
  };
  const watch = async () => {
    setBusy(true);
    setError(null);
    try {
      await api.watchAll(!data.watchingAll);
      load.reload();
      announce(w.saved);
    } catch (e) {
      setError(e as ApiFailure);
    } finally {
      setBusy(false);
    }
  };
  return (
    <View
      title={w.title}
      docTitle={w.title}
      lede={w.lede}
      crumbs={[{ label: copy.nav.label, href: path() }, { label: w.title }]}
      ready={!load.loading}
    >
      <p>{w.memberHelp}</p>
      <div className="cm-toolbar">
        {session?.member?.role === 'admin' ? (
          <a className="btn" href={path('/mod')}>{w.moderation}</a>
        ) : null}
        <button className="btn" onClick={load.reload} disabled={load.loading}>
          {w.refresh}
        </button>
        <button className="btn" disabled={busy} onClick={() => void watch()}>
          {data.watchingAll ? w.watchOff : w.watch}
        </button>
        <a className="btn" href={path('/library')}>
          {w.library}
        </a>
      </div>
      {data.watchingAll ? <p className="cm-note">{w.watching}</p> : null}
      {error ? <AdminError error={error} /> : null}
      <dl className="cm-admin-counts">
        {(
          [
            'members',
            'threads',
            'reports',
            'pending',
            'drafts',
            'published',
          ] as const
        ).map((k) => (
          <div key={k}>
            <dt>{w[`${k}Count`]}</dt>
            <dd>{data.counts[k]}</dd>
          </div>
        ))}
      </dl>
      <SupportCases initialCase={link.caseId} />
      <Applications initialKind={link.applicationKind} initialId={link.applicationId} />
      {isAdmin ? <PolicyNotice /> : null}
      {isAdmin ? (
        <section className="cm-section" aria-labelledby="cm-admin-members">
          <h2 id="cm-admin-members">{w.members}</h2>
          <ul className="cm-admin-members">
            {data.members.map((m) => (
              <MemberRoleEditor
                key={`${m.id}:${m.role}`}
                member={m}
                self={m.id === session?.member?.id}
                onSaved={load.reload}
              />
            ))}
          </ul>
          <div className="cm-toolbar">
            <button
              className="cm-act"
              disabled={page <= 1 || load.loading}
              onClick={() => setPage((p) => p - 1)}
            >
              {w.previous}
            </button>
            <span>
              {page} / {data.memberPages}
            </span>
            <button
              className="cm-act"
              disabled={page >= data.memberPages || load.loading}
              onClick={() => setPage((p) => p + 1)}
            >
              {w.next}
            </button>
          </div>
        </section>
      ) : null}
      <section className="cm-section" aria-labelledby="cm-admin-content">
        <h2 id="cm-admin-content">{w.content}</h2>
        <p>{w.legacy}</p>
        <button
          className="btn"
          onClick={() => {
            setEditing(null);
            setFormOn(true);
          }}
        >
          {w.create}
        </button>
        {formOn ? (
          <ContentEditor
            key={editing ? `${editing.id}:${editing.revision}` : 'new'}
            content={editing}
            onSaved={saved}
            onCancel={() => setFormOn(false)}
          />
        ) : null}
        <ul className="cm-threads">
          {data.content.map((c) => (
            <ContentRow
              key={`${c.id}:${c.revision}`}
              content={c}
              admin={isAdmin}
              onEdit={() => {
                setEditing(c);
                setFormOn(true);
              }}
              onSaved={load.reload}
            />
          ))}
        </ul>
        {!data.content.length ? <p>{w.empty}</p> : null}
        <div className="cm-toolbar">
          <button className="cm-act" disabled={contentPage <= 1 || load.loading} onClick={() => setContentPage((p) => p - 1)}>{w.previous}</button>
          <span>{contentPage} / {data.contentPages}</span>
          <button className="cm-act" disabled={contentPage >= data.contentPages || load.loading} onClick={() => setContentPage((p) => p + 1)}>{w.next}</button>
        </div>
      </section>
      <section className="cm-section" aria-labelledby="cm-admin-audit">
        <h2 id="cm-admin-audit">{w.audit}</h2>
        <ul>
          {data.audit.map((a) => (
            <li key={a.id}>
              <code>{a.action}</code> · #{a.targetId} ·{' '}
              <Time iso={a.createdAt} />
            </li>
          ))}
        </ul>
      </section>
    </View>
  );
}
function MemberRoleEditor({
  member,
  self,
  onSaved,
}: {
  member: AdminMember;
  self: boolean;
  onSaved: () => void;
}) {
  const { locale, announce, copy, path } = useApp(),
    w = adminWords[locale];
  const [role, setRole] = useState(member.role),
    [confirm, setConfirm] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState<ApiFailure | null>(null);
  const save = async () => {
    setBusy(true);
    setError(null);
    try {
      await api.setMemberRole(member.id, role);
      onSaved();
      announce(w.saved);
    } catch (e) {
      setError(e as ApiFailure);
    } finally {
      setBusy(false);
      setConfirm(false);
    }
  };
  return (
    <li>
      <h3>
        <a href={path('/u/' + member.id)}>{member.displayName}</a>
      </h3>
      <p>
        {member.verified ? w.verified : copy.errors.unverified} ·{' '}
        <Time iso={member.joinedAt} />
      </p>
      <label htmlFor={`role-${member.id}`}>{w.role}</label>
      <select
        id={`role-${member.id}`}
        value={role}
        disabled={self || busy}
        onChange={(e) => {
          setRole(e.target.value as MemberRole);
          setConfirm(false);
        }}
      >
        {roles.map((r, i) => (
          <option
            key={r}
            value={r}
            disabled={!member.verified && r !== 'member'}
          >
            {w.roles[i]}
          </option>
        ))}
      </select>
      <button
        className="cm-act"
        disabled={self || busy || role === member.role}
        onClick={() => setConfirm(true)}
      >
        {w.save}
      </button>
      {confirm ? (
        <div className="cm-note">
          <p>
            {member.displayName} → {w.roles[roles.indexOf(role)]}
          </p>
          <button className="btn" disabled={busy} onClick={() => void save()}>
            {w.confirm}
          </button>
          <button
            className="cm-act"
            disabled={busy}
            onClick={() => setConfirm(false)}
          >
            {w.cancel}
          </button>
        </div>
      ) : null}
      {error ? <AdminError error={error} /> : null}
    </li>
  );
}
function ContentEditor({
  content,
  onSaved,
  onCancel,
}: {
  content: EditorialContent | null;
  onSaved: (c: EditorialContent) => void;
  onCancel: () => void;
}) {
  const { locale } = useApp(),
    w = adminWords[locale];
  const [busy, setBusy] = useState(false),
    [error, setError] = useState<ApiFailure | null>(null),
    [preview, setPreview] = useState(content?.body || '');
  const submit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setBusy(true);
    setError(null);
    try {
      const result = await api.saveContent(
        {
          locale: String(
            form.get('locale') as string,
          ) as EditorialContent['locale'],
          kind: String(form.get('kind') as string) as EditorialContent['kind'],
          slug: String(form.get('slug') as string),
          title: String(form.get('title') as string),
          summary: String(form.get('summary') as string),
          body: String(form.get('body') as string),
          revision: content?.revision,
        },
        content?.id,
      );
      onSaved(result.content);
    } catch (err) {
      setError(err as ApiFailure);
    } finally {
      setBusy(false);
    }
  };
  const locked = !!content?.publishedAt || content?.state === 'published';
  return (
    <form
      className="cm-form cm-admin-editor"
      onSubmit={(e) => void submit(e)}
      aria-label={w.content}
    >
      <p>{w.publishHelp}</p>
      {error ? <AdminError error={error} /> : null}
      <label>
        {w.kind}
        <select
          name="kind"
          defaultValue={content?.kind || 'blog'}
          disabled={busy}
        >
          {(['blog', 'page'] as const).map((k) => (
            <option value={k} key={k} disabled={locked && k !== content?.kind}>
              {w[k]}
            </option>
          ))}
        </select>
      </label>
      <label>
        {w.language}
        <select
          name="locale"
          defaultValue={content?.locale || locale}
          disabled={busy}
        >
          {Object.entries(localeNames).map(([l, name]) => (
            <option
              value={l}
              key={l}
              disabled={locked && l !== content?.locale}
            >
              {name}
            </option>
          ))}
        </select>
      </label>
      <label>
        {w.slug}
        <input
          name="slug"
          defaultValue={content?.slug || ''}
          readOnly={locked}
          pattern="[a-z0-9][a-z0-9-]{1,79}"
          maxLength={80}
          required
          disabled={busy}
        />
      </label>
      <label>
        {w.headline}
        <input
          name="title"
          defaultValue={content?.title || ''}
          minLength={4}
          maxLength={140}
          required
          disabled={busy}
        />
      </label>
      <label>
        {w.summary}
        <textarea
          name="summary"
          defaultValue={content?.summary || ''}
          maxLength={500}
          disabled={busy}
        />
      </label>
      <label>
        {w.body}
        <textarea
          name="body"
          defaultValue={content?.body || ''}
          required
          rows={14}
          maxLength={20000}
          disabled={busy}
          onChange={(e) => setPreview(e.target.value)}
        />
      </label>
      <div className="cm-toolbar">
        <button
          className="btn"
          type="submit"
          disabled={busy || content?.state === 'published'}
        >
          {w.saveDraft}
        </button>
        <button
          type="button"
          className="cm-act"
          disabled={busy}
          onClick={onCancel}
        >
          {w.cancel}
        </button>
      </div>
      {preview ? (
        <details>
          <summary>{w.preview}</summary>
          <div
            className="cm-prose"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(preview).html }}
          />
        </details>
      ) : null}
    </form>
  );
}
function ContentRow({
  content: c,
  admin,
  onEdit,
  onSaved,
}: {
  content: EditorialContent;
  admin: boolean;
  onEdit: () => void;
  onSaved: () => void;
}) {
  const { locale, announce } = useApp(),
    w = adminWords[locale];
  const [confirm, setConfirm] = useState(false),
    [busy, setBusy] = useState(false),
    [error, setError] = useState<ApiFailure | null>(null);
  const publish = async () => {
    setBusy(true);
    setError(null);
    try {
      await api.publishContent(c.id, c.revision, c.state !== 'published');
      onSaved();
      announce(w.saved);
    } catch (e) {
      setError(e as ApiFailure);
    } finally {
      setBusy(false);
      setConfirm(false);
    }
  };
  return (
    <li className="cm-thread">
      <h3>
        {c.state === 'published' ? (
          <a href={editorialPath(c.locale, c)}>{c.title}</a>
        ) : (
          c.title
        )}
      </h3>
      <p>
        {w[c.kind]} · {localeNames[c.locale]} · {w[c.state]} ·{' '}
        <Time iso={c.updatedAt} />
      </p>
      <p>{c.summary}</p>
      <div className="cm-toolbar">
        {c.state === 'draft' ? (
          <button className="cm-act" disabled={busy} onClick={onEdit}>
            {w.edit}
          </button>
        ) : null}
        {admin ? (
          <button
            className="cm-act"
            disabled={busy}
            onClick={() => setConfirm(true)}
          >
            {c.state === 'published' ? w.unpublish : w.publish}
          </button>
        ) : null}
      </div>
      {confirm ? (
        <div className="cm-note">
          <p>{w.publishHelp}</p>
          <button
            className="btn"
            disabled={busy}
            onClick={() => void publish()}
          >
            {c.state === 'published' ? w.unpublishConfirm : w.publishConfirm}
          </button>
          <button
            className="cm-act"
            disabled={busy}
            onClick={() => setConfirm(false)}
          >
            {w.cancel}
          </button>
        </div>
      ) : null}
      {error ? <AdminError error={error} /> : null}
    </li>
  );
}
export function ContentLibraryView() {
  const { locale, copy, path } = useApp(),
    w = adminWords[locale],
    load = useLoad('content:' + locale, () => api.content(locale));
  if (!load.data) return <Pending load={load} title={w.library} />;
  return (
    <View
      title={w.library}
      docTitle={w.library}
      crumbs={[{ label: copy.nav.label, href: path() }, { label: w.library }]}
      ready
    >
      <ul className="cm-threads">
        {load.data.content.map((c) => (
          <li className="cm-thread" key={c.id}>
            <h2>
              <a href={editorialPath(locale, c)}>{c.title}</a>
            </h2>
            <p>{c.summary}</p>
            <Time iso={c.publishedAt || c.updatedAt} />
          </li>
        ))}
      </ul>
      {!load.data.content.length ? <p>{w.empty}</p> : null}
    </View>
  );
}
export function ContentView({ kind, slug }: { kind: string; slug: string }) {
  const { locale, copy, path } = useApp(),
    load = useLoad(`content:${locale}:${kind}:${slug}`, () =>
      api.contentItem(locale, kind, slug),
    );
  if (!load.data)
    return <Pending load={load} title={adminWords[locale].content} />;
  const c = load.data.content;
  return (
    <View
      title={c.title}
      docTitle={c.title}
      lede={c.summary}
      crumbs={[
        { label: copy.nav.label, href: path() },
        { label: adminWords[locale].library, href: path('/library') },
        { label: c.title },
      ]}
      ready
    >
      <article
        className="cm-prose"
        dangerouslySetInnerHTML={{ __html: c.html }}
      />
      <p>
        <Time iso={c.publishedAt || c.updatedAt} />
      </p>
    </View>
  );
}

// ---------------------------------------------------------------------------------------
// Support cases, applications and policy notices (netlify/lifecycle/cases.ts, applications.ts,
// security.ts). The team's email links straight here: ?case=<id> opens that case, and
// ?applications=affiliate&application=<id> opens that application.

/** Which case or application the address asks for, read once when the dashboard opens. */
function deepLink(here: string) {
  const q = new URLSearchParams(here.split('?')[1] ?? '');
  const id = (key: string) => {
    const n = Number(q.get(key));
    return Number.isInteger(n) && n > 0 ? n : null;
  };
  const kind = q.get('applications');
  return {
    caseId: id('case'),
    applicationId: id('application'),
    applicationKind: (kind === 'affiliate' || kind === 'careers' || kind === 'all' ? kind : null) as ApplicationKind | 'all' | null,
  };
}

/** A field the server named in an `invalid` error. */
const serverField = (error: ApiFailure | null, field: string) =>
  error?.code === 'invalid' && !!error.body.fields?.[field];

const focusSoon = (el: () => HTMLElement | null) =>
  window.setTimeout(() => el()?.focus(), 0);
const focusId = (domId: string) => focusSoon(() => document.getElementById(domId));

/** The original message, the replies and every comment: always plain text, never HTML. */
function PlainText({ text }: { text: string }) {
  return (
    <blockquote className="cm-translation">
      <p className="cm-draft-preview">{text}</p>
    </blockquote>
  );
}

function Facts({ items }: { items: [string, ReactNode][] }) {
  return (
    <div className="cm-help">
      <dl>
        {items.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className="cm-draft-preview">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const { locale } = useApp(),
    r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <>
      <span aria-hidden="true">{'★'.repeat(r) + '☆'.repeat(5 - r)}</span>
      <span className="sr-only">{adminWords[locale].stars(r)}</span>
    </>
  );
}

const caseFilters: SupportCaseFilter[] = ['active', 'open', 'replied', 'fix_pending', 'resolved', 'closed', 'all'];
const languageName = (l: string) => localeNames[l as keyof typeof localeNames] ?? l;

function SupportCases({ initialCase }: { initialCase: number | null }) {
  const { locale, n } = useApp(),
    w = adminWords[locale],
    id = useId();
  const [status, setStatus] = useState<SupportCaseFilter>('active'),
    [draft, setDraft] = useState(''),
    [q, setQ] = useState(''),
    [page, setPage] = useState(1),
    [open, setOpen] = useState<number | null>(initialCase);
  const load = useLoad(`admin-cases:${status}:${page}:${q}`, () => api.cases({ status, q, page }));
  const counts = load.data?.counts;
  const rating = (r: number) => new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(r);
  const close = () => {
    const was = open;
    setOpen(null);
    focusSoon(() => document.getElementById(`${id}-case-${was}`) ?? document.getElementById(`${id}-h`));
  };
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} tabIndex={-1}>
        {w.cases}
      </h2>
      <p>{w.casesLede}</p>
      {counts ? (
        <dl className="cm-admin-counts">
          <div>
            <dt>{w.casesOpen}</dt>
            <dd>{n(counts.open)}</dd>
          </div>
          <div>
            <dt>{w.casesReplied}</dt>
            <dd>{n(counts.replied)}</dd>
          </div>
          <div>
            <dt>{w.casesFixPending}</dt>
            <dd>{n(counts.fixPending)}</dd>
          </div>
          <div>
            <dt>{w.casesRating}</dt>
            <dd>{counts.rating == null ? '–' : `${rating(counts.rating)} / 5`}</dd>
            <dd className="cm-hint">{counts.rating == null ? w.noRating : w.casesAnswered(n(counts.answered))}</dd>
          </div>
        </dl>
      ) : null}
      <form
        className="cm-filters"
        onSubmit={(e) => {
          e.preventDefault();
          setQ(draft.trim());
          setPage(1);
        }}
      >
        <Field id={`${id}-status`} label={w.caseFilter}>
          {(props) => (
            <select
              {...props}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as SupportCaseFilter);
                setPage(1);
              }}
            >
              {caseFilters.map((f) => (
                <option key={f} value={f}>
                  {w.caseStatuses[f]}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id={`${id}-q`} label={w.caseSearch}>
          {(props) => <input {...props} type="search" value={draft} maxLength={80} onChange={(e) => setDraft(e.target.value)} />}
        </Field>
        <button className="btn" type="submit">
          {w.search}
        </button>
      </form>
      {!load.data ? (
        load.error ? (
          <ErrorNotice error={load.error} retry={load.reload} />
        ) : (
          <Loading />
        )
      ) : (
        <>
          {load.error ? <ErrorNotice error={load.error} retry={load.reload} /> : null}
          {load.data.cases.length ? (
            <div className="cm-table-wrap">
              <table className="cm-table" aria-busy={load.loading || undefined}>
                <caption>{w.casesCaption}</caption>
                <thead>
                  <tr>
                    <th scope="col">{w.colRef}</th>
                    <th scope="col">{w.colName}</th>
                    <th scope="col">{w.colTopic}</th>
                    <th scope="col">{w.colLanguage}</th>
                    <th scope="col">{w.colStatus}</th>
                    <th scope="col">{w.colUpdated}</th>
                  </tr>
                </thead>
                <tbody>
                  {load.data.cases.map((c) => (
                    <tr key={c.id}>
                      <th scope="row">
                        <button
                          type="button"
                          className="cm-act"
                          id={`${id}-case-${c.id}`}
                          aria-expanded={open === c.id}
                          aria-controls={open === c.id ? `${id}-detail` : undefined}
                          onClick={() => setOpen(open === c.id ? null : c.id)}
                        >
                          {c.ref}
                        </button>
                      </th>
                      <td>{c.name}</td>
                      <td>{c.topic}</td>
                      <td>{languageName(c.locale)}</td>
                      <td>{w.caseStatuses[c.status]}</td>
                      <td>
                        <Time iso={c.updatedAt} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>{w.casesEmpty}</p>
          )}
          <div className="cm-toolbar">
            <button className="cm-act" disabled={page <= 1 || load.loading} onClick={() => setPage((p) => p - 1)}>
              {w.previous}
            </button>
            <span>{n(page)}</span>
            <button
              className="cm-act"
              disabled={load.data.cases.length < SUPPORT_CASE_PAGE || load.loading}
              onClick={() => setPage((p) => p + 1)}
            >
              {w.next}
            </button>
          </div>
        </>
      )}
      {open ? <CaseDetail key={open} caseId={open} panelId={`${id}-detail`} onClose={close} onChanged={load.reload} /> : null}
    </section>
  );
}

function CaseDetail({
  caseId,
  panelId,
  onClose,
  onChanged,
}: {
  caseId: number;
  panelId: string;
  onClose: () => void;
  onChanged: () => void;
}) {
  const { locale, announce } = useApp(),
    w = adminWords[locale],
    id = useId();
  const load = useLoad(`admin-case:${caseId}`, () => api.supportCase(caseId));
  const heading = useRef<HTMLHeadingElement>(null),
    history = useRef<HTMLHeadingElement>(null),
    shown = useRef(false);
  const [message, setMessage] = useState(''),
    [signature, setSignature] = useState(''),
    [version, setVersion] = useState(''),
    [note, setNote] = useState(''),
    [busy, setBusy] = useState<string | null>(null),
    [error, setError] = useState<{ form: 'reply' | 'status' | 'fixed'; failure: ApiFailure } | null>(null),
    [problem, setProblem] = useState<{ message?: string; version?: string }>({});
  const data = load.data;
  useEffect(() => {
    if (data && !shown.current) {
      shown.current = true;
      heading.current?.focus();
    }
  }, [data]);
  if (!data)
    return (
      <section className="cm-section" id={panelId} aria-label={w.cases}>
        {load.error ? <AdminError error={load.error} /> : <Loading />}
        <button type="button" className="cm-act" onClick={onClose}>
          {w.closeDetail}
        </button>
      </section>
    );
  const c = data.case,
    statusLabel = (s: string) => w.caseStatuses[s as SupportCaseStatus] ?? s;
  const run = async (form: 'reply' | 'status' | 'fixed', key: string, action: () => Promise<unknown>, done: string, focus: () => HTMLElement | null) => {
    setBusy(key);
    setError(null);
    try {
      await action();
      load.reload();
      onChanged();
      announce(done);
      focusSoon(focus);
      return true;
    } catch (e) {
      setError({ form, failure: e as ApiFailure });
      return false;
    } finally {
      setBusy(null);
    }
  };
  const reply = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length < 2) {
      setProblem({ message: w.messageRequired });
      return focusSoon(() => document.getElementById(`${id}-message`));
    }
    setProblem({});
    const ok = await run('reply', 'reply', () => api.replyToCase(c.id, { message: message.trim(), signature: signature.trim() || undefined }), w.replySent, () => history.current);
    if (ok) setMessage('');
  };
  const fixed = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = version.trim();
    if (!/^\d{1,4}(\.\d{1,4}){0,3}$/.test(v)) {
      setProblem({ version: w.versionFormat });
      return focusSoon(() => document.getElementById(`${id}-version`));
    }
    setProblem({});
    const ok = await run('fixed', 'fixed', () => api.markCaseFixed(c.id, { version: v, note: note.trim() || undefined }), w.fixedSaved(v), () => heading.current);
    if (ok) setNote('');
  };
  const setStatus = (s: 'open' | 'resolved' | 'closed') =>
    void run('status', s, () => api.setCaseStatus(c.id, s), w.statusSaved(statusLabel(s)), () => heading.current);
  const errorFor = (form: 'reply' | 'status' | 'fixed') => (error?.form === form ? error.failure : null);
  const versionProblem = problem.version ?? (serverField(errorFor('fixed'), 'version') ? w.versionFormat : undefined);
  return (
    <section className="cm-section" id={panelId} aria-labelledby={`${id}-h`} aria-busy={load.loading || undefined}>
      <div className="cm-row">
        <h3 id={`${id}-h`} ref={heading} tabIndex={-1}>
          {w.caseTitle(c.ref)}
        </h3>
        <button type="button" className="cm-act" onClick={onClose}>
          {w.closeDetail}
        </button>
      </div>
      <Facts
        items={[
          [w.colStatus, statusLabel(c.status) + (c.fixedIn ? ` · ${w.fixedIn} ${c.fixedIn}` : '')],
          [w.caseFrom, `${c.name} <${c.email}>`],
          [w.colTopic, c.topic || w.notGiven],
          [w.colLanguage, languageName(c.locale)],
          [w.device, c.device || w.notGiven],
          [w.appVersion, c.appVersion || w.notGiven],
          [w.iosVersion, c.iosVersion || w.notGiven],
          [w.received, <Time key="t" iso={c.createdAt} />],
        ]}
      />
      <h4>{w.caseMessage}</h4>
      <PlainText text={c.message} />
      <h4 ref={history} tabIndex={-1}>
        {w.history}
      </h4>
      <ol className="cm-admin-members">
        {data.events.map((e) => (
          <CaseEventItem key={e.id} event={e} statusLabel={statusLabel} />
        ))}
      </ol>
      <form className="cm-form cm-admin-editor" onSubmit={(e) => void reply(e)} noValidate aria-labelledby={`${id}-reply`}>
        <h4 id={`${id}-reply`}>{w.reply}</h4>
        <p className="cm-hint">{w.replyHelp}</p>
        {errorFor('reply') ? <AdminError error={errorFor('reply')!} /> : null}
        <Field id={`${id}-message`} label={w.reply} error={problem.message ?? (serverField(errorFor('reply'), 'message') ? w.messageRequired : undefined)}>
          {(props) => <textarea {...props} value={message} rows={8} maxLength={10000} required disabled={!!busy} onChange={(e) => setMessage(e.target.value)} />}
        </Field>
        <Field id={`${id}-signature`} label={w.signature} hint={w.signatureHint} optional>
          {(props) => <input {...props} type="text" value={signature} maxLength={60} disabled={!!busy} onChange={(e) => setSignature(e.target.value)} />}
        </Field>
        <button className="btn" type="submit" disabled={!!busy} aria-busy={busy === 'reply' || undefined}>
          {w.sendReply}
        </button>
      </form>
      <h4 id={`${id}-status`}>{w.statusActions}</h4>
      {errorFor('status') ? <AdminError error={errorFor('status')!} /> : null}
      <div className="cm-toolbar">
        <button type="button" className="cm-act" disabled={!!busy || c.status === 'resolved'} onClick={() => setStatus('resolved')}>
          {w.resolve}
        </button>
        <button type="button" className="cm-act" disabled={!!busy || c.status === 'closed'} onClick={() => setStatus('closed')}>
          {w.closeCase}
        </button>
        <button type="button" className="cm-act" disabled={!!busy || c.status === 'open'} onClick={() => setStatus('open')}>
          {w.reopen}
        </button>
      </div>
      <form className="cm-form cm-admin-editor" onSubmit={(e) => void fixed(e)} noValidate aria-labelledby={`${id}-fixed`}>
        <h4 id={`${id}-fixed`}>{w.fixedHeading}</h4>
        <p className="cm-hint">{w.fixedHelp}</p>
        {errorFor('fixed') && !versionProblem ? <AdminError error={errorFor('fixed')!} /> : null}
        <Field id={`${id}-version`} label={w.version} hint={w.versionHint} error={versionProblem}>
          {(props) => (
            <input {...props} type="text" inputMode="decimal" value={version} maxLength={20} required disabled={!!busy} onChange={(e) => setVersion(e.target.value)} />
          )}
        </Field>
        <Field id={`${id}-note`} label={w.fixNote} optional>
          {(props) => <textarea {...props} value={note} rows={3} maxLength={1000} disabled={!!busy} onChange={(e) => setNote(e.target.value)} />}
        </Field>
        <button className="btn" type="submit" disabled={!!busy} aria-busy={busy === 'fixed' || undefined}>
          {w.markFixed}
        </button>
      </form>
    </section>
  );
}

function CaseEventItem({ event: e, statusLabel }: { event: SupportCaseEvent; statusLabel: (s: string) => string }) {
  const { locale } = useApp(),
    w = adminWords[locale];
  const version = String(e.data.version ?? '');
  const title =
    e.kind === 'created'
      ? w.evCreated
      : e.kind === 'reply'
        ? w.evReply(e.actor ?? w.theTeam)
        : e.kind === 'status'
          ? w.evStatus(statusLabel(String(e.data.from ?? '')), statusLabel(String(e.data.to ?? '')))
          : e.kind === 'fixed_in'
            ? w.evFixedIn(version)
            : e.kind === 'fixed_notified'
              ? w.evFixedNotified(version)
              : e.kind === 'feedback_requested'
                ? w.evFeedbackRequested
                : e.kind === 'feedback'
                  ? w.evFeedback
                  : e.kind === 'reopened'
                    ? w.evReopened
                    : e.kind;
  const actor = e.actor && e.kind !== 'reply' ? ` · ${e.actor}` : '';
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {actor} · <Time iso={e.at} />
      </p>
      {e.kind === 'feedback' || e.kind === 'reopened' ? (
        <p>
          {typeof e.data.rating === 'number' ? <Stars rating={e.data.rating} /> : null}
          {typeof e.data.rating === 'number' && typeof e.data.solved === 'boolean' ? ' · ' : null}
          {typeof e.data.solved === 'boolean' ? (e.data.solved ? w.solvedYes : w.solvedNo) : null}
        </p>
      ) : null}
      {e.body ? <PlainText text={e.body} /> : null}
    </li>
  );
}

function Applications({ initialKind, initialId }: { initialKind: ApplicationKind | 'all' | null; initialId: number | null }) {
  const { locale } = useApp(),
    w = adminWords[locale],
    id = useId();
  const [kind, setKind] = useState<ApplicationKind | 'all'>(initialKind ?? 'all'),
    // A deep link may name an application that is already decided, so it shows those too.
    [decidedToo, setDecidedToo] = useState(initialId !== null),
    [open, setOpen] = useState<number | null>(initialId),
    [latest, setLatest] = useState<Application | null>(null);
  const load = useLoad(`admin-apps:${kind}:${decidedToo}`, () => api.applications(kind, decidedToo));
  const list = load.data?.applications ?? [];
  const current = open === null ? null : latest?.id === open ? latest : (list.find((a) => a.id === open) ?? null);
  const roleOrCode = (a: Application) => (a.kind === 'affiliate' ? a.code : a.role) || '–';
  const close = () => {
    const was = open;
    setOpen(null);
    setLatest(null);
    focusSoon(() => document.getElementById(`${id}-app-${was}`) ?? document.getElementById(`${id}-h`));
  };
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} tabIndex={-1}>
        {w.applications}
      </h2>
      <p>{w.applicationsLede}</p>
      <fieldset className="cm-follow">
        <legend className="sr-only">{w.appFilter}</legend>
        {(['affiliate', 'careers', 'all'] as const).map((k) => (
          <button key={k} type="button" className="cm-act" aria-pressed={kind === k} onClick={() => setKind(k)}>
            {w.appKinds[k]}
          </button>
        ))}
      </fieldset>
      <div className="cm-check">
        <input type="checkbox" id={`${id}-decided`} checked={decidedToo} onChange={(e) => setDecidedToo(e.target.checked)} />
        <label htmlFor={`${id}-decided`}>{w.includeDecided}</label>
      </div>
      {!load.data ? (
        load.error ? (
          <ErrorNotice error={load.error} retry={load.reload} />
        ) : (
          <Loading />
        )
      ) : list.length ? (
        <div className="cm-table-wrap">
          <table className="cm-table" aria-busy={load.loading || undefined}>
            <caption>{w.appsCaption}</caption>
            <thead>
              <tr>
                <th scope="col">{w.colName}</th>
                <th scope="col">{w.colEmail}</th>
                <th scope="col">{w.colKind}</th>
                <th scope="col">{w.colRoleOrCode}</th>
                <th scope="col">{w.colLanguage}</th>
                <th scope="col">{w.colStatus}</th>
                <th scope="col">{w.colReceived}</th>
                <th scope="col">
                  <span className="sr-only">{w.review}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((a) => (
                <tr key={a.id}>
                  <th scope="row">{a.name}</th>
                  <td>{a.email}</td>
                  <td>{w.appKind[a.kind]}</td>
                  <td>{roleOrCode(a)}</td>
                  <td>{languageName(a.locale)}</td>
                  <td>{w.appStatuses[a.status] ?? a.status}</td>
                  <td>
                    <Time iso={a.createdAt} />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="cm-act"
                      id={`${id}-app-${a.id}`}
                      aria-label={w.reviewName(a.name)}
                      aria-expanded={open === a.id}
                      onClick={() => {
                        setLatest(null);
                        setOpen(open === a.id ? null : a.id);
                      }}
                    >
                      {w.review}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>{w.appsEmpty}</p>
      )}
      {current ? (
        <ApplicationDetail
          key={current.id}
          application={current}
          onClose={close}
          onDecided={(a) => {
            setLatest(a);
            load.reload();
          }}
        />
      ) : null}
    </section>
  );
}

function ApplicationDetail({ application: a, onClose, onDecided }: { application: Application; onClose: () => void; onDecided: (a: Application) => void }) {
  const { locale, announce } = useApp(),
    w = adminWords[locale],
    id = useId();
  const heading = useRef<HTMLHeadingElement>(null),
    confirmRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState(''),
    [code, setCode] = useState(a.code),
    [pending, setPending] = useState<string | null>(null),
    [busy, setBusy] = useState(false),
    [codeProblem, setCodeProblem] = useState(''),
    [error, setError] = useState<ApiFailure | null>(null);
  useEffect(() => {
    heading.current?.focus();
  }, []);
  const decisions = applicationDecisions[a.kind] as string[];
  const label = (d: string) => w.decisions[d as keyof typeof w.decisions] ?? d;
  const choose = (d: string) => {
    setError(null);
    if (a.kind === 'affiliate' && d === 'approved' && !/^[A-Za-z0-9]{3,20}$/.test(code.trim())) {
      setCodeProblem(w.codeFormat);
      return focusSoon(() => document.getElementById(`${id}-code`));
    }
    setCodeProblem('');
    setPending(d);
    focusSoon(() => confirmRef.current);
  };
  const send = async () => {
    if (!pending) return;
    setBusy(true);
    setError(null);
    try {
      const body = { decision: pending, message: message.trim() || undefined, code: a.kind === 'affiliate' && pending === 'approved' ? code.trim().toUpperCase() : undefined };
      const result = await api.decideApplication(a.id, body);
      onDecided(result.application);
      announce(w.decided(w.appStatuses[result.application.status] ?? result.application.status));
      setPending(null);
      setMessage('');
      focusSoon(() => heading.current);
    } catch (e) {
      const f = e as ApiFailure;
      setError(f);
      setPending(null);
      if (serverField(f, 'code')) {
        setCodeProblem(w.codeFormat);
        focusSoon(() => document.getElementById(`${id}-code`));
      }
    } finally {
      setBusy(false);
    }
  };
  const details = Object.entries(a.details ?? {}).filter(([, v]) => String(v ?? '').trim());
  const showCode = a.kind === 'affiliate';
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <div className="cm-row">
        <h3 id={`${id}-h`} ref={heading} tabIndex={-1}>
          {w.appTitle(a.name)}
        </h3>
        <button type="button" className="cm-act" onClick={onClose}>
          {w.closeDetail}
        </button>
      </div>
      <Facts
        items={[
          [w.colStatus, w.appStatuses[a.status] ?? a.status],
          [w.colEmail, a.email],
          [w.colKind, w.appKind[a.kind]],
          [w.colRoleOrCode, (a.kind === 'affiliate' ? a.code : a.role) || w.notGiven],
          [w.colLanguage, languageName(a.locale)],
          [w.colReceived, <Time key="t" iso={a.createdAt} />],
          ...(showCode && a.code ? [[w.affiliateLink, affiliateLink(a.code)] as [string, ReactNode]] : []),
        ]}
      />
      {details.length ? (
        <>
          <h4>{w.appDetails}</h4>
          <Facts items={details.map(([k, v]) => [k, String(v)])} />
        </>
      ) : null}
      <div className="cm-form cm-admin-editor">
        {error && !codeProblem ? <AdminError error={error} /> : null}
        <Field id={`${id}-message`} label={w.decisionMessage} hint={w.decisionMessageHint} optional>
          {(props) => <textarea {...props} value={message} rows={5} maxLength={4000} disabled={busy} onChange={(e) => setMessage(e.target.value)} />}
        </Field>
        {showCode ? (
          <Field id={`${id}-code`} label={w.affiliateCode} hint={w.affiliateCodeHint} error={codeProblem || undefined}>
            {(props) => (
              <input
                {...props}
                type="text"
                value={code}
                maxLength={20}
                autoCapitalize="characters"
                spellCheck={false}
                disabled={busy}
                onChange={(e) => {
                  setCode(e.target.value.toUpperCase());
                  setPending(null);
                }}
              />
            )}
          </Field>
        ) : null}
        {showCode && /^[A-Za-z0-9]{3,20}$/.test(code.trim()) ? (
          <p>
            {w.affiliateLink}: <output htmlFor={`${id}-code`}>{affiliateLink(code.trim())}</output>
          </p>
        ) : null}
        <div className="cm-toolbar">
          {decisions.map((d) => (
            <button key={d} type="button" className={d === 'declined' ? 'cm-act cm-danger' : 'cm-act'} disabled={busy || a.status === d} aria-pressed={pending === d} onClick={() => choose(d)}>
              {label(d)}
            </button>
          ))}
        </div>
        {pending ? (
          <div className="cm-note" ref={confirmRef} tabIndex={-1}>
            <p>
              {label(pending)}: {w.decisionConfirm(a.name)}
            </p>
            <button type="button" className="btn" disabled={busy} aria-busy={busy || undefined} onClick={() => void send()}>
              {w.sendDecision}
            </button>{' '}
            <button type="button" className="cm-act" disabled={busy} onClick={() => setPending(null)}>
              {w.cancel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

const otherLocales = Object.keys(localeNames).filter((l) => l !== 'en') as Exclude<CommunityLocale, 'en'>[];
const lines = (text: string) =>
  text
    .split('\n')
    .map((l) => l.replace(/^\s*[-*•]\s*/, '').trim())
    .filter(Boolean);

function PolicyNotice() {
  const { locale, announce, n } = useApp(),
    w = adminWords[locale],
    id = useId();
  const [policy, setPolicy] = useState<PolicyNoticeRequest['policy']>('privacy'),
    [effective, setEffective] = useState(''),
    [changes, setChanges] = useState<Record<string, string>>({}),
    [members, setMembers] = useState(true),
    [news, setNews] = useState(true),
    [problems, setProblems] = useState<{ effective?: string; en?: string; audiences?: string }>({}),
    [confirming, setConfirming] = useState(false),
    [busy, setBusy] = useState(false),
    [queued, setQueued] = useState<number | null>(null),
    [error, setError] = useState<ApiFailure | null>(null);
  const confirmRef = useRef<HTMLDivElement>(null),
    resultRef = useRef<HTMLDivElement>(null);
  const request = (): PolicyNoticeRequest => {
    const out: PolicyNoticeRequest['changes'] = { en: lines(changes.en ?? '') };
    for (const l of otherLocales) {
      const list = lines(changes[l] ?? '');
      if (list.length) out[l] = list;
    }
    return { policy, effective: effective.trim(), changes: out, audiences: [...(members ? ['member' as const] : []), ...(news ? ['news' as const] : [])] };
  };
  const review = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueued(null);
    setError(null);
    const body = request(),
      found: typeof problems = {};
    if (!/^\d{4}-\d{2}-\d{2}$/.test(body.effective) || Number.isNaN(Date.parse(body.effective))) found.effective = w.effectiveFormat;
    if (!body.changes.en.length) found.en = w.changesRequired;
    if (!body.audiences.length) found.audiences = w.audienceRequired;
    setProblems(found);
    const first = found.effective ? 'effective' : found.en ? 'en' : found.audiences ? 'member' : null;
    if (first) return focusSoon(() => document.getElementById(`${id}-${first}`));
    setConfirming(true);
    focusSoon(() => confirmRef.current);
  };
  const send = async () => {
    setBusy(true);
    setError(null);
    try {
      const result = await api.policyNotice(request());
      setQueued(result.queued);
      setConfirming(false);
      announce(w.queued(n(result.queued)));
      focusSoon(() => resultRef.current);
    } catch (e) {
      const f = e as ApiFailure;
      setError(f);
      setConfirming(false);
      setProblems({
        effective: serverField(f, 'effective') ? w.effectiveFormat : undefined,
        en: serverField(f, 'changes') ? w.changesRequired : undefined,
      });
      focusId(serverField(f, 'effective') ? `${id}-effective` : serverField(f, 'changes') ? `${id}-en` : `${id}-h`);
    } finally {
      setBusy(false);
    }
  };
  const edit = (l: string, value: string) => {
    setChanges((c) => ({ ...c, [l]: value }));
    setConfirming(false);
  };
  const changeField = (l: CommunityLocale) => (
    <Field key={l} id={`${id}-${l}`} label={w.changesIn(localeNames[l])} hint={w.changesHint} optional={l !== 'en'} error={l === 'en' ? problems.en : undefined}>
      {(props) => <textarea {...props} lang={l} value={changes[l] ?? ''} rows={4} required={l === 'en'} disabled={busy} onChange={(e) => edit(l, e.target.value)} />}
    </Field>
  );
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} tabIndex={-1}>
        {w.policy}
      </h2>
      <p>{w.policyLede}</p>
      {queued !== null ? (
        <div className="cm-notice cm-notice-ok" ref={resultRef} tabIndex={-1}>
          <p>{w.queued(n(queued))}</p>
        </div>
      ) : null}
      {error && !problems.effective && !problems.en ? <AdminError error={error} /> : null}
      <form className="cm-form cm-admin-editor" onSubmit={review} noValidate aria-labelledby={`${id}-h`}>
        <Field id={`${id}-policy`} label={w.policyDoc}>
          {(props) => (
            <select
              {...props}
              value={policy}
              disabled={busy}
              onChange={(e) => {
                setPolicy(e.target.value as PolicyNoticeRequest['policy']);
                setConfirming(false);
              }}
            >
              <option value="privacy">{w.privacyPolicy}</option>
              <option value="terms">{w.terms}</option>
            </select>
          )}
        </Field>
        <Field id={`${id}-effective`} label={w.effective} hint={w.effectiveHint} error={problems.effective}>
          {(props) => (
            <input
              {...props}
              type="text"
              inputMode="numeric"
              placeholder="2026-11-08"
              pattern="\d{4}-\d{2}-\d{2}"
              maxLength={10}
              required
              value={effective}
              disabled={busy}
              onChange={(e) => {
                setEffective(e.target.value);
                setConfirming(false);
              }}
            />
          )}
        </Field>
        {changeField('en')}
        <details className="cm-help">
          <summary>{w.otherLanguages}</summary>
          {otherLocales.map(changeField)}
        </details>
        <fieldset className="cm-field" aria-describedby={problems.audiences ? `${id}-aud-error` : undefined}>
          <legend>{w.audiences}</legend>
          {problems.audiences ? (
            <p className="cm-error" id={`${id}-aud-error`}>
              {problems.audiences}
            </p>
          ) : null}
          <div className="cm-check">
            <input
              type="checkbox"
              id={`${id}-member`}
              checked={members}
              disabled={busy}
              onChange={(e) => {
                setMembers(e.target.checked);
                setConfirming(false);
              }}
            />
            <label htmlFor={`${id}-member`}>{w.audienceMembers}</label>
          </div>
          <div className="cm-check">
            <input
              type="checkbox"
              id={`${id}-news`}
              checked={news}
              disabled={busy}
              onChange={(e) => {
                setNews(e.target.checked);
                setConfirming(false);
              }}
            />
            <label htmlFor={`${id}-news`}>{w.audienceNews}</label>
          </div>
        </fieldset>
        <button className="btn" type="submit" disabled={busy}>
          {w.reviewNotice}
        </button>
      </form>
      {confirming ? (
        <div className="cm-notice" ref={confirmRef} tabIndex={-1}>
          <p id={`${id}-confirm`}>{w.policyConfirm}</p>
          <p>
            {policy === 'privacy' ? w.privacyPolicy : w.terms} · {effective.trim()} · {[members ? w.audienceMembers : '', news ? w.audienceNews : ''].filter(Boolean).join(' + ')}
          </p>
          <div className="cm-toolbar">
            <button type="button" className="btn" disabled={busy} aria-busy={busy || undefined} onClick={() => void send()}>
              {w.queueNotice}
            </button>
            <button
              type="button"
              className="cm-act"
              disabled={busy}
              onClick={() => {
                setConfirming(false);
                focusSoon(() => document.getElementById(`${id}-policy`));
              }}
            >
              {w.cancel}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
