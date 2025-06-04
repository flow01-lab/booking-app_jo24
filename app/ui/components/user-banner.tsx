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
        <>
            <div className="bg-gray-50 fixed top-0 h-16 w-full z-[100]"></div>
            <div className="flex flex-row flex-[50%] px-5 py-2 items-center justify-end gap-4 z-[120] fixed top-0 inset-x-0">
                <UserButton />
                <CartButton handleCartModal={handleCartModal}/>
                <select id="langage-select" className="bg-blue-50 rounded-full py-2 px-4 justify-center cursor-pointer">
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Español</option>
                    <option value="po">Português</option>
                    <option value="ch">中文 (China)</option>
                    <option value="jp">日本語 (Japan)</option>
                </select>
                <CartModal cartModalOpen={cartModalOpen} handleCartModal={handleCartModal}/>
            </div>
            
        
        </>
        
    );
}