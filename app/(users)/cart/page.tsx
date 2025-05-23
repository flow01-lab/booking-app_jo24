//import { useEventsContext } from "@/app/lib/context/cartContext";
/*
export default function CartPage(){
    const { tickets, /*decrementQuantity, removeFromCart, /*incrementQuantity } = useEventsContext();

    const totalPriceCart = tickets.reduce((total: any, event: any) => total + (event.price * event.quantityTickets), 0);
    
    return (
        <div className="">
            <div className="cartContainer">
                {tickets.map((item: any) => {
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
                            Remove
                        </button>
                        </div>
                    </div>
                    </div>
                );
                })}
            </div>
            <div>
                <div>Total : {totalPriceCart}</div>
                <button >Clear All</button>
            </div>
        </div>
    )
}

// OnClick={ClearCart]*/

export default function Hello(){
    return (
        <>
            <p>Hello World !</p>
        </>
    )
} 