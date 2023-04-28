import type { MantineColor } from '@mantine/core';
import { Badge as MantineBadge } from '@mantine/core';

export type BadgeStatus = 'error' | 'success' | 'warning';

export interface BadgeProps {
  children: string;
  status: BadgeStatus;
}

const statusMap: Record<BadgeStatus, MantineColor> = {
  error: 'red',
  warning: 'orange',
  success: 'teal',
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
