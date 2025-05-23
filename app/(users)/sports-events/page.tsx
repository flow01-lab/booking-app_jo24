import  SportCards  from "./components/sport-card";
import { OlympicHeadlineCsd } from "@/app/ui/fonts";
import Link from "next/link";
//import { EventsTypes } from "../lib/types/database-generated.types";
//import SportCard from "../ui/sports-events/sportcard";
/*
interface PageEventsProps{
    eventsData: EventsTypes[];
}*/
/* {eventsData}: PageEventsProps */

export default function PageEvents() {
    return (
        <div id="sports-events" className="text-center grid grid-cols-8 gap-4">
            <h2 className={`${OlympicHeadlineCsd.className} col-start-1 col-end-9`}>SPORTS EVENTS</h2>
            <div className="w-full col-end-8">
                <Link href="/offers" className="">
                <button className="cta-btn">
                    About e-tickets offers
                </button>
                </Link>
            </div>
            <div className="col-start-2 col-end-8">
                {/*eventsData.map((item) => (
                    <SportCard key={item.id} item={item} />
                ))*/}
            <SportCards />
            </div>
        </div>
    )
}