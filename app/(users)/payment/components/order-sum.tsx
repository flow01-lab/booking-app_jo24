'use client'

import { useCartContext } from "@/app/lib/context/cartContext";
import { OlympicHeadlineCsd, Paris2024_Weight } from "@/app/ui/fonts";

export default function OrderSum(){ 
    const { tickets } = useCartContext();
    const totalPrice = tickets.reduce((total, ticket) => total + (ticket.price * ticket.quantityTickets), 0);

    return (
        <>
            <h3 className={` ${Paris2024_Weight.className} text-lg`}>Récapitulatif de votre commande</h3>
            {/*<p className="text-sm">Vous êtes connecté en tant que : {data.user.email}</p>*/}
            <p className="mb-4">Merci de bien vouloir renseigner vos informations de paiement afin de finaliser votre commande.</p>
            <div className='w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-10'>
                <h4 className="text-xl font-semibold mb-4 text-center">Order Summary</h4>
                <p className="text-md mb-2">Total Amount: <strong>€ {totalPrice}</strong></p>
                <p className="text-md mb-2">Payment Method: <strong>Credit Card</strong></p>
            </div>
        </>
    )
}