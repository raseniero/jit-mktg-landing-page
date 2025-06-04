"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import { FormMessage } from "@/components/form-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitLeadForm } from "@/app/actions";

export default function LeadCaptureForm() {
  const [selectedTraining, setSelectedTraining] = useState<string>("");
  const [message, setMessage] = useState<{
    success: string;
  } | {
    error: string;
  } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    // Add the selected training to the form data
    if (selectedTraining) {
      formData.append("interestedTraining", selectedTraining);
    }

    try {
      const result = await submitLeadForm(formData);

      if (result?.success) {
        setMessage({ success: result.success });
        // Reset form
        const form = document.getElementById("leadForm") as HTMLFormElement;
        if (form) form.reset();
        setSelectedTraining("");
      } else if (result?.error) {
        setMessage({ error: result.error });
      }
    } catch (error) {
      setMessage({ error: "An unexpected error occurred. Please try again." });
    }
  };

  return (
    <div
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
      id="register"
    >
      {message ? (
        <div className="mb-6">
          <FormMessage message={message} />
        </div>
      ) : null}

      <form action={handleSubmit} id="leadForm" className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1234567890"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="training">Training Interested In (Optional)</Label>
          <Select value={selectedTraining} onValueChange={setSelectedTraining}>
            <SelectTrigger>
              <SelectValue placeholder="Select a training program" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low-code-no-code">
                Low-Code/No-Code using Bubbi.io
              </SelectItem>
              <SelectItem value="leading-safe">Leading SAFe</SelectItem>
              <SelectItem value="web-development">
                Web Development with Bubbio.io
              </SelectItem>
              <SelectItem value="sitecore">
                Introduction to Sitecore Fundamentals
              </SelectItem>
              <SelectItem value="prompt-engineering">
                Introduction to Prompt Engineering
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <SubmitButton className="w-full bg-blue-600 hover:bg-blue-700">
          Register Interest
        </SubmitButton>
      </form>
    </div>
  );
}
