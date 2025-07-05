"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function DarkModeTest() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dark Mode Component Test</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Components</h2>
          
          <div className="space-y-2">
            <Label htmlFor="name" required>
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              aria-describedby="name-help"
            />
            <p id="name-help" className="text-sm text-muted-foreground">
              Your full name as it appears on official documents
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about yourself..."
              maxLength={200}
              showCount
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="error-input">Error State</Label>
            <Input
              id="error-input"
              aria-invalid="true"
              aria-describedby="error-message"
              defaultValue="Invalid input"
            />
            <p id="error-message" className="text-sm text-destructive">
              This field contains an error
            </p>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Feedback Components</h2>
          
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert with important information.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Badge Components</h2>
          
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge type="count">{42}</Badge>
            <Badge type="status">Active</Badge>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Color Contrast Test</h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Foreground Colors</h3>
              <p className="text-foreground">Primary text color</p>
              <p className="text-muted-foreground">Muted text color</p>
              <p className="text-destructive">Destructive text color</p>
            </div>
            
            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Background Colors</h3>
              <div className="space-y-2">
                <div className="rounded bg-primary p-2 text-primary-foreground">
                  Primary background
                </div>
                <div className="rounded bg-secondary p-2 text-secondary-foreground">
                  Secondary background
                </div>
                <div className="rounded bg-muted p-2 text-muted-foreground">
                  Muted background
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Interactive States</h2>
          
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>
      </div>
    </div>
  );
}