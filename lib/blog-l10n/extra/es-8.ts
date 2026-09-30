import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const es8: ExtraGuides = {
  'block-blast-plus-vs-outbrick': {
    title: 'Block Blast!+ y OutBrick: dos tipos de puzle de bloques',
    dek: 'Compara sus mecánicas: colocar formas para completar líneas o deslizar ladrillos hacia salidas. Elige también cómo quieres pagar.',
    imageAlt:
      'Ladrillos y personajes de colores de OutBrick alrededor de un teléfono sobre un fondo geométrico oscuro',
    tags: [
      'juegos de puzles',
      'puzles de ordenar bloques',
      'diseño de juegos',
      'hábitos de juego',
      'juegos móviles',
    ],
    intro:
      'Una cuadrícula de bloques de colores puede ocultar puzles muy distintos. En uno eliges dónde colocar una forma nueva. En otro todas las piezas están colocadas y debes encontrar su salida. Block Blast!+ y OutBrick hacen útil esa distinción: ambos recompensan leer el espacio, pero plantean preguntas diferentes. Si buscabas un juego como Block Blast, la respuesta más útil no es una lista de capturas parecidas, sino explicar qué harás realmente. Es una guía de mecánicas basada en fuentes, comprobadas el 30 de septiembre de 2026, escrita por el equipo de OutBrick. No hemos realizado una comparación directa ni medido preferencias de jugadores.',
    keyTakeaways: [
      'Block Blast!+ se centra en colocar formas y completar filas o columnas; OutBrick, en deslizar ladrillos existentes por puertas correspondientes.',
      'Block Blast!+ es la edición de Apple Arcade. No traslades sus condiciones de suscripción, publicidad o compras a la aplicación estándar Block Blast!, con ficha separada.',
      'Elige colocar si disfrutas de encajar y conservar espacio; deslizar si disfrutas de rutas, puntos de parada y orden de movimientos.',
    ],
    sections: {
      'placing-versus-routing': {
        title: 'La primera diferencia es el verbo',
        paragraphs: [
          'Apple describe Block Blast!+ como encajar bloques en una cuadrícula, completar filas y columnas y formar combinaciones (Apple, 2026). Pregunta «¿Dónde va esta forma?». Un hueco permite colocar algo; una línea casi completa puede recuperar espacio. Comparas la superficie de una forma con los espacios disponibles.',
          'OutBrick pregunta «¿Qué debe moverse antes de que salga este ladrillo?». Seleccionas uno ya colocado y lo deslizas hasta que algo lo detiene, hacia la puerta de su color. Un hueco puede ser una ruta, pero también dejar que viaje más de lo que querías. Más espacio libre no implica automáticamente una posición mejor.',
          'Piensa en un pasillo largo y recto. Al colocar, mantenerlo libre puede reservar sitio para una forma larga. Al deslizar, puede hacer que un ladrillo sobrepase el giro necesario. Otro ladrillo quizá deba servir de freno temporal. El mismo aspecto visual cambia de significado estratégico porque la regla cambia lo que puedes hacer.',
          'Nuestra [introducción a los puzles deslizantes](/blog/how-to-solve-sliding-block-puzzles) explica la regla. Para una visión de colocar, piezas que caen y rutas, lee [qué hace duraderos los juegos como Tetris](/blog/games-like-tetris). Ninguna mecánica es una versión más avanzada de la otra: son maneras distintas de volver interesante un espacio limitado.',
        ],
      },
      'two-ways-to-plan': {
        title: 'Dos formas de pensar el siguiente movimiento',
        paragraphs: [
          'En un puzle de colocar, examina la forma ofrecida, sus posibles destinos y el tablero resultante. Una posición legal puede ser incómoda si deja un hueco pequeño o consume el único sitio de otra forma. Completar una línea cambia cantidad y forma del espacio disponible. Es un problema general de colocación, no una estrategia óptima para todos los modos de Block Blast.',
          'En OutBrick, examina toda la trayectoria y el punto final. Apartar un obstáculo puede abrir una ruta, pero hacerlo pronto puede quitar el freno necesario para otro ladrillo. Un plan útil describe dependencias: el azul debe parar aquí antes de que el rojo se alinee con su salida. Reorganizas un sistema en vez de elegir solo un destino vacío.',
          'Isaksen et al. (2017) separaron elección estratégica y exigencias de ejecución en simulaciones de variantes de Tetris y Puzzle Bobble. Explican por qué una única etiqueta de dificultad puede esconder requisitos distintos. No estudiaron Block Blast!+ ni OutBrick. Usamos la distinción para preguntar si te gusta decidir un movimiento y también ejecutarlo.',
          'Eso importa si te gustan los puzles reflexivos pero no cierto control. Arrastrar una forma y dar dirección a un ladrillo existente son interacciones distintas. Las capturas no deciden cuál entiendes mejor. Prueba algo sencillo, lee instrucciones y observa un movimiento rechazado antes de atribuir a demasiada dificultad un control desconocido.',
        ],
      },
      'satisfaction-without-ranking': {
        title: '¿Qué satisfacción buscas?',
        paragraphs: [
          'Algunas personas buscan ver desaparecer líneas repetidamente. Otras quieren completar un tablero cuya ruta descubren poco a poco. Puedes disfrutar de ambos según el momento. Hablamos de la forma de una sesión agradable, sin considerar superficial la búsqueda de puntos ni intelectualmente superiores los tableros finitos.',
          'Ryan et al. (2006) examinaron motivación en cuatro estudios y relacionaron competencia y autonomía percibidas con disfrute y preferencias. No clasifican estas aplicaciones. Plantean una pregunta personal útil: ¿entiendes lo ocurrido y sientes tuyas las decisiones? Una mecánica conocida puede lograrlo pronto; una nueva quizá necesite varios tableros.',
          'Abuhamdeh y Csikszentmihalyi (2012) estudiaron el reto en ajedrez por Internet y actividades cotidianas. Su relación con el disfrute variaba según motivación y actividad. Evita declarar ganador universal al puzle más suave o difícil. Si buscas puntuación, conservar espacio puede atraerte; si buscas desenredar una distribución acotada, quizá prefieras puertas correspondientes.',
          'Haz una prueba concreta: tras una sesión breve, nombra una decisión que disfrutaste, como reservar espacio, completar una combinación, crear una parada o hallar un orden de salida. «Me gustó decidir eso» informa más que «debería gustarme este juego popular». También puedes decidir que ninguno sirve ahora y seguir buscando.',
        ],
      },
      'arcade-and-standalone': {
        title: 'Comprueba la edición antes de comparar costes',
        paragraphs: [
          'Apple anunció que Block Blast!+ se incorporaría a Apple Arcade el 3 de septiembre de 2026, describiendo esa edición sin publicidad ni compras integradas (Apple, 2026). La afirmación corresponde a Block Blast!+. Block Blast! estándar tiene otra ficha; el signo más no es decorativo si identifica otra distribución. Comprueba de qué edición habla una recomendación, captura o reseña.',
          'El acceso a Arcade depende de suscripción y condiciones actuales. OutBrick es una descarga independiente del App Store con compras y publicidad con recompensa opcional. También tiene vidas y límites de movimientos. «Descarga gratuita» no promete acceso, reintentos o extras siempre gratis, y las condiciones de un puzle de suscripción no describen uno independiente.',
          'Si ya tienes Arcade, revisa la ficha actual de Block Blast!+ para compatibilidad y preferencias. Si no, considera el catálogo y condiciones antes de pagar por un juego. Para OutBrick, nuestra [explicación de juego justo](/#fair) detalla vidas, deshacer y publicidad opcional. Comparar sirve cuando aclara esas elecciones.',
          'OutBrick retiró Rush en la versión 4.2 y ahora usa límite de movimientos, no cuenta atrás. Eso no establece el ritmo exacto de cada edición o modo de Block Blast. Lee la descripción actual de la edición deseada sin deducir un reloj por el nombre, puntuación o colores.',
        ],
      },
      'a-small-fit-test': {
        title: 'Una pequeña prueba es mejor que un veredicto general',
        paragraphs: [
          'Primero, explícate la regla: al colocar, pon una forma en sitio legal y avanza hacia una línea completa; en OutBrick, dirige un ladrillo, predice dónde para y busca su salida. Juega despacio para observar si cada acción confirma la explicación. Comparar debe ayudarte a entrar en el puzle adecuado, no convencerte de tolerar el equivocado.',
          'Iacovides et al. (2015) usaron casos con observación y entrevistas para examinar aprendizaje e implicación. Relacionaron avances en comprensión con implicación, especialmente al sentirse responsable del progreso. Son resultados cualitativos de otros juegos. Invitan a atender tu comprensión sin prometer que una prueba breve revele una preferencia universal.',
          `Puedes [probar un tablero de OutBrick en el navegador](/play) para examinar cómo se desliza hasta parar. Muestra la mecánica, no todas las funciones, costes o accesibilidad de la aplicación instalada. Si te gusta, [consulta OutBrick en el App Store](${appStoreUrl('journal-block-blast-comparison')}) y revisa requisitos y compras antes de descargar.`,
          'El resultado puede ser algo sencillo: «Prefiero encajar formas nuevas a redirigir las existentes», o al revés. Basta. Los puzles de bloques comparten un vocabulario visual, pero sus verbos deciden la experiencia. Elige el verbo que quieres seguir haciendo.',
        ],
      },
      'official-source': {
        title: 'Fuente oficial de producto',
        paragraphs: [
          'Apple. (2026, August 11). Apple Arcade’s lineup of hit puzzle games gets even bigger with the addition of Block Blast!+ and Art of Fauna: Cozy Puzzles+. Apple Newsroom. [Anuncio oficial de Arcade](https://www.apple.com/newsroom/2026/08/apple-arcade-levels-up-with-block-blast-plus-and-art-of-fauna-cozy-puzzles-plus/). Los estudios siguientes contextualizan diseño y motivación; ninguno probó estos juegos.',
        ],
      },
    },
    pullQuote:
      'Más espacio libre no implica automáticamente una posición mejor.',
    faqs: [
      {
        question: '¿OutBrick es el mismo tipo de puzle que Block Blast!+?',
        answer:
          'Sus mecánicas principales difieren. Block Blast!+ pide colocar formas y completar filas y columnas; OutBrick, deslizar ladrillos existentes por puertas correspondientes.',
      },
      {
        question:
          '¿Block Blast!+ es la misma aplicación que Block Blast! estándar?',
        answer:
          'Es la edición de Apple Arcade, con suscripción y condiciones de publicidad y compras descritas por Apple. Comprueba la ficha separada de la estándar sin asumir que son iguales.',
      },
      {
        question: '¿Cuál sirve más para planificar?',
        answer:
          'Ambos permiten planificar restricciones distintas. Colocar trata cómo una forma afecta al espacio restante; OutBrick, cómo el orden y las paradas afectan a las rutas.',
      },
      {
        question: '¿Puedo probar OutBrick sin instalarlo?',
        answer:
          'El [tablero del navegador](/play) permite probar cómo deslizar hasta parar. Comprueba aparte la ficha del App Store para compatibilidad, funciones y costes de la aplicación instalada.',
      },
    ],
  },
  'sokoban-vs-sliding-block-puzzles': {
    title: 'Sokoban y puzles deslizantes: empujar, deslizar, planear',
    dek: 'Distingue empujar en Sokoban de deslizar bloques hasta que paran, con ejemplos de esquinas, accesos y puntos de parada temporales.',
    imageAlt:
      'Un teléfono con OutBrick y ladrillos de colores sobre fondo oscuro con rutas geométricas',
    tags: [
      'juegos de puzles',
      'puzles de bloques deslizantes',
      'diseño de juegos',
      'resolución de problemas',
      'puzles de ordenar bloques',
    ],
    intro:
      'Una caja está a una casilla de su objetivo. Moverla parece obvio hasta ver que quien debe empujar no puede situarse detrás. Un ladrillo de color está junto a su salida. También parece obvio moverlo, hasta que un pasillo abierto lo manda más allá. Sokoban y los puzles de deslizamiento comparten espacio y orden, pero cambia el obstáculo que planificas. Comparamos las reglas clásicas de Sokoban con deslizar hasta parar en OutBrick. Explicamos mecánicas, no clasificamos dificultad; los ejemplos son posiciones inventadas para enseñar, no soluciones de niveles identificados.',
    keyTakeaways: [
      'En Sokoban clásico un personaje debe llegar al lado correcto para empujar cajas; en OutBrick seleccionas un ladrillo y lo deslizas hasta que algo lo detiene.',
      'Una esquina de Sokoban puede atrapar una caja para siempre. Al deslizar, quitar un obstáculo puede quitar la parada necesaria para otra ruta.',
      'Algunos hábitos coinciden, pero una estrategia solo se traslada si lo permiten las reglas de movimiento y objetivo. Léelas antes de importar un plan conocido.',
    ],
    sections: {
      'what-a-move-means': {
        title: '¿Qué significa realmente un movimiento?',
        paragraphs: [
          'Sokoban clásico coloca personaje, cajas, paredes y objetivos de almacenamiento en una cuadrícula. El personaje camina por espacios vacíos y empuja una caja si está vacía la casilla detrás de ella. No puede tirar, empujar cadenas ni atravesar paredes. Se completa colocando cajas en objetivos. Hay variantes; describimos las reglas clásicas, no toda aplicación con ese nombre.',
          'La posición del personaje forma parte del puzle. Aunque haya espacio a la derecha de una caja, solo se empuja hacia allí si el personaje llega al lado izquierdo. Pensar solo en el destino omite media acción. Una ruta corta para ponerse detrás puede ser esencial aunque no acerque ninguna caja al objetivo.',
          'En OutBrick seleccionas directamente un ladrillo y le das dirección. Se desliza hasta detenerse y sale por la puerta de su color. No hay trabajador cuya ruta a pie debas conservar. Te centras en trayectoria, paradas y relación con otros ladrillos. Llaves, cerraduras y cajas aparecen después, pero no vuelven su movimiento básico idéntico al de Sokoban.',
          '«Puzle de bloques deslizantes» es amplio. Algunos admiten pequeños desplazamientos o una sola dirección; otros deslizan hasta parar. Nuestra [historia de estos puzles](/blog/history-of-sliding-block-puzzles) amplía el contexto. Identifica siempre la regla concreta antes de decidir que ya sabes resolverlo.',
        ],
      },
      'the-corner-and-the-brake': {
        title: 'Una esquina en un puzle, un freno en otro',
        paragraphs: [
          'Imagina una caja junto a la pared inferior, con pared inmediata a la izquierda. Si se empuja a esa esquina y no es objetivo, no puede salir con reglas clásicas. Para empujar a la derecha, el personaje necesitaría estar dentro de la pared izquierda; para subirla, debajo de la inferior. Queda atrapada aunque el resto del almacén sea amplio.',
          'Junghanns y Schaeffer (2001) estudiaron Sokoban como búsqueda exigente de un solo agente. Su solucionador destaca conocimiento específico, detección de bloqueos y reducción de búsquedas improductivas. Es investigación informática, no un experimento de entrenamiento humano. Aporta una distinción importante: un movimiento legal puede dejar el objetivo inalcanzable.',
          'Ahora imagina un ladrillo que debe parar en una columna central antes de ir a una puerta. Otro ocupa la casilla más allá de la parada y hace de freno. Apartarlo parece ordenar el tablero, pero permite que el primero sobrepase la alineación. El obstáculo cumplía una función. El ejemplo depende de deslizar hasta parar; no vale para todos los puzles deslizantes.',
          'Ningún ejemplo dice que jamás debas ir a una esquina o despejar un pasillo. Un objetivo en la esquina puede justificar el empuje; otro freno puede hacer seguro el pasillo. Importa qué sigue siendo posible después. Un tablero ordenado y uno resoluble no son lo mismo.',
        ],
      },
      'routes-have-two-ends': {
        title: 'Conserva los accesos, además de los destinos',
        paragraphs: [
          'Piensa en un pasillo de Sokoban entre dos habitaciones. Empujar una caja a la entrada puede acercarla al objetivo y cortar el paso del personaje. Quizá luego debas llegar al lado lejano, pero perdiste la única ruta. Antes de empujar, pregunta por dónde caminará después y qué lados de las cajas restantes seguirán accesibles.',
          'En OutBrick la pregunta equivalente trata tránsito y paradas. Si el azul debe cruzar antes de salir el rojo, sacar primero el rojo puede quitar un freno o alterar la ruta. Dejarlo siempre también puede bloquear al azul. Es una dependencia temporal: conserva la pieza mientras sirve y quítala al terminar su función.',
          'Escribe relaciones, no una larga cadena de direcciones. En Sokoban: «Mantén abierta la puerta hasta ponerme detrás de la caja superior». Al deslizar: «Conserva este ladrillo como parada hasta alinear el otro». Así se ve el motivo. Si cambia el tablero, comprueba si sigue válido en vez de recordar una secuencia perdida.',
          'Para leer dependencias, consulta nuestra [guía para examinar el tablero antes de mover](/blog/how-to-read-a-puzzle-before-moving). No necesitas un plan perfecto completo. A menudo basta identificar un acceso que debe sobrevivir y una posición útil que todavía no conviene tocar.',
        ],
      },
      'what-transfers-and-what-does-not': {
        title: '¿Qué se traslada al cambiar de puzle?',
        paragraphs: [
          'Comprobar consecuencias sirve en ambas familias, igual que reconocer que una pieza quizá deba alejarse del destino antes de llegar. Menos fiable es trasladar una expectativa de movimiento. Alguien de Sokoban puede suponer desplazamientos de una casilla; alguien de deslizamiento puede olvidar el espacio que necesita el trabajador detrás.',
          'Iacovides et al. (2015) examinaron acción, comprensión e implicación en varios casos de juego. Destacan avances de comprensión en relatos cualitativos, no miden transferencia entre Sokoban y OutBrick. Nuestra aplicación práctica es tratar una sorpresa como posible malentendido de la regla antes de culpar a tu capacidad para planificar.',
          'Hearn y Demaine (2005) analizaron la complejidad computacional formal de puzles deslizantes y otros problemas restringidos. Su prueba trata familias matemáticas, no la dificultad de un nivel comercial. Refuerza un límite útil: los movimientos permitidos definen el problema. Cambiar una regla puede exigir razonamiento distinto en tableros parecidos; el artículo no clasifica Sokoban frente a OutBrick.',
          'Prueba un tablero sencillo al cambiar de familia. Predice una acción legal y su resultado exacto, ejecútala y compara. Repite con una bloqueada si se puede explorar sin riesgo. Es una sugerencia editorial, no un programa de entrenamiento probado, que puede evitar aplicar mentalmente reglas equivocadas a un tablero familiar.',
        ],
      },
      'choose-your-favourite-constraint': {
        title: 'Elige la restricción en la que te gusta pensar',
        paragraphs: [
          'Sokoban encaja si disfrutas de planificar accesos del personaje y consecuencias de empujes irreversibles. Prueba deslizamiento si disfrutas de crear paradas y redirigir piezas directamente. No hace falta afirmar que un género mejora más el cerebro. Las mecánicas pueden disfrutarse por sí mismas.',
          'Kotovsky et al. (1985) investigaron por qué representaciones distintas de problemas formalmente equivalentes de la Torre de Hanói tenían dificultades distintas. No trataban estos géneros. Invita a distinguir estructura y facilidad de comprender reglas: una presentación desconocida puede parecer más difícil sin añadir piezas. Dificultad y encaje personal son preguntas distintas.',
          `Puedes [jugar una demostración de OutBrick](/play) para ver cómo cambia un pasillo al deslizar. Lee nuestros [consejos para ordenar colores](/blog/colour-sort-puzzle-tips) para conectar movimiento y puertas. Si te atrae, [consulta OutBrick en el App Store](${appStoreUrl('journal-sokoban-comparison')}) para compatibilidad y compras actuales. Tiene límites de movimientos, vidas y publicidad con recompensa opcional; jugar sin tiempo no es acceso ilimitado.`,
          'Lleva una pregunta al siguiente tablero: «¿Qué debe seguir disponible después?». En Sokoban puede ser la casilla donde debe estar el personaje; en OutBrick, una superficie de parada. Ver la diferencia convierte un parecido vago de bloques en una elección mucho más clara.',
        ],
      },
      'classic-rules-source': {
        title: 'Reglas clásicas y límites de la evidencia',
        paragraphs: [
          'Sokoban.jp. (n.d.). Rules. [Reglas clásicas de Sokoban](https://sokoban.jp/rule.html). Consultado el 30 de septiembre de 2026. Los ejemplos son ilustraciones originales de esas reglas y del movimiento de OutBrick. La investigación siguiente contextualiza búsqueda, implicación y motivación; no evalúa OutBrick de forma independiente.',
        ],
      },
    },
    pullQuote: 'Un tablero ordenado y uno resoluble no son lo mismo.',
    faqs: [
      {
        question: '¿Puedes tirar de una caja en Sokoban clásico?',
        answer:
          'No. El personaje puede empujarla a una casilla vacía, pero no tirar ni empujar cadenas de cajas. Las variantes pueden tener otras reglas.',
      },
      {
        question: '¿Por qué es peligrosa una esquina en Sokoban?',
        answer:
          'Una caja en una esquina sin objetivo puede quedar inmóvil porque no se accede a los lados necesarios para sacarla. Comprueba el destino y el acceso futuro del personaje.',
      },
      {
        question: '¿OutBrick mueve una casilla cada vez como Sokoban?',
        answer:
          'Los ladrillos se deslizan en la dirección elegida hasta que algo los detiene. Planificas paradas y salidas del mismo color, no la posición desde la que empuja un personaje.',
      },
      {
        question: '¿Saber Sokoban vuelve fácil OutBrick automáticamente?',
        answer:
          'Pueden servir hábitos como revisar el orden y conservar rutas. Pero cambian las reglas; comprueba las tácticas conocidas en el juego nuevo sin asumir transferencia.',
      },
    ],
  },
  'puzzle-hints-without-spoilers': {
    title: 'Pistas sin destripar el puzle: cómo ayudar a un amigo',
    dek: 'Pide y da pistas sin revelar toda la solución: acuerda límites, comparte una cada vez y deja el control a quien resuelve.',
    imageAlt:
      'Dos personajes de OutBrick junto a ladrillos de colores y un teléfono sobre fondo geométrico oscuro',
    tags: [
      'juego social',
      'juegos de puzles',
      'resolución de problemas',
      'hábitos de juego',
      'juego en familia',
    ],
    intro:
      'Reconoces el siguiente movimiento antes que tu amigo. La mano va hacia su teléfono y preparas «Mueve ese». Entonces recuerdas que atascarse también forma parte de jugar. Una pista puede abrir una posibilidad útil, pero quitar la decisión que alguien quería tomar. La habilidad práctica es acordar cuánta ayuda cabe ahora. Proponemos una forma gradual de pedir y dar pistas, al compartir un puzle diario, mirar a un familiar o responder a una captura en un chat. Los ejemplos son originales; la investigación contextualiza comentarios, tutoría y experiencia, no un sistema de pistas probado para OutBrick.',
    keyTakeaways: [
      'Pide permiso y acuerda si quiere una pregunta, una pista pequeña, el siguiente movimiento o la solución completa.',
      'Da una pista acotada y para. Encadenar pistas no solicitadas puede revelar tanto como una guía completa.',
      'Sé concreto y respetuoso, marca los spoilers públicos y deja que quien resuelve decida cuándo quiere más.',
    ],
    sections: {
      'agree-on-the-help': {
        title: 'Acuerda la ayuda antes de darla',
        paragraphs: [
          '«¿Quieres una pista?» empieza bien, pero no define su tamaño. Alguien quiere señalar lo que no vio; otro, saber el movimiento para seguir. Tras el permiso, ofrece una elección: pregunta sobre el tablero, pista de una zona, movimiento directo o respuesta completa. Son peticiones diferentes, ninguna moralmente mejor.',
          'Para pedir, sirve «Quiero una pista pequeña, no el movimiento. Intenté despejar el pasillo derecho, pero no alineo el azul». Identifica problema y límite de revelación. Si quieres guía completa, dilo. No deberían exigirte sufrir antes ni convertir el ocio en examen.',
          'Koedinger y Aleven (2007) revisaron experimentos con Cognitive Tutors y describieron el equilibrio pendiente entre aportar información y reservarla para aprender. Su dilema de asistencia trata enseñanza, no etiqueta de chat. Sirve de analogía: más información no siempre es la adecuada y ocultar todo tampoco ayuda necesariamente.',
          'El permiso puede cambiar. Tras una pista suave, quizá quieras el movimiento exacto; tras pedir compañía, quizá prefieras resolver solo. Compruébalo en una pausa natural sin asumir que el primer acuerdo te da control. Quien tiene el puzle sigue eligiendo su tarde.',
        ],
      },
      'a-ladder-of-clues': {
        title: 'Sube la escalera de pistas un peldaño cada vez',
        paragraphs: [
          'Imagina que el rojo necesita una parada para alinearse con su puerta. Empieza con «¿Dónde parará si el pasillo está vacío?». No revela secuencia, sino invita a comprobar una regla y consecuencia. Si ya lo entiende, no repitas más fuerte: pregunta si quiere el siguiente nivel.',
          'Una pista orientativa sería «Otro ladrillo puede actuar de freno»; una más concreta, «Mira la pieza sobre el cruce». Una explícita nombra un movimiento; una solución completa da la secuencia ordenada desde una posición declarada. Es una escalera de conversación propuesta, no garantía de que cada pista sea igual de suave en todo tablero.',
          'La revelación depende del puzle. «Usa el verde» puede decir casi todo en uno pequeño y muy poco en uno grande. Describe antes el tipo de información: «Puedo nombrar la pieza si quieres». Así decide sin ver lo que pretendía evitar.',
          'Tras una pista, deja de escribir y permite pensar. No añadas «y luego», «obviamente» o flechas mientras la considera. Nuestra [guía para leer antes de mover](/blog/how-to-read-a-puzzle-before-moving) aporta preguntas sin solución. La meta es una siguiente observación útil, no demostrar la inteligencia de quien ayuda.',
        ],
      },
      'be-specific-without-judging': {
        title: 'Sé concreto con el puzle y amable con la persona',
        paragraphs: [
          '«Piensa más» no es pista ni diagnóstico. «Miras lo equivocado» quizá sea cierto, pero no dice qué mirar. Mejor señalar una consecuencia: «Si apartas ese obstáculo, ¿qué detendrá el largo?». Orienta sin juzgar capacidad por una posición.',
          'Shute (2008) revisó comentarios formativos y destacó información de apoyo y concreta, según persona y tarea. Es una revisión educativa amplia, no prueba de que una frase mejore puzles. Aplicamos la distinción entre informar sobre la tarea y evaluar a la persona: explica la restricción sin llamarla descuidada o lenta.',
          'También puedes confirmar una buena idea: «Sí, conservar esa puerta tiene sentido; el problema es la parada después». Indica qué parte del razonamiento sigue válida sin reemplazar todo un plan por una suposición errónea. Si no sabes, dilo y explorad juntos sin presentar una conjetura como solución verificada.',
          'Evita coger el dispositivo, mover sin preguntar o narrar constantemente por encima del hombro. Quitas el tiempo para conectar pista y tablero. Nuestra [guía de competición amistosa](/blog/friendly-competition-with-friends) también invita a acordar la experiencia. Ayudar es un acuerdo social y un intercambio de información.',
        ],
      },
      'give-the-solver-space': {
        title: 'Deja espacio para usar la pista',
        paragraphs: [
          'Leer una pista no evita necesitar tiempo para entenderla. Si quiere compañía, pide que describa lo que considera, pero no exijas una explicación correcta para dar la siguiente. «Creo que el azul debe quedarse» puede bastar para retomar su exploración. A veces entender el callejón sin salida sirve antes de encontrar la salida.',
          'Aleven et al. (2016) revisaron búsqueda de ayuda con tutores inteligentes. Los comentarios en clase mejoraron el uso deliberado de ayuda incluso después, pero no los resultados de aprendizaje del dominio. Importa el límite: usar ayuda sensatamente y rendir mejor son afirmaciones distintas. No prometemos que pistas graduales mejoren la capacidad para resolver.',
          'Iacovides et al. (2015) examinaron comprensión e implicación en varios casos de juego. Destacaron sentirse responsable del progreso. Eso apoya dejar decisiones al jugador como criterio editorial, no prueba que revelar un movimiento arruine el disfrute. A quien pide todo, recibirlo puede hacer agradable la sesión.',
          'Si no sirvió, comprueba que veis el mismo estado. Una captura anterior a varios movimientos puede volver irrelevante una pista correcta. Identifica posición, juego o nivel y cambios de regla antes de enviar secuencias. También podéis volver a un [tablero diario de OutBrick](/daily) y practicar, con permiso, solo preguntas de observación.',
        ],
      },
      'public-spoilers-and-clean-finishes': {
        title: 'Pon un límite claro a los spoilers públicos',
        paragraphs: [
          'En un grupo, quien pregunta no es el único lector. Pon nombre y fecha del puzle antes de responder y usa controles de spoiler si existen. Si no, deja la solución fuera de la vista previa y pregunta si quiere respuesta privada. Evita imágenes resueltas sin marcar: pueden revelar todo antes de leer la advertencia.',
          'Usa etiquetas sencillas como «pista pequeña: paradas» o «a continuación, solución completa». No reveles el movimiento en título, notificación o primera línea antes del aviso. Aclara si la secuencia empieza en el tablero original o la posición compartida. Evita instrucciones confusas para otros.',
          'Al terminar, pregunta si quiere hablar de cómo funcionó la pista. Quizá disfrute reconstruir el punto clave o prefiera seguir. Si revelas más sin querer, reconócelo brevemente y cambia la próxima vez. No defiendas el spoiler diciendo que era obvio.',
          `Podéis practicar la regla en nuestros [tableros del navegador](/play) o [descargar OutBrick del App Store](${appStoreUrl('journal-hint-etiquette')}) tras revisar la ficha. Para dudas de juego o comportamiento confuso, la [página de ayuda](/support) ofrece contacto. Un amigo puede querer compañía, un empujón o una respuesta. Las buenas formas facilitan expresar y respetar esa elección.`,
        ],
      },
    },
    pullQuote:
      'La meta es una siguiente observación útil, no demostrar la inteligencia de quien ayuda.',
    faqs: [
      {
        question: '¿Cómo pido una pista sin que me destripen la solución?',
        answer:
          'Di cuánta ayuda quieres y qué probaste, por ejemplo «una pregunta de observación, no el siguiente movimiento». Pide que espere antes de dar otra pista más explícita.',
      },
      {
        question: '¿Qué hago antes de dar una pista?',
        answer:
          'Pide permiso y acuerda pregunta, pista pequeña, movimiento directo o solución completa. Da una respuesta acotada y deja que decida si quiere más.',
      },
      {
        question: '¿Usar una pista es hacer trampas?',
        answer:
          'En ocio individual eliges tu ayuda. En un concurso o reto compartido, acordad reglas previamente y declara honestamente la ayuda recibida.',
      },
      {
        question: '¿Cómo comparto una solución diaria con cuidado?',
        answer:
          'Identifica puzle y fecha, marca spoilers y usa sus controles si existen. Mantén movimientos reveladores e imágenes resueltas fuera de títulos, vistas previas y primeras líneas sin protección.',
      },
    ],
  },
};
