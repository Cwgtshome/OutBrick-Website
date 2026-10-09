import type { HelpArticle } from '../../model.ts';

/** La estantería de accesibilidad, en español. Comprobado con la 5.1.1 (68). */
export const accessibilityArticles: HelpArticle[] = [
  {
    slug: 'accessibility',
    category: 'accessibility',
    cover: 'settings-a11y',
    title: 'Accesibilidad en OutBrick: empieza aquí',
    summary:
      'Todas las formas en que OutBrick se adapta a ti, de VoiceOver y Control por botón a los símbolos para daltonismo, un tablero de alto contraste, animaciones más lentas y ningún temporizador, con un punto de partida según lo que necesites.',
    keywords: 'accesible inclusivo discapacidad ciego ceguera baja visión sordo sordera motricidad daltónico daltonismo dislexia lector de pantalla',
    sections: [
      {
        id: 'overview',
        title: 'Hecho para jugar a tu manera',
        blocks: [
          {
            t: 'p',
            text: 'OutBrick es un puzle tranquilo **sin reloj en ninguna parte**: puedes tomarte todo el tiempo que quieras en cada movimiento. Cada tablero se puede leer y jugar con [VoiceOver](help:voiceover), con [Control por voz, Control por botón o un teclado](help:voice-control-switch-control-keyboard), y el juego tiene sus propios [ajustes de accesibilidad](#where) para la vista, el movimiento y el alcance de las manos. Además, respeta los ajustes de accesibilidad que ya hayas elegido en tu iPhone o iPad.',
          },
          {
            t: 'list',
            items: [
              '**El color nunca es la única pista.** Los símbolos para daltonismo están activados desde el principio, y cada ladrillo, puerta y objetivo puede llevar una forma. Consulta [Vista, oído y movimiento](help:vision-hearing-and-motion).',
              '**Cada pieza tiene nombre.** VoiceOver lee el tipo, el color y el estado de cada pieza, por ejemplo «Rayo de línea, azul, horizontal, despeja su fila», y un ladrillo bocabajo nunca revela su color.',
              '**Muévete a tu manera.** Desliza o cambia piezas con el dedo, con las acciones de VoiceOver, diciendo «Deslizar Rojo 14 hacia la izquierda», con botones o con las teclas de flecha.',
              '**Tiempo para pensar.** Sin temporizadores, con un ajuste de Velocidad de animación del 50 % al 200 % y la opción **Confirmar cambios** para que nada se juegue por accidente.',
              '**Nada que oír que no puedas ver también.** Los amigos hablan con bocadillos de texto, no con voces, y cada sonido tiene algo en pantalla que lo acompaña.',
            ],
          },
        ],
      },
      {
        id: 'where',
        title: 'Dónde están los ajustes',
        blocks: [
          {
            t: 'steps',
            items: [
              'En **Inicio** o en el **Viaje**, toca el engranaje de la esquina superior derecha. Con VoiceOver, es el botón **Ajustes**.',
              'En la parte superior de Ajustes, elige la pestaña **Accesibilidad**. (La pestaña **Juego** contiene el sonido, la música, la vibración y las notificaciones; consulta [Todos los ajustes, explicados](help:settings).)',
              'Cambia una cosa cada vez y juega un tablero que conozcas para notar la diferencia.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'La pantalla de Ajustes en la pestaña Accesibilidad. La Velocidad de animación está al 100 %, con opciones del 50 % al 200 %. El Detalle de los avisos está en Estándar, con Breve y Completo a cada lado. Debajo hay interruptores de Sí y No para Modo daltónico (activado), Tablero de alto contraste, Bandeja para zurdos, Confirmar cambios y Sonido de fila (todos desactivados).',
            caption: 'Ajustes › Accesibilidad. La línea bajo cada control es también lo que VoiceOver dice como su sugerencia.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Puedes abrir esta pestaña directamente: busca «Ajustes de accesibilidad» en Spotlight y elige el resultado de OutBrick.',
          },
          {
            t: 'table',
            caption: 'La pestaña Accesibilidad, de arriba abajo',
            head: ['Ajuste', 'Qué hace', 'Valor inicial'],
            rows: [
              ['Velocidad de animación', 'Lo rápido que las piezas se cambian, caen y desaparecen: 50 %, 75 %, 100 %, 150 % o 200 %. Más lento es más fácil de seguir.', '100 %'],
              ['Detalle de los avisos', 'Cuánto dice VoiceOver después de cada movimiento: Breve, Estándar o Completo.', 'Estándar'],
              ['Modo daltónico', 'Estampa una forma en cada ladrillo para que el color nunca sea la única diferencia.', 'Activado'],
              ['Tablero de alto contraste', 'Un suelo oscuro liso, contornos blancos, símbolos de color grandes y marcos de puerta gruesos.', 'Desactivado'],
              ['Bandeja para zurdos', 'Pone los potenciadores bajo tu pulgar izquierdo y la Pausa a la derecha.', 'Desactivado'],
              ['Confirmar cambios', 'Con Control por botón, VoiceOver, Control por voz o un teclado, eliges cada movimiento dos veces antes de que se juegue.', 'Desactivado'],
              ['Sonido de fila', 'Añade la acción **Escuchar la fila** al tablero: un tono corto y suave por pieza, un tono distinto por cada símbolo de color.', 'Desactivado'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'El Modo daltónico se guarda en iCloud y te sigue a tus otros dispositivos. Los demás ajustes del tablero se quedan en el dispositivo donde los elegiste, porque lo que va bien en un iPad puede no ir bien en un iPhone.',
          },
        ],
      },
      {
        id: 'starting-points',
        title: 'Un punto de partida según lo que necesites',
        blocks: [
          { t: 'p', text: 'Cada persona es distinta, así que tómate esto como sugerencias que probar, no como reglas.' },
          {
            t: 'table',
            head: ['Si…', 'Prueba primero esto'],
            rows: [
              ['eres ciego o usas VoiceOver', 'Lee [Jugar con VoiceOver](help:voiceover). Para empezar, deja el **Detalle de los avisos** en Estándar, y prueba el **Sonido de fila** para recorrer una fila de oído.'],
              ['tienes baja visión', 'Activa el **Tablero de alto contraste**, sube el **Texto más grande** en los Ajustes del iPhone y mantén pulsada la cabecera o la bandeja del tablero para ampliarla.'],
              ['ves los colores de otra forma', 'Deja activado el **Modo daltónico**: cada color tiene su propia forma. El alto contraste hace esas formas más grandes.'],
              ['eres sensible al movimiento o a los destellos', 'Activa **Reducir movimiento** y **Atenuar luces intermitentes** en los Ajustes del iPhone, y pon la **Velocidad de animación** al 75 % o al 50 %.'],
              ['juegas con una mano o tienes un alcance limitado', 'Prueba la **Bandeja para zurdos** si sujetas el teléfono con la mano izquierda, y **Confirmar cambios** si un desliz del dedo pudiera jugar un movimiento.'],
              ['usas botones, tu voz o un teclado', 'Lee [Control por voz, Control por botón y teclados](help:voice-control-switch-control-keyboard).'],
              ['eres sordo o tienes pérdida auditiva', 'Nada en OutBrick depende del sonido. Los amigos hablan con bocadillos de texto, y la Vibración te deja notar cómo caen los movimientos.'],
              ['te gusta tener tiempo para pensar', 'No hay temporizador en ninguna parte. Baja la **Velocidad de animación** y usa pistas cuando quieras.'],
            ],
          },
        ],
      },
      {
        id: 'system',
        title: 'Los ajustes del iPhone y del iPad que OutBrick respeta',
        blocks: [
          { t: 'p', text: 'Están en la app **Ajustes** del iPhone o del iPad, dentro de **Accesibilidad**, y OutBrick responde a ellos por sí solo.' },
          {
            t: 'defs',
            items: [
              { term: 'VoiceOver', text: 'Cada tablero, menú y tarjeta tiene etiquetas. Consulta [Jugar con VoiceOver](help:voiceover).' },
              { term: 'Texto más grande', text: 'El texto crece hasta el mayor tamaño de accesibilidad, y las pantallas se reorganizan en columna para que nada quede cortado. La cabecera y la bandeja del tablero admiten el visor de contenido grande: mantén pulsado para ver una etiqueta ampliada.' },
              { term: 'Texto en negrita', text: 'Las pantallas se redibujan en negrita en cuanto lo activas.' },
              { term: 'Aumentar contraste y Reducir transparencia', text: 'Los controles de aspecto de cristal, como los interruptores Sí/No, se vuelven opacos y con bordes más marcados.' },
              { term: 'Reducir movimiento', text: 'El movimiento de reposo del tablero se detiene, los brillos se quedan quietos, las pistas destellan en lugar de moverse y los bichitos se quedan en casa.' },
              { term: 'Atenuar luces intermitentes', text: 'Los destellos a pantalla completa bajan a un tercio de su intensidad y nunca se suceden a menos de un tercio de segundo.' },
              { term: 'Diferenciar sin color', text: 'Activa los símbolos para daltonismo, aunque los hayas desactivado en el juego.' },
              { term: 'Inversión inteligente', text: 'Los amigos, las banderas y las ilustraciones conservan sus colores reales.' },
              { term: 'Control por voz y Control por botón', text: 'Los dos permiten jugar todos los tableros. Consulta [Control por voz, Control por botón y teclados](help:voice-control-switch-control-keyboard).' },
            ],
          },
        ],
      },
      {
        id: 'no-timers',
        title: 'Sin relojes ni prisas',
        blocks: [
          {
            t: 'p',
            text: 'En OutBrick no hay temporizador en ningún tablero, menú ni evento. Cada tablero te da un número de **movimientos**, y ese es el único límite. Un movimiento solo cuenta cuando de verdad hace algo: un cambio que no forma ninguna combinación vuelve a su sitio y no gasta movimiento.',
          },
          {
            t: 'p',
            text: 'Si te atascas, pide una pista. Con VoiceOver, el toque doble con dos dedos en un tablero te da una pista gratis, sin gastar un potenciador Pista. Consulta [Potenciadores, pistas y Pausa](help:boosters-and-pause).',
          },
        ],
      },
      {
        id: 'testing',
        title: 'Lo que aún estamos probando',
        blocks: [
          {
            t: 'p',
            text: 'Preferimos decírtelo claramente antes de que lo descubras por las malas. El equipo ha jugado con VoiceOver y con Control por voz en un iPhone real. Estas funciones se han construido y comprobado en el código, pero todavía nadie las ha jugado de principio a fin a mano en un dispositivo:',
          },
          {
            t: 'list',
            items: [
              'Control por botón en los tableros de deslizar y combinar.',
              'Acceso total con teclado en iPad y Mac.',
              'El visor de contenido grande en la cabecera y la bandeja del tablero con el tamaño de texto más grande.',
              'Apple TV y Apple Watch, que aún no tienen el trabajo de accesibilidad del nuevo tablero.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: 'Puedes ayudar',
            text: 'Si juegas con alguna de estas funciones, cuéntanos qué funciona y qué no en la [categoría Accesibilidad](/community/c/accessibility). Es la que el equipo lee con más atención.',
          },
        ],
      },
      {
        id: 'report',
        title: 'Avísanos cuando algo te estorbe',
        blocks: [
          {
            t: 'p',
            text: 'En el juego, **Ajustes › Informar de un error** abre un informe en Safari con tu dispositivo, la versión de iOS, la versión del juego, el nivel y la tecnología de apoyo que tengas activada ya rellenados. Nunca envía tu nombre ni tu cuenta. Añade las palabras exactas que dijo VoiceOver, o el control que no respondió. Consulta [Cómo informar bien de un error](help:reporting-bugs).',
          },
        ],
      },
    ],
    related: ['voiceover', 'vision-hearing-and-motion', 'voice-control-switch-control-keyboard', 'settings'],
  },

  {
    slug: 'voiceover',
    category: 'accessibility',
    cover: 'board-slide',
    title: 'Jugar con VoiceOver',
    summary:
      'Cómo se lee el tablero, cómo deslizar y cambiar piezas con acciones, los rotores, cada gesto, lo que oyes después de un movimiento y cómo conseguir una pista gratis.',
    keywords: 'lector de pantalla ciego rotor toque mágico acciones deslizar toque doble frotar gestos',
    sections: [
      {
        id: 'start',
        title: 'Antes de empezar',
        blocks: [
          {
            t: 'steps',
            items: [
              'Activa VoiceOver en **Ajustes › Accesibilidad › VoiceOver** del iPhone, o pídeselo a Siri: «Activa VoiceOver». Si configuras la **Función rápida de accesibilidad**, puedes pulsar tres veces el botón lateral para activarlo y desactivarlo.',
              'Abre OutBrick. Primero se lee Inicio; el botón **Jugar al nivel** empieza tu tablero actual, y un toque doble con dos dedos en Inicio hace lo mismo.',
              'La primera vez que te encuentras con una idea nueva, una breve tarjeta de aprendizaje te la explica. Mientras se muestra, es lo único que hay en pantalla: toca dos veces para empezar a jugar.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'En **Ajustes › Accesibilidad** del juego, el **Detalle de los avisos** decide cuánto oyes después de cada movimiento. Estándar es un buen punto de partida; puedes cambiarlo cuando quieras.',
          },
        ],
      },
      {
        id: 'layout',
        title: 'Cómo se lee el tablero',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un tablero de Slide & Match en una playa, nivel 25. La cabecera muestra 5 vidas, 15 movimientos restantes, una barra de estrellas con una encendida, objetivos de 1 ladrillo amarillo y 3 azules, y el amigo anfitrión con gorra de marinero. El tablero tiene ladrillos rosas, amarillos, naranjas y azules, cada uno con la forma de su color, puertas amarillas, naranjas y azules en los bordes y una tapa dorada con cerradura sobre una fila de ladrillos. Abajo, la bandeja: Pausa, luego Pista, Cohete y OVNI marcados como gratis, y Deshacer con 6.',
            caption: 'Un tablero, de arriba abajo: la cabecera, la cuadrícula y la bandeja. VoiceOver lee primero el resumen de la cabecera y después la cuadrícula, fila por fila.',
          },
          {
            t: 'list',
            items: [
              '**Primero viene el resumen del Tablero.** Lee el nivel, su nombre, la fase, los objetivos y los movimientos que quedan. Tócalo dos veces para oír todo el tablero leído en voz alta con una pista.',
              '**Después, cada casilla, fila por fila,** desde arriba a la izquierda. Los huecos de la forma del tablero se saltan. El valor de cada casilla es su posición, por ejemplo «Fila 3, columna 2».',
              '**Las piezas se nombran por tipo, color y estado,** nunca solo por el color: «Bomba, rojo», «Caja, 2 capas», «Ladrillo, amarillo, bloqueado, una línea que lo incluya lo libera», «Ladrillo largo, rojo, 2 de alto».',
              '**Los detalles van después de la pieza:** «delante de la puerta: rojo», «puerta: rojo, a la izquierda», «entrada de portal debajo», «cuenta para narcisos, amarillo» cuando un objetivo la necesita. Una casilla vacía dice «Vacío».',
              '**Las puertas son elementos propios,** por ejemplo «Puerta: rojo, 2 casillas de ancho, lado izquierdo, filas de la 3 a la 4», y su valor dice si están abiertas, heladas, si necesitan más ladrillos o si están cerradas para siempre.',
              '**Los ladrillos bocabajo nunca dicen su color:** «Ladrillo bocabajo, se da la vuelta cuando un ladrillo de al lado sale del tablero». Es juego limpio, no una etiqueta que falta.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Las piezas que puedes mover son botones. Los obstáculos y los elementos fijos, como la piedra o las cajas, se leen como texto, así sabes de un vistazo qué se puede mover.',
          },
        ],
      },
      {
        id: 'moving',
        title: 'Hacer un movimiento',
        blocks: [
          { t: 'p', text: 'Hay dos formas de mover, y puedes combinarlas.' },
          { t: 'h3', text: 'Con acciones (lo más rápido)' },
          {
            t: 'steps',
            items: [
              'Pon VoiceOver sobre una pieza.',
              'Desliza hacia arriba o hacia abajo para oír sus acciones, como «Deslizar hacia la izquierda y salir por la puerta: rojo», «Deslizar hacia arriba hasta el final, 3 casillas» o «Cambiar hacia arriba con Ladrillo, azul». Los cambios que funcionan van primero; un cambio que no formaría nada dice «sin combinación».',
              'Toca dos veces para jugar la acción que has oído.',
            ],
          },
          { t: 'h3', text: 'Eligiendo una pieza y luego una dirección' },
          {
            t: 'steps',
            items: [
              'Toca dos veces una pieza. VoiceOver dice «Elegido. Elige una dirección para deslizarlo o un vecino para cambiarlo».',
              'Aparecen controles de dirección sobre sus vecinos. Ve a uno y tócalo dos veces.',
              '¿Has cambiado de idea? Toca dos veces la misma pieza («Soltado») o haz el gesto de frotar con dos dedos.',
            ],
          },
          {
            t: 'table',
            caption: 'Las acciones de una pieza, en el orden en que las oyes',
            head: ['Acción', 'Cuándo la oyes'],
            rows: [
              ['Activar especial', 'En un ladrillo especial que se puede activar donde está.'],
              ['Deslizar…', 'Hasta tres por dirección (arriba, abajo, izquierda, derecha): hasta dónde llega y si sale por una puerta o por un portal.'],
              ['Cambiar…', 'Con cada vecino. Los cambios que combinan van primero; «sin combinación» marca el resto.'],
              ['Leer el tablero', 'El nivel, la fase, los objetivos, los movimientos que quedan y una pista.'],
              ['Pista', 'Muestra y dice el mejor movimiento.'],
              ['Escuchar la fila', 'Solo con el **Sonido de fila** activado: un tono suave por pieza a lo largo de la fila.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: '¿Te preocupa jugar un movimiento sin querer? Activa **Confirmar cambios**. La primera elección pregunta «¿…? Elígelo otra vez para confirmar», y el movimiento solo se juega si lo vuelves a elegir en menos de cinco segundos.',
          },
        ],
      },
      {
        id: 'rotors',
        title: 'Rotores: ve directo a lo que importa',
        blocks: [
          {
            t: 'p',
            text: 'Gira dos dedos sobre la pantalla para elegir un rotor y luego desliza hacia arriba o hacia abajo para saltar entre las piezas que coinciden.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Piezas que combinan', text: 'Piezas con un movimiento que forma una combinación ahora mismo.' },
              { term: 'Especiales', text: 'Bombas, rayos de línea y los demás ladrillos especiales.' },
              { term: 'Objetivos', text: 'Las piezas que piden tus objetivos.' },
              { term: 'Bloqueos', text: 'Cajas, piedra, hielo, candados, musgo y cualquier otra cosa que estorbe.' },
              { term: 'Puertas', text: 'Todas las puertas del tablero, cuando las tiene. El primer tablero con puertas que juegues te habla de este rotor una vez.' },
            ],
          },
          {
            t: 'p',
            text: 'Cada elemento tiene además **Más contenido** (en el rotor, elige Más contenido y desliza hacia arriba o hacia abajo): el especial, la puerta, el obstáculo, las capas de gelatina de debajo y si algún objetivo necesita esa pieza.',
          },
        ],
      },
      {
        id: 'gestures',
        title: 'Gestos, pantalla por pantalla',
        blocks: [
          {
            t: 'table',
            head: ['Gesto', 'En un tablero', 'En el mapa del Viaje', 'En otras pantallas'],
            rows: [
              ['{{Toque doble con dos dedos}} (toque mágico)', 'Una pista gratis. El mejor movimiento destella y se dice en voz alta; no se gasta tu potenciador Pista.', 'Dice la guía: tu aldea, los niveles superados, tu siguiente nivel y las estrellas que faltan para la próxima recompensa.', 'Inicio: juega tu siguiente nivel. Tienda, Ranking y Pase: activa o desactiva la música.'],
              ['{{Frotar con dos dedos}} (salir)', 'Nunca te saca del tablero, así que nunca puede costarte una vida. Cierra una tarjeta, suelta una pieza elegida, aparta una tarjeta de aprendizaje o abre la Pausa, en ese orden.', 'Cierra una tarjeta abierta.', 'Pulsa el botón de cerrar de la pantalla o vuelve atrás.'],
              ['{{Deslizar tres dedos}}', '—', 'Avanza de aldea en aldea y dice su nombre.', 'Desplaza.'],
              ['{{Deslizar arriba o abajo}}', 'Recorre las acciones de una pieza.', 'Recorre **Dónde estoy** e **Ir a mi siguiente nivel**.', 'Ajusta un control.'],
            ],
          },
        ],
      },
      {
        id: 'announcements',
        title: 'Lo que oyes después de un movimiento',
        blocks: [
          {
            t: 'p',
            text: 'En cuanto se decide un movimiento, VoiceOver dice una frase sobre él, antes de que termine la animación. Lo urgente va primero.',
          },
          {
            t: 'list',
            items: [
              'Adónde ha ido un ladrillo: «Deslizado 3 casillas, hasta fila 2, columna 4», «Por el portal, sale en…», «Salió por su puerta: 1 (rojo)».',
              'Qué ha cambiado: «Se dio la vuelta: rojo y azul», «La tapa con contador se abrió. Sus ladrillos ya se mueven», «Se abren nuevas puertas».',
              'Qué se ha despejado: piezas, cascadas, combos y los especiales creados, y qué objetivos han avanzado.',
              'Los movimientos que quedan, con un aviso a los cinco, tres y uno: «Solo: 5 movimientos».',
              'El final: «Todos los objetivos cumplidos. Nivel completado» o «Sin movimientos».',
              'Si no hay ningún movimiento posible, el tablero se mezcla y dice «El tablero se ha mezclado. Te toca.»',
            ],
          },
          {
            t: 'table',
            caption: 'Ajustes › Accesibilidad › Detalle de los avisos',
            head: ['Opción', 'Qué oyes'],
            rows: [
              ['Breve', 'Lo que se ha despejado, los objetivos que se han cumplido y los movimientos que quedan.'],
              ['Estándar', 'Además, los especiales que has creado y los objetivos que han avanzado.'],
              ['Completo', 'Además, la cuenta de cada objetivo después de cada movimiento.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Un cambio que no forma nada vuelve a su sitio y dice «Sin combinación, vuelve atrás. No gasta movimiento». No has perdido nada.',
          },
        ],
      },
      {
        id: 'hints',
        title: 'Pistas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Cómo pedirla:** con el toque doble con dos dedos, con la acción **Pista** o con {{H}} en un teclado. La pista se dice en voz alta, por ejemplo «Pista: desliza Ladrillo, rojo, fila 1, columna 3, hacia la izquierda, y sale por su puerta», y VoiceOver se coloca sobre esa pieza.',
              '**Gratis:** una pista que pides con el toque doble con dos dedos o con la acción nunca gasta un potenciador Pista de la bandeja.',
              '**Pistas de espera:** si te detienes un rato, puede que oigas una pista en voz baja sin que se mueva tu foco.',
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'Orientarte en el Viaje',
        blocks: [
          {
            t: 'list',
            items: [
              'Cada elemento del mapa tiene dos acciones: **Dónde estoy** e **Ir a mi siguiente nivel**, que desplaza el mapa y pone VoiceOver sobre tu siguiente nivel.',
              'El toque doble con dos dedos dice la guía, por ejemplo «Ciudad Jardín, 7 de 12 niveles superados. Siguiente: nivel 8. 3 estrellas para la recompensa de la aldea.»',
              'Un nivel bloqueado dice a qué distancia está: «4 más para desbloquear».',
              'Desliza tres dedos para avanzar de aldea en aldea.',
            ],
          },
          { t: 'p', text: 'Más sobre el mapa en [El Viaje y sus aldeas](help:journey-and-villages).' },
        ],
      },
      {
        id: 'tips',
        title: 'Consejos del equipo',
        blocks: [
          {
            t: 'list',
            items: [
              'Con VoiceOver activado y la **Velocidad de animación** al 100 %, los movimientos se juegan una vez y media más rápido, para que no tengas que esperar. Si eliges cualquier otra velocidad, el juego usa exactamente la tuya.',
              'Activa el **Sonido de fila** para oír una fila entera como tonos: cada símbolo de color tiene su propio tono, los obstáculos hacen un golpe grave y las casillas vacías son silencio. Necesita los efectos de sonido activados y el interruptor de tono/silencio en tono.',
              '¿Te has perdido? Toca dos veces el resumen del **Tablero** de arriba, o usa **Leer el tablero**.',
              'Menús: cada botón lee sus palabras impresas, y las tarjetas mantienen a VoiceOver dentro hasta que las cierras, así que nunca acabas detrás de una tarjeta.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            title: '¿Algo no se ha leído bien?',
            text: 'Cuéntanos el nivel, la pieza y las palabras exactas que dijo VoiceOver en la [categoría Accesibilidad](/community/c/accessibility), o usa **Ajustes › Informar de un error** en el juego.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voice-control-switch-control-keyboard', 'playing-a-board', 'reporting-bugs'],
  },

  {
    slug: 'voice-control-switch-control-keyboard',
    category: 'accessibility',
    cover: 'board-shapes',
    title: 'Control por voz, Control por botón y teclados',
    summary:
      'Juega todos los tableros con la voz, con uno o varios botones o con las teclas de flecha, y usa Confirmar cambios y la Bandeja para zurdos para jugar con comodidad.',
    keywords: 'comandos de voz control por botón acceso con botones acceso total con teclado teclas de flecha motricidad destreza una mano',
    sections: [
      {
        id: 'voice-control',
        title: 'Control por voz',
        blocks: [
          {
            t: 'p',
            text: 'Activa Control por voz en **Ajustes › Accesibilidad › Control por voz** del iPhone. Cada pieza del tablero responde a tres nombres, en los que el número es su posición contando fila por fila desde arriba a la izquierda:',
          },
          {
            t: 'list',
            items: [
              'su color y su número: «Toca **Rojo 14**»',
              '«Toca **Pieza 14**»',
              'su nombre completo y su número.',
            ],
          },
          {
            t: 'steps',
            items: [
              'Di «Toca Rojo 14» para elegir la pieza.',
              'Di la dirección: «Toca **Deslizar hacia la izquierda**», o simplemente «Toca **Izquierda**». Para un cambio puedes decir «Toca **Cambiar hacia arriba**» o «Toca **Arriba**».',
              'Di «Mostrar números» en cualquier momento para ver un número sobre todo lo que puedes tocar.',
            ],
          },
          {
            t: 'list',
            items: [
              'Los ladrillos bocabajo responden a «Bocabajo 14», así su color sigue oculto.',
              'Los botones de los menús responden primero a las palabras que llevan escritas.',
              'Las opciones de Velocidad de animación responden tanto al porcentaje como a la palabra: «Mitad de velocidad», «Más lento», «Velocidad normal», «Más rápido», «Doble de velocidad».',
            ],
          },
        ],
      },
      {
        id: 'switch-control',
        title: 'Control por botón',
        blocks: [
          {
            t: 'steps',
            items: [
              'Recorre hasta una pieza y selecciónala para elegirla.',
              'Recorre hasta un vecino o hasta uno de los controles de dirección que aparecen, y selecciónalo para deslizar o cambiar.',
              'Vuelve a seleccionar la pieza elegida para soltarla.',
            ],
          },
          {
            t: 'p',
            text: 'En el tablero, Control por botón funciona igual que VoiceOver: cada pieza es un elemento propio, en orden de lectura, y aparecen los mismos controles de dirección. Activa **Confirmar cambios** si recorres los elementos deprisa.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Control por botón en los tableros de deslizar y combinar se ha construido y comprobado en el código, pero el equipo todavía no lo ha jugado de principio a fin en un dispositivo. Si juegas con botones, nos encantaría saber qué tal te va en la [categoría Accesibilidad](/community/c/accessibility).',
          },
        ],
      },
      {
        id: 'keyboard',
        title: 'Teclados en iPad y Mac',
        blocks: [
          { t: 'p', text: 'Con un teclado físico, el tablero tiene sus propias teclas. En el iPad, mantén pulsada {{⌘}} para verlas en una lista.' },
          {
            t: 'table',
            head: ['Tecla', 'Qué hace'],
            rows: [
              ['{{←}} {{→}} {{↑}} {{↓}}', 'Mueve un cursor blanco por el tablero, saltándose los huecos. Con una pieza elegida, la desliza o la cambia en esa dirección.'],
              ['{{Espacio}} o {{Retorno}}', 'Elige la pieza que está bajo el cursor, o la suelta.'],
              ['{{H}}', 'Muestra y dice una pista.'],
              ['{{Esc}}', 'Suelta la pieza elegida. Fuera del tablero, cierra los Ajustes y las tarjetas.'],
            ],
          },
          {
            t: 'p',
            text: 'En los menús, los botones del juego reciben el foco del teclado, y {{Retorno}} o {{Espacio}} los pulsan. Con Acceso total con teclado se pasa de uno a otro con {{Tab}}.',
          },
        ],
      },
      {
        id: 'hold-to-confirm',
        title: 'Confirmar cambios',
        blocks: [
          {
            t: 'p',
            text: 'En **Ajustes › Accesibilidad**, **Confirmar cambios** te pide elegir cada movimiento dos veces. La primera vez oyes (o ves) el movimiento con «Elígelo otra vez para confirmar»; vuelve a elegir el mismo movimiento en menos de cinco segundos y se juega. Cualquier otra cosa lo cancela. Funciona con VoiceOver, Control por voz, Control por botón y el teclado.',
          },
        ],
      },
      {
        id: 'left-handed',
        title: 'Bandeja para zurdos',
        blocks: [
          {
            t: 'p',
            text: 'La bandeja del pie del tablero tiene la Pausa a la izquierda y los potenciadores y Deshacer a la derecha. La **Bandeja para zurdos** la invierte, así que los potenciadores quedan bajo tu pulgar izquierdo y la Pausa pasa a la derecha.',
          },
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Un tablero de Slide & Match en una playa, nivel 25. La cabecera muestra 5 vidas, 15 movimientos restantes, una barra de estrellas con una encendida, objetivos de 1 ladrillo amarillo y 3 azules, y el amigo anfitrión con gorra de marinero. El tablero tiene ladrillos rosas, amarillos, naranjas y azules, cada uno con la forma de su color, puertas amarillas, naranjas y azules en los bordes y una tapa dorada con cerradura sobre una fila de ladrillos. Abajo, la bandeja: Pausa, luego Pista, Cohete y OVNI marcados como gratis, y Deshacer con 6.',
            caption: 'La bandeja para diestros (la predeterminada). La de zurdos es su reflejo.',
          },
        ],
      },
    ],
    related: ['voiceover', 'accessibility', 'playing-a-board', 'settings'],
  },

  {
    slug: 'vision-hearing-and-motion',
    category: 'accessibility',
    cover: 'board-contrast',
    title: 'Vista, oído y movimiento',
    summary:
      'Los símbolos para daltonismo y qué significa cada forma, el tablero de alto contraste, el texto más grande, Reducir movimiento, las luces intermitentes, el sonido, la vibración y el Sonido de fila.',
    keywords: 'daltonismo daltónico deuteranopia protanopia tritanopia símbolos formas contraste texto grande zoom mareo vestibular epilepsia fotosensible destellos sordo audición',
    sections: [
      {
        id: 'colour-blind',
        title: 'Símbolos para daltonismo',
        blocks: [
          {
            t: 'p',
            text: 'El **Modo daltónico** está activado desde el primer tablero. Cada ladrillo lleva estampada una forma según su color, los especiales de color llevan una pequeña insignia con su forma y los objetivos de la cabecera muestran la misma forma, así que puedes emparejar ladrillos y objetivos sin distinguir los colores.',
          },
          {
            t: 'table',
            caption: 'Cada color tiene su propia forma',
            head: ['Color', 'Forma'],
            rows: [
              ['Rojo', 'Círculo'],
              ['Naranja', 'Triángulo'],
              ['Amarillo', 'Cuadrado'],
              ['Verde', 'Rombo'],
              ['Azul', 'Signo más'],
              ['Morado', 'Estrella'],
              ['Rosa', 'Barra'],
              ['Turquesa', 'Hexágono'],
            ],
          },
          {
            t: 'list',
            items: [
              'Actívalo en **Ajustes › Accesibilidad › Modo daltónico**, en el menú de **Pausa** durante un tablero, o desde el **Centro de control** si añades el control de OutBrick.',
              'Los símbolos también se activan siempre que estén activados **Diferenciar sin color** en el iPhone o el **Tablero de alto contraste** del juego.',
              'Tu elección se guarda en iCloud, así que te sigue a tus otros dispositivos.',
            ],
          },
          {
            t: 'shots',
            items: [
              {
                id: 'board-slide',
                alt: 'Un tablero de Slide & Match en una playa, nivel 25. La cabecera muestra 5 vidas, 15 movimientos restantes, una barra de estrellas con una encendida, objetivos de 1 ladrillo amarillo y 3 azules, y el amigo anfitrión con gorra de marinero. El tablero tiene ladrillos rosas, amarillos, naranjas y azules, cada uno con la forma de su color, puertas amarillas, naranjas y azules en los bordes y una tapa dorada con cerradura sobre una fila de ladrillos. Abajo, la bandeja: Pausa, luego Pista, Cohete y OVNI marcados como gratis, y Deshacer con 6.',
                caption: 'Modo daltónico activado: cada color tiene una forma.',
              },
              {
                id: 'board-contrast',
                alt: 'El mismo tipo de tablero con el aspecto de alto contraste: un suelo casi negro, contornos blancos alrededor de cada ladrillo y grandes símbolos blancos.',
                caption: 'Tablero de alto contraste.',
              },
            ],
          },
        ],
      },
      {
        id: 'contrast',
        title: 'Tablero de alto contraste',
        blocks: [
          {
            t: 'p',
            text: '**Ajustes › Accesibilidad › Tablero de alto contraste** dibuja el tablero sobre un suelo casi negro con una cuadrícula tenue, pone un contorno blanco en cada pieza y un gran símbolo blanco en los ladrillos normales, y da a cada puerta un contorno grueso. Los colores de las puertas se comparan con el del suelo, y una puerta cuyo color se le parece demasiado recibe un contorno de dos tonos.',
          },
        ],
      },
      {
        id: 'text',
        title: 'Texto más grande y ampliación',
        blocks: [
          {
            t: 'list',
            items: [
              '**Texto más grande:** en **Ajustes › Accesibilidad › Pantalla y tamaño del texto › Texto más grande** del iPhone. El texto normal puede crecer a más del doble de su tamaño y los títulos a casi el doble, y las pantallas se reorganizan en columna para que nada quede cortado. Las pantallas de victoria y de Sin movimientos crecen menos, para que sigan cabiendo.',
              '**Visor de contenido grande:** con los tamaños más grandes, mantén pulsado un control de la cabecera o de la bandeja del tablero para ver una etiqueta ampliada, y luego levanta el dedo.',
              '**Texto en negrita** y **Zoom** funcionan en todo el juego.',
            ],
          },
        ],
      },
      {
        id: 'motion',
        title: 'Movimiento, velocidad de animación y destellos',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Velocidad de animación', text: 'En **Ajustes › Accesibilidad**: 50 %, 75 %, 100 %, 150 % o 200 %. Al 50 %, cada cambio, caída y despeje dura el doble, y así es más fácil seguir las cadenas.' },
              { term: 'Reducir movimiento', text: 'En **Ajustes › Accesibilidad › Movimiento** del iPhone. El movimiento de reposo del tablero se detiene, los brillos se quedan quietos, las pistas destellan en su sitio en lugar de moverse y las pantallas se funden en lugar de deslizarse.' },
              { term: 'Atenuar luces intermitentes', text: 'También en **Movimiento**. Los destellos a pantalla completa de los grandes combos bajan a un tercio de su intensidad y nunca se suceden a menos de un tercio de segundo; una mecha arde de forma constante en lugar de parpadear.' },
            ],
          },
        ],
      },
      {
        id: 'sound',
        title: 'Sonido, música, vibración y Sonido de fila',
        blocks: [
          {
            t: 'list',
            items: [
              '**Nada depende del oído.** Cada sonido de OutBrick tiene algo en pantalla que lo acompaña. Los amigos hablan con bocadillos de texto, no con voces, y los avisos de VoiceOver los dice tu propio VoiceOver.',
              '**Sonidos, Música y Vibración** tienen cada uno su interruptor en **Ajustes › Juego**, y también en el menú de Pausa durante un tablero. La Vibración solo aparece en los dispositivos que pueden vibrar.',
              'El **Sonido de fila** (Ajustes › Accesibilidad) añade la acción **Escuchar la fila** al tablero: una nota corta y suave por pieza, de izquierda a derecha, un tono por cada símbolo de color, con un timbre distinto para las formas redondas, puntiagudas y rectas. Los obstáculos hacen un golpe grave y las casillas vacías son un silencio.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'El Sonido de fila necesita los efectos de sonido activados y el interruptor de tono/silencio en tono. Si falta alguno de los dos, la acción te lo dice.',
          },
        ],
      },
    ],
    related: ['accessibility', 'voiceover', 'settings', 'bricks-specials-and-blockers'],
  },
];
