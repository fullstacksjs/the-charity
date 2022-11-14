import type { MantineColor } from '@mantine/core';
import { Badge as MantineBadge } from '@mantine/core';

export type BadgeStatus = 'COMPLETED' | 'CRITICAL' | 'DRAFT' | 'NORMAL';
export interface BadgeProps {
  children: BadgeStatus;
  status: BadgeStatus;
}

const statusMap: Record<BadgeStatus, MantineColor> = {
  CRITICAL: 'red',
  DRAFT: 'orange',
  NORMAL: 'orange',
  COMPLETED: 'teal',
};

const childrenMap: Record<BadgeStatus, string> = {
  CRITICAL: 'بحرانی',
  DRAFT: 'تکمیل نشده',
  NORMAL: 'عادی',
  COMPLETED: 'تکمیل شده',
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
      {childrenMap[children]}
    </MantineBadge>
  );
};
