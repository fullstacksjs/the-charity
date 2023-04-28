import { useLocation as useReactLocation } from '@tanstack/react-location';

import type { LocationGenerics } from './LocationGenerics';

export const useLocation = useReactLocation<LocationGenerics>;
