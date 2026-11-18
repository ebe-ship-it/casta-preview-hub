---
name: non-ai-website
description: >
  Design, build, audit, and refine distinctive, authentic, high-quality websites that do not
  look or read like generic AI-generated templates. Research the business before asking the
  user anything, answer internal discovery questions yourself, ask at most a few essential
  owner-only questions, then build intentional visual direction, human copy, original
  compositions, rich well-choreographed motion, genuine component integrations, responsive implementation,
  and evidence-based quality assurance, source-library research, Google SEO, local discoverability, and AI-search visibility. Use for new websites, redesigns, landing pages,
  websites with premium animation, website critique, and production readiness reviews.
---

# NON AI WEBSITE

**Purpose:** Build websites that feel art-directed, specific to their subject, credible, memorable, genuinely useful, and technically excellent. Avoid the shallow sameness that can result from uncritically accepting a generated template.

**Important:** “Non-AI” describes the *quality standard*, not a claim about how the work was made. You may use AI, image generation, code generation, motion libraries, and automation. Never misrepresent authorship, product capabilities, user reviews, business facts, or testing.

## Operating rules

1. **Research first; ask last.** Start with the brief and provided assets. When appropriate tools are available, independently research the named business, verified public details, existing website, brand style, customers, competitors, relevant references, and functional destinations. Fill the decision matrix yourself. Ask only what cannot responsibly be resolved from evidence or sensible defaults. **Zero questions is a valid and often ideal outcome.**
2. **Questions are expensive.** Default to **0–3 user questions total** for a typical website, not per round. Prefer one essential question at a time. Do not send an intake form, a 15-question list, or an entire bank. If the user wants immediate code, make low-risk assumptions and build. Stop only for a genuine blocker that cannot be researched or assumed without misleading or unsafe consequences.
3. **Never force minimal motion.** The number of animations is not a quality metric. A site can be richly animated, experimental, dimensional, and cinematic. The standard is **coherent choreography, relevance, usability, performance, and fallback behavior**, not fewer effects by default.
4. **Make identity specific.** Establish what this business, community, person, product, or event really is. Design *for it*, not for an abstract idea of a “premium website.”
5. **Use real content and evidence.** Verify business facts, prices, services, claims, operating hours, product descriptions, identities, and availability before publishing. Clearly mark proposed copy or unverified information in internal handoff notes; do not invent testimonials, metrics, awards, partners, or working integrations.
6. **Every component earns its place.** Distinctive layouts and animation are welcome. Explain each component's job, source, actual behavior, states, device adaptation, and contribution to the visitor's journey.
7. **Preserve references faithfully.** Inspect supplied visual references, videos, code, screenshots, and brand assets before translating them. Distinguish directly observed behavior from inference. Do not claim to implement an original open-source component if only a visual approximation was built.
8. **Implement the requested deliverable.** Do not replace a requested website with a mood board, plan, or “finished” screenshot. If the user requests a single `index.html`, deliver complete runnable code in that file unless a documented technical constraint makes an alternative essential; explain the tradeoff.
9. **Test, then report.** Do not say “responsive,” “works,” “production-ready,” “audited,” or “tested” without evidence. A pretty static preview is not a functional test.
10. **Respect access and ownership.** Use appropriately licensed assets, attribution, fonts, components, and imagery. Generated visuals must not fabricate documentary evidence about real people, products, or places.
11. **Reject AI-default aesthetics by default.** Never use violet-to-blue mesh gradients, glowing purple blobs, generic SaaS glass cards, uniform Bento grids, pseudo-3D orbs, identical rounded pills, emoji icon arrays, or polished nonsense copy *as automatic choices*. They may be used **only when the specific brand, references, or content justify them**. The problem is copy-and-paste art direction, not the hue purple or the technique gradient.
12. **Do the work instead of interrogating the owner.** Research public facts; infer design tactics; assemble a coherent proposal; build and test. Reserve user attention for private priorities, permissions, high-stakes truth claims, legal rights, and critical project decisions.
13. **Inspect component libraries before inventing.** Review at least ten relevant original-source catalogs when available, record precise component names and links, and select the best source code. **Review ten; do not install ten.** Do not add a component simply to satisfy a quota.
14. **SEO and AI discoverability are release requirements.** Build pages that humans, Google Search, and eligible AI search engines can understand: crawlable HTML, accurate metadata, canonical URLs, suitable structured data, meaningful local/entity facts and verifiable helpful content. Never promise #1 rankings, Google indexing, or AI citations.

---



# RESEARCH-BASED PRINCIPLES — WHAT THIS SKILL PREVENTS

This section summarizes external research (linked in **Research and reference standards** at the end), then translates it into operational design rules. **It does not claim that every AI-generated website has these defects.** The failure mode is accepting a superficially polished output without deliberate design review.

1. **Prompt specificity matters (NN/g).** Vague AI design instructions can produce repeated UI, poor hierarchy, and incoherent spacing. **Do:** start from real content, references, dimensions, interaction states, and brand constraints. **Do not:** accept a template because it looks vaguely premium.
2. **Animation has jobs (NN/g).** Motion can clarify relationships, status changes, and spatial navigation, and can also overwhelm attention. **Do:** preserve cinematic ambition but choreograph focal points. **Do not:** force people to watch the same transition before every task.
3. **Carousels require UX engineering (Baymard).** Users can miss important content when carousels are difficult to operate. **Do:** provide obvious navigation and deliberate manual control; make important items reachable elsewhere. **Do not:** rely on a fast auto-rotating hero for critical messages.
4. **Performance is measurable (web.dev).** Prefer composited animation where feasible; measure rather than assume smoothness. **Do:** optimize paints, GPU use, image loads, and responsiveness. **Do not:** equate large libraries or many simultaneous RAF loops with quality.
5. **Accessibility includes motion and controls (W3C, MDN).** Build a comparable usable interface for keyboard, touch, zoom, and reduced-motion modes. WCAG 2.2 **2.3.3 Animation from Interactions is AAA**, while other relevant motion, contrast, focus, input, and flashing requirements may apply at A/AA; do not mislabel them.
6. **Dialog focus is a first-class feature (WAI-ARIA APG).** A modal needs an accessible name, focus placement, contained focus, Escape behavior, and focus return. A beautiful overlay that traps scrolling incorrectly is broken.
7. **People-first content matters (Google Search Central).** AI content is not automatically bad or disallowed; low-value mass-generated content and misleading claims are the problem. **Do:** provide specific helpful information with real evidence.
8. **Frontend security matters (OWASP).** Never pass untrusted strings directly into `innerHTML`; use safe DOM creation/escaping or trusted sanitization, and treat dependencies and third-party scripts as attack surface.

**Interpretation:** The goal is not “less animation,” “fewer sections,” “no AI,” “always minimal,” or “one trendy aesthetic.” The goal is **a distinctive art-directed site, abundant *well-integrated* motion where appropriate, authentic content, discoverable functionality, and verifiable quality**.

## Priority order when instructions conflict

1. User safety, honest representation, legal/asset rights and security.
2. Content truth and required functionality.
3. Explicitly approved references, brand identity, and requested component fidelity.
4. Accessibility, discoverability, and usability.
5. Motion art direction and visual originality.
6. Performance and maintainability, optimized **without silently removing approved interactions**.
7. Personal implementation preferences (framework, file layout, decorative details).

When a genuine conflict exists—such as a source component that cannot run inside a mandated single HTML file—state the specific incompatibility, recommend the smallest truthful resolution, and proceed with everything that can be completed. Do not secretly change the brief or claim completion.

# PHASE 0 — RESEARCH FIRST, ASK ALMOST NOTHING

**Hard default:** For an ordinary website assignment, the AI conducts the discovery. The user should not have to act as the researcher, art director, content strategist, and developer.

## 0A. Read the brief and recover known decisions

- Parse the current request, actual files/screenshots/videos, project instructions, accessible prior decisions, and URLs.
- Identify deliverable and scope. If the task is to build, do not turn it into a questionnaire or a long strategy document.
- Identify approved constraints and preserve them; never ask again about something already specified.
- List internally what the user **knows and owns** (permissions, real contact destinations, subjective preferences) versus what the AI **can research or decide** (public facts, visual analysis, technical architecture).
- Mark each decision `VERIFIED`, `USER-CONFIRMED`, `REASONABLE PROPOSAL`, `UNKNOWN`, or `CONFLICTING`. Do not pass off a proposal as confirmed evidence.

## 0B. Research the actual business before asking it questions

When public research is relevant and tools are accessible, search efficiently, **without asking permission to look up public business facts**:

1. **Official business website:** exact name, offer, services, products, menu, business story, locations, contacts, logo, fonts, brand colors, downloadable media, social accounts, existing conversion paths.
2. **Verified first-party channels:** official social accounts, owned business listings, news/posts, event announcements, downloadable menus and catalogs, product documentation, current customer FAQs.
3. **Map/business listings:** address, directions, categories, opening hours, photos, contact numbers, public reviews as *subjective feedback*, not guaranteed facts or permission to reuse photos.
4. **Relevant competitors and category leaders:** identify opportunities and conventions, not a template to copy. Respect brand boundaries and rights.
5. **Design/motion references and official source repos:** inspect visual references, component names and variants, original implementation dependencies, licensing, performance and accessibility behavior.
6. **Search behavior and customer language:** identify common tasks from actual offerings, public FAQs and independently visible user needs. Avoid inventing demographic personas or fabricated survey results.
7. **Image licensing/provenance:** collect links and source details; public availability does **not** mean permission to republish or edit.

**Evidence ranking:** authoritative current first-party information > credible updated owned listing > supported professional/independent sources > individual reviews/third-party directories > inference. When conflict exists, preserve it as an open verification, do not quietly select the most convenient answer. Never invent current prices, hours, availability, bookings, team identities, reviews, awards, or official image rights.

**If tools or web browsing aren't available:** use what is provided, label unknowns, propose reasonable design defaults, and continue. Never claim to have researched a source you could not access. Do not fabricate web-derived content to avoid a question.

**If the business is unnamed or ambiguous:** ask for only the name or website (and location only when needed to disambiguate) and then resume research.

## 0C. Answer the questions yourself where possible

| Decision area | Who should resolve it | Rule |
|---|---|---|
| What does this business offer? | AI researches official public sources | Summarize and verify rather than asking user to repeat website text |
| Address, hours, published prices, current menu, contact | AI researches; owner confirms conflicts before launch | Treat third-party differences as uncertainties |
| Logo, images, existing palette, website font, visual personality | AI inspects official materials and assets | Never assume generated decorative imagery is actual business photography |
| Competitor conventions, mobile expectations, SEO basics, responsive patterns | AI researches and designs | Don't ask owner to design the whole system |
| Site layout, color proportions, typography roles, scroll choreography | AI proposes intelligently from evidence | User may override; don't ask dozens of microscopic preference questions |
| Framework, libraries, file organization, compression, lazy loading | AI chooses based on deliverable | Explain tradeoffs only if they change the user-facing result |
| Actual primary business priority or desired conversion | User only if not explicit/obvious and materially consequential | One short direct question; otherwise propose and label |
| Subjective style or disliked reference | User only if evidence is insufficient and a wrong decision would be costly | Offer two concrete researched directions, not an abstract 10-question interview |
| Private assets, credentials, booking destination, publish permission | User/authorized owner | Never fabricate, search for private information, or silently deploy |
| Regulated/legal claims, testimonials, precise KPIs, image licenses | Verified authority/rights holder | No guessing; flag for approval |

Do **not** ask the user questions like “Which color should the button be?”, “How many pixels of padding?”, “Should the cards be rounded?”, “Which animation library should I use?”, or “What is your target audience?” if obvious audience tasks can be responsibly derived from the business and the explicit request. These are design tasks for the AI.

## 0D. Minimal user interview protocol

- **Default: 0 questions.** If the request and research are sufficient, immediately act.
- **Typical incomplete brief: 1–3 critical questions TOTAL.** Prefer a single conversational question if one dimension blocks progress.
- **Absolute normal limit: 3 questions in the initial exchange.** Do not ask more later simply to satisfy an internal checklist. Further questions require a new, genuine blocker or an explicit user request for deeper consultation.
- **Explicit deep strategy interview:** only when the user **requests** extensive questions, offer short rounds of 3–5 and stop the instant sufficient decisions are available.
- **If user says “build now,” “you decide,” or seems overwhelmed:** ask zero non-blocking questions; pick professional defaults, verify external facts, build.
- **No form unless multiple independent inputs are unavoidable and collecting them together is clearly more convenient.**
- **Never ask the owner to search a public website, supply publicly visible menu details, evaluate code libraries, list competing websites, or choose technical implementation details on the AI's behalf.**
- If owner input is needed, ask plainly, explain the impact in a few words, and allow “you choose.”

**Only three useful questions for a completely unspecified project (choose the missing ones, not necessarily all):**

1. **“Which business or website are we building for?”** (Needed to research the right subject.)
2. **“What one thing should most visitors do—book, enquire, visit, read, or buy?”** (Only if priorities are unclear.)
3. **“Is there anything you want me to preserve or absolutely avoid?”** (Only if redesign constraints are unknown and important.)

**Example research-first response, not a mandatory template:**

> “I checked the business's official site and found its products, imagery, colors, location and contact route. I can handle layout, typography, and motion. I need one decision before the build: should the main action be reservations or enquiries? If you don't mind, I'll recommend reservations.”

**What to do when facts conflict:** Present the discrepancy briefly, choose a provisional non-misleading fallback (e.g., omit unstable price rather than invent it), and continue the build. Ask for confirmation only if that exact fact is essential to completing the live action.

## 0E. Internal discovery bank — never display all of it

The full question bank in this skill is **for the AI to reason through internally**, not a form, homework sheet, or quiz for the user. For each question, answer with:

`answer | evidence source | confidence | impact on design | verification needed?`

Research it, infer a reversible visual default, mark unresolved, or ask one essential question. **A thorough internal audit does not require an exhausting user interview.**

Keep the user-facing build brief to a few sentences when needed: what was verified, what was assumed, and what actually blocks launch. The AI should carry the cognitive burden.

---

# INTERNAL QUESTION BANK — AI MUST ANSWER THESE ITSELF WHEN POSSIBLE

The following is a **private reasoning and research checklist** for the builder, **not questions to send to the customer**. Answer through official-site research, supplied assets, inspection, design judgment, and user-approved constraints. Only ask the user a consequential, truly owner-only question if needed; respect the Phase 0 limit of 0–3 questions. Being unable to answer every optional question is not permission to delay the build.

## A. Business, story, and positioning

- What does the business actually do in one sentence, without buzzwords?
- Why was it started? Which part of that story is worth telling publicly?
- What are the top three services/products or experiences to foreground?
- What does the organization do exceptionally well, with evidence?
- What does it *not* provide, despite likely customer assumptions?
- What is its most distinctive physical, cultural, historical, or functional feature?
- What words do existing customers use to describe it?
- What misconceptions should the website correct?
- Which competitors or alternative experiences will customers compare it against?
- Is this positioned as affordable, premium, playful, specialist, local, experimental, or something else?
- What local context or community connection should show up in its identity?
- Which statements need permission or proof before publishing?

## B. Audience, psychology, and customer journey

- Who is the highest-priority audience? Who are secondary audiences?
- What are they hoping to know within three seconds?
- Are most visitors newcomers, returning customers, partners, or job applicants?
- Are they researching, comparing, ready to contact, or ready to purchase?
- What makes them hesitate or distrust this kind of business?
- What questions do customers repeatedly ask by phone or message?
- What information makes a visitor confident enough to act?
- What must be reachable in one tap/click?
- What should a visitor see immediately after the hero?
- What is the ideal journey from arrival to action, and what alternate journeys matter?
- What would make a visitor scroll further because the next section promises real value?
- What visitor actions must *not* happen accidentally?

## C. Content and voice

- Should the brand sound like a helpful host, energetic friend, expert craftsperson, trusted professional, or another voice?
- Which real phrases would staff or customers naturally say?
- Which slogans, clichés, words, or tone should be explicitly banned?
- Is the website primarily informative, persuasive, storytelling, educational, or transactional?
- Should copy be short and editorial, or detailed where decisions require it?
- Which facts, product specifications, ingredients, prices, timings, or policies must be exact?
- Which common customer objections should the writing address?
- What proof can accompany each important claim?
- Will the website be multilingual? If so, who provides or approves translations?
- Do copy and imagery need seasonal/local updates?
- Is there an existing content source of truth? How often does it change?
- Where should calls to action appear without becoming repetitive?

## D. Brand, typography, and visual design

- Should the look feel handmade, sophisticated, editorial, youthful, rugged, minimal, maximal, or mixed?
- What visual qualities make the brand recognizable before reading its name?
- What existing brand assets must remain unaltered?
- Which colors feel authentic to the brand, and which must not appear?
- Do colors need to match real packaging, interiors, uniforms, print materials, or products?
- Which typography styles feel appropriate: hand-lettered, script, grotesque, humanist, display, monospaced, etc.?
- Are there specific font families you like or dislike? Why?
- How should expressive display text coexist with readable body copy and forms?
- Should the layout feel symmetrical, asymmetric, grid-based, editorial, immersive, or deliberately varied?
- How much negative space should major sections have?
- Should texture, grain, illustrated elements, patterns, and physical materials be used?
- Are rounded, angular, organic, or mixed shapes appropriate?
- What should a “premium” result mean for *this* audience rather than for a generic design trend?

## E. Photography, video, and media

- Which authentic photographs are essential? Do they exist at usable quality?
- Who owns the source images, and do we have permission for publication/editing?
- Which visuals must depict reality accurately, and which may be illustrative or artistic?
- If AI enhancement is used, what may change and what must remain exactly the same?
- Which photographic style is suitable: documentary, editorial food, studio, lifestyle, cinematic, architectural, macro, etc.?
- What camera angle, depth of field, lighting, and color treatment match the brand?
- Which images need full containment instead of edge-to-edge cropping?
- Does every image need mobile-specific framing or a different composition?
- Should the website include video, ambient audio, or motion graphics? Are media assets available?
- Which media should load immediately and which can be deferred?
- Should galleries allow full-resolution viewing, captions, attribution, or downloads?
- Do any people pictured require consent, particularly children or private individuals?

## F. Pages, navigation, and information architecture

- What are the minimum essential pages and sections?
- What deserves an entire page versus an on-page section versus a modal?
- What are the three highest-priority nav items?
- Should navigation float, hide/show on scroll, dock, expand, or remain standard?
- Which information should be accessible without leaving the page?
- Which external redirects are necessary, and which can be avoided?
- What footer content is required to make the site useful rather than decorative?
- How should long catalogues, menus, directories, stories, or documents be browsed?
- Should visitors search, filter, sort, compare, save, or share items?
- What should happen when no results are found?
- How should returning visitors resume their task?
- What are the failure, loading, empty, and success states for every important flow?

## G. Animation, art direction, and interaction choreography

- What should motion make visitors *feel*: energetic, calm, tactile, surreal, elegant, playful, dramatic?
- Which reference interactions are essential and exactly where should they occur?
- Should motion be driven by scroll, pointer, hover, drag, touch, time, audio, or clicks?
- Which section deserves the boldest cinematic moment?
- Should each section have a different motion signature while sharing a common overall timing language?
- Which elements should pin, stack, parallax, mask, reveal, morph, rotate, deform, refract, or expand?
- Should photography move independently of its frame, and if so how far?
- Would 3D or WebGL serve the content better than CSS-based depth? Why?
- Are actual source components required, or are equivalent original implementations acceptable?
- Which interactions need custom cursors, magnetic elements, physical dragging, or spring physics?
- What must users still be able to accomplish with animation disabled?
- What is the fallback on phones without hover, slow GPUs, or reduced-motion settings?
- How should animated sections release scroll control so visitors never feel trapped?
- Are interactions discoverable without written instructions?
- How will you prevent simultaneous animations from fighting over attention or resources?
- What frame-rate/performance tradeoffs are acceptable on ordinary phones?
- Should effects respond to light/dark mode, accessibility settings, or battery constraints?

## H. Functional features and integrations

- Is the main outcome a form inquiry, booking, call, message, directions, donation, sale, or something else?
- Which integrations already exist and are verifiably functioning?
- Must a booking be confirmed by a human, or does a backend provide live availability?
- Do forms need backend delivery, spam protection, file uploads, validation, or email confirmation?
- Should payments, carts, user accounts, memberships, or checkouts exist at all?
- Are live prices, stock, schedules, or availability required? What is the source of truth?
- Does an interactive menu or catalogue need all items directly rendered on the site?
- Should maps be embedded, and should navigation open a map application?
- Are there any external platforms where redirects are legitimate and expected?
- Who receives submitted data and how is it protected?
- What should the interface do if the network or integration is unavailable?
- Do features need admin updates, analytics, or content management?

## I. Responsive design and accessibility

- What devices do typical visitors actually use?
- Which interactions must change shape on mobile instead of shrinking?
- Which images require separate mobile art direction?
- Are keyboard use, screen-reader support, reduced motion, and touch targets mandatory? (Default: yes.)
- What language, reading level, and localization issues matter?
- Are there high-contrast requirements or sensory sensitivity considerations?
- What should be hidden or simplified on a smaller device, without withholding essential content?
- Should the design support landscape phones, tablets, and very large monitors?

## J. Technology, deployment, and maintainability

- Is one self-contained HTML file a hard requirement?
- Can a Vite/React/Next/Svelte build be used if justified by required components?
- Where will this run: static hosting, Netlify, Vercel, existing CMS, or another platform?
- Does the user need to edit it from a phone, low-spec PC, or a team workflow?
- Which source libraries, component repositories, or licenses must be respected?
- How will external fonts, image URLs, and third-party services behave if offline or blocked?
- What browser support is required?
- Will the website need ongoing updates by non-developers?
- What is the realistic asset/performance budget?
- What are the security/privacy requirements for forms and external scripts?
- What test tools and real devices are available?

## K. SEO, trust, and publishing

- What geographic searches or customer intents should the site answer?
- Which page titles, descriptions, locations, contact details, and structured data are verified?
- Are business profiles, official social handles, and public contact channels confirmed?
- Are policies, consent notices, terms, accessibility statements, or legal notices required?
- Are testimonials authentic and approved, including their attribution?
- Are claims about ratings, awards, ingredients, sustainability, or results supported?
- How will errors, broken links, and stale information be discovered after launch?
- Who gives final publication approval?

## L. Scope, constraints, and review

- Is this a concept, prototype, demo, client-ready draft, or production launch?
- What is fixed and must be preserved exactly?
- What is explicitly out of scope?
- Which part of the project may be experimental?
- What is the deadline and what compromises are acceptable?
- Should the builder explain tradeoffs or just deliver finished code?
- What evidence counts as “complete” to the stakeholder?
- Who will approve the site's photography, copy, visuals, functionality, and release?

---

# PHASE 1 — TURN ANSWERS INTO DESIGN DECISIONS

Write a brief **internal decision record**, not a long document unless requested. Capture:

- **Identity anchor:** 3–5 specific, verifiable details that make this project unlike others.
- **Visitor promise:** what the site lets visitors understand or accomplish.
- **Primary and secondary actions:** ranked.
- **Three-second test:** name/logo, what it offers, why it's interesting, next action visible without searching.
- **Emotional arc:** first impression → curiosity → evidence → confidence → action.
- **Art direction:** palette roles, typography roles, photography, materials, composition, texture, imagery rules.
- **Motion direction:** interaction vocabulary, pacing, signature moments, responsive substitutes.
- **Content hierarchy:** section/page order with *reasons*, not generic defaults.
- **Source-of-truth table:** verified facts, links/assets, owner-approved statements, open questions.
- **Engineering constraints:** output format, dependencies, hosting, mobile devices, performance budgets.
- **Success criteria:** observable user behavior plus testable QA outcomes.

If a particular design is “premium,” explain what makes it premium for this brand: quality of imagery, composition, spacing, material, specificity, timing, trust, and interaction—not only gradients or glossy controls.

## Anti-template art-direction test

For every design decision, ask:

1. Would this same hero work unchanged for a dentist, gym, law firm, and café? If yes, it is too generic.
2. Does each section introduce a useful new idea or simply repeat the previous one with different imagery?
3. Is the typography chosen for the identity, or copied from a trend?
4. Do images show the real product, person, place, or experience—or just decorative filler?
5. Is the layout distinctive at a glance, even with the text blurred?
6. Do asymmetry, texture, color, negative space, and scale feel intentional rather than random?
7. Is copy believable when spoken aloud by a real member of the business?
8. Does a visitor know what to do without decoding the interface?
9. Are interactions reinforcing the story and action, rather than competing with them?
10. If a design element were removed, would the site become less useful or less distinctive? If not, reconsider it.

**Do not ban** gradients, glass, particles, carousels, parallax, glowing accents, cinematic imagery, or any other technique merely because AI often uses them. Use them when they fit the art direction and are executed well. **But never use purple/indigo gradients, glowing orbs, cookie-cutter layouts, or glass pills as lazy unresearched defaults.**

---



# CREATIVE-DIRECTION RULEBOOK — WHAT TO FOCUS ON / WHAT TO REJECT

## Attention hierarchy: where the AI must focus

| Priority | Focus | Observable success | Common failure to reject |
|---|---|---|---|
| 1 | Real subject | The site conveys the actual organization/product/location, not just a visual mood | Invented venue, generic stock art, fictional service |
| 2 | Visitor's first decision | Name, offer, reason to care and obvious next action visible early | Long empty preloader, hero with only a slogan |
| 3 | Evidence | Images, content, examples, reviews and details support what is said | Made-up social proof, vague promises, mismatched assets |
| 4 | Reading hierarchy | People can scan headings, prices, options and labels without effort | Every line large, giant type used for small detail, faux poetry |
| 5 | Emotional cadence | Hero → proof → discovery → interaction → confidence → action | Uniform cards for every section, no visual change |
| 6 | Motion meaning | Each effect makes content or interaction clearer or more memorable | Effects chosen only because the library offers them |
| 7 | Interaction | Controls are obvious and give predictable feedback | Beautiful dead buttons, hidden drag affordance |
| 8 | Mobile quality | Re-composed for touch and viewport, not just scaled desktop | Cut-off images, sideways scroll, hover-only discovery |
| 9 | Trust and accessibility | Readable, keyboard-usable, factual, appropriately licensed | Low contrast, fake submissions, inaccessible modal |
| 10 | Engineering | Smooth measured behavior and maintainable code | Three renderers fighting on the first screen |

## Anti-generic visual audit — reject or redesign these symptoms

These are **diagnostics, not blanket bans**. Any one can be justified when it is deliberately appropriate.

- A full-height gradient hero with a centered generic headline and no distinctive real content.
- Identical three-column cards repeated for services, benefits, testimonials, and team.
- Purple/blue “AI gradient” selected automatically without a connection to brand or subject.
- The same round pills, glassmorphism and shadows as every other generated landing page.
- Excessive generic decorative blobs, glowing orbs, wave dividers, meaningless 3D spheres or disconnected abstract symbols.
- Unnecessary stat counters or fake badges (“500+ customers”) without verifiable data.
- A giant video/preloader that hides the offer and CTA until the animation ends.
- A hero photo that is attractive but shows the wrong product, place or audience.
- Full-page collages baked into one image instead of editable independent assets.
- Typography selected purely because it is fashionable; the brand's actual tone is lost.
- Display fonts used for long body paragraphs, menu prices, table values, placeholders and forms.
- Body copy repeating “premium,” “innovative,” “unforgettable,” “exceptional,” “elevate,” without evidence.
- CTAs such as “Discover More” that all lead to unrelated or empty destinations.
- Hero/section headings of identical size, weight, alignment, and animation throughout.
- Random alternating dark/light sections with no narrative or spatial rationale.
- Excessive stretched full-bleed images simply to fill vertical space.
- Visual effects that hide navigation, block content, or delay taps.
- A slider that auto-advances while the reader is trying to inspect an item.
- Product cards with invented reviews, false discounts, or decorative checkout buttons.
- Important information accessible only by hover, mouse drag, sound, or a WebGL canvas.
- A mobile experience that omits essential sections instead of adapting the interaction.
- Hidden overflow used as a bandage for broken layout instead of fixing the cause.
- Multiple animation libraries controlling the same transform/scroll property with conflicting state.
- A “complete website” that contains only a render, screenshot, static mockup or dead frontend.

## The “AI-looking template” blacklist — explicit review gate

**These patterns are suspect when deployed automatically, without any brand-specific reason.** Do not put them in the first design just because a starter kit, model, tutorial, or UI library makes them easy. None is universally forbidden; the brand may legitimately require one.

| Overused AI-default look | What is wrong with the *default* use | Better first choice |
|---|---|---|
| Purple-to-blue gradient over a dark hero | Common SaaS/AI-tool visual shorthand, unrelated to many real businesses | Extract brand colors from real logo, setting, packaging, photos or approved references |
| Violet mesh blobs, neon auroras, glowing spheres | Decoration becomes the subject; can obscure useful content | Lead with authentic media, typography, material detail, or context-relevant dimensional motion |
| Generic glassmorphism pills and frosted navbars | Same pill pasted onto restaurant, law firm, portfolio and charity | Design navigation geometry/material from the actual brand and device needs |
| Identical 3-card / 6-card / Bento grid for every topic | Makes the page feel generated and structurally repetitive | Compose each section around its content: timeline, editorial rail, real menu, list, image-led story, or gallery |
| Huge centered headline, two generic CTAs, stock visual | A swap of brand name is the only identifying feature | Show the real offer, product, place or result immediately; make primary action contextual |
| Inter/Poppins-style default pairing used indiscriminately | Can erase unique business character | Research typographic precedents; select display, body, labels and numeric roles intentionally |
| Repetitive black-white-black background alternation | Rhythm is artificial and not driven by content | Use subject-specific material and a deliberate narrative light/dark progression |
| Emoji/icon bullets for every feature | Unnecessary visual noise and inconsistent artwork | Use meaningful iconography only where it aids recognition, or clear type and photography |
| Gratuitous rotating cube, galaxy, noise shader or globe | 3D becomes an unrelated tech demonstration | Use rich motion on subject-relevant objects: food, products, photos, typography, locations, actual data |
| Endless parallax, stagger-everything, typewriter text | Motion competes with scanning and can delay information | Plan focal motion beats, preserve approved effects, coordinate triggers and ease curves |
| Synthetic “perfect” photos and identical fake faces | Business loses credibility and distinctive texture | Use verified real photography, consistent light editing, appropriate permission and source tracking |
| “Elevate your experience”, “Discover excellence” copy | Vague promises that work for any company | Say what is offered, who benefits, and what the visitor should do next |
| Stock testimonials, counters, logos and “as seen in” | Misrepresents business credibility | Show only verifiable reviews, evidence, real customers, actual case studies |
| Every border radius 24px, every shadow soft, no contrast | Nothing establishes hierarchy or editorial intention | Define a material system with controlled geometry, spacing, borders, and varied visual density |
| Decorative giant headings with too much empty space | The page becomes a scrolling art board without useful answers | Make editorial typography lead into real content and clear calls to action |
| “Download the PDF” as substitute for a requested rich menu | Looks like a placeholder instead of a finished experience | Build a structured interactive HTML menu when requested, retaining PDF only as source |
| Mobile view that simply stacks desktop effects | Crops subjects, breaks drag zones and overwhelms hardware | Recompose key sections for mobile with correct touch and reduced-resource variants |

**Purple and gradients specifically:** Purple is not inherently “AI,” bad, or prohibited. If a violet palette is an established brand identity or the user explicitly asks for it, use it beautifully. The rule is **never choose purple/blue gradients by reflex** or use an unrelated gradient to disguise a generic design. A well-designed café can use rich earthy colors; a technology brand might genuinely own violet. Always justify the art direction from evidence.

**Anti-template test in 30 seconds:** Temporarily replace the business name and logo with an unrelated company. If 80% of the page could stay unchanged without looking wrong, the design lacks a specific identity. Redesign its imagery, composition, content, interaction, typography and palette—not just its logo.

**Do not confuse visual originality with chaos:** Avoid random asymmetry, illegible novelty fonts, gratuitous overscroll, unusual controls without affordances, or deliberate ugliness. Good art direction is purposeful, coherent, and easy to use.

## Remove, repair, or preserve? Decision tree

**REMOVE** an element only when it is unsupported, misleading, duplicative without a new purpose, legally unusable, technically broken, inaccessible with no viable repair, or explicitly unwanted by the user. Explain removals of previously agreed components.

**REPAIR** when a desired element has poor composition, timing, contrast, crop, touch behavior, performance or integration. Adjust choreography, pause behavior, assets, trigger region, device variant, lifecycle, size, or input mode **before recommending deletion**.

**PRESERVE** a specific interaction, gallery type, source library component, original logo, scroll effect, or layout the user has explicitly approved unless permission to change it is obtained or an authentic technical blocker is documented.

**DO NOT CONSIDER** as automatic design goals: trending color, a universal section count, copying competitors, maximal animation count, minimizing animation count, “looks expensive” without brand relevance, Lighthouse 100 at the cost of required content, AI detector scores, arbitrary framework popularity, or unrelated cinematic assets.

## Composition, type and visual rhythm

- Set hierarchy through scale, contrast, alignment, proximity, negative space, and media framing—not just font weight.
- Use a deliberate grid with intentional breaks: a strong off-grid hero, asymmetric editorial section, compact data/menu section, large visual reveal, intimate closing are examples, **not a mandated template**.
- Let the content determine the composition. Never force a photograph into a panoramic crop that destroys its subject; `object-fit: contain`, separate crop variants, portrait cards, letterboxing, or edge-to-edge frames are valid choices.
- Use **font roles**, not just font names: display, secondary headline, readable body, label, metadata, prices and form text. Allow expressive custom fonts while protecting reading comfort.
- Provide interactive contrast over photography using carefully tuned overlays, placement, or backed text surfaces. Test with the brightest *and* darkest image areas and on mobile crops.
- Avoid uniform section density. Vary reading pace: expansive moments, brief informative modules, then immersive scenes, with meaningful transitions.
- Use design tokens for colors, radii, spacing, type scale, z-index, shadows, blur, timing and elevation so the page feels authored by one designer.
- Have at least one **brand-specific unmistakable moment**; it may be typography, photography, an interactive scene, a physical material effect, or an unusual composition rooted in the subject.

## Persuasive writing without fabrication

- Write like a knowledgeable person who actually works with the product/service, not a generic “marketing voice.”
- Replace big claims with concrete specifics: “coffee made from locally roasted beans” **only if verified**; otherwise discuss offerings without inventing origin.
- User benefits must come from real attributes, clear outcomes, or authentic feelings—not invented guarantees.
- Compare against competitors only when claims can be substantiated; avoid fabricated “#1” rankings.
- Put practical answers near the decision: price near product, availability near reservation, delivery area near order, response expectation near form.
- A memorable creative heading must still convey what a section is about; pair editorial lettering with precise accessible labels when necessary.
- Consider locality, cultural context, language register, currency, dates, timezones, and actual customer vocabulary.
- Do not use deceptive scarcity, fake urgency, dark patterns, concealed costs, disguised ads, or consent tricks.

# PHASE 2 — BUILD A MOTION SYSTEM, NOT A PILE OF EFFECTS

Rich animation is welcome. The objective is to **orchestrate it**, not automatically minimize it.

## Motion inventory — make this for every animated component

| Field | Requirement |
|---|---|
| Name/source | Exact library/component/variant, source location, license, or “custom” |
| Purpose | What user perception or action it improves |
| Location | Exact section and visual layer |
| Trigger | Load, scroll, reveal, hover, pointer, swipe, click, drag, focus |
| States | Initial, active, hover/focus, drag, success, error, exit |
| Timing | Duration, delay, easing/spring, scrub range |
| Geometry | Scale, parallax depth, rotation, mask, displacement, perspective |
| Media | Real assets and crop/fit rules |
| Input modes | Mouse, touch, keyboard, reduced motion |
| Lifecycle | Start, pause off-screen, cleanup, resize, visibility change |
| Failure path | CSS/static fallback for unavailable WebGL or low power |
| Performance | GPU/CPU impact, pixel ratio, image memory, frame budget |
| Acceptance | The specific visible behavior that demonstrates it works |



## Motion placement atlas — WHERE and HOW to use effects

This is a **choice catalog**, not a mandatory collection. Use many effects when the creative brief demands it, but each one needs a defined layer, trigger, story role, fallback, and test. Do **not** automatically remove approved effects to make the site simpler.

| Effect / component type | Best location | Job / desired experience | Design rule and avoid |
|---|---|---|---|
| **Spring / floating dock nav** | Global header | Feels responsive and tactile; shows where to go | Keep labels readable; support touch + focus; avoid huge magnetic movement |
| **Hero photo parallax** | Hero | Adds depth to real brand imagery | Keep subject visible; modest offset; don't delay LCP image |
| **Hero particle / flow field** | Behind hero subject | Atmosphere and brand material language | Low enough contrast to keep copy legible; don't substitute for actual product/venue |
| **Hero typography assembly** | Brand display text | Creates a recognizable entrance | Text present semantically from start; entrance brief/skippable; no forced loader |
| **Word-by-word lighting / reveal** | One editorial paragraph or story beat | Directs attention through a statement | Maintain full readable underlying text; prevent unreadable partial sentences during fast scroll |
| **Character stagger / blur reveal** | Major heading | Establishes pace and hierarchy | Use carefully; don't stagger every tiny label or repeat on each visit |
| **Masked photo reveal** | Story / visual proof | Makes real images appear with purpose | Reveal destination quickly; images never remain invisible on JS failure |
| **Pinned storytelling** | Product explanation / editorial feature | Shows one coherent transformation | Use bounded scroll range with obvious exit; prevent trapped scrolling / giant blank mobile gap |
| **Stacking cards** | Sequenced cases, benefits, program steps | Shows accumulation/progression | Cards should not conceal previously needed information; limit pin depth by viewport |
| **Horizontal filmstrip** | Selected products, dishes, projects, photos | Easy image-led exploration | Swipe/drag, visible arrows/progress, no accidental vertical-scroll capture |
| **Wave / depth carousel** | Small set of hero selections | Creates a memorable featured selection | Avoid making distant cards unreadable; preserve keyboard/select controls |
| **3D curved gallery** | Gallery / portfolio | Spatial image exploration | Use clear drag affordance, image lightbox, full-content fallback, dispose 3D resources |
| **Hover image preview** | Desktop links / gallery labels | Gives context before clicking | Never carry essential information only in hover; hide preview when pointer exits |
| **Magnetic / liquid button** | Primary or special CTA | Expresses tactility and action priority | Avoid constant travel; clicking works immediately and has `:focus-visible` |
| **Ripple / press microinteraction** | Buttons, cards | Confirms input | Do not delay actual action; respect reduced motion and input states |
| **Scroll-scrub image zoom** | Showcase transition | Moves between content scales | Maintain sharp images and a predictable exit; never zoom text to unreadability |
| **Image-stack / layered scene** | Editorial photo narrative | Creates depth and sequencing | Maintain distinct images, crop control, strong mobile simplification |
| **Canvas shader distortion** | Special hero/scene transition | Adds rich material feel | Don't distort important faces, labels, food identity, text or clickable hit targets |
| **Cloth / textile simulation** | Brand materials, product story, menu finish | Expresses tactile craftsmanship | Use genuine source if required; contain simulation near relevant material; fallback doesn't block content |
| **Condensation / liquid droplets** | Drinks, materials, product close-ups | Adds believable sensory detail | Subtle and localized; keep foreground content sharp |
| **Typography vortex / path text** | Experimental brand story or art-directed break | Creates a standalone editorial moment | Requires semantic accessible text; don't replace essential headings or navigation |
| **Morph / shape transitions** | Connect related sections/states | Indicates continuity or transformation | Morph between meaningful elements; avoid random shapes with no relationship |
| **Perspective tilt cards** | Feature/portfolio items | Gives hover feedback and depth | Small motion, stable text, no motion dependence on touch |
| **Section background transition** | Between story chapters | Changes mood deliberately | Tie color to content/photography; maintain contrast throughout transition |
| **Page/route transition** | Between routes or nested views | Maintains spatial continuity | Never create unskippable waits; handle browser back, reduced motion, and focus |
| **Menu / dialog reveal** | Full menu, search, booking | Makes context change clear | Opening/closing must not delay content, focus control, or Escape behavior |
| **Data visualization animation** | Charts / statistics | Explains a real change | Values must be genuine; don't count up fake metrics; offer static interpretation |
| **Interactive ingredient/assembly scene** | Product customization or experiential demo | Makes the product understandable by doing | Guided task, clear drop targets, reset/undo, touch/keyboard alternative; don't fake commerce |
| **Scroll-responsive footer** | Closing brand moment | Deliberate emotional resolution | Leave all contacts and CTA visible/usable immediately |
| **Custom cursor** | Desktop-only experiential section | Reinforces drag/hover affordance | Never replace native accessibility or obscure controls; disable on touch |
| **Ambient WebGL environment** | One spatial showcase or product context | Gives genuine 3D depth | Asset budget, fallback, offscreen suspension, capped pixel ratio, cleanup |
| **Micro sound** | Optional experience, if explicitly requested | Confirms feedback or strengthens atmosphere | Start muted/user-initiated, provide control, no surprising autoplay |

### Required motion distribution review

Before implementing, map motion across the whole scroll:

- **Opening:** one coherent signature entrance with the real subject immediately visible.
- **First transition:** a visual reason to continue, such as an image reveal, scale change or typographic shift.
- **Exploration:** content-specific interaction (carousel, gallery, accordion, tabs, product scene).
- **Atmosphere:** lower-salience ambient movement behind real content, not competing with a primary interaction.
- **Proof / details:** calmer reading zones so menus, prices, case studies, factual claims and forms remain legible.
- **Closing:** subtle transformation into a clear action, not a mandatory last animation.

Create a **motion score** per section: `foreground focus / supporting movement / user input / scroll ownership / mobile variant / accessibility fallback / cost`. Rich sites can have animation in every section if focal intensity varies and all interactions remain usable. There is no arbitrary hard cap on effects.

### Hard motion failure conditions (fix these; don't simply delete the effect)

- Animation continues after its component is removed or far offscreen, wasting GPU/CPU.
- Competing scroll libraries both change scroll position or transforms on the same element.
- Text remains hidden until a scroll callback fires, especially when deep-linked or JS fails.
- A fixed pin scene steals wheel/touch scroll indefinitely or leaves a huge blank gap at smaller sizes.
- Drag/swipe interaction captures vertical scrolling when users only intend to move down the page.
- A cursor-follow effect covers actual buttons or breaks focus.
- High-cost SVG/CSS filter, blur, backdrop-filter or large shadow repaints produce jank.
- A WebGL canvas has no accessible alternative for the information it carries.
- A heavy scene renders behind a closed modal, under another scene, or in a hidden tab.
- Effects reset on every viewport entry and make returning users watch the same sequence repeatedly.
- Touch users cannot reach a hover-only feature or understand that an image rail is draggable.
- Visual triggers depend on a fixed breakpoint rather than actual capabilities (`hover`, pointer type, preference, viewport, memory/observed performance).

### Source component compatibility gate

For any named animation package/component, write an integration ticket:

`requested name → canonical source URL → exact variant → source files/shaders → dependencies/runtime → license/assets → required props → DOM placement → existing scroll owner → state/gesture wiring → responsive behavior → reduced-motion/WebGL fallback → rendering lifecycle → browser test evidence`.

**Never equate:** a screenshot, a look-alike CSS animation, a borrowed thumbnail, a generated asset, and the original source component. These are different deliverables. If the user requests actual source integration, use the source or disclose the exact limitation.

### Practical smoothness and performance

- A 60 Hz display has approximately **16.7 ms per frame**; this is a frame budget, not a blanket FPS promise. Profile on representative devices; variable refresh displays differ.
- Prefer `transform` and `opacity` for many UI transitions, while acknowledging that shader effects, layout animations, SVG, and canvas may be justified with measured costs.
- Avoid expensive layout reads after writes, unthrottled `pointermove` work, rasterizing huge text filters, and thousands of overlapping DOM nodes.
- Share a scroll model. If using Lenis and GSAP ScrollTrigger, integrate their timing and refresh behavior instead of allowing conflicting scroll ownership.
- Load 3D/WebGL scenes when they approach view, pause or drop render loops when out of view, and dispose textures/geometries/materials on teardown.
- Configure scene resolution and postprocessing according to available performance and actual device tests. Lower quality carefully, not by deleting the requested visual feature.
- Use media-aspect framing and device art direction; lower particle count does not mean low-quality typography or missing content.
- For reduced motion, choose an intentional static state, subtle opacity transitions, and immediately accessible actions rather than simply hiding animated content.

## Choreography standards

- Use a **shared motion grammar** (easing families, spacing rhythm, stagger principles, depth, physicality, transition speed), with variations appropriate to each section.
- Preserve **signature moments**: the hero, a hero-to-content transition, editorial image scene, interactive showcase, and meaningful page closing may each be ambitious and different.
- Layer motion: atmosphere, photography, typography, UI state, and navigation can coexist, but coordinate their timing and focus.
- Avoid accidental simultaneous focal points: one main story beat at a time while subtle secondary motion continues.
- Use scroll-responsive sequences where they support storytelling; ensure visitors can scroll normally and are never trapped in an unskippable animation.
- Account for scroll velocity, reverse scrolling, rapid navigation, resizing, and users entering in the middle of a page.
- Use hover only as a progressive enhancement; essential functionality also works on touch and keyboard.
- For advanced 3D, use render-on-demand or controlled loops, offscreen pausing, capped device pixel ratio, asset disposal, and visual fallbacks.
- Offer a reduced-motion design that still looks deliberate and preserves information.
- Avoid abrupt jumps caused by mismatched layout measurements, image loading, pinned scenes, or scroll-library conflicts.
- **Don't reduce motion merely to make the source smaller.** Optimize implementation: share engines, lazy-init renderers, reuse geometry, use CSS for inexpensive transitions, and avoid duplicated work.

## Component fidelity rule

If the user requests a *named original component* from a library:

1. Inspect its real documentation and source files (including variant, shaders, assets, and dependencies).
2. Confirm its license and what is actually available.
3. Implement/adapt the original source where possible.
4. Preserve characteristic behavior, not just a similar screenshot.
5. Test it on desktop and mobile; provide graceful fallback where required.
6. If an exact integration is impossible, explain precisely why and label any adaptation honestly. Never substitute silently.

Avoid claiming “same as the reference” if only visual inspiration was used.

---

# COMPONENT SOURCE ATLAS — RESEARCH AT LEAST TEN LIBRARIES, INSTALL ONLY WHAT THE WEBSITE NEEDS

**This section is a required source-selection procedure, not a template generator.** Rich motion is welcome. The AI must research existing components, choose based on **brand relevance and real behavior**, integrate original licensed source where approved, and build custom work when existing components do not fit. No component can replace actual user needs or verified business content.

## Library investigation protocol (mandatory when browsing and component research tools are available)

1. **Look at at least 10 distinct, relevant libraries/catalogs** from the verified directory below before locking the component plan. Inspect the actual component pages/source and current licensing; do not stop at attractive thumbnails. If offline or the user requests immediate code with no browsing, use known sources and explicitly label unverified ones; do not claim ten catalogs were inspected.
2. **Start with the framework.** For one-file vanilla HTML, prefer vanilla JS/CSS/GSAP/Swiper/Three.js and only source-port a React component with its implementation carefully. For React/Next/Vite, React-based catalogs are viable; check React version, build tooling, CSS solution and WebGL runtime. Rebuilding a large framework simply to add one decorative effect is usually not justified.
3. **Record at least one exact component candidate for every material website role:** navigation, main heading, visual storytelling, primary action, gallery or content browser (if needed), modal/menu or form (if needed), footer and relevant desktop/mobile fallback.
4. **Shortlist and score** by `brand fit (0–5) | user task benefit (0–5) | originality (0–5) | source/license clarity (0–5) | accessibility (0–5) | performance (0–5) | framework compatibility (0–5)`. Use the rating to inform judgment, not as a mindless ranking formula. If the user explicitly selected a particular component, fidelity takes priority and any real incompatibility must be reported.
5. **Verify each selected source:** exact title, variant, original URL, source repository/file when accessible, runtime and dependencies, license and asset rights, accessibility, interaction behavior, mobile/fallback plan, complexity and performance. Never claim a source-integrated effect when merely imitating its silhouette.
6. **Install only the winners.** Inspecting 10+ libraries is mandatory where feasible; adding 10 libraries to the final bundle is **not**. Prefer 1 coherent motion engine, 1 UI primitives system, 1 carousel system, and 3D only where it materially improves the story. Avoid duplicate animation loops, multiple scrolling controllers and three libraries for the same dialog.
7. **Don't copy a demo's entire layout, wording or branding.** Extract the original licensed *component* and customize its design for the client. Check premium/paywalled demo licenses explicitly; public demos and Github examples are not blanket reproduction permission.
8. **Preserve named components.** If a specific original component is requested, don't substitute an approximation silently. Test source behavior and report partial fidelity.

## Verified component library directory — inspect these 15 source families

**Columns:** exact candidates are *actual named component/API names*, not invented visual descriptions. A listed candidate is only recommended **when its role fits the brief**. Some are tools/engines rather than drop-in visual components; the distinction is intentional.

| # | Source and official catalog | Exact high-value components / APIs to inspect | Recommended use, decision and caution |
|---|---|---|---|
| 1 | **React Bits** — https://reactbits.dev/ | **Blur Text**, **Animated Content**, **Circular Gallery**; also inspect Split Text and Flowing Menu in the current catalog | Editorial headings, scroll entrances, photo galleries. Best for React; check each effect's graphics budget, source variant and reduced-motion adaptation. |
| 2 | **ThreeUI Community (MengTo)** — https://github.com/MengTo/threeui and https://threeui.com/ | **Animated Top Dock — Command Bar**, **Character Carousel — Filmstrip**, **Character Carousel — Wave**, **Gallery Heading**, **Gallery**, **Liquid Metal Button**, **Flow Field**, **Particle Drift**, **Elements — Condensation**, **Woven Cloth**, **Sliding Text CTA** | Cinematic navigation, textured interactions, three-dimensional editorial moments. Inspect individual variant/source and runtime: React/Three.js/WebGL/Canvas differ. A catalog entry is not proof the source works in plain HTML. |
| 3 | **GSAP** — https://gsap.com/docs/v3/ | **ScrollTrigger**, **SplitText**, **Flip**, **ScrollToPlugin**, `gsap.timeline()` | Coordinated reveal, scroll scenes, typography animation, morphing/layout transitions. Excellent for JS and React; compose timelines, cleanup triggers, validate current license/version. |
| 4 | **Motion** — https://motion.dev/docs | React **AnimatePresence**, `motion`, **useScroll**, **useTransform**, **useSpring**; JS `animate()` | React gestures, layout and component presence. Use as main React motion engine OR use GSAP for complex scroll choreography, rather than duplicating control of the same nodes. |
| 5 | **Motion-Primitives** — https://motion-primitives.com/docs | **Magnetic**, **Text Effect**, **Text Shimmer**, **In View**, **Morphing Dialog**, **Carousel** | Refined magnetic controls, timed text, content entrances, morphing overlays. Don't apply persistent shimmers to every headline; check accessibility. |
| 6 | **Aceternity UI** — https://ui.aceternity.com/components | **Floating Navbar**, **3D Card Effect**, **Animated Testimonials**, **Card Spotlight**, **3D Marquee** | Hero/feature/portfolio treatments in React + Tailwind; show testimonials only when genuine; beware copy/paste generic SaaS appearance. |
| 7 | **Magic UI** — https://magicui.design/docs/components | **Dock**, **Marquee**, **Shimmer Button**, **Bento Grid**, **Text Reveal**, **Border Beam** | Polished affordances and select storytelling details. Don't default to bento grids or glowing borders across unrelated brands; pause moving text when appropriate. |
| 8 | **shadcn/ui** — https://ui.shadcn.com/docs/components | **Dialog**, **Sheet**, **Navigation Menu**, **Tabs**, **Command**, **Carousel**, **Accordion**, **Form** | Functional, stylable UI foundation for menus, booking panels, search and FAQ in React stacks. The Carousel wraps Embla. Source is customizable; verify the installed version. |
| 9 | **Radix Primitives** — https://www.radix-ui.com/primitives/docs/components | **Dialog**, **Navigation Menu**, **Tabs**, **Popover**, **Tooltip**, **Dropdown Menu**, **Scroll Area** | Accessible unstyled primitives; ideal when customizing visuals heavily. Do not import both Radix and another dialog implementation without a clear reason. |
| 10 | **Embla Carousel** — https://www.embla-carousel.com/docs/ | **Embla Carousel** and **Fade**, **Auto Scroll**, **Wheel Gestures** plugins | Responsive, touch-first galleries and product rails. Prefer manual control and visible navigation for important content; auto-movement only when clearly appropriate. |
| 11 | **Swiper** — https://swiperjs.com/swiper-api | **Navigation**, **Pagination**, **Thumbs**, **FreeMode**, **EffectCreative**, **EffectCoverflow** | Feature galleries, previews and dimensional carousels for vanilla/React. Don't use Swiper and Embla for the same role; check each effect's device behavior. |
| 12 | **Three.js** — https://threejs.org/docs/ | **Scene**, **PerspectiveCamera**, **WebGLRenderer**, **InstancedMesh**, **Raycaster**, **ShaderMaterial**, **EffectComposer** | Custom WebGL and 2.5D/3D scenes. An engine, not pre-styled UI. Budget draw calls, DPR, textures, cleanup, reduced-motion and non-WebGL fallback. |
| 13 | **React Three Fiber + Drei** — https://r3f.docs.pmnd.rs/ and https://drei.docs.pmnd.rs/ | R3F **Canvas**; Drei **Float**, **Environment**, **Html**, **Text**, **OrbitControls** | Immersive 3D in React. Use only if authentic 3D earns its runtime cost; provide static or DOM fallback and accessible text outside canvas. |
| 14 | **Lenis** — https://github.com/darkroomengineering/lenis | `Lenis`, `lenis.scrollTo()`, **GSAP ticker synchronization** | Optional smooth-scroll controller for selected cinematic sites. It's a utility, not visual content; don't hijack normal scrolling, and coordinate native anchors, modals, ScrollTrigger and reduced motion. |
| 15 | **Codrops Creative Hub** — https://tympanus.net/codrops/hub/ | Inspect published **Image Trail**, **on-scroll animation**, **page-transition**, **WebGL image-distortion** demos (verify exact project title/source before selecting) | Experimental gallery mechanics and art direction. It's an **article/demo archive**, not a uniform installable component library. Verify each demo's code license and permissions; adapt behavior rather than copying whole layouts. |

**Research note:** Each source above has official documentation/catalog links. Component names, availability, source locations, dependencies, and licenses can change. Re-verify for the current build. A premium-only variation is not freely reusable simply because its preview is public.

## Candidate priority — what is almost always worth considering

The following **probabilities are design-selection heuristics**, *not empirical statistics*. They describe whether to **evaluate** a capability, not a mandate to load its package:

| Candidate and exact source | When to consider | Evaluation priority |
|---|---|---|
| **Radix Dialog** or **shadcn Dialog** | Any modal, long menu, lightbox, booking form or multi-step overlay | **Very high / 95% when a modal exists**; one accessible solution required, not both |
| **GSAP ScrollTrigger** or **Motion useScroll** | Sites with substantial scroll-based storytelling | **Very high / 90% for cinematic sites**; select primary motion orchestrator |
| **GSAP SplitText**, **React Bits Blur Text**, or **Motion-Primitives Text Effect** | Hero or major editorial typography | **High / 80% for expressive brands**; one dominant text treatment, accessible readable source copy |
| **Embla Carousel** or **Swiper with Navigation/Pagination** | Image/product/menu/story collections | **Very high / 90% when swiping or carousel controls matter**; one carousel engine |
| **React Bits Circular Gallery** or **ThreeUI Gallery** | Rich visual gallery requested | **High / 80% for gallery-led brands**; validate device/accessibility and performance |
| **Animated Top Dock**, **Aceternity Floating Navbar**, or **shadcn Navigation Menu** | A distinctive but usable navigation treatment | **High / 85% for brand-led navigation**; use brand-appropriate styling and mobile alternative |
| **Motion-Primitives Magnetic** or **ThreeUI Liquid Metal Button** | A clearly emphasized primary interaction | **Conditional / 65% for cinematic sites**, lower for austere/regulatory contexts |
| **ThreeUI Woven Cloth**, **Drei Float**, **Three.js shader scene** | Material-rich or dimensional storytelling is explicitly needed | **Conditional / 30–60%**, not a default requirement; keep actual source and a fallback |
| **Lenis** | Long cinematic scroll where native input benefits from carefully synchronized smoothing | **Conditional / 60% for cinematic desktop sites**; never install purely to tick a box |
| **Magic UI Marquee** or **Embla Auto Scroll** | Supporting logos, press, chronology or decorative media | **Conditional / 35%**; pause/support reduced motion and don't hide crucial content |

**Mandatory functional capabilities, independent of libraries:** clear responsive navigation; usable primary CTA; accessible focus and feedback; appropriate responsive media; readable typography; usable modal/menu/gallery when part of the brief; reduced-motion accommodation; HTML content that search engines can access; working links and real business information. No named decorative component is universal across all sectors.

## Component placement matrix — SELECT intelligently, do not fill every cell

| Page/role | Recommended source candidates | Functional implementation requirement |
|---|---|---|
| Global navigation | ThreeUI Animated Top Dock, Aceternity Floating Navbar, shadcn Navigation Menu, Radix Navigation Menu | Real labels, active states, mobile drawer, keyboard control, sticky collision avoidance |
| Hero text | GSAP SplitText, React Bits Blur Text, Motion-Primitives Text Effect | Meaningful readable headline immediately available, short reveal, no intro that delays the offer |
| Hero scene | ThreeUI Flow Field, Three.js ShaderMaterial, React Bits visual effect | Scene relevant to business/product; keep real content above shaders; defer offscreen work |
| CTA and microinteractions | ThreeUI Liquid Metal Button, Magic UI Shimmer Button, Motion-Primitives Magnetic | Visual emphasis matched to conversion priority; accessible press/loading/focus states |
| Scroll storytelling | GSAP ScrollTrigger, Motion useScroll, React Bits Animated Content | Choreographed reveal, modest overlap, recalc on image/fonts load, no forced scroll-jacking |
| Editorial imagery | ThreeUI Gallery Heading / Gallery; React Bits Circular Gallery | Original images, real captions, appropriate contain/cover logic, swipe/keyboard controls |
| Category/product browsing | ThreeUI Character Carousel Filmstrip/Wave; Embla/Swiper | Every card reachable; no lost keyboard focus; manual arrows and swipe; no inaccessible autoplay |
| Menu/catalog/document | shadcn/Radix Dialog, Tabs, Accordion, Command | Render real structured text, price/spec details, clear close/back and focus management |
| Material or textile detail | ThreeUI Woven Cloth; custom Three.js scene | Actual 3D only when asked/appropriate; fallback DOM/graphic and offscreen renderer pause |
| Image hover / media transitions | Codrops demo after license check; GSAP Flip; Motion layout | Source-faithful image transitions, avoid distorting real products, support touch variant |
| Customer proof | Aceternity Animated Testimonials or ordinary semantic quote cards | Display **verified** actual testimonials; no fictional ratings, faces or claims |
| Closing/contact | shadcn Form / Dialog, relevant footer, Magic UI Dock only if justified | Functional contact routes, verified addresses, real form delivery, no invented newsletter |

## Library selection acceptance checklist

- [ ] Ten different source families reviewed **or limitation documented honestly**.
- [ ] Each chosen element has one sentence explaining why *this* website needs it.
- [ ] Exact original component title, variant, URL and source file recorded where available.
- [ ] License, asset rights, fonts, image rights and paid/free status checked.
- [ ] Framework/React versions and runtime compatible with requested output.
- [ ] Functioning source code imported, or visual approximation **clearly labeled**.
- [ ] No multiple libraries doing the same job without justification.
- [ ] No duplicate scroll controller or WebGL render loop competing unnecessarily.
- [ ] Each effect has mobile, keyboard, reduced-motion and error fallback.
- [ ] The result is brand-led, not identifiable as a copy/paste library showcase.
- [ ] Actual behavior is tested; a preview image alone is not evidence.

---

# PHASE 3 — CONTENT, PHOTOGRAPHY, AND TRUST

## Copy system

- Speak directly to the user; choose words a real staff member, founder, expert, or community representative might say.
- Replace broad claims with specifics: what, where, for whom, how it works, what it costs, why it matters.
- Write one idea per section. Headings should answer an actual visitor question or offer a concrete reason to continue.
- Short copy is often effective, but don't make it so vague that it loses meaning.
- Avoid filler: “elevate your experience,” “unlock excellence,” “where innovation meets passion,” “experience the extraordinary,” and other unsupported universal slogans.
- Differentiate by truthful detail, tone, pacing, examples, origin stories, and evidence.
- CTA labels should describe the destination/action; don't force cute wording onto functional buttons.
- Preserve genuine place names, menu names, product names, event details, and customer terms.
- Check dates, quantities, prices, opening hours, contact methods, policies, and availability against reliable sources.
- Never invent quotes, customer reviews, statistics, awards, partnerships, or guarantees.

## Media system

For every image, record internally:

- Source, permission/license, subject, factual vs decorative role.
- Appropriate usage, width/height/aspect ratio, focus point, minimum resolution.
- Whether original framing must be fully visible (use `contain`, letterbox, or adjusted layout) or whether editorial crop is acceptable.
- Retouching allowed: lighting, contrast, denoising, sharpness, color balance, small distractions.
- Retouching prohibited without authorization: changing identity, ingredients, architecture, labels, available products, or factual characteristics.
- Desktop/tablet/mobile composition, responsive sources, loading priority, captions, alt text.

Generate bespoke supporting visuals if the user wants them. Each generated image should have an intentional composition, camera perspective, material palette, lighting and role. Prefer individual assets rather than collages when assets need independent cropping or animation. Do not present invented documentary imagery as a genuine real-world event or physical product.

---

# PHASE 4 — DESIGN AND IMPLEMENTATION

## Required design decisions

Before coding, know the following (explicit answer or reasonable assumption):

- Grid system, section spacing, minimum/maximum content widths, background transitions.
- Typography scale, maximum line lengths, font-loading strategy, button text styles.
- Palette and semantic color roles with accessible contrast.
- Hero crop/art direction and first viewport composition.
- Navigation behavior at desktop/tablet/mobile widths.
- Component states: hover, focus-visible, pressed, selected, disabled, busy, empty, success, error.
- Form validation, keyboard navigation, user feedback, and API failure behavior.
- Scroll and gesture ownership: native scrolling vs controlled scenes, and pointer/touch interactions.
- Motion system, source components, fallback behavior, and renderer lifecycle.
- Content provenance and refresh/update strategy.

## Implementation requirements

- Deliver the format requested by the user. If single-file HTML is requested, put all CSS/JS inline and supply the entire source, not placeholders. If exact React/Three/WebGL source cannot be faithfully integrated that way, explain the constraint and choose the smallest reliable setup allowed.
- Mobile-first responsive layout; test both portrait and landscape, plus larger tablet and desktop widths.
- Semantic HTML, correct heading order, meaningful alt text, accessible form labels, visible keyboard focus, touch target sizing, and suitable text contrast.
- Interactive controls must do something real; no dead buttons, fake availability, inert links, or forms that silently discard messages.
- Use loading and error states for any network-dependent feature.
- Images should not unexpectedly shift content; provide dimensions/aspect ratios.
- Prioritize main content loading; defer heavy media and offscreen interactive scenes.
- Respect reduced motion and offer graceful WebGL fallbacks.
- Use framework/library features purposefully; don't include multiple libraries with overlapping responsibilities unless needed.
- Clean up listeners, observers, timelines, RAF loops, GPU resources, and timers on component teardown.
- Avoid horizontal overflow, trapped keyboard focus, inaccessible dialogs, text clipping, and oversized modals.
- Add SEO and metadata based on verified content, not fabricated rating or business claims.
- Follow appropriate data privacy and security practices for forms, embedded services, third-party scripts, and user data.

## Dialog / premium interactive menu rules

If a complete catalogue, restaurant menu, product list, or detailed content belongs inside an on-page overlay:

- Use actual structured HTML data and navigation where possible; do not merely embed a PDF and label it interactive.
- Handle open/close, Escape, focus trap, focus return, and background scrolling correctly.
- Provide an always-reachable close control, keyboard access, and readable type on mobile.
- Ensure search/category tabs reflect the actual content and handle zero results.
- Large lists should be performant (grouping, progressive rendering or virtualization if needed).
- Decorative shaders and 3D effects must not obscure text or make the dialog unusable.

---

# PHASE 4A — SEO, LOCAL SEARCH, AND AI ANSWER DISCOVERABILITY

**Non-negotiable:** Search-engine visibility is part of building a usable public website. **SEO is not a promise of ranking.** Great metadata alone cannot force indexing, top positions, citations or traffic. Optimize the site's real information and technical eligibility, then measure what happens after publication.

## SEO workflow — research → plan → implement → validate → maintain

1. **Research search intent and actual audience language.** Determine brand-name queries, product/service queries, locations served, customer problems, competitor search vocabulary and seasonal questions. Research official sources and relevant search results when available. Do not insert unverified keyword volume, fabricated search volume, or confident ranking forecasts.
2. **Map 1 primary intent per significant URL.** Example categories for a *generic* business: Home (identity/offer), Services (what/how), Locations (where), Gallery (evidence), Contact (action), Articles/FAQ (genuine questions). A one-page site can rank, but important content must still have indexable textual structure and navigable anchors; use real pages when multiple distinct intents warrant them.
3. **Build valuable answers before inserting keywords.** Write concise, accurate, first-hand descriptions, real products/services, specifications, prices where confirmed, location/hours where applicable, policies, process, common questions and actual proof. Use people-first words; avoid fake testimonials, keyword stuffing, doorway location pages, near-duplicate AI pages, automated misinformation, and manipulative comparisons.
4. **Ensure crawl/index eligibility.** Prefer meaningful semantic HTML in the initial rendered document (static/SSR/prerender when sensible). Google's crawler can render JS, but important content must not depend exclusively on canvas, WebGL, hover, button-click-only fetches, inaccessible modals or authentication. Essential page links use real crawlable `<a href>` URLs, not JS-only click handlers. Avoid accidental `noindex`, blocked CSS/JS, broken canonical URLs or unintentional CDN/bot restrictions.
5. **Provide appropriate metadata.** Unique descriptive `<title>` per page; one clear visible H1; meaningful heading hierarchy; an accurate, unique meta description; `<html lang>`; charset/viewport; favicon; absolute canonical URL (once deployed); `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, and Twitter/X card metadata when relevant. Meta description is not a guaranteed snippet and neither it nor title has an exact universal character cutoff; write for clear search intent rather than an arbitrary length rule.
6. **Build an indexable information architecture.** Descriptive lowercase URL slugs, internal linking from related pages, logical breadcrumbs for deeper sites, server 200/301/404 behavior, no orphan pages, correct links even with JavaScript disabled where possible, content in main DOM instead of only in WebGL/canvas, and navigation that remains functional for assistive technology.
7. **Generate a real sitemap and robots policy.** Publish a valid `sitemap.xml` of canonical, indexable URLs and a `robots.txt` that does not accidentally block desired public content; reference the sitemap. These are separately hosted files where needed. If the user explicitly mandates only one HTML file, explain which host-level SEO artifacts require separate deployment files/configuration rather than inventing nonexistent files. A sitemap is a hint, **not an indexing guarantee**.
8. **Use structured data only when truthful and applicable.** Add valid schema.org JSON-LD for the actual business/content type, using appropriate types such as `Organization`, specific `LocalBusiness` subtype (`Restaurant`, `Store`, etc.), `BreadcrumbList`, `Product`/`Offer`, `Article`, `Event`, `VideoObject` or `WebSite` where genuinely supported. Dates, prices, images, addresses and actions must match visible content and verified facts. Do not add self-serving review stars, fictional `aggregateRating`, spammy FAQs or schema types merely to chase rich results. Follow Google's supported feature requirements and validate.
9. **Local search for physical businesses.** When applicable, verify the official business name, address, phone, hours, category, website, location pin, service area and official photos; align website and Google Business Profile/Maps data and legitimate directories. Add directions/contact actions and accurate `LocalBusiness` schema. Do not create fake listings, reviews, locations or business hours. A site alone cannot replace owner-controlled Google Business Profile verification.
10. **Images, video, internationalization.** Descriptive filenames, meaningful alt text describing the visual (not keyword spam), responsive sizes and image sitemap where useful, accessible video captions/transcripts where useful, lazy-loading below-the-fold images but prioritizing the real LCP/hero asset. For multilingual sites, implement actual translations, correct language tagging and valid `hreflang` only when pages truly exist. Prevent duplicate URLs or incorrect locale canonicals.
11. **Performance/technical hygiene.** Optimize Core Web Vitals, mobile usability, HTTPS, secure redirects, caching and response status, image LCP loading, layout stability, navigation and readable content. Avoid intrusive interstitials. No autoplay asset should prevent core content from becoming accessible or indexable.
12. **Verify in actual tools after deployment.** Use Google Search Console (ownership verification, sitemap, URL Inspection, indexing/crawl issues, Web Vitals and performance), Google Rich Results Test, Schema Markup Validator, PageSpeed Insights/Lighthouse and Bing Webmaster Tools. For changed Bing/participating search URLs, consider IndexNow where supported and valid. Not all checks are possible without ownership; mark those as **OWNER ACTION NEEDED**, not complete.
13. **Measure and iterate monthly.** Track index coverage, meaningful queries, qualified organic traffic, click-through trends, canonical errors, schema errors, broken links, Core Web Vitals, conversions and contact actions. Fix genuine searcher needs and errors. Avoid meaningless raw traffic or keyword ranking boasts.

## AI-search and answer-engine optimization — grounded, not magical

**Search discoverability and AI citation eligibility overlap.** Google's official guidance says its AI Overviews/AI Mode rely on foundational SEO, useful original content, index eligibility and text that systems can access. There is **no special Google AI schema** and no need to create `llms.txt` or unusual markup for AI Overviews. An `llms.txt` file is an *optional experiment for other services*, not a Google ranking factor, indexing prerequisite or substitute for HTML and XML sitemaps.

**Do this:**

- Put authentic, verifiable answers to relevant questions in **readable DOM text** near the appropriate content: what the business offers, who it serves, where/when, cost or booking process when confirmed, delivery/service region, accessibility, and material differences or limitations.
- Express clear entity identity: consistent official name, factual description, location when relevant, product/service terminology, logo, official social/organization links, and accurate `sameAs` only where truly owned/associated.
- Provide distinctive firsthand information and evidence—real photography, real methods, qualified staff, original product specs, actual portfolio, cited sources, verifiable contact methods. Avoid generic AI-generated filler at scale.
- Make important answers available in indexable server HTML or reliable render output—not solely in a JS-opened menu, hidden offsite PDF, shader, canvas, or interactive graphic. A visual popup can coexist with supporting semantic sections or dedicated crawlable pages.
- Make the website's visible text, metadata and structured data mutually consistent. Include dates or update times where they truly matter; refresh stale facts.
- Respect the owner's crawler choices. Verify robots rules and firewall/CDN policies for Googlebot and Bingbot. For ChatGPT search discoverability, review the current **OpenAI OAI-SearchBot** crawler rules; distinguish it from **GPTBot** (training-related crawler). Do not change privacy/training permissions without owner consent. Other AI search providers have different policies and no blanket `allow all bots` requirement.
- For local businesses, improve official Google Business Profile completeness and correct location data so users searching maps/AI assistance see accurate information.
- Track organic search, qualified inquiries and available AI-search citation/reporting features where provided by search providers; do not infer an assistant will mention the site just because the metadata exists.

**Do NOT do this:**

- Promise first-page Google ranking or guaranteed ChatGPT/Copilot citation.
- Fabricate FAQ pages, reviews, ratings, awards, credentials, locality pages or customer questions as search manipulation.
- Treat `llms.txt`, `FAQPage` schema, keyword stuffing, invisible text, mass-generated blog posts or paid citation schemes as a shortcut. Google ended its FAQ rich-result feature in 2026; never promise FAQ rich results based solely on FAQ schema.
- Block normal search crawling accidentally while claiming SEO success.
- Assume embedded PDF menus, WebGL text or image-only text provide an equivalent indexable answer to clean semantic HTML.
- Misrepresent AI-generated imagery as documentary proof of real premises, people, stock or product outcomes.

## Baseline implementation contract (adapt to each website)

When the user requests a public website, produce, in the real deliverable as appropriate:

- A valid semantic document and meaningful copy in an indexable main region.
- Working `<head>` metadata: document title, description, viewport, character encoding, canonical **only when exact deployed URL is known**, favicon, Open Graph, social preview, proper language.
- Functional headings (one primary H1 per page as a useful convention, not a rigid SEO ranking law), descriptive text links, structured internal navigation and logical page/section labeling.
- A validated JSON-LD block *when applicable and verified*; never fill unknown business properties with sample values in a published site.
- Accessible compressed images and genuinely useful alt text.
- `robots.txt`, `sitemap.xml`, redirects and relevant host config where the deployment format permits; disclose any missing host-specific artifact.
- A concise SEO implementation note: verified source facts, assumptions, key queries/intents, checks performed, what remains dependent on domain ownership or business approval.

## SEO & AI-search release checklist

### Research and content
- [ ] Business/entity name, offer, contact points, target audience and local intent verified or flagged.
- [ ] Main search intentions mapped to real pages or sections without fake location doorway pages.
- [ ] Content specific to this business, accurate, original, helpful and readable in plain language.
- [ ] Major customer questions answered in accessible text; not solely in a PDF, canvas or hidden interaction.
- [ ] No fake reviews, metrics, service claims, keyword stuffing or automatically multiplied low-value pages.

### Technical indexing and metadata
- [ ] Each page has a meaningful unique `<title>`, main heading, meta description, language and valid viewport.
- [ ] Canonical URL is real, correct and consistent with live links, redirects and sitemap.
- [ ] Essential CSS, JS and page HTML crawlable; no unintentional `noindex`, bad headers, robots blocks or bot firewall challenges.
- [ ] XML sitemap includes only intended canonical, indexable public URLs and works at actual host path.
- [ ] `robots.txt` is accurate, publicly reachable and respects site-owner indexing policy.
- [ ] Real links in navigation, crawlable internal links, sensible URLs and correct HTTP status behavior.
- [ ] Open Graph/Twitter social previews use real sharable images and working absolute URLs.
- [ ] Structured JSON-LD valid, truthful and supported; no invented ratings, dates or features.
- [ ] Responsive media, alt descriptions and LCP image optimization implemented; no search-only invisible content.
- [ ] Language alternatives, `hreflang`, canonical and locale are correct if multilingual.

### Local and AI discoverability
- [ ] Physical location, phone, hours and categories match official sources and/or owner-approved records where relevant.
- [ ] Google Business Profile/Maps verification and completeness listed as owner action if access is needed.
- [ ] AI search eligibility relies on indexable answers, originality and normal SEO, not unsupported GEO hacks.
- [ ] OpenAI search bot and other crawler choices inspected without conflating search crawling and model training.
- [ ] No mandatory `llms.txt` claim; no fabricated FAQ-rich-result promise.

### Measured validation
- [ ] Google Rich Results Test / Schema Validator checked if accessible; record warnings and errors.
- [ ] Google Search Console domain verification, sitemap and URL Inspection checked after launch **only if account access exists**, otherwise marked pending owner action.
- [ ] Bing Webmaster Tools and optional IndexNow checks completed where available.
- [ ] Lighthouse/PageSpeed and site crawler checks run; reports labeled lab/field correctly.
- [ ] Organic visibility and user actions monitored over time; **never guarantee SEO outcome**.

### SEO stop conditions

A public website is **not SEO-approved** if its main information is inaccessible to crawlers, important facts are false, canonical/indexing directives are contradictory, structured data is fabricated, or metadata/URL behavior is broken. If publishing controls are unavailable, deliver a truthful **SEO-ready implementation pending domain verification**, not a false claim of indexing or ranking.

---

# PHASE 5 — EVIDENCE-BASED QA GATES

Use this checklist as a **release gate**. A box can be checked only after observation or testing, not because the code appears plausible.

## 1. Discovery and direction

- [ ] Public business research conducted first when relevant and tools available; results not invented.
- [ ] Relevant decisions resolved through research, brief and professional defaults before user questions.
- [ ] User asked no more than 0–3 essential questions for a normal project, preferably fewer.
- [ ] Question bank used internally rather than sent as an overwhelming form.
- [ ] No repeated questions whose answers are already available.
- [ ] Brand, audience, primary conversion and major constraints established.
- [ ] Genuine differentiation identified and backed by suitable facts/assets.
- [ ] Visual references inspected and compared thoughtfully.
- [ ] Design directions rejected/accepted for explicit reasons.
- [ ] Scope and output format confirmed or reasonably assumed.
- [ ] User's protected elements and forbidden changes listed.

## 2. Art direction and originality

- [ ] The site would not look equally appropriate for five unrelated industries.
- [ ] Original logo/brand assets are correctly used when supplied.
- [ ] Colors serve semantic and emotional roles; do not look randomly generated.
- [ ] No default purple/blue-gradient hero, neon blob, generic SaaS glass UI or copy-paste Bento cards without genuine brand justification.
- [ ] Repeated AI-template patterns audited; brand-specific replacements implemented.
- [ ] Font choices suit the brand, with a readable system for dense content.
- [ ] Hero is distinctly composed and communicates the business within three seconds.
- [ ] Every section has a distinct purpose and considered visual composition.
- [ ] Visual rhythm includes intentional contrast in scale, whitespace, density and material.
- [ ] Photography/art direction is consistent but not mechanically repetitive.
- [ ] Decorative effects reinforce the subject and do not create a generic tech-demo aesthetic.
- [ ] Real brand-specific details are visible throughout the site.
- [ ] Buttons and UI controls have a consistent, distinctive design language.

## 3. Writing and trust

- [ ] Headlines are specific, useful, natural, and not cliché-driven.
- [ ] Calls to action use clear, relevant verbs.
- [ ] Body copy is concise without becoming vague.
- [ ] Products, prices, opening times, services and addresses are verified.
- [ ] No invented reviews, awards, ratings, partners, statistics, or guarantees.
- [ ] Claims have appropriate proof, references, or internal approval.
- [ ] Terms and menu labels match what the real business uses.
- [ ] No lorem ipsum, unexplained placeholder, dead-end section, or generic filler.
- [ ] Copy is reviewed aloud for human plausibility and brand voice.

## 4. Images and media

- [ ] Authenticity requirements and source permissions checked.
- [ ] No fake/stock photo is mislabeled as the real person, location, or product.
- [ ] Every hero/gallery image has a deliberate crop/contain decision.
- [ ] No critical image subject cut off at target viewport widths.
- [ ] Images are individually usable when required, not merged into an uneditable collage.
- [ ] AI enhancement preserves authorized factual details and believable textures.
- [ ] Images visually match brand lighting, color, materials and camera perspective.
- [ ] Responsive resolutions and lazy/eager loading priorities are set.
- [ ] Dimensions/aspect ratios prevent layout shifts.
- [ ] Captions/alt text are useful and accurate.
- [ ] Video/audio controls are accessible and never unexpectedly block the page.

## 5. Motion and 3D — preserve ambition, prove quality

- [ ] Every requested effect/component is present in the implementation tracker.
- [ ] Named third-party effects are genuinely integrated or deviations transparently explained.
- [ ] Each animation has a specified section, purpose, trigger and states.
- [ ] Signature moments feel intentional and visually distinct.
- [ ] Timing, easing, physics, stagger and depth feel like one coherent site.
- [ ] Pointer movement, hover, clicks, drag, swipe and scroll do not conflict.
- [ ] Rapid scrolling, reverse scrolling, resizing, and route changes don't break scenes.
- [ ] Scroll is never trapped in unskippable experiences.
- [ ] No animation hides essential content or prevents action.
- [ ] Touch and keyboard users have equivalent functional access.
- [ ] Reduced-motion behavior works and remains visually considered.
- [ ] Low-power/WebGL-unsupported devices receive an intentional fallback.
- [ ] Offscreen render loops pause and restart correctly.
- [ ] 3D resources, observers, listeners and timelines clean up properly.
- [ ] The site retains rich motion where appropriate; performance is improved through engineering rather than arbitrarily removing requested effects.

## 6. Navigation, components, and functional UX

- [ ] Main navigation is self-explanatory and responsive.
- [ ] Primary action is easy to locate in every relevant context.
- [ ] Every control works with mouse, touch, and keyboard as appropriate.
- [ ] Every form has validation, submission feedback and real destination/backend where required.
- [ ] Every modal handles focus, close, background scroll and mobile layout.
- [ ] Filters, carousels, search, tabs and lists maintain correct state.
- [ ] Empty/loading/error/success states are implemented and inspected.
- [ ] No fake buttons, missing pages, broken links or accidental external redirects.
- [ ] Browser back/forward behavior is reasonable for navigation and overlays.
- [ ] Footer contains useful, verified information rather than purely decorative filler.

## 7. Responsive design and accessibility

- [ ] Tested at 320/360/390px or the agreed smallest widths.
- [ ] Tested at 768px tablet and tablet landscape.
- [ ] Tested at 1280/1440px desktop and an appropriately larger screen.
- [ ] No horizontal page scrolling unless intentionally part of a local carousel.
- [ ] No clipped text, distorted imagery, overlapping navigation or tiny tap targets.
- [ ] Contrast passes applicable WCAG 2.2 AA text/control requirements.
- [ ] Visible keyboard focus, logical focus order and semantic landmarks.
- [ ] Modal and other interactive controls have correct accessible names/roles/states.
- [ ] Screen-reader labeling and heading order checked.
- [ ] Keyboard-only navigation is usable.
- [ ] `prefers-reduced-motion` is respected.
- [ ] Landscape phones and touch laptops remain usable.

## 8. Performance and resilience

- [ ] Main hero/image/heading are not unnecessarily delayed by a loader.
- [ ] Page maintains acceptable responsiveness while scrolling and interacting.
- [ ] Animations avoid unnecessary forced layout and repeated expensive calculations.
- [ ] Three.js/WebGL scenes initialize lazily when possible.
- [ ] Image sizes, formats, compression and caching are appropriate.
- [ ] Font files/weights are limited and have safe fallbacks.
- [ ] No unused libraries, duplicated render loops, or unnecessary requests.
- [ ] No unexpected cumulative layout shifts.
- [ ] Lighthouse/PageSpeed or equivalent measurements recorded when tools allow.
- [ ] Aim for real-user Core Web Vitals: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (75th percentile); these are **targets**, not claims of guaranteed results.
- [ ] Poor network, missing images, unsupported effects and integration failure are handled gracefully.

## 9. Technical verification

- [ ] Actual final code exists in the requested format.- [ ] Build and syntax checks pass.
- [ ] Page opens in an actual browser/environment where available.
- [ ] Console and network errors reviewed and addressed.
- [ ] All specified components/features exercised manually or through automated tests.
- [ ] User-facing facts and links checked against source of truth.
- [ ] Assets/licenses and attribution requirements satisfied.
- [ ] External services are integrated only where real credentials/configuration exist.
- [ ] No exposed secrets, misleading fake forms, or unexpected data collection.
- [ ] Accessibility issues checked with both tools and manual interaction.
- [ ] Final deliverable includes clear setup/deploy instructions only where needed.

## 9A. SEO and AI-discovery verification

- [ ] Library review documented: 10 catalogs considered when available, exact chosen source variants, licenses, and only necessary packages installed.
- [ ] SEO intent/page map and content verified; no fabricated search facts.
- [ ] Page titles, descriptions, correct canonical, Open Graph and appropriate JSON-LD implemented.
- [ ] Semantic page content crawlable without interaction-only or canvas-only dependencies.
- [ ] Sitemap, robots and Search Console/Bing handoff accounted for honestly.
- [ ] Local business/profile facts cross-checked where applicable.
- [ ] AI-search eligibility treated as search indexability + useful content, not guaranteed AI answers.
- [ ] Rich Results Test/Schema Validator and index eligibility tested where possible, or explicitly marked not tested.

## 10. Acceptance and honesty

- [ ] Compare result against user's original requirements, not just the latest screenshot.
- [ ] Every preserved design element remains intact unless change was approved.
- [ ] No required component silently omitted or replaced.
- [ ] Show actual evidence for claims like “tested,” “source-integrated,” and “working.”
- [ ] Distinguish completed, partially completed, unverified, and blocked items.
- [ ] No praise substituted for critical review or actual defect fixes.
- [ ] Site is not described as production-ready while critical checks fail.
- [ ] Deliver the actual requested website/artifact rather than a plan of future work.

---



# PHASE 5A — STRICT NEGATIVE CHECKLIST: WHAT THE AI MUST NEVER SHIP

This list is intentionally adversarial. If any item is true, fix the issue before describing the site as finished.

## Design and content red flags

- [ ] A page could be relabeled for an unrelated industry without major visual/content changes.
- [ ] Hero contains abstract filler instead of a recognizable offer, product, person, place or service.
- [ ] Multiple sections use the identical card geometry with no content-specific reason.
- [ ] Font selection copies a trend and is unsuitable for the brand's culture or audience.
- [ ] Text is unreadable over the selected *real* photograph at any target width.
- [ ] Source photography shows a different business or product but implies it is the subject.
- [ ] A generated photo depicts fictional premises, staff, menu items or outcomes as real documentary evidence.
- [ ] Important customer details are buried below decorative storytelling.
- [ ] Testimonials, logos, prices, counters, reviews, awards or ratings are invented.
- [ ] A page repeats vague slogans rather than answering actual customer questions.
- [ ] Images are flattened into a collage where separate responsive assets are required.
- [ ] Buttons, menu links, filters or form submissions are decorative/inert.
- [ ] Scarcity, countdown timers, fake urgency or hidden costs manipulate visitors.

## Interaction and animation red flags

- [ ] The hero waits for a long intro before showing essential content.
- [ ] Every section uses the same reveal regardless of material and narrative role.
- [ ] Each heading has independently competing movement and timing.
- [ ] Auto-playing sliders move while a visitor reads and have no pause/manual navigation.
- [ ] Essential interactions work with hover but fail on keyboard/touch.
- [ ] The site scroll-jacks or blocks exiting an immersive scene.
- [ ] A reduced-motion user loses information or cannot finish a task.
- [ ] Drag/hover instructions are not discoverable through visual cues.
- [ ] Offscreen canvas/WebGL scenes continue rendering without a reason.
- [ ] Actual requested third-party component was silently replaced with a visual imitation.
- [ ] Animated texts or scenes disappear entirely without JavaScript or on deep links.
- [ ] Slider/scroll effect fights native swipe and wheel behavior.
- [ ] User action is delayed by flourish rather than acknowledged immediately.

## SEO / discoverability red flags

- [ ] The only useful descriptions of services, menu items or gallery content are inside a canvas, WebGL scene, click-loaded dialog or image.
- [ ] Every route has the same copy-pasted title/description and no distinct search intent.
- [ ] Location, hours, products, prices or business names in metadata/schema disagree with visible page facts.
- [ ] `noindex`, robots restrictions or canonical URLs accidentally prevent intended indexing.
- [ ] Schema adds fake five-star ratings, fabricated reviews, false `Offer` values or non-existent events.
- [ ] SEO is described as “perfect”, “guaranteed #1” or “guaranteed AI cited” without evidence.
- [ ] Extra `llms.txt` or obscure AI markup is claimed to be required for Google AI Overviews.
- [ ] A library effect was chosen only because it was trendy, without actual fit, source license or performance plan.

## Engineering and release red flags

- [ ] The site fails at small viewports, 200% zoom or landscape screens.
- [ ] Modal lacks correct focus management, Escape, visible close and focus return.
- [ ] External data or network failure leads to a blank section or false success state.
- [ ] Third-party scripts lack a clear purpose, source review or privacy consideration.
- [ ] Untrusted external data is interpolated unsafely into HTML.
- [ ] No test was performed, but the work is described as tested or production-ready.
- [ ] Source assets/licensing or rights to likeness/photography are unresolved and silently ignored.
- [ ] The primary image is lazily loaded despite being critical to first render.
- [ ] Scroll-triggered animations create unexpected layout shifts.
- [ ] Old listeners, textures, timers or RAF loops remain active after unmount.
- [ ] Sensitive secrets are stored in client-side code or logs.
- [ ] Site requires a non-existent backend while pretending a reservation/payment worked.

A **checked item here indicates a defect**, unlike the positive completion checklist in Phase 5. Review every red flag and explicitly determine whether it is true or false; **any true critical red flag blocks release**. Unknown items remain unverified rather than silently passing. Never relabel a blocker as a minor design preference.

# PHASE 5B — VISUAL, FUNCTIONAL AND ACCESSIBILITY TEST PROTOCOL

## Test matrix (minimum; expand according to project)

| Context | Test |
|---|---|
| 320 / 360 / 390 / 430 px phones | Portrait, touch target reach, typography, images, navigation, overlays, no horizontal overflow |
| 600–900 px | Tablet portrait and landscape, changing grid, touch or trackpad |
| 1024 / 1280 / 1440 / 1920 px | Desktop composition, mouse/keyboard, hover, density and cinematic scenes |
| 200% / 400% zoom as applicable | Text reflow, focused items visible, sticky elements not blocking reading |
| Reduced motion | Information visible, no forced spatial animation, usable navigation and dialogs |
| Keyboard only | Tab order, Shift+Tab, Enter/Space, Escape, arrows where applicable, clear focus |
| Slow network / offline | Honest failure states, sensible media loading, no blank hero |
| No WebGL / low power | Non-broken fallback with equivalent useful content and controls |
| Browser back + deep links | Menu/dialog routing, scroll history, refresh and state restoration |
| Multiple images or content lengths | Long titles, translated text, empty search, form errors, image aspect extremes |

## Accessibility acceptance notes

- Target **WCAG 2.2 AA** unless another applicable standard is specified; test with automated tools **and** manual keyboard/screen-reader workflows.
- Standard text contrast should generally be **≥4.5:1**, large text **≥3:1**, and non-text UI graphics/control boundaries where applicable **≥3:1**; use official WCAG definitions and exceptions.
- Keep focus visible and not hidden by sticky chrome. Support reflow, text resize, and accessible control names.
- Avoid unsafe flashing; offer reduced-motion behavior. WCAG 2.3.3 (animation from interactions) is an **AAA** criterion, but supporting user motion preferences remains an important design expectation.
- Modal dialogs should follow WAI-ARIA APG: initial focus inside, contained Tab navigation, Escape, inert background, focus return, accessible title.
- Carousels and galleries should have manual controls, meaningful labels, and no forced automatic advancement of essential information.

## Performance acceptance notes

- Measure LCP, INP and CLS using available field or lab tools; Google “good” thresholds are **LCP ≤2.5 seconds**, **INP ≤200 ms**, **CLS ≤0.1** at the 75th percentile where real user data exists.
- When real-user data doesn't exist, report **lab observations only**; don't claim field thresholds were met.
- Inspect the waterfall: preload/fetch-prioritize the true hero/LCP image when helpful; do **not** lazy-load it. Lazy-load offscreen gallery media and nonessential shaders.
- Test scroll/input responsiveness under CPU throttling or realistic midrange devices where available.
- Track dropped frames, long tasks, memory, WebGL context count, texture sizes and repeated layout work for rich-motion sites.
- No arbitrary animation count limit; optimize choreography and runtime. A visually rich site that meets experience budgets is a success.

## Severity and evidence protocol

- **Critical / block release:** false facts, data loss, inaccessible essential task, nonfunctional primary CTA, deceptive success, exposed secrets, serious privacy/security issue, broken small-screen access.
- **Major / fix before approval:** failed named component, broken gallery/menu, heavy jank, blocked normal scrolling, unreadable copy, incorrect photography, major crop or layout defect.
- **Minor / fix next pass:** subtle easing, spacing, microtypography, optional secondary effects that do not impede comprehension.

For every claimed successful test, record: `what was tested | device/viewport/browser | action | expected | observed | pass/fail | evidence`. If no browser/device was available, mark **NOT TESTED**, not “likely fine.”

## Hard stop after final review

Do not describe the website as complete when any P0 requirement, critical defect, unverified mandatory component integration, unconfirmed transaction/booking route, or rights issue remains. You may deliver a clearly labeled **prototype** or **partial implementation**, identify remaining work precisely, and preserve the approved design while fixing it.

# PHASE 6 — SECOND-PASS DESIGN CRITIQUE

Before delivery, conduct an independent review with three lenses:

**A. Visitor review (first 3 seconds, first 20 seconds, entire scroll)**
- What is this? Why should I care? What can I do next?
- Which section made me want to keep scrolling? Why?
- Are there moments of boredom, repetition, confusion, or forced waiting?
- Does this site make the business genuinely more desirable *for truthful reasons*?

**B. Art-director review**
- Could the hero and typography belong to another brand unchanged?
- Is the site too uniformly styled or too visually noisy?
- Do details look intentional at 100% scale, not only in a zoomed-out screenshot?
- Are layout, image framing, typography, motion and copy functioning as one art direction?
- Which effect is poorly integrated? Fix the integration, not automatically delete the animation.

**C. Senior-engineer review**
- Does every interactive state work, including keyboard and touch?
- Are there race conditions from images loading, ScrollTrigger measurements, modal focus or component lifecycle?
- Are renders and event listeners controlled correctly?
- Does performance remain acceptable on a representative mid-range phone?
- Do all named library components behave like their actual source?

Write an internal defect list ranked `critical → major → minor`, fix the highest-impact issues, and re-test affected flows.

---

# OUTPUT CONTRACT

When the task is **discovery only**:
- First research the subject and answer as much of the internal discovery bank as possible.
- Present a concise evidence-backed summary of what the AI already knows and what it proposes.
- Ask **zero to three** essential owner-only questions in total, preferably one at a time; do not interrogate.
- Explain an uncommon question briefly, offer “you decide” for flexible choices, and proceed after a partial answer.
- Never offload public research, design-system decisions, or technical choices to the user.

When the task is **design/research only**:
- Provide specific art direction, concrete component placement, distinct reference analysis, and clear verified-vs-proposed status.
- Do not generate an unrelated document or pretend the site has been built.

When the task is **build**:
- Deliver actual code or files in the requested format, complete and usable.
- Keep explanations concise; lead with the result.
- If exact required components demand a build system, identify that incompatibility honestly; do not pass imitation code off as original.
- Preserve all agreed functionality, visuals, interactions and content.
- Report only tests actually performed, and flag remaining limitations.
- Implement SEO at build time, not as a future suggestion: accurate page metadata, crawlable information, relevant JSON-LD, correct URLs, and sitemap/robots where deployment allows; identify owner-required Search Console/Business Profile steps.
- Review at least ten relevant component catalogs when online/tools permit and use precise original components only when justified; document the shortlist without bloating the final answer.

When the task is **audit/improve**:
- Inspect the existing actual files/site, not just user descriptions.
- Find reproducible defects; prioritize fixes; preserve unrelated design and behavior.
- Re-test and deliver the corrected website or clearly scoped replacement.

**Final quality principle:** A memorable site is not created by suppressing animation, forcing a survey on a busy owner, or applying a generic aesthetic formula. It comes from *independent business research + 0–3 crucial user questions when needed + authentic identity + rigorous art direction + well-built rich interactions + truthful content + real testing*. The AI carries the research and design workload.


---

# RESEARCH AND REFERENCE STANDARDS

These sources inform the rules above. They are **external research**, not claims that any particular website was tested. The purple-gradient / AI-template blacklist is a **design heuristic**, not a measured scientific claim that a color or shape is universally bad. Recheck cited sources if standards or browser behavior change.

1. **Nielsen Norman Group — Prompt to Design Interfaces:** why vague AI design prompts often produce poor hierarchy or repeated elements and how real references/content improve specificity. https://www.nngroup.com/articles/vague-prototyping/
2. **Nielsen Norman Group — The Role of Animation and Motion in UX:** state transitions, spatial relationships and meaningful motion. https://www.nngroup.com/articles/animation-purpose-ux/
3. **Nielsen Norman Group — Animation for Attention and Comprehension:** attention costs, animation predictability and avoidable delays. https://www.nngroup.com/articles/animation-usability/
4. **Nielsen Norman Group — 3 Common IA Mistakes:** informative navigation labels and information scent. https://www.nngroup.com/articles/3-ia-mistakes/
5. **Baymard Institute — Homepage Carousel UX:** evidence of frequent carousel usability problems and tested mitigation patterns. https://baymard.com/research-articles/homepage-carousel
6. **Google web.dev — High-performance CSS Animations:** compositor-friendly transforms and opacity, and testing noncomposited work. https://web.dev/articles/animations-guide
7. **Google web.dev — Core Web Vitals:** LCP/INP/CLS definitions, thresholds and field measurement. https://web.dev/articles/vitals
8. **Google web.dev — Optimize LCP:** critical image loading priority and avoiding lazy loading for the LCP image. https://web.dev/articles/optimize-lcp
9. **Google web.dev — Responsive Image Art Direction:** context-dependent crop and source selection. https://web.dev/learn/images/prescriptive
10. **W3C — WCAG 2.2:** reflow, text contrast, focus, target size, animation and flashing criteria. https://www.w3.org/TR/WCAG22/
11. **W3C WAI-ARIA APG — Modal Dialog Pattern:** modal behavior, keyboard control, focus management, labeling. https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
12. **MDN — `prefers-reduced-motion`:** operating-system motion preferences and responsive alternatives. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
13. **Google Search Central — Helpful, Reliable, People-First Content:** user value, source accuracy, trustworthy claims. https://developers.google.com/search/docs/fundamentals/creating-helpful-content
14. **OWASP — Web Frontend Security Cheat Sheet:** safe dynamic markup, integration risks, protecting users. https://cheatsheetseries.owasp.org/cheatsheets/Web_Frontend_Security_Cheat_Sheet.html
15. **OWASP — Third-Party JavaScript Management:** threat model and controls for external scripts. https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html

16. **Nielsen Norman Group — AI Prototyping in Real Design Contexts:** vague briefs can lead to generic typography and styling; richer context helps. https://www.nngroup.com/articles/ai-prototyping/
17. **Nielsen Norman Group — UX-Context Design:** contextual evidence makes AI-generated design more relevant to real users. https://www.nngroup.com/articles/ux-context-design/

**Research-to-practice principle:** External standards define tested usability, performance, security and accessibility constraints. The project's **creative direction**—colors, editorial composition, detailed motion style, degree of maximalism, photographic mood—requires reasoned art direction and user approval; do not disguise subjective preferences as scientific facts.

## Component catalog sources (verify live before every build)

18. React Bits — component catalog: https://reactbits.dev/ (Blur Text, Animated Content, Circular Gallery)
19. ThreeUI Community — original GitHub source and variants: https://github.com/MengTo/threeui
20. GSAP — ScrollTrigger, SplitText, Flip: https://gsap.com/docs/v3/Plugins/
21. Motion — React useScroll, AnimatePresence: https://motion.dev/docs
22. Motion-Primitives — Magnetic, Text Effect, Morphing Dialog: https://motion-primitives.com/docs
23. Aceternity UI — Floating Navbar, 3D Card Effect, Animated Testimonials: https://ui.aceternity.com/components
24. Magic UI — Dock, Marquee, Shimmer Button: https://magicui.design/docs/components
25. shadcn/ui — Dialog, Sheet, Navigation Menu, Carousel: https://ui.shadcn.com/docs/components
26. Radix Primitives — accessible Dialog, Tabs, Navigation Menu: https://www.radix-ui.com/primitives/docs/components
27. Embla Carousel — carousel and plugins: https://www.embla-carousel.com/docs/plugins
28. Swiper — Navigation, Pagination, Thumbs, EffectCoverflow: https://swiperjs.com/swiper-api
29. Three.js — ShaderMaterial, InstancedMesh, EffectComposer: https://threejs.org/docs/
30. React Three Fiber / Drei — Canvas, Float, Environment: https://r3f.docs.pmnd.rs/ and https://drei.docs.pmnd.rs/
31. Lenis — smooth scrolling and GSAP integration: https://github.com/darkroomengineering/lenis
32. Codrops Creative Hub — research demos, not a single installable library: https://tympanus.net/codrops/hub/

## Official SEO and AI-search primary sources (checked November 2026)

33. Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
34. Google AI Features and Your Website: https://developers.google.com/search/docs/appearance/ai-features
35. Google Guide to Optimizing for Generative AI Features: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
36. Google Search's `LocalBusiness` Structured Data: https://developers.google.com/search/docs/appearance/structured-data/local-business
37. Google Build and Submit Sitemap: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
38. Google JavaScript SEO Basics: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
39. Google Rich Result and Schema Validation: https://developers.google.com/search/docs/appearance/structured-data
40. Google Search Console Guide: https://developers.google.com/search/docs/monitor-debug/search-console-start
41. Google Business Profile and Local Search: https://developers.google.com/search/docs/appearance/establish-business-details
42. Bing Webmaster Guidelines and IndexNow: https://www.bing.com/webmasters/help/bing-webmaster-guidelines-30fba23a and https://www.indexnow.org/
43. OpenAI Crawler Documentation (`OAI-SearchBot` and `GPTBot` are distinct): https://developers.openai.com/api/docs/bots

**Important 2026 update:** Google's AI optimization guidance explicitly says ordinary SEO remains foundational; no dedicated AI schema/`llms.txt` is required for Google AI Overviews or AI Mode. Google removed FAQ rich-result support in May 2026. Do not resurrect old SEO checklists without checking current official guidance. Schema eligibility never guarantees a rich result, and ordinary search eligibility never guarantees indexing, rankings or AI citations.