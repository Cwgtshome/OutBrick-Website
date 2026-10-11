-- The site and its emails in every language of the game (10 October 2026): English, the first
-- five translations (fr, de, es, ja, pt-BR) and the 33 catalog languages (Urdu and Bengali added 11 October) of lib/i18n/locales.ts.
-- Only the accepted value sets widen; no row changes. A language is offered to readers only once
-- its catalogs are published (lib/i18n/catalog/published.json), but the database accepts all of
-- them so publishing a language never needs another migration.
--
-- Until this runs, cloudflare/adapters.ts stores the nearest of the first six languages for a
-- catalog language (after the first check violation), so the code may go live first.

ALTER TABLE members DROP CONSTRAINT members_locale_check;
ALTER TABLE members ADD CONSTRAINT members_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE threads DROP CONSTRAINT threads_language_check;
ALTER TABLE threads ADD CONSTRAINT threads_language_check CHECK (language IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE post_translations DROP CONSTRAINT post_translations_locale_check;
ALTER TABLE post_translations ADD CONSTRAINT post_translations_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE faq_entries DROP CONSTRAINT faq_entries_locale_check;
ALTER TABLE faq_entries ADD CONSTRAINT faq_entries_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

-- Each reader's language for the emails they get: contact cases, applications, the newsletter.
ALTER TABLE support_cases DROP CONSTRAINT support_cases_locale_check;
ALTER TABLE support_cases ADD CONSTRAINT support_cases_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE applications DROP CONSTRAINT applications_locale_check;
ALTER TABLE applications ADD CONSTRAINT applications_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE newsletter_subscribers DROP CONSTRAINT newsletter_subscribers_locale_check;
ALTER TABLE newsletter_subscribers ADD CONSTRAINT newsletter_subscribers_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));

ALTER TABLE release_broadcasts DROP CONSTRAINT release_broadcasts_locale_check;
ALTER TABLE release_broadcasts ADD CONSTRAINT release_broadcasts_locale_check CHECK (locale IN (
  'en','fr','de','es','ja','pt-BR','it','ko','nl','ru','tr','zh-Hans','ar','ca','cs','da','fi','hr','hu','id',
  'ms','nb','pl','ro','sk','sv','th','vi','zh-Hant','es-419','he','pt-PT','el','uk','fr-CA','hi','sl','ur','bn'));
