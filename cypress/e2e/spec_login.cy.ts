describe('Logg In User', () => {
  it('access to login page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
  })

  it('check if the login form is displayed', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').should('be.visible');
  })

  it('check if the login form is valid at first', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').should('not.have.class', 'border-red-500');
  })
  it('check if the login form has the correct fields', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').should('exist');
      cy.get('#password').should('exist');
      cy.get('.btn-submit').should('exist');
    })
  })

  it('fill in the login form', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').type('decoubertin@emailcom');
      cy.get('#password').type('password123');
    }) 
  })
  
  it('empty the login form', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').clear();
      cy.get('#password').clear();
    })
  })

  it('submit login form without informations', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').should('exist');
    cy.get('#signin-form').within(() => {
      cy.get('#email').should('have.value', '');
      cy.get('#password').should('have.value', '');
      cy.get('.btn-submit').click();
    })
  })

  it('check if the login form is submitted successfully', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').type('decoubertin@emailcom');
      cy.get('#password').type('password123');
      cy.get('.btn-submit').click();
    }) 
  })

  it('check if the login form has errors', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').type('invalid-email');
      cy.get('#password').type('short');
      cy.get('.btn-submit').click();
      cy.get('#email-error').should('exist');
      cy.get('#password-error').should('exist');
    })
  })

  it.only('check if the page redirects to the home page after successful login', () => {
    cy.visit('http://localhost:3000')
    cy.get('#user-button-container > .flex').click();
    cy.get('#signin-form').within(() => {
      cy.get('#email').type('decoubertin@emailcom');
      cy.get('#password').type('password123');
      cy.get('.btn-submit').click();
    }) 
    cy.url().should('include', '/');
  })
})