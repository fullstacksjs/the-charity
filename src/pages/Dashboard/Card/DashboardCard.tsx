import { Card, Group, Stack, Title } from '@mantine/core';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  id: string;
  children: ReactNode;
}

export const DashboardCard = ({ title, id, children }: Props) => {
  return (
    <Card radius="md" withBorder px={30} py={30}>
      <Stack spacing={30}>
        <Group>
          <Title order={4} color="fgMuted" weight="bold">
            {title}
          </Title>
          <Title
            order={6}
            color="fgSubtle"
            weight={500}
            sx={{ fontFamily: 'IRANSans' }}
          >
            {id}
          </Title>
        </Group>
        {children}
      </Stack>
    </Card>
  );
};
