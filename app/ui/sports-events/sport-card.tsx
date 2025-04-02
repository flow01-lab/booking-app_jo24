import Image from "next/image";
import { fetchSportsEvents } from "@/app/lib/data";
import ListOffers from "../list-offers";


export default async function SportCard() {
    const eventSport = await fetchSportsEvents(); // fetch data inside the component

    if(!eventSport || eventSport.length === 0){
        return <p> No data available ... or error fetching.</p>;
    }

    return (
        <div>
            {eventSport.map(picto => (
                <div key={picto.id} className="">
                    <Image 
                    src={picto.picto}
                    width={50}
                    height={50}
                    className=""
                    alt=""
                    />
                </div>
            ))}
            {eventSport.map((title)=> (
                <h4 key={title.title} className="">{title.title}</h4>
            ))}
            {eventSport.map((description) => (
                <p key={description.description} className="">{description.description}</p>
            ))}
            {eventSport.map((date) => (
                <span key={date.date} className="">{date.date}</span>
            ))}
            {eventSport.map((location) => (
                <span key={location.location} className="">{location.location}</span>
            ))}

            <ListOffers />
            <button className="cta-btn">Take my tickets</button>
        </div>
    );
}