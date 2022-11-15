import '@testing-library/cypress/add-commands';

import type { mount } from 'cypress/react18';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      login: () => void;
      visit(
        url: AppRoute,
        options?: Partial<VisitOptions> & { params?: Record<string, string> },
      ): Chainable<AUTWindow>;
    }
  }
}
