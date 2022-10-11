import { Group } from '@mantine/core';

import { Breadcrumbs } from '../../molecules';

export interface HeaderProps {
  button: React.ReactNode;
  breadcrumbsTitle?: string;
}

export const Header = ({ button, breadcrumbsTitle }: HeaderProps) => {
  return (
    <Group position="apart">
      <Breadcrumbs
        breadcrumbItems={[
          {
            pathname: breadcrumbsTitle,
          },
        ]}
      />
      {button}
    </Group>
  );
};
