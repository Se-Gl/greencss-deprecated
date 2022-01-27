describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animation')
  })
  it('renders the first react select input', () => {
    cy.get(
      ':nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-319lph-ValueContainer > .css-6j8wv5-Input'
    )
      .should('be.visible')
      .should('exist')
  })
  it('search input should be clickable and include the default values', () => {
    cy.get(
      ':nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-319lph-ValueContainer > .css-6j8wv5-Input'
    ).click()
    cy.get('.monospace')
      .should('be.visible')
      .should('exist')
      .contains('jump duration-1000ms animation-forwards', { matchCase: false })
  })
})
