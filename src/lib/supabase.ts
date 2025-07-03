import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Lead = Database['public']['Tables']['leads']['Insert'];

export async function submitLead(lead: Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'source'>) {
  const { data, error } = await supabase
    .from('leads')
    .insert([
      { 
        ...lead, 
        source: 'website',
        updated_at: new Date().toISOString() 
      }
    ])
    .select()
    .single();

  if (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }

  return data;
}
