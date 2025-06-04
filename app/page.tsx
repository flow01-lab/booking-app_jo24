"use client"

import NavBanner from "@/app/ui/components/nav-banner";
import PageEvents from "@/app/(users)/sports-events/page";
import WallBanner from "./ui/components/wall-banner";
import UpButton from "./ui/components/up-button";
//import SportsEventsData from "./lib/data";
//import { useState, useEffect } from "react";
//import { EventsTypes } from "./lib/types/database-generated.types";
//import { supabase } from "./lib/db-supabase";

// eventsData={eventsData} |=> Props à passer à <PageEvents />

export default function Home() {
    /*const [eventsData, setEventsData] = useState<EventsTypes[]>([]);
    
            useEffect(() => {
                    fetchEvents()
                }, []);
    
            const fetchEvents = async () => {
                        const { data } = await supabase.from('events').select();
                        const allEvents = data.map((event) => ({
                        ...event
                        })) as EventsTypes[];
                        setEventsData(allEvents);
                        console.log ("fetching data from 'events' succeeded.");
                    }*/
    return (
        <>
            <header className="z-0">
                <NavBanner />
            </header>
            <main className="">
                <WallBanner />
                <PageEvents />
                <UpButton />
            </main>
            <footer>
            
            </footer>
        </>
    )
};