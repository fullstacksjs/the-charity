import type { NotificationProps } from '@mantine/notifications';
import { showNotification as mantineShowNotification } from '@mantine/notifications';

interface Props extends NotificationProps {
  type: 'failure' | 'success';
}

export const showNotification = ({ type, ...rest }: Props) => {
  mantineShowNotification({
    ...rest,
    color: type === 'success' ? 'green' : 'red',
  });
};
