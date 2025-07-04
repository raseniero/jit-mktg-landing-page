# JIT.EDU.PH Design System - Usage Guide

## Overview
This is a comprehensive design system for the JIT.EDU.PH (Jairo Institute of Technology) website project. The system extensively uses shadcn/ui components with custom styling to create a cohesive, accessible, and maintainable user interface. This guide documents all implemented components, patterns, and usage guidelines.

## Files in This Design System

### 1. Core Components (`components/ui/`)
**Purpose**: Complete shadcn/ui component library with JIT theming  
**Usage**: Import any component from `./components/ui/[component-name]`  
**Best For**: Building consistent UI elements across the application

### 2. Application Components (`components/`)
**Purpose**: High-level components combining multiple shadcn/ui elements  
**Usage**: Import from `./components/[ComponentName]`  
**Best For**: Page layouts, sections, and feature-specific components

### 3. `DesignSystemShowcase.tsx`
**Purpose**: Visual showcase of all design system components  
**Usage**: Reference for developers and designers  
**Best For**: Design reviews, component documentation, developer reference

### 4. `design-tokens-complete.json`
**Purpose**: Machine-readable design tokens for tools and frameworks  
**Usage**: Import into design tools or build systems  
**Best For**: Cross-platform consistency, tool integration

## Comprehensive Component Usage

### Navigation & Layout Components

#### Header Component
**Location**: `components/Header.tsx`
**Uses**: `Button`, `NavigationMenu`, `Avatar`, `Sheet`, `Badge`, `Separator`, `Card`, `Tooltip`

```tsx
import { Header } from './components/Header';

// Features:
// - Desktop navigation with tooltips
// - Mobile sheet navigation with stats
// - Search and notification badges
// - Brand avatar and trust indicators
<Header onNavigateHome={() => console.log('Navigate home')} />
```

#### Footer Component  
**Location**: `components/Footer.tsx`
**Uses**: `Card`, `Badge`, `Tooltip`, `HoverCard`, `Button`, `Separator`, `Input`, `Avatar`

```tsx
import { Footer } from './components/Footer';

// Features:
// - Newsletter signup with cards
// - Interactive social links with tooltips
// - Program hover cards with enrollment stats
// - Contact information with icons
// - Trust badges and certifications
<Footer />
```

### Content & Display Components

#### HeroSection Component
**Location**: `components/HeroSection.tsx`
**Uses**: `Button`, `Badge`, `Avatar`, `Card`, `Separator`, `Progress`

```tsx
import { HeroSection } from './components/HeroSection';

// Features:
// - Statistics cards with icons
// - Trust indicator badges
// - Animated buttons with hover effects
// - Floating stats overlay on image
// - Progress tracking elements
<HeroSection />
```

#### TrainingPrograms Component
**Location**: `components/TrainingPrograms.tsx`  
**Uses**: `Card`, `Badge`, `Button`, `Separator`, `Progress`, `Avatar`, `Tooltip`, `HoverCard`

```tsx
import { TrainingPrograms } from './components/TrainingPrograms';

// Features:
// - Program cards with comprehensive information
// - Skill badges and level indicators
// - Enrollment progress bars
// - Hover cards for additional details
// - Rating displays and next start dates
<TrainingPrograms onProgramSelect={(program) => console.log(program)} />
```

#### WebDevelopmentProgram Component
**Location**: `components/WebDevelopmentProgram.tsx`
**Uses**: `Card`, `Badge`, `Button`, `Progress`, `Separator`, `Tabs`, `Avatar`, `Accordion`, `Alert`

```tsx
import { WebDevelopmentProgram } from './components/WebDevelopmentProgram';

// Features:
// - Comprehensive course curriculum with tabs
// - Instructor profiles with avatars and ratings
// - Course progress tracking
// - Alert notifications for important information
// - Pricing and enrollment cards
<WebDevelopmentProgram />
```

### Core UI Components (shadcn/ui)

#### Buttons
**Variants**: `default`, `outline`, `ghost`, `secondary`, `destructive`
**Sizes**: `sm`, `default`, `lg`

```tsx
import { Button } from './components/ui/button';

// Primary action
<Button size="lg" className="px-8">
  Enroll Now
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>

// Secondary action
<Button variant="outline" size="lg">
  Learn More
</Button>

// Destructive action
<Button variant="destructive">
  Delete Account
</Button>
```

#### Cards
**Components**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`

```tsx
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

<Card className="hover:shadow-lg transition-all duration-300">
  <CardHeader>
    <CardTitle>Program Title</CardTitle>
    <CardDescription>Program description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

#### Badges
**Variants**: `default`, `secondary`, `outline`, `destructive`

```tsx
import { Badge } from './components/ui/badge';

// Status indicators
<Badge>Popular</Badge>
<Badge variant="secondary">12 weeks</Badge>
<Badge variant="outline" className="border-green-500 text-green-700">
  ✓ Accredited
</Badge>
```

#### Navigation Menu
**Components**: `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuLink`

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './components/ui/navigation-menu';

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className="hover:text-primary transition-colors">
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

#### Interactive Components

##### Tooltips
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful information</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

##### HoverCards
```tsx
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost">Web Development</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <div>
      <h4>Web Development Program</h4>
      <p>Complete full-stack development course</p>
    </div>
  </HoverCardContent>
</HoverCard>
```

##### Sheets (Mobile Navigation)
```tsx
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from './components/ui/sheet';

<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="sm">
      <Menu className="h-6 w-6" />
    </Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
    </SheetHeader>
    {/* Sheet content */}
  </SheetContent>
</Sheet>
```

#### Progress & Feedback Components

##### Progress Bars
```tsx
import { Progress } from './components/ui/progress';

<Progress value={75} className="h-3" />
```

##### Alerts
```tsx
import { Alert, AlertDescription } from './components/ui/alert';

<Alert className="border-orange-200 bg-orange-50">
  <Calendar className="h-4 w-4" />
  <AlertDescription>
    Next cohort starts January 15, 2025. Only 8 spots remaining.
  </AlertDescription>
</Alert>
```

##### Tabs
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

<Tabs defaultValue="overview">
  <TabsList className="grid w-full grid-cols-4">
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p>Overview content</p>
  </TabsContent>
</Tabs>
```

#### Form Components

##### Inputs
```tsx
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    placeholder="Enter your email"
    className="focus:border-primary"
  />
</div>
```

##### Select
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Choose a program" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="web-dev">Web Development</SelectItem>
    <SelectItem value="data-science">Data Science</SelectItem>
  </SelectContent>
</Select>
```

## Design Patterns & Guidelines

### Layout Patterns

#### Container Pattern
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### Section Pattern
```tsx
<section className="w-full bg-gray-50 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

#### Card Grid Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <Card key={item.id}>
      {/* Card content */}
    </Card>
  ))}
</div>
```

### Component Composition Patterns

#### Enhanced Button Pattern
```tsx
<Button className="group hover:bg-primary hover:text-primary-foreground">
  Learn More
  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Button>
```

#### Stats Card Pattern
```tsx
<Card className="border-none shadow-none bg-gray-50">
  <CardContent className="p-4 text-center">
    <div className="flex items-center justify-center mb-2">
      <Users className="h-5 w-5 text-primary" />
    </div>
    <div className="font-bold text-lg">5,000+</div>
    <div className="text-xs text-muted-foreground">Students</div>
  </CardContent>
</Card>
```

#### Program Card Pattern
```tsx
<Card className="bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
  <CardHeader>
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <IconComponent className="h-6 w-6 text-primary" />
    </div>
    <CardTitle>{program.title}</CardTitle>
    <div className="flex gap-2 mt-2">
      <Badge variant="secondary">{program.duration}</Badge>
      <Badge variant="outline">{program.level}</Badge>
    </div>
  </CardHeader>
  <CardContent>
    <CardDescription>{program.description}</CardDescription>
    {/* Additional content */}
  </CardContent>
</Card>
```

## Color System

### Primary Colors
- **Primary**: `#4F46E5` (hsl(243, 75%, 59%))
- **Primary Foreground**: `#FFFFFF`

### Neutral Colors  
- **Background**: `#FFFFFF`
- **Foreground**: `#1F2937` (Gray-800)
- **Muted**: `#F3F4F6` (Gray-100)
- **Muted Foreground**: `#6B7280` (Gray-500)
- **Border**: `#E5E7EB` (Gray-200)

### Semantic Colors
- **Destructive**: `#DC2626` (Red-600)
- **Success**: `#10B981` (Emerald-500)
- **Warning**: `#F59E0B` (Amber-500)
- **Info**: `#06B6D4` (Cyan-500)

### Usage Examples
```tsx
// Primary actions
<Button className="bg-primary text-primary-foreground">
  Primary Action
</Button>

// Success states
<Badge className="bg-green-100 text-green-800 border-green-200">
  ✓ Completed
</Badge>

// Warning states
<Alert className="border-orange-200 bg-orange-50">
  <AlertDescription>Important notice</AlertDescription>
</Alert>
```

## Typography System

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: ui-sans-serif, system-ui, sans-serif

### Type Scale
```css
/* Headings - Use semantic HTML elements, avoid Tailwind font classes */
h1 { font-size: 2.5rem; font-weight: 600; letter-spacing: -0.025em; }
h2 { font-size: 2rem; font-weight: 600; letter-spacing: -0.025em; }
h3 { font-size: 1.5rem; font-weight: 600; }
h4 { font-size: 1.25rem; font-weight: 500; }

/* Body text */
p { font-size: 1rem; line-height: 1.6; }

/* Small text */
.text-sm { font-size: 0.875rem; line-height: 1.5; }
.text-xs { font-size: 0.75rem; line-height: 1.4; }
```

### Typography Best Practices
- ✅ Use semantic HTML elements (h1, h2, h3, p)
- ✅ Avoid Tailwind font-size/weight classes unless specifically needed
- ✅ Use `text-muted-foreground` for secondary text
- ✅ Use `text-foreground` for primary text
- ❌ Don't override default typography without purpose

## Spacing & Layout

### Spacing Scale
```css
/* Standard spacing tokens */
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-2xl: 3rem;    /* 48px */
```

### Layout Utilities
```tsx
// Section spacing
<section className="py-16 md:py-24">

// Card spacing  
<Card className="p-6 space-y-4">

// Button spacing
<Button className="px-8 h-12">

// Grid gaps
<div className="grid gap-8">
```

## Accessibility Guidelines

### Focus Management
- All interactive elements have visible focus states
- Tab order is logical and follows content flow
- Focus is trapped in modals and sheets

### Color Contrast
- Primary: 4.5:1 ratio against white
- Text: 4.5:1 ratio minimum for normal text
- Large text: 3:1 ratio minimum

### Screen Reader Support
- All icons have proper labels or are aria-hidden
- Form inputs have associated labels
- Complex UI has proper ARIA attributes

### Implementation Examples
```tsx
// Proper button with icon
<Button>
  <Star className="mr-2 h-4 w-4" aria-hidden="true" />
  Favorite
</Button>

// Accessible form field
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input 
    id="email" 
    type="email"
    placeholder="Enter your email"
    aria-describedby="email-error"
  />
</div>

// Descriptive navigation
<NavigationMenuLink 
  className="sr-only"
  href="#main-content"
>
  Skip to main content
</NavigationMenuLink>
```

## Best Practices

### Component Composition
```tsx
// ✅ Good: Compose existing components
function ProgramCard({ program }) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <Badge variant="secondary">{program.duration}</Badge>
        <CardTitle>{program.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={program.completion} />
        <Button className="w-full mt-4">Learn More</Button>
      </CardContent>
    </Card>
  );
}

// ❌ Avoid: Creating custom components without using shadcn/ui
function CustomCard({ children }) {
  return <div className="custom-card-styles">{children}</div>;
}
```

### State Management
```tsx
// ✅ Good: Use appropriate state patterns
const [isOpen, setIsOpen] = useState(false);

// ✅ Good: Use toast for notifications
import { toast } from "sonner@2.0.3";
toast.success("Program enrolled successfully!");

// ✅ Good: Use loading states
<Button disabled={isLoading}>
  {isLoading ? "Loading..." : "Submit"}
</Button>
```

### Responsive Design
```tsx
// ✅ Good: Mobile-first responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

// ✅ Good: Responsive text sizing
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// ✅ Good: Responsive spacing
<section className="py-12 md:py-16 lg:py-24">
```

## Development Workflow

### Component Creation Process
1. Check if shadcn/ui component exists
2. Use existing component as base
3. Compose with other shadcn/ui components
4. Add custom styling sparingly
5. Test accessibility and responsiveness
6. Document usage patterns

### Code Organization
```
components/
├── ui/                 # shadcn/ui components (don't modify)
├── Header.tsx         # Application components
├── HeroSection.tsx    # Compose ui components
├── TrainingPrograms.tsx
└── Footer.tsx
```

### Import Patterns
```tsx
// ✅ Correct import paths
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Header } from "./components/Header";

// ❌ Avoid direct shadcn imports
import { Button } from "@/components/ui/button";
```

This design system provides a comprehensive foundation for building consistent, accessible, and maintainable user interfaces that reflect the JIT.EDU.PH brand and user experience standards while leveraging the full power of shadcn/ui components.