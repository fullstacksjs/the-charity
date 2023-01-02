import type { NotificationProps } from '@mantine/notifications';
import { showNotification as mantineShowNotification } from '@mantine/notifications';

interface Props extends NotificationProps {
  type: 'failure' | 'success';
}

// this needs refactoring
export const showNotification = ({ type, ...rest }: Props) => {
  mantineShowNotification({
    ...rest,
    color: type === 'success' ? 'green' : 'red',
    styles: theme => {
      const { red, green } = theme.colors;
      return {
        root: {
          backgroundColor: type === 'success' ? green[0] : red[0],
        },
        closeButton: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '&:hover': {
            backgroundColor: type === 'success' ? green[1] : red[1],
          },
        },
      };
    },
  });
};
