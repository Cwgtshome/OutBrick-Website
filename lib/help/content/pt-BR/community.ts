import type { HelpArticle } from '../../model.ts';

/** Solução de problemas, a comunidade e relatos de bugs, em português do Brasil. Conferido com a 5.1.1 (68). */
export const communityArticles: HelpArticle[] = [
  {
    slug: 'troubleshooting',
    category: 'community',
    cover: 'settings-community',
    title: 'Como resolver problemas comuns',
    summary:
      'Soluções rápidas para progresso sumido, compras que não chegaram, vidas que parecem travadas, falta de som, notificações que não chegam, widgets, vídeos que não carregam e problemas de foco do VoiceOver.',
    keywords: 'problema não funciona erro bug consertar ajuda progresso perdido compra sumiu sem som notificações widget em branco vídeo anúncio não carrega voiceover foco pula trava congela atualizar versão',
    sections: [
      {
        id: 'first',
        title: 'Primeiro, três verificações rápidas',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Atualize o OutBrick.** Abra a App Store, toque na sua foto e atualize o OutBrick se ele estiver na lista. Muitas correções chegam assim.',
              '**Confira sua versão.** Toque no seu avatar no Início: a versão fica no final do seu Perfil, por exemplo “OutBrick 5.1.1 (68)”.',
              '**Feche e abra o jogo de novo.** Passe o dedo para cima a partir da parte de baixo da tela e pare no meio, deslize o OutBrick para cima para fechá-lo e abra-o de novo.',
            ],
          },
        ],
      },
      {
        id: 'progress',
        title: 'Meu progresso sumiu',
        blocks: [
          {
            t: 'list',
            items: [
              'Confira se você tem sessão iniciada no iCloud com a mesma Conta Apple de antes e se o iCloud Drive está ativado.',
              'Abra o OutBrick e deixe-o um minuto conectado à internet: o progresso é buscado e combinado quando o jogo começa.',
              'Se o aparelho antigo nunca teve sessão no iCloud, o progresso dele só existe lá. Inicie a sessão no aparelho antigo, abra o OutBrick uma vez e tente de novo no novo.',
            ],
          },
          { t: 'p', text: 'Saiba mais em [Progresso, iCloud e privacidade](help:progress-privacy-and-account).' },
        ],
      },
      {
        id: 'purchase',
        title: 'Algo que comprei não chegou',
        blocks: [
          {
            t: 'steps',
            items: [
              'Abra a **Loja**, role até o final e toque em **Restaurar compras**.',
              'Para moedas, reforços e vidas, confira se o iCloud está ativado: eles acompanham seu progresso, não passam pela App Store.',
              'Ainda falta algo? Escreva para nós em particular pelo [formulário de contato](/contact), com a data e o item. Nunca publique um recibo na comunidade. Os reembolsos são feitos pela Apple: veja [Reembolsos](/refunds).',
            ],
          },
        ],
      },
      {
        id: 'lives',
        title: 'Minhas vidas não voltam',
        blocks: [
          {
            t: 'p',
            text: 'Uma vida volta a cada 30 minutos, contados pelo tempo real, então elas continuam recarregando com o jogo fechado. Se você atrasar o relógio do aparelho, o jogo ignora a mudança e você pode esperar mais. Deixe **Ajustes › Geral › Data e Hora › Ajustar Automaticamente** ativado. Toque no coração na Jornada para ver quando vem a próxima vida.',
          },
        ],
      },
      {
        id: 'sound',
        title: 'Não tem som nem música',
        blocks: [
          {
            t: 'list',
            items: [
              'Confira **Ajustes › Jogo › Sons** e **Música**, ou as mesmas chaves no menu Pausa.',
              'Confira a chave Toque/Silencioso e o volume.',
              'Um filtro de Foco do OutBrick pode estar silenciando o jogo: uma linha embaixo de Música nos Ajustes avisa quando isso acontece.',
            ],
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Não recebo notificações',
        blocks: [
          {
            t: 'list',
            items: [
              'Confira **Ajustes › Jogo › Notificações** no jogo e **Ajustes › Notificações › OutBrick** no iPhone.',
              'O OutBrick envia no máximo uma notificação a cada 20 horas, nunca entre 22:00 e 09:00, então dias tranquilos são normais.',
              'Um Foco pode estar segurando as notificações.',
            ],
          },
        ],
      },
      {
        id: 'widgets',
        title: 'Um widget está em branco ou desatualizado',
        blocks: [
          {
            t: 'p',
            text: 'Abra o OutBrick uma vez para que ele compartilhe seu progresso mais recente com os widgets. Se um widget continuar errado, remova-o e adicione-o de novo. Os widgets se atualizam num ritmo definido pelo iOS, então alguns minutos de atraso são normais.',
          },
        ],
      },
      {
        id: 'videos',
        title: 'Um vídeo não carrega',
        blocks: [
          {
            t: 'list',
            items: [
              'Os vídeos precisam de conexão com a internet, e às vezes não há nenhum disponível por um momento: tente de novo daqui a pouco.',
              'Cada tipo de vídeo tem um limite diário (39 no total), que volta a zero à meia-noite. Quando um limite é atingido, o botão dele some até o dia seguinte.',
              'Só um vídeo assistido até o fim paga a recompensa.',
            ],
          },
        ],
      },
      {
        id: 'voiceover',
        title: 'O VoiceOver volta para o topo do tabuleiro',
        blocks: [
          {
            t: 'p',
            text: 'Alguns jogadores nos contaram que o VoiceOver pode perder o lugar enquanto percorre um tabuleiro. Encontramos a causa: um cartão oferecendo ajuda pode se abrir sozinho enquanto você lê o tabuleiro. A correção chega em uma atualização. Até lá:',
          },
          {
            t: 'list',
            items: [
              'Se aparecer um cartão oferecendo reforços ou uma dica enquanto você lê o tabuleiro, o **gesto de esfregar com dois dedos** fecha o cartão e leva você de volta ao tabuleiro.',
              'Use os **rotores** (Peças que combinam, Especiais, Objetivos, Bloqueios, Portões) para ir direto ao que precisa, em vez de percorrer casa por casa.',
              'Use as **ações** de uma peça (passe o dedo para cima ou para baixo) para movê-la, o que mantém seu foco no tabuleiro.',
              'Toque duas vezes no resumo **Tabuleiro**, ou use **Ler o tabuleiro**, para ouvir onde estão as coisas.',
              'Conte seu aparelho, a versão do iOS, a versão do OutBrick, o nível e exatamente o que o VoiceOver disse na [categoria Acessibilidade](/community/c/accessibility). Cada relato nos ajuda a encontrar o problema mais rápido.',
            ],
          },
        ],
      },
      {
        id: 'stuck',
        title: 'Um tabuleiro parece impossível',
        blocks: [
          {
            t: 'list',
            items: [
              'Você nunca fica realmente sem saída: se nenhuma jogada for possível, o tabuleiro é embaralhado de graça.',
              'Use a Dica, o Foguete e o OVNI grátis que você ganha em cada tentativa.',
              'A partir da sexta tentativa em um tabuleiro, **uma ajudinha** dá três jogadas extras, uma vez por dia.',
              'Pergunte em [Ajuda e suporte](/community/c/help) com o número do nível: outros jogadores adoram um quebra-cabeça.',
            ],
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'progress-privacy-and-account', 'shop-and-purchases', 'voiceover'],
  },

  {
    slug: 'using-the-community',
    category: 'community',
    cover: 'settings-community',
    title: 'Como usar a Comunidade OutBrick',
    summary:
      'Como entrar, escolher a categoria certa, iniciar uma conversa, formatar, marcar uma solução, acompanhar conversas e e-mails, traduções, votar em ideias e manter seus dados em privado.',
    keywords: 'fórum entrar login conta apple google e-mail chave de acesso passkey conversa tópico publicação resposta markdown solução acompanhar silenciar notificações resumo por e-mail traduzir idioma votar ideia roteiro salvos reação enquete imagem texto alternativo denunciar privacidade excluir conta',
    sections: [
      {
        id: 'read',
        title: 'Ler e entrar',
        blocks: [
          {
            t: 'list',
            items: [
              'Qualquer pessoa pode ler a comunidade sem conta.',
              'Para publicar, responder, votar ou reagir, toque em **Entrar** e escolha **Entrar com Apple**, **Google** ou um **link por e-mail** (enviamos um link de uso único; sem senha). Depois de entrar, você pode adicionar uma **chave de acesso** nas Configurações e usar o Face ID ou o Touch ID da próxima vez.',
              'Com o **Ocultar Meu E-mail** da Apple, recebemos um endereço privado de encaminhamento. Use sempre a mesma forma de entrar para voltar à mesma conta.',
              'Seu endereço de e-mail nunca é exibido para ninguém.',
            ],
          },
        ],
      },
      {
        id: 'categories',
        title: 'Como escolher uma categoria',
        blocks: [
          {
            t: 'table',
            head: ['Categoria', 'Para quê'],
            rows: [
              ['[Novidades](/community/c/announcements)', 'Lançamentos e notícias da equipe. Só a equipe inicia conversas; todos podem responder.'],
              ['[Ajuda e suporte](/community/c/help)', 'Perguntas do tipo “Como faço…?” sobre tabuleiros, vidas, compras e ajustes.'],
              ['[Relatos de problemas](/community/c/bugs)', 'Algo quebrado. O formulário pede seu aparelho e as versões; veja [Como relatar um bug do jeito certo](help:reporting-bugs).'],
              ['[Ideias e sugestões](/community/c/ideas)', 'Sugestões. Vote nas que você quer e acompanhe-as no Roteiro.'],
              ['[Acessibilidade](/community/c/accessibility)', 'VoiceOver, Controle por Voz, Controle Assistivo, Texto Maior, jogar com daltonismo. É a que a equipe acompanha mais de perto.'],
              ['[Mostre o que você fez](/community/c/show-and-tell)', 'Tabuleiros concluídos de que você se orgulha e marcos da Jornada, com texto alternativo em cada imagem.'],
              ['[Assuntos gerais](/community/c/general)', 'Todo o resto.'],
            ],
          },
        ],
      },
      {
        id: 'posting',
        title: 'Iniciar uma conversa e responder',
        blocks: [
          {
            t: 'steps',
            items: [
              '**Busque primeiro:** alguém pode já ter perguntado.',
              'Toque em **Iniciar conversa**, escolha uma categoria e escreva um título que diga do que se trata, por exemplo “Nível 214: tem como passar pelo portão congelado?”.',
              'Escolha o **idioma** em que você está escrevendo, para que quem lê nesse idioma consiga encontrar.',
              'Escreva sua publicação. A **Prévia** mostra como ela vai ficar.',
              'Toque em **Publicar conversa**. Para responder, use a caixa no pé de uma conversa, ou **Responder** e **Citar** em uma publicação.',
            ],
          },
          {
            t: 'table',
            caption: 'Formatação',
            head: ['Digite', 'Para ter'],
            rows: [
              ['`**negrito**`', 'texto em negrito'],
              ['`*itálico*`', 'texto em itálico'],
              ['`- item`', 'uma lista com marcadores (`1.` para uma lista numerada)'],
              ['`> citação`', 'uma citação'],
              ['`[texto](https://…)`', 'um link'],
              ['`@nome`', 'mencionar alguém'],
            ],
          },
          {
            t: 'callout',
            kind: 'a11y',
            text: 'Vai adicionar uma imagem? A descrição é obrigatória: diga o que importa nela, por exemplo “Nível 214 com o tijolo vermelho a uma jogada do portão”. Quem usa o VoiceOver ouve a descrição no lugar de ver a imagem.',
          },
        ],
      },
      {
        id: 'solutions',
        title: 'Soluções, votos e reações',
        blocks: [
          {
            t: 'list',
            items: [
              'Se uma resposta resolve sua dúvida, toque em **Marcar como solução** nela. A conversa passa a mostrar **Resolvida**, e os outros podem ir direto para a resposta.',
              'Em Ideias e sugestões, toque em **Votar** no que você gostaria de ver. O **Roteiro** mostra o que está em avaliação, planejado, em andamento e lançado.',
              'Reaja a uma publicação com Gostei, Adorei, Parabéns, Engraçado, Obrigado ou Boa ideia.',
              'Os relatos de problemas têm um status definido pela equipe: Novo, Confirmado, Corrigido, Lançado, Não é um problema ou Duplicado.',
            ],
          },
        ],
      },
      {
        id: 'following',
        title: 'Acompanhar conversas e e-mails',
        blocks: [
          {
            t: 'list',
            items: [
              '**Acompanhar** uma conversa ou categoria faz você receber um e-mail sobre novas publicações; **Silenciar** a esconde.',
              'O sino (**Notificações**) mostra respostas, menções e mudanças de status.',
              '**Salvos** guarda as publicações que você quer encontrar de novo.',
              'Escolha quais e-mails você recebe, inclusive um resumo semanal opcional, nas **Configurações** da comunidade.',
            ],
          },
        ],
      },
      {
        id: 'languages',
        title: 'Idiomas e tradução',
        blocks: [
          {
            t: 'p',
            text: 'A comunidade está em inglês, francês, alemão, espanhol, japonês e português do Brasil. Por padrão, as listas mostram conversas no seu idioma e em inglês; um toque mostra todos os idiomas. Uma publicação em outro idioma pode ser traduzida automaticamente, e fica claramente marcada como tradução automática.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Gentileza e privacidade',
        blocks: [
          {
            t: 'list',
            items: [
              'Leia as [diretrizes da comunidade](/community/guidelines): seja gentil, esconda spoilers e deixe dados pessoais fora das publicações.',
              'Nunca publique uma senha, um código de acesso, um recibo de compra ou qualquer coisa que identifique você. Corte os dados da conta das capturas de tela.',
              'Viu algo que desrespeita as diretrizes? Toque em **Denunciar** na publicação. Um moderador vai analisar.',
              'Nas **Configurações** da comunidade, você pode baixar seus dados, sair ou excluir sua conta.',
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'A comunidade é para pessoas a partir de 16 anos. Para qualquer assunto particular, como uma compra, use o [formulário de contato](/contact).',
          },
        ],
      },
    ],
    related: ['reporting-bugs', 'troubleshooting', 'accessibility', 'welcome'],
  },

  {
    slug: 'reporting-bugs',
    category: 'community',
    cover: 'settings-community',
    title: 'Como relatar um bug do jeito certo',
    summary:
      'O jeito mais rápido de ter um bug corrigido: relate pelo próprio jogo para que seus dados sejam preenchidos, escreva etapas que outra pessoa consiga seguir e conte exatamente o que o VoiceOver ou outra tecnologia assistiva fez.',
    keywords: 'relatar bug erro problema falha travamento etapas reproduzir captura de tela gravação de tela versão aparelho ios tecnologia assistiva status',
    sections: [
      {
        id: 'from-game',
        title: 'Relate pelo jogo',
        blocks: [
          {
            t: 'steps',
            items: [
              'No OutBrick, abra os **Ajustes** (a engrenagem no Início ou na Jornada).',
              'Role para baixo e toque em **Relatar um bug**. O Safari abre um novo relato de problema na comunidade.',
              'Entre, se for pedido, confira os dados já preenchidos e descreva o que aconteceu.',
            ],
          },
          {
            t: 'shot',
            id: 'settings-community',
            alt: 'O pé da aba Jogo dos Ajustes, com um botão roxo Relatar um bug ao lado de um botão azul Comunidade.',
            caption: '**Relatar um bug** fica ao lado de **Comunidade** nos Ajustes.',
          },
          {
            t: 'table',
            caption: 'O que o jogo preenche para você',
            head: ['Campo', 'Exemplo'],
            rows: [
              ['Dispositivo', 'O modelo, por exemplo iPhone18,2'],
              ['Versão do sistema', '27.1'],
              ['Versão do OutBrick', '5.1.1 (68)'],
              ['Tecnologia assistiva', 'VoiceOver, Controle Assistivo, Texto Maior ou filtros de cor, quando estão ativados'],
              ['Nível', 'Seu nível atual na Jornada'],
            ],
          },
          {
            t: 'callout',
            kind: 'note',
            text: 'Nada que identifique você é enviado: nem nome, nem identidade do Game Center ou do iCloud, nem identificador de publicidade. O iOS não deixa os apps detectarem o **Controle por Voz** nem o **Zoom**, então marque esses você mesmo se os usar.',
          },
        ],
      },
      {
        id: 'write',
        title: 'Escreva etapas que outra pessoa consiga seguir',
        blocks: [
          {
            t: 'p',
            text: 'A equipe precisa fazer o bug acontecer no próprio aparelho. Numere suas etapas a partir da abertura do jogo:',
          },
          {
            t: 'list',
            items: [
              '**Etapas:** “1. Abra o nível 214. 2. Deslize o tijolo longo vermelho para a esquerda. 3. Use Desfazer.”',
              '**O que deveria acontecer:** “O tijolo volta para onde estava.”',
              '**O que aconteceu:** “O tijolo sumiu e o contador de jogadas subiu dois.”',
              'Acontece toda vez? Depois de reiniciar? Em outro nível?',
            ],
          },
        ],
      },
      {
        id: 'a11y',
        title: 'Problemas de acessibilidade',
        blocks: [
          {
            t: 'list',
            items: [
              'Diga qual tecnologia e quais ajustes: VoiceOver (com sua velocidade de fala ou linha braille, se for o caso), Controle por Voz, Controle Assistivo (varredura automática ou manual), Zoom, tamanho do Texto Maior.',
              'Cite **exatamente** o que o VoiceOver disse, ou o comando que o Controle por Voz não entendeu.',
              'Diga onde estava o foco antes e depois, qual gesto ou ação você usou e qual rotor estava selecionado.',
              'Se preferir, publique em [Acessibilidade](/community/c/accessibility): é a categoria que a equipe acompanha mais de perto.',
            ],
          },
        ],
      },
      {
        id: 'pictures',
        title: 'Capturas e gravações de tela',
        blocks: [
          {
            t: 'list',
            items: [
              '**Captura de tela:** pressione o botão lateral e o botão de aumentar volume ao mesmo tempo.',
              '**Gravação de tela:** adicione **Gravação de Tela** à Central de Controle, comece a gravar, reproduza o bug e pare a gravação.',
              'Corte seu nome, seu e-mail e qualquer dado pessoal, e descreva a imagem no texto alternativo.',
            ],
          },
        ],
      },
      {
        id: 'after',
        title: 'Depois de publicar',
        blocks: [
          {
            t: 'p',
            text: 'A equipe define um status para cada relato de problema: **Novo**, **Confirmado**, **Corrigido**, **Lançado**, **Não é um problema** ou **Duplicado**, às vezes com uma nota como “Corrigido na versão 5.1.1”. Acompanhe a conversa para receber um e-mail quando ele mudar. Para qualquer assunto particular, use o [formulário de contato](/contact).',
          },
        ],
      },
    ],
    related: ['troubleshooting', 'using-the-community', 'accessibility', 'voiceover'],
  },
];
