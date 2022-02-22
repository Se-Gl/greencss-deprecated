describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('opens and closes modal', () => {
    cy.get('#linkedbutton').click().get('#modal-root').should('exist')
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search documentation')
    cy.get('#close-modal').click().get('#modal-root').should('not.be.visible')
  })
  it('open modal with F3 and close it with esc key', () => {
    cy.get('#linkedbutton')
      .trigger('keydown', { key: 'F3', code: 'F3', which: 114 })
      .get('#close-modal')
      .should('be.visible')
      .type('{esc}', { force: true })
      .get('#modal-root')
      .should('not.be.visible')
  })
  // it('search for a specific term', () => {
  //   cy.get('#linkedbutton').click().get('#modal-root').should('exist')
  //   cy.get('#search').type('mar')
  //   cy.get('#search-results').contains('2 Results', { matchCase: false })
  //   cy.get('#search-results div').first().click().url().should('be.equal', 'http://localhost:3000/blog/hello-world')
  // })
  it('renders the 3D phone', () => {
    cy.get('.threed-canvas div canvas').should('exist').should('be.visible')
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
    cy.get('#presentation').scrollIntoView().wait(1000).should('exist').should('be.visible')
    cy.get('#animated').should('exist').should('be.visible')
    cy.get('#production').should('exist').should('be.visible')
  })
  it('reveals supporters section with animation', () => {
    cy.get('#logo-1').should('exist').should('not.be.visible')
    cy.get('#logo-2').should('exist').should('not.be.visible')
    cy.get('#logo-3').should('exist').should('not.be.visible')
    cy.get('#logo-4').should('exist').should('not.be.visible')
    cy.get('#supporters').scrollIntoView().wait(1000)
    cy.get('#logo-1').should('exist').should('be.visible')
    cy.get('#logo-2').should('exist').should('be.visible')
    cy.get('#logo-3').should('exist').should('be.visible')
    cy.get('#logo-4').should('exist').should('be.visible')
  })
  it('render dummy blog post card', () => {
    cy.get('#recent-news').should('exist').scrollIntoView().wait(1000)
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
    cy.get('#testimonial').should('exist').scrollIntoView().wait(500).should('be.visible')
    cy.get('#creator-memoji-1')
      .should('exist')
      .should('be.visible')
      .should('have.attr', 'alt')
      .then((alttext) => {
        expect(alttext).contains('Severin Glaser - Memoji 1', { matchCase: false })
      })
  })
  it('render dummy doc section and cards', () => {
    cy.get('#service-section').should('exist').scrollIntoView().wait(1000)
    cy.get('#doc-1').contains('User Interface Design', { matchCase: false })
    cy.get('#doc-1 div div div svg').should('exist').should('be.visible')
  })
})
