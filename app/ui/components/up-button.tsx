'use client'

import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";


export default function UpButton(){
    const [isVisible, setIsVisible] = useState(false);
 
    const toggleVisibility = () => {
        if(window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
            
    useEffect(()=> {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scoll', toggleVisibility);
        }
    }, [])

    return(
        <>
        {isVisible && (
            <button className="w-15 h-15 rounded-full bg-[#171717] hover:bg-[#d7c378] p-4 fixed bottom-2 right-5 z-[110] justify-center align-center cursor-pointer" onClick={scrollToTop}>
                <ChevronDoubleUpIcon color="white" height={25}/>
            </button>
        )}
        </>
    )
}