import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "./ui/sheet";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Menu, Bell, Search, User, BookOpen, Award, Phone } from "lucide-react";

interface HeaderProps {
  onNavigateHome?: () => void;
}

export function Header({ onNavigateHome }: HeaderProps) {
  return (
    <TooltipProvider>
      <header className="w-full bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">
                    J
                  </AvatarFallback>
                </Avatar>
                <button 
                  onClick={onNavigateHome}
                  className="text-2xl text-primary font-bold hover:text-primary/80 transition-colors"
                >
                  JIT.EDU.PH
                </button>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="hidden sm:inline-flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Accredited
                      </Badge>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Officially accredited institution</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer group"
                    onClick={onNavigateHome}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Home</span>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <NavigationMenuLink className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span>Courses</span>
                        </div>
                      </NavigationMenuLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Browse our training programs</p>
                    </TooltipContent>
                  </Tooltip>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                    Register
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>Sign In</span>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search courses</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-4 w-4" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 text-xs p-0 flex items-center justify-center">
                      <Badge className="w-5 h-5 text-xs p-0 flex items-center justify-center">
                        3
                      </Badge>
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
              
              <Separator orientation="vertical" className="h-6" />
              
              <Button size="sm" className="ml-2">
                Sign Up
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <div className="md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 cursor-pointer">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                        J
                      </AvatarFallback>
                    </Avatar>
                    <span>JIT.EDU.PH</span>
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-6 space-y-4">
                  {/* Quick Stats */}
                  <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="font-bold text-primary">5K+</div>
                          <div className="text-xs text-muted-foreground">Students</div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">95%</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Separator />
                  
                  {/* Navigation */}
                  <nav className="flex flex-col space-y-2">
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={onNavigateHome}
                    >
                      <div className="flex items-center space-x-2">
                        <span>🏠</span>
                        <span>Home</span>
                      </div>
                    </Button>
                    
                    <Button variant="ghost" className="justify-start">
                      <div className="flex items-center space-x-2 w-full">
                        <BookOpen className="w-4 h-4" />
                        <span>Courses</span>
                        <div className="ml-auto">
                          <Badge variant="secondary" className="text-xs">6</Badge>
                        </div>
                      </div>
                    </Button>
                    
                    <Button variant="ghost" className="justify-start">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Register</span>
                      </div>
                    </Button>
                    
                    <Button variant="ghost" className="justify-start">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Sign In</span>
                      </div>
                    </Button>
                  </nav>

                  <Separator />

                  {/* Contact Info */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">+63 (2) 8123-4567</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">📧 info@jit.edu.ph</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA Button */}
                  <Button className="w-full" size="lg">
                    Sign Up Now
                  </Button>

                  {/* Trust Badges */}
                  <div className="flex justify-center space-x-2">
                    <div>
                      <Badge variant="outline" className="text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Accredited
                      </Badge>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        ✓ Certified
                      </Badge>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </TooltipProvider>
  );
}