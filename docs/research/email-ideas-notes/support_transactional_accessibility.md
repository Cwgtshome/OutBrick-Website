# Support, transactional email, accessibility and localization: what best-in-class looks like

Researched 9 October 2026. Scope: support-email lifecycle and benchmarks, mobile-game player support, transactional email craft, trust signals, accessible email, localization. Source quality is labelled throughout: **[measured]** = primary data with a stated sample; **[vendor]** = vendor-published case study or self-reported figure; **[policy]** = mailbox-provider or statute text; **[opinion]** = practitioner advice without data. Many search results came back as summaries of secondary sources. Where I could not reach the primary source, the note says so.

## 1. Support email lifecycle and benchmarks (acknowledgement, updates, resolution, CSAT/CES, reopen, proactive fixes, deflection)

### Takeaway
Measured benchmarks for email support cluster around a first response of roughly 6–7 calendar hours and ticket CSAT near 80–90 %. CSAT emails get low response rates (about 6–15 %), so in-app surveys usually reach more players. The best-documented timing practice is Zendesk's: send the survey about 24 hours after a ticket is marked Solved, so the player can check the fix first. Ratings start with one click in the email and finish on a landing page. I found no game-specific public benchmark; Helpshift publishes only vendor case studies.

### Cited Findings
**First response time and CSAT benchmarks**
- [measured, vendor-collected] Freshworks' 2023 Customer Service Benchmark Report puts average ticket (email) first response at about **6 h 47 min in calendar hours**, chat at about 3 min, and **ticket CSAT at 89.58 %**. The 2022 edition reported 6.0 h and 79.40 % CSAT on a median composite, so the two years may not be comparable. — [Freshdesk Benchmark Report 2023](https://www.freshworks.com/freshdesk-benchmark-report-2023-automation-ai-cx-blog); [Freshworks Benchmarking Report PDF](https://www.freshworks.com/assets/resources/Freshworks_Customer_Service_Benchmarking-Report.pdf)
- [vendor] Freshworks says email can leave customers waiting up to seven hours for a first response, against under two minutes with chatbots. — [Freshdesk Benchmark Report 2023](https://www.freshworks.com/freshdesk-benchmark-report-2023-automation-ai-cx-blog)
- [method] The Zendesk Benchmark tracks CSAT, first reply time and ticket volume in **calendar hours, not business hours**. It takes each account's mean and then the median across peer accounts, filtered by industry, audience and size. A gaming comparison is available only inside Zendesk Admin Center. — [About the Zendesk Benchmark](https://support.zendesk.com/hc/en-us/articles/207729238)
- [measured, historical] Zendesk's Q3 2013 benchmark found average CSAT of 82 % and that slower first responses go with lower satisfaction. This is more than ten years old. — [Zendesk press release](https://www.zendesk.com/company/press/zendesk-benchmark-q3-customer-satisfaction-rise-still-short-social-expectation-uk)
- [measured, survey] Zendesk CX Trends 2025, released November 2024, surveyed more than 10,000 consumers and business leaders. The India release says 70 % would switch after one bad experience, up 9 % year on year. A secondary roundup gives the global figure as 63 %. The often-quoted "73 % leave after one bad experience" is **not** a Zendesk number. — [Zendesk 2025 CX Trends newsroom](https://www.zendesk.com/newsroom/articles/2025-cx-trends-report); [CRN India](https://www.crn.in/?p=68408); [Macha roundup](https://www.getmacha.com/blog/customer-service-expectations-statistics)
- [secondary] A secondary roundup cites Zendesk CX Trends 2026: 88 % of customers expect faster responses than a year earlier, and 74 % expect 24/7 service because of AI. I did not verify this against the primary report. — [Macha roundup](https://www.getmacha.com/blog/customer-service-expectations-statistics)

**CSAT survey mechanics**
- [product behaviour] Zendesk sends the email CSAT survey **about 24 hours after a ticket is set to Solved**. The delay lets the customer confirm the fix and avoids a second survey if the ticket is reopened and solved again. Zendesk's in-app messaging survey appears immediately after solve. After picking a rating, the customer lands on a page to confirm it and add an optional comment. — [Macha: Zendesk CSAT explained](https://www.getmacha.com/blog/zendesk-csat-explained); [Zendesk: customize CSAT surveys](https://www.zendesk.kr/blog/customize-csat-surveys)
- [product behaviour] Gorgias sends 2 hours after close unless configured otherwise. — [Macha: Gorgias CSAT explained](https://www.getmacha.com/blog/gorgias-csat-explained)
- [product behaviour] Chatbase's email survey shows Good and Bad buttons that open a confirm-and-comment page. Sending is delayed so a mistaken close can be undone, and **a ticket is surveyed at most once, ever**. — [Chatbase satisfaction surveys](https://www.chatbase.co/docs/user-guides/chatbot/help-desk/satisfaction-surveys)
- [vendor, attributed to SurveyPal] Survey response rates by channel: **email 6 %, website 8 %, iOS in-app SDK 16 %**. — [Kustomer CSAT guide (PDF, Jan 2025)](https://staging4.kustomer.com/wp-content/uploads/2025/01/Kustomer-Guide_CSAT-Ratings.pdf)
- [opinion] One Jira Service Management vendor puts typical B2B email CSAT response at 8–15 % and treats anything under 8 % as a process problem. It argues for sending within about 5 minutes of resolution, which contradicts Zendesk's 24 hours. — [Meta-Inf: JSM CSAT response rate](https://myra.meta-inf.hu/blog/jsm-csat-response-rate)
- [opinion] A response rate has to be reported next to the score. "95 % at 5 % response" says something very different from "85 % at 40 %". Email responders skew towards the very happy and the very unhappy. — [eesel: Zendesk CSAT good vs bad](https://www.eesel.ai/blog/zendesk-csat-good-vs-bad-rating); [Macha: Zendesk CSAT explained](https://www.getmacha.com/blog/zendesk-csat-explained)
- [unverified] A range attributed to Zendesk, but not confirmed against a Zendesk source: below 70 % needs work, 70–85 % is good, above 90 % is exemplary. — [eesel](https://www.eesel.ai/blog/zendesk-csat-good-vs-bad-rating)

### Inferences
- A realistic, honest promise for a small team is **"we reply within one working day"** in the acknowledgement email. It should carry a case ID and a reply-to-continue thread. Industry email first response averages about 7 calendar hours, so promising "within hours" would invite misses.
- For OutBrick the CSAT ask should live **in-app first**, at about 2.7 times the email response rate (16 % vs 6 %). The email fallback should go out about 24 hours after solve, with a two-button or five-face one-click rating, at most once per case, and with a reopen path in the same email ("Still not fixed? Reply to this email and the case reopens").
- A "fixed in version X" proactive email is a natural closing step for bug tickets. Report the response rate alongside CSAT, or the score means little.

### Gaps
- I found no public, game-specific benchmark for first response or CSAT from Zendesk, Helpshift or Intercom. Zendesk's industry filter is behind Admin Center, and its webinars are gated.
- I found no measured data on customer effort score in email, and no study of known-issue broadcast emails versus deflection.
- I did not retrieve Intercom's or Gorgias's own published benchmark reports.

## 2. How mobile game studios handle player support by email

### Takeaway
Leading mobile studios (Supercell, SYBO, Huuuge, Gameloft, KRAFTON) route support **in-game first**, through Helpshift or Zendesk SDKs. Email is the identity and recovery channel, not the front door. Tickets are keyed to a player ID. Purchase transaction IDs serve as proof of ownership, and recovery codes may be given only to agents inside the in-game ticket. The public CSAT gains are vendor-reported.

### Cited Findings
- [primary, Supercell support] Supercell's account-recovery flow sends players to in-game **Settings › Help and Support**. The player supplies player tag/ID, account name and level, clan, and **purchase transaction IDs**; purchase history is strong evidence but not required. Supercell can recover accounts not linked to a Supercell ID by creating one and asking for a fresh email address. — [Supercell: I've lost access to my account](https://support.supercell.com/clash-royale/en/articles/ive-lost-access-to-my-account.html); [Clash Royale help article](https://support.clashroyale.com/hc/en-us/articles/49484924553243)
- [primary, Supercell support] Recovery codes and SMS codes may be shared only with Supercell agents, and agents ask for them **only in tickets opened through in-game Help and Support**. This is an anti-phishing rule built into the support channel. — [Supercell: I've lost access to my account](https://support.supercell.com/clash-royale/en/articles/ive-lost-access-to-my-account.html)
- [vendor] Helpshift with SYBO (Subway Surfers): CSAT rose to **4.3/5** and deflection reached **95 %** in under three months. Its AI translation feature averaged 4.45 CSAT. — [Keywords Studios: SYBO case study](https://www.keywordsstudios.com/en/case-studies/sybo-increase-csat-automation-rate-with-helpshift)
- [vendor] Huuuge: CSAT 3.9 overall and **4.8 for VIP issues**, 79 % deflection, time to first response down 21.3 %. KRAFTON: CSAT up 13 %. Jam City roughly doubled CSAT after moving to an in-game knowledge base and messaging. These come from the same vendor family; scales and windows differ. — [Keywords Studios: Social Quantum / Helpshift](https://www.keywordsstudios.com/en/case-studies/helpshift-social-quantum-delivering-the-modern-support-journey); [eesel: Helpshift review](https://www.eesel.ai/blog/helpshift-ai-review)
- [vendor] Gameloft found that QR-code-launched support gave the largest CSAT gain of any KPI it tracked. No score was given. — [Keywords Studios: QR code console support](https://www.keywordsstudios.com/en/case-studies/leveling-up-console-support-a-game-changing-qr-code-experience)
- [vendor] Zendesk's case study for mobile game company Nexters reports first response and full resolution times **down 90 %** through integrations and automation. — [Zendesk: Nexters](https://www.zendesk.com/au/customer/nexters/)
- [vendor] Helpshift is owned by Keywords Studios and now markets itself as an AI-native player engagement platform for games. — [eesel: Helpshift review](https://www.eesel.ai/blog/helpshift-ai-review)

### Inferences
- For OutBrick, every support email (acknowledgement, update, resolution) should carry the **player reference** and the app version. It should never ask for a password or a code by email, and should say so in the footer: "We will never ask for your password".
- Purchase problems on iOS are App Store refunds and restores. The email should link Apple's "Report a Problem" flow and the in-app **Restore Purchases**, and ask for the Apple order ID (from the Apple receipt email) rather than card details.
- Splitting VIP and payer cases, as Huuuge does, produced the highest vendor-reported CSAT (4.8 vs 3.9). Prioritising purchase cases is a cheap equivalent.

### Gaps
- I found no public data on refund-dispute rates by support channel, or on email versus in-app CSAT inside games. King and Nintendo support practices did not come up in searches, so I have no sourced claims for them.

## 3. Transactional email excellence (sign-in and magic links, security alerts, account changes, data export, receipts)

### Takeaway
Best practice is a **separate transactional stream** (own IP and From address, ideally a subdomain), **one purpose per message**, no promotional content in receipts or alerts, link tracking **off** for authentication links, and magic links that need a confirm click so mail scanners cannot consume the token. Gmail's guidelines say the same about separation and not mixing content.

### Cited Findings
- [policy, Google] Gmail asks for a **consistent From address per category**, for example separate addresses for receipts, promotions and account alerts. If multiple IPs are used, use one per message type. **Do not mix content types**, such as promotions inside sales receipts. — [Google: Email sender guidelines](https://support.google.com/a/answer/81126)
- [vendor, Postmark] Postmark recommends separating transactional from other traffic. When bulk and transactional mail share IPs, receivers may treat time-sensitive mail as bulk and delay it. Postmark's Transactional and Broadcast streams use different IPs and From domains automatically. — [Postmark: Can I send bulk emails?](https://postmarkapp.com/support/article/can-i-send-bulk-emails)
- [documentation, Postmark] Postmark's link tracking defaults to **None**. When tracking is on, links are rewritten through Postmark's click domain. — [Postmark: tracking links](https://postmarkapp.com/developer/user-guide/tracking-links)
- [practitioner] Mail clients and security scanners open URLs for previews and scans, which can use up single-use magic links. The fix is an interstitial page where the user's own click spends the token. — [Nhost: Protect your magic links from email clients](https://nhost.io/blog/protect-magic-links-from-email-clients); [Bubble forum: Outlook flags magic link](https://forum.bubble.io/t/magic-link-flagged-by-outlook-as-unsafe/244486)
- [practitioner] A magic link is only as secure as the inbox it goes to. Use MFA or a second factor for sensitive actions. — [Postmark: magic links](https://postmarkapp.com/blog/magic-links)
- [primary, Stripe docs] Stripe sends a receipt only for successful payments; failed or declined payments get none. — [Stripe: receipts](https://docs.stripe.com/payments/advanced/receipts)
- [opinion] A UX review praised Stripe's receipt for putting the amount, date paid and payment method across the top. — [UX Collective: I've got the receipts](https://uxdesign.cc/ive-got-the-receipts-bc82b93bfb3b)
- [opinion, vendor] Transactional mail should be expected, timely and actionable, with the main message at the top, the action where readers expect it and details below. Use one column, 16 px minimum text, buttons at least 44 px tall, and check with images off and in dark mode. Plain text is the safest format. — [Bento email design guide](https://bentonow.com/posts/email-design-guide); [Stripo transactional templates](https://stripo.email/templates/type/transactional)

### Inferences
- OutBrick's Resend setup should mirror these practices. Use separate subdomains, From addresses and Resend topics for **account and security** (sign-in, email change, data export, deletion confirmation), **support**, and **news**. Keep link and open tracking off for the account and security set. Send every message with a plain-text part.
- Security alerts should describe the event (what changed, when, from which device or approximate location) and give one "This wasn't me" action. They should contain **no live token**.
- Data-export emails should say how long the link lives, and should be sent only to the address already on file.

### Gaps
- I found no published design write-ups from Linear, Notion or Airbnb on their transactional emails, and no measured data on expected delivery time for a magic link (for example, "under 10 s").

## 4. Trust signals (BIMI, verified logos, sender names, DMARC, avoiding phishing look-alikes)

### Takeaway
Gmail and Yahoo require authentication for bulk senders. BIMI logos need **DMARC at enforcement** (quarantine or reject), not p=none. Gmail's blue check and Apple Mail's logo need a **VMC**, which requires a registered trademark. A CMC gets a logo in Gmail without the check.

### Cited Findings
- [policy, Google] From 1 February 2024, all senders to Gmail need SPF or DKIM, valid forward and reverse DNS, TLS, RFC 5322 formatting and a spam rate **below 0.3 %** (target below 0.1 %). Senders of 5,000+ a day also need SPF, DKIM and DMARC (p=none allowed), From-domain alignment, and **one-click unsubscribe** (List-Unsubscribe plus List-Unsubscribe-Post) with a visible body link on marketing and subscribed mail. DKIM keys must be at least 1024 bits; 2048 is recommended. Unauthenticated mail may be rejected with error 5.7.26. — [Google: Email sender guidelines](https://support.google.com/a/answer/81126)
- [secondary] Transactional mail is generally exempt from the one-click unsubscribe rule, but a message with promotional content may fall under it. Unsubscribes must be honoured within two days. Yahoo also asks forwarders to use ARC. — [Bird: Gmail/Yahoo requirements](https://bird.com/docs/knowledge-base/deliverability/gmail-yahoo-requirements); [Bounteous](https://www.bounteous.com/insights/2024/01/31/2024-gmail-and-yahoo-deliverability-changes/)
- [practitioner, 2026] BIMI needs aligned SPF and DKIM and DMARC at p=quarantine or p=reject (pct=100); p=none does not qualify. A VMC needs a registered trademark. A CMC needs proof the logo has been used commercially for at least 12 months. Gmail shows CMC logos **without** the blue check. Apple Mail and iCloud Mail need a VMC (as of May 2026). Outlook had not adopted BIMI by mid-2026. Sources disagree on when Gmail began accepting CMCs (September 2024 or early 2025). — [Red Sift: BIMI in 2026](https://redsift.com/blog/bimi-in-2026-verified-logos-cmcs-and-the-fastest-path-to-inbox-display); [CaptainDNS: BIMI/VMC/CMC](https://www.captaindns.com/en/blog/bimi-vmc-cmc-compatibilite-dns); [Gupta: BIMI costs 2026](https://guptadeepak.com/guides/gmail-blue-checkmark-bimi/)
- [vendor pricing, unverified] A VMC costs about $750–1,400 a year. — [Gupta: BIMI costs 2026](https://guptadeepak.com/guides/gmail-blue-checkmark-bimi/)
- [policy, Google] Don't impersonate Gmail From headers. Use one address in From, and a From that matches the category of the message. — [Google: Email sender guidelines](https://support.google.com/a/answer/81126)
- [primary, Supercell] Supercell's rule that codes are requested only in in-game tickets is an example of a support channel designed against phishing. — [Supercell support](https://support.supercell.com/clash-royale/en/articles/ive-lost-access-to-my-account.html)

### Inferences
- In order: move DMARC to p=quarantine after a monitoring period, then reject, on the outbrick.site sending domains. Use one stable display name ("OutBrick") with a function suffix only where it helps ("OutBrick Support"). Send every link to outbrick.site or apps.apple.com only. Do not use URL shorteners or tracking redirects in account mail.
- A VMC depends on whether the OutBrick mark is a **registered trademark**. Without one, a CMC gives a Gmail logo only, and Apple Mail, where most opens happen (section 5), would show nothing.

### Gaps
- I did not retrieve Apple's own BIMI documentation or Yahoo's primary sender page, so the Apple VMC-only claim rests on 2026 practitioner sources.

## 5. Accessibility in email (WCAG for email, semantic HTML, alt text, contrast, dark mode, screen readers, reduced motion)

### Takeaway
Almost every commercial email fails automated accessibility checks. The Email Markup Consortium's 2025 report found that **99.89 % of 443,585 emails** had Serious or Critical issues, and the 2026 report found 99.88 % of 376,348. Most failures are cheap to fix: `lang` and `dir` attributes, `role="presentation"` on layout tables, alt text, link text and contrast. Gmail supports neither `prefers-color-scheme` nor `prefers-reduced-motion`, so dark mode and reduced motion must not depend on media queries.

### Cited Findings
- [measured, primary] **EMC Accessibility Report 2025**: 443,870 emails were collected from May 2024 to May 2025, and 443,585 were analysed with the Parcel checker. **99.89 %** had Serious or Critical issues. Only **21 emails** passed every automated check, all from two brands built by one author. As the most severe issue per email, 60.66 % had Critical and 39.23 % Serious. — [EMC Accessibility Report 2025](https://emailmarkup.org/en/reports/accessibility/2025/)
- [measured, primary] Most common issues in the 2025 report (share of emails affected):
  - missing `dir` on body content: 98.14 %
  - missing `lang` on body content: 96.67 %
  - layout tables without `role="presentation"` or `role="none"`: 86.24 %
  - no `h1`: 76.78 %
  - links without discernible text: 72.04 %
  - `<html>` missing `lang`: 67.01 %
  - insufficient contrast: 59.37 %
  - images missing alt text: 51.42 %
  - missing `<title>`: 41.35 %
  - non-descriptive link text: 17.62 %
  - links distinguishable only by colour: 16.91 %

  — [EMC Accessibility Report 2025](https://emailmarkup.org/en/reports/accessibility/2025/)
- [measured, primary] Trend: emails with Critical issues fell from 66.68 % in 2024 to 60.66 % in 2025. The report credits MJML with improving its defaults after earlier reports. — [EMC Accessibility Report 2025](https://emailmarkup.org/en/reports/accessibility/2025/)
- [measured, primary] Of 44 email clients tested against 20 accessibility HTML/CSS features, only SFR webmail supports all 20. **Apple Mail**, Samsung Email and Proton Mail come close. Legacy Outlook for Windows and Yahoo Mail support 7 of 20, and T-online.de (2) and WEB.DE (3) are among the worst. **No Gmail client supports `prefers-color-scheme` or `prefers-reduced-motion`.** ARIA, focus and hover pseudo-classes and preference media queries are often unsupported. — [EMC Accessibility Report 2025](https://emailmarkup.org/en/reports/accessibility/2025/)
- [measured, secondary] The 2026 EMC report analysed 376,348 emails, of which **99.88 %** had Serious or Critical defects, almost unchanged. I did not reach the primary 2026 page. — [beSpacific: Email Accessibility Report 2026](https://www.bespacific.com/?p=125394)
- [measured, Litmus] Email client share in April 2025: Apple Mail about 49 %, Gmail about 28 %, Outlook about 8 % (1.3 billion opens). Litmus's July 2026 report says Apple Mail and Gmail together make up nearly 90 % of opens. One secondary source gives Apple 62.26 %, Gmail 27.03 % and Outlook 5.83 %, with Apple inflated by Mail Privacy Protection. **Dark mode is used by over 25 %** of users. MPP affects roughly 55–60 % of opens, so open rates are unreliable. — [NSW Gov email design system](https://email.designsystem.nsw.gov.au/development/email-client-support); [Litmus email client market share](https://www.litmus.com/email-client-market-share); [Courier: dark mode email design](https://www.courier.com/blog/dark-mode-email-design)
- [regulatory context, secondary] The European Accessibility Act applies from 28 June 2025, and email marketers are urged to comply. — [Customer.io: European Accessibility Act](https://customer.io/learn/privacy-and-security/european-accessibility-act)
- [practitioner] Resend's accessibility tips cover semantic HTML, alt text, contrast and descriptive links. Resend is OutBrick's email provider. — [Resend: 6 tips for accessible emails](https://resend.com/blog/6-tips-for-accessible-emails)

### Inferences
- A short **OutBrick email accessibility checklist** would put OutBrick ahead of more than 99.8 % of senders:
  - `<html lang dir>` and `lang` on the body wrapper, set per locale (Arabic would need `dir="rtl"`)
  - `role="presentation"` on every layout table
  - one `h1` and a `<title>`
  - meaningful alt text, or `alt=""` on decorative images
  - link text that names its destination ("Open your case", not "click here")
  - links underlined, not marked by colour alone
  - body text contrast of at least 4.5:1, checked in both light and dark
  - live text instead of text baked into images
  - no auto-playing GIFs carrying content

  Run every template through Parcel's checker in CI, as the report recommends.
- Since Gmail ignores `prefers-color-scheme`, design for **forced dark mode inversion**: transparent PNG logos with a light outline, no pure-white images on white, and colours that survive inversion. Use media queries only as an enhancement for Apple Mail. Most opens are in Apple Mail, where VoiceOver users will read OutBrick mail, so test there first.
- Under the EAA, players in the EU may reasonably expect this as a baseline.

### Gaps
- I found no measured study showing that accessible emails perform better (clicks or conversions). I also did not retrieve hands-on screen reader behaviour data (VoiceOver in Apple Mail, TalkBack in Gmail) beyond the EMC feature-support matrix.

## 6. Localization (language choice, send times, cultural adaptation, legal footers by country)

### Takeaway
Localize the language from the player's app or account locale, not from IP. Adapt register, not just words: Japanese mail should be formal and low on emoji, German formal with room for longer subject lines, Brazilian Portuguese warmer. The legal rules differ: Japan's opt-in law requires the sender's name, address and an opt-out address in marketing mail; Germany expects double opt-in and an Impressum; Brazil's LGPD needs specific, unbundled consent for marketing.

### Cited Findings
- [opinion, vendor blogs] Translation alone is not localization: tone, imagery and offers change by market, and translators should be based in the target country even when the language is shared. A casual, exclamation-heavy email with emojis can read as unprofessional in Japan yet land well in Brazil. German recipients expect a more formal tone and Frau/Herr salutations, and German subject lines may need about 70 characters against about 50 in English (a rule of thumb). — [Interpro: Think global, email local](https://www.interproinc.com/think-global-email-local/); [Omnisend: email localization](https://www.omnisend.com/blog/email-localization/); [Really Good Emails academy](https://academy.reallygoodemails.com/course/how-to-master-the-art-of-email-localization)
- [opinion, vendor webinar] In Japan, mobile-first behaviour and messaging apps such as LINE change the role email plays. — [Stripo: email marketing in East Asia](https://stripo.email/amp-version/webinars/beyond-translation-what-global-brands-get-wrong-about-email-marketing-in-east-asia)
- [statute] Japan's **Act on Regulation of Transmission of Specified Electronic Mail** (Act No. 26 of 2002) has been **opt-in** since 2008 (Art. 3). Marketing mail must show that it is specified email, the sender's **name and address**, and an email address for opt-out (Art. 4 bars mailing after opt-out). Penalties reach one year in prison or ¥1 million, and up to ¥30 million for corporations. — [Japanese Law Translation: Act No. 26 of 2002](https://www.japaneselawtranslation.go.jp/en/laws/view/3767/en); [Monolith Law: opt-in procedure](https://monolith.law/en/it/e-mail-newsletter-opt-in-procedure)
- [practitioner, not legal advice] Germany's Impressum is the mandatory provider-identification notice: name and legal form, address, contact details, and register and VAT numbers where applicable. One merchant blog says order confirmations must include it, and that marketing mail needs prior consent with double opt-in as the norm. Whether every marketing email must carry the full Impressum is not settled in these sources. — [IONOS: Impressum requirements 2025](https://www.ionos.com/digitalguide/websites/digital-law/a-case-for-thinking-global-germanys-impressum-laws.md); [Raxxo: German e-commerce legal requirements](https://raxxo.shop/blogs/lab/german-e-commerce-legal-requirements-for-solopreneurs)
- [secondary] Brazil's **LGPD** (in force since 2020) has no email-specific clause. Consent must be free, informed, unmistakable and purpose-specific, and pre-ticked boxes are unlikely to count. Data collected for a purchase cannot be reused for marketing without a specific opt-in. The Brazilian Code of Conduct for Email Marketing favours consent but recognises soft opt-in. Fines reach 2 % of revenue, capped at R$50 million per infraction. — [Validity: legal bases for email marketing under LGPD](https://www.validity.com/blog/towards-lgpd-and-beyond-legal-bases-for-email-marketing/); [EmailOctopus: email marketing regulations Brazil](https://emailoctopus.com/blog/email-marketing-regulations-brazil); [Serpro (gov.br): LGPD and email marketing](https://www.serpro.gov.br/lgpd/noticias/lgpd-e-mail-marketing-newsletter-impactos)
- [policy, technical] EMC found that 96–98 % of emails lack `lang` and `dir` attributes. These attributes are what tell screen readers which voice and language to use for localized mail. — [EMC Accessibility Report 2025](https://emailmarkup.org/en/reports/accessibility/2025/)

### Inferences
- OutBrick already ships 12 locales. Each email should go out in the **player's chosen app language**, stored on the account, with an English fallback. Each template should carry the matching `lang` attribute. Japanese, German and Brazilian Portuguese copy should be reviewed by a native speaker for register, not only translated.
- Every marketing footer should carry the same baseline, which meets the strictest of the three markets: sender legal name, postal address, a contact address, a one-click unsubscribe and a link to the website's legal notice. Transactional and support mail should never carry promotions, which keeps them out of marketing rules.
- The time zone for news mail should come from the device or account; support and transactional mail should go out immediately.

### Gaps
- I found no measured, 2021–2026 data on localized send times by country, or on how much localization lifts engagement. The Japan, Germany and Brazil cultural guidance is vendor opinion. I did not reach the current Japanese ministerial ordinances (display details), the German statutory text (DDG §5, formerly TMG §5), or ANPD guidance. Confirm all three with counsel before relying on them.
