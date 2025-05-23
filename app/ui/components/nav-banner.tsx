import Image from "next/image";
import Link from "next/link";
import { OlympicSansMed, OlympicSansReg, Paris2024_Normal, Paris2024_Weight, OlympicHeadlineReg } from "@/app/ui/fonts";

export default function NavBanner() {
    return (
        <div className={`${OlympicSansMed.className} flex flex-row border-gray-200 border-solid border-b-1 border-t-1 h-[520px]`}> {/* === Home Page Banner === */}
            <nav className="flex-1 ml-20 border-gray-200 border-r-1">{/* == Home Page Menu == */}
                <h3 className={`${OlympicSansMed.className} mt-8 p-4`}>Olympics Games Paris 2024</h3>
                <ul className="text-base/8 menu-banner">
                    <li><Link href={`#`}>Overview</Link></li>
                    <li><Link href={`#`}>Highlights & Replays</Link></li>
                    <li><Link href={`#`}>Results</Link></li>
                    <li><Link href={`#`}>Athletes</Link></li>
                    <li><Link href={`#`}>Stories</Link></li>
                    <li><Link href={`#`}>Brand</Link></li>
                    <li><Link href={`#`}>Medal Design</Link></li>
                    <li><Link href={`#`}>Mascot</Link></li>
                    <li><Link href={`#`}>Torch</Link></li>
                    <li><Link href={`#sports-events`}>Sport Events</Link></li>
                </ul>
            </nav>
            <div className="flex-1 p-8 content-center justify-items-center">{/* == Home Page Logo == */}
                <Image
                src="/img/Paris2024-Official-Logo.png"
                width={300}
                height={300}
                className="flex m-10"
                alt="Logo Officiel Paris 2024"
                />
            </div>
            <div className="flex-1 border-solid border-l-1 border-gray-200 pr-15">{/* == Home Page Event Infos == */}
                <h3 className={`${Paris2024_Weight.className} mt-8 p-4`}>Paris 2024</h3>
                <div className={`${OlympicSansMed.className} flex flex-col pl-8 text-base/10`}>
                    <p className="border-gray-200 border-solid border-b-1">
                        <span className="">Date</span>
                        <span className={`${Paris2024_Normal.className} absolute right-[65px]`}>24 juillet au 11 août 2024</span>
                    </p>
                    <p className="border-gray-200 border-solid border-b-1">
                        <span className="">Country</span>
                        <span className={`${Paris2024_Normal.className} absolute right-[65px]`}>France</span>
                    </p>
                    <p className="border-gray-200 border-solid border-b-1">
                        <span className="">Athletes</span>
                        <span className={`${Paris2024_Normal.className} absolute right-[65px]`}>622</span>
                    </p>
                    <p className="border-gray-200 border-solid border-b-1">
                        <span className="">Teams</span>
                        <span className={`${Paris2024_Normal.className} absolute right-[65px]`}>226</span>
                    </p>
                    <p className="border-gray-200 border-solid border-b-1">
                        <span className="">Events</span>
                        <span className={`${Paris2024_Normal.className} absolute right-[65px]`}>45</span>
                    </p>
                    <div className="mt-6">
                        <Link href="/offers"><button className="cta-btn">Show e-tickets offers</button></Link>
                        <Link href="/sports-events"><button className="cta-btn">Show sports events</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}