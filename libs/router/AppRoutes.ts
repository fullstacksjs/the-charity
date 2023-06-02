export const AppRoute = {
  index: '/',
  auth: '/auth',
  login: '/auth/login',
  dashboard: '/dashboard',
  families: '/dashboard/families',
  householdDetail: '/dashboard/families/:id',
  projects: '/dashboard/projects',
  graphql: '/graphiql',
} as const;
export type AppRoute = (typeof AppRoute)[keyof typeof AppRoute];
