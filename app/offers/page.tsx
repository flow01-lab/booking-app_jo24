import { fetchOffers } from "../lib/data"


export default async function OffersCards() {
   const offersTickets = await fetchOffers();
    
    return (
        <div className="">
            {offersTickets.map((offer) => {
                return (
                    <div key={offer.id} className="offer-card">
                        <h2 key={offer.title}>{offer.title}</h2>
                    </div>
                )
                })};
            
        </div>
    )
}