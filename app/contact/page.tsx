import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/site';
import { LegalPage } from '../legal-page';
import { ContactForm } from './contact-form';

export const metadata: Metadata = pageMetadata({
  path: '/contact',
  title: 'Contact the OutBrick team: support and questions',
  description:
    'Contact the OutBrick team for game support, accessibility help, privacy questions, and purchase troubleshooting.',
});

export default function ContactPage() {
  return (
    <LegalPage
      eyebrow="Contact OutBrick"
      title="Let’s untangle it."
      summary="Use the form below for game support, accessibility feedback, privacy questions, or a purchase that did not arrive as expected."
      updated="4 September 2026"
      current="/contact"
    >
      <div className="brick headline">
        <h2>A real line to the team.</h2>
        <p>
          Fill in the form and OutBrick will open your mail app with a structured message addressed to
          our support inbox. You can review it before sending.
        </p>
      </div>

      <section className="brick">
        <h2>Send a message</h2>
        <ContactForm />
        <p style={{ marginTop: 18 }}>
          This opens a ready-to-send email to <a href="mailto:mourad.hamdi@me.com">mourad.hamdi@me.com</a>.
        </p>
        <p>Please do not include passwords, payment card details, or other sensitive information.</p>
      </section>

      <section className="brick">
        <h2>Direct email</h2>
        <p><a href="mailto:mourad.hamdi@me.com">mourad.hamdi@me.com</a></p>
      </section>
    </LegalPage>
  );
}
