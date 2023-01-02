import type { LinkProps } from '@tanstack/react-location';
import { Link as LocationLink } from '@tanstack/react-location';

import type { AppRoute } from './AppRoutes';
import { buildUrl } from './buildUrl';
import type { PathParams } from './PathParams';

interface Props<P extends AppRoute> extends Omit<LinkProps, 'to'> {
  to: P;
  params?: PathParams<P>;
}

export const Link = <P extends AppRoute>({
  to,
  params,
  ...props
}: Props<P>) => {
  return <LocationLink to={buildUrl(to, params)} search={{}} {...props} />;
};
