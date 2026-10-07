'use client';
import { useEffect, useState } from 'react';
import type { EditorialContent } from '../../lib/community/admin-contract';
import { editorialPath } from '../../lib/community/admin-contract';
import type { Locale } from '../../lib/i18n/locales';
import { adminWords } from '../../lib/i18n/admin';
/** The Git-backed journal stays intact; new database-published articles join it here. */
export function PublishedEditorial({ locale }: { locale: Locale }) {
  const [items, setItems] = useState<EditorialContent[]>([]);
  useEffect(() => {
    let live = true;
    fetch(`/api/community/content?locale=${locale}`)
      .then(async (r) =>
        r.ok ? ((await r.json()) as { content: EditorialContent[] }) : null,
      )
      .then((data) => {
        if (live && data?.content)
          setItems(
            data.content.filter((c: EditorialContent) => c.kind === 'blog'),
          );
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [locale]);
  if (!items.length) return null;
  return (
    <section className="wrap" aria-labelledby="published-editorial-heading">
      <h2 id="published-editorial-heading">{adminWords[locale].content}</h2>
      <ul className="cm-threads">
        {items.map((c) => (
          <li key={c.id}>
            <h3>
              <a href={editorialPath(locale, c)}>{c.title}</a>
            </h3>
            <p>{c.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
