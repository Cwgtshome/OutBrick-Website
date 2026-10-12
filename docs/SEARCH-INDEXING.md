# Search indexing

Production discovery uses `https://www.outbrick.site/sitemap.xml`. It lists the
per-language page and journal sitemaps, plus `/sitemap-community.xml`, which the
Worker generates from current public threads and published editorial content.
The community sitemap reuses anonymous thread visibility; hidden, pending,
deleted and merged threads and unpublished editorial drafts are excluded. It
uses the content's own language rather than inventing translated thread URLs.
A database failure answers 503 instead of an empty successful sitemap.

The existing production deployment submits live sitemap URLs through IndexNow,
Bing Webmaster Tools and Google Search Console. IndexNow shares verified
submissions with its participants; a separate regional webmaster account is not
required for that protocol. Direct regional dashboard access requires its own
account setup. Google accepts sitemap submissions for these pages; its Indexing
API is restricted to eligible job postings and livestream pages.

A 12 October 2026 live audit of commit `7838071d6836dd07b62fadf9e5179a119efa416d`
found 3,086 static sitemap URLs across 39 languages and 45 section sitemaps.
Every URL returned HTTP 200 without noindex. The root homepage's canonical omits
the root slash, an equivalent URL. Journals exist in English, French, German,
Spanish, Japanese and Brazilian Portuguese; other language page counts differ
with published translation coverage. Public community listing contained 56
threads omitted from those static sitemaps, motivating the dynamic sitemap.

Google accepted the index and all 45 child sitemaps (204). Bing accepted those
feeds (200), and 100 URLs through its current daily API quota. IndexNow accepted
all 3,086 URLs (200). Acceptance requests discovery and does not establish that
every page is indexed. URL Inspection is read-only and cannot request indexing.
Local audit and provider JSON receipts are retained outside Git in the owner's
`Documents/Codex/outbrick-indexing-2026-10-12` directory, without credentials.

Local sitemap readers omit database content because it has no static build
artifact. Live readers include it, so production deployment notifications follow
it automatically. The endpoint refuses more than 50,000 entries until partitioning
is implemented rather than silently dropping URLs.
