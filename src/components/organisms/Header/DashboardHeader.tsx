import { Group } from '@mantine/core';
import { useMatches } from '@tanstack/react-location';

import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useCreateBreadcrumbsItems = () => {
  const matches = useMatches();

  const items = matches.map(match => {
    const { path, meta } = match.route;
    return {
      path: path ?? '',
      name: meta?.['breadcrumbs'] as string,
    };
  });

  return {
    items,
  };
};

export const DashboardHeader = ({ button }: HeaderProps) => {
  const { items } = useCreateBreadcrumbsItems();

  return (
    <Group position="apart">
      <Breadcrumbs items={items} />
      {button}
    </Group>
  );
};
