import type { ReactNode } from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { StoreBadge } from './store-badge';

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
      {['O', 'U', 'T', 'B', 'R', 'I', 'C', 'K'].map((letter, index) => (
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
            <img src="/icon.png" alt="OutBrick app icon" title="OutBrick app icon" />
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
          <a href="/play">Play guide</a>
          <a href="/blog">Journal</a>
          <a href="/about">About</a>
          <a href="/accessibility">Accessibility</a>
        </nav>
        <StoreBadge compact />
      </header>

      <main className="legal-main">
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back to OutBrick</a>
        <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-green" /> {eyebrow}</div>
        <h1>{title}</h1>
        <p className="legal-summary">{summary}</p>
        <p className="legal-updated">Updated {updated}</p>
        <article className="legal-card">{children}</article>
        <div className="legal-footer-note"><ShieldCheck size={17} /> No accounts. No analytics. Ads only when you ask.</div>
      </main>

      <footer className="site-footer legal-footer">
        <div className="legal-footer-main"><span>Keep the next board close.</span><StoreBadge /></div>
        <div className="legal-footer-links">
          <a href="/contact">Contact OutBrick</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy policy</a>
          <a href="/privacy-choices">Privacy choices</a>
          <a href="/terms">Terms</a>
          <a href="/license-agreement">License agreement</a>
          <a href="/eula">Apple EULA</a>
          <a href="/age-rating">Age suitability</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/refunds">Refunds & purchases</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 OutBrick</span>
          <span><a href="/">Back to OutBrick</a></span>
        </div>
      </footer>
    </div>
  );
}
