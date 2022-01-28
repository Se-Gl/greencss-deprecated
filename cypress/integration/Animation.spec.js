describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animation')
  })
  it('renders the first react select input', () => {
    cy.get('#animate').should('be.visible').should('exist')
  })
  it('search input should be clickable and include the default values', () => {
    cy.get('#animate').click()
    cy.get('.monospace')
      .should('be.visible')
      .should('exist')
      .contains('jump animate animation-forwards', { matchCase: false })
  })
})
