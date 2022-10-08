/* eslint-disable @typescript-eslint/naming-convention */
import type {
  MakeGenerics,
  Route as LocationRoute,
} from '@tanstack/react-location';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';

import { AppShell } from './components';
import { Families, Projects } from './pages';

const location = new ReactLocation();

type LocationGenerics = MakeGenerics<{
  RouteMeta: {
    breadcrumb: string;
  };
}>;

interface Route extends Omit<LocationRoute<LocationGenerics>, 'path'> {
  path?: AppRoute;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: '/families',
    element: <Families />,
    meta: {
      breadcrumb: 'خانواده ها',
    },
  },
  {
    path: '/projects',
    element: <Projects />,
    meta: {
      breadcrumb: 'پروژه ها',
    },
  },
  { element: <Navigate to="/families" /> },
];

export const Routes = () => {
  return (
    <Router routes={routes} location={location}>
      <AppShell />
    </Router>
  );
};
