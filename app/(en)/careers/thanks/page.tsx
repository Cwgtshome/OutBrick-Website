import { thanksMetadata, ThanksPage } from '../../../thanks-page';

export const metadata = thanksMetadata(
  '/careers/thanks',
  'Application received — careers at OutBrick',
  'Your job application reached OutBrick. A person reads every application and replies by email.',
);

export default function CareersThanksPage() {
  return (
    <ThanksPage eyebrow="Application received" title="Thank you for applying." back={{ href: '/careers', label: 'See all open roles' }}>
      <p className="lede">
        A person reads every application. If it is a match, the next step is a short video call; either
        way, we will write to the email address you gave.
      </p>
    </ThanksPage>
  );
}
