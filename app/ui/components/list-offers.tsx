'use client'

import { supabase } from "@/app/lib/db-supabase";
import React, { useEffect, useState } from "react";
import { Tables } from "@/app/lib/types/supabase_database.types";
//import { OffersTypes } from "@/app/lib/types/database-generated.types";



export default function ListOffers({
    onSelect,
}: {
    onSelect: (value: number) => void;
 }) {
    // This component is used to list the offers for sports events.
    const [isLoading, setIsLoading] = useState(true);
    const [offers, setOffers] = useState<Tables<'offers'>[]>([]);
    const [valueSelected, setValueSelected] = useState<number | null>(null);
    
    useEffect(() => {
        const fetchOffers = async () => {
            const { data } = await supabase.from('offers').select();
        
            if (data && data.length > 0) {
                setOffers(data);
                setValueSelected(data[0].ticketsqty); // Set default selected value
                onSelect(data[0].ticketsqty); // Call onSelect with the first offer 
            } else {
                console.log('No offers found');
            }
            setIsLoading(false);
        };
        fetchOffers();
    }, [onSelect]);

    // Handle click event to set selected value and call onSelect
    const handleClick = (value: number) => {
        setValueSelected(value);
        onSelect(value);
    };

    return (
        <div className="">
            { isLoading ? 'Loading data...' : offers.map(offer => (
                <button value={offer.ticketsqty} key={offer.id} 
                className={`px-2 py-1 mx-1 my-2 rounded-xl border-2 border-black
            ${valueSelected === offer.ticketsqty 
                ? 'bg-white text-black border-2 border-black hover:mx-1'
                : 'bg-black text-white'
            } cursor-pointer hover:bg-white hover:border-2 hover:border-black hover:text-black hover:mx-1 hover:my-2`}
                onClick={() => handleClick(offer.ticketsqty)}>{offer.title}</button>
            ))}
        </div>
    )
};