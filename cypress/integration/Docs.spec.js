describe('Docs Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/docs')
  })
  it('renders the index page', () => {
    cy.get('#docs-index')
      .should('be.visible')
      .should('exist')
      .contains('Docs - the right way to get to know the system', { matchCase: false })
  })
  it('renders the illustration', () => {
    cy.get('#docs-hero-illustration').should('be.visible').should('exist')
  })
})

describe('Individual Docs Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs/category/animation')
  })
  it('renders the dynamic section', () => {
    cy.get('#category-animation').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('h1').should('be.visible').should('exist').contains('Browse by category: animation', { matchCase: false })
  })
  it('renders the illustration', () => {
    cy.get('#subdocs-hero-illustration').should('be.visible').should('exist')
  })
})

describe('Render Table of Contents', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs/test5')
  })
  it('check if toc exists', () => {
    cy.get('#toc').should('be.visible').should('exist').contains('Table of contents', { matchCase: false })
  })
})
