import Image from "next/image";
import { useCartContext } from "@/app/lib/context/cartContext";

interface Props {
    handleCartModal: ()=> void;
}

const CartButton:React.FC<Props> = ({handleCartModal}) => {
    const { tickets } = useCartContext();
    const totalTicketsCount = tickets.reduce((totalCount, ticket) => totalCount + ticket.quantityTickets, 0);
    // Debugging logs for development
    // Uncomment the following lines to log the tickets and total count in the console
    //console.log('Tickets in cart:', tickets);
    // Log the total count of tickets
    //console.log('Total tickets count:', totalTicketsCount);
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
                        {totalTicketsCount}
                    </span>
                </div>
            </button>
        </div>
    )
}

export default CartButton;