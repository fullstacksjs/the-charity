type RouteSegment<T extends string> = T extends `${infer Head}/${infer Tail}`
  ? RouteSegment<Tail> | `/${Head}`
  : `/${T}`;

type AppRoute =
  | '/'
  | '/auth'
  | '/auth/login'
  | '/dashboard'
  | '/dashboard/families'
  | '/dashboard/families/family-detail'
  | '/dashboard/projects';
