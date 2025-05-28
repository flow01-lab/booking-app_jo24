import { EventsData } from "@/app/lib/api/events-data";
import { supabase } from '@/app/lib/db-supabase';
import Image from "next/image";
import { OlympicHeadlineCsd, OlympicHeadlineReg } from "@/app/ui/fonts";
import ButtonGetTickets from "../components/btn-getmyticket";
import PreviewPage from "@/app/ui/components/btn-preview";

export async function generateStaticParams(){
    const eventsPosts = await EventsData();
    if(!eventsPosts){
        console.error('Error: not data fetch');
        return [];
    }
    return eventsPosts.map((eventpost: any) => ({
        eventId: eventpost.id,
    }));
}

async function getInfos(id: string) {
    const { data, error } = await supabase.from('events').select('*').eq('id',id);
    if(error){
        console.error('Failed to fecth event by title:', error.message);
    }
    return data?.[0];
}

export default async function SampleEventPage({ 
    params,
 } : { 
    params: Promise<{ eventId: string }>;
}) {
    const { eventId } = await params;
    const infos = await getInfos(eventId);
    const dateEventpg = await infos.datetime;
    const dateEventjs = new Date(dateEventpg);

    return (
        <>
        <div className="flex flex-col items-center bg-[url(/img/Paris_2024_Olympics_Wallpaper.jpeg)] bg-cover">
            {infos ? (
                <div className="flex flex-col items-center w-[500px] bg-white px-25 pb-5" >
                    <div className="w-[500px] bg-white items-left">
                        <PreviewPage />
                        <h2 className={`${OlympicHeadlineReg.className} text-center px-25`}>{infos.title}</h2>
                    </div>
                    <div className="sport-pict">
                        <Image 
                        src="/img/all-disciplines-paris2024.png"
                        width={96}
                        height={50}
                        className={infos.picto}
                        alt={`Pictogramm `+ infos.title}
                        />
                    </div>
                    <h3 className="font-bold">Informations</h3>
                    <div className="flex flex-col items-left p-3">
                        <p><span className="font-bold">Location : </span>{infos.location}</p>
                        <p><span className="font-bold">Adress : </span>{infos.adressnum}, {infos.adressroad}</p>
                        <p><span className="font-bold">City : </span>{infos.city}</p>
                        <p><span className="font-bold">Postal Code : </span>{infos.zipcode}</p>
                        <p><span className="font-bold">Date : </span>{dateEventjs.toLocaleDateString()}</p>
                        <p><span className="font-bold">Hour : </span>{dateEventjs.toLocaleTimeString()}</p>
                        <p><span className="font-bold">Price : </span>{infos.price} €</p>
                    </div>
                    <h3 className="font-bold">Description</h3>
                    <p className="text-center p-3">{infos.description}</p>
                    <ButtonGetTickets />
                </div>
            ) : (
                <p>Aucune donnée trouvée pour cet événement.</p>
            )}
        </div>
        </>
    )
}