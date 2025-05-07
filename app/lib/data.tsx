// This file contains all functions to fetch and link data from database.
// It define the variable 'sql' for access to data in Postgres JS.
// It define the variable 'supabase' for CreateClient and access to data in Supabase queries


import { createClient } from '@supabase/supabase-js'; // Define path to use a link with database with Supabase
//import { Database } from './database.types';


import sql from '../lib/db';

import {
    Event,
    Ticket,
    Offer,
} from './definition';

// Client for Supabase Queries
export const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);


export async function fetchSportsEvents() {
    try{
        // POSTGRES JS QUERY
        const data = await sql<Event[]>`SELECT * FROM events`;
        console.log ("fetching data from 'events' succeeded.");
        const allEvents = data.map((event) => ({
            ...event
          }));
        return allEvents;

        // SUPABASE QUERY
        /* 
        const {data: events} = await supabase.from("events").select('*');
        if (events === null){
          return console.log("Sorry, data for events doesn't found...");
        } else {
        console.log ("fetching data from 'events' succeeded.");
        const allEvents = data.map((event) => ({
            ...event
          }));
        return allEvents;
        }
        */
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch events data.');
    }
};

export async function fetchOffers() {
    try {
        // POSTRGRES JS QUERY
        const data = await sql<Offer[]>`SELECT * FROM offers`;
        const allOffers = data.map((offer) => ({
            ...offer
        }));
        console.log ("fetching data from 'offers' succeeded.");
        return allOffers

        // SUPABASE QUERY
        /*const { data: offers } = await supabase.from('offers').select('*');
        if (offers === null) {
            return console.log("Sorry, data for offers doesn't found...");
        } else {
            const dataFilter = offers.filter((prop) => prop !== null);
            /*const allOffers = dataFilter.map((offer) => ({
                ...offer
            }));
            console.log ("fetching data from 'offers' succeeded.");
            return dataFilter /*allOffers;
        }*/
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
};

export async function fetchTickets() {
    try {
        const data = await sql<Ticket[]>`SELECT * FROM tickets`;
        console.log ("fetching data from 'tickets' succeeded.");
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }   
    
}