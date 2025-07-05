"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, Mail, User, MessageSquare } from "lucide-react";

// Basic Contact Form Example
export function ContactForm() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you soon.
        </p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            required
            aria-describedby="name-description"
          />
          <p id="name-description" className="text-sm text-muted-foreground">
            Enter your full name
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            required
            aria-describedby="email-description"
          />
          <p id="email-description" className="text-sm text-muted-foreground">
            We'll never share your email
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us how we can help..."
            rows={5}
            required
            aria-describedby="message-description"
          />
          <p id="message-description" className="text-sm text-muted-foreground">
            Minimum 10 characters
          </p>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>

      {formStatus === "success" && (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your message has been sent. We'll get back to you within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {formStatus === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}

// Newsletter Signup Example
export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-sm text-muted-foreground">
          Get the latest news and updates delivered to your inbox.
        </p>
      </div>

      {!subscribed ? (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1">
            <Label htmlFor="newsletter-email" className="sr-only">
              Email
            </Label>
            <Input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Subscribe</Button>
        </form>
      ) : (
        <Alert>
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            Thanks for subscribing! Check your email to confirm.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

// Lead Capture Form Example
export function LeadCaptureForm() {
  return (
    <div className="w-full max-w-lg space-y-6 rounded-lg border p-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold">Get Started Today</h3>
          <Badge>Limited Offer</Badge>
        </div>
        <p className="text-muted-foreground">
          Join thousands of professionals advancing their careers
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lead-email">Work Email</Label>
          <Input
            id="lead-email"
            type="email"
            placeholder="john@company.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Acme Inc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">What are you interested in?</Label>
          <Textarea
            id="interest"
            placeholder="Tell us about your learning goals..."
            rows={3}
          />
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">Free Trial</Badge>
          <span className="text-sm text-muted-foreground">
            No credit card required
          </span>
        </div>

        <Button type="submit" className="w-full" size="lg">
          Start Free Trial
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>
    </div>
  );
}

// Feedback Form with All Components
export function FeedbackForm() {
  const [rating, setRating] = React.useState<number>(0);

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">We'd Love Your Feedback</h3>
        <div className="flex items-center gap-2">
          <Badge variant="outline">2 min survey</Badge>
          <Badge variant="secondary">Anonymous</Badge>
        </div>
      </div>

      <Separator />

      <form className="space-y-6">
        <div className="space-y-2">
          <Label>How would you rate your experience?</Label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <Button
                key={value}
                type="button"
                variant={rating === value ? "default" : "outline"}
                size="sm"
                className="w-10"
                onClick={() => setRating(value)}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback-name">Name (Optional)</Label>
          <Input id="feedback-name" placeholder="Your name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback-email">Email (Optional)</Label>
          <Input
            id="feedback-email"
            type="email"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="feedback-message">
            Additional Comments
            <Badge variant="outline" className="ml-2">
              Optional
            </Badge>
          </Label>
          <Textarea
            id="feedback-message"
            placeholder="Share your thoughts..."
            rows={4}
          />
        </div>

        <Alert>
          <AlertDescription>
            Your feedback helps us improve our services for everyone.
          </AlertDescription>
        </Alert>

        <Button type="submit" className="w-full">
          Submit Feedback
        </Button>
      </form>
    </div>
  );
}

// Complete Form Showcase
export function FormExamples() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-6 text-2xl font-bold">Form Component Examples</h2>
        <p className="mb-8 text-muted-foreground">
          Examples showcasing our form components: Input, Label, Textarea, Alert, Badge, and Separator
        </p>
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Contact Form</h3>
        <ContactForm />
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Newsletter Signup</h3>
        <NewsletterForm />
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Lead Capture Form</h3>
        <LeadCaptureForm />
      </section>

      <Separator className="my-8" />

      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Feedback Form</h3>
        <FeedbackForm />
      </section>
    </div>
  );
}