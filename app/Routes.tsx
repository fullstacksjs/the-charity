import { AuthGuard, GuestGuard } from '@camp/auth';
import { config } from '@camp/config';
import { messages } from '@camp/messages';
import type { Route } from '@camp/router';
import { lazy, Navigate, ReactLocation, Router } from '@camp/router';

import { HouseholdEmptyState, HouseholdList, ProjectList } from './components';
import {
  DashboardLayout,
  Families,
  HouseholdDetail,
  Login,
  Projects,
} from './pages';

export const location = new ReactLocation();

const devRoutes: Route[] = [
  {
    path: '/graphiql',
    import: lazy(() => import('./pages/GraphiQL')),
  },
];

const routes: Route[] = [
  {
    path: '/auth',
    element: <GuestGuard />,
    children: [
      { path: '/login', element: <Login /> },
      { element: <Navigate to="/auth/login" /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/families',
        element: <Families />,
        meta: { breadcrumb: messages.families.title },
        children: [
          {
            path: '/',
            element: <HouseholdList />,
          },
          {
            path: '/:id',
            element: <HouseholdDetail />,
            meta: { breadcrumb: messages.householdDetail.title },
          },
          { element: <HouseholdEmptyState /> },
        ],
      },
      {
        path: '/projects',
        element: <Projects />,
        meta: { breadcrumb: messages.projects.title },
        children: [{ path: '/', element: <ProjectList /> }],
      },
      { element: <Navigate to="/dashboard/families" /> },
    ],
  },
  { element: <Navigate to="/auth/login" /> },
];

if (config.isDev) routes.unshift(...devRoutes);

export const Routes = () => <Router routes={routes} location={location} />;
