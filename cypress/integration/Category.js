describe('Category Index Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs')
  })
  it('renders the sidebar, hide it on medium and small screens', () => {
    cy.get('#sidebar').should('be.visible').should('exist')
    cy.viewport(320, 768)
    cy.get('#sidebar').should('not.be.visible')
  })
  it('sidebar has a purple left border if the page matches the path', () => {
    cy.visit('http://localhost:3000/docs/category/animation')
    cy.get('#sidebar ul div li a')
      .eq(0)
      .contains('Animation', { matchCase: false })
      .should('have.class', 'border-left-1px border-solid border-purple')
    cy.get('#sidebar ul li a').eq(1).should('not.have.class', 'border-left-1px border-solid border-purple')
  })
})
