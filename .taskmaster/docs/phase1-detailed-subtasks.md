# Phase 1: Design System Setup & Configuration - Detailed Subtasks

## Task 1: Install and Configure Design System Dependencies

### Subtasks:

#### 1.1 Write dependency verification test
- Create `src/__tests__/setup/dependencies.test.ts`
- Write test to check for required packages in package.json
- Test should verify versions are compatible with Next.js 14
- Follow TDD: Write test first, then implement

#### 1.2 Audit existing dependencies
- Run `npm list` to check current packages
- Document which shadcn/ui dependencies are already installed
- Check for version conflicts with existing packages
- Create list of missing dependencies

#### 1.3 Install lucide-react icons
- Run `npm install lucide-react`
- Verify installation with test import
- Check bundle size impact
- Update package-lock.json

#### 1.4 Install Radix UI primitives
- Install core primitives:
  ```bash
  npm install @radix-ui/react-slot
  npm install @radix-ui/react-dialog
  npm install @radix-ui/react-dropdown-menu
  npm install @radix-ui/react-navigation-menu
  npm install @radix-ui/react-accordion
  npm install @radix-ui/react-tabs
  npm install @radix-ui/react-toast
  npm install @radix-ui/react-sheet
  npm install @radix-ui/react-badge
  npm install @radix-ui/react-button
  npm install @radix-ui/react-card
  npm install @radix-ui/react-separator
  npm install @radix-ui/react-tooltip
  npm install @radix-ui/react-hover-card
  npm install @radix-ui/react-avatar
  npm install @radix-ui/react-progress
  npm install @radix-ui/react-alert
  npm install @radix-ui/react-input
  npm install @radix-ui/react-label
  npm install @radix-ui/react-select
  ```
- Verify each installation
- Check for peer dependency warnings

#### 1.5 Install styling utilities
- Install class utilities:
  ```bash
  npm install class-variance-authority
  npm install clsx
  npm install tailwind-merge
  npm install tailwindcss-animate
  ```
- Verify installations
- Test utility functions work correctly

#### 1.6 Configure components.json
- Create `components.json` in project root:
  ```json
  {
    "$schema": "https://ui.shadcn.com/schema.json",
    "style": "default",
    "rsc": true,
    "tsx": true,
    "tailwind": {
      "config": "tailwind.config.ts",
      "css": "src/app/globals.css",
      "baseColor": "slate",
      "cssVariables": true,
      "prefix": ""
    },
    "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils"
    }
  }
  ```
- Verify configuration works with existing setup

#### 1.7 Run verification tests
- Execute all dependency tests
- Run `npm run build` to ensure no conflicts
- Run `npm run type-check` for TypeScript verification
- Document any warnings or issues

## Task 2: Configure Tailwind CSS for Design System

### Subtasks:

#### 2.1 Write Tailwind configuration test
- Create `src/__tests__/setup/tailwind.test.ts`
- Write test to verify Tailwind config includes design tokens
- Test should check for color variables, spacing, and animations
- Follow TDD approach

#### 2.2 Backup existing Tailwind config
- Copy current `tailwind.config.ts` to `tailwind.config.backup.ts`
- Document current custom configurations
- Note any project-specific settings to preserve

#### 2.3 Read design tokens from JSON
- Create script to read `ai_docs/Design_System_for_JIT/design-tokens-complete.json`
- Parse color, typography, and spacing tokens
- Convert to Tailwind-compatible format

#### 2.4 Update Tailwind configuration
- Update `tailwind.config.ts` with:
  - Dark mode class strategy
  - Content paths for all component locations
  - Extended theme with design tokens
  - Color palette from design system
  - Typography scale
  - Spacing tokens
  - Border radius values
  - Animation utilities
- Add required plugins (tailwindcss-animate)

#### 2.5 Test design token application
- Create test component using various tokens
- Verify colors render correctly
- Check spacing and typography scales
- Test dark mode switching

#### 2.6 Build and verify
- Run `npm run build`
- Check for CSS compilation errors
- Verify design tokens are included in output
- Test in development server

## Task 3: Implement Global CSS Styles

### Subtasks:

#### 3.1 Write CSS integration test
- Create `src/__tests__/setup/global-styles.test.ts`
- Write test to verify CSS custom properties are defined
- Test should check both light and dark mode variables
- Follow TDD approach

#### 3.2 Backup existing global styles
- Copy current `src/app/globals.css` to `globals.backup.css`
- Document current custom properties
- Note any project-specific styles to preserve

#### 3.3 Copy design system global styles
- Copy content from `ai_docs/Design_System_for_JIT/styles/globals.css`
- Ensure Tailwind directives are at the top
- Preserve any existing custom styles

#### 3.4 Merge CSS custom properties
- Define root CSS variables for light mode:
  - Background, foreground colors
  - Card, popover colors
  - Primary, secondary colors
  - Muted, accent colors
  - Destructive, warning colors
  - Border, ring colors
  - Radius values
- Define dark mode CSS variables
- Ensure smooth transition between themes

#### 3.5 Apply base styles
- Set border-border class on all elements
- Apply background and text colors to body
- Configure font features
- Set up smooth scrolling
- Configure focus styles

#### 3.6 Test style application
- Verify styles load correctly
- Test theme switching
- Check for style conflicts
- Ensure existing functionality preserved

## Task 4: Create Utils for Component Styling

### Subtasks:

#### 4.1 Write utility function tests
- Create `src/lib/__tests__/utils.test.ts`
- Write tests for cn() function
- Test class merging scenarios
- Test Tailwind class conflicts
- Follow TDD approach

#### 4.2 Create utils directory structure
- Create `src/lib` directory if not exists
- Ensure TypeScript path alias works (@/lib/utils)
- Set up proper exports

#### 4.3 Implement cn utility function
- Create `src/lib/utils.ts`
- Import clsx and tailwind-merge
- Implement cn() function for class merging
- Add TypeScript types

#### 4.4 Add additional utility functions
- formatDate() for date formatting
- formatCurrency() if needed
- Any other project-specific utilities
- Ensure all have proper TypeScript types

#### 4.5 Test utility functions
- Run unit tests
- Test in actual components
- Verify TypeScript types work correctly
- Check bundle size impact

#### 4.6 Document utility usage
- Add JSDoc comments
- Create examples of usage
- Document any edge cases
- Update component guidelines

## Branching Strategy for Phase 1

Each task should follow this process:

1. Create feature branch:
   ```bash
   git checkout -b feature/phase1-task1-dependencies
   ```

2. Follow TDD:
   - Write tests first
   - Implement to pass tests
   - Refactor if needed

3. Commit with clear messages:
   ```bash
   git add .
   git commit -m "test: Add dependency verification tests"
   git commit -m "feat: Install shadcn/ui dependencies"
   ```

4. Push and create PR:
   ```bash
   git push origin feature/phase1-task1-dependencies
   gh pr create --assignee raseniero
   ```

5. Wait for review before moving to next task

## Success Criteria for Phase 1

- All dependencies installed without conflicts
- Tailwind configuration includes all design tokens
- Global CSS properly implements theme system
- Utility functions work correctly
- All tests pass
- Build completes without errors
- Type checking passes
- No regression in existing functionality