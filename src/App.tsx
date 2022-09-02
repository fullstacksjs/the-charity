import { ReactLocation, Router } from '@tanstack/react-location';

export const App: React.FC = () => {
  const location = new ReactLocation();
  return (
     <Router routes={[{ path: '/' }]} location={location}>
        The Charity App
    </Router>
  );
};