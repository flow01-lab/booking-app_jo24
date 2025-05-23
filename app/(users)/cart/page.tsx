import { useEventsContext } from "@/app/lib/context/cartContext";

export default function CartPage(){
    const { events, decrementQuantity, removeFromCart, incrementQuantity } = useEventsContext();

    const totalPriceCart = events.reduce((total, event) => total + (event.price * event.quantityTickets), 0);
    
    return (
        <div className="">
            <div className="cartContainer">
                {events.map(item => {
                return (
                    <div className="cart" key={item.id}>
                    <div>
                        <div>
                        {item.title} - {item.price}$: - qty:
                        {item.quantityTickets}
                        </div>
                    </div>
                    <div>
                        <div>
                        <button onClick={() => removeFromCart(item.id)}>
                            remove
                        </button>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            <div>
                <div>Total : {totalPriceCart}</div>
                <button onClick={clearCart}>clear</button>
            </div>
        </div>
    )
}