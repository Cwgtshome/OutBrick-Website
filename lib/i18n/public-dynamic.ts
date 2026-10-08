import { articles, authors } from '../blog';
import { getJob } from '../business';
import { getMascotStory } from '../mascots';
import { getShelf } from '../journal';
import { tagPageCopy } from './journal-tags';
import { journalUi, localizeArticle } from './blog';
import type { TranslatedLocale } from './locales';

const cached: Partial<Record<TranslatedLocale, Record<string,string>>> = {};
export function journalTextTranslations(locale: TranslatedLocale): Record<string,string> {
  if (cached[locale]) return cached[locale]!;
  const map: Record<string,string> = { ...journalUi[locale].categories };
  if (locale === 'pt-BR') Object.assign(map, { Journal: 'Blog', insight: 'percepção', smartphones: 'celulares', feedback: 'retorno', nostalgia: 'nostalgia' });
  for (const author of authors) {
    const copy=journalUi[locale].authors[author.id];
    if(copy) {map[author.role]=copy.role;map[author.bio]=copy.bio;}
  }
  for (const article of articles) {
    const copy=localizeArticle(article.slug,locale);
    map[article.title]=copy.title;map[article.dek]=copy.dek;map[article.imageAlt]=copy.imageAlt;
    article.tags.forEach((tag,i)=>{map[tag]??=copy.tags[i];});
  }
  cached[locale]=map;
  return map;
}
const phrases = {
 fr: { journal:'Le journal OutBrick', author:(name:string)=>`${name}, auteur du journal OutBrick`, count:(n:number)=>`${n} articles dans le journal OutBrick.`, remote:(title:string)=>`${title} — emploi à distance chez OutBrick`, collection:(label:string)=>`${label} — Le journal OutBrick`, cited:(n:number)=>`${n} articles du journal OutBrick ; chaque affirmation issue de la recherche est sourcée.` },
 de: { journal:'Das OutBrick-Journal', author:(name:string)=>`${name}, Autor beim OutBrick-Journal`, count:(n:number)=>`${n} Artikel im OutBrick-Journal.`, remote:(title:string)=>`${title} — Remote-Stelle bei OutBrick`, collection:(label:string)=>`${label} — Das OutBrick-Journal`, cited:(n:number)=>`${n} Artikel aus dem OutBrick-Journal; jede Forschungsaussage ist belegt.` },
 es: { journal:'El diario de OutBrick', author:(name:string)=>`${name}, autor del diario de OutBrick`, count:(n:number)=>`${n} artículos en el diario de OutBrick.`, remote:(title:string)=>`${title} — empleo a distancia en OutBrick`, collection:(label:string)=>`${label} — El diario de OutBrick`, cited:(n:number)=>`${n} artículos del diario de OutBrick; cada afirmación basada en investigaciones cita su fuente.` },
 ja: { journal:'OutBrickジャーナル', author:(name:string)=>`${name} — OutBrickジャーナルの著者`, count:(n:number)=>`OutBrickジャーナルの記事${n}本。`, remote:(title:string)=>`${title} — OutBrickのリモート求人`, collection:(label:string)=>`${label} — OutBrickジャーナル`, cited:(n:number)=>`OutBrickジャーナルの記事${n}本。研究に関する主張はすべて出典を示しています。` },
 'pt-BR': { journal:'Blog da OutBrick', author:(name:string)=>`${name}, autor(a) do blog da OutBrick`, count:(n:number)=>`${n} artigos no blog da OutBrick.`, remote:(title:string)=>`${title} — vaga remota na OutBrick`, collection:(label:string)=>`${label} — Blog da OutBrick`, cited:(n:number)=>`${n} artigos no blog da OutBrick; toda afirmação baseada em pesquisa tem sua fonte.` },
};
export function dynamicPageCopy(path:string,locale:TranslatedLocale,t:(text:string)=>string): {title:string;description:string}|undefined {
  const p=phrases[locale];
  if(path.startsWith('/authors/')) {
    const author=authors.find(a=>a.id===path.split('/')[2]); if(!author)return;
    const bio=journalUi[locale].authors[author.id]?.bio??t(author.bio);
    return {title:p.author(author.name),description:`${bio} ${p.count(articles.filter(a=>a.authorId===author.id).length)}`};
  }
  if(path.startsWith('/careers/')) {
    const job=getJob(path.split('/')[2]);if(!job)return;
    return {title:p.remote(t(job.title)),description:`${t('Remote')}, ${t(job.employmentLabel)}. ${t(job.summary)}`};
  }
  if(path.startsWith('/mascots/')) {
    const story=getMascotStory(path.split('/')[2]);if(!story)return;
    return {title:`${story.name}: ${t(story.headline).replace(/[。.]+$/,'')}`,description:t(story.dek)};
  }
  if(path.startsWith('/blog/category/')) {
    const shelf=getShelf(path.split('/')[3]);if(!shelf)return;
    const label=journalUi[locale].categories[shelf.category]??t(shelf.category);
    return {title:p.collection(label),description:`${t(shelf.note)} ${p.cited(shelf.articles.length)}`};
  }
  if(path.startsWith('/blog/tag/')) {
    const tag=tagPageCopy(path.split('/')[3]??'',locale);if(!tag)return;
    return {title:tag.title,description:tag.description};
  }
}
