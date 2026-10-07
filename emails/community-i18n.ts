// Every word the OutBrick Community emails and their link pages say, in the site's five languages.
//
// Same rules as emails/i18n.ts: the site's voice (warm, plain, British spelling in English),
// German "Sie", Spanish "tú", no markup in any string. Values that came from a member (a display
// name, a thread title, a moderator's reason) reach these functions raw; the templates escape
// the result for HTML and use it as is in the text/plain part.

import type { EmailLocale } from './i18n.ts';
// community-fx: the 'badge' kind and the ideas status in_progress.
import { badgeEmailCopy, type BadgeEmailCopy } from './community-fx-i18n.ts';

export type CommunityKind = 'reply' | 'mention' | 'watched' | 'status' | 'solved' | 'release' | 'moderation' | 'badge' | 'merged';
/** What an unsubscribe link can switch off: one kind, or every community email. */
export type UnsubscribeKind = CommunityKind | 'digest' | 'all';

export const communityKinds: readonly CommunityKind[] = ['reply', 'mention', 'watched', 'status', 'solved', 'release', 'moderation', 'badge', 'merged'];

type Item = { title: string; body: string };

export type CommunityCopy = {
  eyebrow: string;
  newsEyebrow: string;
  footer: {
    manage: string;
    unsubscribe: (kind: UnsubscribeKind) => string;
    guidelines: string;
    privacy: string;
    why: string;
  };
  /** "replies", "mentions" … as they read after "Stop emails about". */
  kindNames: Record<UnsubscribeKind, string>;
  signin: {
    subject: string;
    preheader: string;
    heading: string;
    intro: string;
    cta: string;
    expiry: string;
    ignore: string;
    why: string;
  };
  confirmEmail: {
    subject: string;
    preheader: string;
    heading: string;
    introProvider: string;
    introChange: string;
    cta: string;
    expiry: string;
    ignore: string;
    why: string;
  };
  welcome: {
    subject: string;
    preheader: string;
    heading: (name: string) => string;
    intro: string;
    categoriesTitle: string;
    categories: Item[];
    followTitle: string;
    follow: string;
    accessibilityTitle: string;
    accessibility: string;
    guidelines: string;
    guidelinesLink: string;
    cta: string;
    why: string;
  };
  kinds: {
    reply: { subject: (actor: string, title: string) => string; intro: string; cta: string };
    mention: { subject: (actor: string, title: string) => string; intro: string; cta: string };
    watched: { subject: (actor: string, title: string) => string; intro: string; cta: string };
    status: { subject: (title: string, status: string) => string; intro: (status: string) => string; note: string; cta: string };
    solved: { subject: (title: string) => string; intro: string; cta: string };
    /** Phase 2: a moderator merged the thread holding your post into another. */
    merged: { subject: (title: string) => string; intro: (from: string) => string; cta: string };
    release: { subject: (version: string) => string; intro: (version: string) => string; cta: string };
    moderation: { subject: (title: string) => string; heading: string; intro: (title: string) => string; reason: string; appeal: string; cta: string };
    badge: BadgeEmailCopy['kind'];
  };
  /** One line per item in the grouped email. */
  digestLine: Record<CommunityKind, (actor: string, title: string, extra: string) => string>;
  digest: {
    subject: (count: number) => string;
    preheader: string;
    heading: (count: number) => string;
    intro: string;
    open: string;
    more: (count: number) => string;
    cta: string;
  };
  someone: string;
  statuses: Record<string, string>;
  pages: {
    signin: { title: string; body: string; button: string; note: string };
    confirmEmail: { title: string; body: string; button: string };
    unsubscribe: { title: (kind: UnsubscribeKind) => string; body: (kind: UnsubscribeKind) => string; button: string; keep: string };
    unsubscribed: { title: string; body: (kind: UnsubscribeKind) => string; settings: string };
    invalid: { title: string; body: string; cta: string };
  };
};

const en: CommunityCopy = {
  eyebrow: 'OutBrick Community',
  newsEyebrow: 'OutBrick News',
  footer: {
    manage: 'Manage email settings',
    unsubscribe: (kind) => (kind === 'all' ? 'Unsubscribe from all community emails' : `Stop emails about ${en.kindNames[kind]}`),
    guidelines: 'Community guidelines',
    privacy: 'Privacy',
    why: 'You’re receiving this because you’re a member of OutBrick Community at outbrick.site. Your address is never shown to other members.',
  },
  kindNames: {
    reply: 'replies to you',
    mention: 'mentions of your name',
    watched: 'threads and categories you follow',
    status: 'status changes',
    solved: 'solved answers',
    release: 'new releases',
    badge: badgeEmailCopy.en.kindName,
    moderation: 'moderation notices',
    merged: 'threads merged by moderators',
    digest: 'the weekly digest',
    all: 'anything at all',
  },
  signin: {
    subject: 'Your sign-in link for OutBrick Community',
    preheader: 'One tap and you’re in. The link works once, for 20 minutes.',
    heading: 'Here’s your sign-in link.',
    intro: 'Press the button to sign in to OutBrick Community. There’s no password to remember: this email is the key.',
    cta: 'Sign in to the community',
    expiry: 'The link works once, for 20 minutes. If the button doesn’t work, copy this link into your browser:',
    ignore: 'Didn’t ask to sign in? You can safely ignore this email: nobody can get in without the link, and it expires on its own.',
    why: 'You’re receiving this one-off email because this address was entered on the sign-in page at outbrick.site.',
  },
  confirmEmail: {
    subject: 'Confirm your email address for OutBrick Community',
    preheader: 'One tap to confirm, and you can start posting.',
    heading: 'Please confirm your email address.',
    introProvider: 'You signed in to OutBrick Community with Facebook, which doesn’t tell us whether this address is really yours. Press the button to confirm it, and you can start posting and replying straight away.',
    introChange: 'You asked to use this address for OutBrick Community. Press the button to confirm it; until then, your emails keep going to the address you had before.',
    cta: 'Confirm my email address',
    expiry: 'The button works for 24 hours. If it doesn’t, copy this link into your browser:',
    ignore: 'Didn’t expect this? Ignore this email and nothing will change.',
    why: 'You’re receiving this one-off email because this address was given to OutBrick Community at outbrick.site.',
  },
  welcome: {
    subject: 'Welcome to OutBrick Community',
    preheader: 'Ask, report a bug, share an idea, or just say hello. Here’s how it works.',
    heading: (name) => (name ? `Welcome, ${name}!` : 'Welcome!'),
    intro: 'OutBrick Community is where players help each other, the team answers in the open, and bugs and ideas get a public status you can follow. Bloo is very glad you’re here.',
    categoriesTitle: 'Where things go',
    categories: [
      { title: 'Announcements.', body: 'Every new version, posted the moment the App Store has it.' },
      { title: 'Help & support.', body: '“How do I…?” questions. When an answer works, it’s marked Solved for the next person.' },
      { title: 'Bug reports.', body: 'Something broken? A short form asks for your device, iOS version and steps, and you can follow the fix.' },
      { title: 'Ideas & feedback.', body: 'Suggest a feature, or upvote one you’d like to see.' },
      { title: 'Accessibility.', body: 'VoiceOver, Voice Control, Switch Control, Larger Text and colour-blind play. The team watches this one most closely.' },
      { title: 'Show & tell.', body: 'Clears, Journey milestones and screenshots.' },
      { title: 'General.', body: 'Everything else.' },
    ],
    followTitle: 'Follow what matters to you',
    follow: 'Choose Follow on any thread or category and we’ll email you when something new is posted. You’ll always hear about replies to your own posts, and you can switch any kind of email off in your settings.',
    accessibilityTitle: 'Built for VoiceOver',
    accessibility: 'Every page has one main heading, each post is its own heading so the rotor works as a table of contents, and the editor is a plain text field. If anything gets in your way, tell us in Accessibility and we’ll fix it.',
    guidelines: 'Be kind, stay on topic, and keep personal details out of posts.',
    guidelinesLink: 'Read the community guidelines',
    cta: 'Visit the community',
    why: 'You’re receiving this one-off email because you joined OutBrick Community at outbrick.site.',
  },
  kinds: {
    reply: { subject: (actor, title) => `${actor} replied in “${title}”`, intro: 'There’s a new reply to your post:', cta: 'Read the reply' },
    mention: { subject: (actor, title) => `${actor} mentioned you in “${title}”`, intro: 'You were mentioned in this post:', cta: 'Read the post' },
    watched: { subject: (actor, title) => `${actor} posted in “${title}”`, intro: 'Something new in a thread or category you follow:', cta: 'Read the post' },
    status: {
      subject: (title, status) => `“${title}” is now ${status}`,
      intro: (status) => `The team has updated this thread’s status to ${status}.`,
      note: 'Note from the team',
      cta: 'See the thread',
    },
    solved: { subject: (title) => `Your answer in “${title}” was marked Solved`, intro: 'Thank you! Your answer is now the solution, so the next person with the same question will find it straight away.', cta: 'See your answer' },
    merged: { subject: (title) => `Your post moved to “${title}”`, intro: (from) => `A moderator merged “${from}” into this thread, because both were about the same thing. Your post is here now, with everything else that was said.`, cta: 'See the thread' },
    release: { subject: (version) => `OutBrick ${version} is out`, intro: (version) => `Version ${version} has just reached the App Store. Here’s what’s new:`, cta: 'Read the release notes' },
    badge: badgeEmailCopy.en.kind,
    moderation: {
      subject: (title) => `About your post in “${title}”`,
      heading: 'A moderator has hidden one of your posts.',
      intro: (title) => `Your post in “${title}” is no longer visible to other members.`,
      reason: 'Reason',
      appeal: 'If you think this was a mistake, reply to this email and a person on the team will look at it again. Nothing else about your account has changed.',
      cta: 'See the thread',
    },
  },
  digestLine: {
    reply: (actor, title) => `${actor} replied in “${title}”`,
    mention: (actor, title) => `${actor} mentioned you in “${title}”`,
    watched: (actor, title) => `${actor} posted in “${title}”`,
    status: (_actor, title, status) => `“${title}” is now ${status}`,
    solved: (_actor, title) => `Your answer in “${title}” was marked Solved`,
    merged: (_actor, title) => `Your post moved to “${title}”`,
    release: (_actor, _title, version) => `OutBrick ${version} is out`,
    badge: (_actor, _title, badge) => badgeEmailCopy.en.digestLine(badge),
    moderation: (_actor, title) => `A moderator hid your post in “${title}”`,
  },
  digest: {
    subject: (count) => `${count} new things in OutBrick Community`,
    preheader: 'Replies, mentions and updates since we last wrote, all in one email.',
    heading: (count) => `${count} new things since we last wrote`,
    intro: 'We’ve gathered them into one email so your inbox stays calm.',
    open: 'Open',
    more: (count) => (count === 1 ? 'and 1 more' : `and ${count} more`),
    cta: 'See all notifications',
  },
  someone: 'Someone',
  statuses: {
    new: 'New',
    confirmed: 'Confirmed',
    fixed: 'Fixed',
    released: 'Released',
    not_a_bug: 'Not a bug',
    duplicate: 'Duplicate',
    open: 'Open',
    considering: 'Under consideration',
    planned: 'Planned',
    shipped: 'Shipped',
    declined: 'Declined',
    in_progress: badgeEmailCopy.en.inProgress,
  },
  pages: {
    signin: {
      title: 'Sign in to OutBrick Community',
      body: 'Press the button to finish signing in. It works on any device, not only the one where you asked for the link.',
      button: 'Sign in',
      note: 'This extra step stops email security scanners from using your link before you do.',
    },
    confirmEmail: { title: 'Confirm your email address', body: 'Press the button to confirm this address for OutBrick Community.', button: 'Confirm my email address' },
    unsubscribe: {
      title: (kind) => (kind === 'all' ? 'Stop all community emails?' : `Stop emails about ${en.kindNames[kind]}?`),
      body: (kind) =>
        kind === 'all'
          ? 'Press the button and OutBrick Community won’t email you at all. Your notifications will still wait for you on the site, and you can switch emails back on in your settings.'
          : `Press the button and we’ll stop emailing you about ${en.kindNames[kind]}. You’ll still see them on the site, and you can switch them back on in your settings.`,
      button: 'Stop these emails',
      keep: 'Keep these emails',
    },
    unsubscribed: {
      title: 'Done. No more of those emails.',
      body: (kind) => (kind === 'all' ? 'OutBrick Community won’t email you any more.' : `We won’t email you about ${en.kindNames[kind]} any more.`),
      settings: 'Open email settings',
    },
    invalid: { title: 'That link has expired', body: 'Links in our emails work for a limited time, or only once. You can ask for a new one on the sign-in page.', cta: 'Go to the sign-in page' },
  },
};

const fr: CommunityCopy = {
  eyebrow: 'Communauté OutBrick',
  newsEyebrow: 'Les nouvelles d’OutBrick',
  footer: {
    manage: 'Gérer les e-mails',
    unsubscribe: (kind) => (kind === 'all' ? 'Ne plus recevoir aucun e-mail de la communauté' : `Ne plus recevoir d’e-mails pour ${fr.kindNames[kind]}`),
    guidelines: 'Règles de la communauté',
    privacy: 'Confidentialité',
    why: 'Vous recevez cet e-mail parce que vous êtes membre de la Communauté OutBrick sur outbrick.site. Votre adresse n’est jamais montrée aux autres membres.',
  },
  kindNames: {
    reply: 'les réponses qui vous sont adressées',
    mention: 'les mentions de votre nom',
    watched: 'les discussions et catégories que vous suivez',
    status: 'les changements de statut',
    solved: 'les réponses marquées comme solution',
    release: 'les nouvelles versions',
    badge: badgeEmailCopy.fr.kindName,
    moderation: 'les avis de modération',
    merged: 'les fusions de discussions',
    digest: 'le résumé hebdomadaire',
    all: 'quoi que ce soit',
  },
  signin: {
    subject: 'Votre lien de connexion à la Communauté OutBrick',
    preheader: 'Un geste et vous êtes connecté. Le lien sert une seule fois, pendant 20 minutes.',
    heading: 'Voici votre lien de connexion.',
    intro: 'Appuyez sur le bouton pour vous connecter à la Communauté OutBrick. Aucun mot de passe à retenir : cet e-mail fait office de clé.',
    cta: 'Me connecter à la communauté',
    expiry: 'Le lien sert une seule fois, pendant 20 minutes. Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :',
    ignore: 'Vous n’avez pas demandé à vous connecter ? Vous pouvez ignorer cet e-mail sans crainte : personne ne peut entrer sans le lien, et il expire tout seul.',
    why: 'Vous recevez cet e-mail unique parce que cette adresse a été saisie sur la page de connexion d’outbrick.site.',
  },
  confirmEmail: {
    subject: 'Confirmez votre adresse e-mail pour la Communauté OutBrick',
    preheader: 'Un geste pour confirmer, et vous pourrez publier.',
    heading: 'Merci de confirmer votre adresse e-mail.',
    introProvider: 'Vous vous êtes connecté à la Communauté OutBrick avec Facebook, qui ne nous dit pas si cette adresse est bien la vôtre. Appuyez sur le bouton pour la confirmer, et vous pourrez publier et répondre tout de suite.',
    introChange: 'Vous avez demandé à utiliser cette adresse pour la Communauté OutBrick. Appuyez sur le bouton pour la confirmer ; d’ici là, vos e-mails continuent d’arriver à votre ancienne adresse.',
    cta: 'Confirmer mon adresse e-mail',
    expiry: 'Le bouton reste valable 24 heures. S’il ne fonctionne pas, copiez ce lien dans votre navigateur :',
    ignore: 'Vous ne vous attendiez pas à cet e-mail ? Ignorez-le et rien ne changera.',
    why: 'Vous recevez cet e-mail unique parce que cette adresse a été indiquée à la Communauté OutBrick sur outbrick.site.',
  },
  welcome: {
    subject: 'Bienvenue dans la Communauté OutBrick',
    preheader: 'Posez une question, signalez un bug, proposez une idée ou dites simplement bonjour. Voici comment ça marche.',
    heading: (name) => (name ? `Bienvenue, ${name} !` : 'Bienvenue !'),
    intro: 'La Communauté OutBrick, c’est l’endroit où les joueurs s’entraident, où l’équipe répond au grand jour, et où chaque bug et chaque idée reçoit un statut public que vous pouvez suivre. Bloo est ravi de vous voir ici.',
    categoriesTitle: 'Où publier quoi',
    categories: [
      { title: 'Annonces.', body: 'Chaque nouvelle version, publiée dès qu’elle arrive sur l’App Store.' },
      { title: 'Aide et assistance.', body: 'Les questions « Comment faire… ? ». Quand une réponse fonctionne, elle est marquée comme solution pour la personne suivante.' },
      { title: 'Signaler un bug.', body: 'Quelque chose ne marche pas ? Un court formulaire demande votre appareil, votre version d’iOS et les étapes, et vous pouvez suivre la correction.' },
      { title: 'Idées et suggestions.', body: 'Proposez une fonctionnalité, ou votez pour celles que vous aimeriez voir.' },
      { title: 'Accessibilité.', body: 'VoiceOver, Contrôle vocal, Contrôle de sélection, texte plus grand et jeu pour les daltoniens. C’est la catégorie que l’équipe suit de plus près.' },
      { title: 'Vos exploits.', body: 'Niveaux réussis, étapes du Voyage et captures d’écran.' },
      { title: 'Général.', body: 'Tout le reste.' },
    ],
    followTitle: 'Suivez ce qui compte pour vous',
    follow: 'Choisissez Suivre sur une discussion ou une catégorie et nous vous écrirons dès qu’il y a du nouveau. Vous êtes toujours prévenu des réponses à vos propres messages, et vous pouvez désactiver chaque type d’e-mail dans vos réglages.',
    accessibilityTitle: 'Pensé pour VoiceOver',
    accessibility: 'Chaque page a un seul titre principal, chaque message a son propre titre pour que le rotor serve de table des matières, et l’éditeur est un simple champ de texte. Si quelque chose vous gêne, dites-le-nous dans Accessibilité et nous le corrigerons.',
    guidelines: 'Soyez bienveillant, restez dans le sujet et ne publiez pas d’informations personnelles.',
    guidelinesLink: 'Lire les règles de la communauté',
    cta: 'Découvrir la communauté',
    why: 'Vous recevez cet e-mail unique parce que vous avez rejoint la Communauté OutBrick sur outbrick.site.',
  },
  kinds: {
    reply: { subject: (actor, title) => `${actor} a répondu dans « ${title} »`, intro: 'Il y a une nouvelle réponse à votre message :', cta: 'Lire la réponse' },
    mention: { subject: (actor, title) => `${actor} vous a mentionné dans « ${title} »`, intro: 'Vous avez été mentionné dans ce message :', cta: 'Lire le message' },
    watched: { subject: (actor, title) => `${actor} a publié dans « ${title} »`, intro: 'Du nouveau dans une discussion ou une catégorie que vous suivez :', cta: 'Lire le message' },
    status: {
      subject: (title, status) => `« ${title} » : nouveau statut ${status}`,
      intro: (status) => `L’équipe a changé le statut de cette discussion : ${status}.`,
      note: 'Note de l’équipe',
      cta: 'Voir la discussion',
    },
    solved: { subject: (title) => `Votre réponse dans « ${title} » a été marquée comme solution`, intro: 'Merci ! Votre réponse est désormais la solution : la prochaine personne qui se pose la même question la trouvera tout de suite.', cta: 'Voir votre réponse' },
    merged: { subject: (title) => `Votre message a été déplacé dans « ${title} »`, intro: (from) => `Un modérateur a fusionné « ${from} » avec cette discussion, car elles portaient sur le même sujet. Votre message s’y trouve désormais, avec tout le reste de l’échange.`, cta: 'Voir la discussion' },
    release: { subject: (version) => `OutBrick ${version} est disponible`, intro: (version) => `La version ${version} vient d’arriver sur l’App Store. Voici les nouveautés :`, cta: 'Lire les notes de version' },
    badge: badgeEmailCopy.fr.kind,
    moderation: {
      subject: (title) => `À propos de votre message dans « ${title} »`,
      heading: 'Un modérateur a masqué l’un de vos messages.',
      intro: (title) => `Votre message dans « ${title} » n’est plus visible par les autres membres.`,
      reason: 'Motif',
      appeal: 'Si vous pensez qu’il s’agit d’une erreur, répondez à cet e-mail : une personne de l’équipe réexaminera la décision. Rien d’autre n’a changé sur votre compte.',
      cta: 'Voir la discussion',
    },
  },
  digestLine: {
    reply: (actor, title) => `${actor} a répondu dans « ${title} »`,
    mention: (actor, title) => `${actor} vous a mentionné dans « ${title} »`,
    watched: (actor, title) => `${actor} a publié dans « ${title} »`,
    status: (_actor, title, status) => `« ${title} » : nouveau statut ${status}`,
    solved: (_actor, title) => `Votre réponse dans « ${title} » a été marquée comme solution`,
    merged: (_actor, title) => `Votre message a été déplacé dans « ${title} »`,
    release: (_actor, _title, version) => `OutBrick ${version} est disponible`,
    badge: (_actor, _title, badge) => badgeEmailCopy.fr.digestLine(badge),
    moderation: (_actor, title) => `Un modérateur a masqué votre message dans « ${title} »`,
  },
  digest: {
    subject: (count) => `${count} nouveautés dans la Communauté OutBrick`,
    preheader: 'Réponses, mentions et mises à jour depuis notre dernier e-mail, réunies en un seul.',
    heading: (count) => `${count} nouveautés depuis notre dernier e-mail`,
    intro: 'Nous les avons réunies dans un seul e-mail pour que votre boîte de réception reste calme.',
    open: 'Ouvrir',
    more: (count) => (count === 1 ? 'et 1 autre' : `et ${count} autres`),
    cta: 'Voir toutes les notifications',
  },
  someone: 'Quelqu’un',
  statuses: {
    new: 'Nouveau',
    confirmed: 'Confirmé',
    fixed: 'Corrigé',
    released: 'Publié',
    not_a_bug: 'Pas un bug',
    duplicate: 'Doublon',
    open: 'Ouverte',
    considering: 'À l’étude',
    planned: 'Prévue',
    shipped: 'Disponible',
    declined: 'Refusée',
    in_progress: badgeEmailCopy.fr.inProgress,
  },
  pages: {
    signin: {
      title: 'Connexion à la Communauté OutBrick',
      body: 'Appuyez sur le bouton pour terminer la connexion. Cela fonctionne sur n’importe quel appareil, pas seulement celui sur lequel vous avez demandé le lien.',
      button: 'Me connecter',
      note: 'Cette étape supplémentaire empêche les outils de sécurité des messageries d’utiliser votre lien avant vous.',
    },
    confirmEmail: { title: 'Confirmez votre adresse e-mail', body: 'Appuyez sur le bouton pour confirmer cette adresse pour la Communauté OutBrick.', button: 'Confirmer mon adresse e-mail' },
    unsubscribe: {
      title: (kind) => (kind === 'all' ? 'Ne plus recevoir aucun e-mail de la communauté ?' : `Ne plus recevoir d’e-mails pour ${fr.kindNames[kind]} ?`),
      body: (kind) =>
        kind === 'all'
          ? 'Appuyez sur le bouton et la Communauté OutBrick ne vous écrira plus du tout. Vos notifications vous attendront toujours sur le site, et vous pourrez réactiver les e-mails dans vos réglages.'
          : `Appuyez sur le bouton et nous ne vous écrirons plus pour ${fr.kindNames[kind]}. Vous les verrez toujours sur le site, et vous pourrez les réactiver dans vos réglages.`,
      button: 'Ne plus recevoir ces e-mails',
      keep: 'Continuer à les recevoir',
    },
    unsubscribed: {
      title: 'C’est fait. Plus de ces e-mails.',
      body: (kind) => (kind === 'all' ? 'La Communauté OutBrick ne vous écrira plus.' : `Nous ne vous écrirons plus pour ${fr.kindNames[kind]}.`),
      settings: 'Ouvrir les réglages des e-mails',
    },
    invalid: { title: 'Ce lien a expiré', body: 'Les liens de nos e-mails ne fonctionnent que pendant un temps limité, ou une seule fois. Vous pouvez en demander un nouveau sur la page de connexion.', cta: 'Aller à la page de connexion' },
  },
};

const de: CommunityCopy = {
  eyebrow: 'OutBrick-Community',
  newsEyebrow: 'OutBrick News',
  footer: {
    manage: 'E-Mail-Einstellungen verwalten',
    unsubscribe: (kind) => (kind === 'all' ? 'Keine Community-E-Mails mehr erhalten' : `Keine E-Mails mehr zu ${de.kindNames[kind]}`),
    guidelines: 'Community-Richtlinien',
    privacy: 'Datenschutz',
    why: 'Sie erhalten diese E-Mail, weil Sie Mitglied der OutBrick-Community auf outbrick.site sind. Ihre Adresse wird anderen Mitgliedern nie angezeigt.',
  },
  kindNames: {
    reply: 'Antworten an Sie',
    mention: 'Erwähnungen Ihres Namens',
    watched: 'Themen und Kategorien, denen Sie folgen',
    status: 'Statusänderungen',
    solved: 'als Lösung markierten Antworten',
    release: 'neuen Versionen',
    badge: badgeEmailCopy.de.kindName,
    moderation: 'Moderationshinweisen',
    merged: 'zusammengeführten Themen',
    digest: 'der wöchentlichen Zusammenfassung',
    all: 'allem',
  },
  signin: {
    subject: 'Ihr Anmeldelink für die OutBrick-Community',
    preheader: 'Ein Tipp, und Sie sind drin. Der Link gilt einmal, 20 Minuten lang.',
    heading: 'Hier ist Ihr Anmeldelink.',
    intro: 'Tippen Sie auf die Schaltfläche, um sich bei der OutBrick-Community anzumelden. Kein Passwort nötig: Diese E-Mail ist der Schlüssel.',
    cta: 'Bei der Community anmelden',
    expiry: 'Der Link funktioniert einmal und 20 Minuten lang. Falls die Schaltfläche nicht funktioniert, kopieren Sie diesen Link in Ihren Browser:',
    ignore: 'Sie wollten sich nicht anmelden? Dann können Sie diese E-Mail einfach ignorieren: Ohne den Link kommt niemand hinein, und er läuft von selbst ab.',
    why: 'Sie erhalten diese einmalige E-Mail, weil diese Adresse auf der Anmeldeseite von outbrick.site eingegeben wurde.',
  },
  confirmEmail: {
    subject: 'Bestätigen Sie Ihre E-Mail-Adresse für die OutBrick-Community',
    preheader: 'Ein Tipp zum Bestätigen, dann können Sie Beiträge schreiben.',
    heading: 'Bitte bestätigen Sie Ihre E-Mail-Adresse.',
    introProvider: 'Sie haben sich mit Facebook bei der OutBrick-Community angemeldet, und Facebook teilt uns nicht mit, ob diese Adresse wirklich Ihnen gehört. Tippen Sie auf die Schaltfläche, um sie zu bestätigen, dann können Sie sofort Beiträge schreiben und antworten.',
    introChange: 'Sie möchten diese Adresse für die OutBrick-Community verwenden. Tippen Sie auf die Schaltfläche, um sie zu bestätigen; bis dahin gehen Ihre E-Mails weiter an Ihre bisherige Adresse.',
    cta: 'E-Mail-Adresse bestätigen',
    expiry: 'Die Schaltfläche funktioniert 24 Stunden lang. Falls nicht, kopieren Sie diesen Link in Ihren Browser:',
    ignore: 'Sie haben diese E-Mail nicht erwartet? Ignorieren Sie sie einfach, dann ändert sich nichts.',
    why: 'Sie erhalten diese einmalige E-Mail, weil diese Adresse bei der OutBrick-Community auf outbrick.site angegeben wurde.',
  },
  welcome: {
    subject: 'Willkommen in der OutBrick-Community',
    preheader: 'Fragen stellen, Fehler melden, Ideen teilen oder einfach Hallo sagen. So funktioniert es.',
    heading: (name) => (name ? `Willkommen, ${name}!` : 'Willkommen!'),
    intro: 'In der OutBrick-Community helfen sich Spielerinnen und Spieler gegenseitig, das Team antwortet öffentlich, und jeder Fehler und jede Idee bekommt einen sichtbaren Status, dem Sie folgen können. Bloo freut sich sehr, dass Sie da sind.',
    categoriesTitle: 'Was wohin gehört',
    categories: [
      { title: 'Ankündigungen.', body: 'Jede neue Version, veröffentlicht, sobald sie im App Store ist.' },
      { title: 'Hilfe & Support.', body: 'Fragen der Art „Wie mache ich …?“. Wenn eine Antwort hilft, wird sie für die Nächsten als Lösung markiert.' },
      { title: 'Fehlermeldungen.', body: 'Funktioniert etwas nicht? Ein kurzes Formular fragt nach Gerät, iOS-Version und Schritten, und Sie können die Behebung verfolgen.' },
      { title: 'Ideen & Feedback.', body: 'Schlagen Sie eine Funktion vor oder stimmen Sie für eine, die Sie sich wünschen.' },
      { title: 'Bedienungshilfen.', body: 'VoiceOver, Sprachsteuerung, Schaltersteuerung, größerer Text und Spielen mit Farbsehschwäche. Diese Kategorie verfolgt das Team am genauesten.' },
      { title: 'Zeigen & Erzählen.', body: 'Geschaffte Level, Meilensteine auf der Reise und Screenshots.' },
      { title: 'Allgemeines.', body: 'Alles andere.' },
    ],
    followTitle: 'Folgen Sie dem, was Ihnen wichtig ist',
    follow: 'Wählen Sie bei einem Thema oder einer Kategorie „Folgen“, und wir schreiben Ihnen, sobald etwas Neues erscheint. Über Antworten auf Ihre eigenen Beiträge werden Sie immer informiert, und jede Art von E-Mail lässt sich in Ihren Einstellungen abschalten.',
    accessibilityTitle: 'Gemacht für VoiceOver',
    accessibility: 'Jede Seite hat genau eine Hauptüberschrift, jeder Beitrag eine eigene Überschrift, sodass der Rotor wie ein Inhaltsverzeichnis funktioniert, und der Editor ist ein einfaches Textfeld. Wenn Sie etwas behindert, sagen Sie es uns unter Bedienungshilfen, und wir beheben es.',
    guidelines: 'Seien Sie freundlich, bleiben Sie beim Thema und lassen Sie persönliche Daten aus Ihren Beiträgen heraus.',
    guidelinesLink: 'Community-Richtlinien lesen',
    cta: 'Zur Community',
    why: 'Sie erhalten diese einmalige E-Mail, weil Sie der OutBrick-Community auf outbrick.site beigetreten sind.',
  },
  kinds: {
    reply: { subject: (actor, title) => `${actor} hat in „${title}“ geantwortet`, intro: 'Es gibt eine neue Antwort auf Ihren Beitrag:', cta: 'Antwort lesen' },
    mention: { subject: (actor, title) => `${actor} hat Sie in „${title}“ erwähnt`, intro: 'Sie wurden in diesem Beitrag erwähnt:', cta: 'Beitrag lesen' },
    watched: { subject: (actor, title) => `${actor} hat in „${title}“ geschrieben`, intro: 'Neues in einem Thema oder einer Kategorie, der Sie folgen:', cta: 'Beitrag lesen' },
    status: {
      subject: (title, status) => `„${title}“ hat jetzt den Status ${status}`,
      intro: (status) => `Das Team hat den Status dieses Themas auf ${status} geändert.`,
      note: 'Hinweis des Teams',
      cta: 'Zum Thema',
    },
    solved: { subject: (title) => `Ihre Antwort in „${title}“ wurde als Lösung markiert`, intro: 'Vielen Dank! Ihre Antwort ist jetzt die Lösung, sodass die Nächsten mit derselben Frage sie sofort finden.', cta: 'Ihre Antwort ansehen' },
    merged: { subject: (title) => `Ihr Beitrag steht jetzt in „${title}“`, intro: (from) => `Ein Moderator hat „${from}“ mit diesem Thema zusammengeführt, weil es in beiden um dasselbe ging. Ihr Beitrag steht jetzt hier, zusammen mit allem anderen, was geschrieben wurde.`, cta: 'Thema ansehen' },
    release: { subject: (version) => `OutBrick ${version} ist da`, intro: (version) => `Version ${version} ist gerade im App Store erschienen. Das ist neu:`, cta: 'Versionshinweise lesen' },
    badge: badgeEmailCopy.de.kind,
    moderation: {
      subject: (title) => `Zu Ihrem Beitrag in „${title}“`,
      heading: 'Ein Moderator hat einen Ihrer Beiträge ausgeblendet.',
      intro: (title) => `Ihr Beitrag in „${title}“ ist für andere Mitglieder nicht mehr sichtbar.`,
      reason: 'Grund',
      appeal: 'Wenn Sie das für einen Irrtum halten, antworten Sie auf diese E-Mail, und ein Mensch aus dem Team sieht es sich noch einmal an. An Ihrem Konto hat sich sonst nichts geändert.',
      cta: 'Zum Thema',
    },
  },
  digestLine: {
    reply: (actor, title) => `${actor} hat in „${title}“ geantwortet`,
    mention: (actor, title) => `${actor} hat Sie in „${title}“ erwähnt`,
    watched: (actor, title) => `${actor} hat in „${title}“ geschrieben`,
    status: (_actor, title, status) => `„${title}“ hat jetzt den Status ${status}`,
    solved: (_actor, title) => `Ihre Antwort in „${title}“ wurde als Lösung markiert`,
    merged: (_actor, title) => `Ihr Beitrag steht jetzt in „${title}“`,
    release: (_actor, _title, version) => `OutBrick ${version} ist da`,
    badge: (_actor, _title, badge) => badgeEmailCopy.de.digestLine(badge),
    moderation: (_actor, title) => `Ein Moderator hat Ihren Beitrag in „${title}“ ausgeblendet`,
  },
  digest: {
    subject: (count) => `${count} Neuigkeiten in der OutBrick-Community`,
    preheader: 'Antworten, Erwähnungen und Neuigkeiten seit unserer letzten E-Mail, gesammelt in einer.',
    heading: (count) => `${count} Neuigkeiten seit unserer letzten E-Mail`,
    intro: 'Wir haben sie in einer E-Mail gesammelt, damit Ihr Posteingang ruhig bleibt.',
    open: 'Öffnen',
    more: (count) => (count === 1 ? 'und 1 weitere' : `und ${count} weitere`),
    cta: 'Alle Benachrichtigungen ansehen',
  },
  someone: 'Jemand',
  statuses: {
    new: 'Neu',
    confirmed: 'Bestätigt',
    fixed: 'Behoben',
    released: 'Veröffentlicht',
    not_a_bug: 'Kein Fehler',
    duplicate: 'Duplikat',
    open: 'Offen',
    considering: 'In Prüfung',
    planned: 'Geplant',
    shipped: 'Umgesetzt',
    declined: 'Abgelehnt',
    in_progress: badgeEmailCopy.de.inProgress,
  },
  pages: {
    signin: {
      title: 'Bei der OutBrick-Community anmelden',
      body: 'Tippen Sie auf die Schaltfläche, um die Anmeldung abzuschließen. Das klappt auf jedem Gerät, nicht nur auf dem, auf dem Sie den Link angefordert haben.',
      button: 'Anmelden',
      note: 'Dieser zusätzliche Schritt verhindert, dass Sicherheitsscanner von E-Mail-Diensten Ihren Link vor Ihnen benutzen.',
    },
    confirmEmail: { title: 'E-Mail-Adresse bestätigen', body: 'Tippen Sie auf die Schaltfläche, um diese Adresse für die OutBrick-Community zu bestätigen.', button: 'E-Mail-Adresse bestätigen' },
    unsubscribe: {
      title: (kind) => (kind === 'all' ? 'Keine Community-E-Mails mehr erhalten?' : `Keine E-Mails mehr zu ${de.kindNames[kind]}?`),
      body: (kind) =>
        kind === 'all'
          ? 'Tippen Sie auf die Schaltfläche, und die OutBrick-Community schreibt Ihnen keine E-Mails mehr. Ihre Benachrichtigungen warten weiterhin auf der Website, und Sie können E-Mails in Ihren Einstellungen wieder einschalten.'
          : `Tippen Sie auf die Schaltfläche, und wir schreiben Ihnen keine E-Mails mehr zu ${de.kindNames[kind]}. Auf der Website sehen Sie sie weiterhin, und in Ihren Einstellungen können Sie sie wieder einschalten.`,
      button: 'Diese E-Mails abbestellen',
      keep: 'Diese E-Mails weiter erhalten',
    },
    unsubscribed: {
      title: 'Erledigt. Keine solchen E-Mails mehr.',
      body: (kind) => (kind === 'all' ? 'Die OutBrick-Community schreibt Ihnen keine E-Mails mehr.' : `Wir schreiben Ihnen keine E-Mails mehr zu ${de.kindNames[kind]}.`),
      settings: 'E-Mail-Einstellungen öffnen',
    },
    invalid: { title: 'Dieser Link ist abgelaufen', body: 'Links in unseren E-Mails gelten nur eine Zeit lang oder nur einmal. Auf der Anmeldeseite können Sie einen neuen anfordern.', cta: 'Zur Anmeldeseite' },
  },
};

const es: CommunityCopy = {
  eyebrow: 'Comunidad OutBrick',
  newsEyebrow: 'Noticias de OutBrick',
  footer: {
    manage: 'Gestionar los correos',
    unsubscribe: (kind) => (kind === 'all' ? 'No recibir ningún correo de la comunidad' : `No recibir correos sobre ${es.kindNames[kind]}`),
    guidelines: 'Normas de la comunidad',
    privacy: 'Privacidad',
    why: 'Recibes este correo porque eres miembro de la Comunidad OutBrick en outbrick.site. Tu dirección nunca se muestra a otros miembros.',
  },
  kindNames: {
    reply: 'las respuestas que te escriben',
    mention: 'las menciones de tu nombre',
    watched: 'los temas y categorías que sigues',
    status: 'los cambios de estado',
    solved: 'las respuestas marcadas como solución',
    release: 'las nuevas versiones',
    badge: badgeEmailCopy.es.kindName,
    moderation: 'los avisos de moderación',
    merged: 'los temas fusionados',
    digest: 'el resumen semanal',
    all: 'nada en absoluto',
  },
  signin: {
    subject: 'Tu enlace para entrar en la Comunidad OutBrick',
    preheader: 'Un toque y estás dentro. El enlace sirve una vez, durante 20 minutos.',
    heading: 'Aquí tienes tu enlace para entrar.',
    intro: 'Pulsa el botón para entrar en la Comunidad OutBrick. No hay contraseña que recordar: este correo es la llave.',
    cta: 'Entrar en la comunidad',
    expiry: 'El enlace sirve una sola vez, durante 20 minutos. Si el botón no funciona, copia este enlace en tu navegador:',
    ignore: '¿No has pedido entrar? Puedes ignorar este correo tranquilamente: nadie puede entrar sin el enlace, y caduca solo.',
    why: 'Recibes este correo único porque esta dirección se escribió en la página de acceso de outbrick.site.',
  },
  confirmEmail: {
    subject: 'Confirma tu dirección de correo para la Comunidad OutBrick',
    preheader: 'Un toque para confirmar, y ya podrás publicar.',
    heading: 'Confirma tu dirección de correo, por favor.',
    introProvider: 'Has entrado en la Comunidad OutBrick con Facebook, que no nos dice si esta dirección es realmente tuya. Pulsa el botón para confirmarla y podrás publicar y responder enseguida.',
    introChange: 'Has pedido usar esta dirección para la Comunidad OutBrick. Pulsa el botón para confirmarla; hasta entonces, tus correos seguirán llegando a la dirección anterior.',
    cta: 'Confirmar mi dirección',
    expiry: 'El botón funciona durante 24 horas. Si no funciona, copia este enlace en tu navegador:',
    ignore: '¿No esperabas este correo? Ignóralo y no cambiará nada.',
    why: 'Recibes este correo único porque esta dirección se dio a la Comunidad OutBrick en outbrick.site.',
  },
  welcome: {
    subject: 'Te damos la bienvenida a la Comunidad OutBrick',
    preheader: 'Pregunta, informa de un error, comparte una idea o simplemente saluda. Así funciona.',
    heading: (name) => (name ? `¡Hola, ${name}! Te damos la bienvenida.` : '¡Te damos la bienvenida!'),
    intro: 'La Comunidad OutBrick es el lugar donde los jugadores se ayudan entre sí, el equipo responde a la vista de todos, y cada error y cada idea tiene un estado público que puedes seguir. Bloo está encantado de que estés aquí.',
    categoriesTitle: 'Qué va en cada sitio',
    categories: [
      { title: 'Anuncios.', body: 'Cada nueva versión, publicada en cuanto llega a la App Store.' },
      { title: 'Ayuda.', body: 'Preguntas del tipo «¿Cómo hago…?». Cuando una respuesta funciona, se marca como solución para la siguiente persona.' },
      { title: 'Errores.', body: '¿Algo no funciona? Un breve formulario te pide el dispositivo, la versión de iOS y los pasos, y puedes seguir el arreglo.' },
      { title: 'Ideas y sugerencias.', body: 'Propón una función o vota la que te gustaría ver.' },
      { title: 'Accesibilidad.', body: 'VoiceOver, Control por voz, Control por botón, texto más grande y juego para daltónicos. Es la categoría que el equipo sigue más de cerca.' },
      { title: 'Muestra tus logros.', body: 'Niveles superados, hitos del Viaje y capturas de pantalla.' },
      { title: 'General.', body: 'Todo lo demás.' },
    ],
    followTitle: 'Sigue lo que te importa',
    follow: 'Elige Seguir en cualquier tema o categoría y te escribiremos cuando haya algo nuevo. Siempre te avisaremos de las respuestas a tus propios mensajes, y puedes desactivar cada tipo de correo en tus ajustes.',
    accessibilityTitle: 'Pensada para VoiceOver',
    accessibility: 'Cada página tiene un solo encabezado principal, cada mensaje tiene su propio encabezado para que el rotor funcione como índice, y el editor es un campo de texto sencillo. Si algo te estorba, cuéntanoslo en Accesibilidad y lo arreglaremos.',
    guidelines: 'Sé amable, no te salgas del tema y no publiques datos personales.',
    guidelinesLink: 'Leer las normas de la comunidad',
    cta: 'Ir a la comunidad',
    why: 'Recibes este correo único porque te has unido a la Comunidad OutBrick en outbrick.site.',
  },
  kinds: {
    reply: { subject: (actor, title) => `${actor} ha respondido en «${title}»`, intro: 'Hay una nueva respuesta a tu mensaje:', cta: 'Leer la respuesta' },
    mention: { subject: (actor, title) => `${actor} te ha mencionado en «${title}»`, intro: 'Te han mencionado en este mensaje:', cta: 'Leer el mensaje' },
    watched: { subject: (actor, title) => `${actor} ha publicado en «${title}»`, intro: 'Hay algo nuevo en un tema o categoría que sigues:', cta: 'Leer el mensaje' },
    status: {
      subject: (title, status) => `«${title}» ahora está en estado ${status}`,
      intro: (status) => `El equipo ha cambiado el estado de este tema a ${status}.`,
      note: 'Nota del equipo',
      cta: 'Ver el tema',
    },
    solved: { subject: (title) => `Tu respuesta en «${title}» se ha marcado como solución`, intro: '¡Gracias! Tu respuesta es ahora la solución, así que la próxima persona con la misma pregunta la encontrará enseguida.', cta: 'Ver tu respuesta' },
    merged: { subject: (title) => `Tu mensaje se ha movido a «${title}»`, intro: (from) => `Un moderador ha fusionado «${from}» con este tema porque los dos trataban de lo mismo. Tu mensaje está ahora aquí, junto con todo lo demás que se dijo.`, cta: 'Ver el tema' },
    release: { subject: (version) => `Ya está aquí OutBrick ${version}`, intro: (version) => `La versión ${version} acaba de llegar a la App Store. Estas son las novedades:`, cta: 'Leer las notas de la versión' },
    badge: badgeEmailCopy.es.kind,
    moderation: {
      subject: (title) => `Sobre tu mensaje en «${title}»`,
      heading: 'Un moderador ha ocultado uno de tus mensajes.',
      intro: (title) => `Tu mensaje en «${title}» ya no es visible para los demás miembros.`,
      reason: 'Motivo',
      appeal: 'Si crees que es un error, responde a este correo y una persona del equipo volverá a revisarlo. No ha cambiado nada más en tu cuenta.',
      cta: 'Ver el tema',
    },
  },
  digestLine: {
    reply: (actor, title) => `${actor} ha respondido en «${title}»`,
    mention: (actor, title) => `${actor} te ha mencionado en «${title}»`,
    watched: (actor, title) => `${actor} ha publicado en «${title}»`,
    status: (_actor, title, status) => `«${title}» ahora está en estado ${status}`,
    solved: (_actor, title) => `Tu respuesta en «${title}» se ha marcado como solución`,
    merged: (_actor, title) => `Tu mensaje se ha movido a «${title}»`,
    release: (_actor, _title, version) => `Ya está aquí OutBrick ${version}`,
    badge: (_actor, _title, badge) => badgeEmailCopy.es.digestLine(badge),
    moderation: (_actor, title) => `Un moderador ha ocultado tu mensaje en «${title}»`,
  },
  digest: {
    subject: (count) => `${count} novedades en la Comunidad OutBrick`,
    preheader: 'Respuestas, menciones y novedades desde nuestro último correo, todo en uno.',
    heading: (count) => `${count} novedades desde nuestro último correo`,
    intro: 'Las hemos reunido en un solo correo para que tu bandeja de entrada esté tranquila.',
    open: 'Abrir',
    more: (count) => (count === 1 ? 'y 1 más' : `y ${count} más`),
    cta: 'Ver todas las notificaciones',
  },
  someone: 'Alguien',
  statuses: {
    new: 'Nuevo',
    confirmed: 'Confirmado',
    fixed: 'Corregido',
    released: 'Publicado',
    not_a_bug: 'No es un error',
    duplicate: 'Duplicado',
    open: 'Abierta',
    considering: 'En estudio',
    planned: 'Prevista',
    shipped: 'Disponible',
    declined: 'Descartada',
    in_progress: badgeEmailCopy.es.inProgress,
  },
  pages: {
    signin: {
      title: 'Entrar en la Comunidad OutBrick',
      body: 'Pulsa el botón para terminar de entrar. Funciona en cualquier dispositivo, no solo en el que pediste el enlace.',
      button: 'Entrar',
      note: 'Este paso de más impide que los analizadores de seguridad del correo usen tu enlace antes que tú.',
    },
    confirmEmail: { title: 'Confirma tu dirección de correo', body: 'Pulsa el botón para confirmar esta dirección para la Comunidad OutBrick.', button: 'Confirmar mi dirección' },
    unsubscribe: {
      title: (kind) => (kind === 'all' ? '¿No recibir ningún correo de la comunidad?' : `¿No recibir más correos sobre ${es.kindNames[kind]}?`),
      body: (kind) =>
        kind === 'all'
          ? 'Pulsa el botón y la Comunidad OutBrick no te enviará ningún correo. Tus notificaciones te seguirán esperando en la web, y puedes volver a activar los correos en tus ajustes.'
          : `Pulsa el botón y dejaremos de escribirte sobre ${es.kindNames[kind]}. Las seguirás viendo en la web, y puedes volver a activarlas en tus ajustes.`,
      button: 'No recibir estos correos',
      keep: 'Seguir recibiéndolos',
    },
    unsubscribed: {
      title: 'Hecho. No recibirás más correos de ese tipo.',
      body: (kind) => (kind === 'all' ? 'La Comunidad OutBrick ya no te enviará correos.' : `Ya no te escribiremos sobre ${es.kindNames[kind]}.`),
      settings: 'Abrir los ajustes de correo',
    },
    invalid: { title: 'Este enlace ha caducado', body: 'Los enlaces de nuestros correos solo funcionan durante un tiempo limitado, o una sola vez. Puedes pedir uno nuevo en la página de acceso.', cta: 'Ir a la página de acceso' },
  },
};

const ja: CommunityCopy = {
  eyebrow: 'OutBrickコミュニティ',
  newsEyebrow: 'OutBrickニュース',
  footer: {
    manage: 'メール設定を管理',
    unsubscribe: (kind) => (kind === 'all' ? 'コミュニティのメールをすべて停止' : `${ja.kindNames[kind]}のメールを停止`),
    guidelines: 'コミュニティガイドライン',
    privacy: 'プライバシー',
    why: 'このメールは、outbrick.siteのOutBrickコミュニティのメンバーの方にお送りしています。メールアドレスがほかのメンバーに表示されることはありません。',
  },
  kindNames: {
    reply: 'あなたへの返信',
    mention: 'あなたへのメンション',
    watched: 'フォロー中のスレッドとカテゴリ',
    status: 'ステータスの変更',
    solved: '解決済みになった回答',
    release: '新しいバージョン',
    badge: badgeEmailCopy.ja.kindName,
    moderation: 'モデレーションのお知らせ',
    merged: 'スレッドの統合',
    digest: '週刊ダイジェスト',
    all: 'すべて',
  },
  signin: {
    subject: 'OutBrickコミュニティのサインインリンク',
    preheader: 'ワンタップでサインインできます。リンクは20分間、1回だけ使えます。',
    heading: 'サインインリンクをお届けします。',
    intro: 'ボタンを押すと、OutBrickコミュニティにサインインできます。パスワードを覚える必要はありません。このメールが鍵になります。',
    cta: 'コミュニティにサインイン',
    expiry: 'リンクは20分間、1回だけ使えます。ボタンが動かない場合は、次のリンクをブラウザにコピーしてください：',
    ignore: 'サインインした覚えがない場合は、このメールを無視してください。リンクがなければ誰もサインインできず、リンクは自動的に無効になります。',
    why: 'このメールは、outbrick.siteのサインインページでこのアドレスが入力されたため、一度だけお送りしています。',
  },
  confirmEmail: {
    subject: 'OutBrickコミュニティのメールアドレスを確認してください',
    preheader: 'ワンタップで確認すると、投稿できるようになります。',
    heading: 'メールアドレスの確認をお願いします。',
    introProvider: 'FacebookでOutBrickコミュニティにサインインされましたが、Facebookからはこのアドレスがご本人のものかどうかがわかりません。ボタンを押して確認すると、すぐに投稿や返信ができるようになります。',
    introChange: 'OutBrickコミュニティでこのアドレスを使うよう申請がありました。ボタンを押して確認してください。確認が済むまでは、これまでのアドレスにメールが届きます。',
    cta: 'メールアドレスを確認する',
    expiry: 'ボタンは24時間有効です。うまく動かない場合は、次のリンクをブラウザにコピーしてください：',
    ignore: '心当たりがない場合は、このメールを無視してください。何も変わりません。',
    why: 'このメールは、outbrick.siteのOutBrickコミュニティにこのアドレスが登録されたため、一度だけお送りしています。',
  },
  welcome: {
    subject: 'OutBrickコミュニティへようこそ',
    preheader: '質問、不具合の報告、アイデアの共有、あいさつだけでも大歓迎です。使い方をご案内します。',
    heading: (name) => (name ? `${name}さん、ようこそ！` : 'ようこそ！'),
    intro: 'OutBrickコミュニティは、プレイヤー同士が助け合い、チームがオープンに答え、不具合やアイデアごとに公開のステータスを追いかけられる場所です。Blooもあなたを大歓迎しています。',
    categoriesTitle: '投稿先の目安',
    categories: [
      { title: 'お知らせ。', body: '新しいバージョンを、App Storeに登場した時点でお知らせします。' },
      { title: 'ヘルプ・サポート。', body: '「どうすれば…？」という質問はこちら。役に立った回答は、次の人のために「解決済み」になります。' },
      { title: '不具合の報告。', body: 'うまく動かないときは、短いフォームでデバイス、iOSのバージョン、手順をお知らせください。修正の進み具合も追いかけられます。' },
      { title: 'アイデア・ご意見。', body: 'ほしい機能を提案したり、見てみたい提案に投票したりできます。' },
      { title: 'アクセシビリティ。', body: 'VoiceOver、音声コントロール、スイッチコントロール、さらに大きな文字、色覚に配慮したプレイについて。チームがいちばん注意深く見ているカテゴリです。' },
      { title: 'みんなの記録。', body: 'クリアした盤面、Journeyの節目、スクリーンショット。' },
      { title: '雑談。', body: 'そのほかの話題はこちら。' },
    ],
    followTitle: '気になる話題をフォロー',
    follow: 'スレッドやカテゴリで「フォロー」を選ぶと、新しい投稿があったときにメールでお知らせします。ご自身の投稿への返信は常にお知らせし、メールの種類ごとに設定でオフにできます。',
    accessibilityTitle: 'VoiceOverを前提に設計',
    accessibility: 'どのページにも大見出しはひとつだけ。投稿ごとに見出しがあるので、ローターが目次として使えます。入力欄はシンプルなテキストフィールドです。使いにくいところがあれば、アクセシビリティのカテゴリで教えてください。すぐに直します。',
    guidelines: '思いやりを忘れず、話題に沿って、個人情報は投稿しないでください。',
    guidelinesLink: 'コミュニティガイドラインを読む',
    cta: 'コミュニティを見る',
    why: 'このメールは、outbrick.siteのOutBrickコミュニティに参加されたため、一度だけお送りしています。',
  },
  kinds: {
    reply: { subject: (actor, title) => `${actor}さんが「${title}」で返信しました`, intro: 'あなたの投稿に新しい返信があります：', cta: '返信を読む' },
    mention: { subject: (actor, title) => `${actor}さんが「${title}」であなたをメンションしました`, intro: 'この投稿であなたがメンションされました：', cta: '投稿を読む' },
    watched: { subject: (actor, title) => `${actor}さんが「${title}」に投稿しました`, intro: 'フォロー中のスレッドまたはカテゴリに新しい投稿があります：', cta: '投稿を読む' },
    status: {
      subject: (title, status) => `「${title}」のステータスが「${status}」になりました`,
      intro: (status) => `チームがこのスレッドのステータスを「${status}」に変更しました。`,
      note: 'チームからのメモ',
      cta: 'スレッドを見る',
    },
    solved: { subject: (title) => `「${title}」でのあなたの回答が解決済みになりました`, intro: 'ありがとうございます。あなたの回答が解決策になったので、同じ疑問を持つ次の人もすぐに見つけられます。', cta: '回答を見る' },
    merged: { subject: (title) => `あなたの投稿は「${title}」に移動しました`, intro: (from) => `同じ話題だったため、モデレーターが「${from}」をこのスレッドに統合しました。あなたの投稿は、ほかのやり取りと一緒にここにあります。`, cta: 'スレッドを見る' },
    release: { subject: (version) => `OutBrick ${version}が登場しました`, intro: (version) => `バージョン${version}がApp Storeに登場しました。新しくなった点はこちらです：`, cta: 'リリースノートを読む' },
    badge: badgeEmailCopy.ja.kind,
    moderation: {
      subject: (title) => `「${title}」でのあなたの投稿について`,
      heading: 'モデレーターがあなたの投稿を非表示にしました。',
      intro: (title) => `「${title}」でのあなたの投稿は、ほかのメンバーには表示されなくなりました。`,
      reason: '理由',
      appeal: '誤りだと思われる場合は、このメールに返信してください。チームの担当者があらためて確認します。アカウントについては、ほかに何も変わっていません。',
      cta: 'スレッドを見る',
    },
  },
  digestLine: {
    reply: (actor, title) => `${actor}さんが「${title}」で返信しました`,
    mention: (actor, title) => `${actor}さんが「${title}」であなたをメンションしました`,
    watched: (actor, title) => `${actor}さんが「${title}」に投稿しました`,
    status: (_actor, title, status) => `「${title}」のステータスが「${status}」になりました`,
    solved: (_actor, title) => `「${title}」でのあなたの回答が解決済みになりました`,
    merged: (_actor, title) => `あなたの投稿は「${title}」に移動しました`,
    release: (_actor, _title, version) => `OutBrick ${version}が登場しました`,
    badge: (_actor, _title, badge) => badgeEmailCopy.ja.digestLine(badge),
    moderation: (_actor, title) => `モデレーターが「${title}」でのあなたの投稿を非表示にしました`,
  },
  digest: {
    subject: (count) => `OutBrickコミュニティの新着${count}件`,
    preheader: '前回のメール以降の返信、メンション、更新をひとつにまとめました。',
    heading: (count) => `前回のメール以降の新着が${count}件あります`,
    intro: '受信トレイが散らからないよう、ひとつのメールにまとめました。',
    open: '開く',
    more: (count) => `ほか${count}件`,
    cta: 'すべての通知を見る',
  },
  someone: 'どなたか',
  statuses: {
    new: '新規',
    confirmed: '確認済み',
    fixed: '修正済み',
    released: 'リリース済み',
    not_a_bug: '不具合ではありません',
    duplicate: '重複',
    open: '受付中',
    considering: '検討中',
    planned: '予定あり',
    shipped: '実装済み',
    declined: '見送り',
    in_progress: badgeEmailCopy.ja.inProgress,
  },
  pages: {
    signin: {
      title: 'OutBrickコミュニティにサインイン',
      body: 'ボタンを押すとサインインが完了します。リンクを申請したデバイス以外でも使えます。',
      button: 'サインイン',
      note: 'このひと手間で、メールのセキュリティスキャナーがあなたより先にリンクを使ってしまうのを防いでいます。',
    },
    confirmEmail: { title: 'メールアドレスの確認', body: 'ボタンを押して、このアドレスをOutBrickコミュニティ用として確認してください。', button: 'メールアドレスを確認する' },
    unsubscribe: {
      title: (kind) => (kind === 'all' ? 'コミュニティのメールをすべて停止しますか？' : `${ja.kindNames[kind]}のメールを停止しますか？`),
      body: (kind) =>
        kind === 'all'
          ? 'ボタンを押すと、OutBrickコミュニティからのメールはすべて届かなくなります。通知はサイトで引き続き確認でき、設定からいつでもメールをオンに戻せます。'
          : `ボタンを押すと、${ja.kindNames[kind]}についてのメールが届かなくなります。サイトでは引き続き確認でき、設定からいつでもオンに戻せます。`,
      button: 'このメールを停止する',
      keep: 'このまま受け取る',
    },
    unsubscribed: {
      title: '完了しました。このメールはもう届きません。',
      body: (kind) => (kind === 'all' ? 'OutBrickコミュニティからのメールは今後届きません。' : `${ja.kindNames[kind]}についてのメールは今後届きません。`),
      settings: 'メール設定を開く',
    },
    invalid: { title: 'このリンクは有効期限が切れています', body: 'メール内のリンクは、一定時間だけ、または1回だけ使えます。サインインページから新しいリンクを申請できます。', cta: 'サインインページへ' },
  },
};

export const communityCopy: Record<EmailLocale, CommunityCopy> = { en, fr, de, es, ja };
