/// <reference types="Cypress" />

describe('<App /> component', () => {
  it('renders the homepage', () => {
    cy.visit('/')
  })

  it('has a navigation bar to navigate between sites', () => {
    cy.get('[data-testid=home]').should('exist')
    cy.get('[data-testid=inspiration]').should('exist')
    cy.get('[data-testid=voting]').should('exist')
  })

  it('shows the inspiration page when clicking the respective nav-button', () => {
    cy.get('[data-testid=inspiration]').click()
  })

  it('shows the voting page when clicking the respective nav-button', () => {
    cy.get('[data-testid=voting]').click()
  })
})
