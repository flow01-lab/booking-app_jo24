
export const FormChecker= ()=> {
    // Recover the form 'New-User-Form'
        const form = document.getElementById('new-user-form');

        // Get value of 'surname' input
        const surnameInput = document.getElementById('surname');
        // Get value of 'firstname' input
        const firstnameInput = document.getElementById('firstname');
        // Get value of 'phone' input
        const phoneInput = document.getElementById('phone');
        // Get value of 'email' input
        const emailInput = document.getElementById('email');
        // Get value of 'password' input
        const passwordInput = document.getElementById('password');
        // Get value of 'password-check' input
        const passWcheckInput = document.getElementById('password-check');
        // Get value of 'nationality' input
        const nationalityInput = document.getElementById('nationality');
    
    
        form?.addEventListener('submit', (event) => {
            const errors = [];
            let inputId = form;
    
            function isValidNames(name){
                const regNames = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
                return regNames.test(name);
            }
    
            function isValidPhone(phone){
                const regPhone = /^\+?[1-9]\d{1,14}$/;
                return regPhone.test(phone);
            }
    
            function isValidEmail(email){
                const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return regEmail.test(email);
            }
    
            function isValidPassword(password){
                const regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
                return regPass.test(password);
            }
    
            function isValidNationality(nationality){
                const regNation = /^[a-zA-Z]+$/;
                return regNation.test(nationality);
            }
            
            // Checker for 'surname' input
            if (surnameInput?.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir votre nom.');
                inputId = surnameInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (surnameInput?.ariaValueMin.trim().length < 3) {
                errors.push('Le nom doit contenir au moins 3 caractères.');
                inputId = surnameInput as HTMLElement;
                // Check if input contain more than 3 characters
            } else if (isValidNames(surnameInput?.ariaValueText) !== true){
                errors.push('Veuillez saisir un nom valide.');
                inputId = surnameInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
    
            // Checker for 'firstname' input
            if (firstnameInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir votre prénom.');
                inputId = firstnameInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (firstnameInput.ariaValueMin.trim().length < 3) {
                errors.push('Le prénom doit contenir au moins 3 caractères.');
                inputId = firstnameInput as HTMLElement;
                // Check if is more than 3 characters.
            } else if (isValidNames(firstnameInput?.ariaValueText) !== true) {
                errors.push('Veuillez saisir un prénom valide.');
                inputId = firstnameInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
    
            // Checker for 'phone' input
            if (phoneInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir un numéro de téléphone valide (ex. : +336XXXXXXXX)');
                inputId = phoneInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (phoneInput.ariaValueMin.trim().length < 13) {
                errors.push('Le numéro doit contenir au moins 12 chiffres et un signe +.');
                inputId = phoneInput as HTMLElement;
                // Check if is more than 3 characters.
            } else if (!isValidPhone(phoneInput?.ariaValueText)) {
                errors.push('Veuillez saisir un numéro de téléphone valide.');
                inputId = phoneInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
    
            // Checker for 'email' input
            if (emailInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir une adresse e-mail valide.');
                inputId = emailInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (!isValidEmail(emailInput?.ariaValueText)) {
                errors.push('Veuillez saisir une adresse e-mail valide.');
                inputId = emailInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
            
            // Checker for 'password' input
            if (passwordInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir un mot de passe valide.');
                inputId = passwordInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (passwordInput.ariaValueMin.trim().length < 8 && passwordInput?.ariaValueText?.trim().length > 16) {
                errors.push('Le mot de passe doit contenir entre 8 caractères et 16 caractères.');
                inputId = passwordInput as HTMLElement;
                // Check if is between 8 and 16 characters.
            } else if (!isValidPassword(passwordInput.ariaValueText)) {
                errors.push('Veuillez saisir un mot de passe valide.');
                inputId = emailInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
    
            // Checker for 'password-check' input
            if (passWcheckInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir un mot de passe valide.');
                inputId = passWcheckInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (passWcheckInput.ariaValueMin.trim().length < 8 && passwordInput?.ariaValueText?.trim().length > 16) {
                errors.push('Le mot de passe doit contenir entre 8 caractères et 16 caractères.');
                inputId = passwordInput as HTMLElement;
                // Check if is between 8 and 16 characters.
            } else if (passWcheckInput !== passwordInput) {
                errors.push('Les mots de passe saisi ne correspondent pas. Veuillez confirmer votre mot de passe.');
                inputId = passWcheckInput as HTMLElement;
                // Check similarity between both passwords imputs.
            }
    
            // Checker for 'nationality' input
            if (nationalityInput.ariaValueMax?.trim() === ''){
                errors.push('Veuillez saisir une nationalité valide.');
                inputId = nationalityInput as HTMLElement;
                // Check if input is empty and define error view message
            } else if (!isValidNationality(nationalityInput.ariaValueText)) {
                errors.push('Veuillez saisir une nationalité valide.');
                inputId = nationalityInput as HTMLElement;
                // Check with RegEx function and define error view message
            }
            
            // Manage errors
            if (errors.length > 0) {
                // breaks form sent
                event.preventDefault();
                // View of errors in front
                displayErrors(errors, inputId);
            }
        });
    
    
        // Function errors viewer
        function displayErrors(errors, inputId) {
            // Make a div
            const errorContainer = document.createElement('div');
            // add .error class to it
            errorContainer.classList.add('error');
    
            errors.forEach((error) => {
                // Make a paragraph text with <p> for any errors
                const errorMessage = document.createElement('p');
                errorMessage.textContent = error;
                errorContainer.appendChild(errorMessage);
            });
            // Show errors in the end of the form.
            inputId.appendChild(errorContainer);
        }
    }