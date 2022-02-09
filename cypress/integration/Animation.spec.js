describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animation')
  })
  it('renders the first react select input', () => {
    cy.get('#animate').should('be.visible').should('exist')
  })
  it('search input should be clickable and include the default values', () => {
    cy.get('#animate').click()
    cy.get('.monospace')
      .should('be.visible')
      .should('exist')
      .contains('jump animate animation-forwards', { matchCase: false })
  })
  it('click button and show animation', () => {
    cy.get('#animate-button')
      .should('be.visible')
      .should('exist')
      .click()
      .get('#animation-jump')
      .should('have.class', 'jump animate animation-forwards')
      .wait(1000)
      .should('not.have.class', 'jump animate animation-forwards')
  })
  it('change animation (animation name, duration and type)', () => {
    cy.get('#enter-animation').type('flash {enter}')
    cy.get('#animation-flash').should('exist')
    cy.get('#enter-timeduration').type('1.1 {enter}')
    cy.get('.monospace').contains('flash animation-duration-1100ms animation-forwards', { matchCase: false })
    cy.get('#enter-animationtype').type('in {enter}')
    cy.get('.monospace').contains('flash animation-duration-1100ms animation-infinite', { matchCase: false })
  })
})
