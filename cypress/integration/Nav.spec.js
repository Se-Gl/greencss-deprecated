describe('Nav Screen Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })
  it('renders and clicks the first nav item', () => {
    cy.get('header nav ul li a')
      .eq(0)
      .should('be.visible')
      .should('exist')
      .contains('Home', { matchCase: false })
      .click()
      .wait(2000)
    cy.url().should('be.equal', 'http://localhost:3000/')
  })
  it('renders and clicks the second nav item, check colours', () => {
    cy.get('header nav ul li a')
      .eq(1)
      .should('be.visible')
      .should('exist')
      .should('have.class', 'text-white')
      .contains('Brand', { matchCase: false })
      .click()
      .wait(2000)
    cy.url().should('be.equal', 'http://localhost:3000/brand')
    cy.get('header nav ul li a').eq(0).should('have.class', 'text-black')
    cy.get('header nav ul li a').eq(1).should('have.class', 'text-purple')
    cy.get('header nav ul li a').eq(2).should('have.class', 'text-black')
  })
})

describe('Mobile Nav Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(320, 480)
    cy.get('#hamburger-sm').should('be.visible').should('exist').click()
  })
  it('renders and clicks the hamburger', () => {
    cy.url().should('be.equal', 'http://localhost:3000/')
  })
  it('renders and clicks the first nav item', () => {
    cy.get('h3').eq(0).should('be.visible').should('exist').contains('Home', { matchCase: false }).click()
    cy.url().should('be.equal', 'http://localhost:3000/')
  })
  it('renders and clicks the second nav item, check colours', () => {
    cy.get('h3').eq(1).should('be.visible').should('exist').contains('Brand', { matchCase: false }).click()
    cy.url().should('be.equal', 'http://localhost:3000/brand')
  })
})
