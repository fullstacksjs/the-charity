import { ReactLocation, Router } from '@tanstack/react-location';

const App: React.FC = () => {
  const location = new ReactLocation();
  return (
    <>
      The Charity App
      <Router routes={[{ path: '/' }]} location={location} />
    </>
  );
};

export default App;
