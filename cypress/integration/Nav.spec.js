describe('Nav Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders and clicks the first nav item', () => {
    cy.get('div nav ul li a')
      .eq(0)
      .should('be.visible')
      .should('exist')
      .contains('Blog', { matchCase: false })
      .click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/blog')
  })
  it('renders the submenu on hover', () => {
    cy.get('div nav ul li a').eq(0).trigger('mouseover')
    cy.get('#submenu').should('be.visible').should('exist')
  })
})

describe('Mobile Nav Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#close-cookie').click({ force: true })
    cy.viewport(320, 480)
    cy.get('#hamburger-sm').should('be.visible').should('exist').click({ force: true })
  })
  it('renders and clicks the first nav item', () => {
    cy.get('h3')
      .eq(0)
      .should('be.visible')
      .should('exist')
      .contains('Blog', { matchCase: false })
      .click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/blog')
  })
  it('renders and clicks the second nav item, check colours', () => {
    cy.get('h3')
      .eq(1)
      .should('be.visible')
      .should('exist')
      .contains('Brand', { matchCase: false })
      .click({ force: true })
    cy.url().should('be.equal', 'http://localhost:3000/brand')
  })
  it('clears localstorage', () => {
    cy.clearLocalStorage().should((ls) => {
      expect(ls.getItem('cookie')).to.be.null
    })
  })
})
