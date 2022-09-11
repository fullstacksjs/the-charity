import { useQuery } from '@apollo/client';
import { Title } from '@mantine/core';
import { ReactLocation, Router } from '@tanstack/react-location';

import { GetSchemaDescriptionQuery } from '../operations/queries';

const location = new ReactLocation();

export const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data, loading, error } = useQuery(GetSchemaDescriptionQuery);

  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <Title order={1}>The Charity App</Title>
      <br />
      <Title order={3}>
        {loading
          ? 'loading data'
          : error != null
          ? 'error occurred! while loading data'
          : data.__schema.description ?? 'empty'}
      </Title>
    </Router>
  );
};
