import type { Metadata } from 'next';
import { Apple, ExternalLink, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Apple EULA',
  description: 'How Apple’s Licensed Application End User License Agreement applies to OutBrick.',
};

export default function AppleEulaPage() {
  return (
    <LegalPage
      eyebrow="Apple EULA"
      title="The App Store terms."
      summary="OutBrick is distributed through Apple’s App Store. This page explains the relationship between Apple’s standard licensed-application terms and OutBrick."
      updated="4 September 2026"
    >
      <section className="legal-highlight legal-highlight-blue">
        <Apple size={25} />
        <div>
          <h2>Read Apple’s current wording.</h2>
          <p>The official Apple Licensed Application End User License Agreement is the source of truth for apps governed by Apple’s Standard EULA.</p>
          <a className="inline-link" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Open Apple’s Standard EULA <ExternalLink size={14} /></a>
        </div>
      </section>

      <h2>What it means for OutBrick</h2>
      <p>OutBrick is licensed to you, not sold. Apple’s Standard EULA and Usage Rules govern the App Store license unless a custom end-user license agreement is presented with the app. The license is limited to Apple-branded products you own or control and to the permissions allowed by Apple.</p>

      <h2>Apple and OutBrick</h2>
      <p>The license agreement for OutBrick is between you and the application provider, OutBrick. OutBrick—not Apple—is responsible for OutBrick, its content, product claims, and support. Apple and its subsidiaries are third-party beneficiaries of the applicable EULA and may enforce the terms that apply to the licensed application.</p>

      <h2>Platform services</h2>
      <p>Game Center, App Store distribution, in-app purchases, family sharing, and refund processing are Apple services. When you use one of them, the relevant Apple terms and account controls apply in addition to the OutBrick license.</p>

      <h2>Privacy and technical information</h2>
      <p>OutBrick’s own privacy practices are described in the <a className="inline-link" href="/privacy">OutBrick privacy policy</a>. Apple may process information as described in Apple’s own policies when you use Apple services. OutBrick does not receive your payment details.</p>

      <h2>Contact the app provider</h2>
      <p>For an OutBrick defect, accessibility issue, content question, or other product claim, use the <a className="inline-link" href="/contact">OutBrick contact form</a>. For App Store billing, receipts, or refunds, use Apple’s <a className="inline-link" href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">Report a Problem</a> service.</p>

      <div className="legal-fact-row">
        <span><ShieldCheck size={16} /> Apple-managed purchases</span>
        <span><Apple size={16} /> Licensed, not sold</span>
      </div>
    </LegalPage>
  );
}
