describe('Loading Component Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders the progress bar', () => {
    cy.get('#progress-loader')
      .should('not.be.visible')
      .should('exist')
      .get('#blog-card')
      .eq(0)
      .click()
      .get('#progress-loader')
      .should('exist')
  })
})
