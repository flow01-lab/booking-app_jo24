import NavBanner from "./nav-banner";
import WallBanner from "./wall-banner";
import PageEvents from "@/app/sports-events/page";

export default function HomeMain() {

    return (
        <div>
            <NavBanner />
            <WallBanner />
            <PageEvents />
        </div>
    )
}