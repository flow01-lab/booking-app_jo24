import Image from "next/image";

export default function WallBanner() {
    return (
        <div className="h-[300px] overflow-hidden">
            <Image
            src="/img/wallpaper_Paris2024.avif"
            width={3600}
            height={1542}
            className=""
            alt="Fresque murale des Jeux Olympiques Paris 2024"
            />
        </div>
    )
}