# Ashley Portfolio — Tailwind Build Setup
Generated: 2025-09-16 17:46

This project converts your Tailwind CDN setup into a proper PostCSS build, adds **dark mode**, **project tags**, and **JSON-LD** for SEO.

## Structure
.
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── src/
│   └── input.css
├── dist/
│   └── styles.css (built output)
└── public/
    └── portfolio.html

## Scripts
- `npm run dev` — start Tailwind in watch mode
- `npm run build` — compile & minify CSS for production

## One-time setup
```bash
cd ashley-portfolio-build
npm install
```

## Develop
```bash
npm run dev
# Edit public/portfolio.html and src/input.css
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
Copy these two items into your existing repo `alyrlee/alyrlee.github.io`:
- `public/portfolio.html` → `/ashleylee-portfolio/portfolio.html`
- `dist/styles.css` → `/ashleylee-portfolio/dist/styles.css`

Also ensure any referenced assets exist in your repo:
- `/ashleylee-portfolio/assets/img/headshot.jpg`
- `/ashleylee-portfolio/assets/icons/favicon.svg`
- `/ashleylee-portfolio/assets/Ashley_Lee-Vigneau_Resume.pdf`

Commit & push:
```bash
git add .
git commit -m "Add Tailwind build + dark mode + tags + JSON-LD"
git push origin main
```

Visit:
```
https://alyrlee.github.io/ashleylee-portfolio/portfolio.html
```

## Notes
- `darkMode: "class"` is enabled; toggle via the moon/sun button in the header (saved in localStorage).
- `@tailwindcss/typography` is included for nicer text in the About section.
- JSON-LD (Person + CreativeWork for projects) is embedded in `<head>` of `public/portfolio.html`.
- Lighthouse tips: serve images as WebP/AVIF, add width/height, enable caching via GH Pages headers (optional).