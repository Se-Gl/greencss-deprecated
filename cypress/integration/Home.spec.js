describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the phone image', () => {
    cy.get('#phone-image').should('exist')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('A classy way to write sustainable CSS', { matchCase: false })
  })
  it('renders the correct time in the phone', () => {
    cy.get('#phone-current-time').should('exist', 'not.be.empty')
  })

  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
  it('renders the linkedbutton', () => {
    cy.get('#linkedbutton').should('exist')
    cy.get('#linkedbutton').trigger('mouseover', { force: true })
  })
  it('reveals presentation section with animation', () => {
    cy.get('#presentation').should('exist')
    // cy.get('#competitive').should('exist')
    // cy.get('#animated').should('exist')
    // cy.get('#responsive').should('exist')
  })
  it('reveals service section', () => {
    cy.get('#service').should('exist')
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
})
