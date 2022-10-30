import { useMatches } from '@camp/router';
import { Group } from '@mantine/core';

import type { BreadcrumbItem } from '../../molecules';
import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = (): BreadcrumbItem[] => {
  const matches = useMatches();

  return matches
    .filter(match => Boolean(match.route.meta?.breadcrumb))
    .filter(match => Boolean(match.route.path))
    .map(match => {
      const { path, meta } = match.route;
      return {
        path: path!,
        name: meta!.breadcrumb,
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
