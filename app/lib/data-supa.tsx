"use client"

// This file contains all functions to fetch and link data from database.
// It import the variable 'supabase' for CreateClient and access to data in Supabase queries

import { supabase } from './db-supabase';
import { EventsTypes, OffersTypes, TicketsTypes } from '@/app/lib/types/database-generated.types';
import { useState, useEffect } from 'react';

// SUPABASE QUERIES FUNCTIONS/COMPONENTS
export function SportsEventsData() {
    
    const [eventsData, setEventsData] = useState<EventsTypes[]>([]);

    useEffect(() => {
            fetchDataEvents()
        }, []);

    const fetchDataEvents = async () => {
                const { data, error } = await supabase.from('events').select();
                if(data){
                    const allEvents = data.map((event) => ({
                        ...event
                    })) as EventsTypes[];
                    setEventsData(allEvents);
                    console.log ("fetching data from 'events' succeeded.");
                    console.log(allEvents);
                }
                
                if(error){
                    console.log("Sorry, fetching data from 'event' meet an error...")
                }
            }
    return (eventsData);
};

export function OffersData(){
    const [offersData, setOffersData] = useState<OffersTypes[]>([]);

    useEffect(() => {
        fetchDataOffers()
    }, []);

    const fetchDataOffers = async () => {
        const { data, error } = await supabase.from('offers').select();
        if(data){
            const allOffers = data.map((offer) => ({
                ...offer
            })) as OffersTypes[];
            setOffersData(allOffers);
            console.log("fetching data from 'offers' succeeded.");
            console.log(allOffers);
        }
        
        if(error){
            console.log("Sorry, fetching data from 'offers' meet an error...")
        }
    }
    return (offersData);
};

export function TicketsData(){
    const [ticketsData, setTicketsData] = useState<TicketsTypes[]>([]);

    useEffect(() => {
        fetchDataTickets()
    }, []);

    const fetchDataTickets = async () => {
        const { data, error } = await supabase.from('tickets').select();
        if(data){
            const allTickets = data.map((ticket) => ({
                ...ticket
            })) as TicketsTypes[];
            setTicketsData(allTickets);
            console.log("fetching data from 'tickets' succeeded.");
            console.log(allTickets);
        }

        if(error){
            console.log("Sorry, fetching data from 'tickets' meet an error...")
        }
    }
    return (ticketsData);
};