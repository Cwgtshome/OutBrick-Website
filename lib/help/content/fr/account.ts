import type { HelpArticle } from '../../model.ts';

/** Réglages, fonctions Apple, progression et confidentialité, en français. Vérifié avec la 5.1.1 (68). */
export const accountArticles: HelpArticle[] = [
  {
    slug: 'settings',
    category: 'account',
    cover: 'settings-community',
    title: 'Tous les réglages expliqués',
    summary:
      'Chaque interrupteur et chaque bouton des onglets Jeu et Accessibilité des Réglages, ce qu’il fait, sa valeur par défaut, et où mènent les liens vers l’assistance, la communauté et la confidentialité.',
    keywords: 'réglages paramètres options préférences son musique vibrations notifications jeu rapide ia mascottes classement fonctions du jeu noter contact communauté signaler bug choix publicitaires confidentialité effacer données',
    sections: [
      {
        id: 'open',
        title: 'Ouvrir les Réglages',
        blocks: [
          {
            t: 'p',
            text: 'Touchez l’engrenage en haut à droite de l’**Accueil** ou du **Voyage**. Les Réglages occupent tout l’écran ; le **×** rouge les ferme (tout comme {{Échap}} sur un clavier, ou le frotter avec deux doigts avec VoiceOver). Ils ont deux onglets : **Jeu**, qui s’ouvre en premier, et **Accessibilité**.',
          },
          {
            t: 'p',
            text: 'Chaque interrupteur affiche **Arrêt | Marche**, avec en dessous une ligne qui explique ce qu’il fait. VoiceOver lit cette ligne comme indication de l’interrupteur.',
          },
        ],
      },
      {
        id: 'game',
        title: 'L’onglet Jeu',
        blocks: [
          {
            t: 'table',
            head: ['Réglage', 'Ce qu’il fait', 'Par défaut'],
            rows: [
              ['Notifications', 'Des rappels du jeu, par exemple quand vos vies sont pleines ou qu’une récompense du jour vous attend. L’activer demande l’autorisation à iOS si ce n’est pas déjà fait.', 'Activé'],
              ['Sons', 'Les effets sonores sur les plateaux et dans les menus.', 'Activé'],
              ['Musique', 'La musique de fond dans les menus et sur les plateaux.', 'Activé'],
              ['Vibrations', 'De petites vibrations quand les pièces bougent, s’alignent et retombent. Seulement sur les appareils qui peuvent vibrer.', 'Activé'],
              ['Jeu rapide', 'Après une victoire, passe directement au plateau suivant au lieu de revenir à la carte du Voyage.', 'Activé'],
              ['IA des mascottes', 'Les amis inventent leurs propres répliques avec le modèle de langage de votre appareil. Affiché seulement là où le modèle intégré d’Apple est disponible dans votre langue.', 'Activé'],
              ['M’afficher au classement', 'Publie votre nom de joueur et votre niveau, visibles par tous dans l’onglet Classement. Le désactiver vous en retire.', 'Activé'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sons, Musique et Vibrations se trouvent aussi dans le menu Pause pendant un plateau. Si un **filtre de concentration** OutBrick modifie le son ou les rappels, une ligne sous Musique vous le signale ; vos propres réglages ne sont jamais modifiés.',
          },
          { t: 'shot', id: 'settings-game', alt: 'Les Réglages sur l’onglet Jeu : des interrupteurs activés pour les notifications, les sons, la musique, le jeu rapide et le bavardage IA des mascottes, chacun avec une ligne d’explication, puis les boutons Fonctions du jeu, Noter OutBrick, Nous contacter, Communauté, Signaler un bug et Assistance.', caption: 'Réglages › Jeu.' },
        ],
      },
      {
        id: 'buttons',
        title: 'Les boutons sous les interrupteurs',
        blocks: [
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'Le bas de l’onglet Jeu : un interrupteur IA des mascottes, un bouton Fonctions du jeu, Noter OutBrick et Nous écrire côte à côte, Communauté et Signaler un bug côte à côte, un bouton vert Assistance, Conditions et Confidentialité, un titre Plus d’informations avec Licence, CLUF Apple, Classification par âge, Accessibilité, Choix de confidentialité et Remboursements, et Effacer mes données tout en bas.',
            caption: 'Le bas de l’onglet Jeu : liens d’aide, de communauté et juridiques, et Effacer mes données.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Fonctions du jeu', text: 'Désactivez **Sauvetage d’ami**, **Course du village**, **Brick Royale**, **Course de l’équipe** ou **Offres sur la carte** si vous préférez ne pas les voir. Vous ne perdez rien de ce que vous avez gagné.' },
              { term: 'Noter OutBrick', text: 'Ouvre la page d’avis de l’App Store. Noter le jeu ne rapporte aucune récompense, et le jeu ne vous le demande que quelques fois par an, jamais après une défaite ou un achat.' },
              { term: 'Nous écrire', text: 'Ouvre notre [formulaire de contact](/contact) dans le jeu : le moyen privé de joindre l’équipe.' },
              { term: 'Communauté', text: 'Ouvre cette communauté dans Safari.' },
              { term: 'Signaler un bug', text: 'Ouvre un signalement de bug dans Safari, déjà rempli avec votre appareil, votre version d’iOS, la version du jeu, vos réglages d’accessibilité et votre niveau. Voir [Bien signaler un bug](help:reporting-bugs).' },
              { term: 'Choix publicitaires', text: 'Affiché seulement là où un formulaire de consentement publicitaire est obligatoire (par exemple dans l’UE et au Royaume-Uni). Le rouvre pour que vous puissiez changer votre choix.' },
              { term: 'Assistance, Conditions, Confidentialité', text: 'Nos pages [assistance](/support), [conditions](/terms) et [politique de confidentialité](/privacy).' },
              { term: 'Plus d’informations', text: '[Licence](/license-agreement), [CLUF Apple](/eula), [Classification par âge](/age-rating), [Accessibilité](/accessibility), [Choix de confidentialité](/privacy-choices) et [Remboursements](/refunds).' },
              { term: 'Effacer mes données', text: 'Réinitialise votre progression sur cet appareil et demande à iCloud de supprimer votre sauvegarde. Voir [Progression, iCloud et confidentialité](help:progress-privacy-and-account#delete).' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Communauté et Signaler un bug s’ouvrent dans Safari, en dehors du jeu, car la communauté est réservée aux personnes de 16 ans et plus, alors que le jeu lui-même est classé 4+.',
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'L’onglet Accessibilité',
        blocks: [
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'L’onglet Accessibilité : Vitesse des animations de 50 % à 200 %, Détail des annonces Bref, Standard ou Complet, et des interrupteurs pour Daltonien, Plateau à fort contraste, Barre pour gauchers, Confirmer les échanges et Son de rangée.',
            caption: 'Réglages › Accessibilité.',
          },
          {
            t: 'p',
            text: 'Vitesse des animations, Détail des annonces, Daltonien, Plateau à fort contraste, Barre pour gauchers, Confirmer les échanges et Son de rangée sont expliqués un par un dans [L’accessibilité dans OutBrick](help:accessibility#where).',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'Ce qui ne se trouve pas dans les Réglages',
        blocks: [
          {
            t: 'list',
            items: [
              '**Restaurer vos achats :** en bas de la **Boutique**.',
              '**Votre nom, votre avatar et votre drapeau :** dans votre **Profil** (touchez votre avatar).',
              '**Le numéro de version du jeu :** en bas de votre **Profil**.',
              '**La langue :** OutBrick suit la langue de votre iPhone. Pour en choisir une autre rien que pour OutBrick, ouvrez **Réglages › Apps › OutBrick › Langue** sur l’iPhone.',
              '**Activités en direct et styles de notification :** dans **Réglages › Apps › OutBrick** sur l’iPhone.',
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'apple-features', 'progress-privacy-and-account', 'menus-tour'],
  },

  {
    slug: 'apple-features',
    category: 'apple',
    cover: 'home',
    title: 'Widgets, Siri, Raccourcis et autres fonctions Apple',
    summary:
      'Les widgets de l’écran d’accueil et de l’écran verrouillé, le Centre de contrôle, les Activités en direct, les phrases Siri, Spotlight, Handoff, les défis dans Messages, les notifications et la pastille de l’icône, les filtres de concentration et Game Center.',
    keywords: 'widget écran verrouillé centre de contrôle activité en direct dynamic island siri raccourcis app intents spotlight handoff imessage autocollants défi notification pastille actions rapides concentration game center succès intelligence visuelle',
    sections: [
      {
        id: 'widgets',
        title: 'Les widgets de l’écran d’accueil',
        blocks: [
          {
            t: 'p',
            text: 'Maintenez le doigt sur une zone vide de votre écran d’accueil, touchez **Modifier › Ajouter un widget**, puis cherchez OutBrick. Certains widgets se configurent : maintenez le doigt sur l’un d’eux, puis touchez **Modifier le widget**.',
          },
          {
            t: 'table',
            head: ['Widget', 'Affiche'],
            rows: [
              ['Niveau suivant / Reprendre', 'Vous emmène directement à votre prochain plateau.'],
              ['Voyage', 'Votre niveau, les plateaux terminés, votre palier du Pass Brique et la prochaine récompense.'],
              ['Brique du jour', 'Vos pièces du jour et votre série.'],
              ['Série et Calendrier de série', 'Votre série de jours. Le widget Série règle aussi l’heure du rappel de série (de 9:00 à 21:00).'],
              ['Vies', 'Les vies de votre réserve et quand revient la prochaine. Existe aussi sur l’écran verrouillé.'],
              ['Mascotte du jour et Humeur des mascottes', 'Un ami : celui de votre choix, ou « Surprends-moi ».'],
              ['Chapitre et Carte des chapitres', 'Votre progression dans un chapitre : celui en cours, ou celui de votre choix.'],
              ['Événements et Fin de saison', 'L’événement en cours ou le prochain, et le temps restant dans la saison.'],
              ['Pass Brique et Prochaine récompense', 'Votre palier et ce qui vous attend ensuite.'],
              ['Pièces et boosters', 'Vos pièces et vos bonus.'],
              ['Collection', 'Vos dernières cartes.'],
              ['Plateau au hasard', 'Un plateau au hasard, jouable directement dans le widget sur iOS 17 et versions ultérieures.'],
              ['Cette semaine', 'Vos meilleures marges de la semaine.'],
              ['Montre et iPhone', 'Votre niveau sur Apple Watch à côté de votre niveau sur iPhone.'],
            ],
          },
          {
            t: 'p',
            text: '**Écran verrouillé :** un widget OutBrick, Anneau de série, Pièces, Brique du jour, Niveau suivant, Compte à rebours et Pass Brique, plus de petites lignes pour votre série, votre niveau ou la Brique du jour.',
          },
        ],
      },
      {
        id: 'control-center',
        title: 'Centre de contrôle et Activités en direct',
        blocks: [
          {
            t: 'list',
            items: [
              '**Centre de contrôle** (iOS 18 et versions ultérieures) : ouvrez-le, touchez **+**, puis **Ajouter une commande** et cherchez OutBrick. Vous y trouverez des boutons Reprendre, Ouvrir Voyage, Ouvrir Boutique et Niveau au hasard, des interrupteurs **Musique** et **Mode daltonien**, et des commandes d’état pour votre série, vos vies et un ami.',
              '**Activité en direct :** pendant que vous jouez un plateau, sa progression s’affiche sur l’écran verrouillé et dans la Dynamic Island. Quittez le jeu et elle indique que votre plateau vous attend ; terminez-le et elle affiche votre résultat. Touchez-la pour y revenir. Désactivez les Activités en direct dans **Réglages › Apps › OutBrick** sur l’iPhone.',
            ],
          },
        ],
      },
      {
        id: 'siri',
        title: 'Siri et Raccourcis',
        blocks: [
          {
            t: 'p',
            text: 'Dites l’une de ces phrases à Siri, ou retrouvez-les dans l’app **Raccourcis**, sous OutBrick. Les questions obtiennent une réponse sans ouvrir le jeu.',
          },
          {
            t: 'table',
            head: ['Dites', 'Ce qui se passe'],
            rows: [
              ['« Joue à OutBrick » · « Continue mon voyage dans OutBrick »', 'Ouvre votre prochain plateau.'],
              ['« Joue le niveau 120 dans OutBrick »', 'Ouvre ce niveau (un niveau que vous avez atteint).'],
              ['« Ouvre Cité-Jardin dans OutBrick »', 'Ouvre un village sur la carte.'],
              ['« Rencontre Bloo dans OutBrick »', 'Rend visite à un ami.'],
              ['« À quel niveau je suis dans OutBrick »', 'Vous donne votre niveau et votre progression.'],
              ['« Combien de vies j’ai dans OutBrick » · « Quand revient ma prochaine vie dans OutBrick »', 'Vous donne l’état de vos vies.'],
              ['« Combien d’étoiles j’ai dans OutBrick »', 'Compte vos étoiles.'],
              ['« Est-ce que ma série OutBrick tient toujours »', 'Vous donne votre série et la Brique du jour.'],
              ['« Combien de pièces j’ai dans OutBrick »', 'Vous donne vos pièces et vos bonus.'],
              ['« Quand se termine l’événement OutBrick »', 'Vous donne le temps restant dans l’événement.'],
            ],
          },
          {
            t: 'p',
            text: 'Raccourcis propose aussi des actions comme **Expliquer mon prochain coup**, **Régler la musique**, **Régler le mode daltonien**, **Ouvrir les missions** et **Jouer un niveau au hasard**.',
          },
        ],
      },
      {
        id: 'spotlight',
        title: 'Spotlight, Handoff et actions rapides',
        blocks: [
          {
            t: 'list',
            items: [
              '**Spotlight :** balayez vers le bas sur l’écran d’accueil et cherchez un niveau que vous avez atteint, un village, un chapitre, un ami, un événement, ou des écrans comme « Réglages d’accessibilité » et « Pass Brique ».',
              '**Actions rapides :** maintenez le doigt sur l’icône d’OutBrick pour **Jouer au niveau suivant**, **Voyage** et **Boutique**.',
              '**Handoff :** commencez un plateau sur un appareil et continuez-le sur un autre connecté au même compte Apple.',
              '**Intelligence visuelle** (iOS 26 et versions ultérieures) : pointez l’appareil photo sur une illustration d’OutBrick, ou faites-en une capture d’écran, pour retrouver le village, l’ami ou le niveau correspondant. Tout se passe sur votre appareil.',
            ],
          },
        ],
      },
      {
        id: 'messages',
        title: 'Défis et autocollants dans Messages',
        blocks: [
          {
            t: 'p',
            text: 'Dans une conversation Messages, touchez **+**, puis **Plus** si nécessaire, puis **OutBrick**. Envoyez un niveau sous forme de carte de défi, ou l’un des autocollants des amis. Les personnes qui n’ont pas le jeu reçoivent un lien qui ouvre une page de ce site.',
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Les notifications et la pastille de l’icône',
        blocks: [
          {
            t: 'list',
            items: [
              'Le jeu ne demande jamais l’autorisation d’envoyer des notifications au lancement. Après votre troisième plateau terminé, il vous demande « Laisser Bloo garder ta place ? » ; **Plus tard** attend une semaine.',
              'Au plus **une notification toutes les 20 heures**, et jamais entre 22:00 et 09:00. Chacune propose **Jouer**, **Plus tard** (trois heures) ou **Reporter à demain**.',
              'Les rappels : un plateau laissé en cours, des vies rechargées, des missions prêtes, votre série (à l’heure choisie dans le widget Série, 20:30 par défaut), le début d’un événement, la fin d’une saison et un bilan le dimanche.',
              'La **pastille de l’icône** compte les récompenses qui vous attendent (missions à récupérer, paliers du Pass Brique, récompenses d’étoiles des villages, premier plateau terminé du jour), jusqu’à neuf. Ouvrir le jeu l’efface sans rien récupérer.',
              'Désactivez les rappels dans **Réglages › Jeu › Notifications**, ou dans les Réglages de l’iPhone.',
            ],
          },
        ],
      },
      {
        id: 'focus',
        title: 'Filtres de concentration',
        blocks: [
          {
            t: 'p',
            text: 'Dans **Réglages › Concentration** sur l’iPhone, choisissez un mode de concentration, puis **Ajouter un filtre › OutBrick**. Tant que ce mode est actif, OutBrick peut couper la musique (ou la musique et les sons), suspendre les rappels et masquer la pastille de l’icône.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'p',
            text: 'Connectez-vous à Game Center dans les Réglages de l’iPhone pour débloquer 65 succès (dont un pour chacun des 50 premiers chapitres) et des classements pour le niveau le plus élevé, le total de plateaux terminés, aujourd’hui et cette semaine. Ouvrez Game Center depuis le badge du Voyage ou depuis le menu Pause. L’onglet Classement du jeu est un tableau distinct, tous temps confondus.',
          },
        ],
      },
    ],
    related: ['settings', 'progress-privacy-and-account', 'rewards-and-events', 'accessibility'],
  },

  {
    slug: 'progress-privacy-and-account',
    category: 'account',
    cover: 'journey',
    title: 'Progression, iCloud, nouveaux appareils et confidentialité',
    summary:
      'Comment votre progression est enregistrée et synchronisée via iCloud, passer à un nouvel iPhone, ce qui est partagé et avec qui, vos choix en matière de publicité et de suivi, et comment effacer vos données.',
    keywords: 'sauvegarde progression perdue synchronisation icloud nouveau téléphone transfert réinstaller restaurer effacer réinitialiser confidentialité données suivi att pubs consentement classement nom',
    sections: [
      {
        id: 'saved',
        title: 'Comment votre progression est enregistrée',
        blocks: [
          {
            t: 'list',
            items: [
              'La progression est enregistrée sur votre appareil et, si vous êtes connecté à iCloud, dans votre propre compte iCloud. Il n’y a aucun compte OutBrick à créer.',
              'iCloud conserve votre niveau, vos étoiles, vos pièces, vos bonus, vos vies et vos annulations, vos séries, le Pass Brique, la Collection, la Garde-robe, votre nom, votre avatar et vos statistiques, ainsi que votre choix Daltonien.',
              'Le son, la musique, les vibrations, les notifications et les réglages d’accessibilité du plateau restent sur chaque appareil.',
              'Quand deux appareils ne sont pas d’accord, rien n’est écrasé : le niveau et les compteurs les plus élevés sont conservés, les collections sont réunies, et les pièces dépensées sur un appareil ne sont jamais rendues par un autre.',
            ],
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
              'Sur le nouvel appareil, connectez-vous au même compte Apple et activez iCloud.',
              'Installez OutBrick depuis l’App Store et ouvrez-le. Votre progression est récupérée et fusionnée au démarrage du jeu.',
              'Ouvrez la **Boutique**, faites défiler tout en bas et touchez **Restaurer l’achat** pour récupérer Supprimer les pubs, les saisons du Pass Brique et les articles de la Garde-robe.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Si vous n’étiez pas connecté à iCloud sur l’ancien appareil, sa progression n’existait que sur cet appareil. Connectez-vous à iCloud dessus et ouvrez OutBrick une fois avant de changer d’appareil.',
          },
        ],
      },
      {
        id: 'shared',
        title: 'Ce qui est partagé, et avec qui',
        blocks: [
          {
            t: 'list',
            items: [
              '**L’onglet Classement** affiche votre nom de joueur, votre niveau et, si vous le souhaitez, un drapeau. Désactivez **Réglages › Jeu › M’afficher au classement** pour en être retiré ; masquez votre drapeau dans votre Profil.',
              '**Course du village et Brick Royale** partagent votre nom de joueur avec les joueurs de cette course, uniquement si vous y participez.',
              '**Game Center** appartient à Apple et dépend de vos réglages Game Center.',
              'OutBrick n’utilise **aucun outil d’analyse**, et les données propres au jeu ne servent pas à vous suivre. Le partenaire publicitaire (Google AdMob) gère ses propres données pour les vidéos facultatives ; voir notre [politique de confidentialité](/privacy).',
            ],
          },
        ],
      },
      {
        id: 'ads-privacy',
        title: 'Vos choix en matière de publicité et de suivi',
        blocks: [
          {
            t: 'list',
            items: [
              'iOS peut vous demander si OutBrick peut vous suivre. **Demander à l’app de ne pas me suivre** ne pose aucun problème : les vidéos se lancent toujours et les récompenses sont toujours versées.',
              'Dans l’UE, au Royaume-Uni et en Suisse, un formulaire de consentement apparaît la première fois que vous choisissez une vidéo. Changez votre réponse à tout moment avec **Réglages › Jeu › Choix publicitaires**.',
              'Plus de détails sur notre page [Choix de confidentialité](/privacy-choices).',
            ],
          },
        ],
      },
      {
        id: 'delete',
        title: 'Effacer vos données',
        blocks: [
          {
            t: 'steps',
            items: [
              'Ouvrez les **Réglages** et faites défiler tout en bas de l’onglet **Jeu**.',
              'Touchez **Effacer mes données**, lisez la carte, puis touchez **Continuer**.',
            ],
          },
          {
            t: 'p',
            text: 'Cela réinitialise votre progression, vos pièces, vos bonus et vos statistiques sur cet appareil et demande à iCloud de supprimer votre sauvegarde. Un autre appareil connecté au même compte iCloud peut resynchroniser une ancienne sauvegarde : faites-le donc aussi sur cet appareil. Les achats que vous possédez peuvent ensuite être restaurés depuis la Boutique, et les photos que vous avez enregistrées ou partagées ne sont pas touchées. **C’est irréversible.**',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Votre compte de la communauté est distinct du jeu. Supprimez-le depuis les **Réglages** de la communauté, une fois connecté.',
          },
          { t: 'shot', id: 'delete-data', alt: 'La carte de suppression des données par-dessus les Réglages, avec l’avertissement complet et les boutons Continuer et Annuler.', caption: 'La suppression demande une dernière confirmation avant d’effacer quoi que ce soit.' },
        ],
      },
    ],
    related: ['shop-and-purchases', 'settings', 'apple-features', 'troubleshooting'],
  },
];
