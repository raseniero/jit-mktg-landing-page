# Product Requirements Document: Design System Migration

## Introduction/Overview

This PRD outlines the migration of the JIT.EDU.PH React-based design system into the existing Next.js marketing landing page application. The goal is to replace the current UI implementation while preserving all existing backend functionality, including authentication, lead capture, email notifications, and payment integration. This migration will modernize the UI with a comprehensive design system that includes consistent components, design tokens, and improved user experience.

## Goals

1. **Replace Current UI**: Completely replace the existing UI components with the new design system components
2. **Maintain Functionality**: Preserve all existing backend features including:
   - Supabase authentication and database operations
   - Lead capture and email notification system
   - Payment integration with Stripe
   - Server actions and App Router architecture
3. **Improve Consistency**: Implement a unified design system with consistent styling, spacing, and component patterns
4. **Enhance User Experience**: Provide a more polished, professional interface with better visual hierarchy and interactions
5. **Maintain Performance**: Ensure the migration doesn't negatively impact page load times or runtime performance

## User Stories

1. **As a visitor**, I want to see a modern, professional landing page that clearly showcases JIT's training programs so that I can quickly understand the offerings.

2. **As a prospective student**, I want to browse training programs with detailed information, pricing, and enrollment options so that I can make an informed decision.

3. **As a user filling out the lead form**, I want a clean, intuitive form experience that clearly indicates what information is needed and provides feedback on submission.

4. **As an authenticated user**, I want to access my dashboard with the new design system while maintaining all existing functionality.

5. **As a mobile user**, I want a fully responsive experience that works seamlessly on my device with proper touch interactions and readable content.

## Functional Requirements

### 1. Component Migration
1.1. Replace all existing UI components in `src/components/ui/` with the design system's shadcn/ui components
1.2. Update the global styles (`src/app/globals.css`) with the design system's CSS custom properties and typography rules
1.3. Implement the design system's color tokens, spacing scale, and typography system

### 2. Page Components Update
2.1. Replace the current homepage (`src/app/page.tsx`) structure with the design system's layout
2.2. Integrate the new `Header` component with existing navigation logic
2.3. Replace the current hero section with the design system's `HeroSection` component
2.4. Replace the training catalog with the new `TrainingPrograms` component
2.5. Update the footer with the new `Footer` component design

### 3. Training Programs Integration
3.1. Adapt the `TrainingPrograms` component to work with the existing database schema
3.2. Implement the `TrainingProgramLanding` component for individual program pages
3.3. Integrate program selection navigation with Next.js routing
3.4. Ensure the program data structure aligns with existing Supabase tables

### 4. Lead Capture Form Integration
4.1. Update the existing `LeadCaptureForm` to use the new design system components
4.2. Maintain the current form submission logic and server action (`submitLeadForm`)
4.3. Preserve the email notification functionality
4.4. Ensure form validation and error handling work with new UI components

### 5. Authentication UI Update
5.1. Update all authentication pages (`sign-in`, `sign-up`, `forgot-password`) with new components
5.2. Maintain existing authentication logic and Supabase integration
5.3. Update form components while preserving server actions
5.4. Ensure error messages and success states use new design patterns

### 6. Dashboard Integration
6.1. Update the dashboard layout with new navigation components
6.2. Apply new design system styles to dashboard content
6.3. Maintain existing dashboard functionality and data display
6.4. Update any dashboard-specific components with new UI patterns

### 7. Responsive Design Implementation
7.1. Ensure all components follow the mobile-first responsive approach
7.2. Implement the sheet-based mobile navigation from the design system
7.3. Verify touch interactions work properly on mobile devices
7.4. Test and adjust breakpoints for optimal display across devices

### 8. Design Token Implementation
8.1. Implement the complete color system from `design-tokens-complete.json`
8.2. Apply consistent spacing, typography, and border radius values
8.3. Ensure dark mode compatibility with CSS custom properties
8.4. Update Tailwind configuration to align with design tokens

## Non-Goals (Out of Scope)

1. **Backend Changes**: No modifications to Supabase schema, edge functions, or API endpoints
2. **New Features**: No new functionality beyond what exists in current implementation
3. **Payment Flow Changes**: Stripe/Polar integration remains unchanged
4. **Database Migration**: No changes to existing data structures or relationships
5. **Authentication Logic**: No changes to authentication flow or security measures
6. **Email Templates**: No modifications to email notification content or delivery
7. **SEO Changes**: No modifications to meta tags, routing, or SEO optimization
8. **Performance Optimization**: Beyond ensuring migration doesn't degrade performance

## Design Considerations

1. **Component Library**: Use the provided shadcn/ui components from the design system
2. **Styling Approach**: Maintain Tailwind CSS with custom design tokens
3. **Icon Library**: Use Lucide React icons as specified in the design system
4. **Image Handling**: Implement the `ImageWithFallback` component for better image loading
5. **Animation**: Apply subtle transitions and hover effects as defined in the design system
6. **Accessibility**: Maintain ARIA compliance and keyboard navigation from the design system

## Technical Considerations

1. **Next.js App Router**: Ensure all components are compatible with App Router and RSC
2. **Server Components**: Identify which components should remain server components
3. **Client Components**: Mark interactive components with "use client" directive
4. **TypeScript**: Maintain full type safety throughout the migration
5. **Bundle Size**: Monitor bundle size impact of new components
6. **CSS-in-JS**: Ensure no conflicts between design system styles and existing styles
7. **Font Loading**: Implement Inter font family with proper loading strategy
8. **Path Aliases**: Update import paths to use existing `@/` alias pattern

## Success Metrics

1. **Visual Consistency**: All pages use the new design system components exclusively
2. **Functionality Preserved**: All existing features work without regression:
   - User registration and login
   - Lead capture and email notifications
   - Dashboard access and functionality
   - Payment processing
3. **Performance Maintained**: 
   - Lighthouse scores remain same or better
   - First Contentful Paint under 1.5s
   - Time to Interactive under 3s
4. **Responsive Design**: All pages properly responsive from 320px to 4K displays
5. **Accessibility**: WCAG 2.1 AA compliance maintained
6. **Zero Regressions**: No loss of existing functionality or data

## Open Questions

1. **Data Mapping**: How should the design system's training program data structure map to existing database fields?
2. **Route Structure**: Should we implement the single-page navigation from the React app or maintain Next.js routing?
3. **Animation Preferences**: What level of animation/transitions should be implemented?
4. **Brand Assets**: Are there specific brand guidelines or assets that should override the design system defaults?
5. **Testing Strategy**: What testing approach should be followed during migration?
6. **Rollback Plan**: What's the strategy if issues are discovered post-migration?
7. **Staging Environment**: Is there a staging environment for testing the migration?