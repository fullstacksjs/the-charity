import '@testing-library/cypress/add-commands';

import type { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      login: () => void;
    }
  }
}
