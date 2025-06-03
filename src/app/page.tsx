import TrainingHero from "@/components/training/hero";
import TrainingCatalog from "@/components/training/catalog";
import LeadCaptureForm from "@/components/training/lead-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <TrainingHero />

      {/* Training Catalog Section */}
      <section className="py-16 bg-white" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your skills with our industry-leading training programs
              designed for professionals.
            </p>
          </div>

          <TrainingCatalog />
        </div>
      </section>

      {/* Lead Capture Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Register Your Interest</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to express your interest in our training
              programs. Our team will contact you with more information.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our training programs.
          </p>
          <a
            href="#courses"
            className="inline-flex items-center px-6 py-3 text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Explore Courses
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
