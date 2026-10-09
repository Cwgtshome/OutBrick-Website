import type { HelpArticle } from '../../model.ts';

/** Ajustes, recursos da Apple, progresso e privacidade, em português do Brasil. Conferido com a 5.1.1 (68). */
export const accountArticles: HelpArticle[] = [
  {
    slug: 'settings',
    category: 'account',
    cover: 'settings-community',
    title: 'Todos os ajustes explicados',
    summary:
      'Cada chave e botão das abas Jogo e Acessibilidade dos Ajustes, o que faz, como vem configurado e para onde levam os links de suporte, comunidade e privacidade.',
    keywords: 'ajustes configurações opções preferências som música vibração notificações jogo rápido ia mascote placar recursos do jogo avaliar contato comunidade relatar bug anúncios privacidade apagar dados',
    sections: [
      {
        id: 'open',
        title: 'Como abrir os Ajustes',
        blocks: [
          {
            t: 'p',
            text: 'Toque na engrenagem no canto superior direito do **Início** ou da **Jornada**. Os Ajustes ocupam a tela inteira; o **×** vermelho os fecha (assim como {{Esc}} em um teclado, ou o gesto de esfregar com dois dedos no VoiceOver). Há duas abas: **Jogo**, que abre primeiro, e **Acessibilidade**.',
          },
          {
            t: 'p',
            text: 'Cada chave mostra **Off | On** (desativado e ativado), com uma linha embaixo explicando o que ela faz. O VoiceOver lê essa linha como a dica da chave.',
          },
        ],
      },
      {
        id: 'game',
        title: 'A aba Jogo',
        blocks: [
          {
            t: 'table',
            head: ['Ajuste', 'O que faz', 'Vem como'],
            rows: [
              ['Notificações', 'Lembretes do jogo, como vidas cheias ou uma recompensa diária esperando. Ativar pede permissão ao iOS, se isso nunca tiver sido feito.', 'Ativado'],
              ['Sons', 'Efeitos sonoros nos tabuleiros e nos menus.', 'Ativado'],
              ['Música', 'A música de fundo nos menus e nos tabuleiros.', 'Ativado'],
              ['Vibração', 'Toques que você sente quando as peças se movem, combinam e caem. Só em aparelhos que podem vibrar.', 'Ativado'],
              ['Jogo rápido', 'Depois de vencer, vai direto para o próximo tabuleiro em vez de voltar ao mapa da Jornada.', 'Ativado'],
              ['IA dos mascotes', 'Os amigos criam as próprias falas com o modelo de linguagem do seu aparelho. Só aparece onde o modelo da Apple no dispositivo está disponível no seu idioma.', 'Ativado'],
              ['Mostrar-me no placar', 'Mostra seu nome de jogador e seu nível para todos na aba Ranking. Desativar remove você.', 'Ativado'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sons, Música e Vibração também estão no menu Pausa durante um tabuleiro. Se um **filtro de Foco** do OutBrick estiver mudando o som ou os lembretes, uma linha embaixo de Música avisa; seus próprios ajustes nunca são alterados.',
          },
          { t: 'shot', id: 'settings-game', alt: 'Ajustes na aba Jogo: chaves ligadas para notificações, sons, música, jogo rápido e conversa com IA dos mascotes, cada uma com uma linha explicativa, e depois os botões Recursos do jogo, Avaliar o OutBrick, Fale conosco, Comunidade, Relatar um bug e Suporte.', caption: 'Ajustes › Jogo.' },
        ],
      },
      {
        id: 'buttons',
        title: 'Os botões abaixo das chaves',
        blocks: [
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'A parte de baixo da aba Jogo: uma chave IA dos mascotes, um botão Recursos do jogo, Avaliar OutBrick e Fale conosco lado a lado, Comunidade e Relatar um bug lado a lado, um botão verde Suporte, Termos e Privacidade, um título Mais informações com Licença, EULA da Apple, Classificação etária, Acessibilidade, Opções de privacidade e Reembolsos, e Apagar meus dados bem no final.',
            caption: 'O pé da aba Jogo: ajuda, comunidade, links legais e Apagar meus dados.',
          },
          {
            t: 'defs',
            items: [
              { term: 'Recursos do jogo', text: 'Desative **Resgate de amigos**, **Corrida da vila**, **Brick Royale**, **Corrida da turma** ou **Ofertas no mapa** se preferir não vê-los. Você não perde nada do que já ganhou.' },
              { term: 'Avaliar OutBrick', text: 'Abre a página de avaliação da App Store. Não há recompensa por avaliar, e o jogo só pede algumas vezes por ano, nunca depois de uma derrota ou de uma compra.' },
              { term: 'Fale conosco', text: 'Abre nosso [formulário de contato](/contact) dentro do jogo: o jeito particular de falar com a equipe.' },
              { term: 'Comunidade', text: 'Abre esta comunidade no Safari.' },
              { term: 'Relatar um bug', text: 'Abre um relato de bug no Safari com seu aparelho, a versão do iOS, a versão do jogo, os ajustes de acessibilidade e o nível já preenchidos. Veja [Como relatar um bug do jeito certo](help:reporting-bugs).' },
              { term: 'Opções de anúncios', text: 'Só aparece onde um formulário de consentimento para anúncios é obrigatório (por exemplo, na UE e no Reino Unido). Abre o formulário de novo para você mudar sua escolha.' },
              { term: 'Suporte, Termos, Privacidade', text: 'Nossas páginas de [suporte](/support), [termos](/terms) e [política de privacidade](/privacy).' },
              { term: 'Mais informações', text: '[Licença](/license-agreement), [EULA da Apple](/eula), [Classificação etária](/age-rating), [Acessibilidade](/accessibility), [Opções de privacidade](/privacy-choices) e [Reembolsos](/refunds).' },
              { term: 'Apagar meus dados', text: 'Redefine seu progresso neste aparelho e pede ao iCloud que apague seu salvamento. Veja [Progresso, iCloud e privacidade](help:progress-privacy-and-account#delete).' },
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Comunidade e Relatar um bug abrem no Safari, fora do jogo, porque a comunidade é um espaço para pessoas a partir de 16 anos e o jogo em si tem classificação 4+.',
          },
        ],
      },
      {
        id: 'accessibility',
        title: 'A aba Acessibilidade',
        blocks: [
          {
            t: 'shot',
            id: 'settings-a11y',
            alt: 'A aba Acessibilidade: Velocidade da animação de 50% a 200%, Detalhe dos avisos Breve, Padrão ou Completo, e chaves para Daltonismo, Tabuleiro de alto contraste, Barra para canhotos, Confirmar trocas e Som da linha.',
            caption: 'Ajustes › Acessibilidade.',
          },
          {
            t: 'p',
            text: 'Velocidade da animação, Detalhe dos avisos, Daltonismo, Tabuleiro de alto contraste, Barra para canhotos, Confirmar trocas e Som da linha são explicados um a um em [Acessibilidade no OutBrick](help:accessibility#where).',
          },
        ],
      },
      {
        id: 'elsewhere',
        title: 'O que não fica nos Ajustes',
        blocks: [
          {
            t: 'list',
            items: [
              '**Restaurar compras:** no final da **Loja**.',
              '**Seu nome, avatar e bandeira:** no seu **Perfil** (toque no seu avatar).',
              '**O número da versão do jogo:** no rodapé do seu **Perfil**.',
              '**Idioma:** o OutBrick segue o idioma do seu iPhone. Para escolher outro só para o OutBrick, abra **Ajustes › Apps › OutBrick › Idioma** no iPhone.',
              '**Atividades ao Vivo e estilos de notificação:** em **Ajustes › Apps › OutBrick** no iPhone.',
            ],
          },
        ],
      },
    ],
    related: ['accessibility', 'apple-features', 'progress-privacy-and-account', 'menus-tour'],
  },

  {
    slug: 'apple-features',
    category: 'apple',
    cover: 'home',
    title: 'Widgets, Siri, Atalhos e outros recursos da Apple',
    summary:
      'Widgets da Tela de Início e da Tela Bloqueada, Central de Controle, Atividades ao Vivo, frases da Siri, Spotlight, Handoff, desafios no Mensagens, notificações e o indicador no ícone, filtros de Foco e Game Center.',
    keywords: 'widget tela bloqueada central de controle atividade ao vivo dynamic island siri atalhos app intents spotlight handoff imessage figurinhas desafio notificação indicador ícone ações rápidas foco game center conquistas inteligência visual',
    sections: [
      {
        id: 'widgets',
        title: 'Widgets da Tela de Início',
        blocks: [
          {
            t: 'p',
            text: 'Toque e mantenha pressionada uma área vazia da Tela de Início, toque em **Editar › Adicionar Widget** e procure OutBrick. Alguns widgets podem ser configurados: toque e mantenha pressionado um deles e toque em **Editar Widget**.',
          },
          {
            t: 'table',
            head: ['Widget', 'Mostra'],
            rows: [
              ['Próximo nível / Continuar', 'Leva direto ao seu próximo tabuleiro.'],
              ['Jornada', 'Seu nível, os tabuleiros concluídos, a faixa do Passe de Tijolos e a próxima recompensa.'],
              ['Tijolo do dia', 'Suas moedas diárias e sua sequência.'],
              ['Sequência e Calendário da sequência', 'Sua sequência de dias. O widget Sequência também define a hora do lembrete da sequência (das 9:00 às 21:00).'],
              ['Vidas', 'As vidas no seu estoque e quando vem a próxima. Também na Tela Bloqueada.'],
              ['Mascote do dia e Humor do mascote', 'Um amigo: um que você escolher, ou “Me surpreenda”.'],
              ['Capítulo e Mapa do capítulo', 'O progresso em um capítulo: o atual ou qualquer um que você escolher.'],
              ['Eventos e Contagem da temporada', 'O evento ao vivo ou o próximo, e o tempo que falta na temporada.'],
              ['Passe de Tijolos e Próximo prêmio', 'Sua faixa e o que vem depois.'],
              ['Moedas e reforços', 'Suas moedas e seus reforços.'],
              ['Coleção', 'Suas cartas mais recentes.'],
              ['Ao acaso', 'Um tabuleiro aleatório, jogado no próprio widget no iOS 17 ou posterior.'],
              ['Esta semana', 'Suas melhores margens da semana.'],
              ['Watch e iPhone', 'Seu nível no Apple Watch ao lado do seu nível no iPhone.'],
            ],
          },
          {
            t: 'p',
            text: '**Tela Bloqueada:** um widget OutBrick, Anel da sequência, Moedas, Tijolo do dia, Próximo nível, Contagem do evento e Passe de Tijolos, além de pequenas linhas com sua sequência, seu nível ou o Tijolo do dia.',
          },
        ],
      },
      {
        id: 'control-center',
        title: 'Central de Controle e Atividades ao Vivo',
        blocks: [
          {
            t: 'list',
            items: [
              '**Central de Controle** (iOS 18 ou posterior): abra-a, toque em **+**, depois em **Adicionar um Controle** e procure OutBrick. Há botões para Continuar, Abrir a Jornada, Abrir a loja e Nível aleatório, chaves para **Música** e **Símbolos de cor**, e controles de status para sua sequência, suas vidas e um amigo.',
              '**Atividade ao Vivo:** enquanto você joga um tabuleiro, o progresso aparece na Tela Bloqueada e na Dynamic Island. Saia do jogo e ela avisa que seu tabuleiro está esperando; conclua-o e ela mostra o resultado. Toque nela para voltar. Desative as Atividades ao Vivo em **Ajustes › Apps › OutBrick** no iPhone.',
            ],
          },
        ],
      },
      {
        id: 'siri',
        title: 'Siri e Atalhos',
        blocks: [
          {
            t: 'p',
            text: 'Diga qualquer uma destas frases à Siri, ou encontre-as no app **Atalhos**, em OutBrick. As perguntas são respondidas sem abrir o jogo.',
          },
          {
            t: 'table',
            head: ['Diga', 'O que acontece'],
            rows: [
              ['“Joga OutBrick” · “Continue minha jornada no OutBrick”', 'Abre seu próximo tabuleiro.'],
              ['“Joga o nível 120 no OutBrick”', 'Abre esse nível (um que você já alcançou).'],
              ['“Abre Cidade Jardim no OutBrick”', 'Abre uma vila no mapa.'],
              ['“Encontra Bloo no OutBrick”', 'Visita um amigo.'],
              ['“Em que nível eu estou no OutBrick”', 'Diz seu nível e seu progresso.'],
              ['“Quantas vidas eu tenho no OutBrick” · “Quando volta minha próxima vida no OutBrick”', 'Diz suas vidas.'],
              ['“Quantas estrelas eu tenho no OutBrick”', 'Conta suas estrelas.'],
              ['“Minha sequência do OutBrick está garantida”', 'Diz sua sequência e o Tijolo do dia de hoje.'],
              ['“Quantas moedas eu tenho no OutBrick”', 'Diz suas moedas e seus reforços.'],
              ['“Quando termina o evento do OutBrick”', 'Diz quanto tempo falta no evento.'],
            ],
          },
          {
            t: 'p',
            text: 'O app Atalhos também oferece ações como **Explicar minha próxima jogada**, **Definir música**, **Definir símbolos de cor**, **Abrir missões** e **Jogar um nível aleatório**.',
          },
        ],
      },
      {
        id: 'spotlight',
        title: 'Spotlight, Handoff e ações rápidas',
        blocks: [
          {
            t: 'list',
            items: [
              '**Spotlight:** passe o dedo para baixo na Tela de Início e procure um nível que você já alcançou, uma vila, um capítulo, um amigo, um evento ou telas como “Ajustes de acessibilidade” e “Passe de Tijolos”.',
              '**Ações rápidas:** toque e mantenha pressionado o ícone do OutBrick para ver **Jogar o próximo nível**, **Jornada** e **Loja**.',
              '**Handoff:** comece um tabuleiro em um aparelho e continue em outro com a sessão iniciada na mesma Conta Apple.',
              '**Inteligência Visual** (iOS 26 ou posterior): aponte a câmera para uma arte do OutBrick, ou faça uma captura de tela dela, para encontrar a vila, o amigo ou o nível correspondente. Tudo roda no seu aparelho.',
            ],
          },
        ],
      },
      {
        id: 'messages',
        title: 'Desafios e figurinhas no Mensagens',
        blocks: [
          {
            t: 'p',
            text: 'Em uma conversa do Mensagens, toque em **+**, depois em **Mais**, se precisar, e então em **OutBrick**. Envie um nível como cartão de desafio, ou uma das figurinhas dos amigos. Amigos que não têm o jogo recebem um link que abre uma página deste site.',
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Notificações e o indicador no ícone',
        blocks: [
          {
            t: 'list',
            items: [
              'O jogo nunca pede permissão para notificações ao abrir. Depois da sua terceira conclusão, ele pergunta se o Bloo pode guardar seu lugar; **Agora não** espera uma semana.',
              'No máximo **uma notificação a cada 20 horas**, e nunca entre 22:00 e 09:00. Cada uma oferece **Jogar**, **Mais tarde** (três horas) ou **Adiar para amanhã**.',
              'Os lembretes: um tabuleiro que você deixou, vidas recarregadas, missões prontas, sua sequência (na hora que você escolher no widget Sequência, 20:30 por padrão), eventos começando, uma temporada terminando e um resumo de domingo.',
              'O **indicador no ícone** conta as recompensas que esperam por você (missões para resgatar, faixas do Passe de Tijolos, recompensas por estrelas das vilas, a primeira conclusão do dia), até nove. Abrir o jogo o zera sem resgatar nada.',
              'Desative os lembretes em **Ajustes › Jogo › Notificações** ou nos Ajustes do iPhone.',
            ],
          },
        ],
      },
      {
        id: 'focus',
        title: 'Filtros de Foco',
        blocks: [
          {
            t: 'p',
            text: 'Em **Ajustes › Foco** no iPhone, escolha um Foco e depois **Adicionar Filtro › OutBrick**. Enquanto esse Foco estiver ativado, o OutBrick pode desligar a música (ou a música e os sons), pausar os lembretes e esconder o indicador no ícone.',
          },
        ],
      },
      {
        id: 'game-center',
        title: 'Game Center',
        blocks: [
          {
            t: 'p',
            text: 'Inicie a sessão no Game Center nos Ajustes do iPhone para liberar 65 conquistas (entre elas, uma para cada um dos primeiros 50 capítulos) e classificações de nível mais alto, total de tabuleiros concluídos, hoje e esta semana. Abra o Game Center pelo selo na Jornada ou pelo menu Pausa. A aba Ranking do jogo é uma classificação separada, de todos os tempos.',
          },
        ],
      },
    ],
    related: ['settings', 'progress-privacy-and-account', 'rewards-and-events', 'accessibility'],
  },

  {
    slug: 'progress-privacy-and-account',
    category: 'account',
    cover: 'journey',
    title: 'Progresso, iCloud, aparelhos novos e privacidade',
    summary:
      'Como seu progresso é salvo e sincronizado pelo iCloud, como passar para um iPhone novo, o que é compartilhado e com quem, as opções de anúncios e rastreamento, e como apagar seus dados.',
    keywords: 'salvar progresso perdido sincronizar icloud celular novo transferir reinstalar restaurar apagar redefinir privacidade dados rastreamento att anúncios consentimento placar nome',
    sections: [
      {
        id: 'saved',
        title: 'Como seu progresso é salvo',
        blocks: [
          {
            t: 'list',
            items: [
              'O progresso é salvo no seu aparelho e, quando você tem sessão iniciada no iCloud, na sua própria conta do iCloud. Não existe conta do OutBrick para criar.',
              'O iCloud guarda seu nível, estrelas, moedas, reforços, vidas e desfazeres, sequências, Passe de Tijolos, Coleção, Guarda-roupa, nome, avatar e estatísticas, e sua escolha de Daltonismo.',
              'Som, música, vibração, notificações e os ajustes de acessibilidade do tabuleiro ficam em cada aparelho.',
              'Quando dois aparelhos discordam, nada é sobrescrito: o nível e as contagens mais altos são mantidos, as coleções são somadas e as moedas gastas em um aparelho nunca são devolvidas por outro.',
            ],
          },
        ],
      },
      {
        id: 'new-device',
        title: 'Como passar para um iPhone ou iPad novo',
        blocks: [
          {
            t: 'steps',
            items: [
              'No aparelho novo, inicie a sessão na mesma Conta Apple e ative o iCloud.',
              'Instale o OutBrick pela App Store e abra-o. Seu progresso é buscado e combinado quando o jogo começa.',
              'Abra a **Loja**, role até o final e toque em **Restaurar compras** para recuperar Remover anúncios, as temporadas do Passe de Tijolos e os itens do Guarda-roupa.',
            ],
          },
          {
            t: 'callout',
            kind: 'important',
            text: 'Se você estava sem sessão no iCloud no aparelho antigo, o progresso dele ficou só nele. Inicie a sessão no iCloud lá e abra o OutBrick uma vez antes de trocar.',
          },
        ],
      },
      {
        id: 'shared',
        title: 'O que é compartilhado e com quem',
        blocks: [
          {
            t: 'list',
            items: [
              '**A aba Ranking** mostra seu nome de jogador, seu nível e, se você quiser, uma bandeira. Desative **Ajustes › Jogo › Mostrar-me no placar** para sair dela; esconda sua bandeira no seu Perfil.',
              '**Corrida da vila e Brick Royale** compartilham seu nome de jogador com os jogadores daquela corrida, só se você participar.',
              'O **Game Center** é da Apple e segue os seus ajustes do Game Center.',
              'O OutBrick **não tem análise de uso**, e os dados do próprio jogo não são usados para rastrear você. O parceiro de anúncios (Google AdMob) cuida dos próprios dados para os vídeos opcionais; veja nossa [política de privacidade](/privacy).',
            ],
          },
        ],
      },
      {
        id: 'ads-privacy',
        title: 'Opções de anúncios e rastreamento',
        blocks: [
          {
            t: 'list',
            items: [
              'O iOS pode perguntar se o OutBrick pode rastrear você. **Pedir ao App para Não Rastrear** funciona normalmente: os vídeos continuam passando e as recompensas continuam sendo pagas.',
              'Na UE, no Reino Unido e na Suíça, um formulário de consentimento aparece na primeira vez que você escolhe um vídeo. Mude sua resposta quando quiser em **Ajustes › Jogo › Opções de anúncios**.',
              'Mais na nossa página de [opções de privacidade](/privacy-choices).',
            ],
          },
        ],
      },
      {
        id: 'delete',
        title: 'Como apagar seus dados',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abra os **Ajustes** e role até o final da aba **Jogo**.',
              'Toque em **Apagar meus dados**, leia o cartão e toque em **Continuar**.',
            ],
          },
          {
            t: 'p',
            text: 'Isso redefine seu progresso, moedas, reforços e estatísticas neste aparelho e pede ao iCloud que apague seu salvamento. Outro aparelho com sessão no mesmo iCloud pode sincronizar de volta um salvamento antigo, então faça isso nele também. As compras que são suas podem ser restauradas depois pela Loja, e as fotos que você salvou ou compartilhou não são afetadas. **Não é possível desfazer.**',
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Sua conta da comunidade é separada do jogo. Apague-a nas **Configurações** da comunidade, depois de entrar.',
          },
          { t: 'shot', id: 'delete-data', alt: 'O cartão de apagar dados sobre os Ajustes, com o aviso completo e os botões Continuar e Cancelar.', caption: 'Antes de apagar qualquer coisa, o jogo pergunta mais uma vez.' },
        ],
      },
    ],
    related: ['shop-and-purchases', 'settings', 'apple-features', 'troubleshooting'],
  },
];
