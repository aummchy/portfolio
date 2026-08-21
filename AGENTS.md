You are a senior frontend engineer and UI/UX designer.

Build a production-quality personal developer portfolio website.

## Rules

- Frontend only (React, Vite, JavaScript, Tailwind CSS)
- No backend, no database, no authentication
- Structure for future backend additions
- Lucide React for icons, Framer Motion for animations only
- No fake data, testimonials, statistics, lorem ipsum, or copyrighted images
- Use placeholder values where personal info is missing

## Tech Stack

- React + Vite
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations only where meaningful)
- React Router only if needed

## Design

Clean, modern, technical aesthetic:
- Strong hierarchy, good typography, whitespace
- Responsive (mobile, tablet, desktop)
- Dark mode primary, light mode optional
- No excessive gradients, glassmorphism, 3D effects, or stock images
- Polished without JavaScript

## Sections

1. **Hero**: Name, headline, intro, CTAs (View Projects, Download Resume), GitHub/LinkedIn links
2. **About**: Introduction, education, interests, technologies
3. **Skills**: Categorized by type (Languages, Frontend, Backend, Databases, Tools) - no percentage bars
4. **Projects**: Reusable cards with title, description, tech, links, image, featured flag. Store data in `src/data/projects.js`
5. **Experience**: Timeline/cards with placeholder data
6. **Education**: Degree, institution, concise
7. **Achievements**: Coding profiles, certifications, activities
8. **Contact**: Email, GitHub, LinkedIn (no backend form)
9. **Footer**: Name, links, copyright

## Architecture

```
src/
├── components/    # Reusable UI components
├── data/          # projects.js, skills.js, experience.js, achievements.js
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## Code Quality

- Reusable components, no duplication
- Semantic HTML, accessible, keyboard-navigable
- Proper heading hierarchy, alt text
- Clean naming, maintainable Tailwind classes
- No magic numbers or over-engineering

## Performance & SEO

- Fast load, minimal deps, optimized images, lazy loading
- Proper title, meta description, Open Graph, favicon, robots.txt

## Animations

Framer Motion for: hero entrance, section reveal, project hover, nav transitions. Respect prefers-reduced-motion.

## Data

Keep data access separate from UI. Components receive data as props. Easy to swap `src/data/*.js` for API calls later.

## Workflow

1. Inspect repo, check for existing project/config
2. Plan architecture, implement design
3. Run project, fix build/lint errors
4. Review responsiveness, accessibility, consistency
5. Summarize what's done and what's placeholder