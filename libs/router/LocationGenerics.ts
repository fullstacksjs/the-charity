import type { MakeGenerics } from '@tanstack/react-location';

export type LocationGenerics = MakeGenerics<{
  Params: {
    id: string;
  };
  RouteMeta: {
    breadcrumb: string;
  };
}>;
