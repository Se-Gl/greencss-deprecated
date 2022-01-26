describe('Animation Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animation')
  })
  it('renders the custom input select', () => {
    cy.get('#custom-dropdown').should('be.visible').should('exist')
  })
  it('show all animations and display chevron icon correctly', () => {
    cy.get('#chevron-down').should('be.visible').should('exist')
    cy.get('#custom-dropdown').click()
    // cy.get('#custom-dropdown div li').should('have.length', 27)
    cy.get('#chevron-up').should('be.visible').should('exist')
  })
  it('clicks the second animation', () => {
    cy.get('#animation-jump').should('exist').should('be.visible')
    cy.get('#custom-dropdown').click().get('.absolute > :nth-child(2)').click()
    cy.get('#animation-flash').should('exist').should('be.visible')
    cy.get('code').contains('flash duration-1000ms', { matchCase: false })
  })
  it('clicks the second duration', () => {
    cy.get('#custom-time-dropdown').click().get('.absolute > :nth-child(2)').click()
    cy.get('code').should('exist').should('be.visible').contains('jump duration-200ms', { matchCase: false })
  })
  it('re-run an animation', () => {
    cy.get('#custom-dropdown').click().get('.absolute > :nth-child(3)').click()
    cy.get('#custom-time-dropdown').click().get('.absolute > :nth-child(5)').click()
    cy.get('code').should('exist').should('be.visible').contains('poke-top duration-500ms', { matchCase: false })
    cy.get('#animate-button').click()
    cy.get('#animation-poke-top').should('have.class', 'poke-top duration-500ms')
    cy.wait(5000)
    cy.get('#animation-poke-top')
      .should('have.class', 'mx-auto my-50px w-50px min-h-54px bg-purple z-3')
      .and('not.have.class', 'poke-top duration-500ms')
  })
})
