# Phase 2 - Task 7: Navigation Menu Component - Detailed Implementation Guide

## Overview
This task involves migrating the Navigation Menu component from the design system to the main application. The Navigation Menu is a critical component for site navigation and includes support for dropdown menus, keyboard navigation, and mobile responsiveness.

## Component Structure
The Navigation Menu includes the following subcomponents:
- NavigationMenu (root container)
- NavigationMenuList (menu items container)
- NavigationMenuItem (individual menu item)
- NavigationMenuTrigger (dropdown trigger)
- NavigationMenuContent (dropdown content)
- NavigationMenuLink (navigation link)
- NavigationMenuViewport (dropdown viewport)
- NavigationMenuIndicator (active state indicator)

## Detailed Subtasks

### 7.1 Switch to main branch and pull latest changes
```bash
git checkout main
git pull origin main
```

### 7.2 Create feature branch
```bash
git checkout -b feature/phase2-task7-navigation-menu
```

### 7.3 Write Navigation Menu component tests (TDD)

Create `src/components/ui/__tests__/navigation-menu.test.tsx`:

```typescript
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../navigation-menu';

describe('NavigationMenu Component', () => {
  describe('Basic Rendering', () => {
    it('renders navigation menu with children');
    it('renders navigation menu list');
    it('renders navigation menu items');
    it('renders navigation menu links');
    it('applies proper ARIA attributes');
  });

  describe('NavigationMenuTrigger', () => {
    it('renders trigger with children');
    it('opens content on click');
    it('opens content on Enter key');
    it('closes content on Escape key');
    it('toggles aria-expanded attribute');
    it('applies hover styles');
    it('shows indicator on active state');
  });

  describe('NavigationMenuContent', () => {
    it('renders content when trigger is activated');
    it('positions content correctly');
    it('animates in and out');
    it('handles focus management');
    it('closes on outside click');
  });

  describe('NavigationMenuLink', () => {
    it('renders as anchor element by default');
    it('supports asChild prop');
    it('applies active styles');
    it('handles keyboard navigation');
    it('applies proper focus styles');
  });

  describe('Keyboard Navigation', () => {
    it('navigates with arrow keys');
    it('supports Home and End keys');
    it('maintains focus within menu');
    it('supports Tab navigation');
    it('closes dropdowns on Escape');
  });

  describe('Mobile Behavior', () => {
    it('adapts layout for mobile screens');
    it('supports touch interactions');
    it('handles viewport constraints');
  });

  describe('Accessibility', () => {
    it('has proper ARIA roles');
    it('manages focus correctly');
    it('announces state changes');
    it('supports screen readers');
    it('maintains heading hierarchy');
  });

  describe('Styling', () => {
    it('applies default styles');
    it('supports className prop');
    it('handles dark mode');
    it('applies animation classes');
  });
});
```

Key test scenarios:
- Basic rendering of all subcomponents
- Dropdown trigger functionality
- Keyboard navigation (arrows, Enter, Escape, Tab)
- Focus management and trapping
- Mobile responsiveness
- Accessibility compliance
- Animation and transition behavior

### 7.4 Copy Navigation Menu component from design system

Copy from `ai_docs/Design_System_for_JIT/components/ui/navigation-menu.tsx` to `src/components/ui/navigation-menu.tsx`

Key considerations:
- Update import paths to use `@/lib/utils`
- Ensure all Radix UI dependencies are installed
- Verify TypeScript types are correct
- Check that all subcomponents are exported

### 7.5 Verify Navigation Menu styling and behavior

Check the following:
- Hover states on triggers and links
- Active state indicators
- Dropdown animations (fade, scale)
- Viewport positioning and boundaries
- Mobile menu behavior
- Dark mode compatibility
- Focus ring styling
- Transition smoothness

### 7.6 Create Navigation Menu usage examples

Create `src/components/examples/navigation-menu-examples.tsx`:

```typescript
"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export function NavigationMenuExamples() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Navigation Menu Examples</h1>

      {/* Basic Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Navigation</h2>
        {/* Implementation */}
      </section>

      {/* Navigation with Dropdowns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Navigation with Dropdowns</h2>
        {/* Implementation */}
      </section>

      {/* Complex Navigation Structure */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Complex Navigation</h2>
        {/* Implementation */}
      </section>

      {/* Mobile-Friendly Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mobile Navigation</h2>
        {/* Implementation */}
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Demo</h2>
        {/* Implementation */}
      </section>
    </div>
  );
}
```

Example patterns to include:
- Simple horizontal navigation
- Navigation with dropdown menus
- Multi-level navigation
- Navigation with icons
- Mobile-responsive navigation
- Keyboard navigation demo
- Accessibility best practices

### 7.7 Integration testing

Test integration with:
- Existing header/navbar components
- Next.js routing (Link component)
- Theme switching
- Mobile menu toggle
- Authentication state indicators

### 7.8 Run tests and build verification

```bash
# Run Navigation Menu tests
npm test -- src/components/ui/__tests__/navigation-menu.test.tsx

# Run full test suite
npm test

# Run build
npm run build

# Type check
npm run type-check
```

### 7.9 Commit changes and create PR

```bash
git add -A
git commit -m "feat: Implement Navigation Menu component from design system (Task #7)"
git push -u origin feature/phase2-task7-navigation-menu
gh pr create
```

## Success Criteria

1. All Navigation Menu tests pass (100% coverage)
2. Component renders correctly in all browsers
3. Keyboard navigation works seamlessly
4. Mobile responsiveness is maintained
5. Accessibility standards are met (WCAG 2.1 AA)
6. Dark mode support works correctly
7. Animations are smooth and performant
8. Build succeeds with no errors
9. TypeScript types are properly defined
10. Integration with existing navigation works

## Technical Considerations

1. **Performance**: Use React.memo for list items if needed
2. **Animations**: Ensure reduced motion preferences are respected
3. **Mobile**: Consider viewport constraints and touch targets
4. **SEO**: Ensure navigation links are crawlable
5. **State Management**: Handle active states correctly
6. **Focus Management**: Proper focus trapping in dropdowns
7. **RTL Support**: Consider right-to-left language support

## Dependencies

- @radix-ui/react-navigation-menu
- class-variance-authority
- @radix-ui/react-primitive
- Other Radix UI utilities

## Notes

- The Navigation Menu uses Radix UI primitives for accessibility
- It supports both controlled and uncontrolled modes
- The component uses CSS animations for smooth transitions
- Focus is managed automatically by Radix UI
- The viewport component handles dropdown positioning