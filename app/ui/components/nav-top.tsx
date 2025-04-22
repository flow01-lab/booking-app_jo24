import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search";
import { OlympicSansReg } from "../fonts";

export default function NavTop() {
    return (
        <div className="flex flex-row sticky top-0 max-h-full mt-20 gap-20">
            <div className="flex flex-row sticky top-0">
                <div className="flex flex-row items-center sticky top-0">
                    <Link href="/">
                        <Image 
                        src="/img/logo_olympics_color.svg"
                        width={87}
                        height={40}
                        className="ml-15 justify-start"
                        alt="Official Olympics Logo in Colors"
                        />
                    </Link>
                </div>
                <div className={`${OlympicSansReg.className} ml-6`}>
                    <nav className="flex flex-row justify-center items-center">
                        <ul className="flex items-center text-xl">
                            <li className="p-2 m-4">Olympics Games</li>
                            <li className="p-2 m-4">Athletes</li>
                            <li className="p-2 m-4">Sports</li>
                            <li className="p-2 m-4">News</li>
                            <li className="p-2 m-4">Olympics Channel</li>
                            <li className="p-2 m-4">Let&apos;s Move</li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <SearchBar />
            {/* <HambMenu />*/}
        </div>
    );
}