import type { BlogArticle } from '../blog.ts';
import { appStoreUrl } from '../app-store-url.ts';

export const batch9: BlogArticle[] = [
  {
    "slug": "water-sort-vs-block-sort",
    "title": "Water sort vs block sort: which puzzle style fits you?",
    "dek": "Compare water-sort capacity puzzles with sliding-block routes, using concrete examples, practical selection tips and clear limits to the research.",
    "category": "OutBrick practice",
    "categoryColor": "green",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "8 min read",
    "authorId": "outbrick-editorial",
    "image": "/blog/water-sort-vs-block-sort.webp",
    "imageAlt": "Colourful OutBrick bricks and brick characters on a navy puzzle grid",
    "tags": [
      "block sort puzzles",
      "puzzle games",
      "game design",
      "player habits"
    ],
    "intro": "A nearly sorted tube can still be the wrong place to pour. A brick beside its matching exit can still be in the wrong position to leave. Water sort and block sort both make colour matching look straightforward while hiding the interesting decision in the order of moves. But the resource you manage differs: room inside containers in one, routes and stopping places in the other. This guide compares those decisions rather than declaring a winner. For water sort, we use the published rules of IEC Global’s Water Sort Puzzle; for sliding block sort, we use the glide-to-stop rule of OutBrick’s classic boards, which its browser boards keep. Other games using either name may behave differently. We make OutBrick, so our examples come with that perspective rather than a claim to independent testing.",
    "keyTakeaways": [
      "Water-sort puzzles ask where liquid can legally go; sliding block sort asks which routes and stopping positions you can create.",
      "An empty tube and an empty square are useful in different ways. Protect the space needed by your next step, rather than matching colour at every opportunity.",
      "Choose by the decisions you enjoy and the interface you can comfortably use. Research does not establish that either puzzle style improves your cognition."
    ],
    "sections": [
      {
        "id": "different-things-to-move",
        "title": "First, establish what a move actually means",
        "paragraphs": [
          "IEC Global’s Water Sort Puzzle description says you tap a glass to pour into another, with matching colour and enough receiving space required. The goal is to group each colour into its own glass. That is the rule set discussed here, rather than a promise about every water-sort app. The listing also describes restarting a level and untimed play. Those details establish a useful starting point, but do not settle every edge case, such as exactly how much liquid a particular tap transfers (IEC Global Pty Ltd, n.d.).",
          "On OutBrick’s classic boards, you move the brick directly. It glides until something stops it, and it leaves through a gate of its own colour. You do not drag a brick to any square you choose. A clear corridor may let it travel further than you intended; another brick can provide the stopping point you need. (The App Store game now plays Slide & Match, where a brick stops where you let go and can swap into matches.) Our [guide to sliding-block puzzles](/blog/how-to-solve-sliding-block-puzzles) explains that distinction with a broader solving approach.",
          "Both are colour-sort puzzles, but that label describes the destination rather than the entire journey. Pouring changes which layers can be reached at the top of a container. Sliding changes the arrangement of obstacles on a shared board. Before judging a game as confusing, try stating its movement rule aloud. A correct prediction is a better first milestone than a quick clear.",
          "Other variants can use different movement rules, restrictions or containers. Begin with the game’s own tutorial before transferring advice from a similar-looking puzzle."
        ]
      },
      {
        "id": "capacity-example",
        "title": "Water sort: spare capacity is part of the solution",
        "paragraphs": [
          "Here is an illustrative arrangement for a common water-sort variant that accepts a pour into an empty tube. Tube A has a blue top layer hiding red beneath it. Tube B has blue on top but is already full. Tube C is empty. Pouring A into B is not available merely because the top colours match: B needs room. Moving A’s blue into C can expose red, creating a different opportunity elsewhere. The example explains a dependency; it is not a promised layout in IEC Global’s app.",
          "The temptation is to treat every empty tube as a place to put something immediately. Instead, ask which buried colour you want to uncover, and where the top layer must go to make that possible. A free container is valuable because it permits an intermediate arrangement. Filling it with an unrelated layer may use up the only workable destination for the move you were preparing.",
          "Now change the example: B has space for blue, so A can pour there directly under the stated matching rule. C can remain available for a later rearrangement. The visible move is simpler, but the question stays the same: what will become accessible afterwards? Our [colour-sort puzzle tips](/blog/colour-sort-puzzle-tips) develop this habit of thinking beyond the most obvious match.",
          "Ito et al. (2023) formalised ball-sort and water-sort puzzles, demonstrating equivalence in solvability under their model and proving the generalised problems NP-complete. That result concerns specific stack-based rules, not every commercial variant. It explains why simple pouring rules can permit demanding planning, without proving that the illustrated board is difficult or that OutBrick shares the same complexity. The practical question remains whether you enjoy managing access to buried colours and spare capacity."
        ],
        "sourceIds": [
          "ito-2023"
        ]
      },
      {
        "id": "route-example",
        "title": "Block sort: an obstacle can be a useful brake",
        "paragraphs": [
          "Imagine a red brick needs to line up with a red gate on the right-hand edge. Sliding upwards along an empty column carries it past the row where it should turn. A blue brick placed above that row could stop it at the useful height. The immediate task is therefore positioning blue, even though red looks nearer to an exit. This is an illustrative situation on OutBrick’s classic boards, not a walkthrough for a numbered board.",
          "Once red is aligned, a second dependency can appear: blue may also need that corridor to reach its own gate. Removing red too soon could erase a stopping point blue still needs. Unlike the spare tube in the previous example, the relevant resource is a location and its relationship to a route. More empty space does not automatically mean a better position. Sometimes the arrangement becomes useful precisely because something occupies the right square.",
          "Kirsh and Maglio (1994) studied Tetris and distinguished actions that progress towards a goal from actions that reveal information difficult to work out mentally. They did not test OutBrick or water-sort apps. We borrow the distinction as a way to read an attempt: a move can show you where a brick stops even when it does not improve the route. “It stopped one row too high” is an observation you can use, rather than a verdict on your ability.",
          "Try a board on our [browser play page](/play) and predict where a brick will stop before moving it. Then compare prediction and result. If you want to read the arrangement more deliberately, the [before-you-move guide](/blog/how-to-read-a-puzzle-before-moving) suggests a way to identify exits and dependencies first. This test is about your interest in spatial routes, not how quickly you can master an unfamiliar game."
        ],
        "sourceIds": [
          "kirsh-1994"
        ]
      },
      {
        "id": "compare-the-experience",
        "title": "Compare the experience beyond the board",
        "paragraphs": [
          "A mechanics preference can be undermined by an interface that makes the pieces difficult to read. For liquid puzzles, can you distinguish the top layers and judge remaining capacity at your normal viewing distance? For block puzzles, can you identify the intended brick, its matching gate and the obstruction that will stop it? Try using the actual phone you expect to play on rather than judging enlarged promotional images.",
          "Larkin and Simon (1987) compared diagrammatic and sentential representations through models and illustrative mathematics and physics problems. Their analysis showed why location and explicit grouping can change the work needed to find information, even when the information itself is equivalent. This was not a test of game screenshots. Our application is to inspect what a board makes easy to see: the top colour and capacity in a tube, or the relationship between a brick, blocker and gate.",
          "Likewise, untimed play describes pacing rather than the whole commercial model. OutBrick’s current version has move limits and targets, with lives and optional rewarded adverts. The first undo on each app board is free. Our [fair-play explanation](/#fair) describes those costs. IEC Global’s listing describes a free download with in-app purchases; that alone does not establish the frequency or form of every advertising placement. This guide does not compare prices or interruptions from hands-on testing.",
          "Kotovsky et al. (1985) investigated why versions of the Tower of Hanoi problem differed in difficulty, considering factors such as rules, representation and memory demands. These were different tasks from either app here. The relevant caution is that a shared abstract goal does not make two presentations equally easy to understand. If one puzzle feels clearer, examine the specific decisions and cues that support you rather than declaring its entire genre superior. Neither this study nor the others establishes a medical or cognitive advantage from playing these apps."
        ],
        "sourceIds": [
          "larkin-1987",
          "kotovsky-1985"
        ]
      },
      {
        "id": "choose-with-a-small-test",
        "title": "Make your choice with a small, fair test",
        "paragraphs": [
          "Give each style a chance to teach its basic rule, then ask three concrete questions. Can I predict an ordinary move? Do I enjoy the question left by a failed attempt? Would I willingly try one more board? These questions separate initial unfamiliarity from a lasting mismatch. They also avoid using the first difficult level as an all-purpose verdict on the genre.",
          "For water sort, watch whether you enjoy uncovering colours and preserving receiving space. For block sort, watch whether you enjoy arranging routes and temporary brakes. You may prefer the clearer visual stacks of a tube puzzle, the tactile movement of bricks, or simply whichever controls feel more comfortable. Choosing the problem you want to think about is enough.",
          "Compare both styles in similar circumstances and without a timed contest. A few deliberately observed moves can reveal more about fit than pushing through a game you already dislike.",
          "If the sliding example sounds inviting, start with [OutBrick’s browser boards](/play). For the wider app experience, [find OutBrick on the App Store](APPSTORE_WATER), then check the current listing for device requirements and purchase details. If you prefer pouring, use the named water-sort listing below to identify the actual app. The useful outcome is a puzzle you want to return to, including the entirely reasonable choice to enjoy both.".replace("APPSTORE_WATER", appStoreUrl("journal-water-sort")),
          "Product source: IEC Global Pty Ltd. (n.d.). Water Sort Puzzle [Mobile app]. App Store. Retrieved September 30, 2026, from [the Water Sort Puzzle listing](https://apps.apple.com/gb/app/water-sort-puzzle/id1514542157). The rules comparison uses this developer-provided description; the planning examples are our own illustrations."
        ]
      }
    ],
    "references": [
      {
        "id": "ito-2023",
        "label": "Ito et al. (2023)",
        "citation": "Ito, T., Kawahara, J., Minato, S.-i., Otachi, Y., Saitoh, T., Suzuki, A., Uehara, R., Uno, T., Yamanaka, K., & Yoshinaka, R. (2023). Sorting balls and water: Equivalence and computational complexity. Theoretical Computer Science, 978, Article 114158.",
        "url": "https://doi.org/10.1016/j.tcs.2023.114158",
        "italicParts": [
          "Theoretical Computer Science",
          "978"
        ]
      },
      {
        "id": "kirsh-1994",
        "label": "Kirsh & Maglio (1994)",
        "citation": "Kirsh, D., & Maglio, P. (1994). On distinguishing epistemic from pragmatic action. Cognitive Science, 18(4), 513–549.",
        "url": "https://doi.org/10.1207/s15516709cog1804_1",
        "italicParts": [
          "Cognitive Science",
          "18"
        ]
      },
      {
        "id": "kotovsky-1985",
        "label": "Kotovsky et al. (1985)",
        "citation": "Kotovsky, K., Hayes, J. R., & Simon, H. A. (1985). Why are some problems hard? Evidence from Tower of Hanoi. Cognitive Psychology, 17(2), 248–294.",
        "url": "https://doi.org/10.1016/0010-0285(85)90009-X",
        "italicParts": [
          "Cognitive Psychology",
          "17"
        ]
      },
      {
        "id": "larkin-1987",
        "label": "Larkin & Simon (1987)",
        "citation": "Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten thousand words. Cognitive Science, 11(1), 65–100.",
        "url": "https://doi.org/10.1111/j.1551-6708.1987.tb00863.x",
        "italicParts": [
          "Cognitive Science",
          "11"
        ]
      }
    ],
    "relatedSlugs": [
      "colour-sort-puzzle-tips",
      "how-to-read-a-puzzle-before-moving",
      "how-to-solve-sliding-block-puzzles"
    ],
    "pullQuote": "More empty space does not automatically mean a better position.",
    "faqs": [
      {
        "question": "What is the main difference between water sort and block sort?",
        "answer": "Water-sort puzzles organise coloured liquid between containers under capacity and matching rules. OutBrick’s classic block sort moves bricks through a shared board to matching gates, with each slide continuing until something stops it; the App Store game now adds swaps and matches."
      },
      {
        "question": "Is an empty tube the same as an empty space in a block puzzle?",
        "answer": "Both can enable a later move, but they serve different purposes. An empty tube receives liquid; an empty board square helps define a route, while an occupied square may provide a useful stopping point."
      },
      {
        "question": "Which puzzle style is better for the brain?",
        "answer": "The research cited here does not establish cognitive superiority for either puzzle style. Choose by the mechanics, readability, pacing and costs that suit your preferences."
      },
      {
        "question": "Can I try OutBrick before downloading it?",
        "answer": "The [OutBrick play page](/play) offers a small set of browser boards. It demonstrates the classic sliding rule without representing the full app or promising shared app progress."
      }
    ]
  },
  {
    "slug": "block-puzzles-online-no-download",
    "title": "Play block puzzles online without downloading an app",
    "dek": "Try OutBrick’s browser boards without installing an app. Learn the controls, daily-board rotation, scoring and differences from the full game.",
    "category": "OutBrick practice",
    "categoryColor": "green",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "8 min read",
    "authorId": "outbrick-editorial",
    "image": "/blog/block-puzzles-online-no-download.webp",
    "imageAlt": "Colourful OutBrick bricks and brick characters on a navy puzzle grid",
    "tags": [
      "puzzle games",
      "block sort puzzles",
      "daily puzzles",
      "accessibility",
      "game design"
    ],
    "intro": "You want to move a few blocks, not commit to another download. A browser puzzle can answer a useful first question: do I enjoy this kind of problem? OutBrick has playable boards on its website, alongside its separate App Store game. You can explore the sliding rule directly, without treating store screenshots as a substitute for play. This guide explains where to start, how the web controls work, what the daily board means and where the browser experience stops. It is a guide to our own website, checked on 30 September 2026, rather than a ranking of every no-download puzzle service. The small web version is a useful introduction on its own terms; it does not reproduce the full app.",
    "keyTakeaways": [
      "Open /play for a short introduction or /daily for the date-selected shared board; neither requires an app installation.",
      "The daily board changes at midnight UTC by rotating through a fixed pool. It is not a newly generated puzzle every day.",
      "Browser scores, controls and restarts help you explore the rule. Do not assume browser progress is saved or synced to the app."
    ],
    "sections": [
      {
        "id": "where-to-start",
        "title": "Start with the browser board that matches your purpose",
        "paragraphs": [
          "For a first encounter, open the [OutBrick play guide](/play). It includes a three-board playable tour, beginning with a gentle introduction and adding arrangements that make the stopping rule matter. You are not choosing a difficulty setting for the entire app. You are testing whether moving bricks to matching gates feels understandable and worth another attempt.",
          "The core rule is simple to say: slide a brick, let it glide until something stops it, and send it out through the gate of its own colour. The planning comes from how the pieces obstruct or help one another. Matching red with red is only part of the task. You may need to reposition another brick so that red stops in the right row before turning towards its exit.",
          "If you already understand that rule, use the [daily board](/daily) for a shared arrangement. Everyone viewing the page on the same UTC date gets the same selected board. That gives you a specific puzzle to discuss with a friend, rather than asking whether you both happened to open a similar level. There is no need to turn the shared board into a speed contest.",
          "Andersen et al. (2012) studied tutorial designs across three games with more than 45,000 players. Tutorial effects varied with the game and its complexity, rather than showing that one teaching format always helps. They did not test this website. For your trial, the useful question is whether the introductory board makes the movement rule clear enough to judge. Finishing the entire tour is optional; deciding that another mechanic suits you better is also a successful trial."
        ],
        "sourceIds": [
          "andersen-2012"
        ]
      },
      {
        "id": "controls-and-feedback",
        "title": "Use the controls to test a prediction",
        "paragraphs": [
          "On a touchscreen or with a pointer, drag a brick in the direction you want it to travel. Dragging sets the direction; it does not promise to stop the piece wherever your finger ends. With a keyboard, Tab to a brick, then use Shift plus an arrow key to move it. Watch where the brick actually comes to rest before deciding the next direction.",
          "Begin with a prediction you can check: “The yellow brick should stop beside that blue one.” Make the move, then compare the result. If the move is blocked, inspect the board rather than repeatedly issuing the same input. The relevant obstacle may be a neighbouring brick, the board edge or a gate that is not the right colour. A refused move and a move you did not expect are different observations.",
          "Cao and Liu (2022) reviewed in-game tutorials and conducted a pilot study of implicit tutorial design. Their work treats guidance as something shaped by how players encounter a game, rather than proving that an unexplained interface is better. It did not evaluate our browser controls. Here, a deliberate first move lets you check what the instructions mean. If you cannot select the intended piece comfortably, solve that input problem before using the attempt as evidence that the puzzle is too difficult.",
          "The board pairs colours with glyphs on bricks and gates, giving matching information beyond hue alone. Still, judge readability at your usual screen size and distance. If the board is hard to use, our [accessibility information](/accessibility) gives context about the product, and [support](/support) offers a route to describe the difficulty. Include your browser, device and the action you tried; a specific report is easier to investigate than “the game does not work”."
        ],
        "sourceIds": [
          "cao-2022"
        ]
      },
      {
        "id": "moves-undo-and-restart",
        "title": "Read the move target as an invitation to revisit",
        "paragraphs": [
          "The web board records moves and provides Undo and Reset controls. Its target is a scoring threshold rather than a countdown. A clear earns one star; finishing within the move target earns two; doing that without an undo earns three. Going beyond the target does not stop you from completing the browser board. Undo changes the star outcome, so distinguish exploring a solution from completing a clean attempt.",
          "A sensible first goal is simply to clear the board. Once you understand a route, reset and ask whether an early detour was necessary. This separates discovery from refinement. It also keeps a three-star result from becoming a reason to abandon a board whose basic dependencies you have not yet understood. There is no clock demanding that you turn recognition into immediate action.",
          "Kirsh and Maglio (1994), working with Tetris, distinguished moves that advance a task from moves that help uncover information. The study does not establish a measured benefit from this browser game. Its distinction gives your first attempt a useful purpose: testing where a brick will stop can teach you about the arrangement, even before you have a complete route. Resetting then lets you try the plan you understood from that exploration.",
          "Our [guide to reading a puzzle before moving](/blog/how-to-read-a-puzzle-before-moving) helps you identify those dependencies. If avoiding time pressure is the reason you are browsing, the [no-timer puzzle guide](/blog/no-timer-block-sort-puzzles-iphone) explains the wider distinction between untimed play and unrestricted play. A web board’s forgiving restart should not be used to infer the full app’s lives, undo costs or move-limit rules."
        ],
        "sourceIds": [
          "kirsh-1994"
        ]
      },
      {
        "id": "what-daily-means",
        "title": "What “daily” means on this website",
        "paragraphs": [
          "The daily page selects from a fixed pool of website boards. It advances by the UTC date and cycles through that pool in order; the tutorial board is excluded. The pool contains sixteen boards at the time of writing. Once the rotation reaches the end, it returns to the beginning. “Daily” therefore means a date-selected shared puzzle, not a fresh layout generated every morning and not an expanding archive promised indefinitely.",
          "Midnight UTC may be afternoon or evening where you live. Two people who open the page on different local calendar days can still have the same UTC date, while two people using the same local date near that boundary may see different selections. Use the date and board number shown on the page when discussing a solution. A local midnight is not the changeover rule.",
          "After a clear, the page’s share control offers a result link with your stars. Sharing a result does not share your complete sequence of moves. If you want your friend to enjoy solving independently, send the result first and wait before describing the opening. A shared board is an invitation to compare approaches; it is not a built-in simultaneous multiplayer session.",
          "Larkin and Simon (1987) analysed how diagrams organise information by location, contrasting them with sequential text through models and illustrative problems. They did not study daily games. The practical application here is to use the shared layout as your reference: point to the gate or blocker you mean before describing a move. A board number establishes which puzzle you are discussing; the visible arrangement helps establish which decision within it you mean."
        ],
        "sourceIds": [
          "larkin-1987"
        ]
      },
      {
        "id": "web-and-app-boundaries",
        "title": "Know what the browser trial does and does not carry over",
        "paragraphs": [
          "No download means you do not install the OutBrick app to use these web boards. The page still needs to load through your browser. Do not assume the website has the app’s offline capability or that an unfinished attempt will survive closing or reloading the page. The playable board does not provide saved progress or an account-based connection to your app journey.",
          "That boundary matters if you start on a laptop and then install the game on your phone. A browser clear does not unlock the corresponding app chapter, transfer your star result into app progress or establish that the two experiences contain identical boards. The website is a small introduction, with its own board pool and scoring behaviour. The App Store game is a separate product with a broader progression structure.",
          "The app also has a commercial model: lives, optional purchases and opt-in rewarded adverts. Read the [fair-play details](/#fair) and current store listing before deciding what “free” means for your own use. The browser’s restart and undo behaviour does not replace those disclosures. Likewise, use the current listing for device requirements rather than assuming that successful browser play proves native-app compatibility.",
          "If the trial leaves you curious, [find OutBrick on the App Store](APPSTORE_BROWSER). If you simply want one browser board, keep using [the daily page](/daily). Either choice can follow from the same useful test: you now know what a sliding brick does, whether the controls are comfortable and whether the route-planning question interests you. A small playable example has done its job when it helps you make that decision.".replace("APPSTORE_BROWSER", appStoreUrl("journal-no-download"))
        ]
      }
    ],
    "references": [
      {
        "id": "andersen-2012",
        "label": "Andersen et al. (2012)",
        "citation": "Andersen, E., O’Rourke, E., Liu, Y.-E., Snider, R., Lowdermilk, J., Truong, D., Cooper, S., & Popović, Z. (2012). The impact of tutorials on games of varying complexity. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 59–68). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/2207676.2207687",
        "italicParts": [
          "Proceedings of the SIGCHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "cao-2022",
        "label": "Cao & Liu (2022)",
        "citation": "Cao, S., & Liu, F. (2022). Learning to play: Understanding in-game tutorials with a pilot study on implicit tutorials. Heliyon, 8(11), Article e11482.",
        "url": "https://doi.org/10.1016/j.heliyon.2022.e11482",
        "italicParts": [
          "Heliyon",
          "8"
        ]
      },
      {
        "id": "kirsh-1994",
        "label": "Kirsh & Maglio (1994)",
        "citation": "Kirsh, D., & Maglio, P. (1994). On distinguishing epistemic from pragmatic action. Cognitive Science, 18(4), 513–549.",
        "url": "https://doi.org/10.1207/s15516709cog1804_1",
        "italicParts": [
          "Cognitive Science",
          "18"
        ]
      },
      {
        "id": "larkin-1987",
        "label": "Larkin & Simon (1987)",
        "citation": "Larkin, J. H., & Simon, H. A. (1987). Why a diagram is (sometimes) worth ten thousand words. Cognitive Science, 11(1), 65–100.",
        "url": "https://doi.org/10.1111/j.1551-6708.1987.tb00863.x",
        "italicParts": [
          "Cognitive Science",
          "11"
        ]
      }
    ],
    "relatedSlugs": [
      "no-timer-block-sort-puzzles-iphone",
      "how-to-read-a-puzzle-before-moving",
      "how-to-solve-sliding-block-puzzles"
    ],
    "pullQuote": "A sensible first goal is simply to clear the board.",
    "faqs": [
      {
        "question": "Can I play an OutBrick block puzzle without downloading the app?",
        "answer": "Yes. The [play guide](/play) includes a short browser-board tour, and [the daily page](/daily) offers the board selected for the current UTC date."
      },
      {
        "question": "Is the daily puzzle generated from scratch every day?",
        "answer": "No. OutBrick’s website rotates through a fixed pool of boards according to the UTC date, excluding the tutorial. The rotation can therefore revisit an earlier layout."
      },
      {
        "question": "Will browser progress sync to the OutBrick app?",
        "answer": "The browser boards do not provide saved progress or progress syncing with the app. Treat them as a separate introduction rather than a continuation of your app journey."
      },
      {
        "question": "How do I move a brick using a keyboard?",
        "answer": "Tab to a brick, then press Shift plus an arrow key in the direction you want it to slide. The brick continues until something stops it rather than moving to an arbitrary chosen square."
      }
    ]
  },
  {
    "slug": "solve-puzzles-together",
    "title": "Solve puzzles together without taking over the screen",
    "dek": "Share a puzzle without stealing the next move: agree roles, explain predictions, offer small hints and make room for different solving styles.",
    "category": "Social play",
    "categoryColor": "pink",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "8 min read",
    "authorId": "outbrick-editorial",
    "image": "/blog/solve-puzzles-together.webp",
    "imageAlt": "Colourful OutBrick bricks and brick characters on a navy puzzle grid",
    "tags": [
      "social play",
      "puzzle games",
      "family play",
      "game design",
      "player habits"
    ],
    "intro": "Two people can look at one puzzle and still be playing very different games. One is enjoying the search; the other has spotted an answer and wants to demonstrate it. The familiar moment follows: a hand reaches for the phone, a brick moves, and the person holding it has lost the chance to discover why. Solving together works better when help preserves that chance. This guide offers a practical agreement for sharing a screen: who moves, who explains, how hints are offered and when to exchange roles. It describes an informal social practice you can use with a suitable puzzle, including OutBrick’s browser boards. It does not describe a built-in co-op mode, shared account or simultaneous multiplayer feature.",
    "keyTakeaways": [
      "Agree who controls the screen and what kind of help is welcome before offering a solution.",
      "Explain the predicted result of a move, then let the person playing choose whether to make it.",
      "Swap roles by agreement and treat a shared clear as a shared discovery, rather than proof that one person carried the other."
    ],
    "sections": [
      {
        "id": "agree-on-the-session",
        "title": "Agree what you are doing together",
        "paragraphs": [
          "Start with a question that is more useful than “Can you solve this?” Ask: “Would you like company, a hint or to work it out yourself?” Those are distinct invitations. Someone may welcome you looking at the board without wanting advice. Another person may want one precise opening move. Neither response needs to become a test of independence or ability.",
          "Then choose a shared goal. You might want to clear one board, explain a puzzling movement rule, or compare two possible routes. Agree whether the move target matters today. A session intended as a conversation can become uncomfortable if one player silently treats every extra move as a mistake that must be corrected. Name the purpose before deciding how closely to optimise.",
          "Scott et al. (2004) observed collaborative activity around traditional tables and described personal, group and storage territories in shared workspaces. That is not an experiment on puzzle phones, but it offers a useful analogy: a shared task can still contain a space someone treats as theirs. Sitting beside a player does not by itself give you permission to act on their screen.",
          "For a low-commitment starting point, use the [browser play guide](/play), where you can agree on one small board. If you prefer comparison rather than cooperation, our [friendly-competition guide](/blog/friendly-competition-with-friends) discusses that different arrangement. There is no need to combine both. “We are finding a route together” and “we are comparing independent attempts” invite different behaviour."
        ],
        "sourceIds": [
          "scott-2004"
        ]
      },
      {
        "id": "driver-and-explainer",
        "title": "Give moving and explaining separate roles",
        "paragraphs": [
          "One simple arrangement is a driver and an explainer. The driver operates the screen and decides whether to make a move. The explainer describes a possibility and the reason behind it. These are temporary roles rather than labels for the more skilled and less skilled person. Swap after a board, a restart or another point both of you agree on; avoid grabbing the device halfway through an attempt.",
          "Make explanations observable. “Move blue” leaves the driver guessing which blue brick and why. “I think the blue brick on the left will stop against yellow, leaving room for red to turn” identifies the piece, direction and expected consequence. The driver can inspect that prediction, disagree with it or try it. A useful explanation gives someone something to judge rather than merely an instruction to obey.",
          "Maquil et al. (2024) analysed five groups of three people solving a task on an interactive tabletop, examining how participants coordinated information and action. The study provides detailed accounts of coordination, not proof that our suggested roles improve puzzle scores. Its relevance is the distinction itself: sharing information and managing who acts are both parts of a shared task, even when everyone can see the same surface.",
          "If both of you want to move at once, pause before the next action. Decide whose suggestion you are testing and let that attempt finish. You can also say, “I would like to try my route before hearing yours.” This protects the quieter player’s opportunity without pretending their route must be right. A wrong prediction that you were allowed to test can be more satisfying than an unexplained correct instruction."
        ],
        "sourceIds": [
          "maquil-2024"
        ]
      },
      {
        "id": "make-the-board-common-ground",
        "title": "Make sure you are discussing the same board",
        "paragraphs": [
          "Describe pieces by a combination of location, colour and shape or glyph. “The red brick below the yellow gate” is easier to resolve than “that one”. If the board changes after a move, name the new position before continuing the explanation. A conversation can fail because its references are out of date, even when each person has understood the movement rule.",
          "Dillenbourg and Traum (2006) studied multimodal collaborative problem solving with a persistent shared whiteboard and communication. Their analysis distinguishes how shared representations support a solution from how people establish mutual understanding. The setting was a remote collaborative task, not OutBrick. We apply the distinction as a conversation habit: a visible arrangement is a common reference, but you still need to check what the other person means.",
          "A short confirmation can prevent a long argument. Ask, “Do you mean the upper blue brick?” or “Would red stop here or one row higher?” Then answer the specific uncertainty. Repeating the entire solution more loudly is unlikely to resolve a mistaken reference. If someone cannot comfortably distinguish a colour, use the matching glyph and position instead of treating the difficulty as inattention.",
          "OutBrick’s [daily page](/daily) shows the same selected board to everyone on the same UTC date. That can help two people compare an arrangement, although the page is not a live shared session. If you are looking at separate screens, confirm the displayed date and board number first. You cannot use a friend’s current position as your own starting state after they have already made several moves."
        ],
        "sourceIds": [
          "dillenbourg-2006"
        ]
      },
      {
        "id": "help-without-the-whole-answer",
        "title": "Offer the smallest useful hint",
        "paragraphs": [
          "Hints work best when the recipient chooses their size. Begin with a rule clarification if needed: “The brick keeps sliding until it meets a blocker.” Next, offer a region or dependency: “That red gate may need the corridor cleared first.” If the player wants more, describe a single move. Keep the complete route for someone who explicitly asks for a walkthrough. This is our suggested etiquette, rather than a claim about an in-game hint feature.",
          "Sometimes a question preserves more discovery than an instruction. “What could stop that brick at the height you need?” directs attention to a constraint while leaving the solution open. But questions can become disguised commands if you keep asking until the other person repeats your answer. Give them room to think, and accept “I would rather try this first” as a complete response.",
          "Hansen and Spada (2010) used two picture-sorting experiments to examine support for remote collaborative problem solving. Their findings distinguished improvements in collaborative process from problem-solving outcomes. That boundary matters here: a clearer exchange can be worthwhile without guaranteeing a better score. Our turn-taking and hint suggestions aim to make help understandable and welcome, not to promise faster solving or cognitive improvement.",
          "If the session includes a child, grandparent or someone new to this mechanic, avoid assuming age tells you how much help they need. Ask and observe the actual difficulty. Our [guide to playing with grandchildren](/blog/playing-games-with-grandchildren) offers broader ideas for that relationship. Here, the immediate task is smaller: keep the player involved in the next decision instead of turning them into an audience for your solution."
        ],
        "sourceIds": [
          "hansen-2010"
        ]
      },
      {
        "id": "recover-and-finish-together",
        "title": "Handle mistakes and finish without assigning blame",
        "paragraphs": [
          "When a prediction fails, describe the consequence before deciding whose fault it was. “Blue has blocked the gate” is more useful than “You moved the wrong one”. Check whether the cause was an unclear reference, an unfamiliar rule or a genuinely unhelpful plan. If undo is available, ask before using it: the driver may want to see whether the new arrangement still has a route.",
          "On OutBrick’s browser boards, Undo and Reset make it possible to revisit an attempt, with undo affecting the star result. Do not transfer that web behaviour into assumptions about the app’s costs. If you are playing the app, check its [fair-play explanation](/#fair) before agreeing to repeat attempts or spend resources. Sharing a screen also means sharing a decision about purchases and rewarded adverts; do not make that choice on someone else’s behalf.",
          "A clear gives you a chance to recognise both kinds of contribution. The person who spotted a stopping point helped; so did the person who patiently tested the route and noticed an unexpected obstruction. “We found why that works” keeps attention on the shared problem. You can then swap roles, choose another board or stop. Solving together does not require finishing a chapter or proving that the arrangement made you more productive.",
          "If you want to try this agreement, choose one board on [OutBrick’s play page](/play), name the driver and ask what help is welcome. For the broader app, [find OutBrick on the App Store](APPSTORE_TOGETHER). The social arrangement is yours to make; it is not a feature purchase. The most useful success may be that both people still want to play together after the puzzle ends.".replace("APPSTORE_TOGETHER", appStoreUrl("journal-together"))
        ]
      }
    ],
    "references": [
      {
        "id": "dillenbourg-2006",
        "label": "Dillenbourg & Traum (2006)",
        "citation": "Dillenbourg, P., & Traum, D. (2006). Sharing solutions: Persistence and grounding in multimodal collaborative problem solving. Journal of the Learning Sciences, 15(1), 121–151.",
        "url": "https://doi.org/10.1207/s15327809jls1501_9",
        "italicParts": [
          "Journal of the Learning Sciences",
          "15"
        ]
      },
      {
        "id": "hansen-2010",
        "label": "Hansen & Spada (2010)",
        "citation": "Hansen, M., & Spada, H. (2010). Supporting remote collaborative problem-solving. Applied Cognitive Psychology, 24(9), 1297–1323.",
        "url": "https://doi.org/10.1002/acp.1632",
        "italicParts": [
          "Applied Cognitive Psychology",
          "24"
        ]
      },
      {
        "id": "maquil-2024",
        "label": "Maquil et al. (2024)",
        "citation": "Maquil, V., Afkari, H., Arend, B., Heuser, S., & Sunnen, P. (2024). Analysis of coordination mechanisms during collaborative problem-solving on an interactive tabletop display. Computer Supported Cooperative Work (CSCW), 33(4), 1071–1113.",
        "url": "https://doi.org/10.1007/s10606-023-09487-2",
        "italicParts": [
          "Computer Supported Cooperative Work (CSCW)",
          "33"
        ]
      },
      {
        "id": "scott-2004",
        "label": "Scott et al. (2004)",
        "citation": "Scott, S. D., Carpendale, M. S. T., & Inkpen, K. M. (2004). Territoriality in collaborative tabletop workspaces. In Proceedings of the 2004 ACM Conference on Computer Supported Cooperative Work (pp. 294–303). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/1031607.1031655",
        "italicParts": [
          "Proceedings of the 2004 ACM Conference on Computer Supported Cooperative Work"
        ]
      }
    ],
    "relatedSlugs": [
      "friendly-competition-with-friends",
      "playing-games-with-grandchildren",
      "how-to-read-a-puzzle-before-moving"
    ],
    "pullQuote": "A useful explanation gives someone something to judge rather than merely an instruction to obey.",
    "faqs": [
      {
        "question": "Does OutBrick have a co-op mode for solving together?",
        "answer": "This article describes informal cooperation around a screen, not a built-in OutBrick co-op or simultaneous multiplayer mode. Players can agree who controls the board and discuss a route together."
      },
      {
        "question": "How can I help someone without spoiling the puzzle?",
        "answer": "Ask what amount of help they want, then start with a rule or relevant dependency. Offer a specific move or complete solution only when the player wants that level of detail."
      },
      {
        "question": "When should we swap who controls the screen?",
        "answer": "Agree a clear handover point, such as finishing a board or restarting an attempt. Ask before taking the device, including when you believe you have found the solution."
      },
      {
        "question": "Does solving puzzles together guarantee better results?",
        "answer": "The cited research does not establish that this informal approach improves OutBrick scores or cognition. The practical aim is a clearer, more welcome conversation in which both people can participate."
      }
    ]
  }
];
