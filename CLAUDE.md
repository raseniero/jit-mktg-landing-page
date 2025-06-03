# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production  
- `npm start` - Start the production server
- `npx prettier --write .` - Format code using Prettier
- `npm run type-check` or `npx tsc --noEmit` - Type check TypeScript files

## Project Architecture

This is a Next.js 14 marketing landing page application with the following key components:

### Framework Stack
- **Next.js 14** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom design system
- **Supabase** for backend services (auth, database, edge functions)
- **Radix UI** components for accessible UI primitives

### Application Structure

**Main Landing Page**: The homepage (`src/app/page.tsx`) is structured as a marketing site with:
- Training hero section
- Course catalog display
- Lead capture form
- Call-to-action sections

**Authentication Flow**: Complete auth system with routes in `src/app/(auth)/`:
- Sign-up/sign-in with email verification
- Password reset functionality
- Protected dashboard area

**Database Schema**: Uses Supabase with key tables:
- `leads` table for capturing prospect information from the marketing form
- `users` and `subscriptions` tables for user management
- Row Level Security (RLS) enabled

### Key Integration Points

**Supabase Configuration**:
- Client configuration in `supabase/supabase.ts`
- Server-side client in `supabase/server.ts`
- Edge functions for lead notifications and payments

**Lead Capture System**: 
- Form submission handled by `submitLeadForm` server action in `src/app/actions.ts`
- Automatically sends email notifications via Supabase edge function `send-lead-notification`
- Stores leads with source tracking ("CampaignLandingPage_SocialMedia")
- Notifications sent to `leads@jit.edu.ph`

**Styling System**:
- Uses CSS custom properties for theming (defined in `src/app/globals.css`)
- shadcn/ui component library with Radix UI primitives
- Tailwind config extends base theme with custom color variables
- Component configuration in `components.json` with path aliases (`@/components`, `@/lib/utils`)

**Tempo Integration**: 
- Development tooling enabled via `tempo-devtools`
- Configured for NextJS 14.1.3 to 14.2.11 in `next.config.js`

### Server Actions Architecture

The application uses Next.js server actions for server-side operations in `src/app/actions.ts`:
- Authentication actions: `signUpAction`, `signInAction`, `signOutAction`
- Password management: `forgotPasswordAction`, `resetPasswordAction`
- Subscription checks: `checkUserSubscription`
- Lead capture: `submitLeadForm` with automatic email notifications

### Environment Dependencies

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_TEMPO` (optional, for development tools)

### Path Aliases

TypeScript path mapping configured in `tsconfig.json`:
- `@/*` maps to `./src/*` for clean imports