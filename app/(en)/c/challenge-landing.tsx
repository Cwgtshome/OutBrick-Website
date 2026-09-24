'use client';

import { useEffect, useMemo, useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { PlayableBoard } from '../../components/playable-board';
import { AppStoreBadge, VillageFooter, VillageHeader } from '../../village-shell';

type Challenge = { level: number; par: number; beat: boolean };

/**
 * The site is a static export, so the dare is read on the client from the link
 * the iMessage bubble carried. Both shapes `BrickoutMessages/Challenge.swift`
 * can produce are parsed, exactly as `Challenge.init(url:)` parses them:
 *
 *   /c?lv=<n>&par=<p>&beat=<0|1>   the form that rides on the message bubble
 *   /c/<n>?par=<p>&beat=<0|1>      the hand-typed path form
 *
 * `beat` defaults to 1, matching the Swift initialiser: a dare on a board the
 * sender has already cleared reads "beat their N moves", one on a board they
 * have not reads "clear it in N moves".
 *
 * `par` is a wire name, not a word for a reader. The app's internal symbol is
 * still `Level.par` and the link format is fixed by `Challenge.swift` and
 * `Brickout/Services/DeepLink.swift`, so renaming this key would break every
 * link already sent. Everything a visitor can read says "target" or "moves".
 *
 * `kind` is gone. It only ever had two values and the second named the Daily
 * Brick, which was withdrawn; every dare is a Journey board now. Links already
 * sent still carry `kind=daily`, and both ends ignore it.
 *
 * The path form only reaches this component because Netlify rewrites `/c/*` to
 * `/c` with a 200, keeping the address bar on `/c/42` so `pathname` still
 * carries the number. Without that rule the path form is a 404, which is the
 * bug this page exists to remove. On a device with OutBrick installed,
 * `/.well-known/apple-app-site-association` claims both `/c` and `/c/*`, so
 * iOS opens the board in the app and this page is never drawn.
 */
function readChallenge(): Challenge | null {
  if (typeof window === 'undefined') return null;
  const query = new URLSearchParams(window.location.search);
  const segments = window.location.pathname.replace(/^\/+|\/+$/g, '').split('/');
  const fromPath = segments[0] === 'c' ? segments[1] : undefined;
  const level = Number.parseInt(query.get('lv') ?? fromPath ?? '', 10);
  if (!Number.isFinite(level) || level < 1 || level > 100000) return null;
  const par = Number.parseInt(query.get('par') ?? '', 10);
  return {
    level,
    par: Number.isFinite(par) && par > 0 ? par : 0,
    beat: query.get('beat') !== '0',
  };
}

// The address never changes under this page, so there is nothing to subscribe
// to; the store only exists to read it after hydration without an effect.
const subscribeToNothing = () => () => {};
const readAddress = () => window.location.pathname + window.location.search;
const readNoAddress = () => null;

/**
 * `qr` is the desktop scan-to-get card, drawn on the server (app/components/get-app-qr.tsx)
 * and passed in so its code is computed at build time, not shipped in this bundle.
 */
export function ChallengeLanding({ qr }: { qr?: ReactNode }) {
  // null while prerendering and hydrating, the real address straight after,
  // so the server HTML and the first client render still match.
  const address = useSyncExternalStore(subscribeToNothing, readAddress, readNoAddress);
  const ready = address !== null;
  const challenge = useMemo(() => (address === null ? null : readChallenge()), [address]);

  useEffect(() => {
    if (challenge) document.title = `Level ${challenge.level} — an OutBrick challenge`;
  }, [challenge]);

  const plaque = challenge ? `Level ${challenge.level}` : ready ? 'OutBrick' : 'Level';
  const subtitle = challenge
    ? challenge.par > 0
      ? `Journey · target ${challenge.par}`
      : 'Journey'
    : ready
      ? 'a sliding-brick puzzle'
      : 'a board of OutBrick';
  const dare = challenge
    ? challenge.par > 0
      ? challenge.beat
        ? `Beat their ${challenge.par} moves.`
        : `Clear it in ${challenge.par} moves.`
      : 'Can you clear it?'
    : 'Clear the board.';

  /**
   * Offered as a button, never as an automatic redirect: firing a custom scheme
   * at someone who does not have the app is exactly the dead end this page
   * exists to remove. The URL is `Challenge.appURL` rebuilt from the same
   * parts — level in the path, `par` and `beat` in the query — so the app opens
   * the board it names instead of dropping the visitor on the map.
   */
  const appUrl = challenge
    ? `outbrick://level/${challenge.level}?par=${challenge.par}&beat=${challenge.beat ? '1' : '0'}`
    : 'outbrick://play';

  return (
    <div className="ob-site">
      <a className="skip" href="#main">Skip to content</a>
      <VillageHeader links={[]} label="OutBrick" />

      <main id="main">
        <div className="challenge">
          <div className="cloud hide-sm" style={{ '--w': '130px', left: '3%', top: '6%' } as CSSProperties}><i /></div>
          <div className="cloud hide-sm" style={{ '--w': '96px', right: '6%', top: '13%' } as CSSProperties}><i /></div>

          <div className="wrap">
            <p className="eyebrow centred">You have been challenged</p>

            <div className="brick levelplaque">
              <b>{plaque}</b>
              <span>{subtitle}</span>
            </div>

            <h1>{dare}</h1>

            <p className="lede">
              Someone dared you to a board of OutBrick — a relaxed sliding-brick colour-sort puzzle.
              Match every brick to its gate, take the free undo the board comes with, and beat their
              move count.
            </p>

            <ul className="facts centred">
              <li>a free undo every board</li>
              <li>no ad between levels</li>
              <li>works offline</li>
            </ul>

            <div className="cta-row centred">
              <AppStoreBadge campaign="challenge" />
              <a className="btn ghost" href={appUrl}>Already have OutBrick? Open this board</a>
            </div>
            {qr ? <div className="challenge-qr">{qr}</div> : null}
          </div>
          <div className="road" aria-hidden="true"><div className="paving" /></div>
        </div>

        {/* Someone without the app can learn the rule here before the download finishes. */}
        <section className="band-ink challenge-warmup" aria-labelledby="warmup-title">
          <div className="wrap">
            <div className="warmup-copy">
              <p className="eyebrow">Warm up first</p>
              <h2 id="warmup-title">Learn the rule in your browser.</h2>
              <p className="lede">
                Slide each brick out through the gate of its own colour. A brick glides until something
                stops it, so plan the order. This is board one of the Journey; the one you were dared to
                is waiting in the app.
              </p>
            </div>
            <div className="play-board-wrap">
              <PlayableBoard label="Warm-up OutBrick board" />
            </div>
          </div>
        </section>

        <section className="band-cream">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">The challenge</p>
              <h2>Three steps, and you are on the board.</h2>
            </div>
            <div className="grid g3">
              <div className="brick card cream">
                <span className="step-n">1</span>
                <h3>Get the game</h3>
                <p>
                  OutBrick is a free download on iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple
                  Watch. No subscription, no clock anywhere, and nothing plays that you did not press a
                  button to see.
                </p>
              </div>
              <div className="brick card cream">
                <span className="step-n">2</span>
                <h3>Open the board</h3>
                <p>
                  {challenge ? `Head to Level ${challenge.level} and play it.` : 'Head to the board you were sent and play it.'}{' '}
                  Every board comes with a free undo that never runs out.
                </p>
              </div>
              <div className="brick card cream">
                <span className="step-n">3</span>
                <h3>Send one back</h3>
                <p>Tap the OutBrick app in Messages to dare them right back with any board you like.</p>
              </div>
            </div>
            <p className="note">
              <a href="/#rule">How OutBrick plays</a> · <a href="/">Back to the official site</a>
            </p>
          </div>
        </section>
      </main>

      <VillageFooter />
    </div>
  );
}
