import type { HelpArticle } from '../../model.ts';

/** Dépannage, la communauté et les signalements de bugs, en français. Vérifié avec la 5.1.1 (68). */
export const communityArticles: HelpArticle[] = [
  {
    slug: 'troubleshooting',
    category: 'community',
    cover: 'settings-community',
    title: 'Résoudre les problèmes courants',
    summary:
      'Des solutions rapides pour une progression disparue, un achat qui n’est pas arrivé, des vies qui semblent bloquées, l’absence de son, des notifications manquantes, les widgets, les vidéos qui ne se chargent pas et les problèmes de focus VoiceOver.',
    keywords: 'problème ne marche pas bug solution aide progression perdue achat manquant pas de son notifications widget vide vidéo pub ne charge pas voiceover focus saute plantage bloqué mise à jour version',
    sections: [
      {
        id: 'first',
        title: 'D’abord, trois vérifications rapides',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Mettez OutBrick à jour.** Ouvrez l’App Store, touchez votre photo, et mettez à jour OutBrick s’il apparaît dans la liste. Beaucoup de corrections arrivent ainsi.',
              '**Vérifiez votre version.** Touchez votre avatar sur l’Accueil : la version figure en bas de votre Profil, par exemple « OutBrick 5.1.1 (68) ».',
              '**Fermez et rouvrez le jeu.** Balayez vers le haut depuis le bas de l’écran et marquez une pause, balayez OutBrick vers le haut pour le fermer, puis rouvrez-le.',
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Ma progression a disparu',
        blocks: [
          {
            t: 'list',
            items: [
              'Vérifiez que vous êtes connecté à iCloud avec le même compte Apple qu’avant, et qu’iCloud Drive est activé.',
              'Ouvrez OutBrick et laissez-lui une minute en ligne : la progression est récupérée et fusionnée au démarrage du jeu.',
              'Si l’ancien appareil n’a jamais été connecté à iCloud, sa progression n’existe que sur cet appareil. Connectez-vous sur l’ancien appareil, ouvrez OutBrick une fois, puis réessayez sur le nouveau.',
            ],
          },
          { t: 'p', text: 'Plus de détails dans [Progression, iCloud et confidentialité](help:progress-privacy-and-account).' },
        ],
      },
      {
        id: 'purchase',
        title: 'Un achat n’est pas arrivé',
        blocks: [
          {
            t: 'steps',
            items: [
              'Ouvrez la **Boutique**, faites défiler tout en bas et touchez **Restaurer l’achat**.',
              'Pour les pièces, les bonus et les vies, vérifiez qu’iCloud est activé : ils voyagent avec votre progression, pas par l’App Store.',
              'Toujours rien ? Écrivez-nous en privé avec le [formulaire de contact](/contact), en indiquant la date et l’article. Ne publiez jamais de reçu dans la communauté. Les remboursements sont gérés par Apple : voir [Remboursements](/refunds).',
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Mes vies ne reviennent pas',
        blocks: [
          {
            t: 'p',
            text: 'Une vie revient toutes les 30 minutes, en temps réel : elles continuent donc de se recharger quand le jeu est fermé. Si vous reculez l’horloge de votre appareil, le jeu l’ignore et vous risquez d’attendre plus longtemps. Laissez **Réglages › Général › Date et heure › Réglage automatique** activé. Touchez le cœur dans le Voyage pour savoir quand revient la prochaine vie.',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Il n’y a ni son ni musique',
        blocks: [
          {
            t: 'list',
            items: [
              'Vérifiez **Réglages › Jeu › Sons** et **Musique**, ou les mêmes interrupteurs dans le menu Pause.',
              'Vérifiez le bouton Sonnerie/Silence et le volume.',
              'Un filtre de concentration OutBrick coupe peut-être le son du jeu : une ligne sous Musique, dans les Réglages, vous le signale le cas échéant.',
            ],
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Je ne reçois pas de notifications',
        blocks: [
          {
            t: 'list',
            items: [
              'Vérifiez **Réglages › Jeu › Notifications** dans le jeu, et **Réglages › Notifications › OutBrick** sur l’iPhone.',
              'OutBrick envoie au plus une notification toutes les 20 heures, jamais entre 22:00 et 09:00 : les journées sans notification sont donc normales.',
              'Un mode de concentration les retient peut-être.',
            ],
          },
        ],
      },
      {
        id: 'widgets',
        title: 'Un widget est vide ou pas à jour',
        blocks: [
          {
            t: 'p',
            text: 'Ouvrez OutBrick une fois pour qu’il puisse transmettre votre dernière progression à ses widgets. Si un widget reste incorrect, retirez-le puis ajoutez-le de nouveau. Les widgets se rafraîchissent selon un calendrier fixé par iOS : quelques minutes de décalage sont normales.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Une vidéo ne se charge pas',
        blocks: [
          {
            t: 'list',
            items: [
              'Les vidéos ont besoin d’une connexion Internet, et il arrive qu’aucune ne soit disponible pendant un moment : réessayez un peu plus tard.',
              'Chaque sorte de vidéo a une limite quotidienne (39 au total), réinitialisée à minuit. Quand une limite est atteinte, son bouton disparaît jusqu’au lendemain.',
              'Seule une vidéo regardée jusqu’au bout donne sa récompense.',
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'VoiceOver revient en haut du plateau',
        blocks: [
          {
            t: 'p',
            text: 'Des joueurs nous ont signalé que VoiceOver peut perdre sa place en balayant un plateau. Nous en avons trouvé la cause : une carte proposant de l’aide peut s’ouvrir d’elle-même pendant que vous lisez le plateau. Un correctif arrive dans une mise à jour. En attendant :',
          },
          {
            t: 'list',
            items: [
              'Si une carte proposant des bonus ou un indice apparaît pendant que vous lisez le plateau, le geste **Frotter avec deux doigts** la ferme et vous ramène sur le plateau.',
              'Utilisez les **rotors** (Pièces qui s’alignent, Spéciales, Objectifs, Obstacles, Portes) pour aller directement à ce qu’il vous faut, au lieu de balayer case par case.',
              'Utilisez les **actions** d’une pièce (balayez vers le haut ou le bas) pour la déplacer, ce qui garde votre focus sur le plateau.',
              'Touchez deux fois le résumé **Plateau**, ou utilisez **Lire le plateau**, pour entendre où se trouvent les choses.',
              'Indiquez-nous votre appareil, votre version d’iOS, votre version d’OutBrick, le niveau et ce que VoiceOver a dit exactement dans la [catégorie Accessibilité](/community/c/accessibility). Chaque signalement nous aide à trouver plus vite.',
            ],
          },
        ],
      },
      {
        id: 'stuck',
        title: 'Un plateau semble impossible',
        blocks: [
          {
            t: 'list',
            items: [
              'Vous ne pouvez jamais être vraiment bloqué : quand aucun coup n’est possible, le plateau est mélangé gratuitement.',
              'Utilisez l’Indice, la Fusée et l’OVNI offerts à chaque essai.',
              'À partir de votre sixième essai sur un plateau, un **coup de main** ajoute trois coups, une fois par jour.',
              'Demandez dans [Aide et assistance](/community/c/help) en indiquant le numéro du niveau : les autres joueurs adorent les casse-têtes.',
            ],
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'progress-privacy-and-account', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'using-the-community',
    category: 'community',
    cover: 'settings-community',
    title: 'Utiliser la communauté OutBrick',
    summary:
      'Se connecter, choisir la bonne catégorie, ouvrir une discussion, mettre en forme, marquer une solution, suivre des discussions et gérer les e-mails, les traductions, voter pour des idées et protéger vos informations personnelles.',
    keywords: 'forum se connecter connexion compte apple google e-mail clé d’accès discussion message réponse markdown solution suivre masquer notifications résumé hebdomadaire traduire langue voter idée feuille de route signet réaction sondage image texte alternatif signaler confidentialité supprimer compte',
    sections: [
      {
        id: 'read',
        title: 'Lire et se connecter',
        blocks: [
          {
            t: 'list',
            items: [
              'Tout le monde peut lire la communauté sans compte.',
              'Pour publier, répondre, voter ou réagir, touchez **Se connecter** et choisissez **Se connecter avec Apple**, **Google** ou un **lien par e-mail** (nous vous envoyons un lien à usage unique ; pas de mot de passe). Une fois connecté, vous pouvez ajouter une **clé d’accès** dans les Réglages et utiliser Face ID ou Touch ID la fois suivante.',
              'Avec **Masquer mon adresse e-mail** d’Apple, nous recevons une adresse relais privée. Utilisez toujours la même méthode pour retrouver le même compte.',
              'Votre adresse e-mail n’est jamais montrée à personne.',
            ],
          },
        ],
      },
      {
        id: 'categories',
        title: 'Choisir une catégorie',
        blocks: [
          {
            t: 'table',
            head: ['Catégorie', 'Pour'],
            rows: [
              ['[Annonces](/community/c/announcements)', 'Les nouvelles versions et les nouvelles de l’équipe. Seule l’équipe ouvre des discussions ; tout le monde peut répondre.'],
              ['[Aide et assistance](/community/c/help)', 'Les questions « Comment faire pour… ? » sur les plateaux, les vies, les achats et les réglages.'],
              ['[Signaler un bug](/community/c/bugs)', 'Quelque chose ne marche pas. Le formulaire demande votre appareil et vos versions ; voir [Bien signaler un bug](help:reporting-bugs).'],
              ['[Idées et avis](/community/c/ideas)', 'Les suggestions. Votez pour celles que vous voulez voir et suivez-les sur la Feuille de route.'],
              ['[Accessibilité](/community/c/accessibility)', 'VoiceOver, Contrôle vocal, Contrôle de sélection, Police plus grande, jeu pour les personnes daltoniennes. L’équipe la suit de plus près.'],
              ['[Vos réussites](/community/c/show-and-tell)', 'Les plateaux dont vous êtes fiers et vos étapes du Voyage, avec un texte alternatif sur chaque image.'],
              ['[Discussions générales](/community/c/general)', 'Tout le reste.'],
            ],
          },
        ],
      },
      {
        id: 'posting',
        title: 'Ouvrir une discussion et répondre',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Cherchez d’abord :** quelqu’un a peut-être déjà posé la question.',
              'Touchez **Ouvrir une discussion**, choisissez une catégorie et écrivez un titre qui dit de quoi il s’agit, par exemple « Niveau 214 : comment passer la porte gelée ? ».',
              'Choisissez la **langue** dans laquelle vous écrivez, pour que ses lecteurs puissent trouver votre message.',
              'Rédigez votre message. **Aperçu** montre à quoi il ressemblera.',
              'Touchez **Publier la discussion**. Pour répondre, utilisez la zone au bas d’une discussion, ou **Répondre** et **Citer** sur un message.',
            ],
          },
          {
            t: 'table',
            caption: 'Mise en forme',
            head: ['Tapez', 'Pour obtenir'],
            rows: [
              ['`**gras**`', 'du texte en gras'],
              ['`*italique*`', 'du texte en italique'],
              ['`- élément`', 'une liste à puces (`1.` pour une liste numérotée)'],
              ['`> citation`', 'une citation'],
              ['`[texte](https://…)`', 'un lien'],
              ['`@nom`', 'mentionner quelqu’un'],
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Vous ajoutez une image ? Une description est obligatoire : dites ce qui compte, par exemple « Niveau 214, la brique rouge à un coup de la porte ». Les personnes qui utilisent VoiceOver entendent ce texte au lieu de voir l’image.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Solutions, votes et réactions',
        blocks: [
          {
            t: 'list',
            items: [
              'Si une réponse résout votre question, touchez **Marquer comme solution** sur celle-ci. La discussion s’affiche comme **Résolue**, et les autres peuvent aller directement à la réponse.',
              'Dans Idées et avis, **Votez** pour ce que vous aimeriez voir. La **Feuille de route** montre ce qui est à l’étude, prévu, en cours et disponible.',
              'Réagissez à un message avec J’aime, J’adore, Bravo, Drôle, Merci ou Éclairant.',
              'Les signalements de bugs portent un statut fixé par l’équipe : Nouveau, Confirmé, Corrigé, Publié, Pas un bug ou Doublon.',
            ],
          },
        ],
      },
      {
        id: 'following',
        title: 'Suivre des discussions et les e-mails',
        blocks: [
          {
            t: 'list',
            items: [
              '**Suivez** une discussion ou une catégorie pour recevoir un e-mail à chaque nouveau message ; **Masquez**-la pour ne plus la voir.',
              'La cloche (**Notifications**) affiche les réponses, les mentions et les changements de statut.',
              'Les **Signets** gardent les messages que vous voulez retrouver.',
              'Choisissez les e-mails que vous recevez, dont un résumé hebdomadaire facultatif, dans les **Réglages** de la communauté.',
            ],
          },
        ],
      },
      {
        id: 'languages',
        title: 'Langues et traduction',
        blocks: [
          {
            t: 'p',
            text: 'La communauté existe en anglais, en français, en allemand, en espagnol, en japonais et en portugais du Brésil. Par défaut, les listes montrent les discussions dans votre langue et en anglais ; un toucher suffit pour afficher toutes les langues. Un message dans une autre langue peut être traduit automatiquement, et il est alors clairement signalé comme traduction automatique.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Bienveillance et vie privée',
        blocks: [
          {
            t: 'list',
            items: [
              'Lisez les [règles de la communauté](/community/guidelines) : soyez bienveillant, cachez les spoilers, gardez vos informations personnelles hors de vos messages.',
              'Ne publiez jamais de mot de passe, de code de connexion, de reçu d’achat ni quoi que ce soit qui permette de vous identifier. Recadrez vos captures d’écran pour en retirer les informations de compte.',
              'Vous voyez quelque chose qui enfreint les règles ? Touchez **Signaler** sur le message. Un modérateur l’examinera.',
              'Dans les **Réglages** de la communauté, vous pouvez télécharger vos données, vous déconnecter ou supprimer votre compte.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'La communauté est réservée aux personnes de 16 ans et plus. Pour tout ce qui est privé, comme un achat, utilisez plutôt le [formulaire de contact](/contact).',
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'troubleshooting', 'accessibility', 'welcome'],
  },

  {
    slug: 'reporting-bugs',
    category: 'community',
    cover: 'settings-community',
    title: 'Bien signaler un bug',
    summary:
      'Le moyen le plus rapide de faire corriger un bug : le signaler depuis le jeu pour que vos informations soient remplies, écrire des étapes que quelqu’un d’autre peut suivre, et préciser exactement ce qu’a fait VoiceOver ou une autre technologie d’assistance.',
    keywords: 'signalement bug problème plantage anomalie étapes reproduire capture d’écran enregistrement de l’écran version appareil ios technologie d’assistance statut',
    sections: [
      {
        id: 'from-game',
        title: 'Signalez-le depuis le jeu',
        blocks: [
          {
            t: 'steps',
            items: [
              'Dans OutBrick, ouvrez les **Réglages** (l’engrenage sur l’Accueil ou dans le Voyage).',
              'Faites défiler vers le bas et touchez **Signaler un bug**. Safari ouvre un nouveau signalement de bug dans la communauté.',
              'Connectez-vous si on vous le demande, vérifiez les informations déjà remplies et décrivez ce qui s’est passé.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'Le bas de l’onglet Jeu des Réglages, avec un bouton violet Signaler un bug à côté d’un bouton bleu Communauté.',
            caption: '**Signaler un bug** se trouve à côté de **Communauté** dans les Réglages.',
          },
          {
            t: 'table',
            caption: 'Ce que le jeu remplit pour vous',
            head: ['Champ', 'Exemple'],
            rows: [
              ['Appareil', 'Le modèle, par exemple iPhone18,2'],
              ['Version du système', '27.1'],
              ['Version d’OutBrick', '5.1.1 (68)'],
              ['Technologie d’assistance', 'VoiceOver, Contrôle de sélection, Police plus grande ou filtres de couleur, quand ils sont activés'],
              ['Niveau', 'Votre niveau actuel dans le Voyage'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Rien qui permette de vous identifier n’est envoyé : ni nom, ni identité Game Center ou iCloud, ni identifiant publicitaire. iOS ne permet pas aux apps de détecter **Contrôle vocal** ni **Zoom** : cochez-les vous-même si vous les utilisez.',
          },
        ],
      },
      {
        id: 'write',
        title: 'Écrivez des étapes que quelqu’un d’autre peut suivre',
        blocks: [
          {
            t: 'p',
            text: 'L’équipe doit pouvoir reproduire le bug sur son propre appareil. Numérotez vos étapes à partir de l’ouverture du jeu :',
          },
          {
            t: 'list',
            items: [
              '**Étapes :** « 1. Ouvrir le niveau 214. 2. Faire glisser la longue brique rouge vers la gauche. 3. Utiliser Annuler. »',
              '**Ce qui devrait se passer :** « La brique revient à sa place. »',
              '**Ce qui s’est passé :** « La brique a disparu et le compteur de coups a augmenté de deux. »',
              'Est-ce que cela arrive à chaque fois ? Après un redémarrage ? Sur un autre niveau ?',
            ],
          },
        ],
      },
      {
        id: 'a11y',
        title: 'Les problèmes d’accessibilité',
        blocks: [
          {
            t: 'list',
            items: [
              'Nommez la technologie et ses réglages : VoiceOver (avec votre débit de parole ou votre plage braille si c’est utile), Contrôle vocal, Contrôle de sélection (défilement automatique ou manuel), Zoom, taille de la Police plus grande.',
              'Citez **exactement** ce qu’a dit VoiceOver, ou la commande que Contrôle vocal n’a pas comprise.',
              'Indiquez où se trouvait le focus avant et après, quel geste ou quelle action vous avez utilisé, et quel rotor était sélectionné.',
              'Publiez-le dans [Accessibilité](/community/c/accessibility) si vous préférez : c’est la catégorie que l’équipe suit de plus près.',
            ],
          },
        ],
      },
      {
        id: 'pictures',
        title: 'Captures et enregistrements d’écran',
        blocks: [
          {
            t: 'list',
            items: [
              '**Capture d’écran :** appuyez en même temps sur le bouton latéral et le bouton d’augmentation du volume.',
              '**Enregistrement de l’écran :** ajoutez **Enregistrement de l’écran** au Centre de contrôle, lancez-le, reproduisez le bug, puis arrêtez-le.',
              'Recadrez pour retirer votre nom, votre adresse e-mail et tout ce qui est personnel, et décrivez l’image dans son texte alternatif.',
            ],
          },
        ],
      },
      {
        id: 'after',
        title: 'Après la publication',
        blocks: [
          {
            t: 'p',
            text: 'L’équipe attribue un statut à chaque signalement de bug : **Nouveau**, **Confirmé**, **Corrigé**, **Publié**, **Pas un bug** ou **Doublon**, parfois avec une note comme « Corrigé dans la 5.1.1 ». Suivez la discussion pour recevoir un e-mail quand il change. Pour tout ce qui est privé, utilisez le [formulaire de contact](/contact).',
          },
        ],
      },
    ],
    related: ['troubleshooting', 'using-the-community', 'accessibility', 'voiceover'],
  },
];
