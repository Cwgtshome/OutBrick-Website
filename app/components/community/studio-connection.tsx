'use client';
import { useState } from 'react';
import { useApp } from './core';
import type { LegacyLocale } from '../../../lib/i18n/locales';
import { studioConnectionWords } from '../../../lib/i18n/studio-connection';
type Connection = {
  id: number;
  scopes: string[];
  expiresAt: string;
  revokedAt: string | null;
};
async function call<T>(method: string, path = '', body?: unknown): Promise<T> {
  const response = await fetch(`/api/community/admin/studio-tokens${path}`, {
    method,
    credentials: 'same-origin',
    cache: 'no-store',
    headers: body ? { 'content-type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const result = await response.json();
  if (!response.ok) {
    const failure = result as { error?: { message?: unknown } };
    throw new Error(
      typeof failure.error?.message === 'string'
        ? failure.error.message
        : 'Connection request failed.',
    );
  }
  return result as T;
}
export function StudioBlogConnection({ isAdmin }: { isAdmin: boolean }) {
  const { locale } = useApp(),
    w = studioConnectionWords[locale as LegacyLocale] ?? studioConnectionWords.en;
  const [open, setOpen] = useState(false),
    [busy, setBusy] = useState(false),
    [draft, setDraft] = useState(false),
    [publish, setPublish] = useState(false),
    [reviewed, setReviewed] = useState(false),
    [secret, setSecret] = useState<string | null>(null),
    [connections, setConnections] = useState<Connection[]>([]),
    [error, setError] = useState<string | null>(null);
  async function load() {
    setBusy(true);
    setError(null);
    try {
      const data = await call<{ connections: Connection[] }>('GET');
      setConnections(data.connections);
    } catch (e) {
      setError(e instanceof Error ? e.message : w.failed);
    } finally {
      setBusy(false);
    }
  }
  async function create() {
    if (!reviewed) return;
    setBusy(true);
    setError(null);
    setSecret(null);
    try {
      const scopes = [
        'blog:read',
        ...(draft ? ['blog:draft'] : []),
        ...(isAdmin && publish ? ['blog:publish'] : []),
      ];
      const data = await call<{ token: string; connection: Connection }>(
        'POST',
        '',
        { scopes, reviewed: true },
      );
      setSecret(data.token);
      setConnections((old) => [data.connection, ...old]);
      setReviewed(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : w.failed);
    } finally {
      setBusy(false);
    }
  }
  async function revoke(id: number) {
    setBusy(true);
    setError(null);
    try {
      await call('DELETE', `/${id}`);
      setSecret(null);
      const data = await call<{ connections: Connection[] }>('GET');
      setConnections(data.connections);
    } catch (e) {
      setError(e instanceof Error ? e.message : w.failed);
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="cm-section" aria-labelledby="studio-blog-connection">
      <h2 id="studio-blog-connection">{w.title}</h2>
      <p>{w.description}</p>
      <button
        className="btn"
        aria-expanded={open}
        onClick={() => {
          if (open) {
            setSecret(null);
            setOpen(false);
          } else {
            setOpen(true);
            void load();
          }
        }}
      >
        {open ? w.close : w.manage}
      </button>
      {open ? (
        <div>
          <p>{w.boundary}</p>
          <p>
            <a
              href="https://outbrick-upsell-architecture.mourad-hamdi.chatgpt.site/"
              target="_blank"
              rel="noreferrer"
            >
              OutBrick Studio
            </a>
          </p>
          <label>
            <input
              type="checkbox"
              checked={draft}
              onChange={(e) => {
                setDraft(e.target.checked);
                setReviewed(false);
              }}
            />
            {w.drafts}
          </label>
          <br />
          {isAdmin ? (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={publish}
                  onChange={(e) => {
                    setPublish(e.target.checked);
                    setReviewed(false);
                  }}
                />
                {w.publish}
              </label>
              <br />
            </>
          ) : null}
          <label>
            <input
              type="checkbox"
              checked={reviewed}
              onChange={(e) => setReviewed(e.target.checked)}
            />
            {w.review}
          </label>
          <p>
            <button
              className="btn"
              disabled={busy || !reviewed}
              onClick={() => void create()}
            >
              {w.create}
            </button>
          </p>
          {secret ? (
            <div aria-live="polite">
              <p>{w.once}</p>
              <label>
                {w.credential}
                <textarea
                  readOnly
                  value={secret}
                  rows={3}
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>
              <button className="btn" onClick={() => setSecret(null)}>
                {w.hide}
              </button>
            </div>
          ) : null}
          {error ? <p role="alert">{error}</p> : null}
          <ul>
            {connections.map((c) => (
              <li key={c.id}>
                #{c.id} · {c.scopes.join(', ')} · {w.expires}{' '}
                {new Date(c.expiresAt).toLocaleDateString(locale)}{' '}
                {c.revokedAt ? (
                  w.revoked
                ) : (
                  <button
                    className="cm-act"
                    disabled={busy}
                    onClick={() => void revoke(c.id)}
                  >
                    {w.revoke}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
