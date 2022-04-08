describe('Search Screen Unit test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/search?q=')
    cy.fixture('example.json')
    cy.visit('http://localhost:3000')
  })
  it('opens and closes modal', () => {
    cy.get('#modal-search').click({ force: true }).get('#modal-root').should('exist')
    cy.get('#search').invoke('attr', 'placeholder').should('contain', 'Search documentation')
    cy.get('#close-modal').click({ force: true }).get('#modal-root').should('not.be.visible')
  })
  it('open modal with F3 and close it with esc key', () => {
    cy.get('body')
      .trigger('keydown', { key: 'F3', code: 'F3', which: 114, force: true })
      .get('#close-modal')
      .should('be.visible')
    cy.get('body').type('{esc}').get('#modal-root').should('not.be.visible')
  })
  it('search for a specific term', () => {
    cy.get('#modal-search').click({ force: true }).get('#modal-root').should('exist')
    cy.get('#search').type('margin-left')
    cy.get('#search-results').contains('margin side', { matchCase: false })
    cy.get('#search').clear().type('margin-left')
    cy.get('#search-results div').first().click()
  })
})
