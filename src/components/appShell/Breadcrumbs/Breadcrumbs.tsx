import { ChevronLeftIcon } from '@camp/design';
import { Breadcrumbs as MantineBreadcrumbs, Text } from '@mantine/core';

export interface BreadcrumbProps {
  pathname?: string;
  icon?: React.ReactNode;
}

export const Breadcrumbs = ({
  breadcrumbItems,
}: {
  breadcrumbItems: BreadcrumbProps[];
}) => {
  const items = breadcrumbItems.map(item => (
    <Text key={`/${item.pathname}`}>{item.pathname ?? item.icon}</Text>
  ));

  return (
    <MantineBreadcrumbs separator={<ChevronLeftIcon width="16" height="16" />}>
      {items}
    </MantineBreadcrumbs>
  );
};
