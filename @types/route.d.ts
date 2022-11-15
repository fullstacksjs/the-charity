import type { AppRoute as AppRouteStatic } from '../src/Routes';

declare global {
  export type RouteSegment<T extends string> =
    T extends `${infer Head}/${infer Tail}`
      ? RouteSegment<Tail> | `/${Head}`
      : `/${T}`;

  export type AppRoute = typeof AppRouteStatic[keyof typeof AppRouteStatic];
}
