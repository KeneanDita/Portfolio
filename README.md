# Portfolio

This repository contains a personal portfolio website built with Next.js and Tailwind CSS. It showcases projects, social links and a resume. The site follows the Next 13+ app directory conventions and is structured for easy development and deployment (for example, to Vercel).

## Quick overview

- Framework: Next.js
- UI: React with Tailwind CSS
- Repo structure highlights: pages and components live under `src/app` and `src/components`

## Project structure

Top-level (important items):

- `src/app/` - Next.js app routes and pages (uses app router)
  - `page.js` - home page
  - `globals.css` - global styles
  - `publications/` - sub-pages for publications
  - `Resume/` - resume page
- `src/components/` - React components (e.g. `ThemeToggle.jsx`, ui primitives)
- `src/lib/` - helper utilities (e.g. `utils.js`)
- `public/Resume/` - static resume files or assets
- `package.json` - scripts and dependencies

This structure is intentionally small and focused so you can find components and pages quickly.

## Requirements

- Node.js (recommended: 18.x or newer)
- npm (or another Node package manager)

## Install dependencies

Open PowerShell in the repo root and run:

```powershell
npm install
```

## Local development (PowerShell)

Start the dev server with:

```powershell
npm run dev
```

This runs `next dev` (see `package.json`). Visit `http://localhost:3000` to view the site.

## Deployment

This project is ready to deploy to platforms that support Next.js (for example Vercel). Typical steps for Vercel:

1. Connect the repository in Vercel.
2. Set the framework preset to Next.js (auto-detected).
3. Use the default build command (`npm run build`) and output (Next.js defaults).

For other hosts, build (`npm run build`) then serve the `.next` output with `npm run start` (or follow your host's Next.js guide).

## License

This repository does not include an explicit license file. If you want to make the project public with a license, add a `LICENSE` file (for example MIT) and update this README.
