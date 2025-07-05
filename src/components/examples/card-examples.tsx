"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download, Share2, Heart, MessageCircle } from "lucide-react";

export function CardExamples() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Card Component Examples</h1>

      {/* Basic Card */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Card</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content. You can put any content here.</p>
          </CardContent>
        </Card>
      </section>

      {/* Card with Footer */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card with Footer</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Project Update</CardTitle>
            <CardDescription>Latest changes to the design system</CardDescription>
          </CardHeader>
          <CardContent>
            <p>The new card component includes enhanced grid layout support and better accessibility features.</p>
          </CardContent>
          <CardFooter>
            <Button>View Details</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Card with Action */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card with Action Button</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>Configure your preferences and account details.</p>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Card */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive Card</h2>
        <Card className="max-w-md hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>This card responds to hover</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Hover over this card to see the shadow effect.</p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="ghost" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Like
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="mr-2 h-4 w-4" />
              Comment
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Card Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Grid Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Feature {i}</CardTitle>
                <CardDescription>Description for feature {i}</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Content for feature {i}. The card action button appears in the top right corner.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Complex Card */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Complex Card Example</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Performance metrics for the last 30 days</CardDescription>
            <CardAction>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">2.4K</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
              <div>
                <p className="text-2xl font-bold">489</p>
                <p className="text-sm text-muted-foreground">New Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold">92%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Performance has increased by 12% compared to last month
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">View Details</Button>
            <p className="text-sm text-muted-foreground">Updated 2 hours ago</p>
          </CardFooter>
        </Card>
      </section>

      {/* Dark Mode Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dark Mode Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Light Mode</h3>
            <Card>
              <CardHeader>
                <CardTitle>Light Theme</CardTitle>
                <CardDescription>This card uses light theme colors</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The card automatically adapts to your theme preference.</p>
              </CardContent>
            </Card>
          </div>
          <div className="dark">
            <h3 className="text-lg font-medium mb-2 text-white">Dark Mode</h3>
            <Card>
              <CardHeader>
                <CardTitle>Dark Theme</CardTitle>
                <CardDescription>This card uses dark theme colors</CardDescription>
              </CardHeader>
              <CardContent>
                <p>The same card with dark mode applied.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Accessible Card</CardTitle>
            <CardDescription>
              This card demonstrates accessibility features with proper heading hierarchy
              and semantic structure
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h5 className="font-semibold mb-2">Subheading within card</h5>
            <p className="mb-2">
              Cards use semantic HTML with proper heading hierarchy (h4 for title, h5 for subheadings).
            </p>
            <p>
              The data-slot attributes help with component identification and styling hooks.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}