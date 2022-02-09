describe('Editor Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/editor')
    cy.exec('rm -f cypress/downloads/*', { log: true, failOnNonZeroExit: false })
  })
  it('add dummy text', () => {
    cy.get('.w-md-editor-text-input').type('# test title')
    cy.get('#user-content-test-title').should('exist')
  })
  it('download button exists and opens myFile.md when clicked', () => {
    cy.get('#saveMD').should('exist').click().wait(2000)
    cy.readFile('cypress/downloads/myFile.md').should('exist')
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
