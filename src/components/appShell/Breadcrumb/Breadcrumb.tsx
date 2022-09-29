import { BreadcrumbIcon } from '@camp/design';
import { Breadcrumbs, Text } from '@mantine/core';

export interface BreadcrumbProps {
  pathname?: string;
  icon?: React.ReactNode;
}

export const Breadcrumb = ({
  breadcrumbItems,
}: {
  breadcrumbItems: BreadcrumbProps[];
}) => {
  const items = breadcrumbItems.map(item => (
    <Text key={`/${item.pathname}`}>{item.pathname ?? item.icon}</Text>
  ));

  return (
    <>
      <Breadcrumbs separator={<BreadcrumbIcon width="16" height="16" />}>
        {items}
      </Breadcrumbs>
    </>
  );
};
