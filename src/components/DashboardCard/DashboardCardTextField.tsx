import { Box, Space, Title } from '@mantine/core';
import type { ReactNode } from 'react';

import { SmallText } from '../atoms';

interface Props {
  title: string;
  children: ReactNode;
}

export const DashboardCardTextField = ({ title, children }: Props) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Title order={6} color="fgSubtle" weight={500}>
        {title}:
      </Title>
      <Space h={5} />
      <SmallText>{children}</SmallText>
    </Box>
  );
};
