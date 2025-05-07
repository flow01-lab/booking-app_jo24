import sql from '../db';
import { supabase } from '../data';

import { Event } from '../definition';

export async function fetchSportsEvents() {
    try{
        // POSTGRES JS QUERY
        const data = await sql<Event[]>`SELECT * FROM events`;
        console.log ("fetching data from 'events' succeeded.");
        const allEvents = data.map((event) => ({
            ...event
          }));
        return allEvents;
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch events data.');
    }
};


// SUPABASE QUERY
export default async function Events() {
  const { data: events } = await supabase.from('events').select()
  return <pre>{JSON.stringify(events, null, 2)}</pre>;
}