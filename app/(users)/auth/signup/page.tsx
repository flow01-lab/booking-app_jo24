
import { OlympicSansReg, OlympicHeadlineCsd } from "@/app/ui/fonts";
import SignUpForm from './components/signup-form'

export default function Page(){

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-200 content-center justify-items-center justify-center">
            <h2 className={`${OlympicHeadlineCsd.className} text-center`}>Création de compte</h2>
            <SignUpForm />
            </div>
        </div>
        
    )
}