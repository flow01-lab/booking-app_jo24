import { fetchOffers } from "../lib/data";

export default async function ListOffers(){
    const offers = await fetchOffers();

    return (
        <div className="border-1 solid border-gray-200 p-3">
            <select name="ticket-offers" id="ticket-offers-list">
                <option value="">Choose your ticket offer</option>
                {offers.map((title) => (
                    <option value={title.title} key={title.title}>{title.title}</option>
                ))}
            </select>
        </div>
    )
};