// This file contains all functions to fetch and link data from database.
// It define the variable 'sql' for access to data.

import { createClient } from '@supabase/supabase-js'; // Define path to use a link with database
import { Database /*, Tables*/ } from './database.types';

import sql from '../lib/db';


import {
    Event,
    Ticket,
    //Offer,
} from './definition';

const supabase = createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
);


export async function fetchSportsEvents() {
    try{
        const data = await sql<Event[]>`SELECT * FROM events`; // PostgresJS structure
        //const {data: events} = await supabase.from("events").select(); // Supabase structure
        console.log ("fetching data from 'events' succeeded.");
        const allEvents = data.map((event) => ({
            ...event
          }));
        return allEvents;
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
};

export async function fetchOffers() {
    const { data, error } = await supabase.from('offers').select();
        /*const allOffers = data.map((offer) => ({
            ...offer
        }));*/
        console.log ("fetching data from 'offers' succeeded.");
        if (error) {
            console.error('Database Error:', error);
        }
        return data;
/*
    try {
        //const data = await sql<Offer[]>`SELECT * FROM offers`;
        //let offersType: Tables<'offers'>;
        //const { data: offers } = await supabase.from('offers').select();
        const { data, error } = await supabase.from('offers').select();
        const allOffers = data.map((offer) => ({
            ...offer
        }));
        console.log ("fetching data from 'offers' succeeded.");
        return allOffers;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }   */
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