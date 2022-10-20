import { FamilyEmptyState } from '@camp/components';
import { messages } from '@camp/messages';
import type {
  MakeGenerics,
  Route as LocationRoute,
} from '@tanstack/react-location';
import { Navigate, ReactLocation, Router } from '@tanstack/react-location';

import { GuardLayout } from './components/GuardLayout/GuardLayout';
import {
  DashboardLayout,
  Families,
  FamilyDetail,
  Login,
  Projects,
} from './pages';

export const location = new ReactLocation();

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
    element: <GuardLayout />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/families',
            element: <Families />,
            meta: {
              breadcrumb: messages.families.title,
            },
            children: [
              {
                path: '/family-detail',
                element: <FamilyDetail />,
                meta: {
                  breadcrumb: messages.familyDetail.title,
                },
              },
              {
                element: <FamilyEmptyState />,
              },
            ],
          },
          {
            path: '/projects',
            element: <Projects />,
            meta: {
              breadcrumb: messages.projects.title,
            },
          },
          { element: <Navigate to="/families" /> },
        ],
      },
    ],
  },
];

export const Routes = () => {
  return <Router routes={routes} location={location} />;
};
