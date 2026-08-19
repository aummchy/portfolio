You are a senior frontend engineer and UI/UX designer.

Build a production-quality personal developer portfolio website for me.

IMPORTANT:

- Frontend only for now.
- Do NOT create a backend.
- Do NOT create an Express server.
- Do NOT add MongoDB, authentication, or a database.
- The project should be structured so a backend can be added later without major refactoring.

TECH STACK

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router only if routing is actually useful
- Lucide React or another lightweight icon library
- Framer Motion for meaningful animations only
- No unnecessary dependencies

GOAL

Create a modern, professional developer portfolio suitable for:

- internship applications
- software engineering placements
- recruiters
- GitHub visitors
- technical project showcasing

The website should feel like a real software engineer's portfolio, NOT a generic AI-generated portfolio template.

DESIGN DIRECTION

Use a clean, modern, technical aesthetic.

Requirements:

- Strong visual hierarchy
- Excellent typography
- Plenty of whitespace
- Responsive on mobile, tablet and desktop
- Subtle animations
- Smooth scrolling
- Professional color palette
- Dark mode as the primary theme, with a light-mode option if it can be implemented cleanly
- Avoid excessive gradients
- Avoid excessive glassmorphism
- Avoid huge animated backgrounds
- Avoid unnecessary 3D effects
- Avoid overusing animations
- Avoid generic stock images

The website should look polished even with JavaScript disabled as much as reasonably possible.

SITE STRUCTURE

Create these sections:

1. HERO

- My name
- Short professional headline
- Short introduction
- Primary CTA: View Projects
- Secondary CTA: Download Resume
- Links to GitHub and LinkedIn
- Subtle entrance animation

2. ABOUT

- Short professional introduction
- Education
- Current focus/interests
- Technologies I work with

3. SKILLS
   Organize skills into categories:

Languages:

- C++
- JavaScript
- Python

Frontend:

- HTML
- CSS
- React
- Tailwind CSS

Backend:

- Node.js
- Express.js

Databases:

- MongoDB
- MySQL
- PostgreSQL

Tools/Other:

- Git
- GitHub
- Linux
- REST APIs

Do not represent every skill using meaningless percentage bars.

4. PROJECTS

Create reusable project cards.

Each project should support:

- title
- description
- tech stack
- GitHub link
- live demo link
- image
- featured flag

Initially create placeholder project data that is easy to replace.

Use a centralized data structure such as:

src/data/projects.js

Do NOT hardcode project information throughout JSX components.

5. EXPERIENCE / INTERNSHIPS

Create a clean timeline/card-based section.

Use placeholder data where information is not known.

Make the data easy to replace later.

6. EDUCATION

Show:

- Degree
- Institution
- Relevant information

Keep this section concise.

7. ACHIEVEMENTS / ACTIVITIES

Create a section for:

- coding profiles
- competitive programming
- certifications
- achievements

Use placeholder data where necessary.

8. CONTACT

Frontend-only contact section.

For now:

- Email
- GitHub
- LinkedIn

Do NOT build a custom backend contact form.

Instead, make the architecture ready for a future contact API.

9. FOOTER

- Name
- GitHub
- LinkedIn
- Email
- Copyright

COMPONENT ARCHITECTURE

Use reusable components.

Suggested structure:

src/
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── About.jsx
│ ├── Skills.jsx
│ ├── Projects.jsx
│ ├── ProjectCard.jsx
│ ├── Experience.jsx
│ ├── Education.jsx
│ ├── Achievements.jsx
│ ├── Contact.jsx
│ └── Footer.jsx
│
├── data/
│ ├── projects.js
│ ├── skills.js
│ ├── experience.js
│ └── achievements.js
│
├── assets/
│
├── App.jsx
├── main.jsx
└── index.css

You may improve this structure if there is a better reason to do so.

IMPORTANT CODE QUALITY REQUIREMENTS

- Use reusable components.
- Avoid giant components.
- Avoid duplicated JSX.
- Keep content separate from UI where practical.
- Use semantic HTML.
- Use accessible buttons and links.
- Add meaningful alt text to images.
- Use proper heading hierarchy.
- Make keyboard navigation work.
- Do not use arbitrary magic numbers everywhere.
- Keep Tailwind classes maintainable.
- Use clean naming conventions.
- Do not over-engineer.

RESPONSIVENESS

Test the layout conceptually for:

- 320px mobile
- 375px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

The mobile layout must not simply be a scaled-down desktop layout.

PERFORMANCE

Optimize for:

- fast initial load
- minimal dependencies
- optimized images
- lazy loading where appropriate
- minimal unnecessary JavaScript
- good Lighthouse performance

SEO

Add:

- proper title
- meta description
- Open Graph metadata
- semantic HTML
- favicon support
- robots.txt
- sitemap structure if appropriate

Do not add fake SEO content.

ANIMATIONS

Use Framer Motion only where it improves UX.

Examples:

- Hero entrance
- Section reveal
- Project card hover
- Navigation transitions

Respect prefers-reduced-motion.

DATA / FUTURE BACKEND

Although this version is frontend-only, structure the project so that later I can replace:

src/data/projects.js

with API calls such as:

GET /api/projects

without rewriting the entire UI.

Therefore:

- Components should receive project data as props where appropriate.
- Keep data access separate from presentation.
- Do not couple UI components to a future database.

DO NOT

- Do not create a backend.
- Do not install unnecessary libraries.
- Do not invent achievements.
- Do not invent work experience.
- Do not claim technologies I haven't listed.
- Do not add fake testimonials.
- Do not add fake statistics such as "50+ projects".
- Do not use lorem ipsum.
- Do not create fake GitHub/LinkedIn URLs.
- Do not create a fake contact form backend.
- Do not use copyrighted images.
- Do not make every section animated.
- Do not make the website look like a template.

WORKFLOW

Before coding:

1. Inspect the existing repository.
2. Determine whether a React/Vite project already exists.
3. Reuse existing configuration where appropriate.
4. Inspect package.json.
5. Do not overwrite existing work unnecessarily.

Then:

1. Plan the component architecture.
2. Implement the design.
3. Run the project.
4. Check for build errors.
5. Run linting if configured.
6. Fix errors.
7. Review responsiveness.
8. Review accessibility.
9. Review visual consistency.
10. Provide a concise summary of what was implemented and what information I still need to replace.

IMPORTANT:
If personal information is missing, use clearly marked placeholder values rather than inventing facts.

Start by inspecting the repository and then implement the portfolio.
