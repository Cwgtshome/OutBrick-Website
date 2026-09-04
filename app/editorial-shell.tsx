import { ArrowUpRight } from 'lucide-react';
import { StoreBadge } from './store-badge';

export function OutBrickLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`wordmark ${compact ? 'wordmark-compact' : ''}`} aria-label="OutBrick">
      {'OUTBRICK'.split('').map((letter, index) => (
        <span className={`wordmark-letter letter-${index}`} aria-hidden="true" key={`${letter}-${index}`}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function EditorialHeader({ current }: { current?: 'about' | 'authors' | 'research' | 'blog' | 'mascots' }) {
  return (
    <header className="site-nav blog-site-nav">
      <a className="nav-brand" href="/" aria-label="OutBrick home">
        <span className="nav-app-icon"><img src="/icon.png" alt="OutBrick app icon" title="OutBrick app icon" /></span>
        <span><OutBrickLogo compact /><small>the sliding-brick puzzle</small></span>
      </a>
      <nav className="nav-links blog-nav-links" aria-label="Primary navigation">
        <a href="/">The game</a>
        <a href="/blog" aria-current={current === 'blog' ? 'page' : undefined}>Journal</a>
        <a href="/mascots" aria-current={current === 'mascots' ? 'page' : undefined}>Mascots</a>
        <a href="/about" aria-current={current === 'about' ? 'page' : undefined}>About</a>
        <a href="/authors" aria-current={current === 'authors' ? 'page' : undefined}>Authors</a>
        <a href="/research" aria-current={current === 'research' ? 'page' : undefined}>Research</a>
        <a href="/support">Support</a>
      </nav>
      <div className="nav-side-actions blog-nav-actions"><StoreBadge compact /></div>
    </header>
  );
}

export function EditorialFooter() {
  return (
    <footer className="site-footer blog-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <OutBrickLogo />
          <p>A sliding-brick colour-sort puzzle, with a journal for the curious bits around it.</p>
          <StoreBadge />
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Explore</span><a href="/">The game</a><a href="/blog">Journal</a><a href="/mascots">Mascots</a><a href="/#widgets">Widgets</a><a href="/about">About OutBrick</a></div>
          <div><span className="footer-label">Read about</span><a href="/authors">Authors</a><a href="/research">Research method</a><a href="/blog#category-player-habits">Player habits</a><a href="/blog#category-success-stories">Success stories</a><a href="/blog#category-inclusive-design">Inclusive design</a></div>
          <div><span className="footer-label">Contact</span><a href="/support">Support</a><a href="/contact">Contact OutBrick <ArrowUpRight size={14} /></a><a href="/accessibility">Accessibility <ArrowUpRight size={14} /></a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 OutBrick</span><span>Research is cited. Claims stay modest.</span><span>Made with bricks and patience.</span></div>
    </footer>
  );
}
