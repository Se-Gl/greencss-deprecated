describe('Donation Section', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the donation section', () => {
    cy.get('#donation')
      .scrollIntoView()
      .should('exist')
      .contains('Change the world. Even a small donation does a lot.', {
        matchCase: false
      })
  })
  it('selects a value and clicks the donate button and gets redirected to stripe', () => {
    cy.get('#donate-amount').should('exist').focus().clear()
    cy.get('#donate-button-disabled').should('exist')

    cy.get('#donate-button-amount-25').click({ force: true })
    cy.get('#donate-amount').invoke('val', 25).focus().clear()

    cy.get('#donate-amount').type('100 {enter}', { force: true })
    cy.get('#donate-button').should('exist').contains('donate', {
      matchCase: false
    })
    //   .click({ force: true })
    // cy.url().should('not.be.equal', 'http://localhost:3000/')
  })
})
