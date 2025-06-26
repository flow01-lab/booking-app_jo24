import { redirect } from 'next/navigation';
import { createClient } from '@/app/lib/utils/supabase/server';
import { OlympicHeadlineCsd } from '@/app/ui/fonts';
import CreditCardForm from '@/app/(users)/payment/components/creditcard-form';
import OrderSum from './components/order-sum';

export default async function PaymentPage() {
    /*const supabase = await createClient()
    
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/auth/login');
    }*/

  return (
    <>
        <div className="flex flex-col items-center justify-center">
            <h2 className={`${OlympicHeadlineCsd.className} text-2xl font-bold mb-4`}>Payment Page</h2>
            <OrderSum />
            <CreditCardForm />
        </div>
    </>
    
  )
}