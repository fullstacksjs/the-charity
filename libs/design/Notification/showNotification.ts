import type { MantineThemeColors } from '@mantine/core';
import type { NotificationProps } from '@mantine/notifications';
import { showNotification as mantineShowNotification } from '@mantine/notifications';

export type NotificationType = 'failure' | 'success';

interface Props extends NotificationProps {
  type: NotificationType;
}

export const showNotification = ({ type, ...rest }: Props) => {
  const color: keyof MantineThemeColors = type === 'success' ? 'green' : 'red';

  mantineShowNotification({
    ...rest,
    color,
    styles: theme => ({
      root: { backgroundColor: theme.colors[color][0] },
      closeButton: { '&:hover': { backgroundColor: theme.colors[color][1] } },
    }),
  });
};
