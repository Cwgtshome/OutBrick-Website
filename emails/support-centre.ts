// The Support Centre's emails and email fragments, in all six languages:
//
//   trackLine / trackLabel   the "Track your request" link added to the contact acknowledgement,
//                            a staff reply and a "fixed in" notice (see netlify/lifecycle/player-cases.ts);
//   caseLinkEmail            "here is the link to your request", sent when a player asks for it
//                            again on /support/request (only ever to the address on the case);
//   teamPlayerNote           the team's copy when a player adds details to a case (English).

import { button, color, esc, escLines, eyebrow, field, fonts, heading, panel, para, shell, textBlock, type Ctx } from './core.ts';
import { emailCopy, type EmailLocale } from './i18n.ts';
import { lifecycleCopy } from './lifecycle-i18n.ts';
import { supportFooter, supportFooterText, type Rendered } from './templates.ts';

const SITE = 'https://www.outbrick.site';

type Copy = {
  trackLabel: string;
  trackLine: string;
  link: { subject: (ref: string) => string; preheader: string; heading: string; intro: string; cta: string; expiry: string; why: string };
};

export const supportCentreEmailCopy: Record<EmailLocale, Copy> = {
  en: {
    trackLabel: 'Track your request',
    trackLine: 'See where your request stands, read every reply and add details at any time:',
    link: {
      subject: (ref) => `Your OutBrick request ${ref}`,
      preheader: 'The private link to follow your request.',
      heading: 'Here is the link to your request.',
      intro: 'Someone asked for the link to this OutBrick support request. It shows where your request stands and every reply from the team, and lets you add details.',
      cta: 'Open my request',
      expiry: 'The link is private to you and works for a year. If you did not ask for it, you can ignore this email: nothing has changed.',
      why: 'You received this because the link to your OutBrick support request was requested on outbrick.site.',
    },
  },
  fr: {
    trackLabel: 'Suivre ma demande',
    trackLine: 'Voyez où en est votre demande, lisez chaque réponse et ajoutez des détails à tout moment :',
    link: {
      subject: (ref) => `Votre demande OutBrick ${ref}`,
      preheader: 'Le lien privé pour suivre votre demande.',
      heading: 'Voici le lien vers votre demande.',
      intro: 'Quelqu’un a demandé le lien de cette demande d’assistance OutBrick. Il montre où en est votre demande et chaque réponse de l’équipe, et vous permet d’ajouter des détails.',
      cta: 'Ouvrir ma demande',
      expiry: 'Ce lien vous est réservé et fonctionne pendant un an. Si vous ne l’avez pas demandé, ignorez cet e-mail : rien n’a changé.',
      why: 'Vous recevez cet e-mail parce que le lien de votre demande d’assistance OutBrick a été demandé sur outbrick.site.',
    },
  },
  de: {
    trackLabel: 'Anfrage verfolgen',
    trackLine: 'Sieh jederzeit nach, wo deine Anfrage steht, lies jede Antwort und ergänze Details:',
    link: {
      subject: (ref) => `Deine OutBrick-Anfrage ${ref}`,
      preheader: 'Der private Link zu deiner Anfrage.',
      heading: 'Hier ist der Link zu deiner Anfrage.',
      intro: 'Jemand hat den Link zu dieser OutBrick-Supportanfrage angefordert. Dort siehst du, wo deine Anfrage steht, und jede Antwort des Teams, und du kannst Details ergänzen.',
      cta: 'Meine Anfrage öffnen',
      expiry: 'Der Link ist nur für dich und funktioniert ein Jahr lang. Wenn du ihn nicht angefordert hast, ignoriere diese E-Mail einfach: Es hat sich nichts geändert.',
      why: 'Du erhältst diese E-Mail, weil auf outbrick.site der Link zu deiner OutBrick-Supportanfrage angefordert wurde.',
    },
  },
  es: {
    trackLabel: 'Seguir mi solicitud',
    trackLine: 'Consulta en qué punto está tu solicitud, lee cada respuesta y añade detalles cuando quieras:',
    link: {
      subject: (ref) => `Tu solicitud de OutBrick ${ref}`,
      preheader: 'El enlace privado para seguir tu solicitud.',
      heading: 'Aquí tienes el enlace a tu solicitud.',
      intro: 'Alguien ha pedido el enlace de esta solicitud de soporte de OutBrick. Muestra en qué punto está tu solicitud y cada respuesta del equipo, y te permite añadir detalles.',
      cta: 'Abrir mi solicitud',
      expiry: 'El enlace es solo para ti y funciona durante un año. Si no lo has pedido, ignora este correo: no ha cambiado nada.',
      why: 'Recibes este correo porque se pidió en outbrick.site el enlace de tu solicitud de soporte de OutBrick.',
    },
  },
  ja: {
    trackLabel: 'お問い合わせの状況を見る',
    trackLine: 'お問い合わせの状況とチームからのすべての返信をいつでも確認でき、詳しい情報を追加することもできます。',
    link: {
      subject: (ref) => `OutBrickへのお問い合わせ ${ref}`,
      preheader: 'お問い合わせを確認するための専用リンクです。',
      heading: 'お問い合わせへのリンクをお送りします。',
      intro: 'このOutBrickサポートへのお問い合わせのリンクがリクエストされました。リンク先では、お問い合わせの状況とチームからのすべての返信を確認でき、詳しい情報を追加することもできます。',
      cta: 'お問い合わせを開く',
      expiry: 'このリンクはあなた専用で、1年間有効です。心当たりがない場合は、このメールを無視してください。何も変更されていません。',
      why: 'outbrick.siteでOutBrickサポートへのお問い合わせのリンクがリクエストされたため、このメールをお送りしています。',
    },
  },
  'pt-BR': {
    trackLabel: 'Acompanhar minha solicitação',
    trackLine: 'Veja em que pé está sua solicitação, leia cada resposta e acrescente detalhes quando quiser:',
    link: {
      subject: (ref) => `Sua solicitação ao OutBrick ${ref}`,
      preheader: 'O link privado para acompanhar sua solicitação.',
      heading: 'Aqui está o link para sua solicitação.',
      intro: 'Alguém pediu o link desta solicitação de suporte do OutBrick. Ele mostra em que pé está sua solicitação e cada resposta da equipe, e permite acrescentar detalhes.',
      cta: 'Abrir minha solicitação',
      expiry: 'O link é só seu e funciona por um ano. Se você não pediu, ignore este e-mail: nada mudou.',
      why: 'Você recebeu este e-mail porque o link da sua solicitação de suporte do OutBrick foi pedido em outbrick.site.',
    },
  },
};

const ctxOf = (locale: EmailLocale, assetBase = SITE): Ctx => ({ locale, assetBase });

function chip(ctx: Ctx, ref: string): string {
  const f = fonts(ctx.locale);
  return `<p style="margin:0 0 14px;"><span style="display:inline-block;padding:5px 10px 4px;border-radius:8px;background:${color.ink};color:${color.title};font-family:${f.text};font-size:13px;line-height:1.3;font-weight:800;letter-spacing:0.06em;">${esc(lifecycleCopy[ctx.locale].caseRef(ref))}</span></p>`;
}

/** The "Track your request" paragraph and link, as HTML for an email body. */
export function trackHtml(ctx: Ctx, url: string): string {
  const c = supportCentreEmailCopy[ctx.locale];
  return para(ctx, `${esc(c.trackLine)} <a href="${esc(url)}" style="color:${color.title};text-decoration:underline;font-weight:800;">${esc(c.trackLabel)}</a>`, { size: 16 });
}

export function trackText(locale: EmailLocale, url: string): string {
  return `${supportCentreEmailCopy[locale].trackLine} ${url}`;
}

/** Sent only to the address already on the case, when someone asks for its link again. */
export function caseLinkEmail(input: { locale: EmailLocale; ref: string; url: string; assetBase?: string }): Rendered {
  const ctx = ctxOf(input.locale, input.assetBase);
  const c = supportCentreEmailCopy[input.locale].link;
  const t = emailCopy[input.locale];
  const body = [
    eyebrow(ctx, esc(supportCentreEmailCopy[input.locale].trackLabel)),
    chip(ctx, input.ref),
    heading(ctx, esc(c.heading)),
    para(ctx, esc(c.intro)),
    button(ctx, input.url, esc(c.cta)),
    para(ctx, esc(c.expiry), { muted: true, size: 15 }),
    para(ctx, `— ${esc(t.signoff)}`, { margin: '4px 0 20px' }),
  ].join('\n');
  const subject = c.subject(input.ref);
  const html = shell({ ctx, host: { friend: 'sprout', pose: 'idle', mood: 'got' }, title: subject, preheader: c.preheader, logoAlt: t.logoAlt, body, footer: supportFooter(ctx, c.why, 'support-case-link') });
  const text = textBlock([lifecycleCopy[input.locale].caseRef(input.ref), '', c.heading, '', c.intro, '', `${c.cta}: ${input.url}`, '', c.expiry, '', `— ${t.signoff}`, '', ...supportFooterText(input.locale, c.why, 'support-case-link')]);
  return { subject, html, text };
}

/** The team's copy of details a player added from their request page. */
export function teamPlayerNote(input: { ref: string; caseUrl: string; message: string; reopened: boolean; locale: EmailLocale; assetBase?: string }): Rendered {
  const ctx = ctxOf('en', input.assetBase);
  const subject = `${input.reopened ? 'Reopened' : 'More details'}: ${input.ref}`;
  const body = [
    eyebrow(ctx, input.reopened ? 'Case reopened by the player' : 'The player added details', input.reopened ? '#e2352f' : color.panel),
    chip(ctx, input.ref),
    heading(ctx, esc(input.reopened ? 'The player wrote again after the case was answered.' : 'The player added details to an open case.')),
    panel(ctx, [field(ctx, 'Message', escLines(input.message)), field(ctx, 'Language', esc(input.locale))].join('')),
    button(ctx, input.caseUrl, 'Open the case'),
  ].join('\n');
  const html = shell({ ctx, nav: false, title: subject, preheader: input.message.slice(0, 120), logoAlt: 'OutBrick', body, footer: `<p style="margin:0;font-family:${fonts('en').text};font-size:15px;color:${color.lilac};">Sent to the OutBrick team from a player’s request page.</p>` });
  const text = textBlock([subject, '', input.message, '', `Language: ${input.locale}`, '', `Open the case: ${input.caseUrl}`]);
  return { subject, html, text };
}
