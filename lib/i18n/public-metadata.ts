import type { Metadata } from 'next';
import { getTagPages } from '../journal';
import { journalTextTranslations } from './public-dynamic';
import type { TranslatedLocale } from './locales';

// Search snippets are concise editorial summaries. The complete translated page,
// article dek and research caveats remain intact in the document itself.
type Snippet = { title?: string; description?: string };
const copy: Record<TranslatedLocale, Record<string, Snippet>> = {
  fr: {
    '/accessibility': { title: 'Accessibilité OutBrick : symboles et VoiceOver', description: 'Découvrez les symboles, VoiceOver et les options de mouvement d’OutBrick, ainsi que les limites actuelles et les moyens de demander de l’aide.' },
    '/authors/mourad-hamdi': { description: 'Mourad Hamdi, créateur d’OutBrick, écrit sur le design de puzzles et le jeu au quotidien. Retrouvez ses articles dans le journal OutBrick.' },
    '/authors/outbrick-editorial': { description: 'L’équipe éditoriale OutBrick explore les puzzles, le design de jeux et les habitudes de jeu, en citant les sources des affirmations de recherche.' },
    '/blog/category/player-habits': { description: 'Articles OutBrick sur les habitudes de jeu : petites sessions, routines, attention et pauses. Les affirmations de recherche citent leurs sources.' },
    '/blog/category/success-stories': { description: 'Les réussites de jeux célèbres, examinées dans le journal OutBrick : choix de design, expériences de jeu et leçons tirées de sources vérifiables.' },
    '/blog/games-teach-curiosity-without-lecture': { description: 'Comment les jeux éveillent la curiosité par l’exploration, les essais et les découvertes, sans remplacer l’apprentissage par un cours magistral.' },
    '/blog/history-of-sliding-block-puzzles': { description: 'Du jeu de taquin aux puzzles de blocs modernes : l’histoire des blocs coulissants, leurs règles et ce que les sources historiques permettent d’établir.' },
    '/careers': { description: 'Découvrez les postes à distance chez OutBrick en ingénierie, design, marketing et communauté, puis consultez les missions et les modalités de candidature.' },
    '/careers/ai-ml-engineer': { title: 'Ingénieur IA/ML — carrière à distance chez OutBrick', description: 'Travaillez à distance sur la génération de niveaux et les solveurs d’OutBrick. Consultez les missions, les compétences demandées et la candidature.' },
    '/careers/community-social-media-manager': { title: 'Communauté et réseaux sociaux — emploi OutBrick' },
    '/careers/content-marketing-lead': { title: 'Marketing de contenu — carrière chez OutBrick', description: 'Développez le contenu et le récit d’OutBrick dans un poste à distance. Découvrez les missions, les compétences recherchées et comment postuler.' },
    '/careers/growth-aso-specialist': { title: 'Croissance et ASO — carrière à distance chez OutBrick' },
    '/careers/player-experience-designer': { title: 'Design d’expérience joueur — carrière chez OutBrick' },
    '/mascots/bloo': { title: 'Bloo : le courage après le vacillement — OutBrick' },
    '/mascots/peach': { title: 'Peach et ses plans de secours — histoire OutBrick' },
    '/mascots/sprout': { title: 'Sprout : chaque brique est une question — OutBrick' },
    '/newsletter': { description: 'Inscrivez-vous aux nouvelles d’OutBrick : mises à jour et actualités du jeu. Choisissez votre langue et consultez les informations de confidentialité.' },
    '/press-kit': { title: 'Dossier presse OutBrick : logos, visuels et fiche technique' },
    '/privacy-choices': { description: 'Consultez vos choix de confidentialité dans OutBrick : consentement publicitaire, demandes relatives aux données et moyens de contacter l’équipe.' },
    '/privacy': { title: 'Confidentialité OutBrick : données, publicités et choix', description: 'La politique de confidentialité d’OutBrick explique les données traitées, les publicités, vos choix et les moyens de poser une question ou une demande.' },
  },
  de: {
    '/about': { description: 'Lernen Sie OutBrick und seinen Gründer kennen: ein Schiebeblock-Puzzlespiel mit klaren Regeln, kleinen Spielmomenten und einer wachsenden Welt.' },
    '/accessibility': { title: 'OutBrick-Barrierefreiheit: Symbole und VoiceOver', description: 'OutBricks Symbole, VoiceOver und Bewegungseinstellungen: erfahren Sie, was unterstützt wird, welche Grenzen bestehen und wie Sie Hilfe erhalten.' },
    '/authors/mourad-hamdi': { description: 'Mourad Hamdi, der Entwickler von OutBrick, schreibt über Puzzle-Design und Spielen im Alltag. Entdecken Sie seine Artikel im OutBrick-Journal.' },
    '/authors/outbrick-editorial': { description: 'Die OutBrick-Redaktion untersucht Puzzles, Spiele-Design und Spielgewohnheiten. Forschungsaussagen in ihren Artikeln nennen die jeweiligen Quellen.' },
    '/blog/category/player-habits': { description: 'OutBrick-Artikel über Spielgewohnheiten: kurze Sitzungen, Routinen, Aufmerksamkeit und Pausen. Forschungsaussagen werden mit Quellen belegt.' },
    '/careers': { description: 'Entdecken Sie OutBricks Remote-Stellen in Entwicklung, Design, Marketing und Community. Lesen Sie Aufgaben, Anforderungen und Bewerbungshinweise.' },
    '/careers/ai-ml-engineer': { title: 'KI-/ML-Entwicklung — Remote-Karriere bei OutBrick', description: 'Arbeiten Sie ortsunabhängig an OutBricks Levelgenerierung und Solver. Lesen Sie Aufgaben, Anforderungen und Hinweise zur Bewerbung.' },
    '/careers/community-social-media-manager': { description: 'Betreuen Sie OutBricks Community und soziale Medien ortsunabhängig. Lesen Sie Aufgaben, Anforderungen und Hinweise zur Bewerbung.' },
    '/careers/content-marketing-lead': { description: 'Gestalten Sie OutBricks Inhalte und Kommunikation in einer Remote-Stelle. Erfahren Sie mehr über Aufgaben, Anforderungen und die Bewerbung.' },
    '/careers/growth-aso-specialist': { title: 'Wachstum und ASO — Remote-Karriere bei OutBrick', description: 'Arbeiten Sie bei OutBrick an Wachstum und App-Store-Optimierung. Entdecken Sie Aufgaben, benötigte Kenntnisse und die Bewerbung für die Remote-Stelle.' },
    '/careers/player-experience-designer': { description: 'Gestalten Sie OutBricks Spielerlebnis in einer Remote-Stelle. Lesen Sie die Aufgaben, Design-Anforderungen und Hinweise zur Bewerbung.' },
    '/contact': { description: 'Kontaktieren Sie OutBrick zu Support, Käufen, Datenschutz, Presse oder Zusammenarbeit. Wählen Sie ein Thema und senden Sie der passenden Stelle Ihre Frage.' },
    '/creators': { description: 'OutBricks Kit für Kreative bietet Ideen, Grafiken und Hinweise für eigene Inhalte. Finden Sie Material, Hashtags und Regeln zur Nutzung der Marke.' },
    '/mascots/bloo': { title: 'Bloo: Mut nach dem Wackeln — OutBrick-Geschichte' },
    '/mascots/sprout': { title: 'Sprout: Jeder Stein ist eine Frage — OutBrick' },
    '/newsletter': { description: 'Abonnieren Sie Neuigkeiten und Spiel-Updates von OutBrick. Wählen Sie Ihre Sprache und lesen Sie, wie Ihre Angaben für den Newsletter verwendet werden.' },
    '/privacy': { title: 'OutBrick-Datenschutz: Daten, Werbung und Ihre Wahl' },
  },
  es: {
    '/accessibility': { title: 'Accesibilidad de OutBrick: símbolos y VoiceOver', description: 'Conoce los símbolos, VoiceOver y las opciones de movimiento de OutBrick, sus límites actuales y las formas de pedir ayuda con la accesibilidad.' },
    '/affiliates': { description: 'Consulta el programa de afiliados de OutBrick: atribución, comisiones y condiciones. Presenta tu solicitud y explica cómo quieres compartir el juego.' },
    '/authors/mourad-hamdi': { description: 'Mourad Hamdi, creador de OutBrick, escribe sobre diseño de puzles y juego cotidiano. Encuentra sus artículos y fuentes en el diario de OutBrick.' },
    '/authors/outbrick-editorial': { description: 'El equipo editorial de OutBrick explora puzles, diseño y hábitos de juego. Las afirmaciones basadas en investigación indican sus fuentes.' },
    '/blog/category/player-habits': { description: 'Artículos de OutBrick sobre hábitos de juego: sesiones cortas, rutinas, atención y pausas. Las afirmaciones de investigación citan sus fuentes.' },
    '/blog/games-like-tetris': { description: 'Compara juegos como Tetris según sus reglas, ritmo y formas de planificar. Descubre qué comparten y en qué se diferencian de los puzles de bloques.' },
    '/blog/games-teach-curiosity-without-lecture': { description: 'Cómo los juegos despiertan la curiosidad mediante exploración, pruebas y descubrimientos, sin convertir la experiencia en una clase magistral.' },
    '/blog/history-of-sliding-block-puzzles': { description: 'Del juego del quince a los puzles modernos: historia de los bloques deslizantes, sus reglas y lo que permiten establecer las fuentes históricas.' },
    '/careers': { description: 'Explora los puestos a distancia de OutBrick en ingeniería, diseño, marketing y comunidad. Consulta las tareas, los requisitos y cómo presentar tu solicitud.' },
    '/careers/ai-ml-engineer': { title: 'Ingeniería de IA y ML — empleo remoto en OutBrick', description: 'Trabaja a distancia en la generación de niveles y los solucionadores de OutBrick. Consulta las tareas, los requisitos y cómo presentar tu candidatura.' },
    '/careers/community-social-media-manager': { title: 'Comunidad y redes sociales — empleo en OutBrick', description: 'Cuida la comunidad y las redes sociales de OutBrick en un puesto a distancia. Consulta las tareas, los requisitos y cómo presentar tu candidatura.' },
    '/careers/content-marketing-lead': { title: 'Marketing de contenidos — empleo en OutBrick', description: 'Desarrolla los contenidos y la comunicación de OutBrick en un puesto a distancia. Consulta las tareas, los requisitos y cómo presentar tu candidatura.' },
    '/careers/growth-aso-specialist': { title: 'Crecimiento y ASO — empleo remoto en OutBrick', description: 'Trabaja en el crecimiento y la optimización del App Store para OutBrick. Conoce las tareas, los requisitos y cómo solicitar este puesto a distancia.' },
    '/careers/player-experience-designer': { title: 'Diseño de experiencia del jugador — empleo OutBrick', description: 'Diseña la experiencia de juego de OutBrick en un puesto a distancia. Consulta las tareas, los requisitos de diseño y cómo presentar tu candidatura.' },
    '/creators': { title: 'Kit para creadores de OutBrick: ideas, gráficos y normas' },
    '/mascots/bloo': { title: 'Bloo: valor después del tambaleo — historia OutBrick' },
    '/mascots/peach': { title: 'Peach y sus planes alternativos — historia OutBrick' },
    '/mascots/sprout': { title: 'Sprout: cada ladrillo es una pregunta — OutBrick' },
    '/newsletter': { description: 'Recibe noticias y actualizaciones del juego OutBrick. Elige tu idioma y consulta cómo se utilizan tus datos para enviarte el boletín.' },
    '/research': { description: 'Explora las fuentes de investigación del diario de OutBrick sobre puzles y juego. Consulta estudios, referencias y los límites de sus conclusiones.' },
  },
  ja: {
    '/age-rating': { description: 'OutBrickの年齢レーティングと対象年齢について確認できます。保護者向けの案内と、App Storeで確認できる情報を紹介します。' },
    '/authors/mourad-hamdi': { description: 'OutBrickの制作者Mourad Hamdiによる記事を紹介。パズルの設計や日常の遊びを、制作の経験と参照資料をもとに考えます。' },
    '/blog/category/success-stories': { title: 'ゲームの成功事例 — OutBrickジャーナル' },
    '/mascots/bloo': { title: 'Bloo：揺らいだあとに来る勇気 — OutBrick' },
    '/mascots/peach': { title: 'Peach：計画と予備の計画 — OutBrickの物語' },
    '/mascots/sprout': { title: 'Sprout：どのブロックも問い — OutBrickの物語' },
    '/refunds': { title: 'OutBrickの購入、返金と購入の復元について', description: 'OutBrickの購入に関する返金や購入の復元について案内します。Appleへの返金申請と、復元時に確認する点をご覧ください。' },
    '/support': { description: 'OutBrickの操作、デイリーパズル、購入の復元などのよくある質問を確認できます。解決しない場合の問い合わせ先もご案内します。' },
  },
};
const distinctTags: Record<TranslatedLocale, Record<string,string>> = {
  fr: { 'gaming-habits':'habitudes de jeu', 'player-habits':'habitudes des joueurs' },
  de: { 'gaming-habits':'Spielgewohnheiten', 'player-habits':'Gewohnheiten der Spieler' },
  es: { 'gaming-habits':'hábitos de juego', 'player-habits':'hábitos de los jugadores', 'mobile-games':'juegos móviles', 'mobile-gaming':'jugar en el móvil' },
  ja: { 'mobile-games':'モバイルゲーム', 'mobile-gaming':'モバイルで遊ぶこと' },
};

export function publicMetadataSnippet(path: string, locale: TranslatedLocale): Snippet | undefined {
  if (path.startsWith('/blog/tag/')) {
    const slug=path.split('/')[3];
    const tag=getTagPages().find(item=>item.slug===slug);
    if(!tag)return;
    const label=distinctTags[locale][slug] ?? journalTextTranslations(locale)[tag.label] ?? tag.label;
    const n=tag.articles.length;
    const snippets={
      fr: { title:`${label} : articles — Journal OutBrick`, description:`${n} articles du journal OutBrick : ${label}. Idées et expériences de jeu, avec des sources pour les affirmations de recherche.` },
      de: { title:`${label}: Artikel — OutBrick-Journal`, description:`${n} Artikel im OutBrick-Journal zu ${label}. Entdecken Sie Ideen und Spielerfahrungen; Forschungsaussagen nennen ihre Quellen.` },
      es: { title:`${label}: artículos — Diario OutBrick`, description:`${n} artículos del diario de OutBrick sobre ${label}. Ideas y experiencias de juego, con fuentes para las afirmaciones de investigación.` },
      ja: { title:`「${label}」の記事 — OutBrickジャーナル`, description:`${label}に関するOutBrickジャーナルの記事${n}本。遊びやデザインの考え方を探ります。研究に関する主張は出典を示しています。` },
    };
    return snippets[locale];
  }
  return copy[locale][path];
}

export function withPublicMetadataSnippet(metadata: Metadata, path: string, locale: TranslatedLocale): Metadata {
  const snippet=publicMetadataSnippet(path,locale);
  if(!snippet)return metadata;
  const title=snippet.title;
  const description=snippet.description;
  return {...metadata,
    ...(title ? {title:{absolute:title}} : {}),
    ...(description ? {description} : {}),
    ...(metadata.openGraph ? {openGraph:{...metadata.openGraph,...(title?{title}:{}),...(description?{description}:{})}} : {}),
    ...(metadata.twitter ? {twitter:{...metadata.twitter,...(title?{title}:{}),...(description?{description}:{})}} : {}),
  };
}

/** Keep localized page summaries aligned without altering names, citations or bodies. */
export function withPublicSchemaSnippets(value: unknown, locale: TranslatedLocale): unknown {
  if(Array.isArray(value))return value.map(item=>withPublicSchemaSnippets(item,locale));
  if(!value||typeof value!=='object')return value;
  const node=value as Record<string,unknown>;
  const result=Object.fromEntries(Object.entries(node).map(([key,item])=>[key,withPublicSchemaSnippets(item,locale)]));
  const types=Array.isArray(node['@type'])?node['@type']:[node['@type']];
  const nodeUrl=typeof node.url==='string'?node.url:typeof node['@id']==='string'?node['@id']:'';
  if(types.includes('NewsArticle') && nodeUrl && new URL(nodeUrl,'https://www.outbrick.site').pathname===`/${locale}/press/outbrick-4-2`) {
    result.headline={fr:'OutBrick 4.2 arrive sur l’App Store',de:'OutBrick 4.2 ist im App Store erhältlich',es:'OutBrick 4.2 llega al App Store',ja:'OutBrick 4.2がApp Storeに登場'}[locale];
  }
  if(types.some(type=>['WebPage','CollectionPage','AboutPage','ContactPage','BlogPosting'].includes(String(type)))&&typeof node.url==='string') {
    const path=new URL(node.url,'https://www.outbrick.site').pathname;
    if(path===`/${locale}`||path.startsWith(`/${locale}/`)) {
      const snippet=publicMetadataSnippet(path.slice(locale.length+1)||'/',locale);
      if(snippet?.description)result.description=snippet.description;
      if(snippet?.title&&!types.includes('BlogPosting'))result.name=snippet.title;
    }
  }
  return result;
}
