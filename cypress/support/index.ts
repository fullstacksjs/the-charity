Cypress.on('uncaught:exception', err => {
  if (err.message.includes('list not defined')) {
    return false;
  }
});
