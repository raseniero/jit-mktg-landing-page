"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FloatingAlert } from "@/components/ui/floating-alert";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const API_ENDPOINT = 'https://f2dc665a-7f13-4891-bd97-b576d4a0a1a7.mock.pstmn.io/leads';

const trainingPrograms = [
  { id: "low-code-no-code", name: "Low-Code/No-Code using Bubbi.io" },
  { id: "leading-safe", name: "Leading SAFe" },
  { id: "web-development", name: "Web Development with Bubbio.io" },
  { id: "digital-marketing", name: "Digital Marketing" },
  { id: "seo", name: "SEO Training" },
  { id: "social-media", name: "Social Media Marketing" },
  { id: "content-marketing", name: "Content Marketing" },
  { id: "sitecore", name: "Introduction to Sitecore Fundamentals" },
  { id: "prompt-engineering", name: "Introduction to Prompt Engineering" },
  { id: "other", name: "Other" },
];

const leadFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  interested_training: z.string().optional(),
});

type LeadFormValues = z.infer<typeof leadFormSchema>;

type AlertType = 'success' | 'error' | null;

export default function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: AlertType;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interested_training: '',
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    try {
      setIsSubmitting(true);
      setAlert(null);
      
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          interested_training: data.interested_training || null,
          source: 'website',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      setAlert({
        message: 'Thank you for your interest! We\'ll be in touch soon.',
        type: 'success',
      });
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setAlert({
        message: 'Something went wrong. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {alert && (
        <FloatingAlert
          message={alert.message}
          type={alert.type}
          onDismiss={() => setAlert(null)}
        />
      )}
      <div
        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
        id="register"
      >

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            placeholder="John Doe" 
            {...register('name')}
            disabled={isSubmitting}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            disabled={isSubmitting}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...register('phone')}
            disabled={isSubmitting}
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="interested_training">Training Interested In (Optional)</Label>
          <select
            id="interested_training"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            {...register('interested_training')}
            disabled={isSubmitting}
          >
            <option value="">Select a training program</option>
            {trainingPrograms.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Register Interest'}
        </Button>
      </form>
    </div>
    </>
  );
}
