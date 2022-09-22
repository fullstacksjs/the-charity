import { Box, Space, Text } from '@mantine/core';
import type { ReactNode } from 'react';

import VisualElements from '../atoms/VisualElements';

export interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  message: string;
}

const EmptyState = ({ icon, title, message }: EmptyStateProps) => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: '10rem' }}>
      <VisualElements icon={icon} />
      <Space h="md" />
      <Text weight={700}>{title}</Text>
      <Space h="xs" />
      <Text color="#495057">{message}</Text>
    </Box>
  );
};

export default EmptyState;
