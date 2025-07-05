"use client";

import * as React from "react";
import Link from "next/link";
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
import {
  BookOpen,
  Code2,
  FileText,
  Layers,
  Settings,
  Users,
  Zap,
  Package,
  Home,
  Mail,
  Info,
  HelpCircle,
} from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/components/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll Area",
    href: "/components/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/components/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/components/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuExamples() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Navigation Menu Examples</h1>

      {/* Basic Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Navigation</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Navigation with Dropdowns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Navigation with Dropdowns</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Zap className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          JIT Design System
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI and
                          Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Complex Navigation Structure */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Complex Navigation</h2>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Home className="mr-2 h-4 w-4" />
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Home className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Welcome Home
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Start here to explore our products and services.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Package className="mr-2 h-4 w-4" />
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem href="/products/ui" title="UI Components">
                    <Layers className="mr-2 h-4 w-4" />
                    Pre-built components for rapid development
                  </ListItem>
                  <ListItem href="/products/templates" title="Templates">
                    <FileText className="mr-2 h-4 w-4" />
                    Full application templates to get started
                  </ListItem>
                  <ListItem href="/products/icons" title="Icon Library">
                    <Code2 className="mr-2 h-4 w-4" />
                    Beautiful icons for your applications
                  </ListItem>
                  <ListItem href="/products/tools" title="Developer Tools">
                    <Settings className="mr-2 h-4 w-4" />
                    Tools to enhance your development workflow
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/docs" title="Documentation">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Comprehensive guides and API references
                  </ListItem>
                  <ListItem href="/tutorials" title="Tutorials">
                    <FileText className="mr-2 h-4 w-4" />
                    Step-by-step guides for common tasks
                  </ListItem>
                  <ListItem href="/blog" title="Blog">
                    <FileText className="mr-2 h-4 w-4" />
                    Latest news and updates
                  </ListItem>
                  <ListItem href="/community" title="Community">
                    <Users className="mr-2 h-4 w-4" />
                    Join our growing community
                  </ListItem>
                  <ListItem href="/support" title="Support">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Get help when you need it
                  </ListItem>
                  <ListItem href="/changelog" title="Changelog">
                    <FileText className="mr-2 h-4 w-4" />
                    See what's new and improved
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Info className="mr-2 h-4 w-4" />
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Mobile-Friendly Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mobile Navigation</h2>
        <p className="text-muted-foreground mb-4">
          The navigation menu automatically adapts to mobile screens. Try resizing your
          browser to see the responsive behavior.
        </p>
        <NavigationMenu>
          <NavigationMenuList className="flex-col md:flex-row">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-full gap-3 p-4">
                  <ListItem href="/" title="Home">
                    Return to homepage
                  </ListItem>
                  <ListItem href="/products" title="Products">
                    Browse our products
                  </ListItem>
                  <ListItem href="/services" title="Services">
                    Our services
                  </ListItem>
                  <ListItem href="/contact" title="Contact">
                    Get in touch
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Demo</h2>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            The Navigation Menu component includes comprehensive keyboard navigation:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              <kbd>Tab</kbd> - Navigate between menu items
            </li>
            <li>
              <kbd>Enter</kbd> or <kbd>Space</kbd> - Open dropdown menus
            </li>
            <li>
              <kbd>Arrow Keys</kbd> - Navigate within dropdown content
            </li>
            <li>
              <kbd>Escape</kbd> - Close open dropdown menus
            </li>
            <li>
              <kbd>Home</kbd> / <kbd>End</kbd> - Jump to first/last item
            </li>
          </ul>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Try Keyboard Navigation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px]">
                    <ListItem href="#" title="First Item">
                      Press arrow keys to navigate
                    </ListItem>
                    <ListItem href="#" title="Second Item">
                      Press Tab to move between items
                    </ListItem>
                    <ListItem href="#" title="Third Item">
                      Press Escape to close menu
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>

      {/* Dark Mode Support */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dark Mode Support</h2>
        <p className="text-muted-foreground mb-4">
          The Navigation Menu automatically adapts to your theme preference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Light Mode</h3>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Light Theme</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <ListItem href="#" title="Item 1">
                        Light mode item
                      </ListItem>
                      <ListItem href="#" title="Item 2">
                        Another item
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="p-4 rounded-lg border dark bg-background">
            <h3 className="font-semibold mb-2 text-foreground">Dark Mode</h3>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Dark Theme</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <ListItem href="#" title="Item 1">
                        Dark mode item
                      </ListItem>
                      <ListItem href="#" title="Item 2">
                        Another item
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </section>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";