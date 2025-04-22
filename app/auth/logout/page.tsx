import { redirect } from 'next/navigation';

import { createClient } from '@/app/utils/supabase/server';

export default async function LogOutPage(){
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();
    if (error){
        redirect('/error');
    }

    return setTimeout(redirect('/'), 3000);
}