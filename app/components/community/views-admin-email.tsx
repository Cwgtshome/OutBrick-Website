'use client';
// The Email panel of /community/admin, for admins: the newsletter funnel, the list, each
// template's delivery and engagement, languages, clicked links and release Broadcasts. Every
// number is an aggregate from GET /api/community/admin/email (netlify/lifecycle/analytics.ts);
// no reader's address or identifier reaches this page. Clicks lead; opens are approximate.
import { useId, useState, type ReactNode } from 'react';
import type { EmailReport, EmailReportWindow } from '../../../lib/community/admin-contract';
import { adminEmailWords } from '../../../lib/i18n/admin-email';
import { localeNames } from '../../../lib/i18n/locales';
import { api } from './api';
import { ErrorNotice, Field, Loading, Time, useApp, useLoad } from './core';

const windows: EmailReportWindow[] = [7, 30, 90];
const languageName = (l: string) => localeNames[l as keyof typeof localeNames] ?? l;

function Table({ caption, head, rows, empty }: { caption: string; head: string[]; rows: ReactNode[][]; empty: string }) {
  if (!rows.length) return <p className="cm-hint">{empty}</p>;
  return (
    <div className="cm-table-wrap">
      <table className="cm-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((cells, r) => (
            <tr key={r}>
              {cells.map((cell, c) =>
                c === 0 ? (
                  <th key={c} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={c}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EmailAnalytics() {
  const { locale, n } = useApp(),
    w = adminEmailWords[locale],
    id = useId();
  const [days, setDays] = useState<EmailReportWindow>(30);
  const load = useLoad(`admin-email:${days}`, () => api.emailReport(days));
  const pct = (part: number, whole: number) =>
    whole > 0 ? new Intl.NumberFormat(locale, { style: 'percent', maximumFractionDigits: 1 }).format(part / whole) : '–';
  // A count with its share of a base: "42 (12.5 %)".
  const share = (part: number, whole: number) => `${n(part)} (${pct(part, whole)})`;
  const r: EmailReport | null = load.data;
  return (
    <section className="cm-section" aria-labelledby={`${id}-h`} aria-busy={load.loading || undefined}>
      <h2 id={`${id}-h`} tabIndex={-1}>
        {w.title}
      </h2>
      <p>{w.lede}</p>
      <div className="cm-filters">
        <Field id={`${id}-days`} label={w.window}>
          {(props) => (
            <select {...props} value={days} onChange={(e) => setDays(Number(e.target.value) as EmailReportWindow)}>
              {windows.map((d) => (
                <option key={d} value={d}>
                  {w.days(d)}
                </option>
              ))}
            </select>
          )}
        </Field>
        <button type="button" className="btn" onClick={load.reload} disabled={load.loading}>
          {w.refresh}
        </button>
      </div>
      <p className="cm-note">{w.opensNote}</p>
      {!r ? (
        load.error ? (
          <ErrorNotice error={load.error} retry={load.reload} />
        ) : (
          <Loading />
        )
      ) : (
        <>
          {load.error ? <ErrorNotice error={load.error} retry={load.reload} /> : null}
          <h3>{w.funnel}</h3>
          <dl className="cm-admin-counts" aria-label={w.funnelCaption}>
            {(
              [
                [w.signups, r.funnel.signups, null],
                [w.confirmed, r.funnel.confirmed, r.funnel.signups],
                [w.welcome2, r.funnel.welcome2, r.funnel.confirmed],
                [w.welcome3, r.funnel.welcome3, r.funnel.confirmed],
                [w.still, r.funnel.stillSubscribed, r.funnel.confirmed],
              ] as const
            ).map(([label, value, base]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{base === null ? n(value) : share(value, base)}</dd>
              </div>
            ))}
          </dl>
          <h3>{w.list}</h3>
          <dl className="cm-admin-counts">
            <div>
              <dt>{w.listSize}</dt>
              <dd>{n(r.list.size)}</dd>
            </div>
            <div>
              <dt>{w.joined}</dt>
              <dd>{n(r.list.joined)}</dd>
            </div>
            <div>
              <dt>{w.left}</dt>
              <dd>{n(r.list.left)}</dd>
            </div>
            <div>
              <dt>{w.net}</dt>
              <dd>{r.list.net > 0 ? `+${n(r.list.net)}` : n(r.list.net)}</dd>
            </div>
          </dl>
          <h3>{w.templates}</h3>
          <Table
            caption={w.templatesCaption}
            empty={w.empty}
            head={[w.template, w.sent, w.delivered, w.clicks, w.opens, w.bounced, w.complained, w.unsubscribeClicks]}
            rows={r.templates.map((t) => [
              <code key="t">{t.template}</code>,
              n(t.sent),
              share(t.delivered, t.sent),
              share(t.uniqueClicks, t.delivered),
              share(t.uniqueOpens, t.delivered),
              share(t.bounced, t.sent),
              share(t.complained, t.delivered),
              n(t.unsubscribeClicks),
            ])}
          />
          <h3>{w.locales}</h3>
          <Table
            caption={w.localesCaption}
            empty={w.empty}
            head={[w.language, w.signups, w.confirmed, w.sent, w.delivered, w.clicks, w.opens]}
            rows={r.locales.map((l) => [
              languageName(l.locale),
              n(l.signups),
              share(l.confirmed, l.signups),
              n(l.sent),
              share(l.delivered, l.sent),
              share(l.uniqueClicks, l.delivered),
              share(l.uniqueOpens, l.delivered),
            ])}
          />
          <h3>{w.links}</h3>
          <Table
            caption={w.linksCaption}
            empty={w.empty}
            head={[w.link, w.campaign, w.clicks, w.clickers]}
            rows={r.links.map((l) => [<span key="p" className="cm-draft-preview">{l.path}</span>, l.campaign || '–', n(l.clicks), n(l.uniqueClickers)])}
          />
          <h3>{w.releases}</h3>
          <Table
            caption={w.releasesCaption}
            empty={w.empty}
            head={[w.version, w.language, w.state, w.delivered, w.clicks, w.opens, w.bounced, w.complained]}
            rows={r.releases.map((b) => [
              b.version,
              languageName(b.locale),
              <>
                {w.states[b.state]}
                {b.sendAfter ? (
                  <>
                    {' · '}
                    {w.sendsAt} <Time iso={b.sendAfter} />
                  </>
                ) : b.sentAt ? (
                  <>
                    {' · '}
                    <Time iso={b.sentAt} />
                  </>
                ) : null}
              </>,
              n(b.delivered),
              share(b.uniqueClicks, b.delivered),
              share(b.uniqueOpens, b.delivered),
              share(b.bounced, b.delivered),
              share(b.complained, b.delivered),
            ])}
          />
        </>
      )}
    </section>
  );
}
