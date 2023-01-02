import type { Route as LocationRoute } from '@tanstack/react-location';

import type { LocationGenerics } from './LocationGenerics';
import type { RouteSegment } from './RouteSegment';

export interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: RouteSegment<AppRoute>;
  children?: Route[];
}
