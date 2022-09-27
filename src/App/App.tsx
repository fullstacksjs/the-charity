import { ReactLocation, Router } from '@tanstack/react-location';

import { Families, Home, Projects } from '../pages';

const location = new ReactLocation();

export const App = () => {
  return (
    <Router
      routes={[
        { path: '/families', element: <Families /> },
        { path: '/projects', element: <Projects /> },
      ]}
      location={location}
    >
      <Home />
    </Router>
  );
};
