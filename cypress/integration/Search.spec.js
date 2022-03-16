describe('Search Screen Unit test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/search?q=')
    cy.fixture('example.json')
    cy.visit('http://localhost:3000')
  })
  it('opens and closes modal', () => {
    cy.get('#linkedbutton').click().get('#modal-root').should('exist')
    cy.get('#search').invoke('attr', 'placeholder').should('contain', 'Search documentation')
    cy.get('#close-modal').click().get('#modal-root').should('not.be.visible')
  })
  it('open modal with F3 and close it with esc key', () => {
    cy.get('#linkedbutton')
      .trigger('keydown', { key: 'F3', code: 'F3', which: 114 })
      .get('#close-modal')
      .should('be.visible')
      .type('{esc}', { force: true })
      .get('#modal-root')
      .should('not.be.visible')
  })
  // it('search for a specific term', () => {
  //   cy.get('#linkedbutton').click().get('#modal-root').should('exist')
  //   cy.get('#search').type('hello world 2')
  //   cy.get('#search-results').contains('Result', { matchCase: false })
  //   cy.get('#search').clear().type('hello world')
  //   cy.get('#search-results').contains('Results', { matchCase: false })
  //   cy.get('#search-results div').first().click().url().should('be.equal', 'http://localhost:3000/docs/test2')
  // })
})
