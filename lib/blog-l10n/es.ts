/**
 * The five cornerstone guides in Spanish. Tuteo, as on the Spanish home page;
 * game terms as in lib/i18n/home.ts (tablero, ladrillo, puerta, deshacer,
 * reserva, cuerda, objetivo de movimientos, despejar un tablero). Numbers as
 * Spanish writes them (2000 and 1333 without a separator, 49 %). References
 * stay in English, their original language.
 */

import type { LocaleGuides } from '../i18n/blog';

export const es: LocaleGuides = {
  'how-to-solve-sliding-block-puzzles': {
    title: 'Cómo resolver rompecabezas de bloques deslizantes',
    dek: 'Empieza por la salida, busca el movimiento que abre hueco y cuenta antes de mover: el método de un diseñador para los rompecabezas de bloques deslizantes.',
    imageAlt: 'Tableros reales de OutBrick sobre una base índigo, encabezados por uno en modo para daltónicos con sus símbolos, mientras unos ladrillos amarillos salen por su puerta y Bricko mira',
    tags: ['rompecabezas de bloques deslizantes', 'puzle deslizante', 'estrategia para puzles', 'trucos de puzles'],
    intro: 'Un buen rompecabezas de bloques deslizantes está hecho para parecer imposible. Todas las casillas están ocupadas, cada bloque parece estorbar a otro y la salida está en el lado equivocado. Diseño y pruebo tableros así para OutBrick, y los mismos cinco hábitos me sacan de casi todos, sea cual sea el rompecabezas. Ninguno es un truco. Son formas de mirar que convierten un muro de bloques en una lista corta de preguntas.',
    keyTakeaways: [
      'Empieza por la salida y trabaja hacia atrás: los bloques que separan una pieza de su salida son el verdadero problema, y esa lista suele ser corta.',
      'En un tablero lleno, el movimiento que importa es el que abre espacio para dos o más bloques, así que cuenta los movimientos posibles antes de tocar nada.',
      'Deshacer es un experimento que puedes hacer gratis. Reiniciar es para cuando tu primera lectura del tablero era errónea, no para cuando lo fue un solo movimiento.',
    ],
    sections: {
      'work-backwards-from-the-exit': {
        title: 'Empieza por la salida y trabaja hacia atrás',
        paragraphs: [
          'Ante un tablero lleno, el instinto es mover lo que se pueda mover. Resístete diez segundos. Elige un bloque que tenga que salir, mira su salida y hazte una sola pregunta: ¿qué hay entre este bloque y la salida? Lo que responda a esa pregunta es tu verdadero problema. Después hazte la misma pregunta con cada uno de esos obstáculos y sigue así hasta llegar a un bloque que ya se pueda mover.',
          'Lo que obtienes es una cadena de dependencias, leída hacia atrás desde el objetivo: la salida necesita el bloque amarillo, el amarillo necesita que el verde deje su carril, el verde necesita un hueco a la izquierda. Los psicólogos llaman a este razonamiento análisis medios-fines, y hay buenas pruebas de que la forma de plantear un rompecabezas cambia lo difícil que parece. Kotovsky, Hayes y Simon dieron a varias personas versiones de la torre de Hanói con la misma estructura pero distintas reglas en la superficie, y algunas versiones llevaron muchísimo más tiempo que otras. Buena parte de la dificultad estaba en tener presentes a la vez las reglas y el estado del juego. Una cadena con nombre te quita parte de ese peso.',
          'En OutBrick las salidas son puertas de colores, y un ladrillo solo sale por la puerta de su color. Eso añade a la lectura hacia atrás una regla útil: una puerta que rechaza un ladrillo es un muro, igual que el marco. Así que, al elegir tu primer ladrillo, elige el color cuya puerta tenga delante la cadena más corta.',
        ],
        bullets: [
          'Elige un bloque que tenga que salir.',
          'Apunta lo que hay entre él y su salida.',
          'Repite con cada obstáculo hasta llegar a uno que ya se pueda mover.',
          'Juega la cadena hacia delante desde ese extremo.',
        ],
      },
      'find-the-move-that-makes-space': {
        title: 'Encuentra el movimiento que abre espacio',
        paragraphs: [
          'Un tablero lleno tiene muchos menos movimientos posibles de lo que parece. Antes de decidirte, cuéntalos. En un tablero muy apretado puede haber solo unos pocos, y uno de ellos suele ser el movimiento en torno al cual se construyó el tablero: el deslizamiento que abre un hueco y deja que el montón se deshaga por partes. Las casillas vacías son la moneda de un rompecabezas deslizante. El mejor primer movimiento suele comprar espacio para los siguientes; rara vez despeja algo por sí solo.',
          'Dónde dejas un bloque importa tanto como qué bloque mueves. En OutBrick, un ladrillo llega tan lejos como lo arrastres, hasta que algo lo detenga: una pared, un vecino o una puerta que rechaza su color. Un bloque aparcado a mitad de un carril puede no molestar ahora y estorbar dentro de cuatro movimientos. Antes de soltarlo, comprueba que no has cerrado un carril que vas a necesitar.',
          'Hay una razón matemática por la que estos rompecabezas se resisten a los atajos. Hearn y Demaine demostraron que los rompecabezas de bloques deslizantes generalizados son PSPACE-completos, lo que, dicho llanamente, significa que no se conoce ningún método que resuelva con eficiencia cualquier tablero grande. Las personas se las arreglan con heurísticas como las de esta guía. También significa que un rompecabezas bien hecho tiene que diseñarse para que haya una forma de entrar. OutBrick lo comprueba a conciencia: un solucionador despejó los 2000 tableros antes de publicar ninguno, así que, si te atascas, el nudo está en la posición que has creado tú, no en el tablero.',
        ],
      },
      'count-before-you-commit': {
        title: 'Cuenta los movimientos antes de decidirte',
        paragraphs: [
          'Planifica en cadenas cortas. La memoria de trabajo solo retiene un puñado de elementos a la vez (la revisión de Cowan sitúa la cifra en unos cuatro bloques), así que intentar ver diez movimientos por delante suele equivaler a ver cuatro con claridad y adivinar el resto. Agrupa los movimientos en intenciones: «abrir la columna izquierda» es un solo bloque, aunque lleve tres deslizamientos. Planifica dos o tres, juégalos y vuelve a mirar.',
          'Si tu rompecabezas tiene un límite de movimientos, aquí es donde compensa. OutBrick no tiene reloj en ninguna parte; la cuerda de cada tablero es un límite de movimientos, y el objetivo y el límite se muestran desde el primer toque. Eso cambia lo que escasea. Los movimientos te cuestan y pensar no te cuesta nada, así que gasta tiempo sin miedo y movimientos con cuidado. Antes de cada deslizamiento, repasa estas preguntas.',
        ],
        bullets: [
          '¿Qué hace posible este movimiento?',
          '¿Qué cierra, ahora o dentro de dos movimientos?',
          '¿Hay un deslizamiento más largo que haga el trabajo de dos cortos?',
          '¿Me hace avanzar por la cadena que construí desde la salida?',
        ],
      },
      'use-undo-as-a-thinking-tool': {
        title: 'Usa deshacer como herramienta para pensar',
        paragraphs: [
          'Deshacer funciona mejor como experimento. Cuando dos movimientos parecen igual de buenos, juega uno, mira lo que abre y deshazlo. Has aprendido algo del tablero que no habrías visto mirándolo fijamente, y te ha costado deshacer una vez. Quien ve deshacer como una forma de admitir el fracaso suele mirar más rato y aprender menos.',
          'OutBrick está construido en torno a esa idea. Deshacer la primera vez en cada tablero es gratis y nunca se agota. A partir de ahí, cada vez que deshaces se tira de una reserva de cinco que recupera una cada veinticinco minutos, y cuando un tablero se atasca, la opción de deshacer que se ofrece también es gratis y no toca la reserva. Así que usa la gratuita pronto y a propósito, en el movimiento del que estés menos seguro, en lugar de guardarla para una emergencia.',
          'Hay un matiz que conviene conocer. La tercera estrella de un tablero de OutBrick pide despejarlo dentro del objetivo de movimientos del solucionador sin deshacer ni una sola vez. Si juegas para despejar el tablero, experimenta todo lo que quieras. Si juegas para las tres estrellas, haz los experimentos primero en tu cabeza.',
        ],
      },
      'know-when-to-reset': {
        title: 'Aprende cuándo reiniciar',
        paragraphs: [
          'Deshacer arregla un movimiento. Reiniciar arregla un plan. Las señales de que necesitas lo segundo son fáciles de ver cuando las conoces: has deshecho el mismo movimiento tres veces, estás deslizando un bloque de un lado a otro, no sabes decir para qué sirven tus dos próximas intenciones, o la zona que necesitas ha quedado bloqueada por ladrillos que aparcaste tú. A esas alturas, deshacer más solo te lleva de vuelta por un camino que nunca iba a funcionar.',
          'Sé sincero sobre lo que cuesta volver a empezar en el juego al que estás jugando. En OutBrick, para abrir un tablero necesitas una vida pero no gastas ninguna, despejarlo no cuesta nada y solo pierdes una vida cuando un intento termina sin despejar el tablero. Las vidas se recuperan a razón de una cada treinta minutos. Es un buen motivo para usar deshacer en las correcciones pequeñas y dejar un intento nuevo para cuando toda tu lectura del tablero estaba equivocada.',
          'Y a veces el mejor reinicio es dejar el teléfono. Un tablero que parecía un muro al final de un día largo suele abrirse en los primeros treinta segundos a la mañana siguiente. En un tablero de OutBrick no hay nada cronometrado, así que te esperará. Para hábitos propios de ordenar por colores, hay un artículo complementario con [trucos para puzles de ordenar colores](/es/blog/colour-sort-puzzle-tips). Y si quieres practicar el método primero, en [cómo se juega](/es/play) hay un tablero que puedes probar en el navegador, desde uno fácil hasta un auténtico nudo.',
        ],
      },
    },
    pullQuote: 'Deshacer arregla un movimiento. Reiniciar arregla un plan.',
    faqs: [
      { question: '¿Cuál es el truco para resolver rompecabezas de bloques deslizantes?', answer: 'No hay un único truco, pero un hábito hace casi todo el trabajo: empezar por la salida y trabajar hacia atrás. Apunta lo que bloquea la pieza que tienes que mover, luego lo que bloquea a esas piezas, hasta llegar a una que ya se pueda mover. Después busca el movimiento que abra más espacio.' },
      { question: '¿Todos los rompecabezas de bloques deslizantes tienen solución?', answer: 'No. Algunas disposiciones de los rompecabezas deslizantes clásicos no tienen ninguna solución; por ejemplo, la mitad de las posiciones de partida posibles del 15-puzzle son irresolubles. Los rompecabezas diseñados deberían comprobarse antes de publicarse. Cada uno de los 2000 tableros de OutBrick lo despejó un solucionador antes de salir.' },
      { question: '¿Cuántos movimientos debo planificar por adelantado?', answer: 'Dos o tres objetivos pequeños, de unos pocos movimientos cada uno, bastan para la mayoría. La memoria de trabajo solo retiene un puñado de elementos a la vez, así que planifica por bloques como «liberar el carril izquierdo», juégalos y luego vuelve a mirar el tablero.' },
      { question: '¿Usar deshacer es hacer trampa?', answer: 'No. Deshacer es una de las mejores formas de aprender cómo se comporta un tablero. En OutBrick, deshacer la primera vez en cada tablero es gratis. Lo único a lo que afecta es a la tercera estrella, que pide despejar el tablero dentro del objetivo de movimientos sin deshacer nada.' },
    ],
  },

  'colour-sort-puzzle-tips': {
    title: 'Puzles de ordenar colores: trucos para ahorrar movimientos',
    dek: 'Cómo leer un tablero de ordenar colores, qué color sacar primero y cómo superar el objetivo de movimientos, con las reglas de las estrellas de OutBrick.',
    imageAlt: 'Filas de ladrillos con espigas en rojo, amarillo, turquesa, violeta, azul y verde sobre fondo crema, con un tablero real de OutBrick y una tarjeta de victoria de tres estrellas',
    tags: ['puzle de ordenar colores', 'juego de ordenar por colores', 'trucos block sort', 'objetivo de movimientos'],
    intro: 'Los puzles de ordenar colores se dividen en varias familias: líquidos que se trasvasan de un tubo a otro, pilas que se ordenan en varillas y bloques que se deslizan hacia fuera por puertas de su propio color. OutBrick es de este último tipo y estos trucos están pensados para él, pero la habilidad básica sirve para toda la familia. Se trata de leer qué color está listo para salir, cuál está enterrado y cuál estorba a todos sin que se note. Hacerlo en menos movimientos consiste sobre todo en hacer esa lectura antes del primer movimiento y no después del décimo.',
    keyTakeaways: [
      'Lee todo el tablero antes del primer movimiento: qué colores tienen vía libre hasta su salida, qué ladrillos bloquean más de un color y dónde está el espacio vacío.',
      'Saca el color cuya salida libere más, no el que te quede más a mano.',
      'En OutBrick, una estrella es despejar el tablero, dos es despejarlo dentro del objetivo del solucionador y tres es eso sin deshacer: el deshacer gratuito mantiene dos estrellas a tu alcance, pero no tres.',
    ],
    sections: {
      'read-the-board-first': {
        title: 'Lee el tablero antes de tu primer movimiento',
        paragraphs: [
          'Los movimientos que ahorras salen de la mirada que echas antes del primero. Busca tres cosas en el tablero. Primero, qué colores tienen ya vía libre hasta su puerta. Segundo, qué ladrillos bloquean más de un color, porque son los ladrillos sobre los que gira todo el tablero. Tercero, dónde está el espacio vacío, porque cualquier plan que hagas tendrá que pasar por ahí.',
          'Luego lee los dos números. Cada tablero de OutBrick muestra su objetivo y su límite de movimientos desde el primer toque, así que conoces el presupuesto antes de gastar nada. El objetivo es la cuenta del propio solucionador para ese tablero, lo que lo convierte en una pista útil: si el objetivo es bajo, existe una ruta limpia, y un plan que necesita el doble de movimientos probablemente se está dejando algo.',
          'Aprovecha todos los canales que te da el juego para distinguir los colores. El modo para daltónicos de OutBrick viene activado de serie y estampa un símbolo en cada ladrillo y cada puerta, así que el tono, la forma y las espigas transmiten el color. Incluso con una visión del color completa, los símbolos ayudan a separar de un vistazo vecinos como el rojo y el rosa o el violeta y el azul. Las pautas de accesibilidad llevan mucho tiempo recomendándolo: el color nunca debería ser la única forma de mostrar una información.',
          'Por último, fíjate en la forma del propio tablero. No todos los tableros de OutBrick son rectangulares; algunas arenas tienen forma de H, de L o de cruz. Un paso estrecho entre dos mitades de una arena es donde se atascan los ladrillos, así que averigua pronto qué ladrillos tienen que pasar por ahí y en qué orden.',
        ],
      },
      'clear-the-colour-that-frees-the-most': {
        title: 'Saca el color que más libera',
        paragraphs: [
          'El primer movimiento tentador es el ladrillo que puede salir ya. A veces es el correcto. A menudo es un ladrillo del borde cuya salida no abre nada, mientras que uno del centro, a tres movimientos de su puerta, está frenando medio tablero. Antes de sacar nada, pregúntate qué abre cada salida. Un ladrillo grande que deja el centro puede convertir un bloque compacto en tres carriles útiles.',
          'Fíjate también en dónde acaban aparcados los ladrillos. Un ladrillo que se queda delante de una puerta que no es la suya es un muro hasta que lo vuelvas a mover, y cada «volver a mover» es un movimiento que no necesitabas. Cuando apartes un ladrillo, mándalo a un sitio donde no vaya a estorbar después.',
          'Ayuda saber cómo se reparte la dificultad de un tablero. Los primeros movimientos de un tablero lleno son los caros, porque todas las casillas están ocupadas y cada deslizamiento cambia lo que es posible. Los últimos son casi gratis: para entonces el tablero es sobre todo espacio vacío y los ladrillos que quedan tienen vía libre hasta casa. Así que piensa al principio, donde un deslizamiento descuidado puede costarte tres movimientos de reparación, y relájate al final.',
        ],
        bullets: [
          'Primero, los ladrillos que bloquean dos o más colores.',
          'Después, los colores cuya salida abre un carril que necesitas.',
          'Las salidas fáciles y aisladas, al final, salvo que sean el espacio libre que necesitas ahora mismo.',
          'Nunca aparques un ladrillo atravesado en un carril que todavía vas a usar.',
        ],
      },
      'plan-in-chunks': {
        title: 'Planifica por intenciones, no movimiento a movimiento',
        paragraphs: [
          'La memoria de trabajo es pequeña. La influyente revisión de Cowan sitúa su capacidad en unos cuatro bloques, y por eso planificar diez movimientos sueltos por adelantado rara vez funciona. Planifica por intenciones: «sacar los amarillos», «abrir el carril derecho», «descongelar el ladrillo congelado». [Trabajar hacia atrás desde la salida](/es/blog/how-to-solve-sliding-block-puzzles) es una buena manera de encontrarlas. Cada intención es un bloque de dos a cuatro movimientos, y puedes tener dos o tres en la cabeza sin esfuerzo.',
          'Antes de cada intención, cuenta lo que te va a costar y compáralo con lo que te queda por debajo del objetivo. Si cuesta más de lo que tienes, es la intención equivocada, y es mucho más barato descubrirlo ahora que a mitad de camino. La mayoría de los movimientos desperdiciados en los puzles de ordenar colores vienen de los mismos hábitos: mover un ladrillo de un lado a otro, moverlo dos veces cuando un deslizamiento más largo habría bastado y arreglar el mismo carril dos veces porque un ladrillo volvió a quedar aparcado en él.',
          'Una pequeña rutina ayuda con los tres. Antes de una intención, dite cuál será su último movimiento: ¿dónde estará cada ladrillo cuando termine? Si no puedes imaginar el estado final, la intención es demasiado larga, así que divídela. Si puedes, juégala sin pararte a replanteártelo a mitad, porque de las dudas en mitad de una intención es de donde salen los vaivenes.',
        ],
      },
      'targets-and-stars': {
        title: 'Cómo funcionan el objetivo y las estrellas en OutBrick',
        paragraphs: [
          'Las estrellas de OutBrick son fáciles de explicar. Despejar un tablero da una estrella. Despejarlo dentro del objetivo de movimientos del solucionador da dos. Hacerlo sin deshacer ni una sola vez da tres. El límite, que el juego dibuja como una cuerda, es un límite de movimientos y no un reloj; no hay ninguna cuenta atrás en todo el juego.',
          'Eso tiene una consecuencia que a menudo se pasa por alto. Deshacer la primera vez en cada tablero es gratis y nunca se agota, pero usarlo sigue contando como deshacer, así que mantiene dos estrellas a tu alcance, pero no tres. Si las tres estrellas te importan, deja deshacer como último recurso y experimenta en tu cabeza. Si solo quieres despejar el tablero, úsalo sin reparos: para eso está.',
          'Cuando te quedas corto de movimientos, antes que nada se te ofrecen cinco más, por 300 monedas, luego 500 y luego 900 dentro de un mismo intento. Los movimientos extra pueden salvar un tablero. No te devolverán la segunda estrella, porque cuando te acercas al límite normalmente ya has superado el objetivo. La mejor solución está antes: una lectura más tranquila del tablero al principio.',
        ],
      },
      'mistakes-that-cost-moves': {
        title: 'Cinco hábitos que cuestan movimientos sin que te des cuenta',
        paragraphs: [
          'La mayoría de los tableros que se pasan del presupuesto se deben a uno de unos pocos hábitos. Todos son fáciles de corregir en cuanto te pillas haciéndolos. En [cómo se juega](/es/play) de OutBrick aparecen todos los elementos del tablero que se mencionan aquí, por si quieres verlos todos.',
        ],
        bullets: [
          'Sacar primero el color fácil y dejar un ladrillo aparcado justo donde tenía que pasar el color difícil.',
          'Olvidar que los ladrillos congelados necesitan tres deslizamientos para descongelarse. Cuenta esos deslizamientos en el presupuesto antes de empezar.',
          'Dejar las llaves y los candados para el final. Abren partes del tablero, así que averigua pronto qué abren.',
          'Llenar todas las casillas vacías cuando hay un generador en el tablero. Los generadores traen más ladrillos, así que deja sitio para lo que llegue.',
          'Tratar las cintas transportadoras y las cajas como decorado. Una cinta mueve lo que tiene encima y las cajas deciden qué carriles quedan abiertos, así que tenlas en cuenta desde el primer movimiento.',
        ],
      },
    },
    pullQuote: 'Los movimientos que ahorras salen de la mirada que echas antes del primero.',
    faqs: [
      { question: '¿Cuál es la mejor estrategia para los puzles de ordenar colores?', answer: 'Lee todo el tablero antes de mover: busca qué colores tienen vía libre hasta su salida, qué piezas bloquean más de un color y dónde está el espacio vacío. Después saca el color cuya salida libere más y planifica en intenciones cortas de dos a cuatro movimientos.' },
      { question: '¿Cómo consigo tres estrellas en OutBrick?', answer: 'Despeja el tablero dentro del objetivo de movimientos del solucionador sin deshacer ninguna vez. Para dos estrellas basta con despejarlo dentro del objetivo; cualquier tablero despejado da una estrella.' },
      { question: '¿El deshacer gratuito me cuesta una estrella?', answer: 'Puede costarte la tercera, porque las tres estrellas piden no deshacer nada. Después de usarlo puedes seguir consiguiendo dos estrellas, siempre que despejes el tablero dentro del objetivo de movimientos.' },
      { question: '¿Puedo jugar a puzles de ordenar colores si soy daltónico?', answer: 'Sí, si el juego te da algo más que el color para guiarte. El modo para daltónicos de OutBrick viene activado de serie y pone un símbolo a juego en cada ladrillo y cada puerta, así que la forma ordena tanto como el tono. En la [página de accesibilidad](/accessibility) (en inglés) están los detalles.' },
    ],
  },

  'relaxing-puzzle-games-what-makes-one-calm': {
    title: 'Juegos de puzles relajantes: qué hace que uno sea tranquilo',
    dek: 'Los colores suaves no bastan. Límite de movimientos o reloj, vidas justas, nada de interrupciones: cómo saber si un juego de puzles será tranquilo.',
    imageAlt: 'Tres ventanas en arco en un muro de ladrillo índigo muestran pueblos reales de OutBrick, Lavender Hills, Firefly Wetlands y Cherry Blossom Town, con Flurry y Sprout en el alféizar',
    tags: ['juegos de puzles relajantes', 'juegos de puzles sin tiempo', 'juegos tranquilos', 'diseño de juegos'],
    intro: 'Muchas fichas del App Store llaman «relajante» a su juego de puzles. Algunos juegos se ganan la palabra. Otros ponen colores pastel y música suave encima de la misma presión que encuentras en todas partes: una cuenta atrás en una esquina, un sistema de vidas que se agota justo cuando empiezas a coger ritmo, un anuncio entre nivel y nivel. Esto es lo que miramos para juzgar si un juego de puzles es tranquilo, y dónde queda OutBrick en cada punto, incluidos los sitios donde te pide algo.',
    keyTakeaways: [
      'La calma depende sobre todo de la presión: de dónde viene, si la ves venir y si la has elegido tú.',
      'Un límite de movimientos te pide que no desperdicies movimientos; un reloj te pide que no pienses. Solo uno de los dos encaja en un juego relajante.',
      'Las vidas y los anuncios pueden ser justos o injustos. Mira qué cuesta una vida, cuánto tarda en volver y si algún anuncio se reproduce sin que lo hayas pedido.',
    ],
    sections: {
      'where-pressure-comes-from': {
        title: 'De dónde viene la presión en un juego de puzles',
        paragraphs: [
          'Un puzle tiene que ser un poco difícil, y un tablero difícil puede seguir siendo relajante. La presión que vuelve frenético un juego suele venir de fuera del puzle, y suele salir de cuatro sitios: el tiempo (una cuenta atrás, una barra que se encoge), la escasez (vidas, energía, fichas), la interrupción (anuncios, ofertas emergentes, avisos entre niveles) y la comparación (rachas que se rompen, clasificaciones que te ponen delante).',
          'Ninguna es mala por sí misma. Un modo contrarreloj puede ser muy divertido si lo eliges tú. La prueba de un juego tranquilo es más sencilla: ¿ves todas las restricciones antes de empezar, y las has aceptado? Un tablero que te cuenta sus reglas de entrada y luego te deja en paz se siente muy distinto de uno que cambia las condiciones a mitad de partida.',
          'La última de las cuatro es la más fácil de pasar por alto. Un contador de rachas o una clasificación pueden ser un extra agradable cuando vas a buscarlos. Se convierten en presión cuando el juego te los pone delante justo cuando pensabas parar, o presenta un día sin jugar como algo perdido. Fíjate en dónde te enseña un juego esas cifras y en si te deja ignorarlas.',
        ],
      },
      'move-limits-vs-clocks': {
        title: 'Por qué un límite de movimientos no se parece a un reloj',
        paragraphs: [
          'Un reloj castiga pensar. Cada segundo que pasas leyendo el tablero es un segundo que pierdes, así que el juego premia los reflejos y las conjeturas. Un límite de movimientos castiga, en cambio, el desperdicio. Puedes mirar un tablero todo el tiempo que quieras, y lo único que te cuesta algo es un deslizamiento descuidado. Para un juego de puzles que quiere ser relajante, esa diferencia importa más que cualquier paleta de colores.',
          'OutBrick no tiene reloj en ninguna parte. La cuerda de cada tablero es un límite de movimientos. Cada tablero muestra su objetivo y su límite desde el primer toque, así que conoces el presupuesto antes de gastar nada. Cuando te quedas corto, se te ofrecen cinco movimientos más antes de que pase cualquier otra cosa.',
          'También hay un argumento de accesibilidad. Las pautas de accesibilidad para la web piden que los límites de tiempo se puedan desactivar, ajustar o ampliar, porque algunas personas necesitan más tiempo para completar una tarea. Un juego sin reloj no tiene nada que ajustar. Y la investigación sobre la presión del tiempo apunta en la misma dirección: en un estudio sobre trabajo de oficina interrumpido, Mark, Gudith y Klocke vieron que la gente compensaba trabajando más rápido, y que al hacerlo declaraba más estrés, frustración y presión de tiempo.',
        ],
      },
      'fair-lives': {
        title: 'Vidas, energía y cómo es un sistema justo',
        paragraphs: [
          'Muchos juegos tranquilos tienen vidas, incluido el nuestro, así que la pregunta útil es cómo funcionan. Un sistema de vidas justo te dice exactamente qué cuesta una vida, te da suficientes para una sesión de verdad, las recarga sin pedirte dinero y nunca te quita una por el simple hecho de intentarlo.',
          'OutBrick salió sin vidas y sin anuncios, y las dos cosas cambiaron; por eso la página de inicio explica [exactamente lo que cuestan las vidas, deshacer y los anuncios](/es#fair). Para abrir un tablero necesitas una vida, pero no gastas ninguna. Despejarlo no cuesta nada. Solo pierdes una vida cuando un intento termina sin despejar el tablero. Tienes cinco, ocho con el Brick Pass, y recuperas una cada treinta minutos. Deshacer funciona igual: la primera vez en cada tablero es gratis y nunca se agota, después una reserva de cinco recupera una cada veinticinco minutos, y la opción de deshacer que se ofrece cuando un tablero se atasca es gratis y no toca la reserva.',
          'Fíjate también en qué pasa cuando te quedas sin ninguna. En un sistema justo, quedarse a cero es una pausa de duración conocida. En OutBrick puedes esperar a la siguiente vida o, si quieres, ver un vídeo con recompensa para conseguir una; las dos opciones se explican mucho antes de que las necesites. Un juego que recibe una reserva vacía con una pantalla de compra y sin un tiempo de recarga claro está usando la escasez para vender, y eso rara vez se siente tranquilo.',
        ],
        bullets: [
          '¿Qué cuesta exactamente una vida: empezar, fallar o abandonar?',
          '¿Cuántas puedes tener y cuánto tarda en volver una?',
          '¿Puedes seguir jugando a otra cosa mientras esperas?',
          '¿Se usa alguna vez la recarga como excusa para enseñarte una oferta?',
        ],
      },
      interruptions: {
        title: 'Las interrupciones son el verdadero enemigo de la calma',
        paragraphs: [
          'La forma más rápida de estropear un juego relajante es interrumpirlo. Un anuncio a pantalla completa cada tres niveles te enseña a ponerte en tensión antes de pulsar «siguiente». Una oferta emergente justo cuando fallas convierte una pequeña decepción en un argumento de venta. Ninguna de las dos tiene nada que ver con el puzle, y ahí es donde muchos juegos de puzles pierden la calma que anuncian.',
          'Así lo hace OutBrick. Hay seis espacios de vídeo con recompensa: una vida, cinco movimientos más, dos acciones de deshacer, un potenciador activado antes del primer movimiento, las monedas de la tarjeta de victoria pagadas otra vez y un segundo giro de la Brick Wheel. Todos son opcionales y cada uno tiene su propio límite diario. No hay banners ni anuncios intersticiales, no se reproduce nada que no hayas pedido pulsando un botón y nada interrumpe un tablero. «Quitar anuncios» desactiva la publicidad para siempre.',
          'Por qué importa es en parte opinión nuestra y en parte lo que dicen los datos. Varios estudios sobre juegos casuales han encontrado beneficios a corto plazo para el estado de ánimo después de una tarea exigente, y uno halló menos estrés tras jugar a un juego casual, aunque un ejercicio de mindfulness obtuvo mejores resultados en el estrés declarado. Esos efectos dependen de que el jugador tenga un rato de juego sin interrupciones. Un anuncio cada pocos minutos es una mala forma de protegerlo.',
        ],
      },
      'calm-checklist': {
        title: 'Una lista breve para juegos de puzles tranquilos',
        paragraphs: [
          'Antes de quedarte con un juego de puzles para desconectar, dedica cinco minutos a comprobarlo con la lista de abajo. La mayoría de los juegos cumplirán algunos puntos y fallarán otros, y no pasa nada. (Hemos escrito aparte sobre [cuándo jugar y cuándo hacer una pausa](/blog/when-to-play-and-when-to-pause), en inglés). Lo que importa es que sepas cuáles son antes de que sean las once de la noche y haya aparecido una cuenta atrás.',
          'La calma también tiene un lado sensorial que las fichas de la tienda casi nunca mencionan. Las pantallas llenas de recompensas que parpadean y botones que tiemblan cansan aunque nada esté cronometrado. OutBrick respeta en todas partes el ajuste Reducir movimiento del sistema, y sus nueve amigos de ladrillo hablan con bocadillos de texto en lugar de con voz, así que un tablero a última hora de la noche puede ser silencioso.',
        ],
        bullets: [
          'Sin cuenta atrás en los niveles normales, o con un modo contrarreloj que puedes ignorar.',
          'Las reglas y los límites de cada nivel se ven antes de tu primer movimiento.',
          'Lo que cuesta fallar se dice con claridad y es poco.',
          'Ningún anuncio se reproduce a menos que pulses un botón para verlo.',
          'Parar entre niveles no cuesta nada.',
          'Se juega sin conexión, así que una señal débil nunca detiene un nivel.',
          'Las opciones de accesibilidad, como el soporte para daltonismo y Reducir movimiento, están ahí y se respetan.',
        ],
      },
    },
    pullQuote: 'Un reloj castiga pensar. Un límite de movimientos castiga el desperdicio.',
    faqs: [
      { question: '¿Qué hace que un juego de puzles sea relajante?', answer: 'Sobre todo la ausencia de presión de fuera del puzle: sin cuenta atrás, con límites claros que se ven antes de empezar, con un coste de fallar pequeño y explicado, y sin nada que interrumpa el juego sin tu permiso. Un puzle difícil puede seguir siendo relajante si te deja pensar tranquilo.' },
      { question: '¿Hay juegos de puzles sin temporizador?', answer: 'Sí. Muchos juegos de puzles usan un límite de movimientos o ningún límite. OutBrick no tiene reloj en ninguna parte; cada tablero tiene un límite de movimientos, representado por una cuerda, junto a su objetivo de movimientos.' },
      { question: '¿OutBrick tiene vidas y anuncios?', answer: 'Sí. Tienes cinco vidas, ocho con el Brick Pass, y recuperas una cada treinta minutos; solo pierdes una vida cuando un intento termina sin despejar el tablero. Los anuncios son vídeos con recompensa que eliges ver, cada uno con un límite diario, y no hay banners ni intersticiales.' },
      { question: '¿Un límite de movimientos genera estrés?', answer: 'Normalmente menos que un reloj, porque pensar es gratis y solo te cuestan los movimientos descuidados. En OutBrick, además, se te ofrecen cinco movimientos más cuando te quedas corto, antes de que pase cualquier otra cosa.' },
    ],
  },

  'offline-puzzle-games-iphone': {
    title: 'Juegos de puzle sin conexión para iPhone: trayectos y vuelos',
    dek: 'Qué buscar en un juego de puzles para el metro, el tren o el avión: juego real sin conexión, control a una mano, niveles cortos y poca batería.',
    imageAlt: 'Un vagón de tren hecho de ladrillos cuyas ventanas muestran pueblos y tableros reales de OutBrick, con Bloo y Zippy montados en el techo',
    tags: ['juegos sin conexión iPhone', 'juegos offline', 'juegos para el avión', 'juegos para el trayecto'],
    intro: 'El peor momento para descubrir que un juego necesita conexión es dentro de un túnel, o a diez mil metros de altura con el wifi apagado. «Se juega sin conexión» puede significar varias cosas en una ficha de la tienda, y de todos modos un buen juego de viaje necesita algo más: tiene que funcionar con una mano, caber entre dos paradas y no dejarte sin batería antes de aterrizar. Esta es la lista que usamos. Hacemos OutBrick, así que lo usamos como ejemplo, y hemos procurado ceñirnos a cosas que puedes comprobar tú mismo.',
    keyTakeaways: [
      'Prueba el juego sin conexión en casa en Modo Avión antes de viajar, incluido un arranque en frío y los siguientes niveles.',
      'Para los trayectos diarios, los controles a una mano y los niveles cortos y completos importan tanto como poder jugar sin conexión.',
      'La batería depende sobre todo de la pantalla y del propio juego, así que baja el brillo y usa el Modo de bajo consumo en los viajes largos.',
    ],
    sections: {
      'test-offline-first': {
        title: 'Prueba el juego sin conexión antes de viajar',
        paragraphs: [
          '«Sin conexión» abarca muchas cosas en una ficha de la tienda. Algunos juegos funcionan por completo sin conexión. Otros te dejan jugar pero retienen las recompensas, el contenido diario o el guardado hasta que vuelves a estar en línea. Otros cargan la primera pantalla de memoria y se quedan colgados en la segunda. La ficha no te dice cuál es cuál, así que pruébalo.',
          'La prueba lleva cinco minutos. En casa, activa el Modo Avión, cierra el juego del todo y vuelve a abrirlo. Juega tres niveles, vuelve al menú y empieza el nivel que va después del siguiente. Fíjate en todo lo que aparezca en gris, en cualquier icono de carga que no pare y en si el juego te sigue dejando avanzar después de despejar un tablero. Si todo eso funciona, funcionará en el avión.',
          'Haz una cosa más mientras sigues con wifi: abre el App Store e instala las actualizaciones pendientes de los juegos a los que piensas jugar. Un juego que pide una actualización al abrirse no sirve de nada en un túnel, y una descarga grande con una cobertura móvil inestable en la puerta de embarque es un mal comienzo de viaje.',
          'OutBrick se juega sin conexión. Si juegas en más de un dispositivo, el progreso se guarda en tu iCloud, y un dispositivo nuevo con la sesión iniciada en la misma cuenta continúa donde lo dejó el anterior: nivel, monedas, racha y Colección.',
        ],
        bullets: [
          'Modo Avión activado, juego cerrado del todo y vuelto a abrir.',
          'Tres niveles jugados y, después, el nivel posterior al siguiente iniciado desde el menú.',
          'Nada en gris, ningún icono de carga infinito y el progreso sigue avanzando después de despejar un tablero.',
        ],
      },
      'one-handed-play': {
        title: 'Una mano, un pulgar',
        paragraphs: [
          'En un tren lleno sueles llevar en la otra mano una barra, un café o una bolsa. El estudio de campo de Steven Hoober sobre cómo sujeta la gente el móvil en realidad, basado en 1333 observaciones en la calle, en aeropuertos, en cafeterías y en el transporte público, encontró que el 49 % usaba una sola mano, el 36 % sujetaba el teléfono con una mano y tocaba con la otra, y el 15 % usaba las dos manos. Un juego de viaje tiene que funcionar para el primer grupo.',
          'Hoober también observó que quienes usan una sola mano sujetan el móvil en posiciones muy variadas, así que un juego no puede dar por hecho un único agarre. En los móviles grandes que lleva hoy la mayoría de la gente, las esquinas superiores de la pantalla son difíciles de alcanzar con el pulgar de la mano que sujeta el teléfono. Llegar a ellas obliga a recolocar el móvil en la mano, que es justo lo que no quieres hacer en un tren en marcha con un café en la otra mano.',
          'Busca controles por gestos en lugar de botones pequeños, un diseño en vertical y que no haya nada que alcanzar en las esquinas superiores en mitad de un nivel. OutBrick se juega con un dedo: arrastras un ladrillo y avanza hasta que algo lo detiene. Si lo necesitas, cada ladrillo es además un elemento de VoiceOver con una acción para cada dirección en la que puede deslizarse, y Texto más grande se aplica en todo el juego.',
        ],
      },
      'sessions-between-stops': {
        title: 'Niveles que caben entre dos paradas',
        paragraphs: [
          'Jugar en el trayecto va a trozos, un tema que tratamos en [el puzle de dos minutos para el trayecto](/blog/commuter-puzzle-two-minute) (en inglés). La unidad adecuada es un nivel que puedas terminar entre dos estaciones, con un final claro, para que guardar el móvil se sienta como parar y no como abandonar algo. Los niveles largos y los objetivos encadenados van en contra de eso.',
          'Los relojes, todavía más, y es una de las razones por las que [los juegos de puzles tranquilos](/es/blog/relaxing-puzzle-games-what-makes-one-calm) suelen prescindir de ellos. Cuando un aviso por megafonía o un revisor te roban la atención, un reloj en la esquina sigue corriendo. La investigación sobre el trabajo interrumpido sugiere que la gente responde a las interrupciones acelerando, y lo paga en estrés. Un juego sin reloj no suma a eso. OutBrick no tiene cuenta atrás en ninguna parte, un tablero dura unos dos minutos y despejarlo no cuesta nada. Solo pierdes una vida cuando un intento termina sin despejar el tablero, y recuperas una cada treinta minutos.',
          'También ayuda que la estructura general se divida en piezas pequeñas. En el [Viaje](/es#journey) de OutBrick, cada pueblo tiene doce niveles, así que «terminar este pueblo antes de mi parada» es un objetivo que de verdad puedes cumplir.',
          'La última prueba es la más fácil de olvidar: ¿puedes dejar el juego? Un buen juego para el trayecto te deja a menudo en un punto natural para parar, y no te recibe con un montón de ofertas por tiempo limitado cuando vuelves. Quieres que sea tu parada la que termine la sesión, y que el juego sea algo que retomas cuando te apetezca.',
        ],
      },
      'battery-and-attention': {
        title: 'Batería, sonido y atención',
        paragraphs: [
          'Quedarse sin conexión elimina un consumo de batería, pero la pantalla y el propio juego siguen gastando energía. En un viaje largo, los dos ajustes más útiles son el control de brillo y el Modo de bajo consumo, que según Apple reduce la actividad en segundo plano para alargar la batería. Si un juego ofrece movimiento reducido o una tasa de fotogramas más baja, un vuelo largo es buen momento para usarlos. OutBrick respeta en todas partes el ajuste Reducir movimiento del sistema.',
          'El sonido es lo otro que conviene comprobar. Un juego que depende de señales de audio es incómodo en un vagón silencioso sin auriculares. Los nueve amigos de ladrillo de OutBrick hablan con bocadillos de texto y no tienen voz, así que no se pierde nada de lo que dicen con el sonido apagado. Y como el modo para daltónicos viene activado de serie, cada ladrillo y cada puerta llevan un símbolo además de un color, lo que puede ayudar cuando la luz del vagón es tenue o apaga los colores.',
        ],
      },
      'beyond-the-phone': {
        title: 'Más allá del móvil',
        paragraphs: [
          'En un vuelo largo, una pantalla más grande es más amable con tus ojos y tu cuello. Si un juego funciona en iPad además de en iPhone y comparte el progreso entre ambos, la tableta en la mesita plegable y el móvil en la cola del control de pasaportes pueden ser el mismo juego. OutBrick funciona en iPhone, iPad, Mac, Apple TV y Apple Vision Pro, y hay un juego independiente para Apple Watch para cuando el móvil está en el compartimento de equipaje.',
          'Antes de tu próximo viaje, repasa una vez la lista de abajo. Lleva unos minutos en casa y te ahorra una hora de frustración después.',
        ],
        bullets: [
          'Probado en Modo Avión desde un arranque en frío.',
          'Se puede jugar con un pulgar en vertical.',
          'Niveles lo bastante cortos para terminarlos entre dos paradas.',
          'Ningún reloj que siga corriendo mientras miras a otro lado.',
          'Se puede jugar sin sonido.',
          'Brillo bajo y Modo de bajo consumo activado en los viajes largos.',
        ],
      },
    },
    pullQuote: 'El peor momento para descubrir que un juego necesita conexión es dentro de un túnel.',
    faqs: [
      { question: '¿Qué juegos de puzles funcionan sin conexión en iPhone?', answer: 'Muchos, pero «sin conexión» puede significar el juego completo o solo una parte. La forma fiable de saberlo es probarlo: activa el Modo Avión, cierra el juego, vuelve a abrirlo y juega unos niveles. OutBrick se juega sin conexión.' },
      { question: '¿OutBrick funciona en Modo Avión?', answer: 'Sí. OutBrick se juega sin conexión, así que puedes jugar tableros sin ninguna conexión. El progreso se guarda en tu iCloud, y un dispositivo nuevo con la sesión iniciada en la misma cuenta continúa donde lo dejaste.' },
      { question: '¿Los juegos sin conexión gastan menos batería?', answer: 'Apagar la red elimina un consumo, pero la pantalla y el juego siguen gastando energía. En los viajes largos, baja el brillo y activa el Modo de bajo consumo, que reduce la actividad en segundo plano.' },
      { question: '¿Puedo jugar a OutBrick en el Apple Watch?', answer: 'Sí. Hay un juego independiente para Apple Watch, además de las versiones para iPhone, iPad, Mac, Apple TV y Apple Vision Pro.' },
    ],
  },

  'why-two-minute-puzzles-feel-good': {
    title: 'Por qué un puzle de dos minutos sienta tan bien',
    dek: 'Competencia, atención y pequeñas satisfacciones: lo que dice la investigación sobre por qué apetece volver a una partida corta de OutBrick.',
    imageAlt: 'Un tablero de puzle brillante con un último ladrillo deslizándose hacia la puerta de su color',
    tags: ['juegos de puzles', 'bienestar', 'motivación', 'juegos casuales'],
    intro: 'No todas las partidas tienen que ser una odisea. A veces la mejor forma de jugar es un ciclo pequeño y completo: ver un patrón, tomar una decisión, ver cómo responde el tablero e irte con la sensación de que algo ha encajado.',
    keyTakeaways: [
      'Una partida corta puede ser satisfactoria cuando el jugador tiene objetivos claros, una respuesta visible y un margen real para decidir.',
      'La investigación respalda efectos modestos y a corto plazo del juego casual sobre el ánimo y la implicación, no grandes promesas sobre la inteligencia o la salud.',
      'OutBrick gira en torno a un ciclo pequeño y completo: un tablero, una decisión cada vez y la opción de deshacer gratis esperándote en cada uno.',
    ],
    sections: {
      'the-feeling-of-a-clean-clear': {
        title: 'La sensación de despejar un tablero limpio',
        paragraphs: [
          'Un puzle satisfactorio no necesita abrumarte con contenido. Necesita que la relación entre tu decisión y el resultado se note. Desliza un ladrillo, lee el hueco que se abre y mira cómo responde la puerta. Ese pequeño intercambio es el centro emocional de OutBrick.',
          'El modelo motivacional propuesto por Przybylski, Rigby y Ryan describe la implicación en los juegos a través de tres necesidades básicas: competencia, autonomía y relación con los demás. Un puzle pequeño toca las dos primeras de inmediato. Entiendes una regla y luego te demuestras algo a ti mismo al usarla. El placer viene tanto de ser el autor de la jugada como de ganar.',
        ],
      },
      'what-short-play-can-and-cannot-do': {
        title: 'Lo que una partida corta puede hacer, y lo que no',
        paragraphs: [
          'Un estudio controlado sobre juegos casuales encontró, tras una tarea mentalmente exigente, una mayor recuperación afectiva a corto plazo y más implicación, mientras que las pruebas de una recuperación cognitiva más amplia eran menos claras. La distinción importa. Un juego puede ayudarte a sentirte con más ganas de seguir sin convertirse en una mejora cerebral mágica.',
          'Otro estudio, que comparaba un juego casual con un ejercicio de mindfulness de escaneo corporal, encontró una reducción del estrés psicológico y fisiológico en los dos grupos. El mindfulness funcionó mejor en el estrés psicológico declarado, así que los juegos no sustituyen a otras prácticas. Un juego del tamaño adecuado puede ser una opción modesta dentro de un día más amplio.',
        ],
      },
      'the-outbrick-loop': {
        title: 'El ciclo de OutBrick es pequeño a propósito',
        paragraphs: [
          'OutBrick empieza con un tablero que se entiende de un vistazo. No hay registro de misiones que recordar ni reloj que batir; los dos números que importan, el objetivo y el límite de movimientos, están junto a tu contador de movimientos desde el primer toque. El tablero te cuenta el resto: los ladrillos, los carriles abiertos y las puertas a juego.',
          'Deshacer forma parte del ciclo en lugar de ser un castigo por usarlo, y por eso deshacer la primera vez en cada tablero es gratis y nunca se agota. Eso cambia la temperatura emocional de experimentar. Puedes probar un movimiento, aprender del resultado y quedarte con lo útil del intento. Los tableros siguen estando hechos para resistirse. Lo que cambia es que probar algo cuesta menos que dudar. La página de inicio explica [exactamente lo que cuestan las vidas, deshacer y los anuncios](/es#fair).',
        ],
        bullets: [
          'Un tablero fácil de leer cada vez',
          'Una relación clara entre acción y respuesta',
          'Herramientas para recuperarse que mantienen la curiosidad',
          'Una meta que llega antes de que la partida se haga pesada',
        ],
      },
      'take-the-good-bit-with-you': {
        title: 'Llévate lo bueno contigo',
        paragraphs: [
          'Una buena partida de dos minutos te da una pequeña sensación de progreso y luego te deja decidir qué viene después. Si tienes tiempo para otro tablero, siempre hay otro tablero. Si tienes que irte, el juego puede esperar.',
          'Por eso OutBrick trata la calma como un requisito de diseño. La investigación no dice que todos los jugadores se beneficien igual, ni demuestra un efecto universal. Sí señala una dirección útil: hacer un juego que respete la autonomía, haga visible el progreso y deje al jugador con más opciones de las que tenía antes. Seguimos el mismo hilo en [Designing a game for the life players actually have](/blog/designing-for-real-life-play) (en inglés).',
        ],
      },
    },
    pullQuote: 'Probar algo cuesta menos que dudar.',
    faqs: [
      { question: '¿OutBrick pretende mejorar la salud mental?', answer: 'No. OutBrick es un puzle de entretenimiento. La investigación sobre el juego casual puede orientar el diseño, pero no convierte el juego en un tratamiento ni garantiza ningún efecto en el bienestar.' },
      { question: '¿Por qué las partidas de OutBrick son cortas?', answer: 'Las partidas cortas hacen que el puzle se entienda y permiten que el juego encaje en la vida real. Puedes seguir jugando, pero el juego no exige un bloque de tiempo largo y sin interrupciones.' },
    ],
  },
};
