# Phase 2 Task 6: Card Component - Detailed Implementation Guide

## Overview
The Card component is a fundamental UI element used throughout the application for displaying content in a contained, elevated surface. It includes several subcomponents for proper structure and composition.

## Pre-requisites
- Task 5 (Button Component) PR should be merged
- All dependencies from Phase 1 installed
- Main branch is up to date

## Detailed Subtasks

### 6.1 Write Card Component Tests (TDD)

#### Test Setup
```bash
# Create test file
src/components/ui/__tests__/card.test.tsx
```

#### Test Coverage Requirements:
1. **Component Rendering Tests**
   - Card renders with children
   - CardHeader renders with proper structure
   - CardTitle renders as h3 by default
   - CardDescription renders with muted text
   - CardContent renders with correct padding
   - CardFooter renders with flex layout

2. **Composition Tests**
   - Card with all subcomponents
   - Card with only header and content
   - Card with custom className on each subcomponent
   - Nested cards behavior

3. **Styling Tests**
   - Default styling (border, shadow, background)
   - Dark mode styling
   - Hover states (if applicable)
   - Custom className merging

4. **Accessibility Tests**
   - Proper heading hierarchy
   - Semantic HTML structure
   - Screen reader compatibility

#### Sample Test Structure:
```typescript
describe('Card Component', () => {
  describe('Card Container', () => {
    it('renders with children')
    it('applies default styling')
    it('merges custom className')
    it('supports dark mode')
  })
  
  describe('CardHeader', () => {
    it('renders with proper spacing')
    it('contains title and description')
  })
  
  describe('CardTitle', () => {
    it('renders as h3 by default')
    it('accepts custom heading level')
    it('applies title styling')
  })
  
  // ... more test groups
})
```

### 6.2 Create Feature Branch

```bash
# Switch to main and pull latest
git checkout main
git pull origin main

# Create and switch to feature branch
git checkout -b feature/phase2-task6-card-component
```

### 6.3 Copy Card Component from Design System

#### Files to Copy:
1. **Source**: `ai_docs/Design_System_for_JIT/components/ui/card.tsx`
2. **Destination**: `src/components/ui/card.tsx`

#### Component Structure:
```typescript
// Expected exports
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}
```

#### Import Updates:
- Change `import { cn } from "./utils"` to `import { cn } from "@/lib/utils"`
- Verify all TypeScript types are properly defined

### 6.4 Verify Card Styling

#### Checklist:
- [ ] Border color matches design system (`border` class)
- [ ] Shadow is subtle (`shadow-sm` or as designed)
- [ ] Background color works in light mode (`bg-card`)
- [ ] Background color works in dark mode
- [ ] Text colors are proper (`text-card-foreground`)
- [ ] Padding and spacing match design specs
- [ ] Rounded corners (`rounded-lg` or as designed)

#### Dark Mode Testing:
1. Add dark class to parent element
2. Verify all colors adapt properly
3. Check contrast ratios remain accessible

### 6.5 Create Card Usage Examples

#### File: `src/components/examples/card-examples.tsx`

#### Examples to Include:

1. **Basic Card**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
</Card>
```

2. **Card with Footer**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Account</CardTitle>
    <CardDescription>Manage your account settings</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      {/* Form fields */}
    </form>
  </CardContent>
  <CardFooter>
    <Button>Save changes</Button>
  </CardFooter>
</Card>
```

3. **Card Grid Layout**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map((item) => (
    <Card key={item.id}>
      {/* Card content */}
    </Card>
  ))}
</div>
```

4. **Interactive Card**
```tsx
<Card className="cursor-pointer hover:shadow-lg transition-shadow">
  {/* Clickable card content */}
</Card>
```

5. **Card with Custom Styling**
```tsx
<Card className="border-primary">
  <CardHeader className="bg-primary/10">
    <CardTitle>Featured</CardTitle>
  </CardHeader>
  {/* Rest of card */}
</Card>
```

6. **Card in Dark Mode**
```tsx
<div className="dark">
  <Card>
    {/* Dark mode card example */}
  </Card>
</div>
```

### 6.6 Run Tests and Build

#### Commands to Run:
```bash
# Run Card component tests
npm test -- src/components/ui/__tests__/card.test.tsx

# Run all tests
npm test

# Type check
npx tsc --noEmit

# Build
npm run build
```

#### Success Criteria:
- All Card tests pass
- No TypeScript errors
- Build completes successfully
- No regression in existing tests

## Implementation Tips

1. **Component Composition**
   - Card components should be flexible and composable
   - Don't enforce rigid structures
   - Allow any valid React children

2. **Styling Approach**
   - Use cn() utility for className merging
   - Preserve all default classes when custom classes are added
   - Don't override essential structural styles

3. **TypeScript**
   - Ensure all props interfaces extend appropriate HTML element interfaces
   - Use React.forwardRef for all components
   - Add displayName for better debugging

4. **Performance**
   - Card components are often used in lists
   - Keep them lightweight
   - Avoid unnecessary re-renders

## Common Issues and Solutions

1. **Issue**: Styling conflicts with custom classes
   **Solution**: Use cn() utility to properly merge classes

2. **Issue**: Dark mode colors not working
   **Solution**: Ensure CSS variables are defined for dark mode

3. **Issue**: TypeScript errors with forwardRef
   **Solution**: Properly type the ref parameter in forwardRef

4. **Issue**: Spacing inconsistencies
   **Solution**: Use consistent spacing classes from design system

## Testing Checklist

- [ ] All tests written before implementation (TDD)
- [ ] Tests cover all component variants
- [ ] Tests verify accessibility features
- [ ] Tests check className merging
- [ ] Tests verify dark mode behavior
- [ ] Integration with Button component tested
- [ ] Examples page renders without errors

## PR Checklist

- [ ] Feature branch created from latest main
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Build successful
- [ ] Examples demonstrate all use cases
- [ ] Dark mode verified
- [ ] No console errors or warnings
- [ ] PR description includes test results
- [ ] PR assigned to reviewer

## Next Steps

After Task 6 is complete and merged:
1. Proceed to Task 7: Navigation Menu Component
2. Card component will be used in many other components
3. May need to create specialized card variants later

## Time Estimate

- Writing tests: 45 minutes
- Copying and adapting component: 30 minutes
- Creating examples: 30 minutes
- Testing and verification: 15 minutes
- Total: ~2 hours