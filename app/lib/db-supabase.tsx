// Connexion to Database with 'Supabase' instructions

import { createClient } from '@supabase/supabase-js'; // Define path to use a link with database with Supabase

// Client for Supabase Queries
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);