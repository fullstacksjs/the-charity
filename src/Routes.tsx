import { ReactLocation, Router } from '@tanstack/react-location';

import { Families, Home, Projects } from '../pages';

const location = new ReactLocation();

export const Routes = () => {
  return (
    <Router
      routes={[
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
      <Home />
    </Router>
  );
};
