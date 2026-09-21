import type { ReactNode } from 'react';
import { AlsoRead, Course, docNav, VillageFooter, VillageHeader } from './village-shell';

/**
 * A document page: support, privacy, terms, and the rest of the legal shelf.
 *
 * The masthead is the hero's quieter cousin — a running-bond course, the title,
 * the revision stamp and a short paved strip instead of the boulevard — and the
 * reading column below it is a stack of white brick slabs on cream, each with
 * its own depth and foot seam. Children are written with the document classes
 * the village stylesheet defines: `.brick.headline` for the one sentence a page
 * is really about, `<section className="brick">` for a heading and its prose,
 * `ul.points` for a checklist, `ul.pills` for the closing assurance strip, and
 * `.brick.handoff` for the call-out at the foot.
 */
type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  /** The route's own path, so the masthead and the index below can mark it. */
  current?: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, summary, updated, current, children }: LegalPageProps) {
  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={docNav} current={current} label="Help and legal" />

      <main id="main">
        <div className="doc-head">
          <div className="wrap">
            <a className="backlink" href="/">Back to OutBrick</a>
            <Course />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="lede">{summary}</p>
            <p className="stamp">Updated {updated}</p>
          </div>
          <div className="road" aria-hidden="true" />
        </div>

        <div className="doc band-cream">
          <div className="wrap">
            <div className="column">{children}</div>
          </div>
        </div>

        <AlsoRead current={current} />
      </main>

      <VillageFooter />
    </div>
  );
}

/** The assurance strip a document closes a section with. */
export function Pills({ items }: { items: string[] }) {
  return (
    <ul className="pills">
      {items.map((item) => (
        <li key={item}><span className="chip" aria-hidden="true" />{item}</li>
      ))}
    </ul>
  );
}

/** The two-line call-out card at the foot of a page. */
export function Handoff({ title, note, action, href }: { title: string; note: string; action: string; href: string }) {
  return (
    <div className="brick handoff">
      <div>
        <b>{title}</b>
        <span>{note}</span>
      </div>
      <a className="btn" href={href}>{action}</a>
    </div>
  );
}
