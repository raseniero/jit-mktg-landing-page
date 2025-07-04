import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Code, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star, 
  Calendar,
  BookOpen,
  Monitor,
  Play,
  Download,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react";

export function WebDevelopmentProgram() {
  const curriculum = [
    {
      week: "Week 1-2",
      title: "HTML & CSS Fundamentals",
      description: "Master the building blocks of web development",
      topics: ["HTML5 Semantic Elements", "CSS Grid & Flexbox", "Responsive Design", "CSS Variables"],
      duration: "16 hours"
    },
    {
      week: "Week 3-4", 
      title: "JavaScript Essentials",
      description: "Learn modern JavaScript programming concepts",
      topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "Error Handling"],
      duration: "20 hours"
    },
    {
      week: "Week 5-7",
      title: "React Development",
      description: "Build dynamic user interfaces with React",
      topics: ["Components & Props", "State Management", "Hooks", "Context API"],
      duration: "24 hours"
    },
    {
      week: "Week 8-10",
      title: "Backend Development",
      description: "Create APIs and server-side applications",
      topics: ["Node.js Basics", "Express Framework", "Database Integration", "Authentication"],
      duration: "20 hours"
    },
    {
      week: "Week 11-12",
      title: "Full-Stack Projects & Deployment",
      description: "Build complete applications and deploy them",
      topics: ["Project Planning", "Full-Stack Development", "Cloud Deployment", "Portfolio Building"],
      duration: "16 hours"
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

  const instructors = [
    {
      name: "Maria Santos",
      role: "Lead Instructor",
      experience: "8+ years",
      company: "Former Meta Engineer",
      avatar: "MS",
      rating: 4.9
    },
    {
      name: "Carlos Rodriguez", 
      role: "Senior Developer",
      experience: "6+ years", 
      company: "Former Google Engineer",
      avatar: "CR",
      rating: 4.8
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mb-8">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge className="bg-orange-100 text-orange-800">Popular Choice</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold">
                  Master Modern Web Development
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Learn to build full-stack web applications using React, Node.js, and modern development tools. 
                  Transform from beginner to job-ready developer in 12 weeks.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-muted-foreground">(1,247 reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>12 weeks</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>1,247 students</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8">
                  Enroll Now - ₱45,000
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Play className="mr-2 h-4 w-4" />
                  Preview Course
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Course Progress</span>
                      <Badge variant="outline">12 Weeks</Badge>
                    </div>
                    <Progress value={75} className="h-3" />
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-bold text-2xl text-primary">96</div>
                        <div className="text-xs text-muted-foreground">Lessons</div>
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-primary">8</div>
                        <div className="text-xs text-muted-foreground">Projects</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alert for Next Cohort */}
      <Alert className="mb-8 border-orange-200 bg-orange-50">
        <Calendar className="h-4 w-4" />
        <AlertDescription>
          <strong>Next cohort starts January 15, 2025.</strong> Only 8 spots remaining. 
          Early bird discount ends in 5 days.
        </AlertDescription>
      </Alert>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructors">Instructors</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* What You'll Learn */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span>What You'll Learn</span>
              </CardTitle>
              <CardDescription>
                Master the essential skills needed to become a professional web developer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Build responsive websites using HTML, CSS, and JavaScript",
                  "Develop dynamic web applications with React",
                  "Create RESTful APIs with Node.js and Express",
                  "Implement user authentication and authorization",
                  "Deploy applications to cloud platforms",
                  "Use version control with Git and GitHub",
                  "Apply best practices for code quality and testing",
                  "Build a portfolio of real-world projects"
                ].map((skill, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center">
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
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
              <CardDescription>
                A structured 12-week program designed to take you from beginner to professional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {curriculum.map((module, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <CardDescription>{module.description}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{module.week}</Badge>
                          <p className="text-sm text-muted-foreground mt-1">{module.duration}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="instructors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                        {instructor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{instructor.name}</CardTitle>
                      <p className="text-primary font-semibold">{instructor.role}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline">{instructor.experience}</Badge>
                        <span className="text-sm text-muted-foreground">{instructor.company}</span>
                      </div>
                      <div className="flex items-center space-x-1 mt-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{instructor.rating}</span>
                        <span className="text-sm text-muted-foreground">instructor rating</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Reviews</CardTitle>
              <CardDescription>What our graduates say about the program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((review) => (
                  <Card key={review} className="bg-gray-50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        "This program completely changed my career. The instructors are amazing and the 
                        curriculum is perfectly structured for beginners."
                      </p>
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            JS
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">John Smith</p>
                          <p className="text-xs text-muted-foreground">Frontend Developer at Tech Corp</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Final CTA */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Start Your Journey?</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Join 1,247 students who have already transformed their careers with our Web Development program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Enroll Now - Save 25%
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}