describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/brand')
  })
  it('renders the animation index page', () => {
    cy.get('#brand-intro')
      .should('be.visible')
      .should('exist')
      .contains('A Brand Book - the right way to get to know a story', { matchCase: false })
  })
  it('click buttons and redirect forwards', () => {
    cy.get('#brand-redirect-Logo').click()
    cy.url().should('be.equal', 'http://localhost:3000/brand/logo')
  })
  it('renders the handcrafted svg', () => {
    cy.get('#brandbook-svg').should('be.visible').should('exist')
  })
})
