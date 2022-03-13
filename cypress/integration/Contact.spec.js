describe('Category Index Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/contact')
  })
  it('renders the index page', () => {
    cy.get('#contact-index')
      .should('be.visible')
      .should('exist')
      .contains('Contact - the right way to get to know each other.', { matchCase: false })
  })
  it('renders the contact form', () => {
    cy.get('#contact-form').should('be.visible').should('exist').contains('Send a message', { matchCase: false })
  })
  it('submit a request', () => {
    cy.get('#fullname').type('John Doe {enter}')
    cy.get('#email').type('john.doe@email.com {enter}')
    cy.get('#subject').type('Test Title {enter}')

    cy.get('#submit-button').click()
    cy.get('#toast-information')
      .should('be.visible')
      .should('exist')
      .contains('☝️ An error has occurred. Please check your input.', {
        matchCase: false
      })
    cy.get(':nth-child(2) > .relative > .ml-10px > .text-15px').contains('☝️ Please provide a valid email address.', {
      matchCase: false
    })
    for (let n = 0; n < 5; n++) {
      cy.get('#close-toast').click()
    }
    cy.get('#toast-information').should('not.exist')
  })
})
