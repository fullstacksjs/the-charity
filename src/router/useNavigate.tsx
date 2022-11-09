import { useNavigate as useReactNavigate } from '@tanstack/react-location';

import type { LocationGenerics } from '../Routes';

type NavigateOptions = Omit<
  Parameters<ReturnType<typeof useReactNavigate<LocationGenerics>>>[0],
  'to'
> & { to: AppRoute };

type Navigate = (options: NavigateOptions) => void;

export const useNavigate = (): Navigate => {
  return useReactNavigate<LocationGenerics>();
};
