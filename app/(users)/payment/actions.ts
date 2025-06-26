'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/utils/supabase/server'
import { ActionResponse } from './types/payments-datatype'
import { z } from "zod/v4";

const paymentSchema = z.object({
  amount: z.number().min(1, "Le montant doit être supérieur à 0"),
  ownercard: z.string().min(1, "Le nom du titulaire de la carte est requis"),
  cardnumber: z.string().length(16, "Le numéro de carte doit comporter 16 chiffres"),
  expirationdate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "La date d'expiration doit être au format MM/AA ou MM/YYYY"),
  securitycode: z.string().length(3, "Le code de sécurité doit comporter 3 chiffres")
});

export async function processPayment(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  await new Promise((resolve)=> setTimeout(resolve, 1000));

    const supabase = await createClient();
    const amount = parseFloat(formData.get('amount') as string);
    const ownercard = formData.get('currency') as string;
    const cardnumber = formData.get('cardnumber') as string;
    const expirationdate = formData.get('expirationdate') as string;
    const securitycode = formData.get('securitycode') as string;
    
    const rawData = {
        amount: amount,
        ownercard: ownercard,
        cardnumber: cardnumber,
        expirationdate: expirationdate,
        securitycode: securitycode
    };

    // Vérification des champs requis
    if (typeof rawData.amount !== 'number' || typeof rawData.ownercard !== 'string' || typeof rawData.cardnumber !== 'string' ||
        typeof rawData.expirationdate !== 'string' || typeof rawData.securitycode !== 'string') {
        return {
            success: false,
            message: "Tous les champs sont requis.",
        };
    }
    // Validation des données avec Zod
    // Utilisation du schéma de validation pour vérifier les données
    // et renvoyer un message d'erreur en cas de validation échouée
    const result = paymentSchema.safeParse(rawData);
    if (!result.success) {
        const errorMessage = result.error.issues[0]?.message || "Erreur de validation";
        return {
            success: false,
            message: errorMessage,
        };
    }
    const { data, error } = await supabase.from('payments').insert({
        amount: rawData.amount,
        ownercard: rawData.ownercard,
        cardnumber: rawData.cardnumber,
        expirationdate: rawData.expirationdate,
        securitycode: rawData.securitycode
    }).select().single();
    if (error) {
        console.error('Erreur lors de l\'insertion dans la table payments:', error);
        return {
            success: false,
            message: "Erreur lors de l'enregistrement du paiement.",
        };
    }
    console.log('Données insérées avec succès:', data);
    revalidatePath('/success', 'layout');
    // Redirection vers la page de succès
    redirect('/success');
    return {
        success: true,
        message: "Paiement enregistré avec succès.",
    };
}