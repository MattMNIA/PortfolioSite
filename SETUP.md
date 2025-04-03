# Portfolio Website Setup Guide

## 1. Initial Project Setup

```bash
# Create new Vite project with React and TypeScript
npm create vite@latest portfolio -- --template react-ts

# Navigate to project directory
cd portfolio

# Install base dependencies
npm install

# Install Tailwind CSS and its dependencies correctly
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss7-compat
```

## 2. Configuration Files

Create these configuration files:

tailwind.config.js:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

postcss.config.js:
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss7-compat': {},
    autoprefixer: {},
  },
}
```

Add to src/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Project Structure Setup

Create the following directory structure:

```bash
mkdir -p src/{components/{layout,sections,ui},hooks,context,styles,data,utils}
```

## 4. Initial Files to Create

1. Create theme context (src/context/ThemeContext.tsx)
2. Set up layout components (Header, Footer, Navigation)
3. Create section components (About, Projects, Skills, Experience)
4. Set up global styles

## 5. Development Steps

1. Configure Router:
   - Set up routes in App.tsx
   - Create layout structure

2. Implement Theme Toggle:
   - Add ThemeContext
   - Create ThemeToggle component

3. Create Core Components:
   - Start with layout components
   - Build section components
   - Add UI components as needed

4. Add Content:
   - Create data files in src/data
   - Add your personal information
   - Set up projects showcase

5. Implement Animations:
   - Add Framer Motion animations
   - Set up GSAP animations
   - Implement scroll triggers

## 6. Development Server

```bash
# Run the development server
npm run dev
```

## 7. Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 8. Deployment

1. Create a GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

3. Deploy to Vercel:
   - Connect your GitHub repository to Vercel
   - Follow the deployment prompts
   - Your site will be live!

## Next Steps

1. Start with the layout components
2. Add basic routing
3. Implement the theme toggle
4. Begin building section components
5. Add animations progressively

Need help with any specific component implementation? Let me know!
