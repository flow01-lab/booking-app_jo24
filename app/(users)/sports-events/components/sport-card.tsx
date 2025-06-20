'use client'

import Image from "next/image";
import Link from "next/link";
import ListOffers from "@/app/ui/components/list-offers";
import { OlympicHeadlineReg } from "@/app/ui/fonts";
import { useEffect, useState } from "react";
import { supabase } from '@/app/lib/db-supabase';
import { EventsTypes } from "@/app/lib/types/database-generated.types";
import ButtonGetTickets from "@/app/(users)/sports-events/components/btn-getmyticket";


export default function SportCards() {
    
    // Method for 'Events' Table Call and fetch data.
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<EventsTypes[]>([]);
    const [selectedQty, setSelectedQty] = useState<number>(1);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data } = await supabase.from('events').select();
            if(data){
                setEvents(data);
                setIsLoading(false);
            }
        }
        
        fetchEvents()
    }, []);

    return (
        <>
        <div className="flex flex-wrap justify-center ">
            { isLoading ? <p>Loading...wait please</p> : events.map((eventItem) => {
                const dateEventpg = eventItem.datetime;
                const dateEventjs = new Date(dateEventpg);
                
                return (
                    <div className="" key={eventItem.id}>
                        
                            <div className={`sport-card`}>
                                <Link href={`/sports-events/${eventItem.id}`}>
                                    <div className="sport-pict">
                                        <Image 
                                        src="/img/all-disciplines-paris2024.png"
                                        width={96}
                                        height={50}
                                        className={eventItem.picto}
                                        alt=""
                                        />
                                    </div>
                                    <h4 className={`${OlympicHeadlineReg.className}`}>{eventItem.title}</h4>
                                    <p className="">{eventItem.description}</p>
                                    <span className="">{dateEventjs.toLocaleDateString()+' - '+dateEventjs.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</span>
                                    <br/>
                                    <span className="">{eventItem.city}</span>
                                    <br/>
                                    <span className="">{eventItem.location}</span>
                                    <p className=""><strong>{eventItem.price} €</strong> /place</p>
                                </Link>
                                <ListOffers onSelect={setSelectedQty}/>
                                <ButtonGetTickets item={eventItem} quantity={selectedQty}/>
                            </div>

                    </div>
                )
            })}
        </div>
        </>
    );
}