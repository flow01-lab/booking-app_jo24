import Link from "next/link"
import Image from "next/image";

export default function Footer(){
    return (
    <footer className="bottom-0 w-full static">
        <div className=" bg-black text-white py-8 text-center w-[100vw]">
            <Link href="#" className="p-3 m-4 hover:text-[#fcb131]">
            Contact
            </Link>
            <Link href="#" className="p-3 m-4 hover:text-[#fcb131]">
            CGV
            </Link>
            <Link href="#" className="p-3 m-4 hover:text-[#fcb131]">
            Politiques de confidentialité
            </Link>
            <Link href="#" className="p-3 m-4 hover:text-[#fcb131]">
            Mentions légales
            </Link>
        </div>
        <div className="flex flex-row items-center justify-center border-y border-solid border-white bg-black text-black py-4 xs:flex-col xs:items-center">
            <Image 
                src={"/img/app-store-en.svg"}
                width={135}
                height={40}
                className="ml-auto mr-5 my-5 cursor-pointer"
                alt="Download the Olympics App on App Store"
                loading="lazy"
            />
            <Image 
                src={"/img/google-play-en.svg"}
                width={135}
                height={40}
                className="ml-5 mr-auto my-5 cursor-pointer"
                alt="Download the Olympics App on Google Play"
                loading="lazy"
            />
        </div>
        <div className="bg-black text-white py-5 text-center w-[100vw]">
            <Image 
                src="/img/logo_olympics_white.svg"
                width={87}
                height={40}
                className="mx-auto my-10 text-center"
                alt="Official Olympics Logo in Colors"
                loading="lazy"
            />
            <span>&copy;Olympics Federation - Paris 2024 Olympics Games - All rights reserved - 2024</span>
        </div>
    </footer>
    )
}