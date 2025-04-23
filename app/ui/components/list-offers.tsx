//import { fetchOffers } from "../../lib/data";

export default async function ListOffers(){
    //const offersCall = await fetchOffers();

    return (
        <div className="border-1 solid border-gray-200 p-3">
            <select name="ticket-offers" id="ticket-offers-list">
                <option value="">Choose your ticket offer</option>
                {/*{offersCall.map((offer) => (
                    <option value={offer.ticketsqty} key={offer.title}>{offer.title} </option>
                ))}*/}
            </select>
        </div>
    )
};

// Bug to fix => Listing of Offers don't work in fetching from supabase intructions : refer to 
    // function fetchOffers() in '../../lib/data'.