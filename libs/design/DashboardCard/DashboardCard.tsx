import { type CardProps } from '@mantine/core';
import { Box, Card, Group, Stack } from '@mantine/core';

interface DashboardCardProps {
  right?: React.ReactNode;
  left?: React.ReactNode;
  children?: React.ReactNode;
}

type Props = DashboardCardProps &
  Omit<CardProps, 'children' | 'left' | 'right'>;

export const DashboardCard = ({
  right,
  left,
  children,
  ...cardProps
}: Props) => {
  return (
    <Card withBorder px={30} py={30} {...cardProps}>
      <Stack spacing={30}>
        <Group position="apart">
          <Box>{right}</Box>
          <Box>{left}</Box>
        </Group>
        <Box>{children}</Box>
      </Stack>
    </Card>
  );
};
