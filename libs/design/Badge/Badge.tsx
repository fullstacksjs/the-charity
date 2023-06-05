import type { MantineColor } from '@mantine/core';
import { Badge as MantineBadge } from '@mantine/core';

export type BadgeStatus = 'disabled' | 'error' | 'success' | 'warning';

export interface BadgeProps {
  children: string;
  status: BadgeStatus;
}

const statusMap: Record<
  BadgeStatus,
  { color: MantineColor; bg?: MantineColor }
> = {
  error: { color: 'red' },
  warning: { color: 'orange' },
  success: { color: 'teal' },
  disabled: { color: 'gray', bg: 'gray.1' },
};

export const Badge = ({ children, status }: BadgeProps) => {
  return (
    <MantineBadge
      size="lg"
      radius="lg"
      variant="light"
      {...statusMap[status]}
      sx={{ fontWeight: 500 }}
    >
      {children}
    </MantineBadge>
  );
};
