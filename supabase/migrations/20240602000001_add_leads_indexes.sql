-- Add indexes for leads table performance optimization
-- Email index for lookups and duplicate checks
CREATE INDEX idx_leads_email ON leads(email);

-- Created_at index for chronological queries and filtering
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- Source index for analytics and filtering by campaign source
CREATE INDEX idx_leads_source ON leads(source);

-- Composite index for common query patterns (source + created_at)
CREATE INDEX idx_leads_source_created_at ON leads(source, created_at);