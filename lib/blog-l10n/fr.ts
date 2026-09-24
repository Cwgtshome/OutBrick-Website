/**
 * The five cornerstone guides in French. Vouvoiement, as on the French home
 * page; game terms as in lib/i18n/home.ts (plateau, brique, porte, annulation,
 * réserve, corde, objectif de coups, vider un plateau). Numbers use a narrow
 * no-break space (2 000), as do the colon, semicolon, ? and ! and the insides
 * of « guillemets ». References stay in English, their original language.
 */

import type { LocaleGuides } from '../i18n/blog';

export const fr: LocaleGuides = {
  'how-to-solve-sliding-block-puzzles': {
    title: 'Comment résoudre un puzzle de blocs coulissants : la méthode',
    dek: 'Partir de la sortie, trouver le coup qui libère de la place, compter avant d’agir : la méthode d’un concepteur pour les puzzles de blocs coulissants.',
    imageAlt: 'De vrais plateaux OutBrick sur une plaque indigo, en tête un plateau en mode daltonien avec ses symboles, pendant que des briques jaunes sortent par leur porte sous le regard de Bricko',
    tags: ['puzzle de blocs coulissants', 'taquin', 'stratégie casse-tête', 'astuces puzzle'],
    intro: 'Un bon puzzle de blocs coulissants est conçu pour avoir l’air désespéré. Toutes les cases sont prises, chaque bloc semble gêner le voisin, et la sortie est du mauvais côté. Je conçois et teste ce genre de plateaux pour OutBrick, et les cinq mêmes réflexes me permettent d’en venir à bout presque à chaque fois, quel que soit le puzzle. Aucun n’est une astuce. Ce sont des façons de regarder qui transforment un mur de blocs en une courte liste de questions.',
    keyTakeaways: [
      'Partez de la sortie et remontez : les blocs qui séparent une pièce de sa sortie sont le vrai problème, et la liste est généralement courte.',
      'Sur un plateau plein, le coup qui compte est celui qui libère de la place pour deux autres blocs ou plus : comptez les coups possibles avant de toucher à quoi que ce soit.',
      'Une annulation est une expérience que vous pouvez faire gratuitement. Recommencer, c’est pour le jour où votre première lecture du plateau était fausse, pas pour un seul mauvais coup.',
    ],
    sections: {
      'work-backwards-from-the-exit': {
        title: 'Partez de la sortie et remontez',
        paragraphs: [
          'Face à un plateau plein, le premier réflexe est de bouger tout ce qui peut bouger. Retenez-vous dix secondes. Choisissez un bloc qui doit sortir, regardez sa sortie et posez une seule question : qu’est-ce qui se trouve entre ce bloc et la sortie ? La réponse, c’est votre vrai problème. Posez ensuite la même question pour chacun de ces obstacles, et continuez jusqu’à tomber sur un bloc qui peut déjà bouger.',
          'Vous obtenez une chaîne de dépendances, lue à rebours depuis l’objectif : la sortie attend le bloc jaune, le bloc jaune attend que le vert quitte son couloir, le vert a besoin d’un espace sur la gauche. Les psychologues appellent ce raisonnement l’analyse moyens-fins, et on sait que la manière de présenter un puzzle change la difficulté ressentie. Kotovsky, Hayes et Simon ont proposé des versions de la tour de Hanoï à la structure identique mais aux règles de surface différentes, et certaines prenaient beaucoup plus de temps que d’autres. Une bonne part de la difficulté venait du fait de garder en tête à la fois les règles et l’état du jeu. Une chaîne bien nommée allège cette charge.',
          'Dans OutBrick, les sorties sont des portes de couleur, et une brique ne sort que par la porte de sa couleur. La lecture à rebours gagne ainsi une règle utile : une porte qui refuse une brique est un mur, au même titre que le cadre. Pour votre première brique, prenez donc la couleur dont la porte a la chaîne la plus courte devant elle.',
        ],
        bullets: [
          'Choisissez un bloc qui doit sortir.',
          'Listez ce qui se trouve entre lui et sa sortie.',
          'Recommencez pour chaque obstacle jusqu’à trouver un bloc qui peut déjà bouger.',
          'Jouez la chaîne dans l’ordre, en partant de ce bloc.',
        ],
      },
      'find-the-move-that-makes-space': {
        title: 'Trouvez le coup qui libère de la place',
        paragraphs: [
          'Un plateau plein offre bien moins de coups possibles qu’il n’y paraît. Avant de vous lancer, comptez-les. Sur un plateau très serré, il n’y en a parfois que quelques-uns, et l’un d’eux est souvent le coup autour duquel le plateau a été construit : le glissement qui ouvre une poche d’espace et permet au tas de se défaire morceau par morceau. Les cases vides sont la monnaie d’un puzzle coulissant. Le meilleur premier coup achète de la place pour les suivants ; il fait rarement sortir quoi que ce soit à lui seul.',
          'L’endroit où vous laissez un bloc compte autant que le bloc que vous déplacez. Dans OutBrick, une brique va aussi loin que votre geste, jusqu’à ce que quelque chose l’arrête : un mur, une voisine, ou une porte qui refuse sa couleur. Un bloc garé au milieu d’un couloir peut ne gêner personne maintenant et barrer la route quatre coups plus tard. Avant de lâcher, vérifiez que vous n’avez pas bouché un couloir dont vous aurez besoin.',
          'Il y a une raison mathématique pour laquelle ces puzzles résistent aux raccourcis. Hearn et Demaine ont démontré que les puzzles de blocs coulissants généralisés sont PSPACE-complets : autrement dit, aucune méthode connue ne résout efficacement tous les grands plateaux. Les joueurs s’en sortent avec des heuristiques comme celles de ce guide. Cela signifie aussi qu’un puzzle bien fait doit être conçu pour offrir une entrée. OutBrick le vérifie à la dure : un solveur a vidé les 2 000 plateaux avant la sortie de chacun d’eux. Si vous êtes bloqué, le nœud vient donc de la position que vous avez créée, pas du plateau.',
        ],
      },
      'count-before-you-commit': {
        title: 'Comptez vos coups avant de vous engager',
        paragraphs: [
          'Planifiez par courtes séquences. La mémoire de travail ne retient qu’une poignée d’éléments à la fois (la synthèse de Cowan l’estime à environ quatre blocs d’information) : vouloir voir dix coups à l’avance revient en général à en voir quatre clairement et à deviner le reste. Regroupez plutôt vos coups en intentions : « dégager la colonne de gauche » ne compte que pour un bloc, même s’il faut trois glissements. Prévoyez deux ou trois intentions, jouez-les, puis regardez à nouveau.',
          'Si votre puzzle a une limite de coups, c’est là que ça paie. OutBrick n’a aucun chrono ; la corde de chaque plateau est une limite de coups, et l’objectif comme la limite sont affichés dès la première touche. Cela change ce qui est rare. Les coups vous coûtent, la réflexion ne vous coûte rien : prenez tout votre temps, et comptez vos coups. Avant chaque glissement, passez en revue ces quelques questions.',
        ],
        bullets: [
          'Qu’est-ce que ce coup rend possible ?',
          'Qu’est-ce qu’il bloque, maintenant ou dans deux coups ?',
          'Un seul long glissement ferait-il le travail de deux courts ?',
          'Me fait-il avancer sur la chaîne construite depuis la sortie ?',
        ],
      },
      'use-undo-as-a-thinking-tool': {
        title: 'Servez-vous de l’annulation pour réfléchir',
        paragraphs: [
          'L’annulation donne le meilleur d’elle-même comme expérience. Quand deux coups semblent aussi bons l’un que l’autre, jouez-en un, regardez ce qu’il ouvre, puis revenez en arrière. Vous avez appris sur le plateau quelque chose que vous n’auriez jamais vu à force de le fixer, pour le prix d’une annulation. Les joueurs qui vivent l’annulation comme un aveu d’échec ont tendance à fixer plus longtemps et à apprendre moins.',
          'OutBrick est construit autour de cette idée. La première annulation de chaque plateau est gratuite et ne s’épuise jamais. Au-delà, les annulations puisent dans une réserve de cinq, qui en regagne une toutes les vingt-cinq minutes ; et quand un plateau se bloque, l’annulation proposée est gratuite elle aussi et ne touche pas à la réserve. Utilisez donc la gratuite tôt et à dessein, sur le coup dont vous êtes le moins sûr, plutôt que de la garder pour une urgence.',
          'Un compromis est à connaître. La troisième étoile d’un plateau OutBrick demande de le vider dans l’objectif de coups du solveur, sans aucune annulation. Si vous jouez pour vider le plateau, expérimentez librement. Si vous visez les trois étoiles, faites vos essais dans votre tête d’abord.',
        ],
      },
      'know-when-to-reset': {
        title: 'Sachez quand recommencer',
        paragraphs: [
          'L’annulation corrige un coup. Recommencer corrige un plan. Les signes qui montrent qu’il faut recommencer sont faciles à repérer une fois qu’on les connaît : vous avez annulé trois fois le même coup, vous faites glisser un bloc d’avant en arrière, vous ne savez plus à quoi servent vos deux prochaines intentions, ou la zone dont vous avez besoin est bouchée par des briques que vous avez garées vous-même. À ce stade, annuler encore ne fait que vous ramener le long d’un chemin qui ne menait nulle part.',
          'Soyez lucide sur ce que coûte un nouveau départ dans le jeu auquel vous jouez. Dans OutBrick, ouvrir un plateau demande une vie mais n’en consomme aucune, vider un plateau ne coûte rien, et une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. Les vies reviennent au rythme d’une toutes les trente minutes. C’est une bonne raison de réserver l’annulation aux petites corrections, et une nouvelle tentative au cas où toute votre lecture du plateau était fausse.',
          'Et parfois, la meilleure façon de recommencer, c’est de poser le téléphone. Un plateau qui ressemblait à un mur en fin de journée s’ouvre souvent dans les trente premières secondes le lendemain matin. Rien n’est chronométré sur un plateau OutBrick : il vous attendra. Pour les réflexes propres au tri par couleur, un article complémentaire donne des [astuces pour les puzzles de tri par couleur](/fr/blog/colour-sort-puzzle-tips). Et pour vous exercer d’abord, le [guide du jeu](/fr/play) propose un plateau à essayer dans le navigateur, du plus facile au vrai casse-tête.',
        ],
      },
    },
    pullQuote: 'L’annulation corrige un coup. Recommencer corrige un plan.',
    faqs: [
      { question: 'Quelle est l’astuce pour résoudre un puzzle de blocs coulissants ?', answer: 'Il n’y a pas d’astuce unique, mais un réflexe fait l’essentiel du travail : partir de la sortie et remonter. Listez ce qui bloque la pièce à sortir, puis ce qui bloque ces obstacles, jusqu’à trouver une pièce qui peut déjà bouger. Cherchez ensuite le coup qui libère le plus de place.' },
      { question: 'Tous les puzzles de blocs coulissants ont-ils une solution ?', answer: 'Non. Certaines configurations des puzzles coulissants classiques n’ont aucune solution : la moitié des positions de départ possibles du taquin à 15 cases sont insolubles, par exemple. Un puzzle conçu à la main devrait être vérifié avant sa sortie. Chacun des 2 000 plateaux d’OutBrick a été vidé par un solveur avant d’être publié.' },
      { question: 'Combien de coups faut-il prévoir à l’avance ?', answer: 'Deux ou trois petits objectifs de quelques coups chacun suffisent à la plupart des gens. La mémoire de travail ne retient qu’une poignée d’éléments à la fois : planifiez par blocs, comme « libérer le couloir de gauche », jouez-les, puis regardez à nouveau le plateau.' },
      { question: 'Utiliser l’annulation, est-ce tricher ?', answer: 'Non. L’annulation est l’un des meilleurs moyens de comprendre comment un plateau se comporte. Dans OutBrick, la première annulation de chaque plateau est gratuite. Elle n’a d’effet que sur la troisième étoile, qui demande de vider le plateau dans l’objectif de coups sans aucune annulation.' },
    ],
  },

  'colour-sort-puzzle-tips': {
    title: 'Puzzle de tri par couleur : nos astuces pour moins de coups',
    dek: 'Lire un plateau de tri par couleur, choisir la couleur à sortir en premier, battre l’objectif de coups et gagner les étoiles. Par le créateur d’OutBrick.',
    imageAlt: 'Des rangées de briques à tenons rouges, jaunes, turquoise, violettes, bleues et vertes sur fond crème, avec un vrai plateau OutBrick et un écran de victoire à trois étoiles',
    tags: ['puzzle de tri par couleur', 'jeu de tri de couleurs', 'astuces block sort', 'objectif de coups'],
    intro: 'Les puzzles de tri par couleur forment plusieurs familles : des liquides à verser d’un tube à l’autre, des piles à trier sur des tiges, et des blocs à faire glisser vers la sortie par une porte de leur couleur. OutBrick appartient à cette dernière, et ces astuces sont écrites pour lui, mais l’essentiel vaut pour toute la famille. Il s’agit de voir quelle couleur est prête à sortir, laquelle est enfouie, et laquelle gêne discrètement tout le monde. Finir en moins de coups, c’est surtout faire cette lecture avant votre premier coup plutôt qu’après le dixième.',
    keyTakeaways: [
      'Lisez tout le plateau avant le premier coup : quelles couleurs ont la voie libre jusqu’à leur sortie, quelles briques en bloquent plusieurs, et où se trouve l’espace vide.',
      'Sortez la couleur dont le départ libère le plus, pas celle qui est la plus facile à atteindre.',
      'Dans OutBrick, une étoile récompense un plateau vidé, deux un plateau vidé dans l’objectif du solveur, trois la même chose sans annulation : l’annulation gratuite garde deux étoiles à portée, pas trois.',
    ],
    sections: {
      'read-the-board-first': {
        title: 'Lisez le plateau avant votre premier coup',
        paragraphs: [
          'Les coups que vous économisez viennent du regard que vous portez avant le premier. Cherchez trois choses sur le plateau. D’abord, les couleurs qui ont déjà la voie libre jusqu’à leur porte. Ensuite, les briques qui bloquent plus d’une couleur, car c’est autour d’elles que tout le plateau tourne. Enfin, l’emplacement de l’espace vide, puisque chacun de vos plans devra y passer.',
          'Lisez ensuite les deux nombres. Chaque plateau OutBrick affiche son objectif et sa limite de coups dès la première touche : vous connaissez le budget avant d’avoir dépensé quoi que ce soit. L’objectif correspond au propre décompte du solveur pour ce plateau, ce qui en fait un indice précieux : s’il est bas, il existe un chemin net, et un plan qui demande deux fois plus de coups passe sans doute à côté de quelque chose.',
          'Servez-vous de tous les moyens que le jeu vous donne pour distinguer les couleurs. Le mode daltonien d’OutBrick est activé par défaut et appose un symbole sur chaque brique et chaque porte : la teinte, la forme et les tenons portent tous la couleur. Même avec une vision des couleurs complète, les symboles aident à séparer d’un coup d’œil des voisines comme le rouge et le rose, ou le violet et le bleu. Les recommandations d’accessibilité le disent depuis longtemps : la couleur ne devrait jamais être le seul moyen de transmettre une information.',
          'Regardez enfin la forme du plateau lui-même. Tous les plateaux OutBrick ne sont pas rectangulaires ; certaines arènes ont la forme d’un H, d’un L ou d’une croix. Un passage étroit entre deux moitiés d’arène est l’endroit où les briques se coincent : déterminez tôt quelles briques doivent y passer, et dans quel ordre.',
        ],
      },
      'clear-the-colour-that-frees-the-most': {
        title: 'Sortez la couleur qui libère le plus',
        paragraphs: [
          'Le premier coup tentant, c’est la brique qui peut sortir tout de suite. C’est parfois le bon. Souvent, c’est une brique au bord dont le départ n’ouvre rien, alors qu’une brique au centre, à trois coups de sa porte, retient la moitié du plateau. Avant de sortir quoi que ce soit, demandez-vous ce que chaque sortie ouvre. Une grande brique qui quitte le centre peut transformer un bloc compact en trois couloirs praticables.',
          'Faites aussi attention à l’endroit où les briques restent garées. Une brique laissée devant une porte qui n’est pas la sienne est un mur tant que vous ne la déplacez pas à nouveau, et chaque « à nouveau » est un coup dont vous n’aviez pas besoin. Quand vous écartez une brique, envoyez-la là où elle ne gênera pas ensuite.',
          'Il est utile de savoir comment la difficulté se répartit sur un plateau. Les premiers coups d’un plateau plein sont les plus chers, car chaque case est occupée et chaque glissement change ce qui est possible. Les derniers sont presque gratuits : à ce stade, le plateau est surtout de l’espace vide et les briques restantes ont la voie libre. Réfléchissez donc au début, là où un glissement distrait peut coûter trois coups de réparation, et détendez-vous à la fin.',
        ],
        bullets: [
          'D’abord les briques qui bloquent deux couleurs ou plus.',
          'Puis les couleurs dont la sortie ouvre un couloir dont vous avez besoin.',
          'Les sorties faciles et isolées en dernier, sauf si elles libèrent un espace qu’il vous faut tout de suite.',
          'Ne garez jamais une brique en travers d’un couloir dont vous n’avez pas fini de vous servir.',
        ],
      },
      'plan-in-chunks': {
        title: 'Planifiez par intentions, pas coup par coup',
        paragraphs: [
          'La mémoire de travail est petite. La synthèse de Cowan, qui fait référence, estime sa capacité à environ quatre blocs d’information, et c’est pourquoi prévoir dix coups isolés à l’avance fonctionne rarement. Planifiez plutôt par intentions : « sortir les jaunes », « ouvrir le couloir de droite », « dégeler la brique gelée ». [Partir de la sortie et remonter](/fr/blog/how-to-solve-sliding-block-puzzles) est un bon moyen de les trouver. Chaque intention représente deux à quatre coups, et vous pouvez en garder deux ou trois en tête sans effort.',
          'Avant chaque intention, comptez ce qu’elle va coûter et comparez avec ce qu’il vous reste sous l’objectif. Si elle coûte plus que ce que vous avez, ce n’est pas la bonne, et il est bien moins cher de s’en rendre compte maintenant qu’à mi-chemin. La plupart des coups perdus dans les puzzles de tri par couleur viennent des mêmes habitudes : faire glisser une brique d’avant en arrière, la déplacer deux fois quand un seul long glissement aurait suffi, et réparer deux fois le même couloir parce qu’une brique y a été garée à nouveau.',
          'Une petite routine règle les trois. Avant une intention, formulez-en le dernier coup : où sera chaque brique une fois l’intention terminée ? Si vous n’arrivez pas à vous représenter la position finale, l’intention est trop longue : coupez-la en deux. Si vous y arrivez, jouez-la sans vous arrêter pour tout reconsidérer en chemin, car c’est des hésitations en plein milieu que naissent les allers-retours.',
        ],
      },
      'targets-and-stars': {
        title: 'Comment fonctionnent l’objectif et les étoiles dans OutBrick',
        paragraphs: [
          'Les étoiles d’OutBrick s’expliquent facilement. Vider un plateau rapporte une étoile. Le vider dans l’objectif de coups fixé par le solveur en rapporte deux. Y parvenir sans une seule annulation en rapporte trois. La limite, que le jeu représente par une corde, est une limite de coups et non un chrono ; il n’y a aucun compte à rebours dans tout le jeu.',
          'Il en découle une conséquence qui échappe souvent. La première annulation de chaque plateau est gratuite et ne s’épuise jamais, mais l’utiliser compte quand même comme une annulation : elle garde deux étoiles à portée, pas trois. Si les trois étoiles comptent pour vous, gardez l’annulation en dernier recours et faites vos essais dans votre tête. Si vous voulez seulement vider le plateau, servez-vous-en librement : elle est faite pour ça.',
          'Quand vous êtes à court de coups, on vous propose d’abord cinq coups de plus, pour 300 pièces, puis 500, puis 900 au cours d’une même tentative. Des coups supplémentaires peuvent sauver un plateau. Ils ne ramèneront pas la deuxième étoile, car à l’approche de la limite, l’objectif est en général déjà dépassé. La vraie solution se trouve en amont : une lecture plus posée du plateau au départ.',
        ],
      },
      'mistakes-that-cost-moves': {
        title: 'Cinq habitudes qui coûtent des coups sans bruit',
        paragraphs: [
          'La plupart des plateaux vidés au-delà du budget tiennent à l’une de ces quelques habitudes. Chacune se corrige facilement une fois qu’on s’est surpris à l’avoir. Le [guide du jeu](/fr/play) d’OutBrick présente tous les éléments de plateau cités ici, si vous voulez la liste complète.',
        ],
        bullets: [
          'Sortir d’abord la couleur facile et laisser une brique garée là où la couleur difficile devait passer.',
          'Oublier qu’une brique gelée demande trois glissements pour dégeler. Comptez-les dans le budget avant de commencer.',
          'Laisser les clés et les cadenas pour la fin. Ils ouvrent des parties du plateau : découvrez tôt ce qu’ils ouvrent.',
          'Remplir chaque case vide quand un générateur est sur le plateau. Les générateurs font entrer de nouvelles briques : gardez de la place pour ce qui arrive.',
          'Prendre les tapis roulants et les caisses pour du décor. Un tapis roulant déplace ce qui est posé dessus et les caisses décident des couloirs ouverts : tenez compte des deux dès le premier coup.',
        ],
      },
    },
    pullQuote: 'Les coups que vous économisez viennent du regard que vous portez avant le premier.',
    faqs: [
      { question: 'Quelle est la meilleure stratégie pour un puzzle de tri par couleur ?', answer: 'Lisez tout le plateau avant de bouger : repérez les couleurs qui ont la voie libre jusqu’à leur sortie, les pièces qui bloquent plus d’une couleur, et l’espace vide. Sortez ensuite la couleur dont le départ libère le plus, et planifiez par courtes intentions de deux à quatre coups.' },
      { question: 'Comment obtenir trois étoiles dans OutBrick ?', answer: 'Videz le plateau dans l’objectif de coups du solveur sans utiliser la moindre annulation. Deux étoiles demandent de le vider dans l’objectif ; une étoile récompense n’importe quel plateau vidé.' },
      { question: 'L’annulation gratuite me fait-elle perdre une étoile ?', answer: 'Elle peut coûter la troisième, car trois étoiles demandent de ne rien annuler du tout. Vous pouvez encore obtenir deux étoiles après l’avoir utilisée, à condition de vider le plateau dans l’objectif de coups.' },
      { question: 'Peut-on jouer à un puzzle de tri par couleur quand on est daltonien ?', answer: 'Oui, si le jeu vous donne autre chose que la couleur pour vous repérer. Le mode daltonien d’OutBrick est activé par défaut et place un symbole assorti sur chaque brique et chaque porte : la forme porte le tri autant que la teinte. La [page consacrée à l’accessibilité](/accessibility) (en anglais) donne les détails.' },
    ],
  },

  'relaxing-puzzle-games-what-makes-one-calm': {
    title: 'Jeux de puzzle relaxants : ce qui rend un jeu vraiment calme',
    dek: 'Des couleurs douces ne suffisent pas. Limite de coups ou chrono, vies équitables, aucune interruption : comment savoir si un jeu de puzzle restera calme.',
    imageAlt: 'Trois fenêtres cintrées dans un mur de briques indigo montrent de vrais villages OutBrick, Lavender Hills, Firefly Wetlands et Cherry Blossom Town, avec Flurry et Sprout sur le rebord',
    tags: ['jeux de puzzle relaxants', 'jeux sans chrono', 'jeux calmes', 'game design'],
    intro: 'Beaucoup de fiches sur l’App Store qualifient leur jeu de puzzle de « relaxant ». Certains méritent le mot. D’autres posent des couleurs pastel et une musique douce sur la même pression qu’ailleurs : un compte à rebours dans un coin, un système de vies qui se vide juste au moment où vous prenez vos marques, une pub entre chaque niveau. Voici ce que nous regardons pour juger si un jeu de puzzle est calme, et où se situe OutBrick sur chaque point, y compris là où il vous demande quelque chose.',
    keyTakeaways: [
      'Le calme est surtout une question de pression : d’où elle vient, si vous la voyez venir, et si vous l’avez choisie.',
      'Une limite de coups vous demande de ne pas gaspiller vos coups ; un chrono vous demande de ne pas réfléchir. Un seul des deux convient à un jeu relaxant.',
      'Les vies et les pubs peuvent être équitables ou non. Regardez ce qui coûte une vie, en combien de temps elle revient, et si une pub se lance sans que vous l’ayez demandée.',
    ],
    sections: {
      'where-pressure-comes-from': {
        title: 'D’où vient la pression dans un jeu de puzzle',
        paragraphs: [
          'Un puzzle est censé être un peu difficile, et un plateau difficile peut rester reposant. La pression qui rend un jeu frénétique vient généralement de l’extérieur du puzzle, et le plus souvent de quatre sources : le temps (un compte à rebours, une barre qui rétrécit), la rareté (vies, énergie, jetons), l’interruption (pubs, offres surgissantes, invitations entre les niveaux) et la comparaison (séries qui se brisent, classements qu’on vous met sous le nez).',
          'Aucune n’est mauvaise en soi. Un mode chronométré peut être très amusant quand on le choisit. Le test d’un jeu calme est plus simple : voyez-vous chaque contrainte avant de commencer, et l’avez-vous acceptée ? Un plateau qui annonce ses règles d’emblée puis vous laisse tranquille n’a rien à voir avec un plateau qui change les conditions en cours de route.',
          'La dernière des quatre est la plus facile à manquer. Un compteur de série ou un classement peut être un plaisir en plus quand vous allez le chercher. Il devient une pression quand le jeu vous le met sous les yeux au moment où vous vouliez arrêter, ou présente un jour manqué comme une perte. Regardez où un jeu vous montre ces chiffres, et s’il vous laisse les ignorer.',
        ],
      },
      'move-limits-vs-clocks': {
        title: 'Pourquoi une limite de coups n’a rien à voir avec un chrono',
        paragraphs: [
          'Un chrono punit la réflexion. Chaque seconde passée à lire le plateau est une seconde perdue : le jeu récompense les réflexes et le hasard. Une limite de coups punit plutôt le gaspillage. Vous pouvez regarder un plateau aussi longtemps que vous voulez, et seul un glissement distrait vous coûte quelque chose. Pour un jeu de puzzle qui se veut reposant, cette différence compte plus que n’importe quelle palette de couleurs.',
          'OutBrick n’a aucun chrono. La corde de chaque plateau est une limite de coups. Chaque plateau affiche son objectif et sa limite dès la première touche : le budget est connu avant d’en dépenser la moindre partie. Quand vous êtes à court, on vous propose cinq coups de plus avant toute autre chose.',
          'Il y a aussi un argument d’accessibilité. Les règles d’accessibilité du web demandent que les limites de temps puissent être désactivées, ajustées ou prolongées, parce que certaines personnes ont besoin de plus de temps pour accomplir une tâche. Un jeu sans chrono n’a rien à ajuster. Et la recherche sur la pression du temps va dans le même sens : dans une étude sur le travail de bureau interrompu, Mark, Gudith et Klocke ont constaté que les gens compensaient en travaillant plus vite, et déclaraient en même temps davantage de stress, de frustration et de pression temporelle.',
        ],
      },
      'fair-lives': {
        title: 'Vies, énergie : à quoi ressemble un système équitable',
        paragraphs: [
          'Bien des jeux calmes ont des vies, y compris le nôtre : la vraie question est de savoir comment elles fonctionnent. Un système de vies équitable vous dit exactement ce qui coûte une vie, vous en donne assez pour une vraie session, les recharge sans rien vous demander, et n’en prend jamais une pour un simple essai.',
          'OutBrick est d’abord sorti sans vies et sans pubs, et les deux ont changé, c’est pourquoi la page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les pubs](/fr#fair). Ouvrir un plateau demande une vie mais n’en consomme aucune. Vider un plateau ne coûte rien du tout. Une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. Vous en avez cinq, huit avec le Brick Pass, et il en revient une toutes les trente minutes. L’annulation suit la même logique : la première de chaque plateau est gratuite et ne s’épuise jamais, puis une réserve de cinq en regagne une toutes les vingt-cinq minutes, et l’annulation proposée quand un plateau se bloque est gratuite et ne touche pas à la réserve.',
          'Regardez aussi ce qui se passe quand vous n’en avez plus. Dans un système équitable, tomber à zéro est une pause d’une durée connue. Dans OutBrick, vous pouvez attendre la vie suivante ou, si vous le choisissez, regarder une vidéo récompensée pour en obtenir une ; les deux options sont annoncées bien avant que vous en ayez besoin. Un jeu qui accueille une réserve vide avec un écran d’achat et aucun délai de recharge clair se sert de la rareté pour vendre, et cela n’a rien de calme.',
        ],
        bullets: [
          'Qu’est-ce qui coûte exactement une vie : commencer, échouer ou abandonner ?',
          'Combien pouvez-vous en avoir, et combien de temps faut-il pour qu’une revienne ?',
          'Pouvez-vous continuer à jouer à autre chose en attendant ?',
          'La recharge sert-elle parfois de prétexte pour vous montrer une offre ?',
        ],
      },
      interruptions: {
        title: 'Les interruptions, vrai ennemi du calme',
        paragraphs: [
          'Le moyen le plus rapide de gâcher un jeu relaxant, c’est de l’interrompre. Une pub plein écran tous les trois niveaux vous apprend à vous crisper avant d’appuyer sur « suivant ». Une offre qui surgit au moment où vous échouez transforme une petite déception en argumentaire de vente. Ni l’une ni l’autre n’a de rapport avec le puzzle, et c’est souvent là que les jeux de puzzle perdent le calme qu’ils promettent.',
          'Voici comment OutBrick s’y prend. Il y a six emplacements de vidéos récompensées : une vie, cinq coups de plus, deux annulations, un booster activé avant le premier coup, les pièces de l’écran de victoire versées une seconde fois, et un second tour de Brick Wheel. Tous sont facultatifs et chacun a son propre plafond quotidien. Pas de bannières, pas d’interstitiels : rien ne se lance sans que vous ayez appuyé sur un bouton pour le voir, et rien n’interrompt un plateau. L’achat « Supprimer les pubs » coupe la publicité pour de bon.',
          'Pourquoi c’est important tient pour partie à notre avis, pour partie aux données. Des études sur le jeu occasionnel ont observé des effets positifs à court terme sur l’humeur après une tâche exigeante, et l’une d’elles a mesuré une baisse du stress après un jeu occasionnel, même si un exercice de pleine conscience faisait mieux sur le stress déclaré. Ces effets supposent que le joueur ait droit à un moment de jeu sans interruption. Une pub toutes les quelques minutes est un bien mauvais moyen de le protéger.',
        ],
      },
      'calm-checklist': {
        title: 'Une courte liste pour repérer un jeu de puzzle calme',
        paragraphs: [
          'Avant d’adopter un jeu de puzzle pour décompresser, prenez cinq minutes pour le passer au crible de la liste ci-dessous. La plupart des jeux cocheront certains points et en manqueront d’autres, et ce n’est pas grave. (Nous avons écrit à part sur [le moment de jouer et le moment de faire une pause](/blog/when-to-play-and-when-to-pause), en anglais.) L’important est de savoir lesquels avant qu’il soit onze heures du soir et qu’un compte à rebours ait fait son apparition.',
          'Le calme a aussi un côté sensoriel dont les fiches parlent rarement. Des écrans remplis de récompenses qui clignotent et de boutons qui tremblent fatiguent, même quand rien n’est chronométré. OutBrick respecte partout le réglage Réduire les animations du système, et ses neuf amis en briques parlent dans des bulles de texte plutôt qu’à voix haute : un plateau tard le soir peut rester silencieux.',
        ],
        bullets: [
          'Pas de compte à rebours sur les niveaux normaux, ou un mode chronométré que vous pouvez ignorer.',
          'Les règles et les limites de chaque niveau sont visibles avant votre premier coup.',
          'Le prix d’un échec est annoncé clairement, et il est faible.',
          'Aucune pub ne se lance sans que vous appuyiez sur un bouton pour la voir.',
          'S’arrêter entre deux niveaux ne coûte rien.',
          'Le jeu fonctionne hors ligne : un signal faible ne bloque jamais un niveau.',
          'Les options d’accessibilité, comme l’aide au daltonisme et Réduire les animations, sont présentes et respectées.',
        ],
      },
    },
    pullQuote: 'Un chrono punit la réflexion. Une limite de coups punit le gaspillage.',
    faqs: [
      { question: 'Qu’est-ce qui rend un jeu de puzzle relaxant ?', answer: 'Surtout l’absence de pression venue de l’extérieur du puzzle : pas de compte à rebours, des limites claires affichées avant de commencer, un prix de l’échec faible et annoncé, et rien qui interrompe le jeu sans votre accord. Un puzzle difficile peut rester relaxant s’il vous laisse réfléchir en paix.' },
      { question: 'Existe-t-il des jeux de puzzle sans chrono ?', answer: 'Oui. Beaucoup de jeux de puzzle utilisent une limite de coups, ou aucune limite. OutBrick n’a aucun chrono ; chaque plateau a une limite de coups, représentée par une corde, à côté de son objectif de coups.' },
      { question: 'OutBrick a-t-il des vies et des pubs ?', answer: 'Oui. Vous avez cinq vies, huit avec le Brick Pass, et il en revient une toutes les trente minutes ; une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé. Les pubs sont des vidéos récompensées que vous choisissez de regarder, chacune avec un plafond quotidien, et il n’y a ni bannières ni interstitiels.' },
      { question: 'Une limite de coups, c’est stressant ?', answer: 'En général moins qu’un chrono, parce que réfléchir est gratuit et que seuls les coups distraits vous coûtent. Dans OutBrick, on vous propose en plus cinq coups supplémentaires quand vous êtes à court, avant toute autre chose.' },
    ],
  },

  'offline-puzzle-games-iphone': {
    title: 'Jeux de puzzle hors ligne sur iPhone : trajets et vols',
    dek: 'Que chercher dans un jeu de puzzle pour le métro, le train ou l’avion : vrai jeu hors ligne, une seule main, plateaux courts, batterie ménagée.',
    imageAlt: 'Un wagon de train en briques dont les fenêtres montrent de vrais villages et plateaux OutBrick, avec Bloo et Zippy assis sur le toit',
    tags: ['jeux hors ligne iPhone', 'jeux sans connexion', 'jeux pour l’avion', 'jeux pour les trajets'],
    intro: 'Le pire moment pour découvrir qu’un jeu a besoin d’une connexion, c’est dans un tunnel, ou à dix mille mètres d’altitude avec le Wi-Fi coupé. Sur une fiche de l’App Store, « fonctionne hors ligne » peut vouloir dire plusieurs choses, et un bon jeu de voyage doit de toute façon offrir davantage : se jouer d’une main, tenir entre deux arrêts, et ne pas vider votre batterie avant l’atterrissage. Voici la liste que nous utilisons. Nous faisons OutBrick, nous le prenons donc comme exemple, en nous tenant à des points que vous pouvez vérifier vous-même.',
    keyTakeaways: [
      'Testez le jeu hors ligne chez vous en mode Avion avant de partir, y compris un lancement à froid et les quelques niveaux suivants.',
      'Pour les trajets du quotidien, jouer d’une main et avoir des niveaux courts et complets compte autant que le jeu hors ligne.',
      'La batterie dépend surtout de l’écran et du jeu lui-même : baissez la luminosité et activez le mode Économie d’énergie pour les longs trajets.',
    ],
    sections: {
      'test-offline-first': {
        title: 'Testez le jeu hors ligne avant de partir',
        paragraphs: [
          '« Hors ligne » recouvre bien des cas sur une fiche de l’App Store. Certains jeux fonctionnent entièrement sans connexion. D’autres vous laissent jouer mais retiennent les récompenses, le contenu du jour ou la sauvegarde jusqu’à votre retour en ligne. D’autres encore affichent le premier écran depuis la mémoire, puis bloquent sur le deuxième. La fiche ne permet pas de le savoir : testez.',
          'Le test prend cinq minutes. Chez vous, activez le mode Avion, fermez complètement le jeu et rouvrez-le. Jouez trois niveaux, revenez au menu et lancez le niveau d’après le suivant. Repérez tout ce qui est grisé, toute roue qui tourne sans fin, et vérifiez que le jeu vous laisse avancer après un plateau vidé. Si tout fonctionne, cela fonctionnera dans l’avion.',
          'Faites encore une chose tant que vous êtes sur le Wi-Fi : ouvrez l’App Store et installez les mises à jour en attente des jeux que vous comptez emporter. Un jeu qui réclame une mise à jour au lancement ne sert à rien dans un tunnel, et un gros téléchargement sur un réseau mobile capricieux à la porte d’embarquement est un mauvais début de voyage.',
          'OutBrick fonctionne hors ligne. Si vous jouez sur plusieurs appareils, votre progression est stockée dans votre iCloud, et un nouvel appareil connecté au même compte reprend là où l’ancien s’était arrêté : niveau, pièces, série et Collection.',
        ],
        bullets: [
          'Mode Avion activé, jeu complètement fermé, puis rouvert.',
          'Trois niveaux joués, puis le niveau d’après le suivant lancé depuis le menu.',
          'Rien de grisé, pas de roue sans fin, et la progression avance toujours après un plateau vidé.',
        ],
      },
      'one-handed-play': {
        title: 'Une main, un pouce',
        paragraphs: [
          'Dans un train bondé, l’autre main tient souvent une barre, un café ou un sac. L’étude de terrain de Steven Hoober sur la manière dont les gens tiennent réellement leur téléphone, fondée sur 1 333 observations dans la rue, les aéroports, les cafés et les transports en commun, a relevé 49 % de personnes utilisant une seule main, 36 % tenant le téléphone d’une main et tapant de l’autre, et 15 % se servant des deux mains. Un jeu de voyage doit fonctionner pour le premier groupe.',
          'Hoober a aussi noté que les personnes qui utilisent une seule main tiennent leur téléphone de bien des façons : un jeu ne peut donc pas supposer une seule prise. Sur les grands téléphones que la plupart des gens ont aujourd’hui, les coins supérieurs de l’écran sont difficiles à atteindre avec le pouce de la main qui tient l’appareil. Pour les atteindre, il faut faire glisser le téléphone dans sa main, exactement ce qu’on ne veut pas faire dans un train en marche avec un café dans l’autre main.',
          'Cherchez des commandes gestuelles plutôt que de petits boutons, un affichage en portrait, et rien à atteindre dans les coins du haut en plein niveau. OutBrick se joue d’un seul doigt : vous faites glisser une brique et elle file jusqu’à ce que quelque chose l’arrête. Si vous en avez besoin, chaque brique est aussi un élément VoiceOver, avec une action pour chaque direction où elle peut glisser, et Texte plus grand s’applique partout.',
        ],
      },
      'sessions-between-stops': {
        title: 'Des niveaux qui tiennent entre deux arrêts',
        paragraphs: [
          'Jouer dans les transports se fait par petits bouts, un thème que nous avons exploré dans [le puzzle de deux minutes pour les trajets](/blog/commuter-puzzle-two-minute) (en anglais). La bonne unité est un niveau que vous pouvez finir entre deux stations, avec une fin nette, pour que ranger le téléphone ressemble à une pause et non à un abandon. Les niveaux longs et les objectifs enchaînés vont à l’encontre de cela.',
          'Les chronos encore plus, et c’est l’une des raisons pour lesquelles [les jeux de puzzle calmes](/fr/blog/relaxing-puzzle-games-what-makes-one-calm) ont tendance à s’en passer. Quand une annonce en gare ou un contrôle des billets accapare votre attention, un chrono dans un coin continue de tourner. La recherche sur le travail interrompu suggère que les gens réagissent aux interruptions en accélérant, et le paient en stress. Un jeu sans chrono n’en rajoute pas. OutBrick n’a aucun compte à rebours, un plateau prend environ deux minutes, et le vider ne coûte rien. Une vie ne part que lorsqu’une tentative se termine sans que le plateau soit vidé, et il en revient une toutes les trente minutes.',
          'Cela aide aussi quand la structure d’ensemble se découpe en petits morceaux. Sur le [Voyage](/fr#journey) d’OutBrick, chaque village compte douze niveaux : « finir ce village avant mon arrêt » est un objectif que vous pouvez vraiment atteindre.',
          'Le dernier test est le plus facile à oublier : pouvez-vous poser le jeu ? Un bon jeu de trajet vous laisse souvent à un point d’arrêt naturel, et ne vous accueille pas avec une pile d’offres à durée limitée quand vous revenez. Vous voulez que ce soit votre arrêt qui mette fin à la session, et que le jeu soit quelque chose que vous reprenez quand l’envie vous en prend.',
        ],
      },
      'battery-and-attention': {
        title: 'Batterie, son et attention',
        paragraphs: [
          'Passer hors ligne supprime une source de consommation, mais l’écran et le jeu lui-même consomment toujours. Sur un long trajet, les deux réglages les plus utiles sont le curseur de luminosité et le mode Économie d’énergie, qui selon Apple réduit l’activité en arrière-plan pour prolonger l’autonomie. Si un jeu propose de réduire les animations ou la fréquence d’images, un long vol est le bon moment pour s’en servir. OutBrick respecte partout le réglage Réduire les animations du système.',
          'Le son est l’autre point à vérifier. Un jeu qui repose sur des signaux sonores est peu pratique dans un wagon silencieux sans écouteurs. Les neuf amis en briques d’OutBrick parlent dans des bulles de texte et n’ont pas de voix : rien de ce qu’ils disent ne se perd avec le son coupé. Et comme le mode daltonien est activé par défaut, chaque brique et chaque porte portent un symbole en plus d’une couleur, ce qui peut aider quand l’éclairage d’un wagon est faible ou délave les couleurs.',
        ],
      },
      'beyond-the-phone': {
        title: 'Au-delà du téléphone',
        paragraphs: [
          'Sur un long vol, un écran plus grand ménage vos yeux et votre nuque. Si un jeu tourne sur iPad comme sur iPhone et partage la progression entre les deux, l’iPad posé sur la tablette du siège et le téléphone dans la file du contrôle des passeports peuvent être le même jeu. OutBrick fonctionne sur iPhone, iPad, Mac, Apple TV et Apple Vision Pro, et un jeu autonome sur Apple Watch prend le relais quand le téléphone est dans le coffre à bagages.',
          'Avant votre prochain voyage, parcourez une fois la liste ci-dessous. Cela prend quelques minutes à la maison et vous épargne une heure d’agacement plus tard.',
        ],
        bullets: [
          'Testé en mode Avion à partir d’un lancement à froid.',
          'Jouable d’un pouce en portrait.',
          'Des niveaux assez courts pour être finis entre deux arrêts.',
          'Pas de chrono qui tourne quand vous regardez ailleurs.',
          'Jouable sans le son.',
          'Luminosité baissée, mode Économie d’énergie activé pour les longs trajets.',
        ],
      },
    },
    pullQuote: 'Le pire moment pour découvrir qu’un jeu a besoin d’une connexion, c’est dans un tunnel.',
    faqs: [
      { question: 'Quels jeux de puzzle fonctionnent hors ligne sur iPhone ?', answer: 'Beaucoup, mais « hors ligne » peut vouloir dire tout le jeu ou seulement une partie. Le moyen fiable de le savoir est de tester : activez le mode Avion, fermez le jeu, rouvrez-le et jouez quelques niveaux. OutBrick fonctionne hors ligne.' },
      { question: 'OutBrick fonctionne-t-il en mode Avion ?', answer: 'Oui. OutBrick fonctionne hors ligne : vous pouvez jouer vos plateaux sans aucune connexion. La progression est conservée dans votre iCloud, et un nouvel appareil connecté au même compte reprend là où vous vous étiez arrêté.' },
      { question: 'Les jeux hors ligne consomment-ils moins de batterie ?', answer: 'Couper le réseau supprime une source de consommation, mais l’écran et le jeu consomment toujours. Pour les longs trajets, baissez la luminosité et activez le mode Économie d’énergie, qui réduit l’activité en arrière-plan.' },
      { question: 'Peut-on jouer à OutBrick sur Apple Watch ?', answer: 'Oui. Il existe un jeu autonome sur Apple Watch, en plus des versions pour iPhone, iPad, Mac, Apple TV et Apple Vision Pro.' },
    ],
  },

  'why-two-minute-puzzles-feel-good': {
    title: 'Pourquoi un puzzle de deux minutes fait autant de bien',
    dek: 'Compétence, attention et petites satisfactions : ce que dit la recherche sur les raisons qui donnent envie de revenir à une courte partie d’OutBrick.',
    imageAlt: 'Un plateau de puzzle brillant où une dernière brique glisse vers la porte de sa couleur',
    tags: ['jeux de puzzle', 'bien-être', 'motivation', 'jeux occasionnels'],
    intro: 'Toutes les parties n’ont pas besoin d’être une odyssée. Parfois, la meilleure façon de jouer est une petite boucle complète : repérer un motif, faire un choix, voir le plateau réagir, et repartir avec le sentiment que quelque chose s’est emboîté.',
    keyTakeaways: [
      'Une courte partie peut être satisfaisante quand le joueur a des objectifs clairs, un retour visible et une vraie marge de décision.',
      'La recherche montre des effets modestes et à court terme du jeu occasionnel sur l’humeur et l’engagement, pas des promesses spectaculaires sur l’intelligence ou le soin.',
      'OutBrick est construit autour d’une petite boucle complète : un plateau, une décision à la fois, et une annulation gratuite qui attend sur chacun.',
    ],
    sections: {
      'the-feeling-of-a-clean-clear': {
        title: 'Le plaisir d’un plateau vidé proprement',
        paragraphs: [
          'Un puzzle satisfaisant n’a pas besoin de vous noyer sous le contenu. Il doit rendre sensible le lien entre votre choix et le résultat. Faites glisser une brique, lisez l’ouverture, et regardez la porte vous répondre. Ce petit échange est le cœur émotionnel d’OutBrick.',
          'Le modèle motivationnel proposé par Przybylski, Rigby et Ryan décrit l’engagement dans le jeu à travers trois besoins fondamentaux : la compétence, l’autonomie et le lien aux autres. Un petit puzzle touche les deux premiers tout de suite. Vous comprenez une règle, puis vous vous prouvez quelque chose en l’appliquant. Le plaisir vient autant d’en être l’auteur que de gagner.',
        ],
      },
      'what-short-play-can-and-cannot-do': {
        title: 'Ce qu’une courte partie peut faire, et ce qu’elle ne peut pas faire',
        paragraphs: [
          'Une étude contrôlée sur le jeu occasionnel a observé, après une tâche cognitivement exigeante, une meilleure récupération affective à court terme et un engagement plus fort, alors que les preuves d’une récupération cognitive plus large étaient moins nettes. La nuance compte. Un jeu peut vous aider à vous sentir prêt à continuer sans devenir un stimulant cérébral miracle.',
          'Une autre étude, qui comparait un jeu occasionnel à un exercice de pleine conscience de type balayage corporel, a relevé une baisse du stress psychologique et physiologique dans les deux groupes. La pleine conscience faisait mieux sur le stress psychologique déclaré : les jeux ne remplacent donc pas d’autres pratiques. Un jeu à la bonne taille peut être une option modeste parmi d’autres dans une journée.',
        ],
      },
      'the-outbrick-loop': {
        title: 'La boucle d’OutBrick est volontairement petite',
        paragraphs: [
          'OutBrick commence par un plateau qui se comprend d’un coup d’œil. Pas de journal de quêtes à retenir, pas de chrono à battre ; les deux nombres qui comptent, l’objectif et la limite de coups, sont affichés à côté de votre compteur de coups dès la première touche. Le plateau vous dit le reste : les briques, les couloirs libres et les portes assorties.',
          'L’annulation fait partie de la boucle au lieu d’être une punition, c’est pourquoi la première annulation de chaque plateau est gratuite et ne s’épuise jamais. Cela change la température émotionnelle de l’expérimentation. Vous pouvez tenter un coup, apprendre du résultat et garder ce que l’essai avait d’utile. Les plateaux sont toujours faits pour résister. Ce qui change, c’est qu’essayer coûte moins cher qu’hésiter. La page d’accueil détaille [exactement ce que coûtent les vies, les annulations et les pubs](/fr#fair).',
        ],
        bullets: [
          'Un plateau lisible à la fois',
          'Un lien clair entre l’action et le retour',
          'Des outils de rattrapage qui préservent la curiosité',
          'Une ligne d’arrivée atteinte avant que la partie ne devienne pesante',
        ],
      },
      'take-the-good-bit-with-you': {
        title: 'Repartez avec le meilleur',
        paragraphs: [
          'Une bonne partie de deux minutes vous donne un petit sentiment de progrès, puis vous laisse décider de la suite. Si vous avez le temps pour un autre plateau, il y en a toujours un autre. S’il faut partir, le jeu peut attendre.',
          'C’est pourquoi OutBrick traite le calme comme une donnée de conception. La recherche ne dit pas que tous les joueurs en profitent de la même façon, et elle ne prouve pas d’effet universel. Elle indique en revanche une direction utile : faire un jeu qui respecte l’autonomie, rend la progression lisible et laisse au joueur plus de choix qu’il n’en avait avant. Nous suivons le même fil dans [Designing a game for the life players actually have](/blog/designing-for-real-life-play) (en anglais).',
        ],
      },
    },
    pullQuote: 'Essayer coûte moins cher qu’hésiter.',
    faqs: [
      { question: 'OutBrick est-il conçu pour améliorer la santé mentale ?', answer: 'Non. OutBrick est un puzzle de loisir. La recherche sur le jeu occasionnel peut éclairer la conception, mais elle ne fait pas du jeu un traitement et ne garantit aucun effet sur le bien-être.' },
      { question: 'Pourquoi les parties d’OutBrick sont-elles courtes ?', answer: 'Des parties courtes rendent le puzzle lisible et permettent au jeu de s’adapter à la vraie vie. Vous pouvez continuer à jouer, mais le jeu n’exige pas un long moment ininterrompu.' },
    ],
  },
};
