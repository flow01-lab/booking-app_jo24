'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/utils/supabase/server'
import { ActionResponse } from './types/signup-datatype'
import { z } from "zod/v4";

const signUpSchema = z.object({
  email: z.email("L'adresse e-mail est obligatoire"),
  password: z.string().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
    "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre, un caractère spécial, sans espace, et entre 8-16 caractères."
  ),
  options: z.object({
    data: z.object({
      username: z.string(),
      firstname: z.string().regex(/^([ \u00c0-\u01ffa-zA-Z'\-])+$/),
      surname: z.string().regex(/^([ \u00c0-\u01ffa-zA-Z'\-])+$/).toUpperCase(),
      phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
      nationality: z.string().regex(/^[a-zA-Z]+$/),
    })
  })
})

export async function processSignUp(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  await new Promise((resolve)=> setTimeout(resolve, 1000));
  const supabase = await createClient()

  const firstname = formData.get('firstname') as string;
  const surname = formData.get('surname') as string;
  const cutName = firstname.substring(0,3);
  const username = cutName+'_'+surname;

  const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
        data: {
            username: username,
            firstname: firstname,
            surname: surname,
            phone: formData.get('phone') as string,
            nationality: formData.get('nationality') as string,
        }
    }
  }
  if (typeof rawData.email !== 'string' || typeof rawData.password !== 'string') {
    return {
      success: false,
      message: "Les champs email et mot de passe sont requis.",
    }
  }

  const result = signUpSchema.safeParse(rawData);
  
  if(!result.success) {
    const errorMessage = result.error.issues[0]?.message || "Erreur de validation"
    return {
      success: false,
      message: errorMessage,
    }
  }
  
  const { error } = await supabase.auth.signUp(result.data);
  if (error) {
    console.error(error.message)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}