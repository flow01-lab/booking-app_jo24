import UserBanner from "./ui/components/user-banner";
import NavTop from "./ui/components/nav-top";
import HomeMain from "./ui/components/homeMain";


export default function Home() {
    return (
        <div>
            <header className="sticky top-0">
                <UserBanner />
                <NavTop />
            </header>
            <main className="">
                <HomeMain />
            </main>
            <footer>

            </footer>
        </div>
    )
};