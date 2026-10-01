import { articles, authors } from '../blog';
import { getJob } from '../business';
import { getMascotStory } from '../mascots';
import { getShelf, getTagPages } from '../journal';
import { journalUi, localizeArticle } from './blog';
import type { TranslatedLocale } from './locales';

const cached: Partial<Record<TranslatedLocale, Record<string,string>>> = {};
export function journalTextTranslations(locale: TranslatedLocale): Record<string,string> {
  if (cached[locale]) return cached[locale]!;
  const map: Record<string,string> = { ...journalUi[locale].categories };
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
 fr: { journal:'Le journal OutBrick', author:(name:string)=>`${name}, auteur du journal OutBrick`, count:(n:number)=>`${n} articles dans le journal OutBrick.`, remote:(title:string)=>`${title} — emploi à distance chez OutBrick`, collection:(label:string)=>`${label} — Le journal OutBrick`, tag:(label:string)=>`Articles sur « ${label} » — Le journal OutBrick`, cited:(n:number)=>`${n} articles du journal OutBrick ; chaque affirmation issue de la recherche est sourcée.`, tagDesc:(n:number,label:string,titles:string)=>`${n} articles du journal OutBrick sur ${label}, dont ${titles}. Chaque affirmation issue de la recherche est sourcée.` },
 de: { journal:'Das OutBrick-Journal', author:(name:string)=>`${name}, Autor beim OutBrick-Journal`, count:(n:number)=>`${n} Artikel im OutBrick-Journal.`, remote:(title:string)=>`${title} — Remote-Stelle bei OutBrick`, collection:(label:string)=>`${label} — Das OutBrick-Journal`, tag:(label:string)=>`Artikel zu „${label}“ — Das OutBrick-Journal`, cited:(n:number)=>`${n} Artikel aus dem OutBrick-Journal; jede Forschungsaussage ist belegt.`, tagDesc:(n:number,label:string,titles:string)=>`${n} Artikel im OutBrick-Journal über ${label}, darunter ${titles}. Jede Forschungsaussage ist belegt.` },
 es: { journal:'El diario de OutBrick', author:(name:string)=>`${name}, autor del diario de OutBrick`, count:(n:number)=>`${n} artículos en el diario de OutBrick.`, remote:(title:string)=>`${title} — empleo a distancia en OutBrick`, collection:(label:string)=>`${label} — El diario de OutBrick`, tag:(label:string)=>`Artículos sobre «${label}» — El diario de OutBrick`, cited:(n:number)=>`${n} artículos del diario de OutBrick; cada afirmación basada en investigaciones cita su fuente.`, tagDesc:(n:number,label:string,titles:string)=>`${n} artículos del diario de OutBrick sobre ${label}, incluidos ${titles}. Cada afirmación basada en investigaciones cita su fuente.` },
 ja: { journal:'OutBrickジャーナル', author:(name:string)=>`${name} — OutBrickジャーナルの著者`, count:(n:number)=>`OutBrickジャーナルの記事${n}本。`, remote:(title:string)=>`${title} — OutBrickのリモート求人`, collection:(label:string)=>`${label} — OutBrickジャーナル`, tag:(label:string)=>`「${label}」の記事 — OutBrickジャーナル`, cited:(n:number)=>`OutBrickジャーナルの記事${n}本。研究に関する主張はすべて出典を示しています。`, tagDesc:(n:number,label:string,titles:string)=>`${label}に関するOutBrickジャーナルの記事${n}本。${titles}などを掲載しています。研究に関する主張はすべて出典を示しています。` },
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
    const tag=getTagPages().find(tag=>tag.slug===path.split('/')[3]);if(!tag)return;
    const label=journalTextTranslations(locale)[tag.label]??t(tag.label);
    const titles=tag.articles.slice(0,2).map(a=>`「${localizeArticle(a.slug,locale).title}」`).join(locale==='ja'?'、':' · ');
    return {title:p.tag(label),description:p.tagDesc(tag.articles.length,label,titles)};
  }
}
