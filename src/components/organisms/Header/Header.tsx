import { Group } from '@mantine/core';

export interface HeaderProps {
  button: React.ReactNode;
  breadcrumbs?: React.ReactNode;
}

export const Header = ({ button, breadcrumbs }: HeaderProps) => {
  return (
    <Group position="apart">
      {breadcrumbs}
      {button}
    </Group>
  );
};
