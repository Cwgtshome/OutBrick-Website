import { Flag } from './components/flag';
import { localizedApplicationNode } from '../lib/i18n/application';
import { localizedAsset } from '../lib/i18n/assets';
import { APP_STORE_URL, appStoreStorefrontUrl } from '../lib/app-store-url';
import * as ClientIdentity0 from './components/daily-board';
import * as ClientIdentity1 from './components/playable-board';
import * as ClientIdentity2 from './(en)/c/challenge-landing';
import * as ClientIdentity3 from './(en)/contact/contact-form';
import * as ClientIdentity4 from './(en)/careers/careers-form';
import * as ClientIdentity5 from './(en)/careers/role-list';
import * as ClientIdentity6 from './(en)/affiliates/affiliate-form';
import * as ClientIdentity7 from './components/help-search';
import * as ClientIdentity8 from './components/copy-button';
import * as ClientIdentity9 from './components/friend-moves-binder';
import * as ClientIdentity10 from './(en)/blog/feed-copy';
import * as ClientIdentity11 from './(en)/blog/journal-finder';
import * as ClientIdentity12 from './components/netlify-form';
import * as ClientIdentity13 from './components/newsletter-signup';
import * as ClientIdentity14 from './components/gameplay-video';
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';
import type { Metadata } from 'next';
import { withPublicMetadataSnippet, withPublicSchemaSnippets } from '../lib/i18n/public-metadata';
import { notFound } from 'next/navigation';
import { hiringCountriesText } from '../lib/business';
import { friends } from '../lib/mascots';
import { siteUrl } from '../lib/site';
import { isTranslatedLocale, localeAlternates, localePath, ogLocales, translatedLocales, type TranslatedLocale } from '../lib/i18n/locales';
import { localizeArticle } from '../lib/i18n/blog';
import { journalExtras } from '../lib/i18n/journal-extras';
import { publicPages } from '../lib/i18n/public-pages';
import { dynamicPageCopy, journalTextTranslations } from '../lib/i18n/public-dynamic';
import { resultTextTranslations } from '../lib/i18n/results';
import { legalPages } from '../lib/i18n/legal-pages';

// Reuse the English page's layout and behavior. Only human-readable copy and
// public navigation are translated; form identifiers, source URLs and data
// contracts remain unchanged. Client components receive the locale provider
// and their original behavior instead of being executed outside React.
const clientIdentities = new Set<unknown>([...Object.values(ClientIdentity0),...Object.values(ClientIdentity1),...Object.values(ClientIdentity2),...Object.values(ClientIdentity3),...Object.values(ClientIdentity4),...Object.values(ClientIdentity5),...Object.values(ClientIdentity6),...Object.values(ClientIdentity7),...Object.values(ClientIdentity8),...Object.values(ClientIdentity9),...Object.values(ClientIdentity10),...Object.values(ClientIdentity11),...Object.values(ClientIdentity12),...Object.values(ClientIdentity13),...Object.values(ClientIdentity14)]);
const clientComponents = new Set(['HeaderMotion','GameplayVideo','CopyButton','VillageMotion','DailyStamp','DailyPlay','PlayableBoard','ContactForm','FriendMoves','PlayBoard','NewsletterSignup','NetlifyForm','TextField','TextArea','SelectField','ConsentField','SubmitRow','LangsCloser','HomeCast','HelpSearch','ChallengeLanding','RoleList','JournalSearch','ShelfControls','CareersForm','FeedCopy','ReadingAids','AffiliateForm','LocaleProvider','Link','LinkComponent']);
const machineKeys = new Set(['className','id','key','value','htmlFor','role','type','rel','target','src','srcSet','sizes','style','viewBox','d','fill','stroke','path','slug','authorId','current','updated','tone','campaign','datePublished','dateModified','datePosted','validThrough','employmentType','operatingSystem','applicationCategory','priceCurrency','@context','@type','identifier','sectionId']);
const publicRoots = new Set(['about','accessibility','accessibility-support','affiliates','age-rating','age-suitability','authors','blog','c','careers','contact','creators','daily','eula','eula-apple','license','license-agreement','mascots','newsletter','play','press','press-kit','privacy','privacy-choices','privacy-policy','refund','refunds','research','support','terms','whats-new']);
const dynamicCopies: Partial<Record<TranslatedLocale, Record<string,string>>> = {};
const resultCopies: Partial<Record<TranslatedLocale, Record<string,string>>> = {};
const norm = (text: string) => text.replace(/\s+/g, ' ').trim();

/** Keep affiliate examples in USD while displaying separators in the page language. */
function localizedUsdAmount(text: string, locale: TranslatedLocale): string | undefined {
  const amount = text.match(/^(−\s*)?(?:US)?\$(\d+(?:\.\d{2})?)$/);
  if (!amount) return undefined;
  const decimals = amount[2].includes('.') ? 2 : 0;
  const formatted = new Intl.NumberFormat(locale, {
    style: 'currency', currency: 'USD', currencyDisplay: 'code',
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  }).format(Number(amount[2]));
  return `${amount[1] ? '− ' : ''}${formatted}`;
}

export function translatedText(text: string, locale: TranslatedLocale): string {
  const normalized = norm(text);
  const friendDescription = friends.find(friend => normalized === norm(`${friend.role}. ${friend.line}`));
  if (friendDescription) return translatedText(friendDescription.role,locale) + (locale==='ja'?'。':'. ') + translatedText(friendDescription.line,locale);
  if (normalized === 'press') return {fr:'presse',de:'Presse',es:'prensa',ja:'報道関係のお問い合わせ'}[locale];
  const tagged = normalized.match(/^Tagged “(.+)”$/);
  if (tagged) {
    const label = journalTextTranslations(locale)[tagged[1]] ?? tagged[1];
    return {fr:`Articles sur « ${label} »`,de:`Artikel zu „${label}“`,es:`Artículos sobre «${label}»`,ja:`「${label}」の記事`}[locale];
  }
  const shelves = normalized.match(/^(\d+) shelves$/);
  if (shelves) {
    const n = shelves[1];
    return {fr:`${n} rubriques`,de:`${n} Rubriken`,es:`${n} secciones`,ja:`${n}つのカテゴリ`}[locale];
  }
  const usdAmount = localizedUsdAmount(normalized, locale);
  if (usdAmount !== undefined) return usdAmount;
  if (/^(?:\d{1,2} [A-Z][a-z]+ \d{4}|[A-Z][a-z]+ \d{1,2}, \d{4})$/.test(normalized)) {
    const day = new Date(normalized + ' 12:00:00 UTC');
    if(!Number.isNaN(day.getTime())) return new Intl.DateTimeFormat(locale,{dateStyle:'long',timeZone:'UTC'}).format(day);
  }
  const countryNames = {fr:['Royaume-Uni','France','Allemagne','Espagne','États-Unis','Canada'],de:['Vereinigtes Königreich','Frankreich','Deutschland','Spanien','Vereinigte Staaten','Kanada'],es:['Reino Unido','Francia','Alemania','España','Estados Unidos','Canadá'],ja:['英国','フランス','ドイツ','スペイン','米国','カナダ']}[locale];
  const countries = new Intl.ListFormat(locale,{style:'long',type:'disjunction'}).format(countryNames);
  if(normalized===hiringCountriesText()) return countries;
  const remoteLine=normalized.match(/^Remote\. Open to applicants living in (.+)\. (.+)\.$/);
  if(remoteLine && remoteLine[1]===hiringCountriesText()) {
    const employment=publicPages[locale][remoteLine[2]]??remoteLine[2];
    return {fr:`À distance. Candidatures ouvertes aux personnes résidant dans l’un des pays suivants : ${countries}. ${employment}.`,de:`Remote. Offen für Bewerberinnen und Bewerber mit Wohnsitz in einem der folgenden Länder: ${countries}. ${employment}.`,es:`A distancia. Se aceptan candidaturas de personas que residen en ${countries}. ${employment}.`,ja:`リモート勤務。${countries}に居住する方が応募できます。${employment}。`}[locale];
  }
  const dailyLine=normalized.match(/^The daily boards take turns, (\d+) of them from a gentle warm-up to a proper gridlock, and every one was cleared by a solver before it went up\.$/);
  if(dailyLine) {
    const n=dailyLine[1];
    return {fr:`Les ${n} plateaux quotidiens se succèdent, d’un échauffement doux à un véritable embouteillage, et chacun a été résolu par un solveur avant sa mise en ligne.`,de:`Die ${n} täglichen Spielfelder wechseln sich ab, vom sanften Aufwärmen bis zum echten Stillstand, und jedes wurde vor der Veröffentlichung von einem Solver gelöst.`,es:`Los ${n} tableros diarios se alternan, desde un calentamiento suave hasta un atasco de verdad, y un solucionador completó todos antes de publicarlos.`,ja:`毎日のステージは${n}種類が交代で登場し、軽い準備運動から本格的な行き詰まりまであります。すべて公開前にソルバーでクリアを確認しました。`}[locale];
  }
  const affiliateEarn=normalized.match(/^Earn (\d+)% of what follows$/);
  if(affiliateEarn) { const n=affiliateEarn[1]; return {fr:`Gagnez ${n} % sur les achats qui suivent`,de:`Verdiene ${n} % an den folgenden Käufen`,es:`Gana el ${n} % de las compras posteriores`,ja:`その後の購入から${n}%を受け取る`}[locale]; }
  const affiliateCommission=normalized.match(/^When App Store Connect attributes in-app purchases to your campaign — Brick Pass, Remove Ads, coins — you earn (\d+)% of OutBrick’s net proceeds from them, for (\d+) months from each download\.$/);
  if(affiliateCommission) { const [,n,m]=affiliateCommission; return {fr:`Lorsque App Store Connect attribue des achats intégrés à votre campagne — Brick Pass, suppression des publicités, pièces — vous recevez ${n} % du produit net qu’OutBrick en tire, pendant ${m} mois à compter de chaque téléchargement.`,de:`Wenn App Store Connect In-App-Käufe deiner Kampagne zuordnet — Brick Pass, Werbung entfernen, Münzen — erhältst du ${n} % der Nettoeinnahmen von OutBrick daraus, für ${m} Monate ab jedem Download.`,es:`Cuando App Store Connect atribuye compras dentro de la app a tu campaña — Brick Pass, eliminar anuncios y monedas — recibes el ${n} % de los ingresos netos que OutBrick obtiene de ellas, durante ${m} meses desde cada descarga.`,ja:`App Store Connectがアプリ内購入（Brick Pass、広告の削除、コイン）をあなたのキャンペーンに紐づけた場合、各ダウンロードから${m}か月間、その購入によるOutBrickの純収益の${n}%を受け取れます。`}[locale]; }
  const affiliatePayout=normalized.match(/^Monthly\. Once Apple has paid OutBrick for a month’s sales, we pay your (\d+)% of the net proceeds attributed to you in that month\. Balances under (.+) roll over to the next month\. We agree the payment method with you when you are approved, and you are responsible for any tax due on what you earn\.$/);
  if(affiliatePayout) { const [,n,sourceMinimum]=affiliatePayout; const min=localizedUsdAmount(sourceMinimum,locale)??sourceMinimum; return {fr:`Chaque mois. Une fois qu’Apple a versé à OutBrick le produit des ventes d’un mois, nous vous payons ${n} % du produit net qui vous a été attribué pour ce mois. Les soldes inférieurs à ${min} sont reportés au mois suivant. Nous convenons avec vous du moyen de paiement lors de votre approbation, et vous êtes responsable des impôts dus sur vos revenus.`,de:`Monatlich. Sobald Apple OutBrick für die Verkäufe eines Monats bezahlt hat, zahlen wir dir ${n} % der dir in diesem Monat zugeordneten Nettoeinnahmen. Guthaben unter ${min} werden in den nächsten Monat übertragen. Bei deiner Zulassung vereinbaren wir die Zahlungsmethode mit dir; für Steuern auf deine Einnahmen bist du selbst verantwortlich.`,es:`Cada mes. Una vez que Apple ha pagado a OutBrick por las ventas de un mes, te pagamos el ${n} % de los ingresos netos atribuidos a ti en ese mes. Los saldos inferiores a ${min} pasan al mes siguiente. Acordamos contigo el método de pago cuando se aprueba tu solicitud, y eres responsable de los impuestos que correspondan a tus ingresos.`,ja:`毎月支払います。Appleがその月の売上をOutBrickに支払った後、その月にあなたに紐づけられた純収益の${n}%をお支払いします。残高が${min}未満の場合は翌月に繰り越します。承認時に支払方法を合意します。得た収益に課される税金はご自身の責任で納付してください。`}[locale]; }
  const affiliatePurchases=normalized.match(/^All in-app purchases App Analytics attributes to your campaign — the Brick Pass, Remove Ads and coin bundles — for (\d+) months from each referred download, and only as far as App Analytics attributes them\. Refunded purchases are taken back out\. Downloads themselves earn nothing, because OutBrick is free\.$/);
  if(affiliatePurchases) { const m=affiliatePurchases[1]; return {fr:`Tous les achats intégrés qu’App Analytics attribue à votre campagne — Brick Pass, suppression des publicités et lots de pièces — pendant ${m} mois à compter de chaque téléchargement recommandé, et uniquement dans la mesure où App Analytics les attribue. Les achats remboursés sont déduits. Les téléchargements eux-mêmes ne rapportent rien, car OutBrick est gratuit.`,de:`Alle In-App-Käufe, die App Analytics deiner Kampagne zuordnet — Brick Pass, Werbung entfernen und Münzpakete — für ${m} Monate ab jedem vermittelten Download und nur soweit App Analytics sie zuordnet. Erstattete Käufe werden wieder abgezogen. Downloads selbst bringen keine Einnahmen, weil OutBrick kostenlos ist.`,es:`Todas las compras dentro de la app que App Analytics atribuya a tu campaña — Brick Pass, eliminar anuncios y paquetes de monedas — durante ${m} meses desde cada descarga referida y solo en la medida en que App Analytics las atribuya. Las compras reembolsadas se descuentan. Las descargas por sí solas no generan ingresos, porque OutBrick es gratis.`,ja:`紹介による各ダウンロードから${m}か月間、App Analyticsがあなたのキャンペーンに紐づけるすべてのアプリ内購入（Brick Pass、広告の削除、コインパック）が対象です。App Analyticsで紐づけられる範囲に限ります。返金された購入は差し引きます。OutBrickは無料なので、ダウンロード自体に報酬はありません。`}[locale]; }
  const resultCopy = resultCopies[locale] ??= resultTextTranslations(locale);
  const copy = dynamicCopies[locale]?.[normalized] ?? resultCopy[normalized] ?? journalTextTranslations(locale)[normalized] ?? publicPages[locale][normalized] ?? journalExtras[locale][normalized] ?? legalPages[locale][normalized];
  if (copy === undefined) return text;
  const start = text.match(/^\s*/)?.[0] ?? '';
  const end = text.match(/\s*$/)?.[0] ?? '';
  return start + copy + end;
}

export function localizedPublicHref(href: string, locale: TranslatedLocale): string {
  if (href === APP_STORE_URL || href.startsWith(APP_STORE_URL + '?') || href.startsWith(APP_STORE_URL + '#')) return appStoreStorefrontUrl(locale === 'ja' ? 'jp' : locale) + href.slice(APP_STORE_URL.length);
  const absolute = href.startsWith(siteUrl);
  const path = absolute ? href.slice(siteUrl.length) || '/' : href;
  if (!path.startsWith('/') || path.startsWith('//') || /^\/(fr|de|es|ja)(\/|$)/.test(path)) return href;
  const route = path.split(/[?#]/)[0];
  const root = route.split('/')[1];
  // Images, downloads, APIs and RSS feeds are intentional language-neutral assets.
  if (route !== '/' && (!publicRoots.has(root) || (/\.[a-z\d]+$/i.test(route) && !route.endsWith('/feed.xml')))) return href;
  const next = localePath(locale, path);
  return absolute ? siteUrl + next : next;
}

function localizedObject(value: unknown, locale: TranslatedLocale, key = ''): unknown {
  // Framework request proxies are opaque inputs, never translatable content.
  // Enumerating searchParams marks an otherwise static route as request-dependent.
  if (key === 'params' || key === 'searchParams' || key === 'languages') return value;
  if (isValidElement(value)) return value;
  if (typeof value === 'string') {
    const stringValue = ['src','srcSet','image','imageUrl','images','url','href','thumbnailUrl','contentUrl','poster'].includes(key) ? localizedAsset(value,locale) : value;
    if (key === 'url' && /\/share\/board-\d+-\d+\.png$/.test(stringValue)) return stringValue.replace('/share/board-', `/share/${locale}/board-`);
    if (stringValue === 'en' && key === 'inLanguage') return locale;
    if (key === '@id' && /\/#(organization|website|app|publisher|person|founder)/.test(stringValue)) return stringValue;
    if (key === '@id') return localizedPublicHref(stringValue, locale);
    if (machineKeys.has(key)) return stringValue;
    if(key === 'description' && /<\/?(?:p|ul|li|h3)>/.test(stringValue)) {
      return stringValue.split(/(<[^>]*>)/).map(part => part.startsWith('<') ? part : translatedText(part.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>'),locale).replace(/&/g,'&amp;')).join('');
    }
    if (['href','url','item','canonical','action','next','installUrl','downloadUrl'].includes(key)) return localizedPublicHref(stringValue, locale);
    return translatedText(stringValue, locale);
  }
  if (Array.isArray(value)) return key === 'inLanguage' ? value : value.map(item => localizedObject(item, locale, key));
  if (value && typeof value === 'object') {
    if ('slug' in value && 'sections' in value && 'references' in value) {
      try { return localizeArticle(String((value as { slug: string }).slug), locale); } catch { /* Coverage is checked separately, keep source shape during generation. */ }
    }
    const result = Object.fromEntries(Object.entries(value).map(([k,v]) => [k, localizedObject(v, locale, k)]));
    const source = value as Record<string,unknown>;
    if(typeof source.url === 'string' && source.url.startsWith(siteUrl) && source['@type'] !== 'JobPosting') {
      const copy = dynamicPageCopy(source.url.slice(siteUrl.length).split('#')[0],locale,text=>translatedText(text,locale));
      if(copy) { if('name' in source) result.name=copy.title; if('description' in source) result.description=copy.description; }
    }
    const types = Array.isArray(source['@type']) ? source['@type'] : [source['@type']];
    return types.some(type => ['VideoGame', 'MobileApplication', 'SoftwareApplication'].includes(String(type))) ? localizedApplicationNode(result, locale) : result;
  }
  return value;
}

export async function localizePageTree(node: ReactNode, locale: TranslatedLocale): Promise<ReactNode> {
  if (typeof node === 'string') return translatedText(node, locale);
  if (Array.isArray(node)) return Children.toArray(await Promise.all(node.map(item => localizePageTree(item, locale))));
  if (!isValidElement(node)) return node;
  const element = node as ReactElement<Record<string, unknown>>;
  const props: Record<string,unknown> = { ...(localizedObject(element.props, locale) as Record<string, unknown>), ...(element.type === Flag || typeof element.type === 'string' ? {} : { locale }) };
  // Server-rendered slots such as challenge QR cards and editorial `before`
  // content are React nodes too, even when they are not named `children`.
  const hasElement = (value: unknown): boolean => isValidElement(value) || (Array.isArray(value) && value.some(hasElement));
  for (const [key, value] of Object.entries(props)) {
    if (key !== 'children' && hasElement(value)) props[key] = await localizePageTree(value as ReactNode, locale);
  }
  const clientReference = clientIdentities.has(element.type) || (element.type as unknown as { $$typeof?: symbol }).$$typeof === Symbol.for('react.client.reference');
  const name = !clientReference && typeof element.type === 'function' ? element.type.name : '';
  if (name === 'VillageHeader' && typeof props.current === 'string' && props.current.startsWith('/')) props.current=localizedPublicHref(props.current,locale);
  if (!clientReference && typeof element.type === 'function' && !clientComponents.has(name)) {
    // Components in these pages are pure server renderers. Next client-reference
    // types are objects, and the named local client functions are left to React.
    const render = element.type as (props: Record<string, unknown>) => ReactNode | Promise<ReactNode>;
    return localizePageTree(await render(props), locale);
  }
  const translated = props;
  if (typeof element.type === 'function' || (typeof element.type === 'object' && element.type !== null)) translated.locale = locale;
  // Explicit language destinations already identify their target locale.
  if (element.type === 'a' && ['en','fr','de','es','ja'].includes(String(element.props.hrefLang))) translated.href = element.props.href;
  if ('children' in props) translated.children = await localizePageTree(props.children as ReactNode, locale);
  if (element.type === 'script' && props.type === 'application/ld+json' && props.dangerouslySetInnerHTML) {
    const html = (props.dangerouslySetInnerHTML as { __html: string }).__html;
    try { translated.dangerouslySetInnerHTML = { __html: JSON.stringify(withPublicSchemaSnippets(localizedObject(JSON.parse(html), locale),locale)).replace(/</g, '\\u003c') }; } catch { /* Non-JSON scripts retain their original contents. */ }
  }
  return cloneElement(element, translated);
}

export async function localizedMetadata(source: Metadata, path: string, locale: TranslatedLocale): Promise<Metadata> {
  let metadata = localizedObject(source, locale) as Metadata;
  const dynamic = dynamicPageCopy(path,locale,text=>translatedText(text,locale));
  if(dynamic) {
    const map=dynamicCopies[locale]??={};
    if(typeof source.description==='string') map[norm(source.description)]=dynamic.description;
    const title=typeof source.title==='string'?source.title:source.title&&'absolute' in source.title?source.title.absolute:undefined;
    if(typeof title==='string')map[norm(title)]=dynamic.title;
    metadata.title={absolute:dynamic.title}; metadata.description=dynamic.description;
    if(metadata.openGraph) metadata.openGraph={...metadata.openGraph,title:dynamic.title,description:dynamic.description};
    if(metadata.twitter) metadata.twitter={...metadata.twitter,title:dynamic.title,description:dynamic.description};
  }
  metadata = withPublicMetadataSnippet(metadata,path,locale);
  const title = typeof metadata.title === 'string' ? metadata.title : metadata.title && 'absolute' in metadata.title ? metadata.title.absolute : undefined;
  const socialDefaults = { title, description: metadata.description ?? undefined, images: [{url:localizedAsset(siteUrl+'/og.png',locale),width:1200,height:630}] };
  return {
    ...metadata,
    twitter: { card:'summary_large_image', ...socialDefaults, ...metadata.twitter },
    alternates: { ...metadata.alternates, ...localeAlternates(locale, typeof source.alternates?.canonical === 'string' ? source.alternates.canonical.replace(siteUrl,'') : path) },
    openGraph: { type:'website', siteName:'OutBrick', ...socialDefaults, ...metadata.openGraph, url: siteUrl + localePath(locale, path), locale: ogLocales[locale] },
  };
}

export async function publicLocale(params: Promise<{ locale: string }>): Promise<TranslatedLocale> {
  const { locale } = await params;
  if (!isTranslatedLocale(locale)) notFound();
  return locale;
}

export function publicStaticParams(records: Record<string,string>[] = [{}]) {
  return translatedLocales.flatMap(locale => records.map(record => ({...record,locale})));
}
