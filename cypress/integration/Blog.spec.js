describe('Blog Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/blog/')
  })
  it('renders the header', () => {
    cy.get('h1')
      .should('be.visible')
      .should('exist')
      .contains('A Blog - the right way to write a story', { matchCase: false })
  })
  it('renders the illustration', () => {
    cy.get('#blog-hero-illustration').should('be.visible').should('exist')
  })
  it('click first button and redirect to slug page', () => {
    cy.get('#blog-card').eq(0).click()
    cy.url().should('not.be.equal', 'http://localhost:3000/blog/')
  })
  it('renders first slug page header on the hello world page', () => {
    cy.get('#blog-card').eq(0).should('be.visible').should('exist')
  })
})

describe('Check if an individual header ID exists', () => {
  before(() => {
    cy.visit('http://localhost:3000/blog/what-is-omencss')
  })
  it('renders the header with its id', () => {
    cy.get('h2')
      .eq(1)
      .should('be.visible')
      .should('exist')
      .contains('What exactly is omenCSS?', { matchCase: false })
      .invoke('attr', 'id')
      .should('equal', 'what-exactly-is-omencss-')
  })
})
