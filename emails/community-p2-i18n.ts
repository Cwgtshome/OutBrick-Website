// Words for the OutBrick Community's phase-2 emails, in the site's six languages: the weekly
// digest, the "reply by email" hint under a notification's button, and the note sent back when
// a reply by email could not be posted.
//
// Same rules as emails/community-i18n.ts: the site's voice, British spelling in English, German
// "Sie", Spanish "tú", no markup in any string. Member-supplied values arrive raw; the templates
// escape them.

import type { EmailLocale } from './i18n.ts';

export type CategoryKindName = 'announcements' | 'support' | 'bugs' | 'ideas' | 'accessibility' | 'showcase' | 'general';

/** Why a reply by email was not posted. */
export type BounceReason = 'locked' | 'banned' | 'rate_limited' | 'empty' | 'invalid' | 'unverified' | 'not_found' | 'failed';

export type WeeklyDigestCopy = {
  subject: string;
  preheader: string;
  heading: string;
  intro: (name: string) => string;
  releasesTitle: string;
  release: (version: string) => string;
  categoryTitle: (category: string) => string;
  unansweredTitle: string;
  unansweredNote: string;
  replies: (count: number) => string;
  votes: (count: number) => string;
  cta: string;
  why: string;
};

export type BounceCopy = {
  subject: (title: string) => string;
  preheader: string;
  heading: string;
  intro: string;
  reasons: Record<BounceReason, string>;
  yourText: string;
  cta: string;
  why: string;
};

export const categoryNames: Record<EmailLocale, Record<CategoryKindName, string>> = {
  en: { announcements: 'Announcements', support: 'Help & support', bugs: 'Bug reports', ideas: 'Ideas & feedback', accessibility: 'Accessibility', showcase: 'Show & tell', general: 'General' },
  fr: { announcements: 'Annonces', support: 'Aide et assistance', bugs: 'Signalements de bugs', ideas: 'Idées et suggestions', accessibility: 'Accessibilité', showcase: 'Vos réussites', general: 'Général' },
  de: { announcements: 'Ankündigungen', support: 'Hilfe & Support', bugs: 'Fehlerberichte', ideas: 'Ideen & Feedback', accessibility: 'Barrierefreiheit', showcase: 'Zeigen & erzählen', general: 'Allgemeines' },
  es: { announcements: 'Anuncios', support: 'Ayuda y soporte', bugs: 'Informes de errores', ideas: 'Ideas y sugerencias', accessibility: 'Accesibilidad', showcase: 'Enseña lo tuyo', general: 'General' },
  ja: { announcements: 'お知らせ', support: 'ヘルプとサポート', bugs: '不具合の報告', ideas: 'アイデアとご意見', accessibility: 'アクセシビリティ', showcase: '見せて語ろう', general: '雑談' },
  'pt-BR': { announcements: 'Novidades', support: 'Ajuda e suporte', bugs: 'Relatos de problemas', ideas: 'Ideias e sugestões', accessibility: 'Acessibilidade', showcase: 'Mostre o que você fez', general: 'Geral' },
};

/** Under the button of a notification whose Reply-To posts a reply. */
export const replyHints: Record<EmailLocale, string> = {
  en: 'You can also reply to this email: what you write above the quoted message is posted as your reply in the thread.',
  fr: 'Vous pouvez aussi répondre à cet e-mail : ce que vous écrivez au-dessus du message cité est publié comme votre réponse dans la discussion.',
  de: 'Sie können auch direkt auf diese E-Mail antworten: Was Sie über der zitierten Nachricht schreiben, erscheint als Ihre Antwort im Thema.',
  es: 'También puedes responder a este correo: lo que escribas encima del mensaje citado se publica como tu respuesta en el tema.',
  ja: 'このメールに返信することもできます。引用部分より上に書いた内容が、スレッドへのあなたの返信として投稿されます。',
  'pt-BR': 'Você também pode responder a este e-mail: o texto que escrever acima da mensagem citada será publicado como sua resposta na conversa.',
};

export const weeklyDigestCopy: Record<EmailLocale, WeeklyDigestCopy> = {
  en: {
    subject: 'Your week in OutBrick Community',
    preheader: 'The busiest threads you follow, new releases and your open questions.',
    heading: 'This week in the community',
    intro: (name) => `Hello ${name}, here’s what happened in the places you follow over the last seven days.`,
    releasesTitle: 'New releases',
    release: (version) => `OutBrick ${version} is out`,
    categoryTitle: (category) => `Popular in ${category}`,
    unansweredTitle: 'Your questions still waiting for an answer',
    unansweredNote: 'Adding a detail, such as your device, iOS version or the level, often helps someone answer.',
    replies: (count) => (count === 1 ? '1 reply' : `${count} replies`),
    votes: (count) => (count === 1 ? '1 vote' : `${count} votes`),
    cta: 'Visit the community',
    why: 'You’re receiving this because you switched on the weekly digest in your OutBrick Community settings. It comes on Mondays, and only when there’s something to tell you.',
  },
  fr: {
    subject: 'Votre semaine dans la Communauté OutBrick',
    preheader: 'Les discussions les plus animées que vous suivez, les nouvelles versions et vos questions en attente.',
    heading: 'Cette semaine dans la communauté',
    intro: (name) => `Bonjour ${name}, voici ce qui s’est passé ces sept derniers jours dans ce que vous suivez.`,
    releasesTitle: 'Nouvelles versions',
    release: (version) => `OutBrick ${version} est disponible`,
    categoryTitle: (category) => `À la une dans ${category}`,
    unansweredTitle: 'Vos questions qui attendent encore une réponse',
    unansweredNote: 'Ajouter un détail, comme votre appareil, la version d’iOS ou le niveau, aide souvent quelqu’un à répondre.',
    replies: (count) => (count === 1 ? '1 réponse' : `${count} réponses`),
    votes: (count) => (count === 1 ? '1 vote' : `${count} votes`),
    cta: 'Aller à la communauté',
    why: 'Vous recevez cet e-mail parce que vous avez activé le résumé hebdomadaire dans vos réglages de la Communauté OutBrick. Il arrive le lundi, seulement quand il y a du nouveau.',
  },
  de: {
    subject: 'Ihre Woche in der OutBrick-Community',
    preheader: 'Die lebhaftesten Themen, denen Sie folgen, neue Versionen und Ihre offenen Fragen.',
    heading: 'Diese Woche in der Community',
    intro: (name) => `Hallo ${name}, das ist in den letzten sieben Tagen dort passiert, wo Sie mitlesen.`,
    releasesTitle: 'Neue Versionen',
    release: (version) => `OutBrick ${version} ist da`,
    categoryTitle: (category) => `Beliebt in ${category}`,
    unansweredTitle: 'Ihre Fragen, die noch auf eine Antwort warten',
    unansweredNote: 'Ein Detail wie Ihr Gerät, die iOS-Version oder das Level hilft oft, eine Antwort zu finden.',
    replies: (count) => (count === 1 ? '1 Antwort' : `${count} Antworten`),
    votes: (count) => (count === 1 ? '1 Stimme' : `${count} Stimmen`),
    cta: 'Zur Community',
    why: 'Sie erhalten diese E-Mail, weil Sie in Ihren Einstellungen der OutBrick-Community die wöchentliche Zusammenfassung eingeschaltet haben. Sie kommt montags, und nur, wenn es etwas Neues gibt.',
  },
  es: {
    subject: 'Tu semana en la Comunidad OutBrick',
    preheader: 'Los temas más animados que sigues, las nuevas versiones y tus preguntas pendientes.',
    heading: 'Esta semana en la comunidad',
    intro: (name) => `Hola, ${name}: esto es lo que ha pasado en los últimos siete días en lo que sigues.`,
    releasesTitle: 'Nuevas versiones',
    release: (version) => `Ya está aquí OutBrick ${version}`,
    categoryTitle: (category) => `Lo más popular en ${category}`,
    unansweredTitle: 'Tus preguntas que aún esperan respuesta',
    unansweredNote: 'Añadir un detalle, como tu dispositivo, la versión de iOS o el nivel, suele ayudar a que alguien responda.',
    replies: (count) => (count === 1 ? '1 respuesta' : `${count} respuestas`),
    votes: (count) => (count === 1 ? '1 voto' : `${count} votos`),
    cta: 'Ir a la comunidad',
    why: 'Recibes este correo porque activaste el resumen semanal en tus ajustes de la Comunidad OutBrick. Llega los lunes, y solo cuando hay algo que contarte.',
  },
  ja: {
    subject: 'OutBrickコミュニティの今週のまとめ',
    preheader: 'フォロー中の人気スレッド、新しいバージョン、まだ回答のない質問。',
    heading: '今週のコミュニティ',
    intro: (name) => `${name}さん、フォロー中の場所でこの7日間にあった出来事をお届けします。`,
    releasesTitle: '新しいバージョン',
    release: (version) => `OutBrick ${version} を公開しました`,
    categoryTitle: (category) => `${category}で話題`,
    unansweredTitle: 'まだ回答を待っているあなたの質問',
    unansweredNote: '端末、iOSのバージョン、ステージ番号などを書き足すと、回答が集まりやすくなります。',
    replies: (count) => `返信${count}件`,
    votes: (count) => `${count}票`,
    cta: 'コミュニティへ',
    why: 'OutBrickコミュニティの設定で週刊ダイジェストをオンにしているため、このメールをお送りしています。毎週月曜日、お知らせがあるときだけ届きます。',
  },
  'pt-BR': {
    subject: 'Sua semana na comunidade OutBrick',
    preheader: 'As conversas mais movimentadas que você acompanha, novidades e suas perguntas em aberto.',
    heading: 'Esta semana na comunidade',
    intro: (name) => `Olá, ${name}! Veja o que aconteceu nos últimos sete dias nos espaços que você acompanha.`,
    releasesTitle: 'Novidades',
    release: (version) => `OutBrick ${version} já está disponível`,
    categoryTitle: (category) => `Em destaque em ${category}`,
    unansweredTitle: 'Suas perguntas que ainda aguardam resposta',
    unansweredNote: 'Acrescentar detalhes, como seu dispositivo, a versão do iOS ou a fase, costuma ajudar alguém a responder.',
    replies: (count) => count === 1 ? '1 resposta' : `${count} respostas`,
    votes: (count) => count === 1 ? '1 voto' : `${count} votos`,
    cta: 'Acessar a comunidade',
    why: 'Você recebe este e-mail porque ativou o resumo semanal nas configurações da comunidade OutBrick. Ele chega às segundas-feiras, somente quando há novidades.',
  },
};

export const bounceCopy: Record<EmailLocale, BounceCopy> = {
  en: {
    subject: (title) => `Your reply to “${title}” wasn’t posted`,
    preheader: 'Your email reply didn’t reach the thread. Here’s why, and what you wrote.',
    heading: 'We couldn’t post your reply.',
    intro: 'You replied by email to a community notification, but the reply wasn’t posted:',
    reasons: {
      locked: 'The thread is locked, so it takes no new replies.',
      banned: 'Your account is suspended at the moment.',
      rate_limited: 'You’ve posted a lot in a short time. Please wait a little and try again.',
      empty: 'We couldn’t find any new text above the quoted message.',
      invalid: 'Something in the reply can’t be posted as it is (it may be too long, or an image needs a description). Please post it on the site, where the form will show what to change.',
      unverified: 'Your email address isn’t confirmed yet.',
      not_found: 'The thread is no longer there.',
      failed: 'Something went wrong on our side.',
    },
    yourText: 'What you wrote',
    cta: 'Open the thread',
    why: 'You’re receiving this because you replied by email to an OutBrick Community notification.',
  },
  fr: {
    subject: (title) => `Votre réponse à « ${title} » n’a pas été publiée`,
    preheader: 'Votre réponse par e-mail n’est pas arrivée dans la discussion. Voici pourquoi, et ce que vous avez écrit.',
    heading: 'Nous n’avons pas pu publier votre réponse.',
    intro: 'Vous avez répondu par e-mail à une notification de la communauté, mais la réponse n’a pas été publiée :',
    reasons: {
      locked: 'La discussion est verrouillée : elle n’accepte plus de réponses.',
      banned: 'Votre compte est suspendu pour le moment.',
      rate_limited: 'Vous avez beaucoup publié en peu de temps. Patientez un peu, puis réessayez.',
      empty: 'Nous n’avons trouvé aucun nouveau texte au-dessus du message cité.',
      invalid: 'Un élément de la réponse ne peut pas être publié tel quel (elle est peut-être trop longue, ou une image a besoin d’une description). Publiez-la sur le site : le formulaire vous indiquera quoi modifier.',
      unverified: 'Votre adresse e-mail n’est pas encore confirmée.',
      not_found: 'La discussion n’existe plus.',
      failed: 'Un problème est survenu de notre côté.',
    },
    yourText: 'Ce que vous avez écrit',
    cta: 'Ouvrir la discussion',
    why: 'Vous recevez cet e-mail parce que vous avez répondu par e-mail à une notification de la Communauté OutBrick.',
  },
  de: {
    subject: (title) => `Ihre Antwort auf „${title}“ wurde nicht veröffentlicht`,
    preheader: 'Ihre Antwort per E-Mail ist nicht im Thema angekommen. Hier steht, warum, und was Sie geschrieben haben.',
    heading: 'Wir konnten Ihre Antwort nicht veröffentlichen.',
    intro: 'Sie haben per E-Mail auf eine Benachrichtigung der Community geantwortet, aber die Antwort wurde nicht veröffentlicht:',
    reasons: {
      locked: 'Das Thema ist gesperrt und nimmt keine neuen Antworten an.',
      banned: 'Ihr Konto ist derzeit gesperrt.',
      rate_limited: 'Sie haben in kurzer Zeit sehr viel geschrieben. Bitte warten Sie etwas und versuchen Sie es dann erneut.',
      empty: 'Über der zitierten Nachricht haben wir keinen neuen Text gefunden.',
      invalid: 'Etwas in der Antwort kann so nicht veröffentlicht werden (vielleicht ist sie zu lang, oder ein Bild braucht eine Beschreibung). Bitte veröffentlichen Sie sie auf der Website; das Formular zeigt Ihnen, was zu ändern ist.',
      unverified: 'Ihre E-Mail-Adresse ist noch nicht bestätigt.',
      not_found: 'Das Thema gibt es nicht mehr.',
      failed: 'Bei uns ist etwas schiefgelaufen.',
    },
    yourText: 'Was Sie geschrieben haben',
    cta: 'Thema öffnen',
    why: 'Sie erhalten diese E-Mail, weil Sie per E-Mail auf eine Benachrichtigung der OutBrick-Community geantwortet haben.',
  },
  es: {
    subject: (title) => `Tu respuesta a «${title}» no se ha publicado`,
    preheader: 'Tu respuesta por correo no ha llegado al tema. Aquí tienes el motivo y lo que escribiste.',
    heading: 'No hemos podido publicar tu respuesta.',
    intro: 'Respondiste por correo a una notificación de la comunidad, pero la respuesta no se ha publicado:',
    reasons: {
      locked: 'El tema está cerrado y no admite respuestas nuevas.',
      banned: 'Tu cuenta está suspendida en este momento.',
      rate_limited: 'Has publicado mucho en poco tiempo. Espera un poco y vuelve a intentarlo.',
      empty: 'No hemos encontrado texto nuevo encima del mensaje citado.',
      invalid: 'Hay algo en la respuesta que no se puede publicar tal cual (puede que sea demasiado larga, o que una imagen necesite descripción). Publícala en la web, donde el formulario te indicará qué cambiar.',
      unverified: 'Tu dirección de correo aún no está confirmada.',
      not_found: 'El tema ya no existe.',
      failed: 'Algo ha fallado por nuestra parte.',
    },
    yourText: 'Lo que escribiste',
    cta: 'Abrir el tema',
    why: 'Recibes este correo porque respondiste por correo a una notificación de la Comunidad OutBrick.',
  },
  ja: {
    subject: (title) => `「${title}」へのあなたの返信は投稿されませんでした`,
    preheader: 'メールでの返信がスレッドに届きませんでした。理由と、書いた内容をお知らせします。',
    heading: '返信を投稿できませんでした。',
    intro: 'コミュニティの通知にメールで返信いただきましたが、返信は投稿されませんでした。',
    reasons: {
      locked: 'このスレッドはロックされているため、新しい返信を受け付けていません。',
      banned: 'あなたのアカウントは現在停止されています。',
      rate_limited: '短い時間にたくさん投稿されています。少し待ってから、もう一度お試しください。',
      empty: '引用部分より上に新しい文章が見つかりませんでした。',
      invalid: '返信の一部をこのままでは投稿できません（長すぎるか、画像に説明が必要です）。サイトから投稿すると、フォームで直す箇所を確認できます。',
      unverified: 'メールアドレスの確認がまだ済んでいません。',
      not_found: 'このスレッドはもうありません。',
      failed: 'こちら側で問題が発生しました。',
    },
    yourText: 'あなたが書いた内容',
    cta: 'スレッドを開く',
    why: 'OutBrickコミュニティの通知にメールで返信いただいたため、このメールをお送りしています。',
  },
  'pt-BR': {
    subject: (title) => `Sua resposta a “${title}” não foi publicada`,
    preheader: 'Sua resposta por e-mail não chegou à conversa. Veja o motivo e o que você escreveu.',
    heading: 'Não foi possível publicar sua resposta.',
    intro: 'Você respondeu por e-mail a uma notificação da comunidade, mas a resposta não foi publicada:',
    reasons: {
      locked: 'A conversa está fechada e não aceita novas respostas.',
      banned: 'Sua conta está suspensa no momento.',
      rate_limited: 'Você publicou muitas mensagens em pouco tempo. Aguarde um pouco e tente novamente.',
      empty: 'Não encontramos texto novo antes da mensagem citada.',
      invalid: 'Não foi possível publicar a resposta como está (talvez ela seja longa demais ou uma imagem precise de descrição). Publique pelo site; o formulário mostrará o que você precisa alterar.',
      unverified: 'Seu endereço de e-mail ainda não foi confirmado.',
      not_found: 'Essa conversa não está mais disponível.',
      failed: 'Algo deu errado do nosso lado.',
    },
    yourText: 'O que você escreveu',
    cta: 'Abrir a conversa',
    why: 'Você recebe este e-mail porque respondeu por e-mail a uma notificação da comunidade OutBrick.',
  },
};
