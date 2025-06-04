import Link from "next/link"

export default function Footer(){
    return (
    <footer className="">
        <div className=" bg-black text-white py-8 text-center">
            <Link href="#" className="p-3 m-4">
            CGV
            </Link>
            <Link href="#" className="p-3 m-4">
            Politiques de confidentialité
            </Link>
            <Link href="#" className="p-3 m-4">
            Mentions légales
            </Link>
        </div>
        <div className="bg-black border-y border-solid border-white text-white py-5 text-center">
            <span>&copy;Olympics Federation - Paris 2024 Olympics Games - All rights reserved - 2024</span>
        </div>
    </footer>
    )
}