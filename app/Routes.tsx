import { AuthGuard, GuestGuard } from '@camp/auth';
import { messages } from '@camp/messages';
import type { Route } from '@camp/router';
import { Navigate, ReactLocation, Router } from '@camp/router';

import { FamilyEmptyState, FamilyList, ProjectList } from './components';
import {
  DashboardLayout,
  Families,
  FamilyDetail,
  Login,
  Projects,
} from './pages';

export const location = new ReactLocation();

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
        children: [{ path: '/', element: <ProjectList /> }],
      },
      { element: <Navigate to="/dashboard/families" /> },
    ],
  },
  { element: <Navigate to="/auth/login" /> },
];

export const Routes = () => <Router routes={routes} location={location} />;
