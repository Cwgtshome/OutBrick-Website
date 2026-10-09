import type { HelpArticle } from '../../model.ts';

/**
 * Questions fréquentes, la première semaine, les plateaux difficiles et le glossaire, en français.
 * Vérifié avec la 5.1.1 (68). Chaque chiffre de l’économie reprend celui de play.ts, progress.ts
 * ou account.ts ; modifiez-les d’abord là-bas, puis ici.
 */
export const startMoreArticles: HelpArticle[] = [
  {
    slug: 'common-questions',
    category: 'start',
    cover: 'home',
    host: 'sprout',
    hostPose: 'think',
    title: 'Les questions fréquentes, avec des réponses franches',
    summary:
      'Des réponses courtes et exactes aux questions que les joueurs posent le plus : chrono, vies, pubs et achats, jeu hors ligne, nouveau téléphone, accessibilité, enfants, et comment joindre une personne.',
    keywords:
      'faq foire aux questions questions réponses chrono minuteur temps limité perdre vie pourquoi vies coup de main pubs publicités payer gratuit hors ligne mode avion sans internet nouveau téléphone transfert progression enfants famille classification âge aveugle malvoyant daltonien daltonisme contact assistance support humain personne e-mail',
    sections: [
      {
        id: 'playing',
        title: 'Jouer',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'OutBrick est-il chronométré ?',
                a: 'Non. Il n’y a **de chrono nulle part** dans OutBrick : ni sur un plateau, ni dans un menu, ni dans un événement. Chaque plateau vous donne un nombre de **coups**, et c’est la seule limite. Prenez tout le temps que vous voulez pour chaque coup.\n\nUn échange qui n’aligne rien revient en place et **n’utilise pas de coup**. Voir [Pas de chrono, pas de stress](help:accessibility#no-timers).',
              },
              {
                q: 'Comment jouer un plateau ?',
                a: '**Faites glisser** une brique vers une case vide, ou dans la porte de sa couleur pour la renvoyer chez elle. **Échangez** une brique avec sa voisine pour aligner trois briques ou plus et les faire disparaître. Atteignez les objectifs du panneau du haut avant d’avoir épuisé vos coups. Voir [Bienvenue dans OutBrick](help:welcome) et [Jouer un plateau](help:playing-a-board).',
              },
              {
                q: 'Pourquoi mon échange est-il revenu en place ?',
                a: 'Un échange n’est conservé que s’il aligne trois briques ou plus, forme un carré de 2×2, déclenche deux spéciales ensemble ou utilise une bombe de couleur. Sinon, les briques reviennent en place, vous sentez deux petites vibrations et **aucun coup n’est utilisé**. Voir [Échanger et aligner](help:playing-a-board#swap).',
              },
              {
                q: 'Puis-je rester bloqué sur un plateau ?',
                a: 'Non. Si aucun coup n’est possible, le plateau est mélangé gratuitement sous une bannière **On mélange !**, sans utiliser de coup ni de vie. Un plateau qui a encore des coups mais ne peut plus mener à vos objectifs est discrètement redistribué, et des briques en trop sont recolorées s’il manque à un objectif une couleur dont il a besoin. Voir [Vous ne pouvez jamais rester bloqué](help:playing-a-board#never-stuck).',
              },
              {
                q: 'Comment gagner trois étoiles ?',
                a: 'Les étoiles suivent votre **score**. Chaque plateau terminé rapporte au moins une étoile ; un meilleur score en rapporte deux ou trois, et la barre d’étoiles de l’en-tête montre où vous en êtes. Chaque coup qui vous reste à la fin devient un rayon de ligne qui vaut 150 points : finir tôt aide donc. Rejouez n’importe quel plateau terminé depuis le Voyage pour améliorer ses étoiles. Voir [Score, étoiles et bonus de fin de plateau](help:playing-a-board#stars).',
              },
              {
                q: 'Que veulent dire Difficile, Très difficile, Boss et Nuit ?',
                a: 'Ce sont des niveaux de difficulté, affichés sur une plaque sous l’en-tête. Les plateaux Difficile demandent environ 15 % de plus, les Très difficile environ 30 % de plus, et un Boss (le dernier plateau d’un chapitre, à partir du niveau 40) environ 40 % de plus. Un plateau Nuit se joue à la tombée de la nuit, comme un plateau Difficile. Les difficultés plus élevées rapportent plus de pièces. Voir [Comment battre un plateau difficile](help:hard-boards#tiers).',
              },
              {
                q: 'OutBrick convient-il aux enfants ?',
                a: 'OutBrick est classé **4+** sur l’App Store : des plateaux de briques abstraits, des personnages sympathiques, pas de chat et rien d’écrit par d’autres personnes dans le jeu. Les vidéos ne se lancent que si quelqu’un en choisit une pour une récompense, et les achats passent par Apple : Temps d’écran et l’autorisation d’achat peuvent donc exiger votre accord. Le site de la communauté, que le jeu ouvre dans Safari, est réservé aux personnes de 16 ans et plus. Voir [la classification par âge](/age-rating) et [Un guide pour les parents](help:parents-guide).',
              },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vies et coups',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Pourquoi ai-je perdu une vie ?',
                a: 'Une vie n’est utilisée que lorsque vous **perdez** un essai sur un plateau. Cela arrive de trois façons :\n\n**1.** Vous êtes à court de coups et choisissez **Abandonner** (ou fermez l’écran « Plus de coups »). **2.** Vous **quittez** un plateau après avoir joué un coup. **3.** Vous **recommencez** depuis la Pause après avoir joué un coup.\n\nLe jeu vous prévient toujours d’abord : la carte **Quitter ?** et les boutons Recommencer et Abandonner indiquent quand une vie sera utilisée. Voir [Quand une vie est utilisée](help:lives-moves-and-undos#lives).',
              },
              {
                q: 'Gagner ou commencer un plateau coûte-t-il une vie ?',
                a: 'Non. Ouvrir un plateau demande une vie mais **n’en utilise pas**, et **gagner ne coûte jamais de vie**. Quitter ou recommencer avant votre premier coup est gratuit aussi, tout comme continuer avec des coups en plus, puisque c’est le même essai.',
              },
              {
                q: 'À quelle vitesse les vies reviennent-elles ?',
                a: 'Une toutes les **30 minutes**, même quand le jeu est fermé, jusqu’à **cinq** (huit tant que vous possédez le Pass Brique en cours). Touchez le cœur dans l’en-tête du Voyage pour savoir quand revient la prochaine.',
              },
              {
                q: 'C’est quoi, le coup de main ?',
                a: 'Si un plateau vous bat encore et encore, le jeu vous donne un coup de main : à partir de votre **sixième essai** sur le même plateau, vous commencez avec **3 coups en plus**, et le plateau affiche « Un coup de main : 3 coups en plus pour cet essai ». Il arrive une fois par jour et par plateau, et ne coûte rien. Voir [Niveau échoué, et réessayer](help:lives-moves-and-undos#level-failed).',
              },
              {
                q: 'Que se passe-t-il quand je n’ai plus de coups ?',
                a: 'Vous voyez ce qu’il reste et pouvez continuer dans le même essai : +5 coups pour 300 pièces, puis 500 (avec un Indice), puis 900 (avec un OVNI), ou une vidéo facultative pour +2 coups, puis +1, puis un OVNI offert. Ou choisissez **Abandonner**, qui utilise une vie. Rien de payant n’est proposé avant le niveau 6. Voir [Plus de coups](help:lives-moves-and-undos#out-of-moves).',
              },
              {
                q: 'Annuler est-il gratuit ?',
                a: 'La **première annulation de chaque plateau est gratuite**. Ensuite, les annulations viennent d’une réserve de cinq au maximum, qui se recharge d’une toutes les 25 minutes. Voir [Annuler](help:boosters-and-pause#undo).',
              },
              {
                q: 'Je n’ai plus de vies. Puis-je encore jouer ?',
                a: 'Une fois par jour, une réserve vide peut obtenir **un essai offert** sur un plateau : gagnez et vous gardez la vie, perdez et cela ne coûte rien. Sinon, attendez la prochaine vie, rechargez avec des pièces ou une recharge mise de côté, ou regardez une vidéo facultative pour une vie. Voir [Plus de vies](help:lives-moves-and-undos#out-of-lives).',
              },
            ],
          },
        ],
      },
      {
        id: 'purchases-ads',
        title: 'Achats et pubs',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Dois-je regarder des pubs ou payer ?',
                a: 'Non. Chaque plateau peut se jouer sans dépenser d’argent ni rien regarder : les vies reviennent toutes seules, et chaque essai comprend un Indice, une Fusée et un OVNI offerts. Les vidéos et les achats sont des extras facultatifs.',
              },
              {
                q: 'Y a-t-il des pubs entre les plateaux ?',
                a: 'Non. OutBrick n’a **aucune publicité imposée** : ni bannières, ni pubs qui s’affichent d’elles-mêmes. Une vidéo ne se lance que si vous la choisissez pour une récompense, seule une vidéo regardée jusqu’au bout rapporte, et la limite est de **39 par jour** pour huit sortes. Voir [Les vidéos facultatives](help:lives-moves-and-undos#videos) et [Récompenses et pubs](help:rewards-and-ads).',
              },
              {
                q: 'Que fait Supprimer les pubs ?',
                a: 'Il retire toutes les vidéos facultatives mais garde les récompenses : les boutons qui proposaient de regarder indiquent **Réclamer la récompense** et versent la récompense immédiatement, dans les mêmes limites quotidiennes. Posséder le Pass Brique en cours fait la même chose pour cette saison. Voir [Supprimer les pubs et le Pass Brique](help:shop-and-purchases#remove-ads).',
              },
              {
                q: 'Y a-t-il un abonnement ?',
                a: 'Non. Chaque pass et chaque article à durée limitée est un achat unique, et **rien ne se renouvelle tout seul**. Les prix sont affichés dans votre devise par l’App Store.',
              },
              {
                q: 'Il me manque un achat. Que faire ?',
                a: 'Ouvrez la **Boutique**, faites défiler tout en bas et touchez **Restaurer l’achat**. Les pièces, les bonus et les vies voyagent avec votre progression via iCloud plutôt que par l’App Store. Il manque toujours ? Écrivez-nous en privé avec le [formulaire de contact](/contact). Voir [Progression perdue ou achat manquant](help:lost-progress-and-purchases).',
              },
              {
                q: 'Comment me faire rembourser ?',
                a: 'Les achats passent par Apple : c’est donc Apple qui gère les remboursements. Voir [notre page sur les remboursements](/refunds) pour savoir comment en faire la demande.',
              },
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Progression et appareils',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'OutBrick fonctionne-t-il hors ligne ?',
                a: 'Oui. **Tous les plateaux se jouent hors ligne** : un tunnel ou un vol ne vous arrête pas. Quelques fonctions ont besoin d’une connexion : les vidéos facultatives, les achats et **Restaurer l’achat**, l’onglet Classement, les courses et Game Center. Votre progression est conservée sur votre appareil et dans votre iCloud, et se synchronise dès que vous êtes de nouveau en ligne.',
              },
              {
                q: 'Vais-je perdre ma progression si je change de téléphone ?',
                a: 'Pas si vous utilisez iCloud. La progression est enregistrée dans votre propre compte iCloud : un nouvel iPhone ou iPad connecté au **même compte Apple** récupère votre niveau, vos étoiles, vos pièces, vos bonus, vos séries, la Collection et la Garde-robe. Touchez ensuite **Restaurer l’achat** dans la Boutique. Si l’ancien appareil n’a jamais été connecté à iCloud, connectez-le et ouvrez OutBrick une fois avant de changer. Voir [Passer à un nouvel iPhone ou iPad](help:progress-privacy-and-account#new-device).',
              },
              {
                q: 'Ai-je besoin d’un compte OutBrick ?',
                a: 'Non. Il n’y a aucun compte OutBrick à créer : le jeu utilise votre iCloud. Le site de la communauté a sa propre connexion facultative, distincte du jeu.',
              },
              {
                q: 'Puis-je jouer sur mon iPhone et sur mon iPad ?',
                a: 'Oui. Connectés au même compte Apple, les deux appareils partagent une seule sauvegarde via iCloud. Quand ils ne sont pas d’accord, rien n’est écrasé : le niveau et les compteurs les plus élevés sont conservés et les collections sont réunies. Les réglages du son et la plupart des réglages d’accessibilité du plateau restent sur chaque appareil ; votre choix Daltonien vous suit.',
              },
              {
                q: 'Comment recommencer depuis le niveau 1 ?',
                a: '**Réglages › Effacer mes données**, tout en bas de l’onglet Jeu, réinitialise votre progression et demande à iCloud de supprimer votre sauvegarde. C’est irréversible. Voir [Effacer vos données](help:progress-privacy-and-account#delete).',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accessibilité',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Puis-je jouer si je suis aveugle ou malvoyant ?',
                a: 'Oui. Avec **VoiceOver**, chaque plateau se lit case par case, chaque pièce est nommée par son type, sa couleur et son état, et vous glissez et échangez avec des actions comme « Faire glisser vers la gauche et sortir par la porte : rouge ». Les rotors vont directement aux objectifs, aux spéciales, aux obstacles et aux portes, et le toucher deux fois avec deux doigts donne un indice gratuit. En cas de basse vision, essayez le **Plateau à fort contraste** et la Police plus grande. Voir [Jouer avec VoiceOver](help:voiceover) et [Vue, audition et mouvement](help:vision-hearing-and-motion).\n\nDans les versions 5.1 et 5.1.1, VoiceOver peut perdre sa place sur le plateau ; un correctif arrive. Voir les [problèmes connus](/support/known-issues) pour savoir quoi faire en attendant.',
              },
              {
                q: 'Puis-je jouer si je suis daltonien ?',
                a: 'Oui. Les symboles **Daltonien** sont activés dès le tout premier plateau : chaque couleur a sa propre forme (rouge cercle, orange triangle, jaune carré, vert losange, bleu plus, violet étoile, rose barre, turquoise hexagone), et les objectifs et les portes portent la même forme. Voir [Les symboles pour daltoniens](help:vision-hearing-and-motion#colour-blind).',
              },
              {
                q: 'Puis-je jouer avec des contacteurs, ma voix ou un clavier ?',
                a: 'Oui. Chaque plateau peut se jouer avec Contrôle vocal (« Toucher Rouge 14 », puis « Toucher Gauche »), Contrôle de sélection ou les touches fléchées. **Confirmer les échanges** vous fait choisir chaque coup deux fois, pour que rien ne se joue par accident. Voir [Contrôle vocal, Contrôle de sélection et claviers](help:voice-control-switch-control-keyboard).',
              },
              {
                q: 'Faut-il entendre quelque chose pour jouer ?',
                a: 'Non. Les amis s’expriment dans des bulles de texte, pas à voix haute, et chaque son a son équivalent à l’écran. Les vibrations vous font sentir l’arrivée des coups. Voir [Son, musique, vibrations et Son de rangée](help:vision-hearing-and-motion#sound).',
              },
              {
                q: 'Puis-je ralentir le jeu ?',
                a: 'Oui. **Réglages › Accessibilité › Vitesse des animations** va de 50 % à 200 % ; à 50 %, chaque échange, chute et disparition prend deux fois plus de temps. Sans chrono nulle part, le seul rythme est le vôtre. Voir [Jouer au calme](help:playing-calmly).',
              },
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'L’équipe',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Comment joindre une personne ?',
                a: 'Dans le jeu, ouvrez **Réglages › Nous écrire**, ou utilisez le [formulaire de contact](/contact) de ce site. **Une personne de l’équipe lit chaque message**, et nous essayons de répondre sous deux jours ouvrés. Votre message reçoit une référence (comme OB-7K2QXM) et un lien privé pour le suivre. N’envoyez jamais de mot de passe ni d’informations de carte bancaire.',
              },
              {
                q: 'Qui fait OutBrick ?',
                a: 'OutBrick est un petit projet indépendant. Pour en savoir plus, voir [À propos d’OutBrick](/about).',
              },
              {
                q: 'Comment signaler un bug ?',
                a: 'Dans le jeu, **Réglages › Signaler un bug** ouvre un signalement déjà rempli avec votre appareil, vos versions et votre niveau, sans votre nom ni votre compte. Voir [Bien signaler un bug](help:reporting-bugs), et consultez d’abord les [problèmes connus](/support/known-issues) : nous sommes peut-être déjà en train de le corriger.',
              },
              {
                q: 'Où demander de l’aide à d’autres joueurs pour un niveau ?',
                a: 'Utilisez [Aide pour un niveau](/support/levels) : entrez le numéro du niveau pour voir ce que d’autres ont dit de ce plateau, ou posez-leur la question. Voir [Utiliser la communauté OutBrick](help:using-the-community).',
              },
              {
                q: 'Puis-je proposer une idée ou tester les mises à jour en avance ?',
                a: 'Oui. Publiez et votez dans [Idées et avis](/community/c/ideas), et consultez [Contribuez à OutBrick](/support/get-involved) pour rejoindre le groupe de bêta-test ou le panel accessibilité.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Toujours pas de réponse ?',
            text: 'Cherchez un mot de votre question dans le Centre d’aide, ou posez-la dans [Aide et assistance](/community/c/help). Pour tout ce qui est privé, comme un achat, utilisez le [formulaire de contact](/contact).',
          },
        ],
      },
    ],
    related: ['welcome', 'lives-moves-and-undos', 'troubleshooting', 'accessibility', 'parents-guide', 'lost-progress-and-purchases'],
  },

  {
    slug: 'first-week',
    category: 'start',
    cover: 'garden-teach',
    host: 'bloo',
    hostPose: 'cheer',
    title: 'Votre première semaine dans OutBrick',
    summary:
      'À quoi ressemble une première semaine typique, jour après jour : la Cité-Jardin et ses cartes d’apprentissage, vos premières étoiles et votre première récompense de village, les plateaux Difficile, Clover Farm, et les petites habitudes quotidiennes qui rendent le Voyage plus agréable.',
    keywords:
      'débutant nouveau joueur premiers jours semaine guide à quoi s’attendre cité-jardin garden city clover farm ferme tutoriel didacticiel cartes d’apprentissage brique du jour série missions roue cadeau de bienvenue garder bonus conseils astuces',
    sections: [
      {
        id: 'pace',
        title: 'Avant de commencer',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick n’a pas de chrono et rien ne presse. La semaine ci-dessous est un **rythme typique, pas un programme** : certains joueurs terminent la Cité-Jardin en un après-midi, d’autres en une semaine. Vous ne perdez rien dans le Voyage en avançant plus lentement.',
          },
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Une idée à la fois',
            text: 'Le premier village est conçu pour apprendre. Chaque plateau apporte au plus une idée nouvelle, et une courte carte d’apprentissage la montre la première fois, avec une main animée. Touchez n’importe où pour commencer à jouer.',
          },
        ],
      },
      {
        id: 'week',
        title: 'Jour après jour',
        blocks: [
          {
            t: 'path',
            items: [
              {
                day: 'Jour 1',
                title: 'La Cité-Jardin et vos premiers plateaux',
                text: 'Touchez le bouton vert **Niveau** sur l’Accueil. Le niveau 1 apprend à renvoyer une brique chez elle par sa porte ; le niveau 2 apprend à échanger pour former des lignes. Chaque essai comprend un **Indice**, une **Fusée** et un **OVNI** offerts, et un **cadeau de bienvenue** unique de 2 de chaque arrive tôt dans votre barre. Votre premier plateau terminé de la journée rapporte aussi la **Brique du jour** : 100 pièces, récupérées sur l’Accueil.',
              },
              {
                day: 'Jour 2',
                title: 'Des briques qui tombent et vos premiers obstacles',
                text: 'La Cité-Jardin continue d’ajouter des idées : des plateaux où les briques tombent et où de nouvelles arrivent, des briques longues qui ont besoin d’une porte aussi large qu’elles, puis des caisses, de la glace, des verrous, de la mousse et des statues. Chacun a sa propre carte d’apprentissage. Terminer un plateau de nouveau aujourd’hui porte votre **série de jours** à deux jours, et la **Roue** de l’Accueil offre un tour gratuit chaque jour.',
              },
              {
                day: 'Jour 3',
                title: 'Les étoiles, et votre première plaque Difficile',
                text: 'Surveillez la **barre d’étoiles** en jouant : un meilleur score rapporte deux ou trois étoiles, et chaque village en contient 36. Les récolter vous fait monter l’échelle d’étoiles du village (50 pièces, un Indice, 100 pièces et une Fusée) ; un badge sur la carte vous signale quand une récompense est prête. Les derniers plateaux de la Cité-Jardin portent une plaque **Difficile**. Trois jours d’affilée vous rapportent votre première récompense de série : 100 pièces.',
              },
              {
                day: 'Jour 4',
                title: 'Un village terminé, et Clover Farm',
                text: 'Terminez les douze plateaux de la Cité-Jardin et une carte de fête vous propose **Partager** et **En route**. Clover Farm, niveaux 13 à 24, propose les mêmes douze types de plateaux dans le même ordre, et les idées que vous avez apprises commencent à se combiner. Si vous êtes à court de coups, l’écran « Plus de coups » propose des façons de continuer ; rien de payant n’est proposé avant le niveau 6.',
              },
              {
                day: 'Jour 5',
                title: 'Le Classement, et des difficultés plus corsées',
                text: 'L’onglet **Classement** s’ouvre au niveau 21. Les plateaux Très difficile commencent à apparaître dans les premiers villages, et à partir du niveau 40, le dernier plateau de chaque chapitre est un **Boss**. Les plateaux plus difficiles rapportent plus de pièces. Voir [Comment battre un plateau difficile](help:hard-boards) quand l’un d’eux vous arrête.',
              },
              {
                day: 'Jour 6',
                title: 'De nouvelles idées continuent d’arriver',
                text: 'Au fil des villages, les plateaux ajoutent des couvercles sur des **parterres scellés**, des **briques face cachée « ? »**, des portes gelées et à compteur, des portes d’étape et des portails. Chacun a sa carte d’apprentissage la première fois que vous le rencontrez, et vous pouvez toucher n’importe quel obstacle ou couvercle sur un plateau pour un rappel en une ligne.',
              },
              {
                day: 'Jour 7',
                title: 'Une semaine déjà',
                text: 'Sept jours d’affilée rapportent **250 pièces et un bouclier de série**, qui pourra plus tard rattraper un jour manqué. Les missions de la semaine se réinitialisent le lundi, et chaque nouveau niveau terminé vous a fait monter dans les paliers du **Pass Brique**. Touchez votre avatar pour voir vos statistiques jusqu’ici.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les niveaux exacts dépendent de votre rythme. Le Classement (niveau 21) et la Collection (niveau 95) se débloquent selon le niveau, pas selon le jour, et quelques plateaux de chaque village sont Difficile par conception.',
          },
        ],
      },
      {
        id: 'garden-city',
        title: 'Ce qu’apprend la Cité-Jardin',
        blocks: [
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Un plateau de la Cité-Jardin avec des briques rouges, violettes et orange. Une carte d’apprentissage rose en bas indique : Fais glisser une brique à côté de deux de sa couleur pour faire une ligne, ou pousse-la vers une voisine pour les échanger. Les lignes s’effacent ! En dessous : À toi, essaie ! Une main désigne une brique.',
            caption: 'Une carte d’apprentissage au niveau 2. Chaque nouvelle idée a sa carte, la première fois que vous la rencontrez.',
          },
          {
            t: 'p',
            text: 'La Cité-Jardin est le premier village : les niveaux 1 à 12, un de chacun des [douze types de plateaux](help:bricks-specials-and-blockers#kinds). Chaque village suivant respecte le même ordre : ce que la Cité-Jardin vous apprend continue donc de servir pendant 2 000 niveaux.',
          },
          {
            t: 'list',
            items: [
              '**Renvoyer chez elle :** une brique ne sort que par une porte ouverte de sa propre couleur. Toute autre porte est un mur.',
              '**Échanger :** un échange n’est conservé que s’il aligne trois briques ou plus ; sinon, il revient en place et ne coûte rien.',
              '**Les objectifs de porte comptent aussi les lignes :** un objectif comme « renvoyer les rouges chez elles » compte les briques rouges que vous faites sortir et celles que vous faites disparaître en lignes.',
              '**Les spéciales :** quatre en ligne, un L ou un T, un carré de 2×2 et cinq en ligne créent chacun une brique spéciale différente. Voir [Briques spéciales](help:bricks-specials-and-blockers#specials).',
              '**Les plateaux qui tombent :** là où les briques tombent, vous pouvez glisser sur le côté, ou tout droit vers une porte.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Avec VoiceOver, les cartes d’apprentissage sont le seul élément à l’écran tant qu’elles sont affichées : touchez deux fois pour commencer à jouer. Le premier plateau à portes que vous jouez vous présente aussi le rotor **Portes**.',
          },
        ],
      },
      {
        id: 'first-stars',
        title: 'Vos premières étoiles et votre récompense de village',
        blocks: [
          {
            t: 'list',
            items: [
              'Chaque plateau terminé rapporte au moins **une étoile**. Les coups restants se transforment en rayons de ligne qui valent 150 points chacun : une fin bien menée fait souvent passer d’une étoile à deux.',
              'La pastille des **étoiles** dans l’en-tête du Voyage compte les étoiles de ce village. Touchez-la pour voir les récompenses d’étoiles.',
              'Vous pouvez rejouer n’importe quel plateau terminé depuis le Voyage pour améliorer ses étoiles ; rejouer ne change jamais votre place sur la carte.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'La carte de victoire : un ruban doré indiquant Crête de la Fusée 4, un badge Chapitre terminé, trois étoiles dorées, un ami en briques vert qui fait la fête, le mot Brillant !, un score de 5 470, plus 125 pièces, une pastille Du premier coup !, une ligne Coffre du voyage, et les boutons Accueil, Suivant et Partager.',
            caption: 'La carte de victoire : vos étoiles, votre score, vos pièces et les récompenses ramassées en chemin.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Les habitudes qui aident',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Un peu chaque jour, ça mène loin',
            text: 'Un plateau terminé par jour suffit pour récupérer la Brique du jour et faire grandir votre série. Pas besoin de longues parties : OutBrick récompense le fait de revenir plus que celui de rester.',
          },
          {
            t: 'table',
            head: ['Habitude', 'Pourquoi ça aide'],
            rows: [
              ['Terminer un plateau par jour', 'Rapporte la **Brique du jour** (100 pièces) et fait grandir votre série de jours : 100 pièces à 3 jours, 250 et un bouclier de série à 7.'],
              ['Faire tourner la Roue', 'Un tour gratuit par jour pour des pièces ou un bonus. Terminez trois nouveaux niveaux dans la journée et le tour gratuit rapporte deux fois plus de pièces.'],
              ['Consulter les Missions', 'Trois choses à faire aujourd’hui et trois pour la semaine, chacune avec sa récompense. Touchez **Récupérer** ou **Tout récupérer**.'],
              ['Récupérer les récompenses d’étoiles', 'Un badge sur la carte vous signale quand une récompense d’étoiles du village vous attend.'],
              ['Utiliser les bonus offerts', 'L’Indice, la Fusée et l’OVNI offerts à chaque essai ne se gardent pas : utilisez-les.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Les Missions dans la 5.1.1',
            text: 'Dans les versions 5.1 et 5.1.1, certaines missions ne comptent pas la progression sur les plateaux Slide & Match, et quelques-unes demandent des choses que ces plateaux ne peuvent pas donner. Vos niveaux, vos étoiles et vos pièces ne sont pas touchés, et un correctif arrive. Voir les [problèmes connus](/support/known-issues).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Garder les bonus pour les moments qui comptent',
        blocks: [
          {
            t: 'list',
            items: [
              'Un badge **OFFERT** sur un bonus signifie que la prochaine utilisation ne coûte rien ; le jeu utilise les bonus offerts avant ceux que vous possédez.',
              'Les bonus que vous possédez (du cadeau de bienvenue, de la Roue, des récompenses d’étoiles, des Missions et du Pass Brique) se gardent jusqu’à ce que vous les utilisiez.',
              'Les séries de victoires en ajoutent pour votre plateau suivant : 2 victoires d’affilée donnent un Indice, 3 une Fusée, 4 un OVNI, et 5 les trois. Seuls les nouveaux niveaux comptent.',
              'Gardez les Fusées et les OVNI que vous possédez pour les plateaux Difficile, Très difficile et Boss, où un seul obstacle mal placé peut vous coûter le plateau.',
            ],
          },
          { t: 'p', text: 'Plus de détails dans [Bonus, indices et Pause](help:boosters-and-pause) et [Comment battre un plateau difficile](help:hard-boards#boosters).' },
        ],
      },
      {
        id: 'lives',
        title: 'Les vies pendant votre première semaine',
        blocks: [
          {
            t: 'p',
            text: 'Les vies ne partent que lorsque vous perdez un essai, jamais quand vous gagnez ou ouvrez un plateau. Si un plateau vous fait hésiter, regardez-le d’abord : quitter avant votre premier coup est toujours gratuit. Après votre troisième plateau terminé, le jeu demande une fois s’il peut vous envoyer des rappels, par exemple quand vos vies sont pleines ; **Plus tard** attend une semaine. Voir [Les vies, le manque de coups et les annulations](help:lives-moves-and-undos).',
          },
        ],
      },
      {
        id: 'next',
        title: 'Et ensuite ?',
        blocks: [
          {
            t: 'list',
            items: [
              '[La visite de tous les menus](help:menus-tour), pour savoir à quoi sert chaque bouton.',
              '[Le Voyage et ses villages](help:journey-and-villages), pour les coffres, les cadeaux et l’atlas de tous les villages.',
              '[Récompenses, événements et Pass Brique](help:rewards-and-events), pour les séries, les Missions et les événements.',
              '[Le glossaire d’OutBrick](help:glossary), dès qu’un mot est nouveau.',
            ],
          },
        ],
      },
    ],
    related: ['welcome', 'menus-tour', 'journey-and-villages', 'rewards-and-events', 'hard-boards', 'glossary'],
  },

  {
    slug: 'hard-boards',
    category: 'learn',
    cover: 'board-village',
    host: 'peach',
    hostPose: 'think',
    title: 'Comment battre un plateau difficile',
    summary:
      'Une méthode d’expert pour les plateaux qui vous résistent : lire les objectifs, compter les coups, choisir entre glisser et aligner, jouer bas sur les plateaux qui tombent, garder les spéciales pour les combos, bien utiliser les bonus et les annulations, et savoir quand continuer.',
    keywords:
      'stratégie conseils astuces bloqué niveau difficile dur impossible n’arrive pas à battre passer un niveau très difficile boss nuit aide solution soluce plan coups combos cascades réactions en chaîne bonus annuler continuer coup de main voiceover rotor',
    sections: [
      {
        id: 'before',
        title: 'Avant votre premier coup',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Regarder d’abord, jouer ensuite',
            text: 'La plupart des plateaux difficiles se perdent dans les trois premiers coups, pas dans les trois derniers. Ouvrir un plateau ne coûte rien, et le quitter avant votre premier coup est toujours gratuit : prenez donc le temps de tout regarder avant de toucher quoi que ce soit.',
          },
          {
            t: 'steps',
            items: [
              '**Lisez chaque objectif** dans le panneau des objectifs : quelles couleurs, combien, et s’il y a des caisses, des verrous ou de la mousse à éliminer. Un plateau en **étapes** ouvre de nouvelles portes quand les premiers objectifs sont atteints.',
              '**Comptez vos coups** par rapport aux objectifs. Vingt coups pour vingt briques rouges, cela veut dire que des glissements un par un ne suffiront pas : il vous faut des lignes.',
              '**Repérez les portes.** Notez la couleur et la largeur de chacune, et si elle est gelée, à compteur ou scellée jusqu’à une étape suivante.',
              '**Repérez ce qui est coincé :** les briques sous un couvercle, dans la glace ou derrière un verrou ne peuvent pas encore bouger. Touchez n’importe quel obstacle ou couvercle pour un rappel en une ligne de la façon de l’ouvrir.',
              '**Vérifiez si les briques tombent.** Si c’est le cas, de nouvelles briques peuvent arriver, et chaque ligne change ce qui se trouve au-dessus.',
            ],
          },
        ],
      },
      {
        id: 'slide-or-match',
        title: 'Glisser ou aligner : chaque coup là où il compte le plus',
        blocks: [
          {
            t: 'p',
            text: 'Un objectif de porte comme « renvoyer 12 rouges chez elles » compte **à la fois** les briques rouges que vous faites sortir par la porte rouge **et** celles que vous faites disparaître en lignes. Cela change le calcul :',
          },
          {
            t: 'table',
            head: ['Coup', 'Briques d’objectif pour un coup', 'Idéal pour'],
            rows: [
              ['Renvoyer une brique chez elle', '1', 'Une brique seule avec un passage dégagé, ou la dernière ou les deux dernières d’un objectif.'],
              ['Renvoyer chez elle une brique longue ou grande', 'Une par case couverte', 'Les briques longues et grandes comptent chaque case : une 2×2 en vaut donc quatre en un coup.'],
              ['Échanger pour aligner 3 briques', '3', 'La majeure partie du plateau, la plupart du temps.'],
              ['Ligne de 4 ou 5, ou une forme', '4 ou plus, plus une spéciale', 'Créer des spéciales qui en feront disparaître beaucoup plus ensuite.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['Y . . G', 'R+ B R R', '. . Y .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['Y . . G', 'B . . .', '. . Y .'] },
              caption: 'Un échange, trois briques rouges pour l’objectif. Celle qui est devant la porte rouge sort par elle.',
              alt: 'Un plateau de trois rangées et quatre colonnes où rien ne tombe, avec une porte rouge sur le bord droit de la rangée du milieu. Rangée du haut : jaune, vide, vide, vert. Rangée du milieu : rouge (en surbrillance), bleu, rouge, rouge. Rangée du bas : vide, vide, jaune, vide. La brique rouge en surbrillance s’échange vers la droite avec la brique bleue, ce qui aligne trois briques rouges. Après le coup, les trois briques rouges ont disparu, celle qui était à côté de la porte rouge étant sortie par elle, et la brique bleue se trouve à gauche de la rangée du milieu. Les trois comptent pour un objectif rouge.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Une brique alignée ou soufflée sur la case juste devant sa propre porte sort par cette porte. Quand une porte est **à compteur**, c’est important : seules les briques qui passent par elle utilisent ses places, alors choisissez lesquelles envoyer.',
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Libérer les obstacles et ouvrir les portes',
        blocks: [
          {
            t: 'p',
            text: 'Les obstacles ne s’ouvrent pas tous de la même façon. Faire le bon type de ligne, c’est ce qui économise des coups :',
          },
          {
            t: 'board',
            board: {
              rows: ['x2 . . .', 'R R B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['x . . .', '. . . B'] },
              caption: 'Une ligne à côté d’une caisse casse une couche.',
              alt: 'Un plateau de deux rangées et quatre colonnes où rien ne tombe. Rangée du haut : une caisse à 2 couches, puis trois cases vides. Rangée du bas : rouge, rouge, bleu, rouge (en surbrillance). La brique rouge en surbrillance s’échange vers la gauche avec la brique bleue, ce qui aligne trois briques rouges sous la caisse. Après le coup, les briques rouges ont disparu, il reste 1 couche à la caisse, et la brique bleue se trouve à droite de la rangée du bas.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'R R! B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['. . . .', '. R . B'] },
              caption: 'Un verrou ne s’ouvre qu’avec une ligne qui le traverse. La brique libérée reste en place.',
              alt: 'Un plateau de deux rangées et quatre colonnes où rien ne tombe. Rangée du haut vide. Rangée du bas : rouge, une brique rouge verrouillée, bleu, rouge (en surbrillance). La brique rouge en surbrillance s’échange vers la gauche avec la brique bleue : la ligne de trois briques rouges traverse donc la brique verrouillée. Après le coup, les deux briques rouges non verrouillées ont disparu, le verrou a disparu et sa brique rouge reste en place, désormais libre de bouger, et la brique bleue se trouve à droite de la rangée du bas.',
            },
          },
          {
            t: 'table',
            head: ['Obstacle', 'Ce qui l’ouvre', 'Tactique'],
            rows: [
              ['Caisse', 'Une ligne à côté, une couche par ligne.', 'Alignez d’abord à côté des caisses qui murent le passage vers une porte.'],
              ['Glace', 'Une ligne à côté.', 'Libérez tôt les briques d’objectif gelées : elles ne peuvent pas bouger avant.'],
              ['Verrou', 'Une ligne qui le **traverse**.', 'Construisez la ligne autour de la brique verrouillée ; une ligne à côté ne fait rien.'],
              ['Mousse', 'Une ligne à côté.', 'La mousse s’étend après chaque coup qui n’enlève pas de mousse : continuez à l’éliminer, et ne la laissez pas s’étendre.'],
              ['Statue', 'Rien : elle reste.', 'Prévoyez vos passages autour d’elle.'],
              ['Couvercle', 'Sa propre règle : un compte, une couleur, une ligne clé, un nombre de coups ou une brique clé.', 'Lisez le couvercle avant le premier coup ; voir [Les salles scellées et leurs couvercles](help:bricks-specials-and-blockers#lids).'],
            ],
          },
          {
            t: 'p',
            text: 'Chaque obstacle, couvercle et porte est décrit en détail dans [Tous les obstacles, couvercles et portes, expliqués](help:blockers-encyclopedia).',
          },
          { t: 'h3', text: 'Portes gelées, à compteur et d’étape' },
          {
            t: 'list',
            items: [
              '**Porte gelée :** dégèle un peu chaque fois qu’une brique rentre chez elle par n’importe quelle porte, et quand des pièces disparaissent devant elle. Renvoyez tôt les autres couleurs chez elles pour l’ouvrir plus vite.',
              '**Porte à compteur :** n’accepte qu’un certain nombre de briques, puis se ferme pour de bon. Ne gaspillez pas ses places avec des briques qu’une ligne pourrait faire disparaître.',
              '**Porte d’étape :** reste scellée jusqu’au début de la deuxième étape d’objectifs. Ne dépensez pas de coups à lui préparer des briques pendant la première étape.',
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'B . . R+', '. . . .'],
              gates: [
                { side: 'left', at: 1, colour: 'B', kind: 'iced' },
                { side: 'right', at: 1, colour: 'R' },
              ],
              moves: [{ row: 1, col: 3, dir: 'right' }],
              after: {
                rows: ['. . . .', 'B . . .', '. . . .'],
                gates: [
                  { side: 'left', at: 1, colour: 'B' },
                  { side: 'right', at: 1, colour: 'R' },
                ],
              },
              caption: 'Ici, la porte bleue gelée a besoin qu’une brique de plus rentre chez elle, par n’importe quelle porte.',
              alt: 'Un plateau de trois rangées et quatre colonnes. Sur le bord gauche de la rangée du milieu se trouve une porte bleue gelée ; sur le bord droit de la rangée du milieu, une porte rouge ouverte. La rangée du milieu contient une brique bleue à gauche et une brique rouge (en surbrillance) à droite. La brique rouge glisse vers la droite et sort par la porte rouge. Après le coup, la brique rouge a disparu et la porte bleue a dégelé et s’est ouverte : la brique bleue peut maintenant glisser vers la gauche pour y entrer.',
            },
          },
        ],
      },
      {
        id: 'falling',
        title: 'Les plateaux qui tombent : jouez bas',
        blocks: [
          {
            t: 'p',
            text: 'Sur les plateaux où les briques tombent, une ligne près du bas fait bouger tout ce qui se trouve au-dessus, et la chute peut aligner d’elle-même une autre ligne : une **cascade**, qui ne coûte aucun coup de plus. Une ligne près du haut ne fait presque rien bouger. Donc, à choix égal, **jouez du bas vers le haut**.',
          },
          {
            t: 'board',
            board: {
              rows: ['R . .', 'G . .', 'Y+ G .', 'G R R'],
              moves: [{ row: 2, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['. . .', '. . .', '. . .', '. Y .'] },
              caption: 'Un échange, deux lignes : la ligne verte disparaît, la brique rouge tombe, et la ligne rouge disparaît aussi.',
              alt: 'Un plateau de quatre rangées et trois colonnes où les briques tombent mais où aucune nouvelle n’arrive. Colonne de gauche, de haut en bas : rouge, vert, jaune (en surbrillance), vert. Colonne du milieu : vide, vide, vert, rouge. Colonne de droite : vide, vide, vide, rouge. La brique jaune en surbrillance s’échange vers la droite avec la brique verte à côté d’elle, ce qui forme une colonne de trois briques vertes à gauche. Elles disparaissent, la brique rouge du haut tombe dans la rangée du bas à côté des deux briques rouges qui s’y trouvent, et cette ligne de trois briques rouges disparaît à son tour. La brique jaune tombe dans la rangée du bas, et c’est tout ce qui reste.',
            },
          },
          {
            t: 'list',
            items: [
              'Sur les plateaux qui tombent, vous pouvez glisser sur le côté dans un trou, ou tout droit vers une porte. Servez-vous des glissements pour préparer des lignes qu’une chute complétera.',
              'Là où de nouvelles briques arrivent, le haut du plateau est inconnu ; c’est le bas que vous pouvez planifier.',
              'Sur les plateaux **Pièces d’angle** et **Puzzle tranquille**, les briques tombent mais aucune nouvelle n’arrive : chaque brique est donc tout ce que vous aurez. Comptez les briques de chaque couleur d’objectif avant de commencer.',
            ],
          },
        ],
      },
      {
        id: 'specials',
        title: 'Les spéciales : créez-les, puis gardez-les pour un combo',
        blocks: [
          {
            t: 'table',
            head: ['Créée par', 'Spéciale', 'Meilleur usage'],
            rows: [
              ['Quatre en ligne', 'Rayon de ligne', 'Vide toute une ligne ou une colonne, dans le sens de votre mouvement. Visez une ligne pleine de briques d’objectif ou de caisses.'],
              ['Une forme en L, en T ou en +', 'Bombe', 'Fait exploser le carré de 3×3 autour d’elle, deux fois. Efficace contre les groupes d’obstacles.'],
              ['Un carré de 2×2', 'Fléchette', 'Vole vers une pièce dont un objectif a besoin. Idéale pour la dernière pièce d’objectif récalcitrante.'],
              ['Cinq en ligne', 'Bombe de couleur', 'Échangez-la avec une couleur pour prendre toutes les briques simples de cette couleur.'],
            ],
          },
          {
            t: 'p',
            text: 'Une spéciale déclenchée seule, c’est bien ; deux échangées ensemble, c’est bien mieux. Si deux spéciales sont proches, essayez de les amener côte à côte et de les échanger entre elles plutôt que de toucher chacune :',
          },
          {
            t: 'board',
            board: {
              rows: ['G Y . B', 'R- Bb+ . Y', 'Y G B R'],
              moves: [{ row: 1, col: 1, dir: 'left', kind: 'swap' }],
              caption: 'Un rayon de ligne et une bombe côte à côte : échangez-les ensemble pour une croix large de trois rangées.',
              alt: 'Un plateau de trois rangées et quatre colonnes. Rangée du haut : vert, jaune, vide, bleu. Rangée du milieu : un rayon de ligne rouge qui tire à l’horizontale, une bombe bleue (en surbrillance), vide, jaune. Rangée du bas : jaune, vert, bleu, rouge. Une flèche montre la bombe bleue qui s’échange vers la gauche avec le rayon de ligne rouge. Échangés ensemble, ils explosent en une croix large de trois rangées et de trois colonnes.',
            },
          },
          {
            t: 'table',
            caption: 'Les combos, du bon au meilleur',
            head: ['Échangez ensemble', 'Résultat'],
            rows: [
              ['Rayon de ligne + rayon de ligne', 'Une croix : une ligne et une colonne.'],
              ['Rayon de ligne + bombe', 'Une croix large de trois rangées.'],
              ['Bombe + bombe', 'Une explosion de 5×5.'],
              ['Fléchette + n’importe quelle spéciale', 'La fléchette emporte la spéciale jusqu’à sa cible.'],
              ['Bombe de couleur + n’importe quelle spéciale', 'Toutes les briques de cette couleur deviennent cette spéciale, et elles explosent toutes.'],
              ['Bombe de couleur + bombe de couleur', 'Tout le plateau.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Toucher une spéciale pour la déclencher sur place utilise un coup, tout comme un échange de combo : un combo, c’est donc le nettoyage de deux spéciales pour un seul coup. Plus de détails dans [Briques spéciales et combos : le guide complet](help:special-bricks-and-combos).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Les bonus offerts et l’annulation gratuite',
        blocks: [
          {
            t: 'p',
            text: 'Chaque essai comprend **un Indice, une Fusée et un OVNI offerts**. Ils ne se gardent pas pour plus tard : un plateau où vous ne les avez jamais touchés, c’est un plateau joué avec une main dans le dos.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Indice', text: 'Montre et annonce le meilleur coup. Utilisez-le tôt sur un plateau inconnu pour comprendre ce qu’il demande, pas seulement quand vous êtes bloqué.' },
              { term: 'Fusée', text: 'Transforme une brique simple en rayon de ligne qui part le long de sa ligne. Choisissez une ligne qui contient plusieurs briques d’objectif ou obstacles, de préférence en bas d’un plateau qui tombe.' },
              { term: 'OVNI', text: 'Retire une couche d’un coup de rayon : une couche de caisse, de la glace, un verrou, de la mousse ou une brique. Idéal sur l’obstacle unique qui bloque une brique d’objectif ou le passage vers une porte.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Les bonus ne peuvent cibler ni les briques à forme ni ce qui se trouve sous un couvercle. Les bonus que vous possédez se gardent : réservez-les aux plateaux Difficile, Très difficile et Boss. Voir [Bonus, indices et Pause](help:boosters-and-pause).',
          },
          { t: 'h3', text: 'Annuler pour regarder plus loin' },
          {
            t: 'list',
            items: [
              'La **première annulation de chaque plateau est gratuite**. Servez-vous-en pour essayer sans risque : jouez le coup dont vous doutez, et s’il tourne mal, reprenez-le.',
              'Annuler remet le plateau exactement comme il était avant votre coup, et vous rend ce coup.',
              'Après l’annulation gratuite, les annulations viennent d’une réserve de cinq au maximum, qui se recharge d’une toutes les 25 minutes. Gardez-les pour la fin d’un plateau, quand un seul coup gaspillé fait la différence.',
              '**Annuler coûte moins cher que Recommencer.** Recommencer après un coup met fin à l’essai et coûte une vie ; une annulation, jamais.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Quand continuer, et réessayer',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'L’écran Plus de coups, qui montre les objectifs restants, un bouton 5 coups de plus pour 300 pièces, un bouton Regarder pour 2 coups de plus, et Abandonner.',
            caption: 'Plus de coups : ce qu’il vous reste à faire, et vos options.',
          },
          {
            t: 'p',
            text: 'L’écran « Plus de coups » montre exactement ce qu’il reste. Lisez-le avant de choisir. Continuer garde cet essai en vie : cela **ne coûte jamais de vie** ; abandonner en utilise une, et une vie revient en 30 minutes.',
          },
          {
            t: 'table',
            head: ['Ce qu’il reste', 'Un choix raisonnable'],
            rows: [
              ['Une ou deux pièces d’objectif faciles à atteindre', 'Continuez : une vidéo gratuite (+2 coups), un **+5 coups** mis de côté, ou la première relance en pièces (300 pièces, +5 coups).'],
              ['Quelques pièces, mais un obstacle sur le chemin', 'La deuxième relance (500 pièces) ajoute un Indice ; la troisième (900), un OVNI pour cet obstacle.'],
              ['Presque tout un objectif encore à faire', 'Laissez tomber. Cet essai vous a appris le plateau ; le suivant repart de zéro.'],
            ],
          },
          {
            t: 'list',
            items: [
              'Le prix monte 300 → 500 → 900 au cours d’un même essai et repart de zéro à chaque nouvel essai.',
              'Sur un plateau que vous avez déjà tenté plusieurs fois, chaque relance donne un coup supplémentaire pour chaque essai raté après le troisième, jusqu’à +15.',
              'Le **Pass Brique** en cours ajoute trois coups gratuits sur l’écran « Plus de coups ».',
              'Rien de payant n’est proposé avant le niveau 6.',
            ],
          },
          { t: 'p', text: 'Tous les détails dans [Plus de coups](help:lives-moves-and-undos#out-of-moves).' },
          { t: 'h3', text: 'Réessayer : le coup de main' },
          {
            t: 'list',
            items: [
              'Après une défaite, l’écran **Niveau échoué** montre à quel point vous étiez proche. Servez-vous de ce que vous avez vu : quel objectif a manqué, quel obstacle a pris trop de temps.',
              'À partir de votre **sixième essai** sur le même plateau, le jeu vous donne **3 coups en plus** avant de commencer : « Un coup de main : 3 coups en plus pour cet essai ». Une fois par jour et par plateau, gratuitement.',
              'À partir du niveau 6, vous pouvez commencer l’essai suivant avec un coup de pouce pour 800 pièces : une Fusée sur le plateau et un OVNI offert.',
              'Toujours bloqué ? Cherchez le niveau dans [Aide pour un niveau](/support/levels) : d’autres joueurs ont peut-être laissé un petit conseil.',
            ],
          },
          {
            t: 'shot',
            id: 'level-failed',
            alt: 'Niveau raté : un ami triste, « Presque ! », les objectifs restants (3 briques soleil et 3 briques vague), un cœur brisé indiquant une vie utilisée, un bouton bleu pour réessayer, une offre facultative et le retour à la carte.',
            caption: 'L’écran d’échec montre à quel point vous étiez proche.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'À quoi s’attendre avec Difficile, Très difficile et Boss',
        blocks: [
          {
            t: 'table',
            head: ['Difficulté', 'Ce qui change', 'Pièces gagnées'],
            rows: [
              ['Difficile', 'Les objectifs demandent environ 15 % de plus, avec quelques obstacles en plus.', '50'],
              ['Très difficile', 'Les objectifs demandent environ 30 % de plus.', '80'],
              ['Boss', 'Le dernier plateau d’un chapitre, à partir du niveau 40. Les objectifs demandent environ 40 % de plus.', '80'],
              ['Nuit', 'Un plateau à la tombée de la nuit. Il se joue comme un plateau Difficile.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Attendez-vous à avoir besoin de plus d’un essai sur les plateaux Très difficile et Boss : c’est ainsi qu’ils sont réglés, pas le signe que vous jouez mal. Chaque plateau du jeu a été résolu par un solveur avant sa sortie : chacun peut donc être gagné.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'La stratégie avec VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              '**Commencez par le résumé Plateau** en haut : niveau, étape, objectifs et coups restants. Touchez-le deux fois pour entendre tout le plateau, avec un indice.',
              '**Utilisez les rotors plutôt que de balayer case par case.** **Objectifs** trouve les pièces que demandent vos objectifs ; **Pièces qui s’alignent** trouve chaque coup qui fait disparaître des briques tout de suite ; **Obstacles** et **Portes** montrent ce qui barre le passage et par où les briques peuvent sortir.',
              '**Écoutez les actions d’une pièce.** Les glissements disent jusqu’où ils vont et s’ils sortent par une porte, et les échanges qui fonctionnent viennent en premier : les premières actions sont souvent le plan.',
              '**Réglez Détail des annonces sur Complet** sur les plateaux difficiles pour entendre le compte de chaque objectif après chaque coup, et ne jamais perdre le fil.',
              '**Le toucher deux fois avec deux doigts est un indice gratuit** qui n’utilise jamais de bonus Indice. Demandez-en aussi souvent que vous voulez.',
              'Activez **Confirmer les échanges** si un geste maladroit risque de jouer un coup que vous ne vouliez pas.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Dans les versions 5.1 et 5.1.1, une carte proposant des bonus peut s’ouvrir pendant que vous lisez le plateau et ramener VoiceOver tout en haut. Le geste Frotter avec deux doigts la ferme et vous ramène sur le plateau ; un correctif arrive. Voir [Jouer avec VoiceOver](help:voiceover#rotors) et les [problèmes connus](/support/known-issues).',
          },
        ],
      },
      {
        id: 'checklist',
        title: 'La liste de vérification des plateaux difficiles',
        blocks: [
          {
            t: 'table',
            head: ['Quand', 'Vérification'],
            rows: [
              ['Avant le premier coup', 'Chaque objectif lu, les coups comptés, les portes et leur type repérés, les briques gelées et les couvercles notés, plateau qui tombe ou non.'],
              ['À chaque coup', 'Ce coup compte-t-il pour un objectif, libère-t-il un obstacle ou prépare-t-il une spéciale ? Si ce n’est rien de tout cela, cherchez-en un autre.'],
              ['Spéciales', 'Deux proches l’une de l’autre ? Réunissez-les pour un combo au lieu de les déclencher seules.'],
              ['Outils gratuits', 'Indice, Fusée et OVNI offerts utilisés pendant cet essai ; annulation gratuite utilisée sur un vrai doute.'],
              ['Cinq derniers coups', 'Le bord du plateau s’illumine. Comptez exactement ce qu’il reste et jouez d’abord les coups les plus sûrs.'],
              ['Plus de coups', 'Proche du but ? Continuez, de préférence avec une vidéo gratuite. Loin ? Laissez tomber, et revenez reposé.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Le repos, c’est aussi une stratégie',
            text: 'Un plateau qui vous a battu cinq fois de suite tombe souvent du premier coup après une pause. Voir [Jouer au calme](help:playing-calmly).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'special-bricks-and-combos', 'blockers-encyclopedia', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'glossary',
    category: 'learn',
    cover: 'board-slide',
    host: 'poppy',
    hostPose: 'idle',
    title: 'Le glossaire d’OutBrick',
    summary:
      'Tous les mots que vous rencontrez dans OutBrick, des portes et des rayons de ligne aux couvercles, au coup de main, au Pass Brique et à la Garde-robe, expliqués en une phrase ou deux avec un lien vers le guide qui en parle.',
    keywords:
      'glossaire dictionnaire lexique vocabulaire termes mots sens signification définition c’est quoi que veut dire qu’est-ce que liste a-z',
    sections: [
      {
        id: 'board',
        title: 'Le plateau',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Plateau', text: 'Un puzzle du Voyage : une grille de briques avec des portes de couleur sur ses bords, des objectifs à atteindre et un nombre de coups. Voir [Jouer un plateau](help:playing-a-board).' },
              { term: 'Glisser', text: 'Balayer une brique vers une case vide. Elle s’arrête là où vous lâchez, ou quitte le plateau si vous l’amenez dans la porte ouverte de sa couleur. Voir [Renvoyer les briques chez elles](help:playing-a-board#slide).' },
              { term: 'Échanger', text: 'Balayer une brique vers sa voisine. L’échange n’est conservé que s’il forme une ligne ; sinon, il revient en place et aucun coup n’est utilisé. Voir [Échanger et aligner](help:playing-a-board#swap).' },
              { term: 'Ligne (alignement)', text: 'Trois briques ou plus d’une même couleur dans une ligne ou une colonne, ou un carré de 2×2. Les lignes disparaissent. Voir [Échanger et aligner](help:playing-a-board#swap).' },
              { term: 'Porte', text: 'Une ouverture de couleur sur le bord du plateau. Elle accepte les briques de sa couleur ; pour toute autre brique, c’est un mur. Voir [Les portes](help:bricks-specials-and-blockers#gates).' },
              { term: 'Porte gelée', text: 'Une porte fermée jusqu’à ce qu’elle dégèle, un peu chaque fois qu’une brique rentre chez elle ou quand des pièces disparaissent devant elle. Voir [Les portes](help:bricks-specials-and-blockers#gates).' },
              { term: 'Porte à compteur', text: 'Une porte qui n’accepte qu’un certain nombre de briques, indiqué par son nombre, puis se ferme pour de bon. Voir [Les portes](help:bricks-specials-and-blockers#gates).' },
              { term: 'Porte d’étape', text: 'Une porte qui reste scellée jusqu’au début de la deuxième étape d’objectifs du plateau. Voir [Les portes](help:bricks-specials-and-blockers#gates).' },
              { term: 'Objectif', text: 'Ce que demande un plateau, affiché dans le panneau des objectifs avec ce qu’il en reste : des briques d’une couleur à renvoyer chez elles ou à aligner, des caisses, des verrous ou de la mousse. Voir [Lire les objectifs](help:welcome#goals).' },
              { term: 'Panneau des objectifs', text: 'Les objectifs en haut du plateau, chacun avec son symbole pour daltoniens et une coche quand il est atteint. Voir [L’écran de jeu](help:playing-a-board#screen).' },
              { term: 'Étape', text: 'Certains plateaux répartissent leurs objectifs en deux étapes : terminez la première et de nouvelles portes s’ouvrent pour la seconde. Le panneau des objectifs affiche « MANCHE 1 / 2 ».' },
              { term: 'Coups', text: 'Le grand nombre de l’en-tête : les coups restants sur ce plateau, la seule limite d’OutBrick. Il pulse à trois. Voir [L’écran de jeu](help:playing-a-board#screen).' },
              { term: 'Barre d’étoiles', text: 'La barre de l’en-tête qui se remplit à mesure que votre score monte, avec une étoile à chaque seuil. Voir [Score, étoiles et bonus de fin de plateau](help:playing-a-board#stars).' },
              { term: 'Score et étoiles', text: 'Chaque plateau terminé rapporte au moins une étoile ; un meilleur score en rapporte deux ou trois. Chaque coup restant à la fin ajoute 150 points. Voir [Score, étoiles et bonus de fin de plateau](help:playing-a-board#stars).' },
              { term: 'Objectif atteint !', text: 'La bannière qui apparaît quand le dernier objectif est atteint. Vos coups restants deviennent alors des rayons de ligne et explosent ; touchez l’écran pour passer.' },
              { term: 'On mélange !', text: 'La bannière qui apparaît quand aucun coup n’est possible et que le plateau se mélange tout seul, gratuitement. Voir [Vous ne pouvez jamais rester bloqué](help:playing-a-board#never-stuck).' },
              { term: 'Barre du bas', text: 'La rangée sous le plateau : Pause, puis Indice, Fusée, OVNI et Annuler. Voir [La barre du bas](help:boosters-and-pause#tray).' },
              { term: 'Carte d’apprentissage', text: 'Une courte carte avec une main animée qui montre une idée nouvelle la première fois que vous la rencontrez. Touchez n’importe où pour commencer à jouer.' },
              { term: 'Série de victoires', text: 'Une petite chaîne de briques sous les coups quand vous gagnez de nouveaux niveaux d’affilée. Les séries ajoutent des bonus offerts pour votre plateau suivant. Voir [Les bonus offerts](help:boosters-and-pause#free).' },
            ],
          },
        ],
      },
      {
        id: 'bricks',
        title: 'Briques et spéciales',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Brique', text: 'Une brique jouet simple, dans l’une des couleurs du plateau, marquée de son symbole pour daltoniens. Elle peut glisser, s’échanger et s’aligner.' },
              { term: 'Briques longues, grandes, en L et en T', text: 'Des briques à forme qui glissent et tombent d’un seul bloc, ne s’échangent jamais, ne comptent jamais dans les lignes et ont besoin d’une porte aussi large qu’elles. Un objectif compte chaque case. Voir [Briques face cachée, portails et briques à forme](help:bricks-specials-and-blockers#more).' },
              { term: 'Brique face cachée', text: 'Une brique « ? » qui cache sa couleur. Elle se retourne quand une brique voisine quitte le plateau, jamais quand on la déplace, et joue quand même selon sa vraie couleur.' },
              { term: 'Brique clé', text: 'La brique qui ouvre un couvercle à serrure quand elle quitte le plateau, alignée ou sortie par sa porte. Voir [Les salles scellées et leurs couvercles](help:bricks-specials-and-blockers#lids).' },
              { term: 'Spéciale', text: 'Une brique créée par un alignement plus grand, qui fait disparaître davantage quand elle explose. Touchez-la pour la déclencher sur place, ou échangez-la. Voir [Briques spéciales](help:bricks-specials-and-blockers#specials).' },
              { term: 'Rayon de ligne', text: 'Créé par quatre en ligne. Vide toute sa ligne ou sa colonne, dans le sens de votre mouvement. Il peut aussi sortir par une porte de sa couleur sans exploser.' },
              { term: 'Bombe', text: 'Créée par une forme en L, en T ou en +. Fait exploser le carré de 3×3 autour d’elle, deux fois.' },
              { term: 'Fléchette', text: 'Créée par un carré de 2×2. Vole vers une pièce dont un objectif a besoin.' },
              { term: 'Bombe de couleur', text: 'Créée par cinq en ligne. Échangez-la avec une couleur pour prendre toutes les briques simples de cette couleur.' },
              { term: 'Combo', text: 'Deux spéciales échangées ensemble pour un effet plus grand, comme une croix ou une explosion de 5×5. Voir [Les combos](help:bricks-specials-and-blockers#combos) et [Briques spéciales et combos : le guide complet](help:special-bricks-and-combos).' },
              { term: 'Cascade', text: 'Une ligne qui se forme toute seule quand des briques tombent après une disparition. Elle ne coûte aucun coup de plus. Voir [Comment battre un plateau difficile](help:hard-boards#falling).' },
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Obstacles, couvercles et portails',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Obstacle', text: 'Tout ce qui barre le passage. Touchez-en un sur un plateau pour un rappel en une ligne de la façon de l’éliminer ; son apparence change selon le village, ses règles non. Voir [Les obstacles](help:bricks-specials-and-blockers#blockers) et [Tous les obstacles, couvercles et portes, expliqués](help:blockers-encyclopedia).' },
              { term: 'Caisse', text: 'Arrête les briques qui glissent. Une ou deux couches ; chaque ligne faite à côté casse une couche.' },
              { term: 'Glace', text: 'Immobilise la brique qu’elle contient. Une ligne à côté brise la glace.' },
              { term: 'Verrou', text: 'La brique ne peut pas bouger. Seule une ligne qui la **traverse** la libère.' },
              { term: 'Mousse', text: 'S’étend sur une brique après chaque coup qui n’enlève pas de mousse. Une ligne à côté l’élimine.' },
              { term: 'Statue', text: 'Occupe un passage du plateau. Rien ne glisse à travers, et elle reste : trouvez un autre chemin.' },
              { term: 'Portail', text: 'L’un d’une paire : faites glisser une brique dans l’un, elle ressort par son jumeau, d’un autre côté. Voir [Briques face cachée, portails et briques à forme](help:bricks-specials-and-blockers#more).' },
              { term: 'Salle scellée (parterre scellé)', text: 'Des briques sous un couvercle, qui ne peuvent pas bouger tant qu’il n’est pas ouvert. La carte d’apprentissage parle de parterre scellé. Voir [Les salles scellées et leurs couvercles](help:bricks-specials-and-blockers#lids).' },
              { term: 'Couvercle', text: 'Ce qui ferme une salle scellée, en cinq sortes : un compteur, un compteur de couleur, une clé en vitrail, une horloge en laiton et une serrure. Chacun s’ouvre à sa façon. Voir [Les salles scellées et leurs couvercles](help:bricks-specials-and-blockers#lids).' },
            ],
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Les sortes de plateaux',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Difficile', text: 'Un plateau avec une plaque violette sous l’en-tête. Les objectifs demandent environ 15 % de plus, avec quelques obstacles en plus ; le terminer rapporte 50 pièces. Voir [Plateaux Difficile, Très difficile, Boss et Nuit](help:playing-a-board#tiers).' },
              { term: 'Très difficile', text: 'Les objectifs demandent environ 30 % de plus ; le terminer rapporte 80 pièces.' },
              { term: 'Boss', text: 'Le dernier plateau d’un chapitre, à partir du niveau 40. Les objectifs demandent environ 40 % de plus ; le terminer rapporte 80 pièces.' },
              { term: 'Plateau Nuit', text: 'Un plateau à la tombée de la nuit, dessiné à la craie et à l’encre. Il se joue comme un plateau Difficile.' },
              { term: 'Les douze types de plateaux', text: 'Les plateaux 1 à 12 de chaque village suivent le même ordre, de Retour à la maison à Puzzle tranquille. Voir [Les douze types de plateaux](help:bricks-specials-and-blockers#kinds) et le guide [Les douze types de plateaux](help:board-kinds).' },
              { term: 'Plateau qui tombe', text: 'Un plateau où les briques tombent pour combler les trous. Sur certains, de nouvelles briques arrivent ; sur Pièces d’angle et Puzzle tranquille, aucune n’arrive.' },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vies, coups et bonus',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Vie', text: 'Utilisée seulement quand vous perdez un essai : en abandonnant quand les coups sont épuisés, ou en quittant ou en recommençant après un coup. Jusqu’à cinq (huit avec le Pass Brique en cours), une qui revient toutes les 30 minutes. Voir [Les vies](help:lives-moves-and-undos#lives).' },
              { term: 'Essai offert', text: 'Une fois par jour, quand vous n’avez plus de vies, un essai gratuit sur un plateau : gagnez et vous gardez la vie, perdez et cela ne coûte rien.' },
              { term: 'Vies illimitées', text: 'Une période de 1, 3 ou 24 heures pendant laquelle perdre ne coûte aucune vie. Voir [Plus de vies](help:lives-moves-and-undos#out-of-lives).' },
              { term: 'Plus de coups', text: 'L’écran qui apparaît quand les coups sont épuisés avant que les objectifs soient atteints, avec des façons de continuer dans le même essai, ou **Abandonner**. Voir [Plus de coups](help:lives-moves-and-undos#out-of-moves).' },
              { term: 'Continuer', text: 'Acheter ou regarder une vidéo pour avoir plus de coups dans le même essai : +5 coups pour 300, puis 500, puis 900 pièces, ou +2, puis +1, puis un OVNI en vidéo. Cela ne coûte jamais de vie.' },
              { term: '+5 coups', text: 'Une relance mise de côté, issue d’un lot, utilisée sur l’écran « Plus de coups » à la place des pièces.' },
              { term: 'Coup de main', text: 'À partir de votre sixième essai sur le même plateau, 3 coups en plus avant de commencer, une fois par jour et par plateau. Voir [Niveau échoué, et réessayer](help:lives-moves-and-undos#level-failed).' },
              { term: 'Niveau échoué', text: 'L’écran qui suit un abandon, qui montre à quel point vous étiez proche, avec **Réessayer** et **Retour à la carte**.' },
              { term: 'Bonus', text: 'Un outil de la barre du bas : Indice, Fusée ou OVNI. Chaque essai comprend un exemplaire de chacun, offert. Voir [Bonus, indices et Pause](help:boosters-and-pause).' },
              { term: 'Indice', text: 'Montre et annonce le meilleur coup, un glissement ou un échange.' },
              { term: 'Fusée', text: 'Touchez-la, puis une brique simple : la brique devient un rayon de ligne qui part le long de sa ligne.' },
              { term: 'OVNI', text: 'Touchez-le, puis une pièce : il lui retire une couche d’un coup de rayon, comme une couche de caisse, de la glace, un verrou, de la mousse ou une brique.' },
              { term: 'Annuler', text: 'Reprend votre dernier coup. La première annulation de chaque plateau est gratuite ; les autres viennent d’une réserve de cinq qui se recharge d’une toutes les 25 minutes. Voir [Annuler](help:boosters-and-pause#undo).' },
              { term: 'Pièces', text: 'Se gagnent en terminant des plateaux et avec les récompenses ; se dépensent en bonus, en relances, en vies et en pièces de la Garde-robe.' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Le Voyage',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Le Voyage', text: 'La carte des 2 000 niveaux, un long boulevard construit en briques à travers 167 villages. C’est l’onglet central surélevé. Voir [Le Voyage et ses villages](help:journey-and-villages).' },
              { term: 'Village', text: 'Douze plateaux sur la carte, chaque village étant construit en briques jouets selon son propre style (le dernier village en a huit). Il contient jusqu’à 36 étoiles.' },
              { term: 'Cité-Jardin', text: 'Le premier village, niveaux 1 à 12, où chaque idée nouvelle est enseignée. Clover Farm, niveaux 13 à 24, vient ensuite. Voir [Votre première semaine](help:first-week).' },
              { term: 'Chapitre', text: 'Vingt niveaux, utilisés pour les badges de chapitre, les plateaux Boss et les succès Game Center. Les chapitres et les villages sont comptés séparément.' },
              { term: 'Récompenses d’étoiles', text: 'L’échelle d’étoiles de chaque village : 50 pièces, un Indice, 100 pièces et une Fusée, à récupérer à mesure que vos étoiles y augmentent.' },
              { term: 'Coffre du voyage', text: 'Un coffre sur le chemin. Touchez-le pour voir ce qu’il contient ; l’atteindre vous verse ses pièces et ses bonus sur la carte de victoire.' },
              { term: 'Cadeau du village', text: 'Un cadeau à durée limitée sur la carte ; son badge affiche le compte à rebours jusqu’à ce qu’il soit prêt.' },
              { term: 'Ballon cadeau', text: 'Passe de temps en temps. Une vidéo facultative le fait éclater pour des pièces ou un court moment de bonus gratuits.' },
              { term: 'Tous les villages', text: 'L’atlas de tous les villages sous forme de cartes, filtrable en cours, terminé ou verrouillé.' },
              { term: 'Mon niveau', text: 'Le bouton en forme d’épingle qui ramène la carte à votre niveau actuel.' },
            ],
          },
        ],
      },
      {
        id: 'rewards',
        title: 'Récompenses et événements',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Brique du jour', text: 'Votre premier plateau terminé de chaque journée rapporte 100 pièces, récupérées automatiquement sur l’Accueil. Voir [La Brique du jour et les séries de jours](help:rewards-and-events#daily).' },
              { term: 'Série de jours', text: 'La flamme de l’Accueil : les jours d’affilée où vous avez terminé un plateau, avec des récompenses à 3, 7, 14, 30, 60 et 100 jours.' },
              { term: 'Bouclier de série', text: 'Gagné avec les récompenses de série. Il restaure gratuitement un jour manqué dans la semaine ; vous pouvez en garder deux.' },
              { term: 'Roue', text: 'Un tour gratuit par jour pour des pièces ou un bonus, depuis son bouton sur l’Accueil. Voir [La Roue](help:rewards-and-events#wheel).' },
              { term: 'Missions', text: 'Trois choses à faire aujourd’hui et trois pour la semaine, chacune avec sa récompense. Voir [Les Missions](help:rewards-and-events#missions).' },
              { term: 'Pass Brique', text: 'Une saison de 30 paliers que l’on gravit en terminant de nouveaux niveaux, avec une piste Gratuit pour tout le monde et une piste Premium que vous pouvez acheter. Voir [Le Pass Brique](help:rewards-and-events#pass).' },
              { term: 'Événements', text: 'Vont et viennent selon un calendrier, sous forme de bannière sur l’Accueil et de badge dans le Voyage. Certains doublent ou triplent les pièces gagnées.' },
              { term: 'Sauvetage d’ami, Course du village, Brick Royale, Course de l’équipe', text: 'Des courses et des sauvetages qui ont lieu en parallèle du Voyage. Chacun peut être désactivé dans **Réglages › Jeu › Fonctions du jeu**. Voir [Événements et courses](help:rewards-and-events#events).' },
              { term: 'Tirelire', text: 'Se remplit de pièces à mesure que vous terminez de nouveaux niveaux ; quand elle est prête, vous pouvez la casser pour un petit prix. Voir [Ce que contient la Boutique](help:shop-and-purchases#shelves).' },
              { term: 'Ciné-briques', text: 'Un tableau de cases de prix dans le Voyage ; chaque vidéo facultative retourne une case.' },
              { term: 'Classement', text: 'L’onglet du classement de tous les temps, ouvert à partir du niveau 21. Voir [Classement et Game Center](help:rewards-and-events#leaders).' },
              { term: 'Supprimer les pubs', text: 'Un achat unique qui transforme chaque bouton Regarder en **Réclamer la récompense**, dans les mêmes limites quotidiennes. Voir [Supprimer les pubs et le Pass Brique](help:shop-and-purchases#remove-ads).' },
            ],
          },
        ],
      },
      {
        id: 'friends',
        title: 'Les amis, la Collection et vous',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Les neuf amis', text: 'Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry et Poppy : des amis en briques jouets qui vous encouragent dans des bulles de texte. Voir [Faites connaissance avec les amis](help:meet-the-friends).' },
              { term: 'Ami hôte', text: 'L’ami du village, dans le cadre rond de l’en-tête du plateau, habillé pour ce village. Touchez-le pour un petit rire ou un signe de la main.' },
              { term: 'Profil', text: 'S’ouvre depuis votre avatar : votre nom, votre niveau, votre drapeau et vos statistiques, avec la version du jeu en bas. Voir [Votre Profil](help:friends-and-wardrobe#profile).' },
              { term: 'Collection', text: 'S’ouvre au niveau 95 : Cartes briques, Badges de chapitre, Souvenirs et Cartes de saison. Voir [La Collection](help:friends-and-wardrobe#collection).' },
              { term: 'Étincelles', text: 'Données pour les Cartes de saison en double ; trois permettent de choisir une carte manquante.' },
              { term: 'Garde-robe', text: 'Tenues, socles de plateau, palettes, finitions des briques et plus encore. Elles changent l’apparence du jeu, jamais sa façon de se jouer, et les pièces d’accessibilité sont toujours gratuites. Voir [La Garde-robe](help:friends-and-wardrobe#wardrobe).' },
            ],
          },
        ],
      },
      {
        id: 'settings',
        title: 'Réglages et accessibilité',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Daltonien', text: 'Imprime une forme sur chaque brique, porte et objectif pour que la couleur ne soit jamais le seul indice. Activé dès le départ. Voir [Les symboles pour daltoniens](help:vision-hearing-and-motion#colour-blind).' },
              { term: 'Plateau à fort contraste', text: 'Un sol presque noir, des contours blancs, de grands symboles et des contours de porte épais. Voir [Plateau à fort contraste](help:vision-hearing-and-motion#contrast).' },
              { term: 'Vitesse des animations', text: 'La vitesse à laquelle les pièces s’échangent, tombent et disparaissent, de 50 % à 200 %.' },
              { term: 'Confirmer les échanges', text: 'Avec VoiceOver, Contrôle vocal, Contrôle de sélection ou un clavier, chaque coup est choisi deux fois avant d’être joué. Voir [Confirmer les échanges](help:voice-control-switch-control-keyboard#hold-to-confirm).' },
              { term: 'Son de rangée', text: 'Ajoute l’action **Écouter la rangée** au plateau : un son doux par pièce, une hauteur par symbole de couleur.' },
              { term: 'Rotor', text: 'Un outil de VoiceOver pour passer d’une pièce à l’autre : Pièces qui s’alignent, Spéciales, Objectifs, Obstacles et Portes. Voir [Les rotors](help:voiceover#rotors).' },
              { term: 'Jeu rapide', text: 'Après une victoire, passe directement au plateau suivant au lieu de revenir à la carte. Voir [L’onglet Jeu](help:settings#game).' },
              { term: 'Fonctions du jeu', text: 'Dans **Réglages › Jeu** : désactivez les courses, les sauvetages ou les offres sur la carte que vous préférez ne pas voir. Vous ne perdez rien de ce que vous avez gagné.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Vous cherchez un mot qui n’est pas ici ? Utilisez la fonction Rechercher de votre navigateur sur cette page, ou demandez dans [Aide et assistance](/community/c/help), et nous l’ajouterons.',
          },
        ],
      },
    ],
    related: ['welcome', 'playing-a-board', 'bricks-specials-and-blockers', 'blockers-encyclopedia', 'special-bricks-and-combos', 'common-questions'],
  },
];
