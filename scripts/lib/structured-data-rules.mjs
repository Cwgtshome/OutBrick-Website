// Structured-data checks for scripts/audit-seo.mjs.
//
// Parses every JSON-LD block of a built page into one graph and checks it the way Google
// Search Central documents each type: the required properties (an error — Google would drop
// the rich result or report the item invalid), the recommended ones that matter (a warning),
// the `@id` references (every reference must land on a node in the page), and the general
// guidelines that apply everywhere (absolute URLs that resolve, ISO 8601 dates with a time
// zone, FAQ questions that are visible on the page, no rating without real ratings behind it).
//
// Written generically, per type, so a new page type (a JobPosting on a careers page, a
// NewsArticle in a press room) is checked the moment it appears in the build.

const SOFTWARE_TYPES = ['SoftwareApplication', 'MobileApplication', 'WebApplication', 'VideoGame'];
const ARTICLE_TYPES = ['Article', 'BlogPosting', 'NewsArticle', 'Report', 'ScholarlyArticle', 'TechArticle'];
const PAGE_TYPES = ['WebPage', 'AboutPage', 'ContactPage', 'CollectionPage', 'ProfilePage', 'FAQPage', 'ItemPage', 'SearchResultsPage', 'QAPage', 'CheckoutPage'];

const typesOf = (node) => [].concat(node?.['@type'] ?? []);
const isType = (node, list) => typesOf(node).some((t) => list.includes(t));
const isRef = (v) => v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 1 && typeof v['@id'] === 'string';
const asArray = (v) => (v === undefined || v === null ? [] : Array.isArray(v) ? v : [v]);
const nonEmpty = (v) => (typeof v === 'string' ? v.trim().length > 0 : v !== undefined && v !== null);

/** ISO 8601 date or date-time. `withZone` also requires a time and a zone designator. */
function isoCheck(value, { withZone = false } = {}) {
  if (typeof value !== 'string') return 'not a string';
  const dateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);
  const dateTime = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/.test(value);
  if (!dateOnly && !dateTime) return 'not ISO 8601';
  if (Number.isNaN(new Date(value).getTime())) return 'not a real date';
  if (withZone && !dateTime) return 'has no time and time zone';
  return null;
}

/**
 * @param {object} ctx
 * @param {string[]} ctx.blocks       raw JSON-LD script contents
 * @param {string} ctx.url            the page's own URL
 * @param {string} ctx.route
 * @param {boolean} ctx.indexable
 * @param {boolean} ctx.isHome        a home page in any language (no breadcrumb expected)
 * @param {string} ctx.bodyText       visible text of the page, whitespace-collapsed
 * @param {string} ctx.siteUrl
 * @param {(pathname: string) => boolean} ctx.resolves
 * @param {string} [ctx.canonical]
 */
export function checkStructuredData(ctx) {
  const { blocks, url, indexable, isHome, bodyText, siteUrl, resolves, canonical } = ctx;
  const issues = [];
  const err = (msg) => issues.push({ level: 'error', msg });
  const warn = (msg) => issues.push({ level: 'warn', msg });
  const note = (msg) => issues.push({ level: 'note', msg });
  const siteHost = new URL(siteUrl).host;

  // ---- parse, and collect every typed node and every reference, however deeply nested
  const docs = [];
  blocks.forEach((block, i) => {
    try {
      docs.push(JSON.parse(block));
    } catch (e) {
      err(`JSON-LD block ${i + 1} does not parse: ${e.message}`);
    }
  });

  const nodes = [];
  const refs = [];
  const byId = new Map();
  const walk = (value, parentKey) => {
    if (Array.isArray(value)) return value.forEach((v) => walk(v, parentKey));
    if (!value || typeof value !== 'object') return;
    if (isRef(value)) {
      refs.push({ id: value['@id'], key: parentKey });
      return;
    }
    if (value['@type']) {
      nodes.push(value);
      if (typeof value['@id'] === 'string') {
        if (!byId.has(value['@id'])) byId.set(value['@id'], []);
        byId.get(value['@id']).push(value);
      }
    }
    for (const [k, v] of Object.entries(value)) if (!k.startsWith('@') || k === '@graph') walk(v, k);
  };
  docs.forEach((doc, i) => {
    for (const d of asArray(doc)) {
      const ctxValue = d?.['@context'];
      const ctxOk = [].concat(ctxValue ?? []).some((c) => (typeof c === 'string' ? /^https?:\/\/schema\.org\/?$/.test(c) : c && typeof c === 'object' && /schema\.org/.test(JSON.stringify(c))));
      if (!ctxOk) err(`JSON-LD block ${i + 1} has no schema.org @context`);
      if (!d?.['@type'] && !d?.['@graph']) err(`JSON-LD block ${i + 1} has neither @type nor @graph`);
    }
    walk(doc);
  });

  const resolve = (v) => (isRef(v) ? byId.get(v['@id'])?.[0] : v);
  const named = (v) => nonEmpty(resolve(v)?.name);

  // ---- @id: one entity per id, and every reference lands on a node in this page
  for (const [id, list] of byId) {
    if (list.length < 2) continue;
    const first = typesOf(list[0]);
    for (const other of list.slice(1)) {
      if (!typesOf(other).some((t) => first.includes(t))) err(`@id ${id} is used for different types: ${first.join('+')} and ${typesOf(other).join('+')}`);
    }
  }
  for (const r of new Set(refs.map((x) => x.id))) {
    if (!byId.has(r)) err(`@id reference ${r} does not resolve to a node on this page`);
  }

  // ---- URLs: absolute, and internal ones must exist
  const urlKeys = new Set(['url', 'item', 'contentUrl', 'thumbnailUrl', 'installUrl', 'downloadUrl', 'mainEntityOfPage', 'significantLink']);
  const checkUrl = (value, key) => {
    if (typeof value !== 'string') return;
    let u;
    try {
      u = new URL(value);
    } catch {
      err(`${key} is not an absolute URL: ${value}`);
      return;
    }
    if (u.protocol !== 'https:') warn(`${key} is not https: ${value}`);
    if (u.host === siteHost && !resolves(u.pathname)) err(`${key} points at a page or file that does not exist: ${value}`);
    if (u.host === siteHost.replace(/^www\./, '')) err(`${key} uses the bare domain instead of ${siteHost}: ${value}`);
  };
  for (const node of nodes) {
    const typeName = String(typesOf(node)[0]);
    for (const [k, v] of Object.entries(node)) {
      if (urlKeys.has(k)) asArray(v).forEach((x) => checkUrl(x, `${typeName}.${k}`));
      if ((k === 'image' || k === 'logo' || k === 'screenshot') && typeof v === 'string') checkUrl(v, `${typeName}.${k}`);
      if (k === 'image' && Array.isArray(v)) v.filter((x) => typeof x === 'string').forEach((x) => checkUrl(x, `${typeName}.image`));
      if (k === 'sameAs') asArray(v).forEach((x) => checkUrl(x, `${typeName}.sameAs`));
    }
    if (typeof node['@id'] === 'string' && !/^https?:\/\//.test(node['@id'])) warn(`@id is not an absolute IRI: ${node['@id']}`);
  }

  // ---- per type
  for (const node of nodes) {
    const t = typesOf(node).join('+');
    const label = `${t}${node['@id'] ? ` ${node['@id'].replace(siteUrl, '')}` : ''}`;

    if (isType(node, ['ImageObject']) && !nonEmpty(node.url) && !nonEmpty(node.contentUrl)) err(`${label}: ImageObject without url or contentUrl`);

    if (isType(node, ['Person']) && !nonEmpty(node.name)) err(`${label}: Person without name`);

    if (isType(node, ['Organization']) && !isType(node, ['ContactPoint'])) {
      if (!nonEmpty(node.name)) err(`${label}: Organization without name`);
      if (node['@id'] === `${siteUrl}/#organization`) {
        if (!nonEmpty(node.url)) err(`${label}: the site Organization needs url`);
        const logo = resolve(node.logo);
        if (!logo) err(`${label}: the site Organization needs a logo`);
        else if (typeof logo === 'object') {
          if (!nonEmpty(logo.url) && !nonEmpty(logo.contentUrl)) err(`${label}: logo has no url`);
          if (Number(logo.width) < 112 || Number(logo.height) < 112) err(`${label}: logo must be at least 112×112 px (Google)`);
          checkUrl(logo.url ?? logo.contentUrl, 'Organization.logo');
        } else checkUrl(logo, 'Organization.logo');
      }
    }

    if (isType(node, ['WebSite'])) {
      if (!nonEmpty(node.name)) err(`${label}: WebSite without name`);
      if (!nonEmpty(node.url)) err(`${label}: WebSite without url`);
      for (const action of asArray(node.potentialAction)) {
        if (!isType(action, ['SearchAction'])) continue;
        const target = typeof action.target === 'string' ? action.target : action.target?.urlTemplate;
        if (!target?.includes('{search_term_string}')) err(`${label}: SearchAction target has no {search_term_string}`);
        if (!String(action['query-input'] ?? '').includes('name=search_term_string')) err(`${label}: SearchAction query-input must name search_term_string`);
      }
    }

    if (isType(node, ['BreadcrumbList'])) {
      const items = asArray(node.itemListElement);
      if (items.length < 2) err(`${label}: BreadcrumbList needs at least two ListItems`);
      items.forEach((item, i) => {
        if (item.position !== i + 1) err(`${label}: ListItem ${i + 1} has position ${item.position}`);
        const name = item.name ?? resolve(item.item)?.name;
        if (!nonEmpty(name)) err(`${label}: ListItem ${i + 1} has no name`);
        const target = typeof item.item === 'string' ? item.item : item.item?.['@id'] ?? item.item?.url;
        if (!target && i < items.length - 1) err(`${label}: ListItem ${i + 1} has no item URL`);
        if (target) checkUrl(target, `BreadcrumbList item ${i + 1}`);
      });
      const last = items.at(-1);
      const lastUrl = typeof last?.item === 'string' ? last.item : last?.item?.['@id'];
      if (canonical && lastUrl && lastUrl.replace(/\/$/, '') !== canonical.replace(/\/$/, '')) err(`${label}: last crumb ${lastUrl} is not this page (${canonical})`);
    }

    if (isType(node, ARTICLE_TYPES)) {
      const full = nonEmpty(node.datePublished) || nonEmpty(node.mainEntityOfPage) || nonEmpty(node.author);
      if (!nonEmpty(node.headline)) err(`${label}: no headline`);
      else if ([...node.headline].length > 110) err(`${label}: headline is ${[...node.headline].length} characters (Google shows up to 110)`);
      if (full) {
        if (!nonEmpty(node.image)) warn(`${label}: no image (recommended)`);
        for (const img of asArray(node.image)) {
          const im = resolve(img);
          if (im && typeof im === 'object' && im.width && Number(im.width) < 1200) warn(`${label}: image narrower than 1200 px (Google recommends ≥ 1200)`);
        }
        for (const key of ['datePublished', 'dateModified']) {
          if (!nonEmpty(node[key])) {
            warn(`${label}: no ${key} (recommended)`);
            continue;
          }
          const problem = isoCheck(node[key], { withZone: true });
          if (problem) err(`${label}: ${key} "${node[key]}" ${problem}`);
        }
        if (node.datePublished && node.dateModified && new Date(node.dateModified) < new Date(node.datePublished)) err(`${label}: dateModified is before datePublished`);
        const authors = asArray(node.author);
        if (!authors.length) err(`${label}: no author`);
        for (const a of authors) {
          const author = resolve(a);
          if (!author || !nonEmpty(author.name)) err(`${label}: author without name`);
          else {
            if (!isType(author, ['Person', 'Organization'])) err(`${label}: author must be a Person or Organization`);
            if (!nonEmpty(author.url) && !nonEmpty(author['@id']) && !asArray(author.sameAs).length) warn(`${label}: author ${author.name} has no url (recommended)`);
            if (/\b(CEO|founder|editor|posted by)\b/i.test(author.name)) err(`${label}: author name "${author.name}" carries a title; put it in jobTitle`);
          }
        }
        if (!nonEmpty(node.publisher)) warn(`${label}: no publisher`);
        else if (!named(node.publisher)) err(`${label}: publisher has no name`);
      }
    }

    if (isType(node, ['FAQPage'])) {
      const qs = asArray(node.mainEntity);
      if (!qs.length) err(`${label}: FAQPage without questions`);
      for (const q of qs) {
        if (!isType(q, ['Question'])) err(`${label}: mainEntity item is not a Question`);
        if (!nonEmpty(q.name)) err(`${label}: Question without name`);
        const answer = resolve(q.acceptedAnswer);
        if (!answer || !nonEmpty(answer.text)) err(`${label}: Question "${q.name}" has no acceptedAnswer.text`);
        const visible = (s) => bodyText.includes(String(s).replace(/\s+/g, ' ').trim());
        if (nonEmpty(q.name) && !visible(q.name)) err(`${label}: Question "${q.name}" is not visible on the page`);
      }
    }

    if (isType(node, SOFTWARE_TYPES)) {
      if (isType(node, ['VideoGame']) && !typesOf(node).some((x) => x !== 'VideoGame' && SOFTWARE_TYPES.includes(x))) err(`${label}: a VideoGame must be co-typed with SoftwareApplication, MobileApplication or WebApplication (Google)`);
      if (!nonEmpty(node.name)) err(`${label}: no name`);
      const offers = asArray(node.offers).map(resolve);
      const hasPrice = offers.some((o) => o && o.price !== undefined && o.price !== null && o.price !== '');
      const rating = resolve(node.aggregateRating);
      const hasReview = asArray(node.review).length > 0;
      if (!hasPrice && !rating && !hasReview) {
        // A partial copy of an app already described in full on the same page (a component
        // that renders its own block) is reported but does not fail the audit.
        const twin = nodes.find((n) => n !== node && isType(n, SOFTWARE_TYPES) && n.name === node.name && n['@id'] && asArray(n.offers).length);
        if (twin && !node['@id']) note(`${label}: a second, partial ${t} "${node.name}" without offers; the full one is ${twin['@id']} — remove the partial block`);
        else err(`${label}: needs offers.price, aggregateRating or review (Google)`);
      }
      for (const o of offers) {
        if (!o) continue;
        if (o.price === undefined) err(`${label}: Offer without price`);
        if (Number(o.price) > 0 && !nonEmpty(o.priceCurrency)) err(`${label}: Offer with a price but no priceCurrency`);
        if (!nonEmpty(o.priceCurrency)) warn(`${label}: Offer without priceCurrency`);
      }
      if (rating) {
        const count = Number(rating.ratingCount ?? rating.reviewCount);
        if (!nonEmpty(rating.ratingValue)) err(`${label}: aggregateRating without ratingValue`);
        if (!(count > 0)) err(`${label}: aggregateRating without ratingCount or reviewCount`);
        else if (count < 5) err(`${label}: aggregateRating from ${count} ratings — too few to publish`);
      }
      if (hasPrice || rating) {
        if (!nonEmpty(node.applicationCategory)) warn(`${label}: no applicationCategory (recommended)`);
        if (!nonEmpty(node.operatingSystem)) warn(`${label}: no operatingSystem (recommended)`);
      }
    }

    if (isType(node, ['JobPosting'])) {
      for (const key of ['title', 'description', 'datePosted']) if (!nonEmpty(node[key])) err(`${label}: JobPosting without ${key}`);
      if (node.datePosted && isoCheck(node.datePosted)) err(`${label}: datePosted "${node.datePosted}" ${isoCheck(node.datePosted)}`);
      if (node.validThrough) {
        const problem = isoCheck(node.validThrough);
        if (problem) err(`${label}: validThrough "${node.validThrough}" ${problem}`);
        else if (new Date(node.validThrough) < new Date()) err(`${label}: validThrough ${node.validThrough} has passed — an expired job must come down or be marked so`);
      }
      if (!named(node.hiringOrganization)) err(`${label}: JobPosting without hiringOrganization.name`);
      const remote = asArray(node.jobLocationType).includes('TELECOMMUTE');
      if (!remote && !asArray(node.jobLocation).length) err(`${label}: JobPosting needs jobLocation, or jobLocationType TELECOMMUTE`);
      if (remote && !asArray(node.applicantLocationRequirements).length && !asArray(node.jobLocation).length) err(`${label}: a remote JobPosting needs applicantLocationRequirements`);
      for (const loc of asArray(node.jobLocation).map(resolve)) {
        const address = resolve(loc?.address);
        if (!address || (!nonEmpty(address.addressCountry) && typeof address !== 'string')) err(`${label}: jobLocation needs an address with addressCountry`);
      }
      if (node.baseSalary) {
        const salary = resolve(node.baseSalary);
        if (!nonEmpty(salary?.currency)) err(`${label}: baseSalary without currency`);
      }
    }

    if (isType(node, ['ProfilePage'])) {
      const main = resolve(node.mainEntity);
      if (!main) err(`${label}: ProfilePage without mainEntity`);
      else {
        if (!isType(main, ['Person', 'Organization'])) err(`${label}: ProfilePage mainEntity must be a Person or Organization`);
        if (!nonEmpty(main.name)) err(`${label}: ProfilePage mainEntity without name`);
      }
    }

    if (isType(node, ['ItemList'])) {
      asArray(node.itemListElement).forEach((item, i) => {
        if (item.position !== undefined && item.position !== i + 1) err(`${label}: ListItem ${i + 1} has position ${item.position}`);
      });
    }

    for (const key of ['datePublished', 'dateModified', 'dateCreated', 'uploadDate', 'foundingDate']) {
      if (node[key] !== undefined && !isType(node, ARTICLE_TYPES)) {
        const problem = isoCheck(node[key]);
        if (problem) err(`${label}: ${key} "${node[key]}" ${problem}`);
      }
    }
  }

  // ---- page-level expectations
  if (indexable) {
    const orgs = nodes.filter((n) => n['@id'] === `${siteUrl}/#organization` && isType(n, ['Organization']));
    if (!orgs.length) err(`no Organization ${siteUrl}/#organization on the page`);
    if (!nodes.some((n) => n['@id'] === `${siteUrl}/#website` && isType(n, ['WebSite']))) err(`no WebSite ${siteUrl}/#website on the page`);
    if (!isHome && !nodes.some((n) => isType(n, ['BreadcrumbList']))) err('no BreadcrumbList (every page but the home page should have one)');
    const self = canonical ?? url;
    if (!nodes.some((n) => isType(n, PAGE_TYPES) && typeof n.url === 'string' && n.url.replace(/\/$/, '') === self.replace(/\/$/, ''))) warn(`no WebPage-type node whose url is this page (${self})`);
  }

  return { issues, nodes };
}
