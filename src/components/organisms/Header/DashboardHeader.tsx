import { Group } from '@mantine/core';
import { useMatches } from '@tanstack/react-location';
import type { LocationGenerics } from 'src/Routes';

import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
}

export const DashboardHeader = ({ button }: HeaderProps) => {
  const matches = useMatches<LocationGenerics>();
  const breadcrumbsName = matches[0]?.route.meta?.breadcrumb;

  return (
    <Group position="apart">
      {breadcrumbsName ? (
        <Breadcrumbs items={[{ name: breadcrumbsName, path: '/' }]} />
      ) : null}
      {button}
    </Group>
  );
};
