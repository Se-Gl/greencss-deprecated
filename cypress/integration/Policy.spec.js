describe('Privacy Policy Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/privacy/privacy-policy')
  })
  it('renders the page', () => {
    cy.get('#privacy-policy').should('be.visible').should('exist').contains('Privacy Policy', { matchCase: false })
    cy.get('svg').should('be.visible').should('exist')
  })
})
describe('Cookie Policy Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/privacy/cookies')
  })
  it('renders the page', () => {
    cy.get('#cookie-policy').should('be.visible').should('exist').contains('delete cookies', { matchCase: false })
    cy.get('svg').should('be.visible').should('exist')
  })
})
describe('Legal Policy Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/privacy/legal')
  })
  it('renders the page', () => {
    cy.get('#legal-policy').should('be.visible').should('exist').contains('imprint', { matchCase: false })
    cy.get('svg').should('be.visible').should('exist')
  })
})
