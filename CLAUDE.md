# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start the development server
- `npm run build` - Build the application for production  
- `npm start` - Start the production server
- `npm test` - Run all tests
- `npm test -- path/to/test.tsx` - Run a specific test file
- `npm test -- --watch` - Run tests in watch mode
- `npx prettier --write .` - Format code using Prettier
- `npm run type-check` or `npx tsc --noEmit` - Type check TypeScript files

### Task Master Commands (Project Management)
- `npx tm init` - Initialize Task Master in the project
- `npx tm get-tasks` - List all tasks
- `npx tm next-task` - Get the next task to work on
- `npx tm set-task-status --id <id> --status <status>` - Update task status
- `npx tm expand-task --id <id>` - Generate subtasks for a task

## Project Architecture

This is a Next.js 15 marketing landing page application with an advanced design system integration.

### Framework Stack
- **Next.js 15** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Supabase** for backend services (auth, database, edge functions)
- **Radix UI** components wrapped in shadcn/ui for accessible UI primitives
- **Task Master AI** for project management and task tracking

### Testing Architecture

The project follows Test-Driven Development (TDD) principles:

- **Jest** with `next/jest` configuration
- **React Testing Library** for component testing
- **Mock Service Worker (MSW)** for API mocking
- **next-router-mock** for router mocking
- Tests are co-located with components in `__tests__` folders
- Global test setup in `jest.setup.js` imports `@testing-library/jest-dom`

### Application Structure

**Main Landing Page**: The homepage (`src/app/page.tsx`) includes:
- Training hero section with lead capture
- Course catalog display
- Marketing-focused content sections
- Call-to-action components

**Authentication Flow**: Complete auth system with routes in `src/app/(auth)/`:
- Sign-up/sign-in with email verification
- Password reset functionality
- Protected dashboard area
- Server actions for auth operations

**Design System Integration**: 
- Components migrated from `ai_docs/Design_System_for_JIT/`
- Enhanced Button, Card, and Navigation Menu components
- Data-slot attributes for component identification
- Container query support in select components

### Key Integration Points

**Supabase Configuration**:
- Client: `src/supabase/supabase.ts`
- Server: `src/supabase/server.ts`
- Edge functions: `send-lead-notification`, payment processing
- Environment variables required: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Lead Capture System**: 
- Server action: `submitLeadForm` in `src/app/actions.ts`
- Automatic email notifications to `leads@jit.edu.ph`
- Source tracking: "CampaignLandingPage_SocialMedia"
- Stores in Supabase `leads` table with RLS

**Component Library**:
- Base components in `src/components/ui/`
- Example implementations in `src/components/examples/`
- Utility functions in `src/lib/utils.ts`
- Custom hooks for shared logic

### Server Actions Architecture

All server-side operations use Next.js server actions in `src/app/actions.ts`:
- `signUpAction`, `signInAction`, `signOutAction` - Authentication
- `forgotPasswordAction`, `resetPasswordAction` - Password management
- `checkUserSubscription` - Subscription verification
- `submitLeadForm` - Lead capture with email notifications

### Development Workflows

**Branching Strategy** (from `ai_docs/branching-merging-strategy.md`):
1. Start new feature branch from main: `git checkout -b feature/[task-name]`
2. Commit all changes and push to GitHub
3. Create PR from feature branch to `main`
4. Assign PR to `raseniero`
5. Wait for PR review and approval

**TDD Protocol** (from `ai_docs/Test_Driven_Development_instructions_for_NextJS_project.md`):
1. Write failing test first (Red phase)
2. Write minimum code to pass test (Green phase)
3. Refactor code while keeping tests passing (Refactor phase)
4. Use React Testing Library query priorities: Role > LabelText > PlaceholderText > Text
5. Mock Next.js router with `next-router-mock`
6. Extract async logic from Server Components into testable utilities

**Design System Migration**:
- Components are being migrated from `ai_docs/Design_System_for_JIT/`
- Each component requires: tests, examples, dark mode support, accessibility
- Follow existing patterns in Button, Card, and Navigation Menu components

### Path Aliases

TypeScript path mapping configured in `tsconfig.json`:
- `@/*` maps to `./src/*` for clean imports
- Example: `import { Button } from '@/components/ui/button'`

### Task Management

The project uses Task Master AI (`.taskmaster/` directory):
- Tasks defined in `.taskmaster/tasks/tasks.json`
- PRD documents in `/prds/` directory
- Detailed subtasks in `.taskmaster/docs/`
- State tracking in `.taskmaster/state.json`