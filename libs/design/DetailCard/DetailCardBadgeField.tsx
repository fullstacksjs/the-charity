import { Box, Space, Title } from '@mantine/core';

import type { BadgeProps } from '../Badge';
import { Badge } from '../Badge';

interface Props extends BadgeProps {
  title: string;
}

export const DetailCardBadgeField = ({ title, ...badgeProps }: Props) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <Title order={6} color="fgSubtle" weight={500}>
        {title}:
      </Title>
      <Space h={5} />
      <Badge {...badgeProps} />
    </Box>
  );
};
