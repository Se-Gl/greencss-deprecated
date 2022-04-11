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
    cy.visit('http://localhost:3000/docs/category/activate')
  })
  it('renders the dynamic section', () => {
    cy.get('#activate-basic-usage').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('h1').should('be.visible').should('exist').contains('Browse by category: activate', { matchCase: false })
  })
  it('renders the illustration', () => {
    cy.get('#subdocs-hero-illustration').should('be.visible').should('exist')
  })
})

describe('Render slug elements', () => {
  before(() => {
    cy.visit('http://localhost:3000/docs/activate-basic-usage')
  })
  it('copies to clipboard', () => {
    cy.window((window) => {
      if (navigator?.clipboard?.write) {
        cy.get('#copy-to-clipboard').eq(0).click()
        cy.window().its('navigator.clipboard').invoke('readText').should('not.be.empty')
      }
    })
  })
  it('check if toc exists', () => {
    cy.get('#toc').should('be.visible').should('exist').contains('Table of contents', { matchCase: false })
  })
})
