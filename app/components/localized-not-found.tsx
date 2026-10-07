'use client';
import type { ReactNode } from 'react';
import { useLocale } from './locale-context';
import { localePath } from '../../lib/i18n/locales';
const copy = {
 en: ['This brick slid right off the board.', 'We looked in every row, under the undo button and behind Peach. The page you wanted isn’t here — it may have moved, or the link had a loose stud. No lives were lost.', 'OutBrick home', 'Where to next', 'Back to OutBrick', 'Play a board', 'Read the journal', 'Get support'],
 fr: ['Cette brique a glissé hors du plateau.', 'Nous avons cherché dans chaque rangée, sous le bouton Annuler et derrière Peach. Cette page n’est pas ici : elle a peut-être déménagé, ou le lien avait un tenon mal fixé. Aucune vie n’a été perdue.', 'Accueil OutBrick', 'Où aller ensuite', 'Retour à OutBrick', 'Jouer un plateau', 'Lire le journal', 'Obtenir de l’aide'],
 de: ['Dieser Stein ist vom Spielfeld gerutscht.', 'Wir haben in jeder Reihe, unter der Rückgängig-Taste und hinter Peach gesucht. Die gewünschte Seite ist nicht hier. Vielleicht ist sie umgezogen oder dem Link fehlte eine Noppe. Kein Leben ging verloren.', 'OutBrick-Startseite', 'Wohin als Nächstes', 'Zurück zu OutBrick', 'Ein Spielfeld spielen', 'Das Journal lesen', 'Hilfe erhalten'],
 es: ['Esta pieza se ha deslizado fuera del tablero.', 'Buscamos en cada fila, debajo del botón Deshacer y detrás de Peach. La página no está aquí: quizá se haya movido o al enlace le faltara un encaje. No se perdió ninguna vida.', 'Inicio de OutBrick', 'Adónde ir ahora', 'Volver a OutBrick', 'Jugar un tablero', 'Leer el diario', 'Obtener ayuda'],
 ja: ['このブロックは盤面の外へ滑り出してしまいました。', 'すべての列も、「戻す」ボタンの下も、Peachの後ろも探しましたが、このページは見つかりませんでした。移動したか、リンクの突起が外れていたのかもしれません。ライフは減っていません。', 'OutBrickのホーム', '次の移動先', 'OutBrickに戻る', 'ステージで遊ぶ', 'ジャーナルを読む', 'サポートを受ける'],
 'pt-BR': ['Este bloco escorregou para fora do tabuleiro.', 'Procuramos em todas as fileiras, embaixo do botão de desfazer e atrás da Peach. A página que você queria não está aqui: talvez tenha mudado de lugar ou o link esteja com uma peça solta. Nenhuma vida foi perdida.', 'Página inicial do OutBrick', 'Para onde agora?', 'Voltar ao OutBrick', 'Jogar uma fase', 'Ler o blog', 'Falar com o suporte'],
};
export function LocalizedNotFound({brand}:{brand:ReactNode}) {
 const locale=useLocale(); const c=copy[locale];
 return <main className="nf-page"><div className="nf-board" aria-hidden="true">{['#3fc544','#3b8bf0','#f26ab8','#ffc53d','#7b5cf0','#f5851f'].map((color,i)=><span className="nf-slot" key={color}>{i===3?null:<span className="nf-brick" style={{background:color}} />}</span>)}</div><a className="nf-home" href={localePath(locale,'/')} aria-label={c[2]}>{brand}</a><p className="nf-code">404</p><h1 className="nf-title">{c[0]}</h1><p className="nf-copy">{c[1]}</p><nav className="nf-links" aria-label={c[3]}>{['/','/play','/blog','/support'].map((p,i)=><a className={`nf-link${i===0?' nf-link-primary':''}`} href={localePath(locale,p)} key={p}>{c[4+i]}</a>)}</nav></main>;
}
