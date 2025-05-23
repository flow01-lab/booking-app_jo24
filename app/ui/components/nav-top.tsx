"use client"

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search";
import { OlympicSansReg } from "../fonts";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function NavTop() {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const handleSearchBar = () =>{
        setSearchBarOpen(!searchBarOpen);
    } 
    return (
        <div className="flex flex-row sticky z-[110] top-0 max-h-full mt-20 gap-[-1] flex-wrap">
            <div className="flex flex-row">
                <div className="flex flex-row items-center">
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
                    <nav className="flex flex-row justify-center items-center flex-wrap">
                        <ul className="flex items-center text-xl">
                            <li className="p-2 m-3">Olympics Games</li>
                            <li className="p-2 m-3">Athletes</li>
                            <li className="p-2 m-3">Sports</li>
                            <li className="p-2 m-3">News</li>
                            <li className="p-2 m-3">Olympics Channel</li>
                            <li className="p-2 m-3">Let&apos;s Move</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <button onClick={handleSearchBar} className="w-[24px] h-auto bg-blue cursor-pointer hover:w-[28px]">
            <MagnifyingGlassIcon/>
            </button>
            <SearchBar searchBarOpen={searchBarOpen} handleSearchBar={handleSearchBar}/>
            {/* <HambMenu />*/}
        </div>
    );
}