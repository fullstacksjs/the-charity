import { ChevronDownIcon } from '@camp/icons';
import { ActionIcon, Box, Collapse } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';

import type { DashboardCardProps } from './DashboardCard';
import { DashboardCard } from './DashboardCard';

export interface CollapsibleDashboardCardProps
  extends Omit<DashboardCardProps, 'left' | 'onHeaderClick'> {
  onToggle?: (newValue: boolean) => void;
  header: React.ReactNode;
  children?: React.ReactNode;
  open?: boolean;
}

export const CollapsibleDashboardCard = ({
  children,
  onToggle,
  open,
  header,
  ...props
}: CollapsibleDashboardCardProps) => {
  const [value, setValue] = useUncontrolled({
    value: open,
    onChange: onToggle,
  });
  return (
    <DashboardCard
      {...props}
      onHeaderClick={() => setValue(!value)}
      right={header}
      left={
        <ActionIcon>
          <Box
            component={ChevronDownIcon}
            sx={theme => ({
              color: theme.colors.fg[6],
              rotate: open ? '-180deg' : undefined,
              transition: '300ms rotate',
              width: 16,
              height: 16,
            })}
          />
        </ActionIcon>
      }
    >
      <Collapse in={value}>{children}</Collapse>
    </DashboardCard>
  );
};
