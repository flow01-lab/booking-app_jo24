// Definition of types for data on login form

export interface LoginFormData {
    email: string;
    password: string;
}

export interface ActionResponse {
    success: boolean;
    message: string;
    errors?: {
        [k in keyof LoginFormData]?: string[];
    }    
}