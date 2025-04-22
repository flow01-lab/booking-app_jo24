/*import isUserConnected from "./isConnected";

import { useEffect } from "react";

export default function Greetings(){
    //const signOutText = 'Sign Out';
    const signInText = 'Sign in';
    const greetings = 'Hello ';
    useEffect(() => {
        const element = document.getElementById('user-sign-btn');
        if (!isUserConnected()){
            element.textContent = signInText;
        } else {
            element.textContent = greetings;
        }
        return <span id="user-sign-btn">Sign In</span>;
    }, [])
  
}*/

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/app/utils/supabase/client';

export default function Header() {
    const router = useRouter();
    const supabase = createClient();
    const [userIsLogged, setUserIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
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

        loadSession();

        // Nettoyer l'abonnement à la fin
        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    return (
        <div>
            {userIsLogged ? (
                <form action="/auth/logout" method="post">
                    <button type="submit">
                        Sign Out
                    </button>
                </form>
            ) : (
                <button onClick={() => router.push('/auth/login')}>Log in</button>
            )}
        </div>
    );
}