import type { LegacyLocale } from './locales';
const en = {
  title: 'OutBrick Studio blog connection',
  description:
    'Connect the private dashboard to database blog articles using your verified staff permissions.',
  boundary:
    'Existing static articles remain Git-managed. This connection grants no account, member or moderation access. It expires after 90 days and can be revoked here.',
  manage: 'Manage connections',
  close: 'Close',
  drafts: 'Allow creating and editing blog drafts',
  publish:
    'Allow publishing and unpublishing reviewed blog revisions (admin only)',
  review:
    'I reviewed these permissions and authorize this private dashboard connection.',
  create: 'Create connection credential',
  once: 'Shown once. Paste into the private OutBrick Studio website connection settings. Never share it in email or chat. The website stores only its hash.',
  credential: 'Connection credential',
  hide: 'Hide credential',
  expires: 'Expires',
  revoked: 'Revoked',
  revoke: 'Revoke',
  failed: 'Connection request failed.',
};
type Words = typeof en;
export const studioConnectionWords: Record<'en' | LegacyLocale, Words> = {
  en,
  fr: {
    title: 'Connexion du blog à OutBrick Studio',
    description:
      'Connectez le tableau de bord privé aux articles du blog avec vos droits vérifiés.',
    boundary:
      'Les articles statiques restent gérés dans Git. Aucun accès aux comptes, membres ou à la modération. La connexion expire après 90 jours et peut être révoquée ici.',
    manage: 'Gérer les connexions',
    close: 'Fermer',
    drafts: 'Autoriser la création et la modification des brouillons',
    publish:
      'Autoriser la publication et le retrait des révisions relues (administrateur)',
    review:
      'J’ai vérifié ces autorisations et j’autorise cette connexion privée.',
    create: 'Créer un identifiant de connexion',
    once: 'Affiché une seule fois. Collez-le dans les réglages privés du site dans OutBrick Studio. Ne le partagez ni par e-mail ni dans un chat. Le site conserve uniquement son empreinte.',
    credential: 'Identifiant de connexion',
    hide: 'Masquer',
    expires: 'Expire le',
    revoked: 'Révoquée',
    revoke: 'Révoquer',
    failed: 'La demande de connexion a échoué.',
  },
  de: {
    title: 'Blog-Verbindung mit OutBrick Studio',
    description:
      'Verbinde das private Dashboard mit Blogartikeln über deine bestätigten Teamrechte.',
    boundary:
      'Statische Artikel bleiben in Git. Kein Zugriff auf Konten, Mitglieder oder Moderation. Die Verbindung läuft nach 90 Tagen ab und kann hier widerrufen werden.',
    manage: 'Verbindungen verwalten',
    close: 'Schließen',
    drafts: 'Blogentwürfe erstellen und bearbeiten erlauben',
    publish:
      'Geprüfte Blogversionen veröffentlichen und zurückziehen erlauben (Admin)',
    review: 'Ich habe die Rechte geprüft und erlaube diese private Verbindung.',
    create: 'Verbindungsschlüssel erstellen',
    once: 'Nur einmal sichtbar. In die privaten Website-Einstellungen von OutBrick Studio einfügen. Nicht per E-Mail oder Chat teilen. Die Website speichert nur den Hash.',
    credential: 'Verbindungsschlüssel',
    hide: 'Schlüssel ausblenden',
    expires: 'Läuft ab',
    revoked: 'Widerrufen',
    revoke: 'Widerrufen',
    failed: 'Verbindungsanfrage fehlgeschlagen.',
  },
  es: {
    title: 'Conexión del blog con OutBrick Studio',
    description:
      'Conecta el panel privado a los artículos del blog con tus permisos de equipo verificados.',
    boundary:
      'Los artículos estáticos se siguen gestionando en Git. No da acceso a cuentas, miembros ni moderación. Caduca a los 90 días y se puede revocar aquí.',
    manage: 'Gestionar conexiones',
    close: 'Cerrar',
    drafts: 'Permitir crear y editar borradores del blog',
    publish: 'Permitir publicar y retirar revisiones revisadas (administrador)',
    review: 'He revisado los permisos y autorizo esta conexión privada.',
    create: 'Crear credencial de conexión',
    once: 'Se muestra una sola vez. Pégala en los ajustes privados del sitio en OutBrick Studio. No la compartas por correo ni chat. El sitio solo guarda su hash.',
    credential: 'Credencial de conexión',
    hide: 'Ocultar credencial',
    expires: 'Caduca',
    revoked: 'Revocada',
    revoke: 'Revocar',
    failed: 'La solicitud de conexión ha fallado.',
  },
  ja: {
    title: 'OutBrick Studio ブログ連携',
    description:
      '確認済みのスタッフ権限で、非公開ダッシュボードをブログ記事に接続します。',
    boundary:
      '既存の静的記事は引き続き Git で管理します。アカウント、メンバー、モデレーションへのアクセスはありません。90 日で期限切れになり、ここから取り消せます。',
    manage: '連携を管理',
    close: '閉じる',
    drafts: 'ブログの下書き作成と編集を許可',
    publish: '確認済みの改訂版の公開と非公開を許可（管理者のみ）',
    review: '権限を確認し、この非公開連携を許可します。',
    create: '接続キーを作成',
    once: '一度だけ表示します。OutBrick Studio の非公開サイト設定に貼り付けてください。メールやチャットで共有しないでください。サイトはハッシュのみ保存します。',
    credential: '接続キー',
    hide: 'キーを隠す',
    expires: '有効期限',
    revoked: '取り消し済み',
    revoke: '取り消す',
    failed: '接続リクエストに失敗しました。',
  },
  'pt-BR': {
    title: 'Conexão do blog ao OutBrick Studio',
    description:
      'Conecte o painel privado aos artigos do blog com suas permissões verificadas de equipe.',
    boundary:
      'Os artigos estáticos continuam no Git. Não dá acesso a contas, membros ou moderação. A conexão expira após 90 dias e pode ser revogada aqui.',
    manage: 'Gerenciar conexões',
    close: 'Fechar',
    drafts: 'Permitir criar e editar rascunhos do blog',
    publish: 'Permitir publicar e retirar revisões conferidas (administrador)',
    review: 'Revisei as permissões e autorizo esta conexão privada.',
    create: 'Criar credencial de conexão',
    once: 'Exibida uma única vez. Cole nas configurações privadas do site no OutBrick Studio. Não compartilhe por e-mail ou chat. O site armazena apenas o hash.',
    credential: 'Credencial de conexão',
    hide: 'Ocultar credencial',
    expires: 'Expira em',
    revoked: 'Revogada',
    revoke: 'Revogar',
    failed: 'A solicitação de conexão falhou.',
  },
};
