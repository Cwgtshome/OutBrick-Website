import { thanksMetadata, ThanksPage } from '../../../thanks-page';

export const metadata = thanksMetadata(
  '/contact/thanks',
  'Message sent — thank you for contacting OutBrick',
  'Your message reached the OutBrick team. A person reads every message and replies by email.',
);

export default function ContactThanksPage() {
  return (
    <ThanksPage eyebrow="Message sent" title="Thank you — it’s with the team." back={{ href: '/support', label: 'Browse support answers' }}>
      <p className="lede">
        A person reads every message and replies to the email address you gave. If you need to add
        something, reply to our email when it arrives.
      </p>
    </ThanksPage>
  );
}
