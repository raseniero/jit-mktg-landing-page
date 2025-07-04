import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Code, Database, Palette, TrendingUp, Users, Shield, Clock, BookOpen, Star, ArrowRight, Zap } from "lucide-react";

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
    category: "Web Development",
    rating: 4.9,
    students: 1247,
    modules: 8,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
    category: "Data Science",
    rating: 4.8,
    students: 892,
    modules: 10,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
    category: "Design",
    rating: 4.9,
    students: 654,
    modules: 6,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    popular: false,
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    nextStart: "Feb 1"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Growth & Analytics",
    description: "Master digital marketing strategies, SEO, social media, and analytics.",
    duration: "8 weeks",
    level: "Beginner",
    price: "₱25,000",
    originalPrice: "₱35,000",
    category: "Marketing",
    rating: 4.7,
    students: 1156,
    modules: 5,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    popular: true,
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    nextStart: "Jan 29"
  },
  {
    icon: Users,
    title: "Project Management",
    subtitle: "Agile & Leadership",
    description: "Learn agile methodologies, team leadership, and project delivery techniques.",
    duration: "6 weeks",
    level: "Intermediate",
    price: "₱30,000",
    originalPrice: "₱40,000",
    category: "Management",
    rating: 4.8,
    students: 743,
    modules: 4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    popular: false,
    skills: ["Agile", "Scrum", "Leadership", "Risk Management"],
    nextStart: "Feb 5"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Security & Risk Management",
    description: "Understand security protocols, threat assessment, and risk management.",
    duration: "14 weeks",
    level: "Advanced",
    price: "₱65,000",
    originalPrice: "₱80,000",
    category: "Security",
    rating: 4.9,
    students: 432,
    modules: 9,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    popular: false,
    skills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Compliance"],
    nextStart: "Feb 12"
  }
];

interface TrainingProgramsProps {
  onProgramSelect?: (program: any) => void;
}

export function TrainingPrograms({ onProgramSelect }: TrainingProgramsProps) {
  const getLevelColor = (level: string) => {
    if (level.includes("Beginner")) return "bg-green-100 text-green-800 border-green-200";
    if (level.includes("Intermediate")) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    if (level.includes("Advanced")) return "bg-red-100 text-red-800 border-red-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <TooltipProvider>
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="space-y-4">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  Industry-Leading Curriculum
                </Badge>
              </div>
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
                      <Badge variant="outline" className={`text-xs ${getLevelColor(program.level)}`}>
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
                            <div>
                              <Badge variant="outline" className="text-xs">
                                Next: {program.nextStart}
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Next cohort starts {program.nextStart}, 2025</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group hover:bg-primary hover:text-primary-foreground"
                        onClick={() => onProgramSelect?.(program)}
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

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="space-y-4">
                <Avatar className="w-16 h-16 mx-auto">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                    ?
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">Can't Find What You're Looking For?</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We offer custom training programs tailored to your organization's specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    View All Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </TooltipProvider>
  );
}