import Image from "next/image";

export default function CartButton(){

    return (
        <div className="relative z-1">
            <button className="bg-blue-50 rounded-full relative btn-user" type="button">
                <Image 
                src="/img/ticket.svg"
                width={55}
                height={55}
                className="px-4 py-2 relative"
                alt="Cart | Panier"
                />
                <div className="absolute menu-cart-notif">
                    <span className="cart-notif">1</span>
                </div>
            </button>
        </div>
    )
}