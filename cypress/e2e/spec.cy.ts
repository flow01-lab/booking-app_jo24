describe('My First Test', () => {
  it('Visits the Kitchen Sink and click link', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify the value
    cy.get('.action-email').type('fake@email.com')

    // Verify the value has been updated
    cy.get('.action-email')
      .should('have.value', 'fake@email.com')
  })
})