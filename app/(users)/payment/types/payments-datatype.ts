export interface PaymentFormData {
    amount: number
    ownercard: string
    cardnumber: string
    expirationdate: string
    securitycode: string
}

export interface ActionResponse {
    success: boolean;
    message: string;
    errors?: {
        [k in keyof PaymentFormData]?: string[];
    }    
}