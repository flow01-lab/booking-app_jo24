import React from 'react'
import CartModal from './cart-modal'

describe('<CartModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CartModal />)
  })
})