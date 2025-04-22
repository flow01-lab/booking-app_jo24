//import React, {useEffect} from "react";
import { UserButton } from "./user-button";
import CartButton from "./cart-button";

export default function UserBanner() {

    return (
        <div className="flex flex-row px-5 py-4 items-center justify-end gap-4 bg-gray-50 fixed inset-x-0 top-0 h-18 w-full">
            <UserButton />
            <CartButton />
            
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