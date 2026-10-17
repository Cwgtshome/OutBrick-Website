import type { LegacyLocale } from './locales';

// Source-matched disclosure; retention verified by the owner in GA4 on 17 October 2026.
export const appAnalyticsPrivacy = {
  en: {
    metadata:
      'OutBrick privacy policy: optional app and website analytics, advertising, Apple services, community data, emails and your controls.',
    headline:
      'No game account. Optional analytics. Advertising remains your choice.',
    intro:
      'The game has no developer-run account system. Progress is stored locally and can sync through your own iCloud account. Supported iPhone and iPad builds offer optional Google Analytics for Firebase; older builds do not offer this setting. Analytics is off by default and is separate from Google AdMob rewarded advertising, the website and the optional OutBrick Community account.',
    changeTitle: 'What changed on 17 October 2026',
    change:
      'This revision describes optional analytics in supported iPhone and iPad builds. It does not announce a new App Store release. The website analytics, email and community changes introduced on 8 October 2026 remain described below.',
    storage:
      'The app stores progress, coins, boosters, settings and accessibility preferences locally and can sync the private save through your own iCloud account. Optional analytics sends the limited events described below, not your private iCloud save or a copy of the board. The developer does not receive face data or operate a game account system.',
    appTitle: 'Optional in-app analytics',
    consent:
      'On supported iPhone and iPad builds, App analytics in OutBrick Settings is off by default. We do not configure the Firebase Analytics SDK or queue gameplay events before you explicitly opt in. Declining does not change levels, rewards, purchases or access to the game. The choice applies to this installation, separately from this website’s cookie banner.',
    data: 'After opt-in, Google Analytics for Firebase helps us understand game performance and purchase paths through reports. Events can include sessions and screens, level starts and outcomes, elapsed time, difficulty, move budgets and moves used, goals remaining, bounded resource balances, booster use, offer views and selections, purchase requests and outcomes, and rewarded-ad loading, impressions, earned rewards and successful grants. Verified new purchases may include the product identifier, actual amount and currency, and a locally hashed transaction identifier for deduplication. Raw transaction identifiers and receipts are not sent by this instrumentation.',
    identifier:
      'Events are linked to a pseudonymous app-instance identifier, so this is not anonymous collection. Under Apple’s privacy classifications, analytics identifiers and associated events are disclosed as linked data. We do not attach your name, email, iCloud or Game Center identity. Reports may include app/OS/device information and coarse location such as country derived by Google from network information; Google Analytics 4 does not log or store IP addresses. The game does not request GPS for analytics.',
    exclusions:
      'We do not send raw boards, hidden-brick information, player-entered text, names, email addresses, iCloud saves, Game Center account identifiers, full receipts or precise location to this analytics service. Analytics collection of the advertising identifier (IDFA) and vendor identifier (IDFV), Google signals and advertising personalisation is disabled. Advertising SDK consent remains separate and follows the advertising section of this policy.',
    withdrawal:
      'You can turn App analytics off in OutBrick Settings. This stops new analytics collection and resets the local analytics identifier and our local transaction-deduplication ledger. It does not remotely delete information already received by Google or OutBrick, and does not undo earlier lawful processing. Use the privacy contact and rights described in this policy for a data request; do not send payment details or a full receipt.',
    provider:
      'Google Analytics is provided by Google Ireland Limited and Google LLC. Where EU or UK law applies, the basis for optional app analytics is your consent. Google may process data outside your country, including in the United States, under its applicable data-processing and transfer terms. Aggregate reporting is the purpose; these events are not used by us to personalise advertisements.',
    retention:
      'The Google Analytics property used by this app and website has event and user data retention set to 14 months. Reset on new activity is enabled for user data, so new activity can restart that user-data retention period. Standard aggregate reports are separate and may remain available beyond the individual event retention window. Turning analytics off does not remotely delete past data.',
    diagnosticsTitle: 'Performance and crash diagnostics',
    diagnostics:
      'Apple MetricKit performance and crash diagnostics are separate from optional gameplay analytics. The App analytics switch does not control those existing diagnostic reports, Apple’s own App Store diagnostics or advertising consent. We use diagnostics to investigate crashes, hangs and performance problems, not as consent to collect optional gameplay analytics.',
    choicesSummary:
      'The game has no developer-run account system. App analytics is optional and off by default in supported iPhone and iPad builds; website analytics has its own cookie choice. Manage those choices separately from advertising, Apple services, local progress and our emails.',
    websiteScope:
      'This section describes analytics on this website only. It has a separate browser consent choice from optional App analytics in the game.',
    help: 'Supported iPhone and iPad builds offer optional **App analytics**, off by default in Settings. Opting in sends pseudonymous gameplay and purchase events to Google Analytics for reports; turning it off stops new collection and resets the local analytics identifier, without remotely deleting earlier data. Google AdMob advertising consent is separate. See our [privacy policy](/privacy#app-analytics).',
    children:
      'OutBrick is rated 4+. Optional app analytics is off by default and is not required to play; its pseudonymous data is described above. Please avoid including children’s personal information in support messages. The game has no public chat and no account registration. Rewarded advertising is described above; where Apple or applicable law requires child-directed treatment, that restricts advertising to non-personalised ads and prevents use of the advertising identifier.',
    partners:
      'Apple services, App Store purchases, Game Center, iCloud sync and iCloud backups operate under their own terms and privacy policies. Google provides rewarded advertising and, only after opt-in in supported builds, app analytics as described above. Website hosting, forms, the community, Resend emails and website analytics are described in their separate sections. If you sign in with Apple, Google or Facebook, that company handles sign-in under its own terms. We update this policy and the app’s App Store privacy information when applicable practices or partners change. The effective date above identifies this revision.',
    formsProvider:
      'Contact, affiliate, job and newsletter forms send the information you submit to OutBrick only when you press the submission button. Cloudflare Workers handles the request, our owner-controlled Neon Postgres database stores the form record, and Resend delivers the applicable emails. Validation, a hidden anti-spam field and rate limits protect these forms; they are no longer processed by Netlify Forms or Akismet.',
    formTechnical:
      'With each form we store the submitted consent and language, submission time and referring page address. Rate limits use a hash of the request IP address. Cloudflare also processes technical network information to deliver and protect the service; we do not describe those provider operations as anonymous.',
    formRetention:
      'Form submissions and their incoming emails are retained for up to 12 months after our last exchange unless an ongoing relationship or legal obligation requires longer. Support cases, applications and other database records follow the separate periods listed below.',
    formDeletion:
      'You can request earlier deletion, a copy or correction through the contact form with the topic Privacy, or by replying to an email from us. We remove applicable records from our database and inbox and confirm the outcome, subject to any legal retention obligation.',
    databaseProvider:
      'Contact, application, newsletter and community records are stored in owner-controlled Neon Postgres, accessed through Cloudflare Workers. This replaced the former Netlify-hosted arrangement on 9 October 2026. The record types and retention periods are listed below; the migration did not create new permission to send emails.',
    communityProvider:
      'Cloudflare Workers runs the community API, Neon Postgres stores its records, Cloudflare R2 stores uploaded images, and Resend delivers community emails on our behalf. Optional sign-in with Apple, Google or Facebook is handled under that provider’s policy and shares the account identifier and email described above. We do not sell community data or use it for advertising.',
    hostingLogs:
      'Cloudflare handles network and request details, such as request time, requested address, IP address and browser information, to deliver the website, protect it and investigate problems. Any provider logs follow Cloudflare’s applicable policies and our configured logging settings. We use operational diagnostics to investigate errors, not to build advertising profiles.',
    uploadsProvider:
      'Images in public posts are stored in Cloudflare R2. Each image needs alt text; embedded location and other metadata are removed during upload. The image is public like the post to which it belongs.',
    translationProvider:
      'When you request a post translation, its text is processed by Cloudflare Workers AI and the translation is displayed. The request does not include your account details. Nothing is translated unless requested.',
  },
  fr: {
    metadata:
      'Politique de confidentialité OutBrick : analyses facultatives de l’app et du site, publicité, services Apple, communauté, e-mails et vos choix.',
    headline:
      'Pas de compte de jeu. Des analyses facultatives. La publicité reste votre choix.',
    intro:
      'Le jeu ne possède pas de compte géré par le développeur. La progression est stockée localement et peut être synchronisée via votre propre compte iCloud. Les versions compatibles pour iPhone et iPad proposent Google Analytics pour Firebase en option ; les anciennes versions ne proposent pas ce réglage. L’analyse est désactivée par défaut et distincte des publicités récompensées Google AdMob, du site et du compte facultatif de la communauté OutBrick.',
    changeTitle: 'Modifications du 17 octobre 2026',
    change:
      'Cette révision décrit les analyses facultatives des versions compatibles pour iPhone et iPad. Elle n’annonce pas une nouvelle version sur l’App Store. Les changements du site, des e-mails et de la communauté introduits le 8 octobre 2026 restent décrits ci-dessous.',
    storage:
      'L’app conserve localement la progression, les pièces, les bonus, les réglages et les préférences d’accessibilité et peut synchroniser la sauvegarde privée via votre compte iCloud. Les analyses facultatives transmettent les événements limités décrits ci-dessous, sans votre sauvegarde iCloud privée ni copie du plateau. Le développeur ne reçoit pas de données faciales et ne gère pas de compte de jeu.',
    appTitle: 'Analyses facultatives dans l’app',
    consent:
      'Dans les versions compatibles pour iPhone et iPad, le réglage d’analyse de l’app dans les réglages OutBrick est désactivé par défaut. Nous ne configurons pas le SDK Firebase Analytics et ne mettons pas d’événements de jeu en attente avant votre consentement explicite. Refuser ne change ni niveaux, récompenses, achats, ni accès au jeu. Le choix concerne cette installation, indépendamment du bandeau de cookies du site.',
    data: 'Après votre accord, Google Analytics pour Firebase nous aide à comprendre le fonctionnement du jeu et les parcours d’achat grâce à des rapports. Les événements peuvent inclure les sessions et écrans, débuts et résultats de niveaux, temps écoulé, difficulté, limites et nombre de coups, objectifs restants, soldes de ressources bornés, utilisation de bonus, vues et sélections d’offres, demandes et résultats d’achat, ainsi que chargement, impressions, récompenses gagnées et versements effectifs des vidéos récompensées. Les nouveaux achats vérifiés peuvent inclure l’identifiant du produit, le montant et la devise réels, et un identifiant de transaction haché localement pour éviter les doublons. Cette instrumentation ne transmet ni identifiants de transaction bruts ni reçus.',
    identifier:
      'Les événements sont liés à un identifiant pseudonyme d’instance de l’app : la collecte n’est donc pas anonyme. Selon les catégories de confidentialité d’Apple, les identifiants d’analyse et événements associés sont déclarés comme données liées. Nous n’y joignons ni nom, e-mail, identité iCloud ou Game Center. Les rapports peuvent contenir des informations sur l’app, le système et l’appareil, ainsi qu’une localisation approximative, par exemple le pays déduit par Google des informations réseau ; Google Analytics 4 ne journalise ni ne conserve les adresses IP. Le jeu ne demande pas le GPS pour l’analyse.',
    exclusions:
      'Nous ne transmettons à ce service ni plateaux bruts, informations sur les briques cachées, texte saisi, noms, e-mails, sauvegardes iCloud, identifiants Game Center, reçus complets ou position précise. La collecte analytique de l’identifiant publicitaire IDFA et de l’identifiant de fournisseur IDFV, Google signals et la personnalisation publicitaire sont désactivés. Le consentement au SDK publicitaire reste distinct et suit la section Publicité de cette politique.',
    withdrawal:
      'Vous pouvez désactiver l’analyse de l’app dans les réglages OutBrick. Cela arrête les nouvelles collectes et réinitialise l’identifiant analytique local ainsi que notre registre local de déduplication des transactions. Cela ne supprime pas à distance les informations déjà reçues par Google ou OutBrick et n’annule pas les traitements antérieurs licites. Pour une demande relative aux données, utilisez le contact et les droits décrits ici ; n’envoyez ni informations de paiement ni reçu complet.',
    provider:
      'Google Analytics est fourni par Google Ireland Limited et Google LLC. Lorsque le droit de l’UE ou du Royaume-Uni s’applique, les analyses facultatives reposent sur votre consentement. Google peut traiter les données hors de votre pays, notamment aux États-Unis, selon ses conditions applicables de traitement et de transfert. L’objectif est de produire des rapports agrégés ; nous n’utilisons pas ces événements pour personnaliser la publicité.',
    retention:
      'La propriété Google Analytics utilisée par l’app et le site conserve les événements et données utilisateur pendant 14 mois. La réinitialisation lors d’une nouvelle activité est activée pour les données utilisateur : une activité peut donc faire repartir ce délai. Les rapports agrégés standard sont distincts et peuvent rester disponibles au-delà de la période des événements individuels. Désactiver l’analyse ne supprime pas à distance les données antérieures.',
    diagnosticsTitle: 'Diagnostics de performances et de plantages',
    diagnostics:
      'Les diagnostics de performances et de plantages Apple MetricKit sont distincts des analyses facultatives du jeu. Le réglage d’analyse ne commande pas ces rapports existants, les diagnostics de l’App Store d’Apple ou le consentement publicitaire. Nous utilisons ces diagnostics pour étudier les plantages, blocages et problèmes de performances, sans les considérer comme un consentement aux analyses facultatives.',
    choicesSummary:
      'Le jeu ne possède pas de compte géré par le développeur. Les analyses sont facultatives et désactivées par défaut sur les versions compatibles pour iPhone et iPad ; le site a son propre choix de cookies. Gérez ces choix séparément de la publicité, des services Apple, de votre progression locale et de nos e-mails.',
    websiteScope:
      'Cette section concerne uniquement les analyses de ce site. Son choix de consentement dans le navigateur est distinct des analyses facultatives de l’app.',
    help: 'Les versions compatibles pour iPhone et iPad proposent des **analyses de l’app** facultatives, désactivées par défaut dans les réglages. Votre accord permet d’envoyer à Google Analytics des événements pseudonymes de jeu et d’achat pour des rapports ; les désactiver arrête la nouvelle collecte et réinitialise l’identifiant local, sans supprimer à distance les données antérieures. Le consentement publicitaire Google AdMob est distinct. Consultez notre [politique de confidentialité](/privacy#app-analytics).',
    children:
      'OutBrick est classé 4+. Les analyses facultatives sont désactivées par défaut et ne sont pas nécessaires pour jouer ; leurs données pseudonymes sont décrites ci-dessus. Évitez d’inclure des informations personnelles d’enfants dans les messages d’assistance. Le jeu n’a ni chat public ni inscription à un compte. Les publicités récompensées sont décrites ci-dessus ; lorsqu’Apple ou le droit applicable exige un traitement destiné aux enfants, cela limite la publicité aux annonces non personnalisées et empêche l’utilisation de l’identifiant publicitaire.',
    partners:
      'Les services Apple, achats App Store, Game Center, synchronisation et sauvegardes iCloud relèvent de leurs propres conditions et politiques. Google fournit les publicités récompensées et, uniquement après consentement dans les versions compatibles, les analyses décrites ci-dessus. L’hébergement du site, les formulaires, la communauté, les e-mails Resend et les analyses du site sont décrits dans leurs sections distinctes. Si vous vous connectez avec Apple, Google ou Facebook, ce fournisseur gère la connexion selon ses conditions. Nous actualisons cette politique et les informations de confidentialité App Store lorsque les pratiques ou partenaires concernés changent. La date ci-dessus identifie cette révision.',
    formsProvider:
      'Les formulaires de contact, affiliation, emploi et newsletter transmettent vos informations à OutBrick uniquement lorsque vous appuyez sur le bouton d’envoi. Cloudflare Workers traite la demande, notre base Neon Postgres sous notre contrôle conserve le formulaire et Resend envoie les e-mails concernés. Validation, champ anti-spam invisible et limitations de débit protègent ces formulaires ; ils ne sont plus traités par Netlify Forms ou Akismet.',
    formTechnical:
      'Chaque formulaire conserve le consentement et la langue fournis, l’heure et l’adresse de la page référente. Les limites de débit utilisent une empreinte de l’adresse IP. Cloudflare traite également des informations réseau pour fournir et protéger le service ; ces opérations du fournisseur ne sont pas présentées comme anonymes.',
    formRetention:
      'Les formulaires et les e-mails reçus sont conservés jusqu’à 12 mois après notre dernier échange, sauf relation en cours ou obligation légale nécessitant davantage. Les dossiers d’assistance, candidatures et autres enregistrements suivent les durées distinctes ci-dessous.',
    formDeletion:
      'Demandez une suppression anticipée, une copie ou une correction via le formulaire de contact, sujet Confidentialité, ou en répondant à un de nos e-mails. Nous retirons les enregistrements concernés de notre base et boîte mail et confirmons le résultat, sous réserve des obligations légales de conservation.',
    databaseProvider:
      'Les données de contact, candidatures, newsletter et communauté sont conservées dans Neon Postgres sous notre contrôle, via Cloudflare Workers. Cette organisation a remplacé l’hébergement Netlify le 9 octobre 2026. Les types de données et durées sont indiqués ci-dessous ; la migration n’a créé aucune nouvelle autorisation d’envoyer des e-mails.',
    communityProvider:
      'Cloudflare Workers exécute l’API de la communauté, Neon Postgres conserve ses données, Cloudflare R2 stocke les images et Resend envoie les e-mails pour notre compte. La connexion facultative avec Apple, Google ou Facebook suit la politique du fournisseur et partage l’identifiant et l’e-mail décrits ci-dessus. Nous ne vendons pas les données de la communauté et ne les utilisons pas pour la publicité.',
    hostingLogs:
      'Cloudflare traite des détails réseau et de requête, notamment heure, adresse demandée, IP et navigateur, pour fournir et protéger le site et étudier les problèmes. Les éventuels journaux suivent les politiques applicables de Cloudflare et nos réglages de journalisation. Les diagnostics opérationnels servent à étudier les erreurs, pas à créer des profils publicitaires.',
    uploadsProvider:
      'Les images des publications publiques sont stockées dans Cloudflare R2. Chaque image doit avoir un texte alternatif ; les métadonnées intégrées, notamment la localisation, sont retirées à l’envoi. L’image est publique comme la publication à laquelle elle appartient.',
    translationProvider:
      'Lorsque vous demandez la traduction d’une publication, son texte est traité par Cloudflare Workers AI et la traduction s’affiche. La demande ne contient pas vos données de compte. Aucune traduction n’est effectuée sans demande.',
  },
  de: {
    metadata:
      'OutBrick-Datenschutz: optionale App- und Website-Analysen, Werbung, Apple-Dienste, Community-Daten, E-Mails und Ihre Rechte.',
    headline:
      'Kein Spielkonto. Optionale Analysen. Werbung bleibt Ihre Entscheidung.',
    intro:
      'Das Spiel hat kein vom Entwickler geführtes Konto. Der Fortschritt wird lokal gespeichert und kann über Ihr eigenes iCloud-Konto synchronisiert werden. Unterstützte iPhone- und iPad-Versionen bieten optional Google Analytics für Firebase; ältere Versionen haben diese Einstellung nicht. Analysen sind standardmäßig aus und von Google-AdMob-Belohnungswerbung, Website und optionalem Community-Konto getrennt.',
    changeTitle: 'Änderungen vom 17. Oktober 2026',
    change:
      'Diese Fassung beschreibt optionale Analysen in unterstützten iPhone- und iPad-Versionen. Sie kündigt keine neue App-Store-Veröffentlichung an. Die am 8. Oktober 2026 eingeführten Website-, E-Mail- und Community-Änderungen bleiben unten beschrieben.',
    storage:
      'Die App speichert Fortschritt, Münzen, Booster, Einstellungen und Bedienungshilfen lokal und kann den privaten Spielstand über Ihr iCloud-Konto synchronisieren. Optionale Analysen senden die unten beschriebenen begrenzten Ereignisse, nicht den privaten iCloud-Spielstand oder eine Kopie des Bretts. Der Entwickler erhält keine Gesichtsdaten und betreibt kein Spielkonto.',
    appTitle: 'Optionale Analysen in der App',
    consent:
      'In unterstützten iPhone- und iPad-Versionen ist App-Analyse in den OutBrick-Einstellungen standardmäßig aus. Wir konfigurieren das Firebase-Analytics-SDK nicht und speichern keine Spielereignisse zur späteren Übertragung, bevor Sie ausdrücklich zustimmen. Eine Ablehnung ändert keine Level, Belohnungen, Käufe oder den Spielzugang. Die Wahl gilt für diese Installation und ist vom Cookie-Banner der Website unabhängig.',
    data: 'Nach Ihrer Zustimmung hilft Google Analytics für Firebase mit Berichten zu Spielverhalten und Kaufwegen. Ereignisse können Sitzungen und Ansichten, Levelstarts und Ergebnisse, verstrichene Zeit, Schwierigkeit, Zuglimits und verwendete Züge, verbleibende Ziele, begrenzte Ressourcenstände, Boosternutzung, Angebotsansichten und Auswahl, Kaufanfragen und Ergebnisse sowie Laden, Impressionen, verdiente Belohnungen und tatsächliche Gutschriften von Belohnungswerbung umfassen. Neue bestätigte Käufe können Produktkennung, tatsächlichen Betrag und Währung sowie eine lokal gehashte Transaktionskennung zur Vermeidung von Duplikaten enthalten. Diese Instrumentierung sendet keine rohen Transaktionskennungen oder Belege.',
    identifier:
      'Ereignisse sind mit einer pseudonymen App-Instanzkennung verknüpft und daher nicht anonym. Nach Apples Datenschutzkategorien werden Analysekennungen und zugehörige Ereignisse als verknüpfte Daten angegeben. Wir fügen weder Namen, E-Mail, iCloud- noch Game-Center-Identität hinzu. Berichte können App-, Betriebssystem- und Geräteinformationen sowie ungefähre, von Google aus Netzwerkinformationen abgeleitete Standorte wie das Land enthalten; Google Analytics 4 protokolliert oder speichert keine IP-Adressen. Das Spiel fordert für Analysen kein GPS an.',
    exclusions:
      'Wir senden keine rohen Spielbretter, Informationen über verdeckte Steine, eingegebenen Texte, Namen, E-Mail-Adressen, iCloud-Spielstände, Game-Center-Kontokennungen, vollständigen Belege oder präzisen Standorte an diesen Analysedienst. Die Analyseerfassung von Werbekennung IDFA und Anbieterkennung IDFV, Google Signals und personalisierte Werbung sind deaktiviert. Die Einwilligung für das Werbe-SDK bleibt getrennt und folgt dem Werbeabschnitt dieser Richtlinie.',
    withdrawal:
      'Sie können App-Analyse in den OutBrick-Einstellungen ausschalten. Damit endet die neue Analyseerfassung; die lokale Analysekennung und unser lokales Register zur Transaktions-Deduplizierung werden zurückgesetzt. Bereits bei Google oder OutBrick eingegangene Informationen werden dadurch nicht aus der Ferne gelöscht; frühere rechtmäßige Verarbeitung wird nicht rückgängig gemacht. Nutzen Sie für Datenanfragen den hier beschriebenen Datenschutzkontakt und Ihre Rechte; senden Sie keine Zahlungsdaten oder vollständigen Belege.',
    provider:
      'Google Analytics wird von Google Ireland Limited und Google LLC bereitgestellt. Soweit EU- oder britisches Recht gilt, beruht die optionale App-Analyse auf Ihrer Einwilligung. Google kann Daten außerhalb Ihres Landes, auch in den USA, nach den geltenden Verarbeitungs- und Übermittlungsbedingungen verarbeiten. Zweck sind zusammengefasste Berichte; wir verwenden diese Ereignisse nicht zur Werbepersonalisierung.',
    retention:
      'Die von App und Website verwendete Google-Analytics-Property ist für Ereignis- und Nutzerdaten auf 14 Monate eingestellt. Für Nutzerdaten ist das Zurücksetzen bei neuer Aktivität aktiviert, sodass neue Aktivität diese Frist neu starten kann. Standardmäßige zusammengefasste Berichte sind getrennt und können über die Frist einzelner Ereignisse hinaus verfügbar bleiben. Ausschalten löscht frühere Daten nicht aus der Ferne.',
    diagnosticsTitle: 'Leistungs- und Absturzdiagnosen',
    diagnostics:
      'Apples MetricKit-Diagnosen zu Leistung und Abstürzen sind von optionalen Spielanalysen getrennt. Der App-Analyse-Schalter steuert weder diese bestehenden Berichte noch Apples eigene App-Store-Diagnosen oder die Werbeeinwilligung. Wir nutzen Diagnosen zur Untersuchung von Abstürzen, Hängern und Leistungsproblemen, nicht als Einwilligung in optionale Spielanalysen.',
    choicesSummary:
      'Das Spiel hat kein vom Entwickler geführtes Konto. App-Analysen sind in unterstützten iPhone- und iPad-Versionen optional und standardmäßig aus; Website-Analysen haben eine eigene Cookie-Entscheidung. Verwalten Sie dies getrennt von Werbung, Apple-Diensten, lokalem Fortschritt und unseren E-Mails.',
    websiteScope:
      'Dieser Abschnitt betrifft nur Analysen dieser Website. Die Einwilligung im Browser ist von der optionalen App-Analyse im Spiel getrennt.',
    help: 'Unterstützte iPhone- und iPad-Versionen bieten eine optionale **App-Analyse**, die in den Einstellungen standardmäßig aus ist. Mit Ihrer Zustimmung gehen pseudonyme Spiel- und Kaufereignisse für Berichte an Google Analytics; Ausschalten stoppt neue Erfassung und setzt die lokale Kennung zurück, ohne frühere Daten aus der Ferne zu löschen. Die Google-AdMob-Werbeeinwilligung ist getrennt. Siehe unsere [Datenschutzerklärung](/privacy#app-analytics).',
    children:
      'OutBrick ist mit 4+ eingestuft. Optionale App-Analysen sind standardmäßig aus und zum Spielen nicht erforderlich; ihre pseudonymen Daten sind oben beschrieben. Bitte nennen Sie in Supportnachrichten keine personenbezogenen Daten von Kindern. Das Spiel hat keinen öffentlichen Chat und keine Kontoregistrierung. Belohnungswerbung ist oben beschrieben; wenn Apple oder geltendes Recht eine Behandlung als kindergerichtet verlangen, begrenzt dies die Werbung auf nicht personalisierte Anzeigen und verhindert die Nutzung der Werbekennung.',
    partners:
      'Apple-Dienste, App-Store-Käufe, Game Center sowie iCloud-Synchronisierung und Backups unterliegen eigenen Bedingungen und Datenschutzrichtlinien. Google stellt Belohnungswerbung und nur nach Zustimmung in unterstützten Versionen die oben beschriebene App-Analyse bereit. Website-Hosting, Formulare, Community, Resend-E-Mails und Website-Analysen sind in ihren eigenen Abschnitten beschrieben. Bei Anmeldung über Apple, Google oder Facebook gelten deren Anmeldebedingungen. Wir aktualisieren diese Richtlinie und die App-Store-Datenschutzangaben, wenn sich betreffende Verfahren oder Partner ändern. Das Datum oben kennzeichnet diese Fassung.',
    formsProvider:
      'Kontakt-, Affiliate-, Bewerbungs- und Newsletterformulare senden Ihre Angaben erst beim Absenden an OutBrick. Cloudflare Workers verarbeitet die Anfrage, unsere selbst kontrollierte Neon-Postgres-Datenbank speichert den Datensatz und Resend versendet die zugehörigen E-Mails. Validierung, ein verstecktes Spamfeld und Ratenlimits schützen die Formulare; Netlify Forms und Akismet verarbeiten sie nicht mehr.',
    formTechnical:
      'Zu jedem Formular speichern wir angegebene Einwilligung und Sprache, Absendezeit und verweisende Seitenadresse. Ratenlimits verwenden einen Hash der Anfrage-IP. Cloudflare verarbeitet außerdem technische Netzwerkdaten zur Bereitstellung und Absicherung; wir bezeichnen diese Verarbeitung nicht als anonym.',
    formRetention:
      'Formulare und eingegangene E-Mails werden bis zu 12 Monate nach unserem letzten Austausch aufbewahrt, soweit keine laufende Beziehung oder gesetzliche Pflicht länger erfordert. Supportfälle, Bewerbungen und weitere Datenbankeinträge folgen den gesonderten Fristen unten.',
    formDeletion:
      'Frühere Löschung, Kopie oder Berichtigung können Sie über das Kontaktformular mit Thema Datenschutz oder durch Antwort auf unsere E-Mail verlangen. Wir entfernen betreffende Daten aus Datenbank und Postfach und bestätigen das Ergebnis, soweit keine gesetzliche Aufbewahrungspflicht entgegensteht.',
    databaseProvider:
      'Kontakt-, Bewerbungs-, Newsletter- und Community-Daten liegen in unserer selbst kontrollierten Neon-Postgres-Datenbank mit Zugriff über Cloudflare Workers. Sie ersetzte am 9. Oktober 2026 die frühere Netlify-Umgebung. Datenarten und Fristen stehen unten; die Migration erteilte keine neue E-Mail-Einwilligung.',
    communityProvider:
      'Cloudflare Workers betreibt die Community-API, Neon Postgres speichert Datensätze, Cloudflare R2 hochgeladene Bilder und Resend versendet Community-E-Mails für uns. Optionale Anmeldung über Apple, Google oder Facebook folgt deren Richtlinie und übermittelt die oben beschriebene Kontokennung und E-Mail. Wir verkaufen Community-Daten nicht und nutzen sie nicht für Werbung.',
    hostingLogs:
      'Cloudflare verarbeitet Netzwerk- und Anfragedetails wie Zeit, angeforderte Adresse, IP-Adresse und Browserinformationen für Bereitstellung, Schutz und Fehlersuche. Etwaige Providerprotokolle folgen Cloudflares geltenden Richtlinien und unseren Protokolleinstellungen. Betriebsdiagnosen dienen der Fehleruntersuchung, nicht der Bildung von Werbeprofilen.',
    uploadsProvider:
      'Bilder öffentlicher Beiträge werden in Cloudflare R2 gespeichert. Jedes Bild benötigt Alternativtext; eingebettete Standort- und weitere Metadaten werden beim Hochladen entfernt. Das Bild ist wie sein Beitrag öffentlich.',
    translationProvider:
      'Wenn Sie eine Beitragsübersetzung anfordern, verarbeitet Cloudflare Workers AI den Beitragstext und zeigt die Übersetzung. Die Anfrage enthält keine Kontodaten. Ohne Anforderung wird nichts übersetzt.',
  },
  es: {
    metadata:
      'Privacidad de OutBrick: análisis opcionales de la app y del sitio, publicidad, servicios Apple, comunidad, correos y controles.',
    headline:
      'Sin cuenta del juego. Análisis opcionales. La publicidad sigue siendo tu elección.',
    intro:
      'El juego no tiene cuentas gestionadas por el desarrollador. El progreso se guarda localmente y puede sincronizarse mediante tu propia cuenta de iCloud. Las versiones compatibles para iPhone y iPad ofrecen Google Analytics para Firebase de forma opcional; las anteriores no incluyen este ajuste. El análisis está desactivado por defecto y separado de los anuncios con recompensa de Google AdMob, del sitio y de la cuenta opcional de la comunidad OutBrick.',
    changeTitle: 'Cambios del 17 de octubre de 2026',
    change:
      'Esta revisión describe los análisis opcionales de las versiones compatibles para iPhone y iPad. No anuncia un nuevo lanzamiento en el App Store. Los cambios del sitio, los correos y la comunidad introducidos el 8 de octubre de 2026 siguen descritos abajo.',
    storage:
      'La app guarda localmente progreso, monedas, potenciadores, ajustes y preferencias de accesibilidad, y puede sincronizar la partida privada mediante tu cuenta de iCloud. Los análisis opcionales envían los eventos limitados descritos abajo, no tu partida privada de iCloud ni una copia del tablero. El desarrollador no recibe datos faciales ni gestiona cuentas del juego.',
    appTitle: 'Análisis opcionales dentro de la app',
    consent:
      'En las versiones compatibles para iPhone y iPad, el análisis de la app en los ajustes de OutBrick está desactivado por defecto. No configuramos el SDK Firebase Analytics ni ponemos en cola eventos de juego antes de tu consentimiento explícito. Rechazarlo no cambia niveles, recompensas, compras ni acceso al juego. La elección se aplica a esta instalación, de forma independiente del aviso de cookies del sitio.',
    data: 'Tras aceptar, Google Analytics para Firebase nos ayuda a comprender el juego y las rutas de compra mediante informes. Los eventos pueden incluir sesiones y pantallas, inicios y resultados de niveles, tiempo transcurrido, dificultad, límites y movimientos usados, objetivos pendientes, saldos acotados de recursos, uso de potenciadores, vistas y selecciones de ofertas, solicitudes y resultados de compra, y carga, impresiones, recompensas ganadas y entregas efectivas de anuncios con recompensa. Las compras nuevas verificadas pueden incluir el identificador del producto, importe y moneda reales, y un identificador de transacción transformado localmente mediante hash para evitar duplicados. Esta instrumentación no envía identificadores de transacción sin procesar ni recibos.',
    identifier:
      'Los eventos se vinculan a un identificador seudónimo de instancia de la app, por lo que no son una recopilación anónima. Según las categorías de privacidad de Apple, los identificadores analíticos y los eventos asociados se declaran como datos vinculados. No añadimos tu nombre, correo, identidad de iCloud o Game Center. Los informes pueden incluir información de la app, sistema y dispositivo y ubicación aproximada, como el país deducido por Google de la red; Google Analytics 4 no registra ni almacena direcciones IP. El juego no solicita GPS para análisis.',
    exclusions:
      'No enviamos tableros sin procesar, información sobre bloques ocultos, texto del jugador, nombres, correos, partidas de iCloud, identificadores de cuenta de Game Center, recibos completos ni ubicación precisa a este servicio. La recopilación analítica del identificador publicitario IDFA y del proveedor IDFV, Google signals y la personalización publicitaria están desactivadas. El consentimiento del SDK publicitario sigue separado y se rige por la sección de publicidad de esta política.',
    withdrawal:
      'Puedes desactivar el análisis de la app en los ajustes de OutBrick. Esto detiene la nueva recopilación y restablece el identificador analítico local y nuestro registro local para evitar transacciones duplicadas. No borra a distancia información ya recibida por Google u OutBrick ni revierte el tratamiento lícito anterior. Para solicitar datos, utiliza el contacto y los derechos de esta política; no envíes datos de pago ni recibos completos.',
    provider:
      'Google Analytics lo proporcionan Google Ireland Limited y Google LLC. Cuando se aplica la legislación de la UE o del Reino Unido, la base del análisis opcional es tu consentimiento. Google puede tratar los datos fuera de tu país, incluidos los Estados Unidos, conforme a sus condiciones aplicables de tratamiento y transferencia. El fin son los informes agregados; no usamos estos eventos para personalizar anuncios.',
    retention:
      'La propiedad de Google Analytics usada por la app y el sitio tiene una retención de eventos y usuarios de 14 meses. Está activado el reinicio con nueva actividad para los datos de usuario, por lo que la actividad puede reiniciar ese plazo. Los informes agregados estándar son distintos y pueden seguir disponibles más allá del plazo de los eventos individuales. Desactivar no borra datos anteriores a distancia.',
    diagnosticsTitle: 'Diagnósticos de rendimiento y fallos',
    diagnostics:
      'Los diagnósticos de rendimiento y fallos de Apple MetricKit son distintos de los análisis opcionales del juego. El interruptor de análisis no controla esos informes existentes, los diagnósticos del App Store de Apple ni el consentimiento publicitario. Usamos los diagnósticos para investigar cierres, bloqueos y problemas de rendimiento, no como consentimiento para análisis opcionales.',
    choicesSummary:
      'El juego no tiene cuentas gestionadas por el desarrollador. El análisis es opcional y está desactivado por defecto en las versiones compatibles para iPhone y iPad; el sitio tiene su propia elección de cookies. Gestiona estas opciones por separado de la publicidad, servicios Apple, progreso local y correos.',
    websiteScope:
      'Esta sección trata solo del análisis de este sitio. La elección del navegador es independiente del análisis opcional de la app.',
    help: 'Las versiones compatibles para iPhone y iPad ofrecen **análisis de la app** opcionales, desactivados por defecto en Ajustes. Al aceptar se envían eventos seudónimos de juego y compra a Google Analytics para informes; desactivarlos detiene la nueva recopilación y restablece el identificador local, sin borrar a distancia datos anteriores. El consentimiento publicitario de Google AdMob es independiente. Consulta nuestra [política de privacidad](/privacy#app-analytics).',
    children:
      'OutBrick tiene clasificación 4+. El análisis opcional está desactivado por defecto y no es necesario para jugar; sus datos seudónimos se describen arriba. Evita incluir información personal de menores en mensajes de soporte. El juego no tiene chat público ni registro de cuentas. La publicidad con recompensa se describe arriba; cuando Apple o la ley aplicable exigen un tratamiento dirigido a menores, se limita a anuncios no personalizados y se impide usar el identificador publicitario.',
    partners:
      'Los servicios Apple, compras del App Store, Game Center, sincronización y copias de iCloud se rigen por sus propias condiciones y políticas. Google proporciona anuncios con recompensa y, solo tras aceptar en las versiones compatibles, el análisis de la app descrito arriba. Alojamiento, formularios, comunidad, correos de Resend y análisis del sitio se describen en secciones separadas. Si inicias sesión con Apple, Google o Facebook, ese proveedor gestiona el acceso bajo sus condiciones. Actualizamos esta política y la información de privacidad del App Store cuando cambian las prácticas o socios aplicables. La fecha superior identifica esta revisión.',
    formsProvider:
      'Los formularios de contacto, afiliación, empleo y boletín envían lo que escribes a OutBrick solo al pulsar Enviar. Cloudflare Workers procesa la solicitud, nuestra base Neon Postgres bajo nuestro control guarda el registro y Resend entrega los correos pertinentes. Validación, un campo antispam oculto y límites de solicitudes protegen los formularios; ya no los procesan Netlify Forms ni Akismet.',
    formTechnical:
      'Guardamos el consentimiento y el idioma enviados, la hora y la dirección de la página de origen. Los límites usan un hash de la IP de la solicitud. Cloudflare también procesa información técnica de red para ofrecer y proteger el servicio; no describimos esas operaciones como anónimas.',
    formRetention:
      'Los formularios y correos recibidos se conservan hasta 12 meses tras el último intercambio, salvo relación activa u obligación legal que exija más. Casos de soporte, candidaturas y otros registros siguen los plazos separados de abajo.',
    formDeletion:
      'Solicita una eliminación anticipada, copia o corrección mediante el formulario, tema Privacidad, o respondiendo a un correo nuestro. Eliminamos los registros pertinentes de la base y el buzón y confirmamos el resultado, sujeto a obligaciones legales de conservación.',
    databaseProvider:
      'Los registros de contacto, candidaturas, boletín y comunidad se guardan en Neon Postgres bajo nuestro control, mediante Cloudflare Workers. Esto sustituyó al alojamiento anterior de Netlify el 9 de octubre de 2026. Los tipos y plazos se detallan abajo; la migración no creó nuevos permisos para enviar correos.',
    communityProvider:
      'Cloudflare Workers ejecuta la API de la comunidad, Neon Postgres guarda sus registros, Cloudflare R2 almacena imágenes y Resend envía los correos por nuestra cuenta. El acceso opcional con Apple, Google o Facebook sigue su política y comparte el identificador y correo descritos arriba. No vendemos los datos de la comunidad ni los usamos para publicidad.',
    hostingLogs:
      'Cloudflare procesa detalles de red y solicitudes, como hora, dirección solicitada, IP e información del navegador, para ofrecer y proteger el sitio e investigar problemas. Los registros del proveedor siguen sus políticas y nuestros ajustes de registro. Usamos diagnósticos operativos para investigar errores, no para crear perfiles publicitarios.',
    uploadsProvider:
      'Las imágenes de publicaciones públicas se almacenan en Cloudflare R2. Cada imagen necesita texto alternativo; los metadatos incrustados, incluida la ubicación, se eliminan al subirla. Es pública, como su publicación.',
    translationProvider:
      'Al pedir la traducción de una publicación, Cloudflare Workers AI procesa su texto y muestra la traducción. La solicitud no incluye datos de tu cuenta. No se traduce nada sin solicitarlo.',
  },
  ja: {
    metadata:
      'OutBrick のプライバシー：任意のアプリ・サイト分析、広告、Apple サービス、コミュニティ、メール、選択と管理。',
    headline: 'ゲーム用アカウントは不要。分析は任意。広告もご自身で選べます。',
    intro:
      'ゲームには開発者が管理するアカウントはありません。進行状況は端末内に保存され、ご自身の iCloud アカウントで同期できます。対応する iPhone・iPad 版では Google Analytics for Firebase を任意で利用できます。旧バージョンにはこの設定はありません。分析は初期状態で無効で、Google AdMob のリワード広告、ウェブサイト、任意の OutBrick コミュニティアカウントとは別です。',
    changeTitle: '2026年10月17日の変更',
    change:
      '今回の改訂は対応する iPhone・iPad 版の任意の分析を説明するものです。App Store の新バージョン公開を告知するものではありません。2026年10月8日に導入されたウェブサイト、メール、コミュニティの変更も以下で引き続き説明しています。',
    storage:
      'アプリは進行状況、コイン、ブースター、設定、アクセシビリティ設定を端末内に保存し、ご自身の iCloud アカウントで非公開のセーブデータを同期できます。任意の分析が送るのは以下の限定されたイベントであり、非公開の iCloud セーブや盤面のコピーではありません。開発者は顔データを受け取らず、ゲーム用アカウントも管理していません。',
    appTitle: '任意のアプリ内分析',
    consent:
      '対応する iPhone・iPad 版では、OutBrick の設定のアプリ分析は初期状態で無効です。明示的に同意するまでは Firebase Analytics SDK を構成せず、ゲームイベントを送信待ちにしません。拒否してもレベル、報酬、購入、ゲームへのアクセスは変わりません。この選択はこのインストールに適用され、サイトの Cookie バナーとは独立しています。',
    data: '同意後は Google Analytics for Firebase のレポートを利用して、ゲームの動作や購入経路を理解します。イベントにはセッション、画面、レベル開始と結果、経過時間、難易度、手数の上限と使用数、残りの目標、上限付きのリソース残高、ブースター使用、オファーの表示と選択、購入要求と結果、リワード広告の読み込み、表示、報酬獲得と実際の付与などが含まれる場合があります。新しく確認された購入には製品 ID、実際の金額と通貨、重複防止用に端末内でハッシュ化した取引 ID が含まれる場合があります。この計測では生の取引 ID や領収書は送りません。',
    identifier:
      'イベントは仮名のアプリインスタンス ID に結び付くため、匿名の収集ではありません。Apple のプライバシー分類では、分析用 ID と関連イベントは紐付けられたデータとして開示されます。氏名、メール、iCloud や Game Center の識別情報は付加しません。レポートにはアプリ、OS、端末の情報や、ネットワーク情報から Google が推定する国などのおおまかな位置が含まれる場合があります。Google Analytics 4 は IP アドレスを記録・保存しません。ゲームは分析のために GPS を要求しません。',
    exclusions:
      'この分析サービスには、生の盤面、隠されたブロックの情報、入力した文章、氏名、メール、iCloud セーブ、Game Center のアカウント ID、完全な領収書、正確な位置情報は送りません。分析の広告 ID（IDFA）・ベンダー ID（IDFV）の収集、Google シグナル、広告のパーソナライズは無効です。広告 SDK の同意は別であり、このポリシーの広告の項目に従います。',
    withdrawal:
      'OutBrick の設定でアプリ分析を無効にできます。新たな分析収集を停止し、端末内の分析 ID と取引重複防止記録をリセットします。Google や OutBrick が既に受け取った情報を遠隔削除するものではなく、それまでの適法な処理を取り消すものでもありません。データの請求にはこのポリシーの連絡先と権利をご利用ください。決済情報や完全な領収書は送らないでください。',
    provider:
      'Google Analytics は Google Ireland Limited と Google LLC が提供します。EU・英国の法律が適用される場合、任意のアプリ分析の法的根拠は同意です。Google は適用されるデータ処理・移転条件に従い、米国を含む国外でデータを処理する場合があります。目的は集計レポートであり、これらのイベントを当方が広告のパーソナライズに使うことはありません。',
    retention:
      'アプリとサイトが使う Google Analytics プロパティでは、イベントとユーザーデータの保持を14か月に設定しています。ユーザーデータは新しいアクティビティで期間をリセットする設定のため、利用によりその保持期間が再開始する場合があります。標準の集計レポートは別で、個別イベントの保持期間を超えて利用できる場合があります。無効にしても過去のデータは遠隔削除されません。',
    diagnosticsTitle: 'パフォーマンスとクラッシュの診断',
    diagnostics:
      'Apple MetricKit のパフォーマンス・クラッシュ診断は、任意のゲーム分析とは別です。アプリ分析のスイッチは既存の診断、Apple 自身の App Store 診断、広告の同意を制御しません。診断はクラッシュ、停止、動作の問題の調査に使い、任意のゲーム分析への同意とはみなしません。',
    choicesSummary:
      'ゲームには開発者が管理するアカウントはありません。対応する iPhone・iPad 版のアプリ分析は任意で、初期状態では無効です。サイト分析には独立した Cookie の選択があります。広告、Apple サービス、端末内の進行状況、メールとは別に管理できます。',
    websiteScope:
      'この項目はこのウェブサイトの分析のみを説明します。ブラウザでの同意は、ゲーム内の任意のアプリ分析とは独立しています。',
    help: '対応する iPhone・iPad 版では、設定で初期状態が無効の任意の**アプリ分析**を利用できます。同意すると仮名のプレイ・購入イベントを Google Analytics に送り、レポートを作成します。無効にすると新たな収集が停止し、端末内の ID がリセットされますが、以前のデータは遠隔削除されません。Google AdMob の広告同意は別です。[プライバシーポリシー](/privacy#app-analytics)をご覧ください。',
    children:
      'OutBrick の年齢区分は 4+ です。任意のアプリ分析は初期状態で無効で、プレイに必須ではありません。仮名データについては上記をご覧ください。サポートへの連絡に子どもの個人情報を含めないでください。ゲームには公開チャットやアカウント登録はありません。リワード広告は上記で説明しています。Apple または適用法が子ども向けの取り扱いを求める場合、広告はパーソナライズされず、広告 ID の使用が制限されます。',
    partners:
      'Apple のサービス、App Store の購入、Game Center、iCloud 同期とバックアップにはそれぞれの規約とプライバシーポリシーが適用されます。Google はリワード広告と、対応版で同意した場合のみ上記のアプリ分析を提供します。サイトのホスティング、フォーム、コミュニティ、Resend メール、サイト分析は各項目で説明しています。Apple、Google、Facebook でログインする場合、その提供元の規約に従ってログイン処理が行われます。関連する取り扱いや提供元が変わる場合、このポリシーと App Store のプライバシー情報を更新します。上記の日付が今回の改訂日です。',
    formsProvider:
      '問い合わせ、アフィリエイト、求人、ニュースレターのフォームは、送信ボタンを押したときだけ入力情報を OutBrick に送ります。Cloudflare Workers が処理し、当方が管理する Neon Postgres に保存して、該当するメールを Resend が配信します。検証、非表示のスパム対策項目、回数制限で保護しており、Netlify Forms や Akismet は使用していません。',
    formTechnical:
      'フォームごとに送信された同意と使用言語、送信時刻、参照元ページのアドレスを保存します。回数制限にはリクエストの IP のハッシュを使います。Cloudflare も提供と保護のためネットワーク情報を処理します。こうした処理を匿名とは説明しません。',
    formRetention:
      'フォームと受信メールは、継続する関係や法的義務で延長が必要な場合を除き、最後のやり取りから最長12か月保持します。サポート、応募、その他のデータベース記録には以下の個別の期間が適用されます。',
    formDeletion:
      '早期削除、写し、訂正の請求は、問い合わせフォームのプライバシー項目か当方のメールへの返信で行えます。法的保持義務に従い、対象記録をデータベースと受信箱から削除し、結果をお知らせします。',
    databaseProvider:
      '問い合わせ、応募、ニュースレター、コミュニティの記録は、Cloudflare Workers を通じて当方が管理する Neon Postgres に保存します。2026年10月9日に従来の Netlify 環境から移行しました。種類と保持期間は以下のとおりで、移行により新たなメール送信許可が生じることはありません。',
    communityProvider:
      'コミュニティ API は Cloudflare Workers、記録は Neon Postgres、画像は Cloudflare R2、メール配信は Resend が担当します。任意の Apple・Google・Facebook ログインには各社のポリシーが適用され、上記のアカウント ID とメールが共有されます。コミュニティデータを販売したり広告に使ったりしません。',
    hostingLogs:
      'Cloudflare はサイトの提供、保護、障害調査のため、時刻、アクセス先、IP、ブラウザ情報などのネットワーク・リクエスト情報を処理します。提供元のログには Cloudflare の規則と当方のログ設定が適用されます。運用診断はエラー調査用で、広告プロフィールの作成には使いません。',
    uploadsProvider:
      '公開投稿の画像は Cloudflare R2 に保存します。各画像には代替テキストが必要で、位置などの埋め込みメタデータはアップロード時に除去します。画像は投稿と同じく公開されます。',
    translationProvider:
      '投稿の翻訳をリクエストすると、その本文を Cloudflare Workers AI が処理し、翻訳を表示します。アカウント情報は送信しません。リクエストがない場合は翻訳しません。',
  },
  'pt-BR': {
    metadata:
      'Privacidade do OutBrick: análises opcionais do app e do site, publicidade, serviços Apple, comunidade, e-mails e seus controles.',
    headline:
      'Sem conta do jogo. Análises opcionais. A publicidade continua sendo sua escolha.',
    intro:
      'O jogo não tem contas administradas pelo desenvolvedor. O progresso fica no aparelho e pode ser sincronizado pela sua própria conta do iCloud. Versões compatíveis para iPhone e iPad oferecem Google Analytics para Firebase de forma opcional; versões antigas não têm esse ajuste. As análises ficam desativadas por padrão e são separadas dos anúncios recompensados do Google AdMob, do site e da conta opcional da comunidade OutBrick.',
    changeTitle: 'Alterações de 17 de outubro de 2026',
    change:
      'Esta revisão descreve as análises opcionais nas versões compatíveis para iPhone e iPad. Não anuncia uma nova versão na App Store. As mudanças no site, e-mails e comunidade introduzidas em 8 de outubro de 2026 continuam descritas abaixo.',
    storage:
      'O app guarda localmente progresso, moedas, boosters, ajustes e preferências de acessibilidade e pode sincronizar o save privado pela sua conta do iCloud. As análises opcionais enviam os eventos limitados descritos abaixo, não seu save privado do iCloud nem uma cópia do tabuleiro. O desenvolvedor não recebe dados faciais nem administra contas do jogo.',
    appTitle: 'Análises opcionais no app',
    consent:
      'Nas versões compatíveis para iPhone e iPad, a análise do app nos ajustes do OutBrick fica desativada por padrão. Não configuramos o SDK Firebase Analytics nem colocamos eventos do jogo em fila antes do consentimento explícito. Recusar não altera fases, recompensas, compras nem o acesso ao jogo. A escolha vale para esta instalação, separada do banner de cookies do site.',
    data: 'Após o consentimento, o Google Analytics para Firebase nos ajuda a entender o funcionamento do jogo e os caminhos de compra por meio de relatórios. Os eventos podem incluir sessões e telas, início e resultado das fases, tempo decorrido, dificuldade, limites e jogadas usadas, objetivos restantes, saldos limitados de recursos, uso de boosters, visualizações e seleção de ofertas, pedidos e resultados de compra, além de carregamento, impressões, recompensas ganhas e concessões efetivas de anúncios recompensados. Novas compras verificadas podem incluir o identificador do produto, valor e moeda reais e um identificador de transação com hash local para evitar duplicações. Esta instrumentação não envia identificadores brutos de transação nem recibos.',
    identifier:
      'Os eventos são vinculados a um identificador pseudônimo de instância do app, portanto a coleta não é anônima. Nas categorias de privacidade da Apple, os identificadores analíticos e eventos associados são declarados como dados vinculados. Não anexamos nome, e-mail ou identidade do iCloud ou Game Center. Os relatórios podem incluir informações do app, sistema e aparelho e localização aproximada, como país derivado pelo Google das informações de rede; o Google Analytics 4 não registra nem armazena endereços IP. O jogo não solicita GPS para análises.',
    exclusions:
      'Não enviamos tabuleiros brutos, informações de blocos ocultos, textos do jogador, nomes, e-mails, saves do iCloud, identificadores de conta do Game Center, recibos completos nem localização precisa a este serviço. A coleta analítica do identificador de publicidade IDFA e do fornecedor IDFV, Google signals e personalização de anúncios estão desativadas. O consentimento do SDK publicitário é separado e segue a seção de publicidade desta política.',
    withdrawal:
      'Você pode desativar a análise do app nos ajustes do OutBrick. Isso interrompe novas coletas e redefine o identificador analítico local e nosso registro local de deduplicação de transações. Não apaga remotamente informações já recebidas pelo Google ou OutBrick nem desfaz o tratamento lícito anterior. Para solicitações de dados, use o contato e os direitos descritos nesta política; não envie dados de pagamento nem recibos completos.',
    provider:
      'O Google Analytics é fornecido pelo Google Ireland Limited e Google LLC. Quando a legislação da UE ou do Reino Unido se aplica, a base das análises opcionais é seu consentimento. O Google pode processar dados fora do seu país, inclusive nos Estados Unidos, conforme os termos aplicáveis de tratamento e transferência. A finalidade são relatórios agregados; não usamos esses eventos para personalizar anúncios.',
    retention:
      'A propriedade do Google Analytics usada pelo app e pelo site tem retenção de dados de eventos e usuários definida em 14 meses. A redefinição com nova atividade está ativada para dados de usuário, portanto uma atividade pode reiniciar esse prazo. Relatórios agregados padrão são separados e podem continuar disponíveis além da retenção de eventos individuais. Desativar não apaga remotamente dados anteriores.',
    diagnosticsTitle: 'Diagnósticos de desempenho e falhas',
    diagnostics:
      'Os diagnósticos de desempenho e falhas do Apple MetricKit são separados das análises opcionais de jogo. O controle de análise não afeta esses relatórios existentes, os diagnósticos da App Store da Apple nem o consentimento publicitário. Usamos os diagnósticos para investigar encerramentos, travamentos e problemas de desempenho, não como consentimento para análises opcionais.',
    choicesSummary:
      'O jogo não tem contas administradas pelo desenvolvedor. As análises são opcionais e desativadas por padrão nas versões compatíveis para iPhone e iPad; o site tem sua própria escolha de cookies. Gerencie essas opções separadamente de publicidade, serviços Apple, progresso local e e-mails.',
    websiteScope:
      'Esta seção trata apenas das análises deste site. A escolha no navegador é separada das análises opcionais do app.',
    help: 'Versões compatíveis para iPhone e iPad oferecem **análises do app** opcionais, desativadas por padrão nos ajustes. Ao aceitar, eventos pseudônimos de jogo e compra são enviados ao Google Analytics para relatórios; desativar interrompe novas coletas e redefine o identificador local, sem apagar remotamente dados anteriores. O consentimento publicitário do Google AdMob é separado. Veja nossa [política de privacidade](/privacy#app-analytics).',
    children:
      'O OutBrick tem classificação 4+. As análises opcionais ficam desativadas por padrão e não são necessárias para jogar; seus dados pseudônimos estão descritos acima. Evite incluir dados pessoais de crianças em mensagens de suporte. O jogo não tem chat público nem cadastro de contas. Os anúncios recompensados estão descritos acima; quando a Apple ou a lei aplicável exige tratamento voltado a crianças, isso limita a publicidade a anúncios não personalizados e impede o uso do identificador publicitário.',
    partners:
      'Serviços Apple, compras na App Store, Game Center, sincronização e backups do iCloud seguem seus próprios termos e políticas. O Google fornece anúncios recompensados e, somente após consentimento nas versões compatíveis, as análises do app descritas acima. Hospedagem, formulários, comunidade, e-mails do Resend e análises do site são descritos em seções separadas. Se você entrar com Apple, Google ou Facebook, esse fornecedor trata o acesso conforme seus termos. Atualizamos esta política e as informações de privacidade na App Store quando as práticas ou parceiros aplicáveis mudam. A data acima identifica esta revisão.',
    formsProvider:
      'Formulários de contato, afiliação, vagas e newsletter só enviam seus dados ao OutBrick quando você toca em Enviar. Cloudflare Workers processa o pedido, nosso Neon Postgres sob nosso controle guarda o registro e o Resend entrega os e-mails pertinentes. Validação, campo antispam oculto e limites de solicitações protegem os formulários; eles não são mais processados pelo Netlify Forms nem pelo Akismet.',
    formTechnical:
      'Guardamos consentimento e idioma enviados, horário e endereço da página de origem. Os limites usam um hash do IP da solicitação. A Cloudflare também processa informações técnicas de rede para fornecer e proteger o serviço; não descrevemos essas operações como anônimas.',
    formRetention:
      'Formulários e e-mails recebidos são mantidos por até 12 meses após a última troca, salvo relação em andamento ou obrigação legal que exija mais. Casos de suporte, candidaturas e outros registros seguem os prazos separados abaixo.',
    formDeletion:
      'Peça exclusão antecipada, cópia ou correção pelo formulário, assunto Privacidade, ou respondendo a um e-mail nosso. Removemos os registros pertinentes da base e caixa de entrada e confirmamos o resultado, sujeitos a obrigações legais de retenção.',
    databaseProvider:
      'Registros de contato, candidaturas, newsletter e comunidade ficam no Neon Postgres sob nosso controle, acessado pelo Cloudflare Workers. Isso substituiu a estrutura anterior do Netlify em 9 de outubro de 2026. Tipos e prazos estão abaixo; a migração não criou novas permissões de e-mail.',
    communityProvider:
      'Cloudflare Workers executa a API da comunidade, Neon Postgres guarda os registros, Cloudflare R2 armazena imagens e Resend entrega e-mails em nosso nome. O login opcional com Apple, Google ou Facebook segue a política do fornecedor e compartilha o identificador e e-mail descritos acima. Não vendemos dados da comunidade nem os usamos para publicidade.',
    hostingLogs:
      'A Cloudflare processa detalhes de rede e solicitações, como horário, endereço pedido, IP e navegador, para fornecer e proteger o site e investigar problemas. Logs do fornecedor seguem suas políticas e nossas configurações. Usamos diagnósticos operacionais para investigar erros, não para criar perfis publicitários.',
    uploadsProvider:
      'Imagens de posts públicos ficam no Cloudflare R2. Cada imagem precisa de texto alternativo; metadados incorporados, incluindo localização, são removidos no envio. A imagem é pública, como seu post.',
    translationProvider:
      'Ao pedir a tradução de um post, seu texto é processado pelo Cloudflare Workers AI e a tradução é exibida. O pedido não inclui dados da conta. Nada é traduzido sem solicitação.',
  },
};

export const appAnalyticsLegalTranslations = Object.fromEntries(
  (['fr', 'de', 'es', 'ja', 'pt-BR'] as LegacyLocale[]).map((locale) => [
    locale,
    Object.fromEntries(
      Object.entries(appAnalyticsPrivacy.en).map(([key, text]) => [
        text,
        appAnalyticsPrivacy[locale][key as keyof typeof appAnalyticsPrivacy.en],
      ]),
    ),
  ]),
) as Record<LegacyLocale, Record<string, string>>;
