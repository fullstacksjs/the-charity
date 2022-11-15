import { Badge as MantineBadge } from '@mantine/core';

import type { BadgeStatus } from './BadgeStatusMap';
import { BadgeChildrenMap, BadgeStatusMap } from './BadgeStatusMap';

export interface BadgeProps {
  children: BadgeStatus;
  status: BadgeStatus;
}

export const Badge = ({ children, status }: BadgeProps) => {
  return (
    <MantineBadge
      size="lg"
      radius="lg"
      variant="light"
      color={BadgeStatusMap[status]}
      sx={{ fontWeight: 500 }}
    >
      {BadgeChildrenMap[children]}
    </MantineBadge>
  );
};
