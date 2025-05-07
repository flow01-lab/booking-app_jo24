'use client'

import { supabase } from "@/app/lib/db-supabase";
//import { fetchOffers } from "../../lib/data";
import { useEffect, useState } from "react";
//import { Offer } from "@/app/lib/definition";


export default function ListOffers() {
    const [isLoading, setIsLoading] = useState(true);
    const [offers, setOffers] = useState<any>([]);

    useEffect(() => {
        const fetchOffers = async () => {
            const { data } = await supabase.from('offers').select();
            setOffers(data);
            setIsLoading(false);

            /*if(data === null){
                return console.log('Sorry, no data found for * offers * ...');
            } else {
                setOffers(data);
            }*/
        };
        fetchOffers();
    }, []);
    
    return (
        <div className="border-1 solid border-gray-200 p-3">
            <select name="ticket-offers" id="ticket-offers-list">
                <option value="">Choose ticket offer</option>
                { isLoading ? <p>Loading data...</p> : offers.map(offer => (
                    <option value={offer.ticketsQty} key={offer.id}>{offer.title}</option>
                ))}
            </select>
        </div>
    )
};
