# CASTA 3D & Motion Director — Reusable build skill

## Goal
Build cinematic, original, responsive web experiences with actual GPU-rendered 3D where 3D improves the story. Reject generic template sections, fake CSS 3D passed off as realistic, excessive glow, default purple gradients, and meaningless animation.

## Research before coding
Study the client's brand, audience, assets, content and device requirements. Collect 3-5 visual references and document what is original vs inspired. Verify asset licenses. Create a motion map per section with trigger, duration, easing, fallback and user purpose.

## Toolkit
1. Three.js + React Three Fiber + Drei: WebGL, camera choreography, GLB/GLTF models, PBR materials, environment maps.
2. GSAP + ScrollTrigger: pinned chapters, scrubbed camera positions, staggered typography, image masks, gallery transitions.
3. Lenis: optional smooth scrolling; sync with GSAP ticker and disable if it harms touch or accessibility.
4. React Three Postprocessing: optional depth, subtle bloom, ambient occlusion only when performance budget permits.
5. Theatre.js: optional visual authoring of cinematic keyframes in projects that need an animation editor; not a dependency of the starter.
6. Blender or licensed photogrammetry/3D assets: real model quality must come from proper geometry and textures.

## Required motion map
- Hero: intentional entry choreography; camera establishes subject.
- First scroll: gradual dolly, orbit or focal-length change, never unmotivated spin.
- Story: staggered text and parallax layers with readable pacing.
- Showcase: masked image reveals, scroll-linked pinning only if useful.
- Product: actual model interaction with drag/touch and accessible alternatives.
- Gallery: distinct hover and tap behaviors; no hover-only content.
- Exit: graceful scene fade, clear CTA and footer.

## Performance gates
- 60fps target where feasible, degrade gracefully to 30fps on constrained phones.
- Cap DPR to 1–1.5 on low-end devices; use adaptive quality.
- Avoid giant texture downloads; use KTX2/WebP/AVIF and compressed GLB.
- Avoid scroll-jacking and excessive pinned sections.
- Pause WebGL when hidden; consider static poster on weak hardware.
- Support prefers-reduced-motion, keyboard, screen reader labels and touch.
- Test 360px, 390px, tablet, desktop, landscape and real Android before declaring production-ready.

## Delivery gates
Run npm install, build, browser/device tests, and inspect network/console errors. State what was actually verified. No invented performance measurements or unlicensed assets.
