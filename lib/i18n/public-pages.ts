import { currentPublicCopy } from './current-public.ts';
import type { TranslatedLocale } from './locales';
import { de } from './public-pages-de.ts';
import { fr } from './public-pages-fr.ts';
import { es } from './public-pages-es.ts';
import { ja } from './public-pages-ja.ts';
import { ptBR } from './public-pages-pt-BR.ts';
import { ptBR1 } from './public-pages-pt-BR-slice-1.ts';
import { ptBR2 } from './public-pages-pt-BR-slice-2.ts';
import { ptBR3 } from './public-pages-pt-BR-slice-3.ts';
import { challengePtBR } from './challenge-pt-BR.ts';
import { mascotCreatorPtBR } from './mascot-creator-pt-BR.ts';
import { pressTermsPtBR } from './press-terms-pt-BR.ts';
import { de as extraDe } from './carryovers-de.ts';
import { fr as extraFr } from './carryovers-fr.ts';
import { es as extraEs } from './carryovers-es.ts';
import { ja as extraJa } from './carryovers-ja.ts';
import { emailPages } from './email-pages.ts';
import { communitySupportPhrases as cm } from './community.ts';
import { helpSitePhrases as hc } from '../help/site-phrases.ts';
/** Full, phrase-level page translations shared by existing English layouts. */
export const publicPages: Record<TranslatedLocale, Record<string, string>> = {
  fr: {...fr, ...extraFr, ...emailPages.fr, ...cm('fr'), ...hc('fr'), ...currentPublicCopy.fr}, de: {...de, ...extraDe, ...emailPages.de, ...cm('de'), ...hc('de'), ...currentPublicCopy.de}, es: {...es, ...extraEs, ...emailPages.es, ...cm('es'), ...hc('es'), ...currentPublicCopy.es}, ja: {...ja, ...extraJa, ...emailPages.ja, ...cm('ja'), ...hc('ja'), ...currentPublicCopy.ja}, 'pt-BR': {...ptBR, ...ptBR1, ...ptBR2, ...ptBR3, ...challengePtBR, ...mascotCreatorPtBR, ...pressTermsPtBR, ...emailPages['pt-BR'], ...cm('pt-BR'), ...hc('pt-BR'), ...currentPublicCopy['pt-BR'], Breadcrumb: 'Navegação estrutural', Cookies: 'Cookies', 'Newsletter:': 'Boletim por e-mail:', newsletter: 'boletim por e-mail', Newsletter: 'Boletim por e-mail', Journal: 'Blog'},
};
