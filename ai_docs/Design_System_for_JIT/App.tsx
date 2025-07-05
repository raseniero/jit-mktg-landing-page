import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrainingPrograms } from "./components/TrainingPrograms";
import { Footer } from "./components/Footer";
import { TrainingProgramLanding } from "./components/TrainingProgramLanding";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'program'>('home');
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const navigateToProgram = (program: any) => {
    setSelectedProgram(program);
    setCurrentPage('program');
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProgram(null);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'program') {
    return (
      <>
        <ScrollArea className="h-screen">
          <TrainingProgramLanding program={selectedProgram} onNavigateBack={navigateToHome} />
        </ScrollArea>
        <Toaster />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header onNavigateHome={navigateToHome} />
        <main>
          <HeroSection />
          <Separator className="opacity-50" />
          <TrainingPrograms onProgramSelect={navigateToProgram} />
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}