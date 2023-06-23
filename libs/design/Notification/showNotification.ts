import type { MantineThemeColors } from '@mantine/core';
import type { NotificationProps } from '@mantine/notifications';
import { showNotification as mantineShowNotification } from '@mantine/notifications';

export type NotificationType = 'failure' | 'success';

interface Props extends NotificationProps {
  type: NotificationType;
}

const colorMap: Record<NotificationType, keyof MantineThemeColors> = {
  failure: 'red',
  success: 'green',
};

export const showNotification = ({ type, ...rest }: Props) => {
  const color = colorMap[type];

  mantineShowNotification({
    ...rest,
    color,
    'styles': theme => ({
      root: { backgroundColor: theme.colors[color][0] },
      closeButton: { '&:hover': { backgroundColor: theme.colors[color][1] } },
    }),
    // @ts-expect-error data attributes
    'data-notification-type': type,
  });
};
