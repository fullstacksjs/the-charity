import { Group } from '@mantine/core';

export interface HeaderProps {
  leftButton: React.ReactNode;
  breadcrumbs: React.ReactNode;
}

export const Header = ({ leftButton, breadcrumbs }: HeaderProps) => {
  return (
    <Group position="apart">
      {breadcrumbs}
      {leftButton}
    </Group>
  );
};
