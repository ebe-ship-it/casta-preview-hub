# CASTA PROJECT REGISTRY

A permanent index of website previews created with ChatGPT and hosted in this repository.

## Active website projects

| Project | Purpose | Preview | Source folder | Status |
|---|---|---|---|---|
| EMBER & EARTH | Fictional cinematic open-fire restaurant concept with immersive photography, editorial type, responsive gallery, menu detail dialogs, and scroll reveals. | https://casta-preview-hub.netlify.app/ember-earth/ | `ember-earth/` | Committed; awaiting Netlify verification |
| ELSEWHERE | Cinematic travel editorial experience with immersive landscape imagery, animated typography, scroll storytelling, and interactive destination sections. | https://casta-preview-hub.netlify.app/elsewhere/ | `elsewhere/` | Deployed; visual and mobile quality still subject to testing |
| CASTA Gallery | Cinematic portfolio homepage showing the studio's website experiments. | https://casta-preview-hub.netlify.app/ | `/` | Committed; awaiting Netlify verification |
| CASTA Motion Lab | Interactive playground with magnetic button, flip card, frosted glass, typography reveal, and card stack. | https://casta-preview-hub.netlify.app/motion-lab/ | `motion-lab/` | Committed; awaiting Netlify verification |

## How to use this notebook
- Add one row whenever a new website is created.
- Keep existing project folders and URLs unchanged unless explicitly requested.
- Record the design concept, interactions, and development status.
- A successful GitHub commit does not itself prove that a Netlify deployment succeeded.
- This registry lists projects in this preview hub, not every unrelated site or earlier experiment.

## Project notes

### ELSEWHERE
- Concept: original premium travel-editorial website.
- Design: dark forest-green atmosphere, large editorial type, cinematic landscape photos.
- Interactions: scroll-linked motion, layered destination cards, navigation and destination detail interactions.
- Technology: static HTML/CSS/JavaScript; external libraries/assets may require internet.
- Preview: https://casta-preview-hub.netlify.app/elsewhere/
- Next: verify mobile behavior, image loading and performance.

### CASTA Preview Hub
- GitHub: https://github.com/ebe-ship-it/casta-preview-hub
- Netlify: https://casta-preview-hub.netlify.app/
- Rule: each new static website goes into its own named subfolder, so existing previews remain accessible.

### CASTA Gallery redesign
- Replaced the basic homepage with a cinematic editorial gallery.
- Features: landscape hero, motion reveals, ELSEWHERE project card, links to Motion Lab and registry, responsive layout.

### CASTA Motion Lab
- Original lightweight experiments: pointer-follow button, accessible tap flip card, frosted glass, text highlight reveal, tap card stack.
- No claims of true optical refraction or production-ready 3D models.
- Preview: https://casta-preview-hub.netlify.app/motion-lab/

## Shared design playbook
- [CASTA DESIGN INTELLIGENCE](skills/CASTA_DESIGN_INTELLIGENCE.md): researched reference sources, 30 original motion patterns, typography and art-direction principles, accessibility, performance rules, and deployment workflow.
- Use this playbook for new Casta Studio website builds; continue to research individual references and verify live behavior before implementation.

### EMBER & EARTH
- Concept: fictional, original premium restaurant brand inspired by open-fire cooking, seasonal plates and intimate dining.
- Experience: curtain hero entrance, staggered oversized type, scroll-progress line, glass navigation, parallax hero, animated marquee, reveal and clip transitions, tap-friendly dish dialogs, horizontally swipeable gallery, full-screen mobile menu, reduced-motion fallbacks.
- Photography: remotely loaded Unsplash imagery (requires network; verify image availability and license before commercial use). A separate AI-generated hero study was produced but not embedded in the deployment because binary asset upload was unavailable.
- Reservation status: concept only; no booking backend or fabricated restaurant location, pricing or reviews.
- Research: https://restaurantdesignguy.com/project/nero-vela/ ; https://www.signalstudios.uk/ ; https://websiteunpacked.com/restaurant-website-design
- Preview: https://casta-preview-hub.netlify.app/ember-earth/
- QA pending: confirm Netlify deployment, images, performance and real-device responsive behavior.
