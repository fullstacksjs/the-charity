import { useMatch } from '@tanstack/react-location';

import type { LocationGenerics } from './LocationGenerics';

export const useParams = () => {
  const { params } = useMatch<LocationGenerics>();
  return params.id;
};
