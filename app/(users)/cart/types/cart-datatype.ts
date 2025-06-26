export interface CartFormData {
    eventtitle: string[]
    offerrelat: string[]
    ticketsqty: string
    priceoot: number[]
    tax: number
    sumcartwt: number
    cartlog: string
    userref: string | null
}

export interface ActionResponse {
    success: boolean;
    message: string;
    errors?: {
        [k in keyof CartFormData]?: string[];
    }    
}