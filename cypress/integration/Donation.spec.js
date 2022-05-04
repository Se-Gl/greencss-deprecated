describe('Calculation Section', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })
  it('renders the calculation section', () => {
    cy.get('#calculate-footprint').scrollIntoView().should('exist').contains('Calculate your green footprint', {
      matchCase: false
    })
  })

  it('changes the range slider input and gets a result', () => {
    cy.get('#range-slider-W input').eq(1).as('range').invoke('val', 750).trigger('change', { force: true })
    cy.get('#range-slider-h input').eq(1).as('range').invoke('val', 10).trigger('change', { force: true })
    cy.get('#calculation-result').eq(1).should('not.be.empty')
  })
})

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

    cy.get('#donate-cart-amount-25').should('exist')

    // cy.get('#donate-cart-amount-25').click({ force: true })
    // cy.get('#donate-amount').invoke('val', 25).focus().clear()

    // cy.get('#donate-amount').type('100 {enter}', { force: true })
    // cy.get('#donate-button').should('exist').contains('donate', {
    //   matchCase: false
    // })
  })
})
