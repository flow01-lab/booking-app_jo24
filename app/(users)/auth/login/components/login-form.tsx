'use client'

import Image from "next/image";
import Link from "next/link";
import { OlympicSansReg } from "@/app/ui/fonts";
import { processLogin } from '../actions';
import { ActionResponse } from "../types/login-datatype";
import { useActionState } from "react";

const initialState: ActionResponse = {
    success: false,
    message:'',
}

export default function LoginForm(){
    const [state, action, isPending] = useActionState(processLogin, initialState)

    return (
        <>
            <div className="flex flex-col align-center justify-right bg-white w-200">
                <div className="flex justify-center mt-10">
                    <Image
                    src="/img/Paris2024-Official-Logo.png"
                    width={240}
                    height={240}
                    className="flex align-center justify-center items-center"
                    alt="Logo Officiel Paris 2024"
                    />
                </div>
                <form action={action} className="signin-form flex flex-col items-center" autoComplete="on">
                    <div className="justify-items-center pb-[8px]">
                        <label htmlFor="email" className={`${OlympicSansReg.className}`}>Identifiant / E-mail</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="text" 
                            placeholder="" 
                            autoComplete="email-adress" 
                            aria-describedby="email-adress-error"
                            className={state?.errors?.email ? 'border-red-500' : ''} 
                            required
                        />
                        {state?.errors?.email && (
                            <p id="email-adress-error" className="text-sm text-red-500">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>
                    
                    <div className="justify-items-center pb-[2px]">
                        <label htmlFor="password" className={`${OlympicSansReg.className}`}>Mot de passe / Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password"
                            placeholder=""
                            autoComplete="password"
                            aria-describedby="password-error"
                            className={state?.errors?.password ? 'border-red-500' : ''}
                            required
                        />
                        {state?.errors?.password && (
                            <p id="password-error" className="text-sm text-red-500">
                                {state.errors.password[0]}
                            </p>
                        )}
                    </div>
                    
                    <div className="mt-2 mb-10 pb-5 text-center">
                        <span className=""><Link href="./forgot-password" className="link-text">Mot de passe oublié ?</Link></span>
                    </div>
                    <div className="m-5">
                        <button className={`${OlympicSansReg.className} btn-submit`} type="submit" disabled={isPending}>
                            {isPending ? 'Wait for...' : 'Connexion/Log In'}
                        </button>
                    </div>
                </form>
                <div className="mt-5 mb-10 pb-8 text-center">
                    <span className="">Vous n&apos;avez pas encore de compte ? <Link href="./signup" className="link-text">Créer un compte</Link>.</span>
                </div>
            </div>
        </>
    )
}