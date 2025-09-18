# Ashley Lee-Vigneau Portfolio - Next.js

A modern, dynamic portfolio built with Next.js, TypeScript, and Tailwind CSS featuring:

- 🌙 **Dark Mode Toggle** - Seamless theme switching with persistence
- 📱 **Responsive Design** - Mobile-first approach with smooth animations
- ⚡ **Performance Optimized** - Static generation with dynamic theming
- ♿ **Accessibility First** - WCAG 2.1 AA compliant
- 🎨 **Dynamic CSS** - CSS variables for real-time theme changes

## 🚀 Features

### Dynamic Theming
- CSS variables for instant theme switching
- Light/dark mode with localStorage persistence
- Smooth transitions between themes
- Custom color palette with brand colors

### Modern UI Components
- Reusable Button component with variants
- Animated ProjectCard with hover effects
- Theme toggle with smooth icon transitions
- Responsive navigation with mobile menu

### Performance & SEO
- Static Site Generation (SSG)
- Optimized images with Next.js Image component
- Comprehensive meta tags and structured data
- Lighthouse score optimized

## 🛠️ Tech Stack

- **Framework**: Next.js 12.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Theme System

The portfolio uses a sophisticated theme system with CSS variables:

```typescript
// Light theme
const lightTheme = {
  primary: '#2238cc',
  background: '#ffffff',
  text: '#1e293b',
  // ... more colors
}

// Dark theme
const darkTheme = {
  primary: '#3c5cff',
  background: '#0f172a',
  text: '#f1f5f9',
  // ... more colors
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Projects, About, Contact
│   ├── ui/             # Reusable components
│   └── providers/      # Theme context
├── lib/
│   ├── theme.ts        # Theme configuration
│   └── projects.ts     # Project data
├── pages/
│   ├── _app.tsx        # App wrapper
│   └── index.tsx       # Home page
└── styles/
    └── globals.css     # Global styles + CSS variables
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Works with static export
- **GitHub Pages**: Requires static export
- **AWS S3**: Static hosting with CloudFront

## 🔧 Customization

### Adding New Projects
Edit `src/lib/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'new-project',
    title: 'Project Name',
    role: 'Your Role • Technologies',
    technologies: ['Tech1', 'Tech2'],
    achievements: ['Achievement 1', 'Achievement 2'],
    links: {
      caseStudy: '#',
      liveDemo: '#'
    }
  }
]
```

### Customizing Colors
Update `src/lib/theme.ts` and `src/styles/globals.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... more variables */
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Ashley Lee-Vigneau**
- Email: ashleyloreal.lee@gmail.com
- LinkedIn: [ashleylee-vigneau](https://www.linkedin.com/in/ashleylee-vigneau)
- GitHub: [alyrlee](https://github.com/alyrlee)
