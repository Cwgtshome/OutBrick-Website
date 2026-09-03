import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MessageCircle, Undo2 } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with OutBrick levels, purchases, colour-blind mode, and Rush timer settings.',
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="OutBrick support"
      title="Need a hand?"
      summary="OutBrick is meant to feel calm even when the board gets knotty. Here are the quickest ways through a stuck level and the best way to reach us."
      updated="3 September 2026"
    >
      <section className="legal-highlight">
        <Undo2 size={25} />
        <div>
          <h2>Undo is free and unlimited.</h2>
          <p>Step back a move or two whenever you want. The “Wedged!” sheet only appears when no clear is reachable from the current position.</p>
        </div>
      </section>

      <h2>Quick fixes</h2>
      <ul>
        <li><strong>Restore purchases:</strong> open Shop, then choose Restore purchases. Apple processes the transaction through your Apple ID.</li>
        <li><strong>Colour-blind mode:</strong> open Settings and switch on Colour-blind. Every brick and gate gets a readable glyph.</li>
        <li><strong>Rush timer:</strong> it is off by default. Settings › Rush timer enables the optional countdown and coin bonus.</li>
        <li><strong>Widgets:</strong> add the OutBrick widget from your iPhone Home Screen and choose a size that fits your layout.</li>
      </ul>

      <h2>Still stuck?</h2>
      <p>Tell us the level number, device model, iOS version, and what happened. A screenshot is always useful. We do not need your Game Center login or any payment details.</p>
      <div className="legal-contact-grid">
        <a className="legal-contact" href="mailto:mourad.hamdi@me.com">
          <Mail size={20} />
          <span><strong>Email the team</strong><small>mourad.hamdi@me.com</small></span>
          <ArrowUpRight size={16} />
        </a>
        <a className="legal-contact" href="https://github.com/Cwgtshome/OutBrick/issues" target="_blank" rel="noreferrer">
          <MessageCircle size={20} />
          <span><strong>Open an issue</strong><small>GitHub issue tracker</small></span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </LegalPage>
  );
}
