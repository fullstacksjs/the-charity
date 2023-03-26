import type { AppRoute } from '../../../libs/router/AppRoutes';
import { buildUrl } from '../../../libs/router/buildUrl';

Cypress.Commands.overwrite('visit', (visit, url, options) => {
  if (options?.params == null) return visit(url, options);
  const { params, ...restOfOptions } = options;
  return visit(buildUrl(url, params) as AppRoute, restOfOptions);
});

declare global {
  namespace Cypress {
    interface Chainable {
      visit(
        url: AppRoute,
        options?: Partial<VisitOptions> & { params?: Record<string, string> },
      ): Chainable<AUTWindow>;
    }
  }
}
