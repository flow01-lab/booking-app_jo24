//import Image from "next/image";
import Link from "next/link";
import { /*TrashIcon,*/ XCircleIcon } from "@heroicons/react/24/outline";
//import { useEventsContext } from "@/app/lib/context/cartContext";


interface Props {
    cartModalOpen: boolean;
    handleCartModal: ()=> void;
}

const CartModal:React.FC<Props> = ({cartModalOpen, handleCartModal}) => {

    /*const { tickets, decrementQuantity, removeFromCart, incrementQuantity } = useEventsContext();

    const totalPrice = tickets.reduce((total, event) => total + (event.price * event.quantityTickets), 0);*/

    return(
        <>
        {cartModalOpen && (
            <div className="w-[300] h-[100vh] overflow-y-auto fixed top-[50px] right-0 bg-white border-l border-t border-gray-500 pb-16 mt-[20px]">
                <button onClick={handleCartModal} className="text-gray-700 absolute top-4 left-6">
                    <XCircleIcon/>
                </button>
                <div className="p-8">
                    <h4 className="text-center">PANIER</h4>

                    {/*tickets.length === 0 ? (
                        <p className="text-gray-700">Votre panier est vide</p>
                    ) : (
                        tickets.map((event) => (
                            <div key={event.id} className="border-b py-2">
                                <Image 
                                    src={event.picto}
                                    alt={event.title}
                                    width={50}
                                    height={50}
                                />
                                <h3 className="text-lg">{event.title}</h3>
                                <p><span>Quantité:</span><span className="bold">{event.quantityTickets}</span></p>
                                <p><span>Prix:</span><span className="bold">{event.price}€/UT</span></p>
                                <button onClick={decrementQuantity}> - </button>
                                <button onClick={incrementQuantity}> + </button>
                                <button onClick={removeFromCart}>
                                    <TrashIcon/>
                                </button>
                            </div>
                        ))
                    )}
                    <p><span>TOTAL : </span><span><strong>{totalPrice}€</strong></span></p>
                        */}
                </div>
                <div className="pl-8 absolute bottom-25">
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