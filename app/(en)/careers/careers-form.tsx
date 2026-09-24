'use client';

import { ConsentField, NetlifyForm, SubmitRow, TextArea, TextField } from '../../components/netlify-form';

/**
 * A job application (Netlify form `careers`). Every job page renders the same fields, with the
 * role in a hidden field, so Netlify sees one consistent form and each submission says which
 * role it is for.
 */
export function CareersForm({ role }: { role: string }) {
  return (
    <NetlifyForm
      name="careers"
      action="/careers/thanks"
      label={`Apply for ${role}`}
      success={(values) => (
        <>
          <h3>Application sent. Thank you.</h3>
          <p>
            Your application for <b>{values.get('role')}</b> is with the team. A person reads every
            application and will write to <b>{values.get('email')}</b>.
          </p>
          <p>If it is a match, the next step is a short video call.</p>
        </>
      )}
    >
      {({ errors, status }) => (
        <>
          <input type="hidden" name="role" value={role} />
          <p className="obf-role">Applying for <b>{role}</b></p>
          <div className="obf-row">
            <TextField name="name" label="Your name" spoken="your name" autoComplete="name" error={errors.name} maxLength={120} />
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
          <TextField
            name="portfolio"
            label="Portfolio or LinkedIn"
            spoken="a link to your work"
            type="url"
            inputMode="url"
            autoComplete="url"
            spellCheck={false}
            autoCapitalize="off"
            placeholder="https://"
            hint="Whatever shows your work best: a portfolio, GitHub, a channel, a LinkedIn profile."
            error={errors.portfolio}
            maxLength={300}
          />
          <TextField
            name="location"
            label="Where you live, and your time zone"
            spoken="where you live"
            autoComplete="country-name"
            placeholder="e.g. Lyon, France — CET"
            error={errors.location}
            maxLength={120}
          />
          <TextArea
            name="cover-note"
            label="A short note"
            spoken="a short note"
            hint="Why this role, and one thing you have made that you are proud of. A few paragraphs is plenty — no formal cover letter needed."
            error={errors['cover-note']}
            rows={7}
            minLength={30}
            maxLength={5000}
          />
          <ConsentField error={errors.consent}>
            I agree that OutBrick may use these details to consider my application, as described in the{' '}
            <a href="/privacy#forms">privacy policy</a>.
          </ConsentField>
          <SubmitRow
            status={status}
            label="Send application"
            next="What happens next: a person reads your application and replies by email. If it is a match, we set up a short video call."
          />
        </>
      )}
    </NetlifyForm>
  );
}
