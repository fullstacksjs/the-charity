import type { MantineColor } from '@mantine/core';
import { Badge as MantineBadge } from '@mantine/core';

export type BadgeStatus = 'COMPLETED' | 'CRITICAL' | 'DRAFT' | 'NORMAL';
export interface BadgeProps {
  children: string;
  status: BadgeStatus;
}

const statusMap: Record<BadgeStatus, MantineColor> = {
  CRITICAL: 'red',
  DRAFT: 'orange',
  NORMAL: 'teal',
  COMPLETED: 'teal',
};

export const Badge = ({ children, status }: BadgeProps) => {
  return (
    <MantineBadge
      size="lg"
      radius="lg"
      variant="light"
      color={statusMap[status]}
      sx={{ fontWeight: 500 }}
    >
      {children}
    </MantineBadge>
  );
};
