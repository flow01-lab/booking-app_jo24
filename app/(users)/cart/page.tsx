'use client'

import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/app/lib/context/cartContext";
import { OlympicHeadlineReg, OlympicSansMed, OlympicSansReg, Paris2024_Normal } from "@/app/ui/fonts";

export default function CartPage(){
    const { tickets, decrementQuantity, removeFromCart, incrementQuantity } = useCartContext();
        
    const handleDecrement = (ticketId: string) => {
        decrementQuantity(ticketId);
        console.log('Decremented quantity for ticket:', ticketId);
    }
    const handleRemove = (ticketId: string) => {
        removeFromCart(ticketId);
        console.log('Removed ticket from cart:', ticketId);
    }
    const handleIncrement = (ticketId: string) => {
        incrementQuantity(ticketId);
        console.log('Incremented quantity for ticket:', ticketId);
    }

    const totalPrice = tickets.reduce((total, ticket) => total + (ticket.price * ticket.quantityTickets), 0);
    console.log('Tickets in cart:', tickets);
    // Log the total price of tickets
    console.log('Total price:', totalPrice);

    return(
        <>
            <div className="h-full text-center items-center justify-center py-15">
                <h2 className={`${OlympicHeadlineReg.className} text-center`}>PANIER</h2>

                {tickets.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <p className={`${OlympicSansReg.className} text-gray-700 p-[20px] m-[20px]`}>Votre panier est vide</p>
                        <Link href="/sports-events">
                            <button className="cta-btn rounded-md">Prendre mes places</button>
                        </Link>
                    </div> 
                ) : (
                    tickets.map((event) => {
                        const eventDate = event.datetime;
                        const formattedDate = new Date(eventDate);
                        return (
                            <div key={event.id} className="border-b py-10 gap-2">
                                <div className="sport-pict">
                                    <Image 
                                        src="/img/all-disciplines-paris2024.png"
                                        width={96}
                                        height={50}
                                        className={event.picto}
                                        alt={event.title}
                                    />
                                </div>
                                <h3 className={`${OlympicHeadlineReg.className}`}>{event.title}</h3>
                                <h4 className={`${Paris2024_Normal.className}`}>Description</h4>
                                <p className="pb-2">{event.description}</p>
                                <h4 className={`${Paris2024_Normal.className}`}>Informations</h4>
                                <p className="">{formattedDate.toLocaleDateString()+' - '+formattedDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit' })}</p>
                                <p className="">{event.location}</p>
                                <p className="">{event.adressnum}, {event.adressroad}</p>
                                <p className="">{event.city}</p>
                                <p className="">{event.zipcode}</p>
                                <h4 className={`${Paris2024_Normal.className}`}>Détails</h4>
                                <p className="pb-2"><span>Quantité : </span><span className="font-bold">{event.quantityTickets}</span></p>
                                <p className="pb-2"><span>Prix : </span><span className="font-bold">{event.price} € / Unit</span></p>
                                <div className="flex flex-row items-center align-center justify-center">
                                    <button className="bg-black text-white px-2 rounded-sm mx-2 font-bold cursor-pointer hover:bg-[#fcb131]" onClick={() => handleDecrement(event.id)}> - </button>
                                    <button className="bg-black text-white px-2 rounded-sm mx-2 font-bold cursor-pointer hover:bg-[#00a751]" onClick={() => handleIncrement(event.id)}> + </button>
                                    <button className="w-[24px] mx-2 cursor-pointer hover:text-[#ee334e]" onClick={() => handleRemove(event.id)}><TrashIcon /></button>
                                </div>
                            </div>
                    )}
                ))}
                {tickets.length > 0 && (
                    <>
                        <div>
                            <p className="py-5 text-xl"><span className={`${OlympicSansMed.className} font-bold`}>TOTAL : </span><span><strong>{totalPrice} €</strong></span></p>
                            <div className=" flex text-center justify-center items-center">
                                <Link href="">
                                    <button className="cta-btn rounded-md">Valider le panier</button>
                                </Link>
                                <Link href="/sports-events">
                                    <button className="cta-btn rounded-md">Ajouter des billets</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>    
        </>
    )
}