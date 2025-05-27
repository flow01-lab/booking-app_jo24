// Declarations for Supabase JS Use.
import { supabase } from '@/app/lib/db-supabase';

// SUPABASE QUERY
export async function EventsData() {
  const { data: events, error } = await supabase.from('events').select();
  if(error){
    console.log("fetching data from 'events' failed.", error.message);
  }
  return events;
}

