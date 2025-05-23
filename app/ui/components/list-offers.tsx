'use client'

import { supabase } from "@/app/lib/db-supabase";
import React, { useEffect, useState } from "react";
import { Tables } from "@/app/lib/types/supabase_database.types";
//import { EventsTypes } from "@/app/lib/types/database-generated.types";



export default function ListOffers() { //handleValueSelected
    const [isLoading, setIsLoading] = useState(true);
    const [offers, setOffers] = useState<Tables<'offers'>[]>([]);

    useEffect(() => {
        const fetchOffers = async () => {
            const { data } = await supabase.from('offers').select();
        
            if(data === null){
                return console.log('Sorry, no data found for * offers * ...');
            } else {
                setOffers(data);
                setIsLoading(false);
            }
        };
        fetchOffers();
    }, []);

    const [valueSelected, setValueSelected] = useState(0);

    const handleChange = (e) => {
       setValueSelected(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }


    return (
        <div className="border-1 solid border-gray-200 p-3">
            <form method="" onSubmit={handleSubmit}  action="">
            <select name="ticket-offers" id="ticket-offers-list" value={valueSelected} onChange={handleChange} required>
                <option value={0}>Choose ticket offer</option>
                { isLoading ? 'Loading data...' : offers.map(offer => (
                    <option value={offer.ticketsqty} key={offer.id}>{offer.title}</option>
                ))}
            </select>
            <button type="submit" className="rounded-md bg-black text-white cursor-pointer">Valider</button>
            </form>
        </div>
    )
};