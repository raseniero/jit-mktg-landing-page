import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-300" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-pink-400" }
  ];

  const quickLinks = [
    { label: "About Us", href: "#", badge: null },
    { label: "Training Programs", href: "#", badge: "Popular" },
    { label: "Admissions", href: "#", badge: null },
    { label: "Faculty", href: "#", badge: null },
    { label: "News & Events", href: "#", badge: "New" }
  ];

  const programs = [
    { label: "Web Development", href: "#", students: "1,200+" },
    { label: "Data Science", href: "#", students: "850+" },
    { label: "UI/UX Design", href: "#", students: "650+" },
    { label: "Digital Marketing", href: "#", students: "1,100+" },
    { label: "Project Management", href: "#", students: "750+" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" }
  ];

  return (
    <TooltipProvider>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Newsletter Section */}
          <Card className="mb-12 bg-gray-800/50 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Stay Updated</CardTitle>
              <CardDescription className="text-gray-100 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest updates on new courses, training programs, and industry insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-300 focus:border-primary"
                />
                <Button className="whitespace-nowrap group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-200 text-center mt-4">
                Join 5,000+ students already subscribed. Unsubscribe anytime.
              </p>
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
                  Jairo Institute of Technology - Advancing careers through professional training programs and industry-leading education.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div>
                      <Badge variant="outline" className="border-green-400 text-green-300 bg-green-400/10">
                        Accredited
                      </Badge>
                    </div>
                    <div>
                      <Badge variant="outline" className="border-blue-400 text-blue-300 bg-blue-400/10">
                        ISO Certified
                      </Badge>
                    </div>
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
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          className="p-0 h-auto text-gray-100 hover:text-white text-sm justify-start group"
                        >
                          {link.label}
                          <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                        {link.badge && (
                          <div>
                            <Badge 
                              variant={link.badge === "Popular" ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {link.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
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
                    <li key={program.label}>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="p-0 h-auto text-gray-100 hover:text-white text-sm justify-start w-full"
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>{program.label}</span>
                              <div>
                                <Badge variant="outline" className="text-xs border-gray-500 text-gray-200 bg-gray-500/10">
                                  {program.students}
                                </Badge>
                              </div>
                            </div>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80" side="top">
                          <div className="space-y-2">
                            <h4 className="font-semibold">{program.label}</h4>
                            <p className="text-sm text-muted-foreground">
                              {program.students} students enrolled. Professional certification program with industry-recognized credentials.
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
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start space-x-3 cursor-help">
                          <MapPin className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-100 text-sm">
                            123 Education Street<br />
                            Manila, Philippines 1001
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Visit our campus</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-3 cursor-help">
                          <Phone className="h-5 w-5 text-gray-300 flex-shrink-0" />
                          <span className="text-gray-100 text-sm">+63 (2) 8123-4567</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Call us (Mon-Fri, 8AM-6PM)</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                  
                  <li>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center space-x-3 cursor-help">
                          <Mail className="h-5 w-5 text-gray-300 flex-shrink-0" />
                          <span className="text-gray-100 text-sm">info@jit.edu.ph</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send us an email</p>
                      </TooltipContent>
                    </Tooltip>
                  </li>
                </ul>

                <Card className="mt-6 bg-gray-800/50 border-gray-600">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-xs text-gray-200 mb-2">Office Hours</p>
                      <p className="text-sm text-white font-medium">Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-sm text-white font-medium">Sat: 9:00 AM - 4:00 PM</p>
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
                  <div>
                    <Badge variant="outline" className="border-gray-500 text-gray-200 bg-gray-500/10">
                      v2.1.0
                    </Badge>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-4">
                  {legalLinks.map((link) => (
                    <Button 
                      key={link.label} 
                      variant="ghost" 
                      className="p-0 h-auto text-gray-200 hover:text-white text-sm"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </footer>
    </TooltipProvider>
  );
}