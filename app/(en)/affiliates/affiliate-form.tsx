'use client';

import { useEffect, useState } from 'react';
import { affiliateLink, codeStem, proposeCode } from '../../../lib/affiliate-code.mjs';
import { ConsentField, NetlifyForm, SelectField, SubmitRow, TextArea, TextField } from '../../components/netlify-form';

const audienceSizes = [
  { value: 'under-1k', label: 'Under 1,000' },
  { value: '1k-10k', label: '1,000 – 10,000' },
  { value: '10k-50k', label: '10,000 – 50,000' },
  { value: '50k-250k', label: '50,000 – 250,000' },
  { value: '250k-1m', label: '250,000 – 1 million' },
  { value: 'over-1m', label: 'Over 1 million' },
];

/**
 * The affiliate application (Netlify form `affiliate`). As the applicant types a handle — or,
 * failing that, their name — it proposes a code (lib/affiliate-code.mjs: MOURAD27) and shows
 * the link it would get. The code travels in a hidden field; without script the field stays
 * empty and the team makes one from the handle instead.
 *
 * The two-digit suffix is drawn once, on the first keystroke, so the proposal does not change
 * under the applicant's fingers and the prerendered HTML stays deterministic.
 */
export function AffiliateForm() {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [suffix, setSuffix] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  /** The suffix is drawn on the first keystroke, so it never changes while the applicant types. */
  const typed = (set: (value: string) => void) => (value: string) => {
    if (suffix === null) setSuffix(10 + Math.floor(Math.random() * 90));
    set(value);
  };

  const stem = codeStem(handle) || codeStem(name, { firstWordOnly: true });
  const code = suffix === null ? '' : proposeCode(stem, suffix);
  const [announced, setAnnounced] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => setAnnounced(code ? `Proposed code ${code.split('').join(' ')}.` : ''), 1200);
    return () => window.clearTimeout(timer);
  }, [code]);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <NetlifyForm
      name="affiliate"
      action="/affiliates/thanks"
      label="Apply to the OutBrick affiliate programme"
      className="obf-affiliate"
      success={(values) => {
        const sentCode = values.get('code') ?? '';
        const sentLink = sentCode ? affiliateLink(sentCode) : '';
        return (
          <>
            <h3>Application received.</h3>
            {sentCode ? (
              <>
                <p>Your proposed code and link — they start working once we approve your application:</p>
                <div className="aff-issued">
                  <span className="aff-code-big">{sentCode}</span>
                  <span className="aff-link-text">{sentLink.replace('https://www.', '')}</span>
                  <button type="button" className="obf-btn ghost" onClick={() => copy(sentLink)}>
                    {copied ? 'Copied' : 'Copy link'}
                  </button>
                </div>
                <p className="obf-live" aria-live="polite">{copied ? 'Link copied to the clipboard.' : ''}</p>
              </>
            ) : null}
            <p>
              We review every application and reply by email to <b>{values.get('email')}</b>. If the code
              is already taken, we will suggest the nearest one. Please don’t share the link until we
              confirm it: until then it is only a proposal and earns nothing.
            </p>
          </>
        );
      }}
    >
      {({ errors, status }) => (
        <>
          <div className="obf-row">
            <TextField name="name" label="Your name" spoken="your name" autoComplete="name" value={name} onValueChange={typed(setName)} error={errors.name} maxLength={120} />
            <TextField
              name="email"
              label="Email"
              spoken="your email address"
              type="email"
              inputMode="email"
              autoComplete="email"
              spellCheck={false}
              autoCapitalize="off"
              error={errors.email}
              maxLength={200}
            />
          </div>
          <TextArea
            name="channels"
            label="Your channels"
            spoken="at least one channel"
            hint="Links to where you post — TikTok, YouTube, Instagram, Snapchat, a blog or newsletter. One per line."
            error={errors.channels}
            rows={3}
            maxLength={1500}
            missing="Add at least one link to where you post."
          />
          <div className="obf-row">
            <SelectField
              name="audience"
              label="Audience size"
              spoken="an audience size"
              hint="Followers or monthly readers, across all your channels."
              placeholder="Choose a range"
              options={audienceSizes}
              error={errors.audience}
            />
            <TextField name="country" label="Country you live in" spoken="your country" autoComplete="country-name" error={errors.country} maxLength={80} />
          </div>
          <TextArea
            name="plan"
            label="How would you promote OutBrick?"
            spoken="how you would promote OutBrick"
            hint="A sentence or two is plenty: the kind of posts, and who watches or reads them."
            error={errors.plan}
            rows={4}
            minLength={20}
            maxLength={2000}
          />
          <div className="aff-codebox">
            <TextField
              name="handle"
              label="Preferred code"
              spoken="a preferred code"
              optional
              hint="Your handle or a word you like. Letters and numbers; we add two digits."
              value={handle}
              onValueChange={typed(setHandle)}
              maxLength={40}
              autoCapitalize="characters"
              spellCheck={false}
              autoComplete="off"
            />
            <input type="hidden" name="code" value={code} />
            <div className="aff-proposal">
              {code ? (
                <>
                  <span className="aff-proposal-label">Your proposed code</span>
                  <span className="aff-code">{code}</span>
                  <span className="aff-proposal-link">
                    Your link will be <b>outbrick.site/r/{code.toLowerCase()}</b>
                  </span>
                </>
              ) : (
                <span className="aff-proposal-label">Type your name or a handle to see your proposed code.</span>
              )}
            </div>
            {/* Announced once typing pauses, not on every keystroke. */}
            <p className="obf-live" aria-live="polite">{announced}</p>
          </div>
          <ConsentField error={errors.consent}>
            I agree to the programme rules on this page, including disclosing every post, and that OutBrick
            may use these details to review my application, as described in the{' '}
            <a href="/privacy#forms">privacy policy</a>.
          </ConsentField>
          <SubmitRow
            status={status}
            label="Apply to the programme"
            next="What happens next: we review your channels and reply by email. If approved, we confirm your code and link — they start counting from that day."
          />
        </>
      )}
    </NetlifyForm>
  );
}
