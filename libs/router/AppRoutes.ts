export const AppRoute = {
  index: '/',
  auth: '/auth',
  login: '/auth/login',
  dashboard: '/dashboard',
  families: '/dashboard/families',
  familyDetail: '/dashboard/families/:id',
  projects: '/dashboard/projects',
} as const;
export type AppRoute = typeof AppRoute[keyof typeof AppRoute];
