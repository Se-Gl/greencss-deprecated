describe('Home Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the logo', () => {
    cy.get('.hero nav').contains('img')
    cy.get('#logo') // sets <a> as the subject
      .should('have.attr', 'alt') // changes subject to href attribute
      .should('not.be.empty') // now test the href
      .and('contain', 'OmenCSS Logo')
  })
  it('renders the header', () => {
    cy.get('.center h1').contains('Writing CSS reimagined', { matchCase: false })
  })
  it('shows animated bubbles', () => {
    cy.get('.sticky .bubbles .bubble').should('be.visible')
  })
})
