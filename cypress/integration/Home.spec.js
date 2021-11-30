describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the logo', () => {
    cy.get('.logo').contains('img')
    cy.get('#logo').should('have.attr', 'alt').should('not.be.empty').and('contain', 'OmenCSS Logo')
  })
  it('renders the header', () => {
    cy.get('.center h1').contains('Writing CSS reimagined', { matchCase: false })
  })
  it('shows animated bubbles', () => {
    cy.get('.bubbles .bubble').should('be.visible')
  })
})
