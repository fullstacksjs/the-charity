import { Title } from '@mantine/core';

interface Props {
  children: string;
}

export const DashboardTitle = ({ children }: Props) => {
  return (
    <Title order={4} color="fgDefault" weight="bold">
      {children}
    </Title>
  );
};
