# Phase 2: Core UI Components Migration - Detailed Subtasks

## Overview
Phase 2 focuses on migrating all base UI components from the design system to the project and ensuring they work correctly with JIT branding, dark mode support, and accessibility standards.

## Task 5: Copy Button Component from Design System

### Subtasks:

#### 5.1 Write Button component tests (TDD)
- Create `src/components/ui/__tests__/button.test.tsx`
- Write tests for all button variants (default, outline, ghost, secondary, destructive, link)
- Write tests for all button sizes (sm, default, lg, icon)
- Test accessibility features (keyboard navigation, ARIA attributes)
- Test the asChild prop functionality
- Follow TDD: Write tests first before copying component

#### 5.2 Create feature branch
- Branch name: `feature/phase2-task5-button-component`
- Ensure main branch is up to date before creating

#### 5.3 Copy Button component from design system
- Copy from `ai_docs/Design_System_for_JIT/components/ui/button.tsx`
- Place in `src/components/ui/button.tsx`
- Ensure all imports are correct
- Verify TypeScript types are properly defined

#### 5.4 Verify Button styling
- Check that primary color matches JIT branding (#4F46E5)
- Verify all variant styles work correctly
- Test hover, focus, and disabled states
- Ensure dark mode compatibility

#### 5.5 Create Button usage examples
- Create `src/components/examples/button-examples.tsx`
- Show all variants and sizes
- Include examples with icons
- Document accessibility best practices

#### 5.6 Run tests and build
- Execute button component tests
- Run full test suite
- Verify build succeeds
- Check for TypeScript errors

## Task 6: Copy Card Component from Design System

### Subtasks:

#### 6.1 Write Card component tests (TDD)
- Create `src/components/ui/__tests__/card.test.tsx`
- Test Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- Test composition patterns
- Test accessibility features
- Follow TDD approach

#### 6.2 Create feature branch
- Branch name: `feature/phase2-task6-card-component`
- Ensure previous task PR is merged first

#### 6.3 Copy Card component and subcomponents
- Copy from `ai_docs/Design_System_for_JIT/components/ui/card.tsx`
- Place in `src/components/ui/card.tsx`
- Ensure all subcomponents are exported correctly
- Verify TypeScript types

#### 6.4 Verify Card styling
- Check border colors and shadows
- Verify background colors in light/dark mode
- Test responsive behavior
- Ensure proper spacing

#### 6.5 Create Card usage examples
- Create `src/components/examples/card-examples.tsx`
- Show various card layouts
- Include examples with all subcomponents
- Document composition patterns

#### 6.6 Run tests and build
- Execute card component tests
- Verify integration with existing components
- Check build and TypeScript

## Task 7: Copy Navigation Menu Component from Design System

### Subtasks:

#### 7.1 Write Navigation Menu tests (TDD)
- Create `src/components/ui/__tests__/navigation-menu.test.tsx`
- Test keyboard navigation
- Test dropdown functionality
- Test mobile responsiveness
- Test accessibility (ARIA attributes, focus management)

#### 7.2 Create feature branch
- Branch name: `feature/phase2-task7-navigation-menu`
- Ensure dependencies are in place

#### 7.3 Copy Navigation Menu components
- Copy from `ai_docs/Design_System_for_JIT/components/ui/navigation-menu.tsx`
- Place in `src/components/ui/navigation-menu.tsx`
- Include all subcomponents (List, Item, Trigger, Content, Link, etc.)
- Verify Radix UI imports

#### 7.4 Verify Navigation styling
- Check hover and active states
- Verify dropdown animations
- Test viewport positioning
- Ensure mobile compatibility

#### 7.5 Create Navigation examples
- Create `src/components/examples/navigation-menu-examples.tsx`
- Show simple and complex navigation structures
- Include dropdown examples
- Document accessibility patterns

#### 7.6 Integration testing
- Test with existing header component
- Verify routing compatibility
- Check responsive behavior
- Run full test suite

## Task 8: Copy Dialog Component from Design System

### Subtasks:

#### 8.1 Write Dialog component tests (TDD)
- Create `src/components/ui/__tests__/dialog.test.tsx`
- Test open/close functionality
- Test focus trapping
- Test keyboard interactions (Escape key)
- Test portal rendering

#### 8.2 Create feature branch
- Branch name: `feature/phase2-task8-dialog-component`

#### 8.3 Copy Dialog components
- Copy from `ai_docs/Design_System_for_JIT/components/ui/dialog.tsx`
- Include all subcomponents (Trigger, Portal, Overlay, Content, Header, Footer, etc.)
- Verify animation classes

#### 8.4 Verify Dialog behavior
- Check overlay backdrop blur
- Verify animations (fade in/out)
- Test scroll locking
- Ensure proper z-index layering

#### 8.5 Create Dialog examples
- Show various dialog sizes
- Include form in dialog example
- Show alert dialog pattern
- Document accessibility

## Task 9: Copy Dropdown Menu Component from Design System

### Subtasks:

#### 9.1 Write Dropdown Menu tests (TDD)
- Create `src/components/ui/__tests__/dropdown-menu.test.tsx`
- Test menu item selection
- Test keyboard navigation
- Test submenu functionality
- Test checkbox/radio items

#### 9.2 Create feature branch
- Branch name: `feature/phase2-task9-dropdown-menu`

#### 9.3 Copy Dropdown Menu components
- Copy from `ai_docs/Design_System_for_JIT/components/ui/dropdown-menu.tsx`
- Include all item types (regular, checkbox, radio)
- Verify icons and shortcuts

#### 9.4 Verify Dropdown styling
- Check item hover states
- Verify separator styling
- Test disabled items
- Ensure proper spacing

#### 9.5 Create Dropdown examples
- Show various menu structures
- Include examples with icons
- Show checkbox/radio patterns
- Document keyboard shortcuts

## Task 10: Copy Remaining UI Components from Design System

### Subtasks:

#### 10.1 Create comprehensive test suite
- Create test files for each remaining component
- Group similar components (form inputs, feedback components, etc.)
- Write tests following established patterns
- Ensure accessibility coverage

#### 10.2 Create feature branch
- Branch name: `feature/phase2-task10-remaining-components`

#### 10.3 Copy form components
- Input, Label, Textarea, Select, Checkbox, Radio Group, Switch, Slider
- Form wrapper component
- Ensure react-hook-form integration

#### 10.4 Copy feedback components
- Alert, Alert Dialog, Toast, Progress, Badge, Skeleton
- Tooltip, Hover Card, Popover
- Ensure proper animations

#### 10.5 Copy layout components
- Accordion, Tabs, Collapsible, Separator
- Aspect Ratio, Avatar, Scroll Area
- Sheet (mobile drawer)

#### 10.6 Copy data display components
- Table, Pagination
- Command (command palette)
- Carousel

#### 10.7 Verify all components
- Run comprehensive test suite
- Check TypeScript types
- Verify dark mode support
- Test accessibility
- Ensure build succeeds

#### 10.8 Create component showcase
- Create `src/components/examples/component-showcase.tsx`
- Include all components with examples
- Document usage patterns
- Create component index

## Success Criteria for Phase 2

1. **All UI components migrated**:
   - All 46+ shadcn/ui components copied and functional
   - TypeScript types properly defined
   - All imports correctly configured

2. **Testing coverage**:
   - Each component has comprehensive tests
   - Minimum 80% test coverage
   - All tests passing

3. **Styling consistency**:
   - JIT branding applied consistently
   - Dark mode working for all components
   - Responsive behavior verified

4. **Accessibility compliance**:
   - WCAG 2.1 AA standards met
   - Keyboard navigation functional
   - Screen reader compatibility verified

5. **Build success**:
   - No TypeScript errors
   - No build warnings
   - Bundle size reasonable

## Branching Strategy

Each task follows the same process:

1. Create feature branch:
   ```bash
   git checkout -b feature/phase2-task[number]-[component-name]
   ```

2. Follow TDD:
   - Write tests first
   - Copy and adapt component
   - Refactor as needed

3. Commit with clear messages:
   ```bash
   git add .
   git commit -m "test: Add [component] component tests"
   git commit -m "feat: Add [component] component from design system"
   ```

4. Push and create PR:
   ```bash
   git push origin feature/phase2-task[number]-[component-name]
   gh pr create --assignee raseniero
   ```

5. Wait for review before next task

## Dependencies Between Tasks

- Task 5 (Button) should be completed first as it's used by many other components
- Task 6 (Card) can be done in parallel with Task 7 (Navigation Menu)
- Task 8 (Dialog) and Task 9 (Dropdown) can be done in parallel
- Task 10 should be done last as it may depend on earlier components

## Time Estimates

- Task 5 (Button): 2-3 hours
- Task 6 (Card): 2 hours
- Task 7 (Navigation Menu): 3-4 hours
- Task 8 (Dialog): 2-3 hours
- Task 9 (Dropdown Menu): 2-3 hours
- Task 10 (Remaining Components): 6-8 hours

Total Phase 2 estimate: 17-26 hours