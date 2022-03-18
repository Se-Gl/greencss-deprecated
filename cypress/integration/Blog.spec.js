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
})

describe('Verify ElementRenderer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/blog/omencss-animations')
  })
  it('renders the header with its id', () => {
    cy.get('h2')
      .eq(1)
      .should('be.visible')
      .should('exist')
      .contains('Staggering animations', { matchCase: false })
      .invoke('attr', 'id')
      .should('equal', 'staggering-animations')
  })
  it('clicks the first link in the blog and redirects', () => {
    cy.get(':nth-child(13) > a').should('exist').click()
    cy.url().should('be.equal', 'http://localhost:3000/docs/animation/example')
  })
  it('checks if code is being rendered', () => {
    cy.get('pre').should('exist')
    cy.get('code').should('exist').should('be.visible').invoke('attr', 'class').should('equal', 'language-js')
  })
})
