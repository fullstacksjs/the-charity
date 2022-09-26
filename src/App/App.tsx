import { ReactLocation, Router } from '@tanstack/react-location';

import { Home } from '../pages/Home';

const location = new ReactLocation();

export const App = () => {
  return (
    <Router routes={[{ path: '/', element: <Home /> }]} location={location} />
  );
};
