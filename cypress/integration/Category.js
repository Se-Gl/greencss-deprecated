describe('Blog Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs/category/animation')
  })
  it('renders the dynamic section', () => {
    cy.get('#category-animation').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('h1').should('be.visible').should('exist').contains('Browse by category: animation', { matchCase: false })
  })
})
