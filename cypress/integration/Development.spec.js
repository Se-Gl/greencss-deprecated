// {
//   process.env.NODE_ENV == 'development' &&
//     describe('Copy minified markdown content to clipboard', () => {
//       before(() => {
//         cy.visit('http://localhost:3000/docs/base-styles')
//       })
//       it('check if clipboard copy was successful', () => {
//         cy.get('#copy-to-clipboard').click()
//         cy.window().its('navigator.clipboard').invoke('readText').should('not.be.empty')
//       })
//     })
// }
