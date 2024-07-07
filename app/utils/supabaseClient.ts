import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://your-url.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'api-key';
const supabaseSecretKey = process.env.SUPABASE_SERVICE_KEY || 'service-key';

export const supabase = createClient(supabaseUrl, supabaseSecretKey);
