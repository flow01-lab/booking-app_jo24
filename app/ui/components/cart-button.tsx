import Image from "next/image";
//import { useEventsContext } from "@/app/lib/context/cartContext";

interface Props {
    handleCartModal: ()=> void;
}

const CartButton:React.FC<Props> = ({handleCartModal}) => {
    /*
    const {tickets} = useEventsContext();
    const totalTicketsCount = tickets.reduce((totalCount, event)=> totalCount + event.quantityTickets, 0)
    {totalTicketsCount}
    */
    return (
        <div className="relative z-[100]">
            <button className="bg-blue-50 rounded-full relative btn-user" type="button" onClick={handleCartModal}>
                <Image 
                src="/img/ticket.svg"
                width={55}
                height={55}
                className="px-4 py-2 relative hover"
                alt="Cart | Panier"
                />
                <div className="absolute menu-cart-notif">
                    <span className="cart-notif">
                        0
                    </span>
                </div>
            </button>
        </div>
    )
}

export default CartButton;