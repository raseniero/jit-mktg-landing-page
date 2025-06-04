import { createClient } from '../../supabase/server'
import { createClient as createBrowserClient } from '../../supabase/client'
import { createClient as createServiceClient } from '@supabase/supabase-js'

// Create a service role client that bypasses RLS for server-side operations
function createServiceRoleClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

export interface Lead {
  id: string
  name: string
  email: string
  phone_number: string
  interested_training?: string | null
  source: string
  created_at: string
  updated_at: string
}

export interface CreateLeadData {
  name: string
  email: string
  phone_number: string
  interested_training?: string
  source?: string
}

export interface UpdateLeadData {
  name?: string
  email?: string
  phone_number?: string
  interested_training?: string
  source?: string
}

/**
 * Create a new lead
 */
export async function createLead(data: CreateLeadData): Promise<{ data: Lead | null; error: any }> {
  // Use service role client to bypass RLS for server-side lead creation
  const supabase = createServiceRoleClient()
  
  const leadData = {
    ...data,
    source: data.source || 'CampaignLandingPage_SocialMedia'
  }
  
  const { data: lead, error } = await supabase
    .from('leads')
    .insert(leadData)
    .select()
    .single()
  
  return { data: lead, error }
}

/**
 * Get all leads with optional filtering
 */
export async function getLeads(options?: {
  source?: string
  limit?: number
  offset?: number
  orderBy?: 'created_at' | 'updated_at' | 'name' | 'email'
  orderDirection?: 'asc' | 'desc'
}): Promise<{ data: Lead[] | null; error: any; count?: number }> {
  const supabase = await createClient()
  
  let query = supabase
    .from('leads')
    .select('*', { count: 'exact' })
  
  // Apply filters
  if (options?.source) {
    query = query.eq('source', options.source)
  }
  
  // Apply ordering
  const orderBy = options?.orderBy || 'created_at'
  const orderDirection = options?.orderDirection || 'desc'
  query = query.order(orderBy, { ascending: orderDirection === 'asc' })
  
  // Apply pagination
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  if (options?.offset) {
    query = query.range(options.offset, (options.offset + (options?.limit || 10)) - 1)
  }
  
  const { data, error, count } = await query
  
  return { data, error, count: count ?? undefined }
}

/**
 * Get a single lead by ID
 */
export async function getLeadById(id: string): Promise<{ data: Lead | null; error: any }> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('id', id)
    .single()
  
  return { data, error }
}

/**
 * Get a lead by email address
 */
export async function getLeadByEmail(email: string): Promise<{ data: Lead | null; error: any }> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .eq('email', email)
    .single()
  
  return { data, error }
}

/**
 * Update a lead by ID
 */
export async function updateLead(id: string, data: UpdateLeadData): Promise<{ data: Lead | null; error: any }> {
  const supabase = await createClient()
  
  const updateData = {
    ...data,
    updated_at: new Date().toISOString()
  }
  
  const { data: lead, error } = await supabase
    .from('leads')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()
  
  return { data: lead, error }
}

/**
 * Delete a lead by ID
 */
export async function deleteLead(id: string): Promise<{ error: any }> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id)
  
  return { error }
}

/**
 * Get leads created within a date range
 */
export async function getLeadsByDateRange(
  startDate: string,
  endDate: string,
  source?: string
): Promise<{ data: Lead[] | null; error: any; count?: number }> {
  const supabase = await createClient()
  
  let query = supabase
    .from('leads')
    .select('*', { count: 'exact' })
    .gte('created_at', startDate)
    .lte('created_at', endDate)
    .order('created_at', { ascending: false })
  
  if (source) {
    query = query.eq('source', source)
  }
  
  const { data, error, count } = await query
  
  return { data, error, count: count ?? undefined }
}

/**
 * Get lead statistics
 */
export async function getLeadStats(): Promise<{
  data: {
    total: number
    bySource: Record<string, number>
    recentCount: number
  } | null
  error: any
}> {
  try {
    const supabase = await createClient()
    
    // Get total count
    const { count: total, error: totalError } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })
    
    if (totalError) throw totalError
    
    // Get count by source
    const { data: sourceData, error: sourceError } = await supabase
      .from('leads')
      .select('source')
    
    if (sourceError) throw sourceError
    
    const bySource = sourceData?.reduce((acc, lead) => {
      acc[lead.source] = (acc[lead.source] || 0) + 1
      return acc
    }, {} as Record<string, number>) || {}
    
    // Get recent count (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    
    const { count: recentCount, error: recentError } = await supabase
      .from('leads')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', sevenDaysAgo.toISOString())
    
    if (recentError) throw recentError
    
    return {
      data: {
        total: total || 0,
        bySource,
        recentCount: recentCount || 0
      },
      error: null
    }
  } catch (error) {
    return { data: null, error }
  }
}

// Client-side versions for browser usage
export const clientLeads = {
  /**
   * Client-side version to get leads (requires authentication)
   */
  async getLeads(options?: Parameters<typeof getLeads>[0]) {
    const supabase = createBrowserClient()
    
    let query = supabase
      .from('leads')
      .select('*', { count: 'exact' })
    
    if (options?.source) {
      query = query.eq('source', options.source)
    }
    
    const orderBy = options?.orderBy || 'created_at'
    const orderDirection = options?.orderDirection || 'desc'
    query = query.order(orderBy, { ascending: orderDirection === 'asc' })
    
    if (options?.limit) {
      query = query.limit(options.limit)
    }
    if (options?.offset) {
      query = query.range(options.offset, (options.offset + (options?.limit || 10)) - 1)
    }
    
    return await query
  },
  
  /**
   * Client-side version to update a lead
   */
  async updateLead(id: string, data: UpdateLeadData) {
    const supabase = createBrowserClient()
    
    const updateData = {
      ...data,
      updated_at: new Date().toISOString()
    }
    
    return await supabase
      .from('leads')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()
  },
  
  /**
   * Client-side version to delete a lead
   */
  async deleteLead(id: string) {
    const supabase = createBrowserClient()
    
    return await supabase
      .from('leads')
      .delete()
      .eq('id', id)
  }
}