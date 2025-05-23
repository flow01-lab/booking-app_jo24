'use client'

import { createContext, useContext, useState, ReactNode } from "react";
import { EventsTypes } from "@/app/lib/types/database-generated.types";

interface EventsContextType {
   tickets: EventsTypes[];
   addToCart: (ticket: EventsTypes) => void;
   decrementQuantity: (ticketId: number) => void;
   incrementQuantity: (ticketId: number) => void;
   removeFromCart: (ticketId: number) => void;
}

interface EventsProviderProps {
    children: ReactNode;
}


const EventsContext = createContext<EventsContextType | undefined>(undefined);

export const EventsProvider : React.FC<EventsProviderProps> = ({children}) => {
    const [tickets, setTickets] = useState<EventsTypes[]>([]);

    const addToCart = (ticket: EventsTypes) => {
        const existingTicketIndex = tickets.findIndex((t) => t.id === ticket.id);
        if(existingTicketIndex !== -1) {
            const updatedTickets = [...tickets];
            updatedTickets[existingTicketIndex].quantityTickets += 1;
            setTickets(updatedTickets)
        }
    }
    
    const decrementQuantity = (ticketId: number) => {
        const updatedTickets = tickets.map(ticket => {
            if(ticket.id === ticketId) {
                if(ticket.quantityTickets > 1){
                    return {...tickets, quantityTickets: ticket.quantityTickets -1}
                }else {
                    return null;
                }
            }
            return ticket;
        }).filter(event => event !== null) as EventsTypes[];
        setTickets(updatedTickets);
    }
    
    const incrementQuantity = (ticketId: number) => {
        setTickets(prevEvents => prevEvents.map(ticket => ticket.id === ticketId ? {...ticket, quantityTickets: ticket.quantityTickets + 1} : ticket))
    }

    const removeFromCart = (ticketId: number) => {
        setTickets(tickets.filter(ticket => ticket.id !== ticketId))
    }
    return (
        <EventsContext.Provider value={{tickets, addToCart, removeFromCart, decrementQuantity, incrementQuantity}}>
            {children}
        </EventsContext.Provider>
    )
}

export const useEventsContext = () => {
    const context = useContext(EventsContext);

    if(!context){
        throw new Error('Erreur');
    }
    return context;
}
