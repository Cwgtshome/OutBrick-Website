import type { ExtraGuides } from '../../i18n/blog';

/** Journal batch 3 (lib/journal-batches/batch-3.ts) in this language. See lib/blog-l10n/es.ts for the house style. */
export const es3: ExtraGuides = {
  'colour-blindness-in-games': {
    title: 'Daltonismo en los videojuegos: frecuencia y qué ayuda',
    dek: 'Uno de cada doce hombres de origen europeo tiene una deficiencia rojo-verde. Qué supone al jugar y qué ajustes y decisiones de diseño ayudan.',
    imageAlt: 'Moss y Flurry a ambos lados de un teléfono que muestra el tramo de Bamboo Springs en el mapa del Viaje de OutBrick, con ladrillos turquesa, naranjas y rojos flotando',
    tags: ['daltonismo', 'visión del color', 'accesibilidad en videojuegos', 'modo daltónico', 'diseño inclusivo', 'juegos de puzles'],
    intro: 'En cualquier sala con veinticinco hombres de origen europeo, lo más probable es que dos vean el rojo y el verde de forma distinta al resto. La mayoría de los juegos se siguen diseñando como si no estuvieran. Esta guía explica qué es de verdad la deficiencia en la visión del color, con qué frecuencia aparece, qué le hace a quien tiene el mando en las manos y qué ayuda: tanto los ajustes que puedes activar hoy como las decisiones de diseño que los hacen innecesarios.',
    keyTakeaways: [
      'La deficiencia rojo-verde hereditaria afecta a cerca del 8 % de los hombres y del 0,4 % de las mujeres de origen europeo, y a entre el 4 y el 6,5 % de los hombres chinos y japoneses.',
      'Rara vez consiste en «ver en gris». La mayoría de quienes la tienen ven muchos colores, pero confunden ciertos pares y tardan más en encontrar algo cuando el color es la única pista.',
      'La mejor solución es un diseño que nunca dependa solo del color. Los símbolos y los patrones ayudan más cuando son lo bastante sencillos para leerse sin entrenamiento.',
    ],
    sections: {
      'how-common': {
        title: 'Qué tan frecuente es realmente el daltonismo',
        paragraphs: [
          'La revisión que publicó Jennifer Birch en 2012 sobre grandes encuestas aleatorias de población es la cifra a la que recurren casi todos los investigadores. En poblaciones caucásicas europeas, alrededor del 8 % de los hombres y del 0,4 % de las mujeres tienen una deficiencia rojo-verde hereditaria. Entre los hombres de origen chino y japonés la tasa es menor, de entre el 4 y el 6,5 %, y Birch señala que encuestas recientes apuntan a que la cifra aumenta en hombres de origen africano y en regiones pobladas por migrantes. Atribuye las diferencias a efectos fundadores y a la deriva genética, no a la selección natural.',
          'La diferencia entre hombres y mujeres tiene una causa sencilla. Como explica Simunovic en su revisión en Eye, las formas comunes se heredan en el cromosoma X con un patrón recesivo, así que a un hombre le basta con una copia afectada y una mujer necesita dos. Por eso una madre con visión del color normal puede transmitírsela a su hijo. En un juego con millones de jugadores, esos porcentajes suman muchísimas personas que se enfrentan a una interfaz codificada por colores en otras condiciones.',
        ],
      },
      'what-it-is-like': {
        title: 'Cómo es: no en gris, sino con colores que se confunden',
        paragraphs: [
          'La imagen popular del daltonismo, un mundo en blanco y negro, describe una condición muy poco frecuente. La mayoría de las personas con deficiencia en la visión del color son tricrómatas anómalas: tienen los tres tipos de cono, pero uno responde de otra manera, así que algunos colores que a otros les parecen distintos a ellas les parecen iguales. Las dicrómatas, a las que les falta un tipo de cono, tienen una gama todavía más estrecha. Rojos, verdes, marrones y naranjas son las confusiones clásicas en las formas rojo-verde comunes; la deficiencia azul-amarillo existe, pero es mucho más rara.',
          'La larga revisión de Barry Cole sobre la desventaja práctica que supone es la descripción más útil de lo que esto significa en el día a día. Casi todas las personas con visión del color anómala, salvo algunas con afectación leve, cuentan que el color les da problemas en la vida cotidiana. Les cuesta cuando el color se usa como código, pueden fallar cuando el nombre de un color sirve para identificar algo, y son más lentas y aciertan menos en la búsqueda visual cuando es el color lo que marca el objetivo. Lee ese último hallazgo pensando en un juego: «encuentra el rojo» es justo el tipo de tarea que plantean muchos puzles.',
          'También explica por qué quienes rodean a un jugador daltónico subestiman tan a menudo el problema. Flatla y Gutwin crearon simulaciones basadas en la percepción del color medida de cada persona, en lugar de un modelo genérico, y pidieron a parejas de amigos o familiares que comentaran imágenes cotidianas vistas a través de esa simulación. Las versiones personalizadas resultaron más precisas que los modelos estándar, y las conversaciones sacaron a la luz detalles de la experiencia de la persona que sus acompañantes nunca habían entendido.',
        ],
      },
      'where-games-go-wrong': {
        title: 'Dónde suelen fallar los juegos',
        paragraphs: [
          'Hay patrones que se repiten una y otra vez. Barras de salud que pasan del verde al rojo. Equipos rojo y verde. Marcadores del mapa, niveles de rareza y botines distinguidos solo por el tono. Puzles de emparejar y ordenar cuyas piezas no se diferencian en nada más que en el color. Y, de forma menos evidente, avisos de «correcto» e «incorrecto» que parpadean en verde o en rojo sin un icono, un sonido o un movimiento que los respalde.',
          'La solución a la que recurren la mayoría de los juegos es un filtro: un menú que desplaza toda la paleta para la protanopía, la deuteranopía o la tritanopía. Los filtros ayudan a algunos jugadores, pero tienen límites. Dan por hecho que todas las personas con la misma etiqueta ven igual, algo que el trabajo de Flatla y Gutwin desmiente, y pueden hacer que el resto del juego se vea raro. Es mejor que el color sea una señal entre varias, de modo que no haga falta ningún filtro. Ya defendimos la idea general en [por qué el color nunca debería ser la única pista en un puzle](/blog/color-shape-accessibility); la investigación sobre patrones muestra cómo hacerlo bien.',
        ],
      },
      'patterns-that-work': {
        title: 'Lo que dice la investigación sobre símbolos y patrones',
        paragraphs: [
          'Geddes, Flatla, Tigwell y Peiris pusieron a prueba patrones de color, superposiciones que codifican un color como forma o textura, en un estudio en línea con personas con deficiencia en la visión del color. Los esquemas de patrones anteriores habían funcionado en el laboratorio, pero costaba aprenderlos. El equipo comparó un esquema ya publicado con dos diseños nuevos en tres tareas: elegir un color, seguir un degradado de color y ordenar. Ningún patrón ganó en todo. Uno que convertía cada color en un icono sencillo ayudaba a seleccionar y a ordenar, pero fallaba con los degradados; un diseño combinado ayudaba algo en todas las tareas.',
          'La lección para quien diseña puzles está clara: cuando se trata de llevar piezas distintas a lugares distintos, lo adecuado es un símbolo sencillo y fácil de recordar para cada color, que se entienda de un vistazo en lugar de tener que descifrarse. Es el enfoque que seguimos en OutBrick. El modo para daltónicos viene activado de serie y estampa un símbolo distinto en cada ladrillo y en la puerta que le corresponde, así que nadie tiene que pedir ayuda para distinguir dos piezas. Aun así, queremos saber dónde se queda corto; la [página de accesibilidad](/accessibility) explica cómo contárnoslo.',
        ],
      },
      'player-tips': {
        title: 'Consejos para jugadores daltónicos',
        paragraphs: [
          'Si sabes o sospechas que tienes una deficiencia en la visión del color, unos cuantos hábitos te facilitarán los juegos. Ninguno requiere un diagnóstico, aunque un óptico puede hacerte la prueba en poco tiempo, y el NHS tiene una [explicación clara de la deficiencia en la visión del color](https://www.nhs.uk/conditions/colour-vision-deficiency/) si quieres saber más. La revisión de Simunovic señala también que las lentes tintadas que se venden como ayuda para el daltonismo pueden servir en tareas concretas, pero no devuelven una discriminación normal de los colores, así que conviene mirarlas con cierto escepticismo.',
        ],
        bullets: [
          'Abre el menú de accesibilidad o de pantalla de cada juego nuevo antes de jugar y busca un modo para daltónicos que añada símbolos en lugar de limitarse a cambiar la paleta.',
          'En iPhone y iPad, activa Diferenciar sin color en Ajustes, Accesibilidad, Pantalla y tamaño de texto. Los juegos bien hechos lo respetan.',
          'Si un juego no tiene opciones, prueba los Filtros de color del mismo menú, pero ten en cuenta que cambian todo lo que hay en pantalla, no solo el juego.',
          'En los puzles de ordenar, aprende cada pieza por su símbolo o su forma desde el principio, antes de que los tableros se llenen. La mayoría de las [estrategias para ordenar por colores](/blog/colour-sort-puzzle-tips) funcionan igual de bien con símbolos.',
          'Cuéntales a los desarrolladores qué falló y dónde. Una captura de la pantalla confusa vale más que un párrafo de descripción.',
        ],
        note: 'La deficiencia en la visión del color también puede adquirirse más adelante por enfermedades oculares o por algunos medicamentos. Si notas un cambio en cómo ves los colores, coméntalo con un óptico o un médico.',
      },
    },
    pullQuote: 'Lee ese último hallazgo pensando en un juego: «encuentra el rojo» es justo el tipo de tarea que plantean muchos puzles.',
    faqs: [
      { question: '¿Qué tan frecuente es el daltonismo?', answer: 'La deficiencia rojo-verde hereditaria afecta a cerca del 8 % de los hombres y del 0,4 % de las mujeres de origen europeo, y a entre el 4 y el 6,5 % de los hombres chinos y japoneses. La deficiencia azul-amarillo y el daltonismo total son mucho más raros.' },
      { question: '¿Las personas daltónicas ven en blanco y negro?', answer: 'Casi nunca. La mayoría ven una amplia gama de colores, pero confunden ciertos pares, sobre todo rojos, verdes, marrones y naranjas, y tardan más en encontrar objetivos marcados por color.' },
      { question: '¿Cuál es el mejor ajuste para daltónicos en un juego?', answer: 'Un modo que añade un símbolo, una forma o un patrón a cada color suele ayudar más que un filtro que solo desplaza la paleta, porque funciona con cualquier tipo y grado de deficiencia en la visión del color.' },
      { question: '¿Se puede jugar a OutBrick siendo daltónico?', answer: 'Sí. El modo para daltónicos viene activado de serie y pone un símbolo distinto en cada ladrillo y en su puerta, así que puedes ordenar por símbolo en lugar de por tono. Puedes [probar un tablero en el navegador](/play) antes.' },
    ],
  },

  'screen-reader-games-iphone': {
    title: 'Jugar con lector de pantalla: así juegan las personas ciegas',
    dek: 'Cómo juegan con VoiceOver en iPhone las personas ciegas y con baja visión, qué dice la investigación y qué hace que un juego se pueda jugar de oído.',
    imageAlt: 'Zippy y Moss junto a un teléfono que muestra el tramo de Button Factory en el mapa del Viaje de OutBrick, con ladrillos azules, naranjas y turquesa flotando encima',
    tags: ['VoiceOver', 'lector de pantalla', 'jugadores ciegos', 'accesibilidad en videojuegos', 'juegos accesibles iPhone'],
    intro: 'El iPhone es una lámina de cristal lisa, sin botones que palpar, y aun así muchas personas ciegas lo usan a diario. El motivo es el lector de pantalla que lleva integrado. Muchas personas ciegas y con baja visión también lo usan para jugar, desde puzles de palabras hasta juegos de cartas o juegos hechos solo de sonido. Aquí te contamos cómo funciona, qué han aprendido los investigadores de los propios jugadores ciegos y qué separa un juego que se puede jugar de oído de uno que no.',
    keyTakeaways: [
      'VoiceOver convierte el tacto en una interfaz hablada que se puede explorar: arrastras o deslizas el dedo para oír lo que hay en pantalla y tocas dos veces para actuar.',
      'Los jugadores ciegos son una comunidad real y diversa. La investigación con ellos concluye que las barreras son tan sociales como técnicas.',
      'Un juego se puede jugar con lector de pantalla cuando su estado se puede describir con palabras y sus acciones no dependen de la rapidez ni de la puntería.',
    ],
    sections: {
      'how-touch-became-accessible': {
        title: 'Cómo una pantalla táctil se volvió accesible',
        paragraphs: [
          'Una pantalla sin nada que tocar parece, de entrada, poco adecuada para alguien que no puede verla. La investigación ayudó a demostrar lo contrario. Slide Rule, de Kane, Bigham y Wobbrock, presentado en 2008, usaba gestos multitáctiles para que un teléfono con pantalla táctil pudiera usarse sin ver: al deslizar un dedo se lee en voz alta lo que hay debajo, un segundo dedo selecciona y los movimientos rápidos recorren las listas. En su estudio con diez participantes ciegos, Slide Rule fue bastante más rápido que una alternativa basada en botones y siete de los diez lo prefirieron, aunque produjo más errores.',
          'VoiceOver, de Apple, llegó al iPhone al año siguiente y funciona con los mismos principios. Toca en cualquier sitio y VoiceOver dice el elemento que tienes bajo el dedo. Desliza a la derecha o a la izquierda para pasar de un elemento a otro en orden. Toca dos veces en cualquier sitio para activar lo último que se ha leído. Una rueda virtual llamada rotor cambia lo que hacen los deslizamientos, desde moverse por encabezados hasta ajustar la velocidad del habla. Incluso se puede apagar la pantalla por completo.',
          'Aprenderlo lleva tiempo. Rodrigues y sus colegas acompañaron a personas ciegas durante sus primeras semanas con el lector de pantalla de un smartphone y vieron que dominar el dispositivo era un proceso largo y exigente, lo que confirmaba las preocupaciones que los participantes tenían antes de empezar. Conviene recordarlo cuando un juego añade sus propios gestos encima.',
        ],
      },
      'who-plays': {
        title: 'Lo que dicen los jugadores ciegos sobre los juegos',
        paragraphs: [
          'Andrade y sus colegas encuestaron y entrevistaron en 2019 a jugadores con discapacidad visual, fijándose a propósito en los juegos que de verdad jugaban y no en juegos creados para un estudio. El retrato resultante fue el de una comunidad con una larga trayectoria de juego, opiniones firmes sobre la industria y un aprecio especial por los juegos que equilibran complejidad y accesibilidad. Muchos preferían juegos con verdadera profundidad a juegos «accesibles» simplificados que les resultaban condescendientes.',
          'Gonçalves, Rodrigues y Guerreiro estudiaron el juego compartido. A partir de entrevistas con diez adultos y diez niños con discapacidad visual, 140 respuestas a una encuesta y una segunda encuesta a personas videntes que juegan con ellos, vieron que los jugadores ciegos jugaban a una gran variedad de juegos, pero rara vez a los mismos que sus amigos y familiares videntes. El problema no era solo la falta de accesibilidad. Era que los mundos de juego de ambos grupos casi nunca coincidían, así que había poco que compartir. Hablamos del lado familiar de esto en [jugar con tus nietos](/blog/playing-games-with-grandchildren).',
        ],
      },
      'what-makes-a-game-playable': {
        title: 'Qué hace que un juego se pueda jugar de oído',
        paragraphs: [
          'La revisión sobre accesibilidad en los juegos de Yuan, Folmer y Harris describe el juego como un ciclo: el juego presenta estímulos, el jugador decide una respuesta y el jugador la introduce. La mayoría de los juegos transmiten sus estímulos principales de forma visual, y un jugador ciego necesita que se sustituyan, normalmente por voz, sonido o vibración. Cuando el estímulo se puede poner en palabras, un lector de pantalla puede hacer buena parte del trabajo. Cuando no, el juego tiene que cargar con ese peso mediante su propio diseño de audio, como hacen los juegos de audio creados para jugadores ciegos.',
          'Eso da una prueba útil. Los juegos por turnos, los de cartas, los de palabras y muchos puzles se pueden describir por completo con palabras: qué hay en cada sitio, qué se puede mover, qué ha cambiado. Los juegos de acción rápida normalmente no, porque la información llega más deprisa de lo que la voz puede transmitirla. Es un motivo más para valorar los puzles [sin reloj](/blog/relaxing-puzzle-games-what-makes-one-calm): escuchar lleva tiempo, y un temporizador lo castiga. Un estudio sobre juegos de texto de Spiel, Bertel y Heron vio que hasta la forma de expresar las direcciones importa: a los jugadores sin visión les resultaban más fáciles e inmersivas las direcciones relativas a ellos mismos que los puntos cardinales.',
        ],
        bullets: [
          'Cada control tiene una etiqueta hablada que dice lo que hace, no cómo es.',
          'El estado de la partida, como la puntuación, los movimientos que quedan o a quién le toca, se puede consultar cuando quieras.',
          'Los cambios se anuncian: una pieza se ha movido, un nivel se ha superado, ha pasado un turno.',
          'Nada depende de un temporizador ni de acertar en un objetivo pequeño y en movimiento.',
          'El juego no atrapa el foco en una ventana emergente ni deja a VoiceOver leyendo contenido desactualizado.',
        ],
      },
      'direct-touch': {
        title: 'Cuando un juego necesita el toque directo',
        paragraphs: [
          'Algunos juegos necesitan gestos que VoiceOver interceptaría, como arrastrar una pieza por un tablero. La plataforma de Apple permite marcar una zona para interacción directa, de modo que los toques pasan directamente al juego mientras VoiceOver sigue leyendo en el resto de la pantalla. La [guía de VoiceOver para diseñadores](https://developer.apple.com/design/human-interface-guidelines/voiceover) de Apple explica lo básico. Usado con cuidado, el toque directo hace que un tablero se sienta físico; usado sin cuidado, crea una zona en la que el lector de pantalla se queda en silencio y el jugador se pierde.',
          'Los mejores juegos ofrecen las dos cosas: una forma directa de jugar para quien puede usarla y otra paso a paso, elemento a elemento, para quien no. En OutBrick, VoiceOver es compatible: los controles principales, como Deshacer, Pausa y Cerrar, llevan etiquetas descriptivas, igual que los elementos importantes del estado de la partida, y como nunca hay reloj, no se pierde nada por tomarse tiempo para escuchar. Un tablero tiene un límite de movimientos, no un temporizador, y la primera vez que deshaces en cada tablero es gratis. Sabemos que un puzle de deslizar es exigente para jugarlo de oído y preferimos escuchar a quienes usan VoiceOver antes que suponer; la [página de accesibilidad](/accessibility) detalla lo que funciona hoy y cómo contactarnos.',
        ],
      },
      'getting-started': {
        title: 'Primeros pasos, para jugadores y familias',
        paragraphs: [
          'Si eres nuevo en VoiceOver, Apple incluye una zona de práctica en Ajustes, dentro de Accesibilidad, VoiceOver, donde puedes probar los gestos sin que ocurra nada. Empieza por juegos por turnos y con mucho texto; los de cartas, los de palabras y los de preguntas son buenos primeros pasos. Después busca juegos cuya descripción mencione VoiceOver por su nombre y lee las reseñas de jugadores ciegos.',
          'Si ves y juegas con alguien ciego, la investigación anterior sugiere que lo más útil que puedes hacer es encontrar juegos a los que podáis jugar los dos, en lugar de juegos a los que cada uno juega por su cuenta. Los puzles por turnos en un dispositivo compartido son un buen punto de partida. Y si un juego que te encanta falla en lo básico, díselo al desarrollador. Muchos equipos no saben que hay un problema hasta que alguien se lo cuenta. Nuestra [página de soporte](/support) es por donde empezar con OutBrick.',
        ],
      },
    },
    pullQuote: 'Un juego se puede jugar con lector de pantalla cuando su estado se puede describir con palabras y sus acciones no dependen de la rapidez ni de la puntería.',
    faqs: [
      { question: '¿Pueden las personas ciegas jugar en un iPhone?', answer: 'Sí. Con VoiceOver, el lector de pantalla integrado en el iPhone, los jugadores ciegos tocan o deslizan el dedo para oír lo que hay en pantalla y tocan dos veces para actuar. Los juegos por turnos, de cartas, de palabras y de audio son los más jugados.' },
      { question: '¿Qué tipos de juegos funcionan mejor con VoiceOver?', answer: 'Los juegos cuyo estado se puede describir con palabras y que no exigen reacciones rápidas: juegos de cartas, de palabras, de preguntas, muchos puzles y juegos diseñados en torno al audio.' },
      { question: '¿Qué son los juegos de audio?', answer: 'Los juegos de audio están diseñados para jugarse mediante el sonido en lugar de las imágenes, con voz, audio espacial y efectos de sonido que transmiten todo el juego. Muchos están hechos por y para jugadores ciegos.' },
      { question: '¿OutBrick es compatible con VoiceOver?', answer: 'Sí. Los controles principales y el estado importante de la partida llevan etiquetas de VoiceOver, y no hay reloj, así que puedes tomarte todo el tiempo que necesites. La [página de accesibilidad](/accessibility) detalla la compatibilidad actual y cómo informar de problemas.' },
    ],
  },

  'one-handed-games-iphone': {
    title: 'Juegos con una mano en iPhone: diseño y accesibilidad motora',
    dek: 'Qué dice la investigación sobre pantallas táctiles y discapacidad motora: tamaño de botones, gestos, errores y los ajustes del iPhone que ayudan.',
    imageAlt: 'Bricko y Moss junto a un teléfono que muestra el tramo de Celebration Square en el mapa del Viaje de OutBrick, con ladrillos turquesa, azules y rosas flotando encima',
    tags: ['juegos con una mano', 'accesibilidad motora', 'accesibilidad iPhone', 'diseño móvil', 'diseño inclusivo'],
    intro: 'Mucha gente juega con una sola mano. Algunas personas siempre, por una discapacidad, una lesión o un temblor. Muchas más, a ratos: con un bebé en brazos, de pie en el tren, tumbadas de lado. Un juego que funciona en esas condiciones funciona mejor para todo el mundo. Este artículo repasa lo que ha descubierto la investigación sobre pantallas táctiles y discapacidad motora, qué implica para la forma de construir juegos y qué ajustes del iPhone ayudan hoy.',
    keyTakeaways: [
      'Las pantallas táctiles pueden dar autonomía a las personas con discapacidad motora, pero producen más toques fallidos y accidentales que un ratón.',
      'Los objetivos grandes, los gestos sencillos y un deshacer indulgente importan más que cualquier ajuste de accesibilidad aislado.',
      'La presión del tiempo es una barrera motora. Un juego sin reloj elimina de golpe una de las exigencias más duras.',
    ],
    sections: {
      'touch-helps-and-hurts': {
        title: 'Las pantallas táctiles ayudan, y también estorban',
        paragraphs: [
          'Anthony, Kim y Findlater abordaron la cuestión por una vía poco habitual: analizaron 187 vídeos publicados en YouTube por personas con discapacidad física en los que se grababan usando teléfonos y tabletas corrientes. Los vídeos mostraban a gente que lo conseguía, a menudo con adaptaciones propias, como usar un nudillo, un lápiz táctil u otra parte del cuerpo, o apoyar la mano en el borde de la pantalla para ganar estabilidad. Con frecuencia describían las pantallas táctiles como algo que les daba autonomía. También mostraban los problemas recurrentes: toques accidentales, objetivos demasiado pequeños para acertar y gestos difíciles de hacer.',
          'Un estudio controlado de laboratorio de Findlater y sus colegas le puso cifras. Compararon una pantalla táctil con un ratón en 32 personas, 16 de ellas con discapacidad motora en la parte superior del cuerpo. La pantalla táctil fue más rápida en general, pero solo los participantes sin discapacidad cometieron menos errores con ella. Los participantes con discapacidad motora cometieron el triple de errores al tocar en la pantalla táctil que con el ratón, y los toques involuntarios fueron frecuentes. Los autores elevaron el tamaño mínimo recomendado de los objetivos táctiles para estos usuarios a al menos 18 milímetros, bastante más que la mayoría de los botones de un teléfono.',
        ],
      },
      'one-thumb': {
        title: 'Hasta dónde llega un pulgar',
        paragraphs: [
          'Incluso sin ninguna discapacidad, usar el teléfono con una mano cambia las reglas. Parhi, Karlson y Bederson estudiaron el uso del pulgar en pantallas táctiles pequeñas y vieron que objetivos de unos 9,2 milímetros para toques sueltos, y de 7,6 milímetros para secuencias de toques, eran lo bastante grandes para no perjudicar la velocidad ni la precisión. Por debajo de eso, los errores aumentaban. El alcance importa tanto como el tamaño: en un teléfono grande, la esquina superior opuesta es el lugar más difícil de tocar con el pulgar de la mano que lo sostiene, y es justo donde muchos juegos ponen los botones de pausa y de ajustes.',
          'Trewin, Swart y Pettick estudiaron los smartphones con personas con problemas de destreza y vieron que les resultaban útiles y utilizables, aunque las tabletas ofrecían ventajas reales, como objetivos más grandes y una superficie más estable. También notaron algo incómodo: algunas de las propias funciones de accesibilidad exigían tanta destreza para configurarlas y usarlas que muchos participantes no podían aprovecharlas. Una accesibilidad difícil de activar es poca accesibilidad.',
        ],
      },
      'games-specifically': {
        title: 'Qué falla en los juegos para pantalla táctil',
        paragraphs: [
          'Kim y sus colegas crearon un sistema de codificación para la accesibilidad motora y lo aplicaron a 72 juegos de iPad. Porter y Kientz, que encuestaron a jugadores con discapacidad y a profesionales de la industria, vieron que la incompatibilidad con los productos de apoyo era una barrera habitual y que a los desarrolladores a menudo les faltaba una guía práctica. Si se juntan, los problemas comunes son fáciles de enumerar: límites de tiempo y pruebas de reflejos, gestos con varios dedos sin alternativa, arrastres precisos, botones pequeños en los bordes de la pantalla y castigos duros por un solo toque fallido.',
          'El tiempo es lo que más a menudo pasan por alto los diseñadores. Un temblor, la espasticidad o el cansancio dificultan los movimientos rápidos y precisos, y una cuenta atrás convierte eso en un fracaso. Un límite de movimientos es otro tipo de restricción: te pide pensar, y le da igual cuánto tarde tu mano en llegar. Explicamos por qué esto también hace que un juego sea más tranquilo en [qué hace que un juego de puzles sea relajante](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Objetivos bastante por encima del mínimo de la plataforma, con espacio entre ellos.',
          'Controles importantes al alcance del pulgar, no solo en las esquinas superiores.',
          'Todos los gestos se pueden hacer con un dedo, y ninguno tiene que ser rápido.',
          'Un deshacer fácil de alcanzar que perdona un toque fallido sin penalización.',
          'Sin temporizadores en el juego normal y sin pruebas de reflejos escondidas en los menús.',
        ],
      },
      forgiveness: {
        title: 'Perdonar errores también es accesibilidad motora',
        paragraphs: [
          'La mayoría de lo que se escribe sobre accesibilidad se centra en acertar con la entrada. Igual de importante es lo que pasa cuando la entrada falla, porque para algunos jugadores fallará a menudo. Un juego que trata cada toque perdido como un movimiento definitivo es sutilmente hostil con cualquiera que tenga un temblor. Un juego que permite deshacer el último movimiento con facilidad es amable con todo el mundo. Las pautas de accesibilidad web plantean algo parecido sobre los [gestos de puntero](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html): todo lo que se pueda hacer con un gesto complejo también debería poder hacerse con uno sencillo.',
          'Ahí es donde se sitúa OutBrick. Los ladrillos se mueven con un dedo, y deslizar es un gesto corto y único, no un arrastre preciso hasta un punto. No hay reloj en ninguna parte. La primera vez que deshaces en cada tablero es gratis, así que un deslizamiento fallido nunca tiene por qué costarte un tablero, y la opción de deshacer que se ofrece cuando un tablero se atasca también es gratis. En el Apple Watch, la Digital Crown funciona igual de bien que el tacto. Nada de eso hace que el juego sea accesible para todo el mundo, y un puzle de deslizar sigue pidiendo un gesto con dirección. Si un control te cuesta alcanzarlo, la [página de accesibilidad](/accessibility) te pide el dispositivo y la pantalla, porque ese detalle es lo que nos permite arreglarlo.',
          'Conviene recordar a cuánta gente abarca esto. Los diseñadores hablan a veces de discapacidades situacionales: el padre con un niño en un brazo, la persona que va agarrada a la barra del metro, el jugador con la muñeca escayolada durante seis semanas. Ninguno se describiría como una persona con discapacidad, y todos se benefician exactamente de las mismas decisiones. Diseñar para quien tiene un temblor permanente da como resultado un juego al que todo el vagón puede jugar con una mano.',
        ],
      },
      'iphone-settings': {
        title: 'Ajustes del iPhone que facilitan jugar con una mano',
        paragraphs: [
          'Los ajustes de accesibilidad motora de Apple están en Ajustes, Accesibilidad, Tocar, y varios encajan bien con los juegos. Vale la pena probarlos de uno en uno, porque cada uno cambia cómo responde cada app a tus dedos. En el caso de los juegos, comprueba que el juego sigue comportándose bien con ellos activados; un buen juego ni debería notarlo. Quienes juegan en el Apple Watch tienen también sus propias opciones, y tratamos el caso de la pantalla pequeña en [juegos de puzles para Apple Watch](/blog/apple-watch-puzzle-games).',
        ],
        bullets: [
          'Alcance baja la parte superior de la pantalla hasta donde llega el pulgar al deslizar hacia abajo en el borde inferior.',
          'Adaptaciones táctiles puede ignorar los toques repetidos, pedir que mantengas el toque un momento antes de que cuente o usar el punto donde el dedo tocó primero o por última vez.',
          'AssistiveTouch coloca en pantalla un menú flotante que puede sustituir los gestos con varios dedos y los botones físicos.',
          'Tocar atrás convierte un doble o triple toque en la parte trasera del teléfono en un atajo.',
          'Control por voz y Control por botón permiten manejar el teléfono sin tocarlo, aunque los juegos de ritmo rápido rara vez funcionan bien con ellos.',
        ],
      },
    },
    pullQuote: 'Una accesibilidad difícil de activar es poca accesibilidad.',
    faqs: [
      { question: '¿Qué hace que un juego móvil sea bueno para jugar con una mano?', answer: 'Botones grandes y bien separados al alcance del pulgar, gestos que solo necesitan un dedo, nada de temporizadores ni pruebas de reflejos y una forma fácil de deshacer un toque equivocado.' },
      { question: '¿Qué tamaño deben tener los objetivos táctiles para personas con discapacidad motora?', answer: 'Un estudio de laboratorio de Findlater y sus colegas recomendó al menos 18 milímetros para usuarios con discapacidad motora en la parte superior del cuerpo, bastante más que el tamaño habitual de los botones de un teléfono.' },
      { question: '¿Qué ajustes del iPhone ayudan con la accesibilidad motora en los juegos?', answer: 'En Ajustes, Accesibilidad, Tocar: Alcance, Adaptaciones táctiles, AssistiveTouch y Tocar atrás. Control por voz y Control por botón permiten usar el teléfono sin tocarlo.' },
      { question: '¿Se puede jugar a OutBrick con una mano?', answer: 'Sí. Los ladrillos se mueven con un solo deslizamiento de un dedo, nunca hay reloj y la primera vez que deshaces en cada tablero es gratis, así que un deslizamiento fallido no te cuesta el tablero. Puedes [probar un tablero en el navegador](/play).' },
    ],
  },

  'reduce-motion-games': {
    title: 'Mareo con videojuegos: por qué importa Reducir movimiento',
    dek: 'Por qué el movimiento en pantalla marea a algunos jugadores, quién es más propenso y cómo Reducir movimiento y una animación cuidada ayudan.',
    imageAlt: 'Peach y Bloo a ambos lados de un teléfono que muestra un tablero superdifícil de OutBrick en el nivel 214, con ladrillos turquesa, rojos y verdes flotando cerca',
    tags: ['Reducir movimiento', 'mareo con videojuegos', 'cinetosis', 'accesibilidad en videojuegos', 'diseño de juegos'],
    intro: 'La mayoría de la gente no se para a pensar en el movimiento de un juego hasta que le sienta mal. Para una minoría considerable, una cámara que da bandazos, un fondo con paralaje o una pantalla que tiembla con cada acierto provocan mareo, náuseas o dolor de cabeza, a veces mucho después de dejar el dispositivo. No es remilgo. Es una respuesta bien estudiada del sistema del equilibrio, y existe un ajuste sencillo precisamente por ella. Esto es lo que dice la investigación y lo que pueden hacer jugadores y diseñadores.',
    keyTakeaways: [
      'El mareo inducido visualmente aparece cuando tus ojos registran un movimiento que tus órganos del equilibrio no perciben.',
      'La propensión varía mucho. Tener antecedentes de mareo por movimiento, migraña o vértigo son señales de quién se ve más afectado.',
      'Respetar Reducir movimiento le cuesta poco a un diseñador y puede marcar la diferencia entre un juego al que alguien puede jugar y uno al que no.',
    ],
    sections: {
      'why-screens-make-you-sick': {
        title: 'Por qué una pantalla puede marearte',
        paragraphs: [
          'Tu sentido del equilibrio se basa en tres fuentes: los ojos, los órganos vestibulares del oído interno y lo que sientes con el cuerpo apoyado en el suelo. Normalmente coinciden. Cuando una gran parte de lo que ves se mueve como si te movieras tú, pero el oído interno indica que estás quieto, las señales entran en conflicto. En muchas personas el resultado es un conjunto de síntomas, como desorientación, fatiga visual, sudoración y náuseas, conocido como mareo inducido visualmente, o cibermareo cuando lo provocan pantallas digitales.',
          'La revisión de Rebenitsch y Owen reunió las pruebas sobre lo que lo provoca. Buena parte de esa investigación trata de la realidad virtual y de las pantallas grandes, donde el efecto es más fuerte, pero los ingredientes se trasladan a teléfonos y tabletas: cuánta parte de la imagen se mueve, a qué velocidad y en qué dirección, además de decisiones de renderizado y del tiempo de exposición. Una sensación relacionada, la vección, es la ilusión de moverse uno mismo, como cuando crees que tu tren parado arranca porque se va el de al lado. Keshavarz y sus colegas revisaron cómo se relacionan ambas y concluyeron que el vínculo es menos directo de lo que se suponía: la vección y el mareo suelen darse juntos, pero no siempre.',
        ],
      },
      'which-motion': {
        title: 'Qué tipos de movimiento son el problema',
        paragraphs: [
          'No todo el movimiento es igual. En dos experimentos, Keshavarz y sus colegas variaron la velocidad y la densidad de un campo de estrellas en movimiento y después añadieron rotación. Un movimiento más rápido y denso reforzaba la ilusión de moverse uno mismo, pero apenas cambiaba el mareo. Añadir cabeceo, una rotación que inclina la imagen arriba y abajo, produjo las puntuaciones de mareo más altas y más desorientación. En la práctica, la rotación y el movimiento de cámara molestan más que las cosas que simplemente se desplazan sobre un fondo quieto.',
          'Eso coincide con lo que suelen contar sobre los juegos los jugadores sensibles al movimiento: el problema tiende a venir de que toda la escena se mueva a la vez. Las sacudidas de cámara, los zooms que llenan la pantalla, las capas de paralaje que se deslizan a distintas velocidades y las transiciones que hacen girar la vista son los sospechosos habituales. Un solo ladrillo que se desliza por un tablero quieto es algo muy distinto de que el propio tablero dé un bandazo.',
        ],
      },
      'who-is-susceptible': {
        title: 'Quién es más propenso',
        paragraphs: [
          'La propensión varía enormemente de una persona a otra. Golding, Rafiq y Keshavarz probaron un cuestionario breve sobre mareo inducido visualmente con 30 adultos que veían una escena urbana que giraba y se tambaleaba. El cuestionario predecía alrededor de un tercio de la variación en cuánto se mareaba la gente, y más de la mitad al añadir los antecedentes de mareo por movimiento corriente, migraña y desmayos, y el efecto del vértigo en el día a día. Trabajos anteriores de Golding sobre el cuestionario estándar de mareo por movimiento ya habían señalado la migraña como uno de los vínculos más claros entre el mareo por movimiento y otros tipos de náuseas. En el estudio de Rebenitsch y Owen sobre diferencias individuales, haber tenido mareo por movimiento estaba entre los mejores predictores del cibermareo.',
          'Para algunas personas el problema va más allá de alguna náusea ocasional. Bronstein describió a un grupo de pacientes, la mayoría con un trastorno del sistema del equilibrio del oído interno, a quienes las escenas visuales recargadas o en movimiento les provocaban vértigo de forma sistemática, una afección que llamó vértigo visual. Para ellos, una pantalla llena de movimiento no es una molestia, sino una barrera real. Nada de esto es algo que un juego pueda diagnosticar ni tratar, y si el mareo persiste, conviene comentarlo con un médico. Lo que sí puede hacer un juego es no empeorarlo.',
        ],
      },
      'what-reduce-motion-does': {
        title: 'Qué hace Reducir movimiento y qué deberían hacer los diseñadores',
        paragraphs: [
          'En iPhone y iPad, el ajuste está en Ajustes, Accesibilidad, Movimiento, Reducir movimiento. Cuando está activado, el sistema sustituye las transiciones con zoom y deslizamiento por fundidos más suaves y avisa a todas las apps de que el jugador ha pedido menos movimiento. Después, cada app decide si le hace caso. La web tiene un equivalente, y las pautas del W3C sobre [animación a partir de interacciones](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) piden que el movimiento provocado por una interacción se pueda desactivar salvo que sea esencial.',
          'La palabra esencial importa. En un puzle de deslizar, hay que ver moverse el ladrillo, o el jugador no puede seguir el tablero. Pero el confeti, la cámara que rebota y el fondo que se desplaza son decoración, y la decoración se puede quitar. En OutBrick, Reducir movimiento se respeta en todas partes: con el ajuste activado, el juego reduce el paralaje, el confeti y las transiciones con mucho rebote, mientras los ladrillos siguen mostrando adónde han ido. Describimos los demás controles de comodidad, para el sonido, la música y la vibración, en la [página de accesibilidad](/accessibility).',
        ],
        bullets: [
          'Deja la cámara quieta. Mueve las piezas, no el mundo.',
          'Evita las sacudidas de pantalla, los zooms a pantalla completa y las transiciones que giran, o desactívalos con Reducir movimiento.',
          'Mantén el paralaje sutil y elimínalo con Reducir movimiento.',
          'No hagas parpadear nunca grandes zonas de la pantalla y mantén las celebraciones breves.',
          'Prueba con Reducir movimiento activado y comprueba que no desaparece nada importante.',
        ],
      },
      'player-tips': {
        title: 'Si los juegos te sientan mal',
        paragraphs: [
          'Antes que nada, activa Reducir movimiento y, en el mismo menú, prueba Preferir transiciones fundidas. Después busca en los ajustes de cada juego sus propias opciones: sacudida de cámara, desenfoque de movimiento, campo de visión y efectos de pantalla son habituales en los juegos grandes. Juega en una habitación bien iluminada, sujeta el dispositivo un poco más lejos para que ocupe menos de tu campo visual y haz pausas antes de que aparezcan los síntomas, no después. Los visores son el caso más exigente de todos; hablamos de la comodidad en [Apple Vision Pro](/blog/apple-vision-pro-puzzle-games) por separado.',
          'Y elige juegos tranquilos por diseño. Un puzle por turnos con un tablero quieto es un punto de partida mucho más fácil que un juego basado en la velocidad. Nuestra guía sobre [qué hace que un juego de puzles sea relajante](/blog/relaxing-puzzle-games-what-makes-one-calm) repasa qué más buscar, y [diseño de juegos amable con los sentidos](/blog/sensory-friendly-game-design) trata el sonido, la luz y las sorpresas de forma más amplia.',
          'Si un juego ignora Reducir movimiento, díselo a su desarrollador y sé concreto: qué pantalla, qué efecto y qué te provocó. Muchos equipos prueban con el ajuste desactivado y sencillamente nunca ven el problema. Lo mismo vale para nosotros; si algo en OutBrick sigue moviéndose demasiado para ti con Reducir movimiento activado, nuestra [página de soporte](/support) es el lugar para decirlo, y es el tipo de aviso que se arregla.',
        ],
      },
    },
    pullQuote: 'Mueve las piezas, no el mundo.',
    faqs: [
      { question: '¿Por qué algunos juegos me marean?', answer: 'Cuando una gran parte de lo que ves se mueve como si te movieras tú, pero tu oído interno no nota movimiento, las señales contradictorias pueden causar mareo, fatiga visual y náuseas. Se llama mareo inducido visualmente.' },
      { question: '¿Qué hace Reducir movimiento en el iPhone?', answer: 'Sustituye las transiciones del sistema con zoom y deslizamiento por efectos más suaves y avisa a las apps de que quieres menos movimiento. Las apps que lo respetan eliminan o suavizan también sus propias animaciones.' },
      { question: '¿Quién tiene más probabilidades de marearse con las pantallas?', answer: 'La investigación lo relaciona sobre todo con antecedentes de mareo por movimiento, migraña y vértigo persistente, aunque la propensión varía mucho de una persona a otra. Si los síntomas persisten, conviene hablarlo con un médico.' },
      { question: '¿OutBrick es compatible con Reducir movimiento?', answer: 'Sí. Con Reducir movimiento activado, OutBrick reduce el paralaje, el confeti y las transiciones con mucho rebote en todas partes, mientras los ladrillos siguen deslizándose de forma visible para que puedas seguir el tablero.' },
    ],
  },

  'puzzles-executive-function-children': {
    title: '¿Los puzles desarrollan las funciones ejecutivas en niños?',
    dek: 'Las funciones ejecutivas sostienen la planificación y el autocontrol. Qué pueden y qué no pueden hacer los puzles por los niños, y cómo jugar.',
    imageAlt: 'Sprout y Vio a ambos lados de un teléfono que muestra el tramo de Bamboo Springs en el mapa del Viaje de OutBrick, con ladrillos amarillos, verdes y azules flotando cerca',
    tags: ['funciones ejecutivas', 'niños', 'juegos educativos', 'puzles para niños', 'entrenamiento cerebral'],
    intro: 'Las funciones ejecutivas se han convertido en una de las ideas más comentadas del desarrollo infantil, y en una de las más usadas en publicidad. Apps, juguetes y puzles prometen desarrollarlas. La investigación es de verdad alentadora en algunos puntos y de verdad aleccionadora en otros, y las familias merecen conocer ambas mitades. Aquí explicamos qué son las funciones ejecutivas, qué dicen las mejores pruebas sobre entrenarlas, qué papel tienen los puzles y cómo jugar con un niño de la forma que más probabilidades tiene de ayudar.',
    keyTakeaways: [
      'Las funciones ejecutivas abarcan mantener información en mente, resistir los impulsos y pasar de una idea a otra. Pueden mejorar con la práctica.',
      'La práctica mejora sobre todo la habilidad concreta que se practica. Las pruebas de una «transferencia lejana» amplia al colegio o a la inteligencia son débiles.',
      'Los enfoques que mejor funcionan son divertidos, cada vez más difíciles y forman parte de la vida diaria, que es justo lo que describe un buen juego.',
    ],
    sections: {
      'what-executive-function-is': {
        title: 'Qué son las funciones ejecutivas',
        paragraphs: [
          'En la muy citada revisión de Adele Diamond, las funciones ejecutivas son los procesos mentales que nos permiten jugar con las ideas, pararnos a pensar antes de actuar, afrontar retos nuevos, resistir las tentaciones y mantener la concentración. Describe tres habilidades básicas. El control inhibitorio es la capacidad de frenar un impulso y mantener la atención donde debe estar. La memoria de trabajo es mantener información en mente mientras la usas. La flexibilidad cognitiva es ver las cosas desde otro ángulo y cambiar de rumbo cuando cambia la situación.',
          'Un puzle de deslizar ejercita las tres en miniatura. Mantienes un plan en mente durante varios movimientos, resistes el deslizamiento tentador que parece bueno pero bloquea una puerta y abandonas tu plan cuando un ladrillo se detiene donde no esperabas. Diamond subraya también que el estrés, la falta de sueño, la soledad y la falta de ejercicio perjudican las funciones ejecutivas. Es un recordatorio útil de que ningún puzle puede compensar a un niño cansado o angustiado.',
          'Estas habilidades se desarrollan despacio. Diamond describe una larga progresión que va desde la primera infancia hasta bien entrada la adolescencia, y es una de las razones por las que las expectativas con los niños pequeños deberían ser modestas. Un niño de cuatro años que desliza ladrillos al azar y uno de siete que se para a planear dos movimientos por delante se comportan ambos con normalidad para su edad. La distancia entre ellos es desarrollo, no un déficit que un juego deba cerrar.',
        ],
      },
      'what-diamond-and-lee-found': {
        title: 'Lo que encontró la revisión de referencia',
        paragraphs: [
          'En 2011, Diamond y Lee revisaron en la revista Science programas cuyo efecto sobre las funciones ejecutivas se había evaluado en niños de 4 a 12 años. Una gran variedad había mostrado beneficios: entrenamiento por ordenador, juegos sin ordenador, ejercicio aeróbico, artes marciales, yoga, mindfulness y algunos planes escolares. Lo que tenían en común los programas eficaces era la práctica repetida y un reto que aumentaba a medida que el niño mejoraba. Los niños que partían con funciones ejecutivas más débiles solían ser los que más ganaban.',
          'Hay otros dos puntos de esa revisión que se pasan por alto con facilidad. Primero, los programas que atendían al desarrollo emocional y social de los niños, y no solo a su forma de pensar, solían dar mejores resultados. Segundo, los beneficios eran mayores en tareas parecidas a lo que se había practicado. Ese segundo punto resultó ser el núcleo del debate posterior.',
        ],
      },
      'the-transfer-problem': {
        title: 'El problema de la transferencia',
        paragraphs: [
          'Mejorar en una tarea entrenada se llama transferencia cercana. Mejorar en algo distinto, como la lectura, la aritmética o el razonamiento general, es transferencia lejana, y es lo que prometen la mayoría de los productos. Kassai y sus colegas reunieron los estudios experimentales sobre el entrenamiento de las funciones ejecutivas en niños. Encontraron un efecto sólido de transferencia cercana: las habilidades entrenadas mejoraban de forma moderada. Pero entrenar un componente, como la memoria de trabajo, no mejoraba de forma fiable los demás; el efecto de transferencia lejana era pequeño y no estadísticamente significativo.',
          'Otros metaanálisis apuntan en la misma dirección. Melby-Lervåg y Hulme vieron que el entrenamiento de la memoria de trabajo producía mejoras a corto plazo en la propia memoria de trabajo, sin pruebas convincentes de que se generalizara a otras habilidades. Sala y Gobet estudiaron el ajedrez, la música y el entrenamiento de la memoria de trabajo en niños y vieron que los beneficios aparentes se reducían a medida que mejoraba la calidad de los estudios, y concluyeron que la transferencia lejana rara vez se produce. Takacs y Kassai, que reunieron 90 estudios con casi 9000 niños, concluyeron que las funciones ejecutivas se pueden fomentar en la infancia, pero no hallaron pruebas convincentes de que las mejoras se mantuvieran en el seguimiento. También vieron que los enfoques que desarrollan estas habilidades de forma implícita, como parte de actividades cotidianas agradables, eran igual de eficaces que los ejercicios explícitos, o más.',
        ],
        note: 'Esto coincide con las pruebas en adultos, que repasamos en [¿los juegos de puzles son buenos para el cerebro?](/blog/are-puzzle-games-good-for-your-brain)',
      },
      'where-puzzles-fit': {
        title: 'Qué papel tienen los puzles',
        paragraphs: [
          '¿Tiene sentido, entonces? Sí, siempre que las expectativas sean honestas. Los puzles son buena práctica para las habilidades que usan: planificar, tener paciencia, mirar antes de actuar y recuperarse de un error. Eso ya vale la pena por sí mismo. También hay algunas pruebas sugerentes sobre las habilidades espaciales. Levine y sus colegas observaron en casa a niños y a sus padres entre los dos y los cuatro años y vieron que los niños que jugaban con rompecabezas obtenían mejores resultados en una tarea de transformación espacial a los cuatro años y medio, incluso después de tener en cuenta los ingresos y la formación de la familia y cuánto hablaban los padres. Fue un estudio observacional, así que no puede demostrar que los rompecabezas causaran la diferencia, pero encaja con lo que sabemos del aprendizaje espacial.',
          'La postura honesta, por tanto, es que los puzles son un buen uso del tiempo de juego, no un tratamiento. Un niño que disfruta con ellos practica de verdad a pensar por adelantado. Un niño al que se le obliga a hacerlos por el bien de su cerebro probablemente saque menos de ellos, y los disfrute menos.',
          'Las familias preguntan a menudo si los puzles en pantalla son tan buenos como los físicos. Las pruebas no lo zanjan. La revisión de Diamond y Lee incluía tanto el entrenamiento por ordenador como los juegos sin ordenador entre las actividades con beneficios, y lo que compartían los programas eficaces no era el soporte, sino la práctica repetida con un reto creciente. Un rompecabezas en la mesa de la cocina y un puzle de deslizar en una tableta piden tipos de pensamiento parecidos. Lo que cambia más es todo lo que los rodea: si participa un adulto y si la app está hecha para retener la atención por sí misma.',
        ],
      },
      'playing-well': {
        title: 'Cómo jugar con puzles de forma que ayude',
        paragraphs: [
          'La investigación sobre lo que funciona sugiere algunos hábitos. Todos tienen que ver con cómo juegas, no con lo que compras. OutBrick tiene una clasificación de 4+ y la [página de clasificación por edades](/age-rating) explica por qué; tiene un límite de movimientos en lugar de un reloj, lo que deja que un niño piense todo lo que necesite. Podéis [jugar un tablero en el navegador](/play) juntos antes de decidir si le va a tu hijo, y nuestra guía sobre [cómo resolver rompecabezas de bloques deslizantes](/blog/how-to-solve-sliding-block-puzzles) tiene estrategias que podéis comentar.',
        ],
        bullets: [
          'Jugad juntos y pensad en voz alta. Pregunta «¿qué pasa si deslizamos ese?» antes de que nadie mueva.',
          'Busca lo difícil pero posible. El beneficio viene de un reto que crece a la vez que el niño.',
          'Trata un movimiento equivocado como información, no como un fracaso, y usa deshacer para probar otro camino.',
          'Usa palabras espaciales: encima, detrás, bloqueado, girar, borde. El estudio de Levine sugiere que la conversación en torno a los puzles importa.',
          'Parad mientras todavía sea divertido. El disfrute no es un extra; es parte de por qué funciona la práctica implícita.',
        ],
      },
    },
    pullQuote: 'La postura honesta, por tanto, es que los puzles son un buen uso del tiempo de juego, no un tratamiento.',
    faqs: [
      { question: '¿Qué son las funciones ejecutivas en los niños?', answer: 'Las funciones ejecutivas son un conjunto de habilidades mentales que incluye la memoria de trabajo, el control inhibitorio y la flexibilidad cognitiva. Juntas ayudan a los niños a planificar, concentrarse, resistir impulsos y adaptarse cuando las cosas cambian.' },
      { question: '¿Los puzles mejoran las funciones ejecutivas?', answer: 'Los puzles permiten practicar la planificación y el autocontrol, y la práctica mejora las habilidades practicadas. Las pruebas de que esto se traslade a las asignaturas del colegio o a la inteligencia general son débiles, así que es mejor disfrutar los puzles como juego que recetarlos como entrenamiento.' },
      { question: '¿Las apps de entrenamiento cerebral son buenas para los niños?', answer: 'Los metaanálisis concluyen que el entrenamiento mejora el rendimiento en las tareas entrenadas, pero rara vez se transfiere a otras habilidades, y las mejoras suelen desvanecerse. Las actividades cotidianas agradables que suponen un reto para los niños funcionan al menos igual de bien.' },
      { question: '¿Para qué edad es adecuado OutBrick?', answer: 'OutBrick tiene una clasificación de 4+ y no tiene contenido para adultos, ni reloj, ni chat público. La [página de clasificación por edades](/age-rating) explica la clasificación, incluido cómo funcionan sus vídeos con recompensa opcionales.' },
    ],
  },

  'playing-games-with-grandchildren': {
    title: 'Jugar a videojuegos con tus nietos: por qué vale la pena',
    dek: 'Jugar entre generaciones trae beneficios reales a ambas cuando el juego se elige bien. Qué muestran los estudios y cómo hacer que funcione.',
    imageAlt: 'Poppy y Flurry a ambos lados de un teléfono que muestra el tramo de Celebration Square en el mapa del Viaje de OutBrick, con ladrillos amarillos, morados y verdes flotando cerca',
    tags: ['jugar con los nietos', 'juego intergeneracional', 'juegos en familia', 'juegos para mayores', 'abuelos y nietos'],
    intro: 'A los abuelos se les dice a menudo que los juegos de sus nietos son un muro entre ellos: ruidosos, rápidos, incomprensibles y mejor dejarlos estar. La investigación sobre jugar juntos sugiere lo contrario. Cuando el juego se elige bien, jugar juntos es una de las formas más sencillas de que dos generaciones pasen tiempo de igual a igual, con el niño tantas veces de maestro como de alumno. Esto es lo que han encontrado los estudios, lo que suele fallar y cómo elegir y jugar juegos que funcionen a pesar de sesenta años de diferencia.',
    keyTakeaways: [
      'Las revisiones sobre el juego intergeneracional hallan beneficios para los lazos familiares, un aprendizaje en ambas direcciones y mejores actitudes hacia la otra generación.',
      'El problema más habitual es la diferencia de habilidad y velocidad. Los juegos por turnos y sin tiempo la suavizan.',
      'Deja que enseñe el niño. Invertir los papeles habituales es una de las partes más valoradas de jugar juntos.',
    ],
    sections: {
      'what-the-research-finds': {
        title: 'Lo que encuentra la investigación',
        paragraphs: [
          'De la Hera y sus colegas revisaron de forma sistemática los estudios empíricos sobre juegos digitales intergeneracionales, dieciséis en total, con jugadores mayores de 55 a 81 años y jugadores jóvenes de 4 a 22. Los beneficios que encontraron se agrupaban en cuatro: lazos familiares más fuertes, un aprendizaje que iba en ambas direcciones, una mejor comprensión de la otra generación y menos ansiedad social. Una revisión anterior de Costa y Veloso, que abarcaba 36 artículos publicados entre 2006 y 2014, llegó a conclusiones parecidas y propuso recomendaciones de diseño para juegos pensados para unir generaciones.',
          'Uno de los estudios mejor controlados se hizo en Singapur. Chua y sus colegas emparejaron a jóvenes y personas mayores para sesiones periódicas durante dos meses; algunas parejas jugaban juntas a videojuegos y otras hacían otras actividades. Las parejas que jugaban declararon mayores mejoras en sus actitudes hacia la otra generación y menos ansiedad al relacionarse con ella. Las muestras en este campo son pequeñas y la mayoría de los estudios son breves, así que no conviene exagerar el tamaño del efecto. Aun así, la dirección es coherente.',
        ],
      },
      'why-it-works': {
        title: 'Por qué funciona jugar juntos',
        paragraphs: [
          'Osmanovic y Pecchioni entrevistaron a personas mayores y a los familiares más jóvenes con los que jugaban. Ambas partes dijeron que los juegos eran una forma de pasar tiempo juntos y de mantenerse en contacto, y ambas describieron las emociones positivas del propio juego. Para muchos jugadores mayores, el juego importaba menos que la compañía. Voida y Greenberg, que observaron a familias y grupos jugando juntos a la consola, describieron los juegos como un punto de encuentro donde personas de edades y capacidades muy distintas podían adoptar papeles diferentes: jugador, entrenador, espectador, comentarista.',
          'Esa flexibilidad de papeles es importante. Siyahhan, Barab y Downton, que estudiaron a padres e hijos jugando juntos a un juego de misiones en línea, vieron que el juego compartido variaba mucho de una pareja a otra, con padres que dirigían, otros que seguían y otros que trabajaban codo con codo, y que daba resultados positivos con todos esos estilos. No hay una forma correcta de jugar juntos. Solo hay que encontrar la que os vaya bien a los dos.',
          'En estos estudios el aprendizaje también va en ambas direcciones, algo que De la Hera y sus colegas destacan como uno de los principales beneficios. Los niños enseñan los controles, los atajos y las convenciones del juego. Los abuelos suelen aportar paciencia, olfato para la estrategia y la costumbre de pensar un movimiento antes de hacerlo. En un puzle, esas son justo las cualidades que ganan, lo que equilibra la partida sin que se note. Muchos abuelos descubren que un juego compartido les da algo de lo que hablar con un nieto que, si no, responde a las preguntas con monosílabos.',
        ],
      },
      'what-goes-wrong': {
        title: 'Lo que suele fallar',
        paragraphs: [
          'Las revisiones coinciden en la dificultad principal: la diferencia de capacidades. Los niños suelen ser más rápidos y tener más práctica con las pantallas táctiles y las convenciones de los juegos; los abuelos pueden tener más paciencia y mejor sentido estratégico, pero reflejos más lentos y otra vista. Los juegos que premian la velocidad dejan al mayor siempre atrás, y eso no divierte a ninguno de los dos. Los juegos con mucho texto o controles diminutos dejan fuera a los más pequeños y, a veces, a los más mayores.',
          'La otra dificultad es la motivación. De la Hera y sus colegas señalan que las dos generaciones a menudo buscan cosas distintas en un juego, y los que mejor funcionan ofrecen a cada una algo que disfrutar. A un niño puede encantarle coleccionar y explorar; un abuelo puede preferir un objetivo claro y un puzle tranquilo. Los mejores juegos compartidos tienen sitio para ambas cosas.',
        ],
      },
      'choosing-a-game': {
        title: 'Cómo elegir un juego que disfrutéis los dos',
        paragraphs: [
          'Busca juegos en los que cada turno dure lo que haga falta. Un límite de movimientos está bien; un reloj, no. Busca juegos que podáis pasaros en un mismo dispositivo, para estar sentados uno al lado del otro en lugar de jugar en pantallas separadas. Y busca juegos con un comienzo suave, para que el jugador con menos experiencia se sitúe sin pasar vergüenza. Nuestra lista de comprobación de [juegos de puzles para personas mayores](/blog/puzzle-games-for-older-adults) trata la legibilidad y los ajustes con más detalle.',
          'Un puzle diario es un buen ritual compartido, sobre todo a distancia. OutBrick tiene en su web un [Tablero del día](/daily) al que cualquiera puede jugar en el navegador, así que abuelo y nieto pueden probar el mismo tablero y comparar por teléfono esa noche cómo les ha ido. En el propio juego, cada tablero tiene un límite de movimientos pero nunca un reloj, la primera vez que deshaces es gratis y los símbolos para daltónicos vienen activados de serie, lo que ayuda si a alguno de los dos le cuesta distinguir ciertos colores.',
          'Piensa en el entorno además de en el juego. Una tableta sobre la mesa, entre los dos, es más cómoda para unos ojos mayores que un teléfono en la mano de un niño, y hace que turnarse sea natural. Comprueba que el texto es lo bastante grande para el abuelo y que el sonido está lo bastante bajo para poder hablar. Si alguno de los dos tiene necesidades particulares, como la visión del color, la audición o un temblor, unos minutos en los ajustes al principio ahorrarán frustraciones después. Nuestro artículo sobre [el daltonismo en los videojuegos](/blog/colour-blindness-in-games) explica uno de los casos más comunes.',
        ],
      },
      'playing-well-together': {
        title: 'Jugar bien juntos',
        paragraphs: [
          'La investigación sugiere que el valor de jugar juntos está más en la relación que lo rodea que en el propio juego. Unos cuantos hábitos ayudan, tanto si jugáis en el sofá como por videollamada. Para el lado social de los juegos en general, [Animal Crossing y el tiempo compartido](/blog/animal-crossing-shared-time) es una buena lectura complementaria.',
        ],
        bullets: [
          'Deja que el niño te enseñe el juego y sé un alumno dispuesto. Los niños rara vez tienen ocasión de ser los expertos.',
          'Turnaos en un mismo dispositivo y comentad cada movimiento, en lugar de competir en dos.',
          'Compartid lo que veis: estrategias, patrones, una buena idea que tuviste hace tres movimientos.',
          'Haced sesiones cortas y parad en un buen momento, para que la próxima vez sea algo que esperar con ganas.',
          'Acordad juntos cuánto vais a jugar antes de empezar, para que parar no sea una batalla.',
        ],
      },
    },
    pullQuote: 'No hay una forma correcta de jugar juntos. Solo hay que encontrar la que os vaya bien a los dos.',
    faqs: [
      { question: '¿Jugar a videojuegos con los nietos es bueno para los abuelos?', answer: 'Los estudios sobre el juego intergeneracional hablan de lazos familiares más fuertes, aprendizaje en ambas direcciones y actitudes más positivas entre generaciones. La mayoría de los estudios son pequeños y breves, pero sus resultados apuntan en la misma dirección.' },
      { question: '¿Qué tipo de juegos son mejores para abuelos y nietos?', answer: 'Funcionan mejor los juegos por turnos, sin reloj, con controles sencillos y un comienzo suave, porque igualan las diferencias de velocidad y experiencia. Los juegos que podéis pasaros en un mismo dispositivo animan a hablar y a enseñar.' },
      { question: '¿Cómo pueden jugar los abuelos con nietos que viven lejos?', answer: 'Compartid un puzle diario al que juguéis los dos y comparad resultados, o jugad juntos por videollamada, por turnos y comentando los movimientos. El [Tablero del día](/daily) de OutBrick se puede jugar en cualquier navegador.' },
    ],
  },

  'calm-games-for-kids': {
    title: 'Juegos tranquilos para niños: guía para madres y padres',
    dek: 'Casi todas las apps de niños pequeños usan diseño manipulador. Una lista basada en la investigación para detectar presiones, anuncios y ganchos.',
    imageAlt: 'Poppy y Bloo a ambos lados de un teléfono que muestra un tablero superdifícil de OutBrick en el nivel 520, con ladrillos amarillos, naranjas y morados flotando cerca',
    tags: ['juegos para niños', 'juegos tranquilos', 'apps infantiles', 'crianza y pantallas', 'diseño de juegos'],
    intro: 'Elegir un juego para un niño solía consistir en comprobar si había violencia o palabrotas. En un teléfono o una tableta, las preguntas más importantes suelen tener que ver con el diseño: si un juego presiona al niño para que siga jugando, si sus anuncios se disfrazan de juego, si un personaje simpático es en realidad un vendedor. Los investigadores ya han estudiado estos patrones en las apps que usan de verdad los niños pequeños, y sus resultados dan a las familias una lista práctica. Aquí la tienes, junto con las pruebas en las que se basa y una mirada honesta a cómo sale parado nuestro propio juego.',
    keyTakeaways: [
      'En un estudio de las apps que usaban niños de 3 a 5 años, solo una de cada cinco no tenía ningún elemento de diseño manipulador.',
      'Atención a la falsa presión de tiempo, a los personajes que hacen sentir culpable al niño para que juegue, a los anuncios disfrazados de objetos del juego y a los ganchos para seguir.',
      'La cantidad de tiempo de pantalla importa menos que lo que hay en la pantalla y que tú formes parte de ello.',
    ],
    sections: {
      'manipulative-design': {
        title: 'Lo que encontraron los investigadores en las apps infantiles',
        paragraphs: [
          'Radesky y sus colegas analizaron las apps que usaban 160 niños de 3 a 5 años y las clasificaron según su diseño manipulador, es decir, elementos que sirven a los intereses de quien hace la app por encima de los del niño. La mayoría tenía al menos uno. Entre ellos estaban la presión de una relación parasocial, cuando un personaje que le gusta al niño le insiste para que siga jugando o compre algo; la presión de tiempo fabricada, como cuentas atrás y ofertas por tiempo limitado; las restricciones de navegación que dificultan salir, y ganchos atractivos, como premios y cofres del tesoro, pensados para alargar el juego. Solo alrededor del 20 % de las apps no tenía ningún elemento manipulador, y los niños de familias con menos ingresos usaban apps con más.',
          'Un estudio anterior del mismo grupo se centró en la publicidad. Meyer y sus colegas examinaron 135 apps populares entre niños de cinco años o menos y encontraron algún tipo de publicidad en el 95 % de ellas. Había anuncios que interrumpían el juego, invitaciones a comprar, personajes comerciales y, en una minoría de apps, anuncios escondidos en el juego, disfrazados de objetos o marcados con símbolos engañosos. Había publicidad en todas las apps gratuitas que examinaron y en la mayoría de las de pago, y era igual de frecuente en las apps etiquetadas como educativas.',
        ],
      },
      'why-it-matters': {
        title: 'Por qué el diseño importa más que los minutos',
        paragraphs: [
          'Los titulares sobre el tiempo de pantalla se fijan en las horas, pero las pruebas más sólidas apuntan al contenido y al contexto. En un gran estudio prerregistrado con más de 120 000 adolescentes ingleses, Przybylski y Weinstein vieron que la relación entre el tiempo de pantalla y el bienestar era curva: el uso moderado no se asociaba a ningún daño, y los efectos en niveles más altos eran pequeños. El estudio era con adolescentes, no con niños pequeños, y no puede decir qué hace una app concreta. Pero corrige útilmente la idea de que los minutos son lo único que cuenta.',
          'Para los niños más pequeños, Hirsh-Pasek y sus colegas se basaron en la ciencia del aprendizaje para definir qué hace que una app sea realmente educativa: los niños deberían estar activos, implicados sin distracciones, haciendo algo con sentido y, idealmente, interactuando con otras personas. Cuando Meyer y sus colegas aplicaron ese marco a más de cien apps «educativas» populares, la mayoría puntuó bajo, y las gratuitas puntuaron peor en implicación por sus extras que distraían. La etiqueta de la tienda dice poco.',
        ],
      },
      checklist: {
        title: 'Una lista para elegir juegos tranquilos',
        paragraphs: [
          'Juega tú diez minutos antes que tu hijo y repasa la lista de abajo. Muy pocos juegos la superarán entera; lo importante es saber dónde está la presión para decidir si te parece aceptable. Describimos los puntos de presión en términos generales en [qué hace que un juego de puzles sea relajante](/blog/relaxing-puzzle-games-what-makes-one-calm).',
        ],
        bullets: [
          'Presión de tiempo: ¿hay una cuenta atrás, una oferta «por tiempo limitado» o un evento que caduca?',
          'Presión de los personajes: ¿un personaje simpático se pone triste, suplica o regaña cuando tu hijo para o se niega a comprar?',
          'Anuncios disfrazados: ¿distingue tu hijo un anuncio de un objeto del juego? ¿Se reproducen anuncios sin que nadie los pida?',
          'Ganchos: ¿hay cofres, ruletas o rachas pensados para que el niño vuelva, y están ligados a compras?',
          'Salidas: ¿puede tu hijo parar en cualquier momento sin perder nada, y es fácil encontrar la salida?',
          'Compras: ¿están protegidas por Solicitar la compra o por una contraseña, y se muestran los precios en dinero real?',
          'Contenido: ¿corresponde el juego a su clasificación por edades, y hay chat con desconocidos?',
        ],
      },
      'outbrick-honestly': {
        title: 'Cómo sale parado OutBrick, con honestidad',
        paragraphs: [
          'Hacemos OutBrick, así que así queda frente a esa lista, incluidas las partes que una familia atenta podría cuestionar. No hay reloj en ninguna parte; cada tablero tiene un límite de movimientos que se muestra antes del primer movimiento. Los nueve amigos de ladrillo hablan con bocadillos de texto, sin voz, y no hay chat público. Tiene una clasificación de 4+, y la [página de clasificación por edades](/age-rating) explica por qué.',
          'OutBrick sí tiene vidas y anuncios, y preferimos que lo sepas por nosotros. Tienes cinco vidas y se recupera una cada treinta minutos. Los anuncios son solo vídeos con recompensa, en seis espacios, y un vídeo solo se reproduce cuando un jugador pulsa un botón para pedirlo; no hay banners, ni anuncios entre niveles, ni al abrir la app. Hay una Brick Wheel que girar, que a un niño puede gustarle y de la que una madre o un padre quizá quiera hablar, con razón. Las compras dentro de la app, opcionales, las gestiona Apple, y una compra única de Quitar anuncios los elimina por completo. La página de inicio detalla [exactamente lo que cuestan las vidas, deshacer y los anuncios](/#fair). Si algo de eso no encaja con tu familia, es una decisión perfectamente razonable.',
        ],
      },
      'being-part-of-it': {
        title: 'Formar parte de ello',
        paragraphs: [
          'La mayor parte del daño que describe la investigación viene de un niño a solas con un sistema hecho para retenerlo. La protección más sencilla es estar cerca y, a veces, jugar también. Habla de por qué un personaje pide dinero, o de por qué apareció un cofre justo cuando el juego se ponía difícil; los niños entienden la persuasión mejor de lo que esperamos cuando se la señalamos. Radesky, Schumacher y Zuckerman ya lo señalaron hace años: lo que hacen los adultos en torno al uso de pantallas de un niño pequeño importa.',
          'Usa las herramientas del dispositivo como red de seguridad, no como sustituto. En iPhone y iPad, Tiempo de uso te permite fijar límites y pedir permiso para las compras mediante En familia. La Academia Estadounidense de Pediatría ofrece un [plan familiar de medios](https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx) que puede ayudaros a acordar las normas juntos. Para juegos que estimulan el pensamiento sin presión, nuestro artículo sobre [los puzles y las funciones ejecutivas de los niños](/blog/puzzles-executive-function-children) tiene ideas para jugar juntos.',
        ],
      },
    },
    pullQuote: 'La mayor parte del daño que describe la investigación viene de un niño a solas con un sistema hecho para retenerlo.',
    faqs: [
      { question: '¿Qué es el diseño manipulador en las apps infantiles?', answer: 'Un diseño que sirve a quien hace la app antes que al niño, como personajes que presionan para seguir jugando o comprar, cuentas atrás falsas, salidas difíciles de encontrar y premios pensados para alargar el juego. Un estudio lo encontró en alrededor del 80 % de las apps que usaban niños de 3 a 5 años.' },
      { question: '¿Cómo sé si un juego es lo bastante tranquilo para mi hijo?', answer: 'Juega tú primero y fíjate en si hay cuentas atrás, anuncios que se reproducen sin pedirlos, personajes que hacen sentir culpable a tu hijo, ganchos como cofres y ruletas, y si tu hijo puede parar en cualquier momento sin perder nada.' },
      { question: '¿Los juegos gratuitos son peores para los niños que los de pago?', answer: 'La investigación encontró publicidad en todas las apps infantiles gratuitas estudiadas y en la mayoría de las de pago, y las gratuitas puntuaron peor en calidad educativa por sus extras que distraían. Pagar no garantiza un juego tranquilo, pero a menudo elimina parte de la presión.' },
      { question: '¿OutBrick tiene anuncios?', answer: 'Sí, solo vídeos con recompensa, y cada uno se reproduce únicamente cuando un jugador pulsa un botón para pedirlo. No hay banners ni anuncios entre niveles, y Quitar anuncios los desactiva. La página de inicio detalla [lo que cuestan las vidas, deshacer y los anuncios](/#fair).' },
    ],
  },

  'dyslexia-friendly-game-text': {
    title: 'Dislexia y texto en juegos: fuentes, espaciado y claridad',
    dek: '¿Funcionan las fuentes para dislexia? Qué dicen los estudios de lectura sobre tipografía, tamaño, espaciado y redacción, y cómo aplicarlo en juegos.',
    imageAlt: 'Peach y Vio a ambos lados de un teléfono que muestra el tramo de Cloud Carnival en el mapa del Viaje de OutBrick, con ladrillos amarillos, naranjas y morados flotando cerca',
    tags: ['dislexia', 'fuentes para dislexia', 'legibilidad', 'accesibilidad en videojuegos', 'diseño inclusivo'],
    intro: 'Los juegos están llenos de palabras: tutoriales, descripciones emergentes, menús, bocadillos, la letra pequeña de una recompensa. Para los jugadores con dislexia, un texto mal compuesto puede convertir un juego agradable en un examen de lectura. La buena noticia es que la investigación sobre lo que ayuda es bastante clara, y en parte contradice la creencia popular. Las fuentes diseñadas específicamente para la dislexia, por ejemplo, no han salido bien paradas en los estudios. El tamaño, el espaciado y una redacción sencilla, sí. Esto es lo que dicen las pruebas y cómo intentamos aplicarlo.',
    keyTakeaways: [
      'Los estudios controlados no han encontrado ningún beneficio para la lectura en fuentes especializadas para la dislexia como OpenDyslexic y Dyslexie.',
      'El texto más grande y el espacio extra entre letras son lo que tiene mejores pruebas. Las fuentes sin serifa habituales funcionan bien; la cursiva, mal.',
      'En los juegos, lo que más ayuda es usar menos palabras, una redacción sencilla, texto que espera al jugador y significados que transmiten tanto los iconos como las palabras.',
    ],
    sections: {
      'dyslexia-fonts': {
        title: '¿Funcionan las fuentes para dislexia?',
        paragraphs: [
          'Las fuentes diseñadas para lectores con dislexia, con la parte inferior más gruesa y formas de letra exageradas, se recomiendan mucho. Las pruebas controladas no les son favorables. Wery y Diliberto compararon OpenDyslexic con Arial y Times New Roman en alumnos de primaria con dislexia en tareas de nombrar letras, leer palabras y leer pseudopalabras, y no encontraron ninguna mejora de velocidad ni de precisión en ningún niño ni en el grupo. Ninguno de los niños dijo preferirla.',
          'Kuster y sus colegas probaron la fuente Dyslexie en dos experimentos con más de 250 niños con dislexia y un grupo de comparación sin ella. Los textos y las listas de palabras en Dyslexie no se leyeron ni más rápido ni con más precisión que en Arial o Times New Roman, la mayoría de los niños prefirió las fuentes corrientes y la preferencia no tenía relación con lo bien que leían. En un estudio de seguimiento ocular de Rello y Baeza-Yates, que comparó varias tipografías con lectores con dislexia, OpenDyslexic tampoco mejoró la lectura. En ese estudio la fuente sí importaba, eso sí: los estilos sin serifa, monoespaciados y redondos ayudaban, y la cursiva dificultaba la lectura.',
          'Nada de eso significa que quien esté a gusto con una fuente para dislexia deba dejar de usarla. La comodidad importa, y si una fuente hace que leer resulte más fácil, es un buen motivo para usarla. Sí significa que un juego no debería tratar una fuente especial como la solución completa.',
        ],
      },
      'size-and-spacing': {
        title: 'Lo que sí ayuda: tamaño y espaciado',
        paragraphs: [
          'El cambio con más respaldo es el espacio entre letras. Zorzi y sus colegas vieron que un espaciado entre letras extragrande mejoraba la lectura al instante, sin entrenamiento, en una amplia muestra de niños italianos y franceses con dislexia. Su explicación es el apiñamiento: a muchos lectores con dislexia les afectan especialmente las letras muy juntas, y separarlas alivia el problema. Stagg y Kiss encontraron lo mismo en adolescentes: el espaciado extragrande mejoró la velocidad de lectura más en el grupo con dislexia que en sus compañeros y redujo las palabras saltadas, mientras que las láminas de color no supusieron una diferencia significativa.',
          'El tamaño también ayuda. En otro estudio de seguimiento ocular, Rello y Baeza-Yates vieron que un texto más grande y un espaciado entre caracteres más amplio permitían a los lectores, con y sin dislexia, leer bastante más rápido. Un estudio más amplio sobre la legibilidad en la web, de Rello, Pielot y Marcos, vio que la legibilidad y la comprensión aumentaban con el tamaño de la fuente y recomendó un texto de al menos 18 puntos en las páginas con mucho texto; un interlineado mayor, en cambio, no ayudaba. La lección práctica es dejar que el texto crezca y evitar que las letras se amontonen.',
        ],
      },
      'game-text': {
        title: 'Qué significa esto para el texto de los juegos',
        paragraphs: [
          'Los juegos tienen costumbres particulares que dificultan la lectura. A diferencia de un libro, un juego a menudo te pide leer mientras pasa otra cosa y actuar al instante según lo que has leído. Las fuentes decorativas estilizadas, el texto sobre fondos recargados, los diálogos que avanzan solos y las instrucciones que aparecen una vez en una ventana emergente y nunca más añaden peso a la lectura. Nada de esto es necesario. La mayoría de las soluciones tienen que ver con respetar el ritmo de quien lee.',
        ],
        bullets: [
          'Usa una fuente sin serifa clara para todo lo que el jugador tenga que leer y reserva las letras decorativas para los títulos.',
          'No uses nunca cursiva en instrucciones ni en pasajes largos.',
          'Respeta el tamaño de texto del sistema para que el texto crezca cuando el jugador lo pida, y deja espacio entre las letras.',
          'Pon el texto sobre un panel liso y con buen contraste, no encima de la escena del juego.',
          'Deja que el jugador haga avanzar los diálogos. No hagas nunca que el texto desaparezca con un temporizador.',
          'Acompaña las palabras con iconos, para que el jugador reconozca un botón sin leerlo.',
          'Haz que las instrucciones sean fáciles de volver a encontrar después del tutorial.',
        ],
        note: 'El contraste importa a todos los lectores, y sobre todo con la edad. Lo tratamos en [diseñar juegos para ojos y manos mayores](/blog/designing-games-for-older-players).',
      },
      'plain-words': {
        title: 'Las palabras sencillas también son accesibilidad',
        paragraphs: [
          'La tipografía solo llega hasta cierto punto. Las propias palabras importan igual. Las frases cortas, las palabras comunes, una idea por línea y la palabra más importante al principio ayudan a los lectores con dislexia, y también a todos los demás, en especial a los jugadores más jóvenes y a quienes juegan en un segundo idioma. Las pautas del W3C sobre el [nivel de lectura](https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html) defienden lo mismo para la web. Planteamos algo parecido sobre el color en [por qué el color nunca debería ser la única pista en un puzle](/blog/color-shape-accessibility): la información importante nunca debería depender de un solo canal, y para muchos jugadores el texto es un canal difícil.',
          'Para nosotros esto es algo personal. Los nueve amigos de ladrillo de OutBrick hablan solo con bocadillos de texto, sin voz, así que cómo están escritos esos bocadillos importa. Los mantenemos cortos, y el objetivo de un tablero se muestra con sus ladrillos y sus puertas, no con instrucciones: cada ladrillo sale por la puerta de su color y el límite de movimientos aparece como una cuerda. Texto más grande se aplica en todo el juego. Puedes comprobar lo poco que hay que leer en un tablero [jugando uno en el navegador](/play).',
        ],
      },
      'for-players': {
        title: 'Consejos para jugadores con dislexia',
        paragraphs: [
          'En iPhone y iPad, Ajustes, Accesibilidad, Pantalla y tamaño de texto ofrece Texto más grande y Texto en negrita, y los juegos bien hechos respetan ambos. Contenido leído, en el mismo menú de Accesibilidad, puede leer en voz alta el texto seleccionado, y Leer pantalla lee todo lo que hay en pantalla al deslizar dos dedos hacia abajo desde la parte superior. Busca juegos cuyos menús usen iconos además de palabras, y no te cortes a la hora de usar las opciones de tamaño de texto o de subtítulos del propio juego. Los menús de ajustes de los juegos rara vez reciben mucho cariño; los que funcionan bien para jugadores con dislexia suelen ser buenos para todo el mundo. Para saber más sobre cómo los ajustes y la dificultad pueden abrir los juegos a más gente, lee [lo que enseña el Modo Asistencia de Celeste](/blog/celeste-assist-mode-accessibility).',
          'Sobre todo, la dislexia no mide lo bien que alguien juega. Muchos jugadores con dislexia son excelentes en juegos espaciales y de estrategia, que piden habilidades muy distintas de la lectura. Un juego que cuida su texto simplemente deja de ponerles un obstáculo innecesario delante. Si el texto de OutBrick te estorba en algún sitio, nuestra [página de soporte](/support) es el lugar para decirnos dónde.',
        ],
      },
    },
    pullQuote: 'Sí significa que un juego no debería tratar una fuente especial como la solución completa.',
    faqs: [
      { question: '¿Cuál es la mejor fuente para la dislexia?', answer: 'Los estudios no han encontrado una única fuente mejor. Las fuentes sin serifa habituales, como Arial y Verdana, funcionan bien, la cursiva funciona mal y las fuentes especializadas para dislexia no han mejorado la lectura en estudios controlados.' },
      { question: '¿Funcionan las fuentes para dislexia como OpenDyslexic?', answer: 'Los estudios controlados de OpenDyslexic y Dyslexie no encontraron ninguna mejora en la velocidad ni en la precisión lectora de niños con dislexia. Aun así, a algunas personas les resultan cómodas, lo cual es un buen motivo para usarlas.' },
      { question: '¿Qué hace que un texto sea más fácil de leer para personas con dislexia?', answer: 'El texto más grande y el espacio extra entre letras son lo que tiene pruebas más sólidas. Una redacción sencilla, frases cortas y un texto sobre un fondo liso y con buen contraste también ayudan.' },
      { question: '¿Cuánto hay que leer en OutBrick?', answer: 'Muy poco. Los tableros se leen a través de los ladrillos, las puertas, un número de movimientos y una cuerda, y los bocadillos de texto de los amigos de ladrillo son breves. Texto más grande se aplica en todo el juego.' },
    ],
  },

  'designing-games-for-older-players': {
    title: 'Diseñar juegos para personas mayores: legibles e indulgentes',
    dek: 'Cómo cambian con la edad la vista, el tacto y los reflejos, qué implica para contraste, botones y ritmo, y cómo hacer juegos amables a los 80.',
    imageAlt: 'Zippy y Bloo a ambos lados de un teléfono que muestra el tramo de Autumn Orchard en el mapa del Viaje de OutBrick, con ladrillos azules, amarillos y turquesa flotando cerca',
    tags: ['diseño de juegos', 'juegos para mayores', 'accesibilidad en videojuegos', 'diseño inclusivo', 'diseño móvil'],
    intro: 'Ya hemos escrito sobre cómo puede elegir una persona mayor un buen juego de puzles. Este artículo es para el otro lado de la pantalla: diseñadores y desarrolladores que quieren que su juego funcione para gente de setenta y ochenta años. Se basa en la investigación sobre cómo cambian con la edad la vista, el movimiento y la velocidad, y la convierte en un pequeño conjunto de principios. Ninguno es exótico. La mayoría mejoran el juego para todo el mundo, que es el mejor argumento para aplicarlos.',
    keyTakeaways: [
      'El envejecimiento afecta a la sensibilidad al contraste, a la visión con poca luz y a la velocidad de procesamiento, no solo a la nitidez. El tamaño por sí solo no lo resuelve.',
      'Las pantallas táctiles reducen la distancia entre usuarios mayores y jóvenes, pero los objetivos pequeños y los arrastres precisos siguen costando más a los jugadores mayores.',
      'La edad predice mal la capacidad. Diseña para un abanico de capacidades, con ajustes, no para un estereotipo.',
    ],
    sections: {
      'how-vision-changes': {
        title: 'Cómo cambia la vista, más allá de necesitar gafas',
        paragraphs: [
          'La revisión de Cynthia Owsley sobre 25 años de investigación acerca del envejecimiento y la visión corrige útilmente la idea de que los ojos mayores solo necesitan un texto más grande. Los cambios que describe incluyen una pérdida de sensibilidad al contraste, de modo que el gris claro sobre blanco o el azul oscuro sobre negro se vuelven difíciles de separar; peor visión con poca luz; una recuperación más lenta tras un deslumbramiento; menor sensibilidad al parpadeo y al movimiento, y un procesamiento visual más lento, lo que significa que cuesta más asimilar lo que hay en pantalla.',
          'Cada cambio tiene una consecuencia de diseño. La pérdida de sensibilidad al contraste pide un contraste fuerte entre el texto y el fondo y entre las piezas y el tablero, no solo letra grande. La peor visión con poca luz importa en los juegos a los que se juega en la cama o en el sofá por la noche, donde abundan los temas oscuros y las paletas apagadas. El procesamiento más lento desaconseja la información que aparece un instante o cambia deprisa. La revisión de Hawthorn sobre el envejecimiento para diseñadores de interfaces, que ya tiene un cuarto de siglo, llegó a muchas de las mismas conclusiones y sigue siendo una buena lista de comprobación.',
          'El color también cambia. El cristalino amarillea con la edad, y los azules y morados en particular se vuelven más difíciles de distinguir, un patrón distinto de las confusiones rojo-verde del daltonismo hereditario. Un juego que depende de una diferencia sutil entre dos azules puede volverse injugable para una persona mayor sin que nadie del equipo se dé cuenta. Nuestro artículo sobre [el daltonismo en los videojuegos](/blog/colour-blindness-in-games) explica por qué un símbolo en cada pieza de color ayuda en ambos casos.',
        ],
      },
      'how-hands-change': {
        title: 'Cómo cambia el movimiento',
        paragraphs: [
          'La revisión de Seidler y sus colegas sobre el control motor y el envejecimiento describe movimientos más lentos, menor coordinación y un control motor fino más variable, ligados a cambios en los sistemas motores del cerebro. En muchas personas se suman el temblor y la artritis. En una pantalla táctil, eso se traduce en más toques fallidos, más toques accidentales y más dificultad con los gestos que deben ser precisos o rápidos.',
          'Aun así, las pantallas táctiles encajan bien con los usuarios mayores. Findlater y sus colegas compararon a adultos mayores y jóvenes en tareas de señalar, arrastrar y otras con un ratón y con una pantalla táctil. Los adultos mayores fueron más lentos en general, pero la pantalla táctil redujo la distancia: recortó su tiempo de movimiento un 35 % respecto al ratón, frente a un 16 % en los adultos jóvenes, y los errores también bajaron. Motti, Vigouroux y Gorce, que probaron el arrastrar y soltar en juegos de puzles táctiles con 24 personas de 65 a 86 años, vieron que era una técnica eficaz incluso en un smartphone, aunque un lápiz táctil mejoraba la precisión. La lección no es evitar el tacto, sino hacer que los objetivos sean generosos.',
        ],
      },
      'age-is-not-ability': {
        title: 'La edad dice poco de la capacidad',
        paragraphs: [
          'Es tentador crear un «modo fácil para mayores». La investigación sugiere que sería un error. Findlater y Zhang recogieron datos de entrada de más de 700 personas y analizaron 318, de entre 18 y 83 años. El rendimiento bajaba de forma constante con la edad en promedio, pero las diferencias individuales eran tan grandes que saber la edad de alguien, o incluso si declaraba una discapacidad motora, decía poco de cómo iba a rendir en realidad. En el estudio de Motti, algunos participantes de más de 80 años superaron a personas de setenta y tantos.',
          'Así que diseña para un abanico. Incluye los ajustes que permiten a cada jugador adaptar el juego, respeta los ajustes del sistema que ya ha elegido y haz que la configuración por defecto sea lo bastante generosa para que la mayoría nunca necesite cambiarla. Nuestra [lista de comprobación para personas mayores](/blog/puzzle-games-for-older-adults) muestra cómo se ve eso desde el otro lado.',
        ],
      },
      principles: {
        title: 'Cinco principios: legible, fácil de tocar, indulgente, sin prisas, predecible',
        paragraphs: [
          'En conjunto, la investigación apunta a cinco principios. Coinciden con la [guía sobre el tamaño de los objetivos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) de la norma de accesibilidad web y con lo que hemos aprendido construyendo un juego de puzles.',
          'La prueba más útil es también la más barata: pon el juego delante de unas cuantas personas de setenta y ochenta años y míralas jugar sin ayudarlas. Donde dudan, entornan los ojos, tocan dos veces o preguntan qué significa algo, el diseño les ha fallado, y normalmente también les ha fallado a muchos jugadores más jóvenes, solo que con menos ruido. Puedes hacer el mismo ejercicio con nosotros dándole a alguien un [tablero en el navegador](/play).',
        ],
        bullets: [
          'Legible: contraste alto en todas partes, una letra sin serifa clara que crece con el tamaño de texto del sistema y nada importante en texto fino, pálido o pequeño.',
          'Fácil de tocar: objetivos grandes con espacio entre ellos, colocados al alcance del pulgar, y gestos que necesitan un solo dedo y ninguna rapidez.',
          'Indulgente: un deshacer fácil, confirmación antes de cualquier cosa que tenga coste y ninguna penalización por un toque perdido.',
          'Sin prisas: sin temporizadores en el juego normal, sin información que pase volando y con libertad para parar en cualquier momento sin perder nada.',
          'Predecible: diseños y controles coherentes, ninguna ventana emergente inesperada y mecánicas nuevas presentadas de una en una.',
        ],
      },
      'in-practice': {
        title: 'Cómo se aplica en OutBrick',
        paragraphs: [
          'Así es como hemos intentado aplicar esos principios, y dónde están los límites. Cada ladrillo lleva su identidad en el tono, la forma y las espigas, y los símbolos para daltónicos vienen activados de serie, lo que también ayuda con las confusiones entre azul y morado que se vuelven comunes con la edad. Texto más grande se aplica en todo el juego y Reducir movimiento se respeta en todas partes. Nunca hay reloj: cada tablero muestra su límite de movimientos antes del primer movimiento, y la primera vez que deshaces en cada tablero es gratis. Las llaves, los candados, las cajas y las puertas solo aparecen en tableros posteriores, cuando lo básico ya resulta familiar. El progreso se sincroniza con iCloud, así que lo que juegas en un iPhone continúa en la pantalla más grande de un iPad.',
          'No lo hemos resuelto todo. Deslizar un ladrillo sigue siendo un gesto con dirección, y a algunos jugadores les costará más que un toque. Por eso la [página de accesibilidad](/accessibility) pide detalles concretos cuando un control es difícil de alcanzar o de leer. Para el caso relacionado de los jugadores con discapacidad motora, consulta [juegos para jugar con una mano en iPhone](/blog/one-handed-games-iphone).',
        ],
      },
    },
    pullQuote: 'Diseña para un abanico de capacidades, con ajustes, no para un estereotipo.',
    faqs: [
      { question: '¿Cómo deberían diseñarse los juegos para personas mayores?', answer: 'Con contraste alto y texto que se pueda agrandar, objetivos táctiles grandes y bien separados, un deshacer fácil, sin temporizadores en el juego normal y con diseños coherentes y predecibles. La mayoría de estos cambios ayudan a todos los jugadores.' },
      { question: '¿Las pantallas táctiles son buenas para las personas mayores?', answer: 'En general, sí. Un estudio vio que una pantalla táctil recortaba el tiempo de movimiento de los adultos mayores un 35 % respecto a un ratón, lo que reducía la distancia con los usuarios más jóvenes, aunque los objetivos pequeños y los gestos precisos siguen provocando más errores.' },
      { question: '¿Por qué el contraste importa más que el tamaño del texto para los jugadores mayores?', answer: 'El envejecimiento reduce la sensibilidad al contraste y la visión con poca luz, así que un texto pálido o con poco contraste sigue siendo difícil de leer aunque sea grande. El contraste fuerte y el texto más grande funcionan mejor juntos.' },
      { question: '¿Deberían los juegos tener un modo especial para mayores?', answer: 'La investigación sobre el rendimiento de entrada concluye que la edad predice mal la capacidad individual. Unos valores por defecto generosos y unos ajustes adaptables sirven mejor a los jugadores mayores que un modo aparte basado en suposiciones sobre la edad.' },
    ],
  },

  'sensory-friendly-game-design': {
    title: 'Juegos sensorialmente amables para personas neurodivergentes',
    dek: 'Muchos jugadores autistas y neurodivergentes son sensibles al sonido, la luz y las sorpresas. Qué dice la investigación y qué diseño les ayuda.',
    imageAlt: 'Moss y Poppy a ambos lados de un teléfono que muestra un tablero superdifícil de OutBrick en el nivel 520, con ladrillos turquesa, verdes y azules flotando cerca',
    tags: ['neurodiversidad', 'autismo', 'procesamiento sensorial', 'diseño inclusivo', 'juegos tranquilos'],
    intro: 'Para muchas personas autistas, y para muchas otras que procesan los sentidos de otra manera, el juego moderno es demasiado. Música que no se puede bajar por separado, efectos de sonido repentinos, celebraciones con destellos, una notificación que llega a mitad de un pensamiento, un menú que cambia sin avisar. Nada de esto está pensado para excluir a nadie, y todo ello puede hacerlo. Este artículo repasa lo que dice la investigación sobre las diferencias sensoriales y el juego, y las decisiones de diseño que hacen que un juego sea predecible, silencioso y sin presión sin volverlo aburrido.',
    keyTakeaways: [
      'Las diferencias sensoriales, tanto de hiperrespuesta como de hiporrespuesta, son frecuentes entre las personas autistas y varían mucho de una persona a otra.',
      'Los juegos son una parte valorada, a menudo social, de la vida de muchos jugadores autistas. El objetivo de la investigación debería ser hacer mejores juegos, no jugar menos.',
      'El diseño sensorialmente amable consiste sobre todo en dar control: ajustes separados de volumen y efectos, respuestas predecibles y ninguna sorpresa.',
    ],
    sections: {
      'sensory-differences': {
        title: 'Las diferencias sensoriales son frecuentes y variadas',
        paragraphs: [
          'Ben-Sasson y sus colegas actualizaron en 2019 su metaanálisis de los síntomas sensoriales en el autismo, con 55 estudios basados en cuestionarios que abarcaban a más de 4600 personas autistas. En comparación con sus pares de desarrollo típico, las personas autistas declaraban mucha más hiperrespuesta (sonidos, luces o texturas que las abruman), hiporrespuesta (no notar algunas sensaciones) y búsqueda de sensaciones. Las diferencias eran grandes, pero los resultados también variaban mucho entre estudios y entre personas, lo que recuerda que no existe un único perfil sensorial autista.',
          'La sensibilidad sensorial no se limita a las personas con diagnóstico. Robertson y Simmons encuestaron a 212 adultos de la población general y encontraron una relación fuerte entre el número de rasgos autistas que declaraba una persona y la frecuencia con la que tenía dificultades de procesamiento sensorial. Diseñar para la comodidad sensorial no es, por tanto, algo de nicho. Ayuda a una gran variedad de jugadores, incluidas personas con migraña, ansiedad o simplemente cansancio al final de un día largo.',
        ],
      },
      language: {
        title: 'Una nota sobre el lenguaje',
        paragraphs: [
          'Las palabras importan aquí, y no hay una única respuesta. Kenny y sus colegas preguntaron a más de 3400 miembros de la comunidad del autismo del Reino Unido qué términos preferían. «Autismo» y «en el espectro del autismo» tenían una aceptación amplia. «Autista» contaba con el apoyo de muchos adultos autistas y familias, pero de menos profesionales, mientras que «persona con autismo» era más popular entre los profesionales que entre los adultos autistas. No había un término preferido por todos. En este artículo decimos sobre todo personas autistas, siguiendo la preferencia de muchos adultos autistas, y neurodivergentes para el grupo más amplio, sabiendo que cada persona elige de forma distinta.',
          'También evitamos el enfoque médico. Las diferencias sensoriales forman parte de cómo algunas personas viven el mundo, no son algo que un juego deba intentar corregir. La guía de la National Autistic Society sobre las [diferencias sensoriales](https://www.autism.org.uk/advice-and-guidance/topics/sensory-differences/sensory-differences/all-audiences) es una buena introducción en lenguaje sencillo.',
        ],
      },
      'what-autistic-players-say': {
        title: 'Lo que muestra la investigación con jugadores autistas',
        paragraphs: [
          'Buena parte de la investigación inicial sobre el autismo y los videojuegos se centraba en los riesgos. Cuando Mazurek, Engelhardt y Clark preguntaron directamente a adultos autistas, surgió un panorama más completo. Los juegos eran una parte importante y agradable de la vida de muchos participantes, valorada por el entretenimiento, la relajación y el alivio del estrés, y por la conexión social, junto con algunas preocupaciones por el tiempo dedicado a jugar. El estudio etnográfico de Ringland sobre una comunidad de Minecraft creada para niños autistas mostró cómo un mundo virtual bien gestionado podía dar a los niños un lugar cómodo para jugar con sus iguales, y defendió que esos espacios no son menos reales que un patio de recreo.',
          'Spiel y Gerling revisaron 66 artículos de investigación sobre juegos para jugadores neurodivergentes y fueron críticos con el campo. La mayoría de los juegos se hacían para niños, se diseñaban de arriba abajo, apuntaban a la educación o la terapia y partían de un modelo médico de la discapacidad, no de lo que disfrutan los propios jugadores neurodivergentes. Su conclusión vale para cualquier diseñador: haz juegos a los que las personas neurodivergentes quieran jugar y dales el control, en lugar de juegos que intenten cambiarlas.',
          'Eso también significa tomarse en serio el lado social del juego que valoran muchos jugadores autistas, y las presiones que pueden acompañarlo. Los modos competitivos, las clasificaciones públicas y el chat con desconocidos les van bien a algunos jugadores y abruman a otros. Un juego puede ofrecerlos sin empujar a nadie, de modo que quien quiera un puzle tranquilo y en solitario nunca tenga que sortear avisos sociales para encontrarlo.',
        ],
      },
      'design-principles': {
        title: 'Cómo es un diseño sensorialmente amable',
        paragraphs: [
          'El hilo común es el control. Cada persona encuentra difíciles sensaciones distintas, así que el objetivo no es un único «modo silencioso», sino poder subir, bajar o apagar cada canal, y un juego que se comporte igual cada vez.',
          'La previsibilidad merece una atención especial, porque los juegos recurren muy a menudo a la sorpresa. Un suceso repentino puede encantar a un jugador y angustiar a otro. La respuesta no es eliminar toda novedad, sino anunciarla: avisa al jugador de que llega una mecánica nueva, deja que la vea antes y mantén estables las reglas del mundo una vez aprendidas. La rutina puede ser un placer en sí misma, y eso es parte del atractivo de un [Tablero del día](/daily) que llega a la misma hora y con la misma forma cada día.',
        ],
        bullets: [
          'Controles separados para la música, los efectos de sonido y la vibración, y que cada uno se pueda apagar por completo.',
          'Respetar el ajuste Reducir movimiento del sistema y no hacer parpadear nunca grandes zonas de la pantalla.',
          'Respuestas predecibles: la misma acción produce siempre el mismo sonido, la misma animación y el mismo resultado.',
          'Ninguna sorpresa: ni ventanas emergentes a mitad de partida, ni sonidos fuertes repentinos, y aviso antes de que aparezca algo nuevo.',
          'Pausar y parar en cualquier momento sin perder nada, y ningún reloj que meta prisa.',
          'Instrucciones claras y literales que se puedan volver a encontrar, y menús coherentes que no se reorganizan solos.',
          'Recompensas y celebraciones breves, que se puedan atenuar.',
        ],
      },
      outbrick: {
        title: 'Dónde está OutBrick',
        paragraphs: [
          'No diseñamos OutBrick para ningún grupo en concreto, pero muchos de estos principios nos importan. El sonido, la música, la vibración y las notificaciones se pueden desactivar por separado en Ajustes. Reducir movimiento se respeta en todas partes y recorta el paralaje, el confeti y las transiciones con mucho rebote. Los nueve amigos de ladrillo hablan con bocadillos de texto, nunca con voz, así que el juego puede ser completamente silencioso. No hay reloj: cada tablero muestra su límite de movimientos antes del primer movimiento, y un deslizamiento se comporta siempre igual, avanzando hasta que algo lo detiene. Nada interrumpe un tablero, y los anuncios son vídeos con recompensa que solo se reproducen cuando un jugador pulsa un botón para pedirlos.',
          'Puede que a algunos jugadores ciertas partes del juego les resulten recargadas, como las celebraciones o el mapa del Viaje, y nos gustaría saberlo. La [página de accesibilidad](/accessibility) explica cómo contactarnos. Para saber más sobre el diseño tranquilo, lee [qué hace que un juego de puzles sea relajante](/blog/relaxing-puzzle-games-what-makes-one-calm) y [por qué importa Reducir movimiento](/blog/reduce-motion-games), y para saber cuándo dejar un juego, [cuándo jugar y cuándo parar](/blog/when-to-play-and-when-to-pause).',
        ],
      },
    },
    pullQuote: 'Su conclusión vale para cualquier diseñador: haz juegos a los que las personas neurodivergentes quieran jugar y dales el control, en lugar de juegos que intenten cambiarlas.',
    faqs: [
      { question: '¿Qué hace que un juego sea sensorialmente amable?', answer: 'Controles separados para la música, los efectos de sonido y la vibración, respeto por Reducir movimiento, respuestas predecibles, nada de sonidos repentinos ni ventanas emergentes, y libertad para pausar o parar en cualquier momento sin perder el progreso.' },
      { question: '¿Los videojuegos son buenos para las personas autistas?', answer: 'La investigación con adultos autistas concluye que los juegos suelen ser una fuente valorada de disfrute, relajación y conexión social. Como para cualquiera, importan más los juegos adecuados y un equilibrio sano que los juegos en general.' },
      { question: '¿Qué ajustes del iPhone ayudan a los jugadores sensibles al sonido y la luz?', answer: 'Reducir movimiento, en Accesibilidad, Movimiento, suaviza la animación en las apps que lo respetan; los modos de concentración retienen las notificaciones mientras juegas, y la vibración del sistema se puede desactivar en Sonidos y vibraciones. Después, revisa los ajustes de audio y efectos de cada juego.' },
      { question: '¿Se puede jugar a OutBrick en silencio?', answer: 'Sí. El sonido, la música, la vibración y las notificaciones se pueden desactivar por separado en Ajustes, y los amigos de ladrillo hablan solo con bocadillos de texto, así que se puede jugar en completo silencio.' },
    ],
  },
};
