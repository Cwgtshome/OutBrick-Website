import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 1 (lib/journal-batches/batch-1.ts) in this language. See lib/blog-l10n/es.ts for the house style. */
export const es1: ExtraGuides = {
  'how-to-read-a-puzzle-before-moving': {
    title: 'Antes del primer movimiento: cómo leer un puzle',
    dek: 'Por qué la forma en que te imaginas un puzle cambia lo difícil que parece, qué miran primero los expertos y una rutina breve para leer cualquier tablero.',
    imageAlt: 'Sprout y Bricko a ambos lados de un iPhone que muestra la tienda de OutBrick, con ladrillos de tetones flotando sobre una cuadrícula índigo',
    tags: ['cómo resolver puzles', 'trucos de puzles', 'resolución de problemas', 'planificación', 'psicología cognitiva'],
    intro: 'La mayoría de los movimientos desperdiciados en un puzle se hacen en los diez primeros segundos, antes de saber de verdad de qué va. No es descuido. Es cómo funciona la mente: empezamos a actuar según la primera descripción del problema que se nos ocurre, y esa primera descripción suele ser mala. Los psicólogos llevan cincuenta años demostrando que un mismo puzle puede ser fácil o brutal según cómo lo representemos en la cabeza. La buena noticia es que representar es una habilidad, y unos cuantos hábitos de mirar la mejoran.',
    keyTakeaways: [
      'Dos puzles con idéntica estructura pueden diferir muchísimo en dificultad, y buena parte de la diferencia está en cómo se tienen presentes las reglas y la posición actual.',
      'Los expertos clasifican los problemas por su estructura profunda y los principiantes por sus rasgos superficiales; en un tablero, eso significa leer bloqueos y salidas, no colores.',
      'El esfuerzo de planificación se concentra donde compiten varios movimientos, así que una buena lectura del tablero consiste sobre todo en buscar esas bifurcaciones.',
    ],
    sections: {
      'same-puzzle-different-difficulty': {
        title: 'El mismo puzle puede ser fácil o difícil',
        paragraphs: [
          'En 1985, Kenneth Kotovsky, John Hayes y Herbert Simon dieron a varias personas una serie de puzles que, en el fondo, eran todos la torre de Hanói: las mismas posiciones, los mismos movimientos permitidos, la misma solución más corta. Solo cambiaban la historia que los envolvía y la manera de formular las reglas. En unas versiones, unos monstruos se pasaban globos entre ellos; en otras, cambiaban el tamaño de los globos que sostenían. La estructura era idéntica y, aun así, algunas versiones llevaron muchas veces más tiempo que otras.',
          'Su análisis apuntaba a la representación. Las versiones cuyas reglas costaba más imaginar, o que obligaban a tener presentes a la vez más reglas y la posición actual, resultaban más difíciles. Gran parte del tiempo se iba simplemente en aprender a hacer movimientos permitidos con soltura; cuando eso se volvía fácil, el tramo final hasta la meta solía ser rápido. Buena parte de la dificultad no estaba en buscar una solución, sino en darle al problema una forma con la que la mente pudiera trabajar.',
          'Jiajie Zhang y Donald Norman llevaron la idea un paso más allá en 1994. Construyeron versiones de la torre de Hanói en las que algunas reglas las imponían los propios objetos, de modo que un movimiento ilegal resultaba físicamente incómodo o imposible, en lugar de algo que había que acordarse de no hacer. Cuantas más reglas vivían en el mundo y no en la cabeza, más fácil se volvía el puzle. Un tablero bien hecho, como una herramienta bien hecha, piensa una parte por ti.',
        ],
      },
      'experts-read-structure': {
        title: 'Los expertos leen la estructura; los principiantes, la superficie',
        paragraphs: [
          'En un estudio clásico, Michelene Chi, Paul Feltovich y Robert Glaser pidieron a expertos y principiantes en física que agruparan problemas de un libro de texto. Los principiantes los agrupaban por su aspecto: los de planos inclinados juntos, los de muelles juntos. Los expertos los agrupaban por el principio que los resolvía, como la conservación de la energía, aunque los problemas no se parecieran en nada. Los expertos no veían más. Veían otras cosas.',
          'Los tableros de puzle invitan a la misma división. La superficie de un tablero de ordenar colores son colores y formas, y es tentador leerlo así: ahí están los rojos, ahí los azules. La estructura es otra cosa: qué pieza se interpone entre qué otra pieza y su salida, dónde está el espacio vacío, qué deslizamiento abre un carril y cuál lo cierra. Quien lee la estructura ve una cadena corta de dependencias. Quien lee la superficie ve una multitud.',
          'No hacen falta años de práctica para tomar prestada la pregunta del experto. Antes de mover, pregúntate qué tipo de problema es este tablero. ¿Un atasco, donde todo espera a una sola pieza? ¿Una falta de espacio, donde lo primero es hacer sitio? ¿Un problema de orden, donde los colores tienen que salir en una secuencia concreta? Ponerle nombre al tipo es un pequeño acto de representación, y cambia qué movimientos parecen prometedores. Con el tiempo, esos tipos se convierten en patrones que reconoces de un vistazo, que es lo que describe el [chunking](/blog/chunking-how-expert-puzzlers-see-patterns).',
        ],
      },
      'plan-where-choices-compete': {
        title: 'Planifica donde compiten las opciones',
        paragraphs: [
          '¿Cuánto hay que mirar antes de mover? Geoff Ward y Alan Allport estudiaron a adultos que planificaban soluciones para una versión difícil, de cinco discos, de la torre de Londres, un puzle muy usado en psicología para estudiar la planificación. Las personas planificaban una solución fluida y luego la ejecutaban. El tiempo de preparación que necesitaban, y los errores que cometían, aumentaban con el número de bloques de subobjetivos: tramos de movimientos necesarios que no dejaban nada en su sitio definitivo. La planificación también se ralentizaba cuando competían más movimientos alternativos en los pasos críticos.',
          'De ahí sale una regla práctica útil. La planificación no se reparte por igual a lo largo de un puzle. Se acumula en los puntos donde varios movimientos parecen sensatos y solo uno mantiene viva la solución, y en los tramos en los que tienes que apartar piezas en lugar de llevarlas a casa. Esos son los momentos para ir despacio. Donde un movimiento es forzado, o una pieza tiene el camino despejado hasta su salida, hay poco que planificar, y quedarse mirando solo gasta atención.',
          'Visto así, leer un tablero es en realidad buscar las bifurcaciones. Encuentra los uno o dos puntos donde el tablero se ramifica y habrás encontrado la mayor parte del puzle.',
        ],
      },
      'a-reading-routine': {
        title: 'Una rutina de lectura de treinta segundos',
        paragraphs: [
          'Aquí tienes una rutina que lleva la investigación a la práctica. Cuesta unos treinta segundos en un tablero mediano y funciona con puzles deslizantes, puzles de ordenar colores y la mayoría de los puzles de cuadrícula con salidas.',
        ],
        bullets: [
          'Nombra el objetivo. ¿Cómo es el tablero «resuelto» y qué piezas tienen más camino por delante?',
          'Localiza el espacio libre. Todo plan tiene que pasar por las casillas vacías, así que sabe dónde están.',
          'Sigue una cadena hacia atrás desde una salida: ¿qué bloquea esta pieza y qué bloquea a esa otra?',
          'Marca las bifurcaciones: los puntos donde dos movimientos parecen sensatos pero llevan a tableros distintos.',
          'Nombra el tipo de tablero: un atasco, una falta de espacio o un problema de orden.',
        ],
        note: 'El último paso es el que casi todo el mundo se salta, y es donde la representación hace su trabajo. Una vez que le has puesto nombre al tipo, el primer movimiento evidente a menudo deja de parecerlo.',
      },
      'looking-with-your-hands': {
        title: 'No todo se mira con la cabeza',
        paragraphs: [
          'Una advertencia que viene de la investigación sobre la acción: leer un tablero no tiene por qué ser algo puramente mental. David Kirsh y Paul Maglio descubrieron que los buenos jugadores de Tetris giran las piezas en pantalla en parte para averiguar cómo encajan, usando el mundo para pensar. Llamaron a esto acciones epistémicas, movimientos que se hacen para descubrir información y no para avanzar, y demostraron que pueden ser más rápidas y fiables que calcularlo todo de cabeza. En un puzle con deshacer, un movimiento de tanteo es a veces la forma más rápida de leer un tablero.',
          'Para la táctica movimiento a movimiento, una vez hecha la lectura, nuestras guías sobre [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) y los [trucos para puzles de ordenar colores](/blog/colour-sort-puzzle-tips) siguen donde termina esta rutina.',
        ],
      },
      'reading-an-outbrick-board': {
        title: 'Cómo leer un tablero de OutBrick',
        paragraphs: [
          'OutBrick lleva varias de sus reglas al propio tablero, que es la lección de Zhang y Norman puesta en práctica. Un ladrillo se desliza hasta que algo lo detiene, así que dónde puede acabar lo fija el tablero, no tu puntería. Cada ladrillo sale solo por la puerta de su color, de modo que las puertas imponen la regla del color por ti. El objetivo de movimientos y el límite de movimientos aparecen desde el primer toque. Y los símbolos del modo para daltónicos, activados por defecto, dan a cada ladrillo y a cada puerta una forma además de un color, lo que facilita leer el tablero como estructura y no como una mancha de colores.',
          'Lo que te queda es la lectura estructural: qué ladrillo está frenando qué color, dónde está el espacio, dónde se bifurca el tablero. En tableros más avanzados, las llaves, los candados, las cajas y las puertas añaden dependencias que conviene seguir antes de mover nada, porque un candado abierto demasiado tarde puede convertir una cadena ordenada en un largo rodeo.',
          'Ningún tablero tiene reloj, así que leer no te cuesta más que unos segundos. El [tablero en el navegador](/play) es un buen sitio para probar la rutina, y el [Tablero del día](/daily) le da a todo el mundo el mismo puzle cada día, lo que facilita comparar cómo lo leíste tú con cómo lo leyó un amigo.',
        ],
      },
    },
    pullQuote: 'Quien lee la estructura ve una cadena corta de dependencias. Quien lee la superficie ve una multitud.',
    faqs: [
      { question: '¿Cómo hay que abordar un puzle que nunca has visto?', answer: 'Léelo antes de mover. Busca el objetivo, el espacio libre y lo que bloquea a la pieza más cercana a salir, y después localiza los puntos donde compiten dos movimientos, porque en esas bifurcaciones es donde debe ir la mayor parte del razonamiento.' },
      { question: '¿Por qué algunos puzles parecen más difíciles que otros con las mismas reglas?', answer: 'Buena parte de la dificultad de un puzle está en cómo lo representas en la cabeza. En un estudio clásico con versiones de la torre de Hanói de estructura idéntica, algunas llevaron muchas veces más tiempo, sobre todo porque sus reglas costaba más tenerlas presentes.' },
      { question: '¿Debo planificar la solución entera antes del primer movimiento?', answer: 'Casi nunca. Planifica hasta el siguiente punto en que el tablero se bifurca, juega ese tramo y vuelve a leer el tablero. Los estudios con puzles de planificación muestran que el esfuerzo aumenta con el número de opciones que compiten, así que es ahí donde mejor se invierte la atención.' },
      { question: '¿OutBrick tiene temporizador?', answer: 'No. Cada tablero de OutBrick muestra un objetivo de movimientos y un límite de movimientos desde el primer toque, pero no hay ningún reloj en todo el juego, así que el tiempo que dedicas a leer el tablero es gratis.' },
    ],
  },

  'why-undo-makes-you-a-better-puzzle-solver': {
    title: 'Por qué deshacer te hace mejor jugador de puzles',
    dek: 'Los errores que puedes deshacer son grandes maestros. Qué dice la investigación sobre errores y planificación para usar bien deshacer, y cuándo contenerse.',
    imageAlt: 'Poppy con su varita de estrella y Bricko junto a un iPhone que muestra la tienda de OutBrick, sobre una cuadrícula de ladrillos índigo',
    tags: ['aprender de los errores', 'resolución de problemas', 'trucos de puzles', 'planificación', 'diseño de juegos'],
    intro: 'Hay jugadores que usan deshacer como quien confiesa algo. Prefieren mirar un tablero dos minutos antes que retirar un movimiento, como si el botón fuera para quien en realidad no sabe resolver puzles. La investigación sobre el aprendizaje apunta en la dirección contraria, con una salvedad interesante. Los errores que detectas y corriges están entre lo más útil que puede pasarte mientras aprendes. Pero cuando equivocarse no cuesta nada, la gente también planifica menos. Usar bien deshacer consiste en aprovechar el primer efecto sin pagar demasiado por el segundo.',
    keyTakeaways: [
      'Un error seguido de su corrección suele ayudar a aprender, y el beneficio es mayor cuando estabas seguro de lo que era un error.',
      'En un metaanálisis de 24 estudios, la formación que animaba a explorar y a equivocarse se trasladaba mejor a tareas nuevas que la que apartaba a la gente de los errores.',
      'Abaratar los errores también hace que la gente planifique menos, así que trata cada deshacer como la prueba de una idea concreta y no como un sustituto de pensar.',
    ],
    sections: {
      'errors-are-information': {
        title: 'Los errores son información',
        paragraphs: [
          'En una revisión de 2017, Janet Metcalfe reunió las pruebas sobre el aprendizaje a partir de los errores. El panorama sorprende a quien se haya criado con la idea de que hay que evitar los errores a toda costa. Equivocarse y recibir después una corrección suele ayudar a aprender; no graba el error a fuego. El beneficio es mayor en el caso que peor suena: cuando quien aprende estaba seguro de que la respuesta equivocada era la correcta. Un error cometido con seguridad y luego corregido se recuerda.',
          'Nate Kornell, Matthew Hays y Robert Bjork mostraron un efecto relacionado en el laboratorio. Las personas que intentaban responder una pregunta antes de ver la respuesta la aprendían mejor que las que simplemente leían pregunta y respuesta juntas, incluso cuando su intento estaba condenado a fallar. El intento fallido parecía prepararlas para la corrección.',
          'Un movimiento en un puzle es una especie de apuesta sobre el tablero. Cuando la apuesta sale mal y ves por qué, aprendes algo sobre cómo interactúan las piezas que mirar no te habría enseñado. Eso es lo que hace posible deshacer: la corrección llega al instante, mientras el razonamiento que te llevó al error sigue fresco.',
        ],
      },
      'exploring-transfers': {
        title: 'Explorar y equivocarse llega más lejos',
        paragraphs: [
          'La investigación sobre formación en el trabajo lo ha puesto a prueba a gran escala. La formación basada en la gestión de errores anima a propósito a explorar, equivocarse y aprender de ello, en lugar de seguir un procedimiento que mantiene a la gente en el buen camino. En 2008, Nina Keith y Michael Frese combinaron 24 estudios con más de 2000 participantes. De media, la formación en gestión de errores dio mejores resultados que las alternativas, con un efecto moderado. La diferencia era mayor no en las tareas practicadas, sino en tareas posteriores de estructura distinta, que es justo donde querrías que una habilidad aguantara.',
          'Importaban dos ingredientes: la exploración activa y el ánimo explícito a cometer errores. El segundo es fácil de pasar por alto. Que te digan que los errores forman parte del proceso cambia cómo reaccionas ante ellos, y la frustración tiene margen para convertirse en curiosidad. Un juego puede transmitir el mismo mensaje con su diseño, haciendo que la primera corrección salga barata.',
          'La transferencia a tareas nuevas es también lo que importa en un juego de puzles. Nadie juega mucho tiempo el mismo tablero. Lo que quieres llevarte de un tablero al siguiente no es una solución memorizada, sino una mejor intuición de cómo se bloquean las piezas entre sí, y esa intuición se construye explorando.',
        ],
      },
      'the-catch': {
        title: 'La salvedad: los movimientos baratos crean planes perezosos',
        paragraphs: [
          'Kenton O’Hara y Stephen Payne hicieron a finales de los noventa una serie de experimentos que todo diseñador de puzles debería conocer. Varias personas resolvían el 8-puzzle, un pequeño puzle de fichas deslizantes, con interfaces que hacían cada movimiento rápido o laborioso de ejecutar. Cuando los movimientos eran costosos, la gente planificaba más. Cuando eran baratos, recurría al ensayo y error en el propio tablero.',
          'Los resultados sobre el aprendizaje fueron más ambiguos. En un experimento, quienes habían practicado con la interfaz costosa lo hicieron mejor después en el mismo tipo de puzle que quienes habían practicado con la barata. En otro, en el que el puzle posterior era distinto, la interfaz de práctica no marcó ninguna diferencia. Un estudio posterior manipuló otros costes, como un tiempo de bloqueo tras cada movimiento y el coste de recuperarse de un error, y encontró el mismo patrón básico: cuando actuar cuesta más, la gente planifica más y actúa menos.',
          'Deshacer es el reductor de costes definitivo. Hace que un mal movimiento sea casi gratis. Así que la investigación predice que un deshacer abundante puede hacer que la gente deje de planificar sin darse cuenta. La solución no es evitar deshacer, sino usarlo a propósito.',
        ],
      },
      'using-undo-well': {
        title: 'Cómo usar bien deshacer',
        paragraphs: [
          'El truco es tratar cada deshacer como un experimento con una pregunta asociada. Antes de un movimiento que quizá retires, di qué esperas que te muestre: si el azul se desliza a la izquierda, ¿se abre el carril? Luego mira, aprende y deshaz. Conservas la planificación que los movimientos baratos tienden a erosionar y sigues teniendo la corrección rápida que hace útiles los errores.',
        ],
        bullets: [
          'Formula la pregunta antes de un movimiento de tanteo, no después.',
          'Después de deshacer, resume en una frase lo que te acaba de enseñar el tablero.',
          'Si deshaces el mismo movimiento dos veces, para y vuelve a leer el tablero; el problema es tu plan, no el movimiento.',
          'Guarda un intento desde cero para cuando toda tu lectura del tablero estaba equivocada.',
        ],
        note: 'Ir y venir entre las mismas dos posiciones es señal de que estás esperando un milagro, no poniendo nada a prueba. Es el momento de releer el tablero desde cero, como explicamos en [cómo leer un puzle antes del primer movimiento](/blog/how-to-read-a-puzzle-before-moving).',
      },
      'undo-in-outbrick': {
        title: 'Cómo funciona deshacer en OutBrick',
        paragraphs: [
          'OutBrick está construido en torno a este equilibrio. El primer deshacer de cada tablero es gratis y nunca se agota, así que la primera corrección siempre sale barata, que es el mismo mensaje que intenta transmitir la formación en gestión de errores. A partir de ahí, los deshacer salen de una pequeña reserva que se recarga con el tiempo, y el deshacer que se ofrece cuando un tablero se atasca también es gratis. Las condiciones exactas están en el [registro de juego limpio de la página de inicio](/#fair).',
          'Las estrellas tiran en la dirección contraria, a propósito. Una estrella es despejar el tablero. Dos estrellas es despejarlo dentro del objetivo de movimientos. Tres estrellas es despejarlo dentro del objetivo sin deshacer nada. Así el juego premia los dos tipos de aprendizaje: explora con libertad cuando buscas despejar el tablero y planifica de cabeza cuando buscas la tercera estrella. Nuestra guía para [conseguir tres estrellas](/blog/how-to-get-three-stars-puzzle-games) trata el lado de la planificación.',
          'Para notar la diferencia, prueba el [tablero en el navegador](/play) dos veces: una experimentando con libertad y otra sin tocar deshacer. Fíjate en lo distinto que miras el tablero la segunda vez.',
        ],
      },
    },
    pullQuote: 'La solución no es evitar deshacer, sino usarlo a propósito.',
    faqs: [
      { question: '¿Usar deshacer en los juegos de puzles es hacer trampa?', answer: 'No. Deshacer te permite corregir un error mientras el razonamiento que hay detrás sigue fresco, algo que la investigación sobre el aprendizaje a partir de errores sugiere que es valioso. Su principal riesgo es que un deshacer muy barato puede tentarte a planificar menos.' },
      { question: '¿El ensayo y error ayuda a aprender puzles?', answer: 'Puede ayudar. Un metaanálisis sobre la formación en gestión de errores encontró que animar a explorar y a equivocarse se trasladaba mejor a tareas nuevas que la formación que evita los errores. Funciona mejor cuando cada intento pone a prueba una idea concreta.' },
      { question: '¿Por qué planifico menos cuando deshacer es ilimitado?', answer: 'Los experimentos con el 8-puzzle encontraron que, cuando los movimientos eran baratos, la gente recurría al ensayo y error, y cuando eran costosos, planificaba más. Deshacer abarata los errores, así que desplaza el esfuerzo de planificar a probar.' },
      { question: '¿Deshacer cuesta estrellas en OutBrick?', answer: 'Solo la tercera. Una estrella es despejar el tablero, dos estrellas es despejarlo dentro del objetivo de movimientos y tres estrellas es despejarlo dentro del objetivo sin deshacer. El primer deshacer de cada tablero es gratis.' },
    ],
  },

  'chunking-how-expert-puzzlers-see-patterns': {
    title: 'El chunking: cómo ven patrones los expertos en puzles',
    dek: 'Los maestros de ajedrez recuerdan tableros por patrones, no pieza a pieza. Qué muestra la investigación sobre el chunking y cómo crear tus propios chunks.',
    imageAlt: 'Moss con su cinturón de herramientas y Bricko a ambos lados de un iPhone que muestra un tablero real y muy apretado de OutBrick marcado como Super Hard',
    tags: ['chunking', 'pericia', 'puzles y memoria', 'psicología cognitiva', 'investigación sobre juegos de puzles'],
    intro: 'Si observas a un buen jugador de puzles, parece que ve la respuesta antes de haber mirado. No se ha saltado el razonamiento. Lo ha hecho en gran parte por adelantado, a lo largo de cientos de tableros anteriores, y lo ha guardado en forma de patrones. Los psicólogos llaman a esos patrones chunks, o bloques. La investigación sobre el chunking empezó con el ajedrez y explica bastante bien qué implica mejorar en cualquier puzle, y qué no.',
    keyTakeaways: [
      'Los expertos recuerdan y leen los tableros en grupos de piezas con sentido, lo que les permite captar de un vistazo mucho más que un principiante.',
      'La ventaja se reduce mucho en tableros aleatorios, porque faltan los patrones conocidos en los que se apoyan los expertos.',
      'Los chunks son propios del terreno en el que se formaron: la habilidad es real, pero no cabe esperar que se extienda a tareas sin relación.',
    ],
    sections: {
      'five-seconds-with-a-chess-board': {
        title: 'Cinco segundos frente a un tablero de ajedrez',
        paragraphs: [
          'En 1973, William Chase y Herbert Simon, a partir de trabajos anteriores del psicólogo neerlandés Adriaan de Groot, mostraron posiciones de ajedrez durante cinco segundos a un maestro, a un buen jugador de club y a un principiante, y luego pidieron a cada uno que reconstruyera la posición en un tablero vacío. Con posiciones sacadas de partidas reales, el maestro recordó en el primer intento varias veces más piezas que el principiante. Con las piezas colocadas al azar, la ventaja del maestro casi desapareció.',
          'Chase y Simon también se fijaron en cómo volvían las piezas. Los jugadores las colocaban a ráfagas, con pausas cortas dentro de un grupo y pausas más largas entre grupos. Los grupos tenían sentido: piezas que se defendían entre sí, una estructura de peones conocida, una disposición típica alrededor del rey. Los grupos del maestro eran más grandes. El mejor jugador no retenía más elementos en la mente; simplemente, cada elemento contenía más.',
          'Esa es la idea central del chunking. La memoria de trabajo solo retiene un puñado de elementos a la vez, y la pericia hace que cada elemento sea más rico. El estudio era pequeño, con solo tres jugadores, pero el patrón se ha confirmado muchas veces desde entonces.',
        ],
      },
      'the-random-board-test': {
        title: 'La prueba del tablero aleatorio',
        paragraphs: [
          'Trabajos posteriores matizaron el resultado de los tableros aleatorios. Fernand Gobet y Herbert Simon revisaron en 1996 una serie de experimentos de ajedrez y encontraron que los jugadores más fuertes suelen conservar una pequeña ventaja incluso con posiciones aleatorias, aunque mucho menor que con posiciones de partidas reales. Por pura casualidad, los tableros aleatorios contienen algún fragmento conocido, y los expertos lo detectan.',
          'El seguimiento ocular muestra la misma ventaja desde otro ángulo. Eyal Reingold, Neil Charness y sus colegas descubrieron que los jugadores expertos captaban en cada mirada mucho más de una posición de ajedrez estructurada que los jugadores menos hábiles, pero no cuando la posición era aleatoria. En una tarea sencilla, decir si un rey estaba en jaque, los expertos hacían menos fijaciones y miraban más a menudo entre las piezas que a las piezas mismas, como si leyeran relaciones y no objetos. Los autores concluyeron que la ventaja venía de la experiencia en ajedrez, no de una mejor vista o memoria en general.',
          'La lección para quien juega a puzles es que reconocer patrones no es un talento general que se tiene o no se tiene. Se construye a base de exponerse a los tipos de posiciones que se repiten en un juego concreto, y ayuda exactamente en la medida en que un tablero nuevo se parece a los anteriores.',
        ],
      },
      'how-chunks-form': {
        title: 'Cómo se forman los chunks',
        paragraphs: [
          'En una revisión de 2001, Fernand Gobet y sus colegas distinguen dos caminos hacia los chunks. Uno es deliberado y guiado por un objetivo: decides tratar tres movimientos como una sola maniobra, le pones nombre y la usas a propósito. El otro es automático y perceptivo: tras exponerte lo suficiente, ciertas disposiciones empiezan a parecer una sola cosa. Los modelos computacionales de este segundo camino aprenden chunks a partir de la experiencia y reproducen buena parte de lo que se sabe sobre la memoria de los expertos, en el ajedrez y en otros ámbitos como el aprendizaje de idiomas.',
          'Los jugadores de puzles usan los dos. El tipo deliberado suena a «abrir el carril izquierdo» o «sacar los amarillos»: una intención con nombre que representa varios deslizamientos. El tipo perceptivo es más discreto. Un día, un ladrillo aparcado delante de dos salidas simplemente te parece mal, antes de que sepas decir por qué.',
          'Los chunks importan por el límite que sortean. Planificar una larga serie de movimientos sueltos satura enseguida la memoria de trabajo, algo que vemos en [por qué algunos tableros parecen imposibles](/blog/working-memory-puzzle-difficulty). Planificar por chunks permite que un plan más largo quepa en el mismo espacio.',
        ],
      },
      'building-your-own-chunks': {
        title: 'Cómo crear tus propios chunks',
        paragraphs: [
          'Los chunks no se pueden descargar, pero sí puedes ayudar a que se formen. De cómo parece funcionar el chunking se desprenden unos cuantos hábitos.',
        ],
        bullets: [
          'Ponles nombre a las situaciones que se repiten. Un nombre convierte una impresión vaga en una unidad que puedes recordar: el atasco, la esquina bloqueada, el cuello de botella de un solo ladrillo.',
          'Mira atrás después de despejar un tablero. Echa un vistazo al tablero terminado y pregúntate qué parte reconocerías la próxima vez.',
          'Juega tableros parecidos seguidos, para que los patrones destaquen por repetición.',
          'Mezcla tipos de tablero cuando un patrón te resulte familiar, para practicar el reconocer qué patrón se aplica.',
        ],
        note: 'Los chunks también tienen su coste. Un patrón muy aprendido puede cegarte ante un tablero que solo parece conocido, y deshacer un chunk es una de las formas en que la gente se desatasca, como explicamos en nuestro artículo sobre [el momento eureka](/blog/aha-moment-insight-brain). Los buenos jugadores se aferran a sus patrones y los sueltan cuando el tablero lo exige.',
      },
      'what-chunking-gives-you': {
        title: 'Lo que el chunking te da y lo que no',
        paragraphs: [
          'Es tentador pensar que la capacidad de leer patrones de un maestro de ajedrez o de un experto en puzles tiene que hacerle mejor pensador en general. Las pruebas dicen lo contrario. En 2017, Giovanni Sala y Fernand Gobet revisaron la enseñanza de ajedrez y de música a niños, junto con el entrenamiento de la memoria de trabajo. Cuanto mejor controlado estaba un estudio, menores eran sus efectos sobre habilidades cognitivas y académicas más amplias, y concluyeron que la transferencia lejana del aprendizaje rara vez se produce.',
          'No es un resultado decepcionante para quien simplemente disfruta de los puzles. Mejorar en un juego que te gusta es un placer de verdad, y los chunks que construyes son un conocimiento auténtico. Solo que es conocimiento sobre el juego. Tratamos la cuestión más amplia en [¿son buenos los juegos de puzles para el cerebro?](/blog/are-puzzle-games-good-for-your-brain)',
          'Los tableros de OutBrick son un buen sitio para ver cómo se forman los chunks, porque la mecánica no cambia mientras cambian las disposiciones: un ladrillo siempre se desliza hasta que algo lo detiene y siempre sale por la puerta de su color. Juega unos cuantos [Tableros del día](/daily) en días seguidos y fíjate en qué disposiciones empiezan a parecer una sola cosa. Darte cuenta de eso es un chunk formándose.',
        ],
      },
    },
    pullQuote: 'El mejor jugador no retenía más elementos en la mente; simplemente, cada elemento contenía más.',
    faqs: [
      { question: '¿Qué es el chunking en psicología?', answer: 'El chunking consiste en agrupar varios datos en una sola unidad con sentido, como una disposición conocida de piezas de ajedrez o una secuencia de movimientos con nombre. Como la memoria de trabajo solo retiene unos pocos elementos, unos chunks más grandes te permiten tener más cosas presentes a la vez.' },
      { question: '¿Cómo recuerdan los maestros de ajedrez tableros enteros?', answer: 'Reconocen grupos de piezas conocidos en lugar de piezas sueltas. En experimentos clásicos, los maestros recordaban mucho más que los principiantes con posiciones de partidas reales, pero su ventaja era mucho menor con posiciones aleatorias.' },
      { question: '¿Cómo puedo mejorar a la hora de detectar patrones en los puzles?', answer: 'Ponles nombre a las situaciones que se repiten, repasa los tableros después de despejarlos y juega tableros parecidos seguidos para que los patrones destaquen. Más adelante, mezcla tipos de tablero para practicar el reconocer qué patrón se aplica.' },
      { question: '¿Reconocer patrones en los juegos te hace más inteligente en general?', answer: 'Las pruebas dicen que no. Las revisiones sobre el ajedrez, la música y el entrenamiento de la memoria de trabajo encontraron que, cuanto mejor controlado estaba el estudio, menor era el efecto sobre las habilidades de pensamiento más amplias.' },
    ],
  },

  'stuck-on-a-puzzle-incubation-effect': {
    title: '¿Atascado en un puzle? La ciencia de tomarse un respiro',
    dek: 'Por qué un puzle sin resolver suele ceder tras una pausa, qué halló un metaanálisis sobre la incubación y cómo hacer el tipo de pausa que ayuda.',
    imageAlt: 'Vio con auriculares y Sprout junto a un iPhone que muestra la tienda de OutBrick, con algunos ladrillos amarillos y azules flotando sobre una cuadrícula índigo',
    tags: ['efecto de incubación', 'resolución de problemas', 'trucos de puzles', 'insight', 'psicología cognitiva'],
    intro: 'A casi todo el que hace puzles le ha pasado. Miras un tablero hasta que parece no tener solución, te rindes, te preparas un té y, al volver, la respuesta está ahí, a la vista. Los psicólogos llaman a esa pausa periodo de incubación, y a la mejora que a veces la sigue, efecto de incubación. Es una de las ideas más antiguas de la psicología de la resolución de problemas, y las pruebas actuales dicen que es real, aunque más pequeño y más condicionado de lo que cuentan las anécdotas.',
    keyTakeaways: [
      'Un metaanálisis de estudios sobre la incubación encontró un efecto positivo real al apartar un problema, y mayor cuando antes se había trabajado más en él.',
      'Las pausas parecen ayudar en parte porque dejan que se desvanezca una idea engañosa, así que importan sobre todo cuando estás metido en un bucle.',
      'Una actividad ligera y poco exigente durante la pausa solía dar mejor resultado que un trabajo mental duro, y en algunos problemas, mejor que descansar.',
    ],
    sections: {
      'what-the-evidence-says': {
        title: 'Lo que dicen las pruebas',
        paragraphs: [
          'El resumen más completo es un metaanálisis de 2009 de Ut Na Sio y Thomas Ormerod, que combinaron experimentos en los que se comparaba a personas que seguían trabajando en un problema con otras que lo apartaban un rato antes de volver a intentarlo. En conjunto, encontraron un efecto de incubación positivo. No era uniforme. Las tareas creativas y abiertas, como pensar usos nuevos para un ladrillo, se beneficiaban más que los problemas de insight basados en palabras o imágenes.',
          'Tres detalles son especialmente útiles. Una preparación más larga antes de la pausa daba un efecto mayor: la incubación funciona con un problema en el que te has metido de verdad, no con uno que has mirado de pasada. Llenar la pausa con una tarea exigente reducía el efecto. Y en los problemas de insight con palabras, una tarea ligera durante la pausa daba mejor resultado que el descanso.',
          'Conviene ser honestos sobre lo bien que encaja esto con los juegos de puzles. Los problemas visuales de estos estudios no son lo mismo que un tablero de bloques deslizantes, y los problemas de insight visuales se beneficiaban menos que los abiertos. El efecto es real, pero nadie lo ha medido en puzles de ordenar colores, y sería un error prometer que una pausa siempre desbloqueará un tablero.',
        ],
      },
      'letting-the-wrong-idea-fade': {
        title: 'Por qué ayuda una pausa: dejar que la idea equivocada se desvanezca',
        paragraphs: [
          'Una explicación es casi mecánica. Steven Smith y Steven Blankenship dieron a varias personas problemas de palabras junto con pistas engañosas pensadas para llevarlas por el camino equivocado. Las pistas funcionaron: la gente se quedaba fijada y resolvía menos problemas. Cuando volvía a intentar esos problemas tras un intervalo, mejoraba más que si lo intentaba de inmediato. En sus experimentos, el efecto de incubación solo apareció cuando antes se había inducido esa fijación.',
          'Encaja con la experiencia de quedarse atascado en un tablero. Al cabo de unos minutos ya no estás mirando el puzle; estás mirando tu propio plan para resolverlo. Es el carril que estás seguro de que tiene que abrirse primero, el ladrillo que estás seguro de que tiene que salir el último. Una pausa hace que ese plan afloje, y al volver ves el tablero un poco más como es. Por eso también un amigo que echa un vistazo a tu tablero a veces ve el movimiento enseguida: nunca construyó tu plan, así que no puede engañarle.',
          'Otros investigadores sostienen que la mente, además, sigue trabajando en el problema por debajo de la consciencia. La revisión de Ken Gilhooly de 2016 expone los argumentos a favor de este trabajo inconsciente, a partir de estudios en los que la pausa empieza justo después de presentar el problema. Las dos explicaciones no se excluyen, y para quien juega a puzles el consejo práctico es el mismo.',
        ],
      },
      'the-right-kind-of-break': {
        title: 'El tipo de pausa adecuado',
        paragraphs: [
          'Lo que haces durante la pausa parece importar. Benjamin Baird, Jonathan Schooler y sus colegas dieron a varias personas una tarea creativa y luego una pausa de uno de varios tipos: una tarea exigente, una tarea poco exigente que dejaba vagar la mente, descanso o ninguna pausa. Solo la tarea poco exigente produjo una mejora sustancial en los problemas que ya se habían visto, y las personas de ese grupo dijeron que su mente había divagado más. Es un único estudio con una tarea creativa, pero coincide con el metaanálisis.',
          'El sueño puede cumplir un papel parecido a una escala de tiempo mayor. Ullrich Wagner, Jan Born y sus colegas entrenaron a varias personas en una tarea numérica con un atajo oculto. Tras una noche de sueño, más del doble de personas descubrieron el atajo que tras el mismo tiempo despiertas. El sueño no ayudó a quienes no habían practicado antes la tarea. Ese hallazgo trata de descubrir una regla oculta, no de los puzles en general, pero repite lo que dice el resto de la investigación: primero preparación y luego tiempo lejos del problema.',
        ],
        bullets: [
          'Trabaja el tablero en serio antes de alejarte; la incubación necesita algo que incubar.',
          'Elige algo ligero, como fregar los platos o dar un paseo corto, en lugar de otra tarea mental exigente.',
          'Antes de irte, di qué crees que necesita el tablero, para saber de qué plan te estás desprendiendo.',
          'Vuelve y lee el tablero de nuevo, con una [rutina de lectura](/blog/how-to-read-a-puzzle-before-moving) en lugar de tu plan anterior.',
        ],
      },
      'knowing-when-to-step-away': {
        title: 'Saber cuándo alejarse',
        paragraphs: [
          'Las señales de que estás fijado en lugar de avanzar son fáciles de ver cuando las conoces. Repites una y otra vez el mismo movimiento de apertura. Deshaces hasta volver a la misma posición. Ya no sabes decir para qué sirven tus próximos movimientos. Ese es el momento de parar, porque insistir suele hacer el bucle más profundo.',
          'Volver también es una habilidad. Al regresar, la tentación es retomarlo exactamente donde lo dejaste, repitiendo la misma apertura en la cabeza. Resístete. Empieza por el objetivo como si el tablero fuera nuevo y prueba a propósito el movimiento que tenías más claro que era un error. Si el problema era la fijación, la respuesta suele esconderse en la parte del tablero que habías dejado de mirar.',
          'Alejarse es más fácil cuando el juego no te castiga por ello. En un tablero de OutBrick no hay nada cronometrado; el límite de cada tablero cuenta movimientos, no segundos, así que puedes dejar el teléfono y pensar sin que nada haga cuenta atrás. El [Tablero del día](/daily) es el mismo durante todo el día, lo que lo convierte en un candidato natural para una segunda mirada después de comer.',
          'Una pausa también es buen momento para notar si de verdad quieres volver. Hay tardes en las que un puzle es justo lo que toca y otras en las que no; nuestro artículo sobre [cuándo jugar y cuándo dejar el teléfono](/blog/when-to-play-and-when-to-pause) trata ese lado de la cuestión. Y cuando la respuesta llega de repente tras una pausa, suele sentirse como un destello de insight, una experiencia extraña por sí misma que exploramos en [el momento eureka](/blog/aha-moment-insight-brain).',
        ],
      },
    },
    pullQuote: 'Al cabo de unos minutos ya no estás mirando el puzle; estás mirando tu propio plan para resolverlo.',
    faqs: [
      { question: '¿Tomarse un descanso ayuda a resolver puzles?', answer: 'A menudo, sí. Un metaanálisis de estudios sobre la incubación encontró un efecto positivo al apartar un problema, sobre todo después de haber trabajado bien en él, aunque los puzles visuales se beneficiaban menos que las tareas creativas abiertas.' },
      { question: '¿Qué hago durante una pausa en un puzle difícil?', answer: 'Algo ligero que deje vagar la mente, como un paseo o una tarea sencilla. En los estudios, las actividades poco exigentes solían ayudar más que las tareas mentales exigentes y, en algunos problemas, más que el descanso.' },
      { question: '¿Por qué veo la respuesta nada más volver?', answer: 'Una razón es que la pausa hace que una idea engañosa pierda fuerza. Los experimentos que llevaban a propósito a la gente por el camino equivocado encontraron que volver a intentarlo tras un intervalo ayudaba más que hacerlo de inmediato.' },
      { question: '¿Cuánto tiempo debo alejarme de un puzle?', answer: 'No hay una duración ideal demostrada. Los estudios han usado pausas que van de unos minutos a una noche de sueño; lo que más importa es haber trabajado antes en el problema y llenar la pausa con algo poco exigente.' },
    ],
  },

  'how-to-get-three-stars-puzzle-games': {
    title: 'Cómo conseguir tres estrellas: piensa en menos movimientos',
    dek: 'Tres estrellas es resolver bien, no solo resolver. Conformarse, planificar a fondo y hábitos que ahorran movimientos, con las estrellas de OutBrick.',
    imageAlt: 'Bricko y Sprout a ambos lados de un iPhone que muestra el tramo Autumn Orchard del mapa del Viaje de OutBrick',
    tags: ['objetivo de movimientos', 'trucos de puzles', 'planificación', 'estrategia para puzles deslizantes', 'resolución de problemas'],
    intro: 'Despejar un tablero y despejarlo bien son habilidades distintas. La primera pregunta si eres capaz de encontrar una solución. La segunda, si eres capaz de encontrar una buena dentro de un presupuesto de movimientos, y eso exige otro tipo de pensamiento. Diseño tableros para OutBrick, donde la tercera estrella pide despejar el tablero dentro del objetivo de movimientos sin deshacer nada, así que paso mucho tiempo observando la distancia entre despejar un tablero y despejarlo limpiamente. Esto es lo que dice la psicología de la planificación sobre cómo acortarla.',
    keyTakeaways: [
      'Casi siempre nos conformamos con la primera solución que funciona; las tres estrellas te piden optimizar, y eso exige planificar a propósito.',
      'Planificar antes de mover lleva a mejores soluciones y, en una serie de experimentos, el beneficio se mantuvo cuando ya no se pedía a la gente que planificara.',
      'Los jugadores más fuertes miran más lejos, pero todo el mundo poda sus opciones; la habilidad está en podar las ramas adecuadas.',
    ],
    sections: {
      'good-enough-versus-best': {
        title: 'Lo suficientemente bueno frente a lo mejor',
        paragraphs: [
          'En 1956, Herbert Simon sostuvo que las mentes reales rara vez buscan la mejor opción. Buscan una que sea lo bastante buena y se detienen ahí, una estrategia que llamó satisficing (algo así como «conformarse con lo suficiente»). Con tiempo y atención limitados, suele ser lo racional. Quien hace la compra no compara todas las barras de pan de la tienda, y quien juega a puzles no suele comparar todas las rutas para despejar un tablero.',
          'Un objetivo de movimientos cambia la pregunta. Convierte un problema de conformarse, despejar el tablero como sea, en uno de optimizar, despejarlo dentro de un presupuesto. El instinto que te sirve bien en un primer intento es jugar el primer movimiento que avanza. Ese mismo instinto es el que te cuesta movimientos cuando persigues un objetivo.',
          'Conviene saber en qué modo estás y elegirlo a propósito. Barry Schwartz y sus colegas encontraron que las personas que por costumbre intentan sacar lo mejor de cada elección decían ser menos felices y arrepentirse más que las que se conforman con lo suficientemente bueno. Esa investigación trataba de decisiones cotidianas, no de puzles, pero la lección se traslada: optimiza en los tableros en los que te apetezca y deja que el resto sea simplemente un tablero despejado.',
        ],
      },
      'planning-first-pays-twice': {
        title: 'Planificar primero rinde dos veces',
        paragraphs: [
          'Peter Delaney, Anders Ericsson y Mary Knowles estudiaron los problemas de las jarras de agua, un puzle clásico en el que la gente suele lanzarse a trasvasar sin planificar mucho. Cuando se pedía a las personas que planificaran primero una solución completa, resolvían los problemas de otra manera y aprendían más. Lo llamativo fue lo que pasó después: quienes habían practicado la planificación siguieron dando mejores soluciones incluso cuando ya no se les exigía planificar, mientras que el grupo de comparación apenas mejoró.',
          'Ese es el argumento para jugar algunos tableros despacio. Un tablero resuelto con un plan te enseña más que uno resuelto por ensayo y error, y el hábito de planificar parece quedarse. Los primeros segundos de lectura de un tablero, que tratamos en [cómo leer un puzle antes del primer movimiento](/blog/how-to-read-a-puzzle-before-moving), son de donde salen la mayoría de los movimientos ahorrados.',
          'En la práctica, planificar para un objetivo significa contar. Antes de una serie de movimientos, calcula lo que costará y compáralo con lo que te queda bajo el objetivo. Si el plan necesita más movimientos de los que tienes, es el plan equivocado, y es mucho más barato descubrirlo antes del primer deslizamiento que después del quinto.',
        ],
      },
      'how-far-ahead-good-players-look': {
        title: '¿Hasta dónde miran los buenos jugadores?',
        paragraphs: [
          'Durante décadas, los investigadores discutieron si los expertos planifican más lejos o simplemente reconocen mejores movimientos. En 2023, Bas van Opheusden, Wei Ji Ma y sus colegas abordaron la cuestión con una variante del cuatro en raya, un juego lo bastante complejo como para premiar la planificación profunda, usando tanto jugadores de laboratorio como un gran conjunto de partidas jugadas en el móvil. Ajustando un modelo de búsqueda heurística a los movimientos de la gente, encontraron pruebas sólidas de que la profundidad de planificación aumenta con la pericia.',
          'Pero la profundidad no sale gratis. Cada movimiento más que miras por delante multiplica las ramas que hay que considerar, y la gente se las arregla podando. Quentin Huys y sus colegas encontraron que las personas que planificaban una secuencia de decisiones tendían a dejar de evaluar una rama en cuanto se topaban con una pérdida grande, aunque esa rama hubiera compensado más adelante. El atajo suele ser sensato y de vez en cuando sale caro.',
          'En un tablero de puzle, el equivalente es descartar un movimiento porque su primer paso pinta mal: alejar un ladrillo de su puerta, por ejemplo, o llenar un carril que vas a necesitar después. Algunos de los mejores movimientos de un tablero apretado tienen justo ese aspecto. Cuando no encuentres una ruta dentro del objetivo, vuelve a los movimientos que descartaste a primera vista y síguelos dos pasos más.',
        ],
      },
      'where-moves-go-missing': {
        title: 'Por dónde se escapan los movimientos',
        paragraphs: [
          'Cuando pruebo tableros, las mismas pocas fugas explican la mayor parte de la distancia entre despejar un tablero y despejarlo limpiamente.',
        ],
        bullets: [
          'Dos deslizamientos cortos donde bastaría uno largo. Cuando los ladrillos se deslizan hasta que algo los detiene, un solo deslizamiento suele hacer el trabajo de dos.',
          'Aparcar un ladrillo en un carril que vas a necesitar y tener que moverlo otra vez.',
          'Despejar primero el color fácil en lugar del color cuya salida libera más.',
          'Reparar un error con tres movimientos nuevos cuando una relectura lo habría evitado.',
        ],
        note: 'Cada fuga es un movimiento de conformarse: avanza ahora y cuesta después. La solución es la misma para todas: pregúntate qué cierra un movimiento además de qué abre. Nuestros [trucos para puzles de ordenar colores](/blog/colour-sort-puzzle-tips) repasan estos patrones uno a uno.',
      },
      'outbrick-three-stars': {
        title: 'Cómo funcionan las tres estrellas de OutBrick',
        paragraphs: [
          'En cada tablero de OutBrick, una estrella es despejar el tablero, dos estrellas es despejarlo dentro del objetivo de movimientos y tres estrellas es despejarlo dentro del objetivo sin deshacer. El objetivo y el límite de movimientos aparecen desde el primer toque, y nunca hay reloj, así que el tiempo de planificación es tuyo. El objetivo es la cuenta de quien resolvió el tablero y la referencia para las dos y las tres estrellas. El límite, dibujado como una cuerda, es el techo del intento. La diferencia entre ambos es tuya para gastarla mientras aprendes el tablero, y cuando te quedan pocos movimientos se te ofrecen cinco más antes de que termine el intento.',
          'Ese diseño separa los dos modos. El primer deshacer de cada tablero es gratis, así que, cuando buscas despejar el tablero, puedes explorar todo lo que quieras; [por qué deshacer te hace mejor jugador](/blog/why-undo-makes-you-a-better-puzzle-solver) explica por qué merece la pena. Las tres estrellas te piden que hagas esa exploración de cabeza. En un tablero nuevo que sea difícil de verdad, no pasa nada por conformarte con despejarlo. El hábito de planificar dará sus frutos en el siguiente.',
          'Para practicar el lado de la planificación, prueba el [tablero en el navegador](/play) con una regla propia: ningún movimiento hasta que sepas decir dónde dejarán los tres siguientes cada ladrillo que toques.',
        ],
      },
    },
    pullQuote: 'Cada fuga es un movimiento de conformarse: avanza ahora y cuesta después.',
    faqs: [
      { question: '¿Cómo se consiguen tres estrellas en OutBrick?', answer: 'Despeja el tablero dentro del objetivo de movimientos sin usar deshacer. Una estrella es despejarlo de cualquier manera y dos estrellas es despejarlo dentro del objetivo.' },
      { question: '¿Cómo puedo resolver puzles en menos movimientos?', answer: 'Planifica antes de mover, prefiere un deslizamiento largo a dos cortos y pregúntate qué cierra cada movimiento además de qué abre. La mayoría de los movimientos desperdiciados vienen de jugar el primer movimiento que avanza.' },
      { question: '¿Qué es el satisficing?', answer: 'El satisficing, un término acuñado por Herbert Simon, consiste en elegir la primera opción que es lo bastante buena en lugar de buscar la mejor. Suele ser sensato, pero un objetivo de movimientos te pide optimizar.' },
      { question: '¿Los mejores jugadores planifican más movimientos por delante?', answer: 'Sí, según un estudio de 2023 sobre un juego de tablero complejo, que encontró pruebas sólidas de que la profundidad de planificación aumenta con la pericia, tanto en el laboratorio como en datos a gran escala de partidas en el móvil.' },
    ],
  },

  'can-puzzle-games-improve-spatial-skills': {
    title: '¿Mejoran los puzles la capacidad espacial? Lo que dicen',
    dek: 'La capacidad espacial se entrena, pero los juegos son una vía más estrecha de lo que se dice. Qué dicen los metaanálisis sobre entrenamiento y Tetris.',
    imageAlt: 'Bricko y Zippy guiñando un ojo junto a un iPhone que muestra Button Factory en el mapa del Viaje de OutBrick, con ladrillos flotando encima',
    tags: ['habilidades espaciales', 'investigación sobre juegos de puzles', 'entrenamiento cerebral', 'Tetris', 'investigación'],
    intro: 'El pensamiento espacial, la capacidad de imaginar objetos, girarlos en la cabeza y razonar sobre dónde encajan las cosas, importa mucho más allá de los puzles. Predice el éxito en ciencias, ingeniería y matemáticas, y durante mucho tiempo se trató como algo que se tenía o no se tenía. La investigación de las últimas décadas ha cambiado ese panorama: las habilidades espaciales responden a la práctica. Si los juegos de puzles son una buena forma de practicarlas es una pregunta más delicada, y la respuesta honesta tiene dos mitades.',
    keyTakeaways: [
      'Un metaanálisis de 217 estudios de entrenamiento encontró que las habilidades espaciales se pueden mejorar, con avances que duraban y se trasladaban a otras tareas espaciales.',
      'Las pruebas sobre los videojuegos en concreto son dispares: algunos estudios muestran transferencia a otras pruebas espaciales y otros encuentran que los avances se quedan cerca del juego.',
      'Los metaanálisis recientes más amplios no respaldan que los juegos aumenten la capacidad cognitiva general.',
    ],
    sections: {
      'spatial-skills-can-be-trained': {
        title: 'Las habilidades espaciales se pueden entrenar',
        paragraphs: [
          'El estudio de referencia es un metaanálisis de 2013 de David Uttal, Nora Newcombe y sus colegas, que combinaron 217 estudios de entrenamiento espacial, desde cursos escolares y videojuegos hasta la práctica repetida de pruebas espaciales. De media, el entrenamiento mejoró el rendimiento espacial en casi media desviación típica respecto a los grupos de control, un efecto moderado. Los avances no se desvanecían con intervalos más largos entre entrenamiento y evaluación, y se trasladaban a tareas espaciales que no se habían entrenado directamente.',
          'Los autores también clasificaron las habilidades espaciales según dos dimensiones: si una tarea trata de un único objeto o de las relaciones entre varios, y si las cosas están quietas o se mueven. Un mapa así sirve para preguntarse qué habilidad espacial ejercita en realidad un juego concreto, ya que practicar un tipo de tarea no garantiza que ayude en otro.',
          'Esto importaba porque la capacidad espacial predice con fuerza quién entra y triunfa en ciencia, tecnología, ingeniería y matemáticas. Si se puede entrenar, no es una barrera fija, y los autores sostuvieron que una educación rica en contenido espacial podría dar frutos reales.',
          'Fíjate en lo que abarca el hallazgo. El entrenamiento espacial mejoró las habilidades espaciales. No afirmaba mejorar la memoria, la atención ni la inteligencia en general, y la transferencia que encontró fue a otras tareas espaciales, no a todo.',
        ],
      },
      'what-tetris-taught-researchers': {
        title: 'Lo que el Tetris enseñó a los investigadores',
        paragraphs: [
          'El Tetris lleva décadas siendo un caso de estudio favorito, y los resultados apuntan en ambas direcciones, lo que ya es informativo. Melissa Terlecki, Nora Newcombe y Michelle Little pidieron a estudiantes universitarios que hicieran una prueba de rotación mental una y otra vez o que jugaran al Tetris durante varias semanas. Los dos grupos mejoraron mucho, y los avances se mantenían varios meses después. Los jugadores de Tetris mejoraron más deprisa al principio, y sus avances se trasladaron a otras tareas espaciales más que los de la práctica repetida de la prueba, una ventaja que seguía ahí meses después.',
          'Valerie Sims y Richard Mayer encontraron algo más aleccionador. Los jugadores expertos de Tetris rotaban mentalmente mejor que quienes no jugaban las formas parecidas a piezas de Tetris, pero no les iba mejor en otras pruebas espaciales. Cuando a quienes no jugaban se les dieron 12 horas de práctica de Tetris, no mejoraron en las pruebas espaciales más que un grupo de control equivalente. Los autores concluyeron que la pericia espacial obtenida con el juego era muy específica del juego.',
          'Los dos hallazgos pueden ser ciertos. Los estudios usaron cantidades de juego distintas, pruebas distintas y personas distintas. En lo que coinciden es en que, cuanto más se parece una prueba al juego, más probable es que aparezca una mejora.',
        ],
      },
      'why-far-transfer-is-the-sticking-point': {
        title: 'Por qué la transferencia lejana es el punto débil',
        paragraphs: [
          'La mirada más amplia a los juegos y el pensamiento es una serie de metaanálisis de 2018 de Giovanni Sala, K. Semir Tatlidil y Fernand Gobet, que abarca varios cientos de comparaciones. Se preguntaron si la habilidad en los videojuegos se correlaciona con la capacidad cognitiva, si los jugadores se diferencian de quienes no juegan y si entrenar con juegos mejora la capacidad cognitiva. Encontraron efectos pequeños o nulos en los tres casos, y ninguna prueba de que jugar a videojuegos cause una mejor capacidad cognitiva.',
          'Eso no contradice tanto la investigación sobre entrenamiento espacial como marca su límite. Practicar una tarea espacial puede hacerte mejor en tareas espaciales parecidas. La esperanza de que un juego te haga más agudo en general es la parte que sigue fallando en las pruebas rigurosas, un patrón que seguimos en [¿son buenos los juegos de puzles para el cerebro?](/blog/are-puzzle-games-good-for-your-brain)',
        ],
      },
      'children-and-puzzle-play': {
        title: 'Los niños, los puzles y el juego espacial temprano',
        paragraphs: [
          'Algunas de las pruebas más interesantes vienen de la primera infancia. Susan Levine y sus colegas visitaron a 53 familias en casa cada cuatro meses mientras los niños tenían entre dos y cuatro años. Los niños a los que se vio jugar con puzles de piezas rindieron mejor a los cuatro años y medio en una tarea que consistía en mover y girar formas mentalmente, incluso teniendo en cuenta la formación de los padres, sus ingresos y cuánto hablaban. Entre los niños que jugaban con puzles, jugar con más frecuencia predecía mejores puntuaciones.',
          'El estudio es observacional, así que no puede demostrar que los puzles causaran la diferencia; las familias que hacen puzles pueden ser distintas en otros aspectos. Los investigadores también encontraron que la calidad del juego con puzles, incluida su dificultad y cuánto hablaban los padres sobre formas y espacio, era mayor en los niños que en las niñas. Es una pista prometedora, no una receta.',
        ],
      },
      'what-this-means-for-players': {
        title: 'Qué significa esto si juegas a puzles',
        paragraphs: [
          'En conjunto, las pruebas respaldan una afirmación modesta y honesta. Mover y girar formas en la cabeza es una habilidad, y los puzles que la exigen te dan práctica. Mejorarás en el puzle, y quizá mejores en tareas espaciales que se le parezcan. Quien prometa más que eso va por delante de la investigación.',
          'Los rompecabezas de bloques deslizantes como OutBrick se apoyan en una habilidad espacial concreta: predecir dónde acabará una pieza cuando se desliza hasta que algo la detiene, y cómo cambia eso el espacio a su alrededor. Se parece más a razonar sobre trayectorias y obstáculos que a girar formas, y no conocemos ningún estudio que haya comprobado si se transfiere. No afirmamos nada parecido sobre el juego. Es una forma agradable de ejercitar la habilidad que el propio juego enseña, y con eso basta.',
          'Si lo que buscas es la habilidad espacial en sí, los estudios de entrenamiento sugieren buscar tareas que te pidan directamente girar, plegar u orientarte, a un nivel que te exija. Un juego de puzles puede formar parte de esa mezcla. Es poco probable que sea toda la mezcla.',
          'Para ver qué hábitos espaciales pide un tablero deslizante, prueba el [tablero en el navegador](/play). Nuestro artículo sobre el [chunking](/blog/chunking-how-expert-puzzlers-see-patterns) explica cómo esos hábitos se convierten en patrones que lees de un vistazo, y [juegos como Tetris](/blog/games-like-tetris) analiza qué mantiene interesantes los juegos de encajar formas.',
        ],
      },
    },
    pullQuote: 'Quien prometa más que eso va por delante de la investigación.',
    faqs: [
      { question: '¿Los juegos de puzles mejoran las habilidades espaciales?', answer: 'Pueden mejorar las habilidades espaciales que usa el propio juego, y algunos estudios muestran avances en pruebas espaciales relacionadas. Las pruebas de que los juegos mejoren la capacidad cognitiva general son débiles.' },
      { question: '¿Jugar al Tetris mejora la rotación mental?', answer: 'Los estudios no coinciden. Uno encontró que entrenar con Tetris mejoraba la rotación mental con una transferencia duradera a otras tareas espaciales; otro encontró que los jugadores expertos solo eran mejores con formas parecidas a las del Tetris, y que 12 horas de juego no aportaban ninguna mejora adicional.' },
      { question: '¿Se puede entrenar la capacidad espacial?', answer: 'Sí. Un metaanálisis de 217 estudios encontró que el entrenamiento espacial mejora las habilidades espaciales en una medida moderada, con avances que duran y se extienden a tareas espaciales que no se entrenaron.' },
      { question: '¿Los puzles de piezas son buenos para las habilidades espaciales de los niños?', answer: 'En un estudio, los niños que jugaban con puzles en casa rindieron mejor más tarde en una tarea espacial. El estudio era observacional, así que no puede demostrar que los puzles causaran la diferencia.' },
    ],
  },

  'working-memory-puzzle-difficulty': {
    title: 'Memoria de trabajo: por qué hay tableros imposibles',
    dek: 'Un tablero difícil suele ser un problema de memoria disfrazado. Cómo pesan la memoria de trabajo y la carga cognitiva en un puzle, y cómo aligerarlas.',
    imageAlt: 'Vio con auriculares y Flurry con un gorro de punto junto a un iPhone que muestra Bamboo Springs en el mapa del Viaje de OutBrick',
    tags: ['memoria de trabajo', 'carga cognitiva', 'puzles y memoria', 'resolución de problemas', 'trucos de puzles'],
    intro: 'Algunos tableros son difíciles porque la solución es larga o está bien escondida. Otros lo son por una razón menos evidente: te piden tener presentes a la vez más cosas de las que una mente maneja con comodidad. Desde dentro, los dos se sienten igual, una sensación creciente de que el tablero no tiene sentido, pero piden respuestas distintas. Entender el segundo tipo empieza por la memoria de trabajo, el pequeño espacio mental donde hacemos malabares con lo que estamos pensando en ese momento.',
    keyTakeaways: [
      'La memoria de trabajo solo retiene unos pocos chunks a la vez; una revisión muy citada sitúa la cifra en torno a cuatro.',
      'Comparar sin parar dónde estás con dónde quieres llegar consume gran parte de esa capacidad y deja poca para aprender del tablero.',
      'Puedes aligerar la carga planificando por chunks, planificando solo un poco por delante y dejando que el tablero guarde información por ti.',
    ],
    sections: {
      'a-small-workspace': {
        title: 'Un espacio de trabajo pequeño',
        paragraphs: [
          'Durante décadas, la cifra de manual para la memoria a corto plazo fue de siete elementos, más o menos dos. En una revisión de 2001, Nelson Cowan sostuvo que, en cuanto se impide a la gente repasar o agrupar los elementos, la capacidad real está más cerca de tres a cinco chunks, con cuatro como estimación central razonable. Todo aquello con lo que haces malabares activamente mientras resuelves un puzle tiene que caber en ese espacio: la posición actual, el objetivo, el movimiento que estás considerando y lo que bloquearía.',
          'Cuatro no es mucho. Por eso un plan de diez movimientos sueltos se desmorona a mitad de camino, y por eso puedes ver una secuencia ingeniosa de tres movimientos, apartar la vista un momento y perderla por completo. Casi todo el mundo se ha topado con este límite en un tablero sin tener un nombre para él.',
          'Además, el tamaño del espacio de trabajo no es fijo de un momento a otro. El cansancio, las distracciones y las preocupaciones compiten por él, y esa es una de las razones por las que un tablero que parecía imposible al final de un día largo puede parecer sencillo a la mañana siguiente. Si un tablero de pronto te parece mucho más difícil que el anterior, merece la pena preguntarse si ha cambiado el tablero o has cambiado tú.',
        ],
      },
      'when-solving-crowds-out-learning': {
        title: 'Carga cognitiva: cuando resolver no deja sitio para aprender',
        paragraphs: [
          'La teoría de la carga cognitiva de John Sweller nació de la investigación sobre la resolución de problemas. En un artículo de 1988 sostuvo que el análisis medios-fines, la estrategia de comparar constantemente dónde estás con dónde quieres llegar y elegir los movimientos que reducen la diferencia, ocupa muchísima memoria de trabajo. Eso deja poca capacidad para fijarse en los patrones que facilitarían el siguiente problema. La gente podía resolver problemas así y, aun así, aprender sorprendentemente poco de ellos.',
          'Tres décadas de trabajos posteriores, resumidas por Sweller, Jeroen van Merriënboer y Fred Paas en 2019, construyeron una teoría de la enseñanza en torno a ese mismo límite. Su tesis central es sencilla: la información nueva tiene que pasar por una memoria de trabajo limitada tanto en capacidad como en duración, mientras que el conocimiento ya guardado en la memoria a largo plazo escapa a esos límites. La experiencia hace más fáciles los problemas difíciles sobre todo porque saca lo que sabes del pequeño espacio de trabajo y lo lleva al gran almacén.',
          'Para quien juega a puzles, esto explica una frustración conocida. En un tablero al límite de tu capacidad, toda tu atención se va en encontrar movimientos, y puede que lo despejes sin tener claro cómo. En un tablero justo por debajo de tu límite, te sobra capacidad para darte cuenta de por qué funcionó la solución, y es entonces cuando aprendes.',
        ],
      },
      'how-far-ahead-can-you-plan': {
        title: '¿Hasta dónde puedes planificar?',
        paragraphs: [
          'Louise Phillips, Ken Gilhooly y sus colegas pusieron a prueba directamente la planificación mental con la torre de Londres, un puzle de mover discos muy usado para estudiar la planificación. La mayoría de las personas podían planificar con precisión hasta dos subobjetivos por delante, pero no tres. En otro experimento, a quienes se les pidió hacer un plan mental completo antes de mover dedicaron mucho más tiempo a planificar que quienes no recibieron ninguna instrucción, y sin embargo no ejecutaron sus soluciones con más eficiencia.',
          'Es una cifra útil y que invita a la humildad. Dos subobjetivos, cada uno un tramo corto de movimientos, es más o menos lo más lejos que la mayoría puede ver con fiabilidad en un puzle de ese tipo, y tratar de planificar más allá a menudo es esfuerzo perdido. Planifica hasta el siguiente punto en que el tablero cambia de carácter, juégalo y vuelve a mirar.',
        ],
      },
      'lightening-the-load': {
        title: 'Cómo aligerar la carga',
        paragraphs: [
          'No puedes ampliar la memoria de trabajo a fuerza de desearlo, pero sí puedes gastarla mejor. La herramienta más potente es el chunking: tratar varios movimientos como una sola intención, como «despejar el carril derecho», para que un plan más largo quepa en el mismo espacio. Nuestro artículo sobre [cómo ven patrones los expertos en puzles](/blog/chunking-how-expert-puzzlers-see-patterns) explica cómo se forman los chunks.',
          'La segunda herramienta es dejar que el mundo guarde información por ti. Evan Risko y Sam Gilbert revisaron la investigación sobre la descarga cognitiva: usar acciones físicas o ayudas externas, como notas, recordatorios o inclinar la cabeza para leer un texto girado, para reducir las exigencias del pensamiento interno. La gente descarga más cuando una tarea es exigente y cuando duda de su propia memoria. En un tablero de puzle, el propio tablero es la memoria externa. Seguir un recorrido con el dedo, o hacer un movimiento de tanteo y retirarlo, libera un hueco en tu cabeza.',
        ],
        bullets: [
          'Planifica en chunks con nombre de dos a cuatro movimientos, no movimiento a movimiento.',
          'No planifiques más de dos chunks por delante; después, vuelve a leer el tablero.',
          'Usa el tablero como memoria: señala, sigue recorridos o tantea en lugar de simularlo todo de cabeza.',
          'Reduce el objetivo: intenta liberar un color cada vez en lugar de resolver todo el tablero de golpe.',
        ],
      },
      'keeping-the-load-on-the-puzzle': {
        title: 'Cómo mantiene OutBrick la carga en el puzle',
        paragraphs: [
          'Un buen puzle debería gastar tu memoria de trabajo en el puzle, no en llevar la cuenta. OutBrick intenta mantener baja esa carga accesoria. Cada ladrillo muestra su color y, con el modo para daltónicos activado por defecto, un símbolo a juego, así que no gastas un hueco de memoria en distinguir tonos parecidos; los argumentos están en [por qué el color nunca debería ser la única pista en un puzle](/blog/color-shape-accessibility). Las puertas imponen por sí mismas la regla del color, el objetivo y el límite de movimientos siguen en pantalla y nada está cronometrado, así que nunca tienes que sostener un plan mientras vigilas un reloj.',
          'Lo que queda es la parte difícil que venías a buscar: las posiciones, los bloqueos, el orden. Cuando un tablero parezca imposible, pregúntate a qué tipo de dificultad te enfrentas. Si es un problema de búsqueda, sigue leyendo el tablero. Si es un problema de memoria, y notas que pierdes los planes a mitad de camino, reduce el plan. La [página de accesibilidad](/accessibility) enumera otras formas en que el juego puede adaptarse a tu manera de jugar, y el [tablero en el navegador](/play) es un sitio rápido para practicar la planificación por chunks.',
        ],
      },
    },
    pullQuote: 'En un tablero de puzle, el propio tablero es la memoria externa.',
    faqs: [
      { question: '¿Cuántas cosas puede retener la memoria de trabajo?', answer: 'Las estimaciones varían, pero una revisión muy citada la sitúa en torno a cuatro chunks en adultos cuando se impide repasar y agrupar. Agrupar los elementos en chunks más grandes y con sentido permite retener más.' },
      { question: '¿Por qué algunos puzles parecen imposibles aunque tengan solución?', answer: 'A menudo porque exigen tener presentes a la vez más cosas de las que permite la memoria de trabajo. Planificar por chunks, usar el tablero como memoria externa y avanzar hacia un pequeño objetivo cada vez puede hacerlos manejables.' },
      { question: '¿Cuántos movimientos por delante puede planificar una persona?', answer: 'En un estudio con el puzle de la torre de Londres, la mayoría de las personas podían planificar con precisión hasta dos subobjetivos por delante, pero no tres. Planificar en tramos cortos y luego volver a leer el tablero suele ser más eficaz.' },
      { question: '¿Qué es la teoría de la carga cognitiva?', answer: 'La teoría de la carga cognitiva, desarrollada por John Sweller, sostiene que la información nueva debe pasar por una memoria de trabajo limitada, así que las tareas y la enseñanza deberían evitar malgastar esa capacidad. Nació de investigaciones que mostraban que algunas estrategias de resolución de problemas consumen tanta capacidad que queda poca para aprender.' },
    ],
  },

  'deliberate-practice-for-puzzle-games': {
    title: 'Práctica deliberada para jugadores ocasionales: qué funciona',
    dek: 'La práctica importa, pero menos de lo que dice el mito de las 10 000 horas. Qué sugieren los estudios sobre práctica deliberada para mejorar en los puzles.',
    imageAlt: 'Poppy con su varita y Moss con su cinturón de herramientas junto a un iPhone que muestra Cherry Blossom Town en el mapa del Viaje de OutBrick',
    tags: ['práctica deliberada', 'pericia', 'trucos de puzles', 'cómo resolver puzles', 'investigación'],
    intro: 'No hace falta aspirar a gran maestro para querer mejorar en algo. La mayoría de quienes juegan a puzles unos minutos al día también querrían despejar tableros más difíciles, desperdiciar menos movimientos y atascarse menos. La ciencia de la pericia tiene mucho que decir sobre cómo mejorar, y buena parte gira en torno a la idea de la práctica deliberada. También mantiene un debate animado sobre hasta dónde llega esa idea. Esto es lo que se sostiene, y cómo se traduce para un jugador ocasional con un teléfono y diez minutos libres.',
    keyTakeaways: [
      'La práctica deliberada, un esfuerzo centrado en debilidades concretas y con retroalimentación, ayuda, pero un gran metaanálisis encontró que explicaba alrededor de una cuarta parte de las diferencias de rendimiento en los juegos, no todas.',
      'Un estudio con más de 850 000 jugadores de un juego en línea relacionó espaciar la práctica, y explorar al principio, con un mejor rendimiento posterior.',
      'Para un jugador ocasional, los ingredientes útiles son pequeños: un objetivo claro, una retroalimentación honesta, un momento de reflexión y tiempo entre sesiones.',
    ],
    sections: {
      'what-deliberate-practice-means': {
        title: 'Qué significa la práctica deliberada',
        paragraphs: [
          'En 1993, Anders Ericsson, Ralf Krampe y Clemens Tesch-Römer publicaron un estudio sobre violinistas de una academia de música de Berlín. Los estudiantes considerados más brillantes habían acumulado, según sus propias estimaciones, muchas más horas de práctica en solitario que los considerados menos brillantes. Los autores propusieron que el rendimiento experto es sobre todo resultado de la práctica deliberada: una actividad exigente diseñada específicamente para mejorar, normalmente guiada por un profesor, centrada en las debilidades y mantenida durante muchos años.',
          'La distinción que importa a todo el mundo es la que hay entre practicar y jugar. La práctica deliberada no consiste simplemente en hacer mucho una actividad. Consiste en trabajar a propósito las partes que se te dan mal y comprobar si has mejorado. Un pianista que toca sus piezas favoritas está disfrutando del piano. Un pianista que toca los mismos cuatro compases despacio hasta que la digitación sale bien está practicando.',
        ],
      },
      'how-much-practice-explains': {
        title: '¿Cuánto explica la práctica?',
        paragraphs: [
          'La idea se popularizó como la «regla de las 10 000 horas», algo que sus autores nunca propusieron como regla. Después, los investigadores se propusieron medir qué parte de las diferencias entre personas explica realmente la práctica. En 2014, Brooke Macnamara, David Hambrick y Frederick Oswald combinaron estudios de distintos ámbitos. La práctica deliberada explicaba alrededor del 26 % de la varianza del rendimiento en los juegos, el 21 % en la música, el 18 % en el deporte, el 4 % en la educación y menos del 1 % en las profesiones. Su conclusión: la práctica es importante, pero no tanto como se había sostenido.',
          'En 2019, Macnamara y Megha Maitra repitieron el estudio original de los violinistas con un diseño de doble ciego. No reprodujeron su hallazgo central, que la práctica acumulada separaba cada nivel de habilidad. La relación entre práctica y habilidad seguía siendo considerable, solo que bastante menor que en 1993.',
          'El ajedrez, pariente cercano de los puzles, es donde la práctica parece pesar más. En dos grandes muestras de jugadores de torneo, Neil Charness y sus colegas encontraron que el estudio serio en solitario era, de las actividades que midieron, el mejor predictor de la puntuación, y que las actividades de ajedrez en conjunto explicaban alrededor del 40 % de la varianza en la habilidad. Los grandes maestros declaraban unas 5000 horas de estudio serio en solitario en sus diez primeros años de juego, casi cinco veces la cifra de los jugadores de nivel intermedio. La práctica importa muchísimo en los juegos; simplemente, no lo es todo.',
        ],
        note: 'La mayoría de estas cifras se basan en lo que la gente calcula de su propia práctica pasada, algo difícil de estimar con precisión. Parte del desacuerdo entre investigadores tiene que ver con las definiciones: lo que se considere práctica deliberada cambia cuánto parece explicar.',
      },
      'lessons-from-online-players': {
        title: 'Lecciones de 854 064 jugadores',
        paragraphs: [
          'La mayor parte de la investigación sobre la práctica depende de que la gente recuerde cuánto practicó. Tom Stafford y Michael Dewar encontraron una forma de evitarlo, usando los registros de 854 064 jugadores de Axon, un sencillo juego en línea que exige percibir y decidir muy deprisa. Con cada partida registrada, pudieron relacionar directamente el historial de práctica con el rendimiento.',
          'Dos hallazgos sirven a cualquiera. Primero, el espaciado importaba: los jugadores que repartían su práctica en un periodo más largo alcanzaban puntuaciones más altas que quienes concentraban la misma cantidad, lo que confirmaba fuera del laboratorio lo que los experimentos mostraban desde hacía tiempo. Segundo, los jugadores cuyas primeras puntuaciones variaban más acababan rindiendo mejor después. Los autores lo relacionaron con el equilibrio entre explorar y explotar: probar enfoques distintos al principio parece compensar, aunque en el momento cueste algunos puntos.',
          'Axon es un juego de reflejos rápido, no un puzle, así que puede que los detalles no se trasladen. Pero los dos hallazgos encajan con lo que se sabe sobre el aprendizaje, y los dos son fáciles de poner en práctica.',
        ],
      },
      'a-ten-minute-practice-plan': {
        title: 'Un plan de práctica de diez minutos al día',
        paragraphs: [
          'Nadie necesita un entrenador para mejorar en los puzles, pero los ingredientes de la práctica deliberada se adaptan bien a pequeña escala.',
        ],
        bullets: [
          'Elige una debilidad por sesión: los movimientos desperdiciados al principio, por ejemplo, o perder el hilo de un plan a mitad de camino.',
          'Usa una retroalimentación honesta. Un objetivo de movimientos es retroalimentación, y también lo es darte cuenta de cuándo recurriste a deshacer.',
          'Dedica treinta segundos, tras despejar un tablero difícil, a preguntarte qué harías distinto la próxima vez.',
          'Espacia la práctica. Varias sesiones cortas a lo largo de una semana valen más que una larga.',
          'Explora al principio. En un tipo de tablero nuevo, prueba aperturas distintas antes de quedarte con una.',
          'No te alejes de tu alcance. Los tableros un poco por encima de tu zona de comodidad enseñan más que los que la superan con mucho.',
        ],
        note: 'El cuarto punto es donde los jugadores ocasionales ya llevan ventaja: unos minutos al día es justo la práctica espaciada que favorece la investigación. El [Tablero del día](/daily) le da a todo el mundo el mismo puzle cada día, un punto fijo natural para ello. Y cuando te atasques, [alejarte un rato](/blog/stuck-on-a-puzzle-incubation-effect) forma parte del plan, no es un fracaso del plan.',
      },
      'keep-it-play': {
        title: 'Que siga siendo un juego',
        paragraphs: [
          'Todo esto tiene un riesgo. La práctica deliberada, tal como la definieron Ericsson y sus colegas, no es agradable en sí misma; es trabajo. Un juego de puzles convertido en un régimen de entrenamiento puede dejar de ser aquello que te encantaba. A la mayoría de los jugadores ocasionales les va mejor una versión ligera: disfrutar de la mayoría de los tableros y practicar con unos pocos.',
          'Es más o menos como está pensado para jugarse OutBrick. Sus 2000 tableros se reparten en 100 capítulos, una forma de plantear el reto que comentamos en [cómo construir una curva de dificultad más amable](/blog/kinder-difficulty-curve). El objetivo de movimientos y las estrellas te dan retroalimentación si la quieres y no estorban si no la quieres. Y los patrones que vas construyendo por el camino, descritos en nuestro artículo sobre el [chunking](/blog/chunking-how-expert-puzzlers-see-patterns), son el verdadero resultado de la práctica: no un número, sino una forma de ver el tablero.',
        ],
      },
    },
    pullQuote: 'La práctica importa muchísimo en los juegos; simplemente, no lo es todo.',
    faqs: [
      { question: '¿Qué es la práctica deliberada?', answer: 'La práctica deliberada es una práctica centrada y exigente, dirigida a debilidades concretas y con retroalimentación, en lugar de repetir sin más una actividad que ya haces bien. La idea procede de la investigación de Anders Ericsson y sus colegas sobre el rendimiento experto.' },
      { question: '¿Es cierta la regla de las 10 000 horas?', answer: 'No como regla. Un metaanálisis de 2014 encontró que la práctica deliberada explicaba alrededor del 26 % de las diferencias de rendimiento en los juegos, y menos en la mayoría de los demás ámbitos. La práctica importa, pero no es el único factor.' },
      { question: '¿Con qué frecuencia debo practicar puzles para mejorar?', answer: 'Las sesiones cortas y espaciadas son una buena apuesta. Un estudio con más de 850 000 jugadores de un juego en línea encontró que repartir la práctica se asociaba a puntuaciones posteriores más altas que concentrarla.' },
      { question: '¿Cómo puedo mejorar en los juegos de puzles?', answer: 'Trabaja una debilidad cada vez, usa retroalimentación como los objetivos de movimientos, reflexiona brevemente después de los tableros difíciles y reparte tus partidas a lo largo de la semana. En tipos de tablero nuevos, prueba enfoques distintos antes de quedarte con uno.' },
    ],
  },

  'aha-moment-insight-brain': {
    title: 'El momento eureka: cómo es el insight en el cerebro',
    dek: 'El clic de un puzle resuelto deja huella en el cerebro. Qué dice la investigación sobre el insight, por qué el eureka suele acertar y cuándo no.',
    imageAlt: 'Peach y Vio a ambos lados de un iPhone que muestra Button Factory en el mapa del Viaje de OutBrick, con ladrillos amarillos y rojos flotando cerca',
    tags: ['insight', 'momento eureka', 'resolución de problemas', 'psicología cognitiva', 'investigación sobre juegos de puzles'],
    intro: 'Hay dos formas de resolver un puzle. A veces avanzas hacia la respuesta paso a paso, con la sensación constante de que te acercas. Otras veces nada parece moverse y, de golpe, la respuesta simplemente está ahí, evidente y completa, con una sacudida de placer. Esa segunda experiencia, el momento eureka, fascina a los psicólogos desde hace un siglo. En los últimos veinte años, la neurociencia ha empezado a mostrar que no es solo una sensación que se superpone al pensamiento corriente, sino un camino distinto hacia una solución.',
    keyTakeaways: [
      'Las soluciones por insight llegan de repente, sin la sensación gradual de acercarse que caracteriza a la resolución paso a paso.',
      'Los registros cerebrales muestran una ráfaga de actividad característica en el lóbulo temporal derecho justo antes de que la gente anuncie una solución por insight.',
      'Las respuestas del eureka aciertan más a menudo que las analíticas, pero la sensación también puede acompañar a respuestas erróneas y hacer que las ideas cercanas parezcan más ciertas de lo que son.',
    ],
    sections: {
      'insight-arrives-without-warning': {
        title: 'El insight llega sin avisar',
        paragraphs: [
          'En un estudio clásico de 1987, Janet Metcalfe y David Wiebe pidieron a varias personas que valoraran a intervalos regulares, mientras trabajaban, lo cerca que se sentían de la solución: una «sensación de calor». En problemas de álgebra corrientes, el calor subía de forma constante a medida que se acercaban a la respuesta. En los problemas de insight, no. La gente se sentía fría, fría, fría y, de pronto, la tenía. Desde dentro, el insight apenas avisaba.',
          'Ese patrón es la huella conductual del insight. Sugiere que el trabajo decisivo ocurre en algún lugar que quien resuelve no puede vigilar, y que la solución llega a la consciencia de una vez y no por partes.',
        ],
      },
      'what-the-brain-does': {
        title: 'Qué hace el cerebro en ese momento',
        paragraphs: [
          'Mark Jung-Beeman, John Kounios y sus colegas usaron acertijos de palabras compuestas para captar el momento mientras sucedía. Cada acertijo da tres palabras, como pine, crab y sauce, y pide una cuarta que forme una palabra compuesta o una expresión con las tres (apple). Tras cada solución, las personas decían si les había llegado por insight o por una búsqueda metódica.',
          'En las imágenes cerebrales, las soluciones por insight iban acompañadas de más actividad en una región del lóbulo temporal derecho, la circunvolución temporal superior anterior, que participa en la conexión de significados lejanos entre sí. En los registros de EEG, la misma zona mostraba una ráfaga repentina de actividad gamma de alta frecuencia que empezaba alrededor de un tercio de segundo antes de que la gente anunciara una solución por insight. Los dos tipos de solución se apoyaban en una red en gran parte compartida, pero el destello del insight tenía su propia huella.',
          'La revisión posterior de John Kounios y Mark Beeman completa el cuadro. En torno a las soluciones por insight, la atención tiende a volverse hacia dentro, como si el cerebro acallara brevemente los estímulos externos para que una idea débil pudiera salir a la superficie. Las personas también difieren en la frecuencia con que resuelven por insight, y esas diferencias se ven incluso en la actividad cerebral en reposo. El campo es joven, y la mayoría de los hallazgos proceden de acertijos de palabras y no visuales, pero el contorno es coherente.',
        ],
      },
      'changing-the-representation': {
        title: 'Cómo se produce el insight: cambiar la representación',
        paragraphs: [
          'Los psicólogos cognitivos explican el insight como un cambio en la forma de representar un problema. Günther Knoblich, Stellan Ohlsson y sus colegas lo pusieron a prueba con aritmética de cerillas: ecuaciones falsas hechas con cerillas que se vuelven ciertas al mover una sola. Los problemas se volvían mucho más difíciles cuando la solución exigía relajar una regla que la gente había dado por hecha sin darse cuenta, o descomponer un chunk conocido, como ver una X como dos cerillas separadas y no como un solo símbolo.',
          'Esto relaciona el insight con el [chunking](/blog/chunking-how-expert-puzzlers-see-patterns). Los chunks que hacen rápidos a los expertos son los mismos que a veces hay que romper para que aparezca una solución nueva. Un callejón sin salida en un tablero suele significar que estás tratando como fijo algo que no lo es: un ladrillo que has decidido que tiene que salir el último, o un carril que has decidido que tiene que quedar libre.',
          'También sugiere por qué ayudan las pausas. Alejarse puede aflojar una suposición lo suficiente como para que la representación cambie, y por eso tantos momentos eureka llegan después de una pausa. Lo vemos en [¿atascado en un puzle? La ciencia de tomarse un respiro](/blog/stuck-on-a-puzzle-incubation-effect).',
        ],
      },
      'can-you-trust-the-aha': {
        title: '¿Te puedes fiar del eureka?',
        paragraphs: [
          'Carola Salvi, Mark Beeman y sus colegas compararon soluciones por insight y soluciones analíticas en cuatro experimentos con problemas verbales, visuales y mixtos. En todos los experimentos, las soluciones que la gente calificaba de insight eran de media más acertadas que sus soluciones analíticas. Entre las respuestas analíticas había proporcionalmente más errores, lo que sugiere que la gente a veces entrega un análisis a medias como si fuera una apuesta, mientras que el insight tiende a llegar completo o a no llegar.',
          'Pero la sensación no es una garantía. Amory Danek y Jennifer Wiley pidieron a 70 personas que averiguaran cómo se hacían unos trucos de magia y que valoraran cada una de sus soluciones. Algunas soluciones erróneas también llegaban con una experiencia eureka, lo que las investigadoras llamaron falsos insights. Las soluciones correctas tendían a traer sensaciones más fuertes de placer, de brusquedad y de certeza, pero el solapamiento era real.',
          'Ruben Laukkonen y sus colegas mostraron hasta dónde puede desviarse la sensación. En un experimento prerregistrado con 300 participantes, las afirmaciones se juzgaban más probablemente ciertas cuando aparecían junto a un anagrama que la persona acababa de resolver, incluso cuando las afirmaciones eran falsas, y el efecto era mayor cuando la gente decía haber tenido un eureka. El brillo del insight puede derramarse sobre lo que tenga cerca.',
        ],
      },
      'insight-on-a-puzzle-board': {
        title: 'El insight en un tablero de puzle',
        paragraphs: [
          'En un puzle deslizante, la lección es disfrutar del eureka y luego comprobarlo. Un movimiento que de pronto parece brillante suele serlo, pero no cuesta nada seguirlo dos pasos por delante antes de comprometerte, sobre todo cuando hay un objetivo de movimientos en juego.',
          'También puedes provocar el clic. En un callejón sin salida, enumera las suposiciones que estás haciendo sobre el tablero, en voz alta si te ayuda: este ladrillo tiene que salir el último, ese carril tiene que quedar abierto, la llave tiene que ir primero. Después descártalas una a una y vuelve a mirar. Es la relajación de restricciones que describieron Knoblich y Ohlsson, hecha a propósito.',
          'Los diseñadores de puzles construyen los tableros en torno a ese clic. En OutBrick, los tableros más satisfactorios suelen ser aquellos en los que un deslizamiento que habías descartado resulta desbloquearlo todo, porque cambia lo que creías que planteaba el tablero. Las reglas son sencillas a propósito, los ladrillos se deslizan hasta que algo los detiene y salen por la puerta de su color, así que la sorpresa vive en la disposición y no en reglas ocultas. Los juegos que dejan sitio a ese tipo de descubrimiento enseñan a través de la curiosidad y no de las instrucciones, un tema que exploramos en [cuando un juego enseña curiosidad sin sermones](/blog/games-teach-curiosity-without-lecture).',
          'Si quieres ir tú mismo en busca del clic, el [tablero en el navegador](/play) es una forma rápida de encontrarte con un tablero que nunca has visto.',
        ],
      },
    },
    pullQuote: 'El brillo del insight puede derramarse sobre lo que tenga cerca.',
    faqs: [
      { question: '¿Qué pasa en el cerebro durante un momento eureka?', answer: 'Los estudios con acertijos de palabras encontraron más actividad en una región del lóbulo temporal derecho en las soluciones por insight, y una ráfaga de actividad gamma de alta frecuencia en esa zona alrededor de un tercio de segundo antes de que la gente anunciara la respuesta.' },
      { question: '¿Las soluciones por insight son más acertadas que las analíticas?', answer: 'Normalmente sí. En cuatro experimentos, las respuestas que la gente calificaba de insight eran de media más acertadas que sus respuestas analíticas, aunque la sensación de eureka también puede acompañar a respuestas erróneas.' },
      { question: '¿Por qué las soluciones me vienen de repente a la cabeza?', answer: 'El insight parece implicar un cambio en la forma de representar el problema, como abandonar una suposición o descomponer un patrón conocido. Como ese cambio ocurre fuera de la consciencia, la respuesta parece llegar de una vez.' },
      { question: '¿Un momento eureka puede estar equivocado?', answer: 'Sí. En un estudio en el que la gente trataba de averiguar cómo se hacían unos trucos de magia, algunas soluciones erróneas llegaron con una experiencia eureka, aunque las correctas tendían a sentirse más fuertes y más seguras.' },
    ],
  },

  'why-finish-a-hard-puzzle': {
    title: 'Puzles y perseverancia: por qué acabar un tablero difícil',
    dek: 'Un esfuerzo que acaba en solución enseña más que una victoria fácil. Qué dice la investigación sobre dificultades deseables, esfuerzo y fracaso productivo.',
    imageAlt: 'Poppy y Zippy guiñando un ojo junto a un iPhone que muestra Celebration Square en el mapa del Viaje de OutBrick, sobre una cuadrícula de ladrillos índigo',
    tags: ['dificultades deseables', 'aprender de los errores', 'resolución de problemas', 'motivación', 'investigación sobre juegos de puzles'],
    intro: 'Todo jugador de puzles conoce el tablero que no cede. Has probado los movimientos evidentes, luego los menos evidentes, y la tentación es saltártelo, buscar la solución o dejar el juego para siempre. A veces parar es lo correcto. Pero hay argumentos, respaldados por bastante investigación sobre el aprendizaje, para quedarse con un tablero difícil un poco más de lo que resulta cómodo. El esfuerzo no es una tarifa que pagas antes de empezar a aprender. A menudo es el aprendizaje.',
    keyTakeaways: [
      'Las condiciones que hacen que aprender parezca más difícil, como espaciar la práctica o deducir las respuestas por ti mismo, suelen producir un mejor aprendizaje a largo plazo.',
      'Lo bien que parece que lo haces mientras practicas es una guía poco fiable de cuánto estás aprendiendo.',
      'El esfuerzo puede hacer más valioso un resultado, pero en una serie de estudios solo cuando el esfuerzo terminaba en éxito, así que lo ideal es un tablero difícil que puedas terminar.',
    ],
    sections: {
      'desirable-difficulties': {
        title: 'Dificultades deseables',
        paragraphs: [
          'Robert y Elizabeth Bjork acuñaron el término dificultades deseables para una familia de hallazgos contraintuitivos: algunas condiciones que frenan el aprendizaje y lo hacen parecer más difícil producen una mejor retención y transferencia a largo plazo. Espaciar la práctica en vez de concentrarla, mezclar distintos tipos de problemas, ponerte a prueba en vez de releer y generar una respuesta en vez de recibirla hecha parecen menos eficientes en el momento y tienden a funcionar mejor después.',
          'En su panorama de 2020 insisten en la palabra deseables. Una dificultad solo ayuda si quien aprende puede responder a ella con éxito. Un problema que te supera con mucho no es una dificultad deseable; es un muro. El punto justo es un reto que exige un esfuerzo real y sigue estando a tu alcance.',
          'Para quien juega a puzles, la traducción es sencilla. Un tablero que te hace pensar varios minutos, probar tres ideas y descartar dos está haciendo lo que describen las dificultades deseables. Un tablero que te tiene veinte minutos probando al azar, no; ha dejado de darte algo a lo que responder.',
        ],
      },
      'learning-versus-performance': {
        title: 'Sentirse atascado no es lo mismo que no aprender',
        paragraphs: [
          'La dificultad sienta mal en parte porque juzgamos nuestro aprendizaje por nuestro rendimiento del momento. Nicholas Soderstrom y Robert Bjork revisaron décadas de investigación que muestran que ambas cosas pueden separarse. Se puede aprender sin ningún cambio visible en el rendimiento, y las condiciones que mejoran el rendimiento durante la práctica pueden no producir un aprendizaje duradero. La gente confunde a menudo una práctica fluida y fácil con una señal de que está aprendiendo bien.',
          'En un tablero de puzle, esto libera. Los minutos que pasas atascado, probando enfoques que no funcionan, no se pierden solo porque el tablero siga sin resolver. Estás trazando un mapa de qué movimientos no llevan a ninguna parte y por qué, y ese mapa es parte de lo que hace que el siguiente tablero difícil parezca más fácil.',
        ],
      },
      'productive-failure': {
        title: 'El fracaso productivo',
        paragraphs: [
          'La investigación educativa ha puesto a prueba una versión más radical de la idea. En el fracaso productivo, desarrollado por Manu Kapur, los alumnos intentan resolver problemas antes de que se les enseñe cómo, normalmente fracasan y después reciben la explicación. Un metaanálisis de 2021 de Tanmay Sinha y Kapur combinó 53 estudios y encontró una ventaja moderada de resolver primero frente a explicar primero, y mayor cuando el diseño seguía de cerca los principios del fracaso productivo.',
          'El mismo análisis encontró límites que conviene conocer. Con niños más pequeños, más o menos de segundo a quinto de primaria, y con habilidades generales no ligadas a una materia, explicar primero salía ganando. El esfuerzo no es bueno automáticamente. Funciona cuando quien aprende tiene suficiente base y cuando lo que viene después le ayuda a entender lo que intentó.',
          'Los puzles traen incorporada una versión de ese segundo paso. Cuando por fin encuentras la solución de un tablero con el que te has peleado, tus intentos fallidos cobran sentido de repente. Ves por qué se quedó corto cada uno, y ese es el momento en que el esfuerzo se convierte en comprensión.',
        ],
      },
      'why-finishing-matters': {
        title: 'Por qué importa terminar',
        paragraphs: [
          'El esfuerzo suele tratarse como un coste, algo que la gente evita cuando puede. Michael Inzlicht, Amitai Shenhav y Christopher Olivola revisaron las pruebas de que también es una fuente de valor: un mismo resultado puede resultar más gratificante cuando ha costado esfuerzo, y la gente a veces elige cosas precisamente porque son difíciles. Lo llaman la paradoja del esfuerzo.',
          'Hay una condición, y es la que da título a este artículo. Michael Norton, Daniel Mochon y Dan Ariely descubrieron que la gente valoraba más de lo normal las cosas que había hecho ella misma, desde cajas de IKEA hasta figuras de papiroflexia y construcciones de Lego. Pero el efecto desaparecía cuando no conseguían terminar, o cuando construían algo y luego lo desmontaban. El trabajo solo llevaba al cariño cuando terminaba en algo acabado.',
          'Ese es el argumento para terminar un tablero difícil en lugar de abandonarlo al ochenta por ciento. La satisfacción de despejar un tablero difícil es real, y parece depender de despejarlo.',
        ],
      },
      'perseverance-without-the-grind': {
        title: 'Perseverancia sin machacarse',
        paragraphs: [
          'La perseverancia se ha popularizado con el nombre de grit, y esa idea merece cierta cautela. Marcus Credé y sus colegas combinaron 88 muestras con más de 66 000 personas y encontraron que el grit solo se relacionaba moderadamente con el rendimiento y muy estrechamente con la responsabilidad, un rasgo de personalidad conocido desde hace mucho. De las dos partes del grit, la perseverancia en el esfuerzo salía mejor parada que la constancia de intereses. No rendirse ayuda; simplemente, no es un rasgo mágico.',
          'La versión práctica es modesta. Quédate con un tablero difícil más allá del primer arrebato de frustración. Cuando notes que te repites, [aléjate un rato](/blog/stuck-on-a-puzzle-incubation-effect) en vez de abandonar. Usa las herramientas que te da el juego para aprender de tus errores, que es [para lo que sirve deshacer](/blog/why-undo-makes-you-a-better-puzzle-solver). Y si hoy un tablero de verdad te supera, déjalo para otro día; una dificultad deseable tiene que ser una que puedas superar.',
          'OutBrick está diseñado para que perseverar no cueste mucho. No hay reloj, el primer deshacer de cada tablero es gratis y solo se pierde una vida cuando un intento termina sin despejar el tablero, nunca por abrir ni por despejar un tablero; las condiciones completas están en el [registro de juego limpio de la página de inicio](/#fair). Los 2000 tableros los despejó un solucionador antes de publicarse, así que un tablero que parece imposible tiene salida. El [Tablero del día](/daily) es un buen sitio para practicar: es el mismo durante todo el día, así que, si se te resiste en el desayuno, seguirá esperándote más tarde.',
        ],
      },
    },
    pullQuote: 'El trabajo solo llevaba al cariño cuando terminaba en algo acabado.',
    faqs: [
      { question: '¿Es mejor pelearse con un puzle o buscar la respuesta?', answer: 'Pelearse primero suele ayudar, siempre que el problema esté a tu alcance. La investigación sobre las dificultades deseables y el fracaso productivo sugiere que intentar resolver un problema antes de ver la solución suele llevar a un mejor aprendizaje a largo plazo.' },
      { question: '¿Por qué resolver un puzle difícil es tan satisfactorio?', answer: 'El esfuerzo puede añadir valor a un resultado, así que la gente suele apreciar los logros que le han costado trabajo. Ese efecto parece depender de terminar: en una serie de estudios desaparecía cuando la gente no conseguía acabar lo que estaba construyendo.' },
      { question: '¿Cuándo debo rendirme con un puzle difícil?', answer: 'Cuando repites los mismos intentos sin aprender nada nuevo, tómate un descanso en lugar de abandonar. Si después de eso un tablero te sigue superando con mucho, déjalo para otro día, porque una dificultad solo ayuda si al final puedes superarla.' },
      { question: '¿Está mal buscar la solución de un puzle?', answer: 'No siempre. Si has trabajado de verdad en un tablero y ya no estás aprendiendo nada, una solución puede convertir el esfuerzo en comprensión, igual que la explicación después del fracaso productivo. Ayuda más después de un intento real, no antes.' },
      { question: '¿El grit predice el éxito?', answer: 'Solo de forma moderada. Un metaanálisis de 88 muestras encontró que el grit se relacionaba modestamente con el rendimiento y muy estrechamente con la responsabilidad, y que la perseverancia en el esfuerzo era la parte más útil.' },
    ],
  },
};
