import { messages } from '@camp/messages';
import type {
  MakeGenerics,
  Route as LocationRoute,
} from '@tanstack/react-location';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';

import { Families, Projects } from './pages';
import { DashboardLayout } from './pages/Dashboard/DashboardLayout';
import { Login } from './pages/Login';

const location = new ReactLocation();

export type LocationGenerics = MakeGenerics<{
  RouteMeta: {
    breadcrumb: string;
  };
}>;

interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: AppRoute;
  children?: Route[];
}

const routes: Route[] = [
  { path: '/login', element: <Login /> },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: '/families',
        element: <Families />,
        meta: {
          breadcrumb: messages.families.title,
        },
      },
      {
        path: '/projects',
        element: <Projects />,
        meta: {
          breadcrumb: messages.projects.title,
        },
      },
      {
        element: <Navigate to="families" />,
      },
    ],
  },
];

export const Routes = () => {
  return <Router routes={routes} location={location} />;
};
