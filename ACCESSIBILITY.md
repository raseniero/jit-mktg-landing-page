# Accessibility Guidelines

This document outlines the accessibility features and best practices for the JIT.EDU.PH component library.

## Overview

All components in this library are designed to meet WCAG 2.1 Level AA standards. We prioritize keyboard navigation, screen reader compatibility, and proper color contrast to ensure our application is usable by everyone.

## Color Contrast

All color combinations meet WCAG 2.1 contrast requirements:
- Normal text: 4.5:1 minimum contrast ratio
- Large text (18pt+): 3:1 minimum contrast ratio
- Interactive elements: 3:1 minimum contrast ratio

### Tested Color Combinations
- Primary text (#1f2937) on white background: 13.1:1 ✓
- White text on primary background (#4f46e5): 7.43:1 ✓
- Muted text (#6b7280) on white background: 4.96:1 ✓
- Error text (#dc2626) on white background: 5.44:1 ✓

## Keyboard Navigation

All interactive components support full keyboard navigation:
- `Tab` - Navigate forward through focusable elements
- `Shift + Tab` - Navigate backward through focusable elements
- `Enter` or `Space` - Activate buttons and links
- `Arrow Keys` - Navigate within components (dropdowns, menus)
- `Escape` - Close modals, dialogs, and dropdown menus

## Component-Specific Guidelines

### Input
```tsx
<Input
  aria-label="Email address"
  aria-describedby="email-help"
  aria-invalid={hasError}
  aria-errormessage="email-error"
/>
```
- Always provide labels (visible or aria-label)
- Use aria-describedby for help text
- Use aria-invalid and aria-errormessage for errors
- Enhanced focus ring for visibility

### Label
```tsx
<Label htmlFor="name" required>
  Name
</Label>
```
- Use the `required` prop to show required field indicators
- Automatically includes screen reader announcement
- Use `srOnly` prop for visually hidden labels

### Textarea
```tsx
<Textarea
  maxLength={500}
  showCount
  aria-describedby="message-help"
/>
```
- Character count is announced to screen readers
- Supports all Input accessibility features
- Visual warning when approaching character limit

### Alert
```tsx
<Alert live="assertive" variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Action failed</AlertDescription>
</Alert>
```
- role="alert" for screen reader announcements
- Use `live="assertive"` for urgent messages
- Use `live="polite"` for informational messages (default)

### Badge
```tsx
<Badge type="count" aria-label="5 unread messages">
  5
</Badge>
```
- Use `type="status"` for status indicators (adds role="status")
- Use `type="count"` for numeric badges (auto-labels as "X items")
- Always provide context with aria-label when needed

### Separator
```tsx
<Separator 
  decorative={false} 
  label="Section break"
/>
```
- Use `decorative={false}` for semantic separators
- Provide `label` for screen reader context
- Decorative separators are hidden from screen readers

## Form Patterns

### Required Fields
```tsx
<div className="space-y-2">
  <Label htmlFor="email" required>
    Email
  </Label>
  <Input
    id="email"
    type="email"
    required
    aria-describedby="email-help"
  />
  <p id="email-help" className="text-sm text-muted-foreground">
    We'll never share your email
  </p>
</div>
```

### Error Handling
```tsx
<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input
    id="password"
    type="password"
    aria-invalid="true"
    aria-describedby="password-error"
  />
  <p id="password-error" className="text-sm text-destructive">
    Password must be at least 8 characters
  </p>
</div>
```

### Character Count
```tsx
<div className="space-y-2">
  <Label htmlFor="bio">Biography</Label>
  <Textarea
    id="bio"
    maxLength={200}
    showCount
    aria-describedby="bio-help"
  />
  <p id="bio-help" className="text-sm text-muted-foreground">
    Brief description about yourself
  </p>
</div>
```

## Screen Reader Testing

Test with these popular screen readers:
- **NVDA** (Windows) - Free
- **JAWS** (Windows) - Commercial
- **VoiceOver** (macOS/iOS) - Built-in
- **TalkBack** (Android) - Built-in

### Testing Checklist
- [ ] All interactive elements are reachable via keyboard
- [ ] Focus indicators are clearly visible
- [ ] Form labels are properly associated
- [ ] Error messages are announced
- [ ] Dynamic content updates are announced
- [ ] Images have appropriate alt text
- [ ] Headings follow logical hierarchy

## Automated Testing

Use these tools for accessibility testing:

### Browser Extensions
- **axe DevTools** - Comprehensive accessibility testing
- **WAVE** - Visual feedback for accessibility issues
- **Lighthouse** - Built into Chrome DevTools

### Jest Testing
```tsx
// Example accessibility test
it('has proper ARIA attributes', () => {
  render(<Input aria-label="Search" aria-describedby="search-help" />);
  const input = screen.getByLabelText('Search');
  expect(input).toHaveAttribute('aria-describedby', 'search-help');
});
```

## Dark Mode Considerations

- All components support dark mode with proper contrast
- Focus indicators remain visible in both themes
- Error states maintain sufficient contrast
- Use semantic color variables that adapt to theme

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Components](https://inclusive-components.design/)

## Reporting Issues

If you find an accessibility issue:
1. Check if it's already reported in GitHub Issues
2. Test with keyboard navigation
3. Test with a screen reader if possible
4. Report with steps to reproduce and expected behavior