import type { Locale } from './locales';

const affiliateConfirmation = '. If the code is already taken, we will suggest the nearest one. Please don’t share the link until we confirm it: until then it is only a proposal and earns nothing.';
/** Hydrated success copy containing user values is absent from the static page inventory. */
export const formExtraWords: Record<Locale, Record<string, string>> = {
  en: {},
  fr: { [affiliateConfirmation]: '. Si le code est déjà pris, nous vous proposerons le code disponible le plus proche. Ne partagez pas le lien avant notre confirmation : jusque-là, ce n’est qu’une proposition et il ne rapporte rien.' },
  de: { [affiliateConfirmation]: '. Falls der Code bereits vergeben ist, schlagen wir den nächstliegenden verfügbaren Code vor. Bitte teile den Link erst nach unserer Bestätigung: Bis dahin ist er nur ein Vorschlag und bringt keine Einnahmen.' },
  es: { [affiliateConfirmation]: '. Si el código ya está ocupado, sugeriremos el código disponible más parecido. No compartas el enlace hasta que lo confirmemos: hasta entonces es solo una propuesta y no genera ingresos.' },
  ja: { [affiliateConfirmation]: '。コードがすでに使われている場合は、最も近い利用可能なコードをご提案します。確認が届くまではリンクを共有しないでください。それまでは単なる候補であり、収益は発生しません。' },
  'pt-BR': { [affiliateConfirmation]: '. Se o código já estiver em uso, sugeriremos o código disponível mais parecido. Não compartilhe o link até receber nossa confirmação: até lá, ele é apenas uma proposta e não gera ganhos.' },
};

export function formDynamicText(text: string, locale: Locale): string | undefined {
  const match = text.trim().match(/^Proposed code ([A-Z0-9 ]+)\.$/);
  if (!match || locale === 'en') return undefined;
  const code = match[1];
  return ({ fr: `Code proposé : ${code}.`, de: `Vorgeschlagener Code: ${code}.`, es: `Código propuesto: ${code}.`, ja: `候補のコード：${code}。`, 'pt-BR': `Código sugerido: ${code}.` })[locale];
}
