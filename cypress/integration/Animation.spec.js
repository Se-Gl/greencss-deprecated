describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/docs/animation')
  })
  it('renders the animation index page', () => {
    cy.get('#animation-main')
      .should('be.visible')
      .should('exist')
      .contains('Handmade, crafted animations', { matchCase: false })
  })
  it('click buttons and redirect forwards and back', () => {
    cy.get('#visit-animation-examples-1').click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/docs/animation/example')
    cy.get('#back-button').click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/docs/animation')
  })
  it('renders the handcrafted svg', () => {
    cy.get('#handcrafted-svg').should('be.visible').should('exist')
  })
})

describe('Animation Example Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/docs/animation/example')
  })
  it('renders the first react select input', () => {
    cy.get('#animate').should('be.visible').should('exist')
  })
  it('search input should be clickable and include the default values', () => {
    cy.get('#animate').click({ force: true })
    cy.get('.monospace')
      .should('be.visible')
      .should('exist')
      .contains('jump animate animation-forwards', { matchCase: false })
  })
  it('click button and show animation', () => {
    cy.get('#animate-button')
      .should('be.visible')
      .should('exist')
      .click({ force: true })
      .get('#animation-jump')
      .should('have.class', 'jump animate animation-forwards')
  })
  // it('change animation (animation name, duration and type)', () => {
  //   cy.get('#enter-animation').type('flash {enter}', { force: true })
  //   cy.get('#animation-flash').should('exist')
  //   cy.get('#enter-timeduration').type('1.1 {enter}', { force: true })
  //   cy.get('.monospace').contains('flash animation-duration-1100ms animation-forwards', { matchCase: false })
  //   cy.get('#enter-animationtype').type('in {enter}', { force: true })
  //   cy.get('.monospace').contains('flash animation-duration-1100ms animation-infinite', { matchCase: false })
  // })
})
