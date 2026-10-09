import type { TranslatedLocale } from '../i18n/locales.ts';

/**
 * The contact form's and contact page's Support Centre wording, in the phrase dictionary the
 * localized page tree and the client form read (lib/i18n/public-pages.ts, lib/i18n/client-tree.tsx).
 * Keyed by the English text exactly as it appears in app/(en)/contact/contact-form.tsx and
 * app/(en)/contact/page.tsx. The Support Centre pages themselves use lib/support/copy/*.
 */
const phrases: Record<string, Record<TranslatedLocale, string>> = {
  'We will never ask for your Apple Account password, your card details or a code sent to your phone.': { fr: "Nous ne vous demanderons jamais le mot de passe de votre compte Apple, vos données de carte ni un code reçu sur votre téléphone.", de: "Wir fragen nie nach dem Passwort deines Apple Accounts, nach Kartendaten oder nach einem Code, der an dein Telefon geschickt wurde.", es: "Nunca te pediremos la contraseña de tu cuenta de Apple, los datos de tu tarjeta ni un código enviado a tu teléfono.", ja: "Appleアカウントのパスワード、カード情報、スマートフォンに届いたコードをおたずねすることは決してありません。", "pt-BR": "Nunca vamos pedir a senha da sua Conta Apple, os dados do seu cartão nem um código enviado ao seu celular." },
  'Beta testing': { fr: 'Tests bêta', de: 'Beta-Test', es: 'Pruebas beta', ja: 'ベータテスト', 'pt-BR': 'Testes beta' },
  'Accessibility panel': { fr: 'Panel accessibilité', de: 'Barrierefreiheits-Panel', es: 'Panel de accesibilidad', ja: 'アクセシビリティパネル', 'pt-BR': 'Painel de acessibilidade' },
  'About the problem': { fr: 'À propos du problème', de: 'Zum Problem', es: 'Sobre el problema', ja: '問題について', 'pt-BR': 'Sobre o problema' },
  '(optional)': { fr: '(facultatif)', de: '(optional)', es: '(opcional)', ja: '（任意）', 'pt-BR': '(opcional)' },
  'Level number': { fr: 'Numéro du niveau', de: 'Levelnummer', es: 'Número de nivel', ja: 'レベル番号', 'pt-BR': 'Número do nível' },
  'e.g. 512': { fr: 'ex. 512', de: 'z. B. 512', es: 'p. ej., 512', ja: '例：512', 'pt-BR': 'ex.: 512' },
  'Shown at the top of the board.': { fr: 'Affiché en haut du plateau.', de: 'Steht oben über dem Spielbrett.', es: 'Aparece en la parte superior del tablero.', ja: '盤面の上部に表示されています。', 'pt-BR': 'Aparece no alto do tabuleiro.' },
  'Enter the level as a number, like 512.': { fr: 'Saisissez le niveau en chiffres, par exemple 512.', de: 'Gib das Level als Zahl ein, etwa 512.', es: 'Escribe el nivel como número, por ejemplo 512.', ja: 'レベルは「512」のように数字で入力してください。', 'pt-BR': 'Digite o nível em número, como 512.' },
  'Assistive technology': { fr: 'Technologie d’assistance', de: 'Bedienungshilfe', es: 'Tecnología de asistencia', ja: '支援技術', 'pt-BR': 'Tecnologia assistiva' },
  'None or not sure': { fr: 'Aucune ou je ne sais pas', de: 'Keine oder nicht sicher', es: 'Ninguna o no lo sé', ja: 'なし・わからない', 'pt-BR': 'Nenhuma ou não sei' },
  'Voice Control': { fr: 'Contrôle vocal', de: 'Sprachsteuerung', es: 'Control por voz', ja: '音声コントロール', 'pt-BR': 'Controle por Voz' },
  'Switch Control': { fr: 'Contrôle de sélection', de: 'Schaltersteuerung', es: 'Control por botón', ja: 'スイッチコントロール', 'pt-BR': 'Controle Assistivo' },
  'Full Keyboard Access': { fr: 'Accès complet au clavier', de: 'Tastaturbedienung', es: 'Acceso total con teclado', ja: 'フルキーボードアクセス', 'pt-BR': 'Acesso Total ao Teclado' },
  'Larger Text': { fr: 'Texte plus grand', de: 'Größerer Text', es: 'Texto más grande', ja: 'さらに大きな文字', 'pt-BR': 'Texto Maior' },
  Zoom: { fr: 'Zoom', de: 'Zoom', es: 'Zoom', ja: 'ズーム', 'pt-BR': 'Zoom' },
  'What did you buy?': { fr: 'Qu’avez-vous acheté ?', de: 'Was hast du gekauft?', es: '¿Qué compraste?', ja: '購入したもの', 'pt-BR': 'O que você comprou?' },
  'e.g. Remove Ads': { fr: 'ex. Supprimer les pubs', de: 'z. B. Werbung entfernen', es: 'p. ej., Quitar anuncios', ja: '例：広告を消す', 'pt-BR': 'ex.: Remover anúncios' },
  'When did you buy it?': { fr: 'Quand l’avez-vous acheté ?', de: 'Wann hast du es gekauft?', es: '¿Cuándo lo compraste?', ja: '購入した日', 'pt-BR': 'Quando você comprou?' },
  'e.g. 8 October': { fr: 'ex. 8 octobre', de: 'z. B. 8. Oktober', es: 'p. ej., 8 de octubre', ja: '例：10月8日', 'pt-BR': 'ex.: 8 de outubro' },
  'These may answer your question': { fr: 'Ceci répond peut-être à votre question', de: 'Das beantwortet vielleicht deine Frage', es: 'Esto quizá responda a tu pregunta', ja: 'こちらで解決するかもしれません', 'pt-BR': 'Isto pode responder à sua pergunta' },
  'Known issue': { fr: 'Problème connu', de: 'Bekanntes Problem', es: 'Problema conocido', ja: '既知の不具合', 'pt-BR': 'Problema conhecido' },
  'Step-by-step fix': { fr: 'Solution pas à pas', de: 'Schritt-für-Schritt-Lösung', es: 'Solución paso a paso', ja: 'ステップごとの解決方法', 'pt-BR': 'Solução passo a passo' },
  Guide: { fr: 'Guide', de: 'Anleitung', es: 'Guía', ja: 'ガイド', 'pt-BR': 'Guia' },
  'Opens in a new tab. Your message stays here.': {
    fr: 'S’ouvre dans un nouvel onglet. Votre message reste ici.',
    de: 'Öffnet sich in einem neuen Tab. Deine Nachricht bleibt hier.',
    es: 'Se abre en una pestaña nueva. Tu mensaje se queda aquí.',
    ja: '新しいタブで開きます。入力中のメッセージはそのまま残ります。',
    'pt-BR': 'Abre em uma nova aba. Sua mensagem continua aqui.',
  },
  'You already tried the step-by-step fix for:': {
    fr: 'Vous avez déjà essayé la solution pas à pas pour :',
    de: 'Du hast die Schritt-für-Schritt-Lösung schon ausprobiert für:',
    es: 'Ya probaste la solución paso a paso para:',
    ja: '次の問題のステップごとの解決方法はすでに試しています：',
    'pt-BR': 'Você já tentou a solução passo a passo para:',
  },
  'Your reference:': { fr: 'Votre référence :', de: 'Deine Referenz:', es: 'Tu referencia:', ja: '受付番号：', 'pt-BR': 'Sua referência:' },
  'We have emailed you a private link to follow your request, read our replies and add details.': {
    fr: 'Nous vous avons envoyé par e-mail un lien privé pour suivre votre demande, lire nos réponses et ajouter des détails.',
    de: 'Wir haben dir per E-Mail einen privaten Link geschickt, mit dem du deine Anfrage verfolgen, unsere Antworten lesen und Details ergänzen kannst.',
    es: 'Te hemos enviado por correo un enlace privado para seguir tu solicitud, leer nuestras respuestas y añadir detalles.',
    ja: 'お問い合わせの状況確認、返信の閲覧、情報の追加ができる専用リンクをメールでお送りしました。',
    'pt-BR': 'Enviamos por e-mail um link privado para você acompanhar sua solicitação, ler nossas respostas e acrescentar detalhes.',
  },
  'Track your request': { fr: 'Suivre ma demande', de: 'Anfrage verfolgen', es: 'Seguir mi solicitud', ja: 'お問い合わせの状況を見る', 'pt-BR': 'Acompanhar minha solicitação' },
  'What happens next': { fr: 'Et ensuite ?', de: 'So geht es weiter', es: 'Qué pasa después', ja: '送信後の流れ', 'pt-BR': 'O que acontece depois' },
  'You get an email with your reference straight away.': {
    fr: 'Vous recevez tout de suite un e-mail avec votre référence.',
    de: 'Du bekommst sofort eine E-Mail mit deiner Referenz.',
    es: 'Recibes enseguida un correo con tu referencia.',
    ja: 'すぐに受付番号を記載したメールが届きます。',
    'pt-BR': 'Você recebe na hora um e-mail com sua referência.',
  },
  'A person on the team reads your message and replies by email.': {
    fr: 'Une personne de l’équipe lit votre message et vous répond par e-mail.',
    de: 'Ein Mensch aus dem Team liest deine Nachricht und antwortet per E-Mail.',
    es: 'Una persona del equipo lee tu mensaje y te responde por correo.',
    ja: 'チームのスタッフがメッセージを読み、メールで返信します。',
    'pt-BR': 'Uma pessoa da equipe lê sua mensagem e responde por e-mail.',
  },
  'Follow your request and add details at any time from the link in that email.': {
    fr: 'Suivez votre demande et ajoutez des détails à tout moment grâce au lien de cet e-mail.',
    de: 'Über den Link in dieser E-Mail kannst du deine Anfrage jederzeit verfolgen und Details ergänzen.',
    es: 'Sigue tu solicitud y añade detalles cuando quieras desde el enlace de ese correo.',
    ja: 'メール内のリンクから、いつでも状況を確認したり情報を追加したりできます。',
    'pt-BR': 'Acompanhe sua solicitação e acrescente detalhes quando quiser pelo link desse e-mail.',
  },
  'The Help Centre explains every screen, menu and setting.': {
    fr: 'Le Centre d’aide explique chaque écran, menu et réglage.',
    de: 'Das Hilfe-Center erklärt jeden Bildschirm, jedes Menü und jede Einstellung.',
    es: 'El Centro de ayuda explica cada pantalla, menú y ajuste.',
    ja: 'ヘルプセンターでは、すべての画面・メニュー・設定を説明しています。',
    'pt-BR': 'A Central de Ajuda explica cada tela, menu e ajuste.',
  },
};

export function supportSitePhrases(locale: TranslatedLocale): Record<string, string> {
  return Object.fromEntries(Object.entries(phrases).map(([english, t]) => [english, t[locale]]));
}
