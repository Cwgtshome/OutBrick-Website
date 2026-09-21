import type { Metadata } from 'next';
import { LegalPage, Pills } from '../legal-page';

export const metadata: Metadata = {
  title: 'Apple EULA',
  description: "How Apple's standard licensed-application end user license agreement applies to OutBrick.",
};

export default function EulaPage() {
  return (
    <LegalPage
      eyebrow="Apple EULA"
      title="The App Store terms."
      summary="OutBrick is distributed through Apple’s App Store. This page explains the relationship between Apple’s standard licensed-application terms and OutBrick."
      updated="4 September 2026"
      current="/eula"
    >
      <div className="brick headline">
        <h2>Read Apple&rsquo;s current wording.</h2>
        <p>
          The official Apple Licensed Application End User License Agreement is the source of truth for
          apps governed by Apple&rsquo;s Standard EULA.
        </p>
        <div className="act">
          <a className="btn" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">
            Open Apple&rsquo;s Standard EULA
          </a>
        </div>
      </div>

      <section className="brick">
        <h2>What it means for OutBrick</h2>
        <p>
          OutBrick is licensed to you, not sold. Apple&rsquo;s Standard EULA and Usage Rules govern the
          App Store license unless a custom end-user license agreement is presented with the app. The
          license is limited to Apple-branded products you own or control and to the permissions allowed
          by Apple.
        </p>
      </section>

      <section className="brick">
        <h2>Apple and OutBrick</h2>
        <p>
          The license agreement for OutBrick is between you and the application provider, OutBrick.
          OutBrick—not Apple—is responsible for OutBrick, its content, product claims, and support.
          Apple and its subsidiaries are third-party beneficiaries of the applicable EULA and may
          enforce the terms that apply to the licensed application.
        </p>
      </section>

      <section className="brick">
        <h2>Platform services</h2>
        <p>
          Game Center, App Store distribution, in-app purchases, family sharing, and refund processing
          are Apple services. When you use one of them, the relevant Apple terms and account controls
          apply in addition to the OutBrick license.
        </p>
      </section>

      <section className="brick">
        <h2>Privacy and technical information</h2>
        <p>
          OutBrick&rsquo;s own privacy practices are described in the{' '}
          <a href="/privacy">OutBrick privacy policy</a>. Apple may process information as described in
          Apple&rsquo;s own policies when you use Apple services. OutBrick does not receive your payment
          details.
        </p>
      </section>

      <section className="brick">
        <h2>Contact the app provider</h2>
        <p>
          For an OutBrick defect, accessibility issue, content question, or other product claim, use the{' '}
          <a href="/contact">OutBrick contact form</a>. For App Store billing, receipts, or refunds, use
          Apple&rsquo;s{' '}
          <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">Report a Problem</a>{' '}
          service.
        </p>
      </section>

      <Pills items={['Apple-managed purchases', 'Licensed, not sold']} />
    </LegalPage>
  );
}
