import type { ExtraGuides } from '../../i18n/blog';
import { appStoreUrl } from '../../app-store-url.ts';
export const es10: ExtraGuides = {
  'puzzle-walkthrough-board-mismatch': {
    title: 'Por qué una guía de puzle no coincide con tu tablero',
    dek: 'Antes de copiar otro movimiento, comprueba juego, versión, modo y posición inicial. El número de nivel no basta para identificar una solución.',
    imageAlt:
      'Captura de OutBrick dentro de un teléfono, con ladrillos de colores y dos amigos de ladrillo sobre una cuadrícula azul marino',
    tags: [
      'juegos de puzles',
      'resolución de problemas',
      'puzles deslizantes',
      'OutBrick en la práctica',
      'pistas de puzles',
    ],
    intro:
      'El vídeo dice nivel 48 y tu juego también. Pero su primer movimiento lleva el azul a un pasillo que en tu pantalla está ocupado. Repites el inicio y el movimiento, preguntándote qué omitiste. Antes de gastar otro intento, compara tableros. Un número de nivel es una etiqueta dentro de un juego y una versión concretos; no describe completamente un puzle. Esta guía ayuda a identificar una solución que no corresponde, encontrar la primera discrepancia y rescatar una idea útil sin fingir que la secuencia mostrada debe funcionar.',
    keyTakeaways: [
      'Comprueba juego exacto, modo, versión y distribución inicial completa antes de confiar en una secuencia.',
      'El historial publicado de OutBrick incluye distribuciones cambiadas y tableros reordenados; una etiqueta de nivel antigua puede llevar a otro puzle.',
      'Si falla la secuencia, para en la primera discrepancia. Conserva una idea de planificación pertinente o pide ayuda para tu tablero real.',
    ],
    sections: {
      'identify-the-right-game': {
        title: 'Primero, comprueba que estás viendo el mismo juego',
        paragraphs: [
          'Empieza por nombre completo y desarrollador, no la miniatura del buscador. Muchos puzles móviles usan bloques, salidas de color y palabras parecidas. «Block sort nivel 48» puede ser otra aplicación. Abre la ficha desde los ajustes del juego o compara desarrollador. El parecido visual invita a mirar mejor, no prueba reglas idénticas.',
          'Comprueba qué controla quien juega. ¿El bloque viaja todo lo posible, una casilla o por una ruta arrastrada? ¿Un personaje empuja cajas? ¿El color debe llegar a puerta, objetivo o línea? En la regla Slide & Match actual de OutBrick, un ladrillo se detiene donde lo sueltas, sale por una puerta correspondiente o se intercambia con un vecino, y tres o más de un color en línea desaparecen. En sus tableros clásicos, que se pueden seguir jugando en el navegador, se desliza hasta parar; nuestra [guía de resolución de puzles deslizantes](/blog/how-to-solve-sliding-block-puzzles) explica ese modelo clásico.',
          'Hearn y Demaine (2005) estudiaron problemas formales con restricciones distintas, incluidos bloques deslizantes y Sokoban. Sus resultados teóricos tratan familias generalizadas, no tu nivel. La distinción útil es concreta: movimientos legales y meta forman parte de la identidad. No supongas que una secuencia de solo empujar funciona al deslizar hasta parar.',
          'Antes de buscar, escribe nombre, desarrollador, modo y nivel; añade plataforma y versión visible si las encuentras. Es una recomendación de diagnóstico nuestra, no una lista probada por ese artículo. Ayuda a un autor o jugador a identificar el puzle sin adivinar desde una captura recortada.',
        ],
      },
      'check-version-mode-and-date': {
        title: 'Un número familiar puede ocultar otro tablero',
        paragraphs: [
          'La fecha del vídeo contextualiza, pero no es la versión grabada. El creador podría subir una grabación antigua o actualizar el título sin cambiar vídeo. Busca versión en descripción, comentarios o ajustes visibles; si falta, déjala desconocida. Fechas distintas no prueban error de la guía o fallo de tu instalación.',
          'OutBrick da un motivo concreto. Las [notas de la versión 4.2](/whats-new#4-2) dicen que 1301 de 2000 tableros recibieron distribuciones nuevas. Es un cambio histórico, no una afirmación de que 4.2 sea la última versión. La [ficha e historial actuales del App Store](https://apps.apple.com/us/app/outbrick-block-sort-puzzle/id6807997465), consultados el 30 de septiembre de 2026, muestran 4.5 y más reconstrucción y reordenación (Hamdi, n.d.). El número de una grabación antigua puede ser insuficiente hoy.',
          'Comprueba también modo. Progresión principal, muestra de navegador y diario fechado no son intercambiables por sus colores. El [tablero diario del navegador](/daily) rota un conjunto fijo según fecha UTC. Guarda la fecha de su grabación con la captura. Es el sitio actual, no una promesa de que los diarios nativos sean iguales.',
          'Eso no demuestra aleatoriedad por jugador, experimentos o dificultad personal oculta. Ver diferencias no identifica esas explicaciones. Usa la documentada cuando proceda y deja abiertas las no demostradas. Nuestro artículo sobre [verificar la colección de tableros](/blog/verifying-2000-sliding-block-boards) trata resolubilidad; ser resoluble y coincidir con un vídeo son cosas distintas.',
        ],
      },
      'compare-the-complete-starting-state': {
        title: 'Compara el estado inicial completo',
        paragraphs: [
          'Pausa antes del primer movimiento y compara antes de mover tú. Si reiniciar cuesta progreso o intento, revisa reglas antes de hacerlo automáticamente. Una captura actual también sirve, marcada «tras tres movimientos», no como apertura. No se reproduce una apertura desde otra posición intermedia.',
          'Compara contorno, objetivos y piezas: dimensiones, casillas bloqueadas, puertas en los mismos bordes, forma, orientación y ubicación de cada ladrillo. Revisa llaves, cerraduras y obstáculos presentes. Por último, espacio vacío: también define rutas y paradas.',
          'Ito et al. (2023), con modelos formales de ordenar bolas y agua, incluyen orden de contenidos, capacidad y recipientes vacíos en cada instancia. Trata pilas, no OutBrick. El paralelo útil es que un puzle es más que su paleta: iguales colores no implican iguales vertidos legales con distinto orden o espacio libre. En deslizamiento, examina el estado espacial bajo sus reglas.',
          'Usa etiquetas estables al comparar: «el azul horizontal cerca de la puerta inferior izquierda», no «ese azul», o acordad filas desde arriba y columnas desde izquierda. Larkin y Simon (1987) analizaron cómo representaciones cambian búsqueda e inferencia con información equivalente. Aplicando la idea, mantén ambos tableros visibles y las mismas ubicaciones para examinar diferencias sin memorizar una imagen.',
        ],
      },
      'stop-at-the-first-divergence': {
        title: 'Para en la primera divergencia',
        paragraphs: [
          'Si las aperturas coinciden, reproduce una acción cada vez y compara inmediatamente paradas y piezas restantes. La primera diferencia informa más que la décima. Seguir después crea otra distribución y las instrucciones posteriores pueden fallar por esa discrepancia previa.',
          'Por ejemplo, el vídeo baja rojo hasta que azul lo frena. En tu tablero azul ya salió por su puerta, así que rojo baja más y la misma instrucción no produce el mismo estado. Falta la condición de apoyo. Es un ejemplo de la regla, no diagnóstico de un nivel publicado concreto.',
          'Separa rechazo y resultado inesperado. Si se rechaza, revisa ladrillo, dirección y obstáculo o puerta. Si se acepta y para en otro lugar, compara condición de parada. Si distribución y acción coinciden pero cambia el comportamiento, registra esa observación precisa para ayuda. No declares imposible el tablero porque no sigues un vídeo.',
          'Un mensaje útil incluye versión conocida, modo, nivel o fecha, dos capturas y primera acción diferente. Recorta información personal ajena. Di si quieres pista o secuencia completa; nuestra [guía de pistas sin spoilers](/blog/puzzle-hints-without-spoilers) ofrece ejemplos. La [página de ayuda](/support) es un buen comienzo antes de informar por el contacto existente.',
        ],
      },
      'keep-the-idea-not-the-sequence': {
        title: 'Conserva la idea y decide qué ayuda quieres',
        paragraphs: [
          'Una guía distinta aún puede mostrar una relación útil: colocar un freno antes de enviar un ladrillo largo o despejar una ruta antes de liberar el ladrillo que la usa. Pregunta qué logra cada movimiento y qué necesita. Si faltan esas condiciones, no lo fuerces. La idea debe comprobarse otra vez en el estado real.',
          'Chi et al. (1989) estudiaron estudiantes que explicaban en voz alta ejemplos resueltos de mecánica. Los más exitosos relacionaban acciones y principios y vigilaban su comprensión. Era aprendizaje de física, no guías de puzles. Aplicamos modestamente explicar el propósito antes de tomar un movimiento, sin asumir que copiar dirección reproduce efecto.',
          'Tampoco debes extraer una lección de todo vídeo. Si querías solución directa y difiere, busca otro ejemplo o pide ayuda con la captura exacta. Si querías conservar el descubrimiento, cierra la secuencia y pide solo región o dependencia pertinente. No te hace mejor o peor jugador. La ayuda debe responder tu pregunta real.',
          `Puedes practicar condiciones en [los tableros de OutBrick en el navegador](/play), con controles de reiniciar y deshacer. Para el juego instalado, [descarga OutBrick en el App Store](${appStoreUrl('journal-walkthrough-mismatch')}) y revisa requisitos y compras actuales. Tiene vidas y publicidad con recompensa opcional; la muestra web no prueba todas las funciones nativas.`,
          'Referencia de producto: Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Aplicación móvil]. App Store. Consultado el 30 de septiembre de 2026 en la ficha enlazada arriba. Las referencias siguientes apoyan las distinciones de la guía; ninguna evaluó OutBrick ni validó esta lista de diagnóstico.',
        ],
      },
    },
    pullQuote:
      'Un número de nivel es una etiqueta dentro de un juego y una versión concretos; no describe completamente un puzle.',
    faqs: [
      {
        question: '¿Por qué una guía muestra otro tablero con el mismo nivel?',
        answer:
          'Comprueba aplicación, modo y estado inicial. Una versión puede cambiar distribuciones u orden; el historial de OutBrick documenta cambios, pero la diferencia sola no demuestra aleatoriedad ni fallo.',
      },
      {
        question: '¿Sigo una guía después de un movimiento diferente?',
        answer:
          'Para en el primer resultado distinto y compara estados. Las siguientes instrucciones pueden necesitar una parada o hueco que ya no existe.',
      },
      {
        question:
          '¿No coincidir con el vídeo significa que mi OutBrick es imposible?',
        answer:
          'No. Una guía de otra distribución no determina si se resuelve la tuya. Las afirmaciones de verificación de OutBrick tratan resolubilidad, no coincidencia con vídeos externos.',
      },
      {
        question: '¿Qué incluyo al pedir ayuda?',
        answer:
          'Nombre, modo, nivel o fecha diaria, versión conocida, captura clara y primera acción distinta de la guía. Di si quieres pista o solución y elimina información personal ajena de las imágenes.',
      },
    ],
  },
};
