import type {
  DefaultGenerics,
  NavigateOptions,
} from '@tanstack/react-location';
import { Navigate as LocationNavigate } from '@tanstack/react-location';

import { buildUrl } from './buildUrl';
import type { PathParams } from './PathParams';

interface Props<
  TGeneric extends Partial<DefaultGenerics> = DefaultGenerics,
  P extends AppRoute = AppRoute,
> extends Omit<NavigateOptions<TGeneric>, 'to'> {
  to: P | number;
  params?: PathParams<P>;
}

export const Navigate = <
  TGeneric extends Partial<DefaultGenerics>,
  P extends AppRoute,
>({
  to,
  params,
  ...props
}: Props<TGeneric, P>) => (
  <LocationNavigate
    to={typeof to === 'number' ? to : buildUrl(to, params)}
    {...props}
  />
);
