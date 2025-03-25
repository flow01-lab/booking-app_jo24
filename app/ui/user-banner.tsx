import Image from "next/image";

export default function UserBanner() {
    return (
    <div className="flex flex-row px-5 py-4 items-center justify-end gap-6 bg-gray-50 fixed inset-x-0 top-0 h-18 w-full">
        <button className="flex flex-row bg-blue-50 rounded-full px-4 py-1 m-1">
            <Image 
            src="/img/user.svg"
            width={24}
            height={24}
            className="pr-1"
            alt="User icon"
            />
            Sign in</button>
        <select className="bg-blue-50 rounded-full py-1 px-4 justify-center">
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