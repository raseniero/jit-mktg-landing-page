# JIT Marketing Landing Page

A modern, responsive landing page for JIT Marketing services with lead capture functionality.

## Features

- Clean and modern design
- Responsive layout for all devices
- Lead capture form with validation
- Real-time form submission to Supabase
- Clear call-to-action sections
- SEO optimized structure
- Fast loading performance

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod for form validation
- Supabase for data storage
- Vercel for deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, or Edge)
- Supabase account (for the backend)
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raseniero/jit-mktg-landing-page.git
```

2. Navigate to the project directory:
```bash
cd jit-mktg-landing-page
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the Supabase URL and anon key with your credentials

```bash
cp .env.example .env.local
```

### Running the Application

1. **Development Mode**
```bash
npm run dev
```

2. **Production Build**
```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

### Vercel

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository to Vercel
3. Add the environment variables in the Vercel project settings
4. Deploy!

### Supabase Setup

1. Create a new Supabase project
2. Run the following SQL to create the `leads` table:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  interested_training TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads(email);
```

## Testing

Run the test suite with:

```bash
npm test
```

## License

MIT
# Option 3: Using Live Server VS Code extension
# Right-click on index.html and select "Open with Live Server"
```

Once the server is running, open your web browser and navigate to:
- http://localhost:8000 (for Python server)
- http://localhost:8080 (for Node.js http-server)

2. **Directly Opening the File**
You can also open the landing page directly in your browser:
1. Double-click `index.html` in the project directory
2. Or drag and drop `index.html` into your browser window

Note: For the best experience, we recommend using a local server as it provides proper routing and asset serving.

## Project Structure

```
.
├── assets/
│   ├── images/
│   ├── css/
│   └── js/
├── index.html
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please contact:
- Email: contact@jitmarketing.com
- Website: https://jitmarketing.com

## Acknowledgments

- Modern design inspiration from various UI/UX best practices
- Open source community contributions