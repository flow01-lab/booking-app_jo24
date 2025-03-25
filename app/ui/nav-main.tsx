import Image from "next/image";
import SearchBar from "./search";

export default function NavMain() {
    return (
        <div className="flex flex-row sticky top-0 border-b-1 border-gray-200 max-h-full mt-20 gap-30">
            <div className="flex flex-row sticky top-0">
                <div className="flex flex-row items-center sticky top-0">
                    
                    <Image 
                    src="/img/logo_olympics_color.svg"
                    width={87}
                    height={40}
                    className="ml-15 justify-start"
                    alt="Official Olympics Logo in Colors"
                    />

                </div>
                <nav className="flex flex-row justify-center items-center">
                    <ul className="flex items-center">
                        <li className="p-2 m-4">Olympics Games</li>
                        <li className="p-2 m-4">Athletes</li>
                        <li className="p-2 m-4">Sports</li>
                        <li className="p-2 m-4">News</li>
                        <li className="p-2 m-4">Olympics Channel</li>
                        <li className="p-2 m-4">Let&apos;s Move</li>
                    </ul>
                </nav>
            </div>
            
            <SearchBar />
            {/* <HambMenu />*/}
        </div>
    );
}