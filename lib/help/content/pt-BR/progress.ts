import type { HelpArticle } from '../../model.ts';

/** A Jornada, as recompensas, a Loja e os amigos, em português do Brasil. Conferido com a 5.1.1 (68). */
export const progressArticles: HelpArticle[] = [
  {
    slug: 'journey-and-villages',
    category: 'progress',
    cover: 'journey',
    title: 'A Jornada e suas vilas',
    summary:
      'Como funciona o mapa de 2.000 níveis: vilas e capítulos, estrelas e recompensas da vila, baús e presentes, o atlas de todas as vilas e como jogar um tabuleiro de novo.',
    keywords: 'mapa níveis fases vila capítulo estrelas recompensas baú presente balão atlas jogar de novo rejogar bloqueado',
    sections: [
      {
        id: 'map',
        title: 'O mapa',
        blocks: [
          {
            t: 'shot',
            id: 'journey',
            alt: 'O mapa da Jornada: um caminho de pedras subindo por uma vila de árvores com flores cor-de-rosa, com as paradas dos níveis 213, 214 e 215. O nível 214 brilha com o rótulo Jogar. Há selos dos dois lados.',
            caption: 'A Jornada é uma longa avenida feita de tijolos. Seu nível atual brilha.',
          },
          {
            t: 'list',
            items: [
              'A Jornada tem **2.000 níveis** em **167 vilas** de doze tabuleiros cada (a última vila tem oito).',
              'Cada vila é construída com tijolos de brinquedo no seu próprio tema, e as repetições de um tema voltam em outra hora do dia ou estação, então não há duas vilas iguais.',
              'Toque no seu **nível atual** para jogá-lo. Toque em qualquer nível **concluído** para jogá-lo de novo e melhorar as estrelas; jogar de novo nunca muda o seu lugar no mapa.',
              'Um nível **bloqueado** diz quantos níveis faltam até ele.',
              'O alfinete **Meu nível** leva você de volta para onde está.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            title: 'Vilas e capítulos',
            text: 'Uma **vila** são doze tabuleiros no mapa. Um **capítulo** são vinte níveis, usados para os emblemas de capítulo e as conquistas do Game Center. Eles são contados separadamente, então um capítulo pode terminar no meio de uma vila.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Estrelas e recompensas da vila',
        blocks: [
          {
            t: 'list',
            items: [
              'Cada tabuleiro pode dar até três estrelas, então uma vila tem 36. O indicador de **estrelas** no cabeçalho mostra quantas você tem nesta vila.',
              'Juntar estrelas faz você subir a escada de estrelas da vila: 50 moedas, uma Dica, 100 moedas e um Foguete. Um selo no mapa avisa quando uma recompensa está pronta para resgatar.',
              'Concluir uma vila inteira mostra um cartão de comemoração com **Compartilhar** e **Vamos em frente**.',
            ],
          },
        ],
      },
      {
        id: 'map-extras',
        title: 'Baús, presentes e outras coisas no mapa',
        blocks: [
          {
            t: 'defs',
            items: [
              { term: 'Baú da jornada', text: 'Toque em um baú no caminho para ver o que ele guarda. Quando você chega até ele, o cartão de vitória mostra as moedas e os reforços que ele deu.' },
              { term: 'Presente da Vila', text: 'Um presente com hora marcada; o selo faz a contagem regressiva até ele ficar pronto.' },
              { term: 'Balão de presente', text: 'Passa flutuando de vez em quando. Um vídeo opcional o pega e dá moedas ou um curto período de reforço grátis.' },
              { term: 'Segredos', text: 'Pequenas coisas escondidas para encontrar pelo caminho. Toque em tudo o que parecer fora do lugar.' },
              { term: 'Todas as vilas', text: 'O atlas: cada vila como um cartão, com filtros para em andamento, concluídas ou bloqueadas. **Minha vila** leva você de volta.' },
              { term: 'Game Center', text: 'Quando você tem sessão iniciada, um selo abre seus desafios e conquistas.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Prefere um mapa mais tranquilo? Em Ajustes › Jogo › **Recursos do jogo** você pode esconder os eventos e as ofertas que não interessam. Você não perde nada do que já ganhou.',
          },
          { t: 'shot', id: 'atlas', alt: 'Todos os vilarejos: filtros Todos (167), Em andamento, Concluídos e Bloqueados; um título para os vilarejos 1 a 28 com 217 de 1.008 estrelas; e cartões de vilarejo com fases e estrelas, como a cidade das cerejeiras, fases 205 a 216, 9 de 36 estrelas, marcada Você está aqui, e o próximo, liberado ao concluir a fase 216.', caption: 'O atlas de todos os vilarejos.' },
        ],
      },
      {
        id: 'a11y',
        title: 'O mapa com o VoiceOver',
        blocks: [
          {
            t: 'p',
            text: 'Todos os elementos do mapa oferecem **Onde estou** e **Ir para meu próximo nível**; o toque duplo com dois dedos fala sua vila, os níveis concluídos e o próximo nível; e passar três dedos avança uma vila de cada vez. Veja [Como jogar com o VoiceOver](help:voiceover#journey).',
          },
        ],
      },
    ],
    related: ['playing-a-board', 'rewards-and-events', 'menus-tour', 'voiceover'],
  },

  {
    slug: 'rewards-and-events',
    category: 'progress',
    cover: 'pass',
    title: 'Recompensas, eventos e o Passe de Tijolos',
    summary:
      'O Tijolo do dia e as sequências de dias, a Roda, as Missões, o Passe de Tijolos, os eventos e as corridas, e a classificação.',
    keywords: 'tijolo do dia sequência roda giro missões passe de tijolos brick pass temporada faixas premium evento corrida royale resgate turma ranking classificação conquistas game center cofrinho cinema',
    sections: [
      {
        id: 'daily',
        title: 'O Tijolo do dia e as sequências de dias',
        blocks: [
          {
            t: 'list',
            items: [
              '**Tijolo do dia:** o primeiro tabuleiro que você conclui em cada dia paga 100 moedas, resgatadas automaticamente no Início.',
              '**Sequência de dias:** a chama no Início conta quantos dias seguidos você concluiu um tabuleiro. Toque nela para ver a próxima recompensa.',
            ],
          },
          {
            t: 'table',
            caption: 'Recompensas da sequência de dias',
            head: ['Dias seguidos', 'Recompensa'],
            rows: [
              ['3', '100 moedas'],
              ['7', '250 moedas e um protetor de sequência'],
              ['14', '500 moedas e um protetor de sequência'],
              ['30', '800 moedas e um protetor de sequência'],
              ['60', '1.200 moedas e um protetor de sequência'],
              ['100', '2.500 moedas e um protetor de sequência'],
              ['A cada 100 depois disso', '2.000 moedas e um protetor de sequência'],
            ],
          },
          {
            t: 'p',
            text: 'Perdeu um dia? Uma sequência de três dias ou mais pode ser recuperada dentro de uma semana, de graça com um protetor de sequência ou por 250 moedas. Você pode ter até dois protetores.',
          },
        ],
      },
      {
        id: 'wheel',
        title: 'A Roda',
        blocks: [
          {
            t: 'p',
            text: 'O botão **Roda** no Início dá um giro grátis por dia, que vale moedas (de 50 a 500) ou uma Dica, um Foguete ou um OVNI. Conclua três níveis novos em um dia e o giro grátis paga moedas em dobro. Um vídeo opcional dá um segundo giro.',
          },
        ],
      },
      {
        id: 'missions',
        title: 'Missões',
        blocks: [
          {
            t: 'p',
            text: 'Toque em **Missões** no Início, ou no cartão de Missões na aba Passe: três tarefas para hoje e três para a semana, cada uma com uma recompensa. Termine uma e toque em **Resgatar**, ou em **Resgatar tudo**. As missões diárias recomeçam à meia-noite UTC; as semanais, na segunda-feira.',
          },
        ],
      },
      {
        id: 'pass',
        title: 'O Passe de Tijolos',
        blocks: [
          {
            t: 'shot',
            id: 'pass',
            alt: 'A aba Passe: um cabeçalho da temporada, um cartão de Missões e um cartão da Coleção, e depois duas colunas de recompensas, Grátis e Premium, subindo pelas faixas numeradas.',
            caption: 'A aba Passe. Cada conclusão faz você subir pelas 30 faixas da temporada.',
          },
          {
            t: 'list',
            items: [
              'Cada **temporada** tem **30 faixas**. Concluir níveis novos faz você subir por elas; conclusões Difícil contam uma a mais e Superdifícil, duas.',
              'A trilha **Grátis** paga moedas e reforços para todo mundo.',
              'A trilha **Premium**, liberada ao comprar o Passe de Tijolos daquela temporada, acrescenta recompensas maiores. Tê-lo também soma três vidas ao seu estoque, dá três jogadas grátis na tela de jogadas esgotadas e tira os vídeos: as recompensas são resgatadas sem assistir.',
              'As faixas Premium que você já alcançou são pagas no momento em que você o libera.',
            ],
          },
        ],
      },
      {
        id: 'events',
        title: 'Eventos e corridas',
        blocks: [
          {
            t: 'p',
            text: 'Os eventos vêm e vão conforme um calendário e aparecem como um banner no Início e um selo na Jornada. Alguns dobram ou triplicam as moedas por concluir. Quatro tipos de corrida e resgate acontecem em paralelo:',
          },
          {
            t: 'defs',
            items: [
              { term: 'Resgate de amigos', text: 'Uma história semanal: conclua quatro finais de vila para resgatar um amigo.' },
              { term: 'Corrida da vila', text: 'Corra contra quatro jogadores por uma vila. Compartilha seu nome de jogador.' },
              { term: 'Brick Royale', text: 'Uma competição opcional para até 100 jogadores. Compartilha seu nome de jogador quando você participa.' },
              { term: 'Corrida da turma', text: 'Cinco níveis novos em um dia, contra jogadores e amigos.' },
            ],
          },
          {
            t: 'callout',
            kind: 'tip',
            text: 'Qualquer um deles pode ser desativado em **Ajustes › Jogo › Recursos do jogo**, assim como as ofertas no mapa.',
          },
        ],
      },
      {
        id: 'leaders',
        title: 'Ranking e Game Center',
        blocks: [
          {
            t: 'list',
            items: [
              'A aba **Ranking** é liberada no nível 21: uma única classificação de jogadores de todos os tempos, com bandeiras. Toque em **Ver mais** para ver mais abaixo.',
              'Você aparece nela enquanto **Ajustes › Jogo › Mostrar-me no placar** estiver ativado. Isso publica seu nome de jogador e seu nível; desativar remove você.',
              'Escolha ou esconda sua **bandeira** no seu Perfil.',
              'O **Game Center** tem 65 conquistas e classificações de nível mais alto, total de tabuleiros concluídos, hoje e esta semana. Inicie a sessão pela barra na aba Ranking, ou chegue ao Game Center pelo selo da Jornada ou pelo menu Pausa.',
            ],
          },
        ],
      },
    ],
    related: ['journey-and-villages', 'shop-and-purchases', 'friends-and-wardrobe', 'apple-features'],
  },

  {
    slug: 'shop-and-purchases',
    category: 'progress',
    cover: 'shop',
    title: 'A Loja, compras e restauração',
    summary:
      'O que há em cada prateleira da Loja, o que fazem Remover anúncios e o Passe de Tijolos, como restaurar compras em um aparelho novo e como funcionam os reembolsos.',
    keywords: 'comprar compra dentro do app preço moedas pacote remover anúncios restaurar compras reembolso dinheiro recibo família',
    sections: [
      {
        id: 'shelves',
        title: 'O que há na Loja',
        blocks: [
          {
            t: 'shot',
            id: 'shop',
            alt: 'A loja: 2.580 moedas e a prateleira de ofertas especiais, com um pacote inicial único de moedas, vidas e reforços, o cofrinho e um passe de reforços com 60 minutos de OVNIs e foguetes grátis.',
            caption: 'A Loja, aberta pela aba dela, pelas moedas no Início ou pela porta da Loja na Jornada.',
          },
          {
            t: 'p',
            text: 'Prateleiras de cima para baixo: **Ofertas especiais** (o Pacote Inicial enquanto durar, o Cofrinho, o Passe de Reforços, o Passe de Tijolos e Remover anúncios), a **Oferta da semana**, ofertas de evento durante um evento, a **Oferta de fim de semana** de sexta a segunda, **Itens e jogadas**, **Reforços**, **Passes**, **Pacotes**, **Vidas**, o **Guarda-roupa**, **Moedas** e, por fim, **Restaurar compras** e os links legais.',
          },
          {
            t: 'list',
            items: [
              'Os preços aparecem na sua moeda local, definidos pela App Store.',
              'Sua primeira compra de moedas vale em dobro, uma vez.',
              'O **Cofrinho** enche de moedas conforme você conclui níveis novos; quando estiver pronto, dá para abri-lo por um preço pequeno.',
              'Todo passe e item com tempo é uma compra única. **Nada no OutBrick é assinatura**, e nada se renova sozinho.',
              'Nada pago é oferecido em um tabuleiro antes do nível 6.',
            ],
          },
        ],
      },
      {
        id: 'remove-ads',
        title: 'Remover anúncios e o Passe de Tijolos',
        blocks: [
          {
            t: 'p',
            text: '**Remover anúncios** tira todos os vídeos opcionais, mas não as recompensas: os botões que diziam Assistir passam a dizer **Resgatar recompensa** e pagam na hora, dentro dos mesmos limites diários. Ter o **Passe de Tijolos** da temporada atual faz o mesmo durante aquela temporada e soma três vidas ao seu estoque.',
          },
        ],
      },
      {
        id: 'restore',
        title: 'Restaurar compras',
        blocks: [
          {
            t: 'steps',
            items: [
              'Inicie a sessão no iPhone com a mesma Conta Apple usada na compra, e no iCloud.',
              'Abra a **Loja** e role até o final.',
              'Toque em **Restaurar compras**.',
            ],
          },
          {
            t: 'p',
            text: 'Restaurar traz de volta tudo o que é seu para sempre: **Remover anúncios**, as temporadas 1 a 3 do Passe de Tijolos e os itens do Guarda-roupa. Moedas, reforços, vidas e outras coisas que se gastam não são restauradas pela App Store; elas acompanham seu progresso pelo iCloud. Veja [Progresso, iCloud e privacidade](help:progress-privacy-and-account).',
          },
        ],
      },
      {
        id: 'refunds',
        title: 'Reembolsos e problemas com uma compra',
        blocks: [
          {
            t: 'p',
            text: 'As compras são feitas pela Apple, então é a Apple que cuida dos reembolsos: veja [nossa página de reembolsos](/refunds) para saber como pedir. Se algo que você comprou não chegou, tente primeiro **Restaurar compras** e depois escreva para nós em particular pelo [formulário de contato](/contact). Nunca publique um recibo ou número de pedido na comunidade.',
          },
        ],
      },
    ],
    related: ['rewards-and-events', 'lives-moves-and-undos', 'progress-privacy-and-account', 'troubleshooting'],
  },

  {
    slug: 'friends-and-wardrobe',
    category: 'progress',
    cover: 'wardrobe',
    title: 'Amigos, a Coleção e o Guarda-roupa',
    summary:
      'Conheça os nove amigos tijolo, veja o que eles fazem no Início e no tabuleiro, e como funcionam seu Perfil, a Coleção e o Guarda-roupa.',
    keywords: 'mascote amigos personagens bloo peach sprout moss bricko zippy vio flurry poppy guarda-roupa roupa look visual cosméticos coleção cartas emblemas lembranças perfil avatar nome bandeira',
    sections: [
      {
        id: 'friends',
        title: 'Os nove amigos',
        blocks: [
          {
            t: 'p',
            text: '**Bloo, Peach, Sprout, Moss, Bricko, Zippy, Vio, Flurry e Poppy** são amigos feitos de tijolos de brinquedo. Três deles ficam no palco do Início, revezando. Em um tabuleiro, o amigo anfitrião da vila fica na moldura redonda do cabeçalho, vestido para aquela vila: toque nele para ganhar uma risadinha, um aceno ou um “toca aqui”. Eles torcem por você em balões de texto; não falam em voz alta.',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Em aparelhos com o modelo de linguagem da Apple no dispositivo, os amigos podem inventar as próprias falas (**Ajustes › Jogo › IA dos mascotes**). Tudo roda no seu aparelho.',
          },
        ],
      },
      {
        id: 'profile',
        title: 'Seu Perfil',
        blocks: [
          {
            t: 'p',
            text: 'Toque no seu avatar no Início ou na Jornada. Mude seu nome e seu avatar, escolha a bandeira do seu país (automática, um país que você escolher ou oculta), abra a Coleção e veja suas estatísticas: vitórias de primeira, tabuleiros vencidos abaixo da meta, melhor sequência, tabuleiros concluídos, jogadas e mais. O número da versão do jogo fica no rodapé; informe-o quando [relatar um bug](help:reporting-bugs).',
          },
        ],
      },
      {
        id: 'collection',
        title: 'A Coleção',
        blocks: [
          {
            t: 'p',
            text: 'A Coleção abre no nível 95, pelo seu Perfil ou pela aba Passe. Ela guarda **Cartas de tijolo**, **Emblemas de capítulo** de cada capítulo que você termina, **Lembranças** e **Cartas da temporada**: uma carta a cada três níveis novos, nove por temporada. Faíscas sobrando podem ser trocadas por uma carta que falta.',
          },
        ],
      },
      {
        id: 'wardrobe',
        title: 'O Guarda-roupa',
        blocks: [
          {
            t: 'shot',
            id: 'wardrobe',
            alt: 'O Guarda-roupa: o Rei Bricko com uma coroa dourada e uma gola vermelha, com um botão verde Usar, e embaixo as abas Looks, Bandejas, Paletas e Acabamento do tijolo, e o Kit praiano.',
            caption: 'Looks, bandejas, paletas, acabamentos de tijolo, comemorações, rastros e molduras.',
          },
          {
            t: 'list',
            items: [
              'As peças do Guarda-roupa mudam **a aparência do jogo, nunca o jeito de jogar**.',
              'Libere-as com moedas, fichas de missão ou comprando, e depois toque em **Usar**. **Tirar** ou **Roupa da vila** volta ao que era.',
              'As peças de acessibilidade são sempre grátis.',
            ],
          },
        ],
      },
    ],
    related: ['menus-tour', 'rewards-and-events', 'shop-and-purchases', 'settings'],
  },
];
