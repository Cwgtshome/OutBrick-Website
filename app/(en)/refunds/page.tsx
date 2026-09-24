import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/site';
import { Handoff, LegalPage, Pills } from '../../legal-page';

export const metadata: Metadata = pageMetadata({
  path: '/refunds',
  title: 'OutBrick refunds and restoring purchases',
  description:
    'How to restore OutBrick purchases and request an App Store refund through Apple.',
});

export default function RefundsPage() {
  return (
    <LegalPage
      eyebrow="Purchases and refunds"
      title="Keep billing simple."
      summary="Apple handles payment, receipts, purchase history, and refund decisions for OutBrick. Here is the quickest path for each kind of question."
      updated="4 September 2026"
      current="/refunds"
    >
      <div className="brick headline">
        <h2>Apple handles refunds.</h2>
        <p>
          Start with Apple&rsquo;s Report a Problem service. OutBrick cannot see your payment details or
          issue an App Store refund directly.
        </p>
        <div className="act">
          <a className="btn" href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">
            Open Report a Problem
          </a>
        </div>
      </div>

      <section className="brick">
        <h2>Request a refund</h2>
        <ul className="points">
          <li>
            Open{' '}
            <a href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>{' '}
            and sign in with the Apple Account used for the purchase.
          </li>
          <li>Choose &ldquo;Request a refund,&rdquo; select the relevant reason and OutBrick purchase, then submit it to Apple.</li>
          <li>Check the request status through Apple. Approval and timing are determined by Apple and applicable consumer law.</li>
        </ul>
      </section>

      <section className="brick">
        <h2>Restore a purchase</h2>
        <p>
          For an eligible non-consumable purchase — Remove Ads, a Brick Pass, or a wardrobe item — open
          OutBrick &rsaquo; Shop &rsaquo; Restore purchases. Make sure the device is using the Apple
          Account that made the purchase. Consumable items such as coin packs generally cannot be
          restored after they have been consumed.
        </p>
      </section>

      <section className="brick">
        <h2>Unexpected or duplicate charge</h2>
        <p>
          Use Apple&rsquo;s purchase history and Report a Problem flow first. If the purchase appears
          correct but the app did not deliver the item, contact us with the product name, device model,
          iOS version, and approximate time. Do not send a full receipt, card number, password, or
          security code by email.
        </p>
      </section>

      <Pills items={['Apple billing', 'Restore in Shop', 'No card data held']} />
      <Handoff title="Purchase support" note="Open the contact form" action="Open the contact form" href="/contact" />
    </LegalPage>
  );
}
