import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Alert, AlertDescription } from "./ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { 
  Code, 
  Database, 
  Palette, 
  Star, 
  Heart, 
  Settings, 
  Menu, 
  ArrowRight, 
  Calendar,
  Clock,
  Users,
  Award,
  Play,
  Search,
  Bell,
  CheckCircle,
  Lightbulb,
  Zap
} from "lucide-react";

export function DesignSystem() {
  return (
    <TooltipProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                J
              </AvatarFallback>
            </Avatar>
            <Badge variant="secondary">JIT.EDU.PH</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground">JIT Design System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive design system for the Jairo Institute of Technology platform built with shadcn/ui components and extensive customization patterns.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Color System</h2>
            <p className="text-muted-foreground">Our complete color palette with semantic usage and accessibility compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-20 bg-primary rounded-lg mb-4"></div>
                <h4 className="font-semibold">Primary</h4>
                <p className="text-sm text-muted-foreground">#4F46E5</p>
                <div className="flex gap-2 mt-2">
                  <Badge>Brand</Badge>
                  <Badge variant="outline">CTA</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-20 bg-secondary rounded-lg border mb-4"></div>
                <h4 className="font-semibold">Secondary</h4>
                <p className="text-sm text-muted-foreground">#F9FAFB</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary">Subtle</Badge>
                  <Badge variant="outline">Cards</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-20 bg-green-500 rounded-lg mb-4"></div>
                <h4 className="font-semibold">Success</h4>
                <p className="text-sm text-muted-foreground">#10B981</p>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-green-100 text-green-800">Completed</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="w-full h-20 bg-destructive rounded-lg mb-4"></div>
                <h4 className="font-semibold">Destructive</h4>
                <p className="text-sm text-muted-foreground">#DC2626</p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="destructive">Error</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Typography System</h2>
            <p className="text-muted-foreground">Semantic HTML elements with consistent Inter font family. Avoid Tailwind font classes.</p>
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h1>Heading 1 - Hero & Page Titles</h1>
                <p className="text-sm text-muted-foreground mt-1">40px • Semibold • -0.025em tracking • Use semantic HTML</p>
              </div>
              <Separator />
              <div>
                <h2>Heading 2 - Section Titles</h2>
                <p className="text-sm text-muted-foreground mt-1">32px • Semibold • -0.025em tracking</p>
              </div>
              <Separator />
              <div>
                <h3>Heading 3 - Subsection Headers</h3>
                <p className="text-sm text-muted-foreground mt-1">24px • Semibold • Normal tracking</p>
              </div>
              <Separator />
              <div>
                <h4>Heading 4 - Component Titles</h4>
                <p className="text-sm text-muted-foreground mt-1">20px • Medium weight</p>
              </div>
              <Separator />
              <div>
                <p>Body text - Primary paragraph content with optimal readability and 1.6 line height for comfortable reading across all devices and screen sizes.</p>
                <p className="text-sm text-muted-foreground mt-1">16px • Normal weight • 1.6 line-height</p>
              </div>
              <Separator />
              <div>
                <p className="text-sm">Small text - Secondary information, captions, and helper text.</p>
                <p className="text-xs text-muted-foreground mt-1">14px • Normal weight • 1.5 line-height</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Enhanced Components Showcase */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Component Library</h2>
            <p className="text-muted-foreground">Complete shadcn/ui components with JIT-specific enhancements and patterns.</p>
          </div>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="navigation">Navigation</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="overlays">Overlays</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
            </TabsList>

            <TabsContent value="buttons" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Button Components</CardTitle>
                  <CardDescription>All button variants with enhanced interactions and animations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h4 className="mb-4">Primary Variants</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button>Primary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="mb-4">Enhanced Buttons with Icons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button className="group">
                        <Play className="mr-2 h-4 w-4" />
                        Watch Demo
                      </Button>
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="secondary">
                        <Star className="mr-2 h-4 w-4" />
                        Favorite
                      </Button>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="mb-4">Sizes & States</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button disabled>Disabled</Button>
                        <Button className="relative">
                          Loading...
                          <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current"></div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Program Card</CardTitle>
                    <CardDescription>Interactive program card with hover effects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 mr-1" />
                        12 weeks
                      </Badge>
                      <Badge variant="outline">Beginner</Badge>
                    </div>
                    <Progress value={75} />
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Featured Card</CardTitle>
                    <CardDescription>Highlighted card with gradient background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-orange-100 text-orange-800">Popular</Badge>
                      <Badge variant="outline">Limited Time</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Glass Card</CardTitle>
                    <CardDescription>Card with backdrop blur and transparency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">4.9</span>
                      <span className="text-muted-foreground text-sm">(1,247 reviews)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-6 mt-6">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Navigation Menu</CardTitle>
                    <CardDescription>Enhanced navigation with hover states and icons</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                            Home
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors flex items-center">
                            <Code className="mr-2 h-4 w-4" />
                            Courses
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                            About
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Avatar Components</CardTitle>
                    <CardDescription>User representation with various sizes and states</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <Avatar className="w-8 h-8 mb-2">
                          <AvatarFallback className="text-xs">SM</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">Small</p>
                      </div>
                      <div className="text-center">
                        <Avatar className="mb-2">
                          <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">Default</p>
                      </div>
                      <div className="text-center">
                        <Avatar className="w-12 h-12 mb-2">
                          <AvatarFallback className="bg-primary text-primary-foreground">LG</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">Large</p>
                      </div>
                      <div className="text-center">
                        <Avatar className="w-16 h-16 mb-2">
                          <AvatarFallback className="bg-secondary text-secondary-foreground text-lg">XL</AvatarFallback>
                        </Avatar>
                        <p className="text-xs text-muted-foreground">Extra Large</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Form Components</CardTitle>
                  <CardDescription>Complete form elements with validation states</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="Enter your email" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="select">Program Selection</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Choose a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-dev">Web Development</SelectItem>
                            <SelectItem value="data-science">Data Science</SelectItem>
                            <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">I accept the terms and conditions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" />
                        <Label htmlFor="notifications">Enable email notifications</Label>
                      </div>
                      <div>
                        <Label>Course Progress</Label>
                        <Progress value={60} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-1">60% Complete</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6 mt-6">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Badges & Status Indicators</CardTitle>
                    <CardDescription>Various badge styles for different contexts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="mb-4">Standard Badges</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="mb-4">Enhanced Badges with Icons</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          12 weeks
                        </Badge>
                        <Badge variant="outline">
                          <Award className="w-3 h-3 mr-1" />
                          Certified
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progress Indicators</CardTitle>
                    <CardDescription>Progress bars for enrollment, completion, and loading states</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Web Development</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Data Science</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>UI/UX Design</span>
                          <span>90%</span>
                        </div>
                        <Progress value={90} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-orange-200 bg-orange-50">
                  <Calendar className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Next cohort starts January 15, 2025.</strong> Only 8 spots remaining. Early bird discount ends in 5 days.
                  </AlertDescription>
                </Alert>
              </div>
            </TabsContent>

            <TabsContent value="overlays" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tooltip Examples</CardTitle>
                    <CardDescription>Interactive tooltips for additional information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost">
                            <Search className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Search courses</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" className="relative">
                            <Bell className="h-4 w-4" />
                            <Badge className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                              3
                            </Badge>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>3 new notifications</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>HoverCard Example</CardTitle>
                    <CardDescription>Rich content preview on hover</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="outline">Web Development Program</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Web Development</h4>
                          <p className="text-sm text-muted-foreground">
                            1,247+ students enrolled. Professional certification program with industry-recognized credentials and job placement support.
                          </p>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">12 weeks</Badge>
                            <Badge variant="outline">Beginner to Advanced</Badge>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sheet Navigation</CardTitle>
                    <CardDescription>Mobile-optimized slide-out navigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">
                          <Menu className="h-4 w-4 mr-2" />
                          Open Mobile Menu
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right">
                        <SheetHeader>
                          <SheetTitle className="flex items-center space-x-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="bg-primary text-primary-foreground text-xs">J</AvatarFallback>
                            </Avatar>
                            <span>JIT.EDU.PH</span>
                          </SheetTitle>
                        </SheetHeader>
                        <div className="mt-6 space-y-4">
                          <Button variant="ghost" className="w-full justify-start">
                            Home
                          </Button>
                          <Button variant="ghost" className="w-full justify-start">
                            <Code className="mr-2 h-4 w-4" />
                            Courses
                          </Button>
                          <Button variant="ghost" className="w-full justify-start">
                            About
                          </Button>
                          <Separator />
                          <Button className="w-full">
                            Sign Up
                          </Button>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Accordion Content</CardTitle>
                    <CardDescription>Collapsible content sections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Course Curriculum</AccordionTrigger>
                        <AccordionContent>
                          Comprehensive 12-week program covering HTML, CSS, JavaScript, React, and Node.js with hands-on projects.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Prerequisites</AccordionTrigger>
                        <AccordionContent>
                          Basic computer literacy and enthusiasm to learn. No prior coding experience required.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Certification</AccordionTrigger>
                        <AccordionContent>
                          Industry-recognized certificate upon completion with portfolio projects and job placement support.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="patterns" className="space-y-6 mt-6">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Stats Pattern</CardTitle>
                    <CardDescription>Consistent statistics display used throughout the application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="border-none shadow-none bg-gray-50">
                        <CardContent className="p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div className="font-bold text-lg">5,000+</div>
                          <div className="text-xs text-muted-foreground">Students</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-none shadow-none bg-gray-50">
                        <CardContent className="p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Award className="h-5 w-5 text-primary" />
                          </div>
                          <div className="font-bold text-lg">95%</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border-none shadow-none bg-gray-50">
                        <CardContent className="p-4 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div className="font-bold text-lg">24/7</div>
                          <div className="text-xs text-muted-foreground">Support</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Enhanced CTA Pattern</CardTitle>
                    <CardDescription>Call-to-action sections with gradients and trust indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          <div className="flex items-center justify-center space-x-2">
                            <Lightbulb className="h-5 w-5 text-primary" />
                            <Badge variant="outline">
                              <Zap className="w-3 h-3 mr-1" />
                              Limited Time Offer
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold">Ready to Transform Your Career?</h3>
                          <p className="text-muted-foreground">
                            Join thousands of successful graduates and start your journey today.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="px-8">
                              Enroll Now - Save 25%
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg" className="px-8">
                              Download Syllabus
                            </Button>
                          </div>
                          <div className="flex justify-center space-x-4">
                            <Badge variant="outline" className="border-green-500 text-green-700">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Accredited
                            </Badge>
                            <Badge variant="outline" className="border-blue-500 text-blue-700">
                              <Award className="w-3 h-3 mr-1" />
                              Certified
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Usage Guidelines */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Implementation Guidelines</h2>
            <p className="text-muted-foreground">Best practices for maintaining consistency and accessibility.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Use semantic HTML elements instead of Tailwind typography classes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Compose existing shadcn/ui components rather than creating custom ones</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Use established color tokens and avoid custom color overrides</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Implement responsive design with mobile-first approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Include proper accessibility attributes and focus management</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Avoid These Patterns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Don't use text-xl, font-bold, or other typography classes unnecessarily</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Don't create custom components without reviewing existing patterns</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Don't override default styles without understanding their purpose</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Don't ignore responsive breakpoints or mobile user experience</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">Don't skip accessibility testing and keyboard navigation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Examples */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Implementation Examples</h2>
            <p className="text-muted-foreground">Copy-paste code snippets for common patterns.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="enhanced-button">
              <AccordionTrigger>Enhanced Button with Animation</AccordionTrigger>
              <AccordionContent>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <pre className="text-sm overflow-x-auto">
{`<Button className="group hover:bg-primary hover:text-primary-foreground">
  Learn More
  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Button>`}
                    </pre>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="stats-pattern">
              <AccordionTrigger>Statistics Card Pattern</AccordionTrigger>
              <AccordionContent>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <pre className="text-sm overflow-x-auto">
{`<Card className="border-none shadow-none bg-gray-50">
  <CardContent className="p-4 text-center">
    <div className="flex items-center justify-center mb-2">
      <Users className="h-5 w-5 text-primary" />
    </div>
    <div className="font-bold text-lg">5,000+</div>
    <div className="text-xs text-muted-foreground">Students</div>
  </CardContent>
</Card>`}
                    </pre>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="enhanced-badge">
              <AccordionTrigger>Enhanced Badge with Icon</AccordionTrigger>
              <AccordionContent>
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <pre className="text-sm overflow-x-auto">
{`<Badge className="bg-green-100 text-green-800 border-green-200">
  <CheckCircle className="w-3 h-3 mr-1" />
  Completed
</Badge>`}
                    </pre>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </TooltipProvider>
  );
}