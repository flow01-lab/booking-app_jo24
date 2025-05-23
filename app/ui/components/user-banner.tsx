'use client'

import { UserButton } from "./user-button";
import CartButton from "./cart-button";
import { useState } from "react";
import CartModal from "./cart-modal";


export default function UserBanner() {

    const [cartModalOpen, setCartModalOpen] = useState(false);

    const handleCartModal = () => {
        setCartModalOpen(!cartModalOpen);
    }

    return (
        <div className="flex flex-row px-5 py-4 items-center justify-end gap-4 bg-gray-50 fixed inset-x-0 top-0 h-18 w-full z-[100]">
            <UserButton />
            <CartButton handleCartModal={handleCartModal}/>
            <select className="bg-blue-50 rounded-full py-2 px-4 justify-center">
                <option value="">Langage</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="po">Português</option>
                <option value="ch">中文 (China)</option>
                <option value="jp">日本語 (Japan)</option>
            </select>
            <CartModal cartModalOpen={cartModalOpen} handleCartModal={handleCartModal}/>
        </div>
    );
}