import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { TrainingPrograms } from "./TrainingPrograms";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Code, Database, Palette, Star, Heart, Settings } from "lucide-react";

export function FigmaExportShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Full Website Sections */}
      <div className="space-y-16">
        {/* Header Section */}
        <div className="border-b-4 border-primary/20">
          <div className="bg-blue-50 p-4 text-center">
            <h2 className="text-lg font-semibold text-primary">Header Component</h2>
          </div>
          <Header />
        </div>

        {/* Hero Section */}
        <div className="border-b-4 border-primary/20">
          <div className="bg-blue-50 p-4 text-center">
            <h2 className="text-lg font-semibold text-primary">Hero Section</h2>
          </div>
          <HeroSection />
        </div>

        {/* Training Programs */}
        <div className="border-b-4 border-primary/20">
          <div className="bg-blue-50 p-4 text-center">
            <h2 className="text-lg font-semibold text-primary">Training Programs</h2>
          </div>
          <TrainingPrograms />
        </div>

        {/* Footer */}
        <div className="border-b-4 border-primary/20">
          <div className="bg-blue-50 p-4 text-center">
            <h2 className="text-lg font-semibold text-primary">Footer Component</h2>
          </div>
          <Footer />
        </div>
      </div>

      {/* Component Library for Figma */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Component Library for Figma
            </h1>
            <p className="text-muted-foreground">
              Individual components ready for screenshot and import to Figma
            </p>
          </div>

          {/* Buttons */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Buttons</h3>
            <div className="bg-white p-8 rounded-lg border space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">Button Variants</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">Button Sizes</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">Buttons with Icons</h4>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Star className="mr-2 h-4 w-4" />
                    Favorite
                  </Button>
                  <Button variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="secondary">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Cards</h3>
            <div className="bg-white p-8 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Basic Card</CardTitle>
                    <CardDescription>Simple card with header and content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">This is the card content area.</p>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Featured Card</CardTitle>
                    <CardDescription>Card with primary border highlight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">This card is highlighted with a primary border.</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Muted Card</CardTitle>
                    <CardDescription>Card with muted background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">This card uses a muted background color.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Form Elements</h3>
            <div className="bg-white p-8 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Input placeholder="Email address" />
                  <Input type="password" placeholder="Password" />
                  <Input placeholder="Disabled input" disabled />
                </div>
                <div className="space-y-4">
                  <Input className="border-primary" placeholder="Focused input" />
                  <Input className="border-destructive" placeholder="Error state" />
                  <Input placeholder="Success state" className="border-green-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Badges and Avatars */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Badges & Avatars</h3>
            <div className="bg-white p-8 rounded-lg border space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-4 text-muted-foreground">Avatars</h4>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">JI</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-secondary text-secondary-foreground">IT</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>

          {/* Typography Scale */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Typography Scale</h3>
            <div className="bg-white p-8 rounded-lg border space-y-6">
              <div>
                <h1>Heading 1 - Hero Title</h1>
                <p className="text-sm text-muted-foreground mt-1">40px • Semibold • -0.025em tracking</p>
              </div>
              <div>
                <h2>Heading 2 - Section Title</h2>
                <p className="text-sm text-muted-foreground mt-1">32px • Semibold • -0.025em tracking</p>
              </div>
              <div>
                <h3>Heading 3 - Subsection</h3>
                <p className="text-sm text-muted-foreground mt-1">24px • Semibold</p>
              </div>
              <div>
                <h4>Heading 4 - Component Title</h4>
                <p className="text-sm text-muted-foreground mt-1">20px • Medium</p>
              </div>
              <div>
                <p>Body text - This is the main paragraph text used throughout the application for content and descriptions.</p>
                <p className="text-sm text-muted-foreground mt-1">16px • Normal • 1.6 line-height</p>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Color Palette</h3>
            <div className="bg-white p-8 rounded-lg border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="w-full h-20 bg-primary rounded-lg mb-4"></div>
                  <h4 className="font-semibold">Primary</h4>
                  <p className="text-sm text-muted-foreground">#4F46E5</p>
                </div>
                <div>
                  <div className="w-full h-20 bg-secondary rounded-lg border mb-4"></div>
                  <h4 className="font-semibold">Secondary</h4>
                  <p className="text-sm text-muted-foreground">#F9FAFB</p>
                </div>
                <div>
                  <div className="w-full h-20 bg-muted rounded-lg mb-4"></div>
                  <h4 className="font-semibold">Muted</h4>
                  <p className="text-sm text-muted-foreground">#F3F4F6</p>
                </div>
                <div>
                  <div className="w-full h-20 bg-destructive rounded-lg mb-4"></div>
                  <h4 className="font-semibold">Destructive</h4>
                  <p className="text-sm text-muted-foreground">#DC2626</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}