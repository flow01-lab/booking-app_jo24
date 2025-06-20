import Image from "next/image";
import Link from "next/link";
import { TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useCartContext } from "@/app/lib/context/cartContext";
import { OlympicHeadlineReg, OlympicSansMed, OlympicSansReg } from "../fonts";


interface Props {
    cartModalOpen: boolean;
    handleCartModal: ()=> void;
}

const CartModal:React.FC<Props> = ({cartModalOpen, handleCartModal}) => {
    // This component is used to display the cart modal.
    // It uses the useCartContext to access the tickets and functions to modify the cart.
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
        {cartModalOpen && (
            <div className="w-[300px] h-[100vh] overflow-y-auto fixed top-[50px] right-0 bg-white border-l border-t border-gray-500 pb-16 mt-[20px] z-[150]">
                <button onClick={handleCartModal} className="text-gray-700 absolute top-6 right-6 w-[26px] h-[26px] hover:text-[#ee334e]">
                    <XCircleIcon/>
                </button>
                <div className="p-8">
                    <h4 className={`${OlympicSansMed.className} text-center`}>PANIER</h4>

                    {tickets.length === 0 ? (
                        <p className={`${OlympicSansReg.className} text-gray-700`}>Votre panier est vide</p>
                    ) : (
                        tickets.map((event) => (
                            <div key={event.id} className="border-b py-2 gap-2">
                                <div className="sport-pict">
                                    <Image 
                                        src="/img/all-disciplines-paris2024.png"
                                        width={96}
                                        height={50}
                                        className={event.picto}
                                        alt={event.title}
                                    />
                                </div>
                                <h3 className="text-lg">{event.title}</h3>
                                <p className="pb-2"><span>Quantité : </span><span className="font-bold">{event.quantityTickets}</span></p>
                                <p className="pb-2"><span>Prix : </span><span className="font-bold">{event.price} € / Unit</span></p>
                                <div className="flex flex-row items-center">
                                    <button className="bg-black text-white px-2 rounded-sm mx-2 font-bold cursor-pointer hover:bg-[#fcb131]" onClick={() => handleDecrement(event.id)}> - </button>
                                    <button className="bg-black text-white px-2 rounded-sm mx-2 font-bold cursor-pointer hover:bg-[#00a751]" onClick={() => handleIncrement(event.id)}> + </button>
                                    <button className="w-[24px] mx-2 cursor-pointer hover:text-[#ee334e]" onClick={() => handleRemove(event.id)}><TrashIcon /></button>
                                </div>
                                   
                            </div>
                        ))
                    )}
                    <p className="py-5 text-lg"><span className={`${OlympicSansMed.className} font-bold`}>TOTAL : </span><span><strong>{totalPrice} €</strong></span></p>
                        
                </div>
                <div className="pl-8 bottom-25">
                    <Link href="/cart">
                        <button className="cta-btn rounded-md">Voir le détail</button>
                    </Link>
                    <Link href="">
                        <button className="cta-btn rounded-md">Payer</button>
                    </Link>
                </div>
            </div>
        )}
        </>
    )
}

export default CartModal;

// Buttons to add for interactivity next :
/*<button onClick={decrementQuantity}> - </button>
<button onClick={incrementQuantity}> + </button>
*/