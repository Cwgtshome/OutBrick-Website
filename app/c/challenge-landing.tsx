'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Flag } from 'lucide-react';
import { StoreBadge } from '../store-badge';

type Challenge = { level: number; par: number };

/**
 * The site is a static export, so the challenge is read on the client from the query string
 * the iMessage bubble carried: /c?lv=42&par=11.
 *
 * `par` here is a wire name, not a word for a reader. The app's internal symbol is still
 * `Level.par` and the link format is fixed by `BrickoutMessages/Challenge.swift` and
 * `Brickout/Services/DeepLink.swift`, so renaming this key would break every link already
 * sent. Everything a visitor can read says "target" or just "moves".
 *
 * `kind` is gone. It only ever had two values and the second named the Daily Brick, which was
 * withdrawn along with Zen and Endless; every dare is a Journey board now. Links already sent
 * still carry `kind=daily`, and both ends ignore it — `DeepLink.challenge(from:)` reads an
 * unknown or missing kind as a Journey board rather than an error, so an old bubble opens the
 * level it names and nothing here has to know the word.
 */
function readChallenge(): Challenge | null {
  if (typeof window === 'undefined') return null;
  const q = new URLSearchParams(window.location.search);
  const level = Number.parseInt(q.get('lv') ?? '', 10);
  if (!Number.isFinite(level) || level < 1 || level > 100000) return null;
  const par = Number.parseInt(q.get('par') ?? '', 10);
  return { level, par: Number.isFinite(par) && par > 0 ? par : 0 };
}

export function ChallengeLanding() {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChallenge(readChallenge());
    setReady(true);
  }, []);

  const title = challenge ? `Level ${challenge.level}` : 'An OutBrick challenge';
  const dare = challenge && challenge.par > 0 ? `Clear it in ${challenge.par} moves.` : 'Clear the board.';

  // Only offered as a button, never as an automatic redirect: firing a custom scheme at
  // someone who does not have the app is exactly the dead end this page exists to remove.
  const appUrl = challenge
    ? `outbrick://level/${challenge.level}?par=${challenge.par}`
    : 'outbrick://play';

  return (
    <div className="site-shell play-shell">
      <div className="site-grain" aria-hidden="true" />
      <header className="site-nav">
        <a className="nav-brand" href="/" aria-label="OutBrick home">
          <span className="nav-app-icon"><img src="/icon.png" alt="OutBrick app icon" title="OutBrick app icon" /></span>
          <span className="wordmark wordmark-compact" aria-label="OutBrick">
            {['O', 'U', 'T', 'B', 'R', 'I', 'C', 'K'].map((letter, index) => <span className={`wordmark-letter letter-${index % 8}`} key={`${letter}-${index}`}>{letter}</span>)}
          </span>
        </a>
        <div className="play-header-actions"><StoreBadge compact /></div>
      </header>

      <main className="play-main">
        <section className="play-intro">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot eyebrow-dot-gold" /> <Flag size={13} /> You have been challenged</div>
            <h1>{ready ? title : 'Loading…'}<br /><span>{dare}</span></h1>
            <p>
              Someone dared you to a board of OutBrick — a relaxed sliding-brick colour-sort puzzle.
              Match every brick to its gate, take the free undo the board comes with, and beat their move count.
            </p>
            <div className="hero-proof"><span><Check size={15} /> a free undo every board</span><span><Check size={15} /> no ad between levels</span><span><Check size={15} /> works offline</span></div>
            <div className="play-actions" style={{ justifyContent: 'flex-start' }}>
              <StoreBadge />
              <a className="back-link" href={appUrl}>Already have OutBrick? Open this board <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="play-device-card">
            <div className="device-topline">
              <span><Flag size={14} /> THE CHALLENGE</span>
              <span>{ready && challenge ? `LEVEL ${String(challenge.level).padStart(3, '0')}` : 'OUTBRICK'}</span>
            </div>
            <div className="iphone-frame play-route-phone"><div className="iphone-screen"><img src="/assets/play-screen.png" alt="OutBrick play screen" title="OutBrick play screen" /></div></div>
          </div>
        </section>

        <section className="play-steps">
          <div><span className="play-step-number">01</span><h2>Get the game</h2><p>OutBrick is a free download on iPhone, iPad and Apple Watch. No subscription, no forced timer, and nothing plays that you did not press a button to see.</p></div>
          <div><span className="play-step-number">02</span><h2>Open the board</h2><p>{ready && challenge ? `Head to Level ${challenge.level} and play it.` : 'Head to the board you were sent and play it.'}</p></div>
          <div><span className="play-step-number">03</span><h2>Send one back</h2><p>Tap the OutBrick app in Messages to dare them right back with any board you like.</p></div>
        </section>

        <div className="play-actions"><a className="gloss-button gloss-green" href="/play"><span className="gloss-button-inner">How OutBrick plays <ArrowUpRight size={18} /></span></a><a className="back-link" href="/"><ArrowLeft size={16} /> Back to the official site</a></div>
      </main>
      <footer className="site-footer play-footer"><div className="footer-bottom"><span>© 2026 OutBrick</span><StoreBadge compact /></div></footer>
    </div>
  );
}
