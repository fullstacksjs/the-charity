import type { MantineColor } from '@mantine/core';

export type BadgeStatus = 'COMPLETED' | 'CRITICAL' | 'DRAFT' | 'NORMAL';

export const BadgeChildrenMap: Record<BadgeStatus, string> = {
  CRITICAL: 'بحرانی',
  DRAFT: 'تکمیل نشده',
  NORMAL: 'عادی',
  COMPLETED: 'تکمیل شده',
};

export const BadgeStatusMap: Record<BadgeStatus, MantineColor> = {
  CRITICAL: 'red',
  DRAFT: 'orange',
  NORMAL: 'orange',
  COMPLETED: 'teal',
};
