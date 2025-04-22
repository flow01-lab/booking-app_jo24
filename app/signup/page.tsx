import { OlympicSansReg, OlympicHeadlineCsd } from "../ui/fonts";
import { signup } from "./actions";
//import FormChecker from "./checker";

export default function Page(){

    return (
        <div className="form-page w-350 justify-center">
            <h2 className={`${OlympicHeadlineCsd.className} text-center`}>Création de compte</h2>
            <div className="form-container flex flex-col">
                <form id="new-user-form" action="" method="post" className={`${OlympicSansReg.className} signup-form`}>
                    <label htmlFor="surname">NOM</label>
                    <input type="text" id="surname" name="surname" required/>
                    
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" name="firstname" required/>
                    
                    <label htmlFor="phone">Téléphone</label>
                    <input type="text" id="phone" name="phone" required/>
                    
                    <label htmlFor="email">Courriel (Adresse e-mail)</label>
                    <input type="email" id="email" name="email" required/>
                    
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required/>
                    
                    <label htmlFor="password-check">Confirmation de mot de passe</label>
                    <input type="password" id="password-check" name="password-check"  required/>
                    
                    <label htmlFor="nationality">Nationality</label>
                    <input type="text" id="nationality" name="nationality" required/>
                    <button className="cta-btn" type="submit" formAction={signup}>Soumettre</button>
                </form>
            </div>
        </div>
    )
}