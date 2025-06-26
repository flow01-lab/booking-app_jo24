'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/app/lib/utils/supabase/server'
import { ActionResponse } from './types/cart-datatype'
import { z } from "zod/v4";

const cartSchema = z.object({
    eventtitle: z.string().array().min(1, "Le titre de l'événement est requis"),
    offerrelat: z.string().array().min(1, "La référence de l'offre est requise"),
    ticketsqty: z.string().array().min(1, "La quantité de billets est requise"),
    priceoot: z.number().array().min(1, "Le prix doit être supérieur à 0"),
    tax: z.number().min(0, "La taxe doit être un nombre positif"),
    sumcartwt: z.number().min(0, "Le poids total du panier doit être un nombre positif"),
    cartlog: z.string().min(1, "Le journal du panier est requis"),
    userref: z.string().nullable().optional()
});

export async function processPayment(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  await new Promise((resolve)=> setTimeout(resolve, 1000));

    const supabase = await createClient();
    const eventtitle = parseFloat(formData.get('eventtitle') as string);
    const offerrelat = formData.get('offerrelat') as string;
    const ticketsqty = formData.get('ticketsqty') as string;
    const priceoot = formData.get('priceoot') as string;
    const tax = formData.get('tax') as string;
    const sumcartwt = formData.get('sumcartwt') as string;
    const cartlog = formData.get('cartlog') as string;
    const userref = formData.get('userref') as string | null;
    
    const rawData = {
        eventtitle: eventtitle,
        offerrelat: offerrelat,
        ticketsqty: ticketsqty,
        priceoot: priceoot,
        tax: tax,
        sumcartwt: sumcartwt,
        cartlog: cartlog,
        userref: userref
    };

    // Vérification des champs requis
    if (typeof rawData.eventtitle !== 'string' || !Array.isArray(rawData.offerrelat) || !Array.isArray(rawData.ticketsqty) ||
        !Array.isArray(rawData.priceoot) || typeof rawData.tax !== 'number' || typeof rawData.sumcartwt !== 'number' ||
        typeof rawData.cartlog !== 'string') {
        return {
            success: false,
            message: "Tous les champs sont requis.",
        };
    }
    
    // Validation des données avec Zod
    // Utilisation du schéma de validation pour vérifier les données
    // et renvoyer un message d'erreur en cas de validation échouée
    const result = cartSchema.safeParse(rawData);
    if (!result.success) {
        const errorMessage = result.error.issues[0]?.message || "Erreur de validation";
        return {
            success: false,
            message: errorMessage,
        };
    }
    const { data, error } = await supabase.from('cart').insert({
        eventtitle: rawData.eventtitle,
        offerrelat: rawData.offerrelat,
        ticketsqty: rawData.ticketsqty,
        priceoot: rawData.priceoot,
        tax: rawData.tax,
        sumcartwt: rawData.sumcartwt,
        cartlog: rawData.cartlog,
        userref: rawData.userref
    }).select().single();
    if (error) {
        console.error('Erreur lors de l\'insertion dans la table cart:', error);
        return {
            success: false,
            message: "Erreur lors de l'enregistrement du panier.",
        };
    }
    console.log('Données insérées avec succès:', data);
    revalidatePath('/payment', 'layout');
    // Redirection vers la page de succès
    redirect('/payment');
    return {
        success: true,
        message: "Paiement enregistré avec succès.",
    };
}