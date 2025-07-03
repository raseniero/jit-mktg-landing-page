# PRD: Lead Form Registration System

## 1. Introduction/Overview
This document outlines the requirements for implementing a lead capture system for the JIT Marketing landing page. The system will allow visitors to express interest in various training programs by submitting their contact information through a web form, which will be stored in Supabase.

## 2. Goals
1. Capture lead information including name, email, phone, and training interest
2. Store lead data securely in Supabase
3. Implement basic error handling
4. Ensure a smooth user experience with client-side validation

## 3. User Stories
1. **As a** website visitor, **I want to** submit my contact information for a training program **so that** I can express my interest.
2. **As a** developer, **I want** proper error handling **so that** I can ensure data integrity and provide feedback to users.

## 4. Functional Requirements

### 4.1 Form Submission
1. The form must collect the following information:
   - Full Name (required)
   - Email Address (required, must be valid format)
   - Phone Number (required)
   - Training Program (optional dropdown)
2. Form must include client-side validation for required fields and email format
3. Form must show appropriate error messages for validation failures
4. On successful submission, the form should display a success message

### 4.2 Data Storage (Supabase)
1. Create a `leads` table with the following schema:
   ```sql
   CREATE TABLE leads (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     phone TEXT NOT NULL,
     interested_training TEXT,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
2. Create an index on the email field for faster lookups:
   ```sql
   CREATE INDEX idx_leads_email ON leads(email);
   ```

### 4.3 Error Handling
1. Database errors should be caught and displayed to the user in a user-friendly manner
2. Form should validate all required fields before submission
3. User should receive appropriate feedback on submission status
4. Network errors should be handled gracefully

## 5. Non-Goals (Out of Scope)
1. Email notifications (admin or user)
2. Server-side form validation
3. CAPTCHA or bot protection
4. Rate limiting
5. User authentication
6. Admin dashboard for viewing leads
7. Lead status management

## 6. Technical Considerations

### 6.1 Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 6.2 Dependencies
- `@supabase/supabase-js`: For database operations
- `react-hook-form`: For form handling and validation

## 7. Success Metrics
1. Number of successful form submissions
2. Error rates for form submissions
3. Form submission success rate

## 8. Open Questions
1. Should we implement any analytics tracking for form submissions?
2. Are there any additional fields we should collect in the form?
3. Do we need to implement any data retention policies for the leads table?

## 9. Implementation Steps
1. Set up Supabase project and create necessary tables
2. Implement form submission handler to save to Supabase
3. Add error handling
4. Test form submission
5. Deploy and monitor

## 10. Testing Plan
1. Submit form with valid data and verify:
   - Data is saved to Supabase
   - User receives success message
2. Submit form with invalid data and verify validation
3. Test error scenarios (database down, network issues)
4. Verify error handling and user feedback
