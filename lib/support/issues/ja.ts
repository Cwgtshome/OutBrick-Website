import type { KnownIssue } from '../model.ts';

/**
 * Known issues, newest first (Japanese). Same ids, order, status and dates as en.ts.
 */
export const ja: KnownIssue[] = [
  {
    id: 'voiceover-focus',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'VoiceOverが盤面で位置を見失う',
    affects: 'OutBrick 5.1と5.1.1で、VoiceOverがオンのとき（レベル6以降）。',
    what: 'VoiceOverで盤面を読んでいる間、ゲームはそれを「遊んでいる」とみなしていませんでした。そのため少し間があくと、盤面の上にブースターを提案するカードが開き、カードを閉じるとVoiceOverのフォーカスの行き先がなくなって、先頭に戻っていました。iOS 17以前では、盤面の概要がすべてのタッチを受け止めてしまうこともありました。',
    workaround: [
      '盤面を読んでいる間にブースターやヒントを提案するカードが表示されたら、**2本指のスクラブ**で閉じると盤面に戻れます。',
      '**ローター**（そろうピース、スペシャル、目標、障害物、門）で、目的のものへ直接移動できます。',
      'ピースの**アクション**（上下にスワイプ）で動かすと、フォーカスは盤面にとどまります。',
    ],
    fix: 'OutBrick 5.1.2で修正し、Appleの審査に提出済みです。その後のアップデートでは、作業中に見つけたVoiceOverの改善もさらに加わります。自動アップデートをオンにしておくと、公開されてすぐに受け取れます。',
    more: 'help:voiceover',
  },
  {
    id: 'missions-slide-match',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'スライド＆マッチの盤面でミッションの進み具合が数えられない',
    affects: 'OutBrick 5.1と5.1.1。',
    what: 'スライド＆マッチの盤面を遊んでも進まないミッションがあり、またいくつかのミッションは、その盤面では達成できないことを求めています。レベル、星、コインには影響はなく、影響するのはミッションのカウンターだけです。',
    workaround: ['何もする必要はありません。盤面での進行状況は失われません。達成できないミッションは、アップデートまでそのまま待っています。'],
    fix: '修正済みです。修正は5.1.2の次のアップデートで届きます。スライド＆マッチの盤面でもミッションが数えられるようになり、その盤面では達成できないミッションは出なくなります。',
    more: 'help:rewards-and-events',
  },
  {
    id: 'pt-br-links',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: 'ブラジルポルトガル語のプレイヤーに、コミュニティと不具合を報告が英語のページを開く',
    affects: 'ブラジルポルトガル語で遊んでいるOutBrick 5.1と5.1.1。',
    what: '**設定 › コミュニティ**と**不具合を報告**が、ポルトガル語版ではなく英語版のOutBrickコミュニティを開きます。',
    workaround: ['サイトのどのページでも、下部で**Português (Brasil)**を選ぶか、[ポルトガル語のコミュニティ](/pt-BR/community)を直接開いてください。'],
    fix: '修正済みです。修正は5.1.2の次のアップデートで届きます。',
  },
  {
    id: 'ad-choices-label',
    status: 'fix-coming',
    checked: '2026-10-09',
    title: '設定の「Advertising choices」が英語のまま表示される',
    affects: '英語以外のすべての言語で遊んでいる、EEA、イギリス、スイスのOutBrick 5.1と5.1.1。',
    what: '設定の**広告の選択**のボタンが、英語の「Advertising choices」と表示されます。ボタンは正常に動作し、翻訳されていないのは表示だけです。',
    workaround: [],
    fix: '修正済みです。修正は5.1.2の次のアップデートで届きます。',
  },
  {
    id: 'tip-card-frozen',
    status: 'fixed',
    checked: '2026-10-09',
    title: '手数の追加後に盤面が固まったように見えることがあった',
    affects: 'OutBrick 5.1。',
    what: 'ティーチングカードが表示されている間に手数が追加されると、カードが見えなくなったまま盤面をふさいでしまうことがありました。VoiceOverはそのカードしか見つけられず、次のスワイプはカードを片づけるのに使われていました。',
    workaround: [],
    fix: 'OutBrick 5.1.1で修正済みで、2026年10月8日からApp Storeで公開されています。まだの場合は、App StoreからOutBrickをアップデートしてください。',
  },
];
