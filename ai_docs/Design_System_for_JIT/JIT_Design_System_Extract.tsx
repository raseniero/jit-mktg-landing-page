import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { Progress } from "./components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./components/ui/hover-card";
import { 
  Code, 
  Database, 
  Palette, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight, 
  Star, 
  Calendar,
  Clock,
  Award,
  Play,
  CheckCircle,
  Lightbulb,
  Zap,
  Heart,
  Settings,
  BookOpen,
  Target,
  Monitor,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  ExternalLink
} from "lucide-react";

/**
 * JIT.EDU.PH Complete Design System Extract
 * 
 * This component demonstrates the complete design system used in the
 * Jairo Institute of Technology website, showcasing all shadcn/ui components,
 * patterns, layouts, and styling conventions.
 * 
 * Usage:
 * - Import and render this component to see the full design system
 * - Use individual sections as reference for implementation
 * - Copy patterns and adapt them for your specific needs
 * 
 * @version 2.0.0
 * @author JIT Design System Team
 */
export function JIT_Design_System_Extract() {
  const [activeDemo, setActiveDemo] = useState<string>("overview");

  const programs = [
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Master Modern Web Technologies",
      description: "Master modern web technologies including React, Node.js, and cloud deployment strategies.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      price: "₱45,000",
      originalPrice: "₱60,000",
      rating: 4.9,
      students: 1247,
      modules: 8,
      popular: true,
      skills: ["React", "Node.js", "JavaScript", "CSS"],
      nextStart: "Jan 15"
    },
    {
      icon: Database,
      title: "Data Science",
      subtitle: "Analytics & Machine Learning",
      description: "Learn data analysis, machine learning, and statistical modeling with industry tools.",
      duration: "16 weeks",
      level: "Intermediate",
      price: "₱55,000",
      originalPrice: "₱70,000",
      rating: 4.8,
      students: 892,
      modules: 10,
      popular: false,
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      nextStart: "Jan 22"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description: "Create exceptional user experiences with design thinking and prototyping skills.",
      duration: "10 weeks",
      level: "Beginner",
      price: "₱35,000",
      originalPrice: "₱45,000",
      rating: 4.9,
      students: 654,
      modules: 6,
      popular: false,
      skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
      nextStart: "Feb 1"
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: "Live Coding Sessions",
      description: "Interactive sessions with real-time feedback"
    },
    {
      icon: Users,
      title: "1-on-1 Mentorship",
      description: "Personal guidance from experienced developers"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Recognized certificate upon completion"
    },
    {
      icon: Target,
      title: "Job Placement Support",
      description: "Career coaching and job placement assistance"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-300" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-400" }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Design System Header */}
        <div className="border-b border-border bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                    J
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-xl font-bold">JIT Design System</h1>
                  <p className="text-sm text-muted-foreground">Complete Component Library & Patterns</p>
                </div>
              </div>
              <Badge variant="outline">v2.0.0</Badge>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-border bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
              <TabsList className="grid w-full grid-cols-6 bg-transparent border-none h-auto p-0">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="hero" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Hero Section
                </TabsTrigger>
                <TabsTrigger value="programs" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Program Cards
                </TabsTrigger>
                <TabsTrigger value="components" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Components
                </TabsTrigger>
                <TabsTrigger value="patterns" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Patterns
                </TabsTrigger>
                <TabsTrigger value="footer" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Footer
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeDemo} className="w-full">
            
            {/* Overview Section */}
            <TabsContent value="overview" className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">JIT.EDU.PH Design System</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive design system built with shadcn/ui components, featuring consistent patterns, 
                  accessible interactions, and scalable architecture for educational technology platforms.
                </p>
              </div>

              {/* Color System */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold">Color System</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-full h-16 bg-primary rounded-lg mb-4"></div>
                      <h4 className="font-semibold">Primary</h4>
                      <p className="text-sm text-muted-foreground">#4F46E5</p>
                      <Badge className="mt-2">Brand Actions</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-full h-16 bg-secondary rounded-lg border mb-4"></div>
                      <h4 className="font-semibold">Secondary</h4>
                      <p className="text-sm text-muted-foreground">#F9FAFB</p>
                      <Badge variant="secondary" className="mt-2">Subtle</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-full h-16 bg-green-500 rounded-lg mb-4"></div>
                      <h4 className="font-semibold">Success</h4>
                      <p className="text-sm text-muted-foreground">#10B981</p>
                      <Badge className="bg-green-100 text-green-800 mt-2">Positive</Badge>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="w-full h-16 bg-destructive rounded-lg mb-4"></div>
                      <h4 className="font-semibold">Destructive</h4>
                      <p className="text-sm text-muted-foreground">#DC2626</p>
                      <Badge variant="destructive" className="mt-2">Errors</Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Typography */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold">Typography Scale</h3>
                <Card>
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <h1>Display Heading (H1)</h1>
                      <p className="text-sm text-muted-foreground">40px • Semibold • -0.025em</p>
                    </div>
                    <Separator />
                    <div>
                      <h2>Section Heading (H2)</h2>
                      <p className="text-sm text-muted-foreground">32px • Semibold • -0.025em</p>
                    </div>
                    <Separator />
                    <div>
                      <h3>Subsection Heading (H3)</h3>
                      <p className="text-sm text-muted-foreground">24px • Semibold</p>
                    </div>
                    <Separator />
                    <div>
                      <h4>Component Title (H4)</h4>
                      <p className="text-sm text-muted-foreground">20px • Medium</p>
                    </div>
                    <Separator />
                    <div>
                      <p>Body text for paragraphs and content with optimal readability.</p>
                      <p className="text-sm text-muted-foreground">16px • Normal • 1.6 line-height</p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Component Overview */}
              <section className="space-y-6">
                <h3 className="text-2xl font-semibold">Component Library</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Button", "Card", "Badge", "Avatar", "Input", "Select", 
                    "Progress", "Tooltip", "Sheet", "Tabs", "Alert", "Accordion"
                  ].map((component) => (
                    <Card key={component} className="text-center">
                      <CardContent className="p-4">
                        <Badge variant="outline">{component}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>

            {/* Hero Section Demo */}
            <TabsContent value="hero" className="space-y-8">
              <section className="w-full bg-white py-12 md:py-20 border rounded-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                      {/* Brand Badge */}
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                            J
                          </AvatarFallback>
                        </Avatar>
                        <Badge variant="secondary" className="text-sm font-medium">
                          JIT.EDU.PH
                        </Badge>
                        <Separator orientation="vertical" className="h-4" />
                        <Badge variant="outline" className="text-xs">
                          Established 2020
                        </Badge>
                      </div>

                      {/* Heading */}
                      <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                          Advance Your Career with <br />
                          Professional{" "}
                          <span className="text-primary">Training</span>{" "}
                          <span className="text-primary">Programs</span>
                        </h1>
                        
                        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                          Enhance your skills with our industry-leading training programs. From 
                          technical skills to leadership development, we have courses designed to help 
                          you succeed.
                        </p>
                      </div>

                      {/* Stats */}
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

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="px-8 h-12 group">
                          Explore Courses
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="px-8 h-12">
                          <Play className="mr-2 h-4 w-4" />
                          Watch Demo
                        </Button>
                      </div>

                      {/* Trust Indicators */}
                      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="border-green-500 text-green-700 bg-green-50">
                                ✓ Accredited
                              </Badge>
                              <Badge variant="outline" className="border-blue-500 text-blue-700 bg-blue-50">
                                ✓ Certified
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Trusted by 500+ companies
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative">
                      <Card className="overflow-hidden shadow-2xl border-0">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-[400px] lg:h-[500px] flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                              <Play className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-muted-foreground">Hero Image Placeholder</p>
                          </div>
                        </div>
                        
                        {/* Floating Stats Card */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="text-sm font-medium">Next Cohort</div>
                                  <div className="text-primary font-bold">Starting Jan 15</div>
                                </div>
                                <Separator orientation="vertical" className="h-8" />
                                <div className="text-center">
                                  <div className="text-sm text-muted-foreground">Available Spots</div>
                                  <div className="font-bold text-destructive">12 left</div>
                                </div>
                                <Button size="sm">
                                  Reserve Spot
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
            </TabsContent>

            {/* Programs Section */}
            <TabsContent value="programs" className="space-y-8">
              <div className="text-center space-y-6 mb-16">
                <div className="space-y-4">
                  <Badge variant="outline" className="mb-4">
                    <Zap className="w-3 h-3 mr-1" />
                    Industry-Leading Curriculum
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Our Training Programs
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Enhance your skills with our industry-leading training programs designed for professionals.
                  </p>
                </div>
                
                <div className="flex justify-center items-center space-x-8">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">Active Students</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Job Placement</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="font-bold text-2xl text-primary">4.8★</div>
                    <div className="text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Program Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programs.map((program, index) => {
                  const IconComponent = program.icon;
                  const enrollmentProgress = Math.min((program.students / 1500) * 100, 100);
                  
                  return (
                    <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-sm relative overflow-hidden group">
                      {program.popular && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{program.rating}</span>
                          </div>
                        </div>
                        
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {program.title}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium">{program.subtitle}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="secondary" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {program.duration}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {program.level}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            <BookOpen className="w-3 h-3 mr-1" />
                            {program.modules} modules
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 space-y-4">
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {program.description}
                        </CardDescription>

                        {/* Skills */}
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground">Key Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {program.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Enrollment Progress */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-xs font-medium text-muted-foreground">Enrollment</p>
                            <p className="text-xs text-muted-foreground">{program.students} students</p>
                          </div>
                          <Progress value={enrollmentProgress} className="h-2" />
                        </div>

                        <Separator />

                        {/* Pricing and CTA */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-baseline space-x-2">
                              <span className="font-bold text-lg">{program.price}</span>
                              {program.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  {program.originalPrice}
                                </span>
                              )}
                            </div>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge variant="outline" className="text-xs">
                                  Next: {program.nextStart}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Next cohort starts {program.nextStart}, 2025</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            className="w-full group hover:bg-primary hover:text-primary-foreground"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Components Showcase */}
            <TabsContent value="components" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Buttons */}
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>Enhanced buttons with animations and states</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="secondary">Secondary</Button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button className="group">
                        <Star className="mr-2 h-4 w-4" />
                        With Icon
                      </Button>
                      <Button variant="outline" className="group">
                        Animated
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle>Badge System</CardTitle>
                    <CardDescription>Status indicators and labels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="destructive">Error</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Success
                      </Badge>
                      <Badge className="bg-orange-100 text-orange-800">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="w-3 h-3 mr-1" />
                        Duration
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Indicators</CardTitle>
                    <CardDescription>Course and enrollment progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Course Completion</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Enrollment Progress</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} />
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alert Components</CardTitle>
                    <CardDescription>Important notifications and messages</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Alert className="border-orange-200 bg-orange-50">
                      <Calendar className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Next cohort starts January 15, 2025.</strong> Limited spots available.
                      </AlertDescription>
                    </Alert>
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        Application submitted successfully! We'll review within 24 hours.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Patterns Section */}
            <TabsContent value="patterns" className="space-y-8">
              
              {/* CTA Pattern */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      <Badge variant="outline">
                        <Zap className="w-3 h-3 mr-1" />
                        Limited Time Offer
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold">Ready to Transform Your Career?</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
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

              {/* Feature Grid Pattern */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <Card key={index} className="text-center hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Interactive Patterns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Tooltip Example */}
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Tooltips</CardTitle>
                    <CardDescription>Hover over elements for additional information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-4">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to favorites</p>
                        </TooltipContent>
                      </Tooltip>
                      
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Account settings</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </CardContent>
                </Card>

                {/* HoverCard Example */}
                <Card>
                  <CardHeader>
                    <CardTitle>Rich HoverCards</CardTitle>
                    <CardDescription>Detailed previews on hover</CardDescription>
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
                            1,247+ students enrolled. Professional certification program with 
                            industry-recognized credentials and job placement support.
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

              </div>
            </TabsContent>

            {/* Footer Section */}
            <TabsContent value="footer" className="space-y-8">
              <footer className="bg-gray-900 text-white rounded-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  
                  {/* Newsletter Section */}
                  <Card className="mb-12 bg-gray-800/50 border-gray-700">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-white">Stay Updated</CardTitle>
                      <CardDescription className="text-gray-100 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest updates on new courses and training programs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-1 bg-gray-800 border border-gray-700 rounded-md px-3 py-2">
                          <span className="text-gray-300 text-sm">Enter your email</span>
                        </div>
                        <Button className="whitespace-nowrap group">
                          <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          Subscribe
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator className="mb-12 bg-gray-700" />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Company Info */}
                    <Card className="bg-transparent border-none">
                      <CardContent className="p-0 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
                              J
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xl font-bold text-white">JIT.EDU.PH</span>
                        </div>
                        <p className="text-gray-100 text-sm leading-relaxed">
                          Jairo Institute of Technology - Advancing careers through professional training programs.
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="border-green-400 text-green-300 bg-green-400/10">
                              Accredited
                            </Badge>
                            <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-400/10">
                              ISO Certified
                            </Badge>
                          </div>
                          
                          <div className="flex space-x-2">
                            {socialLinks.map((social) => (
                              <Tooltip key={social.label}>
                                <TooltipTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className={`p-2 hover:bg-gray-800 transition-colors text-gray-100 ${social.color}`}
                                  >
                                    <social.icon className="h-5 w-5" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Follow us on {social.label}</p>
                                </TooltipContent>
                              </Tooltip>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Links */}
                    <Card className="bg-transparent border-none">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg text-white">Quick Links</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-3">
                          {["Home", "Courses", "Register", "Sign In"].map((link) => (
                            <li key={link}>
                              <Button 
                                variant="ghost" 
                                className="p-0 h-auto text-gray-100 hover:text-white text-sm justify-start group"
                              >
                                {link}
                                <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Programs */}
                    <Card className="bg-transparent border-none">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg text-white">Training Programs</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-3">
                          {programs.map((program) => (
                            <li key={program.title}>
                              <HoverCard>
                                <HoverCardTrigger asChild>
                                  <Button 
                                    variant="ghost" 
                                    className="p-0 h-auto text-gray-100 hover:text-white text-sm justify-start w-full"
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span>{program.title}</span>
                                      <Badge variant="outline" className="text-xs border-gray-500 text-gray-200 bg-gray-500/10">
                                        {program.students}+
                                      </Badge>
                                    </div>
                                  </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80" side="top">
                                  <div className="space-y-2">
                                    <h4 className="font-semibold">{program.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {program.students}+ students enrolled. Professional certification program.
                                    </p>
                                  </div>
                                </HoverCardContent>
                              </HoverCard>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <Card className="bg-transparent border-none">
                      <CardHeader className="p-0 pb-4">
                        <CardTitle className="text-lg text-white">Contact Info</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-4">
                          <li>
                            <div className="flex items-start space-x-3">
                              <MapPin className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-100 text-sm">
                                123 Education Street<br />
                                Manila, Philippines 1001
                              </span>
                            </div>
                          </li>
                          
                          <li>
                            <div className="flex items-center space-x-3">
                              <Phone className="h-5 w-5 text-gray-300 flex-shrink-0" />
                              <span className="text-gray-100 text-sm">+63 (2) 8123-4567</span>
                            </div>
                          </li>
                          
                          <li>
                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-gray-300 flex-shrink-0" />
                              <span className="text-gray-100 text-sm">info@jit.edu.ph</span>
                            </div>
                          </li>
                        </ul>

                        <Card className="mt-6 bg-gray-800/50 border-gray-600">
                          <CardContent className="p-4">
                            <div className="text-center">
                              <p className="text-xs text-gray-200 mb-2">Office Hours</p>
                              <p className="text-sm text-white font-medium">Mon-Fri: 8:00 AM - 6:00 PM</p>
                            </div>
                          </CardContent>
                        </Card>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Bottom Bar */}
                  <Separator className="my-8 bg-gray-700" />
                  <Card className="bg-transparent border-none">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-200 text-sm flex items-center space-x-4">
                          <span>© 2024 Jairo Institute of Technology. All rights reserved.</span>
                          <Badge variant="outline" className="border-gray-500 text-gray-200 bg-gray-500/10">
                            v2.1.0
                          </Badge>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4">
                          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                            <Button 
                              key={link} 
                              variant="ghost" 
                              className="p-0 h-auto text-gray-200 hover:text-white text-sm"
                            >
                              {link}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </footer>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </TooltipProvider>
  );
}