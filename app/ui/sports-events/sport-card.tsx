import Image from "next/image";
import { fetchSportsEvents } from "@/app/lib/data";
//import ListOffers from "../list-offers";
import { OlympicHeadlineReg } from "../fonts";


export default async function SportCards() {
    const eventSport = await fetchSportsEvents(); // fetch data inside the component

    if(!eventSport || eventSport.length === 0){
        return <p>No data available ... or error fetching.</p>;
    }

    return (
        <div className="flex flex-wrap justify-center ">
            {eventSport.map((event) => {
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
                        {/*<ListOffers />*/}
                        <button className="cta-btn">Take my tickets</button>
                    </div>
                )
            })};
            
        </div>
    );
}