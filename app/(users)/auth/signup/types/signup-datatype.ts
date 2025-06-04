export interface SignUpFormData {
    email: string;
    password: string;
    options: {
        data: {
            username: string,
            firstname: string ,
            surname: string,
            phone: string,
            nationality: string,
        }
    }
}

export interface ActionResponse {
    success: boolean;
    message: string;
    errors?: {
        [k in keyof SignUpFormData]?: string[];
    }    
}