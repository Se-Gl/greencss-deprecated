describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the 3D phone', () => {
    cy.get('.threed-canvas div canvas').should('exist').should('be.visible')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('A classy way to write CSS design', { matchCase: false })
  })

  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
  it('renders the linkedbutton', () => {
    cy.get('#linkedbutton').should('be.visible').should('exist')
    cy.get('#linkedbutton').trigger('mouseover', { force: true })
  })
  it('reveals presentation section with animation', () => {
    cy.get('#presentation').should('exist')
    cy.get('#competitive').should('exist')
    cy.get('#animated').should('exist')
    cy.get('#responsive').should('exist')
  })
  it('reveals faq section', () => {
    cy.get('#faq').should('exist').contains('There’s more to know about greenCSS', { matchCase: false })
  })
  it('render dummy blog post card', () => {
    cy.get('#recent-news').should('exist').scrollIntoView()
    cy.get('#blog-card').should('exist').should('exist').should('have.attr', 'style')
  })
  it('render the testimonial section', () => {
    cy.get('#testimonial').should('exist')
  })
  it('renders newsletter section aand creates a request', () => {
    cy.get('#newsletter').should('exist').scrollIntoView().should('be.visible')
    cy.get('#newsletter h2').contains('There’s more than being up-to-date', { matchCase: false })
  })
})
