import { Box, Space, Text } from '@mantine/core';

import { VisualizedIcon } from '../../atoms';

export interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
}

export const EmptyState = ({ icon, title, message }: EmptyStateProps) => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '10rem' }}>
      <VisualizedIcon icon={icon} />
      <Space h="md" />
      <Text weight={700}>{title}</Text>
      <Space h="xs" />
      <Text color="fgMuted">{message}</Text>
    </Box>
  );
};
