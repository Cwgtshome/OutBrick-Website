// Every word the emails say, in the site's five languages.
//
// The voice is the site's: warm, plain, a brick friend at the counter rather than a ticket
// system. Strings never contain markup; the templates add it, and values from a visitor reach
// these functions already escaped (HTML) or raw (the text/plain part), never both.
//
// German follows the site: "Sie" throughout, except the affiliate email, which uses "du" as the
// affiliate programme pages do.

export const emailLocales = ['en', 'fr', 'de', 'es', 'ja'] as const;
export type EmailLocale = (typeof emailLocales)[number];

export function isEmailLocale(value: unknown): value is EmailLocale {
  return typeof value === 'string' && (emailLocales as readonly string[]).includes(value);
}

type Promise4 = { title: string; body: string }[];

export type EmailCopy = {
  logoAlt: string;
  signoff: string;
  tagline: string;
  links: { support: string; privacy: string; appStore: string; careers: string; affiliates: string };
  contact: {
    subject: string;
    preheader: string;
    heading: (name: string) => string;
    intro: string;
    copyTitle: string;
    topic: string;
    message: string;
    device: string;
    add: string;
    meanwhile: string;
    cta: string;
    why: string;
  };
  careers: {
    subject: (role: string) => string;
    preheader: string;
    heading: (name: string) => string;
    intro: (role: string) => string;
    next: string;
    role: string;
    cta: string;
    why: string;
  };
  affiliate: {
    subject: string;
    preheader: string;
    heading: (name: string) => string;
    intro: string;
    code: string;
    link: string;
    wait: string;
    cta: string;
    why: string;
  };
  confirm: {
    subject: string;
    preheader: string;
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    expiry: string;
    ignore: string;
    why: string;
  };
  welcome: {
    subject: string;
    preheader: string;
    heading: string;
    intro: string;
    promises: Promise4;
    cta: string;
    leave: string;
  };
  news: {
    eyebrow: string;
    why: string;
    unsubscribe: string;
    privacy: string;
    whatsNew: string;
    version: (v: string) => string;
    appStore: string;
    readMore: string;
  };
  unsubscribePage: {
    title: string;
    body: string;
    button: string;
    keep: string;
  };
};

/** How the greeting names someone: the first word of a Western name, or the full name and 様 in Japanese. */
export function greetingName(locale: EmailLocale, fullName: string): string {
  const name = String(fullName ?? '').replace(/\s+/g, ' ').trim().slice(0, 60);
  if (!name) return '';
  if (locale === 'ja') return `${name}様`;
  return name.split(' ')[0];
}

const en: EmailCopy = {
  logoAlt: 'OutBrick',
  signoff: 'Bloo and the OutBrick team',
  tagline: 'OutBrick: the sliding-brick colour-sort puzzle',
  links: { support: 'Support', privacy: 'Privacy', appStore: 'App Store', careers: 'Careers', affiliates: 'Affiliates' },
  contact: {
    subject: 'We’ve got your message — OutBrick Support',
    preheader: 'A person reads every message and replies by email. Here’s a copy of what you sent.',
    heading: (name) => (name ? `Thanks, ${name}! Your message is with the team.` : 'Thanks! Your message is with the team.'),
    intro: 'This is a quick note to say it arrived safely. A person reads every message and replies by email, to this address, so there’s no need to send it again.',
    copyTitle: 'What you sent',
    topic: 'Topic',
    message: 'Message',
    device: 'One thing that would help: if you can, reply with your device model and iOS version (Settings › General › About). It lets us see what you saw.',
    add: 'Want to add something, such as a screenshot? Just reply to this email.',
    meanwhile: 'While you wait, the support page may already have the answer.',
    cta: 'Visit the support page',
    why: 'You’re receiving this one-off email because this address was used on the contact form at outbrick.site. It doesn’t add you to any mailing list.',
  },
  careers: {
    subject: (role) => `Application received: ${role} — OutBrick`,
    preheader: 'Thank you for applying. A person reads every application.',
    heading: (name) => (name ? `Thank you for applying, ${name}.` : 'Thank you for applying.'),
    intro: (role) => `Your application for ${role} reached the OutBrick team. A person reads every application and will write to you at this address.`,
    next: 'If it’s a match, the next step is a short video call.',
    role: 'Role',
    cta: 'See all open roles',
    why: 'You’re receiving this one-off email because this address was used to apply for a role at outbrick.site.',
  },
  affiliate: {
    subject: 'Affiliate application received — OutBrick',
    preheader: 'Thanks for applying to the OutBrick affiliate programme. A person reviews every application.',
    heading: (name) => (name ? `Thanks for applying, ${name}!` : 'Thanks for applying!'),
    intro: 'Your application to the OutBrick affiliate programme reached the team. A person reviews every application and replies by email.',
    code: 'Proposed code',
    link: 'Your link, once approved',
    wait: 'Please don’t share the link until we confirm it: until then it is only a proposal and earns nothing. If the code is already taken, we’ll suggest the nearest one.',
    cta: 'Read the programme terms',
    why: 'You’re receiving this one-off email because this address was used to apply to the affiliate programme at outbrick.site.',
  },
  confirm: {
    subject: 'Confirm your OutBrick News subscription',
    preheader: 'One tap and you’re on the list. The button works for 7 days.',
    eyebrow: 'OutBrick News',
    heading: 'One tap to confirm.',
    intro: 'Someone, hopefully you, asked for OutBrick News at this address: a short letter when a new village opens on the Journey or a big update reaches the App Store, about once a month.',
    cta: 'Confirm my subscription',
    expiry: 'The button works for 7 days. If it doesn’t, copy this link into your browser:',
    ignore: 'Didn’t ask for this? Ignore this email and you won’t hear from us. Nothing is added to the list until you confirm.',
    why: 'You’re receiving this because this address was entered in the newsletter form at outbrick.site.',
  },
  welcome: {
    subject: 'Welcome to OutBrick News',
    preheader: 'You’re on the list. Here’s what to expect, and how to leave whenever you like.',
    heading: 'You’re on the list!',
    intro: 'Thanks for confirming. Bloo is already waving. From now on you’ll get a short letter when a new village opens on the Journey or a big update reaches the App Store.',
    promises: [
      { title: 'New villages.', body: 'Where the road goes next.' },
      { title: 'Big updates.', body: 'What changed on the board and why, in plain words.' },
      { title: 'About once a month.', body: 'Only when there is something to say.' },
      { title: 'No spam.', body: 'Your address is used for this letter and nothing else.' },
    ],
    cta: 'Read what’s new',
    leave: 'Changed your mind? Every letter, this one included, has a one-click unsubscribe link at the bottom.',
  },
  news: {
    eyebrow: 'OutBrick News',
    why: 'You’re receiving this because you subscribed to OutBrick News at outbrick.site and confirmed your address.',
    unsubscribe: 'Unsubscribe',
    privacy: 'Privacy policy',
    whatsNew: 'What’s new in OutBrick',
    version: (v) => `Version ${v}`,
    appStore: 'Get OutBrick on the App Store',
    readMore: 'Read more',
  },
  unsubscribePage: {
    title: 'Unsubscribe from OutBrick News?',
    body: 'Press the button and this address will stop receiving OutBrick News. You can sign up again at any time.',
    button: 'Unsubscribe',
    keep: 'Keep me on the list',
  },
};

const fr: EmailCopy = {
  logoAlt: 'OutBrick',
  signoff: 'Bloo et l’équipe OutBrick',
  tagline: 'OutBrick : le puzzle de briques coulissantes à trier par couleur',
  links: { support: 'Assistance', privacy: 'Confidentialité', appStore: 'App Store', careers: 'Carrières', affiliates: 'Affiliation' },
  contact: {
    subject: 'Nous avons bien reçu votre message — Assistance OutBrick',
    preheader: 'Une personne lit chaque message et répond par e-mail. Voici une copie de ce que vous avez envoyé.',
    heading: (name) => (name ? `Merci, ${name} ! Votre message est entre les mains de l’équipe.` : 'Merci ! Votre message est entre les mains de l’équipe.'),
    intro: 'Un petit mot pour vous dire qu’il est bien arrivé. Une personne lit chaque message et répond par e-mail, à cette adresse : inutile de le renvoyer.',
    copyTitle: 'Ce que vous avez envoyé',
    topic: 'Sujet',
    message: 'Message',
    device: 'Une chose nous aiderait : si possible, répondez en indiquant le modèle de votre appareil et votre version d’iOS (Réglages › Général › Informations). Nous pourrons ainsi voir ce que vous avez vu.',
    add: 'Vous souhaitez ajouter quelque chose, comme une capture d’écran ? Répondez simplement à cet e-mail.',
    meanwhile: 'En attendant, la page d’assistance a peut-être déjà la réponse.',
    cta: 'Consulter la page d’assistance',
    why: 'Vous recevez cet e-mail unique parce que cette adresse a été saisie dans le formulaire de contact d’outbrick.site. Il ne vous inscrit à aucune liste de diffusion.',
  },
  careers: {
    subject: (role) => `Candidature reçue : ${role} — OutBrick`,
    preheader: 'Merci pour votre candidature. Une personne lit chaque candidature.',
    heading: (name) => (name ? `Merci pour votre candidature, ${name}.` : 'Merci pour votre candidature.'),
    intro: (role) => `Votre candidature au poste « ${role} » est bien parvenue à l’équipe OutBrick. Une personne lit chaque candidature et vous écrira à cette adresse.`,
    next: 'Si votre profil correspond, la prochaine étape est un court appel vidéo.',
    role: 'Poste',
    cta: 'Voir tous les postes ouverts',
    why: 'Vous recevez cet e-mail unique parce que cette adresse a été utilisée pour postuler sur outbrick.site.',
  },
  affiliate: {
    subject: 'Candidature d’affiliation reçue — OutBrick',
    preheader: 'Merci pour votre candidature au programme d’affiliation OutBrick. Une personne examine chaque candidature.',
    heading: (name) => (name ? `Merci pour votre candidature, ${name} !` : 'Merci pour votre candidature !'),
    intro: 'Votre candidature au programme d’affiliation OutBrick est bien parvenue à l’équipe. Une personne examine chaque candidature et répond par e-mail.',
    code: 'Code proposé',
    link: 'Votre lien, une fois approuvé',
    wait: 'Ne partagez pas le lien avant notre confirmation : jusque-là, ce n’est qu’une proposition et il ne rapporte rien. Si le code est déjà pris, nous vous proposerons le code disponible le plus proche.',
    cta: 'Lire les conditions du programme',
    why: 'Vous recevez cet e-mail unique parce que cette adresse a été utilisée pour postuler au programme d’affiliation sur outbrick.site.',
  },
  confirm: {
    subject: 'Confirmez votre inscription aux nouvelles d’OutBrick',
    preheader: 'Un geste et vous êtes sur la liste. Le bouton reste valable 7 jours.',
    eyebrow: 'Les nouvelles d’OutBrick',
    heading: 'Un geste pour confirmer.',
    intro: 'Quelqu’un, vous sans doute, a demandé à recevoir les nouvelles d’OutBrick à cette adresse : une courte lettre lorsqu’un nouveau village ouvre sur le Voyage ou qu’une grande mise à jour arrive sur l’App Store, environ une fois par mois.',
    cta: 'Confirmer mon inscription',
    expiry: 'Le bouton reste valable 7 jours. S’il ne fonctionne pas, copiez ce lien dans votre navigateur :',
    ignore: 'Vous n’avez rien demandé ? Ignorez cet e-mail et vous n’entendrez plus parler de nous. Rien n’est ajouté à la liste tant que vous n’avez pas confirmé.',
    why: 'Vous recevez cet e-mail parce que cette adresse a été saisie dans le formulaire d’inscription d’outbrick.site.',
  },
  welcome: {
    subject: 'Bienvenue dans les nouvelles d’OutBrick',
    preheader: 'Vous êtes sur la liste. Voici ce qui vous attend, et comment partir quand vous le souhaitez.',
    heading: 'Vous êtes sur la liste !',
    intro: 'Merci d’avoir confirmé. Bloo vous fait déjà signe. Désormais, vous recevrez une courte lettre lorsqu’un nouveau village ouvre sur le Voyage ou qu’une grande mise à jour arrive sur l’App Store.',
    promises: [
      { title: 'De nouveaux villages.', body: 'Là où la route mène ensuite.' },
      { title: 'Les grandes mises à jour.', body: 'Ce qui a changé sur le plateau, et pourquoi, en termes simples.' },
      { title: 'Environ une fois par mois.', body: 'Seulement quand il y a quelque chose à dire.' },
      { title: 'Pas de spam.', body: 'Votre adresse sert à cette lettre et à rien d’autre.' },
    ],
    cta: 'Lire les nouveautés',
    leave: 'Vous avez changé d’avis ? Chaque lettre, celle-ci comprise, contient en bas un lien de désinscription en un clic.',
  },
  news: {
    eyebrow: 'Les nouvelles d’OutBrick',
    why: 'Vous recevez cet e-mail parce que vous vous êtes inscrit aux nouvelles d’OutBrick sur outbrick.site et avez confirmé votre adresse.',
    unsubscribe: 'Se désinscrire',
    privacy: 'Politique de confidentialité',
    whatsNew: 'Les nouveautés d’OutBrick',
    version: (v) => `Version ${v}`,
    appStore: 'Télécharger OutBrick sur l’App Store',
    readMore: 'Lire la suite',
  },
  unsubscribePage: {
    title: 'Se désinscrire des nouvelles d’OutBrick ?',
    body: 'Appuyez sur le bouton et cette adresse ne recevra plus les nouvelles d’OutBrick. Vous pourrez vous réinscrire à tout moment.',
    button: 'Me désinscrire',
    keep: 'Rester sur la liste',
  },
};

const de: EmailCopy = {
  logoAlt: 'OutBrick',
  signoff: 'Bloo und das OutBrick-Team',
  tagline: 'OutBrick: das Schiebestein-Farbsortierpuzzle',
  links: { support: 'Support', privacy: 'Datenschutz', appStore: 'App Store', careers: 'Karriere', affiliates: 'Partnerprogramm' },
  contact: {
    subject: 'Ihre Nachricht ist angekommen — OutBrick-Support',
    preheader: 'Ein Mensch liest jede Nachricht und antwortet per E-Mail. Hier ist eine Kopie Ihrer Nachricht.',
    heading: (name) => (name ? `Danke, ${name}! Ihre Nachricht ist beim Team.` : 'Danke! Ihre Nachricht ist beim Team.'),
    intro: 'Nur eine kurze Bestätigung, dass sie sicher angekommen ist. Ein Mensch liest jede Nachricht und antwortet per E-Mail an diese Adresse – Sie müssen sie also nicht noch einmal senden.',
    copyTitle: 'Ihre Nachricht',
    topic: 'Thema',
    message: 'Nachricht',
    device: 'Eine Bitte: Antworten Sie nach Möglichkeit mit Ihrem Gerätemodell und Ihrer iOS-Version (Einstellungen › Allgemein › Info). So können wir sehen, was Sie gesehen haben.',
    add: 'Möchten Sie etwas ergänzen, etwa einen Screenshot? Antworten Sie einfach auf diese E-Mail.',
    meanwhile: 'Bis dahin hat die Support-Seite vielleicht schon die Antwort.',
    cta: 'Zur Support-Seite',
    why: 'Sie erhalten diese einmalige E-Mail, weil diese Adresse im Kontaktformular auf outbrick.site angegeben wurde. Sie werden dadurch in keine Mailingliste aufgenommen.',
  },
  careers: {
    subject: (role) => `Bewerbung eingegangen: ${role} — OutBrick`,
    preheader: 'Vielen Dank für Ihre Bewerbung. Ein Mensch liest jede Bewerbung.',
    heading: (name) => (name ? `Vielen Dank für Ihre Bewerbung, ${name}.` : 'Vielen Dank für Ihre Bewerbung.'),
    intro: (role) => `Ihre Bewerbung als „${role}“ ist beim OutBrick-Team angekommen. Ein Mensch liest jede Bewerbung und schreibt Ihnen an diese Adresse.`,
    next: 'Wenn es passt, ist der nächste Schritt ein kurzes Videogespräch.',
    role: 'Stelle',
    cta: 'Alle offenen Stellen ansehen',
    why: 'Sie erhalten diese einmalige E-Mail, weil sich mit dieser Adresse auf outbrick.site auf eine Stelle beworben wurde.',
  },
  affiliate: {
    subject: 'Bewerbung für das Partnerprogramm eingegangen — OutBrick',
    preheader: 'Danke für deine Bewerbung für das OutBrick-Partnerprogramm. Ein Mensch prüft jede Bewerbung.',
    heading: (name) => (name ? `Danke für deine Bewerbung, ${name}!` : 'Danke für deine Bewerbung!'),
    intro: 'Deine Bewerbung für das OutBrick-Partnerprogramm ist beim Team angekommen. Ein Mensch prüft jede Bewerbung und antwortet per E-Mail.',
    code: 'Vorgeschlagener Code',
    link: 'Dein Link nach der Zulassung',
    wait: 'Bitte teile den Link erst nach unserer Bestätigung: Bis dahin ist er nur ein Vorschlag und bringt keine Einnahmen. Falls der Code bereits vergeben ist, schlagen wir den nächstliegenden verfügbaren Code vor.',
    cta: 'Programmbedingungen lesen',
    why: 'Du erhältst diese einmalige E-Mail, weil sich mit dieser Adresse auf outbrick.site für das Partnerprogramm beworben wurde.',
  },
  confirm: {
    subject: 'Bitte bestätigen Sie Ihr Abonnement von OutBrick News',
    preheader: 'Ein Tipp, und Sie sind auf der Liste. Die Schaltfläche gilt 7 Tage.',
    eyebrow: 'OutBrick News',
    heading: 'Ein Tipp zum Bestätigen.',
    intro: 'Jemand – hoffentlich Sie – hat OutBrick News für diese Adresse angefordert: eine kurze Nachricht, wenn auf der Reise ein neues Dorf öffnet oder ein großes Update im App Store erscheint, etwa einmal im Monat.',
    cta: 'Abonnement bestätigen',
    expiry: 'Die Schaltfläche gilt 7 Tage. Falls sie nicht funktioniert, kopieren Sie diesen Link in Ihren Browser:',
    ignore: 'Nicht von Ihnen angefordert? Ignorieren Sie diese E-Mail, und Sie hören nichts mehr von uns. Erst nach Ihrer Bestätigung kommt die Adresse auf die Liste.',
    why: 'Sie erhalten diese E-Mail, weil diese Adresse im Newsletter-Formular auf outbrick.site eingegeben wurde.',
  },
  welcome: {
    subject: 'Willkommen bei OutBrick News',
    preheader: 'Sie sind auf der Liste. Das erwartet Sie – und so können Sie sich jederzeit abmelden.',
    heading: 'Sie sind auf der Liste!',
    intro: 'Danke für Ihre Bestätigung. Bloo winkt schon. Ab jetzt erhalten Sie eine kurze Nachricht, wenn auf der Reise ein neues Dorf öffnet oder ein großes Update im App Store erscheint.',
    promises: [
      { title: 'Neue Dörfer.', body: 'Wohin die Straße als Nächstes führt.' },
      { title: 'Große Updates.', body: 'Was sich auf dem Spielfeld geändert hat und warum, in klaren Worten.' },
      { title: 'Etwa einmal im Monat.', body: 'Nur wenn es etwas zu erzählen gibt.' },
      { title: 'Kein Spam.', body: 'Ihre Adresse wird für diesen Newsletter verwendet und für nichts anderes.' },
    ],
    cta: 'Neuigkeiten lesen',
    leave: 'Meinung geändert? Jede Ausgabe, auch diese, hat unten einen Link zum Abmelden mit einem Klick.',
  },
  news: {
    eyebrow: 'OutBrick News',
    why: 'Sie erhalten diese E-Mail, weil Sie OutBrick News auf outbrick.site abonniert und Ihre Adresse bestätigt haben.',
    unsubscribe: 'Abmelden',
    privacy: 'Datenschutzerklärung',
    whatsNew: 'Neu in OutBrick',
    version: (v) => `Version ${v}`,
    appStore: 'OutBrick im App Store laden',
    readMore: 'Weiterlesen',
  },
  unsubscribePage: {
    title: 'Von OutBrick News abmelden?',
    body: 'Tippen Sie auf die Schaltfläche, und diese Adresse erhält keine OutBrick News mehr. Sie können sich jederzeit wieder anmelden.',
    button: 'Abmelden',
    keep: 'Auf der Liste bleiben',
  },
};

const es: EmailCopy = {
  logoAlt: 'OutBrick',
  signoff: 'Bloo y el equipo de OutBrick',
  tagline: 'OutBrick: el puzle de ladrillos deslizantes para ordenar por colores',
  links: { support: 'Ayuda', privacy: 'Privacidad', appStore: 'App Store', careers: 'Empleo', affiliates: 'Afiliados' },
  contact: {
    subject: 'Hemos recibido tu mensaje — Ayuda de OutBrick',
    preheader: 'Una persona lee cada mensaje y responde por correo. Aquí tienes una copia de lo que enviaste.',
    heading: (name) => (name ? `¡Gracias, ${name}! Tu mensaje ya está con el equipo.` : '¡Gracias! Tu mensaje ya está con el equipo.'),
    intro: 'Te escribimos solo para confirmarte que ha llegado bien. Una persona lee cada mensaje y responde por correo a esta dirección, así que no hace falta que lo envíes de nuevo.',
    copyTitle: 'Lo que enviaste',
    topic: 'Tema',
    message: 'Mensaje',
    device: 'Algo que nos ayudaría: si puedes, responde indicando el modelo de tu dispositivo y tu versión de iOS (Ajustes › General › Información). Así podremos ver lo que viste.',
    add: '¿Quieres añadir algo, como una captura de pantalla? Responde a este correo.',
    meanwhile: 'Mientras tanto, puede que la página de ayuda ya tenga la respuesta.',
    cta: 'Ir a la página de ayuda',
    why: 'Recibes este correo único porque esta dirección se usó en el formulario de contacto de outbrick.site. No te añade a ninguna lista de correo.',
  },
  careers: {
    subject: (role) => `Solicitud recibida: ${role} — OutBrick`,
    preheader: 'Gracias por tu solicitud. Una persona lee cada solicitud.',
    heading: (name) => (name ? `Gracias por tu solicitud, ${name}.` : 'Gracias por tu solicitud.'),
    intro: (role) => `Tu solicitud para el puesto «${role}» ha llegado al equipo de OutBrick. Una persona lee cada solicitud y te escribirá a esta dirección.`,
    next: 'Si encajas, el siguiente paso es una breve videollamada.',
    role: 'Puesto',
    cta: 'Ver todos los puestos abiertos',
    why: 'Recibes este correo único porque esta dirección se usó para solicitar un puesto en outbrick.site.',
  },
  affiliate: {
    subject: 'Solicitud de afiliación recibida — OutBrick',
    preheader: 'Gracias por solicitar unirte al programa de afiliados de OutBrick. Una persona revisa cada solicitud.',
    heading: (name) => (name ? `¡Gracias por tu solicitud, ${name}!` : '¡Gracias por tu solicitud!'),
    intro: 'Tu solicitud al programa de afiliados de OutBrick ha llegado al equipo. Una persona revisa cada solicitud y responde por correo.',
    code: 'Código propuesto',
    link: 'Tu enlace, una vez aprobado',
    wait: 'No compartas el enlace hasta que lo confirmemos: hasta entonces es solo una propuesta y no genera ingresos. Si el código ya está ocupado, sugeriremos el código disponible más parecido.',
    cta: 'Leer las condiciones del programa',
    why: 'Recibes este correo único porque esta dirección se usó para solicitar el programa de afiliados en outbrick.site.',
  },
  confirm: {
    subject: 'Confirma tu suscripción a las noticias de OutBrick',
    preheader: 'Un toque y estarás en la lista. El botón funciona durante 7 días.',
    eyebrow: 'Noticias de OutBrick',
    heading: 'Un toque para confirmar.',
    intro: 'Alguien, seguramente tú, ha pedido recibir las noticias de OutBrick en esta dirección: una carta breve cuando se abre un nuevo pueblo en el Viaje o llega una gran actualización a la App Store, aproximadamente una vez al mes.',
    cta: 'Confirmar mi suscripción',
    expiry: 'El botón funciona durante 7 días. Si no funciona, copia este enlace en tu navegador:',
    ignore: '¿No lo has pedido tú? Ignora este correo y no volverás a saber de nosotros. No se añade nada a la lista hasta que confirmes.',
    why: 'Recibes este correo porque esta dirección se introdujo en el formulario del boletín de outbrick.site.',
  },
  welcome: {
    subject: 'Te damos la bienvenida a las noticias de OutBrick',
    preheader: 'Ya estás en la lista. Esto es lo que te espera, y cómo darte de baja cuando quieras.',
    heading: '¡Ya estás en la lista!',
    intro: 'Gracias por confirmar. Bloo ya te está saludando. A partir de ahora recibirás una carta breve cuando se abra un nuevo pueblo en el Viaje o llegue una gran actualización a la App Store.',
    promises: [
      { title: 'Nuevos pueblos.', body: 'Hacia dónde sigue el camino.' },
      { title: 'Grandes actualizaciones.', body: 'Qué ha cambiado en el tablero y por qué, con palabras sencillas.' },
      { title: 'Aproximadamente una vez al mes.', body: 'Solo cuando haya algo que contar.' },
      { title: 'Sin spam.', body: 'Tu dirección se usa para esta carta y para nada más.' },
    ],
    cta: 'Ver las novedades',
    leave: '¿Has cambiado de opinión? Cada carta, incluida esta, tiene abajo un enlace para darte de baja con un clic.',
  },
  news: {
    eyebrow: 'Noticias de OutBrick',
    why: 'Recibes este correo porque te suscribiste a las noticias de OutBrick en outbrick.site y confirmaste tu dirección.',
    unsubscribe: 'Darse de baja',
    privacy: 'Política de privacidad',
    whatsNew: 'Novedades de OutBrick',
    version: (v) => `Versión ${v}`,
    appStore: 'Descargar OutBrick en la App Store',
    readMore: 'Seguir leyendo',
  },
  unsubscribePage: {
    title: '¿Darte de baja de las noticias de OutBrick?',
    body: 'Pulsa el botón y esta dirección dejará de recibir las noticias de OutBrick. Puedes volver a suscribirte cuando quieras.',
    button: 'Darme de baja',
    keep: 'Seguir en la lista',
  },
};

const ja: EmailCopy = {
  logoAlt: 'OutBrick',
  signoff: 'BlooとOutBrickチーム',
  tagline: 'OutBrick：ブロックをスライドして色ごとに出すパズル',
  links: { support: 'サポート', privacy: 'プライバシー', appStore: 'App Store', careers: '採用情報', affiliates: 'アフィリエイト' },
  contact: {
    subject: 'メッセージを受け付けました — OutBrickサポート',
    preheader: 'すべてのメッセージを担当者が読み、メールで返信します。送信内容の控えをお送りします。',
    heading: (name) => (name ? `${name}、ありがとうございます。メッセージはチームに届きました。` : 'ありがとうございます。メッセージはチームに届きました。'),
    intro: '無事に届いたことをお知らせします。すべてのメッセージを担当者が読み、このアドレスにメールで返信しますので、再送の必要はありません。',
    copyTitle: '送信内容',
    topic: 'トピック',
    message: 'メッセージ',
    device: 'お願いがあります。可能であれば、お使いのデバイスの機種とiOSのバージョン（設定 › 一般 › 情報）を返信でお知らせください。同じ状況を確認するのに役立ちます。',
    add: 'スクリーンショットなどを追加したい場合は、このメールに返信してください。',
    meanwhile: 'お待ちいただく間に、サポートページで答えが見つかるかもしれません。',
    cta: 'サポートページを見る',
    why: 'このメールは、outbrick.siteのお問い合わせフォームでこのアドレスが使われたため、一度だけお送りしています。メーリングリストに登録されることはありません。',
  },
  careers: {
    subject: (role) => `応募を受け付けました：${role} — OutBrick`,
    preheader: 'ご応募ありがとうございます。すべての応募を担当者が読みます。',
    heading: (name) => (name ? `${name}、ご応募ありがとうございます。` : 'ご応募ありがとうございます。'),
    intro: (role) => `「${role}」へのご応募がOutBrickチームに届きました。すべての応募を担当者が読み、このアドレスにご連絡します。`,
    next: 'ご縁があれば、次のステップは短いビデオ通話です。',
    role: '職種',
    cta: '募集中の職種をすべて見る',
    why: 'このメールは、outbrick.siteでこのアドレスを使って職種に応募されたため、一度だけお送りしています。',
  },
  affiliate: {
    subject: 'アフィリエイトの申し込みを受け付けました — OutBrick',
    preheader: 'OutBrickアフィリエイトプログラムへのお申し込みありがとうございます。すべての申し込みを担当者が確認します。',
    heading: (name) => (name ? `${name}、お申し込みありがとうございます。` : 'お申し込みありがとうございます。'),
    intro: 'OutBrickアフィリエイトプログラムへのお申し込みがチームに届きました。すべての申し込みを担当者が確認し、メールで返信します。',
    code: '候補のコード',
    link: '承認後のリンク',
    wait: '確認が届くまではリンクを共有しないでください。それまでは単なる候補であり、収益は発生しません。コードがすでに使われている場合は、最も近い利用可能なコードをご提案します。',
    cta: 'プログラムの条件を読む',
    why: 'このメールは、outbrick.siteでこのアドレスを使ってアフィリエイトプログラムに申し込まれたため、一度だけお送りしています。',
  },
  confirm: {
    subject: 'OutBrickニュースの登録を確認してください',
    preheader: 'ワンタップで登録完了です。ボタンは7日間有効です。',
    eyebrow: 'OutBrickニュース',
    heading: 'ワンタップで確認。',
    intro: 'このアドレスでOutBrickニュースの配信が申し込まれました。Journeyに新しい村が登場したときや、大きなアップデートがApp Storeに届いたときにお送りする短いお便りで、月に約1回です。',
    cta: '登録を確認する',
    expiry: 'ボタンは7日間有効です。うまく動かない場合は、次のリンクをブラウザにコピーしてください：',
    ignore: 'お申し込みに心当たりがない場合は、このメールを無視してください。今後ご連絡することはありません。確認されるまで、リストには何も追加されません。',
    why: 'このメールは、outbrick.siteのニュースレターフォームにこのアドレスが入力されたためお送りしています。',
  },
  welcome: {
    subject: 'OutBrickニュースへようこそ',
    preheader: '登録が完了しました。これからお届けする内容と、いつでも配信を停止する方法をご案内します。',
    heading: '登録が完了しました！',
    intro: 'ご確認ありがとうございます。Blooがもう手を振っています。これからは、Journeyに新しい村が登場したときや、大きなアップデートがApp Storeに届いたときに、短いお便りをお届けします。',
    promises: [
      { title: '新しい村。', body: '道の続く先をお知らせします。' },
      { title: '大きなアップデート。', body: '盤面で何が変わったのか、その理由をわかりやすく。' },
      { title: '月に約1回。', body: 'お伝えすることがあるときだけ。' },
      { title: 'スパムはなし。', body: 'アドレスはこのお便りにだけ使います。' },
    ],
    cta: '新機能を見る',
    leave: '気が変わったら、このメールを含むすべてのお便りの最後に、ワンクリックで配信を停止できるリンクがあります。',
  },
  news: {
    eyebrow: 'OutBrickニュース',
    why: 'このメールは、outbrick.siteでOutBrickニュースに登録し、アドレスを確認されたためお送りしています。',
    unsubscribe: '配信停止',
    privacy: 'プライバシーポリシー',
    whatsNew: 'OutBrickの新機能',
    version: (v) => `バージョン${v}`,
    appStore: 'App StoreでOutBrickを入手',
    readMore: '続きを読む',
  },
  unsubscribePage: {
    title: 'OutBrickニュースの配信を停止しますか？',
    body: 'ボタンを押すと、このアドレスにはOutBrickニュースが届かなくなります。いつでも再登録できます。',
    button: '配信を停止する',
    keep: 'このまま受け取る',
  },
};

export const emailCopy: Record<EmailLocale, EmailCopy> = { en, fr, de, es, ja };
