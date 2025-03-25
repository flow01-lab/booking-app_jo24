import UserBanner from "./ui/user-banner";
import NavMain from "./ui/nav-main";
import NavBanner from "./ui/nav-banner";
import WallBanner from "./ui/wall-banner";

export default function Home() {
    return (
        <div>
            <main className="relative">
                <UserBanner />
                <NavMain />
                <NavBanner />
                <WallBanner />
            </main>
            <footer>

            </footer>
        </div>
    )
}