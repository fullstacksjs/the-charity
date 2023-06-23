Cypress.Commands.add('waitForReq', () => {
  cy.intercept('POST', Cypress.env('API_ENDPOINT')).as('req');
  cy.wait('@req', { timeout: 10_000 });
});
