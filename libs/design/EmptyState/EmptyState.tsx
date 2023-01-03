import { Box, Center, Space, Text } from '@mantine/core';

import { VisualizedIcon } from '../VisualizedIcon';

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
    <Center>
      <Box
        sx={{
          textAlign: 'center',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <VisualizedIcon icon={icon} />
        <Space h="md" />
        <Text weight={700}>{title}</Text>
        <Space h="xs" />
        <Text color="fgMuted">{message}</Text>
        <Box p="xl">{children}</Box>
      </Box>
    </Center>
  );
};
