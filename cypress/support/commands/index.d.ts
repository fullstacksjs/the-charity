declare namespace Cypress {
  interface Chainable {
    login: (args: { username: string; password: string }) => void;
    mount: typeof import('cypress/react18').mount;
    findNotification: (type: 'failure' | 'success') => Chainable<JQuery>;
    visit(
      url: import('../../../libs/router/AppRoutes').AppRoute,
      options?: Partial<VisitOptions> & { params?: Record<string, string> },
    ): Chainable<AUTWindow>;
    waitForReq(): void;
  }
}
