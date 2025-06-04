-- Update RLS policy for leads table to allow public insertions
-- This is needed for the lead capture form to work for anonymous users

-- Drop all existing policies
DROP POLICY IF EXISTS "Authenticated users can manage leads" ON leads;
DROP POLICY IF EXISTS "Allow public lead submission" ON leads;
DROP POLICY IF EXISTS "Authenticated users can read leads" ON leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON leads;
DROP POLICY IF EXISTS "Authenticated users can delete leads" ON leads;

-- Create new policies for different operations:

-- 1. Allow anyone to insert leads (for the public lead form)
CREATE POLICY "Allow public lead submission"
  ON leads
  FOR INSERT
  WITH CHECK (true);

-- 2. Allow authenticated users to read all leads (for admin/dashboard)
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- 3. Allow authenticated users to update leads (for admin/dashboard)
CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- 4. Allow authenticated users to delete leads (for admin/dashboard)
CREATE POLICY "Authenticated users can delete leads"
  ON leads
  FOR DELETE
  USING (auth.uid() IS NOT NULL);