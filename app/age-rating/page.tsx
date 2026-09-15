import type { Metadata } from 'next';
import { Check, Gamepad2, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Age rating',
  description: 'Why OutBrick is suitable for a 4+ audience and what features are included in the game.',
};

export default function AgeRatingPage() {
  return (
    <LegalPage
      eyebrow="OutBrick age suitability"
      title="A gentle 4+ puzzle."
      summary="OutBrick is a colour-sort puzzle designed for quiet, all-ages play. Here is the reasoning behind its App Store age-rating information, including its advertising and in-app purchases."
      updated="15 September 2026"
    >
      <section className="legal-highlight legal-highlight-green">
        <Gamepad2 size={25} />
        <div>
          <h2>Simple rules. No mature themes.</h2>
          <p>The game is about sliding colourful bricks into matching gates. It contains no realistic violence, sexual content, gambling, profanity, or mature themes.</p>
        </div>
      </section>

      <h2>What players will find</h2>
      <ul>
        <li>Abstract brick boards, friendly mascots, light celebrations, and puzzle-focused progression.</li>
        <li>No user-generated content and no public chat. Nothing has to be bought or watched to play the core boards.</li>
        <li>Optional Game Center leaderboards and challenges are provided through Apple and may be controlled through the device’s Game Center settings.</li>
        <li>Optional in-app purchases are processed by Apple. They are never required to finish the core journey.</li>
        <li>Rewarded video advertising, described below.</li>
      </ul>

      <h2>Advertising</h2>
      <p>OutBrick contains advertising, and it is rewarded video only. There are no banners, no interstitials, no ad when the app opens and no ad between levels. A video plays only when a player presses a button asking for one of three things: a life, five more moves, or three undos. Declining costs nothing — every reward, board and price in the game is the same whether a video is watched or not, and each of those three things can also be waited for or bought with coins earned by playing.</p>
      <p>The ads are served by Google (AdMob). In the European Economic Area, the United Kingdom and Switzerland, Google’s consent form is shown before the first ad is requested and can be reopened at any time from Advertising choices in OutBrick Settings; iOS asks separately before the app may use the advertising identifier for tracking. A one-time <strong>Remove Ads</strong> purchase, or the Brick Pass, stops OutBrick requesting ads at all. What is collected when an ad is requested is set out in the <a className="inline-link" href="/privacy#ads">privacy policy</a>, and the controls are listed on <a className="inline-link" href="/privacy-choices">privacy choices</a>.</p>

      <h2>Connectivity and services</h2>
      <p>The core game is offline-first. Game Center, restoring purchases, App Store services, widgets, and any optional network-backed feature may use platform connectivity. OutBrick does not provide unrestricted web browsing inside the game.</p>

      <h2>Why 4+</h2>
      <p>OutBrick has no objectionable content in the categories described above, and its interaction model is a calm, non-competitive puzzle loop. The 4+ label describes the content, not a promise that every device or player will have the same reading or motor needs. Accessibility information and support are available on our <a className="inline-link" href="/accessibility">accessibility support</a> page.</p>

      <div className="legal-fact-row">
        <span><Check size={16} /> No mature themes</span>
        <span><ShieldCheck size={16} /> Rewarded video only</span>
        <span><Gamepad2 size={16} /> Puzzle play</span>
      </div>
    </LegalPage>
  );
}
