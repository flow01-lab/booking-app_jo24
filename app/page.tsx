import UserBanner from "./ui/components/user-banner";
import NavTop from "./ui/components/nav-top";
import NavBanner from "./ui/components/nav-banner";
import WallBanner from "./ui/components/wall-banner";

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