// This file contains utility functions for working with course data

import { LucideIcon } from 'lucide-react';

export type Course = {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
};

/**
 * Converts a string to a URL-friendly slug
 */
function stringToSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .trim();
}

// Mock database of courses
const courses: Course[] = [
  {
    id: 1,
    title: 'Low-Code/No-Code using Bubbi.io',
    slug: 'low-code-no-code-using-bubbi-io',
    description: 'Learn to build powerful applications without writing code using the Bubbi.io platform.',
    icon: null,
  },
  {
    id: 2,
    title: 'Leading SAFe',
    slug: 'leading-safe',
    description: 'Master the Scaled Agile Framework and lead your organization through agile transformations.',
    icon: null,
  },
  {
    id: 3,
    title: 'Web Development with Bubbio.io',
    slug: 'web-development-with-bubbio-io',
    description: 'Create responsive web applications using the intuitive Bubbio.io development platform.',
    icon: null,
  },
  {
    id: 4,
    title: 'Introduction to Sitecore Fundamentals',
    slug: 'introduction-to-sitecore-fundamentals',
    description: 'Learn the basics of Sitecore CMS and how to build and manage digital experiences.',
    icon: null,
  },
  {
    id: 5,
    title: 'Introduction to Prompt Engineering',
    slug: 'introduction-to-prompt-engineering',
    description: 'Master the art of crafting effective prompts for AI systems to generate desired outputs.',
    icon: null,
  },
];

/**
 * Fetches all courses
 */
export function getAllCourses(): Course[] {
  return [...courses];
}

/**
 * Finds a course by its ID
 */
export async function getCourseById(id: number): Promise<Course | undefined> {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = courses.find(course => course.id === id);
      resolve(course);
    }, 100); // Simulate network delay
  });
}

/**
 * Finds a course by its slug
 */
export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = courses.find(course => course.slug === slug);
      resolve(course);
    }, 100); // Simulate network delay
  });
}

/**
 * Gets a random course image URL (for demo purposes)
 */
export function getRandomCourseImageUrl(seed: string | number): string {
  // For now, we'll use placeholder images based on course ID
  const imageId = (Number(seed) % 5) + 1; // This will give us a number between 1-5
  return `https://picsum.photos/seed/course-${seed}-${imageId}/800/400`;
}
