/**
 * Dates and numbers for the community pages, in the page's language. Shared by the client app
 * and the edge-rendered thread pages, so a date reads the same before and after script runs.
 */

import type { Locale } from '../i18n/locales.ts';

const dateFormats = new Map<string, Intl.DateTimeFormat>();
const numberFormats = new Map<string, Intl.NumberFormat>();

/**
 * "7 October 2026 at 09:14 UTC" (en-GB), "7 octobre 2026 à 09:14 UTC", "2026年10月7日 09:14 UTC".
 * Always with its time zone, so the server's UTC (the edge-rendered thread pages) and the
 * reader's own zone (the client app, "16:30 GMT-4") never read as the same clock. `timeZone`
 * is given on the server; the client leaves it out and gets the reader's zone.
 */
export function fullDate(locale: Locale, iso: string, timeZone?: string): string {
  const key = `${locale}|${timeZone ?? ''}`;
  let format = dateFormats.get(key);
  if (!format) {
    // dateStyle/timeStyle cannot be combined with timeZoneName, hence the separate parts.
    format = new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      ...(timeZone ? { timeZone } : {}),
    });
    dateFormats.set(key, format);
  }
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? iso : format.format(date);
}

/** "7 October 2026": the day only, for "Member since". */
export function dayDate(locale: Locale, iso: string, timeZone?: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : locale, { dateStyle: 'long', ...(timeZone ? { timeZone } : {}) }).format(date);
}

/** "3 hours ago", "yesterday", "il y a 3 heures". Visible text only; the full date goes alongside. */
export function relativeDate(locale: Locale, iso: string, now = Date.now()): string {
  const date = new Date(iso).getTime();
  if (Number.isNaN(date)) return iso;
  const seconds = Math.round((date - now) / 1000);
  const rtf = new Intl.RelativeTimeFormat(locale === 'en' ? 'en-GB' : locale, { numeric: 'auto' });
  const abs = Math.abs(seconds);
  if (abs < 60) return rtf.format(0, 'second');
  if (abs < 3600) return rtf.format(Math.round(seconds / 60), 'minute');
  if (abs < 86400) return rtf.format(Math.round(seconds / 3600), 'hour');
  if (abs < 86400 * 30) return rtf.format(Math.round(seconds / 86400), 'day');
  if (abs < 86400 * 365) return rtf.format(Math.round(seconds / (86400 * 30)), 'month');
  return rtf.format(Math.round(seconds / (86400 * 365)), 'year');
}

export function number(locale: Locale, n: number): string {
  let format = numberFormats.get(locale);
  if (!format) {
    format = new Intl.NumberFormat(locale === 'en' ? 'en-GB' : locale);
    numberFormats.set(locale, format);
  }
  return format.format(n);
}

/** HTML-escape text for the string renderers (lib/community/static-html.ts, the edge function). */
export function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/** The plain text of server HTML, for excerpts, quotes and descriptions. */
export function htmlToText(html: string): string {
  return html
    .replace(/<(br|\/p|\/li|\/h\d|\/blockquote|\/pre)\b[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Shorten text to `max` characters on a word boundary, with an ellipsis. */
export function excerpt(text: string, max: number): string {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max - 1);
  const space = cut.lastIndexOf(' ');
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,.;:!?\s]+$/, '')}…`;
}
