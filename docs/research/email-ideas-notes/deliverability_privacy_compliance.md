# Email deliverability, privacy and compliance for a small consumer games brand (state as of October 2026)

Scope: what OutBrick (small consumer brand, iOS puzzle game with a possibly young audience, sending newsletters and transactional mail through Resend) must do versus should do. Research date: 9 October 2026. Labels used: **REQUIRED** (a mailbox-provider rule or a law), **RECOMMENDED** (provider or industry best practice), **VENDOR CLAIM** (unverified marketing figure).

## 1. Gmail, Yahoo and Microsoft Outlook.com sender requirements (2024–2026)

### Takeaway
Since February 2024, Gmail and Yahoo require **every sender** to authenticate with SPF or DKIM, have valid forward and reverse DNS, use TLS (Gmail), follow RFC 5322 and keep spam complaints under 0.3%. **Bulk senders** (5,000+ messages a day to that provider) also need SPF and DKIM, a DMARC record (p=none is enough), a From domain aligned with SPF or DKIM, RFC 8058 one-click unsubscribe, a visible unsubscribe link and unsubscribes honoured within 2 days. Microsoft added the same core rules for Outlook.com consumer mailboxes from 5 May 2025. Gmail moved from warnings to rejecting non-compliant mail in November 2025. A small sender below 5,000 a day is not formally "bulk", but meeting the bulk rules costs little and is the safe baseline. Resend's own docs already state the bulk requirements.

### Cited Findings
**Gmail, all senders (from 1 Feb 2024):**
- REQUIRED: SPF or DKIM. Unauthenticated mail "might be marked as spam or rejected with a 5.7.26 error" — [Google: Email sender guidelines](https://support.google.com/a/answer/81126)
- REQUIRED: valid forward and reverse DNS (PTR). The sending IP must match the PTR hostname's A/AAAA record — [Google](https://support.google.com/a/answer/81126)
- REQUIRED: TLS for transmission (added December 2023), RFC 5322 format, no impersonation of Gmail From: headers. Gmail applies DMARC quarantine to gmail.com From addresses — [Google](https://support.google.com/a/answer/81126)
- REQUIRED: Postmaster Tools spam rate below 0.3% — [Google](https://support.google.com/a/answer/81126)

**Gmail, bulk senders (5,000+ a day to Gmail accounts, from 1 Feb 2024):**
- REQUIRED: SPF **and** DKIM, plus DMARC. The DMARC enforcement policy "can be set to none" — [Google](https://support.google.com/a/answer/81126)
- REQUIRED: alignment. For direct mail, the From: domain must align with the SPF or DKIM domain — [Google](https://support.google.com/a/answer/81126)
- REQUIRED: marketing and subscribed mail must support one-click unsubscribe (`List-Unsubscribe-Post: List-Unsubscribe=One-Click` plus an `https` `List-Unsubscribe` URL, per RFC 2369 and RFC 8058) **and** carry a "clearly visible unsubscribe link" in the body. Preference management and auto-unsubscribe after bounces "should not replace one-click unsubscribe" — [Google](https://support.google.com/a/answer/81126)
- DKIM keys must be at least 1024 bits. RECOMMENDED: 2048 bits — [Google](https://support.google.com/a/answer/81126)
- Spam-rate thresholds: RECOMMENDED target "below 0.10%". REQUIRED: "avoid ever reaching a spam rate of 0.30% or higher" — [Google](https://support.google.com/a/answer/81126)
- Note: Google's own guidelines page does not state the 2-day unsubscribe window. That figure comes from Yahoo's page and from Google's FAQ as reported by vendors — [Google](https://support.google.com/a/answer/81126); [Yahoo Sender Hub](https://senders.yahooinc.com/best-practices/)

**Gmail enforcement escalation (November 2025):**
- Several deliverability vendors report that Google began active enforcement in November 2025. Non-compliant bulk mail now gets temporary (4xx) and permanent (5xx) rejections rather than only spam placement. Valimail quotes a Google FAQ update saying that failing messages "will face temporary and permanent rejections" — [Valimail](https://www.valimail.com/?p=11424); [Red Sift](https://redsift.com/blog/gmails-enforcement-ramps-up-what-bulk-senders-need-to-know); [PowerDMARC](https://powerdmarc.com/gmail-enforcement-email-rejection/)
- Postmaster Tools v2 has a Compliance Status dashboard showing pass/fail per requirement — [Red Sift](https://redsift.com/blog/gmails-enforcement-ramps-up-what-bulk-senders-need-to-know) (secondary source; I did not see Google's FAQ text directly)

**Yahoo (enforcement from February 2024, rolled out gradually through the first half of 2024):**
- All senders, REQUIRED: SPF or DKIM, spam rate below 0.3%, valid forward and reverse DNS, RFC 5321/5322 compliance — [Yahoo Sender Hub](https://senders.yahooinc.com/best-practices/)
- Bulk senders, REQUIRED: SPF and DKIM. DMARC "with at least p=none – DMARC must pass" (a `rua` tag is strongly recommended). From: domain aligned with SPF or DKIM, with relaxed alignment acceptable. A "functioning list-unsubscribe header, which supports one-click unsubscribe". RFC 8058 POST is highly recommended and mailto is acceptable. A visible unsubscribe link in the body. "Honor unsubscribes within 2 days." Spam rate below 0.3%, calculated on mail delivered to the inbox — [Yahoo Sender Hub](https://senders.yahooinc.com/best-practices/)

**Microsoft Outlook.com, Hotmail.com and Live.com (from 5 May 2025):**
- REQUIRED for senders of more than 5,000 messages a day to Outlook.com consumer accounts: SPF pass, DKIM pass, DMARC pass with at least p=none and alignment with SPF or DKIM — [Microsoft postmaster policies](https://substrate.office.com/ip-domain-management-snds/postmaster/Policies); [Microsoft Tech Community announcement](https://techcommunity.microsoft.com/blog/outlook/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730) (page body could not be fetched; requirements as summarised by search results and [dmarcian](https://dmarcian.com/?p=20678))
- Non-compliant mail is refused with `550 5.7.515` ("the sender's domain in the 5322.From address doesn't meet the authentication requirements") — [dmarcian](https://dmarcian.com/?p=20678)
- CONFLICT on timing: Microsoft's announcement and postmaster page say non-compliant mail goes to Junk first, with rejection "to be announced". Third-party guides (Suped, Mailercloud) report direct `550 5.7.515` rejections from May 2025 — [Microsoft postmaster](https://substrate.office.com/ip-domain-management-snds/postmaster/Policies); [Suped](https://www.suped.com/learn/email-deliverability/what-are-the-new-microsoft-email-sender-requirements-and-observed-enforcement-bounces); [Egressif](https://egressif.io/resources/sender-requirements/microsoft)
- RECOMMENDED by Microsoft (per secondary summaries): a functional unsubscribe link, a compliant P2 (From/Reply-To) address, and list hygiene / bounce management — [Snov.io summary](https://snov.io/blog/microsoft-outlook-new-email-requirements-for-bulk-senders/) (secondary)
- A message can show SPF pass and DKIM pass yet still fail DMARC if neither authenticated domain aligns with the visible From domain — [Suped](https://www.suped.com/knowledge/email-deliverability/compliance/what-are-microsofts-new-email-sender-requirements-and-how-to-comply)

**Resend implementation:**
- Resend's docs say bulk messages "must include a URL version in your list-unsubscribe header" plus `List-Unsubscribe-Post: List-Unsubscribe=One-Click`. The endpoint must accept a POST at that URL and return 200 or 202 with a blank page, show the normal unsubscribe page on GET, and stop mail within 48 hours. Resend does not manage lists for transactional mail. You can add the header yourself through the API — [Resend docs](https://resend.com/docs/dashboard/emails/add-unsubscribe-to-transactional-emails)
- Resend Broadcasts track topics, segments and unsubscribe preferences on Contacts — [Resend docs](https://resend.com/docs/dashboard/emails/add-unsubscribe-to-transactional-emails)

### Inferences
- OutBrick's volume is well under 5,000 a day per provider, so the bulk rules are not formally binding. But Gmail counts at the domain level, a single launch broadcast could cross the line, and the cost is small. Treat the bulk-sender list as the baseline: SPF, DKIM (2048-bit) and DMARC aligned on the From domain, RFC 8058 headers on every marketing message, a visible footer link, unsubscribes processed immediately (well inside 2 days), and complaints kept under 0.1%.
- Put marketing and transactional mail on separate subdomains (for example `news.` and `mail.`) so a marketing complaint spike cannot hurt sign-in codes and receipts. This is common practice; I found no 2026 primary source for it here.
- DMARC p=none satisfies all three providers, but BIMI (section 2) needs p=quarantine or p=reject at pct=100. Plan to move from none to quarantine to reject after the `rua` reports are clean.

### Gaps
- I could not read the body of Microsoft's announcement or Google's FAQ text describing the November 2025 enforcement step. Both are reported here from secondary sources.
- I found no evidence of a further Gmail, Yahoo or Microsoft rule change dated 2026. The Google guidelines page shows no 2026 policy update.

## 2. BIMI: requirements, certificates, support, cost, effect

### Takeaway
BIMI requires DMARC at enforcement (p=quarantine or reject, pct=100) and, for Gmail, a PEM file holding an SVG Tiny-PS logo and a certificate. A VMC needs a registered trademark and earns Gmail's blue checkmark. A CMC needs no trademark (proof of logo use instead) and shows the logo without a checkmark. Apple Mail, Gmail and Yahoo support BIMI; Microsoft does not. Certificates cost roughly US$650–1,700 a year. I found no independent, controlled study of BIMI's effect on opens.

### Cited Findings
- REQUIRED for Gmail BIMI: "BIMI doesn't support DMARC policies that have the p option set to none". Use p=quarantine or reject with pct=100, and SPF or DKIM first — [Google Workspace: Set up BIMI](https://knowledge.workspace.google.com/admin/security/set-up-bimi)
- Gmail: VMC recommended. CMC acceptable if the logo is not trademarked. A VMC needs a trademark from a recognised IP office, which takes 6–12 months. Gmail shows a checkmark only for VMC senders. The logo must be SVG Tiny Portable/Secure (`baseProfile="tiny-ps"`, `version="1.2"`), at least 96×96 px, ideally 32 KB or less, centred on a solid background. Gmail supports BIMI only through a PEM that embeds the SVG and certificate. The logo can take 48 hours to appear — [Google Workspace](https://knowledge.workspace.google.com/admin/security/set-up-bimi) (page last updated 7 October 2026)
- Supporting BIMI: Apple, Google, Yahoo Inc., Fastmail, Zoho, La Poste, Comcast, Cloudmark, NTT docomo, KDDI, Onet Poczta and others. Considering it: Yahoo Japan, Seznam, mail.com and others. Not supporting it: Microsoft — [BIMI Group infographic](https://bimigroup.org/bimi-infographic/) (updated May 2025)
- Apple's BIMI support dates from autumn 2022 (iOS 16 / macOS Ventura), per the slug of the BIMI Group's linked Apple page — [BIMI Group](https://bimigroup.org/bimi-infographic/)
- CONFLICT: whether Apple Mail accepts CMCs. Several guides say Apple still requires a VMC, and none confirm CMC support in Apple Mail — [CaptainDNS](https://www.captaindns.com/en/blog/bimi-vmc-cmc-certificate-guide); [Gupta](https://guptadeepak.com/guides/gmail-blue-checkmark-bimi/)
- CONFLICT: when Gmail started accepting CMCs (September 2024 versus earlier) — [CaptainDNS](https://www.captaindns.com/en/blog/bimi-vmc-cmc-certificate-guide); [Gupta](https://guptadeepak.com/guides/gmail-blue-checkmark-bimi/)
- Cost (vendor guides, 2026): VMC about US$749–1,688 a year, CMC about US$650–1,100 a year — [CaptainDNS](https://www.captaindns.com/en/blog/bimi-vmc-cmc-certificate-guide). A trademark adds about US$1,000–2,500 and a 10–18 month USPTO wait — [Gupta](https://guptadeepak.com/guides/gmail-blue-checkmark-bimi/). One company's actual renewals: US$999 (2022), then US$1,608 (2025 renewal, DigiCert), later US$850 — [Tallyfy](https://tallyfy.com/engineering-is-bimi-worth-it/)

### Inferences
- For OutBrick, BIMI is a "should later", not a "must". The prerequisite (DMARC p=reject) is worth doing for anti-spoofing whatever happens. A CMC gives a Gmail logo without a trademark. A VMC is needed for the Gmail checkmark and probably for Apple Mail, which is the biggest client for opens (section 3). Whether an "OutBrick" trademark is registered decides which path fits.

### Gaps
- I found no independent, peer-reviewed or methodologically transparent study of BIMI's effect on open rates or trust. Vendor figures, often "+10% opens" style claims, circulate without a traceable method, so none are cited here.

## 3. Apple Mail Privacy Protection, image proxies and what to measure instead

### Takeaway
Apple-family clients account for most tracked opens (about 50%+ in 2025, about 62% in Litmus's July 2026 data). MPP pre-loads tracking pixels, so opens are inflated and unreliable as an engagement signal. Clicks, conversions and in-app outcomes are the trustworthy signals. Sunset and re-engagement rules should key on "no click (or conversion) in N days", not "no open".

### Cited Findings
- Apple's share of email opens was over 50% in Litmus's May 2025 Email Client Market Share report — [Benchmark Email](https://www.benchmarkemail.com/blog/mail-privacy-protection) (secondary, citing Litmus)
- In Litmus's July 2026 data (over 1 billion opens), the Apple family (Apple Mail, iPhone, iPad, MPP) was 62.26%, Gmail 27.03%, Outlook 5.83%, Yahoo 2.59% — [Webtonic summary of Litmus](https://www.webtonic.io/blog/open-rate-statistics); [Litmus market share](https://www.litmus.com/email-client-market-share). The figure bundles Apple products and is not MPP alone.
- MPP pre-loads images but does not click links, so clicks still measure a deliberate human action. A rule like "suppress after no opens in 90 days" behaves unpredictably under MPP — [Suped](https://www.suped.com/knowledge/email-deliverability/technical/how-does-apple-mail-privacy-protection-mpp-affect-the-tracking-of-email-opens-and-clicks-and-how); [Mailflow Authority](https://mailflowauthority.com/email-deliverability/email-engagement-signals)
- MPP does not itself affect deliverability. The risk is measurement error in your own logic — [GetResponse](https://www.getresponse.com/help/what-is-apple-mail-privacy-protection-and-how-does-it-affect-our-deliverability.html)
- Some benchmark reports now publish opens with and without MPP. Brevo's entertainment figure was 21.26% excluding MPP versus 37.45% including it — [Brevo](https://www.brevo.com/blog/email-marketing-benchmarks/)
- One suggested definition of "engaged": a click within 120 days or a conversion within 180 days — [Mailflow Authority](https://mailflowauthority.com/list-hygiene/sunset-policies-guide)

### Inferences
- OutBrick has a better signal than most senders: the player's own app activity. A subscriber who launched the game, cleared a board or opened a deep link from the email is engaged even with zero tracked clicks. Joining Resend click events, and UTM or Universal-Link opens, to in-app sessions gives a sunset signal that MPP cannot inflate.
- Report open rate only as a directional trend, and only excluding Apple machine opens where the ESP can separate them. Make click-through rate, click-to-conversion (deep link to a board start) and unsubscribe and complaint rates the primary KPIs.
- Turning off open tracking for transactional mail removes a tracking pixel at little cost, which also fits the privacy posture expected for a young audience.

### Gaps
- I did not fetch a primary source on the Gmail image proxy's caching behaviour (it fetches images via Google's servers and caches them, which hides the reader's IP and repeat opens). It is not cited here.
- I did not confirm whether Resend can flag Apple MPP machine opens separately.

## 4. Preference centers, frequency control and Gmail's "Manage subscriptions"

### Takeaway
Frequency is the most-cited reason people unsubscribe, and Gmail made leaving one click away from a list of senders sorted by volume (July 2025). Offering topic choice, "fewer emails" and pause options is good practice. The often-quoted 20–30% reduction in unsubscribes is a vendor claim without strong primary evidence. Bulk senders still need a one-click full unsubscribe; a preference center cannot replace it.

### Cited Findings
- Gmail launched "Manage subscriptions" on 8 July 2025. It sits in the left navigation, lists senders sorted by how often they write with counts over recent weeks, and unsubscribes in one click by having Gmail send the request on the user's behalf, with no confirmation or visit to the sender's site — [Google Workspace Updates](https://workspaceupdates.googleblog.com/2025/07/manage-email-subscriptions-in-gmail.html); [Google blog](https://blog.google/products/gmail/new-manage-subscriptions-unsubscribe/); [BetaNews](https://betanews.com/2025/07/09/google-launches-manage-subscriptions-for-gmail/)
- Rollout: web immediately, then Android (about 14–15 July) and iOS (21 July 2025) — [PPC Land](https://ppc.land/gmail-adds-new-way-to-stop-unwanted-emails/); [BetaNews](https://betanews.com/2025/07/09/google-launches-manage-subscriptions-for-gmail/)
- Google says preference management "should not replace one-click unsubscribe" — [Google](https://support.google.com/a/answer/81126)
- CAN-SPAM allows a menu of opt-out choices but it must include an option to stop all marketing messages — [FTC CAN-SPAM guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)
- The all-industry unsubscribe rate in MailerLite's 2025 data was 0.22%, more than double 2024's 0.08%. MailerLite links part of this to Gmail making one-click unsubscribe easier — [MailerLite benchmarks](https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks)
- VENDOR CLAIM / unverified: Gmail's subscription view caused unsubscribe spikes of 50–300% in its first six months — [Clean.email](https://clean.email/blog/insights/email-subscription-fatigue-statistics). I could not verify this.
- Why people unsubscribe:
  - Sinch Mailgun survey (n≈2,000, about 2024): "too many emails" was the top reason at about 20% — [Mailgun](https://www.mailgun.com/blog/email/understanding-unsubscribes/)
  - ZeroBounce 2026 report: 43% (or 44% in another citation) give excessive sending as the main reason — [ZeroBounce](https://www.zerobounce.net/email-statistics-report)
- VENDOR CLAIM on preference centers: a preference center reduces unsubscribes by 20–30%, plus a single SendGrid case of a 20% drop — [Sender](https://www.sender.net/blog/email-preference-center/); 15–30% of unsubscribe clickers adjust preferences instead — [Mailgenius](https://www.mailgenius.com/email-preference-center-2/). These figures appear to circulate between vendors.
- Counterpoint: only a small fraction of subscribers use preference centers, and stated preferences differ from behaviour — [Practical Ecommerce](https://www.practicalecommerce.com/?p=97939)

### Inferences
- Under Gmail's view, the senders at the top of the list are the frequent ones, so a low, predictable cadence (for example a monthly newsletter plus genuinely event-driven mail) is itself unsubscribe protection.
- A minimal, credible preference center for OutBrick:
  - topics (news and updates, events and live ops, tips) mapped to Resend topics
  - a frequency choice ("monthly digest only")
  - a "pause for 30/90 days" snooze
  - an always-visible "unsubscribe from all"
- The RFC 8058 one-click path must unsubscribe immediately and must not route to the preference page. The preference page is the footer-link destination only.
- Measure the preference center's effect on your own list (unsubscribe-page sessions that end in a downgrade versus a full opt-out) instead of quoting the vendor 20–30%.

### Gaps
- I found no independent controlled study, academic or ESP-published with method, quantifying how much pause or "opt down" options reduce unsubscribes or complaints.

## 5. Sunset policies, re-permission and reputation

### Takeaway
There is no standard. Common practice is to start re-engagement after about 90 days without a click (60–90 days for daily senders, 90–120 for weekly, 150–180 for monthly, up to 12 months for newsletters), run a short 2–3 email win-back, then suppress non-responders at about 180 days. Re-adding suppressed contacts needs a fresh opt-in. Sending re-engagement mail to all inactives at once can itself damage reputation, so stage it.

### Cited Findings
- Typical pattern: 90 days without opens or clicks leads to re-engagement. If that fails (14–30 days), stop sending, and remove at 180 days of total inactivity — [Mailflow Authority](https://mailflowauthority.com/list-hygiene/sunset-policies-guide)
- Scale the window by frequency: daily 60–90 days, weekly 90–120, monthly 150–180, with the clock starting after a failed re-engagement — [Mailflow Authority](https://mailflowauthority.com/email-deliverability/sunset-policies)
- 90–180 days for standard programmes and 12 months for newsletters — [emailcalculator glossary](https://emailcalculator.com/glossary/email-sunset-policy)
- Re-engagement length differs by source: 2–3 emails over 4–6 weeks — [Scalero](https://scalero.io/company/blog/implementing-an-email-sunset-policy); a 3-email sequence over 10–14 days — [senderreputation.org](https://senderreputation.org/blog/email-sunset-policy-re-engagement-win-back-guide); remove non-responders after 7–14 days — [Omnisend](https://support.omnisend.com/en/articles/3405334-what-is-an-email-sunset-policy)
- Do not just move inactives to a lower-frequency list: "if they're not engaging weekly, they won't engage monthly either" — [Mailflow Authority](https://mailflowauthority.com/list-hygiene/sunset-policies-guide)
- Spamhaus warns that sending to all unengaged users at once "is a sure-fire way to destroy your reputation", so stage it — [Spamhaus](https://www.spamhaus.org/resource-hub/deliverability/what-is-an-email-sunset-policy-and-why-do-you-need-one/)
- Suppressed contacts cannot be bulk re-subscribed. They must opt in again — [Omnisend](https://support.omnisend.com/en/articles/3405334-what-is-an-email-sunset-policy)
- Win-back recovery of about 5–12% is often quoted but has no traceable primary study (noted by the search synthesis; treat as unverified).

### Inferences
- For OutBrick's likely cadence (monthly to biweekly), a defensible policy is:
  - Treat a subscriber as inactive when there has been no email click **and** no app session for 120 days.
  - Send a 2-email re-permission ("Still want OutBrick news?") over about 2 weeks, in small batches.
  - Suppress at about 180 days.
  - Transactional mail (receipts, sign-in) continues regardless.
- Using in-app activity as an engagement signal keeps active players who read in Apple Mail without clicking from being wrongly sunset.

### Gaps
- I found no Validity, Google or Yahoo primary document setting a specific inactivity window. Mailbox providers publish no number, and all windows above are industry convention.

## 6. Legal: GDPR/ePrivacy, Germany, CAN-SPAM, CASL, LGPD, Japan, children (COPPA, UK AADC), App Store

### Takeaway
Use opt-in consent everywhere: an unticked box, separate from the terms, never a condition of play. Keep auditable consent records (who, when, what wording, which form version, source, any withdrawal). Use double opt-in at least for Germany and preferably globally. Include sender identity, a postal address and a working unsubscribe in every marketing message. For a game that may attract under-13s or under-18s, COPPA (amended rule fully in force since 22 April 2026) and the UK Children's Code make marketing opt-ins off by default and require parental consent for under-13s. Apple requires email collection in apps to be optional, with no feature locked behind it.

### Cited Findings
**EU/UK GDPR and ePrivacy:**
- The controller must be able to demonstrate consent (accountability). Recommended records: who consented, when, the form or message shown, the checkbox ticked, the source of the opt-in, and any later withdrawal — [Securiti](https://securiti.ai/blog/proof-of-consent/); [Litmus](https://www.litmus.com/blog/5-things-you-must-know-about-email-consent-under-gdpr)
- The Bavarian DPA's 2025 activity report (as summarised) says a date, IP address and timestamp alone are not enough to prove effective, informed consent — [Ailance / 2B Advice, 31 Mar 2026](https://2b-advice.com/en/2026/03/31/proof-of-effective-consent-for-direct-advertising/)

**Germany:**
- The GDPR does not name double opt-in, but German case law (BGH) places the full burden of proof on the sender, which makes double opt-in the de facto requirement. Commentary says the BGH expects the confirmation email itself to be retrievable as evidence — [Suped](https://www.suped.com/learn/email-deliverability/which-countries-require-double-opt-in-for-email-marketing-according-to-gdpr-and-best-practices); [publicare](https://publicare.de/en/blog/promotional-email-sending-14-common-myths) (secondary; BGH judgments not read directly)

**US CAN-SPAM** (applies to commercial mail regardless of volume) — [FTC CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business):
- Accurate From/To/Reply-To and routing information, non-deceptive subject lines, and clear identification as an advertisement.
- A valid physical postal address: a street address, a registered USPS PO box, or a registered private mailbox (CMRA).
- An opt-out that works for at least 30 days after sending and is honoured within 10 business days. No fee, no data beyond the email address, at most a reply email or a single web page. No selling or transferring opted-out addresses.
- A menu of choices is allowed if it includes "stop all".
- Transactional and relationship messages are largely exempt, but mixed messages are judged by primary purpose (subject line and placement).
- Penalty up to US$53,088 per violating email.

**Canada CASL:**
- Express consent must be a positive opt-in (no pre-ticked box), sought separately from terms, stating the purpose and identifying the sender — [McMillan LLP](https://www.mcmillan.ca/mobile/Enforcement-Advisory-Keeping-Records-of-Consent-under-CASL)
- Section 13 puts the burden of proving consent on the sender. The CRTC recommends keeping evidence of consent, the collection method, CASL policies, and all unsubscribe requests and resulting actions — [McMillan / CRTC advisory](https://www.mcmillan.ca/mobile/Enforcement-Advisory-Keeping-Records-of-Consent-under-CASL)
- Express consent does not expire until withdrawn — [CASL FAQ](https://www.canadianadvertisinglaw.com/casl-anti-spam-law-faqs/)
- CONFLICT on record retention: one guide says keep records for 3 years after the relationship ends; the CRTC FAQ says no retention period is prescribed — [sendcheckit](https://sendcheckit.com/blog/casl-compliance-guide); [CRTC FAQ](https://crtc.gc.ca/eng/com500/faq500.htm)

**Brazil LGPD:**
- Consent must be free, informed, unambiguous and specific (Art. 5 XII, Art. 7 I). Pre-ticked boxes fail. Consent does not transfer to buyers of lists — [Hosaki Law](https://hosakilaw.com/en/posts/lgpd-email-marketing-legal-basis-brazil/); [WebLegal](https://weblegal.ai/en/blog/lgpd-email-marketing-purchased-lists-brazil-2026/)
- Fines are up to 2% of Brazilian revenue, capped at R$50M per infraction — [mailtester](https://mailtester.com/blog/brazil-lgpd-email-marketing-consent/)
- Double opt-in is not legally required but strengthens proof — [mailtester](https://mailtester.com/blog/brazil-lgpd-email-marketing-consent/)
- Using legitimate interest for existing customers is contested — [Serpro](https://www.serpro.gov.br/lgpd/noticias/lgpd-e-mail-marketing-newsletter-impactos)

**Japan, Act on Regulation of Transmission of Specified Electronic Mail (Act No. 26 of 2002, opt-in since the 2008 amendment):**
- Opt-in: advertising email may only go to people who requested or agreed to it in advance (Art. 3(1)), with exceptions such as people who gave their address to the sender, or who have a business relationship with it. The Act covers for-profit senders advertising their own or others' business — [Japanese Law Translation](https://www.japaneselawtranslation.go.jp/en/laws/view/3767/en); [Monolith Law](https://monolith.law/en/it/e-mail-newsletter-opt-in-procedure)
- Each message must show the sender's name and address and an address or URL for opt-out requests, among other items set by MIC order — [MIC pamphlet](https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_pamphlet.pdf); [Japanese Law Translation](https://www.japaneselawtranslation.go.jp/en/laws/view/3767/en)
- Senders must retain records of consent (Art. 3(2) and the Enforcement Regulation) — [Monolith Law](https://monolith.law/en/it/e-mail-newsletter-opt-in-procedure)
- Penalties: up to 1 year's imprisonment or ¥1M for individuals, up to ¥30M for corporations, for false sender information or for ignoring orders — [Monolith Law](https://monolith.law/en/it/e-mail-newsletter-opt-in-procedure)

**US COPPA (children under 13):**
- The amended Rule was published 22 April 2025 and effective 23 June 2025. Full compliance was required by 22 April 2026, and the FTC is enforcing from that date — [Davis Polk](https://www.davispolk.com/insights/client-update/ftc-prioritizes-coppa-enforcement-new-compliance-obligations-take-effect); [Loeb & Loeb](https://www.loeb.com/en/insights/publications/2025/05/childrens-online-privacy-in-2025-the-amended-coppa-rule)
- An email address is "online contact information" and therefore personal information. Collecting it from a child under 13 requires verifiable parental consent (subject to narrow exceptions) — [Fenwick](https://fenwick.com/insights/publications/privacy-alert-coppa-amendment-impacts-apps-ads-and-social-networks); [Benesch](https://www.beneschlaw.com/resources/overview-of-certain-critical-amendments-to-the-children-s-online-privacy-protection-act-coppa-rule.html)
- The FTC's policy statement of 25 February 2026 limits enforcement where mixed or general-audience services collect data solely to verify age. Conditions: use limited to age checks, security, deletion afterwards, and notice — [Davis Polk](https://www.davispolk.com/insights/client-update/ftc-prioritizes-coppa-enforcement-new-compliance-obligations-take-effect)

**UK Age Appropriate Design Code (Children's Code), ICO games guidance:**
- Optional uses of personal data, including personalised offers, default to off until valid consent is given (from a parent or guardian for under-13s) — [MFMac](https://www.mfmac.com/insights/data-protection/ico-issues-advice-to-games-designers-to-comply-with-the-children-s-code/); [RPC](https://www.rpclegal.com/snapshots/data-protection/spring-2023/ico-publishes-guidance-on-compliance-of-game-design-with-the-childrens-code/)
- The marketing opt-in must be separate from accepting the terms and privacy policy, and profiling for marketing is off by default — [MFMac](https://www.mfmac.com/insights/data-protection/ico-issues-advice-to-games-designers-to-comply-with-the-children-s-code/)
- The ICO runs a monitoring programme on ten popular mobile games — [Handley Gill](https://www.handleygill.co.uk/handley-gill-blog/information-commissioner-ico-monitoring-mobile-games-childrens-code-age-appropriate-design-code)

**Apple App Store Review Guidelines:**
- 5.1.1(x): apps may request basic contact information such as email "so long as the request is optional for the user, features and services are not conditional on providing the information", and it complies with the rules on kids — [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- 5.1.1(v): apps that support account creation must offer in-app account deletion — [Apple](https://developer.apple.com/app-store/review/guidelines/)
- 4.8 Login Services: apps offering third-party login must also offer an option that limits data to name and email and lets the user hide their email, typically Sign in with Apple — [Apple](https://developer.apple.com/app-store/review/guidelines/)
- Hide My Email relay addresses (`@privaterelay.appleid.com`) only forward mail from sending domains registered with Apple's Private Email Relay service — [Wikipedia: Sign in with Apple](https://en.wikipedia.org/wiki/Sign_in_with_Apple) (secondary; confirm in Apple developer docs)
- Apple deleted the old 3.1.3 provision that barred using in-app sign-up data to email users about purchasing outside IAP — [App Store Review Guidelines History](https://www.appstorereviewguidelineshistory.com/articles/2024-03-08-updated-policies-features-and-clarifications/)

### Inferences
- One global consent design satisfies all regimes most simply. The design:
  - an unticked opt-in, separate from any terms, stating the sender (OutBrick and the company) and the purpose
  - double opt-in confirmation
  - a stored consent record: timestamp, source surface (app or website), locale, exact wording and form version, IP or user agent, the confirmation-click timestamp, and a retained copy of the confirmation email
  - a postal address plus "this is an advertisement / promotional" identification and a working unsubscribe in every marketing footer (CAN-SPAM, Japan)
  - unsubscribes processed instantly, which beats every legal deadline (2 days for Gmail and Yahoo, 10 business days for CAN-SPAM)
- Children: if OutBrick's App Store age rating, content or audience could be child-directed, do not offer the newsletter to users who may be under 13 without verifiable parental consent. A neutral age gate before the opt-in is the usual approach. UK users under 18 get marketing opt-ins off by default and no marketing profiling.
- In-app collection must stay optional and never gate a feature or reward. Under OutBrick's own AGENTS-style economy rules that also means no reward for subscribing, which also avoids "freely given" consent problems in the EU.
- If Sign in with Apple is used, register the Resend sending domains with Apple's Private Email Relay. Otherwise transactional and marketing mail to relay addresses is silently dropped.

### Gaps
- I did not read the BGH judgments or ANPD guidance directly. German and Brazilian points rely on law-firm and vendor commentary.
- I did not confirm the current Japanese ministerial ordinance on how long consent records must be kept. One unverified 2008 blog says one month after the last email.
- I did not verify the EU ePrivacy "soft opt-in" (existing-customer exception) details per member state in this pass.

## 7. Benchmarks: open, click, unsubscribe, complaint; send times

### Takeaway
Benchmarks vary wildly by vendor and by whether MPP opens are included. Games and entertainment open rates range from about 18% to 57%. Use clicks of roughly 2–5%, unsubscribes under 0.2–0.5% per send and complaints under 0.1% as the operating guardrails. Send-time data is mostly global or US/EU (morning about 8–11 local, Tuesday or Thursday), and there is nothing reliable for Japan. Test on your own list.

### Cited Findings
**Open rates:**
- MailerLite 2025 (3.6M campaigns): Entertainment and events 46% open, Games 41.35% open. All-industry click 2.09%, unsubscribe 0.22% (up from 0.08% in 2024) — [MailerLite](https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks)
- Omnisend 2025: Games 36.85% open with 0.19% conversion. Arts and Entertainment 34.15%. Cross-industry 30.22% — [Omnisend](https://www.omnisend.com/blog/email-marketing-benchmarks/)
- Brevo 2026: Entertainment 21.26% open excluding MPP (37.45% including), CTR 2.64%, unsubscribe 0.43% — [Brevo](https://www.brevo.com/blog/email-marketing-benchmarks/)
- WebFX 2026: Media, entertainment and publishing 18.10% open, 3.10% CTR, 0.10% unsubscribe — [WebFX](https://www.webfx.com/blog/marketing/email-marketing-benchmarks/)
- Designmodo 2026: Entertainment and events 57% open, 5% CTR, 0.51% unsubscribe — [Designmodo](https://designmodo.com/email-marketing-benchmarks-by-industry/)

**Guardrails:**
- Unsubscribe rate: under 0.5% is good and under 0.2% excellent — [ActiveCampaign](https://www.activecampaign.com/glossary/email-marketing-benchmarks)
- Complaint (spam) rate guardrails are the provider thresholds: target under 0.10%, never 0.30% or more — [Google](https://support.google.com/a/answer/81126); [Yahoo](https://senders.yahooinc.com/best-practices/)

**Send times:**
- Litmus (2021 data): US opens rise from 6am to a 10am peak. Europe stays steadier through working hours, with a lunchtime dip and a second peak — [Litmus](https://www.litmus.com/blog/whats-the-best-time-to-send-email-we-analyzed-billions-of-email-opens-to-find-out/)
- Vendor guide windows: US East 8–10 AM, US West 7–9 AM, Central Europe 8–10 AM CET, UK 9–11 AM, weekdays — [emaillistvalidation](https://emaillistvalidation.com/blog/best-send-times-for-email-campaigns-across-us-europe/) (no dataset shown)
- Day of week: Tuesday ranks best in 2025 studies, with Thursday close — [Customer.io](https://customer.io/learn/lifecycle-marketing/email-sending-schedule). Thursday is best in another analysis — [Maileroo](https://maileroo.com/blog/best-time-to-send-email). In HubSpot's 2025 marketer survey, 27% of US marketers name Tuesday — [Customer.io](https://customer.io/blog/best-time-to-send-email/)
- Time of day: opens peak at about 10 AM (Mailchimp), clicks peak at 8–9 PM on weekdays (MailerLite). Omnisend reports 8 PM sends at a 59% open rate (MPP-inflated) — [Maileroo](https://maileroo.com/blog/best-time-to-send-email); [Beehiiv](https://www.beehiiv.com/blog/best-times-to-send-a-newsletter)

### Inferences
- For a casual puzzle game, the evening click peak (8–9 PM local) may match play sessions better than the generic 10 AM open peak. Send in the recipient's time zone and A/B test morning versus evening on clicks and app sessions, not opens.
- Benchmark only against one vendor's same-year, same-definition numbers. Brevo's "excluding MPP" figure (about 21%) is the most honest open-rate comparator.

### Gaps
- I found no complaint-rate benchmarks specific to gaming.
- I found no reliable 2025–2026 send-time data for Japan or other Asian markets.
- I could not reach Mailchimp's own benchmark page, so no Mailchimp gaming figures are cited.
