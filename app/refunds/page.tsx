import type { Metadata } from 'next';
import { Apple, CircleDollarSign, Mail, ShieldCheck, Undo2 } from 'lucide-react';
import { LegalPage } from '../legal-page';

export const metadata: Metadata = {
  title: 'Refunds and purchases',
  description: 'How to restore OutBrick purchases and request an App Store refund through Apple.',
};

export default function RefundsPage() {
  return (
    <LegalPage
      eyebrow="Purchases and refunds"
      title="Keep billing simple."
      summary="Apple handles payment, receipts, purchase history, and refund decisions for OutBrick. Here is the quickest path for each kind of question."
      updated="4 September 2026"
    >
      <section className="legal-highlight legal-highlight-purple">
        <Apple size={25} />
        <div>
          <h2>Apple handles refunds.</h2>
          <p>Start with Apple’s Report a Problem service. OutBrick cannot see your payment details or issue an App Store refund directly.</p>
          <a className="inline-link" href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">Open Report a Problem <Apple size={14} /></a>
        </div>
      </section>

      <h2>Request a refund</h2>
      <ol>
        <li>Open <a className="inline-link" href="https://reportaproblem.apple.com/" target="_blank" rel="noreferrer">reportaproblem.apple.com</a> and sign in with the Apple Account used for the purchase.</li>
        <li>Choose “Request a refund,” select the relevant reason and OutBrick purchase, then submit it to Apple.</li>
        <li>Check the request status through Apple. Approval and timing are determined by Apple and applicable consumer law.</li>
      </ol>

      <h2>Restore a purchase</h2>
      <p>For an eligible non-consumable purchase such as Brick Pass, open OutBrick › Shop › Restore purchases. Make sure the device is using the Apple Account that made the purchase. Consumable items such as coin packs generally cannot be restored after they have been consumed.</p>

      <h2>Unexpected or duplicate charge</h2>
      <p>Use Apple’s purchase history and Report a Problem flow first. If the purchase appears correct but the app did not deliver the item, contact us with the product name, device model, iOS version, and approximate time. Do not send a full receipt, card number, password, or security code by email.</p>
      <div className="legal-contact-grid">
        <a className="legal-contact" href="/contact">
          <Mail size={20} />
          <span><strong>Purchase support</strong><small>Open the contact form</small></span>
          <Undo2 size={16} />
        </a>
      </div>

      <div className="legal-fact-row">
        <span><CircleDollarSign size={16} /> Apple billing</span>
        <span><Undo2 size={16} /> Restore in Shop</span>
        <span><ShieldCheck size={16} /> No card data held</span>
      </div>
    </LegalPage>
  );
}
