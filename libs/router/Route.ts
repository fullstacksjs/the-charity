import type {
  Route as LocationRoute,
  RouteLoaders,
} from '@tanstack/react-location';

import type { AppRoute } from './AppRoutes';
import type { LocationGenerics } from './LocationGenerics';
import type { RouteSegment } from './RouteSegment';

export interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: RouteSegment<AppRoute>;
  children?: Route[];
}

export const lazy =
  (path: () => Promise<{ routes: RouteLoaders<LocationGenerics> }>) => () =>
    path().then(x => x.routes);
