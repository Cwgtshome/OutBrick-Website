/**
 * Serialise JSON-LD. `<` is escaped so a string can never close the script.
 *
 * Its own module so the pages outside the editorial side (home, play, legal, support, community)
 * can render structured data without importing app/editorial-shell.tsx, which brings the
 * editorial stylesheet with it.
 */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
