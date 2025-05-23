// This file contains all functions to fetch and link data from database.
// It define the variable 'sql' for access to data in Postgres JS.

import sql from '@/app/lib/db-postgres-js';
import { Event, Ticket, Offer } from './types/definition';

// POSTGRES JS QUERIES FUNCTIONS/COMPONENTS
export async function fetchEvents() {
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
};

export async function fetchOffers() {
    try {
        const data = await sql<Offer[]>`SELECT * FROM offers`;
        const allOffers = data.map((offer) => ({
            ...offer
        }));
        console.log ("fetching data from 'offers' succeeded.");
        return allOffers

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
};