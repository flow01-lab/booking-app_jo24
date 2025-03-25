import Image from "next/image";

export default function NavBanner() {
    return (
        <div className="flex flex-row border-gray-200 border-solid border-b-1"> {/* === Home Page Banner === */}
            <nav className="flex-1 ml-20 border-gray-200 border-r-1">{/* == Home Page Menu == */}
                <h3 className="mt-8 p-4">Olympics Games Paris 2024</h3>
                <ul>
                    <li>Overview</li>
                    <li>Highlights & Replays</li>
                    <li>Results</li>
                    <li>Athletes</li>
                    <li>Stories</li>
                    <li>Brand</li>
                    <li>Medal Design</li>
                    <li>Mascot</li>
                    <li>Torch</li>
                    <li>Sports Events</li>
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
                <h3 className="mt-8 p-4">Paris 2024</h3>
                <div className="flex flex-col pl-8 ">
                    <span>Date</span>
                    <span>Country</span>
                    <span>Athletes</span>
                    <span>Teams</span>
                    <span>Events</span>
                    <button className="cta-btn">Buy e-Tickets</button>
                    <button className="cta-btn">Show events</button>
                </div>
            </div>
        </div>
    );
}