// supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'your-supabase-url';
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_KEY || 'your-supabase-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
