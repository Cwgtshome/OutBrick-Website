import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Check, Gamepad2 } from 'lucide-react';
import { EditorialFooter, EditorialHeader } from '../editorial-shell';

export const metadata: Metadata = {
  title: 'Play guide',
  description: 'Learn the OutBrick move loop: targets, move limits, stars, boosters, and what a life and an undo actually cost.',
};

export default function PlayPage() {
  return (
    <div className="site-shell play-shell">
      <div className="site-grain" aria-hidden="true" />
      <EditorialHeader />

      <main className="play-main">
        <section className="play-intro">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> The OutBrick move loop</div>
            <h1>Slide bricks<br /><span>out.</span></h1>
            <p>Match every brick to its gate. Plan just far enough ahead, take the free undo every board carries when a move lands wrong, and clear it without a timer breathing down your neck.</p>
            <div className="hero-proof"><span><Check size={15} /> nothing interrupts a board</span><span><Check size={15} /> waiting is always free</span><span><Check size={15} /> no subscription</span></div>
          </div>
          <div className="play-device-card">
            <div className="device-topline"><span><Gamepad2 size={14} /> LIVE BOARD</span><span>LEVEL 001</span></div>
            <div className="iphone-frame play-route-phone"><div className="iphone-screen"><img src="/assets/play-screen.png" alt="OutBrick play screen" title="OutBrick play screen" /></div></div>
          </div>
        </section>

        <section className="play-steps">
          <div><span className="play-step-number">01</span><h2>Match the colour</h2><p>Each brick slides toward its matching gate. The studs and glyphs keep every colour readable.</p></div>
          <div><span className="play-step-number">02</span><h2>Mind the target</h2><p>Every board shows a target move count and a limit, both from the first tap. Clear at or under the target for the second star, and do it without an undo for the third. Hit the limit and the board is not over: take five more moves and carry on.</p></div>
          <div><span className="play-step-number">03</span><h2>Come back tomorrow</h2><p>Journey boards, a hundred coins for your first board of the day, widgets, and three mascots make progress feel light. Lives refill themselves one every half hour, so tomorrow always has a full tank waiting.</p></div>
        </section>

        <div className="play-actions"><a className="gloss-button gloss-green" href="/#apple"><span className="gloss-button-inner">See every screen <ArrowUpRight size={18} /></span></a><a className="back-link" href="/"><ArrowLeft size={16} /> Back to the official site</a></div>
      </main>
      <EditorialFooter />
    </div>
  );
}
