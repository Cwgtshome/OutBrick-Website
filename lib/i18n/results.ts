import { boardResults, type BoardResult } from '../../app/(en)/play/result/results';
import { boardLevels } from '../board-levels';
import { boardStrings } from './board';
import type { TranslatedLocale } from './locales';

type ResultCopy = { title: (b: number,s: number) => string; description: (b:number,n:string,t:number,s:number)=>string; line:(n:string,t:number,s:number)=>string; alt:(b:number,n:string,t:number,s:number)=>string; };
const copy: Record<TranslatedLocale, ResultCopy> = {
  fr: {
    title:(b,s)=>`J’ai terminé le plateau ${b} d’OutBrick avec ${s} étoile${s===1?'':'s'}`,
    description:(b,n,t,s)=>`Plateau ${b}, ${n}, terminé ${s===3?`en ${t} coups sans annuler`:s===2?`en ${t} coups, exactement l’objectif`:`avec quelques coups de plus que l’objectif de ${t}`} : ${s} étoile${s===1?'':'s'}. Jouez gratuitement au même plateau dans votre navigateur, puis retrouvez-en 2 000 autres dans OutBrick sur l’App Store.`,
    line:(n,t,s)=>s===3?`Quelqu’un a terminé ${n} en ${t} coups, sans annuler. À vous.`:s===2?`Quelqu’un a terminé ${n} en ${t} coups. Pouvez-vous le faire sans annuler ?`:`Quelqu’un a terminé ${n}. Essayez maintenant en ${t} coups.`,
    alt:(b,n,t,s)=>`Plateau ${b} d’OutBrick, ${n}, terminé avec ${s} étoile${s===1?'':'s'} sur 3. Objectif : ${t} coups.`,
  },
  de: {
    title:(b,s)=>`Ich habe OutBrick-Spielfeld ${b} mit ${s} Stern${s===1?'':'en'} gelöst`,
    description:(b,n,t,s)=>`Spielfeld ${b}, ${n}, ${s===3?`in ${t} Zügen ohne Rückgängig` : s===2?`in ${t} Zügen, genau im Ziel`:`mit etwas mehr als den angestrebten ${t} Zügen`} gelöst: ${s} Stern${s===1?'':'e'}. Spiele dasselbe Spielfeld kostenlos im Browser und entdecke 2.000 weitere in OutBrick im App Store.`,
    line:(n,t,s)=>s===3?`Jemand hat ${n} in ${t} Zügen ohne Rückgängig gelöst. Du bist dran.`:s===2?`Jemand hat ${n} in ${t} Zügen gelöst. Schaffst du es ohne Rückgängig?`:`Jemand hat ${n} gelöst. Versuche es jetzt in ${t} Zügen.`,
    alt:(b,n,t,s)=>`OutBrick-Spielfeld ${b}, ${n}, mit ${s} von 3 Sternen gelöst. Ziel: ${t} Züge.`,
  },
  es: {
    title:(b,s)=>`He completado el tablero ${b} de OutBrick con ${s} estrella${s===1?'':'s'}`,
    description:(b,n,t,s)=>`Tablero ${b}, ${n}, completado ${s===3?`en ${t} movimientos sin deshacer`:s===2?`en ${t} movimientos, justo en el objetivo`:`con unos movimientos más que el objetivo de ${t}`} : ${s} estrella${s===1?'':'s'}. Juega gratis al mismo tablero en el navegador y encuentra otros 2000 en OutBrick en el App Store.`,
    line:(n,t,s)=>s===3?`Alguien completó ${n} en ${t} movimientos sin deshacer. Te toca.`:s===2?`Alguien completó ${n} en ${t} movimientos. ¿Puedes hacerlo sin deshacer?`:`Alguien completó ${n}. Ahora inténtalo en ${t} movimientos.`,
    alt:(b,n,t,s)=>`Tablero ${b} de OutBrick, ${n}, completado con ${s} de 3 estrellas. Objetivo: ${t} movimientos.`,
  },
  ja: {
    title:(b,s)=>`OutBrickのステージ${b}を星${s}個でクリアしました`,
    description:(b,n,t,s)=>`ステージ${b}「${n}」を${s===3?`「戻す」を使わず${t}手で`:s===2?`目標どおり${t}手で`:`目標の${t}手より数手多くかけて`}クリアし、星${s}個を獲得。同じステージをブラウザで無料で遊び、App StoreのOutBrickでさらに2,000ステージを楽しめます。`,
    line:(n,t,s)=>s===3?`誰かが「${n}」を「戻す」なしで${t}手でクリアしました。次はあなたの番です。`:s===2?`誰かが「${n}」を${t}手でクリアしました。「戻す」なしでできますか？`:`誰かが「${n}」をクリアしました。今度は${t}手で挑戦しましょう。`,
    alt:(b,n,t,s)=>`OutBrickのステージ${b}「${n}」を星3個中${s}個でクリア。目標は${t}手。`,
  },
};
export function localizedResult(result: BoardResult, locale: TranslatedLocale): BoardResult {
  const level = boardLevels[result.levelIndex];
  const name = boardStrings[locale].levelName[level.id] ?? result.name;
  const c = copy[locale];
  return { ...result, name, title:c.title(result.board,result.stars), description:c.description(result.board,name,result.target,result.stars), line:c.line(name,result.target,result.stars), image:`/share/${locale}/board-${result.id}.png`, imageAlt:c.alt(result.board,name,result.target,result.stars) };
}
export function resultTextTranslations(locale: TranslatedLocale): Record<string,string> {
  return Object.fromEntries(boardResults.flatMap(result => {
    const translated=localizedResult(result,locale);
    return [
      ...(['title','description','line','imageAlt','name'] as const).map(key => [result[key],translated[key]]),
      [`${result.stars} of 3 stars`, boardStrings[locale].starsOf(result.stars)],
      [`Play OutBrick board ${result.board}, ${result.name}`, `${boardStrings[locale].label}: ${boardStrings[locale].pip(result.board,translated.name)}`],
    ];
  }));
}
