'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/app/lib/utils/supabase/server'

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const firstname = formData.get('firstname') as string;
  const surname = formData.get('surname') as string;
  const cutName = firstname.substring(0,3);
  const username = cutName+'_'+surname;
  
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
        data: {
            username: username,
            firstname: formData.get('firstname') as string ,
            surname: formData.get('surname') as string,
            phone: formData.get('phone') as string,
            nationality: formData.get('nationality') as string,
        }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}