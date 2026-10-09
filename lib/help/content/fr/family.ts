import type { HelpArticle } from '../../model.ts';

/**
 * Les familles et le jeu au calme, l’économie en termes simples, les neuf amis, et retrouver sa
 * progression ou un achat, en français. Vérifié avec la 5.1.1 (68) et les guides voisins.
 */
export const familyArticles: HelpArticle[] = [
  {
    slug: 'parents-guide',
    category: 'family',
    cover: 'settings-game',
    title: 'Un guide pour les parents et les proches',
    summary:
      'Ce qu’OutBrick est et n’est pas, les réglages Apple qui vous laissent décider des achats, du temps de jeu et des notifications, le fonctionnement des remboursements, les données que conservent le jeu et ce site, et une liste de vérifications à suivre.',
    keywords:
      'parent proche tuteur famille enfant enfants fils fille sécurité sûr contrôle parental temps d’écran autorisation d’achat partage familial achats intégrés dépenses temps d’arrêt limites d’app classification âge 4+ pubs publicités inconnus chat discussion confidentialité remboursement',
    host: 'peach',
    hostPose: 'think',
    sections: [
      {
        id: 'at-a-glance',
        title: 'Ce qui est vrai d’OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick est un puzzle paisible de type glisser et aligner, classé **4+** sur l’App Store. On y fait glisser des briques jouets vers les portes de leur couleur, ou on échange des voisines pour former des lignes, et chaque plateau donne un nombre de coups pour y arriver. Avant de toucher au moindre réglage, voici ce que le jeu fait et ne fait pas.',
          },
          {
            t: 'list',
            items: [
              '**Il n’y a de chrono nulle part.** Aucun plateau, menu ou événement n’est minuté. Le nombre de coups est la seule limite : personne n’est jamais pressé.',
              '**Pas de chat, pas d’inconnus.** Il n’y a ni chat, ni messagerie entre joueurs, ni aucun texte écrit par d’autres joueurs dans le jeu. Les autres joueurs ne voient jamais qu’un nom de joueur et un niveau (voir [plus bas](#other-players)).',
              '**Aucune pub, sauf si votre enfant touche un bouton pour en regarder une.** Il n’y a ni bannières ni pubs entre les plateaux. Une vidéo ne se lance que si l’on appuie sur un bouton pour la regarder en échange d’une récompense, chaque sorte est limitée chaque jour (39 au total), et l’on peut toujours la refuser sans rien perdre.',
              '**Les vies s’utilisent en perdant, pas en jouant.** Ouvrir un plateau demande une vie, mais n’en utilise pas. Une vie n’est utilisée que lorsqu’un essai est perdu : en abandonnant quand les coups sont épuisés, ou en recommençant ou en quittant après avoir joué un coup, et le jeu le dit avant que cela arrive. Gagner ne coûte jamais de vie, et les vies reviennent toutes seules, une toutes les 30 minutes.',
              '**Aucun compte à créer.** La progression est enregistrée sur l’appareil et dans le propre iCloud de votre famille. OutBrick n’utilise aucun outil d’analyse, et le développeur ne reçoit aucune donnée de jeu.',
              '**Rien n’est un abonnement.** Chaque achat est un achat unique par Apple, rien ne se renouvelle tout seul, et rien de payant n’est proposé sur un plateau avant le niveau 6.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Gratuit, et ça le reste',
            text: 'Chacun des 2 000 niveaux peut se jouer sans payer et sans rien regarder. Les vies se rechargent toutes seules, chaque essai comprend un Indice, une Fusée et un OVNI offerts, et la première annulation de chaque plateau est gratuite. Tous les chiffres sont dans [Récompenses, vies et pubs : comment ça marche](help:rewards-and-ads).',
          },
        ],
      },
      {
        id: 'purchases',
        title: 'Les achats : autorisation d’achat, restrictions et remboursements',
        blocks: [
          {
            t: 'p',
            text: 'Les articles payants apparaissent dans la **Boutique** et sur quelques cartes du jeu, toujours avec un prix dans votre devise, et toujours par la fenêtre d’achat d’Apple. Deux réglages Apple décident si cette fenêtre peut aboutir.',
          },
          { t: 'h3', text: 'Autorisation d’achat (Partage familial)' },
          {
            t: 'p',
            text: 'Si votre enfant a son propre compte Apple dans votre groupe de Partage familial, l’autorisation d’achat vous envoie chaque demande d’achat, y compris les achats dans les jeux, pour que vous l’acceptiez ou la refusiez.',
          },
          {
            t: 'steps',
            items: [
              'Sur votre propre iPhone, ouvrez **Réglages › Famille**.',
              'Touchez le nom de votre enfant.',
              'Touchez **Autorisation d’achat** et activez-la.',
            ],
          },
          { t: 'h3', text: 'Désactiver complètement les achats intégrés' },
          {
            t: 'steps',
            items: [
              'Sur l’appareil de votre enfant, ouvrez **Réglages › Temps d’écran**. (Pour un enfant de votre Partage familial, vous pouvez le faire depuis votre propre iPhone : **Réglages › Temps d’écran**, puis le nom de votre enfant.)',
              'Touchez **Restrictions de contenu et de confidentialité** et activez-les.',
              'Touchez **Achats dans l’iTunes Store et l’App Store**.',
              'Réglez **Achats intégrés** sur **Refuser**. Au passage, réglez **Exiger le mot de passe** sur **Toujours exiger**.',
              'Choisissez un **code Temps d’écran** que votre enfant ne connaît pas, pour que ces choix restent tels que vous les avez laissés.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Apple renomme parfois des lignes d’une version d’iOS à l’autre. Si un nom diffère légèrement sur votre appareil, cherchez le plus proche sous **Restrictions de contenu et de confidentialité**.',
          },
          {
            t: 'p',
            text: 'Avec les achats intégrés désactivés, OutBrick se joue toujours sur tous les plateaux : les pièces gagnées en jouant achètent toujours des bonus, des recharges et des coups en plus, et les vidéos facultatives fonctionnent toujours.',
          },
          { t: 'h3', text: 'Si quelque chose a été acheté par erreur' },
          {
            t: 'p',
            text: 'Apple encaisse chaque paiement : seul Apple peut donc le rembourser. Rendez-vous sur [reportaproblem.apple.com](https://reportaproblem.apple.com), connectez-vous avec le compte Apple utilisé pour l’achat, choisissez **Demander un remboursement**, puis l’article OutBrick. Apple décide, selon ses règles et le droit de la consommation de votre pays. Nous ne voyons pas vos informations de paiement et ne pouvons pas rembourser nous-mêmes un achat sur l’App Store. Plus de détails sur notre [page sur les remboursements](/refunds) et dans [Progression perdue ou achat manquant](help:lost-progress-and-purchases#refunds).',
          },
          {
            t: 'shot',
            id: 'shop',
            alt: 'La boutique : 2 580 pièces et le rayon Offres spéciales, avec un pack de départ unique de pièces, de vies et de bonus, la tirelire, et un Booster Pass de 60 minutes d’OVNI et de fusées gratuits.',
            caption: 'La Boutique. Chaque article payant passe par la fenêtre d’achat d’Apple.',
          },
        ],
      },
      {
        id: 'time',
        title: 'Limites de temps, temps d’arrêt et rappels',
        blocks: [
          {
            t: 'p',
            text: 'Comme aucun plateau n’est minuté, il est facile de poser OutBrick : on ne perd rien en s’arrêtant entre deux plateaux, et les vies continuent de se recharger quand le jeu est fermé. Si vous voulez une limite plus ferme au temps de jeu, Temps d’écran d’Apple s’en charge très bien.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Limites d’app', text: '**Réglages › Temps d’écran › Limites d’app › Ajouter une limite.** Choisissez la catégorie **Jeux**, ou OutBrick seul, et une durée par jour. Une fois le temps écoulé, iOS masque le jeu.' },
              { term: 'Temps d’arrêt', text: '**Réglages › Temps d’écran › Temps d’arrêt.** Une période calme programmée, comme l’heure du coucher, pendant laquelle seules les apps que vous autorisez peuvent s’ouvrir.' },
              { term: 'Rappels d’OutBrick', text: 'Dans le jeu, **Réglages › Jeu › Notifications** les désactive tous. Sur l’iPhone, **Réglages › Notifications › OutBrick** gère les rappels et la pastille de l’icône.' },
            ],
          },
          {
            t: 'list',
            items: [
              'OutBrick ne demande jamais l’autorisation d’envoyer des notifications à la première ouverture. Après le troisième plateau terminé, il demande si Bloo peut garder votre place, et **Plus tard** attend une semaine.',
              'Quand les rappels sont autorisés, le jeu envoie **au plus une notification toutes les 20 heures**, et **jamais entre 22:00 et 09:00**.',
              'La **pastille de l’icône** compte les récompenses qui attendent d’être récupérées, jusqu’à neuf. Elle ne s’affiche que si les notifications sont autorisées, et ouvrir le jeu l’efface.',
              'Un **filtre de concentration** peut couper la musique, suspendre les rappels et masquer la pastille tant qu’un mode de concentration comme Sommeil est actif. Voir [Jouer au calme](help:playing-calmly#reminders).',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Le moment le plus doux pour s’arrêter, c’est entre deux plateaux, sur l’Accueil ou sur la carte. Quitter un plateau avant le premier coup est toujours gratuit ; après un coup, la carte **Quitter ?** indique qu’une vie sera utilisée avant que quoi que ce soit n’arrive.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Ce que conservent le jeu et ce site',
        blocks: [
          {
            t: 'p',
            text: 'Ceci résume notre [politique de confidentialité](/privacy), qui contient tous les détails.',
          },
          { t: 'h3', text: 'Dans le jeu' },
          {
            t: 'list',
            items: [
              '**Aucun compte et aucun outil d’analyse.** Le développeur ne reçoit aucune donnée de jeu.',
              'La **progression** est enregistrée sur l’appareil et synchronisée par votre propre iCloud, que le développeur ne peut pas lire.',
              'Les **achats** sont traités par Apple. OutBrick ne voit ni n’enregistre jamais les informations de carte bancaire.',
              '**Game Center** est facultatif et géré par Apple, selon vos réglages Game Center.',
              '**Publicités :** le seul tiers présent dans le jeu est le service publicitaire de Google, et il n’intervient que lorsqu’un joueur choisit de regarder une vidéo. Les vidéos publicitaires sont limitées à la classification de contenu « tout public » de Google. Si iOS demande si OutBrick peut vous suivre, **Demander à l’app de ne pas me suivre** ne change rien au jeu. Dans l’UE, au Royaume-Uni et en Suisse, un formulaire de consentement apparaît avant la première vidéo, et **Réglages › Jeu › Choix publicitaires** le rouvre.',
              '**Supprimer les pubs**, ou posséder le Pass Brique de la saison en cours, fait que le jeu ne demande plus du tout de publicités, et les récompenses sont toujours versées.',
              '**Effacer mes données**, tout en bas de **Réglages › Jeu**, réinitialise la progression de l’appareil et demande à iCloud de supprimer la sauvegarde. Voir [Progression, iCloud et confidentialité](help:progress-privacy-and-account#delete).',
            ],
          },
          { t: 'h3', text: 'Sur ce site' },
          {
            t: 'list',
            items: [
              'Lire le site ne demande aucun compte. Les visites ne sont mesurées avec Google Analytics **que si vous l’acceptez** dans la bannière des cookies ; jusque-là, rien n’est chargé depuis Google.',
              'Le **formulaire de contact** conserve ce que vous envoyez pour que nous puissions y répondre. Une demande d’assistance est conservée 24 mois après sa clôture, puis supprimée.',
              'Un **compte de la communauté** conserve un nom d’affichage public et une adresse e-mail privée, qui n’est jamais montrée à personne.',
              'Vous pouvez demander une copie de ce que nous détenons, ou sa suppression, avec le [formulaire de contact](/contact), en choisissant le sujet Confidentialité.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Merci de ne pas indiquer les informations personnelles de votre enfant dans les messages à l’assistance. Un numéro de niveau et l’appareil suffisent.',
          },
        ],
      },
      {
        id: 'other-players',
        title: 'Les autres joueurs et la communauté',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Onglet Classement', text: 'Se débloque au niveau 21. Il affiche les noms de joueur et les niveaux, avec un drapeau facultatif. Désactivez **Réglages › Jeu › M’afficher au classement** pour en être retiré, et masquez le drapeau dans le Profil.' },
              { term: 'Courses', text: 'La **Course du village** et **Brick Royale** partagent le nom de joueur avec les autres joueurs de cette course, et seulement si votre enfant y participe. Chacune peut être désactivée dans **Réglages › Jeu › Fonctions du jeu**, tout comme le Sauvetage d’ami, la Course de l’équipe et les offres sur la carte.' },
              { term: 'Nom de joueur', text: 'Se choisit dans le Profil (touchez l’avatar). Un nom inventé est une bonne idée.' },
              { term: 'Game Center', text: 'Le service d’Apple pour les succès, les classements et les amis. Ses réglages d’amis et de jeu multijoueur se trouvent dans **Temps d’écran › Restrictions de contenu et de confidentialité**, à la section Game Center.' },
              { term: 'Messages', text: 'OutBrick a une app Messages pour envoyer un défi de niveau ou un autocollant à quelqu’un avec qui votre enfant échange déjà des messages. Les **Limites de communication** de Temps d’écran s’y appliquent comme à toute conversation.' },
            ],
          },
          { t: 'h3', text: 'La communauté OutBrick' },
          {
            t: 'list',
            items: [
              'La communauté est un forum sur ce site, **distinct du jeu**. Tout le monde peut la lire ; publier demande un compte, et les comptes sont réservés aux personnes **de 16 ans et plus**.',
              'Ses liens dans les **Réglages** s’ouvrent dans Safari, en dehors du jeu, précisément pour cette raison. Les limites de contenu web de Temps d’écran s’y appliquent comme à tout site.',
              'L’adresse e-mail d’un membre n’est jamais montrée à personne. Chaque message est public et modéré, et tout ce qui enfreint les [règles de la communauté](/community/guidelines) peut être signalé.',
              'Si vous pensez qu’un enfant a créé un compte, dites-le-nous avec le [formulaire de contact](/contact) et nous le supprimerons.',
            ],
          },
        ],
      },
      {
        id: 'checklist',
        title: 'Une liste de vérifications à suivre',
        blocks: [
          {
            t: 'p',
            text: 'Dix minutes avec l’appareil de votre enfant et le vôtre suffisent pour tout passer en revue. Imprimez cette page, ou cochez les cases dans votre tête.',
          },
          {
            t: 'table',
            caption: 'Configurer OutBrick pour un enfant',
            head: ['Fait', 'Vérification', 'Où'],
            rows: [
              ['☐', 'L’autorisation d’achat est activée', 'Votre iPhone : **Réglages › Famille ›** votre enfant **› Autorisation d’achat**'],
              ['☐', 'Achats intégrés désactivés, ou mot de passe toujours exigé', '**Réglages › Temps d’écran › Restrictions de contenu et de confidentialité › Achats dans l’iTunes Store et l’App Store**'],
              ['☐', 'Un code Temps d’écran est défini', '**Réglages › Temps d’écran**'],
              ['☐', 'Une limite quotidienne pour les jeux, si vous en voulez une', '**Réglages › Temps d’écran › Limites d’app**'],
              ['☐', 'Un temps d’arrêt pour l’heure du coucher', '**Réglages › Temps d’écran › Temps d’arrêt**'],
              ['☐', 'Les rappels et la pastille comme vous les voulez', 'Dans OutBrick, **Réglages › Jeu › Notifications**, ou **Réglages › Notifications › OutBrick**'],
              ['☐', 'Un nom de joueur inventé', 'OutBrick : touchez l’avatar pour ouvrir le **Profil**'],
              ['☐', 'Affiché ou non dans l’onglet Classement', 'Dans OutBrick, **Réglages › Jeu › M’afficher au classement**'],
              ['☐', 'Les courses et les offres sur la carte, ou non', 'Dans OutBrick, **Réglages › Jeu › Fonctions du jeu**'],
              ['☐', 'La réponse sur le suivi', '**Réglages › Confidentialité et sécurité › Suivi**'],
              ['☐', 'Connecté à iCloud, pour que la progression soit à l’abri', '**Réglages ›** votre nom **› iCloud**'],
            ],
          },
        ],
      },
      {
        id: 'for-children',
        title: 'Pour les jeunes joueurs',
        blocks: [
          {
            t: 'p',
            text: 'Cette partie s’adresse à votre enfant. Lisez-la ensemble si cela aide.',
          },
          {
            t: 'list',
            items: [
              '**Prends ton temps.** Il n’y a pas de chrono. Réfléchis aussi longtemps que tu veux avant chaque coup.',
              '**Perdre, ce n’est pas grave.** Si tu n’as plus de coups, tu peux réessayer. Un cœur s’en va quand tu perds, et les cœurs reviennent tout seuls.',
              '**Les vidéos, c’est toi qui choisis.** Une vidéo ne se lance que si tu touches un bouton pour la regarder. Tu peux toujours dire non.',
              '**Demande avant d’acheter.** Si un bouton affiche un prix en euros, en dollars ou dans n’importe quelle autre monnaie, cela coûte de l’argent pour de vrai. Demande d’abord à un adulte.',
              '**Garde ton nom secret.** Choisis un nom de joueur inventé, pas ton vrai nom.',
              '**Fais des pauses.** Le jeu t’attend. Les amis seront toujours là quand tu reviendras.',
              '**Quelque chose te semble bizarre ?** Arrête-toi et parles-en à un adulte.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Bloqué ?',
            text: 'Touche l’**Indice** dans la barre du bas. Tu en as un offert à chaque essai.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Les questions des parents',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Mon enfant peut-il parler à des inconnus dans OutBrick ?',
                a: 'Non. Le jeu n’a ni chat ni messagerie entre joueurs. Les autres joueurs peuvent voir un nom de joueur et un niveau dans l’onglet Classement, et dans une course à laquelle votre enfant choisit de participer. Les deux peuvent être désactivés dans **Réglages › Jeu**.',
              },
              {
                q: 'Mon enfant verra-t-il des pubs qu’il n’a pas choisies ?',
                a: 'Non. Il n’y a ni bannières ni pubs entre les plateaux. Une vidéo ne se lance qu’après qu’un joueur a touché un bouton pour la regarder en échange d’une récompense, et chaque sorte a une limite quotidienne. **Supprimer les pubs** les retire pour de bon, et les récompenses sont toujours versées.',
              },
              {
                q: 'Mon enfant peut-il dépenser de l’argent par accident ?',
                a: 'Chaque achat payant passe par la fenêtre d’achat d’Apple, qui demande Face ID, Touch ID ou le mot de passe du compte Apple. Avec l’**autorisation d’achat** activée, ou les achats intégrés réglés sur **Refuser**, rien ne peut être acheté sans vous.',
              },
              {
                q: 'Y a-t-il un abonnement ?',
                a: 'Non. Chaque pass et chaque article à durée limitée est un achat unique, et rien ne se renouvelle tout seul.',
              },
              {
                q: 'OutBrick demande-t-il un compte ou une adresse e-mail ?',
                a: 'Non. La progression est conservée sur l’appareil et dans votre propre iCloud. La communauté de ce site demande un compte, mais elle est réservée aux personnes de 16 ans et plus et ne fait pas partie du jeu.',
              },
              {
                q: 'Le jeu fonctionne-t-il sans Internet ?',
                a: 'Oui, les plateaux se jouent hors ligne. Les vidéos, Game Center et la synchronisation ont besoin d’une connexion : hors ligne, les vidéos ne sont tout simplement pas proposées.',
              },
              {
                q: 'À qui demander un remboursement ?',
                a: 'À Apple, sur [reportaproblem.apple.com](https://reportaproblem.apple.com). Nous ne voyons pas les paiements et ne pouvons pas les rembourser. Si un achat n’est pas arrivé, essayez d’abord **Restaurer l’achat** tout en bas de la Boutique, puis [écrivez-nous](/contact?topic=purchases).',
              },
            ],
          },
        ],
      },
    ],
    related: ['playing-calmly', 'rewards-and-ads', 'shop-and-purchases', 'progress-privacy-and-account', 'settings', 'using-the-community'],
  },

  {
    slug: 'playing-calmly',
    category: 'family',
    cover: 'settings-a11y',
    title: 'Jouer au calme',
    summary:
      'Les réglages qui rendent OutBrick plus silencieux et plus doux, pourquoi il n’y a jamais de chrono, comment faire une pause sans rien perdre, et quelques habitudes pour jouer sans se presser.',
    keywords:
      'calme détente se détendre relaxant doux silencieux lent paisible stress anxiété apaisant zen réduire les animations vitesse des animations son musique vibrations notifications pastille filtre de concentration sommeil pause repos sans chrono sans minuteur cosy',
    host: 'zippy',
    hostPose: 'idle',
    sections: [
      {
        id: 'no-clock',
        title: 'Il n’y a jamais de chrono',
        blocks: [
          {
            t: 'p',
            text: 'Aucun plateau d’OutBrick n’est minuté, et rien ne décompte pendant que vous réfléchissez. Chaque plateau vous donne un nombre de **coups**, et c’est la seule limite. Un coup ne compte que s’il produit quelque chose : un échange qui n’aligne rien revient en place sans en utiliser, et un glissement de moins d’une demi-case revient aussi en place.',
          },
          {
            t: 'list',
            items: [
              'Vous pouvez observer un plateau aussi longtemps que vous voulez. Posez le téléphone, revenez, continuez.',
              'Si aucun coup n’est possible, le plateau est mélangé gratuitement. Vous ne pouvez jamais être vraiment bloqué.',
              'Chaque essai comprend un **Indice**, une **Fusée** et un **OVNI** offerts, et la première **annulation** de chaque plateau est gratuite.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les événements et les saisons suivent bien un calendrier, et certains affichent un compte à rebours jusqu’à leur fin. Aucun d’eux ne met de chrono sur un plateau.',
          },
        ],
      },
      {
        id: 'gentler-screen',
        title: 'Un écran plus doux',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Réduire les animations', text: 'Dans les Réglages de l’iPhone, **Accessibilité › Mouvement**. Les mouvements au repos sur le plateau s’arrêtent, les lueurs restent fixes, les indices scintillent sur place, les écrans se fondent au lieu de glisser, et chaque célébration de victoire devient une douce lueur.' },
              { term: 'Atténuer les lumières clignotantes', text: 'Également sous **Mouvement**. Les flashs plein écran des grands combos tombent au tiers de leur intensité et ne se rapprochent jamais à moins d’un tiers de seconde environ.' },
              { term: 'Vitesse des animations', text: 'Dans OutBrick, **Réglages › Accessibilité** : 50 %, 75 %, 100 %, 150 % ou 200 %. À 75 % ou 50 %, les échanges, les chutes et les disparitions se jouent plus lentement et sont plus faciles à suivre.' },
              { term: 'Lueur calme et Contour calme', text: 'Deux pièces gratuites de la **Garde-robe** : **Lueur calme** dans **Célébrations** (une lueur douce, rien qui s’envole) et **Contour calme** dans **Traînées d’échange** (un contour immobile là où se trouvait la brique). Touchez **Porter**.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'L’onglet Accessibilité : Vitesse des animations de 50 % à 200 %, Détail des annonces Bref, Standard ou Complet, et des interrupteurs pour Daltonien, Plateau à fort contraste, Barre pour gauchers, Confirmer les échanges et Son de rangée.',
            caption: 'Réglages › Accessibilité. La vitesse des animations est tout en haut.',
          },
          {
            t: 'p',
            text: 'Plus de détails dans [Vue, audition et mouvement](help:vision-hearing-and-motion#motion).',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Son, musique et vibrations',
        blocks: [
          {
            t: 'list',
            items: [
              '**Sons**, **Musique** et **Vibrations** ont chacun leur interrupteur dans **Réglages › Jeu**, et les trois se retrouvent dans le menu **Pause** : vous pouvez donc les changer en plein plateau.',
              'Les **vibrations** sont les petits tapotements que vous sentez quand les pièces bougent et retombent. L’interrupteur n’apparaît que sur les appareils qui peuvent vibrer.',
              'Les amis s’expriment dans des **bulles de texte**, jamais à voix haute, et rien dans le jeu ne dépend de l’audition. Jouer en silence ne fait rien perdre.',
              'Le bouton Sonnerie/Silence et les boutons de volume fonctionnent comme d’habitude.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous aimez la musique mais pas les effets ? Désactivez **Sons** et laissez **Musique** activée, ou l’inverse.',
          },
        ],
      },
      {
        id: 'quieter',
        title: 'Un jeu plus tranquille',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Fonctions du jeu', text: '**Réglages › Jeu › Fonctions du jeu** désactive le **Sauvetage d’ami**, la **Course du village**, **Brick Royale**, la **Course de l’équipe** et les **Offres sur la carte**. Vous ne perdez rien de ce que vous avez gagné.' },
              { term: 'Jeu rapide', text: 'Activé dès le départ : une victoire mène directement au plateau suivant. Désactivez-le dans **Réglages › Jeu** et une victoire vous ramène plutôt à la carte du Voyage, un endroit tout trouvé pour faire une pause.' },
              { term: 'M’afficher au classement', text: 'Désactivez-le si vous préférez ne pas apparaître dans l’onglet Classement.' },
              { term: 'IA des mascottes', text: 'Là où le modèle intégré d’Apple est disponible, les amis inventent leurs propres répliques. Désactivez-la pour retrouver leurs répliques habituelles.' },
            ],
          },
          {
            t: 'shot',
            id: 'settings-game',
            alt: 'Les Réglages sur l’onglet Jeu : des interrupteurs activés pour les notifications, les sons, la musique, le jeu rapide et le bavardage IA des mascottes, chacun avec une ligne d’explication, puis les boutons Fonctions du jeu, Noter OutBrick, Nous contacter, Communauté, Signaler un bug et Assistance.',
            caption: 'Réglages › Jeu.',
          },
        ],
      },
      {
        id: 'reminders',
        title: 'Les notifications, la pastille de l’icône et les filtres de concentration',
        blocks: [
          {
            t: 'list',
            items: [
              'OutBrick envoie **au plus une notification toutes les 20 heures**, et **jamais entre 22:00 et 09:00**. Chacune propose **Jouer**, **Plus tard** (trois heures) ou **Reporter à demain**.',
              'Désactivez-les toutes avec **Réglages › Jeu › Notifications** dans le jeu, ou choisissez leur style dans les Réglages de l’iPhone, **Notifications › OutBrick**.',
              'La **pastille de l’icône** compte les récompenses qui vous attendent, jusqu’à neuf. Ouvrir le jeu l’efface sans rien récupérer. Pour la masquer définitivement, désactivez **Pastilles** dans **Réglages › Notifications › OutBrick**.',
            ],
          },
          { t: 'h3', text: 'Un filtre de concentration pour OutBrick' },
          {
            t: 'steps',
            items: [
              'Dans les Réglages de l’iPhone, **Concentration**, choisissez un mode, comme Sommeil ou Personnel.',
              'Touchez **Ajouter un filtre**, puis **OutBrick**.',
              'Choisissez ce que fait OutBrick tant que ce mode est actif : couper la musique (ou la musique et les sons), suspendre les rappels et masquer la pastille de l’icône.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Un filtre de concentration ne modifie jamais vos propres réglages. Quand l’un d’eux agit, une ligne sous **Musique**, dans les Réglages, vous le signale.',
          },
        ],
      },
      {
        id: 'stepping-away',
        title: 'Faire une pause sans rien perdre',
        blocks: [
          {
            t: 'list',
            items: [
              '**Entre deux plateaux, c’est le moment idéal pour s’arrêter.** Sur l’Accueil ou sur la carte, rien n’est en cours.',
              '**En plein plateau**, touchez **Pause**. **Reprendre** vous y ramène directement.',
              '**Quitter avant votre premier coup est toujours gratuit.** Après un coup, la carte **Quitter ?** vous indique qu’une vie sera utilisée avant que vous choisissiez.',
              '**Les vies se rechargent toutes seules**, une toutes les 30 minutes, même quand le jeu est fermé. Touchez le cœur dans le Voyage pour savoir quand revient la prochaine.',
              '**Votre série de jours peut attendre.** Une série de trois jours ou plus peut être restaurée dans la semaine qui suit un jour manqué, gratuitement avec un bouclier de série ou pour 250 pièces.',
              '**Votre progression est à l’abri.** Elle est enregistrée au fur et à mesure, sur l’appareil et dans iCloud.',
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'La carte Quitter ? : Cela coûte une vie. Il t’en reste 5. Ta progression sur ce plateau n’est pas sauvegardée. Boutons : Continuer et Quitter.',
            caption: 'La carte Quitter ? vous dit exactement ce que coûte le départ avant que vous choisissiez.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Un coup de main',
            text: 'Un plateau vous résiste ? À partir de votre sixième essai sur ce plateau, le jeu vous donne **3 coups en plus** avant de commencer, une fois par jour et par plateau. Parfois, le coup le plus calme, c’est de revenir demain.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Des habitudes pour jouer sans se presser',
        blocks: [
          {
            t: 'list',
            items: [
              '**Regardez avant de jouer.** Repérez d’abord les portes et les objectifs. Le panneau des objectifs en haut vous dit ce que demande le plateau.',
              '**Utilisez l’Indice offert.** Il est là à chaque essai et ne se garde pas : l’utiliser ne coûte rien.',
              '**Annulez sans vous priver, une fois.** La première annulation de chaque plateau est gratuite.',
              '**Rejouez un plateau terminé** depuis la carte quand vous avez envie de quelque chose de familier. Rejouer ne change jamais votre place dans le Voyage.',
              '**Choisissez un point d’arrêt avant de commencer**, comme la fin d’un village, et laissez la fête du village vous servir de signal.',
              '**Si un plateau vous agace, laissez-le pour aujourd’hui.** Les vies se rechargent, le coup de main arrive, et les plateaux paraissent souvent différents après une pause.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Y a-t-il un chrono que je peux désactiver ?',
                a: 'Il n’y a rien à désactiver : aucun plateau d’OutBrick n’a de chrono. Les coups sont la seule limite.',
              },
              {
                q: 'Comment ralentir les animations ?',
                a: 'Réglez la **Vitesse des animations** sur 75 % ou 50 % dans **Réglages › Accessibilité**. Pour moins de mouvement partout, activez **Réduire les animations** dans les Réglages de l’iPhone.',
              },
              {
                q: 'Puis-je arrêter les confettis quand je gagne ?',
                a: 'Oui. Portez la célébration gratuite **Lueur calme** de la Garde-robe, ou activez **Réduire les animations**, qui rend toutes les célébrations calmes.',
              },
              {
                q: 'Comment supprimer la pastille sur l’icône ?',
                a: 'Désactivez **Pastilles** dans les Réglages de l’iPhone, **Notifications › OutBrick**, ou utilisez un filtre de concentration pour la masquer seulement quand un mode de concentration est actif.',
              },
              {
                q: 'Est-ce que je perds une vie si je pose le jeu en plein plateau ?',
                a: 'Pas pour une pause. Une vie n’est utilisée que lorsqu’un essai est perdu : en abandonnant quand les coups sont épuisés, ou en recommençant ou en quittant après un coup. Faites une pause et revenez quand vous voulez.',
              },
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'vision-hearing-and-motion', 'settings', 'lives-moves-and-undos', 'parents-guide', 'apple-features'],
  },

  {
    slug: 'rewards-and-ads',
    category: 'family',
    cover: 'wall',
    title: 'Récompenses, vies et pubs : comment ça marche, en termes simples',
    summary:
      'Tous les chiffres des vies, des annulations, du manque de coups et des huit vidéos facultatives, ce que changent Supprimer les pubs et le Pass Brique, ce que les pièces permettent d’acheter, et ce qu’OutBrick ne vend jamais.',
    keywords:
      'économie vies cœurs annuler annulations coups continuer plus de coups pièces prix vidéo pubs publicités récompensée regarder limite quotidienne plafond supprimer les pubs pass brique gratuit payer pour gagner pay to win dépenser argent équitable honnête jamais vendu',
    host: 'sprout',
    hostPose: 'think',
    sections: [
      {
        id: 'short',
        title: 'En bref',
        blocks: [
          {
            t: 'list',
            items: [
              '**Perdre coûte une vie ; jouer et gagner, non.** Les vies reviennent toutes seules, une toutes les 30 minutes.',
              '**Ne plus avoir de coups n’est pas la fin.** Vous pouvez continuer avec des pièces, avec une vidéo, ou simplement réessayer.',
              '**Les vidéos, c’est toujours vous qui choisissez.** Il en existe huit sortes, chacune avec sa limite quotidienne, 39 en tout. Rien ne se lance tout seul.',
              '**Payer supprime les vidéos, jamais les récompenses.** Supprimer les pubs et le Pass Brique versent les mêmes récompenses, sans la vidéo.',
              '**Rien n’est un abonnement, et rien de payant n’apparaît sur un plateau avant le niveau 6.**',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Chaque chiffre de cette page est celui que le jeu utilise aujourd’hui. Si l’un d’eux change un jour, cette page change avec lui.',
          },
        ],
      },
      {
        id: 'lives',
        title: 'Les vies',
        blocks: [
          {
            t: 'list',
            items: [
              'Vous pouvez avoir jusqu’à **5 vies**, ou **8** tant que vous possédez le Pass Brique de la saison en cours.',
              'Une vie revient toutes les **30 minutes**, même quand le jeu est fermé.',
              'Ouvrir un plateau demande une vie, mais **n’en utilise pas**.',
            ],
          },
          {
            t: 'table',
            caption: 'Quand une vie est utilisée',
            head: ['Vous…', 'Vie utilisée ?'],
            rows: [
              ['Terminez le plateau', 'Non'],
              ['Êtes à court de coups et abandonnez (ou fermez l’écran « Plus de coups »)', 'Oui'],
              ['Recommencez ou partez **après** un coup', 'Oui, et la carte vous prévient d’abord'],
              ['Recommencez ou partez **avant** votre premier coup', 'Non'],
              ['Continuez avec des coups en plus', 'Non : c’est le même essai'],
              ['Arrivez à un plateau où plus rien ne bouge, avec des coups restants', 'Non : il est mélangé gratuitement'],
              ['Perdez pendant votre essai offert du jour ou avec des vies illimitées', 'Non'],
            ],
          },
          {
            t: 'p',
            text: 'Plus de vies ? Une fois par jour, vous pouvez obtenir un **essai offert** sur un plateau. Sinon, vous pouvez attendre, recharger toute la réserve pour **600 pièces**, regarder une vidéo pour **1 vie**, ou acheter des vies illimitées : **1 heure pour 900 pièces**, **3 heures pour 2 000** ou **24 heures pour 6 000**, ou avec de l’argent réel dans la Boutique.',
          },
          {
            t: 'shot',
            id: 'no-lives',
            alt: 'Plus de vies : 0 vie sur 5 et un compte à rebours jusqu’à la suivante, puis des vies illimitées pendant 1, 3 ou 24 heures, contre des pièces ou de l’argent, une recharge pour 600 pièces, une vidéo pour une vie, et OK. Une note précise qu’une vie n’est perdue que lorsqu’un plateau est perdu, qu’elles reviennent une toutes les 30 minutes, et qu’une fois par jour un réservoir vide donne un essai gratuit.',
            caption: 'Plus de vies : attendre, recharger ou continuer.',
          },
        ],
      },
      {
        id: 'undos',
        title: 'Les annulations',
        blocks: [
          {
            t: 'list',
            items: [
              'La **première annulation de chaque plateau est gratuite**, et elle ne s’épuise jamais.',
              'Ensuite, les annulations viennent d’une réserve de **5** au maximum, qui se recharge d’**une toutes les 25 minutes**.',
              'Le bouton Annuler compte les deux : un nouveau plateau affiche donc **6** quand votre réserve est pleine.',
              'Réserve vide ? Achetez-en **5 pour 250 pièces**, regardez une vidéo pour en obtenir **2**, ou attendez.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Quand les coups sont épuisés',
        blocks: [
          {
            t: 'p',
            text: 'Quand les coups sont épuisés avant que les objectifs soient atteints, l’écran **Plus de coups** montre ce qu’il reste et vous laisse choisir. Continuer, c’est rester dans le même essai : cela ne coûte donc jamais de vie.',
          },
          {
            t: 'table',
            caption: 'Continuer avec des pièces, dans un même essai',
            head: ['Continuer', 'Prix', 'Vous obtenez'],
            rows: [
              ['La première fois', '300 pièces', '+5 coups'],
              ['La deuxième fois', '500 pièces', '+5 coups et un Indice'],
              ['La troisième fois et les suivantes', '900 pièces', '+5 coups et un OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'Le prix revient à 300 pièces à chaque nouvel essai, quand vous quittez le plateau ou quand vous le terminez. Il ne dépasse jamais 900.',
              'Ou regardez une **vidéo facultative** : **+2 coups**, puis **+1 coup**, puis un **OVNI offert**. Une vidéo ne fait jamais monter le prix en pièces.',
              'Un **+5 coups** mis de côté peut aussi servir ici. Les détenteurs du Pass Brique y reçoivent en plus **trois coups gratuits**.',
              'Sur un plateau que vous avez déjà tenté plusieurs fois, chaque relance donne un peu plus : un coup supplémentaire pour chaque essai raté après le troisième, jusqu’à +15.',
              '**Abandonner** met fin à l’essai et utilise une vie.',
            ],
          },
          {
            t: 'shot',
            id: 'wall',
            alt: 'L’écran Plus de coups, qui montre les objectifs restants, un bouton 5 coups de plus pour 300 pièces, un bouton Regarder pour 2 coups de plus, et Abandonner.',
            caption: 'Plus de coups : ce qu’il vous reste à faire, et vos options.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Pourquoi le prix monte',
            text: 'À la troisième relance, recharger toute une réserve de vies (600 pièces) et repartir de zéro coûte moins cher que 900 pièces de coups de plus. Le jeu préfère que vous recommenciez calmement plutôt que de continuer à payer pour faire du surplace.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Les huit vidéos facultatives',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick n’a **aucune publicité imposée** : pas de bannières, pas de pubs entre les plateaux, rien qui se lance tout seul. Une vidéo ne démarre que si vous touchez un bouton pour la regarder, et seule une vidéo regardée jusqu’au bout rapporte. Chaque sorte a sa propre limite quotidienne, et les limites se réinitialisent à minuit.',
          },
          {
            t: 'table',
            caption: 'Chaque vidéo, sa récompense et sa limite quotidienne',
            head: ['Où', 'Récompense', 'Par jour'],
            rows: [
              ['Plus de vies', '1 vie', '8'],
              ['Plus d’annulations', '2 annulations', '8'],
              ['Plus de coups', '+2 coups, puis +1, puis un OVNI offert', '6'],
              ['Plus de coups, Indice offert', 'Un Indice (désactivé dans la version actuelle : vous ne le verrez pas)', '4'],
              ['Carte de victoire', 'Les pièces de votre victoire, une seconde fois (75 à 300)', '4'],
              ['Roue', 'Un deuxième tour', '1'],
              ['Ballon cadeau', 'Des pièces ou un bonus gratuit pendant 10 minutes', '2'],
              ['Ciné-briques', 'Une case de prix par vidéo', '6'],
              ['**Les huit**', '', '**39**'],
            ],
          },
          {
            t: 'list',
            items: [
              'Refuser une vidéo ne coûte rien.',
              'Quand une limite est atteinte, son bouton disparaît simplement jusqu’au lendemain.',
              'Les vidéos ont besoin d’une connexion Internet. Hors ligne, les plateaux se jouent toujours ; les vidéos ne sont simplement pas proposées.',
              'Les vidéos publicitaires sont limitées à la classification de contenu « tout public » de Google.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads-and-pass',
        title: 'Supprimer les pubs et le Pass Brique',
        blocks: [
          {
            t: 'p',
            text: 'Les deux retirent les vidéos **sans retirer les récompenses** : chaque bouton qui proposait de regarder indique **Réclamer la récompense** à la place et verse la récompense immédiatement, dans les mêmes limites quotidiennes. Payer ne vous coûte jamais une récompense.',
          },
          {
            t: 'table',
            head: ['Comparer', 'Supprimer les pubs', 'Pass Brique'],
            rows: [
              ['Ce que c’est', 'Un achat unique, gardé pour toujours', 'Un achat unique pour une saison'],
              ['Vidéos', 'Disparues pour de bon', 'Disparues tant que vous possédez le pass de la saison en cours'],
              ['Récompenses', 'Versées sans vidéo', 'Versées sans vidéo, plus les récompenses de la piste Premium'],
              ['Vies', '5', '8 tant que vous possédez le pass de la saison'],
              ['Plus de coups', 'Comme d’habitude', 'Trois coups gratuits en plus'],
              ['Restauration sur un nouvel appareil', 'Oui', 'Oui, saisons 1 à 3'],
            ],
          },
          {
            t: 'p',
            text: 'Les prix sont affichés dans votre devise dans la Boutique. Aucun des deux ne se renouvelle tout seul. Voir [La Boutique, les achats et la restauration](help:shop-and-purchases#remove-ads) et [le Pass Brique](help:rewards-and-events#pass).',
          },
        ],
      },
      {
        id: 'coins',
        title: 'À quoi servent les pièces',
        blocks: [
          {
            t: 'p',
            text: 'Les pièces se gagnent en jouant : **25** pour un plateau Normal terminé, **50** pour un Difficile ou un Nuit, **80** pour un Très difficile ou un Boss, **100** pour la Brique du jour, plus les séries, la Roue, les Missions, les récompenses d’étoiles des villages et le Pass Brique. On peut aussi acheter des packs de pièces dans la Boutique.',
          },
          {
            t: 'table',
            caption: 'Ce que les pièces permettent d’acheter',
            head: ['Article', 'Pièces'],
            rows: [
              ['Indice', '150'],
              ['Fusée', '300'],
              ['OVNI', '500'],
              ['Cinq annulations', '250'],
              ['Une réserve de vies pleine', '600'],
              ['Continuer quand les coups sont épuisés', '300, puis 500, puis 900'],
              ['Un coup de pouce après une défaite (une Fusée sur le plateau et un OVNI offert), à partir du niveau 6', '800'],
              ['Vies illimitées : 1 heure, 3 heures, 24 heures', '900, 2 000, 6 000'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les deux recharges, vies et annulations, ont un prix fixe. Il n’augmente jamais, quel que soit le nombre de fois où vous en avez besoin.',
          },
        ],
      },
      {
        id: 'never-sold',
        title: 'Ce qu’OutBrick ne vend jamais',
        blocks: [
          {
            t: 'list',
            items: [
              '**Du temps.** Il n’y a pas de chrono à contourner en payant.',
              '**L’accessibilité.** Chaque réglage d’accessibilité est gratuit, tout comme les pièces de la Garde-robe qui aident, comme la célébration calme et les socles à fort contraste.',
              '**Le hasard.** Il n’y a ni coffres à butin ni packs mystère. Chaque article payant dit exactement ce qu’il contient, et la Roue ne demande jamais d’argent.',
              '**Un abonnement.** Rien ne se renouvelle tout seul.',
              '**De la pression sur les nouveaux joueurs.** Rien de payant n’est proposé sur un plateau avant le niveau 6.',
              '**Les Missions.** Elles rapportent des pièces, des bonus et des jetons, et ne vendent jamais rien.',
              '**Vos données.** Nous ne vendons ni ne partageons d’informations personnelles contre de l’argent.',
              '**Les avis.** Noter le jeu ne rapporte aucune récompense.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les pièces de la Garde-robe changent l’apparence du jeu, jamais sa façon de se jouer.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Gagner coûte-t-il une vie ?',
                a: 'Jamais. Seul un essai perdu en coûte une.',
              },
              {
                q: 'Dois-je regarder des vidéos pour continuer à jouer ?',
                a: 'Non. Les vies se rechargent toutes seules, et chaque plateau peut se jouer sans rien regarder ni payer.',
              },
              {
                q: 'Pourquoi un bouton Regarder a-t-il disparu ?',
                a: 'Vous avez atteint la limite quotidienne de cette vidéo, ou aucune vidéo n’est disponible pour le moment. Les limites se réinitialisent à minuit.',
              },
              {
                q: 'J’ai acheté Supprimer les pubs. Est-ce que je perds les vies et les coups gratuits que donnaient les vidéos ?',
                a: 'Non. Les mêmes boutons indiquent **Réclamer la récompense** et versent la récompense immédiatement, dans les mêmes limites quotidiennes.',
              },
              {
                q: 'Le Pass Brique est-il un abonnement ?',
                a: 'Non. C’est un achat unique pour une saison, et il ne se renouvelle pas tout seul.',
              },
            ],
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'boosters-and-pause', 'shop-and-purchases', 'rewards-and-events', 'parents-guide', 'common-questions'],
  },

  {
    slug: 'meet-the-friends',
    category: 'progress',
    cover: 'home',
    title: 'Faites connaissance avec les neuf amis',
    summary:
      'Bloo, Peach, Sprout, Bricko, Zippy, Vio, Moss, Flurry et Poppy : qui est chaque ami, comment il le montre, et partout où vous les croisez dans OutBrick.',
    keywords:
      'amis mascottes personnages héros bande bloo peach sprout bricko zippy vio moss flurry poppy hôte en-tête accueil scène garde-robe tenue autocollant widget personnalité caractère',
    host: 'bloo',
    hostPose: 'cheer',
    sections: [
      {
        id: 'cast',
        title: 'La bande',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick compte **neuf amis en briques**, chacun une brique jouet avec sa couleur, son allure et sa façon bien à lui de faire la fête. Ils vous tiennent compagnie sur l’Accueil et sur chaque plateau, et montrent ce qu’ils ressentent par leurs mouvements et par ce qui apparaît dans leurs bulles de texte.',
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Les amis ne parlent jamais à voix haute. Tout ce qu’ils ont à dire apparaît dans une bulle de texte : rien chez eux ne dépend de l’audition.',
          },
          {
            t: 'shot',
            id: 'home',
            alt: 'L’accueil : en haut, l’avatar, 2 580 pièces, une série de 12 jours, Missions et la roue des Réglages. Sous le logo OUTBRICK, une carte annonce le Défi objectif, qui commence bientôt. Trois amis briques en chapeau de soleil se tiennent sur une pelouse de briques, au-dessus d’un bouton vert Niveau 214. La barre du bas affiche Accueil, Classement, Voyage, Boutique et Pass.',
            caption: 'Trois amis à la fois se tiennent sur la scène de l’Accueil, à tour de rôle.',
          },
        ],
      },
      {
        id: 'bloo-peach-sprout',
        title: 'Bloo, Peach et Sprout',
        blocks: [
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Bloo, celui qui a la montre',
            text: 'Une brique bleue avec une montre au bout d’un cordon. Bloo regarde l’heure entre deux plateaux et tourne sur lui-même quand vous en terminez un : le premier à faire signe, le premier à tenter le coup audacieux, et tout à fait sûr de l’avoir fait exprès.',
          },
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Peach, la prévoyante',
            text: 'Une brique couleur pêche avec une petite pêche sur le dessus. Peach compte les coups deux fois, garde toujours un plan de secours et s’inquiète du début à la fin, puis applaudit quand la pile finit par s’ouvrir.',
          },
          {
            t: 'friend',
            friend: 'sprout',
            pose: 'think',
            title: 'Sprout, celui qui pose des questions',
            text: 'Une petite brique verte avec une jeune pousse sur le dessus. Sprout remarque l’ouverture devant laquelle tout le monde est passé et pose la question que personne d’autre n’a posée. Quand ça marche : deux bonds et une pirouette.',
          },
        ],
      },
      {
        id: 'bricko-zippy-vio',
        title: 'Bricko, Zippy et Vio',
        blocks: [
          {
            t: 'friend',
            friend: 'bricko',
            pose: 'cheer',
            title: 'Bricko, celui qui enchaîne les répétitions',
            text: 'Une brique rouge en grosses bottes rouges qui traite chaque plateau comme une série à la salle de sport. Bricko compte ses répétitions, et un plateau terminé a droit à un pouce levé puis à une démonstration de muscles, dans cet ordre.',
          },
          {
            t: 'friend',
            friend: 'zippy',
            pose: 'idle',
            title: 'Zippy, celui qui part dans la lune',
            text: 'Une brique jaune toujours prête à faire un clin d’œil. Zippy commence une idée, perd le fil en route, et revient juste à temps pour la victoire. Une petite pichenette lui vaut une pirouette ; une victoire, un triple bond.',
          },
          {
            t: 'friend',
            friend: 'vio',
            pose: 'idle',
            title: 'Vio, casque sur les oreilles et oreille critique',
            text: 'Une brique violette avec un casque audio, qui entend un rythme dans une belle suite de coups. Vio note vos coups comme des morceaux de musique, se balance à 112 battements par minute, et considère un plateau terminé avec soin comme un morceau cinq étoiles.',
          },
        ],
      },
      {
        id: 'moss-flurry-poppy',
        title: 'Moss, Flurry et Poppy',
        blocks: [
          {
            t: 'friend',
            friend: 'moss',
            pose: 'idle',
            title: 'Moss, le garçon de ferme',
            text: 'Une brique vert foncé avec une ceinture à outils et des bottes de travail pleines de boue, et un dicton de la ferme pour chaque temps qu’il fait. Moss garde un seul applaudissement lent pour le moment où vous l’aurez mérité, pour qu’il compte vraiment.',
          },
          {
            t: 'friend',
            friend: 'flurry',
            pose: 'idle',
            title: 'Flurry, celui qui porte l’écharpe',
            text: 'Une brique bleu pâle avec un bonnet à pompon rayé et une écharpe, qui aime le thé et les petits signes de la main. Flurry n’est jamais pressé, ce qui va très bien à un jeu sans chrono. Regardez l’écharpe : son bout suit toujours avec un temps de retard.',
          },
          {
            t: 'friend',
            friend: 'poppy',
            pose: 'cheer',
            title: 'Poppy et ses contes de fées',
            text: 'Une brique rose avec une baguette magique au bout étoilé. Pour Poppy, chaque plateau est le milieu d’un conte de fées, et la fin arrive quand la baguette éclate en étoiles.',
          },
        ],
      },
      {
        id: 'where',
        title: 'Où vous les croisez',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Accueil', text: 'Trois amis se tiennent sur la scène en briques jouets, à tour de rôle.' },
              { term: 'Sur chaque plateau', text: 'L’ami qui accueille le village est installé dans le cadre rond de l’en-tête, habillé pour ce village. Touchez-le pour un petit rire, un signe de la main ou un « tope là ».' },
              { term: 'Victoires et défaites de justesse', text: 'Un ami fait la fête sur la carte de victoire, et un ami compatit sur l’écran **Niveau échoué** quand un plateau vous échappe.' },
              { term: 'La Garde-robe', text: 'Des tenues pour les amis, comme la couronne dorée et la fraise rouge du Roi Bricko. Les pièces de la Garde-robe changent l’apparence du jeu, jamais sa façon de se jouer.' },
              { term: 'La Collection', text: 'Les Cartes de saison, neuf par saison, représentent les amis.' },
              { term: 'En dehors du jeu', text: 'Dites « Rencontre Bloo dans OutBrick » à Siri (ou le nom de n’importe quel ami), trouvez un ami dans Spotlight, ajoutez le widget **Mascotte du jour** ou **Humeur des mascottes**, ou envoyez l’autocollant d’un ami dans Messages.' },
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'La Garde-robe : le Roi Bricko avec une couronne dorée et une fraise rouge, un bouton vert Porter, et en dessous des onglets Tenues, Socles de plateau, Palettes et Finition des briques, ainsi que l’Ensemble bord de mer.',
            caption: 'Tenues, socles de plateau, palettes, finitions des briques, célébrations, traînées et cadres.',
          },
          {
            t: 'p',
            text: 'Plus de détails dans [Les amis, la Collection et la Garde-robe](help:friends-and-wardrobe).',
          },
        ],
      },
      {
        id: 'bubbles',
        title: 'Les bulles de texte et l’IA des mascottes',
        blocks: [
          {
            t: 'p',
            text: 'Les amis vous encouragent dans des bulles de texte. Sur les appareils équipés du modèle de langage intégré d’Apple, ils peuvent aussi inventer leurs propres répliques : **Réglages › Jeu › IA des mascottes**, affiché seulement là où le modèle est disponible dans votre langue. Tout se passe sur votre appareil, et le désactiver leur rend leurs répliques habituelles.',
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Puis-je choisir l’ami qui accueille un plateau ?',
                a: 'Chaque village a son propre ami hôte, installé dans le cadre de l’en-tête et habillé pour ce village. Vous pouvez changer sa tenue dans la Garde-robe.',
              },
              {
                q: 'Pourquoi les amis ne parlent-ils pas ?',
                a: 'Ils s’expriment uniquement dans des bulles de texte : tout ce qu’ils disent peut être lu, et rien ne dépend de l’audition.',
              },
              {
                q: 'Les amis changent-ils la façon dont un plateau se joue ?',
                a: 'Non. Les amis et leurs tenues sont là pour la compagnie et la fête. Chaque plateau se joue de la même façon, quel que soit l’ami qui l’accueille.',
              },
              {
                q: 'Puis-je mettre un ami sur mon écran d’accueil ?',
                a: 'Oui. Ajoutez le widget **Mascotte du jour** ou **Humeur des mascottes** et choisissez un ami, ou « Surprends-moi ». Voir [Widgets, Siri et Raccourcis](help:apple-features#widgets).',
              },
            ],
          },
        ],
      },
    ],
    related: ['friends-and-wardrobe', 'menus-tour', 'apple-features', 'welcome', 'glossary'],
  },

  {
    slug: 'lost-progress-and-purchases',
    category: 'account',
    cover: 'shop',
    title: 'Progression perdue ou achat manquant : pas à pas',
    summary:
      'Récupérer un achat avec Restaurer l’achat, ce qu’il faut nous envoyer s’il manque toujours, comment Apple gère les remboursements, et comment retrouver votre progression avec iCloud, sur un nouvel iPhone ou iPad, et avec Game Center.',
    keywords:
      'progression perdue achat manquant restaurer l’achat pas reçu pas arrivé acheté payé débité remboursement rembourser reportaproblem reçu numéro de commande icloud synchronisation nouveau téléphone transfert réinstaller game center niveau réinitialisé disparu',
    host: 'moss',
    hostPose: 'idle',
    sections: [
      {
        id: 'start',
        title: 'Commencez ici',
        blocks: [
          {
            t: 'p',
            text: 'La plupart des choses manquantes reviennent en une minute ou deux. Trouvez votre problème ci-dessous et suivez ses étapes dans l’ordre.',
          },
          {
            t: 'table',
            head: ['Ce qui s’est passé', 'Allez à'],
            rows: [
              ['Un article que j’ai acheté n’est pas dans le jeu', '[Récupérer un achat](#restore)'],
              ['J’ai restauré et il manque toujours', '[Il manque toujours : écrivez-nous](#still-missing)'],
              ['Je veux être remboursé', '[Les remboursements relèvent d’Apple](#refunds)'],
              ['Mon niveau, mes pièces ou mes étoiles ont disparu', '[La progression a disparu](#progress)'],
              ['J’ai un nouvel iPhone ou iPad', '[Passer à un nouvel appareil](#new-device)'],
              ['Mes succès ou mes scores Game Center', '[Game Center](#game-center)'],
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            title: 'Nous ne vous demanderons jamais le mot de passe de votre compte Apple ni vos informations de carte bancaire.',
            text: 'Ni par e-mail, ni dans la communauté, ni nulle part ailleurs. Personne chez OutBrick n’en a besoin, et nous ne voyons pas les paiements. Si un message qui prétend venir de nous les demande, n’y répondez pas.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Récupérer un achat',
        blocks: [
          {
            t: 'steps',
            items: [
              'Vérifiez que l’appareil est connecté au **même compte Apple** que celui de l’achat, ainsi qu’à iCloud : **Réglages ›** votre nom.',
              'Ouvrez OutBrick et laissez-lui un moment en ligne.',
              'Ouvrez la **Boutique** et faites défiler tout en bas.',
              'Touchez **Restaurer l’achat**.',
            ],
          },
          {
            t: 'table',
            caption: 'Ce qui revient, et comment',
            head: ['Article', 'Comment il revient'],
            rows: [
              ['Supprimer les pubs', '**Restaurer l’achat**'],
              ['Pass Brique, saisons 1 à 3', '**Restaurer l’achat**'],
              ['Articles de la Garde-robe', '**Restaurer l’achat**'],
              ['Pièces, bonus, vies et autres choses qui se consomment', 'Avec votre progression, via iCloud. L’App Store ne les restaure pas.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Vérifiez que l’achat a bien abouti',
            text: 'Sur l’iPhone, **Réglages ›** votre nom **› Contenu multimédia et achats › Afficher le compte › Historique des achats** liste ce qu’Apple a facturé. Si l’article n’y figure pas, le paiement n’a pas abouti. Avec l’**autorisation d’achat**, un achat attend que l’organisateur de la famille l’accepte.',
          },
        ],
      },
      {
        id: 'still-missing',
        title: 'Il manque toujours : écrivez-nous',
        blocks: [
          {
            t: 'steps',
            items: [
              'Ouvrez notre [formulaire de contact avec le sujet Achats et remboursements](/contact?topic=purchases).',
              'Indiquez **ce que vous avez acheté** et **quand**, même approximativement.',
              'Ajoutez votre appareil, votre version d’iOS et votre version d’OutBrick. La version du jeu figure en bas de votre **Profil** (touchez votre avatar).',
              'Envoyez-le. Une personne lit chaque message, et vous recevez un e-mail avec une référence et un lien privé.',
              'Suivez votre demande sur [votre demande d’assistance](/support/request) : où elle en est, chaque réponse, et un espace pour ajouter des détails.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Que partager, et où',
            text: 'Vous pouvez indiquer votre **numéro de commande Apple** dans le formulaire de contact privé. Ne publiez jamais de reçu, de numéro de commande ou de capture d’écran d’un achat dans la communauté, et n’envoyez jamais à personne un reçu complet, un numéro de carte, un mot de passe ou un code de sécurité.',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Les remboursements relèvent d’Apple',
        blocks: [
          {
            t: 'p',
            text: 'Apple encaisse chaque paiement pour OutBrick : c’est donc Apple seul qui décide des remboursements. Nous ne voyons pas vos informations de paiement et ne pouvons pas rembourser un achat sur l’App Store.',
          },
          {
            t: 'steps',
            items: [
              'Rendez-vous sur [reportaproblem.apple.com](https://reportaproblem.apple.com).',
              'Connectez-vous avec le compte Apple utilisé pour l’achat.',
              'Choisissez **Demander un remboursement**, choisissez un motif, puis l’achat OutBrick.',
              'Envoyez la demande, et suivez son état auprès d’Apple. L’acceptation et les délais dépendent d’Apple et du droit de la consommation de votre pays.',
            ],
          },
          {
            t: 'p',
            text: 'Un prélèvement inattendu ou en double suit le même chemin : vérifiez d’abord l’**Historique des achats**, puis Signaler un problème. Plus de détails sur notre [page sur les remboursements](/refunds).',
          },
        ],
      },
      {
        id: 'progress',
        title: 'La progression a disparu',
        blocks: [
          {
            t: 'steps',
            items: [
              'Vérifiez que vous êtes connecté à iCloud avec le même compte Apple qu’avant, et qu’iCloud Drive est activé.',
              'Ouvrez OutBrick en ligne et laissez-lui une minute. La progression est récupérée et fusionnée au démarrage du jeu.',
              'Fermez complètement le jeu et rouvrez-le.',
              'Si un autre appareil a la progression que vous attendez, ouvrez-y aussi OutBrick, en ligne, pour qu’il puisse partager sa sauvegarde.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Rien n’est écrasé',
            text: 'Quand deux appareils ne sont pas d’accord, le niveau et les compteurs les plus élevés sont conservés, les collections sont réunies, et les pièces dépensées sur un appareil ne sont jamais rendues par un autre.',
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Si un appareil n’a jamais été connecté à iCloud, sa progression n’existe que sur cet appareil. Connectez-vous à iCloud dessus et ouvrez OutBrick une fois, puis vérifiez de nouveau l’autre appareil.',
          },
          {
            t: 'p',
            text: '**Effacer mes données** est irréversible. Après l’avoir utilisé, un autre appareil connecté au même iCloud peut resynchroniser une ancienne sauvegarde : faites-le donc sur chaque appareil si vous voulez vraiment repartir de zéro. Voir [Progression, iCloud et confidentialité](help:progress-privacy-and-account#delete).',
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Passer à un nouvel iPhone ou iPad',
        blocks: [
          {
            t: 'steps',
            items: [
              'Avant de changer, ouvrez OutBrick une fois sur l’**ancien** appareil, en étant connecté à iCloud.',
              'Sur le nouvel appareil, connectez-vous au même compte Apple et activez iCloud.',
              'Installez OutBrick depuis l’App Store et ouvrez-le. Votre progression est récupérée et fusionnée au démarrage du jeu.',
              'Ouvrez la **Boutique**, faites défiler tout en bas et touchez **Restaurer l’achat**.',
            ],
          },
          {
            t: 'p',
            text: 'Le son, la musique, les vibrations, les notifications et la plupart des réglages d’accessibilité du plateau restent sur chaque appareil : réglez-les de nouveau sur le nouveau. Votre choix Daltonien voyage avec votre progression.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              '**Game Center** est un service d’Apple. Il conserve vos 65 succès et les classements du niveau le plus élevé, du total de plateaux terminés, d’aujourd’hui et de cette semaine.',
              'Votre **progression dans le Voyage n’est pas enregistrée dans Game Center**. Elle voyage par iCloud.',
              'Connectez-vous à Game Center dans les Réglages de l’iPhone avec le même compte Apple pour retrouver vos succès.',
              'L’onglet **Classement** du jeu est un tableau distinct, tous temps confondus. Vous y apparaissez tant que **Réglages › Jeu › M’afficher au classement** est activé.',
            ],
          },
        ],
      },
      {
        id: 'questions',
        title: 'Questions',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Pouvez-vous me rembourser ?',
                a: 'Non, seul Apple le peut. Utilisez [reportaproblem.apple.com](https://reportaproblem.apple.com). Si l’article n’est jamais arrivé, nous pouvons vous aider : [écrivez-nous](/contact?topic=purchases).',
              },
              {
                q: 'Pourquoi Restaurer l’achat n’a-t-il pas rendu mes pièces ?',
                a: 'Les pièces, les bonus et les vies se consomment en jouant : l’App Store ne les restaure donc pas. Ils voyagent avec votre progression via iCloud.',
              },
              {
                q: 'Dois-je publier mon reçu pour que vous le vérifiiez ?',
                a: 'Surtout pas. Ne publiez jamais de reçu dans la communauté. Utilisez le [formulaire de contact](/contact?topic=purchases) privé, sans numéro de carte, mot de passe ni code de sécurité.',
              },
              {
                q: 'Quelqu’un m’a demandé le mot de passe de mon compte Apple pour régler mon achat.',
                a: 'Ce n’était pas nous. Nous ne demandons jamais le mot de passe de votre compte Apple ni vos informations de carte bancaire. Ne les communiquez pas, et prévenez-nous avec le [formulaire de contact](/contact).',
              },
              {
                q: 'J’ai réinstallé OutBrick et je suis revenu au niveau 1.',
                a: 'Restez en ligne une minute, avec iCloud activé et le même compte Apple. Si rien ne change, l’ancienne progression était peut-être sur un appareil qui n’était pas connecté à iCloud : voir [La progression a disparu](#progress).',
              },
            ],
          },
        ],
      },
    ],
    related: ['shop-and-purchases', 'progress-privacy-and-account', 'troubleshooting', 'parents-guide', 'apple-features', 'common-questions'],
  },
];
