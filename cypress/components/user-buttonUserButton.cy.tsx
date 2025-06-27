import React from 'react'
import { UserButton } from '../../app/ui/components/user-button'

describe('<UserButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserButton />)
  })
})