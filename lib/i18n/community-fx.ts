/**
 * The words of the community's feature board, its interactive parts and phase 2: the roadmap,
 * reactions, polls, live updates, badges, the leaderboard, bookmarks, mentions, image uploads,
 * translation, passkeys and the app's pre-filled bug report. Kept apart from community.ts so
 * each file stays readable; same rules: written translations, the site's tone, British English.
 */

import type { Locale } from './locales.ts';
import type { BadgeKey, ReactionKind, LeaderboardKind, LeaderboardPeriod, RoadmapStatus } from '../community/contract.ts';

type N = (n: number, formatted: string) => string;

export type CommunityFxCopy = {
  nav: { roadmap: string; leaderboard: string; bookmarks: string };
  status: { in_progress: string; shippedIn: (version: string) => string };
  sorts: { trending: string; hot: string };
  board: {
    eyebrow: string;
    lede: string;
    suggest: string;
    roadmapLink: string;
    previewHeading: string;
    columns: Record<RoadmapStatus, string>;
    columnNotes: Record<RoadmapStatus, string>;
    columnEmpty: string;
    more: (n: string) => string;
    roadmapTitle: string;
    roadmapLede: string;
  };
  similar: { heading: string; found: N; none: string; checking: string };
  newIdea: { titleLabel: string; titleHint: string; bodyLabel: string };
  reactions: { group: (n: string) => string; names: Record<ReactionKind, string>; signIn: string };
  poll: {
    add: string;
    remove: string;
    legend: string;
    question: string;
    option: (n: string) => string;
    addOption: string;
    removeOption: (n: string) => string;
    multiple: string;
    closes: string;
    closesHint: string;
    vote: string;
    change: string;
    withdraw: string;
    results: string;
    optionResult: (label: string, votes: string, percent: string) => string;
    voters: N;
    closedOn: (when: string) => string;
    closesOn: (when: string) => string;
    closed: string;
    signIn: string;
    voted: string;
    withdrawn: string;
    chooseOne: string;
    mine: string;
    errors: Record<'poll_closed' | 'poll_has_votes', string>;
    fieldCodes: Record<'too_few' | 'too_many' | 'duplicate', string>;
  };
  live: { newReplies: N; show: string; announce: N };
  badges: { heading: string; none: string; names: Record<BadgeKey, string>; descriptions: Record<BadgeKey, string>; level: (name: string, level: string) => string; years: (name: string, years: string) => string; granted: string; earned: (when: string) => string };
  profile: { stats: string; posts: string; threads: string; solved: string; reactionsReceived: string; ideasShipped: string; bugsConfirmed: string; recentPosts: string; noPosts: string };
  leaderboard: {
    title: string;
    lede: string;
    period: string;
    periods: Record<LeaderboardPeriod, string>;
    kind: string;
    kinds: Record<LeaderboardKind, string>;
    show: string;
    rank: string;
    member: string;
    score: string;
    details: string;
    detail: Record<LeaderboardKind, (d: Record<string, string>) => string>;
    team: string;
    teamNote: string;
    empty: string;
    caption: (kind: string, period: string) => string;
  };
  bookmarks: { title: string; lede: string; add: string; added: string; label: (n: string) => string; removeLabel: (n: string) => string; none: string; saved: string; removed: string; bookmarkedOn: (when: string) => string };
  mentions: { listLabel: string; instructions: string; none: string; found: N };
  upload: {
    button: string;
    legend: string;
    file: string;
    fileHint: string;
    alt: string;
    altHint: string;
    insert: string;
    cancel: string;
    preparing: string;
    uploading: string;
    inserted: string;
    altMissing: string;
    fileMissing: string;
    errors: Record<'missing' | 'too_large' | 'too_many_pixels' | 'unsupported_type' | 'heic_unsupported' | 'bad_image' | 'unavailable', string>;
    problems: Record<'image_needs_alt' | 'upload_not_found', string>;
  };
  translate: { button: (language: string) => string; working: string; label: (language: string) => string; hide: string; failed: string };
  passkey: {
    signIn: string;
    signInNote: string;
    unsupported: string;
    cancelled: string;
    unknown: string;
    heading: string;
    lede: string;
    add: string;
    nickname: string;
    nicknameHint: string;
    none: string;
    added: (when: string) => string;
    lastUsed: (when: string) => string;
    neverUsed: string;
    synced: string;
    remove: (name: string) => string;
    addedNow: string;
    removedNow: string;
  };
  settings: { digest: [string, string]; badge: [string, string]; merged: [string, string] };
  notifications: { badge: (badge: string) => string; merged: (from: string, thread: string) => string };
  merged: string;
  deepLink: { notice: string; level: string; levelHint: string };
  errors: Record<string, string>;
};

const en: CommunityFxCopy = {
  nav: { roadmap: 'Roadmap', leaderboard: 'Leaderboard', bookmarks: 'Bookmarks' },
  status: { in_progress: 'In progress', shippedIn: (v) => `Shipped in ${v}` },
  sorts: { trending: 'Trending', hot: 'Hot' },
  board: {
    eyebrow: 'Feature board',
    lede: 'What should OutBrick do next? Suggest a feature, upvote the ones you want, and follow them from idea to release. The team reads every one.',
    suggest: 'Suggest a feature',
    roadmapLink: 'See the whole roadmap',
    previewHeading: 'On the roadmap',
    columns: { considering: 'Under consideration', planned: 'Planned', in_progress: 'In progress', shipped: 'Shipped' },
    columnNotes: { considering: 'The team is weighing these up.', planned: 'Coming, in roughly this order.', in_progress: 'Being built right now.', shipped: 'Released in the last 90 days.' },
    columnEmpty: 'Nothing here yet.',
    more: (n) => `${n} more`,
    roadmapTitle: 'Roadmap',
    roadmapLede: 'Every idea the team is considering, has planned, is building or has shipped, with the votes that put it there.',
  },
  similar: { heading: 'Similar ideas already posted', found: (n, f) => (n === 1 ? '1 similar idea already posted. Vote for it instead of posting again?' : `${f} similar ideas already posted. Vote for one instead of posting again?`), none: 'No similar ideas yet.', checking: 'Looking for similar ideas…' },
  newIdea: { titleLabel: 'Your idea, in one sentence', titleHint: 'For example “Let me replay a cleared level without spending a life”. 4 to 140 characters.', bodyLabel: 'Why it would help' },
  reactions: { group: (n) => `Reactions to post ${n}`, names: { like: 'Like', love: 'Love', celebrate: 'Celebrate', funny: 'Funny', thanks: 'Thanks', insightful: 'Insightful' }, signIn: 'Sign in to react' },
  poll: {
    add: 'Add a poll',
    remove: 'Remove the poll',
    legend: 'Poll',
    question: 'Question',
    option: (n) => `Option ${n}`,
    addOption: 'Add an option',
    removeOption: (n) => `Remove option ${n}`,
    multiple: 'People can choose more than one option',
    closes: 'Closes on',
    closesHint: 'Leave empty to keep the poll open. At most a year from today.',
    vote: 'Vote',
    change: 'Change my vote',
    withdraw: 'Withdraw my vote',
    results: 'Results',
    optionResult: (label, votes, percent) => `${label}: ${votes}, ${percent}`,
    voters: (n, f) => (n === 1 ? '1 person voted' : `${f} people voted`),
    closedOn: (when) => `Closed ${when}`,
    closesOn: (when) => `Closes ${when}`,
    closed: 'This poll is closed.',
    signIn: 'Sign in to vote in this poll.',
    voted: 'Your vote is counted.',
    withdrawn: 'Your vote is withdrawn.',
    chooseOne: 'Choose an option first.',
    mine: 'Your choice',
    errors: { poll_closed: 'This poll has closed, so it takes no more votes.', poll_has_votes: 'People have already voted, so the poll can no longer be changed.' },
    fieldCodes: { too_few: 'Give at least two options', too_many: 'Give at most eight options', duplicate: 'Each option must be different' },
  },
  live: { newReplies: (n, f) => (n === 1 ? '1 new reply' : `${f} new replies`), show: 'Show', announce: (n, f) => (n === 1 ? '1 new reply. Use the Show button after the posts to read it.' : `${f} new replies. Use the Show button after the posts to read them.`) },
  badges: {
    heading: 'Badges',
    none: 'No badges yet.',
    names: { first_post: 'First post', helpful: 'Helpful', bug_hunter: 'Bug hunter', idea_maker: 'Idea maker', shipped: 'Shipped', welcomer: 'Welcomer', beta_tester: 'Beta tester', accessibility_champion: 'Accessibility champion', anniversary: 'Anniversary', popular_post: 'Popular post' },
    descriptions: {
      first_post: 'Posted in the community for the first time.',
      helpful: 'Answers marked as the solution: 1, 10 and 50.',
      bug_hunter: 'Reported a bug the OutBrick team confirmed.',
      idea_maker: 'Suggested an idea that the team planned.',
      shipped: 'Suggested an idea that shipped in OutBrick.',
      welcomer: 'Replied to ten newcomers’ first threads.',
      beta_tester: 'Tested OutBrick before release.',
      accessibility_champion: 'Made OutBrick better for players who use assistive technology.',
      anniversary: 'A member for a year or more.',
      popular_post: 'Wrote a post with 25 reactions.',
    },
    level: (name, level) => `${name} (${level})`,
    years: (name, years) => `${name}: ${years} years`,
    granted: 'Awarded by the team',
    earned: (when) => `Earned ${when}`,
  },
  profile: { stats: 'In numbers', posts: 'Posts', threads: 'Threads', solved: 'Solutions', reactionsReceived: 'Reactions received', ideasShipped: 'Ideas shipped', bugsConfirmed: 'Bugs confirmed', recentPosts: 'Recent posts', noPosts: 'No posts yet.' },
  leaderboard: {
    title: 'Leaderboard',
    lede: 'The members who help most: answers that solved a question, ideas people voted for, and bugs the team confirmed.',
    period: 'Period',
    periods: { week: 'This week', month: 'This month', all: 'All time' },
    kind: 'Ranked by',
    kinds: { helpers: 'Helpers', ideas: 'Ideas', bugs: 'Bug hunters' },
    show: 'Show',
    rank: 'Rank',
    member: 'Member',
    score: 'Score',
    details: 'Details',
    detail: {
      helpers: (d) => `${d.solved ?? '0'} solved, ${d.reactions ?? '0'} reactions`,
      ideas: (d) => `${d.votes ?? '0'} votes on their ideas`,
      bugs: (d) => `${d.confirmed ?? '0'} bugs confirmed`,
    },
    team: 'The OutBrick team',
    teamNote: 'The team is listed apart, so members always top the board.',
    empty: 'Nobody here yet for this period.',
    caption: (kind, period) => `${kind}, ${period.toLowerCase()}`,
  },
  bookmarks: {
    title: 'Bookmarks',
    lede: 'Posts you saved for later. Only you can see them.',
    add: 'Bookmark',
    added: 'Bookmarked',
    label: (n) => `Bookmark post ${n}`,
    removeLabel: (n) => `Remove the bookmark on post ${n}`,
    none: 'No bookmarks yet. Use the Bookmark button on any post to keep it here.',
    saved: 'Bookmarked.',
    removed: 'Bookmark removed.',
    bookmarkedOn: (when) => `Saved ${when}`,
  },
  mentions: { listLabel: 'Members to mention', instructions: 'Members matching what you typed are listed. Use the up and down arrows to choose, Enter to insert, Escape to close.', none: 'No member with that name.', found: (n, f) => (n === 1 ? '1 member found' : `${f} members found`) },
  upload: {
    button: 'Add an image',
    legend: 'Add an image',
    file: 'Image',
    fileHint: 'A JPEG, PNG or WebP photo or screenshot. Large photos are made smaller on your device first.',
    alt: 'Describe the image',
    altHint: 'Required. People who use VoiceOver hear this instead of seeing the image, so say what matters in it: for example “Level 214 with the red brick one move from the gate”.',
    insert: 'Insert image',
    cancel: 'Cancel',
    preparing: 'Preparing the image…',
    uploading: 'Uploading…',
    inserted: 'The image is in your post, with its description.',
    altMissing: 'Describe the image before inserting it',
    fileMissing: 'Choose an image',
    errors: {
      missing: 'Choose an image to upload.',
      too_large: 'That image is too large even after shrinking. Try a smaller one.',
      too_many_pixels: 'That image is too big: at most 4096 pixels on each side.',
      unsupported_type: 'That kind of file cannot be posted. Use JPEG, PNG or WebP.',
      heic_unsupported: 'HEIC photos cannot be posted yet. Take a screenshot of it, or export it as JPEG.',
      bad_image: 'That image could not be read. It may be damaged.',
      unavailable: 'Image uploads are switched off right now.',
    },
    problems: { image_needs_alt: 'Every image needs a description before you can post.', upload_not_found: 'One of the images is no longer available. Remove it and add it again.' },
  },
  translate: { button: (language) => `Translate to ${language}`, working: 'Translating…', label: (language) => `Machine translation from ${language}`, hide: 'Hide translation', failed: 'The translation didn’t work this time. Please try again in a minute.' },
  passkey: {
    signIn: 'Sign in with a passkey',
    signInNote: 'Use Face ID, Touch ID or your device’s screen lock. You can add a passkey in Settings after signing in another way.',
    unsupported: 'This browser cannot use passkeys. Use another way to sign in.',
    cancelled: 'The passkey request was cancelled. Nothing changed.',
    unknown: 'That passkey is not linked to an account here. Sign in another way, then add it in Settings.',
    heading: 'Passkeys',
    lede: 'Sign in with Face ID, Touch ID or your device’s screen lock instead of an email link.',
    add: 'Add a passkey',
    nickname: 'Name for this passkey',
    nicknameHint: 'Optional, so you can tell them apart, for example “My iPhone”.',
    none: 'No passkeys yet.',
    added: (when) => `added ${when}`,
    lastUsed: (when) => `last used ${when}`,
    neverUsed: 'not used yet',
    synced: 'synced across your devices',
    remove: (name) => `Remove passkey ‘${name}’`,
    addedNow: 'Passkey added. Next time, sign in with it.',
    removedNow: 'Passkey removed.',
  },
  settings: {
    digest: ['Weekly digest', 'A Monday email with the week’s best threads. Off unless you switch it on.'],
    badge: ['Badges', 'You earn a badge.'],
    merged: ['Merged threads', 'A moderator moves your post into another thread.'],
  },
  notifications: { badge: (badge) => `You earned the ${badge} badge`, merged: (from, thread) => `Your post in “${from}” is now in “${thread}”` },
  merged: 'This thread was merged into another one. You are reading that thread now.',
  deepLink: { notice: 'Filled in from the app. Check every field before posting.', level: 'Level', levelHint: 'Optional: the level number, if it happened on a board.' },
  errors: { too_many: 'That is too many at once. Wait a little and try again.', translate_failed: 'The translation didn’t work this time. Please try again in a minute.', unknown_credential: 'That passkey is not linked to an account here.', poll_closed: 'This poll has closed.', poll_has_votes: 'People have already voted, so the poll can no longer be changed.' },
};

const fr: CommunityFxCopy = {
  nav: { roadmap: 'Feuille de route', leaderboard: 'Classement', bookmarks: 'Signets' },
  status: { in_progress: 'En cours', shippedIn: (v) => `Disponible dans la ${v}` },
  sorts: { trending: 'Tendances', hot: 'Populaires' },
  board: {
    eyebrow: 'Boîte à idées',
    lede: 'Que devrait faire OutBrick ensuite ? Proposez une fonctionnalité, votez pour celles que vous voulez et suivez-les de l’idée à la sortie. L’équipe les lit toutes.',
    suggest: 'Proposer une fonctionnalité',
    roadmapLink: 'Voir toute la feuille de route',
    previewHeading: 'Sur la feuille de route',
    columns: { considering: 'À l’étude', planned: 'Prévues', in_progress: 'En cours', shipped: 'Disponibles' },
    columnNotes: { considering: 'L’équipe les examine.', planned: 'À venir, à peu près dans cet ordre.', in_progress: 'En cours de développement.', shipped: 'Sorties ces 90 derniers jours.' },
    columnEmpty: 'Rien pour l’instant.',
    more: (n) => `${n} de plus`,
    roadmapTitle: 'Feuille de route',
    roadmapLede: 'Toutes les idées que l’équipe étudie, a prévues, développe ou a publiées, avec les votes qui les y ont menées.',
  },
  similar: { heading: 'Idées semblables déjà proposées', found: (n, f) => (n < 2 ? '1 idée semblable existe déjà. Pourquoi ne pas voter pour elle ?' : `${f} idées semblables existent déjà. Pourquoi ne pas voter pour l’une d’elles ?`), none: 'Aucune idée semblable pour l’instant.', checking: 'Recherche d’idées semblables…' },
  newIdea: { titleLabel: 'Votre idée, en une phrase', titleHint: 'Par exemple « Rejouer un niveau terminé sans dépenser de vie ». De 4 à 140 caractères.', bodyLabel: 'En quoi cela aiderait' },
  reactions: { group: (n) => `Réactions au message ${n}`, names: { like: 'J’aime', love: 'J’adore', celebrate: 'Bravo', funny: 'Drôle', thanks: 'Merci', insightful: 'Éclairant' }, signIn: 'Se connecter pour réagir' },
  poll: {
    add: 'Ajouter un sondage',
    remove: 'Retirer le sondage',
    legend: 'Sondage',
    question: 'Question',
    option: (n) => `Option ${n}`,
    addOption: 'Ajouter une option',
    removeOption: (n) => `Retirer l’option ${n}`,
    multiple: 'On peut choisir plusieurs options',
    closes: 'Se termine le',
    closesHint: 'Laissez vide pour garder le sondage ouvert. Un an au plus à partir d’aujourd’hui.',
    vote: 'Voter',
    change: 'Changer mon vote',
    withdraw: 'Retirer mon vote',
    results: 'Résultats',
    optionResult: (label, votes, percent) => `${label} : ${votes}, ${percent}`,
    voters: (n, f) => (n < 2 ? `${f} personne a voté` : `${f} personnes ont voté`),
    closedOn: (when) => `Terminé ${when}`,
    closesOn: (when) => `Se termine ${when}`,
    closed: 'Ce sondage est terminé.',
    signIn: 'Connectez-vous pour voter.',
    voted: 'Votre vote est enregistré.',
    withdrawn: 'Votre vote est retiré.',
    chooseOne: 'Choisissez d’abord une option.',
    mine: 'Votre choix',
    errors: { poll_closed: 'Ce sondage est terminé : il n’accepte plus de votes.', poll_has_votes: 'Des personnes ont déjà voté : le sondage ne peut plus être modifié.' },
    fieldCodes: { too_few: 'Proposez au moins deux options', too_many: 'Proposez au plus huit options', duplicate: 'Chaque option doit être différente' },
  },
  live: { newReplies: (n, f) => (n < 2 ? `${f} nouvelle réponse` : `${f} nouvelles réponses`), show: 'Afficher', announce: (n, f) => (n < 2 ? `${f} nouvelle réponse. Le bouton Afficher, après les messages, permet de la lire.` : `${f} nouvelles réponses. Le bouton Afficher, après les messages, permet de les lire.`) },
  badges: {
    heading: 'Badges',
    none: 'Aucun badge pour l’instant.',
    names: { first_post: 'Premier message', helpful: 'Serviable', bug_hunter: 'Chasseur de bugs', idea_maker: 'Force de proposition', shipped: 'Idée réalisée', welcomer: 'Accueillant', beta_tester: 'Bêta-testeur', accessibility_champion: 'Champion de l’accessibilité', anniversary: 'Anniversaire', popular_post: 'Message populaire' },
    descriptions: {
      first_post: 'A publié dans la communauté pour la première fois.',
      helpful: 'Réponses marquées comme solution : 1, 10 et 50.',
      bug_hunter: 'A signalé un bug confirmé par l’équipe OutBrick.',
      idea_maker: 'A proposé une idée que l’équipe a prévue.',
      shipped: 'A proposé une idée sortie dans OutBrick.',
      welcomer: 'A répondu aux premières discussions de dix nouveaux membres.',
      beta_tester: 'A testé OutBrick avant sa sortie.',
      accessibility_champion: 'A rendu OutBrick meilleur pour les personnes qui utilisent une technologie d’assistance.',
      anniversary: 'Membre depuis un an ou plus.',
      popular_post: 'A écrit un message qui a reçu 25 réactions.',
    },
    level: (name, level) => `${name} (${level})`,
    years: (name, years) => `${name} : ${years} ans`,
    granted: 'Décerné par l’équipe',
    earned: (when) => `Obtenu ${when}`,
  },
  profile: { stats: 'En chiffres', posts: 'Messages', threads: 'Discussions', solved: 'Solutions', reactionsReceived: 'Réactions reçues', ideasShipped: 'Idées réalisées', bugsConfirmed: 'Bugs confirmés', recentPosts: 'Messages récents', noPosts: 'Aucun message pour l’instant.' },
  leaderboard: {
    title: 'Classement',
    lede: 'Les membres qui aident le plus : réponses qui ont résolu une question, idées qui ont reçu des votes et bugs confirmés par l’équipe.',
    period: 'Période',
    periods: { week: 'Cette semaine', month: 'Ce mois-ci', all: 'Depuis le début' },
    kind: 'Classés par',
    kinds: { helpers: 'Entraide', ideas: 'Idées', bugs: 'Chasse aux bugs' },
    show: 'Afficher',
    rank: 'Rang',
    member: 'Membre',
    score: 'Score',
    details: 'Détail',
    detail: {
      helpers: (d) => `${d.solved ?? '0'} solutions, ${d.reactions ?? '0'} réactions`,
      ideas: (d) => `${d.votes ?? '0'} votes sur ses idées`,
      bugs: (d) => `${d.confirmed ?? '0'} bugs confirmés`,
    },
    team: 'L’équipe OutBrick',
    teamNote: 'L’équipe est classée à part, pour que les membres soient toujours en tête.',
    empty: 'Personne pour cette période.',
    caption: (kind, period) => `${kind}, ${period.toLowerCase()}`,
  },
  bookmarks: {
    title: 'Signets',
    lede: 'Les messages gardés pour plus tard. Vous seul les voyez.',
    add: 'Signet',
    added: 'En signet',
    label: (n) => `Mettre le message ${n} en signet`,
    removeLabel: (n) => `Retirer le signet du message ${n}`,
    none: 'Aucun signet pour l’instant. Le bouton Signet de chaque message le garde ici.',
    saved: 'Ajouté aux signets.',
    removed: 'Signet retiré.',
    bookmarkedOn: (when) => `Gardé ${when}`,
  },
  mentions: { listLabel: 'Membres à mentionner', instructions: 'Les membres correspondant à votre saisie s’affichent. Flèches haut et bas pour choisir, Entrée pour insérer, Échap pour fermer.', none: 'Aucun membre de ce nom.', found: (n, f) => (n < 2 ? `${f} membre trouvé` : `${f} membres trouvés`) },
  upload: {
    button: 'Ajouter une image',
    legend: 'Ajouter une image',
    file: 'Image',
    fileHint: 'Une photo ou une capture JPEG, PNG ou WebP. Les grandes photos sont d’abord réduites sur votre appareil.',
    alt: 'Décrivez l’image',
    altHint: 'Obligatoire. Les personnes qui utilisent VoiceOver entendent ce texte au lieu de voir l’image : dites ce qui compte, par exemple « Niveau 214, la brique rouge à un coup de la porte ».',
    insert: 'Insérer l’image',
    cancel: 'Annuler',
    preparing: 'Préparation de l’image…',
    uploading: 'Envoi…',
    inserted: 'L’image est dans votre message, avec sa description.',
    altMissing: 'Décrivez l’image avant de l’insérer',
    fileMissing: 'Choisissez une image',
    errors: {
      missing: 'Choisissez une image à envoyer.',
      too_large: 'Cette image reste trop lourde même réduite. Essayez-en une plus petite.',
      too_many_pixels: 'Cette image est trop grande : 4 096 pixels au plus de chaque côté.',
      unsupported_type: 'Ce type de fichier ne peut pas être publié. Utilisez JPEG, PNG ou WebP.',
      heic_unsupported: 'Les photos HEIC ne sont pas encore acceptées. Faites-en une capture d’écran ou exportez-la en JPEG.',
      bad_image: 'Cette image est illisible. Elle est peut-être abîmée.',
      unavailable: 'L’envoi d’images est désactivé pour le moment.',
    },
    problems: { image_needs_alt: 'Chaque image doit avoir une description pour pouvoir publier.', upload_not_found: 'Une des images n’est plus disponible. Retirez-la et ajoutez-la de nouveau.' },
  },
  translate: { button: (language) => `Traduire en ${language}`, working: 'Traduction…', label: (language) => `Traduction automatique ${language}`, hide: 'Masquer la traduction', failed: 'La traduction n’a pas fonctionné cette fois. Réessayez dans une minute.' },
  passkey: {
    signIn: 'Se connecter avec une clé d’accès',
    signInNote: 'Utilisez Face ID, Touch ID ou le verrouillage de votre appareil. Vous pouvez ajouter une clé d’accès dans les Réglages après vous être connecté autrement.',
    unsupported: 'Ce navigateur ne gère pas les clés d’accès. Connectez-vous autrement.',
    cancelled: 'La demande de clé d’accès a été annulée. Rien n’a changé.',
    unknown: 'Cette clé d’accès n’est liée à aucun compte ici. Connectez-vous autrement, puis ajoutez-la dans les Réglages.',
    heading: 'Clés d’accès',
    lede: 'Connectez-vous avec Face ID, Touch ID ou le verrouillage de votre appareil au lieu d’un lien par e-mail.',
    add: 'Ajouter une clé d’accès',
    nickname: 'Nom de cette clé d’accès',
    nicknameHint: 'Facultatif, pour les distinguer, par exemple « Mon iPhone ».',
    none: 'Aucune clé d’accès pour l’instant.',
    added: (when) => `ajoutée ${when}`,
    lastUsed: (when) => `utilisée ${when}`,
    neverUsed: 'jamais utilisée',
    synced: 'synchronisée sur vos appareils',
    remove: (name) => `Supprimer la clé d’accès « ${name} »`,
    addedNow: 'Clé d’accès ajoutée. La prochaine fois, connectez-vous avec elle.',
    removedNow: 'Clé d’accès supprimée.',
  },
  settings: {
    digest: ['Résumé hebdomadaire', 'Un e-mail le lundi avec les meilleures discussions de la semaine. Désactivé tant que vous ne l’activez pas.'],
    badge: ['Badges', 'Vous obtenez un badge.'],
    merged: ['Discussions fusionnées', 'Un modérateur déplace votre message dans une autre discussion.'],
  },
  notifications: { badge: (badge) => `Vous avez obtenu le badge ${badge}`, merged: (from, thread) => `Votre message de « ${from} » se trouve maintenant dans « ${thread} »` },
  merged: 'Cette discussion a été fusionnée avec une autre. Vous lisez maintenant celle-ci.',
  deepLink: { notice: 'Rempli depuis l’app. Vérifiez chaque champ avant de publier.', level: 'Niveau', levelHint: 'Facultatif : le numéro du niveau, si c’est arrivé sur un plateau.' },
  errors: { too_many: 'C’est trop d’un coup. Attendez un peu et réessayez.', translate_failed: 'La traduction n’a pas fonctionné cette fois. Réessayez dans une minute.', unknown_credential: 'Cette clé d’accès n’est liée à aucun compte ici.', poll_closed: 'Ce sondage est terminé.', poll_has_votes: 'Des personnes ont déjà voté : le sondage ne peut plus être modifié.' },
};

const de: CommunityFxCopy = {
  nav: { roadmap: 'Roadmap', leaderboard: 'Bestenliste', bookmarks: 'Lesezeichen' },
  status: { in_progress: 'In Arbeit', shippedIn: (v) => `Umgesetzt in ${v}` },
  sorts: { trending: 'Im Trend', hot: 'Angesagt' },
  board: {
    eyebrow: 'Ideenbrett',
    lede: 'Was sollte OutBrick als Nächstes können? Schlag eine Funktion vor, stimm für die ab, die du willst, und verfolge sie von der Idee bis zur Veröffentlichung. Das Team liest jede.',
    suggest: 'Funktion vorschlagen',
    roadmapLink: 'Die ganze Roadmap ansehen',
    previewHeading: 'Auf der Roadmap',
    columns: { considering: 'Wird geprüft', planned: 'Geplant', in_progress: 'In Arbeit', shipped: 'Umgesetzt' },
    columnNotes: { considering: 'Das Team wägt diese ab.', planned: 'Kommt, ungefähr in dieser Reihenfolge.', in_progress: 'Wird gerade gebaut.', shipped: 'In den letzten 90 Tagen erschienen.' },
    columnEmpty: 'Noch nichts hier.',
    more: (n) => `${n} weitere`,
    roadmapTitle: 'Roadmap',
    roadmapLede: 'Jede Idee, die das Team prüft, geplant hat, gerade baut oder umgesetzt hat, mit den Stimmen, die sie dorthin gebracht haben.',
  },
  similar: { heading: 'Ähnliche Ideen, die es schon gibt', found: (n, f) => (n === 1 ? 'Es gibt schon 1 ähnliche Idee. Vielleicht lieber dafür stimmen?' : `Es gibt schon ${f} ähnliche Ideen. Vielleicht lieber für eine davon stimmen?`), none: 'Noch keine ähnlichen Ideen.', checking: 'Suche nach ähnlichen Ideen …' },
  newIdea: { titleLabel: 'Deine Idee in einem Satz', titleHint: 'Zum Beispiel „Ein geschafftes Level noch einmal spielen, ohne ein Leben zu verbrauchen“. 4 bis 140 Zeichen.', bodyLabel: 'Warum es helfen würde' },
  reactions: { group: (n) => `Reaktionen auf Beitrag ${n}`, names: { like: 'Gefällt mir', love: 'Toll', celebrate: 'Glückwunsch', funny: 'Lustig', thanks: 'Danke', insightful: 'Aufschlussreich' }, signIn: 'Zum Reagieren anmelden' },
  poll: {
    add: 'Umfrage hinzufügen',
    remove: 'Umfrage entfernen',
    legend: 'Umfrage',
    question: 'Frage',
    option: (n) => `Option ${n}`,
    addOption: 'Option hinzufügen',
    removeOption: (n) => `Option ${n} entfernen`,
    multiple: 'Mehrere Optionen dürfen gewählt werden',
    closes: 'Endet am',
    closesHint: 'Leer lassen, damit die Umfrage offen bleibt. Höchstens ein Jahr ab heute.',
    vote: 'Abstimmen',
    change: 'Meine Stimme ändern',
    withdraw: 'Meine Stimme zurückziehen',
    results: 'Ergebnisse',
    optionResult: (label, votes, percent) => `${label}: ${votes}, ${percent}`,
    voters: (n, f) => (n === 1 ? '1 Person hat abgestimmt' : `${f} Personen haben abgestimmt`),
    closedOn: (when) => `Beendet ${when}`,
    closesOn: (when) => `Endet ${when}`,
    closed: 'Diese Umfrage ist beendet.',
    signIn: 'Melde dich an, um abzustimmen.',
    voted: 'Deine Stimme zählt.',
    withdrawn: 'Deine Stimme ist zurückgezogen.',
    chooseOne: 'Wähl zuerst eine Option.',
    mine: 'Deine Wahl',
    errors: { poll_closed: 'Diese Umfrage ist beendet und nimmt keine Stimmen mehr an.', poll_has_votes: 'Es wurde schon abgestimmt, deshalb lässt sich die Umfrage nicht mehr ändern.' },
    fieldCodes: { too_few: 'Gib mindestens zwei Optionen an', too_many: 'Gib höchstens acht Optionen an', duplicate: 'Jede Option muss anders sein' },
  },
  live: { newReplies: (n, f) => (n === 1 ? '1 neue Antwort' : `${f} neue Antworten`), show: 'Anzeigen', announce: (n, f) => (n === 1 ? '1 neue Antwort. Mit der Schaltfläche „Anzeigen“ nach den Beiträgen liest du sie.' : `${f} neue Antworten. Mit der Schaltfläche „Anzeigen“ nach den Beiträgen liest du sie.`) },
  badges: {
    heading: 'Abzeichen',
    none: 'Noch keine Abzeichen.',
    names: { first_post: 'Erster Beitrag', helpful: 'Hilfsbereit', bug_hunter: 'Fehlerjäger', idea_maker: 'Ideengeber', shipped: 'Umgesetzt', welcomer: 'Willkommensgruß', beta_tester: 'Betatester', accessibility_champion: 'Barrierefreiheits-Champion', anniversary: 'Jubiläum', popular_post: 'Beliebter Beitrag' },
    descriptions: {
      first_post: 'Hat zum ersten Mal in der Community geschrieben.',
      helpful: 'Antworten, die als Lösung markiert wurden: 1, 10 und 50.',
      bug_hunter: 'Hat einen Fehler gemeldet, den das OutBrick-Team bestätigt hat.',
      idea_maker: 'Hat eine Idee vorgeschlagen, die das Team eingeplant hat.',
      shipped: 'Hat eine Idee vorgeschlagen, die in OutBrick umgesetzt wurde.',
      welcomer: 'Hat auf die ersten Themen von zehn neuen Mitgliedern geantwortet.',
      beta_tester: 'Hat OutBrick vor der Veröffentlichung getestet.',
      accessibility_champion: 'Hat OutBrick für Menschen mit assistiver Technologie besser gemacht.',
      anniversary: 'Seit einem Jahr oder länger dabei.',
      popular_post: 'Hat einen Beitrag mit 25 Reaktionen geschrieben.',
    },
    level: (name, level) => `${name} (${level})`,
    years: (name, years) => `${name}: ${years} Jahre`,
    granted: 'Vom Team verliehen',
    earned: (when) => `Erhalten ${when}`,
  },
  profile: { stats: 'In Zahlen', posts: 'Beiträge', threads: 'Themen', solved: 'Lösungen', reactionsReceived: 'Erhaltene Reaktionen', ideasShipped: 'Umgesetzte Ideen', bugsConfirmed: 'Bestätigte Fehler', recentPosts: 'Neueste Beiträge', noPosts: 'Noch keine Beiträge.' },
  leaderboard: {
    title: 'Bestenliste',
    lede: 'Die Mitglieder, die am meisten helfen: Antworten, die eine Frage gelöst haben, Ideen mit vielen Stimmen und Fehler, die das Team bestätigt hat.',
    period: 'Zeitraum',
    periods: { week: 'Diese Woche', month: 'Diesen Monat', all: 'Insgesamt' },
    kind: 'Gewertet nach',
    kinds: { helpers: 'Helfende', ideas: 'Ideen', bugs: 'Fehlerjagd' },
    show: 'Anzeigen',
    rank: 'Platz',
    member: 'Mitglied',
    score: 'Punkte',
    details: 'Details',
    detail: {
      helpers: (d) => `${d.solved ?? '0'} gelöst, ${d.reactions ?? '0'} Reaktionen`,
      ideas: (d) => `${d.votes ?? '0'} Stimmen für die eigenen Ideen`,
      bugs: (d) => `${d.confirmed ?? '0'} bestätigte Fehler`,
    },
    team: 'Das OutBrick-Team',
    teamNote: 'Das Team steht in einer eigenen Liste, damit die Mitglieder immer vorne sind.',
    empty: 'Für diesen Zeitraum noch niemand.',
    caption: (kind, period) => `${kind}, ${period}`,
  },
  bookmarks: {
    title: 'Lesezeichen',
    lede: 'Beiträge, die du dir für später gemerkt hast. Nur du siehst sie.',
    add: 'Merken',
    added: 'Gemerkt',
    label: (n) => `Merken: Beitrag ${n}`,
    removeLabel: (n) => `Lesezeichen entfernen: Beitrag ${n}`,
    none: 'Noch keine Lesezeichen. Mit „Merken“ an einem Beitrag landet er hier.',
    saved: 'Gemerkt.',
    removed: 'Lesezeichen entfernt.',
    bookmarkedOn: (when) => `Gemerkt ${when}`,
  },
  mentions: { listLabel: 'Mitglieder zum Erwähnen', instructions: 'Passende Mitglieder werden angezeigt. Mit den Pfeiltasten nach oben und unten auswählen, mit der Eingabetaste einfügen, mit Escape schließen.', none: 'Kein Mitglied mit diesem Namen.', found: (n, f) => (n === 1 ? '1 Mitglied gefunden' : `${f} Mitglieder gefunden`) },
  upload: {
    button: 'Bild hinzufügen',
    legend: 'Bild hinzufügen',
    file: 'Bild',
    fileHint: 'Ein Foto oder Screenshot als JPEG, PNG oder WebP. Große Fotos werden zuerst auf deinem Gerät verkleinert.',
    alt: 'Beschreib das Bild',
    altHint: 'Pflicht. Wer VoiceOver nutzt, hört diesen Text statt das Bild zu sehen. Sag, worauf es ankommt, zum Beispiel „Level 214, der rote Stein einen Zug vor dem Tor“.',
    insert: 'Bild einfügen',
    cancel: 'Abbrechen',
    preparing: 'Bild wird vorbereitet …',
    uploading: 'Wird hochgeladen …',
    inserted: 'Das Bild ist mit Beschreibung in deinem Beitrag.',
    altMissing: 'Beschreib das Bild, bevor du es einfügst',
    fileMissing: 'Wähl ein Bild',
    errors: {
      missing: 'Wähl ein Bild zum Hochladen.',
      too_large: 'Das Bild ist auch verkleinert noch zu groß. Versuch ein kleineres.',
      too_many_pixels: 'Das Bild ist zu groß: höchstens 4096 Pixel pro Seite.',
      unsupported_type: 'Diese Dateiart lässt sich nicht veröffentlichen. Nimm JPEG, PNG oder WebP.',
      heic_unsupported: 'HEIC-Fotos gehen noch nicht. Mach einen Screenshot davon oder exportier es als JPEG.',
      bad_image: 'Das Bild ließ sich nicht lesen. Vielleicht ist es beschädigt.',
      unavailable: 'Das Hochladen von Bildern ist gerade ausgeschaltet.',
    },
    problems: { image_needs_alt: 'Jedes Bild braucht eine Beschreibung, bevor du veröffentlichen kannst.', upload_not_found: 'Eines der Bilder ist nicht mehr verfügbar. Entfern es und füg es erneut hinzu.' },
  },
  translate: { button: (language) => `Übersetzen: ${language}`, working: 'Wird übersetzt …', label: (language) => `Maschinelle Übersetzung aus dem ${language}`, hide: 'Übersetzung ausblenden', failed: 'Die Übersetzung hat diesmal nicht geklappt. Versuch es in einer Minute noch einmal.' },
  passkey: {
    signIn: 'Mit Passkey anmelden',
    signInNote: 'Mit Face ID, Touch ID oder der Bildschirmsperre deines Geräts. Einen Passkey fügst du in den Einstellungen hinzu, nachdem du dich anders angemeldet hast.',
    unsupported: 'Dieser Browser kann keine Passkeys verwenden. Melde dich anders an.',
    cancelled: 'Die Passkey-Anfrage wurde abgebrochen. Nichts hat sich geändert.',
    unknown: 'Dieser Passkey gehört hier zu keinem Konto. Melde dich anders an und füg ihn dann in den Einstellungen hinzu.',
    heading: 'Passkeys',
    lede: 'Melde dich mit Face ID, Touch ID oder der Bildschirmsperre deines Geräts an statt mit einem E-Mail-Link.',
    add: 'Passkey hinzufügen',
    nickname: 'Name für diesen Passkey',
    nicknameHint: 'Optional, damit du sie auseinanderhalten kannst, zum Beispiel „Mein iPhone“.',
    none: 'Noch keine Passkeys.',
    added: (when) => `hinzugefügt ${when}`,
    lastUsed: (when) => `zuletzt benutzt ${when}`,
    neverUsed: 'noch nicht benutzt',
    synced: 'auf deinen Geräten synchronisiert',
    remove: (name) => `Passkey „${name}“ entfernen`,
    addedNow: 'Passkey hinzugefügt. Melde dich beim nächsten Mal damit an.',
    removedNow: 'Passkey entfernt.',
  },
  settings: {
    digest: ['Wochenüberblick', 'Montags eine E-Mail mit den besten Themen der Woche. Aus, bis du sie einschaltest.'],
    badge: ['Abzeichen', 'Du erhältst ein Abzeichen.'],
    merged: ['Zusammengeführte Themen', 'Die Moderation verschiebt deinen Beitrag in ein anderes Thema.'],
  },
  notifications: { badge: (badge) => `Du hast das Abzeichen „${badge}“ erhalten`, merged: (from, thread) => `Dein Beitrag aus „${from}“ steht jetzt in „${thread}“` },
  merged: 'Dieses Thema wurde mit einem anderen zusammengeführt. Du liest jetzt das andere.',
  deepLink: { notice: 'Aus der App ausgefüllt. Prüf jedes Feld, bevor du veröffentlichst.', level: 'Level', levelHint: 'Optional: die Levelnummer, falls es auf einem Spielfeld passiert ist.' },
  errors: { too_many: 'Das ist zu viel auf einmal. Warte kurz und versuch es noch einmal.', translate_failed: 'Die Übersetzung hat diesmal nicht geklappt. Versuch es in einer Minute noch einmal.', unknown_credential: 'Dieser Passkey gehört hier zu keinem Konto.', poll_closed: 'Diese Umfrage ist beendet.', poll_has_votes: 'Es wurde schon abgestimmt, deshalb lässt sich die Umfrage nicht mehr ändern.' },
};

const es: CommunityFxCopy = {
  nav: { roadmap: 'Hoja de ruta', leaderboard: 'Clasificación', bookmarks: 'Guardados' },
  status: { in_progress: 'En desarrollo', shippedIn: (v) => `Disponible en la ${v}` },
  sorts: { trending: 'Tendencia', hot: 'Populares' },
  board: {
    eyebrow: 'Tablón de ideas',
    lede: '¿Qué debería hacer OutBrick ahora? Propón una función, vota las que quieras y síguelas desde la idea hasta su lanzamiento. El equipo las lee todas.',
    suggest: 'Proponer una función',
    roadmapLink: 'Ver toda la hoja de ruta',
    previewHeading: 'En la hoja de ruta',
    columns: { considering: 'En estudio', planned: 'Previstas', in_progress: 'En desarrollo', shipped: 'Disponibles' },
    columnNotes: { considering: 'El equipo las está valorando.', planned: 'Llegarán, más o menos en este orden.', in_progress: 'Se están construyendo ahora.', shipped: 'Publicadas en los últimos 90 días.' },
    columnEmpty: 'Aún no hay nada.',
    more: (n) => `${n} más`,
    roadmapTitle: 'Hoja de ruta',
    roadmapLede: 'Todas las ideas que el equipo estudia, ha previsto, está construyendo o ya ha publicado, con los votos que las llevaron ahí.',
  },
  similar: { heading: 'Ideas parecidas ya publicadas', found: (n, f) => (n === 1 ? 'Ya hay 1 idea parecida. ¿Y si la votas en lugar de publicarla otra vez?' : `Ya hay ${f} ideas parecidas. ¿Y si votas una en lugar de publicarla otra vez?`), none: 'Aún no hay ideas parecidas.', checking: 'Buscando ideas parecidas…' },
  newIdea: { titleLabel: 'Tu idea en una frase', titleHint: 'Por ejemplo «Repetir un nivel superado sin gastar una vida». De 4 a 140 caracteres.', bodyLabel: 'Por qué ayudaría' },
  reactions: { group: (n) => `Reacciones al mensaje ${n}`, names: { like: 'Me gusta', love: 'Me encanta', celebrate: 'Enhorabuena', funny: 'Divertido', thanks: 'Gracias', insightful: 'Interesante' }, signIn: 'Inicia sesión para reaccionar' },
  poll: {
    add: 'Añadir una encuesta',
    remove: 'Quitar la encuesta',
    legend: 'Encuesta',
    question: 'Pregunta',
    option: (n) => `Opción ${n}`,
    addOption: 'Añadir una opción',
    removeOption: (n) => `Quitar la opción ${n}`,
    multiple: 'Se puede elegir más de una opción',
    closes: 'Cierra el',
    closesHint: 'Déjalo vacío para que la encuesta siga abierta. Como mucho, un año desde hoy.',
    vote: 'Votar',
    change: 'Cambiar mi voto',
    withdraw: 'Retirar mi voto',
    results: 'Resultados',
    optionResult: (label, votes, percent) => `${label}: ${votes}, ${percent}`,
    voters: (n, f) => (n === 1 ? 'Ha votado 1 persona' : `Han votado ${f} personas`),
    closedOn: (when) => `Cerrada ${when}`,
    closesOn: (when) => `Cierra ${when}`,
    closed: 'Esta encuesta está cerrada.',
    signIn: 'Inicia sesión para votar en esta encuesta.',
    voted: 'Tu voto cuenta.',
    withdrawn: 'Has retirado tu voto.',
    chooseOne: 'Elige primero una opción.',
    mine: 'Tu elección',
    errors: { poll_closed: 'Esta encuesta ha cerrado y no admite más votos.', poll_has_votes: 'Ya hay votos, así que la encuesta no se puede cambiar.' },
    fieldCodes: { too_few: 'Pon al menos dos opciones', too_many: 'Pon como mucho ocho opciones', duplicate: 'Cada opción debe ser distinta' },
  },
  live: { newReplies: (n, f) => (n === 1 ? '1 respuesta nueva' : `${f} respuestas nuevas`), show: 'Mostrar', announce: (n, f) => (n === 1 ? '1 respuesta nueva. Usa el botón Mostrar después de los mensajes para leerla.' : `${f} respuestas nuevas. Usa el botón Mostrar después de los mensajes para leerlas.`) },
  badges: {
    heading: 'Insignias',
    none: 'Aún no hay insignias.',
    names: { first_post: 'Primer mensaje', helpful: 'Servicial', bug_hunter: 'Cazaerrores', idea_maker: 'Generador de ideas', shipped: 'Idea hecha realidad', welcomer: 'Anfitrión', beta_tester: 'Probador beta', accessibility_champion: 'Defensor de la accesibilidad', anniversary: 'Aniversario', popular_post: 'Mensaje popular' },
    descriptions: {
      first_post: 'Publicó en la comunidad por primera vez.',
      helpful: 'Respuestas marcadas como solución: 1, 10 y 50.',
      bug_hunter: 'Informó de un error que el equipo de OutBrick confirmó.',
      idea_maker: 'Propuso una idea que el equipo ha previsto.',
      shipped: 'Propuso una idea que ya está en OutBrick.',
      welcomer: 'Respondió a los primeros temas de diez recién llegados.',
      beta_tester: 'Probó OutBrick antes de su lanzamiento.',
      accessibility_champion: 'Hizo OutBrick mejor para quienes usan tecnología de apoyo.',
      anniversary: 'Miembro desde hace un año o más.',
      popular_post: 'Escribió un mensaje con 25 reacciones.',
    },
    level: (name, level) => `${name} (${level})`,
    years: (name, years) => `${name}: ${years} años`,
    granted: 'Concedida por el equipo',
    earned: (when) => `Obtenida ${when}`,
  },
  profile: { stats: 'En cifras', posts: 'Mensajes', threads: 'Temas', solved: 'Soluciones', reactionsReceived: 'Reacciones recibidas', ideasShipped: 'Ideas hechas realidad', bugsConfirmed: 'Errores confirmados', recentPosts: 'Mensajes recientes', noPosts: 'Aún no hay mensajes.' },
  leaderboard: {
    title: 'Clasificación',
    lede: 'Quienes más ayudan: respuestas que resolvieron una pregunta, ideas con votos y errores que el equipo confirmó.',
    period: 'Periodo',
    periods: { week: 'Esta semana', month: 'Este mes', all: 'Desde siempre' },
    kind: 'Según',
    kinds: { helpers: 'Ayuda', ideas: 'Ideas', bugs: 'Errores' },
    show: 'Mostrar',
    rank: 'Puesto',
    member: 'Miembro',
    score: 'Puntos',
    details: 'Detalle',
    detail: {
      helpers: (d) => `${d.solved ?? '0'} resueltas, ${d.reactions ?? '0'} reacciones`,
      ideas: (d) => `${d.votes ?? '0'} votos en sus ideas`,
      bugs: (d) => `${d.confirmed ?? '0'} errores confirmados`,
    },
    team: 'El equipo de OutBrick',
    teamNote: 'El equipo aparece aparte, para que los miembros siempre vayan primero.',
    empty: 'Aún no hay nadie en este periodo.',
    caption: (kind, period) => `${kind}, ${period.toLowerCase()}`,
  },
  bookmarks: {
    title: 'Guardados',
    lede: 'Mensajes que guardaste para más tarde. Solo tú los ves.',
    add: 'Guardar',
    added: 'Guardado',
    label: (n) => `Guardar el mensaje ${n}`,
    removeLabel: (n) => `Quitar de guardados el mensaje ${n}`,
    none: 'Aún no has guardado nada. Usa el botón Guardar de cualquier mensaje para tenerlo aquí.',
    saved: 'Guardado.',
    removed: 'Quitado de guardados.',
    bookmarkedOn: (when) => `Guardado ${when}`,
  },
  mentions: { listLabel: 'Miembros para mencionar', instructions: 'Aparecen los miembros que coinciden con lo que escribes. Usa las flechas arriba y abajo para elegir, Intro para insertar y Escape para cerrar.', none: 'Ningún miembro con ese nombre.', found: (n, f) => (n === 1 ? '1 miembro encontrado' : `${f} miembros encontrados`) },
  upload: {
    button: 'Añadir una imagen',
    legend: 'Añadir una imagen',
    file: 'Imagen',
    fileHint: 'Una foto o captura en JPEG, PNG o WebP. Las fotos grandes se reducen primero en tu dispositivo.',
    alt: 'Describe la imagen',
    altHint: 'Obligatorio. Quien usa VoiceOver oye este texto en lugar de ver la imagen, así que cuenta lo importante; por ejemplo «Nivel 214, con el ladrillo rojo a un movimiento de la puerta».',
    insert: 'Insertar la imagen',
    cancel: 'Cancelar',
    preparing: 'Preparando la imagen…',
    uploading: 'Subiendo…',
    inserted: 'La imagen está en tu mensaje, con su descripción.',
    altMissing: 'Describe la imagen antes de insertarla',
    fileMissing: 'Elige una imagen',
    errors: {
      missing: 'Elige una imagen para subir.',
      too_large: 'La imagen sigue siendo demasiado grande incluso reducida. Prueba con otra más pequeña.',
      too_many_pixels: 'La imagen es demasiado grande: como mucho 4096 píxeles por lado.',
      unsupported_type: 'Ese tipo de archivo no se puede publicar. Usa JPEG, PNG o WebP.',
      heic_unsupported: 'Aún no se admiten fotos HEIC. Haz una captura o expórtala como JPEG.',
      bad_image: 'No se pudo leer la imagen. Puede que esté dañada.',
      unavailable: 'La subida de imágenes está desactivada ahora mismo.',
    },
    problems: { image_needs_alt: 'Cada imagen necesita una descripción para poder publicar.', upload_not_found: 'Una de las imágenes ya no está disponible. Quítala y vuelve a añadirla.' },
  },
  translate: { button: (language) => `Traducir al ${language.toLowerCase()}`, working: 'Traduciendo…', label: (language) => `Traducción automática del ${language.toLowerCase()}`, hide: 'Ocultar la traducción', failed: 'La traducción no ha funcionado esta vez. Vuelve a intentarlo en un minuto.' },
  passkey: {
    signIn: 'Iniciar sesión con una llave de acceso',
    signInNote: 'Usa Face ID, Touch ID o el bloqueo de pantalla de tu dispositivo. Puedes añadir una llave de acceso en Ajustes después de iniciar sesión de otra forma.',
    unsupported: 'Este navegador no admite llaves de acceso. Inicia sesión de otra forma.',
    cancelled: 'Se canceló la solicitud de la llave de acceso. No ha cambiado nada.',
    unknown: 'Esa llave de acceso no está vinculada a ninguna cuenta aquí. Inicia sesión de otra forma y añádela en Ajustes.',
    heading: 'Llaves de acceso',
    lede: 'Inicia sesión con Face ID, Touch ID o el bloqueo de pantalla de tu dispositivo en lugar de con un enlace por correo.',
    add: 'Añadir una llave de acceso',
    nickname: 'Nombre de esta llave de acceso',
    nicknameHint: 'Opcional, para distinguirlas; por ejemplo «Mi iPhone».',
    none: 'Aún no hay llaves de acceso.',
    added: (when) => `añadida ${when}`,
    lastUsed: (when) => `usada por última vez ${when}`,
    neverUsed: 'aún sin usar',
    synced: 'sincronizada en tus dispositivos',
    remove: (name) => `Eliminar la llave de acceso «${name}»`,
    addedNow: 'Llave de acceso añadida. La próxima vez, inicia sesión con ella.',
    removedNow: 'Llave de acceso eliminada.',
  },
  settings: {
    digest: ['Resumen semanal', 'Un correo los lunes con los mejores temas de la semana. Desactivado salvo que lo actives.'],
    badge: ['Insignias', 'Consigues una insignia.'],
    merged: ['Temas fusionados', 'Un moderador mueve tu mensaje a otro tema.'],
  },
  notifications: { badge: (badge) => `Has conseguido la insignia ${badge}`, merged: (from, thread) => `Tu mensaje de «${from}» ahora está en «${thread}»` },
  merged: 'Este tema se fusionó con otro. Ahora estás leyendo ese.',
  deepLink: { notice: 'Rellenado desde la app. Revisa cada campo antes de publicar.', level: 'Nivel', levelHint: 'Opcional: el número del nivel, si pasó en un tablero.' },
  errors: { too_many: 'Son demasiados a la vez. Espera un poco y vuelve a intentarlo.', translate_failed: 'La traducción no ha funcionado esta vez. Vuelve a intentarlo en un minuto.', unknown_credential: 'Esa llave de acceso no está vinculada a ninguna cuenta aquí.', poll_closed: 'Esta encuesta está cerrada.', poll_has_votes: 'Ya hay votos, así que la encuesta no se puede cambiar.' },
};

const ja: CommunityFxCopy = {
  nav: { roadmap: 'ロードマップ', leaderboard: 'ランキング', bookmarks: 'ブックマーク' },
  status: { in_progress: '開発中', shippedIn: (v) => `${v}で実装済み` },
  sorts: { trending: '注目', hot: '人気' },
  board: {
    eyebrow: 'アイデアボード',
    lede: 'OutBrickに次は何をしてほしいですか。機能を提案し、欲しいものに投票して、アイデアからリリースまで見届けてください。チームはすべて読んでいます。',
    suggest: '機能を提案する',
    roadmapLink: 'ロードマップをすべて見る',
    previewHeading: 'ロードマップ',
    columns: { considering: '検討中', planned: '予定あり', in_progress: '開発中', shipped: '実装済み' },
    columnNotes: { considering: 'チームが検討しています。', planned: 'おおよそこの順番で登場します。', in_progress: 'いま作っています。', shipped: '過去90日にリリースされたもの。' },
    columnEmpty: 'まだありません。',
    more: (n) => `ほか${n}件`,
    roadmapTitle: 'ロードマップ',
    roadmapLede: 'チームが検討中、予定あり、開発中、実装済みのアイデアを、そこまで押し上げた投票数とともに一覧にしています。',
  },
  similar: { heading: 'すでに投稿されている似たアイデア', found: (_n, f) => `似たアイデアが${f}件あります。新しく投稿する代わりに投票しませんか。`, none: '似たアイデアはまだありません。', checking: '似たアイデアを探しています…' },
  newIdea: { titleLabel: 'アイデアをひとことで', titleHint: '例：「クリアしたレベルをライフを使わずにもう一度遊びたい」。4〜140文字。', bodyLabel: 'どう役に立つか' },
  reactions: { group: (n) => `投稿${n}へのリアクション`, names: { like: 'いいね', love: '大好き', celebrate: 'おめでとう', funny: 'おもしろい', thanks: 'ありがとう', insightful: 'なるほど' }, signIn: 'サインインしてリアクション' },
  poll: {
    add: 'アンケートを追加',
    remove: 'アンケートを削除',
    legend: 'アンケート',
    question: '質問',
    option: (n) => `選択肢${n}`,
    addOption: '選択肢を追加',
    removeOption: (n) => `選択肢${n}を削除`,
    multiple: '複数の選択肢を選べるようにする',
    closes: '締め切り日',
    closesHint: '空欄なら締め切りなし。今日から1年以内で設定できます。',
    vote: '投票する',
    change: '投票を変更',
    withdraw: '投票を取り消す',
    results: '結果',
    optionResult: (label, votes, percent) => `${label}：${votes}、${percent}`,
    voters: (_n, f) => `${f}人が投票しました`,
    closedOn: (when) => `${when}に締め切りました`,
    closesOn: (when) => `締め切り：${when}`,
    closed: 'このアンケートは締め切りました。',
    signIn: 'サインインして投票してください。',
    voted: '投票を受け付けました。',
    withdrawn: '投票を取り消しました。',
    chooseOne: '先に選択肢を選んでください。',
    mine: 'あなたの選択',
    errors: { poll_closed: 'このアンケートは締め切られたため、投票できません。', poll_has_votes: 'すでに投票があるため、アンケートは変更できません。' },
    fieldCodes: { too_few: '選択肢は2つ以上にしてください', too_many: '選択肢は8つまでです', duplicate: '選択肢はそれぞれ違うものにしてください' },
  },
  live: { newReplies: (_n, f) => `新しい返信${f}件`, show: '表示', announce: (_n, f) => `新しい返信が${f}件あります。投稿の後にある「表示」ボタンで読めます。` },
  badges: {
    heading: 'バッジ',
    none: 'まだバッジはありません。',
    names: { first_post: 'はじめての投稿', helpful: 'お助け', bug_hunter: 'バグハンター', idea_maker: 'アイデアメーカー', shipped: '実現したアイデア', welcomer: 'おもてなし', beta_tester: 'ベータテスター', accessibility_champion: 'アクセシビリティの立役者', anniversary: '記念日', popular_post: '人気の投稿' },
    descriptions: {
      first_post: 'コミュニティにはじめて投稿しました。',
      helpful: '解決した回答に選ばれた数：1、10、50。',
      bug_hunter: 'OutBrickチームが確認した不具合を報告しました。',
      idea_maker: 'チームが予定に入れたアイデアを提案しました。',
      shipped: 'OutBrickに実装されたアイデアを提案しました。',
      welcomer: '新しいメンバー10人の最初のスレッドに返信しました。',
      beta_tester: 'リリース前のOutBrickをテストしました。',
      accessibility_champion: '支援技術を使うプレイヤーのためにOutBrickをよりよくしました。',
      anniversary: '参加して1年以上になります。',
      popular_post: 'リアクションが25件ついた投稿を書きました。',
    },
    level: (name, level) => `${name}（${level}）`,
    years: (name, years) => `${name}：${years}年`,
    granted: 'チームから授与',
    earned: (when) => `${when}に獲得`,
  },
  profile: { stats: '数字で見る', posts: '投稿', threads: 'スレッド', solved: '解決した回答', reactionsReceived: 'もらったリアクション', ideasShipped: '実現したアイデア', bugsConfirmed: '確認された不具合', recentPosts: '最近の投稿', noPosts: 'まだ投稿はありません。' },
  leaderboard: {
    title: 'ランキング',
    lede: 'いちばん助けになっているメンバーです。質問を解決した回答、投票を集めたアイデア、チームが確認した不具合で数えています。',
    period: '期間',
    periods: { week: '今週', month: '今月', all: 'これまで' },
    kind: '基準',
    kinds: { helpers: 'お助け', ideas: 'アイデア', bugs: 'バグハンター' },
    show: '表示',
    rank: '順位',
    member: 'メンバー',
    score: 'スコア',
    details: '内訳',
    detail: {
      helpers: (d) => `解決${d.solved ?? '0'}件、リアクション${d.reactions ?? '0'}件`,
      ideas: (d) => `アイデアへの投票${d.votes ?? '0'}票`,
      bugs: (d) => `確認された不具合${d.confirmed ?? '0'}件`,
    },
    team: 'OutBrickチーム',
    teamNote: 'メンバーがいつも上位になるよう、チームは別の一覧にしています。',
    empty: 'この期間はまだ誰もいません。',
    caption: (kind, period) => `${kind}、${period}`,
  },
  bookmarks: {
    title: 'ブックマーク',
    lede: 'あとで読むために保存した投稿です。あなただけが見られます。',
    add: 'ブックマーク',
    added: 'ブックマーク済み',
    label: (n) => `ブックマーク：投稿${n}`,
    removeLabel: (n) => `ブックマークを外す：投稿${n}`,
    none: 'ブックマークはまだありません。投稿の「ブックマーク」ボタンでここに保存できます。',
    saved: 'ブックマークしました。',
    removed: 'ブックマークを外しました。',
    bookmarkedOn: (when) => `${when}に保存`,
  },
  mentions: { listLabel: 'メンションするメンバー', instructions: '入力に合うメンバーが表示されます。上下の矢印キーで選び、Enterで挿入、Escapeで閉じます。', none: 'その名前のメンバーはいません。', found: (_n, f) => `${f}人が見つかりました` },
  upload: {
    button: '画像を追加',
    legend: '画像を追加',
    file: '画像',
    fileHint: 'JPEG、PNG、WebPの写真やスクリーンショット。大きな写真は先にお使いのデバイスで小さくします。',
    alt: '画像の説明',
    altHint: '必須です。VoiceOverを使う人には画像の代わりにこの文章が読み上げられます。大事なところを書いてください。例：「レベル214、赤いブロックがゲートまであと1手」。',
    insert: '画像を挿入',
    cancel: 'キャンセル',
    preparing: '画像を準備しています…',
    uploading: 'アップロードしています…',
    inserted: '説明付きで画像を投稿に入れました。',
    altMissing: '挿入する前に画像の説明を書いてください',
    fileMissing: '画像を選んでください',
    errors: {
      missing: 'アップロードする画像を選んでください。',
      too_large: '小さくしても画像が大きすぎます。もっと小さい画像でお試しください。',
      too_many_pixels: '画像が大きすぎます。各辺4096ピクセルまでです。',
      unsupported_type: 'この種類のファイルは投稿できません。JPEG、PNG、WebPをお使いください。',
      heic_unsupported: 'HEICの写真はまだ投稿できません。スクリーンショットを撮るか、JPEGで書き出してください。',
      bad_image: '画像を読み込めませんでした。壊れている可能性があります。',
      unavailable: '現在、画像のアップロードはオフになっています。',
    },
    problems: { image_needs_alt: '投稿するには、すべての画像に説明が必要です。', upload_not_found: '画像のひとつが見つかりません。いったん削除してから追加し直してください。' },
  },
  translate: { button: (language) => `${language}に翻訳`, working: '翻訳しています…', label: (language) => `${language}からの機械翻訳`, hide: '翻訳を隠す', failed: '今回は翻訳できませんでした。1分ほどしてからもう一度お試しください。' },
  passkey: {
    signIn: 'パスキーでサインイン',
    signInNote: 'Face ID、Touch ID、またはデバイスの画面ロックを使います。ほかの方法でサインインした後、設定でパスキーを追加できます。',
    unsupported: 'このブラウザではパスキーを使えません。ほかの方法でサインインしてください。',
    cancelled: 'パスキーのリクエストはキャンセルされました。何も変更されていません。',
    unknown: 'このパスキーはここのアカウントと結びついていません。ほかの方法でサインインし、設定で追加してください。',
    heading: 'パスキー',
    lede: 'メールのリンクの代わりに、Face ID、Touch ID、またはデバイスの画面ロックでサインインできます。',
    add: 'パスキーを追加',
    nickname: 'このパスキーの名前',
    nicknameHint: '任意。見分けやすい名前を付けてください。例：「わたしのiPhone」。',
    none: 'パスキーはまだありません。',
    added: (when) => `${when}に追加`,
    lastUsed: (when) => `最終使用：${when}`,
    neverUsed: 'まだ使われていません',
    synced: 'デバイス間で同期',
    remove: (name) => `パスキー「${name}」を削除`,
    addedNow: 'パスキーを追加しました。次からはパスキーでサインインできます。',
    removedNow: 'パスキーを削除しました。',
  },
  settings: {
    digest: ['週刊ダイジェスト', '毎週月曜日に、その週のおすすめスレッドをメールでお届けします。オンにするまで届きません。'],
    badge: ['バッジ', 'バッジを獲得したとき。'],
    merged: ['統合されたスレッド', 'モデレーターがあなたの投稿を別のスレッドに移したとき。'],
  },
  notifications: { badge: (badge) => `バッジ「${badge}」を獲得しました`, merged: (from, thread) => `「${from}」にあったあなたの投稿は「${thread}」に移りました` },
  merged: 'このスレッドは別のスレッドに統合されました。いまは統合先のスレッドを表示しています。',
  deepLink: { notice: 'アプリから入力されました。投稿する前に各項目を確認してください。', level: 'レベル', levelHint: '任意：ステージで起きた場合はレベル番号。' },
  errors: { too_many: '一度に多すぎます。少し待ってからお試しください。', translate_failed: '今回は翻訳できませんでした。1分ほどしてからもう一度お試しください。', unknown_credential: 'このパスキーはここのアカウントと結びついていません。', poll_closed: 'このアンケートは締め切りました。', poll_has_votes: 'すでに投票があるため、アンケートは変更できません。' },
};

export const communityFx: Record<Locale, CommunityFxCopy> = { en, fr, de, es, ja };

/** Language names as an adjective for "Machine translation from French", in each page language. */
export const languageNamesIn: Record<Locale, Record<Locale, string>> = {
  en: { en: 'English', fr: 'French', de: 'German', es: 'Spanish', ja: 'Japanese' },
  fr: { en: 'de l’anglais', fr: 'du français', de: 'de l’allemand', es: 'de l’espagnol', ja: 'du japonais' },
  de: { en: 'Englischen', fr: 'Französischen', de: 'Deutschen', es: 'Spanischen', ja: 'Japanischen' },
  es: { en: 'Inglés', fr: 'Francés', de: 'Alemán', es: 'Español', ja: 'Japonés' },
  ja: { en: '英語', fr: 'フランス語', de: 'ドイツ語', es: 'スペイン語', ja: '日本語' },
};
/** "Translate to <my language>": the target named in the page's own language. */
export const targetNamesIn: Record<Locale, string> = { en: 'English', fr: 'français', de: 'Deutsch', es: 'Español', ja: '日本語' };
