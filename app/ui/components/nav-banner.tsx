import Image from "next/image";
import Link from "next/link";
import { OlympicSansMed, OlympicSansReg } from "./../fonts";

export default function NavBanner() {
    return (
        <div className={`${OlympicSansMed.className} flex flex-row border-gray-200 border-solid border-b-1 border-t-1`}> {/* === Home Page Banner === */}
            <nav className="flex-1 ml-20 border-gray-200 border-r-1">{/* == Home Page Menu == */}
                <h3 className={`${OlympicSansReg.className} mt-8 p-4`}>Olympics Games Paris 2024</h3>
                <ul className="text-base/8 menu-banner">
                    <li>Overview</li>
                    <li>Highlights & Replays</li>
                    <li>Results</li>
                    <li>Athletes</li>
                    <li>Stories</li>
                    <li>Brand</li>
                    <li>Medal Design</li>
                    <li>Mascot</li>
                    <li>Torch</li>
                    <li><Link href="/sports-events">Sport Events</Link></li>
                    
                </ul>
            </nav>
            <div className="flex-1 p-8 items-center justify-center">{/* == Home Page Logo == */}
                <Image
                src="/img/Paris2024-Official-Logo.png"
                width={300}
                height={300}
                className="flex m-10"
                alt="Logo Officiel Paris 2024"
                />
            </div>
            <div className="flex-1 border-solid border-l-1 border-gray-200 pr-15">{/* == Home Page Event Infos == */}
                <h3 className={`mt-8 p-4`}>Paris 2024</h3>
                <div className={`${OlympicSansMed.className} flex flex-col pl-8 text-base/10`}>
                    <span className="border-gray-200 border-solid border-b-1">Date</span>
                    <span className="border-gray-200 border-solid border-b-1">Country</span>
                    <span className="border-gray-200 border-solid border-b-1">Athletes</span>
                    <span className="border-gray-200 border-solid border-b-1">Teams</span>
                    <span className="border-gray-200 border-solid border-b-1">Events</span>
                    <div className="mt-6">
                        <button className="cta-btn">Buy e-Tickets</button>
                        <Link href="/sports-events"><button className="cta-btn">Show Events</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}