import Image from "next/image";
import { fetchSportsEvents } from "@/app/lib/data";
import ListOffers from "../list-offers";
import { OlympicHeadlineReg } from "../fonts";


export default async function SportCard() {
    const eventSport = await fetchSportsEvents(); // fetch data inside the component

    if(!eventSport || eventSport.length === 0){
        return <p> No data available ... or error fetching.</p>;
    }

    return (
        <div className="sport-card">
            {eventSport.map(picto => (
                <div key={picto.id} className="sport-pict">
                    <Image 
                    src="/img/all-disciplines-paris2024.png"
                    width={96}
                    height={50}
                    className={picto.picto}
                    alt=""
                    />
                </div>
            ))}
            {eventSport.map((title)=> (
                <h4 key={title.title} className={`${OlympicHeadlineReg.className}`}>{title.title}</h4>
            ))}
            {eventSport.map((description) => (
                <p key={description.description} className="">{description.description}</p>
            ))}
        {/*    {eventSport.map((datetime) => (
                <span key={datetime.datetime} className="">{datetime.datetime}</span>
            ))} */}
            {eventSport.map((location) => (
                <span key={location.location} className="">{location.location}</span>
            ))}

            <ListOffers />
            <button className="cta-btn">Take my tickets</button>
        </div>
    );
}