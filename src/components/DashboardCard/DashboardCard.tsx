import { Box, Card, Group, Stack } from '@mantine/core';

interface Props {
  right?: React.ReactNode;
  left?: React.ReactNode;
  children: React.ReactNode;
}

export const DashboardCard = ({ right, left, children }: Props) => {
  return (
    <Card radius="md" withBorder px={30} py={30}>
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
