import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { Handoff, LegalPage, Pills } from '../../legal-page';

export const metadata: Metadata = pageMetadata({
  path: '/accessibility',
  title: 'OutBrick accessibility: glyphs, VoiceOver, Reduce Motion',
  description:
    'How OutBrick plays with VoiceOver, colour-blind glyphs on by default, Larger Text and Reduce Motion — and how to get accessibility help.',
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="OutBrick accessibility"
      title="Make room to play."
      summary="OutBrick aims to keep the board readable, calm, and comfortable across iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch. Tell us what would make the next clear easier."
      updated="22 September 2026"
      current="/accessibility"
    >
      <div className="brick headline">
        <h2>We want the board to meet you.</h2>
        <p>
          OutBrick includes colour-blind glyphs, labelled primary controls, reduced-motion handling, and
          in-game controls for sound, music, and haptics.
        </p>
      </div>

      <section className="brick">
        <h2>Current support</h2>
        <ul className="points">
          <li><b>Colour-blind mode:</b> on by default. Bricks and gates carry readable symbols in addition to colour, and the mode can be switched off in Settings.</li>
          <li><b>Reduce Motion:</b> OutBrick respects the system Reduce Motion setting by reducing parallax, confetti, and spring-heavy transitions.</li>
          <li><b>VoiceOver labels:</b> primary controls, profile controls, Game Center, Undo, Pause, Close, and important game status elements expose descriptive labels.</li>
          <li><b>Comfort controls:</b> sound, music, haptics, and notifications can be switched off in Settings.</li>
        </ul>
      </section>

      <section className="brick">
        <h2>Device size and input</h2>
        <p>
          The game adapts its layouts for iPhone, iPad, Mac, Apple TV, Apple Vision Pro and Apple Watch.
          Play is touch-first on iPhone, iPad and Apple Vision Pro, with one-finger brick movement and a
          free undo on every board; Apple TV is played with the Siri Remote, and Apple Watch with the
          Digital Crown as well as touch. If a control is clipped, hard to reach, or not announced as
          expected, please include the device model, iOS version, and the name of the affected screen.
        </p>
      </section>

      <section className="brick">
        <h2>Contact accessibility support</h2>
        <p>
          We welcome requests for additional support, including larger labels, stronger contrast, motion
          changes, or VoiceOver improvements. Use the <a href="/contact">OutBrick contact form</a>;
          please avoid sending health information or other sensitive details.
        </p>
      </section>

      <Pills items={['Colour-blind glyphs', 'Audio controls', 'Reduce Motion']} />
      <Handoff title="Contact accessibility support" note="Open the contact form" action="Open the contact form" href="/contact" />
    </LegalPage>
  );
}
