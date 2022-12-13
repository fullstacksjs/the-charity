import {
  AuthGuard,
  FamilyEmptyState,
  FamilyList,
  GuestGuard,
  ProjectEmptyState,
} from '@camp/components';
import { messages } from '@camp/messages';
import type { RouteSegment } from '@camp/router';
import { Navigate } from '@camp/router';
import type {
  MakeGenerics,
  Route as LocationRoute,
} from '@tanstack/react-location';
import { ReactLocation, Router } from '@tanstack/react-location';

import {
  DashboardLayout,
  Families,
  FamilyDetail,
  Login,
  Projects,
} from './pages';

export const location = new ReactLocation();

export type LocationGenerics = MakeGenerics<{
  Params: {
    id: string;
  };
  RouteMeta: {
    breadcrumb: string;
  };
}>;

interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: RouteSegment<AppRoute>;
  children?: Route[];
}

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
            element: <FamilyList />,
          },
          {
            path: '/:id',
            element: <FamilyDetail />,
            meta: { breadcrumb: messages.familyDetail.title },
          },
          { element: <FamilyEmptyState /> },
        ],
      },
      {
        path: '/projects',
        element: <Projects />,
        meta: { breadcrumb: messages.projects.title },
        children: [{ element: <ProjectEmptyState /> }],
      },
      { element: <Navigate to="/dashboard/families" /> },
    ],
  },
  { element: <Navigate to="/auth/login" /> },
];

export const Routes = () => {
  return <Router routes={routes} location={location} />;
};
