describe('Renders Cookie', () => {
  it('acceptes cookie banner', () => {
    cy.visit('http://localhost:3000')
    cy.get('#cookie-banner').should('exist').should('be.visible')
    cy.get('#close-toast')
      .click()
      .should(() => {
        expect(localStorage.getItem('cookie')).contains('accepted', { matchCase: false })
      })
    cy.get('#cookie-banner').should('not.exist')
  })
  it('clears localstorage - banner is visible again', () => {
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('cookie')).to.be.null
    })
    cy.visit('http://localhost:3000')
    cy.get('#cookie-banner').should('exist').should('be.visible')
  })
})
