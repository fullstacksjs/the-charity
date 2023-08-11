import { AuthGuard, GuestGuard } from '@camp/auth';
import { config } from '@camp/config';
import { messages } from '@camp/messages';
import type { Route } from '@camp/router';
import { lazy, Navigate, ReactLocation, Router } from '@camp/router';

import { Login } from './Auth';
import {
  DashboardLayout,
  HouseholdDetail,
  HouseholdEmptyState,
  HouseholdList,
  HouseholdsLayout,
  ProjectDetail,
  ProjectList,
  ProjectsLayout,
} from './Dashboard';

export const location = new ReactLocation();

const devRoutes: Route[] = [
  {
    path: '/graphiql',
    import: lazy(() => import('./GraphiQL')),
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
        path: '/households',
        element: <HouseholdsLayout />,
        meta: { breadcrumb: messages.households.title },
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
        element: <ProjectsLayout />,
        meta: { breadcrumb: messages.projects.title },
        children: [
          { path: '/', element: <ProjectList /> },
          {
            path: '/:id',
            element: <ProjectDetail />,
            meta: { breadcrumb: messages.projectDetail.title },
          },
        ],
      },
      { element: <Navigate to="/dashboard/households" /> },
    ],
  },
  { element: <Navigate to="/auth/login" /> },
];

if (config.isDev) routes.unshift(...devRoutes);

export const Routes = () => <Router routes={routes} location={location} />;
