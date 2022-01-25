describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/animation')
  })
  it('renders the custom input select', () => {
    cy.get('#custom-dropdown').should('be.visible').should('exist')
  })
  it('show all animations', () => {
    cy.get('#custom-dropdown').click()
  })
  it('clicks the first animation', () => {
    cy.get('#animation-jump').should('exist').should('be.visible')
    cy.get('#custom-dropdown').click().get('.absolute > :nth-child(2)').click()
    cy.get('#animation-flash').should('exist').should('be.visible')
  })
})
