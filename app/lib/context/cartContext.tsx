'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { EventsTypes, OffersTypes } from "@/app/lib/types/database-generated.types";

interface CartContextType {
   tickets: EventsTypes[];
   addToCart: (ticket: Omit<EventsTypes, 'quantityTickets'>, quantity?: number) => void;
   removeFromCart: (ticketId: string) => void;
   incrementQuantity: (ticketId: string) => void;
   decrementQuantity: (ticketId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: {children: ReactNode}) => {
    const [tickets, setTickets] = useState<EventsTypes[]>([]);

    const addToCart = (ticket: Omit<EventsTypes, 'quantityTickets'>, quantity = 1) => {
        setTickets(prev => {
            const found = prev.find(t => t.id === ticket.id);
            if (found) {
                return prev.map(t =>
                    t.id === ticket.id ? 
                    { ...t, quantityTickets: t.quantityTickets + quantity } : t
                );
            }
            return [...prev, { ...ticket, quantityTickets: quantity }];
        });
    };

    const removeFromCart = (ticketId: string) => {
        setTickets(prev => prev.filter(t => t.id !== ticketId));
    };

    const incrementQuantity = (ticketId: string) => {
        setTickets(prev => prev.map(t => 
            t.id === ticketId ? {...t, quantityTickets: t.quantityTickets + 1} : t));
    };

    const decrementQuantity = (ticketId: string) => {
        setTickets(prev => prev.map(t =>
            t.id === ticketId ? { ...t, quantityTickets: t.quantityTickets - 1 } : t));
        };
    
    return (
        <CartContext.Provider value={{ tickets, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    const context = useContext(CartContext);

    if(!context){
        throw new Error('Erreur with CartContext: useCartContext must be used within a CartProvider');
    }
    return context;
};
