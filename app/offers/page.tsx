import { fetchOffers } from "../lib/data"

export default async function OffersCards() {
   const offersTickets = await fetchOffers();
   if(offersTickets === null){
        return console.log('Sorry, no data found for * offers * ...');
   }
    
    return (
        <div className="">
            {offersTickets.map((offer) => {
                return (
                    <div key={offer.id} className="offer-card flex-col">
                        <h2 key={offer.title} className="flex flex-row">{offer.title}</h2>
                        <span key={offer.ticketsQty}>e-Ticket included : {offer.ticketsQty}</span>
                        <p key={offer.description}>{offer.description}</p>
                    </div>
                )
                })};
            
        </div>
    )
}