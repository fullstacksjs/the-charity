import type { MantineColor } from '@mantine/core';
import { Badge as MantineBadge } from '@mantine/core';

export type BadgeStatus = 'error' | 'info' | 'neutral' | 'success' | 'warning';

export interface BadgeProps {
  children: string;
  status: BadgeStatus;
}

const statusMap: Record<
  BadgeStatus,
  { color: MantineColor; bg?: MantineColor }
> = {
  error: { color: 'error', bg: 'error.4' },
  warning: { color: 'warning', bg: 'warning.4' },
  success: { color: 'success', bg: 'success.4' },
  neutral: { color: 'secondary', bg: 'bg.4' },
  info: { color: 'info', bg: 'info.4' },
};

export const Badge = ({ children, status = 'neutral' }: BadgeProps) => {
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
