describe('Editor Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/editor')
  })
  it('add dummy text', () => {
    cy.get('.w-md-editor-text-input').type('# test title')
    cy.get('#user-content-test-title').should('exist')
  })
  it('download button exists', () => {
    cy.get('#saveMD').should('exist')
  })
  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
})

describe('Testing the loader', () => {
  it('Check if loader appears', () => {
    cy.visit('http://localhost:3000/editor')
    cy.intercept('http://localhost:3000/editor', () => {
      return Cypress.Promise.delay(5000).cy.get('#loader').should('be.visible')
    })
    cy.get('#loader').should('not.exist')
    cy.get('#markdowneditor').should('exist')
  })
})
