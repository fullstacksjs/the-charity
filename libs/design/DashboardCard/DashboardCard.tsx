import type { CardProps } from '@mantine/core';
import { Box, Card, Group, Stack } from '@mantine/core';

export interface DashboardCardProps
  extends Omit<CardProps, 'children' | 'left' | 'right'> {
  onHeaderClick?: React.MouseEventHandler;
  right?: React.ReactNode;
  left?: React.ReactNode;
  children?: React.ReactNode;
}

export const DashboardCard = ({
  right,
  left,
  children,
  onHeaderClick,
  ...cardProps
}: DashboardCardProps) => {
  return (
    <Card withBorder p={30} {...cardProps}>
      <Stack spacing={30}>
        <Group
          onClick={onHeaderClick}
          position="apart"
          sx={{ cursor: onHeaderClick ? 'pointer' : undefined }}
        >
          <Box>{right}</Box>
          <Box>{left}</Box>
        </Group>
        {children}
      </Stack>
    </Card>
  );
};
