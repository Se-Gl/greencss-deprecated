describe('Home Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/editor')
  })
  it('renders the loader', () => {
    cy.get('#loader').should('not.exist')
    cy.get('#markdowneditor').should('exist')
  })
  it('add dummy text', () => {
    cy.get('.w-md-editor-text-input').type('# test title')
    cy.get('#user-content-test-title').should('exist')
  })
  it('press button and download file', () => {
    cy.get('#saveMD').should('exist').click()
  })
})