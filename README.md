# Ahmed Hazem — Developer Portfolio

A modern, professional portfolio website for Ahmed Hazem — Computer Science graduate and Implementation Engineer preparing for Master's studies in Germany.

## Design Concept

The portfolio follows a **"Developer Hub"** visual metaphor:

- **Hero (Three.js):** A central glowing icosahedron represents the developer hub — the core where ideas, skills, and projects connect. Nine floating skill nodes orbit around it (React, Next.js, TypeScript, AI, APIs, Data, Automation, Problem Solving, Germany Journey), linked by subtle connection lines. Mouse movement gently influences rotation and node positions.
- **Rest of the site:** Clean, readable sections with restrained animations (Framer Motion) — fast, accessible, and professional.

Three.js is used **only in the hero section** to keep the rest of the site lightweight and SEO-friendly.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Button, Badge, Card, Separator) |
| 3D Hero | Three.js, @react-three/fiber, @react-three/drei |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                  # Next.js App Router (layout, page, globals)
├── components/
│   ├── hero/             # Three.js canvas and 3D scene
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, About, Experience, Skills, Projects, Contact
│   ├── shared/           # Reusable cards, badges, headings
│   └── ui/               # shadcn/ui primitives
├── data/                 # Projects, experience, skills (local data files)
├── lib/                  # Utility functions
└── types/                # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install & Run

```bash
cd ahmed-hazem-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Customization

1. **Projects** — Edit `src/data/projects.ts` with real descriptions, URLs, and tech stacks.
2. **Experience** — Update `src/data/experience.ts` with your work history.
3. **Skills** — Modify `src/data/skills.ts` and hero node labels.
4. **Contact** — Update email and social links in `ContactSection.tsx` and `Footer.tsx`.
5. **CV** — Replace `public/cv.pdf` with your actual resume.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Deploy.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Performance Notes

- Three.js canvas is **disabled on mobile** (`< md` breakpoint) — a CSS gradient fallback is shown instead.
- Canvas uses `dpr={[1, 1.5]}` to limit pixel density.
- Scene uses lightweight procedural geometry (icosahedron, torus, octahedron) — no external 3D models.
- Hero canvas is dynamically imported with `ssr: false` to avoid server-side rendering overhead.

## License

Private portfolio project — © Ahmed Hazem.
