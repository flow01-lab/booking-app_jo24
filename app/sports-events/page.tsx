import SportCards from "../ui/sports-events/sport-card";
import { OlympicHeadlineCsd } from "../ui/fonts";
import { CartProvider } from "../context/cartContext";


export default function PageEvents({Component, pageProps}) {
    return (
        <div className="relative z-0 text-center">
         <CartProvider>
            <Component {...pageProps} />
            <h2 className={`${OlympicHeadlineCsd.className}`}>SPORTS EVENTS</h2>
            <div className="w-full">
                <button className="cta-btn absolute right-0">About e-tickets offers</button>
            </div>
            <div className="flex flew-wrap m-25">
                <SportCards />
            </div>
            </CartProvider>
        </div>
    )
}