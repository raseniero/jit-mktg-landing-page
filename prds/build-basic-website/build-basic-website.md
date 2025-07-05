# **Product Requirements Document: JIT.EDU.PH Training Campaign Landing Page**

## **1\. Overview**

This document outlines the requirements for a marketing landing page designed to promote and capture leads for training campaigns offered by JIT.EDU.PH. The primary goal of this landing page is to serve as the call-to-action destination for paid advertising campaigns on Facebook and LinkedIn. It will showcase a catalog of available training programs, encouraging potential enrollees to sign up. The page's design will be consistent with the branding and aesthetics of the main JIT.EDU.PH website.

**Problem Solved:** The landing page addresses the need to convert interest generated from social media advertising into actionable leads for JIT.EDU.PH's training programs. It provides a focused environment for potential students to learn about specific courses and express their interest.

**Target Audience:** Individuals seeking professional development and up-skilling opportunities who are active on Facebook and LinkedIn and respond to targeted advertisements for technical and management training.

**Value:**

* Increases lead generation for JIT.EDU.PH training programs.  
* Provides a dedicated and optimized conversion point for marketing campaigns.  
* Enhances brand visibility and reach for JIT.EDU.PH.  
* Collects valuable contact information from interested prospects for follow-up.

## **2\. Core Features**

### **2.1. Training Program Catalog**

* **What it does:** Displays a list of featured training programs offered by JIT.EDU.PH.  
* **Why it's important:** Informs potential enrollees about the available courses and their relevance.  
* **How it works:** The landing page will feature a section listing the following training programs, with brief descriptions for each:  
  * Low-Code/No-Code using Bubbi.io  
  * Leading SAFe  
  * Web Development with Bubbio.io  
  * Introduction to Sitecore Fundamentals  
  * Introduction to Prompt Engineering  
  * Each listing should ideally include the course title and a concise summary. More detailed information could be on the main JIT.EDU.PH site, linked if necessary, but the landing page should provide enough to generate interest.

### **2.2. Lead Capture Form**

* **What it does:** Allows interested individuals to submit their contact information to register their interest or request more information.  
* **Why it's important:** This is the primary mechanism for converting visitors into leads.  
* **How it works:** A web form will be prominently displayed on the page. The form will collect the following information:  
  * Full Name (Text Input)  
  * Email Address (Email Input, with validation)  
  * Phone Number (Text/Tel Input, with validation for format if possible)  
  * (Optional) A dropdown or checkboxes for "Training(s) Interested In" could be added to pre-qualify leads.  
  * A clear "Submit" or "Register Interest" button.

### **2.3. Data Storage**

* **What it does:** Securely stores the information submitted through the lead capture form.  
* **Why it's important:** Ensures that lead data is not lost and can be accessed for follow-up.  
* **How it works:** Upon successful form submission, the collected data (Name, Email, Phone Number, Timestamp, potentially selected training) will be saved to a designated database (e.g., a managed PostgreSQL backend service).

### **2.4. Email Notification**

* **What it does:** Automatically sends an email notification with the lead's details to a designated JIT.EDU.PH email address.  
* **Why it's important:** Enables prompt follow-up with potential enrollees by the JIT.EDU.PH team.  
* **How it works:** Once a form is successfully submitted and data is saved, the system will trigger an email containing the new lead's Name, Email, and Phone Number to leads@jit.edu.ph.

### **2.5. Design Consistency**

* **What it does:** Ensures the landing page's visual design aligns with the existing JIT.EDU.PH website.  
* **Why it's important:** Maintains brand consistency, builds trust, and provides a seamless user experience for visitors familiar with or navigating from the main site.  
* **How it works:** The landing page will adopt the color scheme, typography, logo usage, and overall layout style of https://jit.edu.ph. This includes responsive design to ensure optimal viewing on desktops, tablets, and mobile devices.

## **3\. User Experience**

### **3.1. User Personas**

* **Persona 1: The Career Advancer (Tech Professional)**  
  * Mid-level professional (e.g., developer, IT specialist) looking to acquire new skills (e.g., Bubbi.io, Sitecore, Prompt Engineering) to advance their career or switch to a new domain.  
  * Responds to targeted ads on LinkedIn showcasing specific technical skills.  
  * Values clear, concise information about course content and benefits.  
* **Persona 2: The Aspiring Leader (Manager/Team Lead)**  
  * Seeking certifications or knowledge in methodologies like SAFe to improve team performance and project outcomes.  
  * Responds to ads on LinkedIn or Facebook highlighting leadership and agile training.  
  * Looks for credibility and practical application of the training.  
* **Persona 3: The Skill Seeker (General Audience)**  
  * Individual interested in broader tech literacy or entry-level skills (e.g., Low-Code/No-Code development).  
  * May encounter ads on Facebook based on general interest in technology or education.  
  * Needs an easy-to-understand overview of what the courses offer and how they can get started.

### **3.2. Key User Flows**

* **Lead Generation Flow:**  
  1. User sees a Facebook or LinkedIn ad for JIT.EDU.PH training.  
  2. User clicks the ad's call-to-action link.  
  3. User lands on the dedicated marketing landing page.  
  4. User views the information about the training programs offered.  
  5. User finds a training of interest and decides to learn more or sign up.  
  6. User navigates to the lead capture form.  
  7. User fills in their Name, Email, and Phone Number.  
  8. User clicks the "Submit" button.  
  9. User receives an on-screen confirmation message (e.g., "Thank you for your interest\! We will be in touch shortly.").  
* **Internal Notification Flow:**  
  1. User submits the lead capture form.  
  2. System validates and saves the submitted data to the database.  
  3. System automatically sends an email notification with the lead's details to leads@jit.edu.ph.  
  4. JIT.EDU.PH sales/admissions team receives the email and can initiate follow-up.

### **3.3. UI/UX Considerations**

* **Clarity and Focus:** The page should have a single, clear objective: to get users to sign up or express interest.  
* **Compelling Call-to-Action (CTA):** Prominent and persuasive CTAs (e.g., "Register Your Interest Now," "Download Course Brochure," "Request a Callback").  
* **Visual Hierarchy:** Important information (value proposition, course names, form) should be easily scannable.  
* **Mobile-First & Responsive Design:** Essential, as many users will access the page via mobile devices from social media apps.  
* **Fast Load Times:** Optimized images and code to ensure the page loads quickly, reducing bounce rates.  
* **Trust Signals:** Include JIT.EDU.PH logo. Testimonials or partner logos could be considered if space and relevance permit, but the primary focus is lead capture.  
* **Minimal Distractions:** Avoid excessive navigation or links that would take the user away from the primary goal, unless it's a link to the main JIT.EDU.PH site for more detailed info, used judiciously.  
* **Accessibility:** Adhere to basic web accessibility standards (e.g., alt text for images, keyboard navigation for forms).  
* **Confirmation:** Clear feedback upon form submission (success or error messages).

## **4\. Technical Architecture**

### **4.1. System Components**

* **Frontend:**  
  * A NextJS framework will be used for the frontend development.  
  * Shadcn UI will be use for component libraries.  
  * Tailwind CSS for For CSS styling.  
* **Backend:**  
  * A server-side language/environment to handle form submissions, data validation, database interaction, and email sending (e.g., Node.js with Express).  
  * Alternatively, serverless functions (e.g., A Vercel Functions) could be used for form processing.  
* **Database:**  
  * A relational (e.g., PostgreSQL) or NoSQL (e.g., MongoDB) database to store lead information.  
* **Email Service:**  
  * Integration with an email sending service (e.g., SendGrid) for reliable delivery of notifications to leads@jit.edu.ph. Server-side mailto functions can be less reliable.

### **4.2. Data Models**

* **Lead:**  
  * leadId (Primary Key, auto-generated)  
  * name (String, required)  
  * email (String, required, unique if desired for basic de-duplication at DB level)  
  * phoneNumber (String, required)  
  * interestedTraining (String or Array of Strings, optional \- can store the name of the training(s) selected)  
  * submissionTimestamp (Timestamp, auto-generated)  
  * source (String, default: "CampaignLandingPage\_SocialMedia")

### **4.3. APIs and Integrations**

* **Internal API (if applicable):** A simple RESTful API endpoint for the frontend to submit form data to the backend.  
  * POST /api/leads \- Submits new lead data.  
* **Email Service API:** Integration with the chosen email service provider's API for sending emails.

### **4.4. Infrastructure Requirements**

* **Web Hosting:** A platform to host the static frontend files and the backend application/functions (e.g., Tempo labs).  
* **Database Hosting:** Managed database service (e.g., Supabase).  
* **Domain/Subdomain:** A specific URL for the landing page (e.g., campaign.jit.edu.ph/training or a dedicated domain).  
* **SSL Certificate:** To ensure secure data transmission (HTTPS).

## **5\. Development Roadmap**

### **5.1. MVP Requirements (Phase 1\)**

* **Basic Landing Page Structure:**  
  * Single HTML page with sections for:  
    * Hero/Introductory section with a clear value proposition.  
    * Training program listings (Course Title, brief description).  
    * Lead capture form (Name, Email, Phone).  
  * Basic styling to align with JIT.EDU.PH branding (logo, primary colors, fonts).  
* **Functional Lead Capture Form:**  
  * Client-side validation for required fields and email format.  
  * Form submission to a backend endpoint.  
* **Backend Logic:**  
  * Receive form data.  
  * Basic server-side validation.  
  * Save lead data to the chosen database (e.g., PostgreSQL).  
  * Send email notification to leads@jit.edu.ph with lead details.  
* **Deployment:**  
  * Deploy frontend and backend to a hosting environment.  
  * Configure DNS and SSL.  
* **Testing:**  
  * End-to-end testing of the lead capture flow.  
  * Testing on major browsers and mobile devices.

### **5.2. Future Enhancements (Phase 2+)**

* **Advanced Styling & UX Improvements:**  
  * More sophisticated visual design and micro-interactions.  
  * Incorporate testimonials or success stories (if available and relevant).  
* **Confirmation Email to Enrollee:** Send an automated email to the user confirming their submission.  
* **CRM Integration:** Directly push lead data into JIT.EDU.PH's CRM system.  
* **Analytics & Tracking:**  
  * Integrate Google Analytics or other analytics tools to track page views, conversion rates, traffic sources.  
  * Implement tracking pixels for Facebook and LinkedIn ads.  
* **A/B Testing Capabilities:** Allow for testing different headlines, CTAs, or layouts to optimize conversion rates.  
* **Detailed Training Pages:** Option to link each training program to a more detailed page (either on the main site or as separate landing page sections).  
* **CAPTCHA/Spam Protection:** Add reCAPTCHA or similar to the form to prevent spam submissions.  
* **Admin Dashboard:** A simple interface to view and manage collected leads (if not relying solely on CRM/email).

## **6\. Logical Dependency Chain**

1. **Foundation & Setup (Blocking):**  
   * Choose and set up hosting environment (web server, database).  
   * Register domain/subdomain if needed and configure DNS.  
   * Obtain SSL certificate.  
   * Gather JIT.EDU.PH brand assets (logo, color codes, font details).  
2. **Content & Basic Structure (Frontend \- Parallel with Backend Setup):**  
   * Draft copy for the landing page (headlines, training descriptions, CTA text).  
   * Develop the HTML structure for the landing page (sections, form elements).  
   * Apply basic CSS for layout and initial branding alignment.  
3. **Core Backend Functionality (Backend \- Parallel with Frontend Styling):**  
   * Set up the database schema (Lead model).  
   * Develop the backend endpoint to receive form data.  
   * Implement logic to save data to the database.  
   * Implement logic to send email notifications to leads@jit.edu.ph.  
4. **Integration & Styling (Frontend & Backend Integration):**  
   * Connect the frontend form to the backend endpoint using JavaScript (AJAX/Fetch).  
   * Refine CSS to closely match https://jit.edu.ph design.  
   * Implement responsive design for mobile, tablet, and desktop.  
   * Add client-side and server-side form validation.  
5. **Testing & Deployment (Sequential):**  
   * Thoroughly test the entire user flow (form submission, data saving, email notification).  
   * Test across different browsers and devices.  
   * Deploy the finalized version to the production environment.  
   * Final checks on the live page.  
6. **Post-MVP (Future Enhancements \- Iterative):**  
   * Prioritize and implement features from the "Future Enhancements" list based on impact and resources.

## **7\. Risks and Mitigations**

### **7.1. Technical Challenges**

* **Risk:** Difficulty in accurately replicating the https://jit.edu.ph design.  
  * **Mitigation:** Obtain official brand guidelines if available. Use browser developer tools to inspect styles. Allocate sufficient time for CSS development and refinement. Conduct design reviews.  
* **Risk:** Email notifications being marked as spam or not delivered.  
  * **Mitigation:** Use a reputable third-party email sending service (e.g., SendGrid) instead of server's mail() function. Configure SPF, DKIM records correctly. Test email delivery thoroughly.  
* **Risk:** Database security vulnerabilities or data loss.  
  * **Mitigation:** Use a managed database service with built-in security features. Follow best practices for securing database credentials and access. Implement regular backups if applicable (managed services often handle this). Sanitize all user inputs.  
* **Risk:** Form submission errors or failures.  
  * **Mitigation:** Implement robust client-side and server-side validation. Provide clear error messages to the user. Implement logging on the backend to track submission attempts and errors.

### **7.2. Figuring out the MVP that we can build upon**

* **Risk:** Scope creep, trying to include too many features in the initial version.  
  * **Mitigation:** Strictly adhere to the defined MVP requirements. Defer non-essential features to future iterations. Maintain a clear focus on the core functionality: display trainings, capture leads, save data, notify admin.  
* **Risk:** Landing page not converting well due to poor UX or messaging.  
  * **Mitigation:** Prioritize clear, concise messaging and a strong call-to-action. Ensure the design is user-friendly and mobile-responsive. Plan for A/B testing in future enhancements to optimize.

### **7.3. Resource Constraints**

* **Risk:** Limited development time or budget impacting quality or scope.  
  * **Mitigation:** Focus on a lean MVP. Consider using UI frameworks (like Tailwind CSS) or pre-built components to speed up frontend development. Opt for serverless functions or managed services to reduce backend operational overhead. Clearly define priorities.  
* **Risk:** Delays in obtaining content (training descriptions, branding assets).  
  * **Mitigation:** Request all necessary content and assets from JIT.EDU.PH at the beginning of the project. Use placeholder content during development if necessary, but highlight dependencies.

## **8\. Appendix**

* **Primary Design Reference:** https://jit.edu.ph  
* **Training Programs for Initial Launch:**  
  * Low-Code/No-Code using Bubbi.io  
  * Leading SAFe  
  * Web Development with Bubbio.io  
  * Introduction to Sitecore Fundamentals  
  * Introduction to Prompt Engineering  
* **Lead Notification Email:** leads@jit.edu.ph