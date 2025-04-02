import Image from "next/image";

export default function UserBanner() {
    return (
    <div className="flex flex-row px-5 py-4 items-center justify-end gap-4 bg-gray-50 fixed inset-x-0 top-0 h-18 w-full">
        <button className="flex flex-row bg-blue-50 rounded-full px-4 py-2 m-1">
            <Image 
            src="/img/user.svg"
            width={24}
            height={24}
            className="pr-1"
            alt="User icon"
            />
            Sign in</button>
        <div className="relative z-1">
            <div className="bg-blue-50 rounded-full relative">
                <Image 
                src="/img/ticket.svg"
                width={55}
                height={55}
                className="px-4 py-2 relative"
                alt="Cart | Panier"
                />
                <div className="absolute menu-cart-notif">

                </div>
            </div>
            
        </div>
        
        <select className="bg-blue-50 rounded-full py-2 px-4 justify-center">
            <option value="">Langage</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
            <option value="po">Português</option>
            <option value="ch">中文 (China)</option>
            <option value="jp">日本語 (Japan)</option>
        </select>
    </div>
    );
}