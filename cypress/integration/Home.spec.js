describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the logo', () => {
    cy.get('nav div').contains('img')
    cy.get('#logo').should('have.attr', 'alt').should('not.be.empty').and('contain', 'OmenCSS Logo')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('Writing CSS reimagined', { matchCase: false })
  })
  it('shows animated bubbles', () => {
    cy.get('.bubbles .bubble').should('be.visible')
  })
  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('not.exist')
  })
})
