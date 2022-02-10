describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('hover hero image', () => {
    cy.get('#heroimage').should('be.visible').should('exist').trigger('mousemove', 50, 50)
    cy.get('#heroimage-hand').should('have.attr', 'style')
  })
  it('renders the logo', () => {
    cy.get('#omenCSS_logo').should('be.visible').should('exist')
  })
  it('renders the header', () => {
    cy.get('main div h1').contains('A classy way to write CSS design', { matchCase: false })
  })
  it('shows animated bubbles', () => {
    cy.get('.bubbles').should('exist')
  })
  it('includes layout component', () => {
    cy.get('nav').should('exist')
    cy.get('main .container').should('exist')
  })
  it('renders the linkedbutton', () => {
    cy.get('#linkedbutton').should('be.visible').should('exist')
    cy.get('#linkedbutton').trigger('mouseover')
  })
  it('reveals presentation section with animation', () => {
    cy.get('#presentation').should('exist')
    cy.get('#production').should('exist')
    cy.get('#animated').should('exist')
    cy.get('#responsive').should('exist')
    cy.get('#presentation').scrollIntoView({ duration: 2000 })
    cy.get('#production').should('exist').should('be.visible')
    cy.get('#animated').should('exist').should('be.visible')
    cy.get('#production').should('exist').should('be.visible')
  })
  it('reveals supporters section with animation', () => {
    cy.get('#logo-1').should('exist').should('not.be.visible')
    cy.get('#logo-2').should('exist').should('not.be.visible')
    cy.get('#logo-3').should('exist').should('not.be.visible')
    cy.get('#logo-4').should('exist').should('not.be.visible')
    cy.get('#supporters').scrollIntoView({ duration: 2000 })
    cy.get('#logo-1').should('exist').should('be.visible')
    cy.get('#logo-2').should('exist').should('be.visible')
    cy.get('#logo-3').should('exist').should('be.visible')
    cy.get('#logo-4').should('exist').should('be.visible')
  })
  it('render dummy blog post card', () => {
    cy.get('#recent-news').should('exist').scrollIntoView({ duration: 2000 })
    cy.get('#hello-world').should('exist')
    cy.get('#bg-image-hello-world')
      .should('exist')
      .should('have.attr', 'style')
      .and(
        'include',
        'https://res.cloudinary.com/omencss/image/upload/v1644523509/blog/plant_iex1jv.jpg',
        'rgb(164, 172, 41)'
      )
  })
  it('render the testimonial section', () => {
    cy.get('#testimonial').should('exist').scrollIntoView({ duration: 2000 }).should('be.visible')
    cy.get('#creator-memoji-1')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'alt')
      .then((alttext) => {
        expect(alttext).contains('Severin Glaser - Memoji 1', { matchCase: false })
      })
  })
  it('render dummy doc section and cards', () => {
    cy.get('#service-section').should('exist').scrollIntoView({ duration: 2000 })
    cy.get('#doc-1').contains('User Interface Design', { matchCase: false })
    cy.get('#doc-1 div div div svg').should('exist')
  })
})
