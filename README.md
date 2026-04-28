# Animated Portfolio Landing Page 🎨
 
A personal portfolio website built with React and Tailwind CSS featuring scroll animations and a typewriter effect.
 
## Features
- Typewriter animation on hero section (infinite loop with delete effect)
- Blinking cursor effect
- Scroll-triggered fade-in animations using IntersectionObserver
- Skills section with badge grid
- Experience section with real Wipro work experience
- Projects section linking to real GitHub repos
- Contact form with email, phone, and LinkedIn links
- Fully responsive layout
## Tech Stack
- React + Vite
- Tailwind CSS v3
- Custom React hooks (useScrollAnimation)
- IntersectionObserver API
## How to run
1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
## Components
```
App
  ├── Navbar
  ├── About (typewriter animation)
  ├── Skills (badge grid)
  ├── Experience
  │     └── ExperienceCard
  ├── Projects
  │     └── ProjectCard
  └── Contact
```
 
## Reflection
**Project:** Animated Portfolio Landing Page  
**Date completed:** 20/03/2026  
**What I built:** A personal portfolio showcasing my details, projects, skills and experience  
**Main concepts learned:** useEffect, useRef, custom hooks, IntersectionObserver, CSS keyframe animations, grid layouts, scroll animations  
**What was hardest:** Enabling the scroll animations — specifically debugging the useScrollAnimation hook (had a typo in isIntersecting)  
**What I'd do differently:** Wrote majority of the code myself, would improve styling and UI design  
**Feature I added myself:** Infinite typewriter animation (types out, deletes, and loops)  
**Time taken:** 5 working days  
 
## Live Demo
[GitHub Repo](https://github.com/Vishal-subudhi/Animated_Portfolio)
