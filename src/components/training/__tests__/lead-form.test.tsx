import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import LeadCaptureForm from '../lead-form';

// Mock the global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch as jest.Mock;

describe('LeadCaptureForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with all fields', () => {
    render(<LeadCaptureForm />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/training interested in/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register interest/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<LeadCaptureForm />);
    
    const submitButton = screen.getByRole('button', { name: /register interest/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/name must be at least 2 characters/i)).toBeInTheDocument();
    expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument();
    expect(await screen.findByText(/please enter a valid phone number/i)).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const mockResponse = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      interested_training: 'digital-marketing',
      source: 'website',
      timestamp: new Date().toISOString(),
    };
    
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    render(<LeadCaptureForm />);
    
    // Fill out the form
    fireEvent.input(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    
    fireEvent.input(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    
    fireEvent.input(screen.getByLabelText(/phone number/i), {
      target: { value: '+1234567890' },
    });
    
    fireEvent.change(screen.getByLabelText(/training interested in/i), {
      target: { value: 'digital-marketing' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /register interest/i }));

    // Check if the form was submitted with the right data
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
      
      // Get the actual call arguments
      const [url, options] = mockFetch.mock.calls[0];
      const body = JSON.parse(options.body);
      
      // Verify the URL
      expect(url).toBe('https://f2dc665a-7f13-4891-bd97-b576d4a0a1a7.mock.pstmn.io/leads');
      
      // Verify the method and headers
      expect(options.method).toBe('POST');
      expect(options.headers).toEqual({
        'Content-Type': 'application/json',
      });
      
      // Verify the body content without the timestamp
      const { timestamp, ...bodyWithoutTimestamp } = body;
      expect(bodyWithoutTimestamp).toEqual({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        interested_training: 'digital-marketing',
        source: 'website',
      });
      
      // Verify timestamp is a string
      expect(typeof timestamp).toBe('string');
    });

    // Check for success message
    expect(await screen.findByText(/thank you for your interest/i)).toBeInTheDocument();
  });

  it('handles form submission error', async () => {
    const errorMessage = 'Failed to submit form';
    mockFetch.mockRejectedValueOnce(new Error(errorMessage));

    render(<LeadCaptureForm />);
    
    // Fill out the form with valid data
    fireEvent.input(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    
    fireEvent.input(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    
    fireEvent.input(screen.getByLabelText(/phone number/i), {
      target: { value: '+1234567890' },
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /register interest/i }));

    // Check for error message
    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });
});
