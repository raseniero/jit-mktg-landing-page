import { useState } from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { TrainingPrograms } from "./TrainingPrograms";
import { Footer } from "./Footer";
import { DesignSystem } from "./DesignSystem";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            JIT.EDU.PH Design System
          </h1>
          <p className="text-muted-foreground mb-6">
            Complete design system recreation based on the Jairo Institute of Technology website
          </p>
        </div>

        <Tabs defaultValue="website" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="website">Website Recreation</TabsTrigger>
            <TabsTrigger value="design-system">Design System</TabsTrigger>
          </TabsList>
          
          <TabsContent value="website" className="space-y-0">
            <div className="border border-border rounded-lg overflow-hidden">
              <Header />
              <HeroSection />
              <TrainingPrograms />
              <Footer />
            </div>
          </TabsContent>
          
          <TabsContent value="design-system">
            <div className="border border-border rounded-lg overflow-hidden bg-white">
              <DesignSystem />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}