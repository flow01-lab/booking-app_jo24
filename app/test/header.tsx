'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/app/utils/supabase/client';

export default function Header() {
    const router = useRouter();
    const supabase = createClient();
    const [userIsLogged, setUserIsLogged] = useState<boolean>(false);

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event/*, session*/) => {
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
                <form action="/auth/signout" method="post">
                    <button type="submit">Sign Out</button>
                </form>
            ) : (
                <button onClick={() => router.push('/auth')}>Log in</button>
            )}
        </div>
    );
}