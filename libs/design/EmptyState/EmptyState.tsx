import type { Icon } from '@camp/icons';
import { Box, Center, Space, Text } from '@mantine/core';

import { VisualizedIcon } from '../VisualizedIcon';

export interface EmptyStateProps {
  Icon: Icon;
  title: string;
  message: string;
  children?: React.ReactNode;
}

export const EmptyState = ({
  Icon,
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
        <VisualizedIcon Icon={Icon} />
        <Space h="md" />
        <Text weight={700}>{title}</Text>
        <Space h="xs" />
        <Text color="fg">{message}</Text>
        <Box p="xl">{children}</Box>
      </Box>
    </Center>
  );
};
