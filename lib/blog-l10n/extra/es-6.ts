import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
const outbrick =
  'https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465';
const blockOut =
  'https://apps.apple.com/us/app/block-out-color-sort-puzzle/id6752672568';
const jam = 'https://apps.apple.com/us/app/color-block-jam/id6504332779';
const buster =
  'https://apps.apple.com/us/app/block-buster-no-timer/id6745272388';
const refs = {
  outbrick: `Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en [la ficha de OutBrick](${outbrick}).`,
  blockOut: `Grand Games A.Ş. (n.d.). Block Out! - Color Sort Puzzle [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en [la ficha de Block Out](${blockOut}).`,
  jam: `Rollic Games. (n.d.). Color Block Jam [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en [la ficha de Color Block Jam](${jam}).`,
  buster: `Lion Studios Plus. (n.d.). Block Buster - No Timer [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en [la ficha de Block Buster](${buster}).`,
};
export const es6: ExtraGuides = {
  'outbrick-vs-block-out-puzzle': {
    title: 'OutBrick o Block Out Puzzle: ¿cuál encaja contigo?',
    dek: 'Compara OutBrick y Block Out de Grand Games con sus fichas oficiales: mecánicas, juego sin conexión, accesibilidad y costes para elegir con criterio.',
    imageAlt:
      'Ilustración de OutBrick con un teléfono, ladrillos de colores y dos personajes de ladrillo sobre una cuadrícula azul marino',
    tags: [
      'puzles de ordenar bloques',
      'juegos de puzles',
      'diseño de juegos',
      'accesibilidad',
      'juego sin conexión',
    ],
    intro:
      'Un bloque rojo está junto a una puerta roja, pero otro bloque estorba. El puzle no consiste en reconocer la pareja, sino en decidir qué debe moverse primero. Esa idea compartida invita a comparar OutBrick con Block Out! - Color Sort Puzzle de Grand Games. La pregunta útil es con qué versión de ese problema quieres pasar el tiempo. Esta guía compara sus descripciones publicadas, consultadas el 30 de septiembre de 2026. Creamos OutBrick y tenemos motivos para recomendarlo. También debemos distinguir las funciones documentadas de las preferencias y de lo que desconocemos. Es una guía de elección basada en fuentes, no un informe de pruebas directas.',
    keyTakeaways: [
      'Ambos juegos se centran en llevar bloques de colores a salidas del mismo color; Block Out anuncia expresamente ascensores móviles y generadores de bloques.',
      'Ambos anuncian juego sin conexión. OutBrick publica además declaraciones de accesibilidad; que un competidor no las publique no demuestra que carezca de esas funciones.',
      'Elige según el reto y el apoyo que necesitas. Una descarga gratuita o un modo sin tiempo no significan vidas ilimitadas ni ausencia de compras.',
    ],
    sections: {
      'shared-loop-different-priorities': {
        title: 'Una idea compartida y diferencias que conviene comparar',
        paragraphs: [
          `Grand Games describe [Block Out! - Color Sort Puzzle](${blockOut}) como un juego de deslizar bloques hacia puertas del mismo color, con distribuciones cambiantes, ascensores móviles y generadores de bloques. Son motivos concretos para investigarlo si te gustan los tableros que evolucionan con obstáculos dinámicos. Su descripción también anima a moverse deprisa. No convertimos esa expresión en una afirmación sobre el temporizador o las reglas exactas de todos los niveles (Grand Games A.Ş., n.d.).`,
          `La [ficha de OutBrick](${outbrick}) describe un puzle de deslizar y ordenar por colores con 2000 tableros comprobados mediante un solucionador. Desde la versión 5.1, OutBrick se juega con Slide & Match: un ladrillo que deslizas se detiene donde lo sueltas, vuelve a casa por la puerta de su color o se intercambia con un vecino, y tres de un color en línea desaparecen. En sus tableros clásicos, que se pueden seguir jugando en el navegador, un ladrillo se desliza hasta que un obstáculo lo detiene, así que colocar otro ladrillo forma parte del plan: el obstáculo puede ser un freno útil. Consulta nuestra [guía de puzles de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) para empezar, sin suponer que todos los juegos con capturas parecidas se mueven igual (Hamdi, n.d.).`,
          'Al comparar, conviene separar lo que exige el tablero de la dificultad que tú encuentras. Aplicamos esa distinción sin puntuar estas aplicaciones. Un ascensor puede ser justo la novedad que busca una persona y una interrupción molesta para otra. La comprobación de un solucionador demuestra que existe una solución con unas reglas determinadas, no que a todo el mundo le guste descubrirla.',
          'Empieza con una preferencia concreta: ¿quieres interpretar una distribución estable, reaccionar a obstáculos cambiantes o alternar ambas experiencias? Esa pregunta informa más que preguntar qué juego es más difícil. Uno difícil puede encajar mejor si exige la habilidad que quieres practicar; uno fácil puede resultar incómodo si la interfaz o el ritmo te estorban.',
        ],
      },
      'choose-your-kind-of-challenge': {
        title: 'Elige el reto que de verdad buscas',
        paragraphs: [
          'La investigación invita a tomar las preferencias en serio. En cuatro estudios, Ryan et al. (2006) relacionaron la competencia y la autonomía percibidas en los juegos con el disfrute y las preferencias. Eso no revela cuál de estas aplicaciones divierte más. Sí sugiere una comprobación útil: ¿entiendes lo que pide el juego y puedes elegir cómo abordarlo? El mismo tablero puede apetecer cuando tienes tiempo para pensar y cansar cuando intentas responder a un mensaje.',
          'El reto no es un defecto. Abuhamdeh y Csikszentmihalyi (2012), al estudiar ajedrez por Internet y actividades cotidianas, hallaron que la relación entre reto y disfrute dependía de la motivación y del tipo de actividad. Eso no demuestra que los relojes sean perjudiciales ni que los juegos lentos sean mejores. Apoya una recomendación condicional: prioriza la planificación si eso te gusta y la acción si actuar rápido forma parte del placer.',
          'Las notas actuales del App Store de OutBrick dicen que la versión 4.2 retiró Rush de todo el juego. Los tableros mantienen límites de movimientos, así que jugar sin tiempo sigue exigiendo planificación. Si quieres evitar una cuenta atrás, lee nuestra [comparación de puzles de ordenar bloques sin temporizador](/blog/no-timer-block-sort-puzzles-iphone) (Hamdi, n.d.). Si prefieres obstáculos dinámicos, los ascensores y generadores anunciados por Block Out lo convierten en una opción razonable para probar.',
          'Una buena primera sesión responde a una pregunta modesta: ¿me apetece otro tablero de este tipo? No fuerces un veredicto tras un único intento frustrante. Aprender una regla de movimiento y preferirla son decisiones distintas. Tampoco tienes obligación de perseverar porque el juego tenga un mapa atractivo, muchos niveles o un gran público.',
        ],
      },
      'feedback-and-earned-progress': {
        title: 'Busca respuestas que hagan comprensible el progreso',
        paragraphs: [
          'Imagina mover un ladrillo azul para crear un punto de parada para uno rojo. Si el juego muestra con claridad dónde se detiene el azul, la siguiente ruta del rojo se entiende. Si el movimiento te sorprende, ahora toca aprender la regla. Es una observación útil en cualquiera de las dos aplicaciones. No hemos medido su respuesta, comparado la latencia de entrada ni contado movimientos accidentales.',
          'Klimmt et al. (2007) estudiaron el disfrute y la influencia percibida en un experimento en línea con 500 participantes. La influencia percibida importaba, mientras que la relación con el control era más compleja que «cuanto más, mejor». Al elegir un puzle, eso invita a observar si tus acciones tienen consecuencias comprensibles. Es una aplicación editorial de sus resultados, no una prueba de que un juego tenga mejores controles.',
          'Iacovides et al. (2015) usaron varios estudios de caso para explorar cómo interactúan la acción, la comprensión y la implicación al jugar. En esos relatos importaban los avances en la comprensión y sentirse responsable del progreso. Eso ayuda a entender por qué superar un tablero por tus medios puede sentirse distinto de pasarlo con una ayuda desconocida. No demuestra beneficios para la inteligencia ni exige renunciar a las ayudas.',
          'Intenta expresar qué te enseñó el último intento: «Necesito vaciar ese espacio antes de mover el ladrillo largo». Si puedes decirlo, el intento fallido te ha dado información. Nuestro artículo sobre [leer un puzle antes del primer movimiento](/blog/how-to-read-a-puzzle-before-moving) desarrolla ese hábito. Si no entiendes por qué se rechazó un movimiento, busca el tutorial o la ayuda antes de atribuirte el error.',
        ],
      },
      'offline-accessibility-and-costs': {
        title: 'Juego sin conexión, accesibilidad y coste de una sesión',
        paragraphs: [
          'Ambas fichas oficiales anuncian juego sin conexión (Grand Games A.Ş., n.d.; Hamdi, n.d.). Por tanto, eso no es un motivo exclusivo para elegir OutBrick frente a Block Out. Queda una pregunta práctica en ambos: ¿qué servicios siguen necesitando conexión? Descarga y abre el juego antes de viajar y comprueba el tablero que vas a usar. Anunciar tableros sin conexión no promete anuncios, compras o sincronización sin Internet.',
          'OutBrick declara compatibilidad con VoiceOver, diferenciación sin depender solo del color, movimiento reducido e interfaz oscura (Hamdi, n.d.). Son declaraciones del desarrollador, no una auditoría independiente. Block Out no había indicado compatibilidad de accesibilidad cuando se consultó su ficha. Es una falta de información, no una prueba de incompatibilidad. Nuestra [comparación de accesibilidad para ordenar colores](/blog/color-block-jam-accessible-alternative) explica qué comprobar si esas funciones son esenciales.',
          'Ambos se descargan gratis, con compras integradas y publicidad declarada. OutBrick también tiene vidas y vídeos con recompensa opcionales. Lee la descripción actual de cada compra antes de decidir qué elimina o desbloquea; esta guía no promete eliminar anuncios para siempre ni reintentos ilimitados. Una función anunciada debe despertar tu interés, no sustituir tu decisión de gasto.',
          'Fija un presupuesto sencillo para empezar: no gastar mientras aprendes la regla. Observa si te parece bien parar cuando acaba la sesión gratuita. Si comparas para un niño u otro familiar, valorad esas interrupciones juntos. Una recomendación justa incluye el coste de continuar, no solo el de instalar.',
        ],
      },
      'our-conditional-recommendation': {
        title: 'Nuestra recomendación: comprueba el encaje y descarga',
        paragraphs: [
          'Vale la pena considerar OutBrick si buscas su regla de planificación Slide & Match, su colección de tableros comprobados y sus funciones de accesibilidad documentadas. Block Out merece atención si te entusiasman sus ascensores, generadores y distribuciones dinámicas anunciados. Ninguna conclusión es una clasificación universal. No hemos comprobado que un competidor carezca de una función simplemente porque su ficha no la mencione.',
          'Puedes probar la idea clásica de OutBrick en [un tablero jugable en el navegador](/play). El navegador conserva la regla anterior de deslizar y detenerse, así que es una introducción útil a la idea de las puertas de color, no un sustituto completo de la aplicación instalada: no valida todos los modos nativos, compras o funciones de accesibilidad. Si te gusta preparar una ruta en vez de arrastrar un bloque directamente a su destino, tienes un motivo concreto para seguir explorando.',
          `¿Quieres probarlo? [Descarga OutBrick en el App Store de Apple](${appStoreUrl('journal-block-out')}) y revisa allí los requisitos y compras actuales. Si la accesibilidad decide tu elección, consulta primero nuestra [información de accesibilidad](/accessibility) y comprueba la lista en tu dispositivo. Descargarlo es empezar a comprobar si encaja, no demostrar que cubre todas tus necesidades.`,
          'Mantén la decisión abierta. Es razonable disfrutar de distintos puzles en distintos momentos, o guardar uno para sesiones rápidas y otro para pensar con calma. La mejor comparación aclara tus preferencias sin obligarte a coincidir con el estudio que la publica.',
        ],
      },
      'product-sources': {
        title: 'Fuentes de producto y alcance de la comparación',
        paragraphs: [
          'Las afirmaciones de producto anteriores proceden de fichas estadounidenses del App Store consultadas el 30 de septiembre de 2026. Las funciones, disponibilidad y condiciones de compra pueden cambiar. Las referencias científicas explican los criterios de comparación; ninguna probó ni avaló estas aplicaciones.',
          refs.blockOut,
          refs.outbrick,
        ],
      },
    },
    pullQuote:
      'Al comparar, conviene separar lo que exige el tablero de la dificultad que tú encuentras.',
    faqs: [
      {
        question: '¿OutBrick es el mismo juego que Block Out Puzzle?',
        answer:
          'No. OutBrick es de Mourad Hamdi y Block Out! - Color Sort Puzzle es de Grand Games A.Ş. Comparten la idea de deslizar hacia una puerta correspondiente, pero difieren sus mecánicas y descripciones publicadas.',
      },
      {
        question: '¿OutBrick y Block Out se pueden jugar sin conexión?',
        answer:
          'Ambas descripciones oficiales del App Store lo anuncian. Eso no demuestra que las compras, publicidad o sincronización del progreso funcionen sin conexión.',
      },
      {
        question: '¿Qué juego conviene más a personas con daltonismo?',
        answer:
          'OutBrick declara diferenciación sin depender solo del color. La falta de una declaración de Block Out no demuestra ausencia de compatibilidad; evalúa las aplicaciones instaladas según tus necesidades.',
      },
      {
        question: '¿OutBrick no tiene temporizadores ni compras?',
        answer:
          'Sus notas actuales dicen que la versión 4.2 eliminó todos los límites de tiempo, pero conserva límites de movimientos, vidas y compras integradas. Jugar sin tiempo no implica reintentos ilimitados ni ausencia de ofertas de compra.',
      },
    ],
  },
  'no-timer-block-sort-puzzles-iphone': {
    title: 'Puzles de ordenar bloques sin tiempo para iPhone',
    dek: 'Compara las restricciones publicadas de OutBrick, Block Buster - No Timer y Color Block Jam. Descubre qué promete jugar sin tiempo y qué no.',
    imageAlt:
      'Un teléfono con ilustraciones de OutBrick, personajes de ladrillo y ladrillos de colores flotantes sobre fondo azul marino',
    tags: [
      'puzles de ordenar bloques',
      'juegos de puzles',
      'hábitos de juego',
      'diseño de dificultad',
      'juego sin conexión',
    ],
    intro:
      'Ya has visto el movimiento que quieres hacer, pero necesitas un momento para comprobar qué ocurrirá después. Una cuenta atrás hace costoso ese momento. Un límite de movimientos te deja pensar y te cobra cuando actúas. Esa diferencia es el verdadero motivo para buscar un puzle de ordenar bloques sin tiempo en iPhone. No buscas un juego sin reto. Comparamos las promesas publicadas de OutBrick, Block Buster - No Timer y Color Block Jam y ofrecemos una forma de elegir sin confundir la ausencia de tiempo con movimientos, vidas o compras gratis ilimitados. Las fichas se consultaron el 30 de septiembre de 2026; no son pruebas directas de rendimiento.',
    keyTakeaways: [
      'Una cuenta atrás limita el tiempo para pensar; un límite de movimientos restringe las acciones. Ninguno resulta automáticamente más fácil o agradable para todos.',
      'Block Buster anuncia expresamente juego sin temporizador. Las notas actuales de OutBrick 4.2 también dicen que se retiraron los límites de tiempo de todo el juego.',
      'Comprueba por separado el acceso sin conexión, el coste de reiniciar y las compras. No tener temporizador no demuestra vidas ilimitadas ni ausencia de anuncios.',
    ],
    sections: {
      'what-no-timer-actually-means': {
        title: 'Qué significa realmente «sin temporizador»',
        paragraphs: [
          'Un tablero sin tiempo permite pausar entre decisiones sin consumir una cuenta atrás visible. Aun así puede penalizar movimientos erróneos, limitar acciones o reintentos y ofrecer ayuda de pago. Son restricciones distintas. Si buscas una única frase, puedes encontrar el ritmo adecuado y seguir sin disfrutar de cómo el juego trata el fracaso.',
          'Imagina un pasillo bloqueado por dos piezas. Debes apartar una, deslizar la otra hacia fuera y restablecer un punto de parada. Con un límite de movimientos, importa si la secuencia gasta demasiadas acciones. Con una cuenta atrás también importa cuánto tardas en verla y ejecutarla. La misma distribución espacial puede ofrecer dos experiencias distintas.',
          'Isaksen et al. (2017) modelaron por separado estrategia y destreza en simulaciones de Tetris y Puzzle Bobble. Su trabajo aporta vocabulario para distinguir un plan de su ejecución. Es investigación computacional de diseño, no un ensayo con personas que demuestre que jugar sin tiempo es más saludable o mejora el razonamiento. Lo usamos para aclarar la elección, no para asignar puntuaciones científicas a aplicaciones.',
          'Escribe qué restricción quieres quitar. «Quiero tiempo para examinar el tablero» es más concreto que «quiero algo relajante». Quizá también quieras reintentos generosos, una interfaz legible o jugar sin conexión; comprueba cada cosa por separado. Nuestra [guía sobre qué hace tranquilo un puzle](/blog/relaxing-puzzle-games-what-makes-one-calm) contempla esos otros ingredientes.',
        ],
      },
      'three-official-listings': {
        title: 'Tres juegos, tres puntos de partida publicados',
        paragraphs: [
          `[Block Buster - No Timer](${buster}), de Lion Studios Plus, promete ausencia de temporizador en el propio título. También anuncia juego adecuado sin conexión, potenciadores y modo oscuro. Es una alternativa pertinente si tu primera necesidad es tiempo para pensar; OutBrick no es el único juego de esta clase que merece atención (Lion Studios Plus, n.d.).`,
          `[OutBrick](${outbrick}) ofrece tableros de deslizar hacia puertas correspondientes, límites de movimientos y una colección comprobada por un solucionador. Sus notas actuales de la versión 4.2 dicen que Rush se retiró de todo el juego y que sigue el límite de movimientos por tablero. Es una promesa publicada de jugar sin tiempo, junto con restricciones de acciones y reintentos (Hamdi, n.d.).`,
          `[Color Block Jam](${jam}), de Rollic Games, describe llevar bloques a puertas correspondientes y planificar antes de que se acabe el tiempo. Eso lo convierte en una referencia con tiempo útil para esta elección. Si ejecutar rápido un plan te divierte, su descripción puede atraerte más que no tener temporizador. No afirmamos que todas las pantallas o niveles tengan una restricción idéntica (Rollic Games, n.d.).`,
          'Estas descripciones son puntos de partida, no una matriz exhaustiva de funciones. No hemos probado todos los niveles, versiones, dispositivos o interrupciones. Antes de decidir si una aplicación encaja, mira la cabecera del tablero y las condiciones de fallo reales. El nombre de un modo o una captura no revelan el coste completo de reiniciar.',
        ],
      },
      'time-to-understand': {
        title: 'Por qué entender puede importar más que tener niveles fáciles',
        paragraphs: [
          'Una frustración habitual es tener que mover antes de entender qué hará el movimiento. En un puzle deslizante quizá debas descubrir si una pieza se detiene en una casilla vacía, contra otra pieza o solo en el borde. Quitar la cuenta atrás te deja investigar eso. No resuelve el puzle por ti.',
          'Iacovides et al. (2015) exploraron bloqueos y avances mediante varios estudios de caso de juego. Sus hallazgos relacionan la implicación con desarrollar comprensión y sentirse responsable del progreso. Es evidencia cualitativa sobre la experiencia, no prueba de que un ritmo concreto mejore el aprendizaje. Sí invita a valorar el momento en que «no sé qué pasó» se convierte en «sé qué probar».',
          'En un tablero con límite de movimientos, usa el tiempo para nombrar el propósito de una acción. «Esto pone un freno detrás del ladrillo largo» es un plan; «quizá ayude» es un experimento. Ambos pueden servir. Distinguirlos permite decidir si gastas un movimiento en probar una regla o ejecutar una ruta. Nuestra [guía para leer el tablero antes de mover](/blog/how-to-read-a-puzzle-before-moving) ofrece un método más amplio.',
          'Una cuenta atrás también puede divertir cuando conoces la regla. Repetir eficazmente una secuencia conocida proporciona un placer distinto de descubrirla despacio. No confundas una preferencia personal con un veredicto sobre diseño. Si quieres ambas experiencias, pueden servir modos opcionales; comprueba que el modo deseado esté disponible donde y cuando lo usarás.',
        ],
      },
      'challenge-with-room-to-choose': {
        title: 'Conserva el reto y elige la presión',
        paragraphs: [
          'A menudo se trata «sin tiempo» como sinónimo de «fácil», pero un plan espacial difícil puede seguir siéndolo toda la tarde. Puedes tener tiempo ilimitado para pensar y necesitar ver una dependencia que pasaste por alto. A la inversa, un plan sencillo puede exigir mucho si debes ejecutarlo rápido. La preferencia relevante es de dónde viene la exigencia.',
          'Abuhamdeh y Csikszentmihalyi (2012) hallaron que la relación entre disfrute y reto dependía de la motivación y del tipo de actividad en estudios de ajedrez por Internet y muestreo de experiencias. Es un contrapeso útil a creer que la presión siempre es mala. No compararon estos juegos móviles ni establecieron un nivel ideal universal de reto.',
          'Ryan et al. (2006) relacionaron autonomía y competencia percibidas con disfrute y preferencias en cuatro estudios de juegos. Pregúntate si las reglas permiten la experiencia que buscas. Si quieres examinar despacio, una cuenta atrás obligatoria puede ir contra esa intención. Si quieres probar la ejecución rápida, quitar el reloj puede quitar algo que valoras.',
          'Haz una pequeña prueba personal: juega unos tableros sin comprar ayuda y anota qué te animó a seguir o parar. ¿El puzle, la velocidad, una regla confusa o la interrupción tras fallar? Es un ejercicio práctico de observación, no una evaluación clínica. Una sesión puede aclarar una preferencia sin demostrar nada sobre el bienestar a largo plazo.',
        ],
      },
      'pre-download-checklist': {
        title: 'Qué comprobar antes de descargar para jugar sin prisa',
        paragraphs: [
          'Primero, comprueba el reloj. ¿El tablero no tiene tiempo por defecto o debes elegir un modo? ¿Puedes pausar y volver? No hemos probado el comportamiento en segundo plano ni al reanudar; no lo deduzcas de una etiqueta sin temporizador. Un tablero así puede resultar incómodo si la sesión no sobrevive a tus interrupciones habituales.',
          'Segundo, comprueba el coste de equivocarte: límites de movimientos, vidas, reinicios y condiciones de potenciadores. Las tres fichas declaran compras integradas. OutBrick también tiene vidas y anuncios con recompensa opcionales (Hamdi, n.d.). No prometemos reintentos ilimitados, acceso ininterrumpido ni ayuda gratis. Decide si aceptas esperar o parar antes de que aparezca una oferta.',
          'Tercero, comprueba el entorno. OutBrick y Block Buster anuncian juego sin conexión, pero no garantizan que todas las funciones conectadas funcionen así (Hamdi, n.d.; Lion Studios Plus, n.d.). Descarga antes de viajar y consulta nuestra [guía de puzles sin conexión para iPhone](/blog/offline-puzzle-games-iphone). Si son esenciales el reconocimiento del color, el movimiento o la salida de voz, lee nuestra [información de accesibilidad](/accessibility) y prueba en tu dispositivo.',
          `Por último, prueba la mecánica. [Juega un tablero de OutBrick en el navegador](/play) para ver la regla clásica de deslizar y detenerse (el juego del App Store ahora añade intercambios y combinaciones) y [descarga OutBrick en el App Store de Apple](${appStoreUrl('journal-no-timer')}) si te atrae esa planificación. Los modos nativos y la accesibilidad requieren comprobaciones aparte en la aplicación instalada. Si priorizas una promesa explícita de no tener temporizador, Block Buster también merece estar en tu lista.`,
          'El resultado más útil es entender las restricciones del juego antes de dedicarle tiempo o dinero. Hoy puedes preferir planificar sin tiempo y mañana un reto rápido. Elige deliberadamente con la ficha actual y el tablero real delante.',
        ],
      },
      'listing-references': {
        title: 'Fuentes de producto y alcance',
        paragraphs: [
          'Estas fichas dinámicas estadounidenses del App Store se consultaron el 30 de septiembre de 2026. La comparación describe promesas publicadas, no pruebas independientes. Las referencias científicas orientan los criterios y no avalan ningún juego.',
          refs.buster,
          refs.outbrick,
          refs.jam,
        ],
      },
    },
    pullQuote: 'La preferencia relevante es de dónde viene la exigencia.',
    faqs: [
      {
        question:
          '¿Qué juego de ordenar bloques anuncia expresamente que no tiene temporizador?',
        answer:
          'Block Buster - No Timer de Lion Studios Plus lo promete en su título oficial del App Store. Comprueba la versión instalada y las otras restricciones antes de decidir si encaja en tus sesiones.',
      },
      {
        question:
          '¿No tener temporizador significa movimientos o vidas ilimitados?',
        answer:
          'No. Tiempo para pensar, movimientos y reintentos son restricciones separadas. Lee las reglas y condiciones de compra sin deducirlas de la ausencia de cuenta atrás.',
      },
      {
        question: '¿OutBrick está totalmente libre de temporizadores?',
        answer:
          'Según las notas actuales de OutBrick 4.2 en el App Store, se retiró Rush y nada en el juego tiene tiempo. Los límites de movimientos, vidas y compras siguen siendo restricciones distintas.',
      },
      {
        question: '¿Por qué incluir Color Block Jam en una guía sin tiempo?',
        answer:
          'Su descripción oficial menciona planificar antes de que se acabe el tiempo, por lo que sirve de comparación. Quienes disfrutan de ejecutar rápido pueden preferir ese reto.',
      },
    ],
  },
  'color-block-jam-accessible-alternative': {
    title: 'Una alternativa a Color Block Jam con VoiceOver',
    dek: '¿Consideras OutBrick como alternativa a Color Block Jam? Compara VoiceOver, símbolos de color y movimiento documentados con una lista práctica.',
    imageAlt:
      'Ilustración de OutBrick alrededor de un teléfono con dos personajes de ladrillo y bloques de colores sobre una cuadrícula azul marino',
    tags: [
      'accesibilidad',
      'VoiceOver',
      'daltonismo',
      'puzles de ordenar bloques',
      'diseño inclusivo',
    ],
    intro:
      'Si no distingues bien dos puertas, un puzle de ordenar colores te pide resolver la interfaz antes que el tablero. Si usas VoiceOver, ver una ruta solo sirve cuando el juego también comunica las piezas y permite actuar sobre ellas. Buscar una alternativa a Color Block Jam puede ser algo muy concreto: quieres la idea de las puertas correspondientes con mejores indicios de que admite tu forma de jugar. OutBrick es candidato porque su ficha del App Store declara VoiceOver, diferenciación sin depender solo del color, movimiento reducido e interfaz oscura. Esas declaraciones son un buen punto de partida. No son una auditoría independiente ni una garantía para todos.',
    keyTakeaways: [
      'OutBrick publica siete declaraciones de accesibilidad, entre ellas VoiceOver, pistas redundantes de color y movimiento reducido. Color Block Jam y Block Out no habían indicado compatibilidad cuando se consultaron sus fichas.',
      'La ausencia de declaración significa que no está documentada allí, no que el competidor necesariamente carezca de compatibilidad. Prueba las tareas necesarias en tu dispositivo.',
      'Comprueba por separado navegar por el tablero, identificar puertas, mover y recuperarte de errores; un menú legible no basta.',
    ],
    sections: {
      'what-the-listings-establish': {
        title: 'Qué establecen las fichas y qué dejan abierto',
        paragraphs: [
          `[Color Block Jam](${jam}), de Rollic Games, describe deslizar bloques de colores hacia puertas correspondientes y planificar antes de que se acabe el tiempo. [Block Out! - Color Sort Puzzle](${blockOut}), de Grand Games, describe una dinámica relacionada con ascensores móviles y generadores de bloques. Son alternativas pertinentes de la misma familia, no juegos que descartemos por una etiqueta ausente (Rollic Games, n.d.; Grand Games A.Ş., n.d.).`,
          `La [ficha de OutBrick](${outbrick}) declara VoiceOver, diferenciación sin depender solo del color, movimiento reducido e interfaz oscura (Hamdi, n.d.). Sus símbolos de color asocian un signo visible distinto a cada ladrillo y su puerta. Es una función concreta si el color solo no te resulta fiable. La regla de deslizamiento también debe gustarte; la accesibilidad no decide qué puzle disfrutas.`,
          'Al consultar las dos fichas competidoras, no habían indicado funciones de accesibilidad. No podemos concluir que falten VoiceOver, pistas redundantes u opciones de movimiento. La comparación defendible es entre declaraciones publicadas. Puede existir una función no documentada y una declarada puede comportarse de forma distinta según tareas, dispositivos o versiones.',
          'Apple describe las etiquetas de accesibilidad como información del desarrollador sobre tareas habituales, con alcance por dispositivo (Apple, n.d.). Úsalas para acotar la búsqueda y examina el juego que vas a usar. Creamos OutBrick, pero no hemos realizado una prueba independiente comparativa de accesibilidad entre estas tres aplicaciones. La guía ofrece un método de comprobación, no una puntuación.',
        ],
      },
      'voiceover-board-tasks': {
        title: 'VoiceOver: prueba el tablero, además del menú',
        paragraphs: [
          'Que un lector de pantalla anuncie un botón Jugar te indica cómo entrar. No demuestra que puedas leer el tablero, localizar la puerta, elegir la pieza y completar un movimiento por tu cuenta. Son tareas distintas. Empieza por un tablero sencillo para que un puzle desconocido no oculte un problema de interfaz.',
          'Ran et al. (2025) entrevistaron a 32 jugadores móviles experimentados ciegos o con baja visión. Sus relatos muestran motivaciones, barreras y estrategias diversas condicionadas por la accesibilidad. Es evidencia sobre esos participantes, no una evaluación de OutBrick o sus competidores. Apoya una pregunta práctica: ¿qué partes puedes hacer por tu cuenta y dónde te pide ayuda la interfaz?',
          'Antes de completar el tutorial, comprueba si puedes identificar el ladrillo seleccionado, entender sus movimientos disponibles y localizar su destino. Intenta después un movimiento que no pueda funcionar. ¿Comunica el juego el rechazo de forma perceptible? Explicarlo claramente importa tanto como una acción exitosa, para que la siguiente decisión no sea una conjetura.',
          'Nuestra [guía de juegos con lector de pantalla en iPhone](/blog/screen-reader-games-iphone) explica el contexto. Para decidir la descarga, anota tareas breves: entrar, examinar piezas, actuar, detectar el resultado, reiniciar y salir. Si algo no queda claro, nuestra [página de ayuda](/support) permite preguntar por la aplicación actual. Describe dispositivo, versión y acción que falla sin asumir que una etiqueta general responde a todo.',
        ],
      },
      'colour-glyphs-and-contrast': {
        title: 'Símbolos de color: más de una pista para emparejar',
        paragraphs: [
          'Un símbolo en el bloque y el mismo en su puerta dan una segunda pista. Puede ayudar si dos colores se parecen. No equivale a hacer todo legible: símbolos pequeños, poco contraste, desorden o fondos cambiantes pueden dificultarlo. Mira el tamaño real del tablero en tu dispositivo, no solo capturas ampliadas.',
          'Mazur et al. (2025) encuestaron a 241 jugadores con deficiencias de visión del color. El 88 % comunicó al menos alguna dificultad al jugar, especialmente emparejar colores e identificar objetos por su color. Fue una encuesta de participación voluntaria, no una estimación de la prevalencia del daltonismo entre todos los jugadores. Sí muestra por qué las puertas correspondientes merecen atención más allá de decir que una aplicación es colorida.',
          'Napoli y Chiasson (2018) ofrecen una cautela útil. Su pequeño estudio de simulación, con diez participantes analizados y condiciones en orden fijo, no halló diferencias significativas de rendimiento, aunque se percibía mayor dificultad y se usaban patrones. Las puntuaciones no representan toda la experiencia. No prueba que un sistema de símbolos resuelva el problema para todos.',
          'Intenta emparejar un ladrillo y su puerta mediante símbolos antes que tonos. ¿Los distingues a tu distancia normal y siguen sirviendo cuando las piezas se superponen o están cerca del borde? Nuestro [artículo sobre daltonismo en los juegos](/blog/colour-blindness-in-games) amplía el tema. Dar información más allá del color, como aconseja W3C, es un principio útil, aunque la guía web no prueba conformidad de una aplicación nativa (World Wide Web Consortium, 2025).',
        ],
      },
      'motion-agency-and-recovery': {
        title: 'Movimiento, autonomía y recuperación de un error',
        paragraphs: [
          'La ficha de OutBrick declara movimiento reducido e interfaz oscura (Hamdi, n.d.). Son funciones distintas. El estilo oscuro no garantiza contraste suficiente y reducir animaciones no garantiza comodidad para todos. Comprueba cómo se comunica un movimiento aceptado, bloqueado y un tablero completado con tus ajustes preferidos.',
          'Gonçalves et al. (2023) analizaron más de 70 horas de juego de creadores ciegos para documentar estrategias en juegos centrados en lo visual. Describen compromisos entre accesibilidad, autonomía e implicación. No representan a todas las personas ciegas ni clasifican estas aplicaciones. Pregúntate si una adaptación permite tomar decisiones significativas por ti mismo en vez de ver cómo las completa otra persona.',
          'En un puzle, recuperarse también forma parte de esa autonomía. Si mueves el ladrillo equivocado, ¿reconoces el nuevo estado y decides qué hacer? Si reinicias, ¿encuentras el control? Comprueba el coste antes de usar ayuda. OutBrick tiene vidas, publicidad con recompensa opcional y compras; sus declaraciones de accesibilidad no eliminan esos sistemas. No lo describimos como ilimitado, sin anuncios o sin ofertas de compra.',
          'El ritmo pertenece a la misma lista. Las notas actuales de OutBrick 4.2 dicen que se retiró todo límite de tiempo; Color Block Jam menciona que se acaba el tiempo. Si necesitas tiempo para examinar información hablada, considera esa diferencia documentada (Hamdi, n.d.; Rollic Games, n.d.). Nuestra [guía de ordenar bloques sin temporizador](/blog/no-timer-block-sort-puzzles-iphone) separa pensar de los límites de movimientos y reintentos.',
        ],
      },
      'choose-and-verify': {
        title: 'Elige un candidato y comprueba tus tareas esenciales',
        paragraphs: [
          'OutBrick es un candidato razonable si buscas puertas correspondientes y un desarrollador que documente voz, pistas redundantes de color y movimiento reducido. Es una recomendación según preferencias y basada en su ficha, no una promesa de acceso perfecto. Si ya disfrutas de Color Block Jam o Block Out, pregunta a sus desarrolladores por lo que necesitas; una declaración ausente no justifica inventar un juicio negativo.',
          'Prioriza las tareas esenciales antes de comprar. Haz una lista repetible tras una actualización: entrar al tablero, identificar ladrillo y puerta, mover, comprender el resultado, recuperarte y salir. Añade tienda y anuncios si vas a usarlos. Una función del tablero no debe suponerse válida para todas las pantallas que lo rodean.',
          `Lee nuestra [información de accesibilidad de OutBrick](/accessibility) y [descarga OutBrick en el App Store de Apple](${appStoreUrl('journal-accessibility')}) si las funciones documentadas encajan. Revisa la compatibilidad actual y prueba la aplicación nativa en tu dispositivo. El [tablero del navegador](/play) introduce el movimiento clásico, pero no certifica VoiceOver ni el comportamiento del movimiento en la aplicación instalada.`,
          'No necesitas justificar preferir pistas mayores, examinar más despacio o respuestas más previsibles. Son requisitos prácticos para disfrutar. Una comparación los hace visibles para que elijas con mejor información y expliques con precisión al desarrollador lo que aún estorba.',
        ],
      },
      'official-reference-list': {
        title: 'Referencias oficiales de producto y orientación',
        paragraphs: [
          'Las fichas se consultaron el 30 de septiembre de 2026. La investigación citada explica barreras y estrategias pertinentes; ninguna probó estas aplicaciones de forma independiente.',
          refs.outbrick,
          refs.jam,
          refs.blockOut,
          'Apple. (n.d.). Overview of Accessibility Nutrition Labels. Apple Developer. Consultado el 30 de septiembre de 2026 en [la guía de etiquetas de accesibilidad de Apple](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels/).',
          'World Wide Web Consortium. (2025, September 16). Understanding Success Criterion 1.4.1: Use of color. [Explicación de W3C sobre color e información redundante](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).',
        ],
      },
    },
    pullQuote: 'En un puzle, recuperarse también forma parte de esa autonomía.',
    faqs: [
      {
        question: '¿OutBrick es compatible con VoiceOver?',
        answer:
          'Su desarrollador lo declara expresamente en el App Store. Comprueba el tablero y las tareas que lo rodean en tu dispositivo; la declaración no es una auditoría independiente.',
      },
      {
        question: '¿Color Block Jam carece de funciones de accesibilidad?',
        answer:
          'Su ficha no había indicado compatibilidad al consultarse el 30 de septiembre de 2026. Eso no demuestra ausencia de funciones; pregunta al desarrollador o prueba las tareas que necesitas.',
      },
      {
        question: '¿Cómo ayudan los símbolos de color en estos puzles?',
        answer:
          'Los símbolos iguales en ladrillo y puerta dan una pista adicional al color. Su tamaño, contraste y claridad deben seguir siendo adecuados para la persona y el dispositivo.',
      },
      {
        question:
          '¿Una etiqueta de accesibilidad significa certificación de Apple?',
        answer:
          'No. Apple las describe como información del desarrollador. Ayudan a descubrir aplicaciones, pero no sustituyen comprobar tus tareas esenciales en el juego instalado.',
      },
    ],
  },
};
