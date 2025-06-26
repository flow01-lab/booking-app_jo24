"use client"

import NavBanner from "@/app/ui/components/nav-banner";
import PageEvents from "@/app/(users)/sports-events/page";
import WallBanner from "./ui/components/wall-banner";
import UpButton from "./ui/components/up-button";


export default function Home() {
    
    return (
        <>
            <header className="z-0">
                <NavBanner />
            </header>
            <main className="">
                <WallBanner />
                <PageEvents />
                <UpButton />
            </main>
            <footer>
            
            </footer>
        </>
    )
};