import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Check, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Play guide',
  description: 'Learn the OutBrick move loop, boosters, and the relaxed rules behind every board.',
};

export default function PlayPage() {
  return (
    <div className="site-shell play-shell">
      <div className="site-grain" aria-hidden="true" />
      <header className="site-nav">
        <a className="nav-brand" href="/" aria-label="OutBrick home">
          <span className="nav-app-icon"><img src="/icon.png" alt="" /></span>
          <span className="wordmark wordmark-compact" aria-label="OutBrick">
            {['O', 'u', 't', 'B', 'r', 'i', 'c', 'k'].map((letter, index) => <span className={`wordmark-letter letter-${index % 8}`} key={`${letter}-${index}`}>{letter}</span>)}
          </span>
        </a>
        <a className="nav-cta" href="/"><ArrowLeft size={15} /> Back to site</a>
      </header>

      <main className="play-main">
        <section className="play-intro">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> The OutBrick move loop</div>
            <h1>Slide bricks<br /><span>out.</span></h1>
            <p>Match every brick to its gate. Plan just far enough ahead, undo when you want, and clear the board without a timer breathing down your neck.</p>
            <div className="hero-proof"><span><Check size={15} /> no ads</span><span><Check size={15} /> no lives</span><span><Check size={15} /> undo is free</span></div>
          </div>
          <div className="play-device-card">
            <div className="device-topline"><span><Gamepad2 size={14} /> LIVE BOARD</span><span>LEVEL 001</span></div>
            <div className="iphone-frame play-route-phone"><div className="iphone-screen"><img src="/assets/play-screen.png" alt="OutBrick play screen" /></div></div>
          </div>
        </section>

        <section className="play-steps">
          <div><span className="play-step-number">01</span><h2>Match the colour</h2><p>Each brick slides toward its matching gate. The studs and glyphs keep every colour readable.</p></div>
          <div><span className="play-step-number">02</span><h2>Protect your par</h2><p>Keep your line clean and use the board’s natural order. There is always room to think.</p></div>
          <div><span className="play-step-number">03</span><h2>Come back tomorrow</h2><p>Journey boards, daily bricks, Endless mode, widgets, and three mascots make progress feel light.</p></div>
        </section>

        <div className="play-actions"><a className="gloss-button gloss-green" href="/#experience"><span className="gloss-button-inner">See every screen <ArrowUpRight size={18} /></span></a><a className="back-link" href="/"><ArrowLeft size={16} /> Back to the official site</a></div>
      </main>
    </div>
  );
}
