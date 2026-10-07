import type { Metadata } from 'next';
import { publicLocale, publicStaticParams } from '../../localized-public-page';
import { BrandMark } from '../../village-shell';
import { LocalizedNotFound } from '../../components/localized-not-found';
import '../../styles/not-found.css';
export const dynamicParams = false;
export function generateStaticParams() { return publicStaticParams(); }
const copy = { fr: ['Page introuvable','Cette page a quitté le plateau. Retrouvez OutBrick, le journal ou l’aide.'], de: ['Seite nicht gefunden','Diese Seite ist vom Spielfeld gerutscht. Zurück zu OutBrick, zum Journal oder zur Hilfe.'], es: ['Página no encontrada','Esta página se ha salido del tablero. Vuelve a OutBrick, al diario o a la ayuda.'], ja: ['ページが見つかりません','このページは盤面から滑り出しました。OutBrick、ジャーナル、サポートに戻りましょう。'], 'pt-BR': ['Página não encontrada','Esta página saiu do tabuleiro. Volte ao OutBrick, ao blog ou ao suporte.'] };
export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata> { const c=copy[await publicLocale(params)]; return {title:c[0], description:c[1], robots:{index:false,follow:true},alternates:{canonical:null}}; }
export default function Page() { return <LocalizedNotFound brand={<BrandMark />} />; }
