'use client';

import { useState } from 'react';
import { contactTopics, deviceTopics } from '../../../lib/business';
import { ConsentField, NetlifyForm, SelectField, SubmitRow, TextArea, TextField, useSearchParam } from '../../components/netlify-form';

/**
 * The contact form. It posts to Netlify Forms (see app/components/netlify-form.tsx): the
 * details you type reach the OutBrick inbox through the site's host, and the privacy policy's
 * "Forms on this website" section says exactly that — the two have to stay in step.
 *
 * `?topic=<value>` preselects a topic, so /press can link to /contact?topic=press. The device
 * fields are always in the prerendered HTML (Netlify only accepts fields it saw there); with
 * script they show only for Support and Bug report, without it they are simply optional.
 */
export function ContactForm() {
  const wanted = useSearchParam('topic');
  const [chosen, setChosen] = useState<string | null>(null);
  const topic = chosen ?? (wanted && contactTopics.some((t) => t.value === wanted) ? wanted : 'support');

  const showDevice = deviceTopics.includes(topic);
  const topicLabel = (value: string | null) => contactTopics.find((t) => t.value === value)?.label ?? 'your message';

  return (
    <NetlifyForm
      name="contact"
      action="/contact/thanks"
      label="Contact OutBrick"
      success={(values) => (
        <>
          <h3>Message sent. Thank you.</h3>
          <p>
            Your note about <b>{topicLabel(values.get('topic'))}</b> is with the team. A person reads every
            message and replies to <b>{values.get('email')}</b>.
          </p>
          <p>If you need to add something, such as a screenshot, reply to our email when it arrives.</p>
        </>
      )}
    >
      {({ errors, status }) => (
        <>
          <SelectField
            name="topic"
            label="What is it about?"
            spoken="a topic"
            options={contactTopics}
            value={topic}
            onValueChange={setChosen}
            error={errors.topic}
          />
          <div className="obf-row">
            <TextField name="name" label="Your name" spoken="your name" autoComplete="name" error={errors.name} maxLength={120} />
            <TextField
              name="email"
              label="Email for our reply"
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
          <fieldset className="obf-group" hidden={!showDevice}>
            <legend>Your device <span className="obf-optional">(optional, helps with support and bugs)</span></legend>
            <div className="obf-row obf-row-3">
              <TextField name="device" label="Device" optional placeholder="e.g. iPhone 15" error={errors.device} maxLength={80} />
              <TextField name="ios-version" label="iOS version" optional placeholder="e.g. 26.0" hint="Settings › General › About" error={errors['ios-version']} maxLength={20} />
              <TextField name="app-version" label="App version" optional placeholder="e.g. 4.2" error={errors['app-version']} maxLength={20} />
            </div>
          </fieldset>
          <TextArea
            name="message"
            label="Your message"
            spoken="your message"
            hint="For a stuck board, include the level number. Please leave out passwords and card details."
            error={errors.message}
            rows={7}
            minLength={10}
            maxLength={5000}
          />
          <ConsentField error={errors.consent}>
            I agree that OutBrick may use these details to reply to me, as described in the{' '}
            <a href="/privacy#forms">privacy policy</a>.
          </ConsentField>
          <SubmitRow
            status={status}
            label="Send message"
            next="What happens next: your message goes straight to the OutBrick team, and a person replies by email."
          />
        </>
      )}
    </NetlifyForm>
  );
}
