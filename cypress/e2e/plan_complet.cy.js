describe('Application Paris 2024 - Plan de test complet', () => {
  // --- Authentification ---
  describe('Inscription nouvel utilisateur', () => {
    it('Affiche le formulaire d\'inscription', () => {
      cy.visit('/');
      cy.get('#user-button-container > .flex').click();
      cy.get('#link-new-user').click();
      cy.get('#new-user-form').should('exist');
    });

    it('Bloque la soumission si tous les champs sont vides', () => {
      cy.get('#send-form-user').click();
      cy.get('#new-user-form').should('exist');
      cy.get('#surname-error').should('exist');
      cy.get('#firstname-error').should('exist');
      cy.get('#email-error').should('exist');
      cy.get('#password-error').should('exist');
      cy.get('#confirm-password-error').should('exist');
    });

    it('Affiche des erreurs si le format des champs est incorrect', () => {
      cy.get('#surname').type('X');
      cy.get('#email').type('not-an-email');
      cy.get('#send-form-user').click();
      cy.get('#surname-error').should('exist');
      cy.get('#email-error').should('exist');
    });

    it('Permet la création d\'un utilisateur valide', () => {
      cy.get('#surname').clear().type('DE COUBERTIN');
      cy.get('#firstname').clear().type('Pierre');
      cy.get('#phone').clear().type('0123456789');
      cy.get('#email').clear().type('decoubertin@email.com');
      cy.get('#password').clear().type('password123');
      cy.get('#confirm-password').clear().type('password123');
      cy.get('#nationality').select('fr');
      cy.get('#send-form-user').click();
      // Vérifie la redirection ou un message de succès
      cy.url().should('not.include', '/auth/signup');
    });
  });

  // --- Connexion ---
  describe('Connexion utilisateur', () => {
    it('Affiche le formulaire de connexion', () => {
      cy.visit('/');
      cy.get('#user-button-container > .flex').click();
      cy.get('#signin-form').should('be.visible');
    });

    it('Bloque la soumission si champs vides', () => {
      cy.get('#email').clear();
      cy.get('#password').clear();
      cy.get('.btn-submit').click();
      cy.get('#signin-form').should('exist');
      cy.get('#email-error').should('exist');
      cy.get('#password-error').should('exist');
    });

    it('Affiche des erreurs si mauvais format', () => {
      cy.get('#email').type('invalid-email');
      cy.get('#password').type('short');
      cy.get('.btn-submit').click();
      cy.get('#email-error').should('exist');
      cy.get('#password-error').should('exist');
    });

    it('Connexion réussie redirige vers l\'accueil', () => {
      cy.get('#email').clear().type('decoubertin@email.com');
      cy.get('#password').clear().type('password123');
      cy.get('.btn-submit').click();
      cy.url().should('include', '/');
    });
  });

  // --- Panier ---
  describe('Gestion du panier', () => {
    it('Affiche le panier vide', () => {
      cy.get('.btn-user').click();
      cy.get('.menu-cart-notif').should('contain', '0');
      cy.get('.btn-user').click(); // Ouvre la modale panier
      cy.get('.text-center').should('contain', 'PANIER');
      cy.get('.text-gray-700').should('contain', 'Votre panier est vide');
    });

    it('Ajoute un ticket au panier', () => {
      cy.visit('/sports-events');
      cy.get('.sport-card').first().within(() => {
        cy.get('.cta-btn').click();
      });
      cy.get('.btn-user').click();
      cy.get('.border-b').should('exist');
      cy.get('.cart-notif').should('not.contain', '0');
    });

    it('Incrémente et décrémente la quantité', () => {
      cy.get('.btn-user').click();
      cy.get('.border-b').within(() => {
        cy.get('button').contains('+').click();
        cy.get('span.font-bold').first().should('not.contain', '1');
        cy.get('button').contains('-').click();
        cy.get('span.font-bold').first().should('contain', '1');
      });
    });

    it('Supprime un ticket du panier', () => {
      cy.get('.btn-user').click();
      cy.get('.border-b').within(() => {
        cy.get('button').contains('svg').click(); // TrashIcon
      });
      cy.get('.text-gray-700').should('contain', 'Votre panier est vide');
    });
  });

  // --- Navigation principale ---
  describe('Navigation', () => {
    it('Accède à la page des événements sportifs', () => {
      cy.get('nav').contains('Événements').click();
      cy.url().should('include', '/sports-events');
    });

    it('Accède à la page panier', () => {
      cy.get('.btn-user').click();
      cy.get('button').contains('Voir le détail').click();
      cy.url().should('include', '/cart');
    });

    it('Accède à la page paiement', () => {
      cy.get('.btn-user').click();
      cy.get('button').contains('Payer').click();
      cy.url().should('include', '/payment');
    });
  });
});