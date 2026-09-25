import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 4 (lib/journal-batches/batch-4.ts) in this language. See lib/blog-l10n/es.ts for the house style. */
export const es4: ExtraGuides = {
  'what-makes-a-puzzle-fair': {
    title: '¿Qué hace justo un puzle? Dificultad, fracaso y confianza',
    dek: 'Difícil no es lo mismo que injusto. Lo que dice la investigación sobre el reto y el fracaso de los puzles en los que confiamos y de los que abandonamos.',
    imageAlt: 'Un tablero real de OutBrick en un iPhone, flanqueado por Moss con su cinturón de herramientas y Sprout con un brote en la cabeza, sobre una pared de ladrillo azul marino',
    tags: ['diseño de puzles', 'dificultad en videojuegos', 'diseño de juegos', 'fracaso en los juegos', 'puzles justos'],
    intro: 'Quien juega a puzles conoce dos formas muy distintas de quedarse atascado. Una es la buena: ves todas las piezas, conoces las reglas y sencillamente aún no has dado con la idea. La otra es la que te hace soltar el móvil: la respuesta dependía de algo que no podías ver, el juego castigó un intento que no tenías forma de evitar o un solo despiste te costó diez minutos. Las dos son «difíciles». Solo una parece justa. Los investigadores de videojuegos llevan quince años separando una de otra, y lo que han encontrado le sirve a cualquiera que diseñe puzles y a cualquiera que esté decidiendo cuáles merecen su tarde.',
    keyTakeaways: [
      'Los jugadores viven varios tipos de reto, y un puzle parece justo cuando su reto es de los que hacen pensar, no información oculta ni castigos arbitrarios.',
      'El coste de fallar importa tanto como la probabilidad de fallar: Juul sostiene que el tiempo que te quita un fracaso es hoy la mejor medida de cómo se vive la dificultad.',
      'El fracaso puede formar parte de una buena experiencia, pero solo cuando el jugador ve qué salió mal y puede volver a intentarlo habiendo aprendido algo.',
    ],
    sections: {
      'hard-versus-unfair': {
        title: 'Difícil no es lo mismo que injusto',
        paragraphs: [
          'Los diseñadores suelen hablar de la dificultad como si fuera un único mando, pero los jugadores no la viven así. Cuando Alena Denisova, Paul Cairns, Christian Guckelsberger y David Zendle elaboraron un cuestionario para medir el reto percibido en los juegos, sus encuestas y estudios de validación apuntaron a cuatro tipos distintos: el reto de ejecución (¿me responden las manos?), el reto emocional (¿puedo con lo que esto me hace sentir?), el reto cognitivo (¿soy capaz de resolverlo?) y el reto de decisión (¿puedo vivir con esta elección?). Un puzle puede ser muy exigente en uno y poco en los demás.',
          'Esa división explica mucha frustración. Un puzle de lógica que de repente exige una sincronización milimétrica ha trasladado su reto de la cabeza a las manos sin avisarte. Un puzle cuya solución depende de una regla que nunca te enseñaron no ha subido el reto cognitivo en absoluto: te ha quitado la información que necesitabas para afrontarlo.',
          'Megan Pusey, Kok Wai Wong y Natasha Anne Rappa hacen una distinción parecida en su Puzzle Challenge Analysis Tool, que probaron con The Witness, Untitled Goose Game y Baba Is You. Separan el reto, lo que un puzle le exige a tu razonamiento, de la dificultad, lo difícil que le resulta a un jugador concreto. Esa distinción es el núcleo de la justicia: un puzle justo puede resultarte muy difícil hoy, pero su reto está hecho de cosas sobre las que eres capaz de razonar.',
        ],
      },
      'cost-of-failing': {
        title: 'El coste de fallar también es dificultad',
        paragraphs: [
          'En los juegos antiguos, con un número fijo de vidas, la dificultad se podía medir por la frecuencia con la que fallaban los jugadores. Jesper Juul, en un trabajo para el congreso Foundations of Digital Games de 2010, sostuvo que eso dejó de funcionar cuando la mayoría de los juegos empezaron a dar reintentos ilimitados. Su propuesta: medir el tiempo que te quita un fracaso. Perder un tablero y volver a empezar al momento es muy distinto de perderlo y tener que repetir cinco minutos de preparación para volver al mismo punto.',
          'Por eso dos puzles con la misma dificultad lógica pueden sentirse completamente distintos. Si un error te devuelve tres movimientos atrás, experimentas con libertad. Si te devuelve al principio de una secuencia larga, dejas de experimentar y empiezas a tantear con cautela, que es una forma peor de resolver cualquier cosa.',
          'A los jugadores les da una prueba rápida para cuando un juego de puzles parece mezquino: pregúntate qué te costó de verdad el último fracaso. ¿Segundos, minutos o algo más escaso? A los diseñadores les recuerda que el precio de un error es una decisión de diseño, independiente del propio puzle.',
        ],
      },
      'failure-that-teaches': {
        title: 'Fracasos que enseñan',
        paragraphs: [
          'Nada de esto significa que un puzle justo no deba dejarte fallar nunca. Serge Petralito y sus colegas encuestaron a 95 jugadores justo después del lanzamiento de Dark Souls III, un juego famoso por lo a menudo que te mata. La mayoría describió experiencias positivas, y los momentos que más valoraban, el logro y el aprendizaje, fueron posibles gracias a los negativos: la dificultad y las muertes repetidas.',
          'La condición escondida en ese hallazgo es la legibilidad. El fracaso se convirtió en aprendizaje porque los jugadores podían ver por qué habían muerto y qué probar después. La misma tradición de investigación que celebra las victorias ganadas a pulso deja claro que un fracaso sin una causa legible es pura frustración.',
          'Los puzles son un caso especialmente limpio. El fracaso ideal en un puzle es aquel en el que, en el mismo instante, piensas «claro», porque el tablero acaba de enseñarte algo cierto sobre sí mismo. Un fracaso que te deja pensando «¿y cómo iba yo a saberlo?» no enseña nada salvo desconfianza.',
        ],
      },
      'fair-puzzle-checklist': {
        title: 'Una lista para comprobar si un puzle es justo',
        paragraphs: [
          'Conor Linehan y sus colegas analizaron vídeos de partidas completas de cuatro juegos de puzles muy queridos, Portal, el modo cooperativo de Portal 2, Braid y Lemmings, para ver cómo dosificaban sus retos. El patrón era constante: cada habilidad nueva se presentaba por separado, con puzles sencillos que solo pedían esa habilidad; luego los jugadores practicaban combinándola con lo que ya sabían, y los puzles se complicaban hasta que llegaba la siguiente habilidad. Dicho de otro modo, los puzles justos rara vez te piden algo que no hayas tenido ocasión de aprender.',
          'Si se junta eso con la investigación sobre el reto y el fracaso, sale una lista corta que puedes aplicar a cualquier puzle, tanto si lo diseñas como si lo juegas:',
        ],
        bullets: [
          'Todo lo que necesitas para resolverlo está a la vista o se ha enseñado antes.',
          'Las reglas no cambian a mitad de camino sin avisar.',
          'Existe una solución, seguro.',
          'El reto es el que prometía el juego: en un juego de pensar, pensar y no reflejos.',
          'Un error cuesta un tiempo proporcionado, y puedes ver qué lo causó.',
          'Las ideas nuevas llegan de una en una, con margen para practicar antes de combinarlas.',
        ],
      },
      'how-outbrick-keeps-boards-fair': {
        title: 'Cómo intenta OutBrick que sus tableros sean justos',
        paragraphs: [
          'Hacemos OutBrick, así que así se ve la lista desde nuestro lado. La regla es pequeña y siempre la misma: un ladrillo se desliza hasta que algo lo detiene y solo sale por la puerta de su color. Las llaves, los candados, las cajas y las puertas aparecen en tableros posteriores, cuando la regla básica ya resulta familiar. Un solucionador despejó cada uno de los 2000 tableros y esa solución se volvió a reproducir con las reglas del propio juego antes del lanzamiento, un proceso que contamos en [cómo verificamos 2000 tableros de bloques deslizantes](/blog/verifying-2000-sliding-block-boards), así que ningún tablero pide lo imposible.',
          'El precio de un error se mantiene pequeño y se dice por adelantado. Cada tablero muestra su objetivo y su límite de movimientos desde el primer toque, y no hay reloj. Deshacer la primera vez en cada tablero es gratis, y solo pierdes una vida cuando un intento termina sin despejar el tablero. La página de inicio explica [exactamente lo que cuestan las vidas, deshacer y los anuncios](/#fair). Hemos escrito más sobre cómo dar forma al reto a lo largo del tiempo en [cómo construir una curva de dificultad más amable](/blog/kinder-difficulty-curve), y sobre la fricción que pide pensar en [Papers, Please y la fricción con sentido](/blog/papers-please-meaningful-friction).',
          'La mejor prueba de justicia sigue siendo tu propia reacción. [Juega un tablero en el navegador](/play), falla una vez a propósito y fíjate en si sabes por qué.',
        ],
      },
    },
    pullQuote: 'Un fracaso que te deja pensando «¿y cómo iba yo a saberlo?» no enseña nada salvo desconfianza.',
    faqs: [
      { question: '¿Qué hace que un puzle parezca injusto?', answer: 'Normalmente, una de tres cosas: la solución depende de información que el jugador no podía ver o que no se le había enseñado, el reto pasa de pensar a los reflejos sin avisar, o un pequeño error cuesta muchísimo tiempo. La dificultad por sí sola rara vez parece injusta si las reglas están claras.' },
      { question: '¿Es malo que un juego de puzles te deje fallar?', answer: 'No. La investigación sobre juegos difíciles como Dark Souls III descubrió que el fracaso puede dar más sentido al logro y al aprendizaje. Lo que importa es que el jugador vea por qué falló y que volver a intentarlo salga barato.' },
      { question: '¿Qué diferencia hay entre reto y dificultad?', answer: 'Los investigadores suelen llamar reto a lo que un puzle exige al jugador, y dificultad a lo difícil que le resulta a un jugador concreto. Un puzle justo puede ser muy difícil para una persona mientras su reto sigue hecho de cosas sobre las que cualquiera podría razonar.' },
      { question: '¿Todos los tableros de OutBrick tienen solución?', answer: 'Sí. Un solucionador despejó cada uno de los 2000 tableros y esa solución se volvió a reproducir con las reglas del propio juego antes del lanzamiento, y cada tablero muestra su objetivo y su límite de movimientos desde el primer toque.' },
    ],
  },
  'game-feel-and-juice': {
    title: 'Game feel y juice: por qué importa un buen deslizamiento',
    dek: 'El juice es la respuesta extra que hace que un toque se sienta bien. Estudios con miles de jugadores muestran que ayuda, hasta cierto punto; luego estorba.',
    imageAlt: 'Un tablero real de OutBrick en un iPhone entre Moss con su cinturón de herramientas y Vio con auriculares, con ladrillos flotando sobre una pared de ladrillo azul marino',
    tags: ['game feel', 'juice en videojuegos', 'diseño de juegos', 'feedback en juegos', 'sensación de juego'],
    intro: 'Coge dos versiones del mismo juego. En una, un ladrillo cruza el tablero y se para. En la otra, se desliza, frena suavemente al llegar, da un leve golpe contra la pared y levanta un poco de polvo de la puerta al salir. Las reglas son idénticas. Una parece una hoja de cálculo y la otra, un juguete. Los diseñadores llaman a esa diferencia game feel, la sensación de juego, y a la respuesta extra y prescindible que la produce la llaman «juice». Es una de las ideas más comentadas del desarrollo de videojuegos y, hasta hace poco, una de las menos puestas a prueba. La investigación que ya existe deja un mensaje claro a quien hace juegos: el juice es real, y pasarse también.',
    keyTakeaways: [
      'El juice es feedback redundante: reacciones visuales, sonoras o hápticas extra a una acción que las reglas no necesitan pero que el jugador siente.',
      'En un estudio con más de 3000 jugadores, tanto la ausencia de juice como el juice extremo llevaron a partidas más cortas y peor experiencia que una cantidad moderada.',
      'El juice hace que un juego se vea y se sienta mejor; su efecto en lo competentes que se sienten los jugadores depende del contexto, así que hay que ajustarlo, no amontonarlo.',
    ],
    sections: {
      'what-juice-means': {
        title: 'Qué entienden los diseñadores por juice',
        paragraphs: [
          'Kieran Hicks, Kathrin Gerling, Patrick Dickinson y Vero Vanden Abeele dan una definición limpia: el juice es feedback redundante, cuando una sola acción del jugador desencadena varias reacciones que no aportan información nueva. La pantalla tiembla, la puntuación salta, vuelan partículas, suena algo. Nada de eso hace falta para saber qué ha pasado. Todo eso cambia cómo se ha sentido.',
          'Martin Pichlmair y Mads Johansen fueron más allá en una revisión de más de 200 fuentes académicas y profesionales sobre el game feel. Dividen el oficio en tres ámbitos. El ajuste (tuning) tiene que ver con lo físico: cómo acelera un objeto, cuánto parece pesar, lo predecible que es su movimiento. El juice es amplificación: las señales extra que hacen que una acción se sienta potente y su resultado quede claro. La simplificación (streamlining) es apoyo: el juego actúa según lo que el jugador quería hacer, por ejemplo perdonando un toque ligeramente adelantado. En su planteamiento, el juice es solo una de tres herramientas, y las otras dos son más discretas.',
        ],
      },
      'what-the-studies-found': {
        title: 'Qué encontraron de verdad los estudios',
        paragraphs: [
          'Hicks y sus colegas hicieron dos estudios: uno con 40 participantes que jugaron a dos juegos de investigación y otro con 32 participantes que jugaron a una versión modificada de Quake 3 Arena, cada uno con y sin adornos visuales. Los efectos extra hicieron sistemáticamente que los juegos resultaran más atractivos a la vista. Los efectos sobre lo competentes que se sentían los jugadores solo aparecieron en algunas circunstancias. El juice hacía que el juego se viera mejor; no hacía automáticamente que los jugadores se sintieran mejores jugando.',
          'El estudio más grande hasta la fecha es de Dominic Kao, que dio a 3018 jugadores una de cuatro versiones del mismo juego de rol de acción: sin juice, con juice medio, alto o extremo. Ganaron las dos del medio. Tanto la versión sin juice como la extrema produjeron partidas significativamente más cortas, peor experiencia, menos motivación intrínseca e incluso peor rendimiento que la media o la alta. Con demasiado poco feedback, un juego parece muerto; con demasiado, la información que necesita el jugador queda enterrada bajo el ruido.',
          'Esa forma de U invertida es el resultado más práctico de toda esta literatura. El juice es una dosis, no una virtud.',
          'Conviene decir sus límites. Los dos estudios usaron juegos de acción, donde el feedback rápido es parte de la diversión, y la dosis «correcta» será distinta en un género lento y reflexivo. Además, las cuatro versiones de Kao estaban en puntos fijos de una escala, así que el estudio demuestra que los extremos pierden, no dónde está exactamente la cantidad óptima para un juego concreto. Para los juegos de puzles, el resumen honesto es que la dirección del hallazgo probablemente se mantiene y que la dosis exacta hay que encontrarla probando con jugadores.',
        ],
      },
      'feel-beyond-the-screen': {
        title: 'Una sensación que va más allá de la pantalla',
        paragraphs: [
          'En un móvil, la sensación no es solo visual. Tanay Singhal y Oliver Schneider trasladaron la idea del juice a la vibración y definieron los «adornos hápticos» como vibraciones que refuerzan lo que ya muestra la pantalla. En dos estudios con personas que usaban su propio móvil, la háptica con juice mejoró lo divertido, atractivo, inmersivo y significativo que resultaba un juego. Un toquecito bien sincronizado bajo el pulgar puede hacer parte del trabajo de una sacudida de pantalla sin añadir nada que mirar.',
          'En el extremo contrario está la decoración que no reacciona en absoluto. Anna-Lena Meiners y sus colegas la llaman «exuberancia» (lushness): detalles de fondo y objetos con los que no se puede interactuar. En un estudio con 31 participantes que jugaron a cuatro versiones de un juego de plataformas, más exuberancia hizo el juego más atractivo a la vista, pero no cambió lo competentes que se sentían los jugadores ni el esfuerzo mental que declaraban. La decoración es agradable. No es sensación de juego.',
          'La coherencia importa tanto como la intensidad. Las [Human Interface Guidelines de Apple sobre la reproducción de háptica](https://developer.apple.com/design/human-interface-guidelines/playing-haptics) piden a los desarrolladores que usen la háptica de forma coherente y que construyan una relación clara de causa y efecto entre cada vibración y la acción que la provoca. Lo mismo vale para cualquier canal de feedback. Una respuesta que el jugador puede predecir pasa a formar parte de cómo entiende el juego; una respuesta que varía al azar es solo ruido.',
        ],
      },
      'juice-for-a-calm-game': {
        title: 'Juice para un juego tranquilo',
        paragraphs: [
          'Casi todo lo que se escribe sobre el juice viene de los juegos de acción, donde más energía suele ser justo lo que se busca. Un juego de puzles tranquilo tiene otro trabajo. Su feedback tiene que confirmar lo que ha pasado sin acelerarle el pulso al jugador, y tiene que seguir siendo legible en el tablero cien igual que en el primero. Eso inclina la balanza hacia el ajuste y la simplificación, con el juice reservado para los momentos que lo merecen.',
          'Algunas reglas que usamos para juzgar el feedback de un puzle:',
        ],
        bullets: [
          'El movimiento debe explicar la regla. Un ladrillo que frena suavemente al pararse te dice que se paró porque había algo.',
          'Guarda los efectos más grandes para los momentos más raros. Despejar un tablero merece más que un movimiento.',
          'No dejes nunca que un efecto tape la parte del tablero que necesitas leer a continuación.',
          'Respeta el ajuste Reducir movimiento del sistema, y asegúrate de que el juego se sigue entendiendo sin los adornos.',
          'Si un efecto es divertido la primera vez y cansa la quincuagésima, sobra.',
        ],
      },
      'the-outbrick-slide': {
        title: 'El deslizamiento en el corazón de OutBrick',
        paragraphs: [
          'OutBrick se basa en un solo verbo: desliza un ladrillo y avanzará hasta que algo lo detenga. Como ese verbo se repite cientos de veces en una sesión, su sensación importa más que cualquier celebración. El deslizamiento tiene que ser lo bastante rápido como para no hacerte esperar nunca, y lo bastante legible como para que veas adónde va el ladrillo antes de que llegue. Respetamos Reducir movimiento en todas partes, así que el tablero se sigue leyendo con los efectos atenuados. Los momentos grandes son para cuando despejas el tablero, donde cada amigo de ladrillo tiene su propio baile de victoria.',
          'La sensación de juego también explica por qué las sesiones cortas pueden ser satisfactorias: una acción limpia con una respuesta limpia ya es una pequeña recompensa, algo que exploramos en [por qué un puzle de dos minutos puede sentar como un buen descanso](/blog/why-two-minute-puzzles-feel-good). Si quieres poner a prueba tu propio criterio, [juega un tablero en el navegador](/play) y fíjate en el momento en que un ladrillo se para. La misma contención recorre [Tetris](/blog/tetris-simple-rules-infinite-variation), donde gran parte del placer viene del ritmo y no del espectáculo. Para ver cómo contribuye el sonido a esa misma sensación, lee nuestro artículo sobre [el feedback sonoro y la experiencia del jugador](/blog/game-audio-feedback-player-experience), y para saber qué hace que un juego relaje en lugar de agobiar, [qué hace de verdad que un juego de puzles sea tranquilo](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
    },
    pullQuote: 'El juice es una dosis, no una virtud.',
    faqs: [
      { question: '¿Qué es el juice en el diseño de videojuegos?', answer: 'El juice es feedback extra que refuerza algo que el jugador ya sabe que ha pasado: sacudidas de pantalla, partículas, sonidos, vibración o animaciones con rebote. No cambia las reglas, pero cambia cómo se siente una acción.' },
      { question: '¿El feedback con juice mejora los juegos?', answer: 'Hasta cierto punto. En un estudio con 3018 jugadores, las versiones con juice medio o alto superaron tanto a la versión sin juice como a la de juice extremo en tiempo de juego, experiencia, motivación y rendimiento.' },
      { question: '¿Qué diferencia hay entre game feel y juice?', answer: 'El game feel es toda la sensación, momento a momento, de interactuar con un juego. El juice es uno de sus ingredientes; otros son ajustar cómo se mueven los objetos y simplificar los controles para que el juego haga lo que el jugador quería.' },
      { question: '¿Puedo reducir las animaciones en OutBrick?', answer: 'Sí. OutBrick respeta en todas partes el ajuste Reducir movimiento del sistema, y el tablero se sigue leyendo bien con los efectos atenuados.' },
    ],
  },
  'procedural-puzzle-level-generation': {
    title: 'Cómo generan niveles de puzle los ordenadores',
    dek: 'La generación procedimental puede crear puzles sin fin, pero tener solución no basta. Cómo funcionan los generadores y dónde fallan.',
    imageAlt: 'Un tablero real de OutBrick en un iPhone, con Poppy sosteniendo una varita con una estrella a un lado y Moss al otro, entre ladrillos flotantes',
    tags: ['generación procedimental', 'diseño de puzles', 'desarrollo de videojuegos', 'generación de niveles', 'puzles de bloques deslizantes'],
    intro: 'Entre el nivel dibujado a mano y el nivel infinito está la generación procedimental de contenido: software que crea contenido de juego, desde terrenos y mazmorras hasta el puzle que juegas en el autobús. Para los puzles es especialmente tentadora. Un ordenador puede producir un tablero nuevo en milisegundos y nunca se queda sin ideas. También puede producir miles de tableros sin solución, triviales o técnicamente correctos y sin ninguna gracia. Cómo han abordado ese problema los investigadores es un buen recorrido por lo que hace que un puzle sea un puzle, y una guía útil para jugadores que se preguntan si los «niveles infinitos» de una ficha de la tienda valen algo.',
    keyTakeaways: [
      'La mayoría de los generadores de puzles funcionan por generación y prueba: proponer un candidato, evaluarlo, quedarse con los buenos y buscar otros mejores.',
      'Lo más difícil es la prueba. Un generador tiene que demostrar que un tablero tiene solución, normalmente haciendo que un programa lo juegue, y luego juzgar si es bueno.',
      'Tener solución es un mínimo, no un objetivo. Los generadores de investigación modelan cada vez más la dificultad y la experiencia del jugador, y el criterio humano sigue decidiendo qué se publica.',
    ],
    sections: {
      'generate-and-test': {
        title: 'Generar y luego probar',
        paragraphs: [
          'En 2011, Julian Togelius, Georgios Yannakakis, Kenneth Stanley y Cameron Browne cartografiaron un campo que crecía deprisa y le pusieron nombre: generación procedimental de contenido basada en búsqueda. Su revisión clasifica los generadores según lo que crean, cómo se representa ese contenido dentro del programa y, sobre todo, cómo se evalúa su calidad. El enfoque basado en búsqueda trata el diseño de niveles como un problema de optimización. Se generan candidatos, se puntúa cada uno con una función de evaluación, se conservan los mejores, se modifican y se repite, a menudo con algoritmos evolutivos tomados de la biología.',
          'La función de evaluación es donde vive el diseño. Puede medir un nivel directamente (cuántas piezas, cuánto espacio vacío), mediante simulación (dejar que un jugador artificial lo intente y ver qué pasa) o de forma interactiva (preguntando a jugadores reales). Cada opción tiene un coste. Las medidas directas son baratas pero superficiales. La simulación es más fiel, pero necesita un programa capaz de jugar de verdad. Preguntar a personas es lo más fiel y, con diferencia, lo más lento.',
          'En un rompecabezas de bloques deslizantes es fácil de imaginar. Un candidato es una cuadrícula con ladrillos colocados. Una variación mueve, añade o quita un ladrillo. Una medida directa podría contar lo lleno que está el tablero; una medida basada en simulación le pasa el tablero a un solucionador y anota si se puede despejar y lo larga que es la ruta que encuentra. Te quedas con los tableros que puntúan bien, los vuelves a modificar y, tras miles de rondas, el generador ha derivado hacia lo que premie la función de evaluación. Ese es su poder y su peligro: encontrará exactamente lo que le pediste, incluidos tableros que cumplen los números y aburren al jugador.',
        ],
      },
      'describing-the-space': {
        title: 'Describir cómo es un buen tablero',
        paragraphs: [
          'Otra escuela empieza por el otro extremo. En lugar de hacer evolucionar tableros y esperar que surjan buenos, Adam Smith y Michael Mateas propusieron describir explícitamente el espacio de diseños aceptables, como un conjunto de restricciones lógicas, y dejar que un solucionador de propósito general encuentre tableros que las cumplan. Con una técnica llamada programación de conjuntos de respuestas (answer set programming), un diseñador puede escribir reglas como «la salida tiene que ser alcanzable» o «esta pieza tiene que moverse al menos dos veces» y recibir solo tableros que las cumplan.',
          'El atractivo para el diseño de puzles es evidente. Muchas de las cosas que hacen interesante un tablero son restricciones: este ladrillo tiene que estar bloqueado por aquel, esta llave tiene que ser necesaria. Escribirlas obliga al diseñador a decir qué quiere en realidad, una disciplina tan útil para las personas como para las máquinas.',
        ],
      },
      'playability-first': {
        title: 'Demostrar que un tablero tiene solución',
        paragraphs: [
          'Sea cual sea el generador, un puzle tiene que tener solución antes que nada, y demostrarlo suele ser el paso más difícil. Noor Shaker, Mohammad Shaker y Julian Togelius se toparon con esto en Cut the Rope, un puzle de física con tiempo y espacio continuos, donde la búsqueda por fuerza bruta no tiene ninguna posibilidad. Su respuesta fue un agente razonador que en cada estado solo proponía movimientos sensatos, lo que redujo la búsqueda lo suficiente como para que una sencilla búsqueda en profundidad encontrara soluciones y confirmara que los niveles generados se podían jugar.',
          'Bilal Kartal, Nick Sohre y Stephen Guy tomaron otro camino con Sokoban, el clásico puzle de empujar cajas. Su generador construye los puzles mediante partidas simuladas con búsqueda de árbol Monte Carlo, así que cada puzle que produce tiene solución por construcción. Los rompecabezas de bloques deslizantes también son un caso difícil: el problema general es PSPACE-completo, como explica nuestra [historia de los rompecabezas de bloques deslizantes](/blog/history-of-sliding-block-puzzles), así que no se conoce ningún atajo que resuelva rápido cualquier tablero.',
        ],
      },
      'solvable-is-not-good': {
        title: 'Tener solución es un mínimo, no un objetivo',
        paragraphs: [
          'Un tablero puede tener solución y aun así ser aburrido, o tenerla solo por una ruta que ninguna persona encontraría. Kartal y sus colegas lo abordaron de frente. Hicieron un estudio con usuarios para encontrar características del tablero que fueran baratas de calcular y estuvieran correlacionadas con lo difíciles que les parecían los puzles a las personas, las combinaron en una función de puntuación y luego confirmaron en un segundo estudio que los puzles con más puntuación se percibían como más difíciles. Es decir, la dificultad había que aprenderla de las personas, no suponerla.',
          'Yannakakis y Togelius generalizan la idea en su marco de generación procedimental de contenido guiada por la experiencia: modelar la experiencia del jugador, ya sea a partir de su comportamiento, de lo que cuenta o de su fisiología, y generar contenido para moldearla. Es un objetivo ambicioso, y lo honesto es reconocer que los modelos de diversión y frustración siguen siendo toscos. En un puzle, cualidades como la elegancia, el satisfactorio «¡ajá!» y la justicia siguen siendo más fáciles de reconocer que de calcular. Vemos qué significa la justicia para los jugadores en [qué hace que un puzle parezca justo](/blog/what-makes-a-puzzle-fair).',
        ],
      },
      'where-people-stay': {
        title: 'Dónde siguen haciendo falta las personas',
        paragraphs: [
          'Para los jugadores, de todo esto se desprende una regla práctica. «Niveles infinitos» te dice que existe un generador; no te dice cómo se prueban sus niveles. Busca juegos que expliquen cómo comprueban sus tableros, y desconfía cuando la dificultad salta al azar, que a menudo es señal de que nada la está modelando.',
          'Otras señales de un conjunto de puzles bien hecho, generado o no: las ideas nuevas se presentan de una en una, como recomienda la investigación sobre el ritmo de los puzles; los tableros se sienten distintos y no como copias casi idénticas con una pieza movida; y cuando te atascas, crees que existe una solución. Esa última es la más difícil de fingir, y la que más les ha costado ganarse a los generadores.',
          'Los 2000 tableros de OutBrick son un conjunto fijo y diseñado, no un flujo generado en tu dispositivo, y la ruta para despejar cada uno se volvió a reproducir con las reglas del propio juego antes del lanzamiento. Contamos ese proceso, incluido por qué un solucionador que se queda sin presupuesto significa «desconocido» y no «imposible», en [cómo verificamos 2000 tableros de bloques deslizantes](/blog/verifying-2000-sliding-block-boards). Un solucionador demuestra que existe una ruta; no demuestra que el tablero sea divertido, y por eso el ritmo se juzga aparte. Puedes ver el resultado por ti mismo en el [Tablero del día](/daily).',
        ],
      },
    },
    pullQuote: 'Un solucionador demuestra que existe una ruta; no demuestra que el tablero sea divertido, y por eso el ritmo se juzga aparte.',
    faqs: [
      { question: '¿Qué es la generación procedimental de contenido en los videojuegos?', answer: 'Es software que crea contenido de juego, como niveles, mapas o puzles, de forma automática en lugar de a mano. Muchos generadores de puzles proponen tableros candidatos, los prueban y se quedan con los mejores o los pulen.' },
      { question: '¿Cómo sabe un ordenador que un puzle generado tiene solución?', answer: 'Normalmente, haciendo que un programa lo resuelva, ya sea buscando una ruta o construyendo el puzle mediante partidas simuladas para que exista una solución por construcción. Comprobar una solución real es más fiable que fiarse del generador.' },
      { question: '¿Los puzles generados por procedimientos son tan buenos como los hechos a mano?', answer: 'Pueden tener solución y ser variados, pero juzgar la dificultad, la elegancia y la justicia sigue siendo difícil de automatizar. Los generadores de investigación aprenden cada vez más la dificultad a partir de estudios con jugadores, y muchos juegos mantienen a una persona en el proceso.' },
      { question: '¿Los tableros de OutBrick se generan al azar?', answer: 'No. OutBrick incluye un conjunto fijo de 2000 tableros en lugar de crear otros nuevos mientras juegas, y la ruta para despejar cada uno se volvió a reproducir con las reglas del juego antes del lanzamiento.' },
    ],
  },
  'dynamic-difficulty-adjustment': {
    title: 'Dificultad dinámica: ¿deberían adaptarse los juegos a ti?',
    dek: 'Muchos juegos se ajustan en silencio a tu habilidad. Qué dicen los estudios, por qué infla la confianza del jugador y por qué conviene preguntar.',
    imageAlt: 'Un iPhone con la clasificación semanal de OutBrick, entre Flurry con un gorro de pompón a rayas y un Zippy amarillo que guiña un ojo',
    tags: ['ajuste dinámico de dificultad', 'dificultad adaptativa', 'diseño de juegos', 'control del jugador', 'dificultad en videojuegos'],
    intro: 'Mueres tres veces en el mismo tramo de un juego y, al cuarto intento, parece un poco más fácil. ¿Iban más lentos los enemigos o por fin le pillaste el truco? A menudo no lo puedes saber, y es a propósito. El ajuste dinámico de la dificultad, o DDA por sus siglas en inglés, consiste en cambiar el reto de un juego mientras juegas, según cómo te vaya. Promete a cada jugador un juego hecho a su medida. También plantea preguntas incómodas sobre la honestidad, sobre quién decide lo difícil que debe ser un juego y sobre qué significa una victoria cuando el juego te ha echado una mano. Esto es lo que dice la investigación, y dónde nos hemos plantado con nuestros propios puzles.',
    keyTakeaways: [
      'En los estudios, la dificultad adaptativa suele mejorar la experiencia del jugador, pero los detalles importan: los jugadores pueden perder la sensación de control cuando el sistema lo decide todo.',
      'La adaptación puede dejar a los jugadores demasiado confiados en su propia habilidad, y basta con decirles que un juego se adapta para que aumente la inmersión aunque no lo haga.',
      'Dar a los jugadores opciones de dificultad visibles y periódicas suele funcionar mejor que un ajuste oculto o que menús constantes.',
    ],
    sections: {
      'what-dda-is': {
        title: 'Qué es el ajuste dinámico de la dificultad',
        paragraphs: [
          'Los juegos tradicionales fijan su dificultad de antemano: eliges Fácil, Normal o Difícil al principio, o el juego sigue una curva fija. Como resume la revisión del campo de Mohammad Zohaib, el problema es que entonces los jugadores tienen que encajar en una curva de aprendizaje que ha decidido otra persona. El DDA cambia aspectos del juego en tiempo real, como la frecuencia con la que aparecen los enemigos, su puntería o cuántos recursos encuentras, para mantener al jugador entre el aburrimiento y la frustración.',
          'Seguramente te lo has encontrado sin saberlo. A los juegos de carreras se les lleva mucho tiempo acusando de hacer «efecto goma», con rivales que frenan cuando te quedas atrás y aceleran cuando te escapas. Algunos juegos de acción reparten en silencio más salud o munición cuando lo estás pasando mal. Algunos juegos de puzles ofrecen una versión más fácil de un nivel tras varios fracasos. Las técnicas cambian, pero la lógica es la misma: observar al jugador, estimar su habilidad y mover el reto a su encuentro.',
          'El artículo de Robin Hunicke de 2005, «The case for dynamic difficulty adjustment in games», es el punto de partida habitual. Según señalaba, lo que se daba por sentado era que a los jugadores les gusta la sorpresa, pero se sienten engañados si notan que un juego cambia para adaptarse a ellos. Su sistema, Hamlet, ajustaba la oferta y la demanda en un juego de disparos en primera persona entre bastidores, y sus resultados preliminares pusieron en duda algunas de esas suposiciones sobre cómo reaccionarían los jugadores. La tensión que señaló nunca ha desaparecido: la adaptación pretende ayudar, pero solo si no estropea la experiencia que intenta proteger.',
        ],
      },
      'does-it-work': {
        title: '¿Adaptarse ayuda de verdad?',
        paragraphs: [
          'A menudo sí, con matices. Dennis Ang y Alex Mitchell compararon tres versiones de un juego: sin adaptación, una versión orientada al sistema que subía la dificultad automáticamente y una versión orientada al jugador en la que eran los jugadores quienes tomaban las decisiones de ajuste. Las dos versiones adaptativas dieron mejores experiencias generales que la que no se adaptaba. Pero tenían matices distintos. Con el sistema automático, los jugadores se sentían menos cohibidos y perdían más la noción del tiempo, pero también declaraban menos sensación de control que quienes elegían por sí mismos.',
          'Ese equilibrio es el núcleo del debate. La adaptación oculta puede limar las asperezas que rompen la inmersión. También le quita una decisión al jugador, y el control es uno de los ingredientes de un juego satisfactorio. La respuesta correcta depende de para qué sirve el juego: un juego narrativo que quiere arrastrarte puede aceptar el trato; un juego de puzles cuyo placer está en resolver algo por ti mismo quizá no.',
        ],
      },
      'the-honesty-problem': {
        title: 'El problema de la honestidad',
        paragraphs: [
          'Dos líneas de investigación complican la historia. Thomas Constant y Guillaume Levieux midieron la confianza de los jugadores con un sistema de apuestas dentro del juego en tres juegos que ponían a prueba la habilidad lógica, motora y sensorial. Los jugadores cuya dificultad adaptaba un algoritmo tendían a confiarse en exceso y sobrestimaban sus posibilidades de éxito. Los autores sugieren que ese empujón de confianza podría ser parte de por qué el DDA sienta bien, y precisamente por eso merece una segunda mirada: un juego que sienta bien en parte porque te engaña sobre tu habilidad está haciendo algo sutil.',
          'Alena Denisova y Paul Cairns encontraron la imagen especular. En dos estudios con dos juegos distintos, los jugadores a los que se les dijo que el juego se adaptaba a ellos declararon más inmersión, tanto si el juego se adaptaba de verdad como si no. La creencia moldeó la experiencia con independencia del mecanismo. Los autores lo interpretan como algo tranquilizador para los desarrolladores: contar a los jugadores que hay adaptación no parece volverse en contra. También muestra cuánto de ese «este juego me entiende» vive en las expectativas del jugador.',
        ],
      },
      'give-players-the-dial': {
        title: 'Por qué dar el mando a los jugadores',
        paragraphs: [
          'Si el control importa, ¿por qué no preguntar sin más a los jugadores? Ang y Mitchell también lo probaron, con 84 participantes. Variaron cómo se presentaban las opciones de dificultad, integradas en la mecánica del juego o como un ajuste directo, y con qué frecuencia se ofrecían: una vez, periódicamente o constantemente. Las opciones integradas en el juego mejoraron algunos aspectos de la experiencia, y las opciones periódicas superaron tanto a una única elección al principio como a un goteo constante. Preguntar una sola vez es demasiado rígido; preguntar todo el rato convierte el juego en papeleo.',
          'En conjunto, las pruebas apuntan a un término medio que ya siguen muchos juegos muy queridos. Ofrecer ayuda en momentos naturales, hacerla visible, dejar que los jugadores la rechacen y no fingir que una victoria con ayuda es otra cosa. El Modo Asistencia de Celeste es un ejemplo célebre, del que hablamos en [el Modo Asistencia de Celeste: la accesibilidad como mejor diseño](/blog/celeste-assist-mode-accessibility).',
        ],
        bullets: [
          '¿Cambia el juego la dificultad sin decírtelo?',
          '¿Puedes ver y desactivar cualquier ayuda que te dé?',
          '¿Se ofrecen las opciones en pausas naturales, y no solo al principio ni constantemente?',
          '¿Un tablero despejado con ayuda sigue contando, sin vergüenza?',
        ],
      },
      'outbrick-fixed-boards': {
        title: 'Por qué OutBrick mantiene fijos sus tableros',
        paragraphs: [
          'Para un puzle de ladrillos deslizantes elegimos la ayuda visible en lugar de la adaptación oculta. Cada uno de los 2000 tableros de OutBrick es fijo y un solucionador lo verificó antes del lanzamiento, y cada tablero muestra su objetivo y su límite de movimientos desde el primer toque, así que el puzle que tienes delante es el mismo que tienen todos. Despejarlo significa que encontraste una ruta por ese tablero.',
          'Hay ayuda, pero la pides tú y la ves. Deshacer la primera vez en cada tablero es gratis. Cuando un tablero se atasca, la pantalla de recuperación te lo dice y te ofrece deshacer gratis. Cuando te quedas corto de movimientos, antes que nada se te ofrecen cinco más, que se pagan con monedas o, si lo prefieres, con un vídeo con recompensa. La página de inicio detalla [exactamente lo que cuestan las vidas, deshacer y los anuncios](/#fair). Nada de eso cambia el tablero a tus espaldas.',
          'Es una decisión pensada para un juego de puzles, no un veredicto sobre el DDA en general. Para saber más sobre cómo dar forma al reto a lo largo de todo un juego, lee [cómo construir una curva de dificultad más amable](/blog/kinder-difficulty-curve) y [qué hace que un puzle parezca justo](/blog/what-makes-a-puzzle-fair).',
        ],
      },
    },
    pullQuote: 'Preguntar una sola vez es demasiado rígido; preguntar todo el rato convierte el juego en papeleo.',
    faqs: [
      { question: '¿Qué es el ajuste dinámico de la dificultad?', answer: 'El ajuste dinámico de la dificultad (DDA) es cuando un juego cambia su reto durante la partida según cómo le vaya al jugador, por ejemplo debilitando a los enemigos tras varios fracasos. El objetivo es mantener al jugador entre el aburrimiento y la frustración.' },
      { question: '¿El ajuste dinámico de la dificultad es bueno o malo?', answer: 'Los estudios suelen encontrar que mejora la experiencia del jugador, pero la adaptación oculta puede reducir la sensación de control y se ha relacionado con un exceso de confianza. La ayuda visible y opcional, ofrecida en momentos naturales, suele evitar esos inconvenientes.' },
      { question: '¿Cómo sé si un juego está ajustando su dificultad?', answer: 'Muchas veces es difícil saberlo, y eso forma parte del debate. Busca ajustes o descripciones de la tienda que mencionen dificultad adaptativa o asistida, y fíjate en si el juego ofrece ayuda abiertamente o parece cambiar sin decir nada.' },
      { question: '¿OutBrick ajusta la dificultad al jugador?', answer: 'No. Cada tablero es fijo y está verificado por un solucionador, con su objetivo y su límite de movimientos a la vista desde el primer toque. La ayuda, como deshacer gratis la primera vez o cinco movimientos más, se ofrece abiertamente y tú decides si la aceptas.' },
    ],
  },
  'game-tutorials-that-teach-without-telling': {
    title: 'Tutoriales que enseñan sin explicar: qué funciona',
    dek: 'Un estudio con 45 000 jugadores vio que los tutoriales solo compensaban en juegos complejos. Qué se sabe de enseñar jugando, las pistas y la primera hora.',
    imageAlt: 'Un iPhone con el mapa del Viaje de OutBrick en Button Factory, entre Flurry con un gorro de pompón y Bloo con su reloj',
    tags: ['tutoriales de videojuegos', 'onboarding', 'diseño de juegos', 'aprender a jugar', 'diseño de niveles'],
    intro: 'Casi todos nos hemos saltado un tutorial. Algunos nos lo hemos saltado, nos hemos perdido y hemos vuelto a buscarlo. Unos cuantos hemos borrado un juego porque empezaba con diez pantallas de instrucciones antes de dejarnos tocar nada. Enseñar a un jugador nuevo es uno de los trabajos más difíciles del diseño de juegos: si explicas demasiado poco, se pierde; si explicas demasiado, se va antes de que empiece el juego. La buena noticia es que es uno de los rincones del diseño de juegos mejor estudiados, con experimentos en los que han participado decenas de miles de jugadores. Los resultados son sorprendentemente coherentes, y apuntan a juegos que enseñan sobre todo dejándote jugar.',
    keyTakeaways: [
      'En un estudio con más de 45 000 jugadores, los tutoriales aumentaron el tiempo de juego hasta un 29 % en el juego más complejo, pero no marcaron una diferencia significativa en dos más sencillos.',
      'Enseñar dentro del juego, en el momento en que una mecánica importa, superó a una pantalla de instrucciones aparte en emoción y motivación.',
      'Las pistas y las explicaciones pueden ser contraproducentes: en un estudio con 50 000 estudiantes, todos los sistemas de pistas probados empeoraron el rendimiento frente a no dar pistas.',
    ],
    sections: {
      'the-45000-player-test': {
        title: 'La prueba de los 45 000 jugadores',
        paragraphs: [
          'En 2012, Erik Andersen y sus colegas de la Universidad de Washington llevaron a cabo uno de los mayores experimentos sobre tutoriales jamás publicados. Incorporaron ocho diseños de tutorial a tres juegos de complejidad variable y se los dieron a más de 45 000 jugadores en internet, midiendo cuánto tiempo jugaban y si volvían. Los juegos eran Refraction, un juego de puzles sobre dividir haces de luz; Hello Worlds, un juego de plataformas; y Foldit, un juego mucho más complejo sobre plegar proteínas. Los resultados fueron tajantes. En el juego más complejo, los tutoriales aumentaron el tiempo de juego hasta un 29 %. En los dos más sencillos, no mejoraron de forma significativa el compromiso de los jugadores en absoluto.',
          'Vale la pena recoger el espíritu de la conclusión de los autores: invertir en tutoriales puede no estar justificado en juegos cuyas mecánicas se pueden descubrir experimentando. No es un argumento contra enseñar. Es un argumento a favor de que las mecánicas se puedan descubrir, para que sea el propio juego el que enseñe y las palabras sobren.',
        ],
      },
      'teach-in-context': {
        title: 'Enseñar en el momento en que importa',
        paragraphs: [
          'Cuando hacen falta instrucciones, el momento importa. Julian Frommel y sus colegas compararon, con 39 jugadores, dos versiones del tutorial de un juego de realidad virtual: una pantalla de instrucciones tradicional al principio y un tutorial contextual que explicaba cada mecánica cuando se volvía relevante durante la partida. El rendimiento y la inmersión fueron parecidos, pero la versión contextual produjo más emociones positivas, menos negativas y más motivación. Su conclusión es de las que todo diseñador debería colgar en la pared. Un tutorial no es una introducción aparte al juego, es parte de la experiencia.',
          'Las propias recomendaciones de Apple para apps dicen lo mismo desde otro ángulo: aconsejan que la introducción sea rápida, divertida y opcional, con consejos según el contexto siempre que se pueda, porque la gente retiene más cuando hace una tarea que cuando lee sobre ella; sus [Human Interface Guidelines sobre el onboarding](https://developer.apple.com/design/human-interface-guidelines/onboarding) son una lectura útil para cualquiera que diseñe una primera experiencia.',
        ],
      },
      'one-idea-at-a-time': {
        title: 'Una idea cada vez',
        paragraphs: [
          'Los grandes juegos de puzles llevan mucho tiempo enseñando sin palabras, y la investigación ha empezado a describir cómo. Conor Linehan y sus colegas analizaron vídeos de partidas completas de Portal, el modo cooperativo de Portal 2, Braid y Lemmings. En todos ellos, las habilidades principales se presentaban por separado, con puzles sencillos que solo pedían esa habilidad. Después los jugadores practicaban combinando la habilidad nueva con las anteriores, y los puzles se complicaban hasta que llegaba la siguiente.',
          'Esa estructura es un tutorial disfrazado. Cada puzle de presentación es una lección con una única conclusión correcta, y resolverlo es la prueba de que la has aprendido. No hace falta decir nada, porque el propio tablero hace la pregunta y comprueba la respuesta. Es el mismo principio que exploramos en [cómo los juegos enseñan curiosidad sin sermones](/blog/games-teach-curiosity-without-lecture), y en la forma en que [Minecraft deja que el descubrimiento construya la siguiente capa](/blog/minecraft-layered-discovery).',
        ],
      },
      'when-help-hurts': {
        title: 'Cuando la ayuda perjudica',
        paragraphs: [
          'Las pistas parecen una amabilidad evidente, pero las pruebas no son concluyentes. Eleanor O’Rourke, Christy Ballweber y Zoran Popović probaron cuatro sistemas de pistas, inspirados en diseños de éxito de programas de tutoría y juegos comerciales, en un juego de puzles educativo al que jugaron 50 000 estudiantes. Los cuatro empeoraron el rendimiento frente a una versión sin pistas. Los autores tienen cuidado en aclarar que eso no significa que las pistas nunca funcionen, solo que unos diseños importados de otros contextos no se trasladaron bien a un juego.',
          'Una lectura plausible es que una pista puede interrumpir justo lo que hace que un puzle valga la pena: el momento en que lo resuelves. Si la pista llega antes de que hayas tenido ocasión de pelearte con él, te quita ese momento. Si llega en forma de muro de texto, te saca del tablero.',
          'Eso no significa dejar a los jugadores solos frente a un muro. Sugiere unos cuantos principios para una ayuda que respete el puzle: ofrecerla cuando se pide y no automáticamente; que la primera pista sea pequeña, un empujoncito hacia dónde mirar y no qué hacer; y dejar que el jugador decida si quiere la siguiente. La ayuda que elige el jugador hace que la solución siga siendo suya.',
        ],
      },
      'the-first-hour': {
        title: 'La primera hora va de despertar curiosidad',
        paragraphs: [
          'Gifford Cheung, Thomas Zimmermann y Nachiappan Nagappan analizaron más de 200 reseñas de juegos y entrevistaron a profesionales del sector sobre la primera hora de juego. El consejo habitual en la industria es que un juego sea divertido desde el primer segundo. Ellos sostienen que la intriga y la información importan igual: la primera sesión es cuando los jugadores deciden si vale la pena seguir, y un juego que les despierta curiosidad por lo que viene puede retenerlos aunque el comienzo no sea perfecto.',
          'OutBrick es nuestra propia prueba de estas ideas. Su regla cabe en una frase: desliza un ladrillo y avanzará hasta que algo lo detenga, y solo sale por la puerta de su color. Es el tipo de mecánica que, según el estudio de Andersen, la gente puede descubrir experimentando, porque un solo deslizamiento te enseña casi todo. Las llaves, los candados, las cajas y las puertas aparecen en tableros posteriores, cuando la idea básica ya es tuya. Puedes juzgar si funciona [jugando un tablero en el navegador](/play) sin ninguna instrucción, y si después quieres profundizar, nuestra guía sobre [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) está ahí para cuando la quieras.',
        ],
      },
    },
    pullQuote: 'Un tutorial no es una introducción aparte al juego, es parte de la experiencia.',
    faqs: [
      { question: '¿Funcionan los tutoriales de los videojuegos?', answer: 'Depende del juego. Un estudio con más de 45 000 jugadores descubrió que los tutoriales aumentaban el tiempo de juego hasta un 29 % en un juego complejo, pero no marcaban una diferencia significativa en dos juegos más sencillos cuyas mecánicas se podían aprender experimentando.' },
      { question: '¿Cuál es la mejor forma de enseñar un juego a los jugadores?', answer: 'La investigación se inclina por enseñar jugando: presentar una mecánica cada vez con retos sencillos, explicar las cosas en el momento en que se vuelven relevantes y usar poco texto. Las pantallas de instrucciones aparte suelen motivar menos.' },
      { question: '¿Son buenas las pistas en los juegos de puzles?', answer: 'No siempre. En un estudio con 50 000 estudiantes que jugaban a un juego de puzles educativo, cuatro sistemas de pistas distintos empeoraron el rendimiento frente a no dar pistas, así que las pistas necesitan un diseño y un momento muy cuidados.' },
      { question: '¿Cómo se aprende a jugar a OutBrick?', answer: 'Deslizando un ladrillo. Avanza hasta que algo lo detiene y solo sale por la puerta de su color; las llaves, los candados, las cajas y las puertas aparecen en tableros posteriores. Puedes [probar un tablero en el navegador](/play) antes de instalar nada.' },
    ],
  },
  'game-audio-feedback-player-experience': {
    title: 'El sonido del éxito: cómo el audio moldea la experiencia',
    dek: 'El sonido cambia la inmersión, la tensión y la competencia percibida, y la música altera la noción del tiempo. Qué dicen los estudios y cómo jugar sin él.',
    imageAlt: 'Un iPhone con el mapa del Viaje de OutBrick en Cherry Blossom Town, entre Moss con su cinturón de herramientas y un Zippy amarillo que guiña un ojo',
    tags: ['audio en videojuegos', 'diseño de sonido', 'música de videojuegos', 'feedback sonoro', 'experiencia del jugador'],
    intro: 'Quita el sonido a un juego que conoces bien y pasa algo raro. Las reglas no han cambiado, pero todo parece más plano, más lento, curiosamente menos seguro. El clic de una pieza al encajar, la nota que sube cuando estás a punto de despejar el tablero, el pequeño acorde de una victoria: te decían cosas sin que notaras que te las estaban diciendo. El sonido es una de las partes más potentes y menos visibles del diseño de juegos. Los investigadores han medido sus efectos sobre la inmersión, las emociones e incluso sobre el tiempo que los jugadores creen haber jugado. Y como tanta gente juega en el móvil sin sonido, la investigación también deja una lección sobre lo que nunca se le debería pedir al sonido que haga solo.',
    keyTakeaways: [
      'En un experimento controlado, jugar con sonido mejoró todas las dimensiones medidas de la experiencia del jugador, desde la inmersión y el flow hasta la competencia y las emociones positivas.',
      'La banda sonora aumenta el disfrute sobre todo porque intensifica las emociones, y la elección de la música puede hacer que jugar resulte más o menos inmersivo.',
      'Como mucha gente juega en silencio, el sonido debe reforzar información que también se muestra en pantalla, nunca transmitirla por sí solo.',
    ],
    sections: {
      'sound-does-work': {
        title: 'El sonido hace un trabajo medible',
        paragraphs: [
          'Lennart Nacke, Mark Grimshaw y Craig Lindley hicieron uno de los primeros experimentos rigurosos sobre el sonido en los juegos. Los participantes jugaron a un juego de disparos en primera persona muy rápido en el que los efectos de sonido y la música se activaban o desactivaban por separado, mientras los investigadores registraban la conductancia de la piel y la actividad de los músculos faciales y pasaban un cuestionario estándar de experiencia de juego. Las medidas fisiológicas no mostraron efectos significativos. El cuestionario sí: el sonido tuvo un efecto significativo en todas las dimensiones que medía, incluidas la inmersión, la tensión, la competencia, el flow, el reto y las emociones tanto positivas como negativas. El sonido y la música también interactuaron en su efecto sobre la tensión y el flow.',
          'Esa combinación es reveladora. Los jugadores notaron la diferencia, con claridad y en todos los aspectos, aunque las medidas corporales disponibles entonces no la captaran. El sonido no es decoración añadida encima del juego; para el jugador, es parte de lo que es jugar.',
          'En la práctica, el sonido de un juego hace dos tipos de trabajo. Algunos sonidos transmiten información: un clic que confirma que un movimiento se ha registrado, un tono distinto cuando una acción falla, una nota ascendente cuando te acercas a un objetivo. Otros transmiten sensaciones: la música, el ambiente, la textura de un mundo. Los informativos funcionan mejor cuando son cortos, coherentes y asociados a un único significado. Los emocionales funcionan mejor cuando encajan con lo que el juego quiere hacerte sentir, y ahí entra el siguiente estudio.',
        ],
      },
      'music-and-emotion': {
        title: 'La música funciona a través de la emoción',
        paragraphs: [
          '¿Por qué la música hace más disfrutable un juego? Christoph Klimmt y sus colegas pusieron a prueba dos posibles vías en dos experimentos con jugadores varones jóvenes, 68 que jugaron a Assassin’s Creed: Black Flag y 59 que jugaron a Alien: Isolation, cada uno con o sin banda sonora. La primera vía era emocional: la música intensifica las emociones, y unas emociones positivas más fuertes suponen más disfrute. La segunda era cognitiva: la música podría reforzar la sensación de estar dentro del mundo del juego o de identificarse con el personaje.',
          'Las pruebas respaldaron la vía emocional. La banda sonora aumentó el disfrute de forma indirecta a través de las emociones positivas, y en el juego de terror, la música impactante intensificó la experiencia de terror. Los investigadores no encontraron que la música funcionara a través de una mayor sensación de presencia o de identificación. Las muestras eran reducidas, así que los detalles podrían no generalizarse, pero la lección para los diseñadores es plausible: conviene pensar en la música como un instrumento emocional, y su tono debe encajar con lo que el juego quiere que sienta el jugador.',
        ],
      },
      'time-and-immersion': {
        title: 'Música, inmersión y tiempo perdido',
        paragraphs: [
          'Perder la noción del tiempo es una de las señales de inmersión que más se mencionan. Timothy Sanders y Paul Cairns comprobaron si la música podía producirla. Añadieron música a un sencillo juego de laberintos y midieron la percepción del tiempo transcurrido con dos métodos bien asentados en psicología. La música cambió la percepción del tiempo en una de las dos medidas pero no en la otra y, según la música elegida, podía aumentar o reducir la inmersión.',
          'Los autores describen el panorama general como complejo, y ese es el resumen honesto. La música puede hacer que jugar absorba más, pero la música equivocada puede hacer lo contrario, y su efecto sobre el tiempo es real pero no sencillo. En un juego tranquilo, es una razón para elegir la música con cuidado y dejar que los jugadores la bajen, en lugar de suponer que más banda sonora es más disfrute. Hemos escrito sobre los demás ingredientes de un juego que relaja en [qué hace de verdad que un juego de puzles sea tranquilo](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
      },
      'when-sound-fades': {
        title: 'Cuando el sonido pasa a segundo plano',
        paragraphs: [
          'El sonido no siempre domina. Katja Rogers y sus colegas compararon el mismo juego de terror en un monitor y en realidad virtual, y luego probaron distintos tipos de audio espacial en realidad virtual. Descubrieron que el audio influía de forma más implícita en la experiencia en realidad virtual, porque la experiencia sensorial en conjunto era muy intensa, y que la dimensionalidad del audio no parecía ser un factor significativo en la experiencia del jugador en ese entorno.',
          'Es un correctivo útil. La aportación del sonido depende de todo lo demás que recibe el jugador, y en un entorno visual rico puede sentirse más que notarse. Leído al revés, el mismo resultado sugiere por qué un juego pequeño y sencillo puede sacar tanto partido del sonido. Cuando la pantalla está tranquila, el oído trabaja más.',
        ],
      },
      'design-for-sound-off': {
        title: 'Diseñar para cuando el sonido está apagado',
        paragraphs: [
          'Aquí está la tensión práctica. El sonido importa para la experiencia, y sin embargo los móviles pasan buena parte de su vida en silencio: en el tren, en salas de espera, junto a alguien que duerme. Un jugador sordo o con pérdida auditiva quizá no lo oiga nunca. Así que el sonido debe reforzar, no cargar con todo. Cada señal sonora que le dice algo al jugador debería tener una pareja visual, e idealmente una háptica; Tanay Singhal y Oliver Schneider descubrieron que una vibración bien diseñada que refuerza el feedback de la pantalla puede por sí misma mejorar lo divertido e inmersivo que resulta un juego.',
          'OutBrick está diseñado para jugarse entero en silencio. Los nueve amigos de ladrillo no tienen voz y solo hablan con bocadillos de texto, y todo lo que importa en un tablero, desde que un ladrillo se para hasta que despejas el tablero, se muestra en pantalla. Por la misma razón, el color va acompañado de símbolos en cada ladrillo, activados de serie: ningún sentido debería ser la única vía de acceso. Nuestra [página de accesibilidad](/accessibility) recoge todo lo demás, y nuestro artículo sobre [game feel y juice](/blog/game-feel-and-juice) analiza cómo funciona el feedback a través de los sentidos. Para ver por qué el color no debe ser la única pista, lee [por qué el color nunca debería ser la única pista en un puzle](/blog/color-shape-accessibility).',
        ],
        bullets: [
          'Acompaña cada sonido con significado de una señal visual.',
          'Mantén la música, los efectos y cualquier voz en controles de volumen separados.',
          'Guarda el sonido más distintivo para el momento más raro y mejor.',
          'Prueba el juego entero en silencio antes de publicarlo.',
        ],
      },
    },
    pullQuote: 'Cuando la pantalla está tranquila, el oído trabaja más.',
    faqs: [
      { question: '¿Cómo afecta el sonido a la experiencia de juego?', answer: 'En un experimento controlado, activar el sonido del juego mejoró las valoraciones de los jugadores sobre inmersión, flow, competencia, tensión, reto y emociones. La música, en particular, aumenta el disfrute porque intensifica las emociones.' },
      { question: '¿Puede la música de un juego cambiar la percepción del tiempo?', answer: 'Puede. Un estudio descubrió que añadir música a un juego de laberintos cambiaba la percepción del tiempo transcurrido en una de dos medidas, y que músicas distintas podían aumentar o reducir la inmersión.' },
      { question: '¿Los juegos para móvil deberían funcionar sin sonido?', answer: 'Sí. Mucha gente juega en silencio y algunos jugadores no pueden oír el audio, así que toda señal sonora importante debería mostrarse también en pantalla y, a ser posible, apoyarse en la vibración.' },
      { question: '¿Puedo jugar a OutBrick sin sonido?', answer: 'Sí. Todo lo que importa en un tablero se muestra en pantalla, y los nueve amigos de ladrillo solo hablan con bocadillos de texto, sin voces.' },
    ],
  },
  'loot-boxes-ethical-monetisation': {
    title: 'Cajas de botín, recompensas variables y monetización ética',
    dek: 'Gastar en cajas de botín se asocia de forma constante al juego problemático. Qué dicen los estudios, qué es la monetización depredadora y una prueba justa.',
    imageAlt: 'Un iPhone con el mapa del Viaje de OutBrick en Cloud Carnival, entre un Zippy amarillo que guiña un ojo y un Bricko rojo',
    tags: ['cajas de botín', 'loot boxes', 'monetización', 'ética en los videojuegos', 'juegos para móvil'],
    intro: 'Una caja de botín es algo sencillo: pagas, abres y recibes algo, pero no sabes qué hasta que ya es tarde para cambiar de idea. Se han convertido en una de las funciones más estudiadas de los videojuegos, y en una de las más reguladas. La investigación ya es lo bastante amplia como para afirmar algunas cosas con claridad, y para ser honestos sobre lo que todavía no puede afirmar. También da a jugadores y creadores una prueba práctica para cualquier forma en que un juego pide dinero, incluida la nuestra. OutBrick gana dinero con compras opcionales y vídeos con recompensa que solo se ven si los pides, así que al final hemos intentado aplicarnos la misma prueba.',
    keyTakeaways: [
      'En muchos estudios, gastar en cajas de botín se asocia a síntomas de juego problemático; un metaanálisis situó la correlación en torno a 0,26, pequeña pero replicable.',
      'Los estudios son sobre todo encuestas, así que no pueden decir si las cajas de botín causan el juego problemático o atraen a quienes ya lo tienen; ambas cosas son motivo de cautela.',
      'Una monetización justa muestra el precio completo y la recompensa antes de que te comprometas, nunca oculta el coste a largo plazo y hace que decir que no no cueste nada.',
    ],
    sections: {
      'what-a-loot-box-is': {
        title: 'Qué es una caja de botín y por qué se parece al juego de azar',
        paragraphs: [
          'Una caja de botín es un objeto que compras con dinero real, directamente o mediante una moneda del juego, cuyo contenido es aleatorio. Entre sus parientes cercanos están los sobres de cartas, las tiradas de gacha y las ruletas de premios. Lo que las hace psicológicamente particulares es la recompensa variable: no sabes qué te va a tocar y, de vez en cuando, te toca algo raro. Las recompensas impredecibles están entre las formas más fiables que se conocen de hacer que la gente repita una conducta, y precisamente por eso se usan.',
          'En 2018, Aaron Drummond y James Sauer compararon los sistemas de cajas de botín de 22 juegos recientes con cinco criterios que psicólogos y reguladores usan para reconocer el juego de azar, entre ellos un intercambio de dinero o de algo de valor, un resultado decidido al menos en parte por el azar y unos ganadores que ganan a costa de los perdedores. Casi la mitad de los juegos cumplían los cinco. Su argumento no era que toda caja de botín sea un juego de azar ilegal, una cuestión legal que varía según el país, sino que muchas se le parecen psicológicamente.',
        ],
      },
      'what-the-evidence-shows': {
        title: 'Qué muestran las pruebas',
        paragraphs: [
          'El estudio más conocido es una gran encuesta de David Zendle y Paul Cairns a 7422 jugadores. Cuanto más gastaba la gente en cajas de botín, más graves tendían a ser sus síntomas de juego problemático. En varianza explicada, esa relación era unas trece veces más fuerte que la que había entre el juego problemático y el gasto en otros objetos del juego, lo que sugiere que lo que importa es el rasgo parecido al juego de azar, no el gasto en general.',
          'Un estudio posterior con 1155 jugadores de 16 a 18 años, de Zendle, Rachel Meyer y Harriet Over, encontró la misma relación, y más fuerte: de tamaño moderado a grande. Muchas de las razones que daban los jugadores jóvenes para comprar cajas de botín recordaban a razones habituales para jugar por dinero. En 2021, Shaun Garea y sus colegas reunieron la literatura en un metaanálisis. En 15 estudios, el gasto en cajas de botín se correlacionaba con el juego problemático en torno a r = 0,26, y en siete estudios con el juego excesivo en torno a r = 0,25. Lo describen como una relación pequeña pero replicable que puede ser clínicamente relevante.',
        ],
      },
      'what-the-link-means': {
        title: 'Qué significa esa relación y qué no',
        paragraphs: [
          'Estos estudios son sobre todo encuestas transversales, así que no pueden decirnos hacia dónde apunta la flecha. Las cajas de botín podrían empujar a la gente hacia el juego problemático. O quienes ya tienen un problema con el juego podrían gastar mucho en cajas de botín porque están ahí. Zendle y Cairns dicen explícitamente que sus datos no permiten separar las dos cosas. Su argumento es que ambas explicaciones son preocupantes: en una, el juego causa daño; en la otra, se beneficia de forma desproporcionada de personas que ya son vulnerables.',
          'Daniel King y Paul Delfabbro le pusieron nombre al problema general: monetización depredadora, es decir, sistemas de compra que disfrazan u ocultan el coste a largo plazo de una actividad hasta que los jugadores ya están comprometidos económica y psicológicamente. Las cajas de botín son una de sus formas. Otras son las ofertas que llegan en los momentos de frustración y las monedas pensadas para que los precios sean difíciles de comparar. Analizamos estos trucos con más detalle en [los patrones oscuros en los juegos para móvil](/blog/dark-patterns-in-mobile-games).',
        ],
      },
      'a-fair-monetisation-test': {
        title: 'Una prueba justa de cómo un juego pide dinero',
        paragraphs: [
          'Los juegos gratuitos tienen que pagarse de alguna manera, y pedir dinero no está mal en sí mismo. La investigación apunta a un puñado de preguntas que separan un intercambio justo de uno depredador. Le sirven tanto a un padre o una madre que revisa el juego de su hijo como a un estudio que diseña una tienda.',
        ],
        bullets: [
          '¿Sabes exactamente qué vas a recibir antes de pagar, ya sea con dinero o con tiempo?',
          '¿El coste total está claro, o se esconde tras una moneda, un lote o un temporizador?',
          '¿Puedes avanzar en el juego principal sin pagar?',
          '¿Decir que no te cuesta algo, o el juego hace desagradable negarse?',
          '¿Las ofertas llegan en tus peores momentos, como justo después de fallar?',
          '¿Hay un límite razonable, o el gasto y la repetición pueden seguir sin fin?',
        ],
      },
      'where-outbrick-stands': {
        title: 'Dónde está OutBrick',
        paragraphs: [
          'OutBrick gana dinero de dos formas: compras opcionales dentro de la app y vídeos con recompensa que solo se reproducen cuando pulsas un botón para pedir algo. Hay seis espacios: una vida, cinco movimientos más, dos acciones de deshacer, un potenciador activado antes del primer movimiento, las monedas de la tarjeta de victoria pagadas otra vez y un segundo giro de la Brick Wheel. Cada uno tiene su propio límite diario, ocho, seis, ocho, cuatro, cuatro y uno, así que treinta y un vídeos al día es lo máximo que el juego pagará nunca. No hay banners ni anuncios intersticiales. Decir que no, no te cuesta nada, y nada de lo que paga un vídeo hay que comprarlo ni verlo para jugar los tableros principales. «Quitar anuncios» desactiva la publicidad para siempre, y el Brick Pass sube el límite de vidas de cinco a ocho y desactiva la publicidad mientras lo tengas.',
          'Cinco de las seis recompensas son fijas y se indican antes de ver el vídeo. La sexta, el giro extra de la Brick Wheel, tiene un pequeño componente de azar, por eso vale la pena mencionarla aquí, y está limitada a uno al día. Si ese es el equilibrio adecuado lo juzgas tú, y por eso la página de inicio explica [exactamente lo que cuestan las vidas, deshacer y los anuncios](/#fair). También creemos que un juego debería ser fácil de dejar; nuestras notas sobre [cómo los juegos se convierten en hábitos](/blog/how-games-become-habits) explican por qué, y [qué hace que un juego de puzles sea tranquilo](/blog/relaxing-puzzle-games-what-makes-one-calm) analiza cómo las vidas y las recargas pueden ser justas.',
        ],
      },
    },
    pullQuote: 'Cinco de las seis recompensas son fijas y se indican antes de ver el vídeo.',
    faqs: [
      { question: '¿Las cajas de botín son juegos de azar?', answer: 'Legalmente depende del país. Psicológicamente, los investigadores han visto que muchos sistemas de cajas de botín cumplen los criterios habituales del juego de azar, y el gasto en ellas se asocia de forma constante a síntomas de juego problemático.' },
      { question: '¿Las cajas de botín causan juego problemático?', answer: 'Las pruebas muestran una relación, pero no su dirección. Las cajas de botín podrían llevar a algunos jugadores hacia el juego problemático, o las personas con problemas de juego podrían gastar más en ellas; los investigadores sostienen que cualquiera de las dos posibilidades es motivo de cautela.' },
      { question: '¿Qué es la monetización depredadora en los videojuegos?', answer: 'Describe sistemas de compra que ocultan o retrasan el verdadero coste a largo plazo de jugar hasta que los jugadores ya están comprometidos económica y psicológicamente, como las recompensas de pago aleatorias o las ofertas que llegan en momentos de frustración.' },
      { question: '¿OutBrick tiene cajas de botín?', answer: 'Los vídeos con recompensa de OutBrick dan recompensas fijas e indicadas de antemano, salvo un segundo giro diario de la Brick Wheel, que tiene un componente de azar. Todos los vídeos son opcionales y tienen límite, y decir que no, no cuesta nada; la página de inicio explica exactamente lo que cuestan las vidas, deshacer y los anuncios.' },
    ],
  },
  'dark-patterns-in-mobile-games': {
    title: 'Patrones oscuros en juegos para móvil: cómo detectarlos',
    dek: 'Ventanas insistentes, monedas confusas, ofertas en tu peor momento: qué dice la investigación del diseño manipulador en los juegos y cómo detectarlo.',
    imageAlt: 'Un iPhone con la tienda de OutBrick, sus ofertas especiales y el Brick Pass, entre Poppy con una varita con una estrella y Bloo con su reloj',
    tags: ['patrones oscuros', 'dark patterns', 'ética en los videojuegos', 'juegos para móvil', 'monetización'],
    intro: 'El término «patrón oscuro» (dark pattern) se acuñó para las webs: la casilla ya marcada, el botón de cancelar en gris sobre gris, la suscripción que se contrata con un toque y se da de baja con doce. Los juegos heredaron todos esos trucos e inventaron algunos propios. Como un juego está diseñado para absorberte, desde dentro puede costar ver la línea entre lo que engancha y lo que manipula. Investigadores de interacción persona-ordenador, protección del consumidor y estudios sobre adicciones han empezado a trazar esa línea. Su trabajo da a los jugadores un vocabulario para esa sensación de que un juego juega en su contra, y a los diseñadores, un espejo. Hacemos un juego gratuito, así que también nos hemos puesto delante del espejo.',
    keyTakeaways: [
      'Los patrones oscuros son decisiones de diseño que anteponen los intereses del creador a los del usuario, mediante la insistencia, la obstrucción, el ocultamiento, la interferencia en la interfaz o la acción forzada.',
      'Preguntados por la monetización injusta en los juegos, los jugadores describieron 35 técnicas distintas, desde el pago para ganar hasta cobrar por funciones básicas de comodidad.',
      'La mejor defensa es reconocer los patrones: si un juego pone difícil negarse, esconde un coste o elige tu peor momento para venderte algo, está trabajando sobre ti, no para ti.',
    ],
    sections: {
      'what-dark-patterns-are': {
        title: 'Qué son los patrones oscuros',
        paragraphs: [
          'Colin Gray y sus colegas reunieron un corpus de ejemplos que los propios profesionales de UX habían señalado como patrones oscuros y analizaron qué problemas éticos planteaban. Describen los patrones oscuros como casos en los que el valor para el usuario se sustituye por el valor para el accionista, y agrupan las estrategias en cinco familias: la insistencia (interrumpir una y otra vez para empujar una elección), la obstrucción (hacer algo más difícil de lo necesario), el ocultamiento (esconder o retrasar información), la interferencia en la interfaz (manipular la pantalla para que una opción destaque) y la acción forzada (exigir algo que no tiene que ver para conseguir lo que quieres).',
          'No son raros. Arunesh Mathur y sus colegas crearon herramientas automáticas para analizar unas 53 000 páginas de producto de unas 11 000 tiendas online y encontraron 1818 casos de patrones oscuros, de 15 tipos, además de empresas externas que los vendían como funciones listas para usar. Si las tiendas corrientes los usan a esa escala, sería sorprendente que los juegos, que tienen muchas más pantallas y muchos más momentos de emoción, no lo hicieran.',
        ],
      },
      'how-they-look-in-games': {
        title: 'Cómo se ven en los juegos',
        paragraphs: [
          'Elena Petrovskaya y David Zendle pidieron a 1104 jugadores que describieran alguna vez en que se hubieran topado con una transacción en un juego que les pareciera engañosa, agresiva o injusta. A partir de las respuestas identificaron 35 técnicas distintas en ocho ámbitos: dinámicas de juego diseñadas para impulsar el gasto, productos que no cumplen las expectativas, cobrar por comodidades básicas, publicidad depredadora, monedas del juego, pago para ganar, la presencia general de microtransacciones y otros. Varias de las prácticas que describieron los jugadores no parecían ajustarse a las normas de protección del consumidor del Reino Unido.',
          'Fíjate en cuántos de esos ámbitos no tienen nada que ver con una pantalla de tienda. Cobrar por comodidades significa hacer la versión gratuita tediosa a propósito, para que pagar se sienta como un alivio más que como una compra. Las monedas del juego ponen una capa de conversión entre tú y el precio real, y los lotes de tamaños raros complican aún más las cuentas. Algunos vienen tanto del diseño del juego como de su tienda. Daniel King y sus colegas examinaron 13 patentes de sistemas de compra dentro de juegos y encontraron diseños que usan el seguimiento del comportamiento y la manipulación de precios para personalizar ofertas y fomentar que se siga gastando, a menudo con protecciones limitadas, como los reembolsos. Las patentes no demuestran que ningún juego concreto use estos sistemas, pero muestran lo que la industria se ha planteado construir.',
        ],
      },
      'younger-players': {
        title: 'Por qué los jugadores más jóvenes están más expuestos',
        paragraphs: [
          'Los niños y los adolescentes juegan a muchos juegos gratuitos y pueden ser más vulnerables a la manipulación. Dan Fitton y Janet Read combinaron la experiencia de profesionales, la investigación existente y un estudio con 39 chicas de 12 y 13 años para construir un marco de lo que llaman App Dark Design. El resultado es un conjunto de aspectos de diseño problemáticos, muchos de ellos ligados a la publicidad y las compras dentro de la app, que según los autores los jóvenes de todo el mundo encuentran cada día en sus apps.',
          'Para madres y padres, eso invita a hablar de estos patrones abiertamente. A un niño capaz de decir «eso es un botón de cerrar falso» o «quieren que compre ahora porque acabo de perder» es más difícil manipularlo. Los ajustes también ayudan: en los dispositivos de Apple, «Solicitar la compra» de En familia permite que un adulto apruebe las compras de un niño antes de que se hagan.',
        ],
      },
      'a-field-guide': {
        title: 'Guía de campo de los patrones oscuros en los juegos',
        paragraphs: [
          'Jacob Aagaard y sus colegas hicieron entrevistas y talleres con jugadores, diseñadores, desarrolladores y responsables de negocio de juegos para móvil. Su análisis muestra que los patrones oscuros rara vez vienen de un único villano; surgen de la presión comercial, las métricas y la costumbre, y los propios profesionales sienten esa tensión. Por eso ayuda tener una lista. Una regla práctica lo cubre casi todo. Si un juego pone difícil negarse, esconde un coste o elige tu peor momento para venderte algo, está trabajando sobre ti, no para ti. Estos son los patrones concretos que vale la pena aprender a detectar, sacados de los estudios anteriores:',
        ],
        bullets: [
          'Ofertas que aparecen justo después de fallar, cuando más frustrado estás.',
          'Monedas que hacen difícil saber cuánto cuesta algo en dinero real.',
          'Temporizadores y medidores de energía que detienen el juego a menos que pagues o esperes.',
          'Rachas y recompensas diarias que castigan un día perdido.',
          'Anuncios que se reproducen sin que los pidas, o botones de cerrar diminutos o que tardan en aparecer.',
          'Ventanas emergentes que vuelven en cada sesión hasta que cedes.',
          'Funciones que antes eran gratis y pasan a ser de pago.',
        ],
      },
      'holding-up-the-mirror': {
        title: 'Delante del espejo',
        paragraphs: [
          'La portada de este artículo muestra la tienda de OutBrick, con sus ofertas especiales y el Brick Pass, porque creemos que las mismas preguntas deben aplicarse a nosotros. Esto es lo que podemos decir con claridad. La publicidad son solo vídeos con recompensa: no se reproduce nada a menos que pulses un botón para pedir algo, no hay banners ni anuncios intersticiales, y cada uno de los seis espacios tiene un límite diario. Decir que no, no cuesta nada, y no hay que comprar ni ver nada para jugar los tableros principales. Hay vidas: tienes cinco, recuperas una cada treinta minutos y solo pierdes una cuando un intento termina sin despejar el tablero. Todo esto se explica en la página de inicio, en [lo que cuestan las vidas, deshacer y los anuncios](/#fair).',
          'El resto tendrás que juzgarlo tú, y deberías hacerlo. La cuestión relacionada de las recompensas aleatorias se trata en [cajas de botín, recompensas variables y monetización ética](/blog/loot-boxes-ethical-monetisation), y la presión de las rachas, en [por qué los rituales diarios no deberían exigirte nada](/blog/daily-rituals-that-dont-demand-you). Si un juego, incluido el nuestro, te deja la sensación de que te están manejando más que entreteniendo, nuestra guía sobre [cuándo jugar y cuándo dejar el móvil](/blog/when-to-play-and-when-to-pause) es un buen punto de partida.',
        ],
      },
    },
    pullQuote: 'Si un juego pone difícil negarse, esconde un coste o elige tu peor momento para venderte algo, está trabajando sobre ti, no para ti.',
    faqs: [
      { question: '¿Qué son los patrones oscuros en los juegos?', answer: 'Los patrones oscuros son decisiones de diseño que empujan a los jugadores a hacer algo que beneficia más al creador del juego que al jugador, como gastar dinero, ver anuncios o jugar más de lo que pensaban. Las formas más comunes son las ventanas emergentes insistentes, los costes ocultos y las ofertas que llegan en momentos de frustración.' },
      { question: '¿Cómo detecto el diseño manipulador en un juego para móvil?', answer: 'Fíjate en las ofertas justo después de fallar, las monedas que ocultan los precios reales, los anuncios que no has pedido, las rachas que castigan los días perdidos y cualquier cosa que haga más difícil decir que no que decir que sí.' },
      { question: '¿Los patrones oscuros en los juegos son ilegales?', answer: 'Algunos pueden serlo. La normativa de protección del consumidor en lugares como el Reino Unido ya prohíbe las prácticas comerciales engañosas y agresivas, y los investigadores han encontrado técnicas de monetización en juegos que parecen encajar mal con esas normas. Muchos otros patrones oscuros son legales, pero igualmente conviene evitarlos.' },
      { question: '¿Los patrones oscuros de las apps afectan más a los niños?', answer: 'Los investigadores creen que los jugadores más jóvenes pueden ser más vulnerables. Un estudio con chicas de 12 y 13 años descubrió que se topaban a menudo con anuncios difíciles de cerrar y con presión para gastar en apps gratuitas.' },
      { question: '¿OutBrick muestra anuncios sin preguntar?', answer: 'No. La publicidad de OutBrick son solo vídeos con recompensa, que se reproducen cuando pulsas un botón para pedir una recompensa concreta, con un límite diario en cada uno de sus seis espacios y sin banners ni anuncios intersticiales.' },
    ],
  },
  'why-we-get-attached-to-game-characters': {
    title: 'Por qué nos encariñamos con los personajes de videojuegos',
    dek: 'Admiramos a los personajes, nos preocupan y los echamos de menos. La investigación sobre el apego, los vínculos parasociales y lo adorable explica por qué.',
    imageAlt: 'Un tablero real de OutBrick en un iPhone entre Vio con auriculares y Peach con un melocotoncito en la cabeza, sobre una pared de ladrillo azul marino',
    tags: ['personajes de videojuegos', 'mascotas de videojuegos', 'apego a personajes', 'relaciones parasociales', 'diseño de personajes'],
    intro: 'Hay quien llora a personajes que nunca existieron. Les ponen su nombre a sus mascotas, se preocupan por ellos entre partida y partida y sienten una pequeña punzada cuando dejan atrás a un compañero. Nada de esto es nuevo: el público creaba vínculos unilaterales con los locutores de radio mucho antes de que existieran los videojuegos. Pero los juegos añaden algo que las películas y los libros no pueden, porque el personaje reacciona a ti, y a veces eres responsable de él. La investigación sobre la relación entre jugador y personaje ya es lo bastante rica como para explicar gran parte de esa atracción, incluido por qué un personaje que nunca dice una palabra puede importar igualmente. También plantea una pregunta que todo estudio con una mascota debería hacerse: ¿qué les debemos a los jugadores que acaban queriéndola?',
    keyTakeaways: [
      'Los jugadores crean varios tipos distintos de apego con los personajes, desde admirar su habilidad hasta preocuparse por su bienestar.',
      'Los vínculos «parasociales», unilaterales, con figuras de los medios son una parte normal de cómo nos relacionamos con los personajes, descrita ya en 1956.',
      'Los rasgos adorables atraen cuidado y atención, lo que da a los diseñadores un poder real y la responsabilidad equivalente de no usarlo en contra de los jugadores.',
    ],
    sections: {
      'seven-kinds-of-attachment': {
        title: 'Siete tipos de apego',
        paragraphs: [
          'Julia Ayumi Bopp y sus colegas pidieron a 213 jugadores que describieran un personaje de videojuego al que tuvieran un cariño especial, y por qué. En lugar de un «apego» genérico, encontraron siete formas distintas, que iban desde el entusiasmo por la competencia de un personaje en el juego, pasando por admirarlo como modelo, hasta una profunda preocupación por su bienestar. A algunos jugadores les gustaba un personaje porque era divertido de controlar; a otros, porque lo sentían como un amigo; a otros, porque parecía necesitar protección.',
          'El estudio era cualitativo, basado en lo que los jugadores decidieron contar, así que cartografía los tipos de apego en lugar de medir lo frecuente que es cada uno. Su valor está en la variedad. El apego no es un mando que sube con más diálogo o mejores gráficos. Un personaje pequeño y sencillo puede ganarse la admiración por hacer algo bien, el cariño por ser una compañía agradable y constante, o el cuidado por parecer un poco vulnerable.',
          'Esa variedad importa para el diseño. Un personaje pensado para ser admirado necesita cualidades distintas de uno pensado para que lo cuiden. Katharina Emmerich, Patrizia Ring y Maic Masuch encuestaron a 237 jugadores sobre personajes acompañantes y descubrieron que valoran la personalidad y la integración en el juego, y que esperan que los acompañantes se comporten de forma adecuada al contexto, actúen por su cuenta y tomen la iniciativa. Un acompañante que se queda quieto hasta que se lo pides, o que dice lo que no toca en el peor momento, puede estropear toda la experiencia.',
        ],
      },
      'intimacy-at-a-distance': {
        title: 'Intimidad a distancia',
        paragraphs: [
          'En 1956, los sociólogos Donald Horton y Richard Wohl describieron un nuevo tipo de relación creada por la radio y la televisión. El público llegaba a sentir que conocía a los presentadores y artistas que veía y oía con regularidad, y reaccionaba ante ellos casi como ante amigos, aunque la relación iba en un solo sentido. Lo llamaron interacción parasocial y lo describieron como intimidad a distancia.',
          'Los juegos llevan esa idea más lejos, porque el personaje de la pantalla puede responder. Un amigo que te saluda al llegar, lo celebra cuando lo consigues y pone cara de preocupación cuando te atascas sigue sin ser una persona, pero el bucle de acción y reacción hace que el vínculo parezca más mutuo. Melissa Lewis, René Weber y Nicholas David Bowman desarrollaron una de las primeras escalas para medir el apego a los personajes en los juegos. Descubrieron que se relacionaba con el disfrute del juego y el tiempo dedicado a jugar, y también con medidas de juego problemático, un recordatorio de que el mismo vínculo que hace entrañable un juego también puede hacer que cueste dejarlo.',
        ],
      },
      'the-pull-of-cute': {
        title: 'La atracción de lo adorable',
        paragraphs: [
          'Muchas mascotas comparten un aspecto: cabeza grande, cara redonda, ojos grandes. El etólogo Konrad Lorenz llamó a este conjunto de rasgos el esquema infantil. Melanie Glocker y sus colegas lo pusieron a prueba experimentalmente ajustando de forma digital fotografías de caras de bebés. Con 122 estudiantes, las caras con rasgos de esquema infantil más marcados se valoraron como más adorables y despertaron una motivación más fuerte para cuidarlas.',
          'Lo adorable también podría influir en cómo prestamos atención. En tres pequeños experimentos, Hiroshi Nittono y sus colegas descubrieron que, después de ver fotos de cachorros de perro y gato, los participantes hacían una tarea de motricidad fina y otra de búsqueda visual con más cuidado que después de ver animales adultos, y centraban más la atención. Las muestras eran pequeñas y las tareas sencillas, así que sería exagerado afirmar que los personajes adorables hacen mejor a nadie resolviendo puzles. Pero los resultados sí ayudan a explicar por qué una cara amable en la pantalla de un puzle puede resultar tranquilizadora en lugar de distraer.',
        ],
      },
      'what-designers-owe': {
        title: 'Qué les deben los diseñadores a los jugadores que se encariñan',
        paragraphs: [
          'Si se junta la investigación, describe un poder real. Los personajes pueden atraer cuidado, atención y lealtad. La cuestión ética es qué hace un juego con eso. Usar un personaje para celebrar los logros de un jugador, hacerle compañía o suavizar un momento difícil es un regalo. Usar un personaje para que un jugador vuelva por culpa, como una cara triste porque te saltaste un día o un amigo que te «necesita» para que compres algo, convierte el cariño en palanca. Es uno de los patrones que tratamos en [los patrones oscuros en los juegos para móvil](/blog/dark-patterns-in-mobile-games).',
          'Aquí va una prueba sencilla. ¿Seguiría pareciendo amable el comportamiento del personaje si el jugador nunca gastara nada ni volviera? Si la respuesta es sí, probablemente el vínculo se está usando bien. Si el personaje solo se muestra cariñoso cuando el jugador paga, o se pone triste cuando se va, el cariño se ha convertido en una herramienta de venta.',
        ],
      },
      'nine-friends-no-voices': {
        title: 'Nueve amigos, ninguna voz',
        paragraphs: [
          'OutBrick tiene nueve amigos de ladrillo: Bloo, Bricko, Flurry, Moss, Peach, Poppy, Sprout, Vio y Zippy. Tienen forma de ladrillo, en la pantalla de inicio aparecen tres a la vez y cada uno tiene su propio baile de victoria. No tienen voz; se mueven y solo hablan con bocadillos de texto. Cada uno tiene un carácter sencillo que el jugador puede leer de un vistazo: Bloo es el del reloj, Peach es la que lo planea todo con cuidado, Sprout es el de las preguntas, Vio es la crítica con auriculares y Zippy es el que se distrae. Puedes conocerlos a todos en [la página de los amigos de ladrillo](/mascots).',
          'La investigación sugiere que el silencio no tiene por qué debilitar un vínculo. En el estudio de Bopp, el apego nacía tanto de la competencia, la admiración y el cuidado como del diálogo, y un personaje callado deja más espacio para que el jugador lo complete. Es el mismo principio de decir menos que admiramos en [Monument Valley](/blog/monument-valley-less-game-more-experience), y la compañía sin exigencias sobre la que escribimos en [Animal Crossing y el tiempo compartido](/blog/animal-crossing-shared-time).',
        ],
      },
    },
    pullQuote: '¿Seguiría pareciendo amable el comportamiento del personaje si el jugador nunca gastara nada ni volviera?',
    faqs: [
      { question: '¿Por qué nos encariñamos con los personajes de los videojuegos?', answer: 'Los jugadores se vinculan a los personajes por razones distintas: admirar su habilidad, verlos como modelos, disfrutar de su compañía o sentirse responsables de su bienestar. Como los personajes de los juegos responden al jugador, estos vínculos pueden parecer más mutuos que los que se crean con personajes de películas o libros.' },
      { question: '¿Qué es una relación parasocial?', answer: 'Es un vínculo unilateral con una figura de los medios, como un presentador o un personaje de ficción, que no sabe que existes. Los investigadores lo describieron en 1956, y es una parte normal de cómo nos relacionamos con los medios.' },
      { question: '¿Por qué las mascotas de los videojuegos suelen ser adorables?', answer: 'Rasgos como una cabeza grande, una cara redonda y ojos grandes, lo que se conoce como esquema infantil, se perciben como adorables y aumentan las ganas de cuidar. Los diseñadores los usan para que los personajes caigan bien al instante.' },
      { question: '¿Hablan los personajes de OutBrick?', answer: 'No. Los nueve amigos de ladrillo de OutBrick no tienen voz; se mueven y solo hablan con bocadillos de texto, y cada uno tiene su propio baile de victoria.' },
    ],
  },
  'colour-in-game-interfaces': {
    title: 'El color en los juegos: contraste, significado y emoción',
    dek: 'Lo que la psicología del color puede y no puede decir al diseño de juegos, por qué el contraste pesa más que el tono y cómo hacer piezas legibles.',
    imageAlt: 'Un tablero real de OutBrick con ladrillos de colores en un iPhone, entre Moss con su cinturón de herramientas y Flurry con un gorro de pompón a rayas',
    tags: ['color en videojuegos', 'psicología del color', 'contraste', 'daltonismo', 'diseño de juegos'],
    intro: 'El color es lo primero en lo que te fijas en casi cualquier juego y lo último en lo que piensa casi cualquier jugador. El rojo es peligro, el verde es adelante, el dorado es tesoro, y nadie tuvo que decírtelo. Los diseñadores se apoyan en el color constantemente, para crear un ambiente, para señalar lo importante y, en un puzle de ordenar colores, para transmitir las propias reglas. La divulgación sobre psicología del color está llena de afirmaciones rotundas: el azul calma, el rojo excita, el amarillo da hambre. La investigación es más interesante y más prudente. Lo que más respalda es menos vistoso que el estado de ánimo: contraste, coherencia y no depender nunca solo del color.',
    keyTakeaways: [
      'El color influye en las emociones y la conducta, pero la investigación es joven y muchas afirmaciones populares sobre colores concretos van más allá de las pruebas.',
      'Las asociaciones entre color y emoción son en gran medida compartidas en 30 países, con diferencias locales, así que los significados del color en un juego deben reforzarse, no darse por supuestos.',
      'Para la legibilidad, el contraste importa más que el tono: la gente lee y busca más rápido cuando la diferencia de luminosidad es grande.',
    ],
    sections: {
      'what-colour-research-shows': {
        title: 'Lo que la psicología del color puede decirnos, y lo que no',
        paragraphs: [
          'La revisión de Andrew Elliot y Markus Maier en la Annual Review of Psychology es un buen correctivo frente a la psicología del color de divulgación. Muestra que el color puede tener un significado importante e influir en las emociones, el pensamiento y la conducta de las personas, con buena parte de las pruebas procedentes de contextos de rendimiento y de atracción. También advierte de que el campo está en una fase temprana: los trabajos anteriores tenían problemas metodológicos, y hace falta mucha más investigación sobre sus condiciones límite y sobre si se generaliza al mundo real antes de justificar recomendaciones firmes.',
          'Para los diseñadores de juegos, eso pide humildad. Las afirmaciones populares sobre colores concretos suelen ir muy por delante de estas pruebas, y casi nada de ellas se obtuvo mientras la gente jugaba, así que la llamada de la revisión a estudiar más los contextos reales se aplica al diseño de juegos con más fuerza todavía. El color es una palanca real, pero afirmaciones como «este tono de azul reduce el estrés» deben tratarse como hipótesis que comprobar con tus propios jugadores, no como reglas.',
        ],
      },
      'shared-meanings': {
        title: 'Significados compartidos, con acento local',
        paragraphs: [
          '¿Los significados del color son universales o aprendidos? Domicele Jonauskaite y un gran equipo internacional pidieron a 4598 personas de 30 países, que hablaban 22 idiomas, que asociaran 20 conceptos emocionales con 12 términos de color. Los patrones eran notablemente parecidos de un país a otro, con una similitud media de r = 0,88. Aun así, el país de origen de cada persona seguía prediciendo sus asociaciones más allá del patrón universal, y la similitud era mayor entre países cercanos por idioma o geografía.',
          'Es una buena noticia para un juego con jugadores de todo el mundo: los significados generales del color viajan bien. Las diferencias locales son un motivo para respaldar los significados importantes con forma, texto o posición, en lugar de confiar en que el color diga lo mismo a todo el mundo.',
          'Los juegos también construyen sus propios lenguajes de color sobre el compartido. Los jugadores aprenden enseguida que un color concreto significa salud, o daño, o una puerta cerrada, y una vez aprendidos, esos significados se convierten en expectativas. Romperlos puede ser una sorpresa deliberada, pero romperlos sin querer es una fuente habitual de confusión. Un juego que usa el rojo tanto para «peligro» como para «recompensa» obliga al jugador a pararse a pensar cada vez que lo ve.',
        ],
      },
      'colour-and-mood-in-games': {
        title: 'Color y estado de ánimo en los mundos de juego',
        paragraphs: [
          'Erik Geslin, Laurent Jégou y Danny Beaudoin estudiaron el color específicamente dentro de los juegos. Mostraron 24 imágenes de videojuegos a 85 participantes, les preguntaron cómo les hacía sentir cada una y compararon las respuestas con mediciones del color de las imágenes. El brillo, la saturación y la luminosidad se correlacionaron significativamente con emociones como la alegría, la tristeza, el miedo y la serenidad, y también lo hicieron las medidas de lo variados y llamativos que eran los colores.',
          'El estudio midió reacciones a imágenes fijas, no al juego, y las correlaciones de este tipo no pueden demostrar causalidad. Pero da a los diseñadores un vocabulario más útil que el tono por sí solo: la luminosidad y la saturación generales de una escena, y lo variados que son sus colores, pueden importar para su ambiente tanto como qué colores contiene. Los autores usan sus resultados para proponer un «guion emocional del color», que planifica la paleta de un juego igual que una película planifica su iluminación.',
        ],
      },
      'contrast-before-hue': {
        title: 'El contraste antes que el tono',
        paragraphs: [
          'Cuando se trata de que algo se lea, gana el contraste. Richard Hall y Patrick Hanna probaron cuatro combinaciones de color de texto y fondo en páginas web con 136 participantes. Las combinaciones con mayor relación de contraste eran en general más legibles. El color no afectó de forma significativa a lo que la gente recordaba, pero los colores preferidos obtuvieron mejores valoraciones estéticas.',
          'Gordon Legge y sus colegas estudiaron más de cerca cómo funciona el contraste. Los lectores con visión normal leían igual de rápido con un contraste de color fuerte, texto que solo se diferenciaba en el tono, que con un contraste de luminancia fuerte, la diferencia de luminosidad. Para los lectores con baja visión, el contraste de luminancia ganaba siempre. Un diseño que separa las piezas solo por el tono, con una luminosidad parecida, funciona para algunos jugadores y falla para otros. Las pautas de accesibilidad web fijan relaciones de contraste mínimas precisamente por eso; la [explicación del W3C sobre el contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) es una introducción clara.',
        ],
      },
      'readable-bricks': {
        title: 'Qué necesita un ladrillo para leerse bien',
        paragraphs: [
          'En un puzle de ordenar colores, el color no es decoración: es la regla. En OutBrick, cada ladrillo solo sale del tablero por la puerta de su color, así que un jugador que no distingue dos colores no puede jugar. Por eso el modo para daltónicos viene activado de serie: cada ladrillo y cada puerta llevan un símbolo a juego, de modo que la forma ordena tanto como el tono. Explicamos el razonamiento en [por qué el color nunca debería ser la única pista en un puzle](/blog/color-shape-accessibility), y la [página de accesibilidad](/accessibility) recoge el resto de las ayudas, incluido VoiceOver.',
          'El ambiente y la legibilidad pueden convivir si cada uno tiene su propio trabajo. El Viaje de OutBrick recorre 167 pueblos de ladrillo, de Cherry Blossom Town a Lavender Hills, y el paisaje puede cambiar mientras los ladrillos del tablero conservan sus colores y sus símbolos. Para la parte práctica de leer rápido un tablero de colores, consulta nuestros [trucos para puzles de ordenar colores](/blog/colour-sort-puzzle-tips). La investigación anterior añade unos cuantos principios que valen para cualquier juego con piezas de colores:',
        ],
        bullets: [
          'Separa las piezas por luminosidad además de por tono, para que sigan distinguiéndose con poca luz, en una pantalla rota o con baja visión.',
          'Da a cada color un solo trabajo, y mantenlo igual en todo el juego.',
          'Respalda cada significado de color con una segunda señal: un símbolo, una forma, una posición o una etiqueta.',
          'Usa la saturación y el brillo para crear ambiente, y que las piezas sigan siendo lo más claro de la pantalla.',
          'Prueba en escala de grises. Si el tablero se sigue leyendo, los colores hacen un trabajo extra en lugar de hacerlo todo.',
        ],
      },
    },
    pullQuote: 'En un puzle de ordenar colores, el color no es decoración: es la regla.',
    faqs: [
      { question: '¿Cómo influye el color en las emociones en los juegos?', answer: 'Un estudio descubrió que el brillo, la saturación y la luminosidad de escenas de videojuegos se correlacionaban con emociones como la alegría, la tristeza, el miedo y la serenidad. La investigación aún es joven, así que las afirmaciones concretas sobre colores individuales deben tomarse con cautela.' },
      { question: '¿Los significados del color son iguales en todas las culturas?', answer: 'En gran medida. Un estudio con 4598 personas de 30 países encontró asociaciones entre color y emoción muy parecidas en todo el mundo, con diferencias menores ligadas al idioma y la geografía.' },
      { question: '¿Por qué es importante el contraste en las interfaces de juego?', answer: 'El contraste, sobre todo la diferencia de luminosidad entre un elemento y su fondo, hace que las cosas se lean y se encuentren más rápido. Los lectores con baja visión dependen más del contraste de luminosidad que de las diferencias de tono.' },
      { question: '¿Qué relación de contraste debería tener el texto de un juego?', answer: 'Las Pautas de Accesibilidad para el Contenido Web piden al menos 4,5:1 entre el texto normal y su fondo, y 3:1 para el texto grande, en su nivel AA. Los juegos no están obligados a cumplirlas, pero son un mínimo sensato y bien probado.' },
      { question: '¿Pueden jugar a OutBrick los jugadores daltónicos?', answer: 'Sí. El modo para daltónicos viene activado de serie, así que cada ladrillo y cada puerta llevan un símbolo a juego además de un color, y VoiceOver es compatible. Nuestra guía sobre [el daltonismo en los videojuegos](/blog/colour-blindness-in-games) explica lo frecuente que es y qué más ayuda.' },
    ],
  },
};
