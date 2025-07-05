import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Play, Users, Award, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
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

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional training session with people working on laptops"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                
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
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}