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
    cy.get('#blog-card').eq(0).click({ force: true })
    cy.url().should('not.be.equal', 'http://localhost:3000/blog/')
  })
})

describe('Verify Single Blog Post', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog/greencss-animations')
  })
  it('renders the header with its id', () => {
    cy.get('#blog-greencss-animations')
      .should('be.visible')
      .should('exist')
      .contains('How to stagger CSS animations', { matchCase: false })
  })
  it('clicks the first link in the toc and redirects', () => {
    cy.get('#toc')
      .should('exist')
      .contains('How to stagger CSS animations ', { matchCase: false })
      .click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/blog/greencss-animations#how-to-stagger-css-animations')
  })
  it('checks if code is being rendered', () => {
    cy.get('pre').should('exist')
    cy.get('code').should('exist').should('be.visible').invoke('attr', 'class').should('equal', 'language-js')
  })
  it('checks if author information are being rendered', () => {
    cy.get('#blog-author').should('exist').should('not.be.empty')
    cy.get('#blog-created').should('exist').should('not.be.empty')
    cy.get('#blog-readingtime').should('exist').should('not.be.empty').contains('min read', { matchCase: false })
  })
})
