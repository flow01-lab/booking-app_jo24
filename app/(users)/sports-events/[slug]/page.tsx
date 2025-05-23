//import { SportsEventsData } from "@/app/lib/data-supa";
import EventsData from "@/app/lib/api/events-data";
//import { getEventPost } from "@/app/lib/api/events-data";


export async function generateStaticParams(){
    const eventsPosts = await EventsData();
      
    return eventsPosts.map((eventpost) => ({
        slug: eventpost.title,
    }));
}

export default async function SampleEventPage({
    params,
} : {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    /*const eventsPosts = await EventsData();
    const data = getEventPost(eventsPosts);*/
        
    return (
        <>
        <h2>{slug}</h2> 
        <div>
            <h3>{}</h3>
            <p><span>Location : </span>{}</p>
            <p><span>Adress : </span>{}</p>
            <p><span>City : </span></p>
            <p><span></span></p>
        </div>
        </>
    )
}