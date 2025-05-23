// Declarations for Postgres JS Use.
//import sql from '@/app/lib/db-postgres-js';
//import { Event } from '../types/definition';

// Declarations for Supabase JS Use.
import { supabase } from '@/app/lib/db-supabase';


/*
// POSTGRES JS QUERY
export async function fetchSportsEvents() {
    try{
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
};*/


// SUPABASE QUERY
export default async function EventsData() {
  const { data: events, error } = await supabase.from('events').select();
  if(error){
    console.log("fetching data from 'events' failed. Sorry, try again ...");
  }
  return events;
}

// return in JSON => return <pre>{JSON.stringify(events, null, 2)}</pre>;

// Try to fetch data to an object
/*
export async function getEventPost(paramslug){
    const eventPost = await EventsData();
    const postSlug = eventPost.map((eventpost) => ({
            ...eventpost
        }))
  return postSlug;
}*/
