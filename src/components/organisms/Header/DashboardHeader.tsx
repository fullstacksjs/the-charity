import { Group } from '@mantine/core';
import { useMatches } from '@tanstack/react-location';

import type { LocationGenerics } from '../../../Routes';
import type { BreadcrumbItem } from '../../molecules';
import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = (): BreadcrumbItem[] => {
  const matches = useMatches<LocationGenerics>();

  return matches
    .filter(match => match.route.meta?.breadcrumb != null)
    .map(match => {
      return {
        path: match.pathname,
        name: match.route.meta!.breadcrumb,
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
