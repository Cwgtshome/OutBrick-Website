'use client';
import { useState, type SubmitEvent } from 'react';
import type {
  AdminMember,
  EditorialContent,
} from '../../../lib/community/admin-contract';
import { editorialPath } from '../../../lib/community/admin-contract';
import type { MemberRole } from '../../../lib/community/contract';
import { adminWords } from '../../../lib/i18n/admin';
import { localeNames } from '../../../lib/i18n/locales';
import { renderMarkdown } from '../../../netlify/community/markdown';
import { api, ApiFailure } from './api';
import { View, Pending, ErrorNotice, Time, useApp, useLoad } from './core';
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
  const { locale, session, copy, path, announce } = useApp(),
    w = adminWords[locale];
  const [page, setPage] = useState(1),
    load = useLoad(`admin:${page}`, () => api.dashboard(page));
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
        <a className="btn" href={path('/mod')}>
          {w.moderation}
        </a>
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
      {error ? <ErrorNotice error={error} /> : null}
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
        {w.verified}: {member.verified ? w.verified : copy.errors.unverified} ·{' '}
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
      {error ? <ErrorNotice error={error} /> : null}
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
      {error ? <ErrorNotice error={error} /> : null}
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
      {error ? <ErrorNotice error={error} /> : null}
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
