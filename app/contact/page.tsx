import type { Metadata } from 'next';
import { Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { LegalPage } from '../legal-page';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact OutBrick',
  description: 'Contact the OutBrick team for game support, accessibility help, privacy questions, and purchase troubleshooting.',
};

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Contact OutBrick"
      title="Let’s untangle it."
      summary="Use the form below for game support, accessibility feedback, privacy questions, or a purchase that did not arrive as expected."
      updated="4 September 2026"
    >
      <section className="legal-highlight legal-highlight-green">
        <MessageCircle size={25} />
        <div>
          <h2>A real line to the team.</h2>
          <p>Fill in the form and OutBrick will open your mail app with a structured message addressed to our support inbox. You can review it before sending.</p>
        </div>
      </section>

      <ContactForm />

      <div className="legal-contact-grid">
        <a className="legal-contact" href="mailto:mourad.hamdi@me.com">
          <Mail size={20} />
          <span><strong>Direct email</strong><small>mourad.hamdi@me.com</small></span>
          <ShieldCheck size={16} />
        </a>
      </div>
    </LegalPage>
  );
}
