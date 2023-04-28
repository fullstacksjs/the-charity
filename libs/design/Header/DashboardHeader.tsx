import { useMatches } from '@camp/router';
import { createTestAttr } from '@camp/test';
import { Group } from '@mantine/core';

import type { BreadcrumbItem } from '../Breadcrumbs';
import { Breadcrumbs } from '../Breadcrumbs';
import { dashboardHeaderId as ids } from './DashboardHeader.ids';

export interface HeaderProps {
  button: React.ReactNode;
}

export const useBreadcrumbsItems = (): BreadcrumbItem[] => {
  const matches = useMatches();

  return matches
    .filter(match => Boolean(match.route.meta?.breadcrumb))
    .filter(match => Boolean(match.route.path))
    .map(match => {
      const { meta } = match.route;

      return {
        path: match.pathname,
        name: meta!.breadcrumb,
      };
    });
};

export const DashboardHeader = ({ button }: HeaderProps) => {
  const items = useBreadcrumbsItems();

  return (
    <Group position="apart" mb={40} {...createTestAttr(ids)}>
      <Breadcrumbs items={items} />
      {button}
    </Group>
  );
};
