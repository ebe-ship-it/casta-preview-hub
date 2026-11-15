# CASTA DESIGN INTELLIGENCE — SUPER SKILL
Version: 1.0 | 2026-11-15
Scope: original cinematic, interactive, responsive websites. This is a reusable project playbook, not a plugin-installed system skill.

## Mission
Design websites that feel intentionally art-directed, emotionally clear, and interactive without sacrificing speed, accessibility, usability, or truthful content. Every section must earn its space. Motion should reinforce hierarchy, meaning, navigation, or discovery rather than exist to inflate an animation count.

## Source research — Firecrawl homepage review (2026-11-15)
These are inspiration directories, not proof of any specific effect's underlying code. Study individual examples and live behavior before claiming a technique came from them.
1. https://land-book.com — website, section, mobile, motion, OG-image and headline inspiration. Its /motion and /sections categories are particularly useful.
2. https://supahero.io — curated hero-section gallery. Source notes it has become part of Screensdesign.
3. https://pricingpages.design — tier cards, monthly/annual switches, comparison tables, calculators, FAQs, sales contact and usage pricing patterns.
4. https://socialproofexamples.com — wall of impact, testimonials, video reactions, before/after, certification and case-study presentation.
5. https://reallygoodemails.com — welcome, launch, ecommerce, newsletter and lifecycle storytelling, hierarchy and CTAs.
6. https://deck.gallery — slide/deck layout and narrative pacing for visual storytelling.
7. https://posts.design — social launch cards, brand announcements and campaign visuals.
8. https://adfolio.design — ad hook, visual and CTA analysis, especially B2B campaigns.
9. https://navbar.gallery — static, dropdown, full-screen, sidebar, search, progress and mega-menu navigation references.
10. https://ogimage.gallery — OG/social preview art direction by category, including dynamic and animated examples.
Source attribution: all linked galleries retain ownership of their showcased work. Do not copy proprietary source, protected imagery, or text.

## Default design brief
Before coding, determine: audience, user goal, brand tone, primary CTA, actual content/assets, device constraints, loading budget, and what makes this concept different. If no brand is supplied, propose one original creative direction and explain it in one sentence.
User preference baseline: premium, cinematic, expressive, non-generic, mobile-first; rich scroll motion; realistic photography; unusual expressive display fonts when legible; avoid default purple gradients, placeholder 3D objects, excessive sharp boxes, and fake glass refraction. Use real licensed or permissioned media. Handwriting is an option, not a blanket requirement.

## Creative system
### Visual direction
- Start with a concept, not a library of components. Choose a single visual metaphor that fits the content.
- Use a restrained palette: 1 base, 1 surface, 1 accent, 1 muted text; define CSS tokens. Shift colors across chapters only when the story changes.
- Typography: pair one distinctive display face (editorial, humanist, expressive or hand-drawn where appropriate) with a legible text face. Use fluid clamp() sizing, optical spacing, and strong contrast. Avoid forcing decorative fonts into long paragraphs.
- Photography: choose consistent art direction (lighting, lens, crop, human context, palette). Use AVIF/WebP, srcset/sizes, dimensions, responsive crop, and alt text. Don't stretch small images.
- Layout: asymmetry with intentional alignment; generous whitespace; mixed image scales; clear reading order. Test at 320, 360, 390, 768, 1024, 1440 widths.

### Page architecture
1. Entry/hero: instantly communicate subject and offer a clear action. One hero signature motion, not five competing ones.
2. Navigation: compact and predictable, with keyboard-accessible menu. On mobile, ensure tap targets >=44px and no sideways overflow.
3. Context: use staggered text or an image mask to explain the idea.
4. Value/offer: cards, comparisons, or editorial layouts selected for actual content.
5. Evidence: truthful social proof, case studies or verifiable outcomes; no fabricated numbers or quotes.
6. Gallery/story: choose scroll-driven gallery, card stack, or horizontal track when it makes browsing better.
7. CTA: one clear action, with obvious hover/focus/pressed states.
8. Footer: essential navigation, contact, social links and legal details when needed.
9. Share preview: original 1200x630 OG composition with subject, readable title and brand mark.

## Motion catalogue: 30 patterns
Each entry: trigger -> behavior -> intended use. Use only those justified by the page.
01. Hero curtain reveal: load -> image mask opens -> cinematic opening.
02. Headline line cascade: load -> stagger lines -> editorial hierarchy.
03. Word illumination: scroll -> words fill in reading order -> narrative emphasis.
04. Character scramble: load -> characters resolve briefly -> experimental identity; never critical text.
05. Parallax layers: scroll -> depth-separated images move subtly -> landscapes.
06. Scroll-linked color chapter: section entry -> background/ink tokens interpolate -> chapter transitions.
07. Sticky story panel: scroll -> one media frame holds while narrative changes -> case studies.
08. Horizontal gallery: vertical scroll -> controlled horizontal track -> visual collections; provide normal mobile fallback.
09. Stacked cards: scroll -> cards overlap with slight scaling -> progressive content.
10. Image clip reveal: entry -> rounded or irregular mask expands -> editorial media.
11. Image-to-fullscreen: scroll -> image scales to fill viewport -> scene transitions.
12. Split-screen wipe: drag or scroll -> before/after reveal -> redesign comparisons.
13. Text-to-image mask: scroll -> media revealed inside large lettering -> story transitions; fallback for reduced motion.
14. Depth zoom: scroll -> perspective scale with restrained range -> chapter emphasis.
15. Pin-and-swap: scroll -> fixed media switches with content -> product narrative.
16. Gallery hover preview: hover/focus -> contextual media preview -> desktop navigation.
17. Magnetic CTA: pointer -> slight attraction -> playful CTA; no hover dependence on touch.
18. Flip card: tap/keyboard -> accessible two-sided content -> stories and portfolios.
19. Tilt card: pointer -> limited 3D tilt -> gallery accents; static touch version.
20. Elastic press: click -> spring scale -> button feedback.
21. Cursor follower: pointer -> subtle media or label follows -> desktop art direction only.
22. Progressive nav reveal: scroll down -> compact nav appears -> distraction-free hero.
23. Nav underline morph: focus/hover -> sliding active indicator -> navigation clarity.
24. Fullscreen menu choreography: open -> stagger entries, focus trap, Escape close -> immersive menus.
25. Liquid-like frosted glass: scroll -> blurred translucent header, border highlight -> navigation; do not claim true physical refraction.
26. Marquee drift: idle -> slow loop -> secondary brand language; pause when appropriate.
27. SVG path draw: entry -> stroke progresses -> process storytelling.
28. Section progress rail: scroll -> progress marker -> long stories.
29. Scroll video scrub: scroll -> pre-encoded frame sequence or controlled video time -> product/cinematic narrative; use poster and fallback.
30. Image grid expansion: scroll -> tiles spread/recompose -> galleries.

## Motion engineering
- Prefer CSS transitions and IntersectionObserver for small effects; GSAP + ScrollTrigger for synchronized scroll narratives; Lenis only if needed and compatible with ScrollTrigger; Motion for React UI states.
- Never add 20 effects simply to reach a count. Aim for 1 signature transition per major section, with subtle supporting feedback.
- Avoid scroll hijacking and trapping users. Sticky sections must release reliably; support browser back, keyboard and touch.
- Prefer transform and opacity; avoid animating layout-heavy properties. Use will-change sparingly.
- Handle resize, refresh, orientation change, image load, mobile viewport changes and route changes; clean up ScrollTrigger instances.
- Respect prefers-reduced-motion: reduce; preserve content and actions without animation.
- Support low-power Android: compress assets, lazy-load below fold, avoid massive canvas/particle systems, pause offscreen video, use poster and mobile fallback.
- For scroll video: do not ship raw 4K as default. Encode responsive variants, preload metadata/poster, stream appropriate quality, and avoid expensive frame decoding on low-end phones.
- Real 3D requires proper glTF/GLB assets and Three.js or equivalent. Never substitute flimsy CSS geometry and call it photorealistic. Add static image fallback.
- True Apple-like liquid refraction needs more than backdrop-filter: consider WebGL distortion or displacement mapping when performance permits; use a polished frosted-glass fallback.

## Interaction and accessibility checklist
- Semantic HTML, descriptive links, keyboard operability, visible focus rings, aria-expanded and Escape handling for menus.
- Touch-first interactions with explicit tap affordances. Hover effects are enhancements only.
- Motion must not hide essential content; no blank sections if JS fails.
- Clear CTA hierarchy; legible contrast; no fake testimonials or fabricated impact numbers.
- Every interaction has states: idle, hover (if supported), focus, active, loading, error, disabled where relevant.
- Avoid autoplay audio. User controls media and can pause it.
- Test on a real phone, not only a desktop emulator.

## Persuasion and content
- Use plain, specific, human writing. Lead with audience benefit, then concrete proof, then action.
- Borrow principles, not copyrighted copy, from email, social proof, ad and deck galleries.
- Build honest pricing with explicit units, inclusions and conditions.
- For charity sites: dignity-first images and language, no invented impact figures, accessible donation flow.
- For client demos: clearly distinguish a concept from an official business website.

## Reference-to-implementation workflow
1. Research the requested sector with Firecrawl: source page, relevant category, 2–4 individual examples, mobile references when available.
2. Record evidence: URL, what is visible, what is inferred, screenshot if available, date inspected.
3. Extract patterns, not proprietary code: hierarchy, interaction trigger, movement, duration, easing, typography role, crop, layout.
4. Write a section-by-section motion map before coding.
5. Build original components and wire actual interactions.
6. Test function, mobile overflow, reduced motion, accessibility and performance.
7. Commit to GitHub under a unique project folder; preserve existing preview URLs.
8. Update PROJECT_REGISTRY.md with concept, interactions, asset credits, URL and known limitations.
9. Distinguish GitHub commit success from confirmed Netlify live deployment.

## Motion map template
| Section | Visual | Primary motion | Interaction | Mobile fallback | Performance note |
| Hero | Full-bleed real image | Curtain reveal | CTA | Simpler reveal | Responsive poster |
| Nav | Compact frosted pill | Scroll appearance | Accessible menu | Tap sheet | CSS blur fallback |
| Intro | Editorial text | Word illumination | None | Normal reading | No text layout thrash |
| Work | Immersive gallery | Image masks | Flip/hover preview | Tap cards | Lazy images |
| Proof | Verified examples | Subtle stagger | Expand details | Tap accordion | No fabricated stats |
| CTA | Contrast chapter | Color transition | Magnetic desktop | Normal tap | CSS only |

## Project quality gates
Reject before deployment if: fake numbers, broken image links, placeholder text, inaccessible menu, sideways mobile scroll, hidden CTA, extreme page weight, unreliable scroll pin, missing reduced-motion fallback, broken navigation, copied copyrighted material, or a claimed effect that is not actually implemented.

## Future research queue
- Deep-review individual showcased sites from Landbook /motion, Supahero hero entries and Navbar Gallery navigation examples.
- Study actual interaction via screenshots/video/browser where supported; text scraping alone cannot verify animation timing.
- Extend with original component implementations, test harness and curated image sourcing.
- Keep this skill evolving; version changes and source URLs must be logged.

## Invocation
When user says 'use my Casta super skill', 'make it cinematic', or 'build and deploy', apply this playbook, select a coherent original direction, and record the motion map. Do not copy galleries wholesale. The skill lives in this repository and can be read in later chats via connected GitHub.
