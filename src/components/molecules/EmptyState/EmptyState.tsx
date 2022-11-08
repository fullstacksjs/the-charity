import { Box, Space, Text } from '@mantine/core';

import { VisualizedIcon } from '../../atoms';

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  children?: React.ReactNode;
}

export const EmptyState = ({
  icon,
  title,
  message,
  children,
}: EmptyStateProps) => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '10rem' }}>
      <VisualizedIcon icon={icon} />
      <Space h="md" />
      <Text weight={700}>{title}</Text>
      <Space h="xs" />
      <Text color="fgMuted">{message}</Text>
      <Box p="xl">{children}</Box>
    </Box>
  );
};
