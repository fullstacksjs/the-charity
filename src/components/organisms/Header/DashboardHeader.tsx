import { Group } from '@mantine/core';
import { useMatches } from '@tanstack/react-location';

import type { LocationGenerics } from '../../../Routes';
import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = () => {
  const matches = useMatches<LocationGenerics>();

  return matches
    .filter(match => match.route.meta?.breadcrumb)
    .map(match => {
      const { path, meta } = match.route;
      return {
        path: path ?? '',
        name: meta?.breadcrumb ?? '',
      };
    });
};

export const DashboardHeader = ({ button }: HeaderProps) => {
  const items = useBreadcrumbsItems();

  return (
    <Group position="apart">
      <Breadcrumbs items={items} />
      {button}
    </Group>
  );
};
