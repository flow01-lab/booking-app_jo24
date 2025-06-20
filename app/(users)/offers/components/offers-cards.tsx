'use client'

import { supabase } from "@/app/lib/db-supabase";
import { useEffect, useState } from "react";
import { OffersTypes } from "@/app/lib/types/database-generated.types";
import { Paris2024_Normal, Paris2024_X_Weight, Paris2024_Weight } from "@/app/ui/fonts";


export default function OffersCards() {
    const [isLoading, setIsLoading] = useState(true);
    const [offers, setOffers] = useState<OffersTypes[]>([]);

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

    return (
        <div className="flex flex-wrap justify-center mb-15">
            { isLoading ? <p>Loading...wait please</p> : offers.map((offer) => {
                return (
                    <div key={offer.id} className="offer-card flex-col">
                        <h4 key={offer.title} className={`${Paris2024_X_Weight.className} flex flex-row`}>{offer.title}</h4>
                        <span key={offer.ticketsqty}><strong>e-tickets inclus :</strong> {offer.ticketsqty}</span>
                        <p key={offer.description} className="p-5 text-center">{offer.description}</p>
                        <button className="cta-btn">Découvrir</button>
                    </div>
                )
                })}
        </div>
    )
}