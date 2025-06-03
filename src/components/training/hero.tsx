import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TrainingHero() {
  return (
    <div className="relative overflow-hidden bg-white pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <Image
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=120&q=80"
                width={40}
                height={40}
                alt="JIT.EDU.PH Logo"
                className="mr-3"
              />
              <span className="text-xl font-bold text-blue-600">
                JIT.EDU.PH
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Advance Your Career with Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                Training Programs
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Enhance your skills with our industry-leading training programs.
              From technical skills to leadership development, we have courses
              designed to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#courses"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Explore Courses
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#register"
                className="inline-flex items-center px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Register Interest
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  width={600}
                  height={400}
                  alt="Training Session"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
