export type RouteSegment<T extends string> =
  T extends `${infer Head}/${infer Tail}`
    ? RouteSegment<Tail> | `/${Head}`
    : `/${T}`;
