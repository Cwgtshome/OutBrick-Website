import { currentGameCopy } from '../../../lib/i18n/current-game';
import { CurrentGameFeatures } from '../../components/current-game-features';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { Handoff, LegalPage } from '../../legal-page';
import { JsonLd } from '../../json-ld';
import { graph } from '../../../lib/structured-data';
import { siteUrl } from '../../../lib/site';
import { HelpSearch } from '../../components/help-search';
import { supportFaqs as faqs } from '../../../lib/support-faqs';


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
      updated="7 October 2026"
      current="/support"
    >
      <div data-help-root>
      <HelpSearch />
      <div className="brick headline" data-help-item>
        <h2>Every board comes with a free undo.</h2>
        <p>
          The first undo on any board is free, it never comes out of your tank, and it cannot run out.
          After that, undos come from a tank of five that fills itself back up one every twenty-five
          minutes — or five for 250 coins, or two for a rewarded video. If a board has no possible
          move left, it reshuffles itself for free.
        </p>
      </div>

      <section className="brick" data-help-item>
        <h2>Lives</h2>
        <p>
          You hold five lives, eight while you hold the Brick Pass, and one comes back on its own every
          thirty minutes whether the app is open or not. Waiting always works, and the card that tells
          you the tank is empty runs a live countdown to the next one.
        </p>
        <p>
          {currentGameCopy.en.lives}
        </p>
      </section>

      <section className="brick" data-help-item>
        <h2>Are there ads?</h2>
        <p>
          {currentGameCopy.en.ads}
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

      <section className="brick" data-help-group>
        <h2>Quick fixes</h2>
        <ul className="points">
          <li data-help-item><b>Restore purchases:</b> open Shop, then choose Restore purchases. Apple processes the transaction through your Apple ID.</li>
          <li data-help-item><b>Colour-blind mode:</b> on by default, so every brick and gate already carries a readable glyph. It can be switched off, and back on, in Settings.</li>
          <li data-help-item>
            <b>Out of moves:</b> every board has a move limit, shown beside your move count from the
            first tap. Reaching it is not the end of the board — the card offers more moves before
            anything else happens: five for coins, or two for a video (then one, then a free UFO). The
            coin price climbs within one
            attempt — 300, then 500, then 900 — and goes back to 300 when you leave the board or clear
            it.
          </li>
          <li data-help-item><b>{currentGameCopy.en.starsTitle}:</b> {currentGameCopy.en.stars}</li>
          <li data-help-item><b>Advertising choices:</b> in the EEA, the UK and Switzerland, Settings &rsaquo; Advertising choices reopens the consent form at any time. iOS tracking permission lives in Settings &rsaquo; Privacy &amp; Security &rsaquo; Tracking, and saying no changes nothing about the game.</li>
          <li data-help-item><b>Widgets:</b> add the OutBrick widget from your iPhone Home Screen and choose a size that fits your layout.</li>
          <li data-help-item><b>What changed in the latest update:</b> the full release notes are on <a href="/whats-new">What’s new</a>.</li>
        </ul>
      </section>

      <section className="brick faq" aria-labelledby="faq-title" data-help-group>
        <h2 id="faq-title">Common questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question} data-help-item>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>

      </div>

      <section className="brick headline">
        <h2>Illustrated guides</h2>
        <p>
          The Help Centre explains every screen, menu and setting in OutBrick 5.1 with real screenshots from the game, with a whole shelf on VoiceOver and accessibility.
        </p>
        <div className="act">
          <a className="btn" href="/community/help">Open the Help Centre</a>
          <a className="btn" href="/community/help/voiceover">Playing with VoiceOver</a>
        </div>
      </section>

      <section className="brick headline">
        <h2>Ask the community</h2>
        <p>
          Players and the OutBrick team answer questions, track bugs and vote on ideas in OutBrick Community.
        </p>
        <div className="act">
          <a className="btn" href="/community/c/help">Ask the community</a>
          <a className="btn" href="/community/new?category=bugs">Report a bug</a>
        </div>
      </section>

      <section className="brick">
        <h2>Still stuck?</h2>
        <p>
          Tell us the level number, device model, iOS version, and what happened. A screenshot is always
          useful. We do not need your Game Center login or any payment details.
        </p>
      </section>

      <Handoff title="Contact OutBrick" note="Real contact form" action="Open the contact form" href="/contact" />
      <JsonLd
        data={graph({
          '@type': 'FAQPage',
          '@id': `${siteUrl}/support#faq`,
          url: `${siteUrl}/support`,
          isPartOf: { '@id': `${siteUrl}/support#webpage` },
          mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
        })}
      />
    <CurrentGameFeatures />
    </LegalPage>
  );
}
