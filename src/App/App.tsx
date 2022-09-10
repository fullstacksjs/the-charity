import { Title } from '@mantine/core';
import { ReactLocation, Router } from '@tanstack/react-location';

const location = new ReactLocation();

export const App: React.FC = () => {
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <Title order={1}>The Charity App</Title>
    </Router>
  );
};
