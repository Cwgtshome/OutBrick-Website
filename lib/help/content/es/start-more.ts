import type { HelpArticle } from '../../model.ts';

/**
 * Preguntas frecuentes, la primera semana, los tableros difíciles y el glosario, en español.
 * Comprobado con la 5.1.1 (68). Cada cifra de la economía repite una que ya está en play.ts,
 * progress.ts o account.ts; cámbiala allí primero y luego aquí.
 */
export const startMoreArticles: HelpArticle[] = [
  {
    slug: 'common-questions',
    category: 'start',
    cover: 'home',
    host: 'sprout',
    hostPose: 'think',
    title: 'Preguntas frecuentes, respondidas con franqueza',
    summary:
      'Respuestas cortas y exactas a lo que más preguntan los jugadores: temporizadores, vidas, anuncios y compras, jugar sin conexión, móviles nuevos, accesibilidad, niños y cómo hablar con una persona.',
    keywords:
      'preguntas frecuentes faq dudas respuestas temporizador reloj tiempo contrarreloj perder vida por qué vidas ayudita anuncios pagar gratis sin conexión offline modo avión sin internet móvil nuevo teléfono nuevo transferir progreso niños niñas menores familia clasificación por edad ciego baja visión daltónico daltonismo contacto soporte persona humana correo',
    sections: [
      {
        id: 'playing',
        title: 'Jugar',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿OutBrick tiene tiempo?',
                a: 'No. En OutBrick **no hay reloj en ninguna parte**: ni en un tablero, ni en un menú, ni en un evento. Cada tablero te da un número de **movimientos**, y ese es el único límite. Tómate todo el tiempo que quieras en cada movimiento.\n\nUn cambio que no forma ninguna línea vuelve a su sitio y **no gasta ningún movimiento**. Consulta [Sin relojes ni prisas](help:accessibility#no-timers).',
              },
              {
                q: '¿Cómo se juega un tablero?',
                a: '**Desliza** un ladrillo hacia un hueco, o hasta la puerta de su color para mandarlo a casa. **Cambia** un ladrillo con su vecino para formar una línea de tres o más y hacerlos desaparecer. Cumple los objetivos del panel de arriba antes de que se te acaben los movimientos. Consulta [Te damos la bienvenida a OutBrick](help:welcome) y [Jugar un tablero](help:playing-a-board).',
              },
              {
                q: '¿Por qué ha rebotado mi cambio?',
                a: 'Un cambio solo se mantiene si forma una línea de tres o más o un cuadrado de 2×2, si activa dos especiales juntos o si usa una bomba de color. Si no, los ladrillos vuelven a su sitio, notas dos toques cortos y **no gastas ningún movimiento**. Consulta [Cambiar y combinar](help:playing-a-board#swap).',
              },
              {
                q: '¿Me puedo quedar atascado en un tablero?',
                a: 'No. Si no hay ningún movimiento posible, el tablero se mezcla gratis bajo el aviso **¡A mezclar!**, sin gastar ningún movimiento ni ninguna vida. Un tablero que aún tiene movimientos pero nunca puede llevarte a tus objetivos se reparte de nuevo sin más, y se pintan algunos ladrillos sobrantes si a un objetivo le faltan de su color. Consulta [Nunca te quedas atascado](help:playing-a-board#never-stuck).',
              },
              {
                q: '¿Cómo consigo tres estrellas?',
                a: 'Las estrellas dependen de tu **puntuación**. Superar un tablero siempre da al menos una estrella; con más puntuación consigues dos o tres, y la barra de estrellas de la cabecera te muestra cuánto te falta. Cada movimiento que te sobra al final se convierte en un rayo de línea que vale 150 puntos, así que terminar pronto ayuda. Repite cualquier tablero superado desde el Viaje para mejorar sus estrellas. Consulta [Puntuación, estrellas y la bonificación final](help:playing-a-board#stars).',
              },
              {
                q: '¿Qué significan Difícil, Muy difícil, Jefe y Noche?',
                a: 'Son niveles de dificultad, que aparecen en una placa bajo la cabecera. Los tableros Difícil piden alrededor de un 15 % más, los Muy difícil alrededor de un 30 % más y un Jefe (el último tablero de un capítulo, a partir del nivel 40) alrededor de un 40 % más. Un tablero Noche está ambientado de noche y se juega como uno Difícil. Las dificultades más altas dan más monedas. Consulta [Cómo superar un tablero difícil](help:hard-boards#tiers).',
              },
              {
                q: '¿OutBrick es adecuado para niños?',
                a: 'OutBrick está clasificado para **mayores de 4 años** en el App Store: tableros de ladrillos abstractos, personajes amables, sin chat y sin nada escrito por otras personas dentro del juego. Los vídeos solo se reproducen cuando alguien elige uno a cambio de una recompensa, y las compras pasan por Apple, así que Tiempo de uso y Solicitar la compra pueden exigir tu aprobación. La web de la comunidad, que el juego abre en Safari, es para mayores de 16 años. Consulta [la clasificación por edad](/age-rating) y [Una guía para madres, padres y cuidadores](help:parents-guide).',
              },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas y movimientos',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Por qué he perdido una vida?',
                a: 'Una vida solo se gasta cuando **pierdes** un intento en un tablero. Eso pasa de tres formas:\n\n**1.** Te quedas sin movimientos y eliges **Rendirse** (o cierras la pantalla Sin movimientos). **2.** **Sales** de un tablero después de hacer un movimiento. **3.** **Reinicias** desde la Pausa después de hacer un movimiento.\n\nEl juego siempre te avisa antes: la tarjeta **¿Salir?** y los botones Reiniciar y Rendirse dicen cuándo se gastará una vida. Consulta [Cuándo se gasta una vida](help:lives-moves-and-undos#lives).',
              },
              {
                q: '¿Ganar o empezar un tablero cuesta una vida?',
                a: 'No. Para abrir un tablero necesitas una vida, pero **no se gasta**, y **ganar nunca cuesta una vida**. Salir o reiniciar antes de tu primer movimiento también es gratis, igual que seguir jugando con más movimientos, porque es el mismo intento.',
              },
              {
                q: '¿Cuánto tardan en volver las vidas?',
                a: 'Una cada **30 minutos**, aunque el juego esté cerrado, hasta **cinco** (ocho mientras tengas el Pase Ladrillo actual). Toca el corazón de la cabecera del Viaje para ver cuándo llega la siguiente.',
              },
              {
                q: '¿Qué es la ayudita?',
                a: 'Si un tablero te gana una y otra vez, el juego te echa una mano: a partir de tu **sexto intento** en el mismo tablero, empiezas con **3 movimientos extra**, y el tablero dice «Una ayudita: 3 movimientos más en este intento». Llega una vez al día por tablero y no cuesta nada. Consulta [Nivel fallido y volver a intentarlo](help:lives-moves-and-undos#level-failed).',
              },
              {
                q: '¿Qué pasa cuando me quedo sin movimientos?',
                a: 'Ves lo que falta y puedes seguir en el mismo intento: +5 movimientos por 300 monedas, luego por 500 (con una Pista) y luego por 900 (con un OVNI), o un vídeo opcional por +2 movimientos, luego +1 y después un OVNI gratis. O elige **Rendirse**, que gasta una vida. Antes del nivel 6 no se ofrece nada de pago. Consulta [Sin movimientos](help:lives-moves-and-undos#out-of-moves).',
              },
              {
                q: '¿Deshacer es gratis?',
                a: 'El **primer deshacer de cada tablero es gratis**. Después, los deshacer salen de una reserva de hasta cinco, que se recarga de uno en uno cada 25 minutos. Consulta [Deshacer](help:boosters-and-pause#undo).',
              },
              {
                q: 'No me quedan vidas. ¿Puedo seguir jugando?',
                a: 'Una vez al día, con la reserva vacía, puede que tengas **un intento gratis** en un tablero: si ganas, conservas la vida; si pierdes, no te cuesta nada. Si no, espera a la siguiente vida, recarga con monedas o con una recarga guardada, o mira un vídeo opcional por una vida. Consulta [Sin vidas](help:lives-moves-and-undos#out-of-lives).',
              },
            ],
          },
        ],
      },
      {
        id: 'purchases-ads',
        title: 'Compras y anuncios',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Tengo que ver anuncios o pagar?',
                a: 'No. Todos los tableros se pueden jugar sin gastar dinero ni ver nada: las vidas vuelven solas, y cada intento trae una Pista, un Cohete y un OVNI gratis. Los vídeos y las compras son extras opcionales.',
              },
              {
                q: '¿Hay anuncios entre tableros?',
                a: 'No. OutBrick **no tiene anuncios obligatorios**: ni banners ni anuncios emergentes. Un vídeo solo se reproduce cuando eliges uno a cambio de una recompensa, solo paga un vídeo visto hasta el final y hay un límite de **39 al día** entre ocho tipos. Consulta [Vídeos opcionales](help:lives-moves-and-undos#videos) y [Recompensas y anuncios](help:rewards-and-ads).',
              },
              {
                q: '¿Qué hace Quitar anuncios?',
                a: 'Elimina todos los vídeos opcionales pero conserva las recompensas: los botones que decían Ver dicen **Recoger premio** y pagan al instante, con los mismos límites diarios. Tener el Pase Ladrillo actual hace lo mismo durante esa temporada. Consulta [Quitar anuncios y el Pase Ladrillo](help:shop-and-purchases#remove-ads).',
              },
              {
                q: '¿Hay alguna suscripción?',
                a: 'No. Todos los pases y artículos por tiempo son compras únicas, y **nada se renueva solo**. El App Store muestra los precios en tu propia moneda.',
              },
              {
                q: 'Falta algo que compré. ¿Qué hago?',
                a: 'Abre la **Tienda**, baja hasta el final del todo y toca **Restaurar compra**. Las monedas, los potenciadores y las vidas viajan con tu progreso a través de iCloud, no del App Store. ¿Sigue sin aparecer? Escríbenos en privado con el [formulario de contacto](/contact). Consulta [Progreso perdido y compras que faltan](help:lost-progress-and-purchases).',
              },
              {
                q: '¿Cómo pido un reembolso?',
                a: 'Las compras se hacen a través de Apple, así que Apple gestiona los reembolsos. Consulta [nuestra página de reembolsos](/refunds) para saber cómo pedirlo.',
              },
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Progreso y dispositivos',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿OutBrick funciona sin conexión?',
                a: 'Sí. **Todos los tableros se juegan sin conexión**, así que un túnel o un vuelo no te detienen. Algunas cosas necesitan conexión: los vídeos opcionales, las compras y **Restaurar compra**, la pestaña Ranking, las carreras y Game Center. Tu progreso se guarda en tu dispositivo y en tu iCloud, y se sincroniza cuando vuelves a tener conexión.',
              },
              {
                q: '¿Perderé mi progreso si cambio de móvil?',
                a: 'No, si usas iCloud. El progreso se guarda en tu propia cuenta de iCloud, así que un iPhone o iPad nuevo con la **misma Cuenta de Apple** recupera tu nivel, tus estrellas, monedas, potenciadores, rachas, la Colección y el Armario. Después, toca **Restaurar compra** en la Tienda. Si el dispositivo antiguo nunca tuvo la sesión de iCloud iniciada, inicia sesión allí y abre OutBrick una vez antes de cambiar. Consulta [Pasarte a un iPhone o iPad nuevo](help:progress-privacy-and-account#new-device).',
              },
              {
                q: '¿Necesito una cuenta de OutBrick?',
                a: 'No. No hay ninguna cuenta de OutBrick que crear: el juego usa tu iCloud. La web de la comunidad tiene su propio inicio de sesión opcional, independiente del juego.',
              },
              {
                q: '¿Puedo jugar en mi iPhone y en mi iPad?',
                a: 'Sí. Con la misma Cuenta de Apple, los dos dispositivos comparten una partida a través de iCloud. Cuando no coinciden, no se sobrescribe nada: se conservan el nivel y las cuentas más altos y las colecciones se combinan. Los ajustes de sonido y la mayoría de los ajustes de accesibilidad del tablero se quedan en cada dispositivo; tu elección del Modo daltónico te sigue.',
              },
              {
                q: '¿Cómo vuelvo a empezar desde el nivel 1?',
                a: '**Ajustes › Borrar mis datos**, al final del todo de la pestaña Juego, restablece tu progreso y pide a iCloud que borre tu partida. No se puede deshacer. Consulta [Borrar tus datos](help:progress-privacy-and-account#delete).',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Accesibilidad',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Puedo jugar si soy ciego o tengo baja visión?',
                a: 'Sí. Con **VoiceOver**, cada tablero se lee casilla a casilla, cada pieza se nombra por tipo, color y estado, y deslizas y cambias con acciones como «Deslizar hacia la izquierda y salir por la puerta: rojo». Los rotores van directos a los objetivos, los especiales, los bloqueos y las puertas, y el toque doble con dos dedos te da una pista gratis. Para la baja visión, prueba el **Tablero de alto contraste** y el Texto más grande. Consulta [Jugar con VoiceOver](help:voiceover) y [Vista, oído y movimiento](help:vision-hearing-and-motion).\n\nEn la 5.1 y la 5.1.1, VoiceOver puede perder su posición en el tablero; la corrección está en camino. Consulta [los problemas conocidos](/support/known-issues) para saber qué hacer mientras tanto.',
              },
              {
                q: '¿Puedo jugar si soy daltónico?',
                a: 'Sí. Los símbolos del **Modo daltónico** están activados desde el primer tablero: cada color tiene su propia forma (rojo círculo, naranja triángulo, amarillo cuadrado, verde rombo, azul signo más, morado estrella, rosa barra, turquesa hexágono), y los objetivos y las puertas llevan la misma forma. Consulta [Símbolos para daltonismo](help:vision-hearing-and-motion#colour-blind).',
              },
              {
                q: '¿Puedo jugar con botones, con la voz o con un teclado?',
                a: 'Sí. Todos los tableros se pueden jugar con Control por voz («Toca Rojo 14» y luego «Toca Izquierda»), con Control por botón o con las teclas de flecha. **Confirmar cambios** te hace elegir cada movimiento dos veces, para que nada se juegue por accidente. Consulta [Control por voz, Control por botón y teclados](help:voice-control-switch-control-keyboard).',
              },
              {
                q: '¿Necesito oír algo para jugar?',
                a: 'No. Los amigos hablan con bocadillos de texto, no con voces, y cada sonido tiene algo en pantalla que lo acompaña. La Vibración te deja notar cómo caen los movimientos. Consulta [Sonido, música, vibración y Sonido de fila](help:vision-hearing-and-motion#sound).',
              },
              {
                q: '¿Puedo hacer que el juego vaya más despacio?',
                a: 'Sí. **Ajustes › Accesibilidad › Velocidad de animación** va del 50 % al 200 %; al 50 %, cada cambio, caída y despeje dura el doble. Sin reloj en ninguna parte, el único ritmo es el tuyo. Consulta [Jugar con calma](help:playing-calmly).',
              },
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'El equipo',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: '¿Cómo hablo con una persona?',
                a: 'En el juego, abre **Ajustes › Contacto**, o usa el [formulario de contacto](/contact) de esta web. **Una persona del equipo lee cada mensaje**, e intentamos responder en dos días laborables. Tu mensaje recibe una referencia (como OB-7K2QXM) y un enlace privado para seguirlo. Nunca envíes una contraseña ni los datos de una tarjeta.',
              },
              {
                q: '¿Quién hace OutBrick?',
                a: 'OutBrick es un proyecto pequeño e independiente. Más información en [Sobre OutBrick](/about).',
              },
              {
                q: '¿Cómo informo de un error?',
                a: 'En el juego, **Ajustes › Informar de un error** abre un informe con tu dispositivo, las versiones y el nivel ya rellenados, sin tu nombre ni tu cuenta. Consulta [Cómo informar bien de un error](help:reporting-bugs), y mira antes los [problemas conocidos](/support/known-issues): puede que ya lo estemos arreglando.',
              },
              {
                q: '¿Dónde puedo pedir ayuda a otros jugadores con un nivel?',
                a: 'Usa [Ayuda con un nivel](/support/levels): escribe el número del nivel para ver lo que otros han dicho de ese tablero, o pregúntales. Consulta [Usar la comunidad de OutBrick](help:using-the-community).',
              },
              {
                q: '¿Puedo proponer una idea o probar las actualizaciones antes?',
                a: 'Sí. Publica y vota en [Ideas y opiniones](/community/c/ideas), y consulta [Ayuda a dar forma a OutBrick](/support/get-involved) para unirte al grupo beta o al panel de accesibilidad.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: '¿Sigue sin respuesta?',
            text: 'Busca en el Centro de ayuda una palabra de tu pregunta, o pregunta en [Ayuda y soporte](/community/c/help). Para cualquier asunto privado, como una compra, usa el [formulario de contacto](/contact).',
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
    title: 'Tu primera semana en OutBrick',
    summary:
      'Cómo suele ser la primera semana, día a día: Ciudad Jardín y sus tarjetas de aprendizaje, tus primeras estrellas y tu primera recompensa de aldea, los tableros Difícil, Clover Farm y las pequeñas costumbres diarias que hacen el Viaje más llevadero.',
    keywords:
      'principiante jugador nuevo primeros días primera semana guía qué esperar ciudad jardín garden city clover farm granja tutorial tarjetas de aprendizaje ladrillo diario racha misiones rueda regalo de bienvenida guardar potenciadores consejos trucos',
    sections: [
      {
        id: 'pace',
        title: 'Antes de empezar',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick no tiene reloj ni nada que te meta prisa. La semana de abajo es **un ritmo habitual, no un horario**: hay quien supera Ciudad Jardín en una tarde y quien tarda una semana. En el Viaje no se pierde nada por ir más despacio.',
          },
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Una idea cada vez',
            text: 'La primera aldea está hecha para enseñar. Cada tablero trae como mucho una idea nueva, y una breve tarjeta de aprendizaje la muestra la primera vez, con una mano que se mueve. Toca en cualquier sitio para empezar a jugar.',
          },
        ],
      },
      {
        id: 'week',
        title: 'Día a día',
        blocks: [
          {
            t: 'path',
            items: [
              {
                day: 'Día 1',
                title: 'Ciudad Jardín y tus primeros tableros',
                text: 'Toca el botón verde **Nivel** en Inicio. El nivel 1 enseña a deslizar un ladrillo a casa por su puerta; el nivel 2, a cambiar ladrillos para formar líneas. Cada intento trae una **Pista**, un **Cohete** y un **OVNI** gratis, y al principio llega a tu bandeja un **regalo de bienvenida** único con 2 de cada. Tu primer tablero superado del día también te da el **Ladrillo diario**: 100 monedas, que se recogen en Inicio.',
              },
              {
                day: 'Día 2',
                title: 'Ladrillos que caen y tus primeros obstáculos',
                text: 'Ciudad Jardín sigue sumando ideas: tableros donde los ladrillos caen y llegan otros nuevos, ladrillos largos que necesitan una puerta tan ancha como ellos, y después cajas, hielo, candados, musgo y estatuas. Cada uno tiene su propia tarjeta de aprendizaje. Superar hoy otro tablero hace que tu **racha de días** llegue a dos, y la **Rueda** de Inicio te da un giro gratis cada día.',
              },
              {
                day: 'Día 3',
                title: 'Estrellas y tu primera placa Difícil',
                text: 'Fíjate en la **barra de estrellas** mientras juegas: con más puntuación consigues dos o tres estrellas, y cada aldea tiene 36. Al reunirlas subes por la escalera de estrellas de la aldea (50 monedas, una Pista, 100 monedas y un Cohete); una insignia en el mapa te avisa cuando hay una lista. Los últimos tableros de Ciudad Jardín llevan una placa **Difícil**. Tres días seguidos te dan tu primera recompensa por racha: 100 monedas.',
              },
              {
                day: 'Día 4',
                title: 'Una aldea completa, y Clover Farm',
                text: 'Supera los doce tableros de Ciudad Jardín y aparecerá una tarjeta de celebración con **Compartir** y **Seguimos**. Clover Farm, niveles 13 a 24, tiene los mismos doce tipos de tablero en el mismo orden, y las ideas que has aprendido empiezan a combinarse. Si te quedas sin movimientos, la pantalla Sin movimientos te ofrece formas de seguir; antes del nivel 6 no se ofrece nada de pago.',
              },
              {
                day: 'Día 5',
                title: 'El Ranking y dificultades mayores',
                text: 'La pestaña **Ranking** se abre en el nivel 21. Los tableros Muy difícil empiezan a aparecer en las primeras aldeas, y a partir del nivel 40 el último tablero de cada capítulo es un **Jefe**. Los tableros más difíciles dan más monedas al superarlos. Consulta [Cómo superar un tablero difícil](help:hard-boards) cuando uno se te resista.',
              },
              {
                day: 'Día 6',
                title: 'Siguen llegando ideas nuevas',
                text: 'A medida que pasan las aldeas, los tableros suman tapas sobre **bancales sellados**, **ladrillos bocabajo «?»**, puertas heladas y contadas, puertas por fases y portales. Cada uno tiene una tarjeta de aprendizaje la primera vez que te lo encuentras, y puedes tocar cualquier obstáculo o tapa de un tablero para ver un recordatorio de una línea.',
              },
              {
                day: 'Día 7',
                title: 'Una semana después',
                text: 'Siete días seguidos te dan **250 monedas y un salvarrachas**, que más adelante puede recuperar un día perdido. Las misiones semanales se reinician el lunes, y cada nivel nuevo que superas te ha ido subiendo por los grados del **Pase Ladrillo**. Toca tu avatar para ver tus estadísticas hasta ahora.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los niveles exactos dependen de tu ritmo. El Ranking (nivel 21) y la Colección (nivel 95) se desbloquean por nivel, no por día, y en cada aldea hay tableros Difícil a propósito.',
          },
        ],
      },
      {
        id: 'garden-city',
        title: 'Lo que enseña Ciudad Jardín',
        blocks: [
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Un tablero de Ciudad Jardín con ladrillos rojos, morados y naranjas. Una tarjeta rosa de aprendizaje en la parte inferior dice: Desliza un ladrillo junto a dos de su color para hacer una línea, o empújalo contra un vecino para cambiarlos. ¡Las líneas desaparecen! Debajo: ¡Te toca! Pruébalo. Una mano señala un ladrillo.',
            caption: 'Una tarjeta de aprendizaje en el nivel 2. Cada idea nueva tiene su tarjeta, la primera vez que aparece.',
          },
          {
            t: 'p',
            text: 'Ciudad Jardín es la primera aldea: niveles 1 a 12, uno de cada uno de los [doce tipos de tablero](help:bricks-specials-and-blockers#kinds). Todas las aldeas siguientes siguen el mismo orden, así que lo que te enseña Ciudad Jardín te sigue sirviendo durante 2.000 niveles.',
          },
          {
            t: 'list',
            items: [
              '**Deslizar a casa:** un ladrillo solo sale por una puerta abierta de su color. Cualquier otra puerta es una pared.',
              '**Cambiar:** un cambio solo se mantiene si forma una línea de tres o más; si no, vuelve a su sitio y no cuesta nada.',
              '**Los objetivos de puerta también cuentan las combinaciones:** un objetivo como «manda el rojo a casa» cuenta los ladrillos rojos que sacas deslizándolos y los que haces desaparecer en líneas.',
              '**Especiales:** cuatro en línea, una L o una T, un cuadrado de 2×2 y cinco en línea crean cada uno un ladrillo especial distinto. Consulta [Ladrillos especiales](help:bricks-specials-and-blockers#specials).',
              '**Tableros que caen:** donde los ladrillos caen, puedes deslizar de lado o directamente hacia fuera por una puerta.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Con VoiceOver, mientras se muestra una tarjeta de aprendizaje es lo único que hay en pantalla: toca dos veces para empezar a jugar. El primer tablero con puertas que juegues también te habla del rotor **Puertas**.',
          },
        ],
      },
      {
        id: 'first-stars',
        title: 'Tus primeras estrellas y tu primera recompensa de aldea',
        blocks: [
          {
            t: 'list',
            items: [
              'Superar un tablero siempre da al menos **una estrella**. Los movimientos que te sobran se convierten en rayos de línea que valen 150 puntos cada uno, así que un final limpio suele subir de una estrella a dos.',
              'El indicador de **estrellas** de la cabecera del Viaje cuenta las estrellas de esta aldea. Tócalo para ver las recompensas por estrellas.',
              'Puedes repetir cualquier tablero superado desde el Viaje para mejorar sus estrellas; repetirlo nunca cambia tu posición en el mapa.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'La tarjeta de victoria: una cinta dorada con el texto Cresta Cohete 4, una insignia de ¡Capítulo completo!, tres estrellas doradas, un amigo de ladrillo verde celebrándolo, la palabra ¡Brillante!, una puntuación de 5.470, más 125 monedas, una etiqueta ¡A la primera!, una línea de cofre del viaje y los botones Inicio, Siguiente y Compartir.',
            caption: 'La tarjeta de victoria: tus estrellas, tu puntuación, tus monedas y las recompensas que hayas recogido por el camino.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Costumbres que ayudan',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Un poco cada día cunde mucho',
            text: 'Con superar un tablero al día basta para recoger el Ladrillo diario y que tu racha siga creciendo. No hacen falta sesiones largas: OutBrick premia más volver que quedarse.',
          },
          {
            t: 'table',
            head: ['Costumbre', 'Por qué ayuda'],
            rows: [
              ['Superar un tablero al día', 'Te da el **Ladrillo diario** (100 monedas) y hace crecer tu racha de días: 100 monedas a los 3 días, 250 y un salvarrachas a los 7.'],
              ['Girar la Rueda', 'Un giro gratis al día para ganar monedas o un potenciador. Supera tres niveles nuevos ese día y el giro gratis te dará el doble de monedas.'],
              ['Mirar las Misiones', 'Tres para hoy y tres para la semana, cada una con su recompensa. Toca **Recoger** o **Recoger todo**.'],
              ['Recoger las recompensas por estrellas', 'Una insignia en el mapa te avisa cuando hay una recompensa por estrellas de la aldea esperándote.'],
              ['Usar los potenciadores gratis', 'La Pista, el Cohete y el OVNI gratis de cada intento no se pueden guardar, así que úsalos.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Las Misiones en la 5.1.1',
            text: 'En la 5.1 y la 5.1.1, algunas misiones no cuentan el progreso en los tableros de Slide & Match, y unas pocas piden cosas que esos tableros no pueden dar. Tus niveles, estrellas y monedas no se ven afectados, y la corrección está en camino. Consulta [los problemas conocidos](/support/known-issues).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Guardar potenciadores para cuando importan',
        blocks: [
          {
            t: 'list',
            items: [
              'Una etiqueta **GRATIS** en un potenciador significa que el próximo uso no cuesta nada; el juego gasta los gratis antes que los tuyos.',
              'Los potenciadores que tienes (del regalo de bienvenida, la Rueda, las recompensas por estrellas, las Misiones y el Pase Ladrillo) se guardan hasta que los usas.',
              'Las rachas de victorias te dan más para el siguiente tablero: 2 victorias seguidas dan una Pista, 3 un Cohete, 4 un OVNI y 5 los tres. Solo cuentan los niveles nuevos.',
              'Guarda los Cohetes y OVNIs que tengas para los tableros Difícil, Muy difícil y Jefe, donde un obstáculo en mal sitio puede costarte el tablero.',
            ],
          },
          { t: 'p', text: 'Más en [Potenciadores, pistas y Pausa](help:boosters-and-pause) y [Cómo superar un tablero difícil](help:hard-boards#boosters).' },
        ],
      },
      {
        id: 'lives',
        title: 'Las vidas en tu primera semana',
        blocks: [
          {
            t: 'p',
            text: 'Las vidas solo se van cuando pierdes un intento, nunca cuando ganas ni cuando abres un tablero. Si no tienes claro un tablero, míralo primero: salir antes de tu primer movimiento siempre es gratis. Después de tu tercer tablero superado, el juego te pregunta una vez si puede enviarte recordatorios, como cuando tienes las vidas llenas; **Ahora no** espera una semana. Consulta [Vidas, quedarse sin movimientos y deshacer](help:lives-moves-and-undos).',
          },
        ],
      },
      {
        id: 'next',
        title: 'Adónde ir después',
        blocks: [
          {
            t: 'list',
            items: [
              '[Un recorrido por todos los menús](help:menus-tour), para que cada botón tenga sentido.',
              '[El Viaje y sus aldeas](help:journey-and-villages), para los cofres, los regalos y el atlas de todas las aldeas.',
              '[Recompensas, eventos y el Pase Ladrillo](help:rewards-and-events), para las rachas, las Misiones y los eventos.',
              '[Glosario de OutBrick](help:glossary), cada vez que una palabra te suene nueva.',
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
    title: 'Cómo superar un tablero difícil',
    summary:
      'El método de una experta para los tableros que se te resisten: leer los objetivos, contar los movimientos, elegir entre deslizar y combinar, trabajar abajo en los tableros que caen, guardar los especiales para combos, gastar bien los potenciadores y los deshacer, y saber cuándo seguir.',
    keywords:
      'estrategia consejos trucos atascado atascada nivel difícil complicado no puedo pasar superar nivel muy difícil jefe noche ayuda guía solución plan movimientos combos cascadas potenciadores deshacer continuar ayudita voiceover rotor',
    sections: [
      {
        id: 'before',
        title: 'Antes de tu primer movimiento',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Primero mirar, luego mover',
            text: 'La mayoría de los tableros difíciles se pierden en los tres primeros movimientos, no en los tres últimos. Abrir un tablero no cuesta nada, y salir antes de tu primer movimiento siempre es gratis, así que míralo bien antes de tocar nada.',
          },
          {
            t: 'steps',
            items: [
              '**Lee todos los objetivos** del panel de objetivos: qué colores, cuántos y si hay cajas, candados o musgo que quitar. Un tablero por **fases** abre puertas nuevas cuando se cumplen los primeros objetivos.',
              '**Cuenta tus movimientos** frente a los objetivos. Veinte movimientos para veinte ladrillos rojos significa que deslizarlos de uno en uno no bastará: necesitas líneas.',
              '**Busca las puertas.** Fíjate en el color y la anchura de cada puerta, y en si está helada, es contada o está sellada hasta una fase posterior.',
              '**Localiza lo que no se mueve:** los ladrillos bajo una tapa, en hielo o con candado aún no se pueden mover. Toca cualquier obstáculo o tapa para ver un recordatorio de una línea sobre cómo se abre.',
              '**Mira si los ladrillos caen.** Si caen, pueden llegar ladrillos nuevos, y cada combinación cambia lo que hay encima.',
            ],
          },
        ],
      },
      {
        id: 'slide-or-match',
        title: 'Deslizar o combinar: gasta cada movimiento donde más cuente',
        blocks: [
          {
            t: 'p',
            text: 'Un objetivo de puerta como «manda 12 rojos a casa» cuenta **tanto** los ladrillos rojos que sacas deslizándolos por la puerta roja **como** los que haces desaparecer en líneas. Eso cambia las cuentas:',
          },
          {
            t: 'table',
            head: ['Movimiento', 'Ladrillos de objetivo por movimiento', 'Ideal para'],
            rows: [
              ['Deslizar un ladrillo a casa', '1', 'Un ladrillo suelto con el camino libre, o los últimos uno o dos de un objetivo.'],
              ['Deslizar a casa un ladrillo largo o grande', 'Uno por cada casilla que ocupa', 'Los ladrillos largos y grandes cuentan cada casilla, así que uno de 2×2 son cuatro en un movimiento.'],
              ['Cambiar para formar una línea de 3', '3', 'Casi todo el tablero, casi siempre.'],
              ['Línea de 4 o 5, o una forma', '4 o más, y además un especial', 'Crear especiales que luego despejan mucho más.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['Y . . G', 'R+ B R R', '. . Y .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['Y . . G', 'B . . .', '. . Y .'] },
              caption: 'Un cambio, tres ladrillos rojos de objetivo. El que está delante de la puerta roja sale por ella.',
              alt: 'Un tablero de tres filas y cuatro columnas donde nada cae, con una puerta roja en el borde derecho de la fila central. Fila de arriba: amarillo, vacío, vacío, verde. Fila central: rojo (resaltado), azul, rojo, rojo. Fila de abajo: vacío, vacío, amarillo, vacío. El ladrillo rojo resaltado se cambia hacia la derecha con el azul y forma una línea de tres ladrillos rojos. Después del movimiento, los tres ladrillos rojos han desaparecido, el que estaba junto a la puerta roja saliendo por ella, y el azul queda a la izquierda de la fila central. Los tres cuentan para un objetivo rojo.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Un ladrillo combinado o destruido en la casilla justo delante de su propia puerta sale por esa puerta. Cuando una puerta es **contada**, eso importa: solo los ladrillos que pasan por ella gastan sus plazas, así que elige cuáles enviar.',
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Libera los obstáculos y abre las puertas',
        blocks: [
          {
            t: 'p',
            text: 'No todos los obstáculos se abren igual. Lo que ahorra movimientos es hacer el tipo de línea adecuado:',
          },
          {
            t: 'board',
            board: {
              rows: ['x2 . . .', 'R R B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['x . . .', '. . . B'] },
              caption: 'Una línea junto a una caja rompe una capa.',
              alt: 'Un tablero de dos filas y cuatro columnas donde nada cae. Fila de arriba: una caja de 2 capas y tres casillas vacías. Fila de abajo: rojo, rojo, azul, rojo (resaltado). El ladrillo rojo resaltado se cambia hacia la izquierda con el azul y forma una línea de tres ladrillos rojos bajo la caja. Después del movimiento, los ladrillos rojos han desaparecido, a la caja le queda 1 capa y el azul queda a la derecha de la fila de abajo.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'R R! B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['. . . .', '. R . B'] },
              caption: 'Un candado solo se abre con una línea que pase por él. El ladrillo liberado se queda.',
              alt: 'Un tablero de dos filas y cuatro columnas donde nada cae. Fila de arriba vacía. Fila de abajo: rojo, un ladrillo rojo con candado, azul, rojo (resaltado). El ladrillo rojo resaltado se cambia hacia la izquierda con el azul, así que la línea de tres ladrillos rojos pasa por el del candado. Después del movimiento, los dos ladrillos rojos sin candado han desaparecido, el candado ya no está y su ladrillo rojo se queda en su sitio, ahora libre para moverse, y el azul queda a la derecha de la fila de abajo.',
            },
          },
          {
            t: 'table',
            head: ['Obstáculo', 'Qué lo abre', 'Táctica'],
            rows: [
              ['Caja', 'Una línea a su lado, una capa por línea.', 'Haz primero líneas junto a las cajas que tapan el camino a una puerta.'],
              ['Hielo', 'Una línea a su lado.', 'Libera pronto los ladrillos de objetivo helados; hasta entonces no se pueden mover.'],
              ['Candado', 'Una línea que pase **por** él.', 'Forma la línea alrededor del ladrillo con candado; una línea a su lado no sirve de nada.'],
              ['Musgo', 'Una línea a su lado.', 'El musgo se extiende tras cualquier movimiento que no quite musgo, así que sigue quitándolo y no dejes que crezca.'],
              ['Estatua', 'Nada: se queda.', 'Planifica los caminos a su alrededor.'],
              ['Tapa', 'Su propia regla: una cuenta, un color, una línea llave, un número de movimientos o un ladrillo llave.', 'Lee la tapa antes del primer movimiento; consulta [Salas selladas y sus tapas](help:bricks-specials-and-blockers#lids).'],
            ],
          },
          {
            t: 'p',
            text: 'Cada obstáculo, tapa y puerta se describe a fondo en [La enciclopedia de obstáculos](help:blockers-encyclopedia).',
          },
          { t: 'h3', text: 'Puertas heladas, contadas y por fases' },
          {
            t: 'list',
            items: [
              '**Puerta helada:** se deshiela un poco cada vez que cualquier ladrillo vuelve a casa por cualquier puerta, y cuando se despejan piezas delante de ella. Manda pronto a casa otros colores para que se abra antes.',
              '**Puerta contada:** solo admite un número de ladrillos y luego se cierra para siempre. No malgastes sus plazas en ladrillos que podría quitar una combinación.',
              '**Puerta por fases:** sigue sellada hasta que empieza la segunda fase de objetivos. No gastes movimientos en la fase uno colocando ladrillos para ella.',
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
              caption: 'Aquí, a la puerta azul helada le falta un ladrillo que vuelva a casa, por cualquier puerta.',
              alt: 'Un tablero de tres filas y cuatro columnas. En el borde izquierdo de la fila central hay una puerta azul helada; en el borde derecho de la fila central, una puerta roja abierta. La fila central tiene un ladrillo azul a la izquierda y un ladrillo rojo (resaltado) a la derecha. El ladrillo rojo se desliza hacia la derecha y sale por la puerta roja. Después del movimiento, el ladrillo rojo ya no está y la puerta azul se ha deshelado y está abierta, así que ahora el ladrillo azul puede deslizarse hacia la izquierda y entrar en ella.',
            },
          },
        ],
      },
      {
        id: 'falling',
        title: 'Tableros que caen: trabaja abajo',
        blocks: [
          {
            t: 'p',
            text: 'En los tableros donde los ladrillos caen, una combinación cerca del fondo mueve todo lo que tiene encima, y la caída puede formar otra combinación por sí sola: una **cascada**, que no cuesta ningún movimiento extra. Una combinación cerca de arriba casi no mueve nada. Así que, a igualdad de lo demás, **trabaja de abajo arriba**.',
          },
          {
            t: 'board',
            board: {
              rows: ['R . .', 'G . .', 'Y+ G .', 'G R R'],
              moves: [{ row: 2, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['. . .', '. . .', '. . .', '. Y .'] },
              caption: 'Un cambio, dos líneas: la línea verde desaparece, el ladrillo rojo cae y la línea roja también desaparece.',
              alt: 'Un tablero de cuatro filas y tres columnas donde los ladrillos caen pero no llegan otros nuevos. Columna izquierda, de arriba abajo: rojo, verde, amarillo (resaltado), verde. Columna central: vacío, vacío, verde, rojo. Columna derecha: vacío, vacío, vacío, rojo. El ladrillo amarillo resaltado se cambia hacia la derecha con el verde que tiene al lado y forma una columna de tres ladrillos verdes a la izquierda. Desaparecen, el ladrillo rojo de arriba cae a la fila de abajo junto a los dos rojos que hay allí, y esa línea de tres ladrillos rojos también desaparece. El ladrillo amarillo cae a la fila de abajo, y es lo único que queda.',
            },
          },
          {
            t: 'list',
            items: [
              'En los tableros que caen puedes deslizar de lado hacia un hueco, o directamente hacia fuera por una puerta. Usa los deslizamientos para preparar líneas que una caída completará.',
              'Donde llegan ladrillos nuevos, la parte de arriba del tablero es una incógnita; lo que puedes planificar es la de abajo.',
              'En los tableros **Piezas de esquina** y **Puzle tranquilo**, los ladrillos caen pero no llegan otros nuevos, así que cada ladrillo es todo lo que tendrás. Cuenta los ladrillos de cada color de objetivo antes de empezar.',
            ],
          },
        ],
      },
      {
        id: 'specials',
        title: 'Especiales: créalos y guárdalos para un combo',
        blocks: [
          {
            t: 'table',
            head: ['Crea', 'Especial', 'Mejor uso'],
            rows: [
              ['Cuatro en línea', 'Rayo de línea', 'Despeja toda una fila o columna, en la dirección en la que te moviste. Apúntalo a una fila llena de ladrillos de objetivo o de cajas.'],
              ['Una forma de L, de T o de +', 'Bomba', 'Hace estallar el cuadrado de 3×3 que la rodea, dos veces. Va bien contra grupos de obstáculos.'],
              ['Un cuadrado de 2×2', 'Dardo guiado', 'Vuela hasta una pieza que pide un objetivo. Va bien para la última pieza de objetivo que se resiste.'],
              ['Cinco en línea', 'Bomba de color', 'Cámbiala por un ladrillo de un color para llevarte todos los ladrillos normales de ese color.'],
            ],
          },
          {
            t: 'p',
            text: 'Un especial activado solo está bien; dos cambiados entre sí, mucho mejor. Si dos especiales están cerca, intenta ponerlos uno al lado del otro y cambiarlos entre sí en lugar de tocar cada uno:',
          },
          {
            t: 'board',
            board: {
              rows: ['G Y . B', 'R- Bb+ . Y', 'Y G B R'],
              moves: [{ row: 1, col: 1, dir: 'left', kind: 'swap' }],
              caption: 'Un rayo de línea y una bomba uno al lado del otro: cámbialos entre sí para conseguir una cruz de tres carriles de ancho.',
              alt: 'Un tablero de tres filas y cuatro columnas. Fila de arriba: verde, amarillo, vacío, azul. Fila central: un rayo de línea rojo que dispara en horizontal, una bomba azul (resaltada), vacío, amarillo. Fila de abajo: amarillo, verde, azul, rojo. Una flecha muestra la bomba azul cambiándose hacia la izquierda con el rayo de línea rojo. Cambiados entre sí, estallan como una cruz de tres filas y tres columnas de ancho.',
            },
          },
          {
            t: 'table',
            caption: 'Combos, de buenos a mejores',
            head: ['Cambia juntos', 'Resultado'],
            rows: [
              ['Rayo de línea + rayo de línea', 'Una cruz: una fila y una columna.'],
              ['Rayo de línea + bomba', 'Una cruz de tres carriles de ancho.'],
              ['Bomba + bomba', 'Una explosión de 5×5.'],
              ['Dardo + cualquier especial', 'El dardo lleva el especial hasta su objetivo.'],
              ['Bomba de color + cualquier especial', 'Todos los ladrillos de ese color se convierten en ese especial y estallan a la vez.'],
              ['Bomba de color + bomba de color', 'Todo el tablero.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tocar un especial para activarlo donde está gasta un movimiento, y un cambio de combo también, así que un combo es el despeje de dos especiales por un solo movimiento. Más en [Ladrillos especiales y combos](help:special-bricks-and-combos).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Potenciadores gratis y el deshacer gratis',
        blocks: [
          {
            t: 'p',
            text: 'Cada intento trae **una Pista, un Cohete y un OVNI gratis**. No se pueden guardar para más tarde, así que un tablero en el que no los tocaste es un tablero que jugaste con una mano atada a la espalda.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Pista', text: 'Muestra y dice el mejor movimiento. Úsala pronto en un tablero que no conoces para aprender qué pide, no solo cuando te atascas.' },
              { term: 'Cohete', text: 'Convierte un ladrillo normal en un rayo de línea que dispara a lo largo de su fila. Elige una fila con varios ladrillos de objetivo u obstáculos, mejor abajo en un tablero que cae.' },
              { term: 'OVNI', text: 'Le quita una capa a una pieza: una capa de caja, hielo, un candado, musgo o un ladrillo. Ideal para ese único obstáculo que encierra un ladrillo de objetivo o el camino a una puerta.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Los potenciadores no pueden elegir ladrillos con forma ni nada que esté bajo una tapa. Los potenciadores que tienes se guardan, así que resérvalos para los tableros Difícil, Muy difícil y Jefe. Consulta [Potenciadores, pistas y Pausa](help:boosters-and-pause).',
          },
          { t: 'h3', text: 'Deshacer para ver qué pasaría' },
          {
            t: 'list',
            items: [
              'El **primer deshacer de cada tablero es gratis**. Úsalo para echar un vistazo gratis: prueba el movimiento del que dudas y, si sale mal, anúlalo.',
              'Deshacer deja el tablero exactamente como estaba antes de tu movimiento, y te devuelve el movimiento.',
              'Después del gratis, los deshacer salen de una reserva de hasta cinco que se recarga de uno en uno cada 25 minutos. Guárdalos para el final de un tablero, donde un movimiento desperdiciado marca la diferencia.',
              '**Deshacer sale más barato que Reiniciar.** Reiniciar después de un movimiento termina el intento y cuesta una vida; deshacer, nunca.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Cuándo seguir, y volver a intentarlo',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'La pantalla Sin movimientos con los objetivos que aún faltan, un botón de 5 movimientos más por 300 monedas, un botón Ver para 2 movimientos más y Rendirse.',
            caption: 'Sin movimientos: lo que todavía te falta y tus opciones.',
          },
          {
            t: 'p',
            text: 'La pantalla Sin movimientos muestra exactamente lo que falta. Léela antes de decidir. Seguir jugando mantiene vivo este intento, así que **nunca cuesta una vida**; rendirse gasta una, y una vida vuelve en 30 minutos.',
          },
          {
            t: 'table',
            head: ['Lo que falta', 'Una decisión sensata'],
            rows: [
              ['Una o dos piezas de objetivo a mano', 'Sigue: un vídeo gratis (+2 movimientos), un **+5 movimientos** guardado o la primera continuación con monedas (300 monedas, +5 movimientos).'],
              ['Unas pocas piezas, pero con un obstáculo en medio', 'La segunda continuación (500 monedas) añade una Pista; la tercera (900), un OVNI para ese obstáculo.'],
              ['Casi todo un objetivo por hacer', 'Déjalo. Este intento te ha enseñado el tablero; el siguiente empieza de cero.'],
            ],
          },
          {
            t: 'list',
            items: [
              'El precio sube 300 → 500 → 900 dentro de un intento y vuelve a empezar con cada intento nuevo.',
              'En un tablero que has intentado varias veces, cada continuación da un movimiento extra por cada intento fallido a partir del tercero, hasta +15.',
              'El **Pase Ladrillo** actual añade tres movimientos gratis en la pantalla Sin movimientos.',
              'Antes del nivel 6 no se ofrece nada de pago.',
            ],
          },
          { t: 'p', text: 'Todos los detalles en [Sin movimientos](help:lives-moves-and-undos#out-of-moves).' },
          { t: 'h3', text: 'Volver a intentarlo: la ayudita' },
          {
            t: 'list',
            items: [
              'Después de perder, **Nivel fallido** muestra lo cerca que estuviste. Aprovecha lo que has visto: qué objetivo se quedó corto, qué obstáculo tardó demasiado.',
              'A partir de tu **sexto intento** en el mismo tablero, el juego te da **3 movimientos extra** antes de empezar: «Una ayudita: 3 movimientos más en este intento». Una vez al día por tablero, gratis.',
              'Desde el nivel 6, puedes empezar el siguiente intento con ventaja por 800 monedas: un Cohete en el tablero y un OVNI gratis.',
              '¿Sigues atascado? Busca el nivel en [Ayuda con un nivel](/support/levels): puede que otros jugadores hayan dejado una pista.',
            ],
          },
          {
            t: 'shot',
            id: 'level-failed',
            alt: 'Nivel fallido: un amigo triste, «¡Casi lo logras!», los objetivos que faltan (3 ladrillos de sol y 3 de ola), un corazón roto que indica una vida usada, un botón azul Reintentar, una oferta opcional y Volver al mapa.',
            caption: 'Nivel fallido muestra lo cerca que estuviste.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Qué esperar de Difícil, Muy difícil y Jefe',
        blocks: [
          {
            t: 'table',
            head: ['Dificultad', 'Qué cambia', 'Monedas al superarlo'],
            rows: [
              ['Difícil', 'Los objetivos piden alrededor de un 15 % más, y hay algunos obstáculos más.', '50'],
              ['Muy difícil', 'Los objetivos piden alrededor de un 30 % más.', '80'],
              ['Jefe', 'El último tablero de un capítulo, a partir del nivel 40. Los objetivos piden alrededor de un 40 % más.', '80'],
              ['Noche', 'Un tablero ambientado de noche. Se juega como un tablero Difícil.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Cuenta con necesitar más de un intento en los tableros Muy difícil y Jefe: están ajustados así, y no es señal de que juegues mal. Un programa de resolución ha superado cada tablero del juego antes de publicarlo, así que todos se pueden ganar.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Estrategia con VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              '**Empieza por el resumen del Tablero** de arriba: el nivel, la fase, los objetivos y los movimientos que quedan. Tócalo dos veces para oír todo el tablero con una pista.',
              '**Usa los rotores en lugar de recorrer casilla por casilla.** **Objetivos** encuentra las piezas que piden tus objetivos; **Piezas que combinan** encuentra todos los movimientos que despejan ahora; **Bloqueos** y **Puertas** muestran lo que estorba y por dónde pueden salir los ladrillos.',
              '**Escucha las acciones de una pieza.** Los deslizamientos dicen hasta dónde llegan y si salen por una puerta, y los cambios que funcionan van primero, así que las primeras acciones suelen ser el plan.',
              '**Pon el Detalle de los avisos en Completo** en los tableros difíciles para oír la cuenta de cada objetivo después de cada movimiento, y no perder nunca la cuenta.',
              '**El toque doble con dos dedos es una pista gratis** que nunca gasta un potenciador Pista. Pídela tantas veces como quieras.',
              'Activa **Confirmar cambios** si un desliz pudiera jugar un movimiento que no querías.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'En la 5.1 y la 5.1.1, una tarjeta que ofrece potenciadores puede abrirse mientras lees el tablero y llevar VoiceOver arriba del todo. El gesto de frotar con dos dedos la cierra y te devuelve al tablero; la corrección está en camino. Consulta [Jugar con VoiceOver](help:voiceover#rotors) y [los problemas conocidos](/support/known-issues).',
          },
        ],
      },
      {
        id: 'checklist',
        title: 'La lista de comprobación para tableros difíciles',
        blocks: [
          {
            t: 'table',
            head: ['Cuándo', 'Comprueba'],
            rows: [
              ['Antes del primer movimiento', 'Todos los objetivos leídos, movimientos contados, puertas y sus tipos localizados, ladrillos bloqueados y tapas vistos, y si caen o no.'],
              ['En cada movimiento', '¿Este movimiento cuenta para un objetivo, libera un obstáculo o prepara un especial? Si no hace nada de eso, busca otro.'],
              ['Especiales', '¿Hay dos cerca? Júntalos para un combo en lugar de activarlos por separado.'],
              ['Herramientas gratis', 'Pista, Cohete y OVNI gratis usados en este intento; deshacer gratis gastado en una duda de verdad.'],
              ['Últimos cinco movimientos', 'El borde del tablero se ilumina. Cuenta exactamente lo que falta y juega primero los movimientos más seguros.'],
              ['Sin movimientos', '¿Cerca? Sigue, mejor con un vídeo gratis. ¿Lejos? Déjalo y vuelve con energías renovadas.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Descansar también es una estrategia',
            text: 'Un tablero que te ha ganado cinco veces seguidas suele caer a la primera después de un descanso. Consulta [Jugar con calma](help:playing-calmly).',
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
    title: 'Glosario de OutBrick',
    summary:
      'Todas las palabras que te encuentras en OutBrick, de las puertas y los rayos de línea a las tapas, la ayudita, el Pase Ladrillo y el Armario, explicadas en una o dos frases con un enlace a la guía que las trata.',
    keywords:
      'glosario diccionario términos palabras significado definición qué es qué significa vocabulario lista a-z',
    sections: [
      {
        id: 'board',
        title: 'El tablero',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Tablero', text: 'Un puzle del Viaje: una cuadrícula de ladrillos con puertas de colores en los bordes, objetivos que cumplir y un número de movimientos. Consulta [Jugar un tablero](help:playing-a-board).' },
              { term: 'Deslizar', text: 'Arrastrar un ladrillo hacia un hueco. Se detiene donde lo sueltas, o sale del tablero si lo llevas hasta la puerta abierta de su color. Consulta [Deslizar ladrillos a casa](help:playing-a-board#slide).' },
              { term: 'Cambiar', text: 'Empujar un ladrillo contra su vecino. El cambio solo se mantiene si forma una línea; si no, vuelve a su sitio y no se gasta ningún movimiento. Consulta [Cambiar y combinar](help:playing-a-board#swap).' },
              { term: 'Línea (combinación)', text: 'Tres o más ladrillos de un color en una fila o columna, o un cuadrado de 2×2. Las líneas desaparecen. Consulta [Cambiar y combinar](help:playing-a-board#swap).' },
              { term: 'Puerta', text: 'Una entrada de color en el borde del tablero. Admite ladrillos de su color; para cualquier otro ladrillo es una pared. Consulta [Puertas](help:bricks-specials-and-blockers#gates).' },
              { term: 'Puerta helada', text: 'Una puerta cerrada hasta que se deshiela, un poco cada vez que cualquier ladrillo vuelve a casa o cuando se despejan piezas delante de ella. Consulta [Puertas](help:bricks-specials-and-blockers#gates).' },
              { term: 'Puerta contada', text: 'Una puerta que solo admite un número de ladrillos, el que indica, y luego se cierra para siempre. Consulta [Puertas](help:bricks-specials-and-blockers#gates).' },
              { term: 'Puerta por fases', text: 'Una puerta que sigue sellada hasta que empieza la segunda fase de objetivos del tablero. Consulta [Puertas](help:bricks-specials-and-blockers#gates).' },
              { term: 'Objetivo', text: 'Lo que pide un tablero, en el panel de objetivos con cuántos faltan: ladrillos de un color que mandar a casa o combinar, cajas, candados o musgo. Consulta [Cómo leer los objetivos](help:welcome#goals).' },
              { term: 'Panel de objetivos', text: 'Los objetivos de la parte de arriba del tablero, cada uno con su símbolo para daltonismo y una marca cuando se cumple. Consulta [La pantalla del tablero](help:playing-a-board#screen).' },
              { term: 'Fase', text: 'Algunos tableros reparten sus objetivos en dos fases: termina la primera y se abren puertas nuevas para la segunda. El panel de objetivos muestra «Fase 1 de 2».' },
              { term: 'Movimientos', text: 'El número grande de la cabecera: los movimientos que quedan en este tablero, el único límite de OutBrick. Late al llegar a tres. Consulta [La pantalla del tablero](help:playing-a-board#screen).' },
              { term: 'Barra de estrellas', text: 'La barra de la cabecera que se llena a medida que sube tu puntuación, con una estrella en cada umbral. Consulta [Puntuación, estrellas y la bonificación final](help:playing-a-board#stars).' },
              { term: 'Puntuación y estrellas', text: 'Superar un tablero siempre da al menos una estrella; con más puntuación consigues dos o tres. Cada movimiento que sobra al final suma 150 puntos. Consulta [Puntuación, estrellas y la bonificación final](help:playing-a-board#stars).' },
              { term: '¡Objetivo cumplido!', text: 'El aviso que aparece cuando se cumple el último objetivo. Después, los movimientos que te sobran se convierten en rayos de línea y estallan; toca para saltártelo.' },
              { term: '¡A mezclar!', text: 'El aviso que aparece cuando no hay ningún movimiento posible y el tablero se mezcla solo, gratis. Consulta [Nunca te quedas atascado](help:playing-a-board#never-stuck).' },
              { term: 'Bandeja', text: 'La fila bajo el tablero: Pausa y, después, Pista, Cohete, OVNI y Deshacer. Consulta [La bandeja](help:boosters-and-pause#tray).' },
              { term: 'Tarjeta de aprendizaje', text: 'Una tarjeta breve con una mano que se mueve y que muestra una idea nueva la primera vez que te la encuentras. Toca en cualquier sitio para empezar a jugar.' },
              { term: 'Racha de victorias', text: 'Una pequeña cadena de ladrillos bajo los movimientos cuando ganas niveles nuevos seguidos. Las rachas suman potenciadores gratis a tu siguiente tablero. Consulta [Potenciadores gratis](help:boosters-and-pause#free).' },
            ],
          },
        ],
      },
      {
        id: 'bricks',
        title: 'Ladrillos y especiales',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Ladrillo', text: 'Un ladrillo de juguete normal de uno de los colores del tablero, con su símbolo para daltonismo estampado. Se puede deslizar, cambiar y combinar.' },
              { term: 'Ladrillos largos, grandes, en L y en T', text: 'Ladrillos con forma que se deslizan y caen como una sola pieza, nunca se cambian, nunca cuentan en las líneas y necesitan una puerta tan ancha como ellos. Un objetivo cuenta cada casilla. Consulta [Ladrillos bocabajo, portales y ladrillos con forma](help:bricks-specials-and-blockers#more).' },
              { term: 'Ladrillo bocabajo', text: 'Un ladrillo «?» que esconde su color. Se da la vuelta cuando un ladrillo de al lado sale del tablero, nunca cuando se mueve, y aun así juega con su color real.' },
              { term: 'Ladrillo llave', text: 'El ladrillo que abre una tapa con cerradura cuando sale del tablero, combinado o deslizado por su puerta. Consulta [Salas selladas y sus tapas](help:bricks-specials-and-blockers#lids).' },
              { term: 'Especial', text: 'Un ladrillo creado con una combinación más grande que despeja más cuando estalla. Tócalo para activarlo donde está, o cámbialo. Consulta [Ladrillos especiales](help:bricks-specials-and-blockers#specials).' },
              { term: 'Rayo de línea', text: 'Se crea con cuatro en línea. Despeja toda su fila o columna, en la dirección en la que te moviste. También puede salir deslizándose por una puerta de su color sin estallar.' },
              { term: 'Bomba', text: 'Se crea con una forma de L, de T o de +. Hace estallar el cuadrado de 3×3 que la rodea, dos veces.' },
              { term: 'Dardo guiado', text: 'Se crea con un cuadrado de 2×2. Vuela hasta una pieza que pide un objetivo.' },
              { term: 'Bomba de color', text: 'Se crea con cinco en línea. Cámbiala por un ladrillo de un color para llevarte todos los ladrillos normales de ese color.' },
              { term: 'Combo', text: 'Dos especiales cambiados entre sí para conseguir un efecto mayor, como una cruz o una explosión de 5×5. Consulta [Combos](help:bricks-specials-and-blockers#combos) y [Ladrillos especiales y combos](help:special-bricks-and-combos).' },
              { term: 'Cascada', text: 'Una línea que se forma sola cuando los ladrillos caen después de un despeje. No cuesta ningún movimiento extra. Consulta [Cómo superar un tablero difícil](help:hard-boards#falling).' },
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Obstáculos, tapas y portales',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Obstáculo', text: 'Cualquier cosa que estorbe. Toca uno en un tablero para ver un recordatorio de una línea sobre cómo quitarlo; su aspecto cambia con la aldea, sus reglas no. Consulta [Obstáculos](help:bricks-specials-and-blockers#blockers) y [La enciclopedia de obstáculos](help:blockers-encyclopedia).' },
              { term: 'Caja', text: 'Detiene los ladrillos que se deslizan. Tiene una o dos capas; cada línea que haces a su lado rompe una.' },
              { term: 'Hielo', text: 'Inmoviliza el ladrillo que tiene dentro. Una línea a su lado rompe el hielo.' },
              { term: 'Candado', text: 'El ladrillo no se puede mover. Solo una línea que pase **por** él lo libera.' },
              { term: 'Musgo', text: 'Se extiende a un ladrillo tras cualquier movimiento que no quite musgo. Una línea a su lado lo quita.' },
              { term: 'Estatua', text: 'Ocupa un hueco del tablero. Nada se desliza a través de ella, y se queda ahí: busca otro carril.' },
              { term: 'Portal', text: 'Uno de una pareja: desliza un ladrillo dentro de uno y saldrá por su gemelo en otro lado. Consulta [Ladrillos bocabajo, portales y ladrillos con forma](help:bricks-specials-and-blockers#more).' },
              { term: 'Sala sellada (bancal sellado)', text: 'Ladrillos bajo una tapa que no se pueden mover hasta que la tapa se abre. La tarjeta de aprendizaje lo llama bancal sellado. Consulta [Salas selladas y sus tapas](help:bricks-specials-and-blockers#lids).' },
              { term: 'Tapa', text: 'La cubierta de una sala sellada, de cinco tipos: un contador, un contador de color, una llave de vidriera, un reloj de latón y una cerradura. Cada una se abre a su manera. Consulta [Salas selladas y sus tapas](help:bricks-specials-and-blockers#lids).' },
            ],
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tipos de tablero',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Difícil', text: 'Un tablero con una placa morada bajo la cabecera. Los objetivos piden alrededor de un 15 % más, con algunos obstáculos más; superarlo da 50 monedas. Consulta [Tableros Difícil, Muy difícil, Jefe y Noche](help:playing-a-board#tiers).' },
              { term: 'Muy difícil', text: 'Los objetivos piden alrededor de un 30 % más; superarlo da 80 monedas.' },
              { term: 'Jefe', text: 'El último tablero de un capítulo, a partir del nivel 40. Los objetivos piden alrededor de un 40 % más; superarlo da 80 monedas.' },
              { term: 'Tablero Noche', text: 'Un tablero ambientado de noche, en tiza y tinta. Se juega como un tablero Difícil.' },
              { term: 'Los doce tipos de tablero', text: 'Los tableros 1 a 12 de cada aldea siguen siempre el mismo orden, de Mándalos a casa a Puzle tranquilo. Consulta [Los doce tipos de tablero](help:bricks-specials-and-blockers#kinds) y [Tipos de tablero](help:board-kinds).' },
              { term: 'Tablero que cae', text: 'Un tablero donde los ladrillos caen para rellenar huecos. En algunos llegan ladrillos nuevos; en Piezas de esquina y Puzle tranquilo no llega ninguno.' },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas, movimientos y potenciadores',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Vida', text: 'Solo se gasta cuando pierdes un intento: al rendirte sin movimientos, o al salir o reiniciar después de un movimiento. Hasta cinco (ocho con el Pase Ladrillo actual), y recuperas una cada 30 minutos. Consulta [Vidas](help:lives-moves-and-undos#lives).' },
              { term: 'Intento gratis', text: 'Una vez al día, sin vidas, un intento gratis en un tablero: si ganas, conservas la vida; si pierdes, no te cuesta nada.' },
              { term: 'Vidas ilimitadas', text: 'Un periodo de 1, 3 o 24 horas en el que perder no cuesta ninguna vida. Consulta [Sin vidas](help:lives-moves-and-undos#out-of-lives).' },
              { term: 'Sin movimientos', text: 'La pantalla que ves cuando se acaban los movimientos antes de cumplir los objetivos, con formas de seguir en el mismo intento, o **Rendirse**. Consulta [Sin movimientos](help:lives-moves-and-undos#out-of-moves).' },
              { term: 'Seguir jugando', text: 'Comprar o ver un vídeo para tener más movimientos en el mismo intento: +5 movimientos por 300, luego 500 y luego 900 monedas, o +2, luego +1 y después un OVNI con vídeo. Nunca cuesta una vida.' },
              { term: '+5 movimientos', text: 'Una continuación guardada de un pack, que se usa en la pantalla Sin movimientos en lugar de monedas.' },
              { term: 'Ayudita', text: 'A partir de tu sexto intento en el mismo tablero, 3 movimientos extra antes de empezar, una vez al día por tablero. Consulta [Nivel fallido y volver a intentarlo](help:lives-moves-and-undos#level-failed).' },
              { term: 'Nivel fallido', text: 'La pantalla que aparece después de rendirte, con lo cerca que estuviste, y los botones **Reintentar** y **Volver al mapa**.' },
              { term: 'Potenciador', text: 'Una herramienta de la bandeja: Pista, Cohete u OVNI. Cada intento trae uno de cada gratis. Consulta [Potenciadores, pistas y Pausa](help:boosters-and-pause).' },
              { term: 'Pista', text: 'Muestra y dice el mejor movimiento, un deslizamiento o un cambio.' },
              { term: 'Cohete', text: 'Tócalo y luego toca un ladrillo normal: el ladrillo se convierte en un rayo de línea que dispara a lo largo de su fila.' },
              { term: 'OVNI', text: 'Tócalo y luego toca una pieza: le quita una capa, como una capa de caja, hielo, un candado, musgo o un ladrillo.' },
              { term: 'Deshacer', text: 'Anula tu último movimiento. El primero de cada tablero es gratis; los demás salen de una reserva de cinco que se recarga de uno en uno cada 25 minutos. Consulta [Deshacer](help:boosters-and-pause#undo).' },
              { term: 'Monedas', text: 'Se ganan superando tableros y con recompensas; se gastan en potenciadores, continuaciones, vidas y piezas del Armario.' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'El Viaje',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'El Viaje', text: 'El mapa de los 2.000 niveles, un largo paseo construido con ladrillos a través de 167 aldeas. Es la pestaña central, más elevada. Consulta [El Viaje y sus aldeas](help:journey-and-villages).' },
              { term: 'Aldea', text: 'Doce tableros del mapa, cada aldea construida con ladrillos de juguete en su propio estilo (la última tiene ocho). Tiene hasta 36 estrellas.' },
              { term: 'Ciudad Jardín', text: 'La primera aldea, niveles 1 a 12, donde se enseña cada idea nueva. Después viene Clover Farm, niveles 13 a 24. Consulta [Tu primera semana](help:first-week).' },
              { term: 'Capítulo', text: 'Veinte niveles, que se usan para las insignias de capítulo, los tableros Jefe y los logros de Game Center. Capítulos y aldeas se cuentan por separado.' },
              { term: 'Recompensas por estrellas', text: 'La escalera de estrellas de cada aldea: 50 monedas, una Pista, 100 monedas y un Cohete, que se recogen a medida que crecen tus estrellas allí.' },
              { term: 'Cofre del viaje', text: 'Un cofre del camino. Tócalo para ver qué contiene; al llegar a él, la tarjeta de victoria te paga sus monedas y potenciadores.' },
              { term: 'Regalo de aldea', text: 'Un regalo con temporizador en el mapa; su insignia cuenta el tiempo hasta que está listo.' },
              { term: 'Globo regalo', text: 'Pasa flotando de vez en cuando. Un vídeo opcional lo atrapa a cambio de monedas o de un rato breve con potenciadores gratis.' },
              { term: 'Todas las aldeas', text: 'El atlas de todas las aldeas como tarjetas, filtradas por en curso, terminadas o bloqueadas.' },
              { term: 'Mi nivel', text: 'El botón con forma de chincheta que devuelve el mapa a tu nivel actual.' },
            ],
          },
        ],
      },
      {
        id: 'rewards',
        title: 'Recompensas y eventos',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Ladrillo diario', text: 'El primer tablero que superas cada día te da 100 monedas, que se recogen solas en Inicio. Consulta [El Ladrillo diario y las rachas de días](help:rewards-and-events#daily).' },
              { term: 'Racha de días', text: 'La llama de Inicio: los días seguidos en los que has superado un tablero, con recompensas a los 3, 7, 14, 30, 60 y 100 días.' },
              { term: 'Salvarrachas', text: 'Se gana con las recompensas por racha. Recupera gratis un día perdido en el plazo de una semana; puedes tener dos.' },
              { term: 'Rueda', text: 'Un giro gratis al día para ganar monedas o un potenciador, desde su botón en Inicio. Consulta [La Rueda](help:rewards-and-events#wheel).' },
              { term: 'Misiones', text: 'Tres cosas para hoy y tres para la semana, cada una con su recompensa. Consulta [Misiones](help:rewards-and-events#missions).' },
              { term: 'Pase Ladrillo', text: 'Una temporada de 30 grados por la que subes superando niveles nuevos, con un camino Gratis para todo el mundo y un camino Premium que puedes comprar. Consulta [El Pase Ladrillo](help:rewards-and-events#pass).' },
              { term: 'Eventos', text: 'Van y vienen según un calendario, y aparecen como un cartel en Inicio y una insignia en el Viaje. Algunos duplican o triplican las monedas por superar un tablero.' },
              { term: 'Rescate de amigos, Carrera del pueblo, Brick Royale, Carrera del equipo', text: 'Carreras y rescates que van en paralelo al Viaje. Cada uno se puede desactivar en **Ajustes › Juego › Funciones del juego**. Consulta [Eventos y carreras](help:rewards-and-events#events).' },
              { term: 'Hucha', text: 'Se llena de monedas a medida que superas niveles nuevos; cuando está lista, puedes abrirla por un precio pequeño. Consulta [Qué hay en la Tienda](help:shop-and-purchases#shelves).' },
              { term: 'Cine de ladrillos', text: 'Un tablero de casillas de premio en el Viaje; cada vídeo opcional da la vuelta a una casilla.' },
              { term: 'Ranking', text: 'La pestaña de la clasificación histórica, abierta desde el nivel 21. Consulta [Ranking y Game Center](help:rewards-and-events#leaders).' },
              { term: 'Quitar anuncios', text: 'Una compra única que convierte cada botón Ver en **Recoger premio**, con los mismos límites diarios. Consulta [Quitar anuncios y el Pase Ladrillo](help:shop-and-purchases#remove-ads).' },
            ],
          },
        ],
      },
      {
        id: 'friends',
        title: 'Los amigos, la Colección y tú',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Los nueve amigos', text: 'Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry y Poppy: amigos de ladrillo de juguete que te animan con bocadillos de texto. Consulta [Conoce a los amigos](help:meet-the-friends).' },
              { term: 'Amigo anfitrión', text: 'El amigo de la aldea en el marco redondo de la cabecera del tablero, vestido para esa aldea. Tócalo y se reirá o te saludará.' },
              { term: 'Perfil', text: 'Se abre desde tu avatar: tu nombre, tu nivel, tu bandera y tus estadísticas, con la versión del juego al pie. Consulta [Tu Perfil](help:friends-and-wardrobe#profile).' },
              { term: 'Colección', text: 'Se abre en el nivel 95: Cartas de ladrillo, Insignias de capítulo, Recuerdos y Cartas de temporada. Consulta [La Colección](help:friends-and-wardrobe#collection).' },
              { term: 'Chispas', text: 'Se dan por las Cartas de temporada repetidas; con tres eliges una carta que te falte.' },
              { term: 'Armario', text: 'Looks, bandejas, paletas, acabados de ladrillo y más. Cambian el aspecto del juego, nunca cómo se juega, y las piezas de accesibilidad son siempre gratis. Consulta [El Armario](help:friends-and-wardrobe#wardrobe).' },
            ],
          },
        ],
      },
      {
        id: 'settings',
        title: 'Ajustes y accesibilidad',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Modo daltónico', text: 'Estampa una forma en cada ladrillo, puerta y objetivo para que el color nunca sea la única pista. Activado desde el principio. Consulta [Símbolos para daltonismo](help:vision-hearing-and-motion#colour-blind).' },
              { term: 'Tablero de alto contraste', text: 'Un suelo casi negro, contornos blancos, símbolos grandes y contornos de puerta gruesos. Consulta [Tablero de alto contraste](help:vision-hearing-and-motion#contrast).' },
              { term: 'Velocidad de animación', text: 'Lo rápido que las piezas se cambian, caen y desaparecen, del 50 % al 200 %.' },
              { term: 'Confirmar cambios', text: 'Con VoiceOver, Control por voz, Control por botón o un teclado, cada movimiento se elige dos veces antes de jugarse. Consulta [Confirmar cambios](help:voice-control-switch-control-keyboard#hold-to-confirm).' },
              { term: 'Sonido de fila', text: 'Añade la acción **Escuchar la fila** al tablero: un tono suave por pieza, un tono distinto por cada símbolo de color.' },
              { term: 'Rotor', text: 'Una herramienta de VoiceOver para saltar entre piezas: Piezas que combinan, Especiales, Objetivos, Bloqueos y Puertas. Consulta [Rotores](help:voiceover#rotors).' },
              { term: 'Juego rápido', text: 'Tras ganar, pasa directamente al siguiente tablero en lugar de volver al mapa. Consulta [La pestaña Juego](help:settings#game).' },
              { term: 'Funciones del juego', text: 'En **Ajustes › Juego**: desactiva las carreras, los rescates o las ofertas del mapa que prefieras no ver. No pierdes nada de lo que has ganado.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '¿Buscas una palabra que no está aquí? Usa la función Buscar de tu navegador en esta página, o pregunta en [Ayuda y soporte](/community/c/help), y la añadiremos.',
          },
        ],
      },
    ],
    related: ['welcome', 'playing-a-board', 'bricks-specials-and-blockers', 'blockers-encyclopedia', 'special-bricks-and-combos', 'common-questions'],
  },
];
