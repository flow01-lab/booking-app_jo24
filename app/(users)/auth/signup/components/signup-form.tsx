'use client'

import { useActionState } from "react";
import { OlympicSansReg, OlympicHeadlineCsd } from "@/app/ui/fonts";
import { processSignUp } from "../actions";
import { ActionResponse } from "../types/signup-datatype";
import Link from "next/link";

const initialState: ActionResponse = {
    success: false,
    message:'',
}

export default function SignUpForm(){
    const [state, action, isPending] = useActionState(processSignUp, initialState)
    
    return(
        <>
            <div className="flex flex-col align-center md:mx-40 border-1 border-solid border-gray-500 rounded-[10px] p-5 m-10 shadow-[0px 2px 10px 0px gray]">
                <form id="new-user-form" action={action} className={`${OlympicSansReg.className} signup-form`} >
                    <div className="flex flex-row gap-4">
                         <div className="flex flex-col flex-1">
                            <label htmlFor="surname" className="required">NOM</label>
                            <input 
                                type="text" 
                                id="surname" 
                                name="surname"
                                placeholder="DE COUBERTIN" 
                                autoComplete="surname" 
                                aria-describedby="surname-error"
                                className={state?.errors?.options ? 'border-red-500' : ''}
                                required
                            />
                            {state?.errors?.options && (
                                <p id="surname-error" className="text-sm text-red-500">
                                    {state.errors.options[2]}
                                </p>
                            )}
                        </div>
                    
                        <div className="flex flex-col flex-1">
                            <label htmlFor="firstname" className="required">Prénom</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                name="firstname" 
                                placeholder="Pierre" 
                                autoComplete="firstname" 
                                aria-describedby="firstname-error" 
                                className={state?.errors?.options ? 'border-red-500' : ''}
                                required
                            />
                            {state?.errors?.options && (
                                <p id="firstname-error" className="text-sm text-red-500">
                                    {state.errors.options[1]}
                                </p>
                            )}
                        </div>
                    </div>
                   
                    <div className="flex flex-row">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="phone" className="required">Téléphone</label>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone" 
                                placeholder="+336XXXXXXXX"
                                autoComplete="phone"
                                aria-describedby="phone-error"
                                className={state?.errors?.options ? 'border-red-500' : ''}
                                required
                            />
                            {state?.errors?.options && (
                                <p id="phone-error" className="text-sm text-red-500">
                                    {state.errors.options[3]}
                                </p>
                            )}
                        </div>
                    
                        <div className="flex flex-col flex-1">
                            <label htmlFor="email" className="required">Adresse e-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                placeholder="email@domain.com"
                                autoComplete="email"
                                aria-describedby="email-error"
                                className={state?.errors?.options ? 'border-red-500' : ''}
                                required
                            />
                            {state?.errors?.email && (
                                <p id="email-error" className="text-sm text-red-500">
                                    {state.errors.email[0]}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-row">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="password" className={`${OlympicSansReg.className}`}>Mot de passe</label>
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
                        <div className="flex flex-col flex-1">
                            <label htmlFor="confirm-password" className="required">Confirmation de mot de passe</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                name="confirm-password"
                                placeholder="Confirmation mot de passe"
                                autoComplete=""
                                aria-describedby="confirm-password-error"
                                className={state?.errors?.password ? 'border-red-500' : ''}
                                required
                            />
                            {state?.errors?.password && (
                                <p id="confirm-password-error" className="text-sm text-red-500">
                                    {state.errors.password[0]}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="nationality" className="required">Nationalité</label>
                            <input 
                                type="text" 
                                id="nationality" 
                                name="nationality" 
                                placeholder=""
                                autoComplete=""
                                aria-describedby="nationality-error"
                                className={state?.errors?.options ? 'border-red-500' : ''} 
                                required
                            />
                            {state?.errors?.options && (
                                <p id="nationality-error" className="text-sm text-red-500">
                                    {state.errors.options[4]}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row items-start">
                        <input type="radio" id="agreement-case" className=""/>
                        <p className={`text-xs text-justify ${OlympicSansReg.className}`}>
                            J'ai pris connaissance des <Link href="/confidentialite" className="link-text">politiques de confidentialité</Link> et 
                            j'accepte que mes données personnelles, communiquées dans ce formulaire, 
                            soient utilisées et traitées dans le respect de la législation en vigueur en Europe.</p>
                    </div>
                    <div className="justify-items-center mt-8">
                        <button className="cta-btn" id="send-form-user" type="submit" disabled={isPending}>
                            {isPending ? 'Loading...' : 'Soumettre'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}