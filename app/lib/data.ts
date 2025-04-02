// This file contains all functions to fetch and link data from database.
// It define the variable 'sql' for access to data.

import {
    Event,
    Ticket,
    Offer,
} from './definition';

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export default sql;

export async function fetchSportsEvents() {
    try{
        const data = await sql<Event[]>`SELECT * FROM events`;
        console.log ("fetching data from 'events' succeeded.");
        return data;
    }
    catch(error){
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
    
};

export async function fetchOffers() {
    try {
        const data = await sql<Offer[]>`SELECT * FROM offers`;
        console.log ("fetching data from 'offers' succeeded.");
        return data;
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