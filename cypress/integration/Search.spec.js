describe('Search Screen Unit test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/search?q=')
    cy.fixture('example.json')
    cy.visit('http://localhost:3000')
  })
  it('opens and closes modal', () => {
    cy.get('#modalbutton').click({ force: true }).get('#modal-root').should('exist')
    cy.get('#search').invoke('attr', 'placeholder').should('contain', 'Search documentation')
    cy.get('#close-modal').click({ force: true }).get('#modal-root').should('not.be.visible')
  })
  it('open modal with F3 and close it with esc key', () => {
    cy.get('#modalbutton')
      .trigger('keydown', { key: 'F3', code: 'F3', which: 114 }, { force: true })
      .get('#close-modal')
      .should('be.visible')
      .type('{esc}', { force: true })
      .get('#modal-root')
      .should('not.be.visible')
  })
  it('search for a specific term', () => {
    cy.get('#modalbutton').click().get('#modal-root').should('exist')
    cy.get('#search').type('margin-left')
    cy.get('#search-results').contains('margin side', { matchCase: false })
    cy.get('#search').clear().type('margin-left')
    cy.get('#search-results div').first().click()
  })
})
