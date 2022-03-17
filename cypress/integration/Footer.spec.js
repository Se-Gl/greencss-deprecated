describe('Footer Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders the footer component', () => {
    cy.get('#footer')
      .scrollIntoView()
      .should('exist')
      .should('be.visible')
      .find('svg')
      .should('exist')
      .should('be.visible')
  })
  it('clicks link and redirect to page top', () => {
    cy.get('#footer').find('svg').click()
    cy.url().should('be.equal', 'http://localhost:3000/')
    cy.window().its('scrollY').should('equal', 0)
  })
})
