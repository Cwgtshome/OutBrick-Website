import type { HelpArticle } from '../../model.ts';

/**
 * Perguntas frequentes, a primeira semana, tabuleiros difíceis e o glossário, em português do
 * Brasil. Conferido com a 5.1.1 (68). Cada número da economia aqui repete um que já está em
 * play.ts, progress.ts ou account.ts; mude lá primeiro e depois aqui.
 */
export const startMoreArticles: HelpArticle[] = [
  {
    slug: 'common-questions',
    category: 'start',
    cover: 'home',
    host: 'sprout',
    hostPose: 'think',
    title: 'Perguntas frequentes, respondidas com sinceridade',
    summary:
      'Respostas curtas e exatas para o que os jogadores mais perguntam: cronômetros, vidas, anúncios e compras, jogar offline, celular novo, acessibilidade, crianças e como falar com uma pessoa.',
    keywords:
      'faq perguntas frequentes respostas dúvidas cronômetro timer relógio tempo perder vida por que vidas ajudinha anúncios propaganda pagar grátis offline modo avião sem internet celular novo trocar de celular transferir progresso crianças filhos família classificação etária cego baixa visão daltônico daltonismo contato suporte atendimento humano pessoa e-mail',
    sections: [
      {
        id: 'playing',
        title: 'Como jogar',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'O OutBrick tem tempo marcado?',
                a: 'Não. **Não há relógio em lugar nenhum** no OutBrick: nem num tabuleiro, nem num menu, nem num evento. Cada tabuleiro dá um número de **jogadas**, e esse é o único limite. Leve o tempo que quiser em cada jogada.\n\nUma troca que não forma linha volta ao lugar e **não gasta jogada**. Veja [Sem relógio, sem pressa](help:accessibility#no-timers).',
              },
              {
                q: 'Como jogo um tabuleiro?',
                a: '**Deslize** um tijolo na direção de um espaço vazio, ou até o portão da cor dele para mandá-lo para casa. **Troque** um tijolo com o vizinho para formar uma linha de três ou mais e fazê-los sumir. Cumpra os objetivos do painel no alto antes que as jogadas acabem. Veja [Boas-vindas ao OutBrick](help:welcome) e [Como jogar um tabuleiro](help:playing-a-board).',
              },
              {
                q: 'Por que minha troca voltou?',
                a: 'Uma troca só vale se formar uma linha de três ou mais, um quadrado 2×2, disparar dois especiais juntos ou usar uma bomba de cor. Caso contrário, os tijolos voltam, você sente dois toques curtos e **nenhuma jogada é gasta**. Veja [Trocar e combinar](help:playing-a-board#swap).',
              },
              {
                q: 'Posso ficar sem saída num tabuleiro?',
                a: 'Não. Se nenhuma jogada for possível, o tabuleiro é embaralhado de graça, com o aviso **Embaralhando!**, sem gastar jogada nem vida. Um tabuleiro que ainda tem jogadas, mas nunca chegaria aos seus objetivos, é distribuído de novo sem alarde, e tijolos sobrando mudam de cor se faltar a cor de um objetivo. Veja [Você nunca fica sem saída](help:playing-a-board#never-stuck).',
              },
              {
                q: 'Como ganho três estrelas?',
                a: 'As estrelas acompanham a sua **pontuação**. Toda conclusão vale pelo menos uma estrela; uma pontuação maior dá duas ou três, e a trilha de estrelas no cabeçalho mostra quanto falta. Cada jogada que sobra no fim vira um raio de linha que vale 150 pontos, então terminar cedo ajuda. Jogue de novo pela Jornada qualquer tabuleiro concluído para melhorar as estrelas dele. Veja [Pontuação, estrelas e o bônus de fim de tabuleiro](help:playing-a-board#stars).',
              },
              {
                q: 'O que significam Difícil, Superdifícil, Chefe e Noite?',
                a: 'São níveis de dificuldade, mostrados numa placa embaixo do cabeçalho. Os tabuleiros Difícil pedem cerca de 15% a mais, os Superdifícil cerca de 30% a mais, e um Chefe (o último tabuleiro de um capítulo, a partir do nível 40) cerca de 40% a mais. Um tabuleiro Noite se passa depois do anoitecer e joga como um Difícil. As dificuldades maiores pagam mais moedas. Veja [Como vencer um tabuleiro difícil](help:hard-boards#tiers).',
              },
              {
                q: 'O OutBrick é adequado para crianças?',
                a: 'O OutBrick tem classificação **4+** na App Store: tabuleiros abstratos de tijolos, personagens simpáticos, nenhum chat e nada escrito por outras pessoas dentro do jogo. Os vídeos só passam quando alguém escolhe um em troca de uma recompensa, e as compras passam pela Apple, então o Tempo de Uso e o Pedir para Comprar podem exigir a sua aprovação. O site da comunidade, que o jogo abre no Safari, é para pessoas a partir de 16 anos. Veja [a classificação etária](/age-rating) e [Um guia para pais e responsáveis](help:parents-guide).',
              },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas e jogadas',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Por que perdi uma vida?',
                a: 'Uma vida só é gasta quando você **perde** uma tentativa num tabuleiro. Isso acontece de três jeitos:\n\n**1.** Suas jogadas acabam e você escolhe **Desistir** (ou fecha a tela de jogadas esgotadas). **2.** Você **sai** de um tabuleiro depois de fazer uma jogada. **3.** Você **reinicia** pela Pausa depois de fazer uma jogada.\n\nO jogo sempre avisa antes: o cartão **Sair?** e os botões Reiniciar e Desistir dizem quando uma vida vai ser gasta. Veja [Quando uma vida é gasta](help:lives-moves-and-undos#lives).',
              },
              {
                q: 'Vencer ou começar um tabuleiro custa uma vida?',
                a: 'Não. Abrir um tabuleiro exige uma vida, mas **não gasta nenhuma**, e **vencer nunca custa uma vida**. Sair ou reiniciar antes da primeira jogada também é grátis, assim como continuar com mais jogadas, porque é a mesma tentativa.',
              },
              {
                q: 'Quanto tempo as vidas levam para voltar?',
                a: 'Uma a cada **30 minutos**, mesmo com o jogo fechado, até **cinco** (oito enquanto você tiver o Passe de Tijolos atual). Toque no coração no cabeçalho da Jornada para ver quando vem a próxima.',
              },
              {
                q: 'O que é a ajudinha?',
                a: 'Se um tabuleiro vence você várias vezes, o jogo dá uma mãozinha: a partir da **sexta tentativa** no mesmo tabuleiro, você começa com **3 jogadas extras**, e o tabuleiro diz “Uma ajudinha: 3 movimentos a mais nesta tentativa”. Ela vem uma vez por dia em cada tabuleiro e não custa nada. Veja [Nível falhou e tentar de novo](help:lives-moves-and-undos#level-failed).',
              },
              {
                q: 'O que acontece quando as jogadas acabam?',
                a: 'Você vê o que falta e pode continuar na mesma tentativa: +5 jogadas por 300 moedas, depois 500 (com uma Dica), depois 900 (com um OVNI), ou um vídeo opcional por +2 jogadas, depois +1, depois um OVNI grátis. Ou escolha **Desistir**, que gasta uma vida. Nada pago é oferecido antes do nível 6. Veja [Sem jogadas](help:lives-moves-and-undos#out-of-moves).',
              },
              {
                q: 'Desfazer é grátis?',
                a: 'O **primeiro desfazer de cada tabuleiro é grátis**. Depois disso, os desfazeres vêm de um estoque de até cinco, que recarrega um a cada 25 minutos. Veja [Desfazer](help:boosters-and-pause#undo).',
              },
              {
                q: 'Estou sem vidas. Ainda dá para jogar?',
                a: 'Uma vez por dia, um estoque vazio pode ganhar **uma tentativa grátis** em um tabuleiro: se vencer, você fica com a vida; se perder, não custa nada. Se não, espere a próxima vida, recarregue com moedas ou com uma recarga guardada, ou assista a um vídeo opcional para ganhar uma vida. Veja [Sem vidas](help:lives-moves-and-undos#out-of-lives).',
              },
            ],
          },
        ],
      },
      {
        id: 'purchases-ads',
        title: 'Compras e anúncios',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Preciso assistir a anúncios ou pagar?',
                a: 'Não. Todo tabuleiro pode ser jogado sem gastar dinheiro nem assistir a nada: as vidas voltam sozinhas, e cada tentativa vem com uma Dica, um Foguete e um OVNI grátis. Vídeos e compras são extras opcionais.',
              },
              {
                q: 'Tem anúncio entre um tabuleiro e outro?',
                a: 'Não. O OutBrick **não tem anúncios obrigatórios**: nada de banners nem de anúncios que surgem do nada. Um vídeo só passa quando você escolhe um em troca de uma recompensa, só um vídeo assistido até o fim paga, e há um limite de **39 por dia** entre oito tipos. Veja [Vídeos opcionais](help:lives-moves-and-undos#videos) e [Como funcionam recompensas, vidas e anúncios](help:rewards-and-ads).',
              },
              {
                q: 'O que faz Remover anúncios?',
                a: 'Tira todos os vídeos opcionais, mas mantém as recompensas: os botões que diziam Assistir passam a dizer **Resgatar recompensa** e pagam na hora, dentro dos mesmos limites diários. Ter o Passe de Tijolos atual faz o mesmo durante aquela temporada. Veja [Remover anúncios e o Passe de Tijolos](help:shop-and-purchases#remove-ads).',
              },
              {
                q: 'Alguma coisa é assinatura?',
                a: 'Não. Todo passe e item com tempo é uma compra única, e **nada se renova sozinho**. Os preços aparecem na sua moeda local, definidos pela App Store.',
              },
              {
                q: 'Algo que comprei sumiu. O que eu faço?',
                a: 'Abra a **Loja**, role até o final e toque em **Restaurar compras**. Moedas, reforços e vidas acompanham o seu progresso pelo iCloud, não pela App Store. Ainda falta? Escreva para nós em particular pelo [formulário de contato](/contact). Veja [Progresso perdido ou compra que sumiu](help:lost-progress-and-purchases).',
              },
              {
                q: 'Como peço um reembolso?',
                a: 'As compras são feitas pela Apple, então é a Apple que cuida dos reembolsos. Veja [nossa página de reembolsos](/refunds) para saber como pedir.',
              },
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Progresso e aparelhos',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'O OutBrick funciona offline?',
                a: 'Sim. **Todos os tabuleiros funcionam offline**, então um túnel ou um voo não atrapalham. Algumas coisas precisam de conexão: os vídeos opcionais, as compras e **Restaurar compras**, a aba Ranking, as corridas e o Game Center. Seu progresso fica no seu aparelho e no seu iCloud, e sincroniza quando você volta a ficar online.',
              },
              {
                q: 'Vou perder meu progresso se trocar de celular?',
                a: 'Não, se você usar o iCloud. O progresso é salvo na sua própria conta do iCloud, então um iPhone ou iPad novo com sessão iniciada na **mesma Conta Apple** recupera seu nível, estrelas, moedas, reforços, sequências, Coleção e Guarda-roupa. Depois, toque em **Restaurar compras** na Loja. Se o aparelho antigo nunca teve sessão no iCloud, inicie a sessão nele e abra o OutBrick uma vez antes de trocar. Veja [Como passar para um iPhone ou iPad novo](help:progress-privacy-and-account#new-device).',
              },
              {
                q: 'Preciso de uma conta do OutBrick?',
                a: 'Não. Não existe conta do OutBrick para criar: o jogo usa o seu iCloud. O site da comunidade tem um login próprio e opcional, separado do jogo.',
              },
              {
                q: 'Posso jogar no iPhone e no iPad?',
                a: 'Sim. Com sessão na mesma Conta Apple, os dois aparelhos compartilham um único salvamento pelo iCloud. Quando eles discordam, nada é sobrescrito: o nível e as contagens mais altos são mantidos e as coleções são somadas. Os ajustes de som e a maioria dos ajustes de acessibilidade do tabuleiro ficam em cada aparelho; sua escolha de Daltonismo acompanha você.',
              },
              {
                q: 'Como recomeço do nível 1?',
                a: '**Ajustes › Apagar meus dados**, bem no final da aba Jogo, redefine seu progresso e pede ao iCloud que apague seu salvamento. Não é possível desfazer. Veja [Como apagar seus dados](help:progress-privacy-and-account#delete).',
              },
            ],
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'Acessibilidade',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Dá para jogar sendo cego ou com baixa visão?',
                a: 'Sim. Com o **VoiceOver**, cada tabuleiro é lido casa por casa, cada peça é nomeada por tipo, cor e estado, e você desliza e troca com ações como “Deslizar para a esquerda, sai pelo portão vermelho”. Os rotores vão direto aos objetivos, especiais, bloqueios e portões, e o toque duplo com dois dedos dá uma dica grátis. Para baixa visão, experimente o **Tabuleiro de alto contraste** e o Texto Maior. Veja [Como jogar com o VoiceOver](help:voiceover) e [Visão, audição e movimento](help:vision-hearing-and-motion).\n\nNas versões 5.1 e 5.1.1, o VoiceOver pode perder o lugar no tabuleiro; uma correção está a caminho. Veja os [problemas conhecidos](/support/known-issues) para saber o que fazer enquanto isso.',
              },
              {
                q: 'Dá para jogar sendo daltônico?',
                a: 'Sim. Os símbolos de **Daltonismo** vêm ativados desde o primeiro tabuleiro: cada cor tem a sua forma (vermelho círculo, laranja triângulo, amarelo quadrado, verde losango, azul sinal de mais, roxo estrela, rosa barra, turquesa hexágono), e os objetivos e portões levam a mesma forma. Veja [Símbolos para daltonismo](help:vision-hearing-and-motion#colour-blind).',
              },
              {
                q: 'Dá para jogar com botões assistivos, com a voz ou com um teclado?',
                a: 'Sim. Todo tabuleiro pode ser jogado com o Controle por Voz (“Tocar em Vermelho 14” e depois “Tocar em Esquerda”), o Controle Assistivo ou as teclas de seta. **Confirmar trocas** faz você escolher cada jogada duas vezes, para que nada seja jogado sem querer. Veja [Controle por Voz, Controle Assistivo e teclados](help:voice-control-switch-control-keyboard).',
              },
              {
                q: 'Preciso ouvir alguma coisa para jogar?',
                a: 'Não. Os amigos falam em balões de texto, não com voz, e todo som tem algo na tela que corresponde a ele. A Vibração deixa você sentir as jogadas. Veja [Som, música, vibração e Som da linha](help:vision-hearing-and-motion#sound).',
              },
              {
                q: 'Dá para deixar o jogo mais lento?',
                a: 'Sim. **Ajustes › Acessibilidade › Velocidade da animação** vai de 50% a 200%; em 50%, cada troca, queda e remoção leva o dobro do tempo. Sem relógio em lugar nenhum, o único ritmo é o seu. Veja [Jogar com calma](help:playing-calmly).',
              },
            ],
          },
        ],
      },
      {
        id: 'team',
        title: 'A equipe',
        blocks: [
          {
            t: 'faq',
            items: [
              {
                q: 'Como falo com uma pessoa?',
                a: 'No jogo, abra **Ajustes › Fale conosco**, ou use o [formulário de contato](/contact) deste site. **Uma pessoa da equipe lê cada mensagem**, e tentamos responder em até dois dias úteis. Sua mensagem recebe uma referência (como OB-7K2QXM) e um link privado para acompanhá-la. Nunca envie uma senha nem dados de cartão.',
              },
              {
                q: 'Quem faz o OutBrick?',
                a: 'O OutBrick é um projeto pequeno e independente. Saiba mais em [Sobre o OutBrick](/about).',
              },
              {
                q: 'Como relato um bug?',
                a: 'No jogo, **Ajustes › Relatar um bug** abre um relato com seu aparelho, as versões e o nível já preenchidos, sem seu nome nem sua conta. Veja [Como relatar um bug do jeito certo](help:reporting-bugs), e confira antes os [problemas conhecidos](/support/known-issues): talvez já estejamos corrigindo.',
              },
              {
                q: 'Onde posso pedir ajuda a outros jogadores com um nível?',
                a: 'Use [Ajuda com um nível](/support/levels): digite o número do nível para ver o que outros disseram sobre aquele tabuleiro, ou pergunte a eles. Veja [Como usar a Comunidade OutBrick](help:using-the-community).',
              },
              {
                q: 'Posso sugerir uma ideia ou testar atualizações antes?',
                a: 'Sim. Publique e vote em [Ideias e sugestões](/community/c/ideas), e veja [Ajude a construir o OutBrick](/support/get-involved) para entrar no grupo beta ou no painel de acessibilidade.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Ainda sem resposta?',
            text: 'Busque na Central de Ajuda uma palavra da sua pergunta, ou pergunte em [Ajuda e suporte](/community/c/help). Para qualquer assunto particular, como uma compra, use o [formulário de contato](/contact).',
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
    title: 'Sua primeira semana no OutBrick',
    summary:
      'Como costuma ser a primeira semana, dia a dia: a Cidade Jardim e seus cartões de ensino, suas primeiras estrelas e a recompensa da vila, os tabuleiros Difícil, a Clover Farm e os pequenos hábitos diários que deixam a Jornada mais tranquila.',
    keywords:
      'iniciante jogador novo novato começando primeiros dias semana guia o que esperar cidade jardim garden city clover farm fazenda tutorial cartões de ensino tijolo do dia sequência missões roda presente de boas-vindas guardar reforços dicas',
    sections: [
      {
        id: 'pace',
        title: 'Antes de começar',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick não tem relógio nem nada que apresse você. A semana abaixo é um **ritmo típico, não um cronograma**: alguns jogadores concluem a Cidade Jardim numa tarde, outros levam uma semana. Nada na Jornada se perde se você for mais devagar.',
          },
          {
            t: 'friend',
            friend: 'bloo',
            pose: 'cheer',
            title: 'Uma ideia de cada vez',
            text: 'A primeira vila foi feita para ensinar. Cada tabuleiro traz no máximo uma ideia nova, e um cartão de ensino curto a mostra na primeira vez, com uma mão em movimento. Toque em qualquer lugar para começar a jogar.',
          },
        ],
      },
      {
        id: 'week',
        title: 'Dia a dia',
        blocks: [
          {
            t: 'path',
            items: [
              {
                day: 'Dia 1',
                title: 'A Cidade Jardim e seus primeiros tabuleiros',
                text: 'Toque no botão verde **Nível** no Início. O nível 1 ensina a deslizar um tijolo para casa pelo portão dele; o nível 2 ensina a trocar para formar linhas. Cada tentativa vem com uma **Dica**, um **Foguete** e um **OVNI** grátis, e logo no começo um **presente de boas-vindas** único, com 2 de cada, chega à sua barra. Sua primeira conclusão do dia também paga o **Tijolo do dia**: 100 moedas, resgatadas no Início.',
              },
              {
                day: 'Dia 2',
                title: 'Tijolos que caem e seus primeiros bloqueios',
                text: 'A Cidade Jardim continua trazendo ideias: tabuleiros em que os tijolos caem e chegam tijolos novos, tijolos longos que precisam de um portão tão largo quanto eles, e depois caixotes, gelo, cadeados, musgo e estátuas. Cada um ganha seu próprio cartão de ensino. Concluir um tabuleiro de novo hoje deixa sua **sequência de dias** com dois dias, e a **Roda** no Início dá um giro grátis por dia.',
              },
              {
                day: 'Dia 3',
                title: 'Estrelas e sua primeira placa Difícil',
                text: 'Fique de olho na **trilha de estrelas** enquanto joga: uma pontuação maior dá duas ou três estrelas, e cada vila tem 36. Juntá-las faz você subir a escada de estrelas da vila (50 moedas, uma Dica, 100 moedas e um Foguete); um selo no mapa avisa quando uma recompensa está pronta. Os últimos tabuleiros da Cidade Jardim levam uma placa **Difícil**. Três dias seguidos pagam sua primeira recompensa de sequência: 100 moedas.',
              },
              {
                day: 'Dia 4',
                title: 'Uma vila completa, e a Clover Farm',
                text: 'Conclua os doze tabuleiros da Cidade Jardim e um cartão de comemoração oferece **Compartilhar** e **Vamos em frente**. A Clover Farm, níveis 13 a 24, tem os mesmos doze tipos de tabuleiro na mesma ordem, e as ideias que você aprendeu começam a se combinar. Se as jogadas acabarem, a tela de jogadas esgotadas oferece formas de continuar; nada pago é oferecido antes do nível 6.',
              },
              {
                day: 'Dia 5',
                title: 'O Ranking e dificuldades maiores',
                text: 'A aba **Ranking** é liberada no nível 21. Tabuleiros Superdifícil começam a aparecer nas primeiras vilas, e a partir do nível 40 o último tabuleiro de cada capítulo é um **Chefe**. Tabuleiros mais difíceis pagam mais moedas por concluir. Veja [Como vencer um tabuleiro difícil](help:hard-boards) quando um deles travar você.',
              },
              {
                day: 'Dia 6',
                title: 'Ideias novas continuam chegando',
                text: 'Conforme as vilas passam, os tabuleiros ganham tampas sobre **canteiros selados**, **tijolos virados “?”**, portões congelados e contados, portões de etapa e portais. Cada um ganha um cartão de ensino na primeira vez que você o encontra, e você pode tocar em qualquer bloqueio ou tampa num tabuleiro para ver um lembrete de uma linha.',
              },
              {
                day: 'Dia 7',
                title: 'Uma semana depois',
                text: 'Sete dias seguidos pagam **250 moedas e um protetor de sequência**, que pode recuperar um dia perdido mais tarde. As missões semanais recomeçam na segunda-feira, e cada nível novo que você concluiu foi subindo as faixas do **Passe de Tijolos**. Toque no seu avatar para ver suas estatísticas até agora.',
              },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Os níveis exatos variam com o seu ritmo. O Ranking (nível 21) e a Coleção (nível 95) são liberados por nível, não por dia, e alguns tabuleiros de cada vila são Difícil de propósito.',
          },
        ],
      },
      {
        id: 'garden-city',
        title: 'O que a Cidade Jardim ensina',
        blocks: [
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Um tabuleiro da Cidade Jardim com tijolos vermelhos, roxos e laranja. Um cartão de ensino rosa na parte de baixo diz: Deslize um tijolo para perto de dois da mesma cor para fazer uma linha, ou empurre-o contra um vizinho para trocar. Linhas somem! Embaixo: Sua vez, tente! Uma mão aponta para um tijolo.',
            caption: 'Um cartão de ensino no nível 2. Cada ideia nova ganha um cartão, na primeira vez que você a encontra.',
          },
          {
            t: 'p',
            text: 'A Cidade Jardim é a primeira vila: níveis 1 a 12, um de cada um dos [doze tipos de tabuleiro](help:bricks-specials-and-blockers#kinds). Toda vila seguinte segue a mesma ordem, então o que a Cidade Jardim ensina continua valendo por 2.000 níveis.',
          },
          {
            t: 'list',
            items: [
              '**Deslizar para casa:** um tijolo só sai por um portão aberto da cor dele. Qualquer outro portão funciona como parede.',
              '**Trocar:** uma troca só vale se formar uma linha de três ou mais; caso contrário, ela volta e não custa nada.',
              '**Objetivos de portão também contam combinações:** um objetivo como “mandar os vermelhos para casa” conta os tijolos vermelhos que você desliza para fora e os que você faz sumir em linhas.',
              '**Especiais:** quatro em linha, um L ou T, um quadrado 2×2 e cinco em linha criam, cada um, um tijolo especial diferente. Veja [Tijolos especiais](help:bricks-specials-and-blockers#specials).',
              '**Tabuleiros com queda:** onde os tijolos caem, você pode deslizar para os lados ou direto para fora por um portão.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Com o VoiceOver, os cartões de ensino são a única coisa na tela enquanto aparecem: toque duas vezes para começar a jogar. O primeiro tabuleiro com portões que você jogar também avisa sobre o rotor **Portões**.',
          },
        ],
      },
      {
        id: 'first-stars',
        title: 'Suas primeiras estrelas e a recompensa da vila',
        blocks: [
          {
            t: 'list',
            items: [
              'Toda conclusão vale pelo menos **uma estrela**. As jogadas que sobram viram raios de linha que valem 150 pontos cada, então um final caprichado muitas vezes leva uma estrela a duas.',
              'O indicador de **estrelas** no cabeçalho da Jornada conta as estrelas desta vila. Toque nele para ver as recompensas por estrelas.',
              'Você pode jogar de novo pela Jornada qualquer tabuleiro concluído para melhorar as estrelas dele; jogar de novo nunca muda o seu lugar no mapa.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'O cartão de vitória: uma faixa dourada com Serra do Foguete 4, um selo de Capítulo concluído, três estrelas douradas, um amigo tijolo verde comemorando, a palavra Brilhante!, uma pontuação de 5.470, mais 125 moedas, um selo De primeira!, uma linha do baú da jornada e os botões Início, Próximo e Compartilhar.',
            caption: 'O cartão de vitória: suas estrelas, pontuação, moedas e as recompensas que você pegou pelo caminho.',
          },
        ],
      },
      {
        id: 'habits',
        title: 'Hábitos que ajudam',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Um pouquinho por dia rende muito',
            text: 'Uma conclusão por dia basta para receber o Tijolo do dia e manter sua sequência crescendo. Você não precisa de sessões longas: o OutBrick recompensa mais quem volta do que quem fica.',
          },
          {
            t: 'table',
            head: ['Hábito', 'Por que ajuda'],
            rows: [
              ['Concluir um tabuleiro por dia', 'Paga o **Tijolo do dia** (100 moedas) e faz sua sequência de dias crescer: 100 moedas com 3 dias, 250 e um protetor de sequência com 7.'],
              ['Girar a Roda', 'Um giro grátis por dia, que vale moedas ou um reforço. Conclua três níveis novos naquele dia e o giro grátis paga moedas em dobro.'],
              ['Conferir as Missões', 'Três para hoje e três para a semana, cada uma com uma recompensa. Toque em **Resgatar** ou **Resgatar tudo**.'],
              ['Resgatar as recompensas por estrelas', 'Um selo no mapa avisa quando uma recompensa por estrelas da vila está esperando.'],
              ['Usar os reforços grátis', 'A Dica, o Foguete e o OVNI grátis de cada tentativa não podem ser guardados, então use-os.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Missões na 5.1.1',
            text: 'Algumas missões não contam o progresso nos tabuleiros Slide & Match nas versões 5.1 e 5.1.1, e algumas pedem coisas que esses tabuleiros não conseguem dar. Seus níveis, estrelas e moedas não são afetados, e uma correção está a caminho. Veja os [problemas conhecidos](/support/known-issues).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Guardar reforços para quando importam',
        blocks: [
          {
            t: 'list',
            items: [
              'Um selo **GRÁTIS** num reforço indica que o próximo uso não custa nada; o jogo gasta os grátis antes dos que você tem.',
              'Os reforços que você tem (do presente de boas-vindas, da Roda, das recompensas por estrelas, das Missões e do Passe de Tijolos) ficam guardados até você usá-los.',
              'Sequências de vitórias dão mais para o próximo tabuleiro: 2 vitórias seguidas dão uma Dica, 3 um Foguete, 4 um OVNI e 5 os três. Só contam níveis novos.',
              'Guarde os Foguetes e OVNIs que você tem para os tabuleiros Difícil, Superdifícil e Chefe, onde um bloqueio no lugar errado pode custar o tabuleiro.',
            ],
          },
          { t: 'p', text: 'Mais em [Reforços, dicas e Pausa](help:boosters-and-pause) e [Como vencer um tabuleiro difícil](help:hard-boards#boosters).' },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas na sua primeira semana',
        blocks: [
          {
            t: 'p',
            text: 'As vidas só vão embora quando você perde uma tentativa, nunca quando vence ou abre um tabuleiro. Se estiver em dúvida sobre um tabuleiro, dê uma olhada antes: sair antes da primeira jogada é sempre grátis. Depois da sua terceira conclusão, o jogo pergunta uma vez se pode enviar lembretes, como o de vidas cheias; **Agora não** espera uma semana. Veja [Vidas, ficar sem jogadas e desfazer](help:lives-moves-and-undos).',
          },
        ],
      },
      {
        id: 'next',
        title: 'Para onde ir agora',
        blocks: [
          {
            t: 'list',
            items: [
              '[Um passeio por todos os menus](help:menus-tour), para cada botão fazer sentido.',
              '[A Jornada e suas vilas](help:journey-and-villages), para baús, presentes e o atlas de todas as vilas.',
              '[Recompensas, eventos e o Passe de Tijolos](help:rewards-and-events), para sequências, Missões e eventos.',
              '[Glossário do OutBrick](help:glossary), sempre que aparecer uma palavra nova.',
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
    title: 'Como vencer um tabuleiro difícil',
    summary:
      'O método de quem joga muito para os tabuleiros que insistem em vencer você: ler os objetivos, contar as jogadas, escolher entre deslizar e combinar, trabalhar por baixo nos tabuleiros com queda, guardar especiais para combos, gastar bem reforços e desfazeres e saber quando continuar.',
    keywords:
      'estratégia dicas truques macetes travado empacado nível difícil fase difícil não consigo passar vencer nível superdifícil chefe noite ajuda detonado solução plano jogadas combos cascatas reforços desfazer continuar ajudinha voiceover rotor',
    sections: [
      {
        id: 'before',
        title: 'Antes da primeira jogada',
        blocks: [
          {
            t: 'friend',
            friend: 'peach',
            pose: 'think',
            title: 'Primeiro olhe, depois mexa',
            text: 'A maioria dos tabuleiros difíceis é perdida nas três primeiras jogadas, não nas três últimas. Abrir um tabuleiro não custa nada, e sair antes da primeira jogada é sempre grátis, então dê uma boa olhada antes de tocar em qualquer coisa.',
          },
          {
            t: 'steps',
            items: [
              '**Leia cada objetivo** no painel de pedidos: quais cores, quantos, e se há caixotes, cadeados ou musgo para tirar. Um tabuleiro em **etapas** abre novos portões quando os primeiros objetivos são cumpridos.',
              '**Conte suas jogadas** em relação aos objetivos. Vinte jogadas para vinte tijolos vermelhos significa que deslizar um de cada vez não vai bastar: você precisa de linhas.',
              '**Encontre os portões.** Repare na cor e na largura de cada portão, e se ele está congelado, contado ou selado até uma etapa posterior.',
              '**Veja o que está preso:** tijolos embaixo de uma tampa, no gelo ou atrás de um cadeado ainda não podem se mexer. Toque em qualquer bloqueio ou tampa para ver um lembrete de uma linha sobre como ele abre.',
              '**Veja se os tijolos caem.** Se caírem, tijolos novos podem chegar, e cada combinação muda o que está acima dela.',
            ],
          },
        ],
      },
      {
        id: 'slide-or-match',
        title: 'Deslizar ou combinar: gaste cada jogada onde ela rende mais',
        blocks: [
          {
            t: 'p',
            text: 'Um objetivo de portão como “mandar 12 vermelhos para casa” conta **tanto** os tijolos vermelhos que você desliza para fora pelo portão vermelho **quanto** os que você faz sumir em linhas. Isso muda a conta:',
          },
          {
            t: 'table',
            head: ['Jogada', 'Tijolos do objetivo por jogada', 'Melhor para'],
            rows: [
              ['Deslizar um tijolo para casa', '1', 'Um tijolo sozinho com o caminho livre, ou os últimos um ou dois de um objetivo.'],
              ['Deslizar um tijolo longo ou grande para casa', 'Um para cada casa que ele ocupa', 'Tijolos longos e grandes contam cada casa, então um 2×2 vale quatro numa jogada só.'],
              ['Trocar para formar uma linha de 3', '3', 'A maior parte do tabuleiro, na maior parte do tempo.'],
              ['Linha de 4 ou 5, ou uma forma', '4 ou mais, mais um especial', 'Criar especiais que depois limpam muito mais.'],
            ],
          },
          {
            t: 'board',
            board: {
              rows: ['Y . . G', 'R+ B R R', '. . Y .'],
              gates: [{ side: 'right', at: 1, colour: 'R' }],
              moves: [{ row: 1, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['Y . . G', 'B . . .', '. . Y .'] },
              caption: 'Uma troca, três tijolos vermelhos do objetivo. O que está em frente ao portão vermelho sai por ele.',
              alt: 'Um tabuleiro de três linhas e quatro colunas em que nada cai, com um portão vermelho na borda direita da linha do meio. Linha de cima: amarelo, vazio, vazio, verde. Linha do meio: vermelho (destacado), azul, vermelho, vermelho. Linha de baixo: vazio, vazio, amarelo, vazio. O tijolo vermelho destacado troca para a direita com o tijolo azul, formando uma linha de três tijolos vermelhos. Depois da jogada, os três tijolos vermelhos somem, o que estava ao lado do portão vermelho saindo por ele, e o tijolo azul fica à esquerda da linha do meio. Os três contam para um objetivo vermelho.',
            },
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Um tijolo combinado ou explodido na casa bem em frente ao portão dele sai por esse portão. Quando um portão é **contado**, isso importa: só os tijolos que passam por ele gastam as vagas dele, então escolha quais mandar.',
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Solte os bloqueios e abra os portões',
        blocks: [
          {
            t: 'p',
            text: 'Nem todos os bloqueios se abrem do mesmo jeito. Fazer o tipo certo de linha é o que economiza jogadas:',
          },
          {
            t: 'board',
            board: {
              rows: ['x2 . . .', 'R R B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['x . . .', '. . . B'] },
              caption: 'Uma linha ao lado de um caixote quebra uma camada.',
              alt: 'Um tabuleiro de duas linhas e quatro colunas em que nada cai. Linha de cima: um caixote com 2 camadas e depois três casas vazias. Linha de baixo: vermelho, vermelho, azul, vermelho (destacado). O tijolo vermelho destacado troca para a esquerda com o tijolo azul, formando uma linha de três tijolos vermelhos embaixo do caixote. Depois da jogada, os tijolos vermelhos somem, o caixote fica com 1 camada e o tijolo azul fica à direita da linha de baixo.',
            },
          },
          {
            t: 'board',
            board: {
              rows: ['. . . .', 'R R! B R+'],
              moves: [{ row: 1, col: 3, dir: 'left', kind: 'swap' }],
              after: { rows: ['. . . .', '. R . B'] },
              caption: 'Um cadeado só abre com uma linha que passe por ele. O tijolo solto fica.',
              alt: 'Um tabuleiro de duas linhas e quatro colunas em que nada cai. Linha de cima vazia. Linha de baixo: vermelho, um tijolo vermelho com cadeado, azul, vermelho (destacado). O tijolo vermelho destacado troca para a esquerda com o tijolo azul, e a linha de três tijolos vermelhos passa pelo que tem cadeado. Depois da jogada, os dois tijolos vermelhos sem cadeado somem, o cadeado some e o tijolo vermelho dele fica no lugar, agora livre para se mexer, e o tijolo azul fica à direita da linha de baixo.',
            },
          },
          {
            t: 'table',
            head: ['Bloqueio', 'O que o abre', 'Tática'],
            rows: [
              ['Caixote', 'Uma linha ao lado dele, uma camada por linha.', 'Faça linhas primeiro ao lado dos caixotes que fecham o caminho até um portão.'],
              ['Gelo', 'Uma linha ao lado dele.', 'Solte cedo os tijolos de objetivo presos no gelo; eles não se mexem até lá.'],
              ['Cadeado', 'Uma linha **que passe por** ele.', 'Monte a linha em volta do tijolo com cadeado; uma linha ao lado não faz nada.'],
              ['Musgo', 'Uma linha ao lado dele.', 'O musgo se espalha depois de qualquer jogada que não tira nenhum musgo, então continue tirando e não o deixe crescer.'],
              ['Estátua', 'Nada: ela fica.', 'Planeje os caminhos em volta dela.'],
              ['Tampa', 'A regra dela: uma contagem, uma cor, uma linha-chave, um número de jogadas ou um tijolo-chave.', 'Leia a tampa antes da primeira jogada; veja [Salas seladas e suas tampas](help:bricks-specials-and-blockers#lids).'],
            ],
          },
          {
            t: 'p',
            text: 'Cada bloqueio, tampa e portão é descrito por inteiro em [Todos os bloqueios, tampas e portões, explicados](help:blockers-encyclopedia).',
          },
          { t: 'h3', text: 'Portões congelados, contados e de etapa' },
          {
            t: 'list',
            items: [
              '**Portão congelado:** derrete um pouco sempre que qualquer tijolo vai para casa por qualquer portão, e quando as peças na frente dele somem. Mande outras cores para casa cedo para abri-lo antes.',
              '**Portão contado:** recebe só uma certa quantidade de tijolos e depois fecha de vez. Não desperdice as vagas dele com tijolos que uma combinação poderia tirar.',
              '**Portão de etapa:** fica selado até começar a segunda etapa de objetivos. Não gaste jogadas alinhando tijolos para ele na primeira etapa.',
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
              caption: 'Aqui o portão azul congelado precisa de mais um tijolo indo para casa, por qualquer portão.',
              alt: 'Um tabuleiro de três linhas e quatro colunas. Na borda esquerda da linha do meio há um portão azul congelado; na borda direita da linha do meio, um portão vermelho aberto. A linha do meio tem um tijolo azul à esquerda e um tijolo vermelho (destacado) à direita. O tijolo vermelho desliza para a direita e sai pelo portão vermelho. Depois da jogada, o tijolo vermelho some e o portão azul derreteu e está aberto, então o tijolo azul agora pode deslizar para a esquerda e entrar nele.',
            },
          },
        ],
      },
      {
        id: 'falling',
        title: 'Tabuleiros com queda: trabalhe por baixo',
        blocks: [
          {
            t: 'p',
            text: 'Nos tabuleiros em que os tijolos caem, uma combinação perto do fundo mexe em tudo o que está acima dela, e a queda pode formar outra combinação sozinha: uma **cascata**, que não custa jogada extra. Uma combinação perto do topo mexe em quase nada. Então, se o resto for igual, **trabalhe de baixo para cima**.',
          },
          {
            t: 'board',
            board: {
              rows: ['R . .', 'G . .', 'Y+ G .', 'G R R'],
              moves: [{ row: 2, col: 0, dir: 'right', kind: 'swap' }],
              after: { rows: ['. . .', '. . .', '. . .', '. Y .'] },
              caption: 'Uma troca, duas linhas: a linha verde some, o tijolo vermelho cai e a linha vermelha some também.',
              alt: 'Um tabuleiro de quatro linhas e três colunas em que os tijolos caem, mas não chegam novos. Coluna da esquerda, de cima para baixo: vermelho, verde, amarelo (destacado), verde. Coluna do meio: vazio, vazio, verde, vermelho. Coluna da direita: vazio, vazio, vazio, vermelho. O tijolo amarelo destacado troca para a direita com o tijolo verde ao lado, formando uma coluna de três tijolos verdes à esquerda. Eles somem, o tijolo vermelho do topo cai para a linha de baixo, ao lado dos dois tijolos vermelhos que estão lá, e essa linha de três tijolos vermelhos também some. O tijolo amarelo cai para a linha de baixo, e é só o que sobra.',
            },
          },
          {
            t: 'list',
            items: [
              'Nos tabuleiros com queda, você pode deslizar para os lados até um vão, ou direto para fora por um portão. Use os deslizes para preparar linhas que uma queda vai completar.',
              'Onde chegam tijolos novos, o topo do tabuleiro é um mistério; o fundo é o que você consegue planejar.',
              'Nos tabuleiros **Peças de canto** e **Quebra-cabeça tranquilo**, os tijolos caem, mas não chegam novos, então cada tijolo é tudo o que você vai ter. Conte os tijolos de cada cor de objetivo antes de começar.',
            ],
          },
        ],
      },
      {
        id: 'specials',
        title: 'Especiais: crie e guarde para um combo',
        blocks: [
          {
            t: 'table',
            head: ['Crie', 'Especial', 'Melhor uso'],
            rows: [
              ['Quatro em linha', 'Raio de linha', 'Limpa uma linha ou coluna inteira, na direção em que você mexeu. Mire numa linha cheia de tijolos de objetivo ou de caixotes.'],
              ['Uma forma de L, T ou +', 'Bomba', 'Explode o quadrado 3×3 em volta dela, duas vezes. Boa contra grupos de bloqueios.'],
              ['Um quadrado 2×2', 'Dardo teleguiado', 'Voa até uma peça de que um objetivo precisa. Bom para aquela última peça teimosa.'],
              ['Cinco em linha', 'Bomba de cor', 'Troque-a com uma cor para levar todos os tijolos comuns dessa cor.'],
            ],
          },
          {
            t: 'p',
            text: 'Um especial disparado sozinho é bom; dois trocados juntos são muito melhores. Se dois especiais estiverem perto, tente colocá-los lado a lado e trocá-los entre si, em vez de tocar em cada um:',
          },
          {
            t: 'board',
            board: {
              rows: ['G Y . B', 'R- Bb+ . Y', 'Y G B R'],
              moves: [{ row: 1, col: 1, dir: 'left', kind: 'swap' }],
              caption: 'Um raio de linha e uma bomba lado a lado: troque-os juntos para uma cruz com três faixas de largura.',
              alt: 'Um tabuleiro de três linhas e quatro colunas. Linha de cima: verde, amarelo, vazio, azul. Linha do meio: um raio de linha vermelho que dispara na horizontal, uma bomba azul (destacada), vazio, amarelo. Linha de baixo: amarelo, verde, azul, vermelho. Uma seta mostra a bomba azul trocando para a esquerda com o raio de linha vermelho. Trocados juntos, eles disparam como uma cruz com três linhas e três colunas de largura.',
            },
          },
          {
            t: 'table',
            caption: 'Combos, do bom ao melhor',
            head: ['Troque juntos', 'Resultado'],
            rows: [
              ['Raio de linha + raio de linha', 'Uma cruz: uma linha e uma coluna.'],
              ['Raio de linha + bomba', 'Uma cruz com três faixas de largura.'],
              ['Bomba + bomba', 'Uma explosão 5×5.'],
              ['Dardo + qualquer especial', 'O dardo leva o especial até o alvo.'],
              ['Bomba de cor + qualquer especial', 'Todos os tijolos daquela cor viram esse especial, e todos disparam.'],
              ['Bomba de cor + bomba de cor', 'O tabuleiro inteiro.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Tocar num especial para dispará-lo onde ele está gasta uma jogada, e uma troca de combo também, então um combo é a limpeza de dois especiais por uma jogada só. Mais em [Tijolos especiais e combos](help:special-bricks-and-combos).',
          },
        ],
      },
      {
        id: 'boosters',
        title: 'Reforços grátis e o desfazer grátis',
        blocks: [
          {
            t: 'p',
            text: 'Cada tentativa vem com **uma Dica, um Foguete e um OVNI grátis**. Eles não podem ser guardados para depois, então um tabuleiro em que você nem tocou neles é um tabuleiro jogado com uma mão amarrada nas costas.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Dica', text: 'Mostra e fala a melhor jogada. Use cedo num tabuleiro desconhecido para entender o que ele quer, não só quando empacar.' },
              { term: 'Foguete', text: 'Transforma um tijolo comum num raio de linha que dispara ao longo da linha dele. Escolha uma linha com vários tijolos de objetivo ou bloqueios, de preferência embaixo num tabuleiro com queda.' },
              { term: 'OVNI', text: 'Tira uma camada de uma peça: uma camada de caixote, gelo, um cadeado, musgo ou um tijolo. Melhor no único bloqueio que mantém fechado um tijolo de objetivo ou o caminho até um portão.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Os reforços não podem escolher tijolos com formato nem nada que esteja embaixo de uma tampa. Os reforços que você tem ficam guardados, então reserve-os para os tabuleiros Difícil, Superdifícil e Chefe. Veja [Reforços, dicas e Pausa](help:boosters-and-pause).',
          },
          { t: 'h3', text: 'Desfazer para olhar adiante' },
          {
            t: 'list',
            items: [
              'O **primeiro desfazer de cada tabuleiro é grátis**. Use-o como uma espiada grátis: tente a jogada de que você não tem certeza e, se der errado, volte atrás.',
              'Desfazer deixa o tabuleiro exatamente como estava antes da sua jogada, e devolve a jogada.',
              'Depois do grátis, os desfazeres vêm de um estoque de até cinco, que recarrega um a cada 25 minutos. Guarde-os para o fim de um tabuleiro, onde uma jogada desperdiçada faz toda a diferença.',
              '**Desfazer sai mais barato que Reiniciar.** Reiniciar depois de uma jogada encerra a tentativa e custa uma vida; um desfazer nunca custa.',
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Quando continuar, e tentar de novo',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'A tela Sem jogadas mostrando os objetivos que ainda faltam, um botão de mais 5 jogadas por 300 moedas, um botão Assistir para ganhar mais 2 jogadas e Desistir.',
            caption: 'Sem jogadas: o que ainda falta e suas opções.',
          },
          {
            t: 'p',
            text: 'A tela de jogadas esgotadas mostra exatamente o que falta. Leia antes de escolher. Continuar mantém esta tentativa viva, então **nunca custa uma vida**; desistir gasta uma, e uma vida volta em 30 minutos.',
          },
          {
            t: 'table',
            head: ['O que falta', 'Uma escolha sensata'],
            rows: [
              ['Uma ou duas peças do objetivo fáceis de alcançar', 'Continue: um vídeo grátis (+2 jogadas), um **+5 jogadas** guardado ou a primeira continuação com moedas (300 moedas, +5 jogadas).'],
              ['Algumas peças, mas com um bloqueio no caminho', 'A segunda continuação (500 moedas) traz uma Dica; a terceira (900) traz um OVNI para esse bloqueio.'],
              ['A maior parte de um objetivo ainda por fazer', 'Deixe ir. A tentativa ensinou o tabuleiro a você; a próxima começa do zero.'],
            ],
          },
          {
            t: 'list',
            items: [
              'O preço sobe 300 → 500 → 900 dentro de uma tentativa e volta ao início a cada nova tentativa.',
              'Em um tabuleiro que você já tentou várias vezes, cada continuação dá uma jogada extra para cada tentativa perdida depois da terceira, até +15.',
              'O **Passe de Tijolos** atual dá três jogadas grátis na tela de jogadas esgotadas.',
              'Nada pago é oferecido antes do nível 6.',
            ],
          },
          { t: 'p', text: 'Todos os detalhes em [Sem jogadas](help:lives-moves-and-undos#out-of-moves).' },
          { t: 'h3', text: 'Tentar de novo: a ajudinha' },
          {
            t: 'list',
            items: [
              'Depois de uma derrota, **Nível falhou** mostra o quanto você chegou perto. Use o que você viu: qual objetivo faltou, qual bloqueio demorou demais.',
              'A partir da **sexta tentativa** no mesmo tabuleiro, o jogo dá **3 jogadas extras** antes de você começar: “Uma ajudinha: 3 movimentos a mais nesta tentativa”. Uma vez por dia em cada tabuleiro, de graça.',
              'A partir do nível 6, você pode começar a próxima tentativa com vantagem por 800 moedas: um Foguete no tabuleiro e um OVNI grátis.',
              'Continua empacado? Procure o nível em [Ajuda com um nível](/support/levels): outros jogadores podem ter deixado uma pista.',
            ],
          },
          {
            t: 'shot',
            id: 'level-failed',
            alt: 'Nível falhou: um amigo triste, Quase lá!, os objetivos que faltam (3 tijolos de sol e 3 de onda), um coração partido indicando uma vida gasta, um botão azul Tentar de novo, uma oferta opcional e Voltar ao mapa.',
            caption: 'Nível falhou mostra o quanto você chegou perto.',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'O que esperar de Difícil, Superdifícil e Chefe',
        blocks: [
          {
            t: 'table',
            head: ['Dificuldade', 'O que muda', 'Moedas por concluir'],
            rows: [
              ['Difícil', 'Os objetivos pedem cerca de 15% a mais, e há alguns obstáculos extras.', '50'],
              ['Superdifícil', 'Os objetivos pedem cerca de 30% a mais.', '80'],
              ['Chefe', 'O último tabuleiro de um capítulo, a partir do nível 40. Os objetivos pedem cerca de 40% a mais.', '80'],
              ['Noite', 'Um tabuleiro ambientado depois do anoitecer. Joga como um tabuleiro Difícil.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Espere precisar de mais de uma tentativa nos tabuleiros Superdifícil e Chefe: é assim que eles são ajustados, não um sinal de que você está jogando mal. Todo tabuleiro do jogo foi resolvido por um solucionador antes do lançamento, então todos podem ser vencidos.',
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'Estratégia com o VoiceOver',
        blocks: [
          {
            t: 'list',
            items: [
              '**Comece pelo resumo Tabuleiro** no alto: nível, etapa, objetivos e jogadas restantes. Toque duas vezes nele para ouvir o tabuleiro inteiro com uma dica.',
              '**Use os rotores em vez de passar casa por casa.** **Objetivos** encontra as peças que seus objetivos querem; **Peças que combinam** encontra cada jogada que limpa algo agora; **Bloqueios** e **Portões** mostram o que está no caminho e por onde os tijolos podem sair.',
              '**Ouça as ações de uma peça.** Os deslizes dizem até onde vão e se saem por um portão, e as trocas que funcionam vêm primeiro, então as primeiras ações muitas vezes já são o plano.',
              '**Coloque o Detalhe dos avisos em Completo** nos tabuleiros difíceis para ouvir a contagem de cada objetivo depois de cada jogada e nunca perder a conta.',
              '**O toque duplo com dois dedos é uma dica grátis** que nunca gasta um reforço Dica. Peça quantas vezes quiser.',
              'Ative **Confirmar trocas** se um escorregão puder fazer uma jogada que você não queria.',
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Nas versões 5.1 e 5.1.1, um cartão oferecendo reforços pode se abrir enquanto você lê o tabuleiro e levar o VoiceOver para o topo. O gesto de esfregar com dois dedos o fecha e leva você de volta ao tabuleiro; uma correção está a caminho. Veja [Como jogar com o VoiceOver](help:voiceover#rotors) e os [problemas conhecidos](/support/known-issues).',
          },
        ],
      },
      {
        id: 'checklist',
        title: 'A lista para tabuleiros difíceis',
        blocks: [
          {
            t: 'table',
            head: ['Quando', 'Verifique'],
            rows: [
              ['Antes da primeira jogada', 'Todos os objetivos lidos, jogadas contadas, portões e seus tipos encontrados, tijolos presos e tampas anotados, com queda ou não.'],
              ['A cada jogada', 'Esta jogada conta para um objetivo, solta um bloqueio ou prepara um especial? Se não fizer nada disso, procure outra.'],
              ['Especiais', 'Dois perto um do outro? Junte-os para um combo em vez de dispará-los sozinhos.'],
              ['Ferramentas grátis', 'Dica, Foguete e OVNI grátis usados nesta tentativa; desfazer grátis gasto numa dúvida de verdade.'],
              ['Últimas cinco jogadas', 'A borda do tabuleiro brilha. Conte exatamente o que falta e faça primeiro as jogadas mais garantidas.'],
              ['Sem jogadas', 'Perto? Continue, de preferência com um vídeo grátis. Longe? Deixe ir e volte descansado.'],
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Descansar também é estratégia',
            text: 'Um tabuleiro que venceu você cinco vezes seguidas muitas vezes cai na primeira tentativa depois de uma pausa. Veja [Jogar com calma](help:playing-calmly).',
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
    title: 'Glossário do OutBrick',
    summary:
      'Cada palavra que você encontra no OutBrick, dos portões e raios de linha às tampas, à ajudinha, ao Passe de Tijolos e ao Guarda-roupa, explicada em uma ou duas frases, com um link para o guia que trata dela.',
    keywords:
      'glossário dicionário termos palavras significado definição o que é o que significa vocabulário lista de a a z',
    sections: [
      {
        id: 'board',
        title: 'O tabuleiro',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Tabuleiro', text: 'Um quebra-cabeça na Jornada: uma grade de tijolos com portões coloridos nas bordas, objetivos para cumprir e um número de jogadas. Veja [Como jogar um tabuleiro](help:playing-a-board).' },
              { term: 'Deslizar', text: 'Passar o dedo num tijolo na direção de um espaço vazio. Ele para onde você soltar, ou sai do tabuleiro se você levá-lo até o portão aberto da cor dele. Veja [Deslizar tijolos para casa](help:playing-a-board#slide).' },
              { term: 'Trocar', text: 'Passar o dedo num tijolo na direção do vizinho. A troca só vale se formar uma linha; caso contrário, ela volta e nenhuma jogada é gasta. Veja [Trocar e combinar](help:playing-a-board#swap).' },
              { term: 'Linha (combinação)', text: 'Três ou mais tijolos da mesma cor numa linha ou coluna, ou um quadrado 2×2. As linhas somem. Veja [Trocar e combinar](help:playing-a-board#swap).' },
              { term: 'Portão', text: 'Uma porta colorida na borda do tabuleiro. Recebe tijolos da cor dele; para qualquer outro tijolo, é uma parede. Veja [Portões](help:bricks-specials-and-blockers#gates).' },
              { term: 'Portão congelado', text: 'Um portão fechado até derreter, um pouco a cada vez que qualquer tijolo vai para casa ou quando as peças na frente dele somem. Veja [Portões](help:bricks-specials-and-blockers#gates).' },
              { term: 'Portão contado', text: 'Um portão que recebe só uma certa quantidade de tijolos, mostrada pelo número dele, e depois fecha de vez. Veja [Portões](help:bricks-specials-and-blockers#gates).' },
              { term: 'Portão de etapa', text: 'Um portão que fica selado até começar a segunda etapa de objetivos do tabuleiro. Veja [Portões](help:bricks-specials-and-blockers#gates).' },
              { term: 'Objetivo', text: 'O que um tabuleiro pede, mostrado no painel de pedidos com quanto falta: tijolos de uma cor para mandar para casa ou combinar, caixotes, cadeados ou musgo. Veja [Como ler os objetivos](help:welcome#goals).' },
              { term: 'Painel de pedidos', text: 'Os objetivos no alto do tabuleiro, cada um com o símbolo para daltonismo e uma marca de visto quando cumprido. Veja [A tela do tabuleiro](help:playing-a-board#screen).' },
              { term: 'Etapa', text: 'Alguns tabuleiros dividem os objetivos em duas etapas: cumpra a primeira e novos portões se abrem para a segunda. O painel de pedidos mostra “FASE 1 / 2”.' },
              { term: 'Jogadas', text: 'O número grande no cabeçalho: as jogadas restantes neste tabuleiro, o único limite no OutBrick. Ele pulsa quando chega a três. Veja [A tela do tabuleiro](help:playing-a-board#screen).' },
              { term: 'Trilha de estrelas', text: 'A barra no cabeçalho que enche conforme sua pontuação sobe, com uma estrela em cada marca. Veja [Pontuação, estrelas e o bônus de fim de tabuleiro](help:playing-a-board#stars).' },
              { term: 'Pontuação e estrelas', text: 'Toda conclusão vale pelo menos uma estrela; uma pontuação maior dá duas ou três. Cada jogada que sobra no fim soma 150 pontos. Veja [Pontuação, estrelas e o bônus de fim de tabuleiro](help:playing-a-board#stars).' },
              { term: 'Objetivo concluído!', text: 'O aviso quando o último objetivo é cumprido. As jogadas que sobraram viram raios de linha e disparam; toque para pular.' },
              { term: 'Embaralhando!', text: 'O aviso quando nenhuma jogada é possível e o tabuleiro se embaralha sozinho, de graça. Veja [Você nunca fica sem saída](help:playing-a-board#never-stuck).' },
              { term: 'Barra', text: 'A fileira embaixo do tabuleiro: Pausa, depois Dica, Foguete, OVNI e Desfazer. Veja [A barra](help:boosters-and-pause#tray).' },
              { term: 'Cartão de ensino', text: 'Um cartão curto com uma mão em movimento que mostra uma ideia nova na primeira vez que você a encontra. Toque em qualquer lugar para começar a jogar.' },
              { term: 'Sequência de vitórias', text: 'Uma pequena corrente de tijolos embaixo das jogadas quando você vence níveis novos seguidos. As sequências dão reforços grátis para o próximo tabuleiro. Veja [Reforços grátis](help:boosters-and-pause#free).' },
            ],
          },
        ],
      },
      {
        id: 'bricks',
        title: 'Tijolos e especiais',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Tijolo', text: 'Um tijolo de brinquedo comum numa das cores do tabuleiro, com o símbolo para daltonismo estampado. Ele pode deslizar, trocar e combinar.' },
              { term: 'Tijolos longos, grandes, em L e em T', text: 'Tijolos com formato que deslizam e caem como uma peça só, nunca são trocados, nunca contam em linhas e precisam de um portão tão largo quanto eles. Um objetivo conta cada casa. Veja [Tijolos virados, portais e tijolos com formato](help:bricks-specials-and-blockers#more).' },
              { term: 'Tijolo virado', text: 'Um tijolo “?” que esconde a cor. Ele desvira quando um tijolo ao lado sai do tabuleiro, nunca quando é movido, e mesmo assim joga com a cor verdadeira.' },
              { term: 'Tijolo-chave', text: 'O tijolo que abre uma tampa com fechadura quando sai do tabuleiro, combinado ou deslizando pelo portão dele. Veja [Salas seladas e suas tampas](help:bricks-specials-and-blockers#lids).' },
              { term: 'Especial', text: 'Um tijolo criado por uma combinação maior, que limpa mais quando dispara. Toque nele para dispará-lo onde está, ou troque-o. Veja [Tijolos especiais](help:bricks-specials-and-blockers#specials).' },
              { term: 'Raio de linha', text: 'Criado com quatro em linha. Limpa a linha ou coluna inteira, na direção em que você mexeu. Também pode sair deslizando por um portão da cor dele sem disparar.' },
              { term: 'Bomba', text: 'Criada com uma forma de L, T ou +. Explode o quadrado 3×3 em volta dela, duas vezes.' },
              { term: 'Dardo teleguiado', text: 'Criado com um quadrado 2×2. Voa até uma peça de que um objetivo precisa.' },
              { term: 'Bomba de cor', text: 'Criada com cinco em linha. Troque-a com uma cor para levar todos os tijolos comuns dessa cor.' },
              { term: 'Combo', text: 'Dois especiais trocados juntos para um efeito maior, como uma cruz ou uma explosão 5×5. Veja [Combos](help:bricks-specials-and-blockers#combos) e [Tijolos especiais e combos](help:special-bricks-and-combos).' },
              { term: 'Cascata', text: 'Uma linha que se forma sozinha quando os tijolos caem depois de uma remoção. Não custa jogada extra. Veja [Como vencer um tabuleiro difícil](help:hard-boards#falling).' },
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Bloqueios, tampas e portais',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Bloqueio', text: 'Qualquer coisa no caminho. Toque num bloqueio no tabuleiro para ver um lembrete de uma linha sobre como tirá-lo; a aparência muda conforme a vila, as regras não. Veja [Bloqueios](help:bricks-specials-and-blockers#blockers) e [Todos os bloqueios, tampas e portões, explicados](help:blockers-encyclopedia).' },
              { term: 'Caixote', text: 'Para os tijolos que deslizam. Tem uma ou duas camadas; cada linha feita ao lado dele quebra uma camada.' },
              { term: 'Gelo', text: 'Prende o tijolo que está dentro dele. Uma linha ao lado quebra o gelo.' },
              { term: 'Cadeado', text: 'O tijolo não pode se mexer. Só uma linha **que passe por** ele o solta.' },
              { term: 'Musgo', text: 'Se espalha para um tijolo depois de qualquer jogada que não tira nenhum musgo. Uma linha ao lado dele o tira.' },
              { term: 'Estátua', text: 'Fica num vão do tabuleiro. Nada desliza através dela, e ela não sai: procure outro caminho.' },
              { term: 'Portal', text: 'Um de um par: deslize um tijolo para dentro de um e ele sai pelo gêmeo, em outro lado. Veja [Tijolos virados, portais e tijolos com formato](help:bricks-specials-and-blockers#more).' },
              { term: 'Sala selada (canteiro selado)', text: 'Tijolos embaixo de uma tampa que não podem se mexer até ela abrir. O cartão de ensino a chama de canteiro selado. Veja [Salas seladas e suas tampas](help:bricks-specials-and-blockers#lids).' },
              { term: 'Tampa', text: 'A cobertura de uma sala selada, em cinco tipos: um contador, um contador de cor, uma chave de vitral, um relógio de latão e uma fechadura. Cada uma abre do seu jeito. Veja [Salas seladas e suas tampas](help:bricks-specials-and-blockers#lids).' },
            ],
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tipos de tabuleiro',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Difícil', text: 'Um tabuleiro com uma placa roxa embaixo do cabeçalho. Os objetivos pedem cerca de 15% a mais, com alguns obstáculos extras; concluir paga 50 moedas. Veja [Tabuleiros Difícil, Superdifícil, Chefe e Noite](help:playing-a-board#tiers).' },
              { term: 'Superdifícil', text: 'Os objetivos pedem cerca de 30% a mais; concluir paga 80 moedas.' },
              { term: 'Chefe', text: 'O último tabuleiro de um capítulo, a partir do nível 40. Os objetivos pedem cerca de 40% a mais; concluir paga 80 moedas.' },
              { term: 'Tabuleiro Noite', text: 'Um tabuleiro ambientado depois do anoitecer, em giz e nanquim. Joga como um tabuleiro Difícil.' },
              { term: 'Os doze tipos de tabuleiro', text: 'Os tabuleiros de 1 a 12 de toda vila seguem a mesma ordem, de De volta para casa a Quebra-cabeça tranquilo. Veja o resumo em [Tijolos especiais, bloqueios e tipos de tabuleiro](help:bricks-specials-and-blockers#kinds) e o guia completo [Os doze tipos de tabuleiro](help:board-kinds).' },
              { term: 'Tabuleiro com queda', text: 'Um tabuleiro em que os tijolos caem para preencher vãos. Em alguns, chegam tijolos novos; em Peças de canto e Quebra-cabeça tranquilo, não chega nenhum.' },
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Vidas, jogadas e reforços',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Vida', text: 'Gasta só quando você perde uma tentativa: ao desistir sem jogadas, ou ao sair ou reiniciar depois de uma jogada. Até cinco (oito com o Passe de Tijolos atual), e uma volta a cada 30 minutos. Veja [Vidas](help:lives-moves-and-undos#lives).' },
              { term: 'Tentativa grátis', text: 'Uma vez por dia, sem vidas, uma tentativa grátis em um tabuleiro: se vencer, você fica com a vida; se perder, não custa nada.' },
              { term: 'Vidas ilimitadas', text: 'Um período de 1, 3 ou 24 horas em que perder não custa vida. Veja [Sem vidas](help:lives-moves-and-undos#out-of-lives).' },
              { term: 'Sem jogadas', text: 'A tela que aparece quando as jogadas acabam antes de cumprir os objetivos, com formas de continuar na mesma tentativa, ou **Desistir**. Veja [Sem jogadas](help:lives-moves-and-undos#out-of-moves).' },
              { term: 'Continuar', text: 'Comprar ou assistir para ganhar mais jogadas na mesma tentativa: +5 jogadas por 300, depois 500, depois 900 moedas, ou +2, depois +1, depois um OVNI por vídeo. Nunca custa uma vida.' },
              { term: '+5 jogadas', text: 'Uma continuação guardada que vem num pacote, usada na tela de jogadas esgotadas no lugar das moedas.' },
              { term: 'Ajudinha', text: 'A partir da sexta tentativa no mesmo tabuleiro, 3 jogadas extras antes de começar, uma vez por dia em cada tabuleiro. Veja [Nível falhou e tentar de novo](help:lives-moves-and-undos#level-failed).' },
              { term: 'Nível falhou', text: 'A tela depois de desistir, que mostra o quanto você chegou perto, com **Tentar de novo** e **Voltar ao mapa**.' },
              { term: 'Reforço', text: 'Uma ferramenta na barra: Dica, Foguete ou OVNI. Cada tentativa vem com um de cada, grátis. Veja [Reforços, dicas e Pausa](help:boosters-and-pause).' },
              { term: 'Dica', text: 'Mostra e fala a melhor jogada, um deslize ou uma troca.' },
              { term: 'Foguete', text: 'Toque nele e depois num tijolo comum: o tijolo vira um raio de linha que dispara ao longo da linha dele.' },
              { term: 'OVNI', text: 'Toque nele e depois numa peça: ele tira uma camada dela, como uma camada de caixote, gelo, um cadeado, musgo ou um tijolo.' },
              { term: 'Desfazer', text: 'Desfaz sua última jogada. O primeiro de cada tabuleiro é grátis; os outros vêm de um estoque de cinco que recarrega um a cada 25 minutos. Veja [Desfazer](help:boosters-and-pause#undo).' },
              { term: 'Moedas', text: 'Ganhas ao concluir tabuleiros e com recompensas; gastas em reforços, continuações, vidas e peças do Guarda-roupa.' },
            ],
          },
        ],
      },
      {
        id: 'journey',
        title: 'A Jornada',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'A Jornada', text: 'O mapa de todos os 2.000 níveis, uma longa avenida feita de tijolos que passa por 167 vilas. É a aba central, em destaque. Veja [A Jornada e suas vilas](help:journey-and-villages).' },
              { term: 'Vila', text: 'Doze tabuleiros no mapa, cada vila construída com tijolos de brinquedo no seu próprio visual (a última vila tem oito). Ela guarda até 36 estrelas.' },
              { term: 'Cidade Jardim', text: 'A primeira vila, níveis 1 a 12, onde cada ideia nova é ensinada. A Clover Farm, níveis 13 a 24, vem em seguida. Veja [Sua primeira semana](help:first-week).' },
              { term: 'Capítulo', text: 'Vinte níveis, usados para os emblemas de capítulo, os tabuleiros Chefe e as conquistas do Game Center. Capítulos e vilas são contados separadamente.' },
              { term: 'Recompensas por estrelas', text: 'A escada de estrelas de cada vila: 50 moedas, uma Dica, 100 moedas e um Foguete, resgatadas conforme suas estrelas ali aumentam.' },
              { term: 'Baú da jornada', text: 'Um baú no caminho. Toque nele para ver o que guarda; ao chegar até ele, as moedas e os reforços dele aparecem no cartão de vitória.' },
              { term: 'Presente da Vila', text: 'Um presente com hora marcada no mapa; o selo dele faz a contagem regressiva até ficar pronto.' },
              { term: 'Balão de presente', text: 'Passa flutuando de vez em quando. Um vídeo opcional o estoura e dá moedas ou um curto período de reforço grátis.' },
              { term: 'Todas as vilas', text: 'O atlas de todas as vilas, cada uma como um cartão, com filtros para em andamento, concluídas ou bloqueadas.' },
              { term: 'Meu nível', text: 'O botão com o alfinete que leva o mapa de volta ao seu nível atual.' },
            ],
          },
        ],
      },
      {
        id: 'rewards',
        title: 'Recompensas e eventos',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Tijolo do dia', text: 'Sua primeira conclusão de cada dia paga 100 moedas, resgatadas automaticamente no Início. Veja [O Tijolo do dia e as sequências de dias](help:rewards-and-events#daily).' },
              { term: 'Sequência de dias', text: 'A chama no Início: os dias seguidos em que você concluiu um tabuleiro, com recompensas em 3, 7, 14, 30, 60 e 100 dias.' },
              { term: 'Protetor de sequência', text: 'Ganho com as recompensas de sequência. Recupera um dia perdido de graça dentro de uma semana; você pode ter dois.' },
              { term: 'Roda', text: 'Um giro grátis por dia, que vale moedas ou um reforço, pelo botão dela no Início. Veja [A Roda](help:rewards-and-events#wheel).' },
              { term: 'Missões', text: 'Três tarefas para hoje e três para a semana, cada uma com uma recompensa. Veja [Missões](help:rewards-and-events#missions).' },
              { term: 'Passe de Tijolos', text: 'Uma temporada de 30 faixas que você sobe concluindo níveis novos, com uma trilha Grátis para todos e uma trilha Premium que você pode comprar. Veja [O Passe de Tijolos](help:rewards-and-events#pass).' },
              { term: 'Eventos', text: 'Vêm e vão conforme um calendário, e aparecem como um banner no Início e um selo na Jornada. Alguns dobram ou triplicam as moedas por concluir.' },
              { term: 'Resgate de amigos, Corrida da vila, Brick Royale, Corrida da turma', text: 'Corridas e resgates que acontecem em paralelo à Jornada. Cada um pode ser desativado em **Ajustes › Jogo › Recursos do jogo**. Veja [Eventos e corridas](help:rewards-and-events#events).' },
              { term: 'Cofrinho', text: 'Enche de moedas conforme você conclui níveis novos; quando estiver pronto, dá para abri-lo por um preço pequeno. Veja [O que há na Loja](help:shop-and-purchases#shelves).' },
              { term: 'Cine Tijolo', text: 'Um painel de quadrados de prêmio na Jornada; cada vídeo opcional vira um quadrado.' },
              { term: 'Ranking', text: 'A aba da classificação de todos os tempos, liberada no nível 21. Veja [Ranking e Game Center](help:rewards-and-events#leaders).' },
              { term: 'Remover anúncios', text: 'Uma compra única que transforma todo botão Assistir em **Resgatar recompensa**, dentro dos mesmos limites diários. Veja [Remover anúncios e o Passe de Tijolos](help:shop-and-purchases#remove-ads).' },
            ],
          },
        ],
      },
      {
        id: 'friends',
        title: 'Os amigos, a Coleção e você',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Os nove amigos', text: 'Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry e Poppy: amigos feitos de tijolos de brinquedo que torcem por você em balões de texto. Veja [Conheça os nove amigos](help:meet-the-friends).' },
              { term: 'Amigo anfitrião', text: 'O amigo da vila na moldura redonda do cabeçalho do tabuleiro, vestido para aquela vila. Toque nele para ganhar uma risadinha ou um aceno.' },
              { term: 'Perfil', text: 'Aberto pelo seu avatar: seu nome, nível, bandeira e estatísticas, com a versão do jogo no rodapé. Veja [Seu Perfil](help:friends-and-wardrobe#profile).' },
              { term: 'Coleção', text: 'Abre no nível 95: Cartas de tijolo, Emblemas de capítulo, Lembranças e Cartas da temporada. Veja [A Coleção](help:friends-and-wardrobe#collection).' },
              { term: 'Faíscas', text: 'Ganhas com Cartas da temporada repetidas; três escolhem uma carta que falta.' },
              { term: 'Guarda-roupa', text: 'Looks, bandejas, paletas, acabamentos de tijolo e mais. Eles mudam a aparência do jogo, nunca o jeito de jogar, e as peças de acessibilidade são sempre grátis. Veja [O Guarda-roupa](help:friends-and-wardrobe#wardrobe).' },
            ],
          },
        ],
      },
      {
        id: 'settings',
        title: 'Ajustes e acessibilidade',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Daltonismo', text: 'Estampa uma forma em cada tijolo, portão e objetivo, para que a cor nunca seja a única pista. Vem ativado. Veja [Símbolos para daltonismo](help:vision-hearing-and-motion#colour-blind).' },
              { term: 'Tabuleiro de alto contraste', text: 'Um piso quase preto, contornos brancos, símbolos grandes e contornos de portão grossos. Veja [Tabuleiro de alto contraste](help:vision-hearing-and-motion#contrast).' },
              { term: 'Velocidade da animação', text: 'A rapidez com que as peças trocam, caem e somem, de 50% a 200%.' },
              { term: 'Confirmar trocas', text: 'Com VoiceOver, Controle por Voz, Controle Assistivo ou teclado, cada jogada é escolhida duas vezes antes de acontecer. Veja [Confirmar trocas](help:voice-control-switch-control-keyboard#hold-to-confirm).' },
              { term: 'Som da linha', text: 'Adiciona a ação **Ouvir a linha** ao tabuleiro: um som baixo para cada peça, uma nota para cada símbolo de cor.' },
              { term: 'Rotor', text: 'Uma ferramenta do VoiceOver para pular entre peças: Peças que combinam, Especiais, Objetivos, Bloqueios e Portões. Veja [Rotores](help:voiceover#rotors).' },
              { term: 'Jogo rápido', text: 'Depois de uma vitória, vai direto para o próximo tabuleiro em vez de voltar ao mapa. Veja [A aba Jogo](help:settings#game).' },
              { term: 'Recursos do jogo', text: 'Em **Ajustes › Jogo**: desative corridas, resgates ou ofertas no mapa que você prefere não ver. Você não perde nada do que já ganhou.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Procurando uma palavra que não está aqui? Use o Buscar do seu navegador nesta página, ou pergunte em [Ajuda e suporte](/community/c/help), e nós a acrescentamos.',
          },
        ],
      },
    ],
    related: ['welcome', 'playing-a-board', 'bricks-specials-and-blockers', 'blockers-encyclopedia', 'special-bricks-and-combos', 'common-questions'],
  },
];
