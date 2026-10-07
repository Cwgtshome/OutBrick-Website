import type { Locale } from './locales';
const ids = ['doorstep', 'corner-shop', 'back-alley', 'crosswind', 'stepping-stones', 'pinwheel', 'long-way', 'switchback', 'log-jam', 'tight-squeeze', 'relay', 'turnstile', 'keyhole', 'gridlock'];
const names = {
  fr: ['Le seuil', 'La boutique du coin', 'La ruelle', 'Vent de travers', 'Les pierres de gué', 'Le moulinet', 'Le long chemin', 'Les lacets', 'L’embâcle', 'Le passage étroit', 'Le relais', 'Le tourniquet', 'Le trou de serrure', 'L’impasse'],
  de: ['Türschwelle', 'Tante-Emma-Laden', 'Hintergasse', 'Seitenwind', 'Trittsteine', 'Windrad', 'Der lange Weg', 'Serpentinen', 'Holzstau', 'Engpass', 'Staffel', 'Drehkreuz', 'Schlüsselloch', 'Stillstand'],
  es: ['El umbral', 'La tienda de la esquina', 'El callejón', 'Viento cruzado', 'Piedras de paso', 'El molinillo', 'El camino largo', 'El zigzag', 'El atasco', 'Paso estrecho', 'El relevo', 'El torno', 'El ojo de la cerradura', 'El bloqueo'],
  ja: ['玄関先', '角の店', '裏路地', '横風', '飛び石', '風車', '遠回り', '折り返し', '丸太の詰まり', '狭い通り道', 'リレー', '回転式ゲート', '鍵穴', '行き詰まり'],
  'pt-BR': ['Logo ali', 'Loja da esquina', 'Beco', 'Vento cruzado', 'Pedras de passagem', 'Cata-vento', 'Caminho longo', 'Zigue-zague', 'Engarrafamento', 'Passagem estreita', 'Revezamento', 'Catraca', 'Fechadura', 'Impasse'],
};
export const additionalBoardNames: Record<Locale, Record<string, string>> = {
  en: {}, ...Object.fromEntries(Object.entries(names).map(([locale, words]) => [locale, Object.fromEntries(ids.map((id, i) => [id, words[i]]))])) as Record<Exclude<Locale, 'en'>, Record<string, string>>,
};
