'use client'

import Image from "next/image";
import Link from "next/link";
//import ListOffers from "../components/list-offers";
import { OlympicHeadlineReg } from "@/app/ui/fonts";
import { useEffect, useState } from "react";
//import { useEventsContext } from "@/app/lib/context/cartContext";
import { supabase } from '@/app/lib/db-supabase';
import { EventsTypes } from "@/app/lib/types/database-generated.types";
import ButtonGetTickets from "@/app/(users)/sports-events/components/btn-getmyticket";

/*interface SCardProps {
    eventItem: EventsTypes;
}
{eventItem}: SCardProps */

export default function SportCards() {
    
    // Method for 'Events' Table Call and fetch data.
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<EventsTypes[]>([]);

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

    // Use Context from 'useEventsContext' dependance.
    /*
    const {addToCart} = useEventsContext();
    const handleAddToCart = () => {
        addToCart(eventItem);
    }

    onClick={handleAddToCart}
    */
    return (
        <>
        <div className="flex flex-wrap justify-center ">
            { isLoading ? <p>Loading...wait please</p> : events.map((eventItem) => {
                const dateEventpg = eventItem.datetime;
                const dateEventjs = new Date(dateEventpg);
                const pathName = eventItem.title;
                const pathNameLower = pathName.toLowerCase();
                return (
                    <>
                    <Link href={`/sports-events/${eventItem.title}`} key={eventItem.id}>
                    <div className={'sport-card'}>
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
                        <span className="">{dateEventjs.toLocaleDateString()+' - '+dateEventjs.toLocaleTimeString()}</span>
                        <span className="">{eventItem.location}</span>
                        <p className=""><strong>Prix : </strong>{eventItem.price}€ /unité</p>
                        {/*<ListOffers item={item.quantityTickets}/>*/}
                        <p>Valeur de l&apos;offre : </p>
                        <ButtonGetTickets />

                    </div>
                    </Link>
                    </>
                )
            })}
        </div>
        </>
    );
}