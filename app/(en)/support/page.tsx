import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { Handoff, LegalPage } from '../../legal-page';

export const metadata: Metadata = pageMetadata({
  path: '/support',
  title: 'OutBrick support: stuck boards, lives, undos, ads',
  description:
    'OutBrick support: the quickest way through a stuck level, what lives and undos actually cost, how the rewarded video works, and how to reach us.',
});

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="OutBrick support"
      title="Need a hand?"
      summary="OutBrick is meant to feel calm even when the board gets knotty. Here are the quickest ways through a stuck level, what lives and undos actually cost, and the best way to reach us."
      updated="22 September 2026"
      current="/support"
    >
      <div className="brick headline">
        <h2>Every board comes with a free undo.</h2>
        <p>
          The first undo on any board is free, it never comes out of your tank, and it cannot run out.
          After that, undos come from a tank of five that fills itself back up one every twenty-five
          minutes — or five for 250 coins, or two for a rewarded video. The undo on the
          &ldquo;Wedged!&rdquo; sheet is free as well, and outside the tank too: that sheet only appears
          when no clear is reachable from the current position, and getting out of a board the game
          wedged is never charged for.
        </p>
      </div>

      <section className="brick">
        <h2>Lives</h2>
        <p>
          You hold five lives, eight while you hold the Brick Pass, and one comes back on its own every
          thirty minutes whether the app is open or not. Waiting always works, and the card that tells
          you the tank is empty runs a live countdown to the next one.
        </p>
        <p>
          A life is spent in two situations, and only two: you ran out of moves on a board and chose
          Try again instead of taking more moves, or you walked away from a board you had already made
          a move on. Playing costs nothing, clearing costs nothing, undoing costs nothing, and opening
          a level to look at it and backing out costs nothing. When leaving would cost one, the pause
          card&rsquo;s Home button says so first — with the cost and the lives you have left — and lets
          you go back to the board instead.
        </p>
      </section>

      <section className="brick">
        <h2>Are there ads?</h2>
        <p>
          Yes — rewarded video, and nothing else. There are no banners, no interstitials, no ad between
          levels and no ad when the app opens. A video plays only when you press a button asking for
          something: one life, five more moves at the limit, two undos, a booster armed for the board
          you are about to start, the clear card&rsquo;s coins paid again, or a second spin of the Brick
          Wheel. Each of the six is capped daily — eight, six, eight, four, four and one — so
          thirty-one rewarded videos a day is the most the game will ever pay for.
        </p>
        <p>
          Declining costs you nothing at all. Every reward, every board and every price is identical
          whether you watch or not, and lives, undos and moves can always be had another way — coins,
          or simply waiting. If you would rather never be offered one, Remove Ads is a one-time $4.99
          purchase, and the Brick Pass does the same for as long as you hold it. Either one stops
          OutBrick requesting ads entirely and still pays you the rewards those videos would have
          given, so the purchase never takes anything away from you.
        </p>
      </section>

      <section className="brick">
        <h2>Quick fixes</h2>
        <ul className="points">
          <li><b>Restore purchases:</b> open Shop, then choose Restore purchases. Apple processes the transaction through your Apple ID.</li>
          <li><b>Colour-blind mode:</b> on by default, so every brick and gate already carries a readable glyph. It can be switched off, and back on, in Settings.</li>
          <li>
            <b>Out of moves:</b> every board has a move limit, shown beside your move count from the
            first tap. Reaching it is not the end of the board — the card offers five more moves for
            coins or for a video before anything else happens. The coin price climbs within one
            attempt — 300, then 500, then 900 — and goes back to 300 when you leave the board or clear
            it.
          </li>
          <li><b>Target, not par:</b> the number you are aiming at used to be called par. It is called the target now. Same number, same rule: clear at or under it for the second star, and do that without an undo for the third.</li>
          <li><b>Advertising choices:</b> in the EEA, the UK and Switzerland, Settings &rsaquo; Advertising choices reopens the consent form at any time. iOS tracking permission lives in Settings &rsaquo; Privacy &amp; Security &rsaquo; Tracking, and saying no changes nothing about the game.</li>
          <li><b>Widgets:</b> add the OutBrick widget from your iPhone Home Screen and choose a size that fits your layout.</li>
        </ul>
      </section>

      <section className="brick">
        <h2>Still stuck?</h2>
        <p>
          Tell us the level number, device model, iOS version, and what happened. A screenshot is always
          useful. We do not need your Game Center login or any payment details.
        </p>
      </section>

      <Handoff title="Contact OutBrick" note="Real contact form" action="Open the contact form" href="/contact" />
    </LegalPage>
  );
}
