# Design System Migration Guide

## Overview

This document outlines the foundation work completed for migrating the JIT marketing landing page to the new design system. The migration follows a Test-Driven Development (TDD) approach to ensure quality and maintainability.

## Completed Tasks

### 1. Testing Infrastructure
- **Jest Configuration**: Set up Jest with Next.js using the `next/jest` preset
- **React Testing Library**: Configured for component testing
- **Test Scripts**: Added `npm test` and `npm test:watch` commands
- **Path Aliases**: Configured Jest to recognize `@/` imports

### 2. Design Tokens Integration
- **Design Tokens File**: Created `src/lib/design-tokens.json` containing all color, typography, spacing, and component specifications
- **Tailwind Configuration**: Updated to include Inter font family
- **CSS Custom Properties**: Updated `globals.css` with design system color values for both light and dark modes
- **Typography System**: Implemented consistent heading and text styles

### 3. Component Additions
- **ImageWithFallback**: Created a new component for better image handling with loading states
- **ThemeProvider**: Implemented using `next-themes` for dark mode support
- **ThemeToggle**: Created a theme switcher component with dropdown menu

### 4. Dark Mode Support
- **Theme Provider**: Integrated into the root layout with system preference detection
- **CSS Variables**: Configured for both light and dark color schemes
- **Class-based Theming**: Using Tailwind's dark mode class strategy

## Testing Approach

All features were developed using TDD with the following test files:
- `src/__tests__/setup.test.tsx` - Verifies Jest configuration
- `src/__tests__/tailwind-config.test.ts` - Tests Tailwind configuration
- `src/__tests__/design-tokens.test.tsx` - Validates CSS custom properties
- `src/__tests__/theme-provider.test.tsx` - Tests theme switching functionality

## Next Steps

The following tasks remain to complete the full migration (Tasks #34-42 in Task Master):

1. **Migrate Core UI Components** (Task #34)
   - Replace existing UI components with design system equivalents
   - Update component APIs and props
   - Implement Lucide React icons

2. **Update Header and Footer** (Task #35)
   - Implement new Header component with mobile navigation
   - Update Footer with design system styling

3. **Implement Homepage Layout** (Task #36)
   - Replace hero section
   - Update training programs showcase
   - Integrate with Supabase data

4. **Update Lead Capture Form** (Task #37)
   - Migrate form to new components
   - Maintain server action integration

5. **Migrate Authentication UI** (Task #38)
   - Update all auth pages with new components
   - Preserve Supabase authentication logic

6. **Update Training Program Details** (Task #39)
   - Implement TrainingProgramLanding component
   - Set up dynamic routing

7. **Update Dashboard UI** (Task #40)
   - Migrate dashboard components
   - Update data display elements

8. **Implement Responsive Design** (Task #41)
   - Ensure mobile-first approach
   - Test across all breakpoints

9. **Final Testing & Optimization** (Task #42)
   - Performance testing
   - Cross-browser compatibility
   - Accessibility audit

## Component Mapping

Current components that need migration:
- `Button` → Already exists, may need style updates
- `Card` → Already exists, may need style updates
- `Input` → Already exists, may need style updates
- `Select` → Already exists, may need style updates
- All other UI components in `src/components/ui/`

## Environment Setup

No additional environment variables are required for the design system. The existing Supabase configuration remains unchanged.

## Development Workflow

1. Always write tests first (TDD approach)
2. Use the design tokens for all styling decisions
3. Ensure components work in both light and dark modes
4. Test responsive behavior at all breakpoints
5. Maintain existing functionality while updating UI

## Resources

- Design Tokens: `src/lib/design-tokens.json`
- Design System Guide: `ai_docs/Design_System_for_JIT/DESIGN_SYSTEM_USAGE_GUIDE.md`
- Component Examples: `ai_docs/Design_System_for_JIT/components/`

## Testing Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run specific test file
npm test -- path/to/test.tsx
```