'use client'

import Image from "next/image";
import ListOffers from "../components/list-offers";
import { OlympicHeadlineReg } from "../fonts";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/cartContext";
import { supabase } from '../../lib/db-supabase';


export default function SportCards() {
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<any>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data } = await supabase.from('events').select();
            setEvents(data);
            setIsLoading(false);
        }
        
        fetchEvents()
    }, [])

    // ACTION for the "Add to Cart" or "Remove from Cart" button
    // Method which must be used with React Client Side Component => don't work in SSR, so don't use it in Server Side *Please*
        const {items, addToCart, removeFromCart} = useContext(CartContext);
        const [exists, setExists] = useState(false);
        useEffect(() => {
            const inCart = items.find((items) => items.id === id );
            if (inCart) {
                setExists(true);
            } else {
                setExists(false);
            }
        }, [items]);

        // Code behind must be insert in the return and works whith the code on top commented.
        /*{
            exists ? <button className="cta-btn" onClick={() => removeFromCart(event.id)}>Remove tickets</button>
            : <button className="cta-btn" onClick={() => addToCart(event.id, event.title, event.price)}>Get my tickets</button>
        }*/

    return (
        <div className="flex flex-wrap justify-center ">
            { isLoading ? <p>Loading...wait please</p> : events.map((event) => {
                const dateEventpg = event.datetime;
                const dateEventjs = new Date(dateEventpg);
                return (
                    <div key={event.id} className={'sport-card'}>
                        <div key={event.picto} className="sport-pict">
                        <Image 
                        src="/img/all-disciplines-paris2024.png"
                        width={96}
                        height={50}
                        className={event.picto}
                        alt=""
                        />
                        </div>
                        <h4 key={event.title} className={`${OlympicHeadlineReg.className}`}>{event.title}</h4>
                        <p key={event.description} className="">{event.description}</p>
                        <span key={event.datetime} className="">{dateEventjs.toLocaleDateString()+' - '+dateEventjs.toLocaleTimeString()}</span>
                        <span key={event.location} className="">{event.location}</span>
                        <ListOffers /> 
                        {exists 
                            ? <button className="cta-btn" onClick={() => removeFromCart(event.id)}>Remove tickets</button>
                            : <button className="cta-btn" onClick={() => addToCart(event.id, event.title, event.price)}>Get my tickets</button>
                        }
                    </div>
                )
            })};
        </div>
    );
}