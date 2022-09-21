import { Space, Text } from '@mantine/core';
import type { ReactNode } from 'react';

import VisualElements from '../atoms/VisualElements';

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  message: string;
}

const EmptyState = ({ icon, title, message }: EmptyStateProps) => {
  return (
    <>
      <VisualElements icon={icon} />
      <Space h="md" />
      <Text weight={700}>{title}</Text>
      <Space h="xs" />
      <Text color="#495057">{message}</Text>
    </>
  );
};

export default EmptyState;
