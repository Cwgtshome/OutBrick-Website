import type { BlogArticle } from '../blog.ts';
import { appStoreUrl } from '../app-store-url.ts';

export const batch7: BlogArticle[] = [
  {
    "slug": "outbrick-iphone-duo-player-ideas",
    "title": "OutBrick on iPhone Duo: what would you want to play?",
    "dek": "Would you want OutBrick adapted for iPhone Duo? Explore possible inner and outer screen experiences, then tell us what would make play worthwhile.",
    "category": "Game craft",
    "categoryColor": "purple",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "7 min read",
    "authorId": "mourad-hamdi",
    "image": "/blog/outbrick-iphone-duo-player-ideas.webp",
    "imageAlt": "Colourful OutBrick bricks and two brick characters arranged around a phone on a navy grid",
    "tags": [
      "game design",
      "player feedback",
      "iphone",
      "accessibility",
      "puzzle games"
    ],
    "intro": "Apple’s announcement of iPhone Duo raises an interesting question for a small puzzle game: what should change when a phone opens? A larger board sounds obvious, until you imagine holding it on a train, showing a difficult position to a friend or folding it while answering the door. We would like to hear whether you want an OutBrick adaptation, and what you would want from each screen. This is an invitation to discuss possibilities. It does not announce device support, a development programme or a release date. Your answer can be enthusiastic, cautious or simply that the current experience is enough.",
    "keyTakeaways": [
      "iPhone Duo has been announced; on 30 September 2026 it is not yet generally available. OutBrick compatibility has not been verified here.",
      "The ideas below are discussion starters: a compact outside board, a roomier inside view and a considerate transition when folding.",
      "Tell us the situation you want to improve, your priorities for each screen and what should stay unchanged through the existing contact page."
    ],
    "sections": [
      {
        "id": "announcement-and-open-question",
        "title": "A confirmed device, an open question for our game",
        "paragraphs": [
          "Apple announced iPhone Duo on 9 September 2026, with a 5.4-inch outer display and a 7.6-inch inner display. Its announced pre-orders begin on 16 October, with initial availability on 23 October. Those dates are future dates as we publish this on 30 September. The device announcement supplies context for this conversation; it does not establish that an individual app has been adapted or tested.",
          "For the confirmed hardware and launch information, read [Apple’s iPhone Duo announcement](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/). We are keeping the question narrower than the specifications: would opening a phone improve the way you read, manipulate or return to a sliding-brick puzzle? More screen space is useful only when it serves a real activity.",
          "OutBrick’s basic puzzle asks you to slide a brick until something stops it, then guide it through its matching gate. The difficulty comes from routes and stopping positions. A different screen could change how clearly you see those relationships without changing the puzzle itself. Equally, a comfortable existing layout may be more valuable to you than extra panels.",
          "Our article on [playing across devices](/blog/playing-across-devices) considers why the same game can occupy different places in a day. Here we are asking about those places before treating a new device as a reason to add things. No idea on this page should be read as a supported OutBrick feature or a commitment to build one."
        ]
      },
      {
        "id": "compact-outside-play",
        "title": "Possibility one: a compact board on the outer screen",
        "paragraphs": [
          "Imagine a brief wait when you want to inspect one familiar board without opening the phone. A possible outer-screen experience might put the board first, with large, predictable controls and very little surrounding information. That is a proposal to discuss, not a preview. Would you use it, or would you normally open the device before playing?",
          "The useful distinction is between a smaller board and a smaller task. A miniature version of every screen could be awkward. A deliberately limited view might be easier to understand, but could hide something you rely on. Tell us whether you would prioritise the full board, easier reach, readable symbols or a quick route back to your current position.",
          "One-handed use also varies. A layout that suits someone holding a bag may not suit someone using a stand or assistive input. If reaching the far gate is the problem, say that. If distinguishing a brick’s symbol is the problem, say that instead. Those accounts lead to different design questions even though both could be described as wanting a bigger button.",
          "Ryan et al. (2006) linked perceived competence and autonomy with enjoyment across four game studies. They did not study foldable phones or OutBrick. We use that work as a reason to ask whether a proposed layout would help you understand your actions and choose how to play, rather than assuming that additional display area automatically creates enjoyment."
        ],
        "sourceIds": [
          "ryan-2006"
        ]
      },
      {
        "id": "roomier-inside-view",
        "title": "Possibility two: more room to read a position inside",
        "paragraphs": [
          "Opening the device could, hypothetically, give the same board more breathing room. We could discuss a larger board, clearer spacing around controls or a restrained planning area beside it. A planning area might explain a rule or preserve a player’s own observation. It would not have to reveal a move. None of these possibilities describes functionality we are announcing.",
          "Consider a concrete position: a blue brick must become a stopping point before a red brick can reach its gate. Would a larger view help you spot that dependency? Would information beside the board help, or compete with the route you are trying to read? Tell us which you would choose if space allowed only one improvement.",
          "Pereira et al. (2019) propose a framework for participation-centred game design. It is design research, not a trial showing that our suggested layout works. Its relevance is the invitation to think beyond the finished interface: what role would you want to have while playing, observing or discussing a board? Your answer need not be a specification.",
          "The inner screen might also be somewhere to share the view with another person. That raises an everyday question: would you want the board to stay visually central, with controls close to the person moving bricks? Or do you mostly play alone and want everything within easy reach? Our [approach to designing for real-life play](/blog/designing-for-real-life-play) starts with those circumstances."
        ],
        "sourceIds": [
          "pereira-2019"
        ]
      },
      {
        "id": "folding-and-continuity",
        "title": "Possibility three: a transition that respects your place",
        "paragraphs": [
          "Picture folding the phone halfway through thinking about a route. A possible adaptation could aim to preserve your place, avoid treating the fold as a puzzle move and make the return understandable. Perhaps you would prefer a deliberate pause; perhaps you would prefer an immediate continuation. These are questions about desired behaviour, not promises about automatic saving or a tested transition.",
          "What would help you recognise the position when you reopened it? Some players might want an unchanged selection. Others might prefer no selection, so their first touch cannot accidentally act. A short visual reminder could help one person and be distracting for another. Describing the moment of interruption is more useful than voting for “seamless” in the abstract.",
          "Accessibility belongs in that account from the beginning. If you use VoiceOver, larger text, reduced motion or colour glyphs, tell us what information you need to remain understandable during a layout change. Our [accessibility page](/accessibility) describes existing features; it does not establish behaviour on iPhone Duo. A general accessibility declaration cannot substitute for testing a new device experience.",
          "Khaled and Vasalou (2014) examine participation in serious-game design. OutBrick is not a serious-game intervention, so we do not transfer their outcomes to it. Their discussion provides a useful caution for this invitation: asking people to contribute is only worthwhile when their perspective has room to challenge the designer’s initial idea. “Please keep it simple” is meaningful feedback."
        ],
        "sourceIds": [
          "khaled-2014"
        ]
      },
      {
        "id": "feedback-that-can-shape-a-question",
        "title": "Four questions we would like you to answer",
        "paragraphs": [
          "Sanders and Stappers (2008) describe co-creation as a changing relationship between designers and the people who use what they make. This article is a modest first conversation, not a formal co-design study. We are asking for your experience, rather than claiming that a contact message makes you responsible for a future product decision.",
          "First, would an iPhone Duo adaptation interest you, and why? Second, what would you want to do on the outer screen that feels inconvenient on your current phone? Third, what should the inner screen prioritise: a larger board, clearer controls, optional planning information or something else? Fourth, what should happen when you fold or unfold during a board?",
          "Send your thoughts through our existing [contact page](/contact). A brief description is enough: “I play seated with the phone on a stand, and I would value larger symbols more than extra information.” You do not need to provide personal health information, buy the device or draw a mock-up. Please identify suggestions as ideas, and describe any actual bug separately with the app version and device.",
          "You can also explain what you would give up to get your first choice. If a roomy board means fewer surrounding controls, is that acceptable? If changing layout risks losing your mental map, would you prefer a stable view? Trade-offs help us understand a preference. A long feature list without a situation is harder to interpret.",
          `For released changes, use [What’s new](/whats-new). If you want to understand the existing game before offering an idea, try a [browser board](/play) or [download OutBrick on the Apple App Store](${appStoreUrl('journal-device')}). The browser introduces the movement rule; it does not demonstrate native iPhone Duo behaviour. The question remains yours to answer: what would make opening the screen worth doing?`
        ],
        "sourceIds": [
          "sanders-2008"
        ]
      },
      {
        "id": "official-device-source",
        "title": "Official device source",
        "paragraphs": [
          "Apple. (2026, September 9). Apple unveils iPhone Duo. Apple Newsroom. [Official announcement and availability details](https://www.apple.com/newsroom/2026/09/apple-unveils-iphone-duo/).",
          "The peer-reviewed references below inform the discussion of participation and player preferences. They did not evaluate iPhone Duo or OutBrick."
        ]
      }
    ],
    "references": [
      {
        "id": "khaled-2014",
        "label": "Khaled & Vasalou (2014)",
        "citation": "Khaled, R., & Vasalou, A. (2014). Bridging serious games and participatory design. International Journal of Child-Computer Interaction, 2(2), 93–100.",
        "url": "https://doi.org/10.1016/j.ijcci.2014.03.001",
        "italicParts": [
          "International Journal of Child-Computer Interaction",
          "2"
        ]
      },
      {
        "id": "pereira-2019",
        "label": "Pereira et al. (2019)",
        "citation": "Pereira, L. L., Craveirinha, R., & Roque, L. (2019). A canvas for participation-centered game design. In Proceedings of the Annual Symposium on Computer-Human Interaction in Play (pp. 521–532). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3311350.3347154",
        "italicParts": [
          "Proceedings of the Annual Symposium on Computer-Human Interaction in Play"
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
      },
      {
        "id": "sanders-2008",
        "label": "Sanders & Stappers (2008)",
        "citation": "Sanders, E. B.-N., & Stappers, P. J. (2008). Co-creation and the new landscapes of design. CoDesign, 4(1), 5–18.",
        "url": "https://doi.org/10.1080/15710880701875068",
        "italicParts": [
          "CoDesign",
          "4"
        ]
      }
    ],
    "relatedSlugs": [
      "playing-across-devices",
      "designing-for-real-life-play",
      "one-handed-games-iphone"
    ],
    "pullQuote": "More screen space is useful only when it serves a real activity.",
    "faqs": [
      {
        "question": "Is OutBrick announcing support for iPhone Duo?",
        "answer": "No. This article asks players whether an adaptation would interest them and what they would want from each screen. It does not announce verified compatibility, features or a release date."
      },
      {
        "question": "Is iPhone Duo available now?",
        "answer": "On this article’s publication date, 30 September 2026, Apple had announced pre-orders for 16 October and initial availability for 23 October. Check Apple’s current information for later changes and regional availability."
      },
      {
        "question": "Where can I send my screen ideas?",
        "answer": "Use the existing [OutBrick contact page](/contact). Describe when you play, the improvement you want and what should remain familiar; a short message is enough."
      },
      {
        "question": "Will every suggestion become a feature?",
        "answer": "No feature commitment is made here. Suggestions help us understand players’ priorities and the trade-offs they would accept."
      }
    ]
  },
  {
    "slug": "iphone-puzzle-game-time-limits",
    "title": "Set puzzle-game time limits on iPhone with iOS 27",
    "dek": "Use iOS 27 Screen Time to set Games allowances and scheduled access, check which apps count, and make a practical stopping plan for puzzle play.",
    "category": "Player habits",
    "categoryColor": "blue",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "8 min read",
    "authorId": "outbrick-editorial",
    "image": "/blog/iphone-puzzle-game-time-limits.webp",
    "imageAlt": "Colourful OutBrick bricks and two brick characters arranged around a phone on a navy grid",
    "tags": [
      "screen time",
      "healthy play",
      "iphone",
      "puzzle games",
      "player habits"
    ],
    "intro": "A puzzle has a convenient invitation built into its ending: another board. If you want that invitation to fit around dinner, work or a shared evening, an iPhone setting can support a decision made earlier. In iOS 27, Screen Time uses Time Allowances and Screen Time Schedules. This guide explains those current controls, distinguishes a category allowance from a limit on one game and suggests a way to check the result. It does not prescribe a medically correct number of minutes. The goal is simpler: make the phone’s behaviour match the boundary you actually intended.",
    "keyTakeaways": [
      "In iOS 27, use Settings → Screen Time → Time Allowances for a Games budget; Screen Time Schedule controls when categories are available.",
      "Check which apps belong to the category and whether Share Across Devices is enabled. A category allowance is not a separate allowance for every puzzle.",
      "Choose a boundary around a real commitment, test it and review it. Research does not establish one ideal puzzle-game duration for everyone."
    ],
    "sections": [
      {
        "id": "start-with-the-boundary",
        "title": "Decide what you want the limit to protect",
        "paragraphs": [
          "Before changing a slider, complete a sentence: “I want to stop playing when…” The answer might be when the bus arrives, before preparing dinner or when a planned break finishes. These are different problems. A daily Games allowance concerns accumulated use; a schedule concerns the part of the day in which that use is allowed. A board-clear ritual can support either, but it cannot guarantee a predictable finish time.",
          "OutBrick has move limits rather than a countdown on its boards. That gives you time to think, but it does not set a boundary around the whole session. The operating system’s time control serves a different purpose from the puzzle’s rules. A life refill is also a game system, not an assessment of how much time you should spend playing.",
          "Roffarello and De Russis (2023) reviewed and meta-analysed digital self-control tools, including timers and lockouts. Their work highlights different goals, strategies and evaluation problems. It does not validate iOS 27 or an OutBrick allowance. We take a practical lesson from that variety: define the unwanted behaviour before choosing the tool that is supposed to change it.",
          "If the concern is routinely forgetting an appointment, schedule the relevant period. If it is spending more of the day on games than you intended, inspect the category allowance. If it is simply feeling ready to leave, our guide to [when to play and when to pause](/blog/when-to-play-and-when-to-pause) offers questions a settings screen cannot answer."
        ],
        "sourceIds": [
          "roffarello-2023"
        ]
      },
      {
        "id": "set-a-games-allowance",
        "title": "Set a Games allowance using the iOS 27 menus",
        "paragraphs": [
          "Open Settings, then Screen Time. If activity reporting is off, open Time Allowances and turn on App & Website Activity. Return to Time Allowances, select Games and adjust its amount with the slider or plus and minus controls. This uses the current iOS 27 labels, rather than the App Limits route found in older guides.",
          "Inspect category membership through Manage Categories. Select the category to inspect its average use, then select an app for its usage information. If you need to add Games, use Manage Categories and its add control. Think of a shared pot: time used in one included game contributes to that category’s budget. Do not assume that three puzzle apps each receive the full category amount.",
          "Apple’s guide says use can reach either the category allowance or the daily total. Check both controls if a game becomes unavailable earlier than expected. A declared associated website can also share an app’s allowance, according to Apple; that does not establish how every browser game or this website is categorised. Inspect the actual membership and report rather than guessing.",
          "For the current controls and screenshots, use [Apple’s guide to Screen Time Schedules and Time Allowances](https://support.apple.com/en-gb/guide/iphone/iphb0c7313c9/ios). This article summarises the iOS 27 route checked on 30 September 2026. Older software, language settings or a family-managed device can present a different view, so consult the matching Apple guidance if your controls differ.",
          "If your goal is to limit only OutBrick, avoid silently treating a broad Games allowance as a single-app control. Check the apps shown under the category through Manage Categories and consult Apple’s current guidance if you need more specific control. The steps here establish a category allowance, not a verified separate limit for each app. The important question is which use the control actually counts, not what you called your plan."
        ]
      },
      {
        "id": "schedule-and-shared-devices",
        "title": "Add a schedule, and check the devices involved",
        "paragraphs": [
          "For a regular boundary, open Settings → Screen Time → Screen Time Schedule and turn on Schedule. Add a schedule for the days you need. Edit a Time Window’s name and start and stop times, then choose which Time Allowance categories are available in that window. This lets you distinguish a weekday arrangement from a weekend one.",
          "In Time Allowances, Match Screen Time Schedule connects allowances to scheduled windows. Check the selected window before adjusting a value. A number that looks suitable for an evening may be wrong for a short break. Always Allowed is a separate consideration: inspect it before expecting a schedule to make all apps unavailable.",
          "Next, check Settings → Screen Time → Manage Screen Time → Share Across Devices. Apple says enabled sharing combines settings and reports across an iPhone, iPad and Mac signed in to the same Apple Account. If you intended a phone-only boundary, understand that difference before turning sharing on. A game’s own iCloud progress sync does not define its Screen Time accounting.",
          "Apple says the latest Screen Time features require the current generation of operating systems across relevant devices, including those in a Family Sharing group. Its 14 September announcement introduces category Time Allowances and redesigned family controls. For a child, use the child’s family-managed settings and current Apple family guidance rather than changing only the supervising adult’s usage controls.",
          "Biedermann et al. (2021) reviewed 28 digital self-control interventions. Effects varied; awareness-only interventions were often weak, and confidence in the literature was limited by short studies and small samples. This is not a reason to make a household rule harsher. It is a reason to check whether a reminder, schedule or restriction performs the job you chose for it."
        ],
        "sourceIds": [
          "biedermann-2021"
        ]
      },
      {
        "id": "test-with-a-real-session",
        "title": "Test the boundary before relying on it",
        "paragraphs": [
          "Choose an ordinary session when nothing important depends on the setting. Confirm that the intended puzzle appears in the category. Note whether other games have already used some allowance, and check whether another device contributes to the total. Then observe what happens at the boundary. If you can easily extend access, decide whether that is the intended behaviour for your arrangement.",
          "A useful test includes the exit. Do you know how to leave a board without repeatedly trying to squeeze in a clear? Could you stop after recognising the next dependency and return later? You do not have to finish a puzzle to make the break worthwhile. Choosing a stopping action in advance can be more concrete than hoping that your future self will feel finished.",
          "Parry et al. (2021) analysed discrepancies between logged and self-reported digital media use. Their review found that remembered use often differed from logs. That supports checking the report instead of relying only on “it felt like ten minutes”. A log still does not describe the quality of the session, and it cannot tell whether your chosen boundary is worthwhile.",
          "For the current summary, open Screen Time → Daily Average and inspect Day or Week. Compare days with similar routines rather than interpreting a single unusual afternoon as a verdict. Record the context in a sentence: “I stopped before dinner, but the Games total also included a family game.” That explains more than the total alone.",
          "If a control does not behave as expected, check category membership, the daily total, the selected schedule and shared devices first. Use Apple support for operating-system control issues. Our [OutBrick support page](/support) is the right place for questions about the game’s board or exit behaviour, with the app version and steps needed to reproduce the problem."
        ],
        "sourceIds": [
          "parry-2021"
        ]
      },
      {
        "id": "review-without-a-perfect-number",
        "title": "Review the plan without searching for a perfect number",
        "paragraphs": [
          "A week of following the arrangement can reveal whether it protects the commitment you named. Did you stop when intended? Did a broad category unexpectedly include something you wanted to allow? Did a weekend need a different window? Change the setting in response to those observations, rather than treating its original value as a moral test.",
          "Radtke et al. (2022) reviewed 21 digital-detox studies involving 3,625 participants. Results included positive, null and negative effects across different outcomes and interventions. That mixed evidence does not mean boundaries are pointless. It means reducing use is not a universal guarantee of feeling better, and a modest practical goal is easier to assess honestly.",
          "Our article on [what digital-detox experiments show](/blog/does-digital-detox-work) explains that distinction in more depth. Here, success can be as ordinary as leaving time to cook without a last-minute rush. Families can choose arrangements suited to their circumstances and review them together.",
          `If you are trying OutBrick, the [browser board](/play) can introduce its sliding rule, and [download OutBrick on the Apple App Store](${appStoreUrl('journal-device')}) provides the native app. Review current store compatibility before installing. Neither route changes the Screen Time boundary you chose, and neither obliges you to keep playing when the break ends.`
        ],
        "sourceIds": [
          "radtke-2022"
        ]
      },
      {
        "id": "official-settings-source",
        "title": "Official settings source",
        "paragraphs": [
          "Apple. (n.d.). Set Screen Time Schedules and Time Allowances in Screen Time on iPhone. iPhone User Guide. Retrieved September 30, 2026, from [Apple’s current settings instructions](https://support.apple.com/en-gb/guide/iphone/iphb0c7313c9/ios).",
          "Apple. (n.d.). Set up Screen Time for yourself on iPhone. iPhone User Guide. Retrieved September 30, 2026. This guide supplies the current activity-reporting and Share Across Devices routes.",
          "The studies below concern digital self-control and measurement, not a clinical evaluation of iOS 27 or OutBrick."
        ]
      }
    ],
    "references": [
      {
        "id": "biedermann-2021",
        "label": "Biedermann et al. (2021)",
        "citation": "Biedermann, D., Schneider, J., & Drachsler, H. (2021). Digital self-control interventions for distracting media multitasking—A systematic review. Journal of Computer Assisted Learning, 37(5), 1217–1231.",
        "url": "https://doi.org/10.1111/jcal.12581",
        "italicParts": [
          "Journal of Computer Assisted Learning",
          "37"
        ]
      },
      {
        "id": "parry-2021",
        "label": "Parry et al. (2021)",
        "citation": "Parry, D. A., Davidson, B. I., Sewall, C. J. R., Fisher, J. T., Mieczkowski, H., & Quintana, D. S. (2021). A systematic review and meta-analysis of discrepancies between logged and self-reported digital media use. Nature Human Behaviour, 5(11), 1535–1547.",
        "url": "https://doi.org/10.1038/s41562-021-01117-5",
        "italicParts": [
          "Nature Human Behaviour",
          "5"
        ]
      },
      {
        "id": "radtke-2022",
        "label": "Radtke et al. (2022)",
        "citation": "Radtke, T., Apel, T., Schenkel, K., Keller, J., & von Lindern, E. (2022). Digital detox: An effective solution in the smartphone era? A systematic literature review. Mobile Media & Communication, 10(2), 190–215.",
        "url": "https://doi.org/10.1177/20501579211028647",
        "italicParts": [
          "Mobile Media & Communication",
          "10"
        ]
      },
      {
        "id": "roffarello-2023",
        "label": "Roffarello & De Russis (2023)",
        "citation": "Roffarello, A. M., & De Russis, L. (2023). Achieving digital wellbeing through digital self-control tools: A systematic review and meta-analysis. ACM Transactions on Computer-Human Interaction, 30(4), 1–66.",
        "url": "https://doi.org/10.1145/3571810",
        "italicParts": [
          "ACM Transactions on Computer-Human Interaction",
          "30"
        ]
      }
    ],
    "relatedSlugs": [
      "does-digital-detox-work",
      "when-to-play-and-when-to-pause",
      "screen-time-myths-research"
    ],
    "pullQuote": "The important question is which use the control actually counts, not what you called your plan.",
    "faqs": [
      {
        "question": "Where are puzzle-game time limits in iOS 27?",
        "answer": "Open Settings → Screen Time → Time Allowances and inspect the Games category and its included apps. Screen Time Schedule controls the periods in which categories are available."
      },
      {
        "question": "Does a Games allowance give every game its own time budget?",
        "answer": "No. It applies to the included category’s use, and a daily total may also affect access. Check category membership before treating it as a limit on one particular game."
      },
      {
        "question": "Can my iPad play count towards the same allowance?",
        "answer": "Apple says Share Across Devices combines relevant Screen Time settings and reports across an iPhone, iPad and Mac using the same Apple Account. Check that setting and Apple’s software requirements."
      },
      {
        "question": "How many minutes should I allow for a puzzle game?",
        "answer": "This guide does not prescribe a universal healthy duration. Start with the commitment you want to protect, test the arrangement and review whether it serves that purpose."
      }
    ]
  },
  {
    "slug": "puzzle-game-privacy-labels",
    "title": "Puzzle-game privacy labels: what to check on iPhone",
    "dek": "Read an iPhone puzzle game’s privacy label, distinguish linked data from tracking, compare the policy, and find the controls that affect your choices.",
    "category": "Player habits",
    "categoryColor": "blue",
    "publishedAt": "September 30, 2026",
    "updatedAt": "September 30, 2026",
    "readingTime": "8 min read",
    "authorId": "outbrick-editorial",
    "image": "/blog/puzzle-game-privacy-labels.webp",
    "imageAlt": "Colourful OutBrick bricks and two brick characters arranged around a phone on a navy grid",
    "tags": [
      "privacy",
      "iphone",
      "puzzle games",
      "healthy play",
      "mobile games"
    ],
    "intro": "Two puzzle games can show similar colourful boards and very different privacy disclosures. Before downloading, you can inspect the App Privacy section on their App Store pages. The difficult part is knowing what the headings mean, and what they cannot tell you. A privacy label is a structured statement about data practices, supplied by the developer. It is not a score for trustworthiness or an independent security audit. This guide shows how to read it alongside the policy and your available controls, using OutBrick’s own optional advertising disclosures as a concrete example rather than claiming that our game processes no data.",
    "keyTakeaways": [
      "Read data type, purpose and linkage together. “Not linked to you” still describes collection; “linked” does not automatically mean cross-company tracking.",
      "Compare the label with the policy’s explanation of advertising partners, optional features and controls. Labels are developer declarations, not independent audits.",
      "OutBrick discloses optional rewarded advertising and its SDK’s processing. Review /privacy and /privacy-choices before deciding which features to use."
    ],
    "sections": [
      {
        "id": "find-the-right-label",
        "title": "Start with the exact app and its full label",
        "paragraphs": [
          "Open the game’s App Store page and scroll to App Privacy. Confirm the developer and app name first: screenshots and names can be similar across unrelated puzzles. Expand the details so you can see the purposes attached to individual data types. A broad heading such as Identifiers is a starting point, not the complete account.",
          "Keep three questions together: what information is collected, why is it used and whether it is connected to a person or device. A crash report used to diagnose a fault presents a different question from an identifier used for advertising. Neither can be understood simply by counting how many lines the label contains.",
          "Kelley et al. (2010) compared standardised privacy notices with other formats in an online study. They found improvements in information-finding accuracy and speed under the study’s conditions. That is evidence for making disclosures easier to inspect, not evidence that every modern label is correct. A readable statement and a truthful statement are separate requirements.",
          "You may care most about advertising, a child’s use, account creation or whether a game works without sending gameplay to the studio. Write that priority down before comparing. Our discussion of [dark patterns in mobile games](/blog/dark-patterns-in-mobile-games) concerns how interfaces steer choices; here the aim is to identify the data question you want answered before pressing Download."
        ],
        "sourceIds": [
          "kelley-2010"
        ]
      },
      {
        "id": "linked-not-linked-and-tracking",
        "title": "Read the three headings without collapsing them",
        "paragraphs": [
          "Apple distinguishes information linked to a user from information not linked to a user. Linkage can involve an account, a device or other identifying details; it is not limited to a written name. “Not linked” does not mean nothing leaves the device. It means the declared collection is not connected to the user’s identity under Apple’s rules.",
          "Tracking is a more specific concept in Apple’s framework: it concerns connecting app data with data from other companies for targeted advertising or advertising measurement, or sharing it with a data broker. Data can be linked for app functionality without being declared as tracking. Conversely, the absence of an account signup does not by itself rule out tracking involving a device identifier.",
          "Read the purpose below the heading. Third-Party Advertising, Analytics and App Functionality describe uses, not interchangeable labels for the same practice. Ask who does the processing. An advertising partner’s measurement can be relevant to the app’s disclosure even if the game studio does not run its own gameplay analytics service.",
          "Apple’s [App Privacy Details guidance](https://developer.apple.com/app-store/app-privacy-details/) explains the definitions and includes third-party SDKs in disclosure responsibilities. A permission prompt answers a different question: whether a particular access or tracking permission is granted. Declining a tracking prompt should not be interpreted as a declaration that all collection, including diagnostics or necessary services, stops.",
          "An ordinary comparison might therefore read: “This app declares diagnostic collection for functionality, while this other one also declares advertising identifiers.” That observation is useful. “The first app is perfectly private” is a conclusion the label alone cannot support. Avoid turning a useful summary into a claim about everything the software does."
        ]
      },
      {
        "id": "label-policy-and-update",
        "title": "Use the policy to understand circumstances and partners",
        "paragraphs": [
          "A label summarises categories. The privacy policy should explain circumstances: which optional feature requests an ad, who receives information, what the developer stores and what choices exist. Look for the current date and named services. If the store page and policy seem to conflict, ask a specific question rather than selecting whichever sentence sounds most reassuring.",
          "Li et al. (2022) examined privacy labels and App Store metadata at large scale. Their work concerns label adoption and change over time; it does not audit the puzzle you are considering today. It provides a reason to check whether an app’s disclosure remains current after updates, rather than assuming the label is permanently settled once created.",
          "Be careful with the phrase “we do not collect”. Who is “we”? A developer may mean its own servers, while an integrated ad service processes information for its own purposes. A label is meant to include relevant partners too. You need the fuller explanation to understand whether these statements address different parties or expose an unresolved inconsistency.",
          "Optional use also matters. If you never request a rewarded video, that may change which processing occurs. The presence of an advertising disclosure does not prove you are constantly watching ads, while choosing a reward does not make disclosure unnecessary. Check the policy’s explanation of when the SDK operates and what disabling ads actually changes.",
          "For a family decision, combine this with our guide to [calm games for kids](/blog/calm-games-for-kids). Privacy, suitability, purchase controls and the board’s pacing are separate considerations. An attractive age rating or an untimed puzzle should not stand in for reading the data practices that concern your household."
        ],
        "sourceIds": [
          "li-2022"
        ]
      },
      {
        "id": "outbrick-as-a-worked-example",
        "title": "A worked example: OutBrick and rewarded advertising",
        "paragraphs": [
          "OutBrick’s App Store privacy disclosure, checked on 30 September 2026, includes Location, Identifiers and Usage Data under data used for tracking. The detail includes linked data for advertising, analytics and app functionality, and crash data declared as not linked. This is not a “Data Not Collected” label, and we should not describe it as one.",
          "Our [privacy policy](/privacy) explains that the studio does not operate an account system or receive the game’s local gameplay data, and that progress can sync through the player’s own iCloud account. It also describes Google’s advertising SDK, which is used for optional rewarded videos. That SDK may process identifiers, device information, coarse location inferred from an IP address, ad interactions and diagnostics.",
          "Those statements need to be read together. “No studio analytics SDK” is a narrower statement than “no information is processed by any service”. The store label includes an Analytics purpose, while the policy describes advertising measurement by the partner. We have not independently audited network behaviour in this article. If a particular data category or purpose is unclear to you, ask us to explain it through [contact](/contact).",
          "The [privacy choices page](/privacy-choices) describes the controls: decline a video, revisit Advertising choices in OutBrick Settings where applicable, and review iOS tracking permission under Settings → Privacy & Security → Tracking. It also explains that Remove Ads or an active Brick Pass stops ad requests. These are distinct choices, not one universal privacy switch.",
          "Regional advertising consent and Apple’s tracking prompt are separate. The policy describes consent controls for the European Economic Area, UK and Switzerland. Do not assume a tracking answer also changes every regional consent choice. Read the current screens and policy before making a decision; there is no need to request a video merely to try the basic puzzle."
        ]
      },
      {
        "id": "make-a-comparison-you-can-use",
        "title": "Make a decision, then revisit it when something changes",
        "paragraphs": [
          "Kelley et al. (2013) tested a short privacy display in a 20-participant lab study and a 366-participant online experiment. Presenting clearer information at the point of selection helped participants choose apps requesting fewer permissions. The studies concerned Android-era app selection, not today’s iOS games. Their relevant lesson is about timing: inspect privacy before the download decision, while alternatives are still easy to compare.",
          "Kollnig et al. (2022) compared versions of 1,759 UK App Store apps before and after iOS 14’s privacy changes. They found restrictions on the advertising identifier alongside continuing tracking libraries and sometimes inaccurate labels. That historical sample does not establish wrongdoing by a specific current app. It does show why a label and a permission prompt cannot be treated as independent proof of every data practice.",
          "Use a small comparison you can repeat: the data relevant to your concern, the declared purpose, the explanation of partners and the choice available. A game with more disclosed categories is not automatically the worse option; it might provide a more complete disclosure or offer features you do not intend to use. Unexplained collection, vague policy wording or a missing answer are reasonable grounds to pause.",
          `If OutBrick’s published practices fit your preferences, [download OutBrick on the Apple App Store](${appStoreUrl('journal-device')}) after reading the current listing. If they do not, choose another puzzle. The purpose of this guide is to make that decision informed, including when the result is not our game. Revisit the label and policy after a meaningful feature or advertising change, rather than assuming your first reading covers every future release.`
        ],
        "sourceIds": [
          "kelley-2013",
          "kollnig-2022"
        ]
      },
      {
        "id": "official-privacy-sources",
        "title": "Official privacy sources",
        "paragraphs": [
          "Apple. (n.d.). App privacy details. Apple Developer. Retrieved September 30, 2026, from [Apple’s disclosure definitions](https://developer.apple.com/app-store/app-privacy-details/).",
          "Hamdi, M. (n.d.). OutBrick: Block Sort Puzzle [Mobile app]. App Store. Privacy disclosure consulted September 30, 2026.",
          "OutBrick. (2026, September 24). OutBrick privacy policy: Data, ads and choices. [Privacy policy](/privacy).",
          "OutBrick. (2026, September 24). Your OutBrick privacy choices and controls. [Privacy choices](/privacy-choices).",
          "The peer-reviewed studies below examine privacy communication and platform practices. None independently audited OutBrick."
        ]
      }
    ],
    "references": [
      {
        "id": "kelley-2010",
        "label": "Kelley et al. (2010)",
        "citation": "Kelley, P. G., Cesca, L., Bresee, J., & Cranor, L. F. (2010). Standardizing privacy notices. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 1573–1582). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/1753326.1753561",
        "italicParts": [
          "Proceedings of the SIGCHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "kelley-2013",
        "label": "Kelley et al. (2013)",
        "citation": "Kelley, P. G., Cranor, L. F., & Sadeh, N. (2013). Privacy as part of the app decision-making process. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 3393–3402). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/2470654.2466466",
        "italicParts": [
          "Proceedings of the SIGCHI Conference on Human Factors in Computing Systems"
        ]
      },
      {
        "id": "kollnig-2022",
        "label": "Kollnig et al. (2022)",
        "citation": "Kollnig, K., Shuba, A., Van Kleek, M., Binns, R., & Shadbolt, N. (2022). Goodbye tracking? Impact of iOS App Tracking Transparency and privacy labels. In 2022 ACM Conference on Fairness Accountability and Transparency (pp. 508–520). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3531146.3533116",
        "italicParts": [
          "2022 ACM Conference on Fairness Accountability and Transparency"
        ]
      },
      {
        "id": "li-2022",
        "label": "Li et al. (2022)",
        "citation": "Li, Y., Chen, D., Li, T., Agarwal, Y., Cranor, L. F., & Hong, J. I. (2022). Understanding iOS privacy nutrition labels: An exploratory large-scale analysis of App Store data. In CHI Conference on Human Factors in Computing Systems Extended Abstracts (pp. 1–7). Association for Computing Machinery.",
        "url": "https://doi.org/10.1145/3491101.3519739",
        "italicParts": [
          "CHI Conference on Human Factors in Computing Systems Extended Abstracts"
        ]
      }
    ],
    "relatedSlugs": [
      "dark-patterns-in-mobile-games",
      "calm-games-for-kids",
      "iphone-puzzle-game-time-limits"
    ],
    "pullQuote": "A readable statement and a truthful statement are separate requirements.",
    "faqs": [
      {
        "question": "Does “Data Not Linked to You” mean no data is collected?",
        "answer": "No. It describes collection that the developer declares is not linked to your identity under Apple’s framework. Read the data type and purpose as well as the heading."
      },
      {
        "question": "Is data linked to me always used for tracking?",
        "answer": "No. Linked data can serve app functionality or other purposes. Apple’s tracking definition concerns specified links with other companies’ data or sharing with a data broker."
      },
      {
        "question": "Are App Store privacy labels independently verified by Apple?",
        "answer": "The App Store describes privacy information as provided by the developer and says it has not been verified by Apple. Treat the label as a disclosure to compare with the policy and available controls."
      },
      {
        "question": "Does OutBrick collect no data?",
        "answer": "That would be an inaccurate summary of its disclosure. OutBrick’s policy distinguishes local gameplay and private iCloud progress from optional rewarded advertising, whose third-party SDK may process information described in the policy and store label."
      }
    ]
  }
];
