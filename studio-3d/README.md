# CASTA 3D Studio Starter

A **separate Vite + React project** inside the preview hub. The existing Cloudflare Pages root remains a static site; this starter is not automatically deployed or built.

## Setup

```bash
cd studio-3d
npm install
npm run dev
```

Build with `npm run build`. Publish `studio-3d/dist` as a separate Cloudflare Pages project, or integrate its compiled output into a future deployment pipeline. Do not change the current preview hub's build output directory to this subfolder.

## Stack and purpose
- **three**: actual WebGL scene, perspective camera, physical materials, lighting, imported GLB/GLTF assets.
- **@react-three/fiber**: React scene composition and animation loop.
- **@react-three/drei**: environment lighting, shadows, model loaders, camera helpers.
- **@react-three/postprocessing**: optional restrained bloom/depth effects; installed as a dependency but not enabled in the starter.
- **gsap + ScrollTrigger**: cinematic choreography, scrubbed timelines, camera tracks and reveals.
- **lenis**: smooth scroll coordinated with ScrollTrigger.
- **Vite + React**: bundling and reusable components.

## Reality check
The initial 3D object is a procedural metallic sculpture, **not photorealistic product photography**. For realistic perfume bottles, furniture, or cars, import a properly modeled, textured and licensed GLB with PBR maps, studio HDR lighting, and appropriate shadows. Do not claim CSS geometry is real 3D.

## Mobile quality
Limit pixel ratio, compress GLB meshes/textures, lazy-load below-the-fold scenes, avoid expensive full-screen postprocessing, pause animation offscreen, honor reduced motion, and test on actual Android hardware. Device FPS is not yet benchmarked.

## Installation status
The package manifest and starter source are committed to GitHub. Dependencies will be downloaded by `npm install` in a working Node environment. This commit does not mean npm packages were installed, compiled, or tested.
