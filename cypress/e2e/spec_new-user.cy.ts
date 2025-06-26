describe('New User', () => {
  it('access to create new user account page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
  })

  it('check if the form is displayed', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').should('be.visible');
  })

  it('check if the form is valid at first', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').should('not.have.class', 'border-red-500');
  })

  it('fill in the form to create a new user account', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').within(() => {
      cy.get('#surname').type('DE COUBERTIN');
      cy.get('#firstname').type('Pierre');
      cy.get('#phone').type('0123456789');
      cy.get('#email').type('decoubertin@emailcom');
      cy.get('#password').type('password123');
      cy.get('#confirm-password').type('password123');
      cy.get('#nationality').select('fr');
    }) 
  })

  it('empty the form', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').within(() => {
      cy.get('#surname').clear();
      cy.get('#firstname').clear();
      cy.get('#phone').clear();
      cy.get('#email').clear();
      cy.get('#password').clear();
      cy.get('#confirm-password').clear();
      cy.get('#nationality').clear();
    })
  })

  it('submit form without informations', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').should('exist');
    cy.get('#new-user-form').within(() => {
      cy.get('#surname').should('have.value', '');
      cy.get('#firstname').should('have.value', '');
      cy.get('#phone').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#password').should('have.value', '');
      cy.get('#confirm-password').should('have.value', '');
      cy.get('#nationality').should('have.value', '');
      cy.get('#send-form-user').click();
      // Check if the page does not change
      cy.url().should('include', '/auth/signup');
    })
  })
  
  it('check if the form has errors', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').within(() => {
      cy.get('#surname-error').should('exist');
      cy.get('#firstname-error').should('exist');
      cy.get('#phone-error').should('exist');
      cy.get('#email-error').should('exist');
      cy.get('#password-error').should('exist');
      cy.get('#confirm-password-error').should('exist');
      cy.get('#nationality-error').should('exist');
      cy.get('#send-form-user').should('be.disabled');
    })
  })

  it('check if the form is submitted and redirect', () => {
   cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#new-user-form').within(() => {
      cy.get('#surname').type('DE COUBERTIN');
      cy.get('#firstname').type('Pierre');
      cy.get('#phone').type('0123456789');
      cy.get('#email').type('decoubertin@emailcom');
      cy.get('#password').type('password123');
      cy.get('#confirm-password').type('password123');
      cy.get('#nationality').type('fr');
      // Submit the form
      cy.get('#send-form-user').click();
      // Check if the form is submitted and the user is redirected
      cy.url().should('include', '/signup/success');
    })
  })
  
  it('check if the user is logged in', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#link-new-user').click();
    cy.get('#user-button-container > .flex').should('contain', 'Pierre DE COUBERTIN');
  })
})
