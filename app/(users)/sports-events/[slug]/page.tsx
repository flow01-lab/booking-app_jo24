//import { SportsEventsData } from "@/app/lib/data-supa";
import EventsData from "@/app/lib/api/events-data";
//import { getEventPost } from "@/app/lib/api/events-data";


export async function generateStaticParams(){
    const eventsPosts = await EventsData();
    if(eventsPosts){
        return eventsPosts.map((eventpost) => ({
            slug: eventpost.title,
        }));
    }
    return console.log('Error : no data fetch');
}

export default async function SampleEventPage({
    params,
} : {
    params: Promise<{ slug: any }[] | void>
}) {
    if(!params){
        return console.log('Error : Paramètres manquants');
    }
    const resolvedParams = await params;
    const  slug  = Array.isArray(resolvedParams) ? resolvedParams[0]?.slug : resolvedParams?.slug;
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

 /*const eventsPosts = await EventsData();
    const data = getEventPost(eventsPosts);*/