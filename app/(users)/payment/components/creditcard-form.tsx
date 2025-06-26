'use client'

import { useActionState } from "react";
import { OlympicSansReg, OlympicHeadlineCsd } from "@/app/ui/fonts";
import { processPayment } from "../actions";
import { ActionResponse } from "../types/payments-datatype";
//import Link from "next/link";

const initialState: ActionResponse = {
    success: false,
    message:'',
}

export default function CreditCardForm() {
    const [state, action, isPending] = useActionState(processPayment, initialState);

return (
    <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-20'>
        <form action={action} className="flex flex-col px-10 py-8" >
            <h4 className="text-xl font-semibold mb-4 text-center">Payment Details</h4>
            <label htmlFor="card-owner" className={`${OlympicSansReg.className} text-md mb-2 mt-4 font-bold text-left`}>Name's Card Owner:</label>
            <input 
                id="card-owner" 
                name="card-owner"
                placeholder="MR JOHN DOE"
                autoComplete="name"
                aria-describedby="card-owner-error"
                className={state?.errors?.ownercard ? 'border-red-500' : 'px-3 py-1 border-1 border-solid border-gray-400 rounded-sm'}
                type="text"
                required
            />
            {state?.errors?.ownercard && (
                <p id="card-owner-error" className="text-sm text-red-500">
                    {state.errors.ownercard[0]}
                </p>
            )}
            
            
            <label htmlFor="card-number" className={`${OlympicSansReg.className} text-md mb-2 mt-4 font-bold`}>Card Number:</label>
            <input 
                id="card-number" 
                name="card-number"
                placeholder="XXXX XXXX XXXX XXXX"
                autoComplete="cc-number"
                aria-describedby="card-number-error"
                className={state?.errors?.cardnumber ? 'border-red-500' : 'px-3 py-1 border-1 border-solid border-gray-400 rounded-sm'}
                required
                type="text" 
            />
            {state?.errors?.cardnumber && (
                <p id="card-number-error" className="text-sm text-red-500">
                    {state.errors.cardnumber[0]}
                </p>
            )}
            
            <div className='flex flex-row justify-between items-center'>
                <div className='w-1/2 pr-2'>
                    <label htmlFor="card-expiration" className={`${OlympicSansReg.className} text-md mb-2 mt-4 flex justify-start pl-1 font-bold`}>Expiration Date:</label>
                    <input 
                        id="card-expiration" 
                        name="card-expiration"
                        placeholder="MM/YY"
                        autoComplete="cc-exp"
                        aria-describedby="card-expiration-error"
                        className={state?.errors?.expirationdate ? 'border-red-500' : 'px-3 py-1 border-1 border-solid border-gray-400 rounded-sm w-[50%] text-center'}
                        required
                        type="text"
                    />
                    {state?.errors?.expirationdate && (
                        <p id="card-expiration-error" className="text-sm text-red-500">
                            {state.errors.expirationdate[0]}
                        </p>
                    )}
                </div>
                <div className='w-1/2 pl-2'>
                    <label htmlFor="security-code" className={`${OlympicSansReg.className} text-md mb-2 mt-4 flex justify-start pl-1 font-bold`}>CVV:</label>
                    <input 
                        id="security-code" 
                        name="security-code"
                        placeholder="123"
                        type="text"
                        autoComplete="cc-csc"
                        aria-describedby="card-secret-error"
                        required
                        className={state?.errors?.securitycode ? 'border-red-500' : 'px-3 py-1 border-1 border-solid border-gray-400 rounded-sm w-[40%] text-center'}
                    />
                </div>
            </div>
            
            
            <button 
                type="submit" 
                className="mt-4 bg-[#171717] text-white px-4 py-2 rounded hover:bg-[#464646] cursor-pointer">
                    {isPending ? 'Checking...' : 'Pay Now'}
            </button>
            <button 
                type="button" 
                className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer">
                    Cancel
            </button>
            
            <p className="text-sm mt-4">By clicking "Pay Now", you agree to our <a href="#" className="text-blue-500 underline">Terms of Service</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.</p>
            <p className="text-sm mt-2">Your payment information is secure and will not be shared.</p>
            <p className="text-sm mt-2">If you have any questions, please contact our support team.</p>
        </form>
    </div>
  )
}