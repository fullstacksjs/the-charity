import { useMatches as useReactLocationMatches } from '@tanstack/react-location';

import type { LocationGenerics } from './LocationGenerics';

export const useMatches = () => {
  const matches = useReactLocationMatches<LocationGenerics>();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  return matches.map(m => ({ ...m, route: m.route ?? {} }));
};
