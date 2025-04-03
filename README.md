# Software Engineer Portfolio

A modern, interactive portfolio website built with React, showcasing my skills, projects, and professional experience.

## Design Overview

This portfolio features a minimalist aesthetic with flashy animations and interactive elements that create a memorable user experience. The design follows a modular component architecture for maintainability and scalability.

## Key Features

- **Theme Toggle**: Switch between light and dark modes
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive UI**: Engaging animations and micro-interactions
- **Modular Structure**: Built with reusable React components

## Sections

### 1. About Me
- Professional headshot with animated entrance
- Concise, engaging bio highlighting my journey and passion
- Social media links with hover animations (GitHub, LinkedIn, Twitter)
- Downloadable resume
- Interactive elements revealing personal interests/hobbies

### 2. Projects
- Interactive project grid with filterable categories
- Hover effects revealing project thumbnails
- Expanding cards/modal popups for detailed project information:
  - Project title and description
  - Technologies used with icon representation
  - Key features and challenges overcome
  - Links to GitHub repository and live demo
  - Screenshot carousel/video demos

### 3. Skills
- Animated skill visualization (progress bars/charts)
- Categorized skills (Frontend, Backend, DevOps, etc.)
- Interactive skill cards with proficiency levels
- Tooltip descriptions for each technology
- Animated tech stack icons

### 4. Experience
- Interactive timeline showing professional journey
- Animated reveal of roles and responsibilities on scroll
- Company logos and employment dates
- Key achievements with visual indicators
- Education history with relevant coursework

## Technologies Used

### Core
- React.js (with hooks and context API)
- TypeScript
- React Router for navigation

### Styling
- Tailwind CSS for utility-based styling
- CSS Modules for component-specific styles
- CSS Variables for theming

### Animations
- Framer Motion for page transitions and micro-animations
- GSAP for complex animation sequences
- Intersection Observer API for scroll-triggered animations

### Additional Libraries
- React Icons for consistent iconography
- Lodash for utility functions
- Axios for potential API calls

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Experience.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Timeline.tsx
│       └── ThemeToggle.tsx
├── hooks/
│   ├── useTheme.ts
│   └── useIntersection.ts
├── context/
│   └── ThemeContext.tsx
├── styles/
│   ├── global.css
│   └── variables.css
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
├── utils/
│   └── animations.ts
├── App.tsx
└── index.tsx
```

## Design Principles

1. **Intuitive Navigation**: Users should always know where they are and how to navigate
2. **Performance First**: Optimized animations and asset loading for smooth experience
3. **Accessibility**: WCAG compliance with keyboard navigation and screen reader support
4. **Progressive Enhancement**: Core content available even if JavaScript is disabled

## Animation Strategy

- Entrance animations for section headers
- Staggered reveal animations for lists and grids
- Parallax scrolling effects for background elements
- Hover state animations for interactive elements
- Page transition animations between routes
- Scroll-triggered animations for content reveals

## Deployment

The site is configured for deployment on Vercel/Netlify with continuous integration from GitHub.

## Browser Support

Optimized for modern browsers (Chrome, Firefox, Safari, Edge)

## Future Enhancements

- Blog section with filterable categories
- Dark/light theme persistence
- Contact form with email functionality
- Internationalization support
- Performance analytics dashboard
