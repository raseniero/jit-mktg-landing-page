"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ChevronRight,
  Download,
  ArrowRight,
  Loader2,
  Check,
  X,
  Settings,
  Heart,
  Star,
} from "lucide-react";

export function ButtonExamples() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLoadingClick = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 p-8">
      {/* Variants Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Sizes Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Button Sizes</h2>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* With Icons Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail /> Send Email
          </Button>
          <Button variant="secondary">
            Download <Download />
          </Button>
          <Button variant="outline">
            Next <ChevronRight />
          </Button>
          <Button variant="ghost">
            <Heart /> Like
          </Button>
          <Button size="sm">
            <Star /> Rate
          </Button>
        </div>
      </section>

      {/* States Section */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button onClick={handleLoadingClick} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Loading...
              </>
            ) : (
              "Click to Load"
            )}
          </Button>
          <Button variant="outline" disabled>
            <X /> Disabled Outline
          </Button>
        </div>
      </section>

      {/* As Child Example */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Button as Link</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="#button-examples">Link Button</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#button-examples">
              Outline Link <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <a href="#button-examples">Ghost Link</a>
          </Button>
        </div>
      </section>

      {/* Dark Mode Section */}
      <section className="rounded-lg bg-slate-900 p-6 dark">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Dark Mode Buttons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Accessibility Examples */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Accessibility Features</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button aria-label="Approve action">
              <Check className="h-4 w-4" />
            </Button>
            <Button variant="destructive" aria-label="Reject action">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <p className="mb-2 text-sm text-muted-foreground">
              Toggle button with aria-pressed:
            </p>
            <Button
              aria-pressed="false"
              onClick={(e) => {
                const pressed = e.currentTarget.getAttribute("aria-pressed") === "true";
                e.currentTarget.setAttribute("aria-pressed", String(!pressed));
              }}
            >
              Toggle Me
            </Button>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="rounded-lg border p-6">
        <h2 className="mb-4 text-2xl font-semibold">Best Practices</h2>
        <ul className="space-y-2 text-sm">
          <li>• Use primary (default) buttons for main actions</li>
          <li>• Use secondary buttons for less important actions</li>
          <li>• Use outline buttons for tertiary actions</li>
          <li>• Use ghost buttons for subtle actions in toolbars</li>
          <li>• Use destructive buttons for dangerous actions</li>
          <li>• Always provide accessible labels for icon-only buttons</li>
          <li>• Use the asChild prop to render buttons as links when needed</li>
          <li>• Show loading states for async operations</li>
        </ul>
      </section>
    </div>
  );
}