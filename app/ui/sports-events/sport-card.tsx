import Image from "next/image";

export default function SportCard() {
    return (
        <div>
            <Image 
            src=""
            width={50}
            height={50}
            className=""
            alt=""
            />
            <h4>{/* Sport Name */}</h4>
            <p>{/* Description */}</p>
            <select name="ticket-offers" id="ticket-offers-list">
                <option value="">Choose your ticket offer</option>
                <option value="solo">Solo [1 ticket]</option>
                <option value="duo">Duo [2 tickets]</option>
                <option value="family">Family [4 tickets]</option>
            </select>
            <button>Take my tickets</button>
        </div>
    );
}