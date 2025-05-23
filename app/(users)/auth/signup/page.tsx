'use client'

import { useState, /*useRef,*/ FormEvent, /*useEffect*/ } from "react";

import { OlympicSansReg, OlympicHeadlineCsd } from "@/app/ui/fonts";
import { signup } from "./actions";

export default function Page(){
    // Process for sending Form data to database
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const[error, setError] = useState<string | null>(null)
    
    async function onSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clean previous errors when a new starts

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('', {
                method: 'POST',
                body: formData,
            })
            if (!response.ok){
                throw new Error('Failed to submit the data. Please try again.')
            }

            // Handle response if necessary
            const data = await response.json();
            console.log(data); // To remove after test !!! 
        }
        catch (error) {
            // Capture the error message to displau to the user
            setError(error.message)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    
   // Check inputs fields from user entries
   let inputClass = 'input-class';

   function onBlurHandler(e){
    if(e.target.value === ''){
       return <p className="error-input">Veuillez remplir le champ obligatoire.</p>
    } else {
       <p>OK</p>
    }
}
   
   // Test for Surname and Firstname
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
    })

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
        if(person.firstName !== ''){
            const regNames = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
            if (regNames.test(person.firstName) === true && person.firstName.length > 3){
            return inputClass += '-valid-surname';
            } 
        }
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
        if(person.lastName !== ''){
            const regNames = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
            if (regNames.test(person.lastName) === true && person.lastName.length > 3){
            return inputClass += '-valid-surname';
            } 
        }
    }



/*   const [surName, setInputSurname] = useState('');
   const [firstName, setInputFirstname] = useState('');
    function isValidsurName(names){
        const regNames = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        if (regNames.test(names) === true && names.length > 3){
            return inputClass += '-valid-surname';
        } 
    }
    isValidsurName(surName);


    function isValidfirstName(names){
        const regNames = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
        if (regNames.test(names) === true && names.length > 3){
            return inputClass += '-valid-firstname';
        } 
    }
    isValidfirstName(firstName);*/

    // Test for Phone
    const [phoneNum, setPhoneNum] = useState('');
    function isValidPhone(phone){
        const regPhone = /^\+?[1-9]\d{1,14}$/;
        if(regPhone.test(phone) === true && phone.length === 12){
            return inputClass += '-valid-phone';
        } else if (phone === ''){
            return <p className="error-input">Champ vide.</p>
        } else {
            return <p className="error-input">Veuillez saisir un numéro de téléphone valide.</p>
        }
    }
    isValidPhone(phoneNum);

    // Test for Email Adress
    const [emailAddr, setEmailAddr] = useState('');
    function isValidEmail(email){
        const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regEmail.test(email)){
            return inputClass += '-valid-email';
        }
    }
    isValidEmail(emailAddr);

    // Test for Password
    const [passW, setPassW] = useState('');
    function isValidPassword(password){
        const regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
        if(regPass.test(password)){
            return inputClass += '-valid-passw';
        }
    }
    isValidPassword(passW);

    // Test for Password confirmation => Check if it is same passwords
    const [passWCheck, setPassWCheck] = useState('');
    function isConfirmPassword(passWCheck){
        if(passWCheck === passW && passWCheck !== ''){
            return inputClass += '-valid-passwconf';
        } else if (passWCheck === ''){
            return <p className="error-input">Veuillez confirmer votre mot de passe</p>
        }
    }
    isConfirmPassword(passWCheck);

    // Test for Nationality
    const [nationality, setNationality] = useState('');
    function isValidNationality(nationality){
        const regNation = /^[a-zA-Z]+$/;
        if(regNation.test(nationality)){
            return inputClass += '-valid-national';
        }
    }
    isValidNationality(nationality);

    /**/

    return (
        <div className="form-page w-350 content-center justify-items-center">
            <h2 className={`${OlympicHeadlineCsd.className} text-center`}>Création de compte</h2>
            <div className="form-container flex flex-col md:mx-40 ">
            {error && <div style={{ color: 'red' }}>error</div>}
                <form id="new-user-form" action="" method="post" className={`${OlympicSansReg.className} signup-form`} onSubmit={onSubmit}>
                    
                    <label htmlFor="surname" className="required">NOM</label>
                    <input type="text" id="surname" name="surname" value={person.lastName} className={inputClass} onBlur={onBlurHandler} onChange={handleLastNameChange} required/>
                    {/*onBlurHandler()*/}
                    
                    <label htmlFor="firstname" className="required">Prénom</label>
                    <input type="text" id="firstname" name="firstname" value={person.firstName} className={inputClass} onChange={handleFirstNameChange} required/>
                    {/*onBlurHandler(firstName)*/}
                    
                    <label htmlFor="phone" className="required">Téléphone</label>
                    <input type="text" id="phone" name="phone" value={phoneNum} className={inputClass} onChange={(event)=> setPhoneNum(event.target.value)} required/>
                    

                    <label htmlFor="email" className="required">Courriel (Adresse e-mail)</label>
                    <input type="email" id="email" name="email" value={emailAddr} className={inputClass} onChange={(event)=> setEmailAddr(event.target.value)} required/>
                    
                    
                    <label htmlFor="password" className="required">Mot de passe</label>
                    <input type="password" id="password" name="password" value={passW} className={inputClass} onChange={(event)=> setPassW(event.target.value)} required/>
                    
                    
                    <label htmlFor="password-check" className="required">Confirmation de mot de passe</label>
                    <input type="password" id="password-check" name="password-check" value={passWCheck} className={inputClass} onChange={(event)=> setPassWCheck(event.target.value)} required/>
                    
                    
                    <label htmlFor="nationality" className="required">Nationalité</label>
                    <input type="text" id="nationality" name="nationality" value={nationality} className={inputClass} onChange={(event)=> setNationality(event.target.value)} required/>
                    

                    <button className="cta-btn" type="submit" formAction={signup} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Soumettre'}
                    </button>
                </form>
            </div>
        </div>
    )
}