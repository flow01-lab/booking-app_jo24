import SportCard from "../ui/sports-events/sport-card";
import { OlympicHeadlineCsd } from "../ui/fonts";

export default function Page() {
    return (
        <div className="relative text-center">
            <h2 className={`${OlympicHeadlineCsd.className}`}>SPORTS EVENTS</h2>
            <div className="w-full">
                <button className="cta-btn absolute right-0">More about e-tickets offers</button>
            </div>
            <div className="flex flew-wrap">
                <SportCard />
            </div>
        </div>
    )
}