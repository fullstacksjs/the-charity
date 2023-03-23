import type { CardProps } from '@mantine/core';
import { Box, Card, Group, Stack } from '@mantine/core';

interface DashboardCardInternalProps {
  right?: React.ReactNode;
  left?: React.ReactNode;
  children?: React.ReactNode;
}

export type DashboardCardProps = DashboardCardInternalProps &
  Omit<CardProps, 'children' | 'left' | 'right'>;

export const DashboardCard = ({
  right,
  left,
  children,
  ...cardProps
}: DashboardCardProps) => {
  return (
    <Card withBorder p={30} {...cardProps}>
      <Stack spacing={30}>
        <Group position="apart">
          <Box>{right}</Box>
          <Box>{left}</Box>
        </Group>
        {children}
      </Stack>
    </Card>
  );
};
