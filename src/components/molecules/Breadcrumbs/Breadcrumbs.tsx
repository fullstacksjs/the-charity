import { ChevronLeftIcon, HomeIcon } from '@camp/design';
import { Breadcrumbs as MantineBreadcrumbs, Text } from '@mantine/core';

export interface BreadcrumbProps {
  pathname?: string;
}

export const Breadcrumbs = ({
  breadcrumbItems,
}: {
  breadcrumbItems: BreadcrumbProps[];
}) => {
  const items = breadcrumbItems.map(item => (
    <Text key={`/${item.pathname}`}>{item.pathname}</Text>
  ));

  return (
    <MantineBreadcrumbs separator={<ChevronLeftIcon width="16" height="16" />}>
      <HomeIcon width="24" height="24" />
      {items}
    </MantineBreadcrumbs>
  );
};
