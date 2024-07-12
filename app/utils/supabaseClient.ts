import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-url.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'api-key';
const supabaseSecretKey =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || 'service-key';

export const supabase = createClient(supabaseUrl, supabaseSecretKey);
