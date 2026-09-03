import type { ReactNode } from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  children: ReactNode;
};

function OutBrickWordmark() {
  return (
    <span className="wordmark wordmark-compact" aria-label="OutBrick">
      {['O', 'u', 't', 'B', 'r', 'i', 'c', 'k'].map((letter, index) => (
        <span className={`wordmark-letter letter-${index % 8}`} key={`${letter}-${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function LegalPage({ eyebrow, title, summary, updated, children }: LegalPageProps) {
  return (
    <div className="site-shell legal-shell">
      <div className="site-grain" aria-hidden="true" />
      <header className="site-nav">
        <a className="nav-brand" href="/" aria-label="OutBrick home">
          <span className="nav-app-icon">
            <img src="/icon.png" alt="" />
          </span>
          <span>
            <OutBrickWordmark />
            <small>the sliding-brick puzzle</small>
          </span>
        </a>
        <nav className="nav-links legal-nav-links" aria-label="Site navigation">
          <a href="/">The game</a>
          <a href="/#characters">Mascots</a>
          <a href="/#widgets">Widgets</a>
          <a className="nav-cta" href="/play">Open the play guide <ExternalLink size={15} /></a>
        </nav>
      </header>

      <main className="legal-main">
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back to OutBrick</a>
        <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-green" /> {eyebrow}</div>
        <h1>{title}</h1>
        <p className="legal-summary">{summary}</p>
        <p className="legal-updated">Updated {updated}</p>
        <article className="legal-card">{children}</article>
        <div className="legal-footer-note"><ShieldCheck size={17} /> No ads. No accounts. No tracking.</div>
      </main>

      <footer className="site-footer legal-footer">
        <div className="footer-bottom">
          <span>© 2026 RiseHush</span>
          <span><a href="/support">Support</a></span>
          <span><a href="/terms">Terms</a></span>
          <span><a href="/privacy">Privacy</a></span>
        </div>
      </footer>
    </div>
  );
}
