# JIT.EDU.PH Website Recreation

A complete recreation of the Jairo Institute of Technology website built with React, TypeScript, and Tailwind CSS using shadcn/ui components.

## Project Structure

```
├── App.tsx                          # Main application entry point
├── components/
│   ├── Header.tsx                   # Navigation header with mobile menu
│   ├── HeroSection.tsx              # Hero section with CTA
│   ├── TrainingPrograms.tsx         # Training programs showcase
│   ├── Footer.tsx                   # Footer with links and contact info
│   ├── DesignSystem.tsx             # Design system documentation
│   ├── DesignSystemShowcase.tsx     # Tabbed interface for development
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Image component with fallback
│   └── ui/                          # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       └── ...                      # Other UI components
├── styles/
│   └── globals.css                  # Tailwind v4 global styles and design tokens
└── README.md                        # This file
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Modern UI Components**: Built with shadcn/ui for consistency and accessibility
- **Professional Typography**: Custom typography scale with Inter font family
- **Dark Mode Ready**: Complete dark mode support with CSS custom properties
- **Accessible**: ARIA compliant components with proper keyboard navigation
- **Performance Optimized**: Lazy loading and optimized images

## Design System

The project includes a comprehensive design system with:

- **Color Palette**: Primary (#4F46E5), secondary, muted, and semantic colors
- **Typography**: Consistent font sizes, weights, and line heights
- **Components**: Reusable UI components following design patterns
- **Spacing**: Consistent spacing scale throughout the application
- **Responsive Grid**: Flexible grid system for all screen sizes

## Components

### Header
- Responsive navigation with mobile menu
- Company branding and logo
- Navigation links with hover states
- Mobile-friendly sheet overlay

### Hero Section
- Compelling headline with brand colors
- Call-to-action buttons
- Professional hero image from Unsplash
- Avatar and badge components for branding

### Training Programs
- Grid layout of course cards
- Icon-based program categorization
- Badge system for course metadata
- Hover effects and transitions

### Footer
- Organized link sections
- Contact information with icons
- Social media links
- Newsletter signup form
- Responsive column layout

## Export Instructions

### For Figma Export
1. The main `App.tsx` file contains the clean website recreation
2. All components are self-contained with proper imports
3. Images use the `ImageWithFallback` component for Figma compatibility
4. Design tokens are defined in `styles/globals.css`

### For Development
1. Use `DesignSystemShowcase.tsx` to view both the website and design system
2. Import it in `App.tsx` if you need the tabbed interface
3. All shadcn/ui components are properly configured and ready to use

## Customization

### Colors
Edit the CSS custom properties in `styles/globals.css` to change the color scheme:

```css
:root {
  --primary: #4f46e5;        /* Primary brand color */
  --secondary: #f9fafb;      /* Secondary background */
  --muted: #f3f4f6;          /* Muted elements */
  /* ... other colors */
}
```

### Typography
The typography system is defined in the globals.css file with consistent scales:

```css
h1 { font-size: 2.5rem; font-weight: 600; }
h2 { font-size: 2rem; font-weight: 600; }
h3 { font-size: 1.5rem; font-weight: 600; }
/* ... other elements */
```

### Components
All components are modular and can be easily customized by editing the respective `.tsx` files in the `components/` directory.

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and intellisense
- **Tailwind CSS v4**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: High-quality, accessible UI components
- **Lucide React**: Beautiful, customizable icons
- **Radix UI**: Unstyled, accessible UI primitives

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational and demonstration purposes.