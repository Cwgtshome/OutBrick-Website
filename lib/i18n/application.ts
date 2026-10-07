import { appStoreStorefrontUrl } from '../app-store-url';
import { homeCopy } from './home';
import { localizedAsset } from './assets';
import { localeUrl, storefronts, type Locale } from './locales';

const captions = {
  'pt-BR': ['OutBrick no iPhone: tela inicial com três amigos de blocos', 'OutBrick no iPhone: tabuleiro cheio com portais coloridos ao redor', 'OutBrick no iPhone: tabuleiro de formato especial com chaves, fechaduras e caixas', 'OutBrick no iPhone: coleção de cartas de blocos', 'OutBrick no iPad: tela inicial diante de um vilarejo de blocos', 'OutBrick no iPad: tabuleiro durante uma partida'],
  fr: ['OutBrick sur iPhone : l’écran d’accueil avec trois amis en briques', 'OutBrick sur iPhone : un plateau bien rempli, entouré de portes colorées', 'OutBrick sur iPhone : un plateau de forme particulière avec des clés, des serrures et des caisses', 'OutBrick sur iPhone : la collection de cartes de briques', 'OutBrick sur iPad : l’écran d’accueil devant un village en briques', 'OutBrick sur iPad : un plateau en cours de jeu'],
  de: ['OutBrick auf dem iPhone: der Startbildschirm mit drei Steinfreunden', 'OutBrick auf dem iPhone: ein dicht gefülltes Spielfeld mit farbigen Toren am Rand', 'OutBrick auf dem iPhone: ein geformtes Spielfeld mit Schlüsseln, Schlössern und Kisten', 'OutBrick auf dem iPhone: die Sammlung der Steinkarten', 'OutBrick auf dem iPad: der Startbildschirm vor einem Dorf aus Bausteinen', 'OutBrick auf dem iPad: ein Spielfeld während des Spiels'],
  es: ['OutBrick en iPhone: la pantalla de inicio con tres amigos de bloques', 'OutBrick en iPhone: un tablero lleno con puertas de colores alrededor del marco', 'OutBrick en iPhone: un tablero con una forma especial, llaves, cerraduras y cajas', 'OutBrick en iPhone: la colección de tarjetas de bloques', 'OutBrick en iPad: la pantalla de inicio frente a un pueblo de bloques', 'OutBrick en iPad: un tablero en juego'],
  ja: ['iPhone版OutBrick：3人のブロックの仲間がいるホーム画面', 'iPhone版OutBrick：枠の周囲に色別のゲートがある、ブロックが詰まった盤面', 'iPhone版OutBrick：鍵、ロック、木箱がある変形盤面', 'iPhone版OutBrick：ブロックカードのコレクション', 'iPad版OutBrick：ブロックの村を背景にしたホーム画面', 'iPad版OutBrick：プレイ中の盤面'],
};
const screenshotFiles = ['iphone-home.png', 'iphone-board.png', 'iphone-board-shaped.png', 'iphone-collection.png', 'ipad-home.png', 'ipad-board.png'];
const labels = {
  'pt-BR': { puzzle: 'Jogo de quebra-cabeça', casual: 'Jogo casual', free: 'grátis', later: 'ou posterior' },
  fr: { puzzle: 'Jeu de casse-tête', casual: 'Jeu occasionnel', free: 'gratuit', later: 'ou version ultérieure' },
  de: { puzzle: 'Rätselspiel', casual: 'Gelegenheitsspiel', free: 'kostenlos', later: 'oder neuer' },
  es: { puzzle: 'Juego de puzles', casual: 'Juego informal', free: 'gratis', later: 'o posterior' },
  ja: { puzzle: 'パズルゲーム', casual: 'カジュアルゲーム', free: '無料', later: '以降' },
};

/** Localize descriptive schema fields while retaining product identity, facts and enums. */
export function localizedApplicationNode(source: Record<string, unknown>, locale: Locale): Record<string, unknown> {
  if (locale === 'en') return source;
  const copy = labels[locale];
  const node = { ...source };
  node.url = localeUrl(locale, '/');
  if (node.description === homeCopy.en.appDescription) node.description = homeCopy[locale].appDescription;
  node.applicationSubCategory = copy.puzzle;
  if (typeof node.operatingSystem === 'string') node.operatingSystem = node.operatingSystem.replace(/iOS ([\d.]+) or later/, (_, version) => locale === 'ja' ? `iOS ${version}${copy.later}` : `iOS ${version} ${copy.later}`);
  if (Array.isArray(node.genre)) node.genre = node.genre.map(genre => genre === 'Puzzle' ? copy.puzzle : genre === 'Casual' ? copy.casual : genre);
  if (node.image && typeof node.image === 'object') node.image = { ...node.image, url: `https://www.outbrick.site/og/${locale}.png`, caption: homeCopy[locale].meta.ogImageAlt };
  if (Array.isArray(node.screenshot)) node.screenshot = node.screenshot.map(shot => {
    if (!shot || typeof shot !== 'object') return shot;
    const value = shot as Record<string, unknown>;
    const sourceUrl = typeof value.url === 'string' ? value.url : undefined;
    const index = sourceUrl ? screenshotFiles.findIndex(file => sourceUrl.endsWith(`/${file}`)) : -1;
    return { ...value, ...(typeof value.url === 'string' ? { url: localizedAsset(value.url, locale) } : {}), ...(index >= 0 ? { caption: captions[locale][index] } : {}) };
  });
  const store = appStoreStorefrontUrl(storefronts[locale]);
  node.installUrl = store; node.downloadUrl = store;
  if (node.offers && typeof node.offers === 'object') {
    const offer = node.offers as Record<string, unknown>;
    node.offers = { ...offer, url: store, ...(offer.category === 'free' ? { category: copy.free } : {}) };
  }
  return node;
}
