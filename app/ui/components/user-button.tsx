'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { createClient } from '@/app/lib/utils/supabase/client';
import Image from "next/image";
import isUserConnected from "@/app/lib/isConnected";

export const UserButton = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const supabase = createClient();
    const [userIsLogged, setUserIsLogged] = useState<boolean>(false);
    
    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event/*, session */) => {
            if (event === 'SIGNED_IN') {
                setUserIsLogged(true);
            } else if (event === 'SIGNED_OUT') {
                setUserIsLogged(false);
            }
        });

        const loadSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) {
                console.error(error);
            }
            if (session) {
                setUserIsLogged(true);
            }
        };

        const getUsername = async() => {
            
            const userData = await isUserConnected();
            setUser(userData);
            setLoading(false);

        };
        getUsername();
        loadSession();

        // Nettoyer l'abonnement à la fin
        return () => {
            subscription.unsubscribe();
        };

        
    }, [supabase]);
     if(loading) {
        return ( <div id="user-button-container" className="flex flex-row bg-blue-50 rounded-full px-4 py-2 m-1">
                    <button id="user-button" className="btn-user" type="button">
                        <Image
                        src="/img/user.svg"
                        width={24}
                        height={24}
                        className="pr-1"
                        alt="User icon"
                        />
                        Wait...
                    </button>
                </div>
            )}

    return (
        <div id="user-button-container" className="flex flex-row bg-blue-50 rounded-full px-4 py-2 m-1 btn-user">
            {userIsLogged ? (
                <form action="/auth/logout" method="post">
                    <button className="flex flex-row user-connected" type="submit">
                       <Image
                        src="/img/user-black.svg"
                        width={24}
                        height={24}
                        className="pr-1"
                        alt="User icon"
                        />
                        {user}| Sign Out
                    </button>
                </form>
            ) : (
                <button className="flex flex-row" onClick={() => router.push('/auth/login')}>
                    <Image
                    src="/img/user.svg"
                    width={24}
                    height={24}
                    className="pr-1"
                    alt="User icon"
                    />
                    Log in
                </button>
            )}
        </div>
    )  
};