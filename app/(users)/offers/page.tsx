import OffersCards from "@/app/(users)/offers/components/offers-cards";
import WallBanner from "@/app/ui/components/wall-banner";
import { OlympicHeadlineCsd } from "@/app/ui/fonts";

export default function OffersPage() {

    return (
        <div className="">
            <WallBanner/>
            <div className="text-center bg-white">
                <h2 className={`${OlympicHeadlineCsd.className} col-start-1 col-end-9`}>OFFERS</h2>
                <OffersCards/>
            </div>
        </div>

    )
}