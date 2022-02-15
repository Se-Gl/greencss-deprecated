describe('Blog Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/blog/')
  })
  it('renders the header', () => {
    cy.get('h1')
      .should('be.visible')
      .should('exist')
      .contains('A Blog - the right way to tell a story', { matchCase: false })
  })
  it('click buttons and redirect to slug page', () => {
    cy.get('#button-hello-world').click().wait(2000)
    cy.url().should('be.equal', 'http://localhost:3000/blog/hello-world')
  })
  it('renders slug page header on the hello world page', () => {
    cy.get('#blog-hello-world').should('be.visible').should('exist').contains('Hello World!', { matchCase: false })
  })
})
