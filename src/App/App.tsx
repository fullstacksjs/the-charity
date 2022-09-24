import { useGetAdminListQuery } from '@camp/data-layer';
import { Text, Title } from '@mantine/core';
import { ReactLocation, Router } from '@tanstack/react-location';

const location = new ReactLocation();

export const App: React.FC = () => {
  const adminListQueryResult = useGetAdminListQuery();
  return (
    <Router routes={[{ path: '/' }]} location={location}>
      <Title order={1}>The Charity App</Title>
      <br />
      <Title order={3} color="fgDefault">
        {adminListQueryResult.loading
          ? 'loading data'
          : adminListQueryResult.error != null
          ? 'error occurred while loading admins ids'
          : adminListQueryResult.data?.admins.map(({ id }) => (
              <Text key={id}>admin with id: {id}</Text>
            ))}
        <br />
        یک متن
      </Title>
    </Router>
  );
};
