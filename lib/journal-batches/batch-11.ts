import type { BlogArticle } from '../blog.ts';

// Community-led accessibility series; status reviewed 2 October 2026.
export const batch11: BlogArticle[] = [
  {
    "slug": "outbrick-accessibility-commitment",
    "title": "OutBrick’s commitment to blind players and VoiceOver",
    "dek": "What our commitment to blind players means: listening to real play, describing current limits honestly, and making accessibility part of OutBrick.",
    "category": "Inclusive design",
    "categoryColor": "teal",
    "publishedAt": "October 2, 2026",
    "updatedAt": "October 2, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-accessibility-commitment.webp",
    "imageAlt": "OutBrick game illustration with a phone, colourful bricks and two brick characters on a navy background",
    "tags": [
      "accessibility",
      "voiceover",
      "blind players",
      "inclusive design",
      "player feedback"
    ],
    "intro": "A player can love a puzzle and still encounter a barrier that should not be there. That is the most important lesson in the AppleVis conversation about OutBrick. Players described discovering a new kind of game, enjoying its challenge, struggling to understand a movement, and finding controls or board information that VoiceOver did not expose as expected. All of those experiences deserve attention. We are fully committed to accessibility for blind players and VoiceOver users. Your feedback is helping us make the board easier to explore, the rules easier to learn and the whole experience more welcoming. We want you to be able to concentrate on the puzzle you came to play.",
    "keyTakeaways": [
      "Blind players belong in the ordinary conversation about OutBrick’s rules, difficulty, enjoyment and future development.",
      "The October 2 developer replies acknowledge specific barriers and promise improvements; those replies do not establish that every change has shipped.",
      "Useful feedback describes the task and what happened. You do not need to share a diagnosis, purchase details or private account information."
    ],
    "sections": [
      {
        "id": "start-with-the-player",
        "title": "Start with what the player came to do",
        "paragraphs": [
          "Someone opening OutBrick might want to solve a stubborn board, discover whether a sorting game suits them, or simply spend a few enjoyable minutes with a new puzzle. Accessibility needs to support that purpose. Finding a button is important, but so is understanding the choice it offers and being able to enjoy the result. A technically exposed interface can still leave too much unexplained.",
          "Interviews with 32 blind and low-vision mobile players in China found varied motivations, including accomplishment and social connection, alongside access barriers (Ran et al., 2025). Players bring more than one reason to play.",
          "In the [AppleVis discussion](https://www.applevis.com/comment/217460#comment-217460), people told us what they enjoyed, where they got stuck and what they wanted to try next. We value that whole picture. A report about an unreachable gate matters even when the player loves the game. So does the pleasure of discovering a genre that previously felt out of reach. Both help us understand what is worth building on."
        ],
        "sourceIds": [
          "ran-2025"
        ]
      },
      {
        "id": "say-what-is-current",
        "title": "Turn feedback into practical improvements",
        "paragraphs": [
          "We introduced OutBrick to AppleVis with colour paired with glyphs, brick labels identifying colour, shape and position, and VoiceOver slide actions. Players helped us find gaps in discovering some bricks and gates by touch. We acknowledged those problems. For the next update, we are working towards exploration that announces every brick and gate at its position, along with the empty cells between them.",
          "The surrounding screens matter too. Our next-update plans include VoiceOver-responsive shop buttons, a faster home screen, clearer frozen-gate information and correct mission credit when ice melts. Our [guide to accessibility beyond the board](/blog/outbrick-accessibility-beyond-board) explains what players reported and what those changes are intended to make easier.",
          "Gonçalves et al. (2023) analysed blind players’ published gameplay and the trade-offs between access, agency and engagement. Their work reminds us that completing a task can leave substantial friction unaddressed.",
          "If an action works only through an awkward route, the extra effort still matters. We want you to have useful ways to explore the board and understand where things are. Our [spatial board guide](/blog/outbrick-voiceover-spatial-board) explains how touch exploration and sequential navigation can help with different parts of that task."
        ],
        "note": "Status on 2 October 2026: the improvements described for the next update remain in progress. The AppleVis replies announce commitments, not a release of those fixes.",
        "sourceIds": [
          "goncalves-2023"
        ]
      },
      {
        "id": "keep-the-puzzle-worth-playing",
        "title": "Keep the puzzle worth playing",
        "paragraphs": [
          "Accessibility includes room for challenge. The community described both enjoyment and difficulty: several ideas arriving together, move allowances feeling tight, and uncertainty about how to move a brick. Those are different problems. A player who understands the controls may want a demanding board; a player still learning the controls needs an explanation before the game can fairly ask for a plan.",
          "In a small survey and interview study, players with visual impairments valued rich experiences and complexity while describing access tensions (Andrade et al., 2019). We should leave room for those preferences.",
          "We are redesigning the levels with a more understandable beginning in mind. The next-update plans described in our replies include gentler early boards, ideas introduced individually, short teaching cards and more moves at the start. The goal is to give a new player a fair chance to learn each idea before several ideas combine. We still want the pleasure of working out a satisfying solution.",
          "A useful question after a difficult attempt is what made it difficult: an interesting dependency between bricks, a rule that had not been explained, or information that could not be reached? Our [movement and onboarding guide](/blog/outbrick-voiceover-slide-actions) helps separate those questions. They can lead to very different improvements."
        ],
        "sourceIds": [
          "andrade-2019"
        ]
      },
      {
        "id": "feedback-that-helps",
        "title": "Describe the task, then the obstacle",
        "paragraphs": [
          "A useful accessibility report can be short. Start with the screen or board and the thing you wanted to do. Explain how you reached the control, what you expected, and what happened instead. For example: “I can reach this gate by swiping through elements, but touching its position does not announce it.” That describes an interaction difference clearly without requiring technical language.",
          "If convenient, include the app version, device model and operating-system version, and whether the behaviour repeats after returning to the screen. These details can help distinguish different versions and conditions. They are optional context, not a reason to reject a report from someone who cannot easily find them. Saying “I do not know why this happened” is perfectly useful when the steps are clear.",
          "Use the [OutBrick contact form](/contact) for a direct message and avoid health information, account credentials, payment details or purchase receipts unless a separate support process genuinely requires something specific. You can describe a VoiceOver interaction without explaining why you use VoiceOver. If a shop action is the problem, there is no need to complete a purchase merely to demonstrate it."
        ],
        "bullets": [
          "Where: the screen, level or control involved.",
          "Goal: what you were trying to accomplish.",
          "Action and result: what you did and what was announced or changed.",
          "Context, if available: app and system versions, device, and whether it happens again."
        ]
      },
      {
        "id": "work-with-different-experiences",
        "title": "Make room for different ways of playing",
        "paragraphs": [
          "Touch exploration and sequential navigation serve different purposes. A person may want the efficiency of moving through elements at one moment and a sense of spatial relationships at another. Offering information through one route does not automatically make the other route dispensable. That is especially relevant when empty space is part of a puzzle’s solution.",
          "Nair et al. (2024) compared nonvisual exploration tools with nine blind and low-vision participants. Preferences split between Surveyor and an audio menu, underlining different priorities within a small, experienced sample.",
          "We want to understand which experience you are trying to have. In the AppleVis conversation, another accessible-game developer offered to compare notes, and we welcomed that exchange. Sharing ideas can bring overlooked questions into view: is an announcement useful at this moment, is a control easy to discover, and can you recover your bearings after a move? Those are worthwhile conversations to keep having.",
          "Feedback is welcome, not an obligation placed on players. You should be able to stop, take a break, or decide the current experience is not right for you. Reviews are also voluntary. A candid account of a barrier is useful whether or not it comes with praise, a star rating or a promise to test another build."
        ],
        "sourceIds": [
          "nair-2024"
        ]
      },
      {
        "id": "follow-the-progress",
        "title": "Judge progress by the experience",
        "paragraphs": [
          "Visit the [accessibility page](/accessibility) for support information and the [release notes](/whats-new) to follow published changes. When you try an update, tell us whether the task that mattered to you has become easier. Perhaps you can find a gate more naturally, understand a rule sooner or reach a screen that previously got in the way. Those concrete improvements are the progress we want players to feel.",
          "Blind players should be able to discover, understand and enjoy the whole game. That is the commitment we are making as OutBrick develops. We want your feedback to be taken seriously when something gets in the way, and we want to keep learning from the moments that make you want to play another board. Thank you to everyone who has helped us see what the next steps need to be."
        ]
      }
    ],
    "references": [
      {
        "id": "ran-2025",
        "label": "Ran et al. (2025)",
        "citation": "Ran, Z., Li, X., Xiao, Q., Fan, X., Li, F. M., Wang, Y., & Lu, Z. (2025). How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1–18). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3706598.3714205",
        "italicParts": [
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "goncalves-2023",
        "label": "Gonçalves et al. (2023)",
        "citation": "Gonçalves, D., Piçarra, M., Pais, P., Guerreiro, J., & Rodrigues, A. (2023). “My Zelda Cane”: Strategies used by blind players to play visual-centric digital games. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Article 289, pp. 1–15). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3544548.3580702",
        "italicParts": [
          "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "andrade-2019",
        "label": "Andrade et al. (2019)",
        "citation": "Andrade, R., Rogerson, M. J., Waycott, J., Baker, S., & Vetere, F. (2019). Playing blind: Revealing the world of gamers with visual impairment. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1–14). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3290605.3300346",
        "italicParts": [
          "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "nair-2024",
        "label": "Nair et al. (2024)",
        "citation": "Nair, V., Zhu, H., Song, P., Wang, J., & Smith, B. A. (2024). Surveyor: Facilitating discovery within video games for blind and low vision players. In Proceedings of the CHI Conference on Human Factors in Computing Systems (pp. 1–15). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3613904.3642615",
        "italicParts": [
          "Proceedings of the CHI Conference on Human Factors in Computing Systems"
        ]
      }
    ],
    "relatedSlugs": [
      "outbrick-voiceover-spatial-board",
      "outbrick-voiceover-slide-actions",
      "outbrick-accessibility-beyond-board"
    ],
    "pullQuote": "Blind players should be able to discover, understand and enjoy the whole game.",
    "faqs": [
      {
        "question": "Is OutBrick fully committed to accessibility for blind players?",
        "answer": "Yes. Accessibility for blind players and VoiceOver users is an ongoing commitment for OutBrick, including the board, rules and surrounding screens. That commitment does not mean every reported barrier has already been removed."
      },
      {
        "question": "Have the fixes promised on AppleVis already shipped?",
        "answer": "The October 2 replies describe several changes as coming in the next update. They do not confirm delivery of those fixes. Check the [release notes](/whats-new) and the installed version rather than treating a promise as a completed change."
      },
      {
        "question": "What should an accessibility report include?",
        "answer": "Describe the screen or board, what you wanted to do, your action and the result. App version, system version and device can help if available. Avoid health information, credentials and private payment details."
      },
      {
        "question": "Do I need to buy something or leave a review to give feedback?",
        "answer": "No. You can use the [contact form](/contact) to explain a problem or suggestion without making a purchase or leaving a review. Feedback and reviews are voluntary."
      }
    ]
  },
  {
    "slug": "outbrick-voiceover-spatial-board",
    "title": "Reading OutBrick’s spatial board with VoiceOver",
    "dek": "Build a clearer picture of OutBrick’s board with VoiceOver: explore bricks, gates and empty space, and understand the fixes promised next.",
    "category": "Inclusive design",
    "categoryColor": "teal",
    "publishedAt": "October 2, 2026",
    "updatedAt": "October 2, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-voiceover-spatial-board.webp",
    "imageAlt": "OutBrick game illustration with a phone, colourful bricks and two brick characters on a navy background.",
    "tags": [
      "accessibility",
      "voiceover",
      "inclusive design",
      "puzzle games",
      "spatial reasoning"
    ],
    "intro": "A gate can be easy to hear and difficult to place. You might find it by swiping through the board’s elements, yet struggle to discover where it sits when moving a finger across the screen. That difference matters in OutBrick: knowing that a brick exists is only the beginning of planning its route. Players on AppleVis described exactly this gap, alongside a request to hear empty cells. Their reports give us a practical way to discuss reading a spatial board, and a clear account of what we have promised to improve.",
    "keyTakeaways": [
      "Sequential navigation and direct touch exploration answer different questions about a board; comparing them can reveal missing information.",
      "Empty space helps explain possible routes, so an unannounced area should never be assumed to be a confirmed free cell.",
      "Touch-location fixes and empty-cell announcements are in progress for the next update."
    ],
    "sections": [
      {
        "id": "build-a-picture-of-relationships",
        "title": "Start with relationships between pieces",
        "paragraphs": [
          "The useful picture of a sliding puzzle contains more than a collection of colours. A brick has a position, a matching gate and neighbours that may obstruct its route. The space between those objects determines which moves are possible. Hearing every object name once does not necessarily give you those relationships, particularly on a board you have never explored before.",
          "OutBrick’s VoiceOver labels identify a brick’s colour, shape and position. Those labels are a starting point for building your own picture. Listen for the identity of a piece, then ask where its matching gate lies and what is between them. You do not need to memorise the entire board before examining one possible route.",
          "Ran et al. (2025) interviewed 32 experienced blind or low-vision mobile players in China; participants requested integrated focus navigation, accessible tutorials and customisable feedback.",
          "For our design, that makes understanding the board a task worth examining separately from executing a slide. Our [guide to VoiceOver slide actions](/blog/outbrick-voiceover-slide-actions) covers movement once you have found the piece you want."
        ],
        "sourceIds": [
          "ran-2025"
        ]
      },
      {
        "id": "compare-two-ways-of-exploring",
        "title": "Use navigation and touch for different questions",
        "paragraphs": [
          "Sequential navigation means moving through accessible elements with left or right swipes. Direct touch exploration means moving a finger over the board to hear what lies under it. The first can help you discover the available elements. The second can help connect an announcement to a place. A navigation sequence should not be treated as a map of physical adjacency.",
          "An AppleVis player reported finding only two gates through touch, while another gate appeared through sequential navigation. Some bricks, including pieces surrounded by others or blocking a different-coloured gate, were similarly discoverable by swiping but absent under the finger. The player also reported losing levels after a relevant brick went unannounced. We acknowledged both defects. If the two methods give you different information, a missing announcement is a reasonable thing to report; it is not evidence that you have misunderstood the puzzle.",
          "Kane et al. (2008) studied ten screen-reader users on non-game tasks; their prototype separated exploration from activation, but faster overall use brought more errors.",
          "That historical example invites a useful design question here: can a player investigate freely before choosing an action? You may prefer one exploration method or combine them. What matters is being able to discover the information you need before deciding to move."
        ],
        "sourceIds": [
          "kane-2008"
        ]
      },
      {
        "id": "why-empty-cells-matter",
        "title": "An empty cell is meaningful information",
        "paragraphs": [
          "Another player explained that flick navigation worked best, but moving a finger over the board was necessary for spatial understanding. The missing piece was an explicit announcement for empty cells. Without it, a quiet area could not confidently be understood as available space. That is a precise observation about what a puzzle needs to communicate.",
          "Consider an imagined board with a brick, a gate and a gap between them. A player needs to know whether the gap is clear before predicting the slide. Silence alone leaves several possibilities: empty space, an object that was missed, or a location outside the intended board area. A clear empty-cell announcement would remove one source of uncertainty.",
          "Empty space is part of the puzzle’s information. It helps distinguish a blocked route from a possible route and makes the relationship between pieces easier to investigate. It still does not promise that a brick will stop in that space: in OutBrick, a slide to the end continues until something stops the brick, and a shorter slide action names how many cells it covers. Our [movement guide](/blog/outbrick-voiceover-slide-actions) explains why the stopping point matters as much as the opening."
        ]
      },
      {
        "id": "a-small-orientation-routine",
        "title": "Try a small, repeatable orientation routine",
        "paragraphs": [
          "Begin with one brick and its intended destination. Discover what you can through sequential navigation, then revisit relevant positions by touch. If the two routes disagree, keep that uncertainty in your plan rather than filling it with a guess. Use the comparison when it helps you get your bearings, and tell us when either route leaves information out.",
          "Gonçalves et al. (2023) analysed over 70 hours of published blind-player gameplay; their qualitative study identified trade-offs between access, agency and engagement in visual-centric games.",
          "Our practical response is to keep the routine modest. You should be able to choose a route to explore, pause, and return to an uncertain position without feeling obliged to demonstrate expert workarounds. After a successful slide, inspect the changed area again: the position that was occupied a moment ago may now serve a different purpose."
        ],
        "bullets": [
          "Identify the brick and the matching gate before planning the route.",
          "Check which pieces lie along that route and where a slide would stop.",
          "Compare touch exploration with sequential navigation when information appears to be missing.",
          "Treat silence as unresolved information until you have a reliable way to confirm the space."
        ],
        "sourceIds": [
          "goncalves-2023"
        ]
      },
      {
        "id": "what-we-have-promised",
        "title": "The next-update commitments, stated plainly",
        "paragraphs": [
          "In our [2 October AppleVis reply about touch exploration](https://www.applevis.com/comment/217455#comment-217455), we committed to making every brick and gate discoverable at its actual position and announcing free cells as empty. The later empty-cell suggestion reinforced the same priority. As of 2 October 2026, those fixes remain in progress for the next update.",
          "We also said that every level was being redesigned, beginning with the first villages, with VoiceOver remaining central to that work. The redesign and navigation work tackle different needs: a satisfying challenge, and a reliable way to discover the information needed to attempt it. We want you to spend your attention on choosing a route with a clear understanding of the pieces involved.",
          "Nair et al. (2024) compared three navigation tools with nine players; preferences split between Surveyor and a menu in a purpose-built Windows game.",
          "That small study encourages us to leave room for different exploration preferences. Its setting was different from OutBrick’s, but the question is useful: can you investigate in a way that suits you? Our [accessibility page](/accessibility) brings together the broader feature information."
        ],
        "sourceIds": [
          "nair-2024"
        ]
      },
      {
        "id": "share-a-useful-board-report",
        "title": "Help us locate the missing information",
        "paragraphs": [
          "A useful report can be short: identify the level, describe the brick or gate, and say whether you found it by sequential navigation, direct touch, both or neither. Include the app version, device and operating-system version if you have them. Those details help distinguish a particular board arrangement from a broader navigation problem.",
          "You do not need to solve the board or diagnose the software before contacting us. “I can hear this gate while swiping, but cannot find it under my finger” already describes something concrete. If you can reproduce it, the sequence that leads there is useful; if you cannot, the original observation is still worth sharing.",
          "Use the [contact form](/contact) to send that account. Our [accessibility commitment](/blog/outbrick-accessibility-commitment) explains how these reports connect to the wider work. The aim is a board whose pieces and spaces can be understood well enough for the next decision to belong to you."
        ]
      }
    ],
    "references": [
      {
        "id": "ran-2025",
        "label": "Ran et al. (2025)",
        "citation": "Ran, Z., Li, X., Xiao, Q., Fan, X., Li, F. M., Wang, Y., & Lu, Z. (2025). How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1–18). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3706598.3714205",
        "italicParts": [
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "kane-2008",
        "label": "Kane et al. (2008)",
        "citation": "Kane, S. K., Bigham, J. P., & Wobbrock, J. O. (2008). Slide rule: Making mobile touch screens accessible to blind people using multi-touch interaction techniques. In Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility (pp. 73–80). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/1414471.1414487",
        "italicParts": [
          "Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility"
        ]
      },
      {
        "id": "goncalves-2023",
        "label": "Gonçalves et al. (2023)",
        "citation": "Gonçalves, D., Piçarra, M., Pais, P., Guerreiro, J., & Rodrigues, A. (2023). “My Zelda Cane”: Strategies used by blind players to play visual-centric digital games. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Article 289, pp. 1–15). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3544548.3580702",
        "italicParts": [
          "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "nair-2024",
        "label": "Nair et al. (2024)",
        "citation": "Nair, V., Zhu, H., Song, P., Wang, J., & Smith, B. A. (2024). Surveyor: Facilitating discovery within video games for blind and low vision players. In Proceedings of the CHI Conference on Human Factors in Computing Systems (pp. 1–15). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3613904.3642615",
        "italicParts": [
          "Proceedings of the CHI Conference on Human Factors in Computing Systems"
        ]
      }
    ],
    "relatedSlugs": [
      "outbrick-voiceover-slide-actions",
      "outbrick-accessibility-beyond-board",
      "outbrick-accessibility-commitment"
    ],
    "pullQuote": "Empty space is part of the puzzle’s information.",
    "faqs": [
      {
        "question": "Why can I find an OutBrick gate by swiping but not by touch?",
        "answer": "AppleVis players reported that mismatch for gates and some bricks, and we acknowledged the defects on 2 October 2026. Our replies promise touch-location fixes for the next update; they do not confirm a released fix."
      },
      {
        "question": "Does silence mean an OutBrick cell is empty?",
        "answer": "Silence alone is not a reliable confirmation of an empty cell, especially while the reported touch-exploration problems remain unresolved. Explicit empty-cell announcements are part of our next-update commitment."
      },
      {
        "question": "Should I use touch exploration or sequential VoiceOver navigation?",
        "answer": "They can serve different purposes: sequential navigation helps discover elements, while touch exploration helps connect them to screen positions. Use the method that suits you and report discrepancies between them."
      },
      {
        "question": "Where can I report a board that is difficult to explore?",
        "answer": "Use OutBrick’s [contact form](/contact), ideally with the level, app version and a description of what each navigation method announces. You can report the problem without completing the board or knowing its technical cause."
      }
    ]
  },
  {
    "slug": "outbrick-voiceover-slide-actions",
    "title": "How to slide OutBrick bricks with VoiceOver actions",
    "dek": "Learn OutBrick’s four slide directions, matching gates and slide distances, with VoiceOver action guidance and the promised teaching changes.",
    "category": "Inclusive design",
    "categoryColor": "teal",
    "publishedAt": "October 2, 2026",
    "updatedAt": "October 2, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-voiceover-slide-actions.webp",
    "imageAlt": "OutBrick game illustration with a phone, colourful bricks and two brick characters on a navy background.",
    "tags": [
      "accessibility",
      "voiceover",
      "inclusive design",
      "puzzle games",
      "onboarding"
    ],
    "intro": "Wondering how to move a brick down is entirely reasonable when a game has not made its controls clear. An AppleVis player understood that OutBrick’s bricks needed to leave the board, but thought they could only move upwards and could not find a tutorial. Our reply explained the four directions, the matching gates and the VoiceOver actions, then promised clearer teaching in the next update. This guide brings those pieces together so you can separate choosing a direction, understanding a route and deciding which brick should move first.",
    "keyTakeaways": [
      "A brick can slide up, down, left or right when the route is free, and leaves through a gate of its own colour.",
      "With a brick focused, up and down swipes choose among VoiceOver slide actions; those gestures do not restrict movement to vertical directions.",
      "Short teaching cards, promised for the next update, arrived in version 5.1; gentler introductory boards and more moves on early boards were promised alongside them."
    ],
    "sections": [
      {
        "id": "match-the-brick-to-its-gate",
        "title": "First find the destination, wherever it sits",
        "paragraphs": [
          "One basic aim is to send bricks home through gates of their own colour. A red brick needs its red gate; reaching a different gate does not fulfil that matching rule. Gates can be on any side of the board. There is no general rule that every brick must travel upwards or that the correct exit is always along the top edge.",
          "OutBrick labels each brick’s colour, shape and position for VoiceOver, and pairs bricks and matching gates with distinct glyphs. Begin by identifying the piece you want to move and locating its destination. Then examine the intervening route. An exit can be close to a brick while still requiring other pieces to move first.",
          "Imagine a matching gate to the right with another brick between it and your selected piece. The immediate problem is the intervening brick. Looking for an upward action will not resolve a route that needs to be cleared sideways. For help locating pieces before choosing actions, read our [VoiceOver board-orientation guide](/blog/outbrick-voiceover-spatial-board)."
        ]
      },
      {
        "id": "predict-the-stopping-point",
        "title": "Choose how far a slide goes",
        "paragraphs": [
          "Since version 5.1, each OutBrick slide action names a distance as well as a direction, such as “Slide right 1 cell” or “Slide up to the end, 3 cells”: the brick travels along the available route and stops where the action says. Listen to the full action name and plan the endpoint of the action you choose. Before committing to a route, consider both whether the brick can start moving and where that movement will end.",
          "A simple imagined example helps. There are several free spaces to the left of a brick, followed by another piece. A slide to the end carries the selected brick along the available space until the other piece stops it; a shorter slide action stops after the number of cells it names. The other piece can therefore be an obstacle or a useful stopping point, depending on your plan.",
          "This makes order important. Moving a blocker away may open an exit, but moving a useful stopping piece too soon may change a later slide. You can consider that sequence before acting. Our [guide to untimed puzzle challenge](/blog/outbrick-untimed-puzzle-challenge) explains the distinction between thinking time and the move allowance; having time to inspect a board does not give you unlimited moves."
        ]
      },
      {
        "id": "choose-a-voiceover-slide-action",
        "title": "The gesture selects an action; its name gives the direction",
        "paragraphs": [
          "Our [movement explanation on AppleVis](https://www.applevis.com/comment/217463#comment-217463) gives this VoiceOver guidance: focus a brick, then swipe up or down to choose among slide-up, slide-down, slide-left and slide-right actions. Listen to the action’s name. The direction of the selecting gesture and the direction named by the action do different jobs.",
          "For example, you may use an upward or downward swipe while choosing the action called slide left. That does not turn the intended move into an upward or downward slide. The action name expresses the movement you are selecting. This distinction answers the original confusion without asking you to infer a brick’s direction from the gesture used to browse its actions.",
          "Kane et al. (2008) separated exploration from activation in a prototype tested by ten screen-reader users on non-game tasks; speed gains came with more errors.",
          "With the standard VoiceOver custom-action gesture, double-tap after choosing the action to perform it, as [Apple’s custom-actions guidance](https://developer.apple.com/videos/play/wwdc2019/250/?time=205) explains. Before doing so, confirm the focused brick and intended direction. Afterwards, inspect the changed area and compare the result with your prediction. If the available actions are unclear in your setup, tell us what VoiceOver announces."
        ],
        "sourceIds": [
          "kane-2008"
        ]
      },
      {
        "id": "check-the-route-when-movement-is-unclear",
        "title": "When a move seems wrong, check one thing at a time",
        "paragraphs": [
          "If the result differs from your intention, return to the selected piece and check its identity and position. Next check the action you meant to choose, then the space in that direction. Finally, find the matching gate again. This order keeps a navigation problem, an action-selection problem and a puzzle constraint from collapsing into the same frustrating question.",
          "Some routes are blocked because another brick needs to move first. Other uncertainty may come from the touch-exploration defects reported on AppleVis, where a gate or brick could be found by sequential navigation but not under the finger. Do not assume that an area is clear just because nothing was announced there. Those reported defects have their own next-update fix commitments.",
          "Ran et al. (2025) interviewed 32 experienced blind or low-vision mobile players in China; participants asked for accessible tutorials, focus navigation and easier initial setup.",
          "That is useful context for our approach to instructions. A control explanation should help distinguish the state of the board from the way you act on it. You should not need to guess which of those has gone wrong before asking for help."
        ],
        "sourceIds": [
          "ran-2025"
        ]
      },
      {
        "id": "teach-one-idea-at-a-time",
        "title": "What we promised to teach more clearly",
        "paragraphs": [
          "The tutorial question was accompanied by another player’s report that several mechanics arrived together and the move allowance felt difficult to meet. We agreed that the opening needed a gentler introduction. We have promised short teaching cards when an idea first appears, introductory boards that teach one idea at a time, and more moves on early boards in the next update.",
          "As of 2 October 2026, those teaching changes remain in progress for the next update. We are also redesigning every level, beginning with the early villages, with a commitment to keep play available through VoiceOver. The aim is a starting point that lets you build confidence in the rules.",
          "Andrade et al. (2019) surveyed 17 gamers with visual impairment and interviewed six; participants valued rich play, while describing tensions between complexity and accessibility.",
          "Our design response is to explain a rule before combining it with others. Learning what stops a brick, finding a matching gate and managing several blockers can each be satisfying. Introducing them clearly should leave room for the player to discover a solution rather than wonder what the controls mean."
        ],
        "sourceIds": [
          "andrade-2019"
        ]
      },
      {
        "id": "keep-the-next-decision-yours",
        "title": "Keep the next decision yours",
        "paragraphs": [
          "Try naming the purpose of your next move in a short sentence: “This clears the route to the gate,” or “This creates a stopping point.” If you cannot yet predict what the slide will do, revisit the relevant pieces before acting. You can learn one relationship at a time instead of trying to hold the entire solution in mind.",
          "Ryan et al. (2006) associated perceived competence and autonomy with enjoyment across four gaming studies; those associations do not establish the effect of any particular interface.",
          "Research gives us useful questions about choice and understanding; your experience of an actual board tells us where to concentrate the work. Visit our [accessibility information](/accessibility) for the broader feature overview, or use the [contact form](/contact) with the level, chosen direction and announcement that left you uncertain. A clear report can begin with a single move."
        ],
        "sourceIds": [
          "ryan-2006"
        ]
      }
    ],
    "references": [
      {
        "id": "kane-2008",
        "label": "Kane et al. (2008)",
        "citation": "Kane, S. K., Bigham, J. P., & Wobbrock, J. O. (2008). Slide rule: Making mobile touch screens accessible to blind people using multi-touch interaction techniques. In Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility (pp. 73–80). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/1414471.1414487",
        "italicParts": [
          "Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility"
        ]
      },
      {
        "id": "ran-2025",
        "label": "Ran et al. (2025)",
        "citation": "Ran, Z., Li, X., Xiao, Q., Fan, X., Li, F. M., Wang, Y., & Lu, Z. (2025). How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1–18). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3706598.3714205",
        "italicParts": [
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "andrade-2019",
        "label": "Andrade et al. (2019)",
        "citation": "Andrade, R., Rogerson, M. J., Waycott, J., Baker, S., & Vetere, F. (2019). Playing blind: Revealing the world of gamers with visual impairment. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1–14). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3290605.3300346",
        "italicParts": [
          "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "ryan-2006",
        "label": "Ryan et al. (2006)",
        "citation": "Ryan, R. M., Rigby, C. S., & Przybylski, A. (2006). The motivational pull of video games: A self-determination theory approach. Motivation and Emotion, 30(4), 344–360.",
        "url": "https://doi.org/10.1007/s11031-006-9051-8",
        "italicParts": [
          "Motivation and Emotion",
          "30"
        ]
      }
    ],
    "relatedSlugs": [
      "outbrick-voiceover-spatial-board",
      "outbrick-untimed-puzzle-challenge",
      "outbrick-accessibility-commitment"
    ],
    "pullQuote": "A clear report can begin with a single move.",
    "faqs": [
      {
        "question": "Can OutBrick bricks move down and sideways with VoiceOver?",
        "answer": "Yes. Our developer guidance describes slide-up, slide-down, slide-left and slide-right actions when space permits the move. Gates can be on any side of the board."
      },
      {
        "question": "Do up and down VoiceOver swipes mean the brick only moves vertically?",
        "answer": "No. With a brick focused, our guidance uses up and down swipes to choose among direction actions. Listen for the selected action’s name, which can specify left, right, up or down."
      },
      {
        "question": "Why does an OutBrick brick pass over an empty cell?",
        "answer": "A slide to the end carries the brick on until something stops it; since version 5.1, other slide actions name a shorter distance, such as “Slide right 1 cell”. Listen to the full action name to understand which movement you are choosing. Consider the expected stopping point as well as the available route."
      },
      {
        "question": "Where are the teaching cards described in the AppleVis replies?",
        "answer": "The 2 October 2026 replies promised teaching cards for the next update. Version 5.1 added them: a short card appears the first time you meet each new idea. Gentler early boards and more introductory moves were also commitments in that discussion."
      }
    ]
  },
  {
    "slug": "outbrick-untimed-puzzle-challenge",
    "title": "OutBrick without a timer: room for real challenge",
    "dek": "AppleVis players asked for time to explore and a gentler start. How OutBrick’s move limits, untimed play and planned teaching changes fit together.",
    "category": "OutBrick practice",
    "categoryColor": "green",
    "publishedAt": "October 2, 2026",
    "updatedAt": "October 2, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-untimed-puzzle-challenge.webp",
    "imageAlt": "A phone showing colourful OutBrick bricks with two brick characters against a navy background",
    "tags": [
      "accessibility",
      "voiceover",
      "puzzle games",
      "difficulty design",
      "inclusive design"
    ],
    "intro": "Take a moment to find the gates, follow a possible route and change your mind about the first move. That space to explore matters in OutBrick, especially when you are building a picture of the board with VoiceOver. The AppleVis conversation brought us encouraging accounts of discovering a new favourite kind of puzzle, alongside clear questions about difficulty, move allowances and a reported timer. We want to answer those questions directly and explain how we are making the opening boards more welcoming while keeping the pleasure of a good challenge. The research discussed here offers useful context; none of these studies evaluated OutBrick.",
    "keyTakeaways": [
      "Untimed play leaves room to explore a board; a move allowance still constrains the actions used to solve it.",
      "We describe OutBrick as untimed, while one player reported encountering a timer. The discussion leaves that discrepancy unresolved.",
      "Our 2 October plans included gentler opening boards, individual introductions to mechanics and more moves on early boards; version 5.1 added a short card the first time you meet each new idea."
    ],
    "sections": [
      {
        "id": "understanding-before-moving",
        "title": "Give understanding its own time",
        "paragraphs": [
          "Before choosing a move, a VoiceOver player may need to find a brick, identify its gate, explore the intervening spaces and check what will stop its slide. That is already meaningful work. It builds a model of the board from information encountered in sequence. A rule that consumes time during that process changes the task the player is being asked to perform.",
          "In the AppleVis discussion, a player explained the problem through a comparison with blitz chess: the board must first be explored piece by piece. Another welcomed untimed play because choosing their own pace made the puzzle more inviting. Neither comment asks the game to supply an answer. They ask for enough opportunity to understand the question.",
          "Thinking time and move allowance are separate design decisions. A move-limited board can allow a long pause while still making each action consequential. Our [guide to reading OutBrick’s board with VoiceOver](/blog/outbrick-voiceover-spatial-board) looks at the information that pause needs to make available. Extra time helps little when an essential piece or empty space cannot be found."
        ]
      },
      {
        "id": "what-the-timer-record-says",
        "title": "Keep the timer discrepancy visible",
        "paragraphs": [
          "Our opening AppleVis post described untimed play. A later player reported that time was expiring almost before they could begin and asked whether the timer could be disabled. In [our reply about the timer](https://www.applevis.com/comment/217462#comment-217462), we explained that the timed mode had been removed completely and boards now had only a move target.",
          "That reply does not erase the player’s experience. The discussion does not identify the affected app versions, the removal release or the circumstances of the reported timer, so we cannot explain the discrepancy from the thread. We should not assume the player confused moves with seconds. Their practical request was clear: enough time to explore before deciding what to do.",
          "Our [published version 4.2 release notes](/whats-new#4-2) separately say Rush was withdrawn and nothing in OutBrick is timed. Those notes describe the published change, but cannot tell us what happened in that particular session. If a countdown still appears for you, please describe the screen and installed version through [our contact form](/contact). That gives us a concrete starting point for understanding what you encountered."
        ]
      },
      {
        "id": "enjoyment-and-difficulty",
        "title": "Enjoying a game can include finding it hard",
        "paragraphs": [
          "Community enthusiasm was specific. One player was excited to find another accessible block-and-sorting puzzle. Another described spending much of a day with the game while still learning how to play well. A third loved the idea but struggled to manage several mechanics at once and had not completed a puzzle within its required moves. Enjoyment and frustration appeared together.",
          "Andrade et al. (2019) surveyed 17 visually impaired gamers and interviewed six; participants valued complexity and enjoyable participation.",
          "That is a helpful reminder to listen for the kind of difficulty a player values. An intricate route, an unfamiliar movement rule and an undiscoverable control can all delay progress, but they call for different responses. Simplifying the route does not explain the control; making the control readable does not automatically teach the route.",
          "When a board feels difficult, try naming the obstacle. Are you unsure what a brick can do, where it needs to go, or how to get there within the allowance? Our [guide to VoiceOver slide actions](/blog/outbrick-voiceover-slide-actions) addresses the first question. The other two belong to spatial understanding and planning."
        ],
        "sourceIds": [
          "andrade-2019"
        ]
      },
      {
        "id": "a-gentler-first-encounter",
        "title": "A gentler first encounter, one idea at a time",
        "paragraphs": [
          "As of 2 October 2026, our gentler opening boards, first-encounter teaching cards and more generous early move allowances remain plans for the next update, with the work still in progress. The AppleVis feedback helped make the problem clear: several mechanics were arriving together. We are redesigning levels, beginning with the first villages, to give those early encounters more room.",
          "Ran et al. (2025) interviewed 32 experienced blind or low-vision mobile players in China; accessible tutorials were among the improvements participants requested.",
          "An opening board can introduce one relationship before combining it with another. A player first needs to understand how a brick slides and exits. Later, a new obstacle can ask them to reconsider a familiar plan. Think of that as a teaching principle: start with something the player can understand, then give them an interesting reason to use it differently.",
          "We also plan to give early boards more moves, leaving room to try an idea and observe its result. The important question is whether you understand more after that attempt. A larger allowance alone cannot explain an unfamiliar mechanic, so the teaching cards need to be easy to find and understand with VoiceOver. The aim is to help the first discoveries lead naturally into the next ones."
        ],
        "sourceIds": [
          "ran-2025"
        ]
      },
      {
        "id": "keep-the-interesting-challenge",
        "title": "Keep the interesting part of the challenge",
        "paragraphs": [
          "Abuhamdeh and Csikszentmihalyi (2012) studied chess and everyday activities, finding that challenge’s relationship with enjoyment varied with motivation and activity type.",
          "Across four game studies, Ryan et al. (2006) associated perceived competence and autonomy with enjoyment and game preferences.",
          "For OutBrick, the useful question is where the effort belongs. Planning a sequence can remain demanding after the interface clearly describes the pieces. Finding a clever use for a blocker can remain satisfying after the movement rule has been explained. A gentler introduction can prepare you for that complexity without deciding how much complexity you should ultimately want.",
          "The same distinction helps a player evaluate a session. Did you lose because a dependency in your plan was wrong, because the move allowance was tight, or because you could not discover essential information? Those observations are more useful than a single verdict of “too hard”. There is also no obligation to persist when the kind of challenge on offer is not enjoyable for you."
        ],
        "sourceIds": [
          "abuhamdeh-2012",
          "ryan-2006"
        ]
      },
      {
        "id": "a-deliberate-next-attempt",
        "title": "Make the next attempt informative",
        "paragraphs": [
          "For a fresh board, start by finding the exits and the pieces that belong to them. Identify one route you want to open, then inspect what blocks it. Before acting, state the purpose of the move: clearing a corridor, creating a stopping point or moving a brick towards its gate. After acting, check the resulting state before extending the plan.",
          "If a gate or brick cannot be discovered, please tell us rather than spending repeated attempts guessing. You should be able to concentrate on your plan. The [accessibility page](/accessibility) provides broader support information, while our [accessibility commitment article](/blog/outbrick-accessibility-commitment) explains how player reports help us identify the work that needs attention and communicate changes as they arrive.",
          "Finally, keep the other constraints in view. An untimed board can still have a move limit, lives and purchase offers; the absence of a clock does not promise unlimited retries. The aim is a session in which you can understand the rules, choose your approach and recognise what an attempt taught you."
        ]
      }
    ],
    "references": [
      {
        "id": "andrade-2019",
        "label": "Andrade et al. (2019)",
        "citation": "Andrade, R., Rogerson, M. J., Waycott, J., Baker, S., & Vetere, F. (2019). Playing blind: Revealing the world of gamers with visual impairment. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1–14). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3290605.3300346",
        "italicParts": [
          "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "ran-2025",
        "label": "Ran et al. (2025)",
        "citation": "Ran, Z., Li, X., Xiao, Q., Fan, X., Li, F. M., Wang, Y., & Lu, Z. (2025). How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1–18). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3706598.3714205",
        "italicParts": [
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "abuhamdeh-2012",
        "label": "Abuhamdeh & Csikszentmihalyi (2012)",
        "citation": "Abuhamdeh, S., & Csikszentmihalyi, M. (2012). The importance of challenge for the enjoyment of intrinsically motivated, goal-directed activities. Personality and Social Psychology Bulletin, 38(3), 317–330.",
        "url": "https://doi.org/10.1177/0146167211427147",
        "italicParts": [
          "Personality and Social Psychology Bulletin",
          "38"
        ]
      },
      {
        "id": "ryan-2006",
        "label": "Ryan et al. (2006)",
        "citation": "Ryan, R. M., Rigby, C. S., & Przybylski, A. (2006). The motivational pull of video games: A self-determination theory approach. Motivation and Emotion, 30(4), 344–360.",
        "url": "https://doi.org/10.1007/s11031-006-9051-8",
        "italicParts": [
          "Motivation and Emotion",
          "30"
        ]
      }
    ],
    "relatedSlugs": [
      "outbrick-voiceover-spatial-board",
      "outbrick-voiceover-slide-actions",
      "outbrick-accessibility-commitment"
    ],
    "pullQuote": "Thinking time and move allowance are separate design decisions.",
    "faqs": [
      {
        "question": "Does OutBrick currently promise untimed play?",
        "answer": "Yes. Our October 2 AppleVis reply and published version 4.2 notes say OutBrick has no timer. A player reported a timer earlier in the discussion, and the thread does not establish the affected versions or explain that discrepancy."
      },
      {
        "question": "Does no timer mean unlimited moves?",
        "answer": "No. OutBrick retains move constraints, so you can take time to inspect a board while still needing to solve it within its allowance. Lives and purchases are separate parts of the experience."
      },
      {
        "question": "Have the gentler opening boards already shipped?",
        "answer": "On 2 October 2026, the gentler early boards, first-encounter teaching cards and more generous early move allowances were planned for the next update. Version 5.1 has since added a short card the first time you meet each new idea; check the [release notes](/whats-new) for the other changes."
      },
      {
        "question": "Does accessible puzzle design require easy puzzles?",
        "answer": "Players can value substantial complexity while needing dependable information and controls. In practice, a useful first step is identifying whether the difficulty comes from planning, learning a rule or accessing the interface."
      }
    ]
  },
  {
    "slug": "outbrick-accessibility-beyond-board",
    "title": "OutBrick accessibility beyond the puzzle board",
    "dek": "From shop buttons and frozen gates to mission credit and Italian support: how AppleVis feedback is helping us improve the whole OutBrick session.",
    "category": "Inclusive design",
    "categoryColor": "teal",
    "publishedAt": "October 2, 2026",
    "updatedAt": "October 2, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-accessibility-beyond-board.webp",
    "imageAlt": "A phone showing colourful OutBrick bricks with two brick characters against a navy background",
    "tags": [
      "accessibility",
      "voiceover",
      "inclusive design",
      "game design",
      "player feedback"
    ],
    "intro": "You should be able to enjoy the whole OutBrick session, from opening the game to checking your progress. AppleVis players helped us see where that journey was getting stuck: shop buttons that did not activate, a slow home screen, missing frozen-gate information and mission credit that failed to count. Here is what we are improving and what those changes need to do for you. We also answer the Italian-language question and offer a short checklist for telling us about anything that gets in your way.",
    "keyTakeaways": [
      "A button being announced does not establish that it activates correctly, and a completed board does not establish that progress is recorded.",
      "Our next-update work covers VoiceOver shop activation, the home screen, frozen-gate announcements and mission credit.",
      "We confirmed Italian app support, and a player confirmed it too; the website’s six publishing languages are a separate list."
    ],
    "sections": [
      {
        "id": "follow-the-whole-session",
        "title": "Follow the whole session",
        "paragraphs": [
          "One AppleVis report connected four problems: VoiceOver found shop package buttons but could not open the purchase interface; Home was very slow; frozen gates could not be found; and melting ice did not advance the related missions. The player also enjoyed the game and had reached level 62. Progress and access barriers clearly coexisted.",
          "Gonçalves et al. (2023) analysed blind players’ published gameplay, identifying trade-offs among access, agency and engagement even when players found ways to progress.",
          "Accessibility needs to follow the whole session. A useful review follows a complete intention: “I want to start a board”, “I want to understand that gate”, or “I want to check the progress I earned”. Each intention crosses several controls and transitions. A label can work at one point while the overall task still fails.",
          "As of 2 October 2026, the changes described in [our AppleVis reply about these four issues](https://www.applevis.com/comment/217461#comment-217461) are next-update work still in progress. The research cited here did not evaluate OutBrick; it helps us think about the experience around those specific player reports."
        ],
        "sourceIds": [
          "goncalves-2023"
        ]
      },
      {
        "id": "shop-labels-and-activation",
        "title": "Shop labels need a working next step",
        "paragraphs": [
          "The shop report was particularly useful because it identified exactly where things stopped. The package buttons were detectable, so the spoken name was getting through. Activating them did not bring up the in-app purchase interface. Our planned fix will make those buttons respond to VoiceOver and open the purchase screen, so someone who chooses to explore an offer can reach its details.",
          "Kane et al. (2008) separated exploration from activation in a touchscreen prototype tested with ten screen-reader users on phone, email and music tasks.",
          "That distinction gives us a straightforward way to review the shop. First, can you find and identify the control? Next, does the action you choose reach the expected screen? Finally, is the outcome clear? Each step matters to someone making a purchase decision, even if the earlier steps already work. A readable button needs a dependable next step.",
          "You do not need to buy something to explain that the purchase screen failed to appear. A helpful report can name the package, describe the activation attempted and say whether anything changed. Avoid repeatedly activating an uncertain payment control; if a purchase sheet appears, review its terms and make your own decision before proceeding."
        ],
        "sourceIds": [
          "kane-2008"
        ]
      },
      {
        "id": "home-screen-and-waiting",
        "title": "A slow home screen changes the beginning",
        "paragraphs": [
          "The same player described the initial home screen as very slow. We said we would make it open much faster in the next update. For someone returning to the game, that work has a simple purpose: reaching the part of the session they came for without an uncertain wait at the beginning.",
          "A slow arrival leaves you deciding whether to wait, try again or assume the action failed. If you are navigating through spoken feedback, the absence of a useful response can make that decision particularly awkward. The report gives us a reason to look at the whole wait: what you hear, which controls are available and how you know the screen is ready.",
          "If you choose to report a similar delay, distinguish opening the app from returning to the home screen after a board. Say what remained available while you waited and what eventually happened. Approximate observations are enough; there is no need to collect logs or repeatedly recreate a frustrating session. We would rather have a clear account of one attempt than an elaborate test that costs you an evening."
        ]
      },
      {
        "id": "frozen-gates-and-progress",
        "title": "A frozen gate has a state and a consequence",
        "paragraphs": [
          "Frozen gates raised two linked problems. The player could not find them, and melting ice did not count towards the related missions. We plan to add announcements identifying the frozen state and the number of moves until melting, and to make melting ice count towards frozen-gate missions. Those changes address both understanding the board and recognising what you achieved on it.",
          "Andrade et al. (2019) surveyed 17 visually impaired gamers and interviewed six; participants’ accounts included interests in rich, complex play.",
          "The design task is to describe a mechanic well enough for you to reason about it. A frozen gate can be an interesting dependency when its condition is available: you can plan around when it changes. Without that information, the same obstacle can leave you unsure whether a route is blocked by a rule or by an access problem.",
          "Progress needs a similarly understandable connection. If the game asks for ice to melt, the mission counter should make the resulting credit clear. Our planned mission correction addresses the gap the player reported. When you check a mission after playing, you should be able to connect the change on the board with the progress shown. Our [spatial-board article](/blog/outbrick-voiceover-spatial-board) looks at the related challenge of locating gates and empty cells."
        ],
        "sourceIds": [
          "andrade-2019"
        ]
      },
      {
        "id": "italian-app-and-website",
        "title": "Italian in the app is a separate language question",
        "paragraphs": [
          "A community member asked whether OutBrick was available in Italian. We confirmed full Italian support and eleven other app languages, and another player confirmed Italian availability from their own experience. Our reply did not list the other eleven languages, but the answer to this particular question is straightforward: yes, the app is available in Italian.",
          "Our website publishes in English, French, German, Spanish, Japanese and Brazilian Portuguese. That list is separate from the app’s language support: you can use the app in Italian even though the website has no Italian edition. When you are looking for help, the language you play in and those available for a particular article may differ.",
          "The community confirmation also mentioned an update arriving that day, without saying the earlier bugs had been resolved. Our later reply still described the fixes as upcoming work. An update notification alone cannot tell you which particular issue changed, so consult [the published release notes](/whats-new) when checking a specific improvement. Keeping the version and the change together makes those conversations much easier to follow.",
          "For a language-related report, identify the screen and the wording that is missing, unclear or unexpectedly untranslated. There is no need to explain your background or justify why you prefer a particular language."
        ]
      },
      {
        "id": "feedback-without-extra-burden",
        "title": "Make feedback specific without making it a chore",
        "paragraphs": [
          "Ran et al. (2025) interviewed 32 experienced blind or low-vision mobile players in China; participants wanted developer communication and accessible setup, among other improvements.",
          "Here is a short checklist if you would like to send feedback. Use as much or as little as helps, and leave out anything private. A report can be useful without a recording, account details or proof of purchase. The [contact form](/contact) offers a direct route; [accessibility information](/accessibility) gives our current published support context."
        ],
        "sourceIds": [
          "ran-2025"
        ],
        "bullets": [
          "Name the task: opening Home, activating a particular shop package, locating a frozen gate or checking a mission.",
          "Describe the shortest sequence you remember, the result you expected and what actually happened, including useful spoken wording.",
          "If readily available, include the installed app version and whether the problem repeats. Do not guess a cause or spend money to investigate.",
          "For mission credit, note the mission and level if known, plus any before-and-after count. Redact names, receipts and unrelated notifications from optional screenshots."
        ]
      }
    ],
    "references": [
      {
        "id": "goncalves-2023",
        "label": "Gonçalves et al. (2023)",
        "citation": "Gonçalves, D., Piçarra, M., Pais, P., Guerreiro, J., & Rodrigues, A. (2023). “My Zelda Cane”: Strategies used by blind players to play visual-centric digital games. In Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems (Article 289, pp. 1–15). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3544548.3580702",
        "italicParts": [
          "Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "kane-2008",
        "label": "Kane et al. (2008)",
        "citation": "Kane, S. K., Bigham, J. P., & Wobbrock, J. O. (2008). Slide rule: Making mobile touch screens accessible to blind people using multi-touch interaction techniques. In Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility (pp. 73–80). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/1414471.1414487",
        "italicParts": [
          "Proceedings of the 10th International ACM SIGACCESS Conference on Computers and Accessibility"
        ]
      },
      {
        "id": "andrade-2019",
        "label": "Andrade et al. (2019)",
        "citation": "Andrade, R., Rogerson, M. J., Waycott, J., Baker, S., & Vetere, F. (2019). Playing blind: Revealing the world of gamers with visual impairment. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (pp. 1–14). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3290605.3300346",
        "italicParts": [
          "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "ran-2025",
        "label": "Ran et al. (2025)",
        "citation": "Ran, Z., Li, X., Xiao, Q., Fan, X., Li, F. M., Wang, Y., & Lu, Z. (2025). How users who are blind or low vision play mobile games: Perceptions, challenges, and strategies. In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (pp. 1–18). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3706598.3714205",
        "italicParts": [
          "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems"
        ]
      }
    ],
    "relatedSlugs": [
      "outbrick-voiceover-spatial-board",
      "outbrick-voiceover-slide-actions",
      "outbrick-accessibility-commitment"
    ],
    "pullQuote": "Accessibility needs to follow the whole session.",
    "faqs": [
      {
        "question": "Have the reported shop and home-screen problems been fixed?",
        "answer": "Our shop and home-screen improvements are planned for the next update and remain in progress. We are working on making the package buttons open the purchase screen with VoiceOver and making Home open faster."
      },
      {
        "question": "What should frozen gates announce?",
        "answer": "We plan to make frozen gates announce their frozen state and the number of moves until melting. We also plan to make melting ice count towards frozen-gate missions, so the progress you earn is reflected in the mission."
      },
      {
        "question": "Is OutBrick available in Italian?",
        "answer": "Yes. We confirmed Italian app support on AppleVis, and a community member confirmed it too. Our reply mentions twelve app languages without listing them all; the website separately publishes in English, French, German, Spanish, Japanese and Brazilian Portuguese."
      },
      {
        "question": "What is the most useful way to report an accessibility problem?",
        "answer": "Tell us the task, the steps you took, the expected result and what happened instead, adding the app version if readily available. Our [accessibility commitment article](/blog/outbrick-accessibility-commitment) explains how we approach player feedback; you do not need to make a purchase or share private account information."
      }
    ]
  }
];
