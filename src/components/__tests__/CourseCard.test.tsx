import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';
import CourseCard from '../training/catalog';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('CourseCard Component', () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Setup the mock useRouter implementation
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: mockPush,
    }));
  });

  it('renders course information correctly', () => {
    render(<CourseCard />);
    
    // Check if the first course title is rendered
    expect(screen.getByText('Low-Code/No-Code using Bubbi.io')).toBeInTheDocument();
    
    // Check if the first course description is rendered
    expect(screen.getByText(/Learn to build powerful applications without writing code/)).toBeInTheDocument();
    
    // Check if "Learn More" link is present
    expect(screen.getAllByText('Learn More').length).toBeGreaterThan(0);
  });

  it('has a "Learn More" link that navigates to the course detail page', () => {
    render(<CourseCard />);
    
    // Get all "Learn More" links
    const learnMoreLinks = screen.getAllByText('Learn More');
    
    // Test the first course's "Learn More" link
    fireEvent.click(learnMoreLinks[0]);
    
    // Verify the link has the correct href
    expect(learnMoreLinks[0].closest('a')).toHaveAttribute('href', '/courses/1');
  });

  it('displays all courses from the trainingPrograms array', () => {
    render(<CourseCard />);
    
    // Check if all course titles are rendered
    expect(screen.getByText('Low-Code/No-Code using Bubbi.io')).toBeInTheDocument();
    expect(screen.getByText('Leading SAFe')).toBeInTheDocument();
    expect(screen.getByText('Web Development with Bubbio.io')).toBeInTheDocument();
    expect(screen.getByText('Introduction to Sitecore Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Introduction to Prompt Engineering')).toBeInTheDocument();
  });
});
