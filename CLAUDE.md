# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Type-check (tsc -b) then bundle (vite build)
npm run lint       # Run ESLint across all files
npm run preview    # Serve the production build locally
```

There is no test suite.

## Architecture

This is a 3D portfolio website that layers a scrollable HTML page over a Three.js canvas. The core challenge is keeping the 3D scene synchronized with the HTML scroll position.

**Entry:** `src/main.tsx` → `src/App.tsx` renders `<Background />` behind `<ScrollContent />`.

**3D layer (`src/components/Background.tsx`):**
- Creates a full-screen Three.js canvas via `@react-three/fiber`
- `AnimatedMesh` uses `@react-three/drei`'s `ScrollControls` to drive rotation based on scroll offset
- Each frame, the mesh projects its corners to screen space and writes a bounding box into a shared ref (`cubeScreenPos`)
- Bloom post-processing via `@react-three/postprocessing`
- Custom GLSL shaders on the mesh for the glow effect

**HTML layer (`src/components/scroll-content/`):**
- `ScrollContent.tsx` is the page container; it reads `cubeScreenPos` to position content around the 3D object
- `pages/` holds sections: `Hero`, `About`, `Skills`, `Focus`, `Contacts`
- `MutationObserver` + `ResizeObserver` in `ScrollContent` keep the total page height in sync with Three.js `ScrollControls`

**UI utilities (`src/components/ui/`):**
- `AnimatedText.tsx` — Framer-motion staggered fade-in wrapper
- `Text.tsx` — custom hover-effect text component

**Sync mechanism:** The scroll position lives inside `@react-three/drei`'s `ScrollControls`. Three.js `useFrame` reads it each tick, rotates the mesh, and pushes screen-space coordinates into `cubeScreenPos`. HTML sections consume that ref to align themselves with the 3D object.

## TypeScript

Strict mode is on. `noUnusedLocals` and `noUnusedParameters` are enforced — unused variables will fail `npm run build`.
