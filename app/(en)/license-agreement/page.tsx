import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { LegalPage, Pills } from '../../legal-page';

export const metadata: Metadata = pageMetadata({
  path: '/license-agreement',
  title: 'OutBrick license agreement: what you may do',
  description:
    'What you may and may not do with OutBrick, its artwork, and its platform features.',
});

export default function LicenseAgreementPage() {
  return (
    <LegalPage
      eyebrow="OutBrick license"
      title="Keep the bricks yours."
      summary="This license explains what you may do with OutBrick, its original artwork, and the game features delivered through Apple platforms."
      updated="4 September 2026"
      current="/license-agreement"
    >
      <div className="brick headline">
        <h2>OutBrick is licensed, not sold.</h2>
        <p>
          OutBrick gives you a personal, non-transferable license to use the app on Apple-branded
          devices you own or control, subject to Apple&rsquo;s Usage Rules.
        </p>
      </div>

      <section className="brick">
        <h2>1. The license</h2>
        <p>
          OutBrick grants you a limited, non-exclusive, non-transferable license to download, install,
          and use OutBrick for personal, non-commercial play. This license includes updates that replace
          or supplement the app unless an update includes different terms.
        </p>
      </section>

      <section className="brick">
        <h2>2. What you may do</h2>
        <ul className="points">
          <li>Play OutBrick on Apple-branded devices that you own or control.</li>
          <li>Use the app with the Apple account and Family Sharing permissions allowed by Apple&rsquo;s Usage Rules.</li>
          <li>Keep a reasonable backup of the app for your personal use where applicable law and Apple&rsquo;s rules allow it.</li>
        </ul>
      </section>

      <section className="brick">
        <h2>3. What you may not do</h2>
        <ul className="points">
          <li>Copy, resell, rent, sublicense, redistribute, or make the app available for simultaneous use over a network.</li>
          <li>Reverse-engineer, decompile, disassemble, modify, or create derivative works from the app, except where applicable law expressly permits it.</li>
          <li>Remove copyright, trademark, or other ownership notices, or use the OutBrick name, mascots, screenshots, or artwork as your own.</li>
          <li>Interfere with the game, Game Center, purchases, widgets, or any service connected to the app.</li>
        </ul>
      </section>

      <section className="brick">
        <h2>4. Apple terms and services</h2>
        <p>
          Downloading OutBrick from the App Store also requires compliance with Apple&rsquo;s Media
          Services Terms and Conditions, App Store rules, and the terms for services you choose to use.
          Game Center and App Store purchases are operated by Apple. The core board can be played
          offline, while platform services may require an internet connection.
        </p>
      </section>

      <section className="brick">
        <h2>5. Ownership</h2>
        <p>
          OutBrick and its licensors retain all rights in OutBrick, including the game code, visual
          design, mascots, names, logos, screens, and other original materials not expressly licensed to
          you. This agreement does not transfer ownership to you.
        </p>
      </section>

      <section className="brick">
        <h2>6. Termination and changes</h2>
        <p>
          This license ends if you stop using the app, remove it from your devices, or breach these
          terms. OutBrick may update the app or discontinue a feature when reasonably necessary. Your
          statutory consumer rights are not limited by this agreement.
        </p>
      </section>

      <section className="brick">
        <h2>Questions</h2>
        <p>
          Questions about this license can be sent through the <a href="/contact">OutBrick contact form</a>.
          If your question concerns an App Store purchase or refund, Apple&rsquo;s purchase support
          process is the right place to start.
        </p>
      </section>

      <Pills items={['Personal play', 'Apple Usage Rules', 'Original OutBrick work']} />
    </LegalPage>
  );
}
