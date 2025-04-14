// This file contains all functions to fetch and link data from database.
// It define the variable 'sql' for access to data.

import { createClient } from '@/app/utils/supabase/server'; // Define path to use a link with database
import { Database } from '@/app/lib/database.types';

import sql from '../lib/db';


import {
    Event,
    Ticket,
    //Offer,
} from './definition';

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
    try {
        //const data = await sql<Offer[]>`SELECT * FROM offers`;
        const supabase = await createClient<Database>();
        const {data: offers} = await supabase.from('offers').select();
        const allOffers = offers?.map((offer) => ({
            ...offer
        }));
        console.log ("fetching data from 'offers' succeeded.");
        return allOffers;
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