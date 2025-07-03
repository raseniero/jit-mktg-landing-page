'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getCourseBySlug, getRandomCourseImageUrl } from '@/lib/courses';
import { Course } from '@/lib/courses';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function CourseNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">Sorry, we couldn't find the course you're looking for.</p>
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

interface CourseDetailsProps {
  course: Course;
}

function CourseDetails({ course }: CourseDetailsProps) {
  const [isClient, setIsClient] = useState(false);
  const imageUrl = getRandomCourseImageUrl(course.id);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Banner Image */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={course.title}
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{course.title}</h1>
              {course.icon && isClient && (
                <div className="inline-flex items-center justify-center bg-blue-600 bg-opacity-80 rounded-full p-3 mb-4">
                  {course.icon}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              {course.description || 'No description available for this course.'}
            </p>
            
            {/* Additional course content */}
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">What You'll Learn</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Key concepts and principles of {course.title.split(' ')[0]}</li>
                <li>Practical applications and real-world examples</li>
                <li>Best practices and industry standards</li>
                <li>Hands-on exercises and projects</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 pt-4">Course Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">Duration</h3>
                  <p className="text-gray-600">4 weeks (self-paced)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Level</h3>
                  <p className="text-gray-600">Beginner to Intermediate</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Format</h3>
                  <p className="text-gray-600">Online, Self-Paced</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Certificate</h3>
                  <p className="text-gray-600">Upon completion</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                onClick={() => {
                  console.log('Registering for course:', course.id);
                }}
              >
                Enroll Now
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 text-center"
              >
                Back to All Courses
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

interface CourseDetailPageProps {
  params: {
    slug: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        if (!params.slug) {
          setError('Invalid course URL');
          setIsLoading(false);
          return;
        }
        
        const courseData = await getCourseBySlug(params.slug);
        if (!courseData) {
          setError('Course not found');
        } else {
          setCourse(courseData);
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError('Failed to load course');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourse();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return <CourseNotFound />;
  }

  return <CourseDetails course={course} />;
}
