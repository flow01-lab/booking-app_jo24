"use client"

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search";
import { OlympicSansReg } from "../fonts";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function NavTop() {
    const [searchBarOpen, setSearchBarOpen] = useState(false);

    const handleSearchBar = () =>{
        setSearchBarOpen(!searchBarOpen);
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const handleScrollTop = () => {
            if(window.pageYOffset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScrollTop);
        return () => {
            window.removeEventListener('scroll', handleScrollTop);
        }
    }, [])

    return (
        <div className="flex flex-row flex-wrap flex-[50%] sticky z-[110] top-0 mt-20">
            <div className="flex flex-row">
                <div className="flex flex-row items-center">
                    <Link href="/">
                        <Image 
                        src="/img/logo_olympics_color.svg"
                        width={87}
                        height={40}
                        className="ml-15 justify-start my-[12px]"
                        alt="Official Olympics Logo in Colors"
                        />
                    </Link>
                </div>
                <div className={`${OlympicSansReg.className} ml-6`}>
                    <nav className={`flex flex-row justify-center items-center flex-wrap ${scrolled ? 'navtop-scroll' : ''}`}>
                        <ul className="flex items-center text-xl">
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>Olympics Games</Link></li>
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>Athletes</Link></li>
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>Sports</Link></li>
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>News</Link></li>
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>Olympics Channel</Link></li>
                            <li className="p-2 m-3 navtop-link"><Link href={`#`}>Let&apos;s Move</Link></li>
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