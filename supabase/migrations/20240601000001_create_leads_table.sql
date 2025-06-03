-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  interested_training TEXT,
  source TEXT DEFAULT 'CampaignLandingPage_SocialMedia',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy for all authenticated users to manage leads
DROP POLICY IF EXISTS "Authenticated users can manage leads" ON leads;
CREATE POLICY "Authenticated users can manage leads"
  ON leads
  USING (auth.uid() IS NOT NULL);

-- Enable realtime
alter publication supabase_realtime add table leads;
