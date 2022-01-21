describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the logo', () => {
    cy.get('#omenCSS_logo').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('Writing CSS reimagined', { matchCase: false })
  })
  it('shows animated bubbles', () => {
    cy.get('.bubbles').should('exist')
  })
  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('not.exist')
  })
})
