describe('Brand Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/brand')
  })
  it('renders the animation index page', () => {
    cy.get('#brand-intro')
      .should('be.visible')
      .should('exist')
      .contains('A Brand Book - the right way to get to know a story', { matchCase: false })
  })
  it('click buttons and redirect forwards', () => {
    cy.get('#brand-redirect-Logo').click()
    cy.url().should('be.equal', 'http://localhost:3000/brand/logo')
  })
  it('renders the handcrafted svg', () => {
    cy.get('#brandbook-svg').should('be.visible').should('exist')
  })
})

describe('Brand - Logo Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/brand/logo')
    cy.exec('rm -f cypress/downloads/*', { log: true, failOnNonZeroExit: false })
  })
  it('renders the animation index page', () => {
    cy.get('#brand-logo-page').should('be.visible').should('exist').contains('Logo', { matchCase: false })
  })
  it('renders the dark BrandSection Component', () => {
    cy.get('#dark-section').should('be.visible').should('exist')
  })
  it('renders the light BrandSection Component', () => {
    cy.get('#light-section').should('be.visible').should('exist')
  })
  it('download dark logo', () => {
    cy.get('#download-dark-logo').should('exist').click().wait(2000)
    cy.readFile('cypress/downloads/omencss_logo_dark.svg').should('exist')
  })
})

describe('Brand - Typo Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/brand/typography')
    cy.exec('rm -f cypress/downloads/*', { log: true, failOnNonZeroExit: false })
  })
  it('renders the typo index page', () => {
    cy.get('#brand-typography-page').should('be.visible').should('exist').contains('Typography', { matchCase: false })
  })
  it('renders the dark BrandSection Component', () => {
    cy.get('#dark-section').should('be.visible').should('exist')
  })
  it('renders the light BrandSection Component', () => {
    cy.get('#light-section').should('be.visible').should('exist')
  })
  it('download the font', () => {
    cy.get('#download-omen-motion').should('exist').click().wait(2000)
    cy.readFile('cypress/downloads/Omen Motion.zip').should('exist')
  })
})

describe('Brand - Color Screen Unit test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/brand/colours')
  })
  it('renders the brand colours index', () => {
    cy.get('#brand-colour-page').should('be.visible').should('exist').contains('Colours', { matchCase: false })
  })
  it('renders the dark BrandSection Component', () => {
    cy.get('#dark-section').should('be.visible').should('exist')
  })
  it('renders the light BrandSection Component', () => {
    cy.get('#light-section').should('be.visible').should('exist')
  })
})
