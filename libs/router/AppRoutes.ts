export const AppRoute = {
  index: '/',
  auth: '/auth',
  login: '/auth/login',
  dashboard: '/dashboard',
  households: '/dashboard/households',
  householdDetail: '/dashboard/households/:id',
  projects: '/dashboard/projects',
  graphql: '/graphiql',
} as const;
export type AppRoute = (typeof AppRoute)[keyof typeof AppRoute];
