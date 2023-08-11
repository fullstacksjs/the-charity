import { useMatch } from '@tanstack/react-location';

import type { LocationGenerics } from './LocationGenerics';

export const useParams = () => {
  return useMatch<LocationGenerics>().params;
};
