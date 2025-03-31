import UserBanner from "./ui/user-banner";
import NavTop from "./ui/nav-top";
import NavBanner from "./ui/nav-banner";
import WallBanner from "./ui/wall-banner";

export default function Home() {
    return (
        <div>
            <header className="sticky top-0">
                <UserBanner />
                <NavTop />
            </header>
            <main className="">
                <NavBanner />
                <WallBanner />
            </main>
            <footer>

            </footer>
        </div>
    )
};