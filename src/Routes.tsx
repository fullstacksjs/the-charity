import { Navigate, ReactLocation, Router } from '@tanstack/react-location';

import { AppShell } from './components';
import { Families, Projects } from './pages';

const location = new ReactLocation();

export const Routes = () => {
  return (
    <Router
      routes={[
        { path: '/', element: <Navigate to="/families" /> },
        {
          path: '/families',
          element: <Families />,
          meta: {
            breadcrumb: () => 'خانواده ها',
          },
        },
        {
          path: '/projects',
          element: <Projects />,
          meta: {
            breadcrumb: () => 'پروژه ها',
          },
        },
      ]}
      location={location}
    >
      <AppShell />
    </Router>
  );
};
