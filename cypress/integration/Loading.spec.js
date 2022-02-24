describe('Loading Component Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders the progress bar', () => {
    cy.get('#progress-loader')
      .should('not.be.visible')
      .should('exist')
      .get('#button-hello-world')
      .click()
      .get('#progress-loader')
      .wait(1000)
      .should('be.visible')
      .should('exist')
  })
})
