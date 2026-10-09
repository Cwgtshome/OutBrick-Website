import type { HelpArticle } from '../../model.ts';

/** Primeiros passos e como jogar um tabuleiro, em português do Brasil. Conferido com a 5.1.1 (68). */
export const playArticles: HelpArticle[] = [
  {
    slug: 'welcome',
    category: 'start',
    cover: 'garden-teach',
    title: 'Boas-vindas ao OutBrick: seu primeiro tabuleiro',
    summary:
      'O que é o OutBrick, como funcionam os cartões de ensino, como ler os objetivos de um tabuleiro e o que acontece quando você o conclui.',
    keywords: 'jogador novo iniciante tutorial como jogar primeira vez começar regras aprender',
    sections: [
      {
        id: 'what',
        title: 'O que é o OutBrick',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick é um quebra-cabeça tranquilo de **Slide & Match** (deslizar e combinar). Cada tabuleiro é um jardim de tijolos de brinquedo com portões coloridos nas bordas. **Deslize** um tijolo até o portão da cor dele e ele volta para casa, ou **troque** dois vizinhos para formar uma linha de três e fazê-los sumir. Cada tabuleiro tem objetivos para cumprir dentro de um número de jogadas, e nunca há relógio.',
          },
          {
            t: 'list',
            items: [
              '**2.000 níveis** ao longo da Jornada, passando por **167 vilas**, cada uma com seu próprio visual e doze tipos de tabuleiro.',
              '**Nove amigos tijolo** (Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry e Poppy) torcem por você em balões de texto.',
              '**Gratuito.** Existem vídeos e compras opcionais, mas as vidas voltam sozinhas e você nunca precisa gastar para continuar jogando.',
            ],
          },
        ],
      },
      {
        id: 'first-board',
        title: 'Seu primeiro tabuleiro',
        blocks: [
          {
            t: 'p',
            text: 'No **Início**, toque no grande botão verde **Nível**. Na primeira vez que você encontra uma ideia nova, um cartão de ensino curto a mostra com uma mão em movimento. Toque em qualquer lugar para começar a jogar.',
          },
          {
            t: 'shot',
            id: 'garden-teach',
            alt: 'Um tabuleiro da Cidade Jardim com tijolos vermelhos, roxos e laranja. Um cartão de ensino rosa na parte de baixo diz: Deslize um tijolo para perto de dois da mesma cor para fazer uma linha, ou empurre-o contra um vizinho para trocar. Linhas somem! Embaixo: Sua vez, tente! Uma mão aponta para um tijolo.',
            caption: 'Um cartão de ensino no nível 2. Cada ideia nova ganha um cartão, na primeira vez que você a encontra.',
          },
          {
            t: 'steps',
            items: [
              '**Deslizar:** passe o dedo em um tijolo na direção de um espaço vazio. Ele anda até você soltar ou até encontrar algo. Leve-o até o portão da cor dele e ele sai do tabuleiro.',
              '**Trocar:** passe o dedo em um tijolo na direção de um vizinho. Se isso formar uma linha de três ou mais (ou um quadrado 2×2), eles somem. Se não, os tijolos voltam ao lugar e **nenhuma jogada é gasta**.',
              '**Acompanhe os objetivos** no painel no alto. Cada marca de visto indica um objetivo cumprido.',
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Não sabe o que fazer? Toque no reforço **Dica** na barra. Você ganha uma Dica, um Foguete e um OVNI grátis em cada tentativa.',
          },
        ],
      },
      {
        id: 'goals',
        title: 'Como ler os objetivos',
        blocks: [
          {
            t: 'p',
            text: 'O **painel de pedidos** no alto mostra o que este tabuleiro pede e quanto falta: tijolos de uma cor para mandar para casa ou combinar, caixotes para quebrar, cadeados para abrir ou musgo para tirar. Cada objetivo leva o mesmo símbolo para daltonismo dos tijolos dele. Alguns tabuleiros vêm em duas **etapas**: cumpra os primeiros objetivos e novos portões se abrem para a segunda.',
          },
          { t: 'p', text: 'Cada parte da tela é explicada em [Como jogar um tabuleiro](help:playing-a-board#screen).' },
        ],
      },
      {
        id: 'clear',
        title: 'Quando você conclui um tabuleiro',
        blocks: [
          {
            t: 'shot',
            id: 'clear',
            alt: 'O cartão de vitória: uma faixa dourada com Serra do Foguete 4, um selo de Capítulo concluído, três estrelas douradas, um amigo tijolo verde comemorando, a palavra Brilhante!, uma pontuação de 5.470, mais 140 moedas, um selo De primeira!, uma linha do baú da jornada e os botões Início, Próximo e Compartilhar.',
            caption: 'O cartão de vitória: suas estrelas, pontuação, moedas e as recompensas que você pegou pelo caminho.',
          },
          {
            t: 'list',
            items: [
              'As jogadas que sobraram viram raios de linha e disparam, somando 150 pontos cada. Toque para pular o show.',
              'Você sempre ganha pelo menos uma estrela ao concluir; uma pontuação maior dá duas ou três.',
              '**Próximo** leva ao tabuleiro seguinte; **Início** leva você de volta. Com **Jogo rápido** ativado (Ajustes › Jogo), uma vitória vai direto para o próximo tabuleiro.',
              'Vencer nunca custa uma vida. As vidas só são gastas quando uma tentativa é perdida. Veja [Vidas, jogadas e desfazer](help:lives-moves-and-undos).',
            ],
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
              '[Um passeio por todos os menus](help:menus-tour), para você saber o que cada botão faz.',
              '[Tijolos especiais, bloqueios e tipos de tabuleiro](help:bricks-specials-and-blockers), assim que encontrar algo novo.',
              '[Acessibilidade](help:accessibility) e [Como jogar com o VoiceOver](help:voiceover), se quiser que o jogo se adapte melhor a você.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'playing-a-board', 'bricks-specials-and-blockers', 'accessibility'],
  },

  {
    slug: 'menus-tour',
    category: 'start',
    cover: 'home',
    title: 'Um passeio por todos os menus',
    summary:
      'As abas na parte de baixo, o Início, o mapa da Jornada, a Loja, o Passe de Tijolos, o Ranking, seu Perfil, a Coleção e os Ajustes: para que serve cada um e como chegar até ele.',
    keywords: 'navegação abas barra inferior onde fica encontrar botão perfil coleção engrenagem menu',
    sections: [
      {
        id: 'tab-bar',
        title: 'As abas na parte de baixo',
        blocks: [
          { t: 'p', text: 'Cinco abas ficam na parte de baixo da tela. Você também pode passar o dedo para a esquerda ou para a direita para ir de uma a outra.' },
          {
            t: 'table',
            head: ['Aba', 'O que tem'],
            rows: [
              ['**Início**', 'Seus amigos no palco de tijolos e o grande botão **Nível**.'],
              ['**Ranking**', 'A classificação. É liberada no nível 21.'],
              ['**Jornada**', 'A aba central, em destaque: o mapa de todos os 2.000 níveis.'],
              ['**Loja**', 'Moedas, reforços, pacotes, vidas e o guarda-roupa.'],
              ['**Passe**', 'A temporada do Passe de Tijolos, além de atalhos para Missões e a Coleção.'],
            ],
          },
        ],
      },
      {
        id: 'home',
        title: 'Início',
        blocks: [
          {
            t: 'shot',
            id: 'home',
            alt: 'Início: no topo, o avatar, 2.580 moedas, uma sequência de 12 dias, Missões e a engrenagem dos Ajustes. Abaixo do logotipo OUTBRICK, um cartão anuncia um evento que começa em breve. Três amigos de tijolo com chapéu de sol estão num gramado de tijolos, acima de um botão verde Fase 214. A barra inferior mostra as cinco abas.',
            caption: 'O Início. A fileira do alto, da esquerda para a direita: seu avatar, moedas, sequência de dias, Missões, a Roda quando estiver pronta e a engrenagem dos Ajustes.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Avatar', text: 'Abre seu **Perfil**.' },
              { term: 'Moedas', text: 'Abre a Loja.' },
              { term: 'Sequência (chama)', text: 'Mostra sua sequência de dias e quando vem a próxima recompensa dela. A sequência cresce a cada dia em que você conclui um tabuleiro.' },
              { term: 'Missões', text: 'Três tarefas para hoje e três para a semana.' },
              { term: 'Roda', text: 'Um giro grátis por dia, que vale moedas ou um reforço.' },
              { term: 'Engrenagem', text: 'Abre os [Ajustes](help:settings).' },
              { term: 'Banner do evento', text: 'O evento ao vivo ou o próximo. Toque nele para ir até lá.' },
              { term: 'Botão Nível', text: 'Joga o seu tabuleiro atual.' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Seu **Tijolo do dia** (100 moedas) chega sozinho: conclua um tabuleiro em um novo dia e ele é pago no Início, com um banner curto.',
          },
        ],
      },
      {
        id: 'journey',
        title: 'O mapa da Jornada',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'O mapa da Jornada: um caminho de pedras por uma vila de flores cor-de-rosa, com as paradas dos níveis 213, 214 (brilhando, com o rótulo Jogar) e 215. Há selos dos dois lados, e o cabeçalho mostra o avatar, as vidas (Cheio), as moedas e as estrelas, 9 de 36.',
            caption: 'A Jornada. Seu nível atual brilha; os selos dos dois lados levam a eventos, recompensas e ofertas.',
          },
          {
            t: 'list',
            items: [
              '**Cabeçalho:** seu avatar, as **vidas** (toque para ver quando vem a próxima), as moedas, as **estrelas** da vila (toque para ver as recompensas por estrelas) e a engrenagem.',
              '**Paradas de nível:** toque no seu nível atual ou em qualquer nível concluído para jogá-lo na hora. Uma parada bloqueada diz quantos níveis faltam até ela.',
              '**Selos à direita:** as recompensas de eventos, de estrelas e os presentes da vila, as corridas, o **Game Center** (quando você tem sessão iniciada) e **Todas as vilas**, um atlas de todos os lugares que você pode visitar.',
              '**Selos à esquerda:** o desafio da sequência, o cofrinho, o Passe de Tijolos, as ofertas, a porta da Loja e outras recompensas.',
              '**Meu nível:** o botão com o alfinete leva você de volta ao seu nível atual.',
            ],
          },
          { t: 'p', text: 'Saiba mais em [A Jornada e suas vilas](help:journey-and-villages).' },
        ],
      },
      {
        id: 'shop-pass-leaders',
        title: 'Loja, Passe e Ranking',
        blocks: [
          {
            t: 'shots',
            items: [
              { id: 'shop', alt: 'A loja: 2.580 moedas e a prateleira de ofertas especiais, com um pacote inicial único de moedas, vidas e reforços, o cofrinho e um passe de reforços com 60 minutos de OVNIs e foguetes grátis.', caption: 'A Loja. **Restaurar compras** fica bem no final.' },
              { id: 'pass', alt: 'A aba Passe com as colunas de recompensas Grátis e Premium subindo pelas faixas.', caption: 'Passe: 30 faixas de recompensas grátis e premium.' },
              { id: 'leaders', alt: 'A aba de classificação com dados de exemplo: um pódio para os três primeiros com suas bandeiras e fases, depois a lista, e a sua linha fixada embaixo (87º, fase 214). Uma barra no topo oferece entrar no Game Center para ver os amigos.', caption: 'Classificação: um único ranking de todos os tempos (dados de exemplo).' },
            ],
          },
          {
            t: 'p',
            text: 'Veja [A Loja, compras e restauração](help:shop-and-purchases) e [Recompensas, eventos e o Passe de Tijolos](help:rewards-and-events).',
          },
        ],
      },
      {
        id: 'profile-collection',
        title: 'Seu Perfil e a Coleção',
        blocks: [
          {
            t: 'list',
            items: [
              '**Perfil** (toque no seu avatar): seu nome, nível, bandeira do país, o botão da Coleção e suas estatísticas: vitórias de primeira, melhor sequência, tabuleiros concluídos e mais. A versão do jogo fica no rodapé.',
              '**Coleção** (pelo Perfil ou pela aba Passe, liberada no nível 95): Cartas de tijolo, Emblemas de capítulo, Lembranças, Cartas da temporada e o **Guarda-roupa**.',
            ],
          },
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'A Coleção na seção Guarda-roupa: o Rei Bricko com uma coroa dourada e um botão Usar, depois as abas Looks, Bandejas, Paletas e Acabamento do tijolo, e embaixo o Kit praiano e o Kit doceria.',
            caption: 'O Guarda-roupa muda a aparência do jogo, nunca o jeito de jogar.',
          },
          { t: 'p', text: 'Saiba mais em [Amigos, a Coleção e o Guarda-roupa](help:friends-and-wardrobe).' },
          { t: 'shots', items: [{ id: 'profile', alt: 'Seu perfil: o amigo azul como avatar com um lápis para editar, o nome Riley, fase 214, região automática, Coleção 33 de 39 e as estatísticas: 96 vitórias de primeira, 74 metas superadas, melhor sequência de 21, 213 tabuleiros concluídos, 4.218 jogadas e 3 tabuleiros perfeitos.', caption: 'Perfil.' }, { id: 'collection', alt: 'A Coleção nas cartas da temporada: temporada 2, 0 de 9 cartas e 0 faíscas, as regras (uma carta a cada três fases novas a partir da fase 96, repetidas dão uma faísca, três faíscas escolhem uma carta que falta) e os nove amigos, cada um marcado como faltando. As cartas de tijolo, 33 de 39, começam abaixo.', caption: 'Coleção.' }] },
        ],
      },
      {
        id: 'settings',
        title: 'Ajustes',
        blocks: [
          {
            t: 'p',
            text: 'Toque na engrenagem no Início ou na Jornada. Os Ajustes têm duas abas, **Jogo** e **Acessibilidade**, e terminam com links para o suporte, a comunidade e as páginas legais. Cada opção é explicada em [Todos os ajustes explicados](help:settings).',
          },
        ],
      },
    ],
    related: ['welcome', 'settings', 'journey-and-villages', 'playing-a-board'],
  },

  {
    slug: 'playing-a-board',
    category: 'play',
    cover: 'board-slide',
    title: 'Como jogar um tabuleiro',
    summary:
      'Cada parte da tela do tabuleiro, como funcionam deslizar e trocar, o que conta como jogada, como funcionam estrelas e pontuação, e o que significam os tabuleiros Difícil, Superdifícil, Chefe e Noite.',
    keywords: 'cabeçalho contador de jogadas trilha de estrelas painel de pedidos objetivos deslizar trocar portão combinar pontuação estrelas dificuldade difícil chefe noite',
    sections: [
      {
        id: 'screen',
        title: 'A tela do tabuleiro',
        blocks: [
          {
            t: 'shot',
            id: 'board-slide',
            alt: 'Um tabuleiro de Slide & Match na praia, fase 25. O topo mostra 5 vidas, 15 jogadas restantes, a trilha de estrelas com uma acesa, objetivos de 1 tijolo amarelo e 3 azuis, e o amigo anfitrião de quepe de marinheiro. O tabuleiro tem tijolos rosa, amarelos, laranja e azuis, cada um com o símbolo da sua cor, portões amarelos, laranja e azuis nas bordas e uma tampa dourada com fechadura sobre uma fileira de tijolos. Embaixo, a barra: Pausa, depois Dica, Foguete e OVNI marcados como grátis, e Desfazer com 6.',
            caption: 'A tela do tabuleiro: cabeçalho, grade e barra.',
          },
          {
            t: 'table',
            head: ['Parte', 'O que mostra'],
            rows: [
              ['Nível e vidas', 'O número do nível e um coração com suas vidas. Toque no coração para ver quando vem a próxima vida.'],
              ['Jogadas', 'O número grande: as jogadas restantes. Ele pulsa quando chega a três, e nas últimas cinco a borda do tabuleiro brilha em tom quente.'],
              ['Sequência de vitórias', 'Uma pequena corrente de tijolos embaixo das jogadas quando você está numa série de vitórias.'],
              ['Trilha de estrelas', 'Enche conforme sua pontuação sobe, com uma estrela em cada marca.'],
              ['Painel de pedidos', 'Os objetivos e quanto falta. Uma marca de visto indica cada um cumprido. Tabuleiros em etapas mostram “FASE 1 / 2”.'],
              ['Amigo', 'O amigo anfitrião da vila. Toque nele para ganhar uma risadinha ou um aceno.'],
              ['Placa de dificuldade', 'Tabuleiros Difícil, Superdifícil, Chefe ou Noite trazem uma placa embaixo do cabeçalho.'],
              ['Barra', 'Pausa, depois Dica, Foguete, OVNI e Desfazer. Veja [Reforços, dicas e Pausa](help:boosters-and-pause).'],
            ],
          },
        ],
      },
      {
        id: 'slide',
        title: 'Deslizar tijolos para casa',
        blocks: [
          {
            t: 'list',
            items: [
              'Passe o dedo em um tijolo na direção de um espaço vazio. Ele para onde você soltar, na casa inteira mais próxima, ou antes, se encontrar uma peça, um bloqueio ou a borda.',
              'Se arrastar menos de meia casa, ele volta ao lugar sem gastar jogada.',
              'Um tijolo só sai por um **portão aberto da cor dele**. Qualquer outro portão funciona como parede.',
              'Tijolos comuns, chaves e raios de linha podem sair por um portão. Bombas, dardos e bombas de cor param no portão.',
              'Tijolos longos e grandes deslizam como uma peça só e precisam de um portão tão largo quanto eles. Eles contam cada casa que ocupam.',
              'Nos tabuleiros em que os tijolos caem, você pode deslizar para os lados ou direto para fora por um portão.',
              'Cada deslize gasta uma jogada.',
            ],
          },
        ],
      },
      {
        id: 'swap',
        title: 'Trocar e combinar',
        blocks: [
          {
            t: 'list',
            items: [
              'Passe o dedo em um tijolo na direção do vizinho para trocá-los. A troca vale se formar uma linha de três ou mais, um quadrado 2×2, disparar dois especiais juntos ou usar uma bomba de cor.',
              'Caso contrário, os tijolos voltam, você sente dois toques curtos e **nenhuma jogada é gasta**.',
              'Combinar quatro, cinco, uma forma de L ou T, ou um quadrado cria um tijolo especial. Veja [Tijolos especiais](help:bricks-specials-and-blockers#specials).',
              'Toque em um tijolo especial para dispará-lo onde ele está. Isso gasta uma jogada.',
            ],
          },
        ],
      },
      {
        id: 'never-stuck',
        title: 'Você nunca fica sem saída',
        blocks: [
          {
            t: 'p',
            text: 'Se nenhuma jogada for possível, o tabuleiro é embaralhado de graça, com o aviso **Embaralhando!**: nenhuma jogada e nenhuma vida são gastas. Se um tabuleiro tem jogadas, mas nenhuma delas pode levar aos seus objetivos, ele é distribuído de novo sem alarde. E se faltar ao tabuleiro uma cor de que um objetivo precisa, tijolos sobrando mudam de cor para que o objetivo sempre possa ser cumprido.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Pontuação, estrelas e o bônus de fim de tabuleiro',
        blocks: [
          {
            t: 'list',
            items: [
              'Toda conclusão vale pelo menos **uma estrela**. Uma pontuação maior dá duas ou três; a trilha de estrelas mostra quanto falta.',
              'Quando o último objetivo é cumprido, aparece **Objetivo concluído!** Cada jogada que sobrou vira um raio de linha, todos disparam, e cada jogada restante soma 150 pontos. Toque para pular.',
              'Jogue de novo pela Jornada um tabuleiro já concluído quando quiser, para melhorar as estrelas dele.',
            ],
          },
          {
            t: 'shot',
            id: 'clear',
            alt: 'O cartão de vitória com três estrelas douradas, a palavra Brilhante!, uma pontuação de 5.470 e mais 140 moedas.',
            caption: 'Três estrelas: Brilhante! Duas: Ótimo! Uma: Concluído!',
          },
        ],
      },
      {
        id: 'tiers',
        title: 'Tabuleiros Difícil, Superdifícil, Chefe e Noite',
        blocks: [
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Fase 35 ao entardecer, 28 jogadas restantes, com uma placa roxa DIFÍCIL sob os objetivos: 2 amarelos, 5 rosa e 3 castelos de areia. O tabuleiro em forma de castelo tem um tijolo rosa grande, tijolos cobertos de musgo e quatro caixotes de castelo de areia, com portões amarelos, rosa e vermelhos.',
            caption: 'Um tabuleiro Difícil traz sua placa embaixo do cabeçalho.',
          },
          {
            t: 'table',
            head: ['Dificuldade', 'O que muda', 'Moedas por concluir'],
            rows: [
              ['Normal', 'Sem placa.', '25'],
              ['Difícil', 'Os objetivos pedem cerca de 15% a mais, e há alguns obstáculos extras.', '50'],
              ['Superdifícil', 'Os objetivos pedem cerca de 30% a mais.', '80'],
              ['Chefe', 'O último tabuleiro de um capítulo, a partir do nível 40. Os objetivos pedem cerca de 40% a mais.', '80'],
              ['Noite', 'Um tabuleiro ambientado depois do anoitecer. Joga como um tabuleiro Difícil.', '50'],
            ],
          },
          {
            t: 'p',
            text: 'Com duas ou mais estrelas, você ganha também um bônus de meta. Os eventos podem dobrar ou triplicar as moedas por concluir.',
          },
        ],
      },
    ],
    related: ['bricks-specials-and-blockers', 'boosters-and-pause', 'lives-moves-and-undos', 'voiceover'],
  },

  {
    slug: 'bricks-specials-and-blockers',
    category: 'play',
    cover: 'board-shapes',
    title: 'Tijolos especiais, bloqueios e tipos de tabuleiro',
    summary:
      'Como criar cada tijolo especial e combo, o que faz cada bloqueio, tampa e portão, os tijolos virados, os portais, os tijolos longos e os doze tipos de tabuleiro de cada vila.',
    keywords: 'bomba raio de linha bomba de cor dardo combo caixote gelo geleia cadeado trancado musgo estátua tampa sala selada contador chave fechadura relógio portão congelado contado portal virado ponto de interrogação tijolo longo forma L T',
    sections: [
      {
        id: 'specials',
        title: 'Tijolos especiais',
        blocks: [
          {
            t: 'table',
            head: ['Especial', 'Como criar', 'O que faz'],
            rows: [
              ['Raio de linha', 'Quatro em linha.', 'Limpa a linha ou coluna inteira, na direção em que você mexeu.'],
              ['Bomba', 'Uma forma de L, T ou +.', 'Explode o quadrado 3×3 em volta dela, duas vezes.'],
              ['Bomba de cor', 'Cinco em linha.', 'Leva todos os tijolos comuns de uma cor: troque-a com essa cor.'],
              ['Dardo teleguiado', 'Um quadrado 2×2.', 'Voa até uma peça de que um objetivo precisa.'],
            ],
          },
          {
            t: 'p',
            text: 'Toque em um especial para dispará-lo onde ele está, ou troque-o com um vizinho. Um raio de linha também pode sair deslizando por um portão da cor dele sem disparar.',
          },
        ],
      },
      {
        id: 'combos',
        title: 'Combos',
        blocks: [
          { t: 'p', text: 'Troque dois especiais entre si para algo maior:' },
          {
            t: 'table',
            head: ['Troque juntos', 'Resultado'],
            rows: [
              ['Raio de linha + raio de linha', 'Uma cruz: uma linha e uma coluna.'],
              ['Raio de linha + bomba', 'Uma cruz com três faixas de largura.'],
              ['Bomba + bomba', 'Uma explosão 5×5.'],
              ['Bomba de cor + qualquer especial', 'Todos os tijolos daquela cor viram esse especial, e todos disparam.'],
              ['Bomba de cor + bomba de cor', 'O tabuleiro inteiro.'],
              ['Dardo + qualquer especial', 'O dardo leva o especial até o alvo. Dois dardos acertam três alvos.'],
            ],
          },
        ],
      },
      {
        id: 'blockers',
        title: 'Bloqueios',
        blocks: [
          {
            t: 'p',
            text: 'Toque em qualquer bloqueio para ver um lembrete de uma linha sobre como tirá-lo. A aparência muda conforme a vila (fardos de feno na fazenda, vasos de flores na Cidade Jardim), mas as regras são as mesmas.',
          },
          {
            t: 'table',
            head: ['Bloqueio', 'O que faz', 'Como tirar'],
            rows: [
              ['Caixote', 'Para os tijolos que deslizam. Tem uma ou duas camadas.', 'Faça uma linha ao lado dele; cada linha quebra uma camada.'],
              ['Gelo (geleia)', 'Prende o tijolo que está dentro dele.', 'Faça uma linha ao lado dele.'],
              ['Cadeado', 'O tijolo não pode se mexer.', 'Faça uma linha **que passe por ele**. Uma linha ao lado não basta.'],
              ['Musgo', 'Se espalha para um tijolo depois de qualquer jogada que não tira nada.', 'Faça uma linha ao lado dele.'],
              ['Estátua', 'Fica em um vão: nada desliza através dela.', 'Ela não sai. Procure outro caminho.'],
            ],
          },
          {
            t: 'shot',
            id: 'board-village',
            alt: 'Fase 35 ao entardecer, 28 jogadas restantes, com uma placa roxa DIFÍCIL sob os objetivos: 2 amarelos, 5 rosa e 3 castelos de areia. O tabuleiro em forma de castelo tem um tijolo rosa grande, tijolos cobertos de musgo e quatro caixotes de castelo de areia, com portões amarelos, rosa e vermelhos.',
            caption: 'Caixotes de castelo de areia e musgo no mesmo tabuleiro.',
          },
        ],
      },
      {
        id: 'lids',
        title: 'Salas seladas e suas tampas',
        blocks: [
          { t: 'p', text: 'Alguns tijolos ficam embaixo de uma tampa e não podem se mexer até ela abrir. Há cinco tipos de tampa:' },
          {
            t: 'table',
            head: ['Tampa', 'Abre quando…'],
            rows: [
              ['Contador', 'Tijolos suficientes de qualquer cor saíram do tabuleiro (o número na tampa).'],
              ['Contador de cor', 'Tijolos suficientes da cor dela saíram ou foram combinados.'],
              ['Chave de vitral', 'Você faz uma linha da cor dela bem ao lado.'],
              ['Relógio de latão', 'Você fez o número de jogadas indicado nele.'],
              ['Fechadura', 'O tijolo-chave sai do tabuleiro, combinado ou deslizando pelo portão dele.'],
            ],
          },
        ],
      },
      {
        id: 'gates',
        title: 'Portões',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Portão aberto', text: 'Recebe tijolos da cor dele. A largura importa para os tijolos longos.' },
              { term: 'Portão congelado', text: 'Derrete um pouco sempre que qualquer tijolo vai para casa, ou quando as peças na frente dele somem. Assim que ele abrir, deslize a cor dele para dentro.' },
              { term: 'Portão contado', text: 'Recebe só uma certa quantidade de tijolos e depois fecha de vez. Escolha quais mandar.' },
              { term: 'Portão de etapa', text: 'Fica selado até começar a segunda etapa de objetivos do tabuleiro.' },
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Os portões também levam o símbolo da cor deles e, no tabuleiro de alto contraste, um portão cuja cor se parece com a do piso ganha um contorno em dois tons.',
          },
        ],
      },
      {
        id: 'more',
        title: 'Tijolos virados, portais e tijolos com formato',
        blocks: [
          {
            t: 'list',
            items: [
              '**Tijolos virados “?”** escondem a cor. Eles desviram quando um tijolo ao lado sai do tabuleiro; movê-los não os desvira. Mesmo assim, eles jogam com a cor verdadeira.',
              '**Portais** vêm em pares: deslize um tijolo para dentro de um e ele sai pelo gêmeo, em outro lado.',
              '**Tijolos longos, grandes, em L e em T** deslizam e caem como uma peça só, nunca são trocados, nunca contam em linhas e precisam de um portão tão largo quanto eles. Nenhum reforço pode escolhê-los.',
            ],
          },
          {
            t: 'shot',
            id: 'board-shapes',
            alt: 'Fase 31 na praia: 16 jogadas restantes, objetivos de 8 amarelos e 8 azuis. Tijolos grandes e inteiriços estão empilhados no fundo do tabuleiro: uma barra azul comprida, uma coluna azul alta e uma peça amarela em forma de C, com portões azuis e amarelos nas bordas.',
            caption: 'Tijolos grandes deslizam como uma peça só e precisam de um portão tão largo quanto eles.',
          },
        ],
      },
      {
        id: 'kinds',
        title: 'Os doze tipos de tabuleiro',
        blocks: [
          {
            t: 'p',
            text: 'Toda vila completa tem doze tabuleiros, e os tabuleiros de 1 a 12 são sempre do mesmo tipo, para você aprender o ritmo de uma vila: ',
          },
          {
            t: 'table',
            head: ['Tabuleiro', 'Tipo', 'O que esperar'],
            rows: [
              ['1', 'De volta para casa', 'Deslize os tijolos para fora pelos portões deles.'],
              ['2', 'Deslizar e combinar', 'Deslizes e trocas juntos.'],
              ['3', 'Jardim aberto', 'Um tabuleiro espaçoso, com lugar para planejar.'],
              ['4', 'Jardim em queda', 'Os tijolos caem e chegam tijolos novos.'],
              ['5', 'Vasos e gelo', 'Caixotes e gelo para quebrar.'],
              ['6', 'Tijolos longos', 'Tijolos com formato e portões largos.'],
              ['7', 'Peças de canto', 'Os tijolos caem, mas não chegam novos.'],
              ['8', 'Caixotes e gelo', 'Mais camadas para quebrar.'],
              ['9', 'Cadeados e musgo', 'Cadeados para abrir e musgo que se espalha.'],
              ['10', 'Corredores de pedra', 'Estátuas que bloqueiam o caminho.'],
              ['11', 'O grande dia', 'Um final maior, muitas vezes com uma base selada.'],
              ['12', 'Quebra-cabeça tranquilo', 'Os tijolos caem sem reposição: pense com calma.'],
            ],
          },
          {
            t: 'p',
            text: 'A partir da quinta vila, também começam a aparecer tampas, tijolos virados, portões de etapa e portais. Cada um ganha seu próprio cartão de ensino na primeira vez.',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'boosters-and-pause', 'vision-hearing-and-motion', 'voiceover'],
  },

  {
    slug: 'boosters-and-pause',
    category: 'play',
    cover: 'board-shapes',
    title: 'Reforços, dicas e Pausa',
    summary:
      'O que fazem Dica, Foguete, OVNI e Desfazer, os grátis que você ganha em cada tabuleiro, como conseguir mais e tudo o que há no menu Pausa.',
    keywords: 'reforço booster item dica foguete ovni desfazer barra grátis pausa reiniciar sair desistir continuar',
    sections: [
      {
        id: 'tray',
        title: 'A barra',
        blocks: [
          {
            t: 'p',
            text: 'A barra na parte de baixo de cada tabuleiro tem **Pausa** e depois **Dica**, **Foguete**, **OVNI** e **Desfazer**. Todos estão disponíveis desde o nível 1. Um selo **GRÁTIS** indica que o próximo uso não custa nada; um número mostra quantos você tem.',
          },
          {
            t: 'table',
            head: ['Reforço', 'Como usar', 'O que faz'],
            rows: [
              ['Dica', 'Toque nele.', 'Mostra e fala a melhor jogada, um deslize ou uma troca.'],
              ['Foguete', 'Toque nele e depois em um tijolo comum.', 'Transforma esse tijolo em um raio de linha que dispara ao longo da linha dele.'],
              ['OVNI', 'Toque nele e depois em uma peça.', 'Tira uma camada dela: uma camada de caixote, gelo, um cadeado, musgo ou um tijolo.'],
              ['Desfazer', 'Toque nele.', 'Desfaz sua última jogada.'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Os reforços não podem escolher tijolos com formato nem nada que esteja embaixo de uma tampa.',
          },
        ],
      },
      {
        id: 'free',
        title: 'Reforços grátis',
        blocks: [
          {
            t: 'list',
            items: [
              '**Cada tentativa** vem com uma Dica, um Foguete e um OVNI grátis. Eles não podem ser guardados para depois.',
              '**Sequências de vitórias** dão mais para o próximo tabuleiro: 2 vitórias seguidas dão uma Dica, 3 um Foguete, 4 um OVNI e 5 os três. Só contam níveis novos.',
              '**O primeiro desfazer** de cada tabuleiro é grátis.',
              '**Um presente de boas-vindas** com 2 Dicas, 2 Foguetes e 2 OVNIs chega uma vez, no começo da Jornada.',
              'Algumas recompensas e passes deixam um reforço grátis em todos os tabuleiros por um tempo; o selo dele diz GRÁTIS.',
              'Com o VoiceOver, o toque duplo com dois dedos dá uma dica grátis a qualquer momento. Veja [Como jogar com o VoiceOver](help:voiceover#hints).',
            ],
          },
        ],
      },
      {
        id: 'more',
        title: 'Como conseguir mais',
        blocks: [
          {
            t: 'p',
            text: 'Toque em um reforço vazio para comprar um com moedas (Dica 150, Foguete 300, OVNI 500) ou um pacote na Loja. Os reforços também vêm da Roda, das recompensas por estrelas das vilas, das Missões, do Passe de Tijolos e dos eventos.',
          },
        ],
      },
      {
        id: 'undo',
        title: 'Desfazer',
        blocks: [
          {
            t: 'list',
            items: [
              'O primeiro desfazer de cada tabuleiro é grátis. Depois disso, os desfazeres vêm de um estoque de até **cinco**, que recarrega um a cada **25 minutos**.',
              'O número no botão Desfazer soma os dois, então um tabuleiro novo mostra 6 quando seu estoque está cheio.',
              'Se o estoque estiver vazio: compre cinco por 250 moedas, assista a um vídeo opcional para ganhar dois, ou espere.',
            ],
          },
        ],
      },
      {
        id: 'pause',
        title: 'O menu Pausa',
        blocks: [
          {
            t: 'p',
            text: 'Toque no botão rosa **Pausa** à esquerda da barra (ou à direita, com a Barra para canhotos). Com o VoiceOver, o gesto de esfregar com dois dedos também o abre.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Sons, Música, Vibração', text: 'Ative ou desative cada um sem sair do tabuleiro.' },
              { term: 'Continuar', text: 'Volta ao tabuleiro.' },
              { term: 'Game Center', text: 'Suas conquistas e classificações.' },
              { term: 'Reiniciar', text: 'Começa o tabuleiro de novo. **Antes da primeira jogada é grátis; depois de uma jogada custa uma vida**, porque encerra esta tentativa.' },
              { term: 'Sair', text: 'Abre o cartão **Sair?**.' },
            ],
          },
          {
            t: 'shot',
            id: 'leave',
            alt: 'O cartão Sair?: Isso custa uma vida. Você tem 5. Seu progresso neste tabuleiro não é salvo. Botões: Continuar jogando e Sair.',
            caption: 'O cartão Sair? diz exatamente quanto sair vai custar antes de você escolher.',
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Sair antes da primeira jogada é sempre grátis. Se você estiver numa sequência de vitórias, o cartão avisa que sair vai encerrá-la.',
          },
        ],
      },
    ],
    related: ['lives-moves-and-undos', 'playing-a-board', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'lives-moves-and-undos',
    category: 'play',
    cover: 'wall',
    title: 'Vidas, ficar sem jogadas e desfazer',
    summary:
      'Quando uma vida é gasta e quando não é, como as vidas voltam, o que a tela de jogadas esgotadas oferece, a ajudinha, a tentativa grátis do dia e os vídeos opcionais.',
    keywords: 'vidas corações recarregar sem jogadas continuar desistir nível falhou sem vidas ilimitadas ajudinha tentativa grátis vídeo anúncios recompensa',
    sections: [
      {
        id: 'lives',
        title: 'Vidas',
        blocks: [
          {
            t: 'list',
            items: [
              'Você pode ter até **cinco vidas** (oito enquanto tiver o Passe de Tijolos atual). Uma volta a cada **30 minutos**, mesmo com o jogo fechado.',
              'Abrir um tabuleiro exige uma vida, mas **não gasta nenhuma**. Uma vida só é gasta quando você **perde** uma tentativa.',
              '**Vencer nunca custa uma vida.** Sair ou reiniciar antes da primeira jogada também não.',
            ],
          },
          {
            t: 'table',
            caption: 'Quando uma vida é gasta',
            head: ['Você…', 'Gasta vida?'],
            rows: [
              ['Conclui o tabuleiro', 'Não'],
              ['Fica sem jogadas e desiste (ou fecha a tela de jogadas esgotadas)', 'Sim'],
              ['Reinicia ou sai **depois** de uma jogada', 'Sim, e o cartão avisa antes'],
              ['Reinicia ou sai **antes** da primeira jogada', 'Não'],
              ['Continua com mais jogadas', 'Não: é a mesma tentativa'],
              ['Chega a um tabuleiro em que nada se mexe, ainda com jogadas', 'Não'],
              ['Perde na tentativa grátis do dia ou durante vidas ilimitadas', 'Não'],
            ],
          },
        ],
      },
      {
        id: 'out-of-moves',
        title: 'Sem jogadas',
        blocks: [
          {
            t: 'shot',
            id: 'wall',
            alt: 'A tela Sem jogadas mostrando os objetivos que ainda faltam, um botão de mais 5 jogadas por 300 moedas, um botão Assistir para ganhar mais 2 jogadas e Desistir.',
            caption: 'Sem jogadas: o que ainda falta e suas opções.',
          },
          { t: 'p', text: 'Quando as jogadas acabam antes de cumprir os objetivos, você vê o que falta e pode escolher:' },
          {
            t: 'table',
            head: ['Continuar nesta tentativa', 'Custo', 'Você ganha'],
            rows: [
              ['Primeira vez', '300 moedas', '+5 jogadas'],
              ['Segunda vez', '500 moedas', '+5 jogadas e uma Dica'],
              ['Terceira vez em diante', '900 moedas', '+5 jogadas e um OVNI'],
            ],
          },
          {
            t: 'list',
            items: [
              'Ou assista a um **vídeo opcional**: +2 jogadas, depois +1 jogada, depois um OVNI grátis.',
              'Se você tiver guardado um **+5 jogadas**, use-o aqui.',
              'Em um tabuleiro que você já tentou várias vezes, cada continuação dá um pouco mais: uma jogada extra para cada tentativa perdida depois da terceira, até +15.',
              '**Desistir** encerra a tentativa e gasta uma vida. A nota embaixo do botão avisa se isso também vai encerrar uma sequência de vitórias.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Nada pago é oferecido antes do nível 6. Os preços voltam ao início a cada nova tentativa.',
          },
        ],
      },
      {
        id: 'level-failed',
        title: 'Nível falhou e tentar de novo',
        blocks: [
          {
            t: 'p',
            text: 'Depois de desistir, você vê **Nível falhou**, com o quanto chegou perto (“Quase!”, “Quase lá!” ou “Não foi desta vez”) e se uma vida foi gasta. Escolha **Tentar de novo** ou **Voltar ao mapa**. A partir do nível 6, você pode começar a próxima tentativa com vantagem: um Foguete no tabuleiro e um OVNI grátis, por 800 moedas.',
          },
          {
            t: 'callout',
            kind: 'tip',
            title: 'Uma ajudinha',
            text: 'Empacou em um tabuleiro? A partir da sexta tentativa nele, o jogo dá **3 jogadas extras** antes de você começar: “Uma ajudinha: 3 movimentos a mais nesta tentativa”. Uma vez por dia em cada tabuleiro.',
          },
          { t: 'shot', id: 'level-failed', alt: 'Fase não concluída: um amigo triste, «Quase lá!», os objetivos que faltam (3 tijolos de sol e 3 de onda), um coração partido indicando uma vida usada, um botão azul para tentar de novo, uma oferta opcional e a volta ao mapa.', caption: 'A tela mostra o quanto faltou.' },
        ],
      },
      {
        id: 'out-of-lives',
        title: 'Sem vidas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Uma tentativa grátis:** uma vez por dia, sem vidas, você pode ganhar uma tentativa grátis em um tabuleiro. Se vencer, fica com a vida; se perder, não custa nada.',
              '**Esperar:** a tela faz a contagem regressiva até a próxima vida.',
              '**Recarregar:** o estoque cheio por 600 moedas, uma recarga guardada se você tiver uma, ou um vídeo opcional para ganhar uma vida.',
              '**Vidas ilimitadas:** 1 hora (900 moedas), 3 horas (2.000) ou 24 horas (6.000), ou com dinheiro de verdade na Loja. Comprar mais enquanto uma está ativa soma tempo.',
            ],
          },
          {
            t: 'p',
            text: 'Toque no coração no cabeçalho da Jornada a qualquer momento para ver suas vidas e quando vem a próxima.',
          },
          { t: 'shot', id: 'no-lives', alt: 'Sem vidas: 0 de 5 vidas e uma contagem até a próxima, depois vidas ilimitadas por 1, 3 ou 24 horas com moedas ou dinheiro, uma recarga por 600 moedas, um vídeo por uma vida e OK. Uma nota explica que só se perde uma vida ao perder um tabuleiro, que elas voltam uma a cada 30 minutos e que, uma vez por dia, o tanque vazio ganha uma tentativa grátis.', caption: 'Sem vidas: esperar, recarregar ou continuar jogando.' },
        ],
      },
      {
        id: 'videos',
        title: 'Vídeos opcionais',
        blocks: [
          {
            t: 'p',
            text: 'O OutBrick **não tem anúncios obrigatórios**: nada de banners, nada de anúncios que surgem entre tabuleiros. Os vídeos só passam quando você escolhe um em troca de uma recompensa, e só os vídeos assistidos até o fim pagam. Há oito tipos, com limite total de **39 por dia**, e os limites voltam a zero à meia-noite.',
          },
          {
            t: 'table',
            head: ['Onde', 'Recompensa', 'Por dia'],
            rows: [
              ['Sem vidas', '1 vida', '8'],
              ['Sem desfazer', '2 desfazeres', '8'],
              ['Sem jogadas', '+2 jogadas, depois +1, depois um OVNI grátis', '6'],
              ['Cartão de vitória', 'As moedas da conclusão de novo (75 a 300)', '4'],
              ['Roda', 'Um segundo giro', '1'],
              ['Balão de presente', 'Moedas ou um reforço grátis por 10 minutos', '2'],
              ['Cine Tijolo', 'Um quadrado de prêmio por vídeo', '6'],
              ['Início do tabuleiro', 'Uma Dica (no momento não aparece)', '4'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Com **Remover anúncios** ou o **Passe de Tijolos** atual, essas mesmas recompensas dizem **Resgatar recompensa** e pagam na hora, sem vídeo, dentro dos mesmos limites diários.',
          },
        ],
      },
    ],
    related: ['boosters-and-pause', 'shop-and-purchases', 'playing-a-board', 'rewards-and-events'],
  },
];
