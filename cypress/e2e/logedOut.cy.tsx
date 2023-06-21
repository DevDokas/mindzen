/// <reference types="cypress" />

describe('Testing', () => {
  it('Should test if the application are rendering', () => {
    cy.visit('http://localhost:19000')
    cy.get("cy.get('.r-fontSize-s67bdx')").should('contain', 'Seja bem vindo!')
  })
})
