
import Image from "next/image";
//import ListOffers from "../components/list-offers";
import { OlympicHeadlineReg } from "@/app/ui/fonts";
import { useEventsContext } from "@/app/lib/context/cartContext";
import { EventsTypes } from "@/app/lib/types/database-generated.types";


interface SCardProps {
    item: EventsTypes; 
}

export default function SportCard({item}: SCardProps) {
    
    const {addToCart} = useEventsContext();
    const handleAddToCart = () => {
        addToCart(item)
    }

    const dateEventpg = item.datetime;
    const dateEventjs = new Date(dateEventpg);

    return (
        <div className="flex flex-wrap justify-center ">
            <div key={item.id} className={'sport-card'}>
                <div className="sport-pict">
                    <Image 
                    src="/img/all-disciplines-paris2024.png"
                    width={96}
                    height={50}
                    className={item.picto}
                    alt=""
                    />
                </div>
                <h4 className={`${OlympicHeadlineReg.className}`}>{item.title}</h4>
                <p className="">{item.description}</p>
                <span className="">{dateEventjs.toLocaleDateString()+' - '+dateEventjs.toLocaleTimeString()}</span>
                <span className="">{item.location}</span>
                <p className=""><strong>Prix : </strong>{item.price}€ /unité</p>
                {/*<ListOffers item={item.quantityTickets}/>*/}
                <p>Valeur de l&apos;offre : </p>
                <button className="cta-btn" onClick={handleAddToCart}>Get my tickets</button>
            </div>
        </div>
    );
}