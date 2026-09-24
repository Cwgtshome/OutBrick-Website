import { thanksMetadata, ThanksPage } from '../../../thanks-page';

export const metadata = thanksMetadata(
  '/affiliates/thanks',
  'Application received — the OutBrick affiliate programme',
  'Your application to the OutBrick affiliate programme arrived. We review every one and reply by email.',
);

export default function AffiliateThanksPage() {
  return (
    <ThanksPage eyebrow="Application received" title="Thanks — we’ll take a look." back={{ href: '/creators', label: 'Read the creators kit' }}>
      <p className="lede">
        We review every application and reply by email. If you are approved, we confirm your code and
        your link, outbrick.site/r/your-code. It starts counting from the day it is approved; until then
        it is only a proposal.
      </p>
    </ThanksPage>
  );
}
