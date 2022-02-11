describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog/')
  })
  it('renders the header', () => {
    cy.get('h1')
      .should('be.visible')
      .should('exist')
      .contains('A Blog - the right way to tell a story', { matchCase: false })
  })
  it('click buttons and redirect to slug page', () => {
    cy.get('#button-hello-world').click()
    cy.url().should('be.equal', 'http://localhost:3000/blog/hello-world')
  })
  it('renders slug page header', () => {
    cy.visit('http://localhost:3000/blog/hello-world')
    cy.get('#blog-hello-world').should('be.visible').should('exist').contains('Hello World!', { matchCase: false })
  })
})
