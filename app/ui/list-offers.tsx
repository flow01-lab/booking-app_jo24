import { fetchOffers } from "../lib/data";

export default async function ListOffers(){
    const offers = await fetchOffers();

    return (
        <div className="border-1 solid border-gray-200 p-3">
            <select name="ticket-offers" id="ticket-offers-list">
                <option value="">Choose your ticket offer</option>
                {offers.map((name) => (
                    <option value={name.name} key={name.name}>{name.name}</option>
                ))}
            </select>
        </div>
    )
};