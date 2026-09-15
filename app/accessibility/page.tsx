import type { Metadata } from 'next';
import { Check, Eye, HeartHandshake, Mail, ShieldCheck, Volume2 } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Accessibility support',
  description: 'Accessibility features and support contacts for the OutBrick iOS game.',
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="OutBrick accessibility"
      title="Make room to play."
      summary="OutBrick aims to keep the board readable, calm, and comfortable across supported iPhone and iPad sizes. Tell us what would make the next clear easier."
      updated="4 September 2026"
    >
      <section className="legal-highlight legal-highlight-green">
        <HeartHandshake size={25} />
        <div>
          <h2>We want the board to meet you.</h2>
          <p>OutBrick includes colour-blind glyphs, labelled primary controls, reduced-motion handling, and in-game controls for sound, music, haptics, and the optional Rush timer.</p>
        </div>
      </section>

      <h2>Current support</h2>
      <ul>
        <li><strong>Colour-blind mode:</strong> turn on Colour-blind in Settings. Bricks and gates gain readable symbols in addition to colour.</li>
        <li><strong>Reduce Motion:</strong> OutBrick respects the system Reduce Motion setting by reducing parallax, confetti, and spring-heavy transitions.</li>
        <li><strong>VoiceOver labels:</strong> primary controls, profile controls, Game Center, Undo, Pause, Close, and important game status elements expose descriptive labels.</li>
        <li><strong>Comfort controls:</strong> sound, music, haptics, notifications, and the optional Rush timer can be switched off in Settings.</li>
      </ul>

      <h2>Device size and input</h2>
      <p>The game adapts its layouts for iPhone and iPad. Play is touch-first, with one-finger brick movement and a free undo on every board. If a control is clipped, hard to reach, or not announced as expected, please include the device model, iOS version, and the name of the affected screen.</p>

      <h2>Contact accessibility support</h2>
      <p>We welcome requests for additional support, including larger labels, stronger contrast, motion changes, or VoiceOver improvements. Use the <a className="inline-link" href="/contact">OutBrick contact form</a>; please avoid sending health information or other sensitive details.</p>
      <div className="legal-contact-grid">
        <a className="legal-contact" href="/contact">
          <Mail size={20} />
          <span><strong>Contact accessibility support</strong><small>Open the contact form</small></span>
          <Check size={16} />
        </a>
      </div>

      <div className="legal-fact-row">
        <span><Eye size={16} /> Colour-blind glyphs</span>
        <span><Volume2 size={16} /> Audio controls</span>
        <span><ShieldCheck size={16} /> Reduce Motion</span>
      </div>
    </LegalPage>
  );
}
