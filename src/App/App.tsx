import { useQuery } from '@apollo/client';
import { Text, Title } from '@mantine/core';
import { ReactLocation, Router } from '@tanstack/react-location';

import { GetAdminsIdQuery } from '../operations/queries';

const location = new ReactLocation();

export const App = (): JSX.Element => {
  const { data, loading, error } = useQuery(GetAdminsIdQuery);
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <Title order={1}>The Charity App</Title>
      <br />
      <Title order={3}>
        {loading
          ? 'loading data'
          : error != null
          ? 'error occurred while loading admins ids'
          : data.admins.map(({ id }: { id: number }) => (
              <Text key={id}>admin with id: {id}</Text>
            ))}
      </Title>
    </Router>
  );
};
