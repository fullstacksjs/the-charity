const findNotification = (type: 'failure' | 'success') => {
  return cy.get(`[data-notification-type=${type}]`, { timeout: 1e4 });
};

Cypress.Commands.add('findNotification', findNotification);
