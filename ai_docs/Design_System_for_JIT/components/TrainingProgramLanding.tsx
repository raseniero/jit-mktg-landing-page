import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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
  Zap,
  Target,
  TrendingUp,
  ArrowRight,
  Download,
  Play,
  Globe,
  Briefcase
} from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TrainingProgramLandingProps {
  program?: {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    level: string;
    price: string;
    originalPrice?: string;
    icon: any;
    category: string;
    rating: number;
    students: number;
    modules: number;
    image: string;
  };
  onNavigateBack?: () => void;
}

export function TrainingProgramLanding({ program, onNavigateBack }: TrainingProgramLandingProps) {
  // Default to Web Development program if no program provided
  const defaultProgram = {
    title: "Web Development Bootcamp",
    subtitle: "Master Modern Web Technologies",
    description: "Learn to build full-stack web applications using React, Node.js, and modern development tools. This comprehensive program takes you from beginner to job-ready developer.",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: "₱45,000",
    originalPrice: "₱60,000",
    icon: Code,
    category: "Web Development",
    rating: 4.9,
    students: 1247,
    modules: 8,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const currentProgram = program || defaultProgram;
  const IconComponent = currentProgram.icon;

  const learningOutcomes = [
    "Build responsive websites using HTML, CSS, and JavaScript",
    "Develop dynamic web applications with React and modern frameworks",
    "Create RESTful APIs and backend services with Node.js",
    "Implement user authentication and database integration",
    "Deploy applications to cloud platforms like Vercel and Netlify",
    "Use version control with Git and collaborate on GitHub",
    "Apply best practices for code quality and testing",
    "Build a portfolio of 5+ real-world projects"
  ];

  const curriculum = [
    {
      module: "Module 1",
      title: "HTML & CSS Fundamentals",
      duration: "Week 1-2",
      lessons: 12,
      description: "Master the building blocks of web development",
      topics: ["HTML5 Semantic Elements", "CSS Grid & Flexbox", "Responsive Design", "CSS Variables"]
    },
    {
      module: "Module 2", 
      title: "JavaScript Essentials",
      duration: "Week 3-4",
      lessons: 15,
      description: "Learn modern JavaScript programming concepts",
      topics: ["ES6+ Features", "DOM Manipulation", "Async Programming", "Error Handling"]
    },
    {
      module: "Module 3",
      title: "React Development",
      duration: "Week 5-7",
      lessons: 18,
      description: "Build dynamic user interfaces with React",
      topics: ["Components & Props", "State Management", "Hooks", "Context API"]
    },
    {
      module: "Module 4",
      title: "Backend Development",
      duration: "Week 8-9",
      lessons: 14,
      description: "Create APIs and server-side applications",
      topics: ["Node.js Basics", "Express Framework", "Database Integration", "Authentication"]
    },
    {
      module: "Module 5",
      title: "Full-Stack Projects",
      duration: "Week 10-11",
      lessons: 10,
      description: "Build complete web applications",
      topics: ["Project Planning", "Full-Stack Development", "Testing", "Code Review"]
    },
    {
      module: "Module 6",
      title: "Deployment & Career Prep",
      duration: "Week 12",
      lessons: 8,
      description: "Deploy applications and prepare for your career",
      topics: ["Cloud Deployment", "Portfolio Building", "Interview Prep", "Job Search Strategy"]
    }
  ];

  const instructors = [
    {
      name: "Maria Santos",
      role: "Lead Instructor",
      experience: "8+ years",
      company: "Former Meta Engineer",
      avatar: "MS",
      bio: "Full-stack developer with expertise in React and Node.js. Previously worked at Meta and has mentored 500+ developers."
    },
    {
      name: "Carlos Rodriguez",
      role: "Senior Developer",
      experience: "6+ years",
      company: "Former Google Engineer",
      avatar: "CR",
      bio: "Specialized in modern web technologies and cloud architecture. Passionate about teaching clean code practices."
    }
  ];

  const faqs = [
    {
      question: "What prerequisites do I need for this program?",
      answer: "No prior programming experience is required. We start from the basics and gradually build up to advanced concepts. Basic computer literacy and enthusiasm to learn are all you need."
    },
    {
      question: "How much time should I dedicate to this program?",
      answer: "We recommend 15-20 hours per week for optimal learning. This includes live sessions, practice exercises, and project work. The program is designed to fit around your schedule."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, you'll receive a verified certificate of completion from JIT.EDU.PH that you can add to your LinkedIn profile and resume. We also provide project showcase opportunities."
    },
    {
      question: "What kind of job support do you provide?",
      answer: "We offer career coaching, resume review, interview preparation, and job placement assistance. Our career services team has helped 85% of graduates find employment within 6 months."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the program quality within the first 30 days, we'll provide a full refund."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Absolutely! You'll have lifetime access to all course materials, including updates and new content. You'll also get access to our alumni community and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigateHome={onNavigateBack} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  {currentProgram.category}
                </Badge>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  {currentProgram.title}
                </h1>
                <h2 className="text-xl lg:text-2xl text-primary font-semibold">
                  {currentProgram.subtitle}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentProgram.description}
                </p>
              </div>

              {/* Program Stats */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{currentProgram.rating}</span>
                  <span className="text-muted-foreground">({currentProgram.students} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">{currentProgram.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">{currentProgram.modules} Modules</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-bold text-foreground">{currentProgram.price}</span>
                {currentProgram.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">{currentProgram.originalPrice}</span>
                )}
                <Badge variant="destructive" className="text-sm">
                  Limited Time Offer
                </Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 h-12">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 h-12">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Preview
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={currentProgram.image}
                  alt={`${currentProgram.title} course preview`}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">Next Cohort Starts</p>
                        <p className="text-primary font-bold">January 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Only</p>
                        <p className="font-bold text-destructive">8 spots left</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Master the essential skills needed to become a professional web developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Course Curriculum
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured learning path designed to take you from beginner to professional
            </p>
          </div>

          <div className="space-y-4">
            {curriculum.map((module, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <CardDescription className="text-base">{module.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">{module.duration}</Badge>
                      <p className="text-sm text-muted-foreground">{module.lessons} lessons</p>
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
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Your Instructors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from industry experts with real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="bg-white">
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{instructor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose This Program?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Live Interactive Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join live coding sessions with immediate feedback and Q&amp;A
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1-on-1 Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Personal guidance from experienced developers throughout your journey
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Job Placement Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Career coaching and job placement assistance with our partner companies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Real-World Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build portfolio projects that showcase your skills to employers
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Industry Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Earn a verified certificate recognized by leading tech companies
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Lifetime Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Keep learning with lifetime access to course materials and updates
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our training program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Web Development Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive training program.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <span className="text-lg">Program Price:</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold">{currentProgram.price}</span>
                    {currentProgram.originalPrice && (
                      <span className="text-primary-foreground/60 line-through">{currentProgram.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>Payment Plans Available</span>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="flex items-center justify-between text-white">
                  <span>30-Day Money Back Guarantee</span>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 h-12">
                Enroll Now - Save 25%
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 h-12">
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/80">
              Limited time offer expires January 31, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}