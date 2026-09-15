import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MessageCircle, Undo2 } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with OutBrick levels, lives, undos, rewarded videos, purchases, colour-blind mode, and Rush timer settings.',
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="OutBrick support"
      title="Need a hand?"
      summary="OutBrick is meant to feel calm even when the board gets knotty. Here are the quickest ways through a stuck level, what lives and undos actually cost, and the best way to reach us."
      updated="15 September 2026"
    >
      <section className="legal-highlight">
        <Undo2 size={25} />
        <div>
          <h2>Every board comes with a free undo.</h2>
          <p>The first undo on any board is free, it never comes out of your tank, and it cannot run out. After that, undos come from a tank of ten that fills itself back up one every twenty minutes — or five for 250 coins, or three for a rewarded video. The undo on the “Wedged!” sheet is free as well, and outside the tank too: that sheet only appears when no clear is reachable from the current position, and getting out of a board the game wedged is never charged for.</p>
        </div>
      </section>

      <h2>Lives</h2>
      <p>You hold five lives, eight while you hold the Brick Pass, and one comes back on its own every thirty minutes whether the app is open or not. Waiting always works, and the card that tells you the tank is empty runs a live countdown to the next one.</p>
      <p>A life is spent in two situations, and only two: you ran out of moves on a board and chose <em>Try again</em> instead of taking more moves, or you walked away from a board you had already made a move on. Playing costs nothing, clearing costs nothing, undoing costs nothing, and opening a level to look at it and backing out costs nothing. When leaving would cost one, the pause card’s Home button says so first — with the cost and the lives you have left — and lets you go back to the board instead.</p>

      <h2>Are there ads?</h2>
      <p>Yes — rewarded video, and nothing else. There are no banners, no interstitials, no ad between levels and no ad when the app opens. A video plays only when you press a button asking for something: one life, five more moves at the limit, or three undos.</p>
      <p>Declining costs you nothing at all. Every reward, every board and every price is identical whether you watch or not, and there is always a second way to the same thing — coins, or simply waiting. If you would rather never be offered one, <strong>Remove Ads</strong> is a one-time $4.99 purchase, and the Brick Pass does the same for as long as you hold it. Either one stops OutBrick requesting ads entirely and still pays you the rewards those videos would have given, so the purchase never takes anything away from you.</p>

      <h2>Quick fixes</h2>
      <ul>
        <li><strong>Restore purchases:</strong> open Shop, then choose Restore purchases. Apple processes the transaction through your Apple ID.</li>
        <li><strong>Colour-blind mode:</strong> open Settings and switch on Colour-blind. Every brick and gate gets a readable glyph.</li>
        <li><strong>Out of moves:</strong> every board has a move limit, shown beside your move count from the first tap. Reaching it is not the end of the board — the card offers five more moves for 300 coins or for a video before anything else happens.</li>
        <li><strong>Target, not par:</strong> the number you are aiming at used to be called par. It is called the target now. Same number, same rule: clear at or under it for the second star, and do that without an undo for the third.</li>
        <li><strong>Rush timer:</strong> it is off by default. Settings › Rush timer enables the optional countdown and coin bonus.</li>
        <li><strong>Advertising choices:</strong> in the EEA, the UK and Switzerland, Settings › Advertising choices reopens the consent form at any time. iOS tracking permission lives in Settings › Privacy &amp; Security › Tracking, and saying no changes nothing about the game.</li>
        <li><strong>Widgets:</strong> add the OutBrick widget from your iPhone Home Screen and choose a size that fits your layout.</li>
      </ul>

      <h2>Still stuck?</h2>
      <p>Tell us the level number, device model, iOS version, and what happened. A screenshot is always useful. We do not need your Game Center login or any payment details.</p>
      <div className="legal-contact-grid">
        <a className="legal-contact" href="/contact">
          <Mail size={20} />
          <span><strong>Contact OutBrick</strong><small>Real contact form</small></span>
          <ArrowUpRight size={16} />
        </a>
        <a className="legal-contact" href="/accessibility">
          <MessageCircle size={20} />
          <span><strong>Accessibility support</strong><small>Tell us what needs fixing</small></span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </LegalPage>
  );
}
