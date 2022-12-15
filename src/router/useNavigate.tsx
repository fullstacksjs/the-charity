import { useNavigate as useReactNavigate } from '@tanstack/react-location';

import type { LocationGenerics } from '../Routes';

const typedUseReactNavigate = useReactNavigate<LocationGenerics>;

type Option = Parameters<ReturnType<typeof typedUseReactNavigate>>[0];
type NavigateOptions = Omit<Option, 'to'> & {
  to: AppRoute;
};
type Navigate = (options: NavigateOptions) => void;

export const useNavigate = (): Navigate => {
  return useReactNavigate<LocationGenerics>();
};
