import { Title } from '@mantine/core';

interface Props {
  children: string;
}

export const DashboardTitle = ({ children }: Props) => {
  return (
    <Title order={4} color="fg" weight="bold">
      {children}
    </Title>
  );
};
