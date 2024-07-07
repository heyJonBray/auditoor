import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://your-url.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'api-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
