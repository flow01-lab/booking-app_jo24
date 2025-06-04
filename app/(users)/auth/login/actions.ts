'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/utils/supabase/server'
import { z } from "zod/v4";
import { ActionResponse } from './types/login-datatype';


const loginSchema = z.object({
  email: z.email("L'adresse e-mail est obligatoire"),
  password: z.string().regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
    "Le mot de passe doit contenir une majuscule, une minuscule, un chiffre, un caractère spécial, sans espace, et entre 8-16 caractères."
  ),
})

export async function processLogin(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  await new Promise((resolve)=> setTimeout(resolve, 1000));
  const supabase = await createClient();

    const rawData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    }
    if (typeof rawData.email !== 'string' || typeof rawData.password !== 'string') {
      return {
        success: false,
        message: "Les champs email et mot de passe sont requis.",
      }
    }

    const result = loginSchema.safeParse(rawData);

    if(!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Erreur de validation"
      return {
        success: false,
        message: errorMessage,
      }
    }
    
    const { error } = await supabase.auth.signInWithPassword(result.data);
    if (error) {
      console.error(error.message)
      redirect('/error')
    }

  revalidatePath('/', 'layout')
  redirect('/')
}