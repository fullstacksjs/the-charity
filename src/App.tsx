import { ReactLocation, Router } from '@tanstack/react-location';

const location = new ReactLocation();

export const App: React.FC = () => {
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      The Charity App
    </Router>
  );
};
