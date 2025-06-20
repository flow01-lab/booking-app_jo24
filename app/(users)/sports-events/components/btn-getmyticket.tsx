"use client"

import React from "react";
import { useCartContext } from "@/app/lib/context/cartContext";
import { useState } from "react";
import { EventsTypes } from "@/app/lib/types/database-generated.types";



export default function ButtonGetTickets({ item, quantity }: { item: EventsTypes, quantity: number }) {
    // This component is used to add an event to the cart.
    // It uses the useTicketsContext to access the addToCart function.
    const [added, setAdded] = useState(false);
    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        addToCart(item, quantity);
        setAdded(true);
        console.log('Ticket added to cart:', item);
    }
    return (
        <>
            <button className="cta-btn" onClick={handleAddToCart}>
                { added ? '⎷ Already in Cart' : 'Get my tickets' }
            </button>
        </>
    )
}

